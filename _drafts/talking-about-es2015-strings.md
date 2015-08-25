---
title: "Talking about ES15: strings"
layout: post
description:
date:
comments: true
categories: [javascript es2105 es6]
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
console.log('Hello Mr. Anderson'.endsWith('son', 15)); //true
{% endhighlight %}
