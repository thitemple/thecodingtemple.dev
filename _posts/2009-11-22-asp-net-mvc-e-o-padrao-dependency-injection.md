---
layout: post
title: Asp.Net MVC e o padrão Dependency Injection
categories: [Desenvolvimento, asp.net mvc, dependency injection]
comments: true
status: publish
type: post
published: true
date: 2009-11-22
alias: /asp-net-mvc-e-o-padrao-dependency-injection/index.html
---
O padrão Dependency Injection (DI) é  utilizado para diminuir o acoplamento entre as partes de um sistema.

Vou demonstrar em duas partes como fazer Dependency Injection, na primeira parte vou fazer a injeção de forma manual e depois vou utilizar o framework Structuremap para isso.

Existem algumas razões para se fazer isso, mas na minha opinião as principais são: facilitar a criação de testes unitários e a possibilidade de se estender uma aplicação sem comprometer as partes que dependem do funcionamento daquela aplicação.

Imagine o seguinte cenário:

![Cenário de dependência](/images/2009/11/Cenario.jpg){:. aligncenter}

No caso acima, temos uma classe ClienteController (já pensando no MVC), que usa/depende uma classe ClienteService, que é a classe responsável por todas as regras de negócio relativas a Cliente mas que usa/depende da classe ClienteRepository, que é a classe responsável por todas as atividades no banco de dados relacionadas a Cliente.

Uma implementação das classes ClienteController e ClienteService poderia ser feita assim:

{% highlight csharp %}
public class ClienteController : Controller
{
    public ActionResult Novo(Cliente cliente)
    {
        var service = new ClienteService();
        service.Salvar(cliente);
        return View();
    }
}

public class ClienteService
{
    public void Salvar(Cliente c)
    {
        if(ValidarCliente(c))
        {
            var rep = new ClienteRepository();
            rep.Salvar(c);
        }
    }

    private bool ValidarCliente(Cliente cliente)
    {
        return true;
    }
}
{% endhighlight %}

Veja na linha 5 que a classe ClienteController faz uma referência direta à classe ClienteService e na linha 17 a classe ClienteService faz uma referência direta à classe ClienteRepository. Isso não seria um problema se a) você não estiver considerando fazer testes unitários e b) se o seu sistema for um sistema pequeno com poucas classes e que não vá lhe gerar muitos problemas de manutenção.

No caso do teste unitário isso é um problema porque assim que for criado um teste para o método Salvar na classe ClienteController esse teste irá testar toda a sequência de atividades, inclusive as classes de Service e Repository.

Outro problema é o seguinte, imagine que esse é um sistema que você distribui para os seus clientes e que você tem uma outra classe ContasPagarService, a regra de negócio de contas a pagar varia de acordo com cada cliente que você tem. Se o código estivesse com o nível de dependência acima, talvez a única forma (ou a mais comum) de se resolver essa diferença seria implementando uma série de ifs dentro do código da classe de Service.

Como resolver esse problema então? 1o temos que começar quebrando as dependências criando interfaces.  Assim temos:

{% highlight csharp %}
public interface IClienteService
{
    void Salvar(Cliente c);
}
{% endhighlight %}

Depois disso, precisamos alterar as nossas classes para implementar as interfaces:

{% highlight csharp %}
public class ClienteRepository : IClienteRepository
public class ClienteService : IClienteService
{% endhighlight %}

Agora já estamos prontos pra fazer um pouco de Dependency Injection.

Vamos começar reconhecendo as dependências em nossas classes, sabemos que a classe Controller depende da classe Service que por sua vez depende da classe Repository. Vamos trocar essas dependências para as interfaces que criamos e teremos a classe ClienteController assim:

{% highlight csharp %}
public class ClienteController : Controller
{
    private IClienteService _service;
    public ClienteController(IClienteService service)
    {
        _service = service;
    }

    public ActionResult Novo(Cliente cliente)
    {
        _service.Salvar(cliente);
        return View();
    }
}
{% endhighlight %}

