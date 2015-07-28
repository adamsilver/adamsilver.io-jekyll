---
layout: post
title:  "The Real Progressive Enhancement"
date:   2032-01-01 09:00:01
tagline: "How to avoid the fuck you experience"
categories: js
---

Progressive Enhancement is one of those things that everyone knows right? However, throughout my career, it has always been a hot topic, and one that developers have struggled with in one form or other, demonstrating signficant misundestandings about the subject, particularly when it comes to Javascript.

This article addresses these misunderstandings and provides long forgotten but reliable solutions. Solutions that have stood the test of time and can still, today be considered cutting-edge. The fact is that this subject is quite possibly the most important and misunderstood aspect of front-end web development.

> &ldquo;The problems we have with websites are ones we create ourselves&rdquo;
<br>&mdash; <cite>Motherfuckingwebsite.com</cite>

The beauty of the web is that by default, it is accessible to *everyone*. It's us developers that come along and ruin it. Websites such as the one I quote above are not alone either, demonstrating there are many that have the right intention, to serve the user first. Often, even the best intentions fall short in their execution as we will see shortly.

So what is the best way to define what Progressive Enhancement *really* is?

> Progressive Enhancement is the approach of providing a baseline **core** experience for everyone; and creating a better **enhanced** experience for people who use a more capable browser.

Whilst Progressive Enhancement doesn't just pertain to Javascript, it is definitely the technology that developers tend to suffer with the most. We just can't seem to answer the following question with aplomb:

> &ldquo;How am I meant to write Javascript in a Progressive Enhancement way?&rdquo;

Whilst this question is not the easiest one to answer, answers exist, and they are not *that* difficult once taking the time to truly understand them.

Firstly, though, 3 key points must be addressed...

## 1. Unobtrusive Javascript is not Progressive Enhancement

Simply placing your Javascript code in external Javascript files, does not, in anyway, address the problem of Progressive Enhancement. Code that is inline or external has equal chance of success of failure.

## 2. Handling the Javascript disabled scenario is only half of the story

Yes, Javascript disabled is a scenario that needs consideration but not necessarily for the reason you may think. It is pretty rare that people turn off Javascript in their browser even though some do. Most of the general public don't know or care what Javascript is.

Some browsers don't support Javascript so relying on it for the core experience is ill-advised. Some people install plugins, such as those that disable tracking, these can cause script to break i.e. when one script references another object in a *blocked* script.

Sometimes a firewall or proxy ate the script &mdash; this actually happened to me when I was building websites for a telecom company.The network decided to mess with a script it thought it recognised causing Javascript problems. Using the latest iPhone, with Javascript enabled, had no affect in avoiding this problem. Fortunately this could be fixed as I worked for the network but it's not always in your control. So it pays to not trust the browser or network.

But more importantly than any of the above, the most common scenario is one where the browser simply lacks support for a given set of APIs that your application tries to use (examples later).

## 3. JS does not degrade gracefully without developer intervention (unlike HTML and CSS).

HTML and CSS degrade (or enhance depending on the way you see things) without any extra effort. Consider `<input type="email">` and `border-radius`. When unsupported, the input reverts to a text input and the element doesn't have a curved border. No harm, no foul.

When it comes to Javascript the same cannot be said. If the browser tries to execute code it can't handle an error occurs, sometimes an irrevocable one. As an example try running the following in Internet Explorer 8.

	var form = document.forms[0];
	form.attachEvent('submit', function() {
		window.event.returnValue = false;
		var widgets = document.getElementsByClassName('widget');
	});

The code above errors because IE8 doesn't support retrieving elements by class name. The problem here is that the page didn't *fully* enhance. The user didn't get the enhanced experience. Nor did they get the core experience. *No*, instead they got the *fuck you* experience.

The browser and feature in this example is not the relevant point here. It could be any browser and any feature. It makes no difference how new a browser is or what cutting-edge features it claims to support.

## What shouldn't you do?

As is true with everything in life, looking at what most people do, provides a guide as to what not to do.

Some ignore the problem even exists. If they haven't seen the network fail, or a particular device or browser fail they don't really care and even then they might just say "they don't care about those browsers" which is obviously unlucky for those users.

Some also abdicate responsibility by using 3rd party libraries without checking under the hood for quality. And often these libraries support a subset of browsers, that is it's multi-browser, not cross-browser; a sure sign that the library vendor does not practice Progressive Enhancement and in-turn doesn't care about people very much.

The people who use *other* browsers get the aformentioned *fuck you* experience, often at times when it would be straightforward to provide the *core* experience. Much the same happens for those browsers that have been dropped by the library.

> Cuts the mustard falls short

*Cuts The Mustard* (CTM) is a relatively new approach to Progressive Enhancement, one which has the premise of a reliable solution and is based on the concept of a core and an enhanced experience. However, it's technical implementation (shown below) falls short.

	if(	document.querySelector && window.addEventListener && window.localStorage) {
		// bootstrap application
	}

