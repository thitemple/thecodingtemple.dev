---
layout: post
title: Sobre janelas quebradas
categories:
- Desenvolvimento
comments: true
status: publish
type: post
published: true
date: 2010-03-23
alias: /sobre-janelas-quebradas/index.html
---
![Broken windows ](/images/2010/03/Broken-windows.jpg){: aligncenter}

{% highlight csharp %}
public void myMethod()
{
    try
    {
        // faz algo
    }
    catch (Exception ex) { }
}
{% endhighlight %}

<p>Quantas vezes você já viu um método que fazia mais do que o nome dizia, ou às vezes, até nada do que o nome do método queria dizer?</p>
<p>Quantas vezes você pensou em não fazer um teste unitário porque, afinal de contas, isso nunca vai dar errado mesmo?</p>
<p>E a lista com certeza poderia continuar?</p>
<p>Posso dizer uma coisa, eu, com certeza, já passei por situações como essa e também não fiz nada. E não me orgulho nada disso.</p>
<p>Agora, uma outra pergunta, você já fez algum(ns) sistema(s) do qual você tem o orgulho de dizer que foi bem feito, com um código bem organizado, de fácil manutenção, rápido, etc.? Se sim, qual a sensação que você sente? Não é ótimo poder ter orgulho de algo que você fez? Então porque muitas vezes deixamos coisas das quais temos certeza que não devem ser feitas continuar no código?</p>
<p>Pesquisadores já descobriram que:</p>
<blockquote>
<p>Uma janela quebrada, deixada sem concerto por um tempo considerável, instiga aos habitantes do edifício uma sensação de abandono - um sentimento de que os encarregados não se importam com o edifício. Então outra janela se quebra. Pichações aparecem. Avarias estruturais sérias começam. Em um curto espaço de tempo, o edifício se deteriora além do desejo do proprietário de consertá-lo e o sentimento de abandono se torna realidade.</p>
<p>The Pragmatic Programmer</p>
</blockquote>

![Edifício destruído](/images/2010/03/215318851_8b90c30ddb.jpg){: .aligncenter}

<p>Com os sistemas é a mesma coisa, tudo começa com só um método ou classe que você copia e cola para alterar uma parte pequena, ou com um bloco catch que não faz nada além de ocultar o erro do programa, então alguém olha aquele bloco catch e faz outro igual, e quando você perceber não tem como mais achar o erro, porque existem tantos catchs no sistema que não fazem nada, que os erros se perdem e você não consegue corrigi-los.</p>
<p>Você pode olhar para um código mal feito e pensar, esse código não é meu, mas se você já tem que ler aquele código naquele momento é porque já está interagindo com ele, então é melhor consertar logo do que deixar um código de mal exemplo para outros.</p>
<p>Não deixe janelas quebradas, tome como hábito refatorar seu código. É normal escrever um código para resolver um problema e só depois perceber que ele pode ser melhor organizado. Não pule essa etapa!</p>
<p>Outra questão muito importante é que um código não deve ser duplicado, lembre-se do DRY. Códigos duplicados SÃO janelas quebradas.</p>
<p>Se, por um acaso, naquele momento você não tem tempo por causa de um prazo curto, deixe um comentário no código, as IDEs de hoje conseguem reconhecer comentários específicos e transformá-los em TODO lists. Mas tome uma atitude. Com um tempo você vai perceber que você sente prazer em olhar e dizer que um código feito por você é um código bem feito e esses cuidados farão parte da sua rotina.</p>
<p>Se tem um conselho que eu acho que você deve seguir é esse: &quot;use filtro solar&quot;, ops, quero dizer: &quot;não deixe janelas quebradas&quot;, não deixe que seu sistema comece a se deteriorar por coisas pequenas. Conserte-as desde cedo e você com certeza terá um sistema muito mais saudável.</p>
