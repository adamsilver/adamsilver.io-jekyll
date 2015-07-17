---
layout: post
title:  "The Real Progressive Enhancement"
date:   2032-01-01 09:00:01
tagline: "How to avoid the fuck you experience"
categories: js
---

> &ldquo;Progressive Enhancement is the philosophy of providing a baseline **core** experience for everyone; and creating an even better, **enhanced** experience for people who use a more capable browser.&rdquo;
> <br> &mdash; <cite>Me</cite>

Progressive Enhancement (PE) is one of those things that "everybody" knows don't they? In reality there are significant misunderstandings about it from both a philosophical stand point and more importantly the application of it in code.

Whilst Javascript isn't the *only* relevant technology (patience I will cover this off in a minute), the thing we developers struggle with is how to answer the following question:

> &ldquo;How the hell am I meant to write Javascript in a Progressive Enhancement way?&rdquo;

Before answering this question, I think it would be highly beneficial to take a moment and set the scene&hellip;

> Unobtrusive Javascript is not Progressive Enhancement!

Putting script in external files does not affect the concept of a core or enhanced experience. *Ahem!*

> Handling the Javascript disabled scenario is only half of the story!

Yes, some people turn off Javascript, but most of us don't. Maybe, for whatever reason (some of) the Javascript doesn't make it down the wire. Perhaps a particular browser extension messes with your Javascript. But **most importantly** and *more common* than any of that, is that the **browser doesn't understand the code** it has been given.

> JS does not degrade gracefully without developer intervention (unlike HTML and CSS).

For example `<input type="email">` naturally degrades. The same goes for `border-radius: 4px;`. However, when script is unsupported you get an error and sometimes an irrevocable one. For example try running the code below in IE8.

	// 1. retrieve form
	var form = document.forms[0];

	// 2. attach event listen for submit event
	form.attachEvent('submit', function() {

		// 3. Stop the form from submitting
		window.event.returnValue = false;

		// 4.
		var widgets = document.getElementsByClassName('widget');

		// 5. etc
	});

This fails at point #4 as IE8 doesn't understand it. The problem here is that the user doesn't get the enhanced experience, nor the degraded experience.

*No*, instead they get the **fuck you** experience. And, this problem applies to any browser, old or new, that runs Javascript. It's a continuum of new browsers and new APIs, each with their varying level of (reliable) support.

Okay the scene is set. What are others doing to solve this problem?

## What are others doing to solve this problem?

For one, people are talking about this a lot, and infact I have noticed the industry talks about this in waves, one of which we are riding now (at least at the time of writing). I have noticed, Jeremy Keith has tried to make these points clear but is *quiet* and overpowered against *louder* evangelists in the industry.

> If a tree falls in the forest...

Some practice the art of ignoring this is a problem. They shove their Javascript in external files, make sure their site works somewhat when Javascript is disabled, and very often, abdicate responsiblity to popular 3rd party libraries without peeping under the hood (to check for quality) or at least checking what happens in various "unsupported" browsers. The very fact that browsers are unsupported tells you these libraries don't advocate Progressive Enhancement &mdash; at least not the *Real* Progressive Enhancement.

These libraries often mark support for a subset of browsers that they feel is important at the current moment in time. The unlucky people who use *other* browsers get the *fuck you* experience, often when it would have been rather easy to give them the core experience.

Obviously you incur issues when a library drops support for a particular (set of) browser(s), in the way of upgrade and regression testing costs. If you don't want the lack of browser support but do want the bug fixes, you're *without a paddle*, so to speak.

> Cuts the mustard falls short

This relatively new approach is 100% correct in its philosophy &mdash; it has the notion of a core and an enhanced experience and attempts to avoid the *fuck you* experience. However, it turns out that its implementation is frail.

What *it* does, much like popular library vendors, is to *detect* (not test!) a few choice browser APIs in order to *infer* (which is *bad!*) whether a browser can deliver the enhanced experience. However, this doesn't guarantee the enhanced experience, it just gives the enhanced experience a slightly better chance of success as we will see shortly. Here is it what it looks like:

	if(	document.querySelector && window.addEventListener && window.localStorage) {
		// bootstrap application
	}

