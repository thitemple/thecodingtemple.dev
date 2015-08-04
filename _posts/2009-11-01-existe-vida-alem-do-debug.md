---
layout: post
title: Existe vida além do debug
categories: [Desenvolvimento, testes]
status: publish
type: post
published: true
comments: true
date: 2009-11-01
alias: /existe-vida-alem-do-debug/index.html
---
Fico impressionado a cada vez que resolvo falar com algum desenvolvedor sobre testes unitários. Na maioria das vezes em que faço isso a resposta que ouço é que eles não os fazem, não sabem como, ou em muitos casos acham que fazer testes unitários vai simplesmente aumentar o trabalho e o tempo de desenvolvimento, coisas que eles não podem alegar dentro de cronogramas apertados.

Ultimamente, tenho tomado como regra sempre fazer testes unitários e em alguns projetos já tenho até exercitado práticas como Test Driven Development (TDD) e Behavior Driven Development (BDD) - embora essas práticas não sejam obrigatórias para se ter testes unitários e no caso do TDD, este é mais focado em design, os testes são apenas uma consequência.

De qualquer forma, a prática dos testes unitários tem me trazido vários benefícios e comparar com projetos onde não existem os testes me ajuda a perceber esses benefícios e eu gostaria de compartilhá-los aqui.

Antes de falar dos benefícios gostaria apenas de citar que sim, fazer testes unitários vai tomar mais tempo da codificação da sua funcionalidade, alguns estudos indicam que esse tempo pode até dobrar. Mas como vamos ver mais adiante, esse tempo é depois recuperado em outras atividades.

1) Testes unitários são mais rápidos de serem executados
<p style="padding-left: 30px;">Considerando que você está desenvolvendo algo com uma interface gráfica e na maioria das vezes estamos, se você é um desenvolvedor que se preocupa o mínimo com o código que produz, toda vez que você vai testar o que fez, você tem que entrar no seu ambiente gráfico (seja ele web ou desktop), navegar nas opções até chegar no ponto onde deseja realmente testar. Imagine se para corrigir um defeito ou implementar uma nova funcionalidade você tiver que fazer isso várias vezes. Esse tempo nunca é contado no seu desenvolvimento e muitas vezes não aparece em estatísticas principalmente se for uma correção de um bug.</p>
<p style="padding-left: 30px;">No caso dos testes unitários, utilizando a variedade de ferramentas que temos, escrevemos o teste uma vez apenas e podemos executá-los com a dificuldade de apenas um clique!</p>
2) Testes unitários ajudam a documentar o seu sistema
<p style="padding-left: 30px;">A maioria dos desenvolvedores não gosta de fazer documentos e eu me incluo nesse grupo. Agora se você encontrar um método que diz:</p>

{% highlight csharp %}
[Test]
public void ListaTarefas_recebeIdProjeto1_DeveRetornarTarefasDoProjeto()
{
    //validação
}
{% endhighlight %}

Ou assim:

{% highlight ruby %}
it "deve ter um cliente válido associado" do
    #validação
end
{% endhighlight %}

