---
layout: post
title: Addendum to the boring front-end developer
date:   2015-07-15 09:00:01
categories: js html css
description: My response to Hacker News comments about The Boring Front-end Developer.
---

Thanks to everyone who took the time to read T[he Boring Front-end
Developer](/the-boring-front-end-developer/). There were some outrageous and funny comments which I found entertaining and there were also some points worth addressing.

## 1. CSS preprocessors

I know I'm in the minority here.

I know a lot of developers who like them, I know a lot of developers who don’t.
I can see advantages in them too.

But I have worked on enough projects to know that these things come with very
real and painful disadvantages.

Important issues like performance, maintainability (the thing they’re trying to
[more](http://adamsilver.io/articles/the-disadvantages-of-css-preprocessors/).
It’s relatively easy (read: cheap) to add a CSS preprocessor to the tech stack,
but it’s relatively hard (read: costly) to remove it down the line.

I just advise, as with everything else, to be conscious of the issues before
deciding to use one and putting that on to your current and future team mates.

## 2. New != good && New != bad

I use a lot of “new” technology and I use a lot of “old” technology.

FWIW I use Github, Jekyll, Grunt, Node and Bower to name a few.

I choose to use these things for many good reasons. Those reasons are not to do
with popularity, newness or how many stars they have on Github. At most these
are secondary reasons.

Unfortunately, I don’t believe this to be the case for the majority of
developers in the front-end space right now.

I am simply advocating critical and deliberate analysis, so that any decision is a *conscious* one.

## 3. BFEDs don’t get paid well

I know several developers that would be classed as “boring”, all of which are
paid very well.

## 4. Change isn’t necessarily progress

(Disclaimer: this is not my own thought)

> I also find people touting “progress” don’t realise that a lot of the time they > just mean “change”. I mean, sure, if a new way of doing things is demonstrably better, by all means let’s use it. But a lot of the time you’re just swapping one (well-understood) set of tradeoffs and considerations for a new, less understood set, because “That’s what we’re doing now”. — qu4z-2

There’s a *lot* of “change” going on in the industry, developers are having a
whale of a time in doing so.

But is this *really* adding value to the user or business?

## 5. People first, developers second

It is very common to hear developers berating old browsers and dropping support
in the name of cost and security but *your* users don’t care and are unaware,
and sometimes not in control of what browsers they use. Corporations locking
down IE6 is a common example.

Heck some people don’t even know what a browser *is *and yet, these people
manage to surf and buy shit using one.

These users arrive at your site because they can, and they leave because you
have unnecessarily and irresponsibly not given a thought to them.

> Question: Has browser usage dropped because the browser is “old” **or** because the website doesn’t work in that browser anymore?
[Motherfuckingwebsite.com](http://motherfuckingwebsite.com/)

Yes, it’s true that you probably shouldn’t be testing your site in IE1 or
Mosaic, but there are front-end engineering approaches that ensure “any” browser can be used to access a website (for the most part anyway). These techniques serve new browsers just as much as old browsers.

It’s our job to serve the user first.

**People first, developers second.**