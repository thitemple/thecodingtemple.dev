---
layout: post
title: Validação com Asp.Net MVC2 parte 3 - Input vs Model validation
categories:
- Desenvolvimento
- asp.net mvc
- templates
comments: true
status: publish
type: post
published: true
date: 2010-02-22
alias:
---
Obs.: Esse post está baseado na versão RC2 do Asp.Net MVC2.

O Asp.Net MVC 1 já possuía uma forma de realizar validações, como as validações Required ou Regular Expression que <a href="/blog/2010/02/07/validacao-com-asp-net-mvc2/">eu já mostrei aqui em outros posts</a>, além dessa validação o framework também avisaria/perceberia erros ao submeter um formulário com dados inválidos, exemplo: enviar uma string com "xxxxx" para uma propriedade de data ou não enviar um valor para um campo que não fosse nullable, como, por exemplo, um campo int.

Vamos olhar uma classe de modelo como a classe Cliente abaixo:

{% highlight csharp %}
public class Cliente
{
    public int IdCliente { get; set; }
    [Required(ErrorMessage = "Preencha o nome")]
    public string Nome { get; set; }
    [Required(ErrorMessage = "Preencha a idade")]
    [Range(0, 150, ErrorMessage="Idade inválida")]
    public int? Idade { get; set; }
    [Required(ErrorMessage = "Preencha o email")]
    [RegularExpression(@"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$", ErrorMessage = "Email inválido")]
    public string Email { get; set; }
    [Required(ErrorMessage="Preencha o Cpf")]
    public string Cpf { get; set; }
}
{% endhighlight %}

E um formuário como o abaixo:

{% highlight html %}
<%: Html.ValidationSummary() %>
<fieldset>
  <legend>Fields</legend>
  <div class="editor-label">
    <%: Html.LabelFor(model => model.Nome) %>
  </div>
  <div class="editor-field">
    <%: Html.TextBoxFor(model => model.Nome) %>
    <%: Html.ValidationMessageFor(model => model.Nome) %>
  </div>
  <div class="editor-label">
    <%: Html.LabelFor(model => model.Idade) %>
  </div>
  <div class="editor-field">
    <%: Html.TextBoxFor(model => model.Idade) %>
    <%: Html.ValidationMessageFor(model => model.Idade) %>
  </div>
  <div class="editor-label">
    <%: Html.LabelFor(model => model.Email) %>
  </div>
  <div class="editor-field">
    <%: Html.TextBoxFor(model => model.Email) %>
    <%: Html.ValidationMessageFor(model => model.Email) %>
  </div>
  <p>
    <input type="submit" value="Create" />
  </p>
</fieldset>
{% endhighlight %}

Repare que o modelo tem uma propriedade Cpf decorada com o atributo Required e no formulário essa propriedade não existe. No MVC1 ou até o RC1 do MVC2, se submetêssemos esse formulário, o campo Cpf não seria exigido. Isso é o que é conhecido como Input validation, ou seja, apenas os dados que são submetidos pelo formulário são validados. A partir do MVC RC2, esse campo também é validado, e isso é conhecido como Model validation.

Vou alterar a classe Cliente para ter um Endereco, como abaixo:

{% highlight csharp %}
public class Cliente
{
    public int IdCliente { get; set; }
    [Required(ErrorMessage = "Preencha o nome")]
    public string Nome { get; set; }
    [Required(ErrorMessage = "Preencha a idade")]
    [Range(0, 150, ErrorMessage="Idade inválida")]
    public int? Idade { get; set; }
    [Required(ErrorMessage = "Preencha o email")]
    [RegularExpression(@"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$", ErrorMessage = "Email inválido")]
    public string Email { get; set; }
    [Required(ErrorMessage="Preencha o Cpf")]
    public string Cpf { get; set; }
    public Endereco Endereco { get; set; }
}

public class Endereco
{
    [Required]
    public string Logradouro { get; set; }
    [Required]
    public string Cidade { get; set; }
    [Required]
    public string Bairro { get; set; }
}
{% endhighlight %}

Veja que a propriedade Endereco não é obrigatória na classe Cliente. O que isso quer dizer? Que no Model Validation, se eu não informar nenhum atributo da classe Endereco, o endereço pode ser nulo.

Se eu mantiver o formulário como estava e não adicionar nenhuma outra caixa de texto ao enviar o formulário ele não vai validar o endereço. Agora vou alterar o formulário para que ele tenha o Cpf e a Cidade do Cliente. Assim:

{% highlight html %}
<%= Html.ValidationSummary()%>
<fieldset>
  <legend>Fields</legend>
  <div class="editor-label">
    <%= Html.LabelFor(model => model.Nome)%>
  </div>
  <div class="editor-field">
    <%= Html.TextBoxFor(model => model.Nome)%>
    <%= Html.ValidationMessageFor(model => model.Nome)%>
  </div>
  <div class="editor-label">
    <%= Html.LabelFor(model => model.Idade)%>
  </div>
  <div class="editor-field">
    <%= Html.TextBoxFor(model => model.Idade)%>
    <%= Html.ValidationMessageFor(model => model.Idade)%>
  </div>
  <div class="editor-label">
    <%= Html.LabelFor(model => model.Email)%>
  </div>
  <div class="editor-field">
    <%= Html.TextBoxFor(model => model.Email)%>
    <%= Html.ValidationMessageFor(model => model.Email)%>
  </div>
  <div class="editor-label">
    <%= Html.LabelFor(model => model.Cpf)%>
  </div>
  <div class="editor-field">
    <%= Html.TextBoxFor(model => model.Cpf)%>
    <%= Html.ValidationMessageFor(model => model.Cpf)%>
  </div>
  <div class="editor-label">
    <%= Html.LabelFor(model => model.Endereco.Cidade)%>
  </div>
  <div class="editor-field">
    <%= Html.TextBoxFor(model => model.Endereco.Cidade)%>
    <%= Html.ValidationMessageFor(model => model.Endereco.Cidade)%>
  </div>
  <p>
    <input value="Create" type="submit" />
  </p>
</fieldset>
{% endhighlight %}

Apenas o campo Cidade foi adicionada, mas ao submeter o formulário as propriedades Logradouro e Bairro também são validados.

Ou seja, agora a validação é feita sempre no Model e não mais de acordo com os dados que são informados.

Por que isso é importante? Principalmente porque alguém mal intensionado poderia tentar enviar um request de post com apenas parte dos dados. Nas versões anteriores do MVC isso não seria validado automaticamente.

Um ponto importante a se considerar são os atributos que não podem ser nulos como no caso do Int. Imagine que na nossa classe Cliente a propriedade Idade não fosse decorada com o atributo Required. Nas versões anteriores do MVC se o campo Idade não fosse preenchido um erro "A value is required" seria retornado, isso acontece no momento do model-binding, quando framework tenta identificar se existe um valor submetido para uma propriedade, no caso idade, que por padrão não pode ser nula.

A partir do MVC RC2 essa propriedade seria preenchida com o seu valor padrão, que no caso do int é 0.