<p style="padding-left: 30px;">Na hora já sabemos qual a característica do código sob teste. Ou seja, um teste unitário <strong>(bem escrito)</strong> nos ajuda a entender o que o código faz ou deveria fazer, mais uma vez poupando tempo de leitura de código para entender ou lembrar o que ele faz. Porque eu não lembro com precisão o que fiz no mês passado, o que dirá de código que escrevi seis meses atrás.</p>
<p style="padding-left: 30px;">Pra ficar claro, há alguns dias atrás fomos testar uma funcionalidade de um sistema que não tem testes unitários e depois de algumas horas de debug achamos um if que deveria retornar dados de uma tabela em um caso e de outra tabela no else. E a pergunta surgiu "por que esse if está ai?". Ninguém sabia responder de imediato porque aquilo foi feito há muito tempo, e que poderia ser facilmente respondido se tivesse um teste unitário com um nome claro, bastava comentar o código, esperar algum teste falhar e ver o porquê daquele if. Muito mais simples e rápido do que ter que mais uma vez gastar tempo em debug que ninguém soma no tempo total do projeto.</p>
3) Testes unitários podem ser executados por qualquer desenvolvedor
<p style="padding-left: 30px;">Quantos vezes não temos que alterar código que não fizemos ou que fizemos há muito tempo e que não nos lembramos mais dele direito? Nessas vezes eu sempre fico com aquela sensação de "será que eu realmente podia alterar isso"?</p>
<p style="padding-left: 30px;">Se o código tiver testes unitários e alterarmos algo que não devia, um teste irá falhar e se ele tiver um nome apropriado como vimos acima, será muito fácil saber o que foi feito de errado, trazendo confiança para alteração, mais tempo economizado, já que não vamos ter que debugar, analisar variáveis, ou realizar execuções linha a linha até descobrirmos o que parou. Isso, obviamente, se descobrirmos, porque muitas vezes é o usuário quem descobre, naquela situação de "você corrigiu uma coisa e quebrou outra".</p>
4) Testes unitários nos ajudam a melhorar o design do software
<p style="padding-left: 30px;">Esse argumento é válido principalmente para as linguagens estaticamente tipadas como java e C#, mas não somente para elas.</p>
<p style="padding-left: 30px;">Um dos princípios do teste unitário é que ele deve testar uma unidade de código. Se um teste unitário é escrito de forma que ele começa testando sua camada de interface com o usuário, passa pelo camada de negócios, camada de dados e vai até o banco de dados (assumindo que o software seja divido em camadas), ele não é mais um teste unitário e sim um teste de integração - não há nada de errado com testes de integração, eles só servem para um propósito diferente. Bom, partindo desse princípio, quando escrevemos testes unitários estamos isolando as camadas do nosso sistema e se fizermos isso seguindo as orientações do <a href="http://pt.wikipedia.org/wiki/Gang_of_Four" target="_self">GOF</a> estaremos isolando as camadas, desenvolvendo orientado à interface, o que além do isolamento em si trás mais um benefício. Imagine o seguinte cenário:</p>
<p style="padding-left: 30px;"><span style="color: #3366ff;"><span style="color: #000000;">Você desenvolve um um software/produto que pode ser utilizado por vários clientes e na maioria dos casos esse produto deve se comportar de forma igual em todos os clientes, mas em um cliente específico uma das partes do sistema pede um comportamento diferente, o que você faz: (a) faz um if dentro daquela funcionalidade, (b) faz um build específico para aquele cliente ou (c) faz uma nova classe que implementa aquela interface especificamente para aquele cliente, não muda o código já existente e ainda mantém um único build?</span></span></p>
<p style="padding-left: 30px;"><span style="color: #3366ff;"><span style="color: #000000;">É claro pra mim que e a terceira opção é a melhor, e isso pode ser discutido em um outro post. Então voltemos ao teste unitário, e o benefício do desenvolvimento separado em camadas :-). Se o sistema tiver testes unitários e mais uma vez, testes unitários bem feitos, seu sistema consequentemente será mais isolado e terá uma manutenção muito mais fácil.</span></span></p>
<span style="color: #3366ff;"><span style="color: #000000;">5) Testes unitários auxiliam na produção de código com menos defeito</span></span>
<p style="padding-left: 30px;"><span style="color: #3366ff;"><span style="color: #000000;">Parece óbvia a afirmação, mas muitas pessoas só percebem a diferença quando começam a fazer os testes unitários. </span></span></p>
<p style="padding-left: 30px;"><span style="color: #3366ff;"><span style="color: #000000;">A lógica é simples, mas só se aplica quando decidimos fazer os testes porque queremos melhorar a qualidade do código e não porque fomos obrigados a fazê-los.</span></span></p>
<p style="padding-left: 30px;"><span style="color: #3366ff;"><span style="color: #000000;">A partir do momento que começamos a escrever testes unitários, olhamos para uma pequena porção isolada de código e pensamos em como ela pode falhar, somente então escrevemos o teste. É muito mais fácil pensar em como um método de 10 linhas pode falhar e testá-lo, do que executar um monte de telas para chegar no ponto que queremos testar.</span> </span></p>
<span style="color: #3366ff;"><span style="color: #000000;">Com certeza existem outros argumentos que caberiam para justificar os testes unitários, mas honestamente esses tem sido os principais que eu tenho visto desde que comecei a adotar a prática dos testes unitários. Espero que esse post lhe anime a estudar e iniciar essa prática, eu tenho convicção de que a sua vida será bem melhor no momento que você reduzir o seu tempo de debug. :-)</span></span>

Ainda em tempo, existem diversos livros sobre testes unitários, um que eu li e realmente gostei foi esse <a href="http://www.amazon.com/Art-Unit-Testing-Examples-NET/dp/1933988274/ref=sr_1_1?ie=UTF8&amp;s=books&amp;qid=1257083405&amp;sr=8-1" target="_blank">The Art of Unit Testing</a>, infelizmente, apenas em inglês.
