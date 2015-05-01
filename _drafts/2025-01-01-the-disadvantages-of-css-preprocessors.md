---
layout: post
title:  "The disadvantages of CSS preprocessors"
date:   2015-01-01 09:00:01
categories: css
---

CSS preprocessors add missing features to CSS, which in theory help  the development of CSS. However, using a CSS processor has several issues. In this article, I discuss these issues and suggest ways in which to survive (or should I say thrive?) without a CSS preprocessor.

## Issues

### Debugging

Due to having a compilation step, source files aren't interpreted directly by the browser, which causes significant cognitive burden when trying to debug. One solution is to use source maps [[0](#ref0)] but this requires setup and this only works in a limited set of *modern* browsers. Developers who care about users also test in *older* browsers. The second "solution" is to hunt down styles, perhaps by searching for abstract portions of rules; this is certainly not easy. As *debugging is twice as hard as programming*, this is a deal breaker for me and, if at this point *you* aren't convinced, then please read on.

### Tooling

Extra tooling (CLI, GUI, plugins) is required. Developers shouldn't be *too* constrained in their choice of development setups and with every tool added, there is something that needs setting up, working with, upgrading and maintaining which increases the chance of issues.

### More tooling

CSS linters and text editor highlighting (CLI or plugins) are commonly available. CSS preprocessors are not *as* readily available. If they *are* available, they need setting up (and the rules need sharing with other developers easily). If they aren't available then your remaining options are to either, find another editor or forget about linting, either way, this isn't ideal.

### Compilation time

Compilation times can be quick but they can also be *very* slow. CLI tends to be faster but still not fast *enough*; I have frequently found myself *saving* and *refreshing* before compilation time finishes; even on a well architected project, using the latest Macbook Pro, with a Solid State HD. I am not the only one but *your* mileage may vary.

### Saving generated files or not

Whilst I firmly believe that you *shouldn't* save generated files to source control, I (and I am not the only one to) have experienced opinions to the contrary [[1](#ref1)] and in this case prepare for some Concenus Driven Development [[2](#ref2)].

### Performance out of your control

The *generated* CSS is out of your control which can cause performance problems [[3](#ref3)]. Also, source file size can be deceiving [[4](#ref4)] because the generated CSS is likely to be significantly larger than the source file, potentially causing performance problems.

### Onboarding and recruitment

Candidates that *don't* have knowledge of CSS preprocessors (or the workflows around them) become more costly when onboarding. If you really want someone that has suitable knowledge then the pool of candidates is reduced. Whilst it's not a steep learning curve, and more developers are aquiring these skills, it's still something you might want to consider.

### Maintainence

Maintainability can sometimes be compromised. As an example, I have seen `@brandRed` (instead of `#ff0000`) sprinkled across various CSS files which isn't really advantageous. If the colour changes to something that isn't a red, then you have to do a search and replace anyway, and search and replace isn't exactly difficult. Regardless, there are alternative solutions baked right into CSS as we will see shortly.

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

CSS preprocessors clearly have issues, some of which there *are* solutions to. For me and many other developers the disadvantages are overpowering, especially given the alternative solutions found in regular CSS. It's worth noting, for the second time that *debugging is twice as hard as programming* and, it's our duty to ensure this is as easy as possible. Keeping things simple is advisable and it is important to understand the impact of using a CSS preprocessor so that your team can make a concious decision as to whether to use one or not.

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://thesassway.com/intermediate/using-source-maps-with-sass">Source Maps with SASS</a></dd>
	<dt class="citation" id="ref1">[1]</dt>
	<dd><a href="http://stackoverflow.com/questions/13185170/using-less-and-version-control-should-generated-css-be-included-in-a-repo">Generated files and version control</a></dd>
	<dt class="citation" id="ref2">[2]</dt>
	<dd><a href="http://www.nczonline.net/blog/2015/04/14/consensus-driven-development/">Consencus Driven Development</a></dd>
	<dt class="citation" id="ref3">[3]</dt>
	<dd><a href="http://blog.millermedeiros.com/the-problem-with-css-pre-processors/">The problem with CSS preprocessors</a></dd>
	<dt class="citation" id="ref4">[4]</dt>
	<dd><a href="http://jaketrent.com/post/cons-css-preprocessors/">File size deceiving (CSS Preprocessors)</a></dd>
</dl>