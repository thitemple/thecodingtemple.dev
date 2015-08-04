---
layout: post
title: Ruby para desenvolvedores .NET–parte 2
categories:
- Desenvolvimento
- ironruby
- ruby
status: publish
type: post
published: true
comments: true
date: 2010-11-05
---
<div style="padding-left: 10px; border: 1px dashed;">

Esta é uma série de artigos sobre Ruby para desenvolvedores .NET, confira os outros em:

<a href="/blog/2010/11/03/ruby-para-desenvolvedores-netparte-1/">Ruby para desenvolvedores .NET – parte 1</a>

</div>
Ruby, é uma linguagem orientada a objetos. É  possível reconhecer, apenas com pequenas diferenças na sintaxe, algumas similaridades e diferenças de funcionamento, se comparado com o C#.

Podemos ver no código abaixo, a definição de uma classe(Usuario), a definição de um construtor (initialize), a definição de um método (autorizar_acesso) e a criação de 2 atributos, nome e email.

{% highlight ruby %}
class Usuario
  attr_accessor :nome, :email

  def initialize(nome)
    @nome = nome
  end

  def autorizar_acesso
    false
  end
end
{% endhighlight %}

O que podemos ver de diferente aqui, é que quando chamamos o método attr_accessor para criar as propriedades nome e email, internamente o Ruby cria duas variáveis de instância chamadas @nome e @email e essas variáveis podem, obviamente, ser acessadas por qualquer método daquele objeto.’

A propósito, instanciar a class Usuario é tão simples quanto:
{% highlight ruby %}
usuario = Usuario.new
{% endhighlight %}

<strong>Retorno de valores</strong>

Uma outra coisa importante de lembrar no Ruby, é que a última instrução de um método sempre é retornada. Portanto dentro do método autorizar_acesso, estamos retornando o valor false. Colocar false como última instrução (e nesse caso, a única) é o mesmo que dizer return false.

Por exemplo, os dois métodos abaixo fazem a mesma coisa:

{% highlight ruby %}
def soma(x, y)
  # faz um monte de coisa desnecessaria aqui
  x + y
end

def soma(x, y)
  # faz um monte de coisa desnecessaria aqui
  resultado_soma = x + y
  return resultado_soma
end
{% endhighlight %}

Nos dois casos, x é somado a y e o resultado da soma é retornado.

<strong>Herança</strong>

Assim como em C#, Ruby também tem <a href="http://pt.wikipedia.org/wiki/Heran%C3%A7a_(inform%C3%A1tica)">herança</a> como podemos ver no exemplo abaixo:

{% highlight ruby %}
class Usuario
  attr_accessor :nome, :email

  def initialize(nome)
    @nome = nome
  end

  def autorizar_acesso
    false
  end
end

class UsuarioEspecial < Usuario
  def autorizar_acesso
    true
  end
end
{% endhighlight %}

No código acima a classe UsuarioEspecial herda da classe Usuario e sobrescreve o método autorizar_acesso. Assim já podemos ver que é possível usar também o polimorfismo.

<strong>Métodos Estáticos</strong>

Ruby não tem métodos estáticos realmente, mas ele tem, o que é conhecido como <span style="text-decoration: underline;">métodos de classe</span> e funcionam de forma similar aos métodos estáticos do C#. Para  usar métodos de classe basta que na declaração do método seja colocada a palavra chave <span style="text-decoration: underline;">self</span>, como podemos ver:

{% highlight ruby %}
class UsuarioEspecial < Usuario

  def self.salvar
    enviar_email("texto do email")
    #salvar os dados do usuario
  end

  def autorizar_acesso
    true
  end

private

  def enviar_email(txt)
    # envia email
  end
end
{% endhighlight %}

O método salvar pode ser chamado diretamente na classe UsuarioEspecial, não é necessário criar uma instância.

{% highlight ruby %}
UsuarioEspecial.salvar
{% endhighlight %}

Ainda no código acima podemos ver que para declarar um método privado pasta adicionar a palavra chave <span style="text-decoration: underline;">private</span> e qualquer método declarado abaixo dela será considerado privado.

<strong>Interfaces</strong>

Interfaces são um artifício  das linguagens estáticas para dizer ao compilador que uma classe tem um ou mais métodos.

No Ruby não existe um compilador e portanto não existe essa checagem prévia. Também existe a questão de que podemos alterar uma classe Ruby mesmo depois que ela já foi declarada, mas vamos falar disso depois. Portanto não existe a necessidade de interfaces.

Digamos que exista a seguinte situação feita em C#:

{% highlight csharp %}
interface IControlePagamento
{
    void Pagar();
}

class Pagamento : IControlePagamento
{
    public void Pagar()
    {
        // logica de pagamento
    }
}
{% endhighlight %}

O que esse código bem simples faz, é dizer ao compilador que a classe Pagamento implementa os métodos da Interface IControlePagamento. Em Ruby a única coisa que temos que fazer é efetivamente implementar o método Pagar()

{% highlight ruby %}
class ControlePagamento
  def pagar
  end
end
{% endhighlight %}

Isso tem vantagens e desvantagens.

A vantagem é que o código em Ruby é muito mais sucinto e objetivo, não é preciso escrever código para satisfazer o compilador. Existe apenas código para resolver o problema do negócio.

A desvantagem é que você não tem o aviso imediato do compilador caso o método não seja implementado.

Ainda assim, se você é adepto de técnicas como <a href="http://pt.wikipedia.org/wiki/Test_Driven_Development">TDD</a>, esse é um problema fácil de resolver, já que seus testes ficariam responsáveis por isso.

Outro recurso disponível no Ruby é que, toda classe automaticamente herda da classe Class, na classe Class existe um método chamado <span style="text-decoration: underline;">respond_to?</span>. Esse método verifica se um objeto responde/contém a um determinado método.

![](/images/2010/11/respond_to_false.png){: .aligncenter}

No exemplo acima a classe ControlePagamento foi definida sem o método pagar, veja que quando foi chamado o método respond_to? o retorno foi false.

Já abaixo o método foi definido e a resposta foi true.

![](/images/2010/11/respond_to_true.png){: .aligncenter}

Enfim, existem opções para controlar isso e há gente que faça, mas vale dizer que pelo que tenho visto, o mais comum é simplesmente seguir uma convenção.

<strong>Conclusão</strong>

Nesse artigo já vimos mais algumas diferenças mais marcantes do Ruby, no próximo vou falar um pouco do Object Model do Ruby.

Duvidas, criticas ou sugestões? Deixe um comentário.
