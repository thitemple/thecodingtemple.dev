---
title: RealWorld Fable - Pre-requisites
path: /realworld-fable/01-pre-requisites
--- 

### Here's what you need installed before you begin

1) Some version of .NET, I'm using .NET Core 3 that I installed [from here](https://dotnet.microsoft.com/download).
2) NodeJS. I'm running version 10.15 and [I got it from here](https://nodejs.org/en/download/).
3) You also need to install F#, follow the instructions for your OS [according to the F# site](https://fsharp.org).

It will be helpful to have some editor that supports F#, there's a free version of Visual Studio but I am using [VSCode](https://code.visualstudio.com/) with the [Ionide extension](https://marketplace.visualstudio.com/items?itemName=Ionide.Ionide-fsharp).

Make sure that everything is working by running the following on a terminal:

```
node --version
```

To verify that node is installed.

```
dotnet --version
```

To verify that .NET core is installed.

And (if you're on a Linux os Mac): 

```
fsharpi
```

Or on Windows:

```
fsi
```

This is the F# REPL and to quit from it just enter:

```
#quit;;
```

If you can run all of the above commands that means you have everything install.

It's time now to scaffold the project and say "Hello World" in F# and Fable.