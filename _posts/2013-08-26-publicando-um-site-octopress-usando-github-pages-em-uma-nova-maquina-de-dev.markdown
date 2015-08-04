---
layout: post
title: "Publicando um site Octopress usando GitHub pages a partir de um novo computador"
date: 2013-08-26 11:36
comments: true
categories: Desenvolvimento
description: Publicando um site Octopress usando GitHub pages a partir de uma novo computador
keywords: octopress, github pages
date: 2013-08-26
---
OK, eu admito, esse post é bem específico e ele serve mais para que eu **nunca mais** esqueça como fazer isso.

Esse blog é hospedado no [GitHub Pages](http://pages.github.com) e é feito só com HTML, não tem nenhum CMS por trás. Mas eu uso o [Octopress](http://octopress.org) para gerar os arquivos HTML pra mim.

Tudo funciona muito bem, e esse post não é sobre como usar nem o Octopress, nem o GitHub pages, suas documentações são bem claras e não são necessários muitos passos para ter um site no GitHub pages de forma gratuita.

De qualquer forma, quando se publica um site no GitHub pages, o código fica hospedado e visível no GitHub no branch master e as páginas processadas e geradas ficam em um branch chamado gh-pages.

## O problema

Tudo funcionava perfeitamente até eu ter que fazer um clone do repositório em uma outra máquina (já que troquei de computador) e publicar uma atualização do site.

Os passos que executei foram:

{% highlight bash %}
git clone git@github.com:usuario/repositorio.git

bundle install #para instalar as dependências do ruby
{% endhighlight %}

{% highlight bash %}
rake setup_github_pages
{% endhighlight %}

O comando acima cria o diretório _deploy e também um branch local `gh-pages`.

Após as minhas modificações quando fui fazer o deploy:

{% highlight bash %}
rake gen_deploy
{% endhighlight %}

Eu recebia o seguinte erro:

{% highlight bash %}
! [rejected]     gh-pages -> gh-pages (non-fast-forward)
{% endhighlight %}

E ainda dizia que o repositório não estava atualizado.

## A solução

Enfim, depois de muito procurar, porque um `git pull` não resolveu, eu resolvi fazer um `force push` no momento do deploy.

Para isso eu abri o arquivo `Rakefile` e editei a tarefa push. Onde estava:

{% highlight ruby %}
system "git push origin #{deploy_branch}"
{% endhighlight %}

Eu troquei para:

{% highlight ruby %}
system "git push origin +#{deploy_branch}"
{% endhighlight %}

Perceba o sinal de + ali, isso fará um force push e resolve o problema. Depois de um deploy usando o force push, eu voltei a tarefa para como ela estava antes e tudo passou a funcionar normalmente mais uma vez.
