---
title: Functional JavaScript - Composition
description: How to use compose functions in JavaScript using Ramda
layout: post
category: code
date: 2016-04-22
tags: [javascript, functional programming, composition, ramda]
imagefeature: background/winter.jpg
comments: true
---
Composition is a nice way of reusing existing functions to create new ones. Each of those functions will act on some data that is passed by as an argument, transforming it and then returning it so that the next function in the composition can do the same.

This may sound complicated at first, but it's simpler than it reads. You'll see with a few examples. 

By the way, this is second post on the subject of functional programming using JavaScript, first [I wrote about curried functions](/blog/2016/04/13/functional-javascript-introduction-and-currying/) which is an essential technique when doing composition. So I suggest you read it and understand curried functions before reading this post, it will make things a lot easier. If you do know what curried functions are, be my guest and go ahead.