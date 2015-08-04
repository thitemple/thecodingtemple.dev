---
layout: post
title: Elevação em JavaScript
categories:
- Desenvolvimento
- JavaScript
comments: true
status: publish
type: post
published: true
alias: /elevao-em-javascript/index.html
description: Elevação em JavaScript é o ato de mover todas as declarações de variáveis feitas com var para o topo da função.
date: 2012-11-05
---
Elevação em JavaScript é o ato de mover a declaração de variáveis para o topo da função. O que? Sim, é isso mesmo. Não importa onde essa variável foi declarada dentro da função, para o JavaScript é como se ela tivesse sido declarada na primeira linha.
<div style="margin: 5px 0px; border: #f48432 1px dashed; padding: 5px;">

<strong>Sofrendo menos com JavaScript</strong>
Esse post faz parte de uma série, confira os outros já feitos:
<ol>
	<li><a href="/blog/2012/10/25/declarao-de-variveis-com-javascript/">Declaração de variáveis com JavaScript</a></li>
	<li>Elevação em JavaScript</li>
	<li><a href="/blog/2012/11/12/converter-numeros-em-javascript-e-uma-droga/">Converter números em JavaScript é uma droga</a></li>
	<li><a href="/blog/2012/11/21/javascript-ponto-virgula/">JavaScript e o problema com o ponto e vírgula</a></li>
	<li><a href="/blog/2012/11/28/escopo-no-javascript/">Escopo no JavaScript: esse this não é daqui</a></li>
	<li><a href="/blog/2012/12/05/funes-de-callback-no-javascript/">Funções de callback</a></li>
	<li><a href="/blog/2012/12/14/tratamento-de-excecoes-em-javascript/">Tratamento de exceções em JavaScript</a></li>
	<li><a href="/blog/2013/02/18/construtores-de-arrays-do-javascript/">Construtores de Arrays</a></li>
	<li><a href="/blog/2013/03/11/loops-for-in-no-javascript/">Loops for in</a></li>
</ol>
</div>
Veja o exemplo abaixo:

{% highlight javascript %}
var func1 = function () {
     console.log(nome); // undefined
     var nome = "Thiago";
     console.log(nome); // Thiago
}
func1();
{% endhighlight %}

A variável <em>nome</em> foi declarada na segunda linha do método e já teve um valor atribuído a ela. Mas no caso do exemplo, quando eu executo o <em>console.log</em> antes da declaração o resultado é <em>undefined</em> e não um erro. Já o <em>console.log</em> depois da declaração funciona conforme esperado.

Primeiro ponto importante, <em>undefined</em> não quer dizer que a variável não foi declarada, quer dizer que ela  foi declarada mas que nenhum valor foi atribuído a ela. O JavaScript, portanto, <strong>eleva</strong> a declaração da variável para o topo da função, mas não eleva a atribuição inicial. O código acima é equivalente a esse:

{% highlight javascript %}
var func1 = function () {
    var nome;
    console.log(nome); // undefined
    nome = "Thiago";
    console.log(nome); // Thiago
}
func1();
{% endhighlight %}

Eu sei, o nome <em>undefined</em> é um pouco confuso, mas nesse caso, o equivalente de <em>var nome;</em> em C# seria <em>string nome = null;</em> Se eu fizesse isso em C#, eu teria acesso a variável <em>nome</em>, ela foi declarada, só que o valor dela é <em>null</em>.

A diferença fica clara com esse segundo exemplo:

{% highlight javascript %}
var func2 = function () {
    console.log(nome); // undefined
    console.log(sobrenome); // ReferenceError: b is not defined
    var nome = "Thiago";
    console.log(nome); // Thiago
}
func2();
{% endhighlight %}

Nesse caso, a variável <em>sobrenome</em> nunca é declarada, por isso quando eu tenho acessá-la recebo um erro. Percebeu a diferença?

<strong>Cuidado com loops for</strong>

{% highlight javascript %}
var func3 = function() {
    var x;
    x = 100;
    for(var x = 0; x &lt; 10; x ++) {
    }
    console.log(x); // 10
}
func3();
{% endhighlight %}

No JavaScript, loops <em>for</em> não tem seu próprio escopo como em C#, o escopo é sempre o da função, por causa disso, não importa que no exemplo acima eu fiz uma declaração dentro do loop for, a variável é a mesma declarada no inicio da função, porque <strong>todas</strong> as declarações <em>var</em> são <strong>elevadas</strong> para a primeira linha da função.

<strong>Elevação com funções</strong>

Em JavaScript eu posso atribuir uma função a uma variável, com eu fiz nos 3 exemplos anteriores: func1, func2 e func3 são três variáveis com funções atribuídas a elas. Isso se chama function expression. E function expressions estão sujeitas as mesmas regras que qualquer outra variável, porque, no JavaScript, uma variável que contenha uma função atribuída a ela é igual a uma função que tenha uma string como valor.

{% highlight javascript %}
var func4 = function() {
    console.log(nomeCompleto("Thiago", "Temple")); // TypeError: undefined is not a function
    var nomeCompleto = function(nome, sobrenome) {
        return nome + " " + sobrenome;
    }
}
func4();
{% endhighlight %}

No exemplo acima eu vou receber um erro <em>TypeError</em>, porque a função <em>nomeCompleto</em> foi declarada, e portanto ela é elevada para a primeira linha, mas como o valor dela foi atribuído depois, <em>nomeCompleto</em> é igual a <em>undefined</em>. Veja que é diferente desse caso:

{% highlight javascript %}
var func4 = function() {
    console.log(nomeCompleto("Thiago", "Temple")); // ReferenceError: nomeCompleto is not defined
    var nomeCompleto = function(nome, sobrenome) {
        return nome + " " + sobrenome;
    }
}
func4();
{% endhighlight %}

Novamente, no caso acima a <em>nomeCompleto</em> nunca foi declarada por isso o erro é <em>ReferenceError</em>. O correto obviamente seria:

{% highlight javascript %}
var func4 = function() {
    var nomeCompleto = function(nome, sobrenome) {
        return nome + " " + sobrenome;
    }
    console.log(nomeCompleto("Thiago", "Temple")); // "Thiago Temple"
}
func4();
{% endhighlight %}

Uma outra opção no JavaScript é declarar a função, ao invés de fazer um function expression.

{% highlight javascript %}
var func5 = function() {
    console.log(nomeCompleto("Thiago", "Temple")); // "Thiago Temple"
    function nomeCompleto(nome, sobrenome) {
        return nome + " " + sobrenome;
    }
}
func5();
{% endhighlight %}

O exemplo acima mostra uma declaração de função, e nesse caso, mesmo que eu chame essa função antes de declará-la, funciona. Funciona porque toda declaração de função também é elevada para o todo do método. E como no caso da declaração de função não existe uma váriavel, toda a implementação é elevada.

<strong>Conclusão</strong>

Como todas as variáveis declaradas em método são sempre elevadas para o topo do método, não existe a necessidade de declarar variáveis em outros locais do método. Por isso, sempre declare todas as variáveis na primeira linha do método.
<em>var nome, sobrenome, teste, i, etc.;</em>

Dessa forma, sempre que for necessária uma nova variável, vai existir só uma linha com todas as variáveis no começo do método. E claro, vai ficar mais fácil de saber se a variável já foi declarada, ou se existe algum conflito.
