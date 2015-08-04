---
layout: post
title: Construtores de Arrays do JavaScript
categories:
- Desenvolvimento
- JavaScript
comments: true
status: publish
type: post
published: true
alias: /construtores-de-arrays-do-javascript/index.html
description: Os construtores de Arrays do JavaScript podem ter comportamentos um pouco inesperados, por isso procuramos usar os construtores de Arrays implícitos.
date: 2013-02-18
---
Bom, o ano começou, lá se foi o carnaval e agora sim podemos dizer que o ano começou. Pelo menos aqui no blog.

Bora falar um pouco mais de JavaScript e o que existe de estranho com os <strong>construtores de Arrays do JavaScript</strong>.
<div style="margin: 5px 0px; border: #f48432 1px dashed; padding: 5px;">

<strong>Sofrendo menos com JavaScript</strong>
Esse post faz parte de uma série, confira os outros já feitos:
<ol>
	<li><a href="/blog/2012/10/25/declarao-de-variveis-com-javascript/">Declaração de variáveis com JavaScript</a></li>
	<li><a href="/blog/2012/11/05/elevao-em-javascript/">Elevação em JavaScript</a></li>
	<li><a href="/blog/2012/11/12/converter-numeros-em-javascript-e-uma-droga/">Converter números em JavaScript é uma droga</a></li>
	<li><a href="/blog/2012/11/21/javascript-ponto-virgula/">JavaScript e o problema com o ponto e vírgula</a></li>
	<li><a href="/blog/2012/11/28/escopo-no-javascript/">Escopo no JavaScript: esse this não é daqui</a></li>
	<li><a href="/blog/2012/12/05/funes-de-callback-no-javascript/">Funções de callback</a></li>
	<li><a href="/blog/2012/12/14/tratamento-de-excecoes-em-javascript/">Tratamento de exceções em JavaScript</a></li>
	<li>Construtores de Arrays</li>
	<li><a href="/blog/2013/03/11/loops-for-in-no-javascript/">Loops for in</a></li>
</ol>
</div>
<h2>Construtores de Arrays do JavaScript</h2>
No JavaScript podemos construir um Array da seguinte forma:

{% highlight javascript %}
var a = new Array("texto");
console.log(a.length); // 1
console.log(a[0]); // texto
{% endhighlight %}

Quando passamos uma string ou outro tipo de objeto para o construtor de uma Array, o JavaScript cria uma array com um item e atribui o valor passado para esse item.

Agora vamos dar uma olhada em outro exemplo:

{% highlight javascript %}
var a = new Array(3);
console.log(a.length) // 3
console.log(a[0]); // undefined
{% endhighlight %}

Quando passamos um número inteiro para o construtor ele cria um array com o número de elementos informados e, todos os elementos criados não tem um valor atribuído a eles, por isso o undefined.

Um terceiro exemplo:

{% highlight javascript %}
var a = new Array(3.2); // RangeError: invalid array length
{% endhighlight %}

Quando passamos um número decimal para o construtor, ele obviamente não cria um array decimal, mas também não cria um array com um só elemento e com o valor passado, o JavaScript retorna um erro para esse comando.
<h2>Uma prática um pouco melhor</h2>
A melhor forma de criar arrays no JavaScript é usando o construtor implícito dele, por exemplo:

{% highlight javascript %}
var a = ["texto"]; // Cria um elemento e atribui o valor a ele

var b = [1, 2, 3]; // Cria um array com 3 elementos e com os valores 1, 2 e 3
{% endhighlight %}

Um problema simples de resolver esse, não é?
