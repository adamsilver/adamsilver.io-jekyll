---
layout: post
title:  "The Real Progressive Enhancement"
date:   2032-01-01 09:00:01
tagline: "How to avoid the fuck you experience"
categories: js
---

Progressive Enhancement is one of those things that "everybody" knows don't they? However, there are significant misunderstandings about the subject in the industry, and this article aims to address all of them.

> &ldquo;The problems we have with websites are ones we create ourselves&rdquo;
<br>&mdash; <cite>Motherfuckingwebsite.com</cite>

The beauty of the web is that by default, it is accessible to *everyone*. It's us developers that come along and ruin it. So with that in-mind what is the best way to describe Progressive Enhancement?

> Progressive Enhancement is the approach of providing a baseline **core** experience for everyone; and creating an even better, **enhanced** experience for people who use a more capable browser.

Whilst it doesn't just pertain to Javascript, it is the aspect that we developers tend to struggle with the most &mdash; we just don't seem to be able to answer the following question:

> &ldquo;How am I meant to write Javascript in a Progressive Enhancement way?&rdquo;

This question is not *straightforward* to answer, but there are answers. Before getting to that I need to address a few important points.

> Unobtrusive Javascript is not Progressive Enhancement!

Placing script in external files does not, in anyway affect the ability to provide an enhanced (or core) experience.

> Handling the Javascript disabled scenario is only half of the story!

The majority of people have Javascript *enabled* as they don't even know what Javascript is, but even if you ignored the very valid use case of people disabling it, that does not ensure the user can reliably enjoy the enhanced experience &mdash;, that experience is different for every website because every website is unique.

Some browsers don't support Javascript, some people install plugins, such as those that disable tracking &mdash; these can cause script to break i.e. when one script references another object in a *blocked* script.

Sometimes a firewall or proxy ate the script &mdash; this actually happened to me when I was building apps to be consumed on device over a mobile network. The network decided to mess with a script it thought it recognised causing Javascript problems. Using the latest iPhone with Javascript enabled had no affect on this problem. As I worked for the mobile network we got this fixed but sometimes this is out of your control, and so it pays to write Javascript in a Progressive Enhanced way.

But more importantly than any of that, the most common scenario is one where the browser simply lacks support for a given set of APIs that you wish to use (examples later on).

> JS does not degrade gracefully without developer intervention (unlike HTML and CSS).

This is a very important point. Consider `<input type="email">` and `border-radius` as examples whereby HTML and CSS naturally degrade with no developer intervention.

On the other hand, when a browser tries to execute script it doesn't recognise, an error is thrown (sometimes an irrevocable one). For example try running the code below in IE8.

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

This fails at point #4 as IE8 doesn't understand it. The problem here is that the user doesn't get the enhanced experience *nor* the degraded experience.

> The Fuck You experience

*No*, instead they get the **fuck you** experience. And, this problem applies to pretty much any browser. Browsers are constantly coming out each with varying levels of support and bugs in the APIs they provide for use.

## What are others doing to solve this problem?

Some ignore the problem even exists. Typically, these developers religiously place script placed in external files in the name of Progressive Enhancement and we know this has no affect on the matter.

Some also abdicate responsibility by using 3rd party libraries without checking under the hood for quality. And often these libraries support a subset of browsers i.e. it's multi-browser &mdash; a sure sign that these libraries don't practice Progressive Enhancement at all.

The unfortunate people who use *other* browsers get the *fuck you* experience, often at times when it would be straightforward to provide the *core* experience.

Also, when a library decides to drop support for a browser, what does that mean for your users? Clue: not the core or enhanced experience.

> Cuts the mustard falls short

This approach is relatively new and has the *right* philosophy in that it has the notion of a core and an enhanced experience. Unfortunately, it turns out the technical implementation (as shown below) leaves a lot to be desired.

	if(	document.querySelector && window.addEventListener && window.localStorage) {
		// bootstrap application
	}

CTM works by detecting (not testing) a few select modern browser APIs in order to *infer* that the browser is "modern" (how the developer decides what is and what is *not* modern is most certainly a head scratcher). Then if modern, the JS runs providing the enhanced experience.

The emphasis on *browsers* as opposed to *features* more than suggests this technique is doomed from the start. And, inference is little better than User Agent sniffing.

For completeness, CTM has the following significant pitfalls:

**1. Detecting host objects like this is dangerous**. *H is for Host* explains why this is dangerous and how `isHostMethod` is your lifeline.

**2. Detecting the presence of an API is not enough**. CTM only *detects* host object methods but often an API can contain bugs. Nicholas Zakas explains this in detail in his e-book *The Problem with Native JavaScript APIs*. And, Peter Michaux's article *Feature Detection: State of the Art Browser Scripting*, explains everything you need to know about feature detection and feature testing &mdash; two must reads.

