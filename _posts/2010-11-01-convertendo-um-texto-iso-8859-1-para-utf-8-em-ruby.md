---
layout: post
title: Convertendo um texto ISO-8859-1 para UTF-8 em Ruby
categories:
- Desenvolvimento
- encoding
- ruby
status: publish
type: post
published: true
comments: true
date: 2010-11-01
---
No Ruby 1.9 uma coisa que você pode ter certeza é que terá dor de cabeça é com Encoding. Faça uma busca rápida no google por "ruby 1.9 encoding" e você vai entender do que eu estou falando.

Hoje eu tive que converter um conteúdo que estava em iso-8859-1 para utf-8 e recebi o seguinte erro:

incompatible character encodings: UTF-8 and ISO-8859-1

Para resolver isso eu usei:

{% highlight ruby %}
"meu texto".encode("UTF-8", undef: :replace, invalid: :replace)
{% endhighlight %}

E o problema foi resolvido. Segundo a <a href="http://ruby-doc.org/ruby-1.9/classes/String.html#M000553" target="_blank">documentação do Ruby 1.9</a> o parâmetro :invalid com o valor :replace, faz com que o método encode substitua o carácter inválido. O padrão é gerar uma exceção.
