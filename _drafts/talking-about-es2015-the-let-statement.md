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
