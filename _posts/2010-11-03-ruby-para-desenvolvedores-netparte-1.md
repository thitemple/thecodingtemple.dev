---
layout: post
title: Ruby para desenvolvedores .NET–parte 1
categories:
- Desenvolvimento
- ironruby
- ruby
comments: true
status: publish
type: post
published: true
date: 2010-11-03
---
<p>Eu tenho usado Ruby já há algum tempo, principalmente em alguns desenvolvimentos pessoais usando o Rails. Mas eu trabalho com C# já há mais de 8 anos e vivi fechado nesse mundo .NET por muito tempo, muito mais do que eu gostaria. De qualquer forma, ruby já tem feito parte do meu dia a dia, então eu gostaria de compartilhar algumas coisas que já aprendi sobre ruby, para aqueles, que como eu, vivem no mundo .NET.</p>  <p><strong>Motivação</strong></p>  <p>Ruby é e deve ser considerada uma linguagem de primeira classe, é possível hoje realizar aplicativos de diversos fins com Ruby e não somente aplicações web usando Rails. Mas, muitas vezes as empresas preferem ficar com linguagens mais conhecidas no mercado como Java ou C# para suas aplicações.</p>  <p>Ok, se você não pode usar Ruby para construir suas aplicações é bem provável que possa usar Ruby como uma linguagem de scripting (que ela é), para ajudar em trabalhos marginais porém importantes que muitas vezes não são feitos, ou são feitos usando outras coisas como XML, como por exemplo realizar Builds e Deploys, fazer testes de aplicativos, entre outros.</p>  <p>Se você pode escolher qual a linguagem quer usar, melhor pra você, Ruby pode ser uma ótima escolha, como veremos.</p>  <p><strong>Interpretador</strong></p>  <p>A primeira coisa que precisamos para usar Ruby é um interpretador de Ruby. Existem vários interpretadores por ai, o que eu vou usar aqui é o <a href="http://ironruby.codeplex.com/" target="_blank">IronRuby</a>. O IronRuby é um interpretador do Ruby que permite usar Ruby sobre a plataforma .NET, ou seja, vai permitir que você use os assemblies que já está costumado. É Ruby, segue a especificação de Ruby, com o adicional do .NET. Ótimo não é?</p>  <p>Eu recomento instalar a versão 1.0 que é compatível com o Ruby 1.8.7, andei fazendo uns testes com a versão 1.1 do IronRuby e ainda dá vários paus (pelo menos na data atual). A vantagem dessa versão 1.1 é que ela já vem com <a href="http://viniciusquaiato.com/blog/ironruby-tools-for-visual-studio-2010/" target="_blank">ferramentas para o Visual Studio 2010</a>.</p>  <p><strong>O Console</strong></p>  <p>Uma vez com o IronRuby instalado, você deve ter o IronRuby Console no seu menu iniciar, ou então pode executar o console a partir de um prompt padrão com o comando iirb.</p>  <p>O console permite que você execute qualquer instrução ruby, vá e faça um teste simples:</p>  

![Console ](/images/2010/11/console.png){: .aligncenter}

<p>Uma outra vantagem do Ruby é a “falta de cerimônia” no código como os {}, ;, () e afins. Aliando isso ao fato de ser uma linguagem interpretada, veja a diferença de um Hello World feito em C# para uma aplicação console e uma em Ruby.</p>  

{% highlight csharp %}
using System;
namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(string.Format(&quot;Hello World, {0}&quot;, args[0]));
        }
    }
}
{% endhighlight %}

<p>E agora em Ruby:</p>

{% highlight ruby %}
puts "Hello World, #{ARGV[0]}"
{% endhighlight %}

<p>Considere, que além da diferença da linguagem, para rodar o aplicativo no .NET é preciso compilar, gerar um executável e então rodá-lo. E para rodar o script Ruby, considerando que ele foi salvo num arquivo chamado hello_world.rb basta executar o comando:</p>

![Comando ruby ](/images/2010/11/comando_ruby.png){: .aligncenter}

<p><strong>Fortemente, Estaticamente e Dinamicamente tipado</strong></p>

<p>Falando da linguagem realmente, Ruby é uma linguagem fortemente e dinamicamente tipada. O que isso quer dizer?</p>

<p>Quer dizer as variáveis tem um tipo bem definido, por exemplo uma variável do tipo String não pode ser somada a uma variável do tipo Fixnum veja:</p>

![Tipos ](/images/2010/11/tipos.png){: .aligncenter}

<p>Veja que apenas por atribuir um valor às variáveis os tipos foram definidos como Fixnum e String, isso é definir uma tipagem dinamicamente, ou seja, no seu primeiro uso. Nos casos acima as variáveis texto e numero são instâncias das classes String e Fixnum respectivamente e por isso tem acessos aos seus métodos, então se você quiser concatenar as duas variáveis em uma string pode fazer o seguinte:</p>

![](/images/2010/11/concat.png){: .aligncenter}

<p>Veja que chamei o método to_s que converte para string e então foi gerado o texto “VinTem12”</p>

<p>Linguagens, estaticamente tipadas, como o C#, tem seu tipo definido em tempo de compilação, ou seja, antes da execução.</p>

<p><strong>Usando o .NET</strong></p>

<p>Como um exemplo simples de como é possível usar as classes do .NET a partir do IronRuby, vou mostrar um código básico de um MessageBox do Windows Forms.</p>

![CLR ](/images/2010/11/clr.png){: .aligncenter}

<p>O princípio é o mesmo para qualquer classe do .NET Framework.</p>

<p><strong>Concluindo</strong></p>

<p>Essa foi apenas uma apresentação inicial de como instalar um ambiente Ruby no Windows, do console do Ruby e da diferença mais básica entre Ruby e C# que é a tipagem.</p>

<p>Nos próximos vou falar um pouco mais a fundo das características do Ruby e quais as diferenças para o C#.</p>