**3. CTM degrades the experience unnecessarily**. CTM can easily suppress a perfectly capable browser from providing the enhanced experience. For example, if you wanted client-side form validation, something that say Internet Explorer 8 (or 6 for that matter) is perfectly capable of, CTM disregards IE8 and will only give those users the *core* experience &mdash; resorting to server round trips  which is an *unnecessarily* poor experience.

**4. Some CTM implementations rely on Javascript polyfills to plug missing gaps**. Putting to one side that polyfills are ill-advised [0], the fact remains that CTM is not enough to determine whether you get the enhanced experience. CTM simply *suggests* that this browser is *somewhat* modern *at the time* it was written. It's like "hey, I am a modern browser, now load some polyfills for older browsers, you know right? The ones we don't care about".

**5. The CTM condition needs constant maintainance as new browsers are released**. Again it's that same old problem &mdash; when do I drop support for a browser? This question doesn't really ever have to be asked. Either the browser is capable of running the enhanced experience or it isn't.

**6. It's unreliable**. If the application uses any API that is not covered off by CTM, the likelyhood of providing a broken experience is high. Take the following example, it will break in browsers where `matchMedia` isn't provided, or even in browsers where it is provided but it's buggy. Also, `querySelector` has bugs which further reduces the quality of the test.

	if(	document.querySelector && window.addEventListener && window.localStorage) {
		// application that uses other APIs

		window.addEventListener("load", function(e) {
			var matches = window.matchMedia(...);
		}, false);
	}

## What *is* the solution?

It should be becoming increasingly obvious what we need to do, in order to provide a reliable solution. It needs to ensure the user never gets the *fuck you* experience; the *core* experience is always acceptable; or depending on the environment (browser, network, extensions etc), the person gets the *enhanced* experience.

In order to do that you need to detect and, where necessary *test* any API the application utilises. The reason to *detect* is so that you can first determine the functionality exists, and the reason to *test* is to ensure the API is bug free.

The only way to reliably do this is through facades. A library that employs Progressive Enhancement must provide a (dynamic) API that lets you ask questions of it, abstracting the complexity away from the calling application in the process. It should look something like:

	// find - retrive element by selector
	// addListener - add an event listener
	// storeValue - persist a value to local storage

	if(lib.hasFeatures('find', 'addListener', 'storeValue')) {
		var el = lib.find('.whatever');
		lib.addListener(el, "click", function() {
			lib.storeValue('key', 'value');
		});
	}

	// Perhaps `hasFeatures` could be renamed to `cutsTheMustard` if you find that more understandable but this is just semantics.

Notice it is remarkably similar to CTM, but abstracted away into a library so that you, the developer can easily decouple application logic from browser APIs (and *bugs!*).

For the above application to run, the libary has exposed to the application that not only are all required methods available but that they are free from bugs. There is no need for polyfills, User Agent sniffing or object inferences.

*One subtle but important point to make note of is this*: there is a one-to-one mapping between what you check for and what your application uses.

This is why the site must provide a core experience when Javascript is turned off &mdash; the user well receive this experience when it doesn't *cut the mustard*. And don't worry about the user getting upset &mdash; they won't mind [0].

This is the **Real** Progressive Enhancement.

> &ldquo;I’ve always maintained that, given the choice between making something my problem, and making something the user’s problem, I’ll choose to make it my problem every time.&rdquo;
> <br>&mdash; <cite>Jeremy Keith</cite>

Explaining the intricacies of how to build a library like this really is out of scope for this article, and in anycase Peter Michaux does a far better job than I could ever do in *Cross-browser widgets*. Just don't let the date and new lingo distract you from the educational aspects.

That said, you need a slight mindshift in how to write Javascript for the general web, and this change (like any other change in life) might seem daunting at first &mdash; but it's actually a lot easier than trying to keep up and remember what different browsers do, what is and what is not modern, and what your polyfills are doing etc.

Generally speaking a function, or group of functions (library), should be written once, and used by many. But like Jeremy we should choose to make this our problem.

## Citations

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="#">Soon</a></dd>
</dl>

<!--

* With a dynamic API such as this you get to drop support for browsers without giving those usrs the fuck you experience.

http://chimera.labs.oreilly.com/books/1234000001655/index.html

Cornford: The combination of the facts that it is impossible to determine which browser is executing the script, and that it is impossible to be familiar with all browser DOMs can be rendered insignificant by using feature detection to match code execution with any browser's ability to support it. But there is still going to be a diversity of outcomes, ranging from total failure to execute any scripts (on browsers that do not support javascript, or have it disabled) to full successful execution on the most capable javascript enabled browsers.

-->