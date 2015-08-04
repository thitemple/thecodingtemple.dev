---
layout: post
title: Validação com Asp.Net MVC2
categories:
- Desenvolvimento
- asp.net mvc
comments: true
status: publish
type: post
published: true
date: 2010-02-07
alias: /validacao-com-asp-net-mvc2/index.html
---
OK, eu mal terminei meu primeiro projeto real com o Asp.Net MVC e o Asp.Net MVC já está quase na segunda versão que deve sair em março, junto com o Visual Studio 2010 e o .Net 4.

De qualquer forma, já é hora de começar a se atualizar e estava eu lendo e testando o Asp.Net MVC 2 e uma das coisas que eu mais gostei é a forma de validação usando o namespace System.ComponentModel.DataAnnotations que agora já faz parte do .Net Framework. Mas melhor ainda é ver como a validação por javascript ficou simples, e muito importante, seguindo os principios do DRY.

Eu estou testando o MVC2 no Visual Studio 2010 beta2, mas não é obrigatório fazer dessa forma, é possível utilizar o Visual Studio 2008 também. A partir do momento que o MVC2 está instalado é possível criar um projeto do tipo Asp.Net MVC2 Web Application.

Criado o projeto a primeira coisa que vamos fazer é criar uma classe de model:

{% highlight csharp %}
public class Cliente
{
    public int IdCliente { get; set; }
    public string Nome { get; set; }
    public int? Idade{ get; set; }
    public string Email { get; set; }
}
{% endhighlight %}

Depois disso precisamos definir o que será validado. Vamos definir isso direto na classe do model. Para isso primeiro temos que dizer que nossa classe está usando o namespace System.ComponentModel.DataAnnotations.

{% highlight csharp %}
public class Cliente
{
    public int IdCliente { get; set; }
    [Required(ErrorMessage = "Preencha o nome")]
    public string Nome { get; set; }
    [Required(ErrorMessage = "Preencha a idade")]
    [Range(0, 150, ErrorMessage="Idade inválida")]
    public int? Idade { get; set; }
    [Required(ErrorMessage = "Preencha o email")]
    [RegularExpression(@"^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$", ErrorMessage = "Email inválido")]
    public string Email { get; set; }
}
{% endhighlight %}

Como vimos, basta decorar os métodos com os atributos de validação e colocar as mensagens de erro. É possível também, ao invés de colocar as mensagens de erro diretamente, colocar uma referência para um Resource e, portanto, utilizar a internacionalização.

Agora vamos criar uma classe de controller com o método de Create.

{% highlight csharp %}
public class ClienteController : Controller
{
    public ActionResult Create()
    {
        return View(new Cliente());
    }

    [HttpPost]
    public ActionResult Create(Cliente novoCliente)
    {
        if (ModelState.IsValid)
        {
            // Salvar no Banco de Dados
            return Redirect("/");
        }

        return View(novoCliente);
    }
}
{% endhighlight %}

Dois métodos create, um para exibir o formulário vazio e outro para processar a criação do nosso cliente. Veja que agora temos um atributo HttpPost para decorar os métodos que só serão acessados via post, não é mais feito usando AcceptVerbs(HttpVerbs.Post).

De resto, esse método funciona como no MVC1, ao submeter o formulário o MVC faz o binding dos campos e cria o objeto Cliente e também executa a validação. Se não for encontrado nenhum erro, podemos salvar no banco de dados, caso tenha algum erro o formulário é apresentado novamente com os campos já preenchidos, por isso passamos o objeto criado de volta ao formulário.

Vamos criar a View como fazemos normalmente no MVC. Botão direito dentro do método Create -&gt; Add View, selecionar Create a strongly-typed view, a nossa classe Cliente e no View Content: a opção Create:

![Add View](/images/2010/02/AddView.png){: .aligncenter}

Deve ser gerado uma View como a abaixo:

![View Create Cliente](/images/2010/02/View.png){: .aligncenter}

Agora, ao acessar a página de criação de cliente e tentar criar um novo cliente sem preencher nada veremos o seguinte:

![Criação do Cliente](/images/2010/02/Validacao-Criacao-do-Cliente.png){: .aligncenter}

Fácil não? Agora só falta fazer a validação por javascript. Existe duas formas de fazer isso, usando a biblioteca de ajax da Microsoft ou usando jQuery. No fim, não muda muito, só as referências que são adicionadas  na página. Vou fazer aqui usando o jQuery. Vamos alterar a view de criação de cliente para que fique assim:

![View com JavaScript](/images/2010/02/View-com-Javascript.png){: .aligncenter}

Pronto. Isso é tudo que precisa ser feito para que a validação funcione com javascript, adicionar as referências às bibliotecas do jQuery e à biblioteca MicrosoftMvcJQueryValidation.js e por fim, habilitar a validação no cliente chamando o método Html.EnableClientValidation.

É possível também criar uma validação customizada, mas eu vou mostrar isso num próximo post.

Existem outras mudanças na forma de validação do MVC2 como, por exemplo, agora é possível utilizar o Enterprise Library Validation Block para fazer a validação. Além disso, o modelo de validação também mudou, mas isso também vale um outro post.
