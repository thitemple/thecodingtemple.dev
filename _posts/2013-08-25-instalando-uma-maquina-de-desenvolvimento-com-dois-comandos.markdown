---
layout: post
title: "Instalando uma máquina de desenvolvimento com dois comandos"
date: 2013-08-25 12:11
comments: true
categories: Desenvolvimento
description: Um script para instalacao de aplicacoes em um ambiente Windows usando PowerShell e Chocolatey
keywords: Windows, PowerShell, Chocolatey, Instalacao, Setup
date: 2013-08-25
---
Recentemente eu tive que preparar duas máquinas de desenvolvimento, um novo notebook Windows 8 e uma VM Windows 7 e, honestamente, por mais que eu goste de uma máquina nova, perder tempo instalando uma porção de aplicações e configurar tantas outras não é algo que eu ache divertido. Além do mais, sempre tem algumas coisas que eu não faço todo dia e, na hora que eu preciso eu não lembro. Por exemplo, como é que eu gero uma chave RSA para usar com ssh mesmo?

Enfim, dessa vez, ao invés de instalar tudo manualmente, eu decidi fazer um script que faz todas essas coisas automaticamente para mim. Usando [PowerShell](http://technet.microsoft.com/en-us/scriptcenter/dd742419.aspx) e [Chocolatey](http://chocolatey.org).

![Chocolatey ](/images/2013/08/chocolateyicon.gif){: .alignleft} Acho que o PowerShell é bem conhecido, então não vou perder muito tempo com ele. Sobre o Chocolatey, ele é um gerenciador de pacotes para linha de comando do Windows. Ele funciona mais ou menos como funciona o apt-get no linux ou o brew no Mac. É um projeto open source e gratuito bem interessante, é relativamente recente se comparado com as outras plataformas, mas ele funciona muito bem no Windows e é muito prático para evitar ficar procurando instaladores. Já existe uma grande [variedade de aplicações disponíveis para serem instaladas através dele](http://chocolatey.org/packages). Mas também, se precisar, é muito fácil criar um pacote e publicar lá, eu mesmo [criei um pacote para instalar o DevKit do Ruby na versão 1.9.3 do Ruby](http://chocolatey.org/packages/ruby.devkit.ruby193).

Ok, chega de história. O script completo que eu criei [está disponível em um gist](https://gist.github.com/vintem/6334646). Ele é até que bem simples e suas principais partes estão comentadas (em inglês). Fique a vontade para baixar e modificar a gosto.

## Mas o que ele faz?

### Instala as seguintes aplicações usando o Chocolatey

*  Git
* Poshgit
* Ruby (1.9.3)
* Node.js
* WebPI
* Notepad++
* Sublime Text
* ConEmu
* Python
* .NET Framework (4.0 e 4.5)
* Putty
* Firefox
* Chrome
* Fiddler
* Filezilla
* Winrar
* MongoDB
* Nuget Package Explorer
* Skydrive
* Evernote
* Windows Installer (3.1 e 4.5)

Opcionalmente, no meio da execução do script ele pergunta se quer instalar o SQL Express 2012 (também utilizando o Chocolatey).

### Customização do PowerShell e Git Bash

Eu tenho alguns atalhos criados tanto para o shell do PowerShell como o do Git, então eu baixo automaticamente essas customizações e adiciono nos respectivos arquivos de customização.

### Configuração do Git

Na maior parte do tempo eu uso o Git como repositório de código ou o [git svn](http://git-scm.com/book/ch8-1.html) e eu tenho algumas configurações globais que eu gosto de usar, como alguns arquivos que geralmente eu ignoro, ou alguns atalhos específicos para o git. Então eu também baixo essas configurações de dois outros gists que que tenho.

### Gems e pacotes Node

Algumas gems para o Ruby que eu sempre uso são instaladas automaticamente, depois disso alguns pacotes do Node.js também são instalados.

### Geração da chave RSA

Por fim, a última coisa que eu faço é gerar uma chave RSA que eu vou usar para me conectar via SSH em outros terminais, ou no GitHub.

## Executando o script

Para executar o script são necessários dois comandos, mas primeiro, [baixe o script do gist](https://gist.github.com/vintem/6334646). Depois disso, **abra o PowerShell como Administrador** e, para executar um script baixado da internet é preciso modificar a política de execução do PowerShell, então digite:

{% highlight bash %}
Set-ExecutionPolicy Unrestricted
{% endhighlight %}

Depois disso, é só executar o script. Supondo que ele esteja no desktop, execute:

{% highlight bash %}
~/Desktop/dev_setup.ps1
{% endhighlight %}

E é isso, você tem todas as aplicações instaladas. Em algum momento da execução do script ele vai perguntar se você quer instalar o SQL Express e também uma senha para a chave RSA, mas no mais você tem uma máquina instalada com apenas dois comandos.

PS: Eu tentei fazer com que o Visual Studio 2012 fosse instalado automaticamente também, mas honestamente, não existe muita documentação sobre o assunto e achei que não valia o trabalho. Afinal, nesse caso é só montar um ISO e seguir os passos da instalação. Para uma aplicação só tá valendo.

Se você ficou com preguiça de ir lá olhar o script, veja ele aqui completo:

{%  gist 6334646 dev_setup.ps1 %}