**Detecting host objects like this is dangerous**. *H is for Host* explains everything you need to know and why `isHostMethod` is what you need to avoid the danger.

**Detecting the presence of the API is not enough**. CTM only *detects* host object methods. As I mention in *The disadvantages of Javascript polyfills*, merely detecting an API is not always enough. Sometimes an API is detected but it contains bugs. Nicholas Zakas has an entire e-book on the subject entitled *The Problem with Native JavaScript APIs* for information on that subject. Not sure of the difference between detection and testing? Read Peter Michauxs article on the subject.

**CTM degrades the experience unnecessarily**. CTM could easily rule out a perfectly capable browser from receiving the *enhanced* experience. Let's say you want your app to perform client-side form validation, something that say IE8 is perfectly capable of. CTM will unnecessarily stop the user from receiving the enhanced experience, resorting to server round trips and the disadvantages that come with that (those are out of scope for this article).

**Some CTM implementations rely on Javascript polyfills to plug missing gaps**. Putting to one side that polyfills are ill-advised due to their own array of disadvantages, the fact that the CTM detection isn't enough on it's own to determine whether the user will gain the enhanced or core experience is what I mean when I say: CTM only gives you a slightly better chance of success at the point in time at which you implement. The more time goes on the more it becomes even less reliable. Doesn't it seem weird that when the CTM passes that you then have to help those browsers with polyfills or what have you to provide the enhanced experience. When polyfills are to make new shit work in old browsers. Urgh it's just all wrong.

**The CTM condition needs constant maintainance along the continuum of new browsers**. Again it's the same old problem &mdash; when do I drop support for a browser? If so how do I drop *enhanced* support for it. The idea being that when you **somehow** decide you then need to change the test. Perfectly capable browsers today are then soon to be deemed incapable years down the line. ES6 anyone.

**Worst of all it's unreliable**. It's only reliable if the application utilises the methods in the CTM condition e.g. the following could easily break:

	if(	document.querySelector && window.addEventListener && window.localStorage) {
		// application that uses other APIs

		window.addEventListener("load", function(e) {
			var matches = window.matchMedia(...);
		});
	}

## What's the solution?

*First*, detect only what your application requires to be detected and *second*, where necessary feature *test* an API to iron out bugs in APIs. The only way to do this reliably is through facades. A good library should abstract the complexity away for you with the added bonus of not repeating yourself. What does this end up looking like?

	if(lib.hasFeatures('x', 'y', 'z')) {
		x();
		y();
		z();
	}

Notice it is remarkably similar to CTM, but abstracted away into a library so that you, the developer can easily decouple application logic from browser APIs (and *bugs!*). For the above application to run, the libary has exposed to the application that not only are all the required APIs available to use but they are *bug* free on this client. Essentially, Cuts the Mustard done right.

This is why it *does* matter if the web page works without Javascript because the user gets the core, js-off experience when the browser doesn't cut the mustard.

This is the **Real** Progressive Enhancement and something that has been talked about years and years before I wrote this article.

## Citations

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="#">Soon</a></dd>
</dl>

<!--

2. hasFeatures() >> cutsTheMustard()

3. Infer is bad! link to an article and state that it is bad.

4. and also if one errors and doesn't provide the globally scoped thing you are relying on (like when I block access to tracking scripts - half the sites break)

5. I feel like you should give more reasons to really make people think that it's not just about JS off but there are loads of things that can happen

`matchMedia("(min-width: 400px)");` in Internet Explorer 9.

http://chimera.labs.oreilly.com/books/1234000001655/index.html

* no op isn't good enough, its a black hole.

https://youtu.be/li4Y0E_x8zE?t=23m11s

> &ldquo;I’ve always maintained that, given the choice between making something my problem, and making something the user’s problem, I’ll choose to make it my problem every time.&rdquo;
> <br>&mdash; <cite>Jeremy Keith</cite>

Eg: loop through elements hide them but cant add event listener which shows them again, hidden content forever.

-->