Veja que agora a classe ClienteController está esperando qualquer objeto que implemente a interface IClienteService e não temos mais uma dependência direta para a classe ClienteService.

Agora veja como ficou a classe ClienteService:

{% highlight csharp %}
public class ClienteService : IClienteService
{
    private IClienteRepository _repository;
    public  ClienteService(IClienteRepository repository)
    {
        _repository = repository;
    }

    public void Salvar(Cliente c)
    {
        if(ValidarCliente(c))
        {
            _repository.Salvar(c);
        }
    }

    private bool ValidarCliente(Cliente cliente)
    {
        return true;
    }
}
{% endhighlight %}

A classe ClienteService ficou muito parecida com a classe ClienteController. Agora ela espera um objeto que implemente a interface IClienteRepository no construtor e depois usa esse objeto nas chamadas do repository.

Agora só falta ligar os pontos. Como dizer para as classes que ClienteController e ClienteService qual objeto elas realmente vão usar.

Para isso vamos utilizar um outro padrão chamado Abstract Factory para centralizar todas as nossas dependências em uma única classe. A nossa classe de abstract factory ficou assim:

{% highlight csharp %}
public class MeuProjetoFactory
{
    public static IClienteService CriaClienteService()
    {
        return  new ClienteService(CriaClienteRepository());
    }
    public  static IClienteRepository CriaClienteRepository()
    {
        return  new ClienteRepository();
    }
}
{% endhighlight %}

Como vemos, nessa classe sabemos como criar um objeto de cada interface que precisamos. Qual a vantagem disso? Todas as dependências estão centralizadas em único local, muito mais fácil para dar manutenção, não é?

Agora na nossa classe de Controller, precisamos fazer mais uma modificação:

{% highlight csharp %}
public class ClienteController : Controller
{
    private IClienteService _service;

    public ClienteController(): this(MeuProjetoFactory.CriaClienteService())
    {

    }

    public ClienteController(IClienteService service)
    {
        _service = service;
    }

    public ActionResult Novo(Cliente cliente)
    {
        _service.Salvar(cliente);
        return View();
    }
}
{% endhighlight %}

Pronto, agora toda vez que uma classe ClienteController for criada, se no momento da criação não for informado um IClienteService e for utilizado o construtor padrão, automaticamente iremos buscar da nossa classe de factory.

Isso deve ser feito dessa forma porque o Asp.Net MVC por padrão não consegue criar controllers sem ser pelo construtor padrão.

Pronto, agora já temos um sistema com as nossas camadas bem separadas e utilizando o padrão Dependency Injection.

Agora se quisermos testar a nossa classe ClienteController é só passar uma classe de mock que implemente a interface IClienteService para o construtor.

E no caso que falei sobre as regras de negócio diferentes no contas a pagar? Bom, uma das soluções para isso nesse caso seria ter várias classes que implementassem IContasPagarService por exemplo, ContasPagarCliente1Service, ContasPagarClienteXptoService e assim por diante. Então, dentro do abstract factory, poderíamos ter um método assim:

{% highlight csharp %}
public static IContasPagarService CriaContasPagarService()
{
    switch (ConfigurationManager.AppSettings["Cliente"])
    {
       case "Cliente1":
            return new ContasPagarCliente1Service();
       case "ClienteXpto":
            return new ContasPagarClienteXptoService();
       default:
            return new ContasPagarService();
    }
}
{% endhighlight %}

De novo, estamos centralizando tudo na classe de abstract factory e utilizando o web.config para configurarmos qual classe de negócio utilizaremos. Um código bem mais simples e limpo. E ainda, a cada vez que tivermos que mudar uma regra de negócio de um cliente específico, não precisamos nos preocupar se afetamos ou não a regra de negócio de outro.

No próximo post eu vou falar sobre como fazer Dependency Injection de uma forma ainda mais fácil que essa. Espero que nesse ponto pelo menos a teoria esteja clara.
