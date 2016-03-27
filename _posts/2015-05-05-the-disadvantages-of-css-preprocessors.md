---
layout: post
title:  The disadvantages of CSS preprocessors
date:   2015-05-05 09:00:01
categories: css sass less

---

CSS preprocessors have many advantages providing helpful methods for writing and reusing styles. However, CSS processors have several *disadvantages*, which I discuss here for consideration.

## 1. Debugging

Due to having a compilation step, the browser is not interpreting the source files, meaning the CSS line numbers are now irrelevant when trying to debug. This makes debugging a lot harder.

[Source maps](http://thesassway.com/intermediate/using-source-maps-with-sass) provide one solution but this requires setup and only works in a limited set of *modern* browsers. Developers who care about users also test in *older* browsers. Alternatively, you can hunt down styles via abstract portions of rules, which is horrid. Brian Kernighan said "debugging is twice as hard as programming" and it's our duty to ensure this is as easy as possible.

## 2. Tooling

Extra tooling (CLI, GUI, plugins) is required. Developers shouldn't be *too* constrained in their choice of development setups and with every tool added, there is something that needs setting up, working with, upgrading and maintaining which increases the chance of issues.

## 3. More tooling

CSS linters and text editor highlighting (CLI or plugins) are commonly available. CSS preprocessors are not *as* readily available. If they *are* available, they need setting up (and the rules need sharing with other developers easily). If they aren't available then your remaining options are to either, find another editor or forget about linting, either way, not ideal.

## 4. Compilation time

Compilation can be quick but it can also be slow, *very* slow. I have frequently found myself *saving* and *refreshing* before compilation time finishes; even using CLI tooling on the latest Macbook Pro, with a Solid State HD. And I am not the only one but *your* mileage may vary.

## 5. Saving generated files or not

Whilst I firmly believe that you *shouldn't* save generated files to source control, I (and I am not the only one to) have experienced opinions to the [contrary](http://stackoverflow.com/questions/13185170/using-less-and-version-control-should-generated-css-be-included-in-a-repo) and in this case prepare for  [Concenus Driven Development](http://www.nczonline.net/blog/2015/04/14/consensus-driven-development/).

## 6. Performance

[Source file size can be deceiving](http://jaketrent.com/post/cons-css-preprocessors/) because the generated CSS is likely to be significantly larger than the source file, potentially causing [performance problems](http://blog.millermedeiros.com/the-problem-with-css-pre-processors/). Ultimately, what is generated is out of your control and *some* responsibility is handed over to your chosen CSS preprocessor.

## 7. Onboarding and recruitment

Candidates that *don't* have knowledge of CSS preprocessors (or the workflows around them) become more costly when onboarding. If you really want someone that has suitable knowledge then the pool of candidates is reduced. Whilst it's not a steep learning curve, and more developers are aquiring these skills, it's still something you might want to consider.

## 8. Maintainence

Maintainability can sometimes be compromised. As an example, I have seen `@brandRed` (instead of `#ff0000`) sprinkled across various CSS files which isn't really advantageous. If the colour changes to something that isn't a red, then you have to do a *search and replace* anyway (which by the way isn't exactly difficult).

## But what about variables, mixins, and nesting?##

**Variables** can be achieved by using comma-delimited CSS selectors, as follows:

	selector,
	anotherSelector {
		color: red;
	}

Note: you can't share the same colour for background-color and other CSS property names.

**Mixins** can be achieved by using comma-delimited CSS selectors, as follows:

	selector,
	anotherSelector {
		border-radius: 3px;
		-webkit-border-radius: 3px;
	}

**Nesting** can't quite be achieved. However, that's not so bad because nesting can cause performance problems and is ill-advised. Instead, use a convention that groups module components together:

	.someModule {}

	.someModule-someComponent {}

	.someModule-someOtherComponent {}

## Summary

CSS preprocessors have issues, some of which there *are* solutions for. For me and many other developers, the disadvantages are overwhelming and cause too much friction in comparison to using CSS. At the very least, be concious of the decision to use a CSS preprocessor and the impact it might have on you and your team.