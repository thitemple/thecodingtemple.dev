---
title: on code reviews
date: 2015-10-23
description:
layout: post
---
Code review or peer review, as is also known, is the practice of someone different from the author of the code to review it before it's pushed and going into production. 

I have worked for many years without putting code reviews into practice, and I have been doing it for a few years now, and I got tell you, I don't want to get back to not doing it.

There are many and different benefits when doing code reviews, but what I want to talk about today is what one should aim for when doing a code review.

1. *Make sure there are good quality tests*: automated tests aren't just important, they're one of the things that separates a professional developer from someone not so professional. So I'm assuming you're writting them. But it's important to check if the written tests have real meaning. Sometimes we write tests (intentionally or not) that just make the bullet turns green. Never forget: test code is as important as production code.
2. *Check for good names*: naming is hard, so when the author of the code is explaining it to you, make sure that what you're reading means the same thing that you're reading. Sometimes we forget to rename that x variable, sometimes it was a lack of inspiration or even that the intent of the naming was not clear. It's important that other people can follow the intent of the code just by reading it, after all the code is the live documentation. And I don't know about you, but I tend to forget what I dit yesterday, imagine what trying to remember what I did last month.
3. *Sharing the knowledge*: we can't know for sure who is going to maintain the code being shipped today. Maybe the author is leaving, maybe there's a problem and she's on vacation. It's important that somebody else have at least some idea about how feature was implemented.
4. *Watch for architectural flaws*: not everything has to be made your way, but if you thing there's a possible flaw, that's the time to say it. An unnecessary dependency, to many parameters in a function, failling to encapsulating logic by overexposing it, all those things should be taken in consideration. First, try and understand why it was wrotten that way, and if thing there's a better solution, say it.
5. *Learn/teach new things*: now, this is not about the domain you're working, it's about the tech. Maybe you know something you can teach (that hidden corder of the language or platform), or, you may be learning something new. It doesn't matter who's on the other side of the review, there's something to learn and to teach. Be open minded.