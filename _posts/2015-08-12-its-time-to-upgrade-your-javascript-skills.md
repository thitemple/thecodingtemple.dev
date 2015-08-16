---
layout: post
title: "It's time to upgrade your JavaScript skills"
date: 2015-08-12
comments: true
categories: development
tags: javascript, es6, es2015, ecmascript
---
So, last June, the [TC39 Committee](http://www.ecma-international.org/memento/TC39.htm){:target="_blank"} made EcmaScript 6 a standard. EcmaScript is the official name of the JavaScript language and the new standard is also known as ES6.

This is already major as news goes, but there's one thing more that's really important. They decided to call this new version EcmaScript 2015 (or ES2015 for short). What this means is, they're planning on releasing a new version of EcmaScript each year. Better yet, the committee is already working on ES2016.

This is a major change since the last two versions of EcmaScript, ES3 and ES5, were approved in 1999 and 2009 respectively.

For us developers, it's crucial now, more than ever, to keep ourselves up-to-date with the new features and changes to language.

## Browser support

What about browser support, you may ask. Well, at the moment of the writing of this post, the browser that has the most implementations of ES2015 is Firefox version 41 with 69%. You can check [this table to see the current status.](http://kangax.github.io/compat-table/es6/){:target=_blank} I can imagine that for most people that's not acceptable if we're talking about a production environment. So, are there any other options? I'm glad you asked.

## Transpilers

The easiest (and safest) way to start using ES2015 right now is with the use of transpilers. There are a few in market, [Traceur](https://github.com/google/traceur-compiler){:target="_blank"}, [Babel](https://babeljs.io/){:target="_blank"} and even [TypeScript](http://www.typescriptlang.org/){:target="_blank"} is considered a transpiler of ES with types. I cannot tell you which one is the best, but the one who's gaining a lot of momentum lately is Babel.

So let's try it with Babel.

I'm assuming you already have [Node](https://nodejs.org/){:target="_blank"} installed. So next, we're going to install [Gulp](http://gulpjs.com/){:target="_blank"}.

{% highlight bash %}
npm install -g gulp
{% endhighlight %}

Gulp has a plug-in for Babel that will allow us to transpile the ES2015 files to ES5 automagically.

In a new folder, create a new package.json file:

{% highlight json %}
{
    "name": "babeldemo",
    "version": "1.0.0",
    "main": "index.js",
    "scripts": {
    },
    "author": "Thiago Temple",
    "devDependencies": {
    }
}
{% endhighlight %}

Now let's install gulp to help us transpile our ES2015 code:

{% highlight bash %}
npm install --save-dev gulp gulp-babel
{% endhighlight %}

Now it's time to configure Gulp. I'm going to do that in a gulpfile.js file (which is what Gulp expect us to have by default).

{% highlight javascript %}
var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function() {
    return gulp.src('src/app.js')
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});
{% endhighlight %}

In this code we're looking for a file called app.js inside a directory called *src*. After that, Babel will transpile the file and save an app.js file in the *dist* directory. Pretty simple, hum?

Let's say that inside the src\app.js we have the following code:

{% highlight javascript %}
class Person {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    sayHello() {
        return `Hello, ${this.name}`;
    }
}
{% endhighlight %}

And in the console we run:

{% highlight bash %}
gulp
{% endhighlight %}

Now, inside the directory *dist* we should see an *app.js* file such as:

{% highlight javascript %}
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = (function () {
    function Person(name) {
        _classCallCheck(this, Person);

        this.name = name;
    }

    _createClass(Person, [{
        key: "sayHello",
        value: function sayHello() {
        return "Hello, " + this.name;
        }
    }, {
        key: "name",
        set: function set(name) {
            this._name = name;
        },
        get: function get() {
            return this._name;
        }
    }]);

    return Person;
})();
{% endhighlight %}

A perfect and valid ES5 file! All we have to do is reference the ES5 transpiled file inside the html files.

What this means is we can start using ES2015 and even some features of ES2016 today to help us build better JavaScript code and that won't have an impact on our users.

## What if I don't want to use ES2015 in production now?

Honestly, I don't see why not, but if you just want to play with it and get comfortable, you can do that using the transpiler. But an easier way would be to use [Babel's repl](https://babeljs.io/repl/){:target="_blank"}. Just type in some ES2015 code and see the immediate result of the transpilation.

Next, we're going to start seeing the new features in ES2015.

