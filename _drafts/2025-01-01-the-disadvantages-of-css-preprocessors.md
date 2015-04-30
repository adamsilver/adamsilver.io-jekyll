---
layout: post
title:  "The disadvantages of CSS preprocessors"
date:   2015-01-01 09:00:01
categories: css
---

CSS preprocessors are meant to help the development of CSS. However, there are many disadvantages to using CSS preprocessors causing development issues. In this article, I talk about the issues and suggest ways in which to survive (or should I say thrive?) without a CSS preprocessor.

## Issues

### Debugging

Due to having a compilation step, source files aren't interpreted directly by the browser, which causes significant cognitive burden when trying to debug. One solution is to use source maps but this requires setup and this only works in a limited set of *modern* browsers. Developers who care about users also test in *older* browsers. The second "solution" is to hunt down styles, perhaps by searching codebases for certain abstracts of rules/selectors; this is certainly not fun or easy. As *debugging is twice as hard as programming*, this is a deal breaker for me and, if at this point *you* aren't convinced, then please read on.

### Tooling

Extra tooling (CLI, GUI, plugins) is required. Developers shouldn't be *too* constrained in their choice of development setups and with every tool added, there is something that needs setting up, working with, upgrading and maintaining which increases the chance of issues.

### More tooling

CSS linters and text editor highlighting (CLI or plugins) are commonly available. CSS preprocessors are not *as* readily available. If they *are* available, they need setting up (and and hopefully the linting rules can be shared across the team efficiently). If they aren't available then I don't know - find another editor, forget about linting, enjoy pain.

### Compilation time.

Compilation times can be quick but they can also be *very* slow. CLI tends to be faster but still not fast enough; I have frequently found myself *saving* and *refreshing* before compilation time finishes; even on a well architected project, using the latest Macbook Pro, with a Solid State HD. I am not the only one but *your* mileage may vary.

### Saving generated files or not

Whilst I am firmly believe that you *shouldn't* save generated files to source control, I (and I am not the only one to) have experienced opinions to the contrary [[0](#ref0)] and in this case Concenus Driven Development [[1](#ref1)] crops up.

### Removing control

The *generated* CSS is out of your control. This can cause performance problems [[2](#ref2)]. Also source file size can be deceiving [[3](#ref3)] because the generated CSS is likely significantly larger than the source file, potentially causing performance problems.

### Onboarding and recruitment

Onboarding for candidates that don't have knowledge of CSS preprocessors (or the workflows around them) becomes more costly and the size of the recruitment netis reduced. Whilst it's not a steep learning curve, it's still something you might want to consider.

### Maintainence issues

As an example, I have seen `@brandRed` (instead of `#ff0000`) sprinkled across various CSS files which isn't really advantageous. If the colour changes to something that isn't a red, then you have to do a search and replace anyway, and search and replace isn't exactly difficult. Regardless, there are alternative ways baked right into CSS as we see below.

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

Whilst not as DRY as I would like, prefixing your selectors with a common ancestor is a satisfactory solution to modularisation and encapsulation:

	.someComponent {
	}

	.someComponent .someChild {
	}

## Summary

For many developers, including myself, the disadvantages of CSS preprocessors outweigh the advantages by quite a distance. The disadvantages are all self-induced issues due to choosing a technology which makes some things harder. There are also simple solutions to problems using regular CSS. It's worth noting for the second time that *debugging is twice as hard as programming*, and it's our duty to ensure this is as easy as possible. Keep things simple and be concious of any decisions that have a long term impact.

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