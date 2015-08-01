---
layout: post
title:  "The Real Progressive Enhancement"
date:   2032-01-01 09:00:01
tagline: "How to avoid the fuck you experience"
categories: js
---

Progressive Enhancement is one of those things that everyone knows right? However, throughout my career, it has always been a hot topic, and one that developers have struggled with in one form or other, demonstrating signficant misundestandings about the subject, particularly when it comes to Javascript.

This article addresses these misunderstandings and provides long forgotten but reliable solutions, that have stood the test of time and can still, today be considered cutting-edge. The fact is that this subject is quite possibly the most important and misunderstood aspect of Javascript development, period.

> &ldquo;The problems we have with websites are ones we create ourselves&rdquo;
<br>&mdash; <cite>Motherfuckingwebsite.com</cite>

The beauty of the web is that by default, it is accessible to *everyone*. It's us developers that come along and ruin it. Websites such as the one I quote above are not alone either, demonstrating there are many of us that have the right intention &mdash; to serve the user first. Often, even the best intentions fall short in their execution as we will see shortly.

So what is the best way to define what Progressive Enhancement *really* is? I think the following description does it justice:

> Progressive Enhancement is the approach of providing a baseline **core** experience for everyone; and creating a better **enhanced** experience for people who use a more capable browser.

Whilst Progressive Enhancement doesn't just pertain to Javascript, it is definitely the technology that developers tend to struggle with the most. We just can't seem to answer the following question with aplomb:

> &ldquo;How am I meant to write Javascript in a Progressive Enhancement way?&rdquo;

Whilst this question is not the easiest one to answer, answers do exist, and they are not *that* difficult once you have taken the time to truly understand them.

Whilst there are many myths about Progressive Enhancement, I want to highlight 3 especially important points as follows:

## 1. Unobtrusive Javascript is not Progressive Enhancement

Simply placing your Javascript code in external files, does not, in anyway, address the problem of Progressive Enhancement.

## 2. Handling the Javascript disabled scenario is only half of the story

Yes, Javascript disabled is a scenario that needs consideration but not necessarily for the reason you may think. It is pretty rare that people turn off Javascript in their browser even though some do. Most of the general public don't know or care what Javascript is.

Some browsers don't support Javascript so relying on it for the core experience is ill-advised. Some people install plugins, such as those that disable tracking, these can cause script to break i.e. when one script references another object in a *blocked* script.

Sometimes the network is at fault. Only some of the script makes it down the wire. Perhaps a firewall or proxy messed with it. This actually happened to me when I worked at Deutsche Telekom. The network had the audacity to strip what it thought was a comment inside a well-known library, but it was actually a regex. Mobile networks can often do these things in the name of performance but it actually broke several sites fatally.

*Note: having the latest iPhone with Javascript enabled made no difference.*

More importantly than any of the above, the most common scenario is one where the browser simply lacks support for a given set of APIs that your application tries to use (examples later).

## 3. Javascript does not degrade gracefully without developer intervention (unlike HTML and CSS).

HTML and CSS degrade (or enhance depending on the way you see things) without any extra effort. Consider `<input type="email">` and `border-radius`. When unsupported, the input reverts to a standard text control and forgoes curved borders. No harm, no foul.

When it comes to Javascript the same cannot be said. If the browser tries to execute code it can't handle, an error occurs, sometimes an irrevocable one. As an example try running the following in Internet Explorer 8.

	var form = document.forms[0];
	form.attachEvent('submit', function() {
		window.event.returnValue = false;
		var widgets = document.getElementsByClassName('widget');
	});

The code above errors because IE8 doesn't support the retrieving of elements by class name. The problem here is that the page didn't *fully* enhance. The user didn't get the enhanced experience. Nor did they get the core experience. *No*, instead they got the *fuck you* experience.

The browser and feature in this example is not the relevant point here. It could be any browser and any feature. It makes no difference how new a browser is or what cutting-edge features it claims to support.

## What shouldn't you do?

Often, looking at what others do can serve as a useful guide in what *not* to do.

Some ignore the problem even exists. If they haven't experienced a problem then they often think one does not exist. Or worse they believe it to be an edge case. Regardless, this is unfortunate to the people using the website and the potential loss to the business.

