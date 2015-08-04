---
layout: post
title: Testes integrados e automáticos com Selenium
categories: [Desenvolvimento, selenium, testes, testes integrados]
comments: true
status: publish
type: post
published: true
date: 2009-11-08
alias: /testes-integrados-e-automaticos-com-selenium/index.html
---
Existem muitas maneiras de testarmos nossos sistemas, uma delas é o teste integrado, que nada mais é do que testar o sistema passando por todos os módulos do mesmo. Imaginando um sistema que acessa um banco de dados ou um web service por exemplo, o teste deve cobrir a chamada pela interface de usuário, passando pelas camadas de negócio até chegar no banco ou no web service.

Existem várias maneiras de se realizar testes integrados, a mais comum que eu tenho visto é o teste manual, onde um usuário faz o teste de ponta a ponta. Mas e se houver uma mudança no sistema? Deve-se fazer todos os testes manualmente de novo? Isso com certeza tomaria muito tempo e trabalho. É para esse tipo de caso que existem ferramentas como o <a href="http://seleniumhq.org/" target="_blank">Selenium</a>.

O Selenium é uma ferramenta bem simples e muito fácil de usar. Primeiro, no site do Selenium é possível baixar a IDE e ela roda como um plugin do firefox. Eu não vou falar muito sobre como gravar o teste com o Selenium, porque ele é muito simples e tem um ótimo vídeo no site explicando como gravar teste. Mas neste momento, basta saber que ao abrir a IDE do Selenium, ela começa a gravar todas as ações realizadas no browser, que podem ser salvas e executadas a qualquer momento.

A parte que mais me interessou, é que ao final da gravação do teste é possível exportar esse teste para ser executado dentro de ferramentas de teste unitário, como o nUnit ou o jUnit.

![Exportando o teste para o nunit](/images/2009/11/Screen-shot-2009-11-08-at-20.18.26.png){: .aligncenter}

Como é  possível ver, ele gera o código (nesse caso em C#) para rodar dentro do nUnit.

Para rodar esse teste dentro do nUnit, primeiro é preciso baixar o Selenium RC (Remote Control), no próprio site do Selenium. Ao descompactá-lo, você vai ver que ele tem diversas pastas com clients e um server. No caso do .Net, basta adicionar os assemblies como referência ao projeto de teste, criar uma nova classe para o teste, copiar e colar o código.

Antes de testar é preciso iniciar o server do Remote Control. Junto com as pastas de client existe uma de server. Para iniciar o servidor basta ir no prompt e executar <em>java -jar selenium-server.jar</em>. Se possível, faça isso em uma máquina de servidor para que todos possam executar os testes.

Com o servidor rodando, nós voltamos para o código e ajustamos apenas o método SetupTest com as configurações do servidor e do endereço do site que iremos testar:

{% highlight csharp %}
[SetUp]
public void SetupTest()
{
    selenium = new DefaultSelenium("localhost",
        4444,
        "*firefox",
        "http://localhost:1220/");
    selenium.Start();
    verificationErrors = new StringBuilder();
}
{% endhighlight %}

No caso acima, eu iniciei o servidor na minha máquina, localhost, na porta 4444 que é a padrão, o browser que está usando para testes, no meu caso o firefox (no site tem uma lista dos browsers suportados) e depois o endereço do servidor onde está o site que eu vou testar.

Pronto, isso é tudo o que é necessário para rodar o teste no nUnit. Depois disso, basta o servidor do Remote Control estar ligado e você pode rodar os testes quando e quantas vezes quiser.

<strong>Refatorando seu código</strong>

Pensando em sistemas que não tem testes unitários ou tem um código muito acoplado e de difícil manutenção (ou qualquer outra boa razão para refatorar o código), essa é uma ótima solução para refatorar o código com mais segurança.

A idéia é gerar diversos testes usando o Selenium e gravar esses testes para serem rodados em um framework de testes, como o nUnit, fazer as mudanças no código que achamos necessárias, por exemplo desacoplar o código para permitir que testes unitários sejam criados. Após as modificações rodamos os testes feitos com o Selenium para ver se nada parou de funcionar.

Você pode se perguntar então, por que fazer testes unitários se posso testar todo o sistema só gravando minhas ações no browser? A principal razão é que testes integrados, por passarem por todo o sistema, tendem a ser mais lentos para executar do que testes unitários que devem testar pequenas unidades de código. Se esses testes integrados envolverem chamadas a sistemas de terceiros como Web Services, chamadas via socket, chamadas a ERPs, etc., podem ficar ainda mais lentos. Imagine se você fizer testes para o sistema todo. A tendência é que você não fique esperando que o teste rode, por exemplo, em 10 minutos para saber se cada modificação feita funcionou. Por isso testes unitários devem sempre ser feitos.

<strong>Agende seus testes integrados para rodar periodicamente</strong>

Você pode usar os testes integrados para auxiliar na refatoração de código, principalmente se você não tem testes unitários (e então começar a criá-los). Mas outra questão importante é testar se o sistema/funcionalidade estão funcionando de acordo com o esperado como um todo, ou mais obviamente, integralmente. Mas se o teste demora muito para rodar e você não quer ficar esperando, você sempre pode agendar para que o teste rode de madrugada, por exemplo. Para isso existem ferramentas como o <a href="http://cruisecontrol.sourceforge.net/" target="_blank">CruiseControl</a> e o <a href="http://wiki.hudson-ci.org/display/HUDSON/Meet+Hudson" target="_blank">Hudson</a>, só para citar duas. Essas são ferramentas de Integração Contínua (vou falar sobre isso num outro post) que além de outras coisas, podem rodar os testes integrados em um horário determinado.

Como eu disse anteriormente, existem muitas formas e ferramentas para realizar testes integrados, essa é apenas uma delas, que achei muito prática e fácil, além do que o Selenium é uma ferramenta gratuita.

Site do Selenium - <a href="http://seleniumhq.org/" target="_self">http://seleniumhq.org/</a>
