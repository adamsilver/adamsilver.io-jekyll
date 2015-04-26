---
layout: post
title:  "The disadvantages of CSS preprocessors"
date:   2015-01-01 09:00:01
categories: css
---

There are many things Frontend developers do that I don't advise, and whilst I don't think much of CSS preprocessors there are worse things in the industry. Regardless, there are disadvantages to using CSS preprocessors, disadvantages that actually reduce speed of development and maintainability, which were meant to be the advantages of using such tools.

## Debugging

As source files aren't interpreted by the browser there is a significant cognitive burden when debugging. God forbid, you could check the line number and file name, open it up, edit and go. No, you either need to use source maps which, need effort to set them up and only work in a limited set of modern browsers (and developers who care for their users tend to develop in many browsers without support for source maps) or, you have to work out how to be Sherlock Holmes. As *debugging is twice as hard as programming*, this becomes a deal breaker all on its own.

## More tooling

Extra software is needed, which can be a mix of command line tools, standalone programs or plugins for particular IDEs. Developers shouldn't be limited in their choice of development environment or IDE, and with more moving parts, there is greater risk for problems. Every tool added is something that needs setting up, working with, working around, upgrading, maintaining, monitoring and ultimately relying on, which of course, has a good opportunity of slowing down development.

## Even more tooling

CSS linters and text editor highlighting (command line or plugins) are commonly available. CSS preprocessors are not so readily available. When they are, they need setting up and, depending on the tech stack, this can really take some time and potentially this has to be multiplied out to the rest of the development team. Your favourite editor may not have it.

## Compilation time.

I have experienced and heard many [?] stories [?], personal and otherwise, with regards to compilation. Compilation times can be quick but they can also be very slow. And it's easy to make them slow. CLI tends to be faster but it can still take plenty of time. And even when considered *quick enough* I have found myself *saving* and *refreshing* before compilation time finishes. YMMV.

## Question of saving generated files

Whilst I am firmly in the camp that you *shouldn't* save generated files to source control, I (and I am not the only one to) [[0](#ref0)] have experienced opinions to the contrary and you have to jump through the hoops of Concenus Driven Development [[1](#ref1)].

## Removing fine control

It must be accepted that, to a certain extent whatever CSS is generated is out of your control. This can cause performance problems [[2](#ref2)]. Also source file size can be deceiving in that the generated file is much bigger than the source file that developers work with all day. If control is taken back, duplication is likely avoided and performance doesn't become a problem.

## Adhering to agreed conventions

For example, I have worked in teams that agreed it was far better to place media queries immediately next to the same rule [[?](look up mcdonald name for this)] so that you can see all the styling that related to the same selector. Due to the nesting (one of the good things about CSS preprocessors), you get this side effect where you can't do this. This makes it harder to maintain.

## Onboarding and recruitment

Whilst it's not a steep learning curve, it's still something you might want to consider. Onboarding for candidates that don't have knowledge of CSS preprocessors or the workflows around them, might be hindered. The recruitment net might be a little smaller for it too. It is minor, but AISB still worthy of consideration.

## Maintainence issues

Taking an example I have seen recently, sprinkling a variable `@brandRed`, instead of `#ff0000` all over various CSS files is not really advantageous. If the colour changes to something that isn't a red then you have to do a search and replace anyway, and quite honestly how difficult is that, but there are better ways anyway...

## But what about variables?

Variables can be achieved by using comma-delimited CSS selectors, as follows:

	selector,
	anotherSelector {
		color: red;
	}

## But what about mixins?

Just like variables, mixins can be achieved by using comma-delimited CSS selectors, as follows:

	selector,
	anotherSelector {
		border-radius: 3px;
		-webkit-border-radius: 3px;
	}

## But what about nesting?

This can't be achieved as such, but prefixing your selectors with a common ancestor selector is a satisfactory solution to modularising with a little bit of duplication as follows:

	.someComponent {
	}

	.someComponent .someChild {
	}

## Summary

Ultimately, plain CSS can't achieve some of the niceties of CSS preprocessors, but for me (and many others) the trade-offs are overpowering. And, as "debugging is twice as hard as programming", it's our duty to ensure this is as easy as possible. Keep things simple.

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://stackoverflow.com/questions/13185170/using-less-and-version-control-should-generated-css-be-included-in-a-repo">Generated files and version control</a></dd>
	<dt class="citation" id="ref1">[1]</dt>
	<dd><a href="http://www.nczonline.net/blog/2015/04/14/consensus-driven-development/">Consencus Driven Development</a></dd>
	<dt class="citation" id="ref2">[2]</dt>
	<dd><a href="http://blog.millermedeiros.com/the-problem-with-css-pre-processors/">The problem with CSS preprocessors</a></dd>
</dl>
<!--
[]:http://jaketrent.com/post/cons-css-preprocessors/
[]:http://stackoverflow.com/questions/28570752/what-are-the-advantages-disadvantages-of-using-css-preprocessors-e-g-sass-less
[]:http://blog.millermedeiros.com/the-problem-with-css-pre-processors/
[]:https://www.devbridge.com/articles/increasing-sass-compiling-performance-or-when-every-second-counts/
[0]:http://stackoverflow.com/questions/12228745/twitter-bootstrap-less-compilation-taking-a-long-time
[15/04/2015 10:55:51] Graham Veal:  think others in the team have
[15/04/2015 10:56:08] Graham Veal: you need to serve up the sourcemaps file and then tell chrome or something
[15/04/2015 11:00:17] Graham Veal: the troubles come when you start using "gems" to add more, like compass
[15/04/2015 11:01:23] Graham Veal: using it to automatically make sprite images etc
[15/04/2015 11:01:35] Graham Veal: then doing retina support as well
[15/04/2015 11:01:59] Graham Veal: all these are "add ons" that mean you really need to understand SASS to set them up correctly
[15/04/2015 11:02:31] Graham Veal: we fucked it up on the first project, each time the sprite was getting created loads of times making the SASS "compile" take up to 10-15 secs
[15/04/2015 11:02:42] Graham Veal: then one guy who knew more sorted it out
[15/04/2015 11:02:49] Graham Veal: set it up correctly
[15/04/2015 11:02:54] Graham Veal: and got it back to 1s
[15/04/2015 11:11:50] Graham Veal:  don't get the craze really! I do like that it does things for you, like having a pxtoem function
[15/04/2015 11:11:57] Graham Veal: then you can easily see what you were trying to do
[15/04/2015 11:12:12] Graham Veal: makes changes easier
[15/04/2015 11:12:45] Graham Veal: I think if it's a simple setup it's good. start doing more and it gets more of an issue to setup and maintain
[15/04/2015 11:13:16] Graham Veal: plus it's another dependency on the machine: ruby and then the gems
-->