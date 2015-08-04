---
layout: post
title: Integração Contínua com Cruise Control .NET
categories:
- Desenvolvimento
tags:
- cruise control
- integracao continua
- msbuild
- nunit
comments: true
status: publish
type: post
published: true
date: 2010-06-20
alias: /integracao-continua-com-cruise-control-net/index.html
description: Como configurar sua aplicaçao para fazer Integração Contínua com Cruise Control .NET
---
<a href="/blog/2010/06/14/builds-automticos-com-msbuild-nunit-e-ncover/">Anteriormente eu falei sobre builds automáticos com o MSBuild</a>, bem, se você levar ao pé da letra, os builds feitos de acordo com aquele post não eram exatamente automáticos, o que acontecia de forma automática no momento em que o build era executado eram os testes unitários e a análise de cobertura de código feita pelos testes unitários. Agora, eu vou falar sobre como fazer a integração contínua com Cruise Control .NET.

**Sobre Integração Contínua**

Eu não vou parar e explicar aqui sobre integração contínua, acredito que uma ótima fonte é o texto do <a href="http://martinfowler.com/" target="_blank">Martin Fowler</a> traduzido pelo <a href="http://www.blogdopedro.net/" target="_blank">Pedro Mendes</a> e que pode <a href="http://www.blogdopedro.net/2009/03/04/traducao-do-artigo-sobre-integracao-continua" target="_blank">ser encontrado aqui</a>.

Apenas como um resumo: integração contínua é uma prática, ou melhor, um conjunto de práticas que visa, entre outras coisas, detectar problemas no código o mais rápido possível para que esse código se <em>integre </em>a um repositório de código compartilhado por outros desenvolvedores.

Algumas dessas práticas são:
<ul>
	<li>Possuir um repositório central para o código</li>
	<li>Realização de builds automáticos</li>
	<li>Check-in ou commit do código frequentemente</li>
	<li>Testes executados de forma automática</li>
	<li>Que todos os participantes tenham uma visualização do código</li>
</ul>
Como disse, esse é apenas um resumo, eu recomendo fortemente que você leia o texto indicado acima.

**O Cruise Control .NET**

O Cruise Control .NET é uma ferramenta open source para implementação de integração contínua. Obviamente não é única, mas é uma das mais conhecidas no mercado juntamente com as irmãs Cruise Control (feita em java) e Cruise Control rb (feita em ruby). Segue aqui um <a href="http://sourceforge.net/projects/ccnet/files/CruiseControl.NET%20Releases/" target="_blank">link para baixar o Cruise Control .NET.</a>

A instalação é bem simples, as únicas observações são que após a instalação deve-se definir uma senha para o administrador do dashboard, para isso vá até a pasta onde está instalado o Cruise Control NETwebdashboard e abra o arquivo dashboard.config e altere a configuração com a senha escolhida:

{% highlight xml %}
<administrationPlugin password="" />
{% endhighlight %}

Além disso é preciso dar permissão de escrita no arquivo dashboard.config e na pasta xls para o usuário IUSR_XXX, onde XXX é o nome da máquina onde você está realizando a instalação do Cruise Control. Após a instalação do Cruise Control, um serviço é adicionado ao windows que precisa ser iniciado. **Configurando o Cruise Control .NET** Antes de colocar um projeto CCNet vamos configurá-lo para exibir os dados que gostaríamos que são os dados do MSBuild, do NUnit e do NCover. Se você fez uma instalação padrão deve acessar o dashboard pelo endereço http://localhost/ccnet

![Dashboard do Cruise Control ](/images/2010/06/ScreenHunter_01%20Jun.%2019%2021.33_2.gif){: .aligncenter}

Clique em Administer Dashboard, entre com a senha configurada para o administrador e você deve ver uma lista com os Packages disponíveis. Instale os 3 que vamos usar clicando em cada um deles, MSBuild Results, NCover Results e NUnit Results. <strong>Configurando um novo projeto no Cruise Control</strong> Configurar um projeto no Cruise Control é editar um arquivo XML, não é muito amigável mas é de certa forma bem simples. O arquivo que vamos editar é o ccnet.config que fica na pasta server onde foi instalado o CCNet. <a href="/blog/2010/06/14/builds-automticos-com-msbuild-nunit-e-ncover/">Estou usando o projeto do post anterior sobre o MSBuild</a> e configurando ele no CCNet. Primeiro, estou assumindo que você tem o seu projeto em um repósitorio, no meu caso, estou usando o Subversion, mas o CCNet suporta diversos. Veja como ficou configurado o meu arquivo ccnet.config:

