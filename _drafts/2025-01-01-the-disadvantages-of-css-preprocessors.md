---
layout: post
title:  "The disadvantages of CSS preprocessors"
date:   2015-01-01 09:00:01
categories: css
---

There are a lot of crazy things software engineers do, but whilst I don't think much of CSS preprocessors there are many worse things going on in the Frontend development industry. Regardless, I am going to point out all the  disadvantages with them in comparison to regular CSS, which ultimately increases (not decreases) the cost of development. I will also demonstate how to survive (or should I say thrive?) without one.

## Debugging

As source files aren't interpreted by the browser there is a significant cognitive burden when debugging. God forbid, you could check the line number and file name, open it up, edit and go. No, you either need to use source maps which, need effort to set them up and only work in a limited set of modern browsers (and developers who care for their users tend to develop in many browsers without support for source maps) or, you have to work out how to be Sherlock Holmes [[0](check name spelling)]. As Debugging is 90% of the job [[0](check name spelling)] which for me is a deal breaker.

## More tooling

Extra software is needed, which can be a mix of command line tools, standalone programs or plugins for particular IDEs. Developers shouldn't be limited in their choice of development environment or IDE, and with more moving parts, there is greater risk for problems. Every tool added is something that needs setting up, working with, working around, upgrading, maintaining, monitoring and ultimately relying on, which of course, has a good opportunity of slowing down development.

## Even more tooling

CSS linters and text editor highlighting (command line or plugins) are commonly available. CSS preprocessors are not so readily available. When they are, they need setting up and, depending on the tech stack, this can really take some time and potentially this has to be multiplied out to the rest of the development team. Your favourite editor may not have it.

## Compilation time.

I have experienced and heard many stories, personal and otherwise, with regards to compilation. Compilation times can be quick but they can also be very slow. And it's easy to make them slow. CLI tends to be faster but it can still take plenty of time. And even when considered *quick enough* I have found myself *saving* and *refreshing* before compilation time finishes. YMMV.

## Question of saving generated files

Whilst I am firmly in the camp that you *shouldn't* save generated files to source control, I (and I am not the only one to) [[0]] have experienced opinions to the contrary and you have to jump through the hoops of Concenus Driven Development [[0]].

## Removing fine control

It must be accepted that, to a certain extent whatever CSS is generated is out of your control. This can cause performance problems [[0](Mixins/Nesting/see graham notes)]. Also source file size can be deceiving [[0]] in that the generated file is much bigger. If you took control back, you may well have avoided duplication and end up with more performant production file.

## Adhering to agreed conventions

For example, I have worked in teams that agreed it was far better to place media queries immediately next to the same rule [[0](look up mcdonald name for this)] so that you can see all the styling that related to the same selector. Due to the nesting (one of the good things about CSS preprocessors), you get this side effect where you can't do this. This makes it harder to maintain.

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
	<dd><a href="http://stackoverflow.com/questions/3896730/whats-the-advantage-of-logic-less-template-such-as-mustache">Logic-less templating discussion</a></dd>
</dl>
<!--
[]:http://stackoverflow.com/questions/13185170/using-less-and-version-control-should-generated-css-be-included-in-a-repo
[]:http://jaketrent.com/post/cons-css-preprocessors/
[]:http://stackoverflow.com/questions/28570752/what-are-the-advantages-disadvantages-of-using-css-preprocessors-e-g-sass-less
[]:http://blog.millermedeiros.com/the-problem-with-css-pre-processors/
[]:https://www.devbridge.com/articles/increasing-sass-compiling-performance-or-when-every-second-counts/
[0]:http://stackoverflow.com/questions/12228745/twitter-bootstrap-less-compilation-taking-a-long-time

Look up source maps.

...
[15/04/2015 10:53:26] Graham Veal: so we have been running with grunt and recently gulp
[15/04/2015 10:53:40] Graham Veal: mainly to create a watch task to run on save
[15/04/2015 10:54:06] Graham Veal: then you need to create srcmaps to help debug, but I haven't got them running!
[15/04/2015 10:55:51] Graham Veal:  think others in the team have
[15/04/2015 10:56:08] Graham Veal: you need to serve up the sourcemaps file and then tell chrome or something
[15/04/2015 10:56:17] Graham Veal: but I haven't had any issues
[15/04/2015 10:59:58] Graham Veal: I think other browsers support it too, but obv only "modern" ones
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