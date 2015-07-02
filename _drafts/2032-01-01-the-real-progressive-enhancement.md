---
layout: post
title:  "Why you don't understand Real Progressive Enhancement"
date:   2032-01-01 09:00:01
categories: js
---

> Samsung shits out a different-sized black rectangle every 30 seconds.

Brad Frost is right. Samsung does do this. Lots of devices and browser vendors do this.

And so it follows that Progressive Enhancement is a good idea. But Progressive Enhancement is not Unobtrusive Javascript, nor is it handling the Javascript off scenario (although that is part of it).

But let's reign this back a step for a moment.

We know that HTML degrades gracefully with little (or *no*) developer intervention &mdash; take the `video` element for example &mdash; it allows you to nest an image as a fallback.

**Lovely.**

Similarly, with CSS &mdash; it just doesn't render the style.

**No harm, no foul.**

Enter our friend, Javascript.

You write some script that works in some browsers and not in others. What happens in the latter?

**Error!**

You want an example don't you?

	// Run this in IE8
	document.getElementsByClassName('yo');

How about another?

	// Run this in IE9
	matchMedia("(min-width: 400px)");

**But wait!**

It's not just about the presence of an API. Sometimes the API is buggy. *Caniuse.com* states &mdash; and this is just one of a plethora of examples:

> Safari 3.1 has a caching bug. If the class of an element changes it won't be available for getElementsByClassName.

So there we have it &mdash; Javascript doesn't degrade gracefully.

## What do we do about this?

<!-- <div class="image">
	<img src="/assets/img/fingersinear.gif" alt="La la la" width="337" height="225">
</div>
 -->
In a nutshell developers use a combination of techniques:

a) Ignore this information &mdash; ignorance is bliss.

b) Rely on third party software that comes with a select few supported browsers &mdash; Extension of the first one and just because it's third party doesn't make it reliable or advisable.

c) Keep an eye on upgrades to third party software &mdash; costly and mentally draining.

d) Upgrade third party software regularly and perform costly egression testing &mdash; costly and mentally draining.

e) Think everything is okay because "it works without Javascript" &mdash; this is plain wrong as demonstrated above.

Then there is the relatively new **Cutting the mustard** technique.

This has the concept of a *core* experience and an *enhanced* experience. This is most certainly the right philosophy but it doesn't play out too well. Taking their own example let me attempt to break this (not hard btw).

	if(	document.querySelector &&
		window.addEventListener &&
		window.localStorage) {

		// bootstrap application
		window.addEventListener('load', function(e) {
			var el = document.querySelector('.someElement');
			window.matchMedia('');
			// more stuff but this is enough to demonstrate
		});
	}

Firstly, as we said before, merely detecting a feature is not enough. APIs contain bugs. Caniuse.com states that `document.querySelector` has partial support in IE8. It just so happens (by luck or judgement) that the additional checks for `window.addEventListener` and `window.localStorage` means IE8 only gets the *core* experience. But it got lucky with IE8 &mdash; Caniuse.com states:

> iOS 8.* contains a bug where selecting siblings of filtered id selections are no longer working (for example #a + p).

Putting the bugs to one side just for a moment, the above code provides the enhanced experience for browsers cutting the mustard, but if one of those browsers can't handle matchMedia your screwed aren't you?

This is one of infinite permutations and is a very real example. IE9 will enhance and break in the above example. Inferring enhanced support with a few choice APIs detected is fragile.

Some implementations of the Cut the Mustard technique use polyfills to plug other gaps but it just so happens that polyfills are very unreliable. Who wants more fragility?

Interestingly CTM gets close. But it's playing a game and it's little better than User Agent sniffing and needs constant monitoring and maintenance.

*So what to do instead*

1. What ever the application uses must be in the cuts the mustard test.

2. When appropriate test as well as detect to avoid bugs. Only way to do this is through facades, and a good library should do this for you so you don't have to repeat yourself.

How does this play out?

	if(lib.hasFeatures('x', 'y', 'z')) {
		x();
		y();
		z();
	}

If the browser supports what the application uses, the user gets the enhanced Javascript experience, otherwise they get the core experience.

This is why it *does* matter if the web page works without Javascript because that's the experience the user will when the user has Javascript turned on but the browser doesn't support the required APIs.

This is the **Real** Progressive Enhancement, something that you *very* rarely see in the industry. Why?

**Not sure.**

*"Everyone loves McDonalds, but that doesn't make it good for you!"*

Most devs don't do this and so you end up with developers copying other developers. A lot of (read all of) the popular Javascript libraries don't expose it's capabilities to the calling application. i.e. most libraries provide static APIs. Meaning there is no way for you to know if the underlying code will run successfully or not.

And if you don't know, you can guarantee failure at some point or other. This is not just for old browsers, it's even moreso for new and future browsers. It's one thing breaking old browsers, but breaking newly released browsers should just not be accepted so readily in this industry.

Infact, if you wan't to use the most bleeding edge browser APIs, all you have to do is check first before enhancing. You could decide to *only* use the most cutting edge browsers and then degrading for all other browsers.

<!--

*The problem of the web is actually the beauty of the web. Anyone with a browser and Internet connection can access your website.*

* Devs are fucking it all up by using static APIs

* Possible title: Progressive Enhancement the missing piece

* no op isn't good enough, its a black hole.

* You might want to do a catch all cuts the mustard test - no problem, just abstract a one off list into one function and call that

	function canRun() {
		return lib.hasFeatures('a', 'b', 'c', ...);
	}

	if(canRun()) {
		application.start();
	}

* This might mean because they handed off responsibility to a 3rd party library, a library that doesn't give you this capability.


* Cuts the Mustard
-->

