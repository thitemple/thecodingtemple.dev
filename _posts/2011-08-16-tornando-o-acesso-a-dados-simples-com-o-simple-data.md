---
layout: post
title: Tornando o acesso a dados simples com o Simple.Data
categories:
- Desenvolvimento
comments: true
status: publish
type: post
published: true
date: 2011-08-16
---
Recentemente eu precisei fazer um trabalho que era bem simples do ponto de vista de acesso a dados. Era algo como ler arquivos textos e salvar os dados em uma base de dados SQL Server. Simples assim.

Se tratando de uma tarefa simples, usar um framework como o <a href="http://nhforge.org/Default.aspx" target="_blank">NHibernate</a> iria tornar a tarefa mais complexa do que precisaria. Eu poderia também usar o bom e velho ADO.NET, mas estamos em 2011 e já temos 4 versões do .NET Framework. Acho que já passei dessa fase.

Ai lembrei que recentemente ouvi um episódio do <a href="http://herdingcode.com/?p=305" target="_blank">Herding Code falando sobre um tal de Simple.Data.</a>

E não é que o nome vem bem a calhar, o Simple.Data é realmente simples.

~~~
public Document Insert(Document newDocument)
{
    var db = new Database.Open();
    return db.Documents.Insert(newDocument);
}
~~~

E foi tudo isso que eu precisei escrever para abrir uma conexão com o banco, com base na minha string de conexão configurada no meu arquivo <strong>app.config </strong>e inserir um documento na tabela documentos.

O Simple.Data faz uso do tipo <a href="http://robsonramos.com/index.php/2011/05/11/entendendo-o-tipo-dynamic-no-c/" target="_blank">dynamic do C# 4</a> e portanto é necessário usar a versão 4 do .NET Framework.

O que aconteceu no código acima é o que o Simple.Data entendeu que deveria existir uma tabela chamada Documents no banco de dados e automaticamente iria inserir um registro nessa tabela mapeando os campos da tabela com as propriedades da classe Document (desde que esses tivessem os mesmos nomes).

Da mesma forma se eu quiser fazer uma busca basta fazer algo assim:

~~~
public IEnumerable All()
{
    var db = Database.Open();
    return  db.Documents.All().Cast();
}
~~~

Assim, estamos listando todos os registros da tabela Documents.

Agora imagine que essa tabela tenha um coluna chamada User e que, obviamente, o classe Document tem uma propriedade chamada User. Para fazer uma consulta filtrando pelo nome do usuario bastaria fazer assim:

~~~
var db = Database.Open();
Document document = db.Documents.FindByUser("nomedousuario");
~~~

Lindo! Dinamicamente o Simple.Data vai procurar um registro que tenha o campo User = "nomedousuario" e vai popular as propriedades da classe com as colunas da tabela que tenham o mesmo nome.

Por fim, um último exemplo, digamos que exista uma colunda/propriedade chamada Amount e você queira pegar os documentos com valor maior que 50. Veja como é simples:

~~~
var db = Database.Open();
IEnumerable documents = db.Documents.FindAll(db.Documents.Amount > 50).Cast();
~~~

Com certeza existe mais coisas no Simple.Data do que eu citei aqui, mas a idéia é que ele é bem simples e rápido. <a href="http://bit.ly/p7XsUx">Usando o Nuget para adicionar o pacote</a>, adicionar uma string de conexão chamada <span class="Apple-style-span" style="font-family: Consolas, Monaco, monospace; font-size: 12px; line-height: 18px; white-space: pre;">Simple.Data.Properties.Settings.DefaultConnectionString</span> e pronto, você já consegue usar o Simple.Data.

Para saber mais visite <a href="http://bit.ly/oZ4teC" target="_blank">o wiki do projeto no GitHub</a>.

<a href="http://bit.ly/r3SnzM">O código fonte usado nesse exemplo pode ser visto aqui</a>.<!--:-->
