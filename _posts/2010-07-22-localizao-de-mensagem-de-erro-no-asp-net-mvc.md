---
layout: post
title: Localização de mensagem de erro no ASP.NET MVC
categories:
- Desenvolvimento
- asp.net
- asp.net mvc
comments: true
status: publish
type: post
published: true
alias: /localizao-de-mensagem-de-erro-no-asp-net-mvc/index.html
date: 2010-07-22
---
Sabe quando você preenche uma data inválida em uma página usando o ASP.NET MVC e o erro vem em inglês assim:

![Erro em inglês](/images/2010/07/ErroIngles_thumb.png){: .aligncenter}

Isso acontece porque o DefaultModelBinder do MVC não conseguiu converter essa data, no caso acima, é óbvio porque não existe um mês 15. A questão é, como traduzir essa mensagem?

Um jeito que achei foi adicionando uma pasta App_GlobalResources e dentro dessa pasta adicionar um arquivo de resources, que no caso, chamei de CustomMvcResources.resx.

![Arquivo de Resources ](/images/2010/07/ArquivoResources.png){: .aligncenter}

Nesse arquivo de resources adicione a seguinte linha:

![Item do Resource ](/images/2010/07/ItemResource.png){: .aligncenter}

No global.asax altere o método Application_Start para que fique assim:

{% highlight csharp %}
protected void Application_Start()
{
    AreaRegistration.RegisterAllAreas();
    DefaultModelBinder.ResourceClassKey = "CustomMvcResources";
    RegisterRoutes(RouteTable.Routes);
}
{% endhighlight %}

O importante é que o valor informado à propriedade ResourceClassKey tenha o nome do arquivo de resource criado.

Agora o erro será apresentado do jeito que foi configurado no arquivo de resources.

![Erro traduzido ](/images/2010/07/ErroTraduzido.png){: .aligncenter}
