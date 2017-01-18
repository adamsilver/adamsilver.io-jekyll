---
layout: post
title:  The disadvantages of CSS preprocessors
date:   2015-05-05 09:00:01
categories: css sass less
description: CSS preprocessors have obvious advantages but they also come with a host of problems. Learn about these to avoid pain for you and your team.
---

The benefits of CSS preprocessors are well lauded in our industry. But, like all technology at our disposal, they come with trade-offs that we should consider before accepting the added complexity they bring.

## 1. Debugging is harder

Preprocessors have a compilation step, meaning that CSS line numbers are irrelevant when trying to debug our code.

> &ldquo;Debugging is twice as hard as programming&rdquo;
> <br>&mdash; <cite>Brian Kernighan</cite>

[Source maps](http://thesassway.com/intermediate/using-source-maps-with-sass) provide a solution they require setup and they only work in a limited set of *modern* browsers. Quite often bugs crop up in *old* browsers.

Without source maps, we can search for a group of rules in the hope that we find what we're looking for. But all in all, this becomes very painful indeed.

## 2. Compilation slows down development

Compilation times can be *painfully* slow, even when using the fastest techniques on a cutting edge machine. You know that feeling you get when you refresh and don't see any changes. That.

## 3. Performance is compromised

Source files may be small, but the [generated CSS could be huge](http://jaketrent.com/post/cons-css-preprocessors/). And it's the generated CSS that counts toward the user experience. We must be aware that in using a CSS preprocessor, we're handing over some control.

## 4. Maintainence and overengineering

It's common to find a `red` variable for example. But this is of little value in terms of maintainability. If the colour changes, then we need to update the name and the value, making the abstraction pointless. And, many problems are solveable with *search and replace* anyway.

## 5. Tooling and developer convenience

CSS preprocessors require extra tooling. Firstly, developers shouldn't be forced to use a particular editor just to be able to use tooling. That's the tail wagging the dog. 

Secondly, extra stuff adds complexity, which needs working with, understanding, upgrading and maintaining all of which increases cost and the chance of issues.

## 6. Saving generated files (or not)

Should we save the generated files or not? [We don't agree on the answer to this question](http://stackoverflow.com/questions/13185170/using-less-and-version-control-should-generated-css-be-included-in-a-repo). In this case we must prepare ourselves for [Concensus Driven Development](http://www.nczonline.net/blog/2015/04/14/consensus-driven-development/).

## 7. Capability and understanding

CSS preprocessors and the workflows around them have become widespread. But due to their complexity there is still a knowledge gap, even if we're talking about a lack of understanding of the trade-offs.

Is it a massive deal? No. Is it worth considering. That's up to you.

## But what about variables, mixins, and nesting etc?

A solid approach to writing [maintainable CSS](http://maintainablecss.com) solves most problems.

We can mimick *variables* and *mixins* by using comma-delimited CSS selectors:

	selector,
	anotherSelector {
	  /* common rules */
	}

We can nest in CSS but it's not completely DRY and it can cause performance issues. Instead, [use a convention](http://maintainablecss.com/chapters/conventions/).

## Summary

It's *easy* to add a CSS preprocessor to the tech stack. But, it's not easy to remove it down the line, should we so choose. It's our responsibility to consider deeply the impact they have on our work flow before making the *easy* decision to install one.