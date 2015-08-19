---
title: Talking about ES2015: destructuring
date:
comments: true
categories: [javascript, es2015]
---
Destructuring is a new feature in ES2015 which allows us to declare or assign values to variables. It's a very powerful way of doing that. It might sound a little confusing, but it really is very simple once you tried a few times.

## Arrays

Let's start with simple example using arrays.

When using destructuring we always follow the formula 'pattern' <= 'value'

{% highlight js %}
let arr = [1, 2];
let [x, y] = arr;
console.log(x); // 1
console.log(y); // 2
{% endhighlight %}

When destructuring arrays, we always use [] to declare or assign values to variables. In the above example we're declaring two variables *x* and *y*. Also, we're assign the values of the array *arr* to those variables. Because *x* was the first variable in the pattern, the first value from array was assigned to it. The same goes for *y* which was the second variable in the pattern and got the second value from the array assigned to it.

It is the same as the code below:

{% highlight js %}
let arr = [1, 2];
let x = arr[0];
let y = arr[1];
console.log(x); // 1
console.log(y); // 2
{% endhiglight %}

That's very useful when there's a function that returns multiple values.

{% highlight js %}
function demo() {
  return ['Thiago', 'Temple'];
}
let [firstName, lastName] = demo();
console.log(firstName); // Thiago
console.log(lastName); // Temple
{% endhighlight %}

Destructuring is also practical for swapping values.

{% highlight js %}
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1
{% endhighlight %}

What happens if I don't want to declare a variable for each element of the array? No problem, if there are more values in the array, those will be ignored.

{% highlight js %}
let [a, b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 2
{% endhighlight %}

We can't just ignore de end of the array, we can ignore any element in any order.

{% highlight js %}
let [, a, b] = [1, 2, 3];
console.log(a); // 2
console.log(b); // 3

let [x, , y] = [4, 5, 6];
console.log(x); // 4
console.log(y); // 6
{% endhighlight %}

What if the array does not have all the elements we are expecting? In that case, the variable would have the *undefined* value assigned to it.

{% highlight js %}
let [a, b] = [];
console.log(a); // undefined
console.log(b); // undefined
{% endhighlight %}

## Objects

Object destructuring is a little more complex than arrays. First the syntax change and instead of using [] we use {}.

{% highlight js %}
let { firstName: x, lastName: y } = { firstName: 'Thiago', lastName: 'Temple' };
console.log(x); // Thiago
console.log(y); // Temple
{% endhighlight %}

In the above code, we're declaring two variables *x* and *y*, and we're looking for properties *firstName* and *lastName* inside the object value. What might be confusing is the fact that the name of the variables are in the right side of the pattern. But in the end, is just a matter of getting used to it.

As with the arrays, if a property is not informed, the value undefined is assigned to the variable.

{% highlight js %}
let { firstName: x, lastName: y } = { firstName: 'Thiago' };
console.log(x); // Thiago
console.log(y); // undefined
{% endhighlight %}

### Shorthands

Instead o naming our variables *x* and *y* we could name them something more meaninful.

{% highlight js %}
let {firstName: firstName, lastName: lastName} = { firstName: 'Thiago', lastName: 'Temple' };
console.log(firstName); // Thiago
console.log(lastName); // Temple
{% endhighlight %}

As you may imagine, now we're declaring two variables *firstName* and *lastName* and looking for properties with the same name in the object being assigned. Whenever this is the case, we can omit the naming part of pattern, so the above code could be written like this;

{% highlight js %}
let { firstName, lastName } = { firstName: 'Thiago', lastName: 'Temple' };
console.log(firstName); // Thiago
console.log(lastName); // Temple
{% endhighlight %}

### Nested objects

We can also have nested assignments with destructuring.

{% highlight js %}
let { name: n, contact: { twitter: t } } = { name: 'Thiago', contact: { twitter: '@vintem12' } };
console.log(n); // Thiago
console.log(t); // @vintem12
{% endhighlight %}

Now, we're looking for a property named *contact* that is an object and which contains a property called *twitter* and we're assigning its value to a variable called *t*.

## Default values

In both cases (arrays and objects) we can have default values, so to be sure a variable is always initialized. The syntax for declaring default values when destructuring is very simple, the name of the variable = a value.

{% highlight js %}
let [a = 1, b = 2, c = 999] = [3, 4];
console.log(a); // 3
console.log(b); // 4
console.log(c); // 999
{% endhighlight %}

In this case we have default values for the three variables being declared, but because the array containing the values has the first two elements, their values get assigned. The last variable, *c*, is initialized with its default value.

It's the same case for objects.

{% highlight js %}
let { username, isAdmin: admin = false } = { username: 'user' };
console.log(username); // user
console.log(admin); // false
{% endhighlight %}

Now we're using the shorthand to declare a variable called *username* and look for a property with the same name. Also, we're looking for a property called *isAdmin* and declaring a variable *admin* with the default value of *false*.

## Destructuring in function parameters.

The use of destructuring with default values is a great use case for initializing parameters in a function.

{% highlight js %}

function ajaxCall({url, method = 'POST', dataType = 'json'}) {
  console.log(url); // http://templecoding.com
  console.log(method); // GET
  console.log(dataType); // json
}

ajaxCall({ url: 'http://templecoding.com', method: 'GET' });

{% endhighlight %}

The same thing now using array destructuring.

{% highlight js %}
function ajaxCall([url, method = 'POST', dataType = 'json']) {
  console.log(url); // http://templecoding.com
  console.log(method); // GET
  console.log(dataType); // json
}

ajaxCall(['http://templecoding.com', 'GET']);
{% endhighlight %}

## For of iteration

One last use case I want to show is the use of destructuring in a *for of* loop.

{% highlight js %}
let users = [
  {
    username: 'user1',
    contact: { twitter: '@user1' }
  },
  {
    username: 'user2',
    contact: { twitter: '@user2' }
  }
];

for(let {username, contact: { twitter: t }} of users ) {
  console.log(username); // user1, user2
  console.log(t); // @user1, @user2
}
{% endhighlight %}

In the above example we're looping through the users array and assigning a *username* variable and a *t* variable.
