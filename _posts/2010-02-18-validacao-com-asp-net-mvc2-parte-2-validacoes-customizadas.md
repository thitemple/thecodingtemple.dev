---
layout: post
title: Validação com Asp.NET MVC2 parte 2 - validações customizadas
categories:
- Desenvolvimento
- asp.net mvc
- templates
comments: true
status: publish
type: post
published: true
date: 2010-02-18
alias: /validacao-com-asp-net-mvc2-parte-2-validacoes-customizadas/index.html
---
Dando sequência no<a href="/blog/2010/02/07/validacao-com-asp-net-mvc2/"> post anterior sobre a validação no MVC2</a>, vou mostrar como é simples fazer uma validação customizada além das existentes no namespace System.ComponenteModel.DataAnnotations.

Para fazer uma validação customizada tudo que precisamos fazer é herdar a classe ValidationAttribute do namespace System.ComponentModel.DataAnnotations, isso, claro, para fazer uma validação genérica, é possível também herdar as outras classes de validação desse namespace como RequiredAttribute, RegularExpressionAttribute e assim por diante.

Por exemplo, e seguindo o exemplo do post anterior, vamos imaginar que para cadastrar um novo cliente em nossa base, além das validações que já estamos fazendo, queremos garantir que o email do cliente seja único na base. Podemos fazer o seguinte, criamos uma classe ClienteUnicoAttribute que herda de ValidationAttribute e ai decoramos o atributo email da classe cliente com o nosso validador.

A classe ClienteUnicoAttribute fica assim:

{% highlight csharp %}
public class ClienteUnicoAttribute : ValidationAttribute
{
    public override bool IsValid(object value)
    {
        // validação real vai aqui
        return (!value.ToString().Equals("teste@teste.com"));
    }
}
{% endhighlight %}

Simples, o importante aqui é sobrescrever o método IsValid com a lógica que queremos, no caso aqui, para manter simples, estou apenas verificando se o email é igual teste@teste.com então retorno false, caso contrário retorno true.

Na classe Cliente vamos decorar o atributo Email com o novo validador e fica assim:

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
    [ClienteUnico(ErrorMessage="Email de cliente já cadastrado")]
    public string Email { get; set; }
}
{% endhighlight %}

Agora, se tentarmos cadastrar um cliente com email teste@teste.com veremos o erro:

![Email já cadastrado](/images/2010/02/Email-ja-cadastrado.png){: .aligncenter}
