---
layout: post
title: Programação orientada à coincidência
categories:
- Desenvolvimento
tags: []
comments: true
status: publish
type: post
published: true
alias: /programacao-orientada-a-coincidencia/index.html
date: 2013-07-16
---
Eu gosto muito de programar, gosto dos desafios técnicos que programar que traz. Mas o que eu mais gosto é do constante aprendizado que faz parte da profissão de programador.

Por causa de tudo isso eu nunca entendi ou gostei de frases como "se esta funcionando não mexe" ou "não encosta nesse código porque senão para de funcionar". Como alguém que gosta de aprender, minha primeira pergunta é: porque para de funcionar? Ou, porque não pode mexer? Ou, o que vai estragar?

Informações sobre os mais diversos assuntos estão disponíveis de forma muito fácil (para uns até um pouco mais que para outros, não é NSA?) então não vejo sentido de não buscar se aprofundar nos assuntos. <a href="http://www.hanselman.com/">Scott Hanselman</a>, em um ótimo post, já disse que <a href="http://bit.ly/1dAms6P" target="_blank">a internet não é uma caixa preta</a>. Citando uma frase desse post que resume o que eu quero dizer:
<blockquote>When coding on the web, remember that effectively NOTHING is hidden from you.</blockquote>
NADA esta escondido de você, enfase no NADA.

No livro <a href="http://www.amazon.com/gp/product/020161622X/ref=as_li_ss_tl?ie=UTF8&amp;camp=1789&amp;creative=390957&amp;creativeASIN=020161622X&amp;linkCode=as2&amp;tag=tempcodi0f-20">The Pragmatic Programmer</a>, Andrew Hunt e David Thomas dedicam um capitulo à programação por coincidência e eles abrem o capitulo com uma metáfora muito interessante. Eles comparam um programador que codifica por tentativa e erro, resolvendo problemas de forma aleatórias e sem conhecimento sobre o assunto à um soldado andando em um campo minado. O soldado pode dar um, dois, vários passos sem pisar em uma mina, achar que esta fazendo algo correto, mas é somente uma caminhada aleatória, uma hora ele pode pisar em uma mina e explodir.

![Campo minado ](/images/2013/07/falklands-minefield1.jpg){: .aligncenter}

Outra coisa bem comum quando não se entende do problema, é a tendencia de resolver as coisas sempre do mesmo jeito, ou seja é o velho caso daquela frase "se você só tem um martelo todo o problema é um prego". Parece que é uma formula magica, funcionou para um problema não se sabe como, deve funcionar para os outros.

Ainda nesse sentido, pode ser que um problema seja resolvido passando dados inválidos
para um método e que isso resulte numa resposta inesperada do programa. Mas se a sua unica fonte de analise for a resposta daquela chamada com dados inválidos, quando aquele programa for corrigido, sua chamada não vai mais funcionar porque aquela coincidência foi modificada.

![Parece um coelho, mas... ](/images/2013/07/coincidence1.jpg){: .aligncenter}

E o pior na minha opinião, é a ignorância que isso gera. Até hoje ainda vejo gente que acha que POST é mais seguro do que GET só porque os dados não são enviados na URL!

<strong>Escolhendo a pilula vermelha</strong>

<iframe src="http://www.youtube.com/embed/xFhn_GUAhGU" frameborder="0" width="420" height="315"></iframe>

E sim, entender e aprender as coisas dá trabalho, toma tempo, tomar a pilula vermelha às vezes quer dizer por em prática para aprender, ou, como já disse um Yogi Berra:
<blockquote>Mastering knowledge alone, without experience isn't effective</blockquote>
Ou, numa tradução livre e direta: <em>Dominar um assunto sem a pratica não é efetivo.</em>

<strong>Mas até onde ir?</strong>

Essa é uma linha difícil de traçar. De uma forma geral eu tento entender o suficiente para resolver o problema que eu estou enfrentando, e qualquer outra coisa, eu deixo para ler mais tarde.

Por exemplo, eu estava estudando Backbone.js usando <a href="http://bit.ly/12QNKkh" target="_blank">esse tutorial</a>, e nele é usado o <a href="http://bit.ly/15yM296" target="_blank">padrão AMD</a> implementado pelo <a href="http://requirejs.org/" target="_blank">Require.JS</a>. Eu podia simplesmente seguir o tutorial que isso resolveria o problema, mas o que eu decidi fazer foi ler um pouco sobre o Require.JS no seu site para entender o seu funcionamento e depois ler sobre o padrão AMD quando eu tivesse um pouco mais de tempo. Esse tutorial, também usa o Node.js, ou seja, depois eu ainda fui explorar um pouco sobre o Node.js :)

É claro, não existe uma regra, e ninguém pode dizer até onde cada um deve ir, você é quem tem que traçar a linha entre o que é informação necessária e o que é procrastinação, sempre tentando ser pragmático.

O mais importante de tudo é deixar a preguiça de lado e entender o que você faz. Não basta pegar a primeira resposta no StackOverflow. Afinal de contas, você também não ia gostar que um médico te receitasse um medicamento só porque esse remédio funciona para a dor de barriga de outra pessoa, você quer que ele te examine e te diga porque esse remédio vai funcionar, não é?
