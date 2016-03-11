---
title: How to run tests in parallel using NUnit 3
description: How to run tests in parallel using NUnit 3
layout: post
category: code
date: 2016-02-29
tags: [c#, .net, nunit, tests]
comments: true
---
Since version 3 of NUnit, it is possible to run tests in parallel. And if you can turn this feature on, you should. The implementation is simple, and you will probably notice a considerable improvement in the time spent running the tests.
<!-- more -->
According to the docs, there are three types of parallel execution to choose from:

- Self      // the test itself may be run in parallel with other tests
- Children  // child tests may be run in parallel with one another
- Fixtures  // fixtures may be run in parallel with one another

## So how does that works?

First, let's see some tests running in series.

<figure>
    <img src="/images/2016/03/tests-in-serie.gif">
</figure>

As you can see, at the bottom of the image, it took 13 seconds to run all tests.

All the tests in this demo are the same, and they are copies of this one:

{% highlight csharp %}
[Test]
public void Test1() 
{
    System.Threading.Thread.Sleep(1000);
    Assert.IsTrue(true);
}
{% endhighlight %}

The simplest way to activate the parallel feature in NUnit is by doing so at an assembly level. 

Open your AssemblyInfo.cs file and add the following line:

{% highlight csharp %}
[assembly: Parallelizable(ParallelScope.Fixtures)]
{% endhighlight %}

The above line of code will make all fixture classes to run in parallel.

Here are the results:

<figure>
    <img src="/images/2016/03/tests-in-parallel.gif">
</figure>

[Ah! Much better](http://www.wavsource.com/snds_2016-02-14_1408938504723674/video_games/duke/better.wav), half of the time and all the fixtures are running in parallel. 

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

Now, let's say you have for some reason a class that cannot be tested in parallel. Well, then you could use the ParallelScope.None on the particular class or test. 

In this example, I added the attribute to the TestFixure3 class.

{% highlight csharp %}
[TestFixture]
[Parallelizable(ParallelScope.None)]
public class TestFixture3
{
    // ...
}
{% endhighlight %}

And this is the result:

<figure>
    <img src="/images/2016/03/with-none.gif">
</figure>

And that's it!