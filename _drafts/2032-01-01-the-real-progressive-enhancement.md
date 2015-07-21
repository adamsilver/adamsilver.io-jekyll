---
layout: post
title:  "The Real Progressive Enhancement"
date:   2032-01-01 09:00:01
tagline: "How to avoid the fuck you experience"
categories: js
---

Progressive Enhancement is one of those things that "everybody" knows don't they? However, there are a lot of significant misunderstandings about the subject, from both a philosophical stand point, but also and more importantly the technical implementation.

> &ldquo;Progressive Enhancement is the philosophy of providing a baseline **core** experience for everyone; and creating an even better, **enhanced** experience for people who use a more capable browser.&rdquo;
> <br> &mdash; <cite>Adam Silver (Me!)</cite>

Whilst it doesn't just pertain to Javascript, it is the aspect that we developers tend to struggle with the most &mdash; we just don't seem to be able to answer the following question:

> &ldquo;How the hell am I meant to write Javascript in a Progressive Enhancement way?&rdquo;

But before answering this question, I think we need to clarify a few points&hellip;

> Unobtrusive Javascript is not Progressive Enhancement!

Placing script in external files does not, in anyway affect the ability to provide an enhanced (or core) experience. *Ahem!*

> Handling the Javascript disabled scenario is only half of the story!

Granted, the majority of people don't even know how to disable Javascript. But, some do actually turn it off. Some use browsers that don't support Javascript. Sometimes a plug-in, perhaps one that disables tracking, causes all scripts to break &mdash; that is, one script references an object in another (blocked) script.

Sometimes a firewall, plug-in or proxy ate the script &mdash; this actually happened to me when I worked at Deutsche Telekom. The network decided to mess with a script it thought it recognised. As we worked for DT this eventually got fixed, but an "outsider" would likely not have got the same result.

But, and by far the **most common** and **most important** scenario is one where the browser lacks support to execute the code it's been given.

It *is* very important to handle the Javascript turned off scenario, because when Progressive Enhancement is implemented correctly, the *core* experience is *equivalent* to the Javascript-off experience.

> JS does not degrade gracefully without developer intervention (unlike HTML and CSS).

For example `<input type="email">` and `border-radius` naturally degrade. However, when a browser tries to execute script it doesn't recognise, an error is thrown (sometimes an irrevocable one). For example try running the code below in IE8.

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

*No*, instead they get the **fuck you** experience. And, this problem applies to pretty much any browser. It's a continuum of new browsers and new APIs, each with their varying level of support.

## What are others doing to solve this problem?

It seems that the industry talks about Progressive Enhancement in waves, one of which we are riding right now (at the time of writing). For the few that talk sense, there are many others that drown these people out.

> If a tree falls in the forest...

Some practice the art of ignoring the existance of a problem. Typically, they are the ones putting Javascript in external files, making sure their site works when Javascript is disabled, and very often, abdicating responsiblity over to popular 3rd party libraries, without peeping under the hood to check for quality &mdash; which is the only way you can be sure of quality &mdash; or at the very least checking what happens in various unsupported browsers.

Also, the fact that browsers are unsupported is a trademark of not practicing Progressive Enhancement! These libraries often mark support for a subset of browsers that they feel are worthy at *that* current moment. The unlucky people who use *other* browsers get the *fuck you* experience, often at times when it would be pretty straightforward to have given these users the *core* experience.

> Pull the rug out from under...

Additionally, you are on the end of it when a library drops support for a particular browser, in the way of upgrade and regression testing costs. If you don't want the lack of browser support but do want the bug fixes, you're *without a paddle*, so to speak.

> Cuts the mustard falls short

This approach is relatively new and has the *right* philosophy in that it has the notion of a core and an enhanced experience. Unfortunately, it turns out the technical implementation (as shown below) is frail.

	if(	document.querySelector && window.addEventListener && window.localStorage) {
		// bootstrap application
	}

CTM works by detecting (not testing) a few select modern browser APIs in order to *infer* that the browser is modern (how the developer decides what is and what is *not* modern is most certainly a head scratcher). Then if the browser is "modern" then it will enhance the experience for those users by bootstrapping the application.

The emphasis on *browsers* as opposed to *features* suggests this technique is doomed from the start, and of course inference is little better than User Agent sniffing. Furthermore, there are a lot of technical issues with CTM documented as follows:

**1. Detecting host objects like this is dangerous**. *H is for Host* explains why this is dangerous and how `isHostMethod` is your lifeline.

**2. Detecting the presence of an API is not enough**. CTM only *detects* host object methods but often an API can contain bugs. Nicholas Zakas explains this in detail in his e-book *The Problem with Native JavaScript APIs*. And, Peter Michaux's article *Feature Detection: State of the Art Browser Scripting*, explains everything you need to know about feature detection and feature testing &mdash; two must reads.

**3. CTM degrades the experience unnecessarily**. CTM can easily suppress a perfectly capable browser from providing the enhanced experience. For example, if you wanted client-side form validation, something that say Internet Explorer 8 (or 6 for that matter) is perfectly capable of, CTM disregards IE8 and will only give those users the *core* experience &mdash; resorting to server round trips &mdash; an unnecessarily poorer customer experience.

