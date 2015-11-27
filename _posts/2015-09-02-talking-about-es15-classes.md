---
title: "Talking about ES15: classes"
date: 2015-09-02
description: An overview of how classes work in ES15
comments: true
layout: post
categories: [es15 es6 javascript classes]
---
**Update:** I have also [recorded a video about classes](https://youtu.be/p1jCfPIBh0M), if you want to watch it in adition to reading this post.

JavaScript has always been an object-oriented language. It never had a class definition, but the same behavior could be achieved using constructor functions and the prototype object.

Although many people like that, there are a lot of people who don't. So, [JavaScript libraries](http://jsclass.jcoglan.com/){:target="_blank"} were created to "solve this problem".

Now in ES15 we have the capability of creating classes, which under the hoods, use the same technique of constructor functions and prototype objects. Details you don't really have to know, if all you're doing is ES15, but I think you should anyway. ;)
So, to define a class in ES15 is really simple.

{% highlight js %}
class MyClass {
    
}
let c = new Class();
{% endhighlight %}

There you go, how to define a class and instantiate it. Now, classes may have constructors. Here's an example of a class with a constructor which expects a parameter *name*.

{% highlight js %}
class Person {
    constructor(name) {
        this.name = name;
    }
}
let p = new Person('Thiago');
console.log(p.name);
{% endhighlight %}

In the given example a public field called *name* was added to the class. We can have getters and setters for that field.

{% highlight js %}
class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
    
    set name(value) {
        this._name = value;
    }
}
let p = new Person('Thiago');
console.log(p.name); // Thiago
p.name = 'Temple';
console.log(p.name); // Temple
{% endhighlight %}

The code is pretty straightforward, but one thing to notice is that inside the constructor, the value of *name* was assigned to a "private" variable *_name*. That's necessary because otherwise the getter name would call itself until a stack overflow error would be thrown. And, when I say "private", what I mean is that under the hoods, the class is no more than a function and there's no such thing as a private variable inside a function in JavaScript. One could write the code below and would be perfectly valid.

{% highlight js %}
let p = new Person('Thiago');
console.log(p._name);  // Thiago
{% endhighlight %}

Besides that, you can imagine that getters and setters are useful if we'd like to make some validations when setting a value or getting it.

As you may imagine classes can have methods, but they also can have static methods.

{% highlight js %} 
class Person {
    constructor(name) {
        this.name = name;
    } 
    sayHello() {
        console.log(`Hello, ${this.name}`);
    }

    static myMethod() {
        console.log("I'm a static method");
    }
}
new Person('Thiago').sayHello(); // Hello, Thiago
Person.myMethod(); // I'm a static method
{% endhighlight %}

Classes can inherit from other classes and for that we use the keyword *extends*.

{% highlight js %}
class Person {
  constructor(name) {
    this.name = name;
  }
}

class User extends Person {
  constructor(name) {
    super(name);
  }

  sayHello() {
    console.log(`Hello, ${this.name}`);
  }
}

let u = new User('Thiago');
u.sayHello(); // Hello, Thiago
console.log(u instanceof Person); // true
console.log(u instanceof User); // true
{% endhighlight %}

Here we can see the class User extending the class Person. Also, we could see the use of the keyword *super* to pass parameters to the parent constructor. The keyword *super* can be used only inside a constructor and from a method in a child class, like so:

{% highlight js %}
class Person {
  declare() {
    return "I'm a person";
  }
}
class User extends Person {
  declare() {
    return this.super() + " and a User";
  }
}
let u = new User();
console.log(u.declare()); // I'm a person and a User
{% endhighlight %}

When declaring classes we're not obligated to declare a constructor, but if we do in a derived class, we have to call *super*, otherwise a SyntaxError will be thrown.

{% highlight js %}
class Person {}

class User extends Person {
  // valid
}

// SyntaxError
class SpecialPerson extends Person {
  constructor() {
  }
}
{% endhighlight %}

In a derived class we also have to call *super* before using *this*.

{% highlight js %}
class Person {}

class User extends Person {
  constructor() {
    super();
    this.myValue = "a value";
  }
}

class SpecialPerson extends Person {
  constructor() {
    this.myValue = "a value"; // SyntaxError
    super();
  }
}
{% endhighlight %}