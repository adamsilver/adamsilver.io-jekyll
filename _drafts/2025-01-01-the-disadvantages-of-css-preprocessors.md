---
layout: post
title:  "The disadvantages of CSS preprocessors"
date:   2015-01-01 09:00:01
categories: css
---

CSS preprocessors are meant to help the development of CSS. However, there are many disadvantages to using CSS preprocessors, some of which actually hinder CSS development. In this article, I talk about the disadavantages and suggest ways in which to survive (or should I say?) thrive without a CSS preprocessor.

## Issues

### Debugging

Due to having a compilation step, source files aren't interpreted directly by the browser, which causes a significant cognitive burden when trying to debug styling. One option is to use source maps but that requires effort to setup and they only work in a limited set of "modern" browsers. Developers who care about users typically test in "older" browsers. The second option is to hunt down portions of style rules and selectors which is certainly *not* fun. As *debugging is twice as hard as programming*, this is a deal breaker for me. If this isn't enough to convince you please read on.

### More tooling

Extra tooling (CLI, GUI, plugins) is required. Developers shouldn't be *too* constrained in their choice of development setups and with every tool added, there is something that needs setting up, working with, upgrading and maintaining - this increases the chance of issues that need attention.

### Even more tooling

CSS linters and text editor highlighting (CLI or plugins) are commonly available. CSS preprocessors are not *as* readily available. The best case scenario is they are available, and in this case they need setting up and hopefully the rules can be shared acrossed different developers setups. Worst case scenario is your favourite editor doesn't have the tooling you require.

### Compilation time.

I have experienced and heard many [?] stories [?] with regards to compilation. Compilation times can be quick but they can also be *very* slow. And it's easy to make them slow. CLI tends to be faster but still not fast enough; I have frequently found myself *saving* and *refreshing* before compilation time finishes; even on a well architected project, using the latest Macbook Pro, with a Solid State HD. Your mileage may vary.

### Saving generated files or not

Whilst I am firmly in the camp that you *shouldn't* save generated files to source control, I (and I am not the only one to) have experienced opinions to the contrary [[0](#ref0)] and you have to jump through the hoops of Concenus Driven Development [[1](#ref1)].

### Removing fine control

The *generated* CSS is out of your control. This can cause performance problems [[2](#ref2)]. Also source file size can be deceiving [[3](#ref3)] in that the generated CSS could be significantly larger than the source file. If control is taken back, duplication is likely avoided and performance doesn't become a problem.

### Onboarding and recruitment

Onboarding for candidates that don't have knowledge of CSS preprocessors (or the workflows around them) might be slowed down and the recruitment net might be a little smaller for it too. Whilst it's not a steep learning curve, it's still something you might want to consider.

### Maintainence issues

As an example, I have seen `@brandRed` (instead of `#ff0000`) sprinkled across various CSS files which isn't really advantageous. If the colour changes to something that isn't a red, then you have to do a search and replace anyway, and search and replace isn't exactly difficult. Regardless, there are alternative ways baked right into CSS.

## But what about variables, mixins, and nesting?

### Variables

Variables can be achieved by using comma-delimited CSS selectors, as follows:

	selector,
	anotherSelector {
		color: red;
	}

### Mixins

Just like variables, mixins can be achieved by using comma-delimited CSS selectors, as follows:

	selector,
	anotherSelector {
		border-radius: 3px;
		-webkit-border-radius: 3px;
	}

### Nesting

This can't be achieved as such, but prefixing your selectors with a common ancestor is a satisfactory solution to modularising, with admittedly, a very small amount of duplication as follows:

	.someComponent {
	}

	.someComponent .someChild {
	}

## Summary

Even though CSS doesn't provide some of the features of CSS preprocessors, for many developers, the disadvantages *seriously* outweigh the advantages. As I said previously, *debugging is twice as hard as programming*, and it's our duty to ensure this is as easy as possible. It is advisable to keep things simple and be concious of the decision being made beyond just using the most popular technology of the moment.

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://stackoverflow.com/questions/13185170/using-less-and-version-control-should-generated-css-be-included-in-a-repo">Generated files and version control</a></dd>
	<dt class="citation" id="ref1">[1]</dt>
	<dd><a href="http://www.nczonline.net/blog/2015/04/14/consensus-driven-development/">Consencus Driven Development</a></dd>
	<dt class="citation" id="ref2">[2]</dt>
	<dd><a href="http://blog.millermedeiros.com/the-problem-with-css-pre-processors/">The problem with CSS preprocessors</a></dd>
	<dt class="citation" id="ref3">[3]</dt>
	<dd><a href="http://jaketrent.com/post/cons-css-preprocessors/">File size deceiving (CSS Preprocessors)</a></dd>
</dl>