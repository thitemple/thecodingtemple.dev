---
layout: post
title: "Talking about ES2015: the let statement"
date:
comments: true
categories: [javascript, es2015]
---
In ES2015 there's a new way to declare variables, it's the **let** statement which declares a block scope variable. Block scope variable? What does that means exactely?

Well, let's get some context using ES5. In ES5 and earlier versions, all variables are function scoped. Meaning that no matter where inside a function a variable is declared, this variable is accessible inside the whole function.

Let's see an example:

{% highlight js %}
function demo() {
    console.log(i); // undefined
    for(var i = 0; i < 10; i++) {
        // do something
    }
    console.log(i); // 10
}
demo();
{% endhighlight %}

In the code above, one could think that because the variale *i* was declare inside a for loop, this variable is scoped to that loop. As we can see, when the variable was logged before the loop, the result is *undefined* - Just for clarification, all declared but not initialized variables have the value of *undefined*. Also, the variable was accessible and had the value of *10* after the loop.

One other thing, it doesn't matter how many times a variable is declared inside a function, if it has the same name, it's the same variable.

{% highlight js %}
function demo() {
    var name = "Thiago";
    if(true) {
        console.log(name); // Thiago
        var name = "Temple";
    }
    return name;
}
console.log(demo()); // Temple
{% endhighlight %}

Simple as that, no error, it's the same variable.

** The let keyword

In ES15, there's a new new keyword to declare variables, and it's a block scope variable. So now, if we declare a variable inside a *if* or a *for loop* that variable is no accessible outside of that scope.

{% highlight js %}
function demo() {
    if(true) {
        let name = "Thiago";
    }
    console.log(name); // ReferenceError: name is not defined
}
demo();
{% endhighlight %}

Here we can see that the variable name is not accessible outside the scope of the *if*. This is the same when using *for loops*.

{% highlight js %}
function demo() {
    for(let i = 0; i < 10; i++) {

    }
    console.log(i); // ReferenceError: i is not defined
}
demo();
{% endhighligh %}

Because of this variables declared inside of a scope with the same name as varibles outside of that scope will shadow the latter.

{% highlight js %}
function demo() {
    let name = "Thiago";
    if(true) {
        let name = "Temple";
        console.log(name); // "Temple"
    }
    console.log(name); // Thiago
}
demo();
{% endhighlight %}

In this example, after the *if block* the log returns "Thiago" as it was the value initialized for the *name* variable in that scope.

Another difference between *var* and *let* is that with *var* variables are hoisted and with *let* they're not. So using var, if one wrote the funcion demo1 as bellow, it is the same thing as writing the funcion demo2:

{% highlight js %}
function demo1() {
    console.log(name); // undefined
    var name = "Thiago";
    console.log(name); // Thiago
}
demo();
{% endhighligh %}

{% highlight js %}
function demo2() {
    var name;
    console.log(name); // undefined
    name = "Thiago";
    console.log(name); // Thiago
}
demo2();
{% endhighligh %}

As for the *let* declaration, there's no hoisting so the code bellow will throw an error.

{% highlight js %}
function demo() {
    console.log(name); // ReferenceError
    let name = "Thiago";
}
demo();
{% endhighligh %}

/// FOR
for(var i = 0; i< 10; i++) {
    setTimeout(function() { console.log(i); }, 100);
}


CONST