**4. Some CTM implementations rely on Javascript polyfills to plug missing gaps**. Putting to one side that polyfills are ill-advised [0], the fact remains that CTM is not enough to determine whether you get the enhanced experience. CTM simply *suggests* that this browser is *somewhat* modern *at the time* it was written. It's like "hey, I am a modern browser, now load some polyfills for older browsers".

**5. The CTM condition needs constant maintainance along the continuum of new browsers**. Again it's that same old problem &mdash; when do I drop support for a browser? However, this question doesn't really have to be asked. Either the browser is capable or not. Again go back to the philosophy of Progressive Enhancement for a moment. The point of CTM is that you don't ever provide the *fuck you* experience.

**6. It's unreliable**. If the application uses any method beyond the ones in the CTM test, you likely provide a broken experience. Take the following example, it will break in browsers where `matchMedia` isn't provided, or even in browsers where it is provided but it's buggy. Whilst we are on the topic of bugs, `querySelector` also has bugs, so detection again in this context is *unreliable*.

	if(	document.querySelector && window.addEventListener && window.localStorage) {
		// application that uses other APIs

		window.addEventListener("load", function(e) {
			var matches = window.matchMedia(...);
		}, false);
	}

Essentially, CTM as a concept is onto something but it falls short by quite some way.

## What's the solution?

It should be becoming increasingly obvious what we need to do, in order to answer the question of &ldquo;How the hell am I meant to write Javascript in a Progressive Enhancement way?&rdquo;

We need something that ensures the user never gets the *fuck you* experience; the *core* experience is always acceptable; or depending on the environment (browser, network, extensions etc), the person gets the *enhanced* experience.

In order to do that you need to detect and, where necessary *test* any API the application utilises. The reason to *detect* is so that you can first determine the functionality exists, and the reason to *test* is to ensure the API is bug free.

The only way to reliably do this is through facades. A library that employs Progressive Enhancement must provide a (dynamic) API that lets you ask questions of it, abstracting the complexity away from the calling application in the process. It looks something like this:

	// find - retrive element by selector
	// addListener - add an event listener
	// storeValue - persist a value to local storage

	if(lib.hasFeatures('find', 'addListener', 'storeValue')) {
		var el = lib.find('.whatever');
		lib.addListener(el, "click", function() {
			lib.storeValue('key', 'value');
		});
	}

You could have replaced `hasFeatures` for `cutsTheMustard` or `canEnhance` but this is just semantics.

Notice it is remarkably similar to CTM, but abstracted away into a library so that you, the developer can easily decouple application logic from browser APIs (and *bugs!*). For the above application to run, the libary has exposed to the application that not only are all the required APIs available to use but they are *bug* free in this browser. There is no need for polyfills, user agent sniffing or inferences.

It's also **very important** to notice there is a one-to-one mapping between what you check for and what your application uses.

And, when the browser doesn't cut the mustard, the application can bail out safely. The user gets the degraded, js-disabled equivalent &mdash; the core experience. The user won't mind if their browser can't provide the enhanced experience [[0](zakas vid)].

This is the **Real** Progressive Enhancement.

> &ldquo;I’ve always maintained that, given the choice between making something my problem, and making something the user’s problem, I’ll choose to make it my problem every time.&rdquo;
> <br>&mdash; <cite>Jeremy Keith</cite>

Explaining the intricacies of how to build a library like this really is out of scope for this article, and in anycase Peter Michaux does a far better job than I could ever do in *Cross-browser widgets*.

That said, you need a slight mindshift in how to write Javascript for the general web, and this change (like any other change in life) might seem daunting at first &mdash; but it's actually a lot easier than trying to keep up and remember what different browsers do, what is and what is not modern, and what your polyfills are doing etc.

Generally speaking a function, or group of functions (library), should be written once, and used by many. But like Jeremy we should choose to make this our problem.

## Citations

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="#">Soon</a></dd>
</dl>

<!--

Ultimately, a function, a group of functions (a lib) that is built with Progressive Enhancement in-mind should be basically written once and used many times so the concern that this takes effort is a false one. I mean take a look at the popular libraries out there. How many releases and bug fixes they have had over the years. How many times they have added support, dropped support etc and so on.

Perfectly capable browsers of yesteryear are deemed old today, browsers that support ES6 today will be deemed old in 2 years from now. It just doesn't have to be that way. Think in terms of features, not browsers. You only need browsers to verify that your detection and tests work in the largest range of browsers you can get your hands on.

http://chimera.labs.oreilly.com/books/1234000001655/index.html

Cornford: The combination of the facts that it is impossible to determine which browser is executing the script, and that it is impossible to be familiar with all browser DOMs can be rendered insignificant by using feature detection to match code execution with any browser's ability to support it. But there is still going to be a diversity of outcomes, ranging from total failure to execute any scripts (on browsers that do not support javascript, or have it disabled) to full successful execution on the most capable javascript enabled browsers.

CTM: The more time goes on the more it becomes even less reliable.

Possible titles:
* The Real Progressive Enhancement
* The state of Progressive Enhancement (in 2015)

-->