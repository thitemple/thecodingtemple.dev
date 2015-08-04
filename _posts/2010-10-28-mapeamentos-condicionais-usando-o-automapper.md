---
layout: post
title: Mapeamentos condicionais usando o AutoMapper
categories:
- Desenvolvimento
- automapper
comments: true
status: publish
type: post
published: true
alias: /mapeamentos-condicionais-usando-o-automapper/index.html
date: 2010-10-28
---
Eu me deparei com um problema diferente usando o AutoMapper. Eu precisava mapear um atributo do tipo DateTime de um web service para uma classe de negócio.

Se você já fez isso, provavelmente sabe que quando tem um atributo do tipo DateTime, você terá na sua classe de proxy dois atributos. Um do tipo DateTime e um booleano que informa se o seu DateTime está preenchido ou não.

Assim, supondo que no seu web service exista um atributo do tipo DateTime chamado CriadoEm, então você terá em sua classe de proxy dois atributos assim:

{% highlight csharp %}
public DateTime CriadoEm { get; set; }
public bool CriadoEmSpecified { get; set; }
{% endhighlight %}

Bom, nesse caso, eu queria que o AutoMapper mapeasse esse atributo apenas se CriadoEmSpecified fosse = true.

Eu resolvi isso dessa forma:

{% highlight csharp %}
Mapper.CreateMap<classeOrigemWs, MinhaClasseNeg>()
  .ForMember(c => c.CriadoEm, opt => {
    opt.Condition(x => x.CriadoEmSpecified);
    opt.MapFrom(x => x.CriadoEm);
  });
{% endhighlight %}

É claro que isso vale para qualquer condição que você queira, então, agora é só aproveitar. !(/images/2010/10/wlEmoticon-smile.png)
