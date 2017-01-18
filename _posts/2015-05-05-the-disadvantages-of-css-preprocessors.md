---
layout: post
title:  The disadvantages of CSS preprocessors
date:   2015-05-05 09:00:01
categories: css sass less
description: CSS preprocessors have obvious advantages but they also come with a host of problems. Learn about these to avoid pain for you and your team.
---

CSS preprocessors are well lauded in our industry. But, like all technology on offer, it comes with trade-offs. Trade-offs that need our consideration before accepting the added complexity they bring.

## 1. Debugging is harder

Preprocessors have a compilation step, meaning that CSS line numbers are irrelevant when trying to debug our code. But debugging is twice as hard as programming, so this alone is a *huge* downside.

> &ldquo;Debugging is twice as hard as programming&rdquo;
> <br>&mdash; <cite>Brian Kernighan</cite>

[Source maps](http://thesassway.com/intermediate/using-source-maps-with-sass) provide one solution, but this needs extra work to setup setup. Plus they only work in a limited set of *modern* browsers. But, as we know, bugs often crop up in *old* browsers.

Without source maps, we are left to search for rules in the hope that we find what we're looking for. All in all, this is painful.

## 2. Compilation slows down development

Compilation times can be *painfully* slow, even when using the fastest techniques on a cutting edge machine. You know that feeling you get when you refresh and don't see any changes? *That*.

## 3. Performance is compromised

Source files may be small, but the [generated CSS could be huge](http://jaketrent.com/post/cons-css-preprocessors/). And it's the generated CSS that counts toward the user experience.

We should be aware that in using a CSS preprocessor, we're losing over some inportant control.

## 4. Maintainence and overengineering

It's common to see developers employing a `red` variable, for example. But this is of little value in terms of maintainability.

If the colour changes, then we need to update the name and the value, making the abstraction pointless.

There are alternatives (which we'll cover later) and a search and replace maybe all we need.

## 5. Tooling and developer convenience

CSS preprocessors require extra tooling. Firstly, developers shouldn't be forced to use a particular editor just to be able to use the tool. That's the tail wagging the dog.

Secondly, extra stuff adds complexity. This needs to be understood, upgraded and maintained&mdash;all of which increases cost and the chance of issues.

## 6. Saving generated files (or not)

Should we save the generated files or not? [Not sure, but we don't agree on the answer](http://stackoverflow.com/questions/13185170/using-less-and-version-control-should-generated-css-be-included-in-a-repo). In this case,  prepare for [Concensus Driven Development](http://www.nczonline.net/blog/2015/04/14/consensus-driven-development/).

## 7. Capability and understanding

CSS preprocessors and the workflows around them have become widespread.

However, due to their complexity there is still a knowledge gap especially in terms of the trade-offs discussed here. Is it a massive deal? No. Is it worth considering. That's up to you.

## But what about variables, mixins, and nesting etc?

A solid approach to writing [maintainable CSS](http://maintainablecss.com) solves most problems. In anycase, we can mimick *variables* and *mixins* by using comma-delimited CSS selectors:

	selector,
	anotherSelector {
	  /* common rules */
	}

And, we can nest in CSS but it's not completely DRY and it can cause performance issues. Instead, we should [use a convention](http://maintainablecss.com/chapters/conventions/).

## Summary

It's *easy* to add a CSS preprocessor to the tech stack. But, it's not easy to remove it down the line, should we so choose.

It's our responsibility to consider the impact they have on our work flow before making the *easy* decision to install one.