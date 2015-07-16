---
layout: post
title:  "The Real Progressive Enhancement"
date:   2032-01-01 09:00:01
tagline: "The final piece of the puzzle"
categories: js
---

> &ldquo;Progressive Enhancement is the philosophy of providing a baseline **core** experience for everyone; and creating an even better, **enhanced** experience for people who use a more capable browser.&rdquo;
> <br> &mdash; <cite>Me</cite>

Progressive Enhancement (PE) is one of those things that "everybody" knows don't they? In reality there are significant misunderstandings about it both from a philosophical stand point and more importantly the application of it in written code.

Whilst Javascript isn't the *only* relevant technology (patience I will cover this off in a minute), the thing we developers struggle with is how to answer the following question:

> &ldquo;How the fuck am I meant to write Javascript in a Progressive Enhancement way?&rdquo;

Before answering this question, I think it would be highly beneficial to take a moment and set the scene...

> Unobtrusive Javascript is not Progress Enhancement!

Shoving script in external files does not affect the concept of a core or enhanced experience!

> Handling the Javascript disabled scenario is only half of the story!

Yes, some people turn off Javascript, but most of us don't. Maybe, for whatever reason (some of) the Javascript doesn't make it down the wire. Perhaps a particular browser extension fucks with your Javascript. But more importantly and more common than this is that the browser doesn't understand the code it has been given.

> JS (unlike HTML and CSS) does not degrade gracefully without developer intervention.

For example `<input type="email">` naturally degrades. The same goes for `border-radius: 4px;`. When script is unsupported you get an error and sometimes an irrevocable one. For example try running the code below in IE8.

	// 1. retrieve form
	var form = document.forms[0];

	// 2. attach event listen for submit event
	lib.on(form, 'submit', function(e) {

		// 3. Stop the form from submitting
		lib.preventDefault(e);

		// 4. Find widget by class name
		var widget = document.getElementsByClassName('widget');

		// 5. Etc
	});

This fails at point #4 as IE8 doesn't understand it. The problem we have here is that the user doesn't get the enhanced experience, nor the degraded experience.

No, instead they get the *fuck you* experience. And, this problem applies to any browser, old or new, that runs Javascript. It's a continuum of new browsers, new APIs each with their own points of failure.

## What some do?

### 1. La-la driven-development

<!-- TODO tree fall in the forest -->

Like sticking your fingers in your ear and singing *"la la la"*. This methodology ignores the fact that Javascript doesn't naturally degrade gracefully. Ignorance is bliss, if I don't know it's failing for some users, then it's not happening. Also relevant is the school of thought that everything is okay because it "works without Javascript" but as we have seen above that is only *one* scenario and half the solution as we will see later.

**This is not Progressive Enhancement**.

### 2. Outsource driven-development

This is really an extension of *a)*. This one effectively abdicates responsibility by relying on an unsuitable 3rd party library or framework that has it's own caveats and (multi) browser support. If the library only supports browser X, that means your application can only ever support browser X. When library drops support for browser X, you guessed it, you just lost support for browser X too. With this one you have to keep an eye on upgrades and incur the cost of regression testing.

**Needless to say this is not Progressive Enhancement either**.

### 3. Cuts the Mustard is so close and yet so far

This is a relatively new *approach* which gets agonisingly close; it has the *right* philosophy (a core and enhanced experience) &mdash; but it does not play out well in code. Here it is:

	if(	document.querySelector && window.addEventListener && window.localStorage) {
		// bootstrap application
	}

#### 3.1 Detecting the present of the API is not enough

As I mention in *The disadvantages of Javascript polyfills* merely API detection is not always enough. Nicholas Zakas has a dedicated e-book entitled *The Problem with Native JavaScript APIs* [0] which I highly recommend to bring the point home. This is why feature *testing* (not detecting) is very important.

#### 3.2 Degrading the experience unnecessarily

CTM could easily rule out a perfectly capable browser from receiving the *enhanced* experience. Let's say you want your app to perform client-side form validation, something that say IE8 is perfectly capable of. CTM will unnecessarily stop the user from receiving the enhanced experience, resorting to server round trips and the disadvantages that come with that.

#### 3.3 Polyfills

*Some* implementations of CTM rely on polyfills to plug the missing gaps which has two major problems. One is that polyfills have a load of major disadvantages (another frail thing to do) and two, it is weird to enhance the experience based on a modern CTM test, and then immediately provide arbitrary support for old browsers that dont cut the mustard.

#### 3.4 Needs constant updating

Again it's the same old problem &mdash; when do I drop support for a browser. If so how do I drop *enhanced* support for it. The idea being that when you **somehow** decide you then need to change the test. Perfectly capable browsers today are then soon to be deemed incapable years down the line. ES6 anyone.

#### 3.5 It's unreliable

It's only reliable if the application utilises the methods in the CTM condition e.g. the following could easily break:

	if(	document.querySelector && window.addEventListener && window.localStorage) {
		// application that uses other APIs

		window.addEventListener("load", function(e) {
			var matches = window.matchMedia(...);
		});
	}

## What should you do?

*First*, detect only what your application requires to be detected and *second*, where necessary feature *test* an API to iron out bugs in APIs. The only way to do this reliably is through facades. A good library should abstract the complexity away for you with the added bonus of not repeating yourself. What does this end up looking like?

	if(lib.hasFeatures('x', 'y', 'z')) {
		x();
		y();
		z();
	}

Notice it is remarkably similar to CTM, but abstracted away into a library so that you, the developer can easily decouple application logic from browser APIs (and *bugs!*). For the above application to run, the libary has exposed to the application that not only are all the required APIs available to use but they are *bug* free on this client. Essentially, Cuts the Mustard done right.

This is why it *does* matter if the web page works without Javascript because the user gets the core, js-off experience when the browser doesn't cut the mustard.

This is the **Real** Progressive Enhancement and something that has been talked about years and years before I wrote this article.

<!--

https://jsfiddle.net/adamsilver/pa9ge39x/3/embedded/result/

Enter Javascript. Try running `document.getElementsByClassName('yo');` in Internet Explorer 8 or `matchMedia("(min-width: 400px)");` in Internet Explorer 9. **Runtime error. Sad face.** Also, it's not just about the presence of an API &mdash; sometimes an API is buggy. *Caniuse.com* states &mdash; and this is just one of a plethora of examples. Safari 3.1 has a caching bug:

> If the class of an element changes it won't be available for getElementsByClassName.

So there we have it &mdash; Javascript *doesn't* degrade gracefully.
-->

<!--

http://chimera.labs.oreilly.com/books/1234000001655/index.html

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

https://youtu.be/li4Y0E_x8zE?t=23m11s

> &ldquo;I’ve always maintained that, given the choice between making something my problem, and making something the user’s problem, I’ll choose to make it my problem every time.&rdquo;
> <br>&mdash; <cite>Jeremy Keith</cite>

Eg: add event, event listenr fucks

Eg: loop through elements hide them but cant add event listener which shows them again, hidden content forever.

-->