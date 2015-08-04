---
layout: post
title: Globalização de validação do jQuery com o ASP.NET MVC 3
categories:
- Desenvolvimento
- asp.net mvc
- Globalização
- JavaScript
- jQuery
comments: true
status: publish
type: post
published: true
alias: /globalizacao-de-validacao-do-jquery-com-o-asp-net-mvc-3/index.html
description: Veja como fazer globalização da validação do jQuery quando validar datas.
date: 2011-09-17
---
O Asp.Net MVC 3 tem uma ótima funcionalidade que é a validação no cliente usando o plugin do <a href="http://docs.jquery.com/Plugins/Validation" target="_blank">jQuery validations</a> e usando um script da própria Microsoft a validação é feita sem que seja necessário nenhum codificação especial. Basta usar os atributos do namespace <em>System.ComponentModel.DataAnnotations.</em>

Pra quem não sabe, para fazer essa validação basta adicionar os seguintes scripts (que já estão no template padrão de um novo site Asp.Net Mvc 3):

{% highlight html %}
<script src=”/Scripts/jquery-1.6.2.min.js” type=”text/javascript”></script>
<script src=”/Scripts/jquery.validate.min.js” type=”text/javascript”></script>
<script src=”/Scripts/jquery.validate.unobtrusive.min.js” type=”text/javascript”></script>
{% endhighlight %}

Muito simples de verdade! Mas existe um problema, esse script não é globalizado, então digamos que você tenha que usar uma data na sua classe e você gostaria de validá-la, por exemplo eu tinha uma classe que entre outras coisas tinha que salvar uma data, para simplificar, algo como isso:

{% highlight csharp %}
public class Pessoa
{
    public string Nome { get; set; }
    public string Sexo { get; set; }
    public string Rg { get; set; }

    [DataType(DataType.EmailAddress)]
    public string Email { get; set; }

    [DataType(DataType.Date)]
    public DateTime? DataNascimento { get; set; }
}
{% endhighlight %}

Quando eu informava a data 16/09/1980, por exemplo, automaticamente era detectado uma data inválida, já que o esperado é que a data estivesse no padrão mm/dd/aaaa, mas é claro que no Brasil o padrão é outro. Então como corrigir? Primeiro fazer uso do plugin <a href="https://github.com/jquery/globalize">Globalize do jQuery</a>, adicione referências a dois scripts (que é claro, podem ser baixados no site do projeto).

Depois disso, tudo o que precisa ser feito é determinar qual a cultura que quer usar e indicar o parser do globalize para validar a data:

{% highlight javascript %}
Globalize.culture("pt-BR");
$.validator.methods.date = function(value, element) {
    return this.optional(element) || Globalize.parseDate(value);
};
{% endhighlight %}

Não podia ser mais simples!