Some also abdicate responsibility by using 3rd party libraries without checking under the hood for quality. And often these libraries support a subset of browsers i.e. it's multi-browser as opposed to cross-browser &mdash; a sure sign that the library does not practice Progressive Enhancement and in-turn doesn't care about people very much.

People who use *other* browsers get the aformentioned *fuck you* experience, often at times when it would be straightforward to provide a *core* experience. The same thing happens when a library releases a new version and happens to drop support for more browsers and this is a never ending cycle.

> Cuts the mustard falls short

*Cuts The Mustard* (CTM) is a relatively new approach to Progressive Enhancement, one which has the premise of a reliable solution and is based on the concept of a core and an enhanced experience. However, it's technical implementation (shown below) falls short.

	if(	document.querySelector && window.addEventListener && window.localStorage) {
		// bootstrap application
	}

It works by *detecting* a few *choice* browser APIs in order to *infer* that the browser is "modern", something that is impossible to determine, considering the sheer amount of new browsers being released and the fact that *new* does not necessarily mean it is the most capable browser. Besides, every browser was "modern" once.

Anyway, once CTM determines it's "modern", the Javascript application starts and (attempts to) provide the enhanced experience. The emphasis on *browsers* as opposed to *features* more than suggests this technique is doomed from the start. And, inference is little better than User Agent sniffing.

More specifically, CTM has the following problems of note:

**1. Detecting host objects like this is dangerous**. *H is for Host* explains why this is dangerous and provides a viable solution.

**2. Detecting the presence of an API is not enough**. CTM only *detects* host methods but often APIs are buggy. This is why feature *testing* is important. Nicholas Zakas provides an excellent case study in his short ebook *The Problem with Native JavaScript APIs*. Additionally, Peter Michaux's article *Feature Detection: State of the Art Browser Scripting* explains everything you need to know about feature detection and feature testing.

**3. CTM degrades the experience unnecessarily**. CTM can easily suppress a perfectly capable browser from providing the enhanced experience. For example, if you wanted client-side form validation, something that say Internet Explorer 8 (or 6 for that matter) is perfectly capable of, CTM disregards IE8 and will only give those users the *core* experience &mdash; resorting to server round trips  which is an *unnecessarily* poor experience.

**4. Some CTM implementations rely on Javascript polyfills to plug missing gaps**. Ignoring the fact that polyfills are full of problems, it is clear that if developers are mixing them in with CTM, this more than indicates CTM is not enough on its own to determine whether the browser is capable of delivery an enhanced experience (or not).

**5. The CTM condition needs constant maintainance as new browsers are released**. Again it's that same old problem &mdash; when can you drop support for a browser? This question doesn't really ever have to be asked. Either the browser has the required working features or it doesn't &mdash; that is, it's about features, not browsers.

**6. It's unreliable**. If the application uses any API that is not within the CTM test, the chance of a *fuck you* experience is high. As an  example, it will break in browsers where `matchMedia` isn't provided, or even in browsers where it is provided but it's buggy. Furthermore, `querySelector` itself is known to be rather buggy, further reducing the quality of CTM.

	if(	document.querySelector && window.addEventListener && window.localStorage) {
		// application that uses other APIs

		window.addEventListener("load", function(e) {
			// FAIL = ANOTHER FUCK YOU
			var matches = window.matchMedia(...);
		}, false);
	}

## What *is* the solution?

> &ldquo;I’ve always maintained that, given the choice between making something my problem, and making something the user’s problem, I’ll choose to make it my problem every time.&rdquo;
> <br>&mdash; <cite>Jeremy Keith</cite>

If you have made it this far, you probably believe in people first whether it's the users or the client. And, that Progressive Enhancement is the way to enable that belief.

In order to provide a core experience, it is imperative your site works without Javascript because that is the experience a user will get when Javascript *is* enabled but incapable of running (for whatever reason).

Then, in order to determine that the browser can provide the enhanced experience you must detect and where necessary test **all of the features** used by your application *before* your application  uses them. This will ensure the page doesn't end up irrevocably broken, something that will ensure that your users don't hate you.

