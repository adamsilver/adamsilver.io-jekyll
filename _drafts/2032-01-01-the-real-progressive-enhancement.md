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

Similarly, we know CSS is similar &mdash; it just doesn't render the style.

**No harm, no foul.**

Enter our friend, Javascript.

You write some code that implements some Javascript in a browser that *doesn't* support it &mdash; could be anything.

**Error!**

You want an example don't you?

	// IE8 doesn't support this
	document.getElementsByClassName('yo');

How about another?

	// IE9 doesn't support this
	window.matchMedia("(min-width: 400px)");

**But wait, there's more.**

It's not just about the presence of an API. Sometimes it exists but has bugs in it. Just one of a thousand examples &mdash; caniuse.com states the following known issue:

> Safari 3.1 has a caching bug. If the class of an element changes it won't be available for getElementsByClassName.

So by now I should have convinced you that Javascript doesn't degrade nicely on it's own.

**But what do we do about this?**

* Animated gif la la la, fingers in the ears *

Some **drop support** for a set of browsers. Sometimes this is inherent in the 3rd party library they support. Normally support is dropped for older browsers. That said it's important to note that often these libraries need upgrading for future browsers. More on that later.

*"It's okay though, the site works without Javascript turned on"*.

Some think this covers it. But as demonstrated before, when Javascript is turned on (the majority do turn it on) that is not enough on it's own.

*"Cutting the mustard"*

A relatively new term in the industry, this serves to provide a core experience and enhanced experience. This is most certainly the right philosophy but as already hinted at this is not enough on it's own.

Taking the example from the cuts the mustard example let me attempt to break this. Honestly, this is not hard to do.

	if(document.querySelector && window.addEventListener && window.localStorage) {
		Breaks in browsers where these things work but Object.create doesnt
		var el = document.querySelector('...');
		window.matchmedia(...);
	}

Firstly, as we said before, merely detecting a feature is not enough. APIs contain bugs. Caniuse.com states that querySelector has partial support in IE8. It just so happens by luck or judgement that the additional checks stops IE8 from enhancing anyway. But that's not all. Caniuse.com states:

> iOS 8.* contains a bug where selecting siblings of filtered id selections are no longer working (for example #a + p).

Putting the bugs to one side just for a moment, the above code provides the enhanced experience for browsers cutting the mustard, but if one of those browsers can't handle matchMedia your screwed aren't you?

This is one of infinite permutations and is a very real example. IE9 will enhance and break in the above example. Inferring enhanced support with a few choice APIs detected is fragile.

Some implementations of the Cut the Mustard technique use polyfills to plug other gaps but it just so happens that polyfills are very unreliable. Who wants more fragility?

Interestingly CTM gets close.

=====================================================================

To explain, I need an example.

Imagine a simple task such as clicking a link retrieves your location. Something like:

	var link = document.getElementById('someLink');
	link.addEventListener('click', function(e) {
		e.preventDefault();
		// geolocation stuff
	});

Now, take a browser that supports `document.getElementById` (most since IE4), `el.addEventListener` (most since IE8), but can't handle the geolocation (a lot of browsers don't support this).

The script above will stop the link being handled by the browser but cause a Type Error when it gets to the geolocation shit.

Now, considering the above, tell me this &mdash; does it matter if the user turns of Javascript and the site still works?

**No.**



This demonstrates a very common scenario. Javascript is turned on (most don't turn it off). An API is missing (all browsers are missing some API). So what happens?

**Boom. Error! Broken page! User can't continue! You lose money! Do not pass go. Go straight to jail.**

## So what to do instead?

So if you made it this far, I can assume you want to know the solution.

As you can see above, the web is dynamic. Dynamic in that your website is being consumed on a million different browsers with a million different configs, each with different capabilities.

The APIs available to an application is therefore dynamic and need checking for presence and sometimes stability, *before* use.

Every developer says they know all about *Feature detection* and *Feature testing* but, I never see it safely used in their applications.

**So what you need to do is fucking check your application can run before you fucking run it.**

Let's see how this actually plays out shall we?

Taking the previous example:

	// check environment provides whatthe application needs
	if(	document.getElementById &&
		document.documentElement.addEventListener &&
		navigator.geolocation) {

		// Application can run. Progressively enhance now etc!
	}

Now in reality, it's a little more complicated than this and you would abstract this complexity into a library of functions that work this way. Something like:

	if(lib.hasFeatures('getElementById', 'addEventListener', 'getLocation')) {
		var link = lib.getElementById(...);
		lib.addEventListener('submit', function(e) {
			lib.preventDefault(e);
			var location = lib.getLocation();
			// etc
		});
	}

So, if the browser fails to provide one or more dependencies, the application doesn't enhance &mdash; it just degrades to a JS off equivalent.

This is why it *is* important for the site to work without Javascript. Otherwise graceful degradation is because your degrading to broken.

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

