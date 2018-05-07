---
layout: post
title: Addendum to the boring front-end developer
date:   2015-07-15 09:00:01
categories: js html css
description: My response to Hacker News comments about The Boring Front-end Developer.
---

Thanks to everyone who read [The Boring Front-end
Developer](/articles/the-boring-front-end-developer/). There were some outrageous and funny comments which I found entertaining and there were also some points worth addressing.

## 1. CSS preprocessors

I know I'm in the minority here. I know a lot of developers who like them, and a lot who don't. I can see their many advantages too.

It's just that I've worked on enough projects to know some of the problems they induce. Such as performance, maintainability and [more](/articles/the-disadvantages-of-css-preprocessors/).

It’s relatively easy (cheap) to add a CSS preprocessor to a tech stack,
but it’s relatively hard (costly) to remove it down the line. I'm just saying we should be more conscious of the issues before making that choice.

## 2. New doesn't mean good or bad

I use a lot of new and old technology. I use them because they work. I don't use them so much due to popularity, newness or how many stars they have on Github. At most these are secondary reasons.

This doesn't seeem to be the case for a lot of people. It's often about popularity, authority and newness.

## 3. BFEDs don’t get paid well

I know several developers that would be classed as boring. All are paid very well.

## 4. Change isn’t necessarily progress

> ”I also find people touting ‘progress’ don’t realise that a lot of the time they just mean ‘change’. I mean, sure, if a new way of doing things is demonstrably better, by all means let’s use it. But a lot of the time you’re just swapping one (well-understood) set of tradeoffs and considerations for a new, less understood set, because ‘That’s what we’re doing now’.”<br>
—qu4z-2

There’s a lot of change happening but does that change add value to the user or business?

## 5. People first, developers second

It's common to hear teammates berating old browsers and dropping support
in the name of cost and security but your users don’t care and are unaware anyway. Often they're not in control of what browser they use.

Some users don’t know what a browser is and yet, they
manage to surf and buy things using one. Amazing.

These users arrive at our sites because they can, and they leave because we unnecessarily and irresponsibly exclude them.

Has browser usage dropped because the browser is “old” or because the website doesn’t work in that browser anymore?

It’s true that you probably shouldn’t be testing your site in IE1 but there are some techniques that ensure any browser can be used to access a website (for the most part anyway). These techniques are just as much for new browsers as they are fold old.

> “If I had to choose between making something my problem and making something the users problem, I would make it mine every time.”<br>—Jeremy Keith