---
layout: post
title: Tratamento de exceções em JavaScript
categories:
- Desenvolvimento
- JavaScript
comments: true
status: publish
type: post
published: true
alias: /tratamento-de-excecoes-em-javascript/index.html
description: É possivel realizar tratamento de exceções em JavaScript usando os blocos try/catch e o comando throw.
date: 2012-12-14
---
Sim, existe tratamento de exceções em JavaScript. Não é uma funcionalidade muito conhecida e, por isso talvez, não muito utilizada. Mas existem os blocos try/catch dentro do JavaScript e o comando throw. E funciona de uma forma bem similiar ao C#.

{% highlight javascript %}
var comErro = function() {
    throw {
        name: 'CustomError',
        message: 'Um erro muito grave para ser tratado'
    };
};

try {
    comErro();
}
catch(e) {
    console.log(e.name + ' - ' + e.message); //CustomError - Um erro muito grave para ser tratado
}
{% endhighlight %}

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
	<li>Tratamento de exceções em JavaScript</li>
	<li><a href="/blog/2013/02/18/construtores-de-arrays-do-javascript/">Construtores de Arrays</a></li>
	<li><a href="/blog/2013/03/11/loops-for-in-no-javascript/">Loops for in</a></li>
</ol>
</div>
Apesar do JavaScript não ser tipado, existe uma convenção que diz que todo objeto de erro deve conter ao menos duas propriedades: name e message. Acho que os nomes das propriedades são auto-explicatórios.

Obviamente, nada nos impede de adicionar outras propriedades com mais detalhes sobre o erro.
<h2>Tipos de erro do JavaScript</h2>
Por padrão o JavaScript tem internamente seis tipos diferentes de erro que ele pode gerar.
<table width="400" border="0" cellspacing="0" cellpadding="2">
<tbody>
<tr>
<td valign="top" width="100">EvalError</td>
<td valign="top" width="300">Usado quando a função eval() é usada de uma maneira incorreta</td>
</tr>
<tr>
<td valign="top" width="100">RangeError</td>
<td valign="top" width="300">Usado quando uma variável numérica excede uma faixa de valores permitida</td>
</tr>
<tr>
<td valign="top" width="100">ReferenceError</td>
<td valign="top" width="300">Usado quando é feita uma referência invalida à um objeto</td>
</tr>
<tr>
<td valign="top" width="100">SyntaxError</td>
<td valign="top" width="300">Usado quando existe um erro de sintaxe</td>
</tr>
<tr>
<td valign="top" width="100">TypeError</td>
<td valign="top" width="300">Usado quando o tipo da variável não é o mesmo que o esperado</td>
</tr>
<tr>
<td valign="top" width="100">URIError</td>
<td valign="top" width="300">Usado quando as funções encodeURI() e decodeURI() são usadas de uma maneira incorreta.</td>
</tr>
</tbody>
</table>
Isso serve apenas como referência, como mostrei no exemplo anterior, podemos criar os nossos próprios tipos de erro sem problemas.
<h2>Construtores de objetos de erro</h2>
Por fim, o JavaScript também tem alguns construtores para os objetos que podemos usar para retornar um erro, por exemplo, eu poderia reescrever a exemplo acima da seguinte forma:

{% highlight javascript %}
var comErro = function() {
    var error = new Error('Um erro muito grave para ser tratado');
    error.name = 'CustomError';
    throw error;
};

try {
    comErro();
}
catch(e) {
    console.log(e.name + ' - ' + e.message); //CustomError - Um erro muito grave para ser tratado
}
{% endhighlight %}

Esse código gera exatamente o mesmo resultado que antes, o único detalhe que quero ressaltar é que se eu não tivesse feito:

{% highlight javascript %}
error.name = 'CustomError';
{% endhighlight %}

o nome do erro seria Error.

Como o objeto Error, temos também um construtor para cada tipo de erro do JavaScript: EvalError, TypeError, ReferenceError, etc.
