---
layout: post
title: Dependency Injection com StructureMap e Asp.Net MVC
categories:
- Desenvolvimento
- asp.net mvc
- dependency injection
- structuremap
comments: true
status: publish
type: post
published: true
date: 2009-12-09
alias: /dependency-injection-com-structuremap-e-asp-net-mvc/index.html
---
Ok, então você começou a usar o Dependency Injection e viu que dava <a target="_self" href="/blog/2009/11/22/asp-net-mvc-e-o-padrao-dependency-injection/">muito trabalho</a>. A boa notícia é que existem vários frameworks por aí que ajudam a diminuir o trabalho e ainda a ter um código muito mais limpo.<br />
<br />
Particularmente, eu gosto muito do <a target="_blank" href="http://structuremap.sourceforge.net/Default.htm">StructureMap</a>, principalmente porque ele nos permite utilizar o "Convention over Configuration". Vamos ver jajá como isso funciona.<br />
<br />
Bom, dando sequência no <a href="/blog/2009/11/22/asp-net-mvc-e-o-padrao-dependency-injection/">post anterior</a>, vamos modificar aquele código para utilizar o StructureMap. A primeira coisa a fazer obviamente é baixar o framework e adicionar uma referência para o assembly StructureMap.dll.<br />
<br />
O próximo passo é configurar o StructureMap, para isso vamos criar uma classe:<br />

{% highlight csharp %}
public class StructureMapConfiguration
{
    public static void Configure()
    {
        ObjectFactory.Initialize(InitializeStructureMap);
    }

    private static void InitializeStructureMap(IInitializationExpression x)
    {
        x.Scan(y =>
        {
            y.Assembly("MvcApplication1");
            y.With<defaultconventionscanner>();
        });
    }
}
{% endhighlight %}
<br />
O que fazemos nesse código e dizer para o ScrutureMap buscar no Assembly MvcApplication1 usando a convenção padrão. E o que é a convenção padrão? Geralmente quando criamos uma interface, como no nosso caso criamos a interface IClienteService criamos uma classe com a implementação padrão da interface chamada ClienteService. Essa é a convenção padrão, dessa forma, toda vez que precisarmos de um objeto que implemente a interface IClienteService o StructureMap buscará nos assemblies informados para ele, a classe de mesmo nome só que sem o I. Prático não? Nada de configurar XMLs e afins (embora o StructureMap permita isso).<br />
<br />
Outra coisa que precisamos fazer é criar uma classe que será responsável pela criação dos nosso controllers. Isso é necessário porque por padrão o Asp.Net MVC cria os controllers apenas com o construtor padrão, sem parâmetros. Nossa classe fica assim:<br />

{% highlight csharp %}
public class StructureMapControllerFactory : DefaultControllerFactory
{
    protected override IController GetControllerInstance(Type controllerType)
    {
        if (controllerType == null) return null;
        try
        {
            return ObjectFactory.GetInstance(controllerType) as Controller;

        }
        catch (StructureMapException)
        {

            System.Diagnostics.Debug.WriteLine(ObjectFactory.WhatDoIHave());
            throw;
        }
    }
}
{% endhighlight %}
<br />
Pronto, agora vamos alterar a inicialização da aplicação no Global.asax, que deve ficar assim:<br />

{% highlight csharp %}
protected void Application_Start()
{
    RegisterRoutes(RouteTable.Routes);
    StructureMapConfiguration.Configure();
    ControllerBuilder.Current.SetControllerFactory(new
        StructureMapControllerFactory());
}
{% endhighlight %}
<br />
Uma última coisa, no nosso controller ClienteController tínhamos dois construtores, agora vamos deixar apenas um com o parâmetro necessário para funcionar:<br />

{% highlight csharp %}
public IClienteService _service;
public ClienteController(IClienteService service)
{
    _service = service;
}
{% endhighlight %}
<br />
Pronto, isso é tudo o que é necessário. Mas se você quiser utilizar um XML para configurar suas classes, é possível. Dentro da classe de configuração, logo abaixo do método Scan, adicione:<br />

{% highlight csharp %}
x.AddConfigurationFromXmlFile("structuremap.config.xml");
{% endhighlight %}
<br />
Isso fará que com que o StructureMap procure na raiz do site por um arquivo chamado structuremap.config.xml. Segue um exemplo de como deve ser esse arquivo:<br />
{% highlight xml %}
<structuremap mementostyle="Attribute">
  <defaultinstance>
    PluginType="MinhaLibrary.Business.IClasseNegocio, MinhaLibrary.Business"
    PluggedType="MinhaLibrary.Business.ImplementacaoClasseNegocio, MinhaLibrary.Business"
    Scope="Singleton" />
  </defaultinstance>
</structuremap>
{% endhighlight %}
<br />
É isso! E viva o Convention over Configuration!!!!