It works by *detecting* a few *choice* browser APIs in order to *infer* that the browser is "modern", something that is impossible to determine, considering the sheer amount of new browsers being released and the fact that *new* does not necessarily mean it is the most capable browser.

Anyway, once CTM determines its modern, the JS application starts and (attempts to) provide the enhanced experience. The emphasis on *browsers* as opposed to *features* more than suggests this technique is doomed from the start. And, inference is little better than User Agent sniffing.

More specifically, CTM has the following important problems:

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

> &ldquo;I’ve always maintained that, given the choice between making something my problem, and making something the user’s problem, I’ll choose to make it my problem every time.&rdquo;
> <br>&mdash; <cite>Jeremy Keith</cite>

If you have made it this far, it is clear that you believe in users first and that Progressive Enhancement is the way to enable that belief.

In order to provide a core experience, it is imperative your site works without Javascript because that is the experience a user will get when Javascript *is* enabled but incapable of running (for whatever reason).

Then, in order to determine that the browser can provide the enhanced experience you must detect and where necessary test **all of the features** used by your application *before* your application  uses them. This will ensure the page doesn't end up irrevocably broken, something that will make your users not hate you.

The only way to reliably do this is through wrappers (AKA facades). A library that employs Progressive Enhancement *must* provide a dynamic API. Dynamic in that it adapts and changes based on the environment. This is how it basically looks in code form:

	if(lib.hasFeatures('find', 'addListener', 'storeValue')) {
		var el = lib.find('.whatever');
		lib.addListener(el, "click", function() {
			lib.storeValue('key', 'value');
		});
	}

**1. Notice how remarkably similar CTM is to this solution.** The difference is that you the application doesn't directly interface with browser APIs. Facades provide a leaner, context-specific API that allows you to iron out bugs to enable Progressive Enhancement reliably.

**2. Also note, the one-to-one mapping between what is *checked* in the condition and what is *used* by the application.** This is *vital*. If you break this rule, you are asking for trouble.

**3. There is no need for polyfills.** The library either provides the method or it doesn't, no halfway houses, no caveats.

**4. Application logic is completely decoupled from browser logic.** Something that you may have heard Nicholas Zakas talk about in many of his articles and books. Basically this is good for sanity and maintainability.

**5. In the event that Javascript is enabled and that the condition does *not* pass, the user gets the degraded experience.** In Cut The Mustard lingo, it simply doesn't cut it.

At this point some might say things like: "I don't want to know about all these browser problems, that's what libraries are for aren't they? I am an application developer, not a library developer".

The idea of abstractions are good, the idea of several abstractions AKA a library is also good. But if that library is monolithic in nature, context-less, lacks feature detection and feature testing, leans on polyfills and doesn **not** expose a dynamic API, then ultimately you are unable to Progressively Enhance the Javascript portion of your application and your users will suffer for it.

At the very least, it is beneficial to be able to spot a bad script or library, one that doesn't even attempt to degrade gracefully in the face of danger.

## How do I build a library like this?

Explaining the details of how to build a library that conforms to the above rules is worthy of an article in it's own right, something that Peter Michaux did, in 2008 no less.

Whilst I don't wish to repeat that article it might be worth a quick example, one that shows that this technique is not a drag on new browsers and cutting edge development. Quite the opposite, Progressive Enhancement actually makes it easy to "drop support" for say IE6 without actually dropping support &mdash; they just get the degraded experience.

	// library namespace
	var lib = {};

	// short form - see Peter's article for isHostMethod etc
	if(document.documentElement.classList.add) {
		lib.addClass = function(el, className) {
			return el.classList.add(className);
		};
	}

And then usage of it:

	if(lib.addClass) {

		// some application that must provide the ability to add a class to an element in order to provide the enhanced experience

	}

Notice, that this application only enhances where browsers support `classList` which generally speaking are cutting edge browsers, don't bother with IE6, give those guys the degraded experience.

## Citations

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="#">Soon</a></dd>
</dl>

<!--

My hope is that the industry stops trying to produce the next shiny framework and can pull together to build a library of functions that enable the Real Progressive Enhancement to provide a core experience for all, and where possible an even better experience.

* With a dynamic API such as this you get to drop support for browsers without giving those usrs the fuck you experience.

http://chimera.labs.oreilly.com/books/1234000001655/index.html

Cornford: The combination of the facts that it is impossible to determine which browser is executing the script, and that it is impossible to be familiar with all browser DOMs can be rendered insignificant by using feature detection to match code execution with any browser's ability to support it. But there is still going to be a diversity of outcomes, ranging from total failure to execute any scripts (on browsers that do not support javascript, or have it disabled) to full successful execution on the most capable javascript enabled browsers.

-->