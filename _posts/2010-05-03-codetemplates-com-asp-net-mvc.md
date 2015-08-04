---
layout: post
title: CodeTemplates com ASP.NET MVC
categories:
- Desenvolvimento
- asp.net mvc
- code templates
comments: true
status: publish
type: post
published: true
date: 2010-05-03
alias: /codetemplates-com-asp-net-mvc/index.html
---
Toda a vez que você vai adicionar uma View usando o assistente do Visual Studio

![Adicionar View ](/images/2010/05/ScreenHunter_01-May.-03-15.23.gif){: .aligncenter}

Uma nova página é adiciona com um código pré-definido e baseado na opção que você escolheu  em "View Content", o que muita gente não sabe é que dá para customizar todos esses modelos de página e é muito simples fazer isso.
<h3>Adicionando os arquivos ao projeto</h3>
Primeiro vá em <em>C:Program Files\Microsoft Visual Studio 9.0\Common7\IDE\ItemTemplates\CSharpWeb</em>

<span style="color: #808080;">Obs.: Veja que esse caminho vai variar de acordo com sua instalação e com a linguagem escolhida.</span>

<span>Se você tiver o ASP.NET MVC 1 e 2 instalados você deve encontrar duas pastas ali dentro chamadas respectivamente MVC e MVC2. Entre na pasta da versão escolhida copie a pasta CodeTemplates e cole na raíz do seu projeto web. Você deve acabar com um projeto assim:</span>

![](/images/2010/05/ScreenHunter_03-May.-03-15.47.gif){: .aligncenter}

O Visual Studio sempre vai procurar por esses arquivos localmente no projeto e se não encontrar buscará os arquivos na pasta informada acima.
<h3>Configurando os arquivos</h3>
<span>Você já deve ter percebido não é? Existe um arquivo para cada template. Todas com uma extensão .tt que é a extensão do T4 (Text Template Transformation Toolkit).</span>

<span>O T4 é uma ferramenta de geração de código baseada em templates que vem nativa junto com o Visual Studio desde a versão 2005. Aliás, vale para o T4 um investimento de estudos já que é uma ferramenta muito útil.</span>

<span>A primeira coisa que precisa ser feita é selecionar todos os arquivos .tt ir na janela de propriedades e limpar o campo Custom Tool. Deixe em branco.</span>

![T4 Custom Tool ](/images/2010/05/ScreenHunter_05-May.-03-16.01.gif){: .aligncenter}

<h3>Alterando um template</h3>
Agora vamos realmente alterar um template. Vamos supor que eu queira, ao exibir o detalhe de uma classe que ela fosse exibida dentro de uma tabela. Originalmente, as propriedades são exibidas em divs ao invés de tabelas (que na minha opinião, é a melhor opção).

Veja como ficou o arquivo Details.tt

![Details com tabela ](/images/2010/05/ScreenHunter_07-May.-03-19.02.gif){: aligncenter}

Outra modificação que eu fiz na modelo de Details, foi, ao invés de exibir o título dentro de uma tag h2, eu exibo dentro da tag h1.

![Detail com título H1](/images/2010/05/ScreenHunter_08-May.-03-19.06.gif){: .aligncenter}

Pronto! Agora toda vez que for adiciona uma View com base no modelo Details ele seguirá esse padrão.

Uma outra coisa que pode ser feita é salvar um novo modelo dentro daquela pasta com outro nome, por exemplo, eu fiz essas alterações e salvei o arquivo como DetailsVintem.tt. Agora quando eu tento adicionar uma View essa opção fica disponível para mim.

![](/images/2010/05/ScreenHunter_09-May.-03-19.09.gif){: aligncenter}
