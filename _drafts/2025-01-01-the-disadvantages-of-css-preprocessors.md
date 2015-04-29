---
layout: post
title:  "The disadvantages of CSS preprocessors"
date:   2015-01-01 09:00:01
categories: css
---

CSS preprocessors are meant to make improve CSS development. However, there are many disadvantages to using CSS preprocessors, some of which actually hinder CSS development. This article discusses those disadvantages and suggests ways in which to survive, or should I say thrive without a CSS preprocessor.

## Issues

### Debugging

Due to the necessary compilation step, source files aren't interpreted directly by the browser, which causes a significant cognitive burden when trying to debug styling. One option is to use source maps but that requires effort to setup and they only work in a limited set of "modern" browsers. Developers who care about the users typically test in "older" browsers. The second option is to hunt down portions of style rules and selectors which is certainly *not* fun. As *debugging is twice as hard as programming*, this is for me a deal breaker. If this isn't enough to convince you please read on.

### More tooling

Extra tooling is required, which might be made up of command line tools, standalone programs or plugins for particular IDEs. Developers shouldn't be limited in their choice of development environment or IDE, and with more moving parts, there is a greater risk for problems. Every tool added is something that needs setting up, working with and around, upgrading, maintaining, monitoring etc. This increases the chance of issues. Instead of developing your fixing tooling.

### Even more tooling

CSS linters and text editor highlighting (command line or plugins) are commonly available. CSS preprocessors are not *as* readily available. When they are, they need setting up and, depending on the tech stack, this can take some time to do and potentially this has to be multiplied out to the rest of the development team. Consider that your favourite editor may not have it.

### Compilation time.

I have experienced and heard many [?] stories [?], with regards to compilation. Compilation times can be quick but they can also be very slow. And it's easy to make them slow. CLI tends to be faster but it can still take plenty of time. And even when considered *quick enough* I have found myself *saving* and *refreshing* before compilation time finishes. Even on a well architected project on the latest Macbook Pro with a Solid State harddrive. Your mileage may vary.

### Saving generated files or not

Whilst I am firmly in the camp that you *shouldn't* save generated files to source control, I (and I am not the only one to) have experienced opinions to the contrary [[0](#ref0)] and you have to jump through the hoops of Concenus Driven Development [[1](#ref1)].

### Removing fine control

The *generated* CSS is out of your control. This can cause performance problems [[2](#ref2)]. Also source file size can be deceiving [[3](#ref3)] in that the generated file could be significantly larger than the source file. If control is taken back, duplication is likely avoided and performance doesn't become a problem.

### Onboarding and recruitment

Whilst it's not a steep learning curve, it's still something you might want to consider. Onboarding for candidates that don't have knowledge of CSS preprocessors (or the workflows around them) might be hindered. The recruitment net might be a little smaller for it too. It is minor, but as I said before it is still worthy of consideration.

### Maintainence issues

Taking an example I have seen recently, sprinkling a variable `@brandRed` instead of `#ff0000` across various CSS files is not really advantageous. If the colour changes to something that isn't a red then you have to do a search and replace anyway, and quite honestly how difficult is that? Regardless, there are alternative ways baked into CSS.

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