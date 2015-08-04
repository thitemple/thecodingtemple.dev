---
layout: post
title: Utilizando o Asp.Net MVC junto com Asp.Net WebForms
categories: [Desenvolvimento, asp.net, asp.net mvc]
comments: true
status: publish
type: post
published: true
date: 2009-11-14
alias: /utilizando-o-asp-net-mvc-junto-com-asp-net-webforms/index.html
---
Para aqueles que como eu, gostaram muito da implementação do MVC para o Asp.Net (eu relutei no início, mas tive que ceder, ficou muito bom) e gostariam de começar a usá-lo já, mas não tem nenhum projeto novo pra implementá-lo, existe uma forma de utilizar o Asp.Net MVC junto com os costumeiros Web Forms.

A 1a coisa que você precisa verificar, obviamente, é se o servidor onde roda o seu site suporta o .Net Framework 3.5, já que o Asp.Net MVC precisa dessa versão.

1) Se o projeto foi feito no Visual Studio 2005 ou 2003, abra ele no Visual Studio 2008 e siga o wizard pra converter o projeto para o Visual Studio 2008.

2) Se o seu projeto for uma web application (que tem a pasta bin) pode pular essa etapa, se for um web site é preciso convertê-lo para um web application. Veja como aqui <a href="http://msdn.microsoft.com/en-us/library/aa983476.aspx" target="_blank">http://msdn.microsoft.com/en-us/library/aa983476.aspx</a>.

3) Clique com o botão direito na solução, depois em properties. Na aba Application, verifique se o Target Framework está selecionado para .NET Framework 3.5.

4) Adicione as referências para o projeto <em>System.Web.Mvc</em>, Syst<em>em.Web.Abstractions</em> e <em>System.Web.Routing</em>. Elas estão na aba .NET.

5) Nas suas referências selecione os assemblies que você acabou de adicionar, vá na janela propriedades e na propriedade CopyLocal selecione True.

![Marcando referências para CopyLocal = true](/images/2009/11/Screen-shot-2009-11-14-at-16.10.26.png){: .aligncenter}

6) Se você ainda não tiver, crie um arquivo Global.asax

7) Altere seu arquivo Global.asax para que fique assim:

{% highlight csharp %}
public class Global : System.Web.HttpApplication
{
    protected void Application_Start(object sender, EventArgs e)
    {
        RegisterRoutes(RouteTable.Routes);
    }

    public static void RegisterRoutes(RouteCollection routes)
    {
        routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
        routes.MapRoute("Default", "{controller}/{action}/{id}",
            new {action = "Index", id = ""});
    }
}
{% endhighlight %}

Nesse momento, estamos apenas adicionando uma rota padrão. Veja que a rota padrão não tem um controller padrão, isso para que quando alguém acessar o seu site sem informar nada na url (ex: www.meusite.com.br), ele seja redirecionado para a página default, geralmente a página default.aspx.

8) Ative o UrlRoutingModule no seu web.config.

{% highlight xml %}
<system.web>
  ...
  <httpModules>
    <add name="UrlRoutingModule" type="System.Web.Routing.UrlRoutingModule, System.Web.Routing"/>
  </httpModules>
  ...
</system.web>
{% endhighlight %}

9) Na raiz do seu projeto adicione uma pasta Controllers e outra Views.

10) Para ativar os helpers do MVC, as tags &lt;%= Html.* %&gt;, é preciso adicionar uma tagno web.config.

{% highlight xml %}
<pages>
...
    <namespaces>
        <add namespace="System.Web.Mvc"/>
        <add namespace="System.Web.Mvc.Html"/>
        <add namespace="System.Web.Routing"/>
        <add namespace="System.Linq"/>
        <add namespace="System.Collections.Generic"/>
    </namespaces>
 ...
</pages>
{% endhighlight %}

11) Adicione as configurações abaixo na tag pages e na tag controls para que você consiga usar Views tipadas.

{% highlight xml %}
<system.web>
..
    <pages
        validateRequest="false" pageParserFilterType="System.Web.Mvc.ViewTypeParserFilter,
        System.Web.Mvc, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35"
        pageBaseType="System.Web.Mvc.ViewPage, System.Web.Mvc, Version=1.0.0.0, Culture=neutral,
        PublicKeyToken=31BF3856AD364E35"
        userControlBaseType="System.Web.Mvc.ViewUserControl, System.Web.Mvc, Version=1.0.0.0,
        Culture=neutral, PublicKeyToken=31BF3856AD364E35">

        <controls>
        ...
            <add assembly="System.Web.Mvc, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35"
                namespace="System.Web.Mvc" tagPrefix="mvc" />
        </controls>
    ....
{% endhighlight %}

Pronto, se você adicionar um Controller HomeController na pasta Controllers com uma action Index, por exemplo, e for na pasta Views, criar uma pasta Home, um arquivo Index.aspx e no code behind da página trocar a classe base de System.Web.UI.Page para System.Web.Mvc.ViewPage, já deve funcionar.

Agora se você quiser que os wizards do Visual Studio para o MVC como o Add -&gt; Controller ou Add -&gt; View, é preciso fazer mais uma coisa.

1) Na janela Solution Explorer, clique com o botão direito em Unload Project.

2) Clique com o botão direito no projeto e em Edit Nome-do-Projeto.csproj

3) Dentro do XML que abriu procure a tag

e adicione o item abaixo na frente dos outros:

{603c0e0b-db56-11dc-be95-000d561079b0};

4) Salve o arquivo, clique com o botão direito no projeto e em Reload Project.

Se der um erro "Unable to read the project file", clique em OK e depois faça o Reload Project novamente.
