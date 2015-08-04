---
layout: post
title: Lidando com Exceções
categories:
- Desenvolvimento
comments: true
status: publish
type: post
published: true
date: 2010-04-05
alias: /lidando-com-excecoes/index.html
---
Exceções fazem parte de todos os programas que escrevemos, muitas vezes, de maneiras que não esperamos ou gostaríamos.

Mas uma coisa que eu já notei em muitos programas é que as exceções muitas vezes são geradas de forma aleatória, o que pode e, definitivamente acaba tornando os programas difíceis de se entender, ou às vezes muito complicado de se interagir.

Por isso sempre que for gerar exceções em seus programas, pense em algumas coisas:

<strong>1) Não use blocos catch vazios</strong>

{% highlight csharp %}
try
{
    // faz alguma coisa
}
catch (Exception ex) { }
{% endhighlight %}

Blocos como esse simplesmente escondem o problema e dificultam (e muito) a detecção de problemas. Imagine que esse código está dentro de uma biblioteca  em um nível bem baixo de sua solução, como por exemplo.

![Camadas ](/images/2010/04/camadas.png){: .aligncenter}

Se você tem diversos métodos com esse tratamento de exceções dificilmente vai encontrar onde está o problema.

Blocos catch servem para fazer algum tratamento de erro, mesmo que seja para gravar um log com esse erro para análise futura. Mas não esconda o erro! Se não tiver tempo naquele momento deixe um comentário com um TODO para que você volte e faça alguma coisa.

<strong>2) Reutilize as exceções do framework</strong>

O conceito de reutilização vale para tudo no desenvolvimento inclusive para lançar exceções.

Por exemplo, não existe razão para se criar uma classe de exceção como essa UsuarioNaoInformadoException. É muito melhor chamar a exceção ArgumentNullException(?Usuario?). Dentro do .Net Framework existem muitas exceções padrão que podem ser utilizadas. Segue uma tabela com algumas das exceções mais comuns.
<table style="border: black 1px solid;">
<tbody>
<tr style="text-align: center; background-color: silver; font-weight: bold;">
<td valign="top" width="320">Exceção</td>
<td valign="top" width="320">Uso</td>
</tr>
<tr>
<td valign="top" width="320">NullReferenceException</td>
<td valign="top" width="320">Representa um erro que ocorre quando se tenta acessar um objeto nulo.</td>
</tr>
<tr>
<td valign="top" width="320">ArgumentException</td>
<td valign="top" width="320">Representa um erro que ocorre quando um argumento que é passado a um método é inválido.</td>
</tr>
<tr>
<td valign="top" width="320">IndexOutOfRangeException</td>
<td valign="top" width="320">Representa um erro que ocorre quando se tenta acessar um elemento de um array que está fora dos limites do array.</td>
</tr>
<tr>
<td valign="top" width="320">NotImplementedException</td>
<td valign="top" width="320">Representa um erro que ocorre quando se tenta acessar uma operação que não foi implementada.</td>
</tr>
<tr>
<td valign="top" width="320">ArgumentNullException</td>
<td valign="top" width="320">Representa um erro que ocorre quando um argumento que é passado a um método é inválido porque é nulo.</td>
</tr>
</tbody>
</table>
Essas são apenas algumas das exceções do .Net Framework, existem muitas outras que podem ser úteis. Evite criar exceções que fazem a mesma coisa.

<strong>3) Lance exceções relacionadas à abstração</strong>

Olhando para a representação de camadas acima, imagine que na camada de acesso a dados um método lança uma exceção do tipo SqlException. A camada de negócios deve tratar essa exceção e se tiver que passar a exceção para a camada seguinte (no caso a camada de serviço), deve passar como outra exceção.

Por que isso? Imagine que sua camada de dados passe a ser um WebService e não mais um banco de dados. A exceção padrão para um web service é uma SoapException. A camada de negócios e a camada de serviço (isso sem contar a camada de apresentação) deveriam começar a tratar exceções do tipo SoapException ao invés de SqlException.

<strong>4) Passe apenas informações necessárias para resolução do problema nas exceções</strong>

Exceções não foram feitas para que os usuários as entendam, foram feitas para que desenvolvedores executem códigos corretamente. Quando uma exceção é lançada, sempre sabemos qual a linha em que foi lançada a exceção. Então não há necessidade de mensagens elaboradas para explicar qual o problema.

Passe informações relevantes, por exemplo, no caso de uma IndexOutOfBoundException, informe na exceção qual o tamanho do array e qual o índice que não foi encontrado.

<strong>Conclusão</strong>

Trabalhar com exceções não é uma arte, é apenas mais uma parte do código que temos que fazer e lidar todos os dias. Mas muitas vezes é uma parte renegada e que se não for bem pensada pode às vezes gerar mais problemas do que soluções. Cuidados simples, como os citados acima, podem com certeza ajudar a melhorar o código nosso de cada dia. :-)
