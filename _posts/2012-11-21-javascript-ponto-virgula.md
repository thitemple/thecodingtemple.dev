---
layout: post
title: JavaScript e o problema com o ponto e vírgula
categories:
- Desenvolvimento
- JavaScript
comments: true
status: publish
type: post
published: true
alias: /javascript-ponto-virgula/index.html
description: O JavaScript por padrão adiciona um ponto e vírgula ao final de cada linha. Entenda porque isso pode não ser bom e porque é melhor ser explícito.
date: 2012-11-21
---
Dessa vez eu quero falar sobre uma questão bem simples, o problema do ponto e vírgula e das chaves.
<div style="margin: 5px 0px; border: #f48432 1px dashed; padding: 5px;"><strong>Sofrendo menos com JavaScript</strong>
Esse post faz parte de uma série, confira os outros já feitos:
<ol>
	<li><a href="/blog/2012/10/25/declarao-de-variveis-com-javascript/">Declaração de variáveis com JavaScript</a></li>
	<li><a href="/blog/2012/11/05/elevao-em-javascript/">Elevação em JavaScript</a></li>
	<li><a href="/blog/2012/11/12/converter-numeros-em-javascript-e-uma-droga/">Converter números em JavaScript é uma droga</a></li>
	<li>JavaScript e o problema com o ponto e vírgula</li>
	<li><a href="/blog/2012/11/28/escopo-no-javascript/">Escopo no JavaScript: esse this não é daqui</a></li>
	<li><a href="/blog/2012/12/05/funes-de-callback-no-javascript/">Funções de callback</a></li>
	<li><a href="/blog/2012/12/14/tratamento-de-excecoes-em-javascript/">Tratamento de exceções em JavaScript</a></li>
	<li><a href="/blog/2013/02/18/construtores-de-arrays-do-javascript/">Construtores de Arrays</a></li>
	<li><a href="/blog/2013/03/11/loops-for-in-no-javascript/">Loops for in</a></li>
</ol>
</div>
O JavaScript tenta nos ajudar cada vez que esquecemos ou simplesmente deixamos de colocar um ponto e vírgula no final de uma linha.

Assim, o código abaixo funciona perfeitamente:

{% highlight javascript %}
var nome  = "Thiago"
nome = "Thiago Temple"
console.log(nome)
{% endhighlight %}

Dito isso, um outro ponto relevante para esse caso é que o JavaScript também suporta duas formas diferentes de usar as chaves {}. Os dois exemplos abaixo funcionam da mesma maneira.

{% highlight javascript %}
if(true) {
}

if(true)
{
}
{% endhighlight %}

Agora, vamos dizer que eu tenha uma função que retorna um objeto, como as duas funções abaixo:

{% highlight javascript %}
function getNome1() {
  return {
    nome: "Thiago"
  };
}
console.log(getNome1().nome); // Thiago

function getNome2() {
    return
    {
        nome: "Thiago"
    };
}
console.log(getNome2().nome); // syntax error
{% endhighlight %}

No exemplo acima a função getNome1 funciona normalmente, mas no segundo caso, a função getNome2 retorna um erro. Isso acontece porque o JavaScript entende que, depois da palavra chave return, está faltando um ponto e vírgula e automaticamente insere um. Obviamente, tudo que está depois desse ponto e vírgula passa a não ter nenhum sentido e vira um erro de sintaxe.
<h2>Solução</h2>
É bem simples nesse caso, use sempre a abertura de chave na mesma linha da instrução, como na função getNome1 e o problema estará resolvido.

{% highlight javascript %}
function getNome1() {
  return {
    nome: "Thiago"
  };
}
console.log(getNome1().nome); // Thiago
{% endhighlight %}

E também sempre coloque o ponto e vírgula ao final das sentenças, nesse caso é melhor ser explícito do que confiar no JavaScript.
