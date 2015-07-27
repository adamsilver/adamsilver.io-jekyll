---
layout: post
title:  "The Real Progressive Enhancement"
date:   2032-01-01 09:00:01
tagline: "How to avoid the fuck you experience"
categories: js
---

Progressive Enhancement is one of those things that everyone knows right? However, there are significant misunderstandings about the subject, particularly in relation to Javascript, all of which I address in this article.

> &ldquo;The problems we have with websites are ones we create ourselves&rdquo;
<br>&mdash; <cite>Motherfuckingwebsite.com</cite>

The beauty of the web is that by default, it is accessible to *everyone*. It's us developers that come along and ruin it. So with that in-mind what is the best way to describe Progressive Enhancement?

> Progressive Enhancement is the approach of providing a baseline **core** experience for everyone; and creating a better **enhanced** experience for people who use a more capable browser.

Whilst Progressive Enhanceent doesn't just pertain to Javascript, it is the aspect that developers tend to struggle with the most. We just don't seem to be able to answer:

> &ldquo;How am I meant to write Javascript in a Progressive Enhancement way?&rdquo;

This question is not *straightforward* to answer, but there are answers. Before getting to that I need to address a few important points.

## 1. Unobtrusive Javascript is not Progressive Enhancement

Placing script in external files does not, in anyway affect the ability to provide an enhanced (or core) experience.

## 2. Handling the Javascript disabled scenario is only half of the story

The majority of people have Javascript *enabled* as they don't even know what Javascript is, but even if you ignored the very valid use case of people disabling it, that does not ensure the user can reliably enjoy the enhanced experience &mdash; that experience is different for every website because every website is unique.

Some browsers don't support Javascript, some people install plugins, such as those that disable tracking &mdash; these can cause script to break i.e. when one script references another object in a *blocked* script.

Sometimes a firewall or proxy ate the script &mdash; this actually happened to me when I was building apps to be consumed on device over a mobile network. The network decided to mess with a script it thought it recognised causing Javascript problems. Using the latest iPhone with Javascript enabled had no affect on this problem. As I worked for the mobile network we got this fixed but sometimes this is out of your control, and so it pays to write Javascript in a Progressive Enhanced way.

But more importantly than any of that, the most common scenario is one where the browser simply lacks support for a given set of APIs that you wish to use (examples later on).

## 3. JS does not degrade gracefully without developer intervention (unlike HTML and CSS).

This is a very important point. Consider `<input type="email">` and `border-radius` as examples whereby HTML and CSS naturally degrade with no developer intervention.

On the other hand, when a browser tries to execute script it doesn't recognise, an error is thrown (sometimes an irrevocable one). For example try running the following code in IE8.

	var form = document.forms[0];
	form.attachEvent('submit', function() {
		window.event.returnValue = false;
		var widgets = document.getElementsByClassName('widget');
	});

This errors at line #4 because IE8 doesn't understand how to retrieve elements this way. The problem isn't that IE8 can't do this. The problem is that it breaks fatally. The user doesn't receive the enhanced experience and the user doesn't receive the core experience either.

*No*, instead they get the *fuck you* experience.

The example itself doesn't matter. The same can apply for any method in any browser. Browsers are released frequently each with their own varying level of APIs on offer, many of which contain bugs etc.

## What are others doing to solve this problem?

Some ignore the problem even exists. Typically, these developers religiously put script in external files in the name of Progressive Enhancement and we know this has no affect on the matter.

Some also abdicate responsibility by using 3rd party libraries without checking under the hood for quality. And often these libraries support a subset of browsers i.e. it's multi-browser &mdash; a sure sign that these libraries don't practice Progressive Enhancement at all.

The unfortunate people who use *other* browsers get the *fuck you* experience, often at times when it would be straightforward to provide the *core* experience.

And, when a library decides to drop support for a browser, it's those users that suffer.

> Cuts the mustard falls short

*Cuts The Mustard* (CTM) is a relatively new approach to Progressive Enhancement, one which has the premise of a reliable solution and is based on the concept of a core and an enhanced experience. However, it's technical implementation (shown below) leaves a lot to be desired.

	if(	document.querySelector && window.addEventListener && window.localStorage) {
		// bootstrap application
	}

It works by *detecting* a few *choice* browser APIs in order to *infer* that the browser is "modern", something that is impossible to determine, considering the sheer amount of new browsers being released and the fact that *new* does not necessarily mean it is the most capable browser.

Anyway, once CTM determines its modern, the JS application starts and (attempts to) provide the enhanced experience. The emphasis on *browsers* as opposed to *features* more than suggests this technique is doomed from the start. And, inference is little better than User Agent sniffing.

More specifically, CTM has the following significant issues:

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

In order to provide a core experience, it is vital that the site works without Javascript because that is the experience a user will get when Javascript *is* enabled but incapable of running for whatever reason.

Then, in order to determine that the browser can provide the enhanced experience you must detect and where necessary test *all of the features* used by your application *before* your application  uses them. This is vital in ensuring the page is not irrevocably broken.

The only way to reliably do this is through facades. A library that employs Progressive Enhancement *must* provide a dynamic API. Dynamic in that it adapts and changes based on the environment. This is how it basically looks in code form:

	if(lib.hasFeatures('find', 'addListener', 'storeValue')) {
		var el = lib.find('.whatever');
		lib.addListener(el, "click", function() {
			lib.storeValue('key', 'value');
		});
	}

**1. CTM looks remarkably similar to this solution.** The difference being that you use facades which provide many benefits, that also enable Progressive Enhancement in a reliable way.

**2. There is a 1-to-1 mapping between what is checked in the condition and what is used by the application.** This is *vital*. You break this rule and you are guaranteeing problems.

**3. There is no need for polyfills.** The library either provides the method or it doesn't, no halfway houses, no caveats.

**4. Application logic is completely decoupled from browser logic.** Something that you may have heard Nicholas Zakas talk about in many of his articles and books. Basically this is good for sanity and maintainability.

**5. In the event that Javascript is enabled and that the condition does *not* pass, the user gets the degraded experience.** Effectively the browser didn't "Cut the mustard".

Front-end developers tend to put themselves into two categories: app developers and library developers. Typically, the application developer isn't interested in building a library of any kind, let alone one that ensures Progressive Enhancement and feature detection as a cornerstone. Problem being you're only as good as the foundations of your software.

Unfortunately, you need some level of ability to spot a bad script, one that at least attempts to degrade gracefully otherwise your application is going to suffer.

Explaining the intricacies of how to build a library is not something I can put down in a few paragraphs. Fortunately, Peter Michaux with the contribution from David Mark has done an excellent job in explaining just how you build a library of functions that enable Progressive Enhancement.

Lastly, I really want to emphasise that whilst I write about this now, Peter's articles were written in 2008 and even then he talks about the fact that this practice has been known for a long time.

My hope is that the industry stops trying to produce the next shiny framework and can pull together to build a library of functions that enable the Real Progressive Enhancement to provide a core experience for all, and where possible an even better experience.

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