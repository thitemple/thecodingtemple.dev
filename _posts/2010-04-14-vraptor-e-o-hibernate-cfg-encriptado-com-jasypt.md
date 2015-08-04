---
layout: post
title: VRaptor e o Hibernate.cfg encriptado com jasypt
categories:
- Desenvolvimento
- hibernate
- jasypt
- java
- vraptor
comments: true
status: publish
type: post
published: true
date: 2010-04-14
alias: /vraptor-e-o-hibernate-cfg-encriptado-com-jasypt/index.html
---
Essa semana eu tive que resolver esse problema. Estava eu fazendo um site em java usando o framework <a href="http://vraptor.caelum.com.br/" target="_blank">VRaptor</a> (que é muito bom por sinal) e eu precisa encriptar a senha do arquivo Hibernate.cfg.xml - acho que isso devia ser o padrão, e por sinal não é. De qualquer forma, eu gastei um tempo quebrando a cabeça pra fazer isso.

A solução que eu encontrei foi usar o framework <a href="http://www.jasypt.org/" target="_blank">jasypt</a> que precisa de algumas configurações mas funciona muito bem.

Depois de baixar o jasypt e adicionar a lib no classpath, o arquivo hibernate.cfg.xml deve ficar assim:

{% highlight xml %}
<hibernate-configuration>
    <session-factory>
        <property name="connection.provider_class">
            org.jasypt.hibernate.connectionprovider.EncryptedPasswordDriverManagerConnectionProvider

        </property>
        <property name="connection.encryptor_registered_name">
            configurationHibernateEncryptor
        </property>
        <property name="hibernate.dialect">org.hibernate.dialect.OracleDialect</property>
        <property name="hibernate.connection.url">jdbc:oracle:thin:@192.168.1.1:1521:XE</property>
        <property name="hibernate.connection.driver_class">oracle.jdbc.driver.OracleDriver</property>
        <property name="hibernate.connection.username">srcweb</property>
        <property name="hibernate.connection.password">ENC(r4Tjm3PB0LndmGQ/RqRBRA==)</property>
        <property name="hibernate.show_sql">true</property>
        <property name="hibernate.hbm2ddl.auto">update</property>
        <property name="hibernate.cache.provider_class">org.hibernate.cache.HashtableCacheProvider</property>
        <!-- mappings -->
    </session-factory>
</hibernate-configuration>
{% endhighlight %}

Nessa configuração o hibernate é informado que deve usar DriverManager do Jasypt. Também informamos o hibernate qual é o objeto responsável pela encriptação/decriptação, no nosso caso o configurationHibernateEncryptor.

Veja que a senha está encriptada e usando uma função ENC, é assim que o jasypt sabe que a informação está encriptada.

Agora, precisamos dizer para o hibernate qual é esse objeto configurationHibernateEncryptor. A solução que eu encontrei foi registrar na inicialização da aplicação.

Primeiro é preciso criar um provider customizado para o VRaptor. No arquivo web.xml adicione:

{% highlight xml %}
<context-param>
    <param-name>br.com.caelum.vraptor.provider</param-name>
    <param-value>com.seu.namespace.provider.CustomProvider</param-value>
</context-param>
{% endhighlight %}

A classe CustomProvider ficou assim:

{% highlight java %}
public class CustomProvider extends SpringProvider
{
    @Override
    protected void registerCustomComponents(ComponentRegistry registry) {
        registry.register(SessionCreator.class, SessionCreator.class);
        registry.register(SessionFactoryCreator.class, SessionFactoryCreator.class);
        registry.register(HibernateTransactionInterceptor.class,
            HibernateTransactionInterceptor.class);
        StandardPBEStringEncryptor encryptor = new StandardPBEStringEncryptor();
        encryptor.setPassword("sua_senha");
        HibernatePBEEncryptorRegistry registryEncryptor = HibernatePBEEncryptorRegistry.getInstance();
        registryEncryptor.registerPBEStringEncryptor("configurationHibernateEncryptor",
            encryptor);
    }
}
{% endhighlight %}

Pronto, junto com o jasypt vem um arquivo encrypt.bat/encrypt.sh que você usa para gerar a senha encriptada da seguinte forma:

encrypt input=texto_para_encriptar password=sua_senha
