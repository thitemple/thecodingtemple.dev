---
title: "Talking about ES15: strings"
layout: post
description: A brief description about some of the new features in strings on ES2015
date: 2015-08-25
comments: true
categories: [javascript,es2105,es6]
---
In ES15 some new methods were added to the String object. For instance, now there's a repeat method.

{% highlight js %}
var tripleX = 'X'.repeat(3);
console.log(tripleX); // XXX
{% endhighlight %}

Instead of checking the indexOf to verify if a string contains some text, we can now use the includes method.

{% highlight js %}
console.log('JavaScript'.includes('ava')); // true
console.log('JavaScript'.includes('hello')); // false
{% endhighlight %}

We can verify if a string starts with or ends with some text.

{% highlight js %}
console.log('Luke'.startsWith('Lu')); // true
console.log('Leia'.endsWith('ia')); // true
{% endhighlight %}

For all of those three methods (includes, startsWith and endsWith), there's an optional second parameter used to specify where in the string the search starts.

{% highlight js %}
console.log('The blue pill'.includes('blue', 4)); //true
console.log('The red pill'.startsWith('red', 4)); //true
console.log('Hello Mr. Anderson'.endsWith('Hello Mr', 8)); //true
{% endhighlight %}

## Template literals

Template literals are a new string literal which we can have multiple lines and we also can interpolate expressions.

{% highlight js %}
let name = 'Thiago';
console.log(`Hello ${name}`); // Hello Thiago

let message = `Hello 
${name}, 
welcome to ES2015`;

console.log(message); 
// Hello
// Thiago
// welcome to ES2015
{% endhighlight %}

Note that to delimit the literal we use backticks (`) and not single quotes, and all interpolated expressions are delimited by ${}.