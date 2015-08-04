---
layout: post
title: Builds automáticos com MSBuild, NUnit e NCover
categories:
- Desenvolvimento
- build
- build automatico
- msbuild
- ncover
- nunit
comments: true
status: publish
type: post
published: true
date: 2010-06-14
alias: /builds-automticos-com-msbuild-nunit-e-ncover/index.html
---
O MSBuild é a ferramenta da Microsoft usada em conjunto com o Visual Studio para compilar os projetos. Toda vez que compilamos um projeto no Visual Studio (a partir da versão 2005 pelo menos), o que acontece é que o VS chama o MSBuild para executar a tarefa de compilar os projetos da solução.

O bom disso é que podemos customizar a compilação/deploy para executar diversas tarefas nesse momento, entre essas atividades existem algumas como zipar o projeto compilado, enviar por email, publicar no IIS, etc. Mas eu queria falar sobre duas que tenho usado que são: executar os testes unitários e executar uma ferramenta de cobertura de código para ver qual a porcentagem de código coberto pelos testes unitários.

<strong>O projeto demo</strong>

Para começar, criei um solução usando o ASP.NET MVC, com um componente para acesso a dados separado do projeto de Web. Apenas como forma de mostrar o MSBuild compilando projetos diferentes.

![Diagrama Componentes ](/images/2010/06/Diagrama%20Componentes_2.png){: .aligncenter}

O projeto é bem simples, a idéia mesmo é conectar no intergalaxialmente famoso banco de dados Northwind e exibir os dados da tabela de categorias. Uau!!! Uma tarefa que consumirá horas, mas, como eu disse o foco é mostrar um pouco do funcionamento do MSBuild. <a href="https://github.com/vintem/MSBuildDemo" target="_blank">O código da aplicação está disponível aqui.</a>

<strong>Pré-requisitos</strong>

O MSBuild é instalado junto com o Visual Studio, mas existem algumas coisas que você vai precisar para rodar esse demo. Espero que você já tenha o <a href="http://www.nunit.org/index.php?p=download" target="_blank">NUnit</a> instalado, eu estou usando a versão 2.5.3. Além do NUnit você vai precisar:
<ul>
	<li><a href="http://www.ncover.com/download/file?filename=NCover-1.5.8.zip" target="_blank">NCover</a> - eles pedem um cadastro e existem versões pagas, mas a versão 1.5.8 é gratuita e serve para os nossos propósitos.</li>
	<li><a href="http://www.kiwidude.com/dotnet/NCoverExplorer-1.4.0.7.zip" target="_blank">NCoverExplorer</a> - para gerar um relatório mais amigável do NCover.</li>
	<li><a href="http://www.kiwidude.com/dotnet/NCoverExplorer.Extras-1.4.0.5.zip" target="_blank">NCoverExplorer Extras</a> - possui tarefas customizadas para o MSBuild executar o NCoverExplorer.</li>
	<li><a href="http://msbuildtasks.tigris.org/" target="_blank">MSBuild Community Tasks</a> - tarefas customizadas feitas para o MSBuild.</li>
</ul>
O NUnit, NCover e o MSBuild Community Tasks possuem instaladores próprios.O NCoverExplorer e o NCoverExplorer Extras são um pouco diferentes. O NCoverExplorer não precisa de instalação, por isso eu já inclui dentro do zip com o código, na pasta tools.

Quando você baixar o NCoverExplorer Extras terá uma pasta zip e dentro dela uma dll chamada NCoverExplorer.MSBuildTasks.dll, eu, apenas por uma questão de organização criei uma pasta c:Program FilesNCoverBuild Task Plugins e copiei essa dll lá dentro.

Pronto, isso é tudo o que é necessário para rodar o MSBuild.

<strong>Entenda o arquivo do MSBuild</strong>

Depois de baixar, olhar o código e os testes unitários abra o arquivo MSBuildDemo.proj.

![](/images/2010/06/ScreenHunter_01%20Jun.%2011%2018.09_2.gif){: .aligncenter}

O arquivo MSBuildDemo.proj nada mais é do que um arquivo xml. Então vamos começar a entendê-lo.

{% highlight xml %}
<Project DefaultTargets="Build"
ToolsVersion="3.5"
InitialTargets="BuscaProjetos"
xmlns="http://schemas.microsoft.com/developer/msbuild/2003">

<!--
Baixar MSBuildCommunity tasks de http://msbuildtasks.tigris.org/
-->
<Import Project="$(MSBuildExtensionsPath)\MSBuildCommunityTasks\MSBuild.Community.Tasks.Targets"/>

