---
layout: post
title:  "The Real Progressive Enhancement"
date:   2032-01-01 09:00:01
categories: js
---

> &ldquo;Samsung shits out a different-sized black rectangle every 30 seconds.&rdquo;

Brad Frost is right. Samsung does do this. Lots of devices and browser vendors do this.

And so it follows that Progressive Enhancement is a good idea. But Progressive Enhancement is not Unobtrusive Javascript, nor is it handling the Javascript off scenario (although that is part of it).

But let's take a step back momentarily.

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

So there we have it &mdash; Javascript *doesn't* degrade gracefully.

## What some do?

### a) La-la driven-development

<!-- TODO tree fall in the forest -->

Like sticking your fingers in your ear and singing *"la la la"*. This methodology ignores the fact that Javascript doesn't naturally degrade gracefully. Ignorance is bliss, if I don't know it's failing for some users, then it's not happening. Also relevant is the school of thought that everything is okay because it "works without Javascript" but as we have seen above that is not the *only* case to worry about &mdash; Javascript is shades of grey.

### b) Outsource driven-development

This is really an extension of *a)*. This one effectively abdicates responsibility by relying on an unsuitable 3rd party library or framework that has it's own caveats and (multi) browser support. If the library only supports browser X, that means your application can only ever support browser X. When library drops support for browser X, you guessed it, you just lost support for browser X too. With this one you have to keep an eye on upgrades and incur the cost of regression testing.

### c) Cuts the Mustard

This is a relatively new technique which has the notion of two experiences; a *core* experience and an *enhanced* experience. The way it works is given Javascript APIs of `a`, `b` and `c`, and the browser can detect *all* of those features the Javascript application will kick in and provide the *enhanced* experience. Failing that, the Javascript application will not execute and the user will get the degraded, JS-off equivalent, *core* experience. This is definitely the *right* *philosphy* but that is where it ends. Let's take a little look:

	// where a, b and c are browser API methods
	if(a && b && c) {
		// bootstrap application
	}

And a real example:

	if(	document.querySelector && window.addEventListener && window.localStorage) {
		// bootstrap application
	}

This is fraught with problems.

**First**, merely detecting the presence of an API is not enough (as I mention in *The disadvantages of Javascript polyfills*. If you want a little bit more juice, Nicholas Zakas provides a great case study for this in his ebook *The Problem with Native JavaScript APIs*.

**Second**, it's only reliable if the application utilises the methods in the CTM if statement e.g. the following could easily break:

	if(	document.querySelector && window.addEventListener && window.localStorage) {
		// applicaiton that uses other APIs

		window.addEventListener("load", function(e) {
			var matches = window.matchMedia(...);
		});
	}

**Third**, it could rule out a perfectly capable browser from receiving the better *enhanced* experience. Let's say all my app does is perform js form validation, something that say IE6 is perfectly capable of. Cuts the Mustard will stop the user getting the enhanced experience and will have to resort to server round trips for posting a form. Providing an unnecessarily slow User Experience and costs more by putting more load on the server:

	if(	document.querySelector && window.addEventListener && window.localStorage) {

		// this code will never run in a perfectly *capable* browser
		document.forms.someForm.attachEvent('submit', function() {
			// perform validation on the form etc
		});

	}
<!--
Caniuse.com states that `document.querySelector` has partial support in IE8. It just so happens (by luck or judgement) that the additional checks for `window.addEventListener` and `window.localStorage` means IE8 only gets the *core* experience. But it got lucky with IE8 &mdash; not so much for iOS 8 as Caniuse.com states:

> iOS 8.* contains a bug where selecting siblings of filtered id selections are no longer working (for example #a + p).

This is one of infinite permutations and is a very real example. IE9 will enhance and break in the above example. Inferring enhanced support with a few choice APIs detected is fragile.

Some implementations of the Cut the Mustard technique use polyfills to plug other gaps but it just so happens that polyfills are very unreliable. Who wants more fragility?

Interestingly CTM gets close. But it's playing a game and it's little better than User Agent sniffing and needs constant monitoring and maintenance.
-->

## What should you do?

*First*, detect only what your application requires to be detected and *second*, where necessary feature *test* an API to iron out bugs in APIs. The only way to do this reliably is through facades. A good library should abstract the complexity away for you with the added bonus of not repeating yourself. What does this end up looking like?

	if(lib.hasFeatures('x', 'y', 'z')) {
		x();
		y();
		z();
	}

Notice it is remarkably similar to CTM, but abstracted away into a library so that you, the developer decouples application logic from browser APIs and browser *bugs*. For the above application to run, the libary has exposed to the application that not only are all the required APIs available to use but they are *bug* free on this client. Essentially, Cuts the Mustard done right.

This is why it *does* matter if the web page works without Javascript because the user gets the core, js-off experience when the browser doesn't cut the mustard.

This is the **Real** Progressive Enhancement.


<!--



http://chimera.labs.oreilly.com/books/1234000001655/index.html

*The problem of the web is actually the beauty of the web. Anyone with a browser and Internet connection can access your website.*

* Possible title: Progressive Enhancement the missing piece

* no op isn't good enough, its a black hole.

* You might want to do a catch all cuts the mustard test - no problem, just abstract a one off list into one function and call that

	function canRun() {
		return lib.hasFeatures('a', 'b', 'c', ...);
	}

	if(canRun()) {
		application.start();
	}

* Reference zakas booklet about the bugs around matchMedia.

-->