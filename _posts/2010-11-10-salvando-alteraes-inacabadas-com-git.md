---
layout: post
title: Salvando alterações inacabadas com Git
categories:
- Desenvolvimento
- git
comments: true
status: publish
type: post
published: true
alias: /salvando-alteraes-inacabadas-com-git/index.html
date: 2010-11-10
---
Quanto mais eu uso o Git, mais eu gosto dele. Fato.

Sabe quando você está no meio de uma atividade, ela não está acabada, e chega um bug que você tem que corrigir? Ai o que você faz com a sua alteração que está no meio do caminho?

O Git tem um comando chamado stash. O stash é uma área separada dos seus commits feita exatamente para isso, salvar modificações inacabadas. E o uso é bem simples.

git stash save

Esse comando salva as modificações do diretório de trabalho e limpa o log para o último commit.

Por exemplo, digamos que você tenha um projeto que você concluiu a versão 1 e está no meio do desenvolvimento da versão 2.0 e você criou um branch para isso.

![v2 ](/images/2010/11/v2.png){: .aligncenter}

E então, enquanto você no meio do desenvolvimento de uma outra atividade, aparece um bug para corrigir, seu status do Git estaria mais ou menos assim:

![Git status ](/images/2010/11/git_status.png){: .aligncenter}

Você não pode fazer um commit, porque se você fizer isso o build irá quebrar, e você é muito responsável para fazer uma coisa dessas, né?. O que fazer?`

![Moron ](/images/2010/11/moron.jpg){: .aligncenter}

É ai que o git stash resolve. Com o comando git stash save você obtém como resultado:

![Stash ](/images/2010/11/stash.png){: .aligncenter}

O buffer fica limpo, você já pode fazer um checkout da versão 1.0, corrigir o bug e depois voltar para o branch da versão 2.0 e fazer um rebase da versão 1.0.

Quando estiver nesse ponto basta executar o comando git stash pop para resgatar suas atualizações.

![Stash pop ](/images/2010/11/stash_pop.png){: .aligncenter}

Pronto, você está no ponto onde parou. E viva o controle de versões.

Existem mais opções no comando stash. Eu recomendo dar uma olhada na <a href="http://www.kernel.org/pub/software/scm/git/docs/git-stash.html">documentação do git</a>.
