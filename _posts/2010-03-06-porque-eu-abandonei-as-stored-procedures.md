---
layout: post
title: Porque eu abandonei as stored procedures
categories:
- Desenvolvimento
comments: true
status: publish
type: post
published: true
date: 2010-03-06
alias: /porque-eu-abandonei-as-stored-procedures/index.html
---
<p>OK, eu tenho que admitir, eu ainda não abandonei definitivamente as stored procedures, porque eu preciso dar manutenção em sistemas que as usam. Mas vou dizer porque eu prefiro de todas as formas não usar mais stored procedures.</p>
<p><strong>Lógica espalhada</strong></p>
<p>Stored procedures são um atrativo muito grande para se espalhar a lógica, o simples fato de você poder alterar uma stored procedure, executar no banco e pronto, torna isso muito, mas muito simples. Nesse caso, não precisamos compilar códigos, gerar pacotes de implantação, etc. Mas isso gera um problema muito grande, assim que passar um tempo, digamos, uns meses, semanas ou algumas horas (no caso de alguns), a gente já esqueceu que fizemos aquela regra de negócio (ou só aquele IFzinho) dentro da procedure, ou pior, se for algum novo desenvolvedor a dar manutenção no sistema ele vai demorar a entender que aquela lógica existia ali. Agora, imagine se esse novo desenvolvedor olha essa regra de negócio dentro da procedure e resolve fazer outra regra dentro de outra procedure só porque é mais simples e afinal de contas, outras pessoas fazem também. Pronto, está iniciada a colcha de retalhos.</p>
<p><strong>Testes unitários</strong></p>
<p>Stored procedures são difíceis de se testar unitariamente. Lógica de negócios em stored procedures é código que não é automaticamente testado de uma forma fácil. Eu sei que existem exceções e é possível testar stored procedures usando o nUnit por exemplo, mas eu entendo que testes unitários devem executar o mais rápido possível e devem testar apenas uma unidade de negócio. E testar stored procedures envolve mais do que isso.</p>
<p><strong>Ortogonalidade</strong></p>
<blockquote>
<p>"Quando componentes estão isolados uns dos outros, você sabe que pode mudar um sem ter que se preocupar com o resto."</p>
<p>The Pragmatic Programmer</p>
</blockquote>
<p>Ortogonalidade significa independência ou desacoplamento. Mudança em uma coisa não implica em mudança em outra.</p>
<p>No caso das stored procedures isso é muito fácil de perceber, toda vez que você tiver que adicionar ou remover uma coluna/propriedade do seu código para INSERIR/ATUALIZAR/LISTAR alguma coisa você terá que alterar o código que chama a stored procedure e também a própria procedure, isso quebra dois principios dos programadores pragmáticos, a <strong>ortogonalidade</strong> porque você terá que alterar dois pontos e consequentemente terá quebrado o <a href="http://lucattelli.com/blog/?p=313" target="_blank">DRY</a>. Com a grande popularização dos <a href="http://en.wikipedia.org/wiki/List_of_object-relational_mapping_software" target="_blank">frameworks de ORM</a> é muito mais fácil manter essas camadas isoladas.</p>
<p><strong>A Exceção</strong></p>
<p>Existe um único caso em que eu abriria mão e usaria uma stored procedure, no caso do ganho de performace. Procedures ficam no cache dos servidores de banco de dados, ou seja, os bancos de dados já tem um plano de execução ?pensado? para essas procedures, já tem o código das procedures compilados, já sabe quais índices usar, etc. Mas esse ganho teria que ser muito grande, e em um caso onde a ação dentro da procedure fosse muito utilizada dentro do sistema, fazendo com que o benefício fosse realmente válido.</p>
<p><strong>Conclusão</strong></p>
<p>Talvez você esteja lendo esse texto e pensando que muito provavelmente o vilão da história não é a stored procedure e talvez o programador. Eu diria que são os dois, mas como não é possível controlar o que cada desenvolvedor vai fazer, principalmente no calor de um projeto, e analisar procedures é um trabalho que toma tempo (que dificilmente temos), é muito mais fácil declarar uma política que no projeto não deve haver stored procedures, com isso, eu tenho certeza, muitas dores de cabeça serão evitadas.</p>
