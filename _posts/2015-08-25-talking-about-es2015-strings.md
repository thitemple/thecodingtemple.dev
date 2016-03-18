---
title: "Talking about ES15: strings"
layout: post
description: A brief description about some of the new features in strings on ES2015
date: 2015-08-25
comments: true
tags: [javascript,es2105,es6]
category: code
---
There are a few new features related to strings in ES2015. They're easy to learn and they allow for a more clean code.<!-- more -->
 
In ES15, some new methods were added to the String object. For instance, now there's a repeat method.

``` js
var tripleX = 'X'.repeat(3);
console.log(tripleX); // XXX
```

Instead of checking the indexOf to verify if a string contains some text, we can now use the includes method.

``` js
console.log('JavaScript'.includes('ava')); // true
console.log('JavaScript'.includes('hello')); // false
```

We can verify if a string starts with or ends with some text.

``` js
console.log('Luke'.startsWith('Lu')); // true
console.log('Leia'.endsWith('ia')); // true
```

For all of those three methods (includes, startsWith and endsWith), there's an optional second parameter used to specify where in the string the search starts.

``` js
console.log('The blue pill'.includes('blue', 4)); //true
console.log('The red pill'.startsWith('red', 4)); //true
console.log('Hello Mr. Anderson'.endsWith('Hello Mr', 8)); //true
```

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Responsive content -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1865353648221711"
     data-ad-slot="8499334570"
     data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## Template literals

Template literals are a new string literal which we can have multiple lines and we also can interpolate expressions.

``` js
let name = 'Thiago';
console.log(`Hello ${name}`); // Hello Thiago

let message = `Hello 
${name}, 
welcome to ES2015`;

console.log(message); 
// Hello
// Thiago
// welcome to ES2015
```

Note that to delimit the literal we use backticks (`) and not single quotes, and all interpolated expressions are delimited by ${}.