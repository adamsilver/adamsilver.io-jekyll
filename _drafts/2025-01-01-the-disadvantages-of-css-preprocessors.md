---
layout: post
title:  "The disadvantages of CSS preprocessors"
date:   2015-01-01 09:00:01
categories: css
---

Out of all the silly things that go on in relation to Frontend development CSS preprocessors are not too bad. But that won't stop me explaining all the disadvantages to CSS preprocessors. If you're lucky you might even get some tips as to how to survive, or should I say thrive without a CSS preprocessor.

## Extra tooling is need

Sometimes you need command line tools, standard programs, or plugins for specific IDEs depending on how the project has been setup. Developers should not be limited in their choice of development environment or IDE.

## Compilation time.

I have experienced and heard many stories. Compilation times can be quick but they can also be very slow. And it's easy to make them slow. Without a CSS preprocessor, just save and refresh. CLI tends to be faster but it can still take plenty of time.

## Question of saving generated files

This has come up in the past and whilst I am firmly in belief that you shouldn't save generated files to source control I have experienced opinions to the contrary and you have to jump through the hoops of Concenus Driven Development. [](http://stackoverflow.com/questions/13185170/using-less-and-version-control-should-generated-css-be-included-in-a-repo)

## Removing fine control

Relying on Less means accepting what it spits out as we are abstracted from that. This could cause problems with performance (Mixins are an example) that we have to workaround which slows us down. There are other examples - see graham notes.

## Cannot adhere to potential conventions.

Conventions driven by technology :( e.g. unable to nest media queries meaning that they are decoupled from the element which goes against maintenance standards which slows us down.

## Onboarding

Not a biggie, but by requiring that knowledge we narrow the choice of candidates...Alternatively we don’t require the knowledge from candidates, meaning they learn on the job which slows us down.

## Debugging

As the source files aren’t interpreted by the browser there is a significant cognitive burden when debugging. Debugging is 90% of the job and this is a huge problem that slows us down.

## Another tool to the tech stack

Every tool added is something that we now have to setup, work with, work around, upgrade, maintain, monitor and rely on, which slows us down

## Even more tooling necessary

CSS linters (command line, htc or IDE) are commonly available. LESS specific either not readily available and that slows us down. Also highlighting tools. Even if they are available still got overhead in (yes i admit), one time setup but still. What if your favourite editor doesn't have it?

## Maintainence issues

Sprinkling for example @brandRed all over the place is actually worse than the CSS forced equivalent. What if the colour changes from red to something else. Have to do a search and replace anyway. Might as well have been a hex code sprinkled or better yet, comma delimit a single selector. Only update in one place.

## File size deceiving.

Elaborate

## But what about variables, mixins and nesting...

### Variables

selector,
anotherSelector {
	color: red;
}

### Mixins

selector,
anotherSelector {
	border-radius: 3px;
	-webkit-border-radius: 3px;
}

## Nesting

.someComponent {
}

.someComponent .someChild {
}

## Summary

Less might have attractive qualities but there are suitable alternatives without using a preprocessor.
There are simple ways to reuse styles in a semantic and maintainable way.
“Debugging is twice as hard as programming” - it’s our duty to make that as easy as possible.
We can speed up drastically.

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://stackoverflow.com/questions/3896730/whats-the-advantage-of-logic-less-template-such-as-mustache">Logic-less templating discussion</a></dd>
</dl>

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