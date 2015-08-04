---
layout: post
title: ! 'Escopo no JavaScript: esse this não é daqui'
categories:
- Desenvolvimento
- JavaScript
comments: true
status: publish
type: post
published: true
alias: /escopo-no-javascript/index.html
description: Entendendo o escopo no JavaScript. O escopo de variáveis é a função, mas o escopo no JavaScript de this pode variar de acordo com o contexto desejado.
date: 2012-11-28
---
Existem duas questões importantes com relação ao escopo no JavaScript.  Declaração de variáveis e o valor de this.
<div style="margin: 5px 0px; border: #f48432 1px dashed; padding: 5px;"><strong>Sofrendo menos com JavaScript</strong>
Esse post faz parte de uma série, confira os outros já feitos:
<ol>
	<li><a href="/blog/2012/10/25/declarao-de-variveis-com-javascript/">Declaração de variáveis com JavaScript</a></li>
	<li><a href="/blog/2012/11/05/elevao-em-javascript/">Elevação em JavaScript</a></li>
	<li><a href="/blog/2012/11/12/converter-numeros-em-javascript-e-uma-droga/">Converter números em JavaScript é uma droga</a></li>
	<li><a href="/blog/2012/11/21/javascript-ponto-virgula/">JavaScript e o problema com o ponto e vírgula</a></li>
	<li>Escopo no JavaScript: esse this não é daqui</li>
	<li><a href="/blog/2012/12/05/funes-de-callback-no-javascript/">Funções de callback</a></li>
	<li><a href="/blog/2012/12/14/tratamento-de-excecoes-em-javascript/">Tratamento de exceções em JavaScript</a></li>
	<li><a href="/blog/2013/02/18/construtores-de-arrays-do-javascript/">Construtores de Arrays</a></li>
	<li><a href="/blog/2013/03/11/loops-for-in-no-javascript/">Loops for in</a></li>
</ol>
</div>
A primeira parte é fácil, eu já falei um pouco disso quando falei de <a href="/blog/2012/10/25/declarao-de-variveis-com-javascript/">declaração de variáveis</a>. Toda variável declarada com a palavra chave var tem o escopo da função em que foi declarada. Portanto, na função abaixo:

{% highlight javascript %}
var func1 = function() {
    var i = 100;
    for(var i = 0; i < 10; i++) {
        // qualquer coisa aqui
    }
    console.log(i); // 10
}
{% endhighlight %}

A variável i vai ser 10 no fim do método, porque dentro de um método, não importa onde a variável é declarada, ela sempre faz parte do escopo da função. E claro, não pode ser acessada fora da função.

Agora o this é um pouco mais complicado. O this sempre faz referência ao objeto que a função faz parte. Por exemplo:

{% highlight javascript %}
var pessoa = {
    'nome': 'Thiago',
    'getNome': function(){
        console.log('Olá, ' + this.nome);
    }
};
pessoa.getNome(); // Olá, Thiago
{% endhighlight %}

No exemplo acima, eu declaro um objeto e atribuo à variável pessoa. E getNome é definido com uma função, portanto essa função é um método desse objeto. Dessa forma o contexto de this dentro desse método é o objeto em que ele foi definido e chamada de getNome funciona como o esperado.

Já no exemplo abaixo:

{% highlight javascript %}
var pessoa = {  
    'nome': 'Thiago',  
    'getNome': function(){  
        var fx = function() {
            console.log('Olá, ' + this.nome);
        };
        fx();
    }  
};  
pessoa.getNome(); // Olá, undefined
{% endhighlight %}

Dentro do método, fx é apenas uma variável que recebe uma função, não é um método que faz parte de um objeto, por isso, this nesse caso faz referência ao escopo global, que no caso do browser, quer dizer o objeto window.
<h2>Trocando o escopo de uma função</h2>
A última coisa que eu quero dizer sobre o escopo e this é que no JavaScript nós podemos alterar a referência this. Veja o exemplo abaixo:

{% highlight javascript %}
var dizOla = function() {
    console.log('Ola, ' + this.nome);
};

var pessoa = {
    'nome': 'Thiago Temple'
}

dizOla.call(pessoa);
{% endhighlight %}

A função dizOla nao faz parte de nenhum objeto, portanto this dentro daquela função faz referencia ao objeto window. Mas, quando executo a função usando o método call, eu passo o objeto pessoa como parâmetro. Nesse momento estou dizendo para a função dizOla usar o objeto pessoa como contexto.

Alterar o escopo no JavaScript é uma característica muito importante e muito utilizada, porque é uma forma bem simples e eficaz de fazer reuso de funções.

É isso aí por hoje. Até a próxima!
