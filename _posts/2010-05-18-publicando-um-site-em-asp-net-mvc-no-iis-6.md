---
layout: post
title: Publicando um site em ASP.NET MVC no IIS 6
categories:
- Desenvolvimento
- asp.net mvc
- iis
comments: true
status: publish
type: post
published: true
date: 2010-05-18
alias: /publicando-um-site-em-asp-net-mvc-no-iis-6/index.html
---
Publicar um site feito usando o ASP.NET MVC no servidor IIS não é tão simples como apenas copiar os arquivos, algumas configurações são necessárias:

1) Dentro do IIS abra as propriedades no seu site e na aba Home Directory, clique no botão Configuration. Dentro de Application Extensions, selecione a extensão .aspx e clique em Edit. Copie o conteúdo da caixa Executable como na figura abaixo e clique em Cancel.

![Extension ](/images/2010/05/Extension.png){: .aligncenter}

2) Clique no botão INSERT e cole o texto na caixa Executable e desmarque a opção Verify that file exists como na figura abaixo.

![Adicionar Extension ](/images/2010/05/Adicionar%20Extension.png){: .aligncenter}

3) Por último temos que "adicionar uma extensão" para as urls já que o IIS 6 exite que exista uma extensão. O jeito mais fácil de fazer é isso dentro do Global.asax.cs. Altere a rota padrão e suas outras rotas para que fiquem assim:

{% highlight csharp %}
public static void RegisterRoutes(RouteCollection routes)
{
    routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
    routes.MapRoute("Default", "{controller}.mvc/{action}/{id}",
        new {action = "Index", id = ""});
}
{% endhighlight %}

Veja que depois do controller adicionei a extensão .mvc, agora todas as rotas funcionarão com o caminho /controler.mvc/action. É importante que para isso não existam urls fixas em suas páginas, apenas urls criadas usando os html helpers.
