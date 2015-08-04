---
layout: post
title: Loops for in no JavaScript
categories:
- Desenvolvimento
- JavaScript
comments: true
status: publish
type: post
published: true
alias: /loops-for-in-no-javascript/index.html
description: O JavaScript tem suporte nativo a loops do tipo for in e, apesar de ter uma funcionalidade similar à outras linguagens, precisamos tomar alguns cuidados.
date: 2013-03-11
---
O JavaScript tem o suporte nativo a loops do tipo <em>for in</em> e, ele funciona de uma forma muito semelhante ao <em>foreach</em> do C# (por exemplo), mas temos que tomar alguns cuidados, por que como tudo no JavaScript, sempre temos uma pegadinha.
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
	<li><a href="/blog/2013/02/18/construtores-de-arrays-do-javascript/">Construtores de Arrays</a></li>
	<li>Loops for in</li>
</ol>
</div>
Primeiro um exemplo. Se eu quiser iterar por todas as propriedades é métodos de um objeto o código é exatamente o que imaginamos.

{% highlight javascript %}
var propriedade;
var pessoa = {
    nome: 'Thiago',
    sobrenome: 'Temple',
    dizOla: function() {
        alert('Ola');
    }
};
for(propriedade in pessoa){
    document.writeln(propriedade);
}
//exibe: nome sobrenome dizOla
{% endhighlight %}

Esse código produz um retorno com: nome sobrenome dizOla

Se eu quiser exibir somente os atributos e não os métodos, eu preciso adicionar um filtro no loop, dessa forma:

{% highlight javascript %}
for(propriedade in pessoa){
    if (typeof pessoa[propriedade] !== 'function') {
        document.writeln(propriedade);
    };
}
//exibe: nome sobrenome
{% endhighlight %}

Até aqui bem simples.

O primeiro ponto a considerar é que nunca podemos garantir a ordem do retorno de um loop for in. Geralmente isso não importaria muito, como no exemplo anterior, mas no caso de um array, que é também um objeto, isso pode ser importante. Nesse momento é melhor usar mesmo um loop for do que um loop for in.

A segundo ponto a considerar é que o JavaScript tem herança através da propriedade prototype, e que todo objeto herda de Object. Isso é importante porque o JavaScript é uma linguagem dinâmica e, portanto, se alterarmos Object isso vai refletir nos nossos objetos, não importa o momento que alteramos Object. Por exemplo:

{% highlight javascript %}
var propriedade;
var pessoa = {
    nome: 'Thiago',
    sobrenome: 'Temple',
    dizOla: function() {
        alert('Ola');
    }
};

Object.prototype.naoRelacionado = 'eu nao devia estar aqui';

for(propriedade in pessoa){
    document.writeln(propriedade);
}

//exibe: nome sobrenome dizOla naoRelacionado
{% endhighlight %}

No código acima eu defini um objeto chamado pessoa e depois disso eu adicionei um atributo chamado naoRelacionado à Object. Mesmo assim esse atributo foi exibido dentro loop for in. Isso pode vir a ser um problema quando alteramos o prototype de Object em outra parte do código que não esta relacionado ao código que estamos fazendo.

No caso do loop for in, podemos resolver isso com o método <strong>hasOwnProperty</strong>.

{% highlight javascript %}
for(propriedade in pessoa){
    if(pessoa.hasOwnProperty(propriedade)) {
        document.writeln(propriedade);
    }
}

//exibe: nome sobrenome dizOla
{% endhighlight %}

O método hasOwnProperty verifica se a propriedade foi definida no objeto em questão.

É isso ai.
