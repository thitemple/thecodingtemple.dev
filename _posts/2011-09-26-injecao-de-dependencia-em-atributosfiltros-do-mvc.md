---
layout: post
title: Injeção de Dependência em Atributos/Filtros do MVC
categories:
- Desenvolvimento
- asp.net mvc
- windsor
comments: true
status: publish
type: post
published: true
alias: /injecao-de-dependencia-em-atributosfiltros-do-mvc/index.html
date: 2011-09-26
---
É muito comum termos dropdowns/combos que contém o mesmo tipo de dados em páginas diferentes. Por exemplo digamos que seja necessário um combo com status em diferente páginas do projeto e que esses diferentes status tenham que vir do banco de dados.

Uma forma de mostrar isso na página, é salvar uma lista com os status que você pega do banco de dados na propriedade ViewData e exibir na página.

Como não devemos repetir esse código sempre, o que eu fiz foi criar um filtro do ASP.Net MVC e decorar as actions que precisam desses dados com esse filtro. Essa classe ficou assim:

{% highlight csharp %}
public class ListaStatusAttribute : ActionFilterAttribute
{
    public override void OnActionExecuted(ActionExecutedContext filterContext)
    {
        var repository = new NHibernateRepository();
        var tiposDocumento = repository.FindAll().OrderBy(t => t.Descricao);
        var controllerBase = filterContext.Controller;
        controllerBase.ViewData.Add("Status", tiposDocumento);
    }
}
{% endhighlight %}

Ótimo, agora é só decorar as actions com esse atributo. No ViewData teremos um item chamado Status com todos os status ordenados pela descricao. Um código feito uma vez só. Mas o que eu não gosto do código acima é que eu crio dentro da método uma instância da classe NHibernateRepository. Eu gostaria que isso fosse resolvido sem que uma dependência direta fosse criada para essa classe, afinal eu sei que essa classe implementa a interface IRepository, portanto eu posso ter uma dependência para a interface, o que é muito mais elegante.

Ultimamente eu tenho usado o <a href="http://docs.castleproject.org/Windsor.MainPage.ashx">Windsor</a> para resolver todas as minhas dependências. E nesse caso vou usá-lo em conjunto com o ServiceLocator da <a href="http://entlib.codeplex.com/">Microsoft Enterprise Library</a>. Se você já usa o Windsor é bem fácil de resolver, se não usa, dê uma olhada no tutorial no site do projeto e verá como é fácil usá-lo junto com o MVC.

Uma vez com seus componentes registrados, adicione uma referência para Microsoft.Practices.ServiceLocation.dll e no global.asax faça o seguinte:

{% highlight csharp %}
ServiceLocator.SetLocatorProvider(() => new WindsorServiceLocator(container));
{% endhighlight %}

Isso vai adicionar ao ServiceLocator um provedor de serviços que será implementado usando o Windsor.
<a href="http://commonservicelocator.codeplex.com/wikipage?title=Castle%20Windsor%20Adapter&amp;referringTitle=Home&amp;ProjectName=commonservicelocator"> A classe WindsorServiceLocator pode ser encontrada para download aqui.</a>

Pronto, agora dentro do meu atributo eu posso trocar o código para:

{% highlight csharp %}
public override void OnActionExecuted(ActionExecutedContext filterContext)
{
    var repository = ServiceLocator.Current.GetInstance();
    var tiposDocumento = repository.FindAll().OrderBy(t => t.Descricao);
    var controllerBase = filterContext.Controller;
    controllerBase.ViewData.Add("Tipos", tiposDocumento);
}
{% endhighlight %}

E aquela dependência feia foi removida.
