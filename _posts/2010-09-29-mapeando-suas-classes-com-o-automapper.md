---
layout: post
title: Mapeando suas classes com o AutoMapper
categories:
- Desenvolvimento
- automapper
comments: true
status: publish
type: post
published: true
alias:
date: 2010-09-29
---
Um framework que eu tenho usado com frequência ultimamente é o <a href="http://automapper.codeplex.com/" target="_blank">AutoMapper</a>, e pra quem não conhece ele, bom, ele faz.. mapeamento de objetos. Iupi!

Existem vários cenários onde isso é feito, no meu caso, principalmente, eu tenho usado para mapear estruturas de web services que eu consumo para objetos dentro da minha aplicação. Mas outro cenário comum é, quando usamos o padrão ViewModel, mapear objetos de negócio para a ViewModel.

A motivação para o uso do AutoMapper é manter as responsabilidades separadas, assim, temos um framework só para fazer isso e não precisamos colocar esse mapeamento no meio das nossas classes.

O uso do AutoMapper é bem simples, apenas um assembly que deve ser referenciado no projeto, depois disso devemos criar/definir os mapeamentos.

Vamos imaginar um cenário onde eu tenho um Web Service e quero mapear uma classe PedidoWs para a minha classe Pedido e para manter simples, digamos que as propriedades tem os mesmos nomes. Veja o diagrama abaixo:

![Classes ](/images/2010/09/Classes.png){: .aligncenter}

Para fazer um mapeamento num cenário desses é bem simples, criamos o mapeamento assim:

{% highlight csharp %}
Mapper.CreateMap<pedidoWs, Pedido>();
{% endhighlight %}

E depois para usarmos o mapeamento basta executar:

{% highlight csharp %}
Mapper.Map<pedidoWs, Pedido>(meuObjetoDoTipoPedidoWs);
{% endhighlight %}

Esse é o padrão que vamos usar para mapear todos os objetos independentemente de como o mapeamento for criado.

Agora imagine que existam propriedades iguais, mas com nomes diferentes. Por exemplo, imagine que no PedidoWs existe uma propriedade chamada Cliente_ID ao invés de ClienteId, o mapeamento ficaria assim:

{% highlight csharp %}
Mapper.CreateMap<pedidoWs, Pedido>()
     .ForMember(c => c.ClienteId, opt => opt.MapFrom(x => x.Cliente_ID));
{% endhighlight %}

Veja, todos os outros atributos serão mapeados normalmente, apenas o ClienteId que foi declarado de forma explícita de onde vem.

Um outro caso importante é quando temos que fazer alguma conversão. Por exemplo, digamos que no nosso caso a data vem do web service em formato de string e temos que converter para DateTime. Faríamos assim:

{% highlight csharp %}
Mapper.CreateMap<pedidoWs, Pedido>()
     .ForMember(c => c.DataPedido, opt => opt.ResolveUsing<dateTimeResolver>()
         .FromMember(x => x.DataPedido);
{% endhighlight %}

Para usar o ResolveUsing precisamos definir a classe DateTimeResover e eu fiz dessa forma:

{% highlight csharp %}
public class DateTimeResolver : ValueResolver<string, DateTime>
{
    protected override DateTime ResolveCore(string source)
    {
        return DateTime.Parse(source);
    }
}
{% endhighlight %}

Para finalizar, vale dizer que essa configuração dos mapeamentos pode ser demorada, então não é uma boa idéia executar as configurações toda a vez. O que eu faço, já que uso isso para a web a maior parte do tempo, é no meu Application_Start dentro do global.asax, executar essas configurações, assim elas são feitas apenas uma vez.

Existem várias outras opções de configuração para o AutoMapper e no site deles tem vários exemplos, vale a pena conferir. Aqui, foi só pra dar um gostinho.
