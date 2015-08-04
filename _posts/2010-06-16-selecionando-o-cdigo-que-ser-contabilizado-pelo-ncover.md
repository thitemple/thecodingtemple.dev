---
layout: post
title: Selecionando o código que será contabilizado pelo NCover
categories:
- Desenvolvimento
- ncover
- nunit
comments: true
status: publish
type: post
published: true
date: 2010-06-16
alias: /selecionando-o-cdigo-que-ser-contabilizado-pelo-ncover/index.html
---
<a href="/blog/2010/06/14/builds-automticos-com-msbuild-nunit-e-ncover/">No meu post anterior sobre build automático com MSBuild e NCover</a> e usei uma opção do NCover chamada ExcludeAttributes como pode ser visto na linha 7 abaixo:

{% highlight xml %}
<ncover ToolPath="$(CaminhoNCover)"
    CommandLineExe="$(ComandoNUnit)"
    CommandLineArgs="$(TestFolder)bin$(Configuration)UnitTests.dll"
    WorkingDirectory="$(TestFolder)bin$(Configuration)"
    CoverageFile="$(ResultsFolder)$(ArquivoNCover)"
    LogFile="$(ArquivoLogNCover)"
    ExcludeAttributes="MSBuildDemo.Common.CoverageExcludeAttribute"
    AssemblyList="@(CodeProjects->'%(FileName)')" >
{% endhighlight %}

**O que isso quer dizer e por que isso importa?**

Isso importa porque, nem todo o código que temos em nossos projetos vamos querer testar e porque esse código pode atrapalhar a métrica de percentual de código coberto pelos testes.

Usando como exemplo o projeto que fiz no modelo anterior que <a href="https://github.com/vintem/MSBuildDemo" target="_blank">pode ser visto aqui</a>, podemos ver que em todo projeto ASP.NET MVC algumas classes são criadas automaticamente e essas classes não precisam ser testadas (assumindo que elas funcionam e não vamos modificá-las). Outro exemplo que temos nesse projeto, são as classes geradas automaticamente pelo LINQ to SQL para mapear a base de dados.

**Como resolver?**

Para resolver esse problema eu criei a classe MSBuildDemo.Common.CoverageExcludeAttribute e configurei na tarefa do NCover como visto acima. Veja como ficou a classe:

{% highlight csharp %}
[AttributeUsage(AttributeTargets.All)]
public sealed class CoverageExcludeAttribute : Attribute
{
}
{% endhighlight %}

Bem simples não? Agora é só colocar esse atributo nas classes ou métodos que não queremos contar para a cobertura do código. Como nesse exemplo, veja a linha 2:

{% highlight csharp %}
[HandleError]
[CoverageExclude]
public class AccountController : Controller
{
    // ...
}
{% endhighlight %}
