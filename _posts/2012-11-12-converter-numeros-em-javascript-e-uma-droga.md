---
layout: post
title: Converter números em JavaScript é uma droga
categories:
- Desenvolvimento
- JavaScript
comments: true
status: publish
type: post
published: true
alias: /converter-numeros-em-javascript-e-uma-droga/index.html
description: Uma das partes mais estranhas do JavaScript, veja como converter números em JavaScript usando parseInt, operadores e a função Number.
date: 2012-11-12
---
Ok, essa é eu confesso, converter números em JavaScript é uma droga. Não tem nada de bom, nada de lógico (pelo menos, não pra minha mente limitada).

![Converter números em JavaScript](/images/2012/11/article-new_ehow_images_a08_5u_hc_use-javascript-display-prime-factors-800x800.jpg){: .aligncenter}

O JavaScript tenta ajudar adivinhando o que a gente quer fazer com base nos parâmetros passados, mas é uma verdadeira lástima. Enfim, esse é um trabalho que a gente volta e meia tem que fazer, então o melhor, pelo menos, é saber como isso funciona.
<div style="margin: 5px 0px; border: #f48432 1px dashed; padding: 5px;"><strong>Sofrendo menos com JavaScript</strong>
Esse post faz parte de uma série, confira os outros já feitos:
<ol>
	<li><a href="/blog/2012/10/25/declarao-de-variveis-com-javascript/">Declaração de variáveis com JavaScript</a></li>
	<li><a href="/blog/2012/11/05/elevao-em-javascript/">Elevação em JavaScript</a></li>
	<li>Converter números em JavaScript é uma droga</li>
	<li><a href="/blog/2012/11/21/javascript-ponto-virgula/">JavaScript e o problema com o ponto e vírgula</a></li>
	<li><a href="/blog/2012/11/28/escopo-no-javascript/">Escopo no JavaScript: esse this não é daqui</a></li>
	<li><a href="/blog/2012/12/05/funes-de-callback-no-javascript/">Funções de callback</a></li>
	<li><a href="/blog/2012/12/14/tratamento-de-excecoes-em-javascript/">Tratamento de exceções em JavaScript</a></li>
	<li><a href="/blog/2013/02/18/construtores-de-arrays-do-javascript/">Construtores de Arrays</a></li>
	<li><a href="/blog/2013/03/11/loops-for-in-no-javascript/">Loops for in</a></li>
</ol>
</div>
<h2>Converter números em JavaScript com parseInt</h2>
A função mais comum para converter números em JavaScript é a parseInt. A função parseInt aceita dois parâmetros, o primeiro é a string para ser convertida, e o segundo é a base. A segundo parâmetro não é o obrigatório e, nesse caso, o JavaScript vai tentar adivinhar qual a base que estamos tentando usar com base na string passada.

<em>** Alguns browsers já corrigem o problema abaixo, mas na especificação do JavaScript é assim que funciona e, por exemplo, a versão atual do FireFox (16) funciona assim.</em>

Por exemplo:

{% highlight javascript %}
console.log(parseInt("10")); // 10
console.log(parseInt("010")); // 8
{% endhighlight %}

No exemplo acima a gente espera que o número gerado seja 10 nos dois casos, mas no segundo caso, por causa do zero inicial, o JavaScript entende que é um número de base 8.

Ainda por causa do zero no início da string, a conversão abaixo retorna zero porque não existe 9 na base 8.

{% highlight javascript %}
console.log(parseInt("09")); // 0
{% endhighlight %}

Seguindo esse mesmo raciocínio, no exemplo abaixo a interpretação é de que se trata de um número na base 16. O 0x diz que se trata de um número na base 16.

{% highlight javascript %}
console.log(parseInt("0x10")); // 16
{% endhighlight %}

Outra coisa bem peculiar do parseInt; é que ele para de fazer análise da string no momento em que encontrar algum caracter não numérico, por exemplo o exemplo abaixo retorna 12, mesmo tendo caracteres não numéricos na string.

{% highlight javascript %}
console.log(parseInt("12 das")); //12
{% endhighlight %}

Por causa de todos essas questões, a forma mais segura de converter números em JavaScript usando o parseInt é sempre informar a base desejada:

{% highlight javascript %}
console.log(parseInt("10", 10)); // 10
console.log(parseInt("010", 10)); // 10
console.log(parseInt("09", 10)); // 9
{% endhighlight %}

<h2>Usando operadores + - * /</h2>
É possível converter uma string fazendo uma operação dela com outro número. Se eu fizer:

{% highlight javascript %}
console.log("10" * 2); // 20
console.log("10" - 2); // 8
console.log("10" / 2); // 5
{% endhighlight %}

Eu vou obter o resultado esperado, o JavaScript vai converter o texto para um número e retornar o resultado correto. Mas se eu usar o operador +:

{% highlight javascript %}
console.log("10" + 2) // 102
{% endhighlight %}

Quando se usa o operador + com uma string, o JavaScript vai sempre concatenar, mesmo que o segundo parâmetro seja um número.
<h2>A função Number</h2>
Mais uma opção para converter números é com a função Number, o problema com a função Number é que ela não mantém <span style="text-decoration: line-through;">a mesma loucura</span> o mesmo padrão de parseInt, Number usa sempre a base 10, por exemplo:

{% highlight javascript %}
console.log(Number("10")); // 10
console.log(Number("010")); // 10
console.log(Number("09")); // 9
{% endhighlight %}

E claro, no caso de uma string que tenha números e textos, a função Number não analisa a string até achar um caracter não numérico, ela retorna NaN (Not a Number).

{% highlight javascript %}
console.log(Number("12 das")); //NaN
{% endhighlight %}

É isso ai pessoal, espero ter jogado uma luz na questão de converter números em JavaScript. Até a próxima!