<PropertyGroup>
<SolutionName>MSBuildDemo.sln</SolutionName>
<CodeFolder>$(MSBuildProjectDirectory)</CodeFolder><!-- Variavel do MSBuild com diretorio do projeto -->
<TestFolder>$(MSBuildProjectDirectory)\tests\UnitTests</TestFolder>
<ResultsFolder>$(MSBuildProjectDirectory)\Results</ResultsFolder>
<Configuration Condition=" '$(Configuration)' == '' ">Debug</Configuration>
<Platform Condition=" '$(Platform)' == '' ">AnyCPU</Platform>
</PropertyGroup>

<PropertyGroup>
<CaminhoNUnit>C:\Program Files\NUnit 2.5.3\bin\net-2.0\</CaminhoNUnit>
<ComandoNUnit>$(CaminhoNUnit)nunit-console.exe</ComandoNUnit>
<ArquivoNUnit>ResultadosTestes.xml</ArquivoNUnit>
<CaminhoNCover>C:\Program Files\NCover</CaminhoNCover>
<ArquivoNCover>ResultadoNCover.xml</ArquivoNCover>
<ArquivoLogNCover>Coverage.log</ArquivoLogNCover>
<CaminhoNCoverExplorer>$(MSBuildProjectDirectory)\tools\NCoverExplorer</CaminhoNCoverExplorer>
</PropertyGroup>
{% endhighlight %}

Primeiro, veja que na linha 9 apontamos para a nossa dll instalada pelo MSBuild Community Tasks.

O resto do código acima é bem fácil de entender, estamos definindo variáveis que vamos usar depois nas tarefas de deploy, algumas coisas que valem mencionar.
<ul>
	<li>Definição do arquivo .sln na linha 12</li>
	<li>Definição dos caminhos das ferramentas no bloco que vai da linha 20 a 28</li>
</ul>
Agora precisamos identificar os projetos da solução que serão compilados e os projetos de testes, faremos assim:

{% highlight xml %}
<Target Name="BuscaProjetos">

<!-- Busca todos os projetos da solucao -->
<GetSolutionProjects Solution="$(CodeFolder)\$(SolutionName)">
<Output TaskParameter="Output" ItemName="ProjetosSolucao" />
</GetSolutionProjects>

<!-- Busca os projetos de Testes -->
<RegexMatch Input="@(ProjetosSolucao)" Expression=".*?[\.]?(Test[s]{0,1}|IntegrationTest)[\.]csproj$">
<Output TaskParameter="Output" ItemName="ProjetosTeste"/>
</RegexMatch>

<!-- Separa somente os projetos da solução sem os testes -->
<CreateItem Include="@(ProjetosSolucao)"
Exclude="@(ProjetosTeste)">
<Output TaskParameter="Include" ItemName="CodeProjects"/>
</CreateItem>

</Target>
{% endhighlight %}

Vale mencionar aqui que a propriedade ItemName de cada tag Output é uma váriavel criada que pode ser utilizada depois. Basicamente estamos buscando todos os projetos da solução, usando uma Expressão Regular para encontrar os Projetos que tenham a palavra Test ou IntegrationTest para encontrar os projetos de testes e separando os dois tipos de projetos. Agora vamos compilar os projetos que não são testes.

{% highlight xml %}
<Target Name="Build">

<Message Text="#--------- Compilando Projetos ---------#" />

<!-- Compila os assemblies -->
<MSBuild Projects="@(CodeProjects)"
Targets="$(BuildTargets)"
Properties="Configuration=$(Configuration);Platform=$(Platform)">
<Output TaskParameter="TargetOutputs"
ItemName="CodeAssemblies"/>
</MSBuild>
</Target>
{% endhighlight %}

E agora compilamos os projetos de Testes

{% highlight xml %}
<Target Name="BuildTests" DependsOnTargets="Build">

<Message Text="#--------- Compilando Testes ---------#" />

<MSBuild Projects="@(ProjetosTeste)"
Targets="$(BuildTargets)"
Properties="Configuration=$(Configuration);Platform=$(Platform)">
<Output TaskParameter="TargetOutputs"
ItemName="AssembliesTeste"/>
</MSBuild>
</Target>
{% endhighlight %}

E a última etapa é rodar o NCover e o NCoverExplorer

{% highlight xml %}
<Target Name="Tests" DependsOnTargets="BuildTests">
<Message Text="#--------- Executando NUnit ---------#" />

