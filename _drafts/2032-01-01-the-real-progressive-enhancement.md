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

Granted, the majority of users have Javascript enabled. But, some do actually turn it off. Some use browsers that don't support Javascript. Sometimes a plug-in, such as one that disables tracking cause all scripts to break i.e. one script referenced objects in the blocked script.

Sometimes a firewall, plug-in or proxy at the script &mdash; this actually happened to me when I was working at a telecom company. The network decided it knew better. As we worked within the teleco we could request this to be fixed but this was *extremely* fortunate.

But, by far the most common and most *important* scenario is one where the browser lacks support to execute the code it's been given which leads perfectly on to&hellip;

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

Some practice the art of ignoring there *is* a problem &mdash; putting their Javascript in external files, making sure their site works when Javascript is disabled, and very often, abdicate responsiblity to popular 3rd party libraries without peeping under the hood (to check for quality) or at least checking what happens in various "unsupported" browsers. The very fact that browsers are unsupported tells you these libraries don't practice the *Real* Progressive Enhancement!

These libraries often mark support for a subset of browsers that they feel are worthy at *that* current moment. The unlucky people who use *other* browsers get the *fuck you* experience, often when it would have been rather easy to give them the core experience.

Obviously you incur issues when a library drops support for a particular (set of) browser(s), in the way of upgrade and regression testing costs. If you don't want the lack of browser support but do want the bug fixes, you're *without a paddle*, so to speak.

> Cuts the mustard falls short

This relatively new approach is 100% correct in its philosophy &mdash; it has the notion of a core and an enhanced experience and attempts to avoid the *fuck you* experience. However, it turns out that its implementation falls short.

What *it* does is *detect* (not *test*) a few choice browser APIs in order to *infer* (read *guess*) whether a browser can deliver the enhanced experience. However, this doesn't guarantee the enhanced experience, it just gives the enhanced experience a slightly better chance of success as we will see shortly. Here is it what it looks like:

	if(	document.querySelector && window.addEventListener && window.localStorage) {
		// bootstrap application
	}

**Detecting host objects like this is dangerous**. *H is for Host* explains everything you need to know and why `isHostMethod` is what you need to avoid the danger.

**Detecting the presence of an API is not enough**. CTM only *detects* host object methods but often an API can contain bugs. Nicholas Zakas has an *entire* e-book on the subject entitled *The Problem with Native JavaScript APIs* that is an important read. And if your not sure of the difference between feature detection and feature testing, Peter Michaux's article entitled *Feature Detection: State of the Art Browser Scripting* is a must-read.

**CTM degrades the experience unnecessarily**. CTM could easily rule out a perfectly capable browser from receiving the *enhanced* experience. Let's say you want your app to perform client-side form validation, something that say IE8 is perfectly capable of. CTM will unnecessarily stop the user from receiving the enhanced experience, resorting to server round trips and the disadvantages that come with that (those are out of scope for this article).

**Some CTM implementations rely on Javascript polyfills to plug missing gaps**. Putting to one side that polyfills are ill-advised due to their own array of disadvantages, the fact that the CTM detection isn't enough on it's own to determine whether the user will gain the enhanced or core experience is what I mean when I say: CTM only gives you a slightly better chance of success at the point in time at which you implement. The more time goes on the more it becomes even less reliable. Doesn't it seem weird that when the CTM passes that you then have to help those browsers with polyfills or what have you to provide the enhanced experience. When polyfills are to make new shit work in old browsers. Urgh it's just all wrong.

**The CTM condition needs constant maintainance along the continuum of new browsers**. Again it's the same old problem &mdash; when do I drop support for a browser? This question doesn't really need to ever be asked. Either the browser is capable or not. Again go back to the philosophy of Progressive Enhancement for a moment. The point of CTM is that you don't ever provide the *fuck you* experience; the *core* experience at worst is just fine.

**It's unreliable**. It's only reliable if the application utilises the methods in the CTM condition e.g. the following could easily break, due to the use of `matchMedia` without first detecting in the CTM condition.

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

Perfectly capable browsers of yesteryear are deemed old today, browsers that support ES6 today will be deemed old in 2 years from now. It just doesn't have to be that way. Think in terms of features, not browsers. You only need browsers to verify that your detection and tests work in the largest range of browsers you can get your hands on.

* hasFeatures() >> cutsTheMustard()

* Infer is bad! link to an article and state that it is bad.

`matchMedia("(min-width: 400px)");` in Internet Explorer 9.

http://chimera.labs.oreilly.com/books/1234000001655/index.html

* no op isn't good enough, its a black hole.

* https://youtu.be/li4Y0E_x8zE?t=23m11s

> &ldquo;I’ve always maintained that, given the choice between making something my problem, and making something the user’s problem, I’ll choose to make it my problem every time.&rdquo;
> <br>&mdash; <cite>Jeremy Keith</cite>

Eg: loop through elements hide them but cant add event listener which shows them again, hidden content forever.

Cornford: The combination of the facts that it is impossible to determine which browser is executing the script, and that it is impossible to be familiar with all browser DOMs can be rendered insignificant by using feature detection to match code execution with any browser's ability to support it. But there is still going to be a diversity of outcomes, ranging from total failure to execute any scripts (on browsers that do not support javascript, or have it disabled) to full successful execution on the most capable javascript enabled browsers.

-->