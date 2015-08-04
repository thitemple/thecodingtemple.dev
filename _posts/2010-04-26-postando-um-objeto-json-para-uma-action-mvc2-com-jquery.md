---
layout: post
title: Postando um objeto JSON para uma Action MVC2 com jQuery
categories:
- Desenvolvimento
- asp.net mvc
- jquery
comments: true
status: publish
type: post
published: true
date: 2010-04-26
alias: /postando-um-objeto-json-para-uma-action-mvc2-com-jquery/index.html
---
Há um tempo atrás eu postei <a href="/blog/2009/12/16/postando-um-objeto-json-para-uma-action-mvc-com-jquery/" target="_self">uma versão desse artigo</a> utilizando o Asp.Net MVC1.Agora, o MVC2 está no ar e com isso ficou mais fácil postar um objeto Json para uma action.

Para começar, baixe o <a href="http://aspnet.codeplex.com/releases/view/41742#DownloadId=110348" target="_blank">ASP.NET MVC2 Futures</a> e adicione uma referência no seu projeto para Microsoft.Web.Mvc.dll e no Global.asax.cs registre a chamada para o provedor do json, dessa forma:

{% highlight csharp %}
protected void Application_Start()
{
    AreaRegistration.RegisterAllAreas();
    RegisterRoutes(RouteTable.Routes);
    ValueProviderFactories.Factories.Add(new JsonValueProviderFactory());
}
{% endhighlight %}

Do lado do Asp.Net é só isso. Faça sua Action normalmente esperando um objeto, no meu caso eu segui o exemplo anterior com o caso do cliente:

Fiz uma classe Cliente

{% highlight csharp %}
public class Cliente
{
    public string Nome { get; set; }
    public string Cnpj { get; set; }
}
{% endhighlight %}

E minha action ficou assim:

{% highlight csharp %}
public JsonResult Criar(Cliente cliente)
{
    return Json(cliente);
}
{% endhighlight %}

Obviamente, essa não é uma action muito criativa, simplesmente está recebendo um objeto da classe Cliente e retornando como Json, mas aqui poderia ser feito qualquer coisa, não é necessário retornar um objeto json.

Por fim, para enviar um objeto json pelo jquery precisamos de um plugin, já que o jquery não faz isso nativamente. Eu usei o <a href="http://code.google.com/p/jquery-json/" target="_blank">jquery-json</a>, que tem um método toJSON para converter um objeto javascript para json.

Veja como ficou meu script:

![Json to MVC ](/images/2010/04/json_to_mvc.png){: .aligncenter}

Mas uma vez, um script sem muito segredo, estou pegando os valores de caixas de texto e montando meu objeto, depois convertendo a variável cliente para um objeto json armazenado na variável encoded e passando essa variável na chamada ajax para a action.
