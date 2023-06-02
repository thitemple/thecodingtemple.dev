---
title: Real Immutable Types With TypeScript
description: How to define a simple TypeScript type that will make your objects immutable
category: code
date: "2020-03-07"
tags: 
    - code
    - typescript
comments: true
path: "/blog/real-immutable-types-with-typescript"
---
When writing TypeScript there's a pretty easy, simple solution to create immutable objects and it doesn't involve adding third-party libraries.

``` typescript
type Immutable<T> = {
    readonly [K in keyof T]: Immutable<T[K]>;
}
```

There! There you go, that's all that you need.

Before I demo it with a few examples, here's the catch, like with everything else TypeScript related. **The types only work at compile time!** With that said, if you have a codebase with TypeScript only, you should be safe. Just remember this is not going to validate data at runtime, so no validation for parsed JSON from an API or data entered by a user.

If you are OK with that here's an example:

``` typescript
type Person = Immutable<{
    name: string,
    age: number,
    education: {
        degree: string,
        school: string,
    },
    friends: string[]
}>
```

The above is a good representation of a complex type with a nested object, primitive types and an array as properties.

Now, given a function that would expect a person as an argument, here's what happens:

``` typescript
function actOn(p: Person): void {
    p.name = ""; // Error
    p.age = ""; // Error
    p.education = {} as any; // Error
    p.education.degree = ""; // Error
    p.education.school = ""; // Error
    p.friends = []; // Error
    p.friends.push(""); // Error
}
```

The last line `p.friends.push("");` will fail with an error: `Property 'push' does not exist on type 'readonly string[]'`.

All the other lines above it will fail with: `Cannot assign to 'THE PROP NAME' because it is a read-only property.`

Oh yeah, and if you try to do this: 

``` typescript
function actOn(p: Person): void {
    p = {} as any; // OK
}
```

That will work! But that's fine. When you do that you're not changing the object that was passed as an argument to `p` you're assigning a reference to a new different object to `p`.

You can verify that, by logging the original object that was passed to the function after calling it.

## Understanding the Type

``` typescript
type Immutable<T> = {
    readonly [K in keyof T]: Immutable<T[K]>;
}
```

This type uses [Generics](https://www.typescriptlang.org/docs/handbook/generics.html) and [Mapped types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types) and in essence is:


1. Accepting another type as an argument (thus the generic) and that is represented by the `T`. The type can be an interface, a type alias or an inline type, just like the `Person` example.
2. Iterating over each attribute of the given type, and representing that attribute as the `K` letter (this is the mapped type part).
3. For each attribute, it modifies the attribute by pre-pending the attribute with a `readonly` keyword.
4. Wrapping the type of each attribute with a recursive call to the `Immutable` type once again, thus turning all of its nested attributes immutable as well.


It's a lot to unpack, I understand, and it may take some to sink in. But this is a very elegant (at least in my opinion) solution to this problem. So, if you don't understand Generics or Mapped types, take your time to read about it.

When you are designing your types you then define them just as I defined the `Person` type.

If you are not in control of the type but will write a function that accepts the type as an argument, you could do the same in the function signature.

``` typescript
function exec(someVal: Immutable<SomeType>) {}
```

## Why not use the built-in type Readonly<T>

TypeScript has some very useful [utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html). And one of those is the [Readonly](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlyt) type.

So say you try and do the same with it: 

``` typescript
type Person = Readonly<{
    name: string,
    age: number,
    education: {
        degree: string,
        school: string,
    },
    friends: string[]
}>

function actOn(p: Person): void {
    p.name = ""; // Error
    p.age = ""; // Error
    p.education = {} as any; // Error
    p.friends = []; // Error

    p.education.degree = ""; // OK
    p.education.school = ""; // OK
    p.friends.push(""); // OK
}
```

Note that the only change I made was to define the `Person` type wrapping it with the `Readonly` type.

But now, a few things happen, first, the `Readonly` type does not affect nested object attributes, so you can modify `degree` and `school`, also although you cannot re-assign a new array to the `friends` attribute you can `push` a new value to it and thus modify it.


## Bonus tip for an even safer code

When accepting arrays or tuples as arguments in a function, you can easily turn them to read-only arguments using the `readonly` keyword.

``` typescript
function exec(arg1: readonly string[], arg2: readonly [number, number]) {
    arg1.push(""); // Error

    arg2.pop(""); // Error
}
```

This only works for arrays and tuples, but it's a simple way of making them safer. Of course, you could also use the `Immutable` type.

``` typescript
function exec(arg1: Immutable<string[]>, arg2: Immutable<[number, number]>) {
    arg1.push(""); // Error

    arg2.pop(""); // Error
}
```