<NUnit Assemblies="@(AssembliesTeste)"
ToolPath="$(CaminhoNUnit)"
WorkingDirectory="%(AssembliesTeste.RootDir)%(AssembliesTeste.Directory)"
OutputXmlFile="@(AssembliesTeste->'%(FullPath).$(ArquivoNUnit)')"
ContinueOnError="true">
<Output TaskParameter="ExitCode" ItemName="NUnitExitCodes"/>
</NUnit>
</Target>

<UsingTask TaskName="NCoverExplorer.MSBuildTasks.NCover" AssemblyFile="$(CaminhoNCover)\Build Task Plugins\NCoverExplorer.MSBuildTasks.dll" />
<UsingTask TaskName="NCoverExplorer.MSBuildTasks.NCoverExplorer" AssemblyFile="$(CaminhoNCover)\Build Task Plugins\NCoverExplorer.MSBuildTasks.dll" />

<Target Name="CoberturaTestes" DependsOnTargets="Tests">
<Message Text="#--------- Executando NCover ---------#" />

<MakeDir Directories="$(ResultsFolder)" Condition="!Exists('$(ResultsFolder)')" />

<NCover ToolPath="$(CaminhoNCover)"
CommandLineExe="$(ComandoNUnit)"
CommandLineArgs="$(TestFolder)\bin\$(Configuration)\UnitTests.dll"
WorkingDirectory="$(TestFolder)\bin\$(Configuration)"
CoverageFile="$(ResultsFolder)\$(ArquivoNCover)"
LogFile="$(ArquivoLogNCover)"
ExcludeAttributes="MSBuildDemo.Common.CoverageExcludeAttribute"
AssemblyList="@(CodeProjects->'%(FileName)')" />

<!-- Resumo da Cobertura -->
<NCoverExplorer ToolPath="$(CaminhoNCoverExplorer)"
ProjectName="$(ProjectName)"
OutputDir="$(ResultsFolder)"
CoverageFiles="$(ResultsFolder)\$(ArquivoNCover)"
SatisfactoryCoverage="80"
ReportType="3"
XmlReportName="ResumoCobertura.xml"
HtmlReportName="ResumoCobertura.html" />
<NCoverExplorer ToolPath="$(CaminhoNCoverExplorer)"
ProjectName="$(ProjectName)"
OutputDir="$(ResultsFolder)"
CoverageFiles="$(ResultsFolder)\$(ArquivoNCover)"
SatisfactoryCoverage="80"
ReportType="4"
XmlReportName="RelatorioCoberturaPorClasse.xml"
HtmlReportName="RelatorioCoberturaPorClasse.html" />
</Target>
{% endhighlight %}

No código acima mandamos gerar dois relatórios e, entre outras coisas, definimos que queremos que nosso código tenha 80% de cobertura. Pronto, temos aqui um script para compilar, executar os testes e a cobertura de testes. Agora, como rodamos isso? Abra o Visual Studio Command Prompt, pra quem não sabe, veja onde ele está:

![](/images/2010/06/ScreenHunter_02%20Jun.%2011%2018.53_2.gif){: .aligncenter}

Vá até a pasta onde está o arquivo MSBuildDemo.proj e digite MSBuild MSBuildDemo.proj Se você executar isso, os projetos serão apenas compilados porque no início do script definimos como atividade padrão a target Build.

{% highlight xml %}
 1: DefaultTargets="Build"
{% endhighlight %}

Targets, são tarefas ou conjuntos de tarefas que podem ser definidas. Queremos executar a tarefa CoberturaTestes, porque se você prestar atenção no script ela depende da tarefa Tests que por sua vez depende de BuildTests que depende de Build, ou seja executando CoberturaTestes todo o script será executado, então rode o comando:

MSBuild MSBuildDemo.proj /target:CoberturaTestes

Se tudo der certo e sob as condições ideais de temperatura você deve ver algo como:

!(/images/2010/06/ScreenHunter_03%20Jun.%2011%2019.01_2.gif)

Além disso, de acordo com nosso script foi criada uma pasta dentro do diretório da solução chamada Results, ali você pode ver o resultado da cobertura de testes. Abrindo o arquivo RelatorioCobertura.html veremos:

![](/images/2010/06/image_2.png){: .aligncenter}

Além disso, se você olhar um pouco mais acima na tela do prompt verá o resultado da execução dos testes unitários:

![](/images/2010/06/image_4.png){: .aligncenter}

Pronto, seus testes unitários são sempre executados e você já sabe quanto falta para testar seu código.
