---
layout: post
title: Nova sintaxe para fazer Html Encoding com Asp.Net 4 e Asp.Net MVC 2
categories:
- Desenvolvimento
- asp.net mvc
- encoding
comments: true
status: publish
type: post
published: true
date: 2010-04-19
alias: /nova-sintaxe-para-fazer-html-encoding-com-asp-net-4-e-asp-net-mvc-2/index.html
---
Html Encoding faz parte de todo desenvolvimento web, principalmente para previnir ataques de <a href="http://imasters.uol.com.br/artigo/9879/seguranca/xss_cross_site_scripting/" target="_blank">Cross Site Scripting (XSS)</a> - quem não sabe o que é, recomendo ler esse artigo.

Até a versão 3.5 no Asp.Net para fazer Html Enconding tinhamos que fazer algo assim:

{% highlight html %}
<%= Server.HtmlEncode(algum_valor) %>
{% endhighlight %}

E no Asp.Net MVC algo assim:

{% highlight html %}
<%= Html.Encode(model.Valor) %>
{% endhighlight %}

Isso sempre funcionou, mas agora existe uma nova possibilidade, que na minha opinião torna isso ainda mais simples:

{% highlight html %}
<%: mode.Valor %>
{% endhighlight %}

É só trocar o sinal de = pelo sinal : e automaticamente o encoding será realizado.

E isso vale também para os outros Html helpers do MVC, por exemplo:

{% highlight html %}
<%: Html.TexboxFor(m => m.Valor) %>
{% endhighlight %}

No código acima, o texto dentro do textbox já sairá codificado.
