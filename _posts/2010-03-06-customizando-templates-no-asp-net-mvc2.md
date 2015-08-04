---
layout: post
title: Customizando Templates no Asp.Net MVC2
categories:
- Desenvolvimento
- asp.net mvc
- templates
comments: true
status: publish
type: post
published: true
alias: /customizando-templates-no-asp-net-mvc2/index.html
description: Customizando Templates no Asp.Net MVC2
date: 2010-03-06
keywords: asp.net mvc, templates
---
Customizar os templates padrão do Asp.Net MVC2 é muito fácil. Já mostrei antes <a href="/blog/2010/03/02/templates-no-asp-net-mvc2/">como usar os templates</a>, agora vou mostrar como customizar.

A primeira coisa que é preciso saber para customizar é que quando o MVC2 busca por customizações ele busca nas seguintes pastas:
<ul>
	<li>~/Areas/NomeDaArea/Views/NomeDoController/DisplayTemplates/TemplateName.aspx &amp; .ascx</li>
	<li>~/Areas/NomeDaArea/Views/Shared/DisplayTemplates/TemplateName.aspx &amp; .ascx</li>
	<li>~/Views/NomeDoController/DisplayTemplates/TemplateName.aspx &amp; .ascx</li>
	<li>~/Views/Shared/DisplayTemplates/TemplateName.aspx &amp; .ascx</li>
	<li>~/Areas/NomeDaArea/Views/NomeDoController/EditTemplates/TemplateName.aspx &amp; .ascx</li>
	<li>~/Areas/NomeDaArea/Views/Shared/EditTemplates/TemplateName.aspx &amp; .ascx</li>
	<li>~/Views/NomeDoController/EditTemplates/TemplateName.aspx &amp; .ascx</li>
	<li>~/Views/Shared/EditTemplates/TemplateName.aspx &amp; .ascx</li>
</ul>
Veja que são principalmente duas pastas DisplayTemplates para os templates de exibição e EditTemplates para os de edição dispostas em alguns locais específicos.

Só para facilitar vou continuar o exemplo feito no post anterior que tinha as views Index.aspx e Edit.aspx e classe de model Cliente.cs como mostrados abaixo:

![Index ](/images/2010/03/Index_thumb.png){: .aligncenter}

![Edit ](/images/2010/03/Edit_thumb.png){: .aligncenter}

{% highlight csharp %}
public class Cliente
{
    public string Nome { get; set; }
    public string Email { get; set; }
    public bool Ativo { get; set; }
    [DisplayName("Data de Nascimento")]
    public DateTime DataNascimento { get; set; }
    public decimal Credito { get; set; }

    public static Cliente Criar()
    {
        return new Cliente {
             Nome = "Thiago Temple",
             Ativo = true,
             Credito = 1000,
             DataNascimento = new DateTime(1981, 10, 15)
        };
    }
}
{% endhighlight %}

Existem alguns templates pré-definidos no MVC2, são eles: String, Html, Boolean, Decimal, EmailAddress, HiddenInput, Html, Object, String, Text, Url e DateTime. Então para se customizar um desses campos tudo o que temos que fazer é criar um arquivo com o nome do template na pasta específica. Vamos imaginar que a idéia fosse que toda que vez que tivéssemos uma propriedade do tipo DateTime e ela fosse editável nós gostaríamos que o textbox fosse exibido com uma classe css específica e ao lado do campo aparecesse uma imagem para que o usuário pudesse clicar e selecionar a data de um calendário em javascript, por exemplo.

Temos então que criar um arquivo DateTime.ascx na pasta ~/Views/Shared/EditTemplates/ assim esse template estará disponível para todas as propriedades DateTime do nosso projeto. Veja como ficaria esse arquivo:

![DataTime Edit ](/images/2010/03/DataTimeEdit_thumb.png){: .aligncenter}

Isso vale para todos os tipos de templates pré-definidos. Seguindo o exemplo do post passado, se quisermos modificar a exibição da nossa classe cliente para que ela fique dentro de uma tabela, veja como ficará o template do arquivo ~/Views/Shared/DisplayTemplates/Object.ascx

![Display Object ](/images/2010/03/DisplayObject_thumb.png){: .aligncenter}

Dentro do objeto ViewData agora temos um objeto ModelMetadata que contém informações sobre a classe do Model que está sendo usada na view. Entre outras informações o que temos ali é uma coleção com todas as propriedades do model.

No exemplo acima primeiro exibimos o nome do model e depois fazemos um loop entre as propriedades do model exibindo as que estão marcadas com a opção ShowForDisplay = true, que é o padrão. Isso deve gerar uma página assim:

![Cliente Display ](/images/2010/03/ClienteDisplay_thumb.png){: .aligncenter}

Para o template de edit não é muito diferente, veja o arquivo ~/Views/Shared/EditTemplates/Object.ascx:

![Object Edit ](/images/2010/03/ObjectEdit_thumb.png){: .aligncenter}

Da mesma forma fazemos um loop nas propriedades do objeto ModelMetada que estão marcados com a propriedade ShowForEdit = true, novamente, esse é o padrão. Além disso, verifiquei se a propriedade é obrigatória e coloquei um * na frente do label. Veja o resultado:

![Client Edit ](/images/2010/03/ClientEdit_thumb.png){: .aligncenter}

Veja também que a modificação feita para o campo DateTime continuou valendo para a propriedade Data de Nascimento que foi exibida com a imagem do calendário ao lado do campo.

<strong>Conclusão</strong>

Os templates do MVC2 são uma forma simples e prática de exibir dados. Mas, o mais importante, são também muito poderosos para que sejam customizados da melhor forma possível para as necessidades específicas de cada projeto.