{% highlight xml %}
<cruisecontrol xmlns:cb="urn:ccnet.config.builder">
    <project>
        <name>MSBuildDemo</name>
        <triggers>
            <intervalTrigger />
        </triggers>
        <workingDirectory>c:CCNetWorkingMSBuildDemo</workingDirectory>
        <artifactDirectory>c:CCNetArtifactsMSBuildDemo</artifactDirectory>
        <modificationDelaySeconds>2</modificationDelaySeconds>
        <sourcecontrol type="svn">
            <trunkUrl>http://localhost:8181/svn/blog/MSBuildDemo</trunkUrl>
        </sourcecontrol>
        <tasks>
            <msbuild>
                <executable>C:WINDOWSMicrosoft.NETFrameworkv3.5MSBuild.exe</executable>
                <projectFile>MSBuildDemo.proj</projectFile>
                <buildArgs>/p:Configuration=Debug /v:diag</buildArgs>
                <targets>CoberturaTestestargets>
                <logger>C:Program FilesCruiseControl.NETserverThoughtWorks.CruiseControl.MsBuild.dll</logger>
            </msbuild>
        </tasks>
        <publishers>
            <merge>
                <files>
                    <file>c:CCNetArtifactsMSBuildDemo*ResultadosTestes.xml</file>
                    <file>c:CCNetArtifactsMSBuildDemo*ResumoCobertura.xml</file>
                </files>
            </merge>
            <xmllogger />
        </publishers>
    </project>
</cruisecontrol>
{% endhighlight %}

Vamos por partes.

Na linha 3 definimos o nome do projeto.

Na linha 4 definimos o que o CCNet usará para determinar se deve ou não executar as atividades do projeto, no caso do nosso exemplo, o CCNet irá, em um intervalo de tempo, verificar se existe alguma modificação no repositório, e se houver, executar as atividades.

Na linha 7 definimos uma pasta onde o CCNet vai baixar os arquivos do repositório e compilar os projetos.

Na linha 8 definimos uma pasta onde o CCNet irá salvar os arquivos que serão gerados como produto da compilação, como os relatórios do NUnit e do NCover.

Das linhas 10 a 12 definimos os dados do repositório, nesse caso o subversion.

Das linhas 13 a 21 definimos as tarefas, nesse caso, que a compilação será executada pelo MSBuild, onde está o executável do MSBuild, o script do MSBuild que deve ser executado, qual o target do MSBuild e logger que será usado para as atividades do MSBuild.

Por último das linhas 22 a 28 definimos quais arquivos gerados pelo script do MSBuild devem ser usados para gerar os relatórios do CCNet.

Se der tudo certo, ao acessar o dashboard você deve ver algo como:

![Status do build ](/images/2010/06/ScreenHunter_02%20Jun.%2019%2021.36_2.gif){: .aligncenter}

Clique em MSBuildDemo e você deverá ver as compilações já feitas, e pode clicar nas compilações e ver os detalhes. O importante é que a partir de agora a cada vez que for realizado um novo check-in o CCNet irá perceber que existe uma alteração e executará o script do MSBuild que definimos novamente.

**Alterando o script do MSBuild**

Se você está seguindo o exemplo feito no post anterior, precisamos fazer algumas alterações no script do MSBuild. Precisamos apenas alterar o script para que salve os arquivos do NUnit e do NCover na pasta de artefatos definida no XML que configuramos o projeto do CCNet. Quanto um script do MSBuild é executado pelo CCNet uma variável CCNetArtifactDirectory é definida com o caminho da pasta de artefatos então a tarefa do NCover ficou assim:

{% highlight xml %}
<NCover ToolPath="$(CaminhoNCover)"
        CommandLineExe="$(ComandoNUnit)"
        CommandLineArgs="$(TestFolder)bin$(Configuration)UnitTests.dll"
        WorkingDirectory="$(TestFolder)bin$(Configuration)"
        CoverageFile="$(CCNetArtifactDirectory)$(ArquivoNCover)"
        LogFile="$(ArquivoLogNCover)"
        ExcludeAttributes="MSBuildDemo.Common.CoverageExcludeAttribute"
        AssemblyList="@(CodeProjects->'%(FileName)')" />
{% endhighlight %}

