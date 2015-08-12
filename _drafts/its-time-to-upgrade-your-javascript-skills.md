---
layout: post
title: "It's time to upgrade your JavaScript skills"
date:
comments: true
categories: development
tags: javascript, es6, es2015, ecmascript
---
So, last June, the [TC39 Committee](http://www.ecma-international.org/memento/TC39.htm){:target="_blank"} made EcmaScript 6 a standard. EcmaScript is the official name of the JavaScript language and the new standard is also known as ES6.

This is already major as news goes, but there's one thing more that's really important, they decided to call this EcmaScript 2015 or ES2015. What this means is, they're planning on realising a new version of EcmaScript each year, and the committee is already working on ES2016.

This is a major change since the last two versions of EcmaScript, ES3 and ES5, were approved in 1999 and 2009 respectivelly.

For us developers, it's crutial now, more than ever, to keep ourselfs up-to-date with the new features and changes to language.

## Browser support

What about browser support, you may ask. Well, at the moment of writing of this post, the browser that has the most implementations of ES2015 is Firefox version 41 with 69%. You can check [this table to see the current status.](http://kangax.github.io/compat-table/es6/){:target=_blank} I imagine that for most people that's not acceptable if we're talking about a production environment.
marke
So is there any other options? I'm glad that you asked.

## Transpilers

The easiest (and safest) way to start using ES2015 right now is with the use of transpilers. There are a few in market, [Traceur](https://github.com/google/traceur-compiler), [Babel](https://babeljs.io/) and even [TypeScript](http://www.typescriptlang.org/) is considered a transpiler of ES with types.

So let's try it with Babel.

I'm assuming you already have [Node](https://nodejs.org/) installed. So next, we're going to install [Gulp](http://gulpjs.com/).

{% highlight bash %}
npm install -g gulp
{% endhighlight %}

Gulp has a plugin for Babel that will allow us to transpile the ES2015 files to ES5 automagically.

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

Now let's install the gulp and its plugins inside the project:

{% highlight bash %}
npm install --save-dev gulp gulp-babel gulp-sourcemaps
{% endhighlight %}

Now it's time to configure Gulp, we're going to do that in a gulpfile.js file.

{% highlight javascript %}
var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
    return gulp.src('src/app.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});
{% endhighlight %}

So, what this code looks for a file called app.js inside a directory called src, it will generate the source maps from the original file, so if we have a bug, we can find it easily. After that, Babel will transpile the file and save an app.js file in the dist directory.

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

In the directory
