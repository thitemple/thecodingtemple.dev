---
layout: post
title: Adicionando Foreign Keys no Rails
categories: [Desenvolvimento, rails, ruby]
status: publish
comments: true
type: post
published: true
alias: /adicionando-foreign-keys-no-rails/index.html
---
Existem várias formas de se adicionar foreign keys no rails, mais uma das que eu acho mais simples é utilizando o plugin <a href="http://github.com/patientslikeme/migration_helpers">migration_helpers</a>.

A instalação funciona como qualquer outro plugin do rails:

{% highlight bash %}
script/plugin install git://github.com/patientslikeme/migration_helpers.git
{% endhighlight %}

Depois disso edite seu arquivo de migração. Por exemplo, supondo que você tenha uma classe/tabela chamada Aluno e que esta tabela está relacionada a uma classe/tabela turma , para adicionar uma foreign key deve-se fazer o seguinte:

{% highlight ruby %}
class CreateAlunos > ActiveRecord::Migration
 def self.up
     create_table :alunos do |t|
      t.string :nome, :null => false
      t.date :datanascimento, :null => false
      t.integer :turma_id, :null => false

      t.timestamps
    end

    add_foreign_key :alunos, :turma_id, :turmas
  end

  def self.down
    drop_table :sprints
  end
end
{% endhighlight %}

Quando rodar o rake db:migrate já será gerado o código SQL para a criação da foreign key no banco de dados.

Essa é somente uma funcionalidade do plugin migrate_helpers. Ele tem uma série de outros métodos muito legais como por exemplo para gravar dados para uma tabela.

Espero que tenha ajudado.