E as tarefas do NCover Explorer ficaram assim:

{% highlight xml %}
<NCoverExplorer ToolPath="$(CaminhoNCoverExplorer)"
    ProjectName="$(ProjectName)"
    OutputDir="$(CCNetArtifactDirectory)"
    CoverageFiles="$(CCNetArtifactDirectory)$(ArquivoNCover)"
    SatisfactoryCoverage="80"
    ReportType="3"
    XmlReportName="ResumoCobertura.xml"
    HtmlReportName="ResumoCobertura.html" />
<NCoverExplorer ToolPath="$(CaminhoNCoverExplorer)"
    ProjectName="$(ProjectName)"
    OutputDir="$(CCNetArtifactDirectory)"
    CoverageFiles="$(CCNetArtifactDirectory)$(ArquivoNCover)"
    SatisfactoryCoverage="80"
    ReportType="4"
    XmlReportName="RelatorioCoberturaPorClasse.xml"
    HtmlReportName="RelatorioCoberturaPorClasse.html" />
{% endhighlight %}

E as tarefas do NUnit foram alteradas assim:

{% highlight xml %}
<CreateItem Include="$(CCNetArtifactDirectory)*.$(ArquivoNUnit)">
    <Output TaskParameter="Include" ItemName="ExistingNUnitResults"/>
</CreateItem>

<Delete Files="@(ExistingNUnitResults)"/>

<Copy SourceFiles="@(NUnitResults)"
    DestinationFolder="$(CCNetArtifactDirectory)"
    ContinueOnError="true"/>
{% endhighlight %}

Um detalhe importante é que os nomes dos arquivos gerados pelo NUnit e pelo NCover devem ser iguais aos nomes dos arquivos dentro da tag files no projeto configurado dentro do ccnet.config. <strong>Utilizando o CCTray</strong> O CCTray é um aplicativo que instalamos e ele fica constantemente consultando o servidor do CCNet e nos avisa se algum build ou teste unitário foi quebrado. No dashboard do CCNet tem um link para fazer download do CCTray e novamente a instalação é muito simples.

![Download CCTray ](/images/2010/06/ScreenHunter_01%20Jun.%2019%2021.33_thumb.gif){: .aligncenter}

A configuração dele também é simples, após instalado, vá em File -> Settings -> Build Projects clique em Add para e depois em Add Server, aponte para o endereço onde está instalado o servidor depois em OK, agora é só selecionar o seu projeto. <strong>Customizando os relatórios do NCover Explorer</strong> Quando você baixa o NCover Explorer Extras, dentro do zip existe uma pasta Cruise Control .NET, copie os arquivos .xls que estão nessa pasta para a pasta webdashboard/xls onde foi instalado o seu CCNet. Depois a abra o arquivo dashboard.config e edite para que fique assim:

{% highlight xml %}
...
<xslFileNames>
    ...
    <xslFile>xslNCoverExplorerSummary.xslxslFile>
    ...
</xslFileNames>
<xslReportBuildPlugin description="NCover Report" actionName="NCoverBuildReport" xslFileName="xslNCoverExplorer.xsl" />
{% endhighlight %}

Entre no dashboard e clique em Force Build, depois que o build estiver completo e você entrar pelo dashboard nesse último build, você deverá ver um relatório como o abaixo:

![Relatório de testes](/images/2010/06/ScreenHunter_02%20Jun.%2020%2015.28_2.gif){: .aligncenter}

**Conclusão**

Pronto, agora sim você tem um projeto que é compilado automaticamente a cada check-in/commit, os testes unitários são executados também de forma automática e se por acaso o projeto parar de compilar ou algum teste unitário falhar o CCTray avisará com uma mensagem e inclusive fará o trabalho de dedo duro dizendo quem foi o usuário que fez o último commit com a falha.

O ideal é que todos do projeto tenham o CCTray e que a primeira, ou uma das primeiras atividades seja configurar o script para compilação automática.

Com isso você pode ter mais certeza, a cada commit, que seu código não irá causar problemas a outros e se causar, você terá uma resposta imediata, o que torna a correção do problema muito mais fácil.
