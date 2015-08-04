---
layout: post
title: Declaração de variáveis com JavaScript
categories:
- Desenvolvimento
- JavaScript
status: publish
type: post
published: true
alias: /declarao-de-variveis-com-javascript/index.html
date: 2012-10-25
---
Então você tem sofrido com JavaScript, odeia a linguagem e não vê a hora de achar aquele script pronto na internet e terminar logo com isso? Bom, a maioria dos devs que eu conheço pensam assim.

Se você pensa assim, ou mesmo se você quer conhecer um pouco melhor de JavaScript, a ideia aqui é passar 11 pequenas dicas de como a linguagem funciona, seja para entender melhor um script encontrado na internet ou para escrever o seu próprio de uma maneira melhor.
<h3><strong>Por que?</strong></h3>
Simples, porque javascript hoje roda em (praticamente) todo lugar: browsers, celulares, tablets, Windows Apps, jogos, no servidor, etc. E, embora seja possível encontrar scripts, frameworks e plugins que façam quase tudo, sempre tem um momento em que temos que escrever um pouco de JavaScript. Por fim, entender como declarar variáveis com JavaScript é muito simples e pode salvar uma grande quantidade de tempo e trabalho quando fazemos os nossos scripts.
<h3><strong>A Lista</strong></h3>
Então, esses são os 11 itens sobre os quais eu quero falar:
<ol>
	<li>Declaração de variáveis</li>
	<li><a href="/blog/2012/11/05/elevao-em-javascript/">Elevação em JavaScript</a></li>
	<li><a href="/blog/2012/11/12/converter-numeros-em-javascript-e-uma-droga/">Converter números em JavaScript é uma droga</a></li>
	<li><a href="/blog/2012/11/21/javascript-ponto-virgula/">JavaScript e o problema com o ponto e vírgula</a></li>
	<li><a href="/blog/2012/11/28/escopo-no-javascript/">Escopo no JavaScript: esse this não é daqui</a></li>
	<li><a href="/blog/2012/12/05/funes-de-callback-no-javascript/">Funções de callback</a></li>
	<li><a href="/blog/2012/12/14/tratamento-de-excecoes-em-javascript/">Tratamento de exceções em JavaScript</a></li>
	<li><a href="/blog/2013/02/18/construtores-de-arrays-do-javascript/">Construtores de Arrays</a></li>
	<li><a href="/blog/2013/03/11/loops-for-in-no-javascript/">Loops for in</a></li>
</ol>
<h2>Declaração de variáveis com JavaScript</h2>
<h3><strong>Sempre use var</strong></h3>
Vai declarar uma variável? Use <strong>var</strong>! Simples, essa é a regra.
Toda a vez que uma variável é declara/usada sem o <strong>var</strong> ela passa a ser uma variável global, que, no caso do browser é sempre o objeto window.
Veja o código abaixo:

{% highlight javascript %}
nome = "Thiago";

var func1 = function (param) {
  var nome = param;
  document.write(nome); // Michael
};

var func2 = function (param) {
  var nome = param;
  document.write(nome); // Jordan
};
document.write(nome); // Thiago
func1('Michael');
document.write(nome); // Thiago
func2('Jordan');
document.write(nome); // Thiago
document.write(window.nome); // Thiago
{% endhighlight %}

O que acontece aqui é que no momento em que declaro <strong>nome = "Thiago"</strong>, como não usei <strong>var</strong>, nome passa a fazer parte do objeto <strong>window</strong>. Dentro das funções func1 e func2 também não declarei nome usando <strong>var</strong> e, portanto, nesse caso <strong>nome</strong> também faz parte do objeto <strong>window</strong>.
Isso fica claro quando eu exibo o valor de <strong>nome</strong> usando as duas formas abaixo e obtenho o mesmo resultado:

{% highlight javascript %}
document.write(nome);
document.write(window.nome);
{% endhighlight %}

Quando executamos código fora de uma função esse código também esta no escopo global, ou seja, no <strong>window</strong>. Portanto acessar <strong>nome</strong> e <strong>window.nome</strong> nesse caso é a mesma coisa.
Agora veja a diferença desse código:

{% highlight javascript %}
nome = "Thiago";

var func1 = function (param) {
  var nome = param;
  document.write(nome); // Michael
};

var func2 = function (param) {
  var nome = param;
  document.write(nome); // Jordan
};
document.write(nome); // Thiago
func1('Michael');
document.write(nome); // Thiago
func2('Jordan');
document.write(nome); // Thiago
document.write(window.nome); // Thiago
{% endhighlight %}

A primeira declaração <strong>nome = "Thiago"</strong> continua global, mas dentro das funções func1 e func2 eu redeclarei a variável <strong>nome</strong> usando <strong>var</strong>, nesse momento elas passam a fazer parte do escopo da função em que são declaradas, assim, não interferindo com a variável global.
<h3>Evite atribuição de valores em cadeia</h3>
Veja o exemplo abaixo:

{% highlight javascript %}
var f1 = function() {
  var a = b = "Isso nao deve estar certo";
};
document.write(b); // Isso nao deve estar certo
document.write(a); // ReferenceError: a is not defined
{% endhighlight %}

Pode até parecer que estamos declarando <strong>a</strong> e <strong>b</strong> dentro da função, mas nesse caso, somente <strong>a</strong> esta sendo declarado no escopo da função, <strong>b</strong> foi declarado como variável global, por isso fora da função a gente consegue acessar <strong>b</strong>, mas no caso de <strong>a</strong>, recebemos um erro, <strong>a</strong> só esta disponível dentro da função, conforme esperado.

A declaração correta para termos <strong>a</strong> e <strong>b</strong> dentro do escopo da função seria:

{% highlight javascript %}
var f1 = function() {
  var a, b = "Isso nao deve estar certo";
};
{% endhighlight %}

A diferença é sutil, mas o suficiente para causar uma boa dor de cabeça.
<h3>Por que isso é imporante?</h3>
A razão é simples, para não termos interferências inesperadas. Por exemplo: se, sem querer algum programador <del>desleixado</del> descuidado, declarar variáveis com o mesmo nome em funções diferentes elas podem interferir uma com a outra, e esse é um caso bem complicado de debugar.

Outro cenário muito comum nos dias de hoje: usamos muitos scripts, frameworks e plugins prontos que encontramos na internet, e a gente nunca sabe como foi feito o código desses plugins. Com certeza, muitos deles usam nomes comuns como result, response, request, etc. E esses nomes podem conflitar com nosso próprio código.
<h3>Solução</h3>
Sempre usar var, e evite fazer atribuição de valores em cadeia. Também não escreva scripts que não façam parte de um escopo, que no caso de JavaScript, é basicamente uma função. Mas vou falar de escopo um pouco mais pra frente.
