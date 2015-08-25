---
layout: post
title: "Talking about ES2015: the let and const keywords"
date: 2015-08-16
comments: true
categories: [javascript es2015]
---
In ES2015 there's a new way to declare variables, it's the **let** keyword which declares a block scope variable. Block scope variable? What does that mean exactly?

Well, let's get some context using ES5. In ES5 and earlier versions, all variables are function scoped. Meaning that no matter where inside a function a variable is declared, that variable is accessible inside the whole function.

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

In the above code, one could think that because the variable *i* was declared inside a for loop, this variable is scoped to that loop. As we can see, when the variable was logged before the loop, the result is *undefined* - just for clarification, all declared, but not initialized variables have the value of *undefined*. Also, the variable was accessible and had the value of *10* after the loop.

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

In ES15, there's a new new keyword to declare variables, and it's a block scope variable. So now, if we declare a variable inside a *if* or a *for loop* that variable is not accessible outside that scope.

{% highlight js %}
function demo() {
    if(true) {
        let name = "Thiago";
    }
    console.log(name); // ReferenceError: name is not defined
}
demo();
{% endhighlight %}

Here we can see that the variable *name* is not accessible outside the scope of the *if*. This is the same when using *for loops*.

{% highlight js %}
function demo() {
    for(let i = 0; i < 10; i++) {

    }
    console.log(i); // ReferenceError: i is not defined
}
demo();
{% endhighlight %}

Because of this, variables declared inside a scope having the same name as variables outside that scope will shadow the outer scoped variable. As we can see in the example below, there are two variables called *name*, and inside the *if* scope and only inside the *if* the new variable *name* will shadow the variable *name* that is outside the *if* scope.

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

Another difference between *var* and *let* is that *var* variables are hoisted and *let* variables are not. So using var, if one wrote the function demo1 as below, it is the same thing as writing the function demo2:

{% highlight js %}
function demo1() {
    console.log(name); // undefined
    var name = "Thiago";
    console.log(name); // Thiago
}
demo();
{% endhighlight %}

{% highlight js %}
function demo2() {
    var name;
    console.log(name); // undefined
    name = "Thiago";
    console.log(name); // Thiago
}
demo2();
{% endhighlight %}

As for the *let* declaration, there's no hoisting so the code below will throw an error.

{% highlight js %}
function demo() {
    console.log(name); // ReferenceError
    let name = "Thiago";
}
demo();
{% endhighlight %}

One last thing about the differences between let and var. When declaring a *var* variable in the head of the loop, only one binding is created to that variable, meaning the result of a loop like in the example below would print the number 5, five times.

{% highlight js %}
for(var i = 0; i< 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 100);
}
{% endhighlight %}

Now, the same code, just using *let* in the head of the loop would print the numbers 0 1 2 3 4. That's because with *let* there's one binding to the *i* variable for each iteration.

{% highlight js %}
for(let i = 0; i< 5; i++) {
    setTimeout(function() {
        console.log(i);
        }, 100);
}
{% endhighlight %}

##The const keyword

The *const* keyword as you can image is used to declare a constant, and its use is very simple:

{% highlight js %}
const NAME = "Thiago";
console.log(NAME); // Thiago
{% endhighlight %}

A constant must be initialize at the moment of the declaration and its value cannot be changed.

{% highlight js %}
const MY_CONST; //SyntaxError: missing = in const declaration

const MY_VAL = 1;
MY_VAL = 2; // SyntaxError: invalid assignment to const MY_VAL
{% endhighlight %}