The only way to reliably do this is through wrappers (AKA facades). A library that employs Progressive Enhancement *must* provide a dynamic API. Dynamic in that it adapts and changes based on the host environment (a browser). This is how it basically looks in code form:

	if(lib.hasFeatures('find', 'addListener', 'storeValue')) {
		var el = lib.find('.whatever');
		lib.addListener(el, "click", function() {
			lib.storeValue('key', 'value');
		});
	}

**1. Notice how remarkably similar CTM *looks* in comparison.** The difference is that the application doesn't directly interface with browser APIs. Facades provide a leaner, context-specific API that allows you to iron out bugs, all of which reliably enables Progressive Enhancement.

**2. Also note, the one-to-one mapping between what is *checked* in the condition and what is *used* by the application.** This is *vital*. If you break this rule, you are asking for trouble.

**3. There is no need for polyfills.** The library either provides the method or it doesn't, no halfway houses, no caveats.

**4. Application logic is completely decoupled from browser logic.** Something that you may have heard Nicholas Zakas talk about in many of his articles and books. Basically this is good for sanity and maintainability.

**5. In the event that Javascript is enabled and that the condition does *not* pass, the user gets the degraded experience.** In Cut The Mustard lingo, it simply doesn't cut it.

At this point some might say they don't want to know about all these browser problems, as libraries take care of this for them. They might even portray themselves as application developers, but just because responsibility is abdicated, doesn't mean the problem isn't there.

The idea of abstractions are good, the idea of several abstractions i.e. a library, is also good. But if that library is monolithic in nature, context-less, lacks feature detection and feature testing, leans on polyfills and does **not** expose a dynamic API, then ultimately you are unable to Progressively Enhance your application and your users and the business you work for will suffer for it.

At the very least, it is beneficial to be able to spot bad Javascript. Particulary the kind that doesn't even attempt to degrade gracefully in the face of danger. This way you can steer clear or at the very least be conscious of making such a decision.

## How do I build a library like this?

Explaining the details of how to build a library that conforms to the above rules is worthy of an article in it's own right, something that Peter Michaux did in 2008, no less.

I don't wish to repeat Peter's article, but it might be worth providing a little taster in how to go about doing this.

This example will also demonstrate that Progressive Enhancement is not a drag in the way of "having to support old irrelevant browsers", quite the opposite in-fact. The meaning of "dropping support for..." changes to "degrades gracefully in..." and you get the appropriate cut off for your project.

	// library.js
	var lib = {};

	// Note: use isHostMethod - Peter's article covers this
	if(document.documentElement.classList.add) {
		lib.addClass = function(el, className) {
			return el.classList.add(className);
		};
	}

And then the calling application code looks like:

	// app.js
	if(lib.addClass) {
		// some application that must provide the ability to add a class to an element in order to provide the enhanced experience

	}

Notice, that this application only enhances where the browser supports `classList` which generally speaking are cutting edge browsers, meaning that this application will degrade in IE6, IE7, IE8 and IE9. That's not a problem though, they will just get the degraded *core* experience. If you wanted to support those browsers, something completely doable then you would add another fork:

	// library.js
	var lib = {};

	// Note: use isHostMethod - Peter's article covers this
	if(document.documentElement.classList.add) {
		lib.addClass = function(el, className) {
			return el.classList.add(className);
		};
	} else if(typeof html.className === "string") {
		lib.addClass = function(el, className) {
			var re;
			if (!el.className) {
				el.className = className;
			} else {
				re = new RegExp('(^|\\s)' + className + '(\\s|$)');
				if (!re.test(el.className)) {
					el.className += ' ' + className;
				}
			}
		}
	}

You just added support for older browsers without changing your application code which is very useful. You can equally drop support in the future by deleting that fork, or even both forks if some new even better way of adding a class comes out. This way you get the benefit of a faster leaner function or library.

## Conclusion

The Real Progressive Enhancement is something that puts users first. The misunderstandings of Progressive Enhancement, when broken down piece by piece are easy to understand, but if just one of those pieces falls down, technical implementations tend to fall short of the mark.

Unfortunately this is quite common in the industry and it's the people that suffer the most, the same people that are interested in your business or content. It's just not good enough to let them endure the *fuck you* experience, they don't deserve it.

Fortunately, when the real meaning of Progressive Enhancement is understood, the execution can be implemented correctly. This allows for robust, future-friendly, backwards-compatible Javascript code. Your users and your business will appreciate it.

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