---
layout: post
title: Integrar é traduzir, não é reproduzir
categories:
- Desenvolvimento
tags:
- integracaoes
comments: true
status: publish
type: post
published: true
alias: /integrar-e-traduzir-nao-e-reproduzir/index.html
date: 2013-03-21
---
Eu trabalho fazendo integrações de aplicações web com o SAP há alguns anos já. E existem "alguns padrões" (vou chamar de padrões), que existem no SAP que são bem particulares à esse ERP.

Só para ambientar aqueles que não conhecem nada de SAP, o SAP é um grande ERP e ele possui todo um ecossistema próprio para customização e criação de soluções de negócio. Por exemplo, ele tem uma linguagem própria o <a href="https://en.wikipedia.org/wiki/Abap">ABAP</a>, tem um protocolo de comunicações proprietário, o <a href="https://en.wikipedia.org/wiki/Remote_function_call">RFC</a>, entre outras coisas. Fora isso, existe também toda uma cultura particular de desenvolvimento, que honestamente, eu não conheço muito, já que nunca fui um programador ABAP.

![System integration ](/images/2013/03/system_integration.jpeg){: .alignleft}A minha questão aqui é, independente do porque, e se esta certo ou não, geralmente quando faço integrações com o SAP encontro coisas que não estou acostumado a ver quando desenvolvo minhas soluções usando outras tecnologias, como por exemplo, .NET e C#.

Por exemplo, em muitas integrações que fiz com o SAP quando chamo uma função remota e essa gera um erro, ao invés de receber um exceção, a chamada é executada com sucesso e uma estrutura de dados (como na imagem abaixo) é retornada preenchida contendo um tipo de erro, um código e possivelmente algumas mensagens. Esse é um padrão usado e que já vi várias vezes.

![Retorno de erros no SAP ](/images/2013/03/sap_return.png){: .aligncenter}

Obs.: <a href="http://cc2e.com/Page.aspx?hid=147" target="_blank">Steven McConnell deve ficar tão orgulhoso disso</a>.

OK, mas qual é o problema disso e o que tem a ver com o que eu faço?

Bom, o problema na minha opinião, é quando esse tipo de padrão começa a vazar para outras aplicações. Tenho que admitir que eu já fiz a minha parte de permitir que isso vazasse. Shame on me!

Mas voltando, se estamos fazendo uma integração com uma aplicação terceira, não importa qual, e ela tem uma particularidade, não precisamos expor essa particularidade, podemos encapsulá-la e mudar o padrão para algo mais genérico, ou que faça sentido para a nossa plataforma de desenvolvimento. Por exemplo, no caso de um Web Service, lançar um SoapException.

Outro padrão comum ao SAP é a nomenclatura de estruturas. Não sei porque, mas encontramos muitas estruturas com esse tipo de nomenclatura.

![Nomenclatura no SAP ](/images/2013/03/nomes_sap.png){: .aligncenter}

Talvez isso faça sentido na cabeça de algum alemão louco, mas, voltando ao C#, um nome de variável pode ter até 1023 bytes, isso quer dizer que podemos ser bem mais descritivos que isso. E no caso de um Web Service também, não ha uma limitação especifica para o nome de uma tag XML.

Mais uma vez o ponto é, no momento em que estamos fazendo uma integração, seja qual for a tecnologia utilizada (no meu caso é o BizTalk), esse é o momento de abstrair particularidades, de aplicar boas práticas para quem vai consumir essa integração.![](/images/2013/03/images_boo.jpeg){: .alignright}

Eu vejo uma integração como uma tradutora. Ela ouve em alemão e traduz para português, ela não traduz algumas partes para português e mantém outras no formato original. Para mim, que não falo nada de alemão, isso só me atrapalharia.

E nem sempre é uma questão de certo ou errado, mas sim de pontos que são mais idiomáticos em uma tecnologia do que em outra. Nesse caso o problema são as traduções literais que muitas vezes não fazem sentido, temos que contextualizar para a tecnologia que estamos usando.

![slip ](/images/2013/03/slip.png){: .aligncenter}
Mais uma vez usando o SAP como <del>bode expiatório</del> exemplo, existem alguns casos em que as strings não podem ter mais do 132 caracteres, por isso vemos estruturas como a anterior que tem campos message1, message2, message3, etc., e, embora isso funcione, é uma limitação daquela plataforma/tecnologia. Esse não é o caso de um XML ou do próprio C#, portanto, passar uma estrutura dessas adiante é simplesmente fazer uma tradução literal e não olhar para o contexto.

Concluindo, quando for integrar duas ou mais aplicações, tenha em mente os limites tecnológicos, funcionais e semânticos de cada ponta. Leve em consideração o que é um padrão proprietário e deve ser transformado do que realmente é um padrão de integração e deve ser mantido. <a href="http://www.amazon.com/gp/product/0321200683/ref=as_li_ss_tl?ie=UTF8&amp;camp=1789&amp;creative=390957&amp;creativeASIN=0321200683&amp;linkCode=as2&amp;tag=tempcodi0f-20" target="_blank">Existem inclusive livros que podem nos ajudar com isso</a>.
