---
layout: post
title: Testes integrados com o Selenium II
categories:
- Desenvolvimento
- selenium
- testes
- testes integrados
comments: true
status: publish
type: post
published: true
date: 2010-01-04
alias: /testes-integrados-com-o-selenium-ii/index.html
---
<a href="/blog/2009/11/08/testes-integrados-e-automaticos-com-selenium/">Eu já falei anteriormente do Selenium</a> mas usando um outro enfoque, hoje eu queria falar sobre uma prática que adotamos na <a href="http://www.golive.com.br" target="_blank">GoLive</a> para testar os aplicativos web.

Nada muito complicado, nem do outro mundo, mas ao invés de longos documentos com print screens de telas, ou formulários que são mal preenchidos, estamos gravando os testes de aplicações web com o Selenium. Quando um erro é encontrado, o bug é registrado no relatório de bugs e o arquivo do Selenium é anexado (na verdade hoje ele ainda é enviado por email).

Pra reproduzir o erro, basta abrir o arquivo no firefox e debugar :-).

Uma mudança simples no processo, mas que na minha opinião facilitou bastante a correção de erros.
