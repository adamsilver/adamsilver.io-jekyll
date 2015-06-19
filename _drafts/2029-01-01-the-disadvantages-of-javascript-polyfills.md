---
layout: post
title:  "The disadvantages of Javascript polyfills"
date:   2026-01-01 09:00:01
categories: js
---

A polyfill, also known as a shim, attempts to level the browser playing field, by implementing an API directly when it isn't natively provided by the browser. The popularity of polyfills seems to have arisen due to various "industry" announcements such as "You don't even need a library anymore, you can just use APIs directly". One reason for this is due to browsers providing APIs such as `document.getElementsByClassName()` as well as many others. Another reason is that older browsers are seeing less usage (unsurprisingly) and so it appears some of the problems have gone away. Strangely, if old browsers are irrelevant (they are not) and new browsers have got everything we need (they don't), then why the need for polyfills at all?

The thing is, just because these APIs exist in today's modern browsers, it doesn't mean they are a good idea. In fact they are most certainly *not* a good idea. Also, the point about older browsers is silly. Browsers (or versions of) are released daily. And just because *developers* want to drop support for a browser doesn't mean your users take any interest in upgrading their browser or are event able to do so if they so desired. But I digress.

Why though, is *now* in particlular, a good time to use APIs directly? The answer is that it isn't. Old browsers were once modern and *they* had the latest and greatest APIs. In anycase, it was much easier to polyfill back then, when nobody did might I add, because there were less browsers to keep tabs on. Today, there are many *more* browsers, so polyfilling is asking for more trouble than ever before and this is only getting *harder*.

Browsers are written by us humans and so it follows that browsers contain bugs. Just because an API is implemented in a browser doesn't mean it's trustworthy. Sometimes, the spec is simply misunderstood and implemented differently across browser vendors. Adding a polyfill to the mix just adds complexity in the form of another user-defined implementation.

Polyfills by their very nature rely on host and native object augmentation which has been ill-advised for longer than I have been developing for the web (approx. 15 years). If you're unaware of this fact, make it a point to read the links cited at the bottom of this article.

Furthermore, you may not need the entire API for the component that you're building; you may not even be *able* to implement a polyfill because there's just no way to do it. This is why context is important (something that David Mark expresses frequently). What exactly does David mean by context? First understand the problem of exactly what you're trying to solve. Second, work out the leanest solution. With polyfills it's all or nothing, wherby you rarely need *all* of the API and the solution is anything but lean.

## Implementating an Object.create polyfill

As an example, `Object.create` seems like a rather straightforward API to polyfill but it's uncessarily painful. The ES5 Shim project *readme* file is rather telling.

> For the case of simply "begetting" an object that inherits prototypically from another, this should work fine across legacy engines.

Notice the *should* in that! Personally, I like to build upon solid foundations, and to quote David Mark - you're only as reliable as your lowest level function; so in this case, not very. It continues...

> The second argument is passed to Object.defineProperties which will probably fail either silently or with extreme prejudice.

Does any of this sound like something you want to add to your codebase? And this is just *one* of many examples. Simply put, polyfills make your life harder, not better.

Also, application logic shouldn't be concerned with different browser issues. Using polyfills goes against this sound principle and is now something to maintain each time a new browser is released. This is why myself, and many others laud the use of wrappers.

## Use a facade instead!

A facade, a form of wrapper, is a design pattern that normally provides a simplified interface to something more complex. Using a facade allows you to completely abstract away the differences, with the flexibility to provide a solution relevant to the context of your problem with an alternative better and simpler method signature. Inside the facade there is nothing to stop you using portions of the API, and feature testing various implementations and acting accordingly enhancing the experience or not [0].

Cloning an object is a pertinent example for this article because `Object.create` is a useful API to solve this problem. If you just wanted to support modern browsers (i.e ones that provide `Object.create`) then an implementation might be as follows:

	// namespace
	var lib = {};

	// if the browser supports Object.create
	if(Object.create) {

		// define a cloneObject function
		lib.cloneObject = function(o) {
			// return cloned object
			return Object.create(o);
		};
	}

Note: No second argument is necessary and so the method signature and implementation is lean. Just what we need in this context.

What about older browsers (i.e. ones lacking `Object.create`)? This is where feature detection comes in. A possible implementation is as follows:

	// namespace
	var lib = {};

	// this fork is the same as previous
	if(Object.create) {
		lib.cloneObject = function(o) {
			return Object.create(o);
		};
	// for older browsers lacking Object.create
	} else {
		// lean on constructors and their prototype
		// to clone an object
		lib.cloneObject = (function() {
			var Fn = function() {};
			return function(o) {
				Fn.prototype = o;
				return new Fn();
			};
		})();
	}

So the context of the problem changed slightly, but the complexity is abstracted away and is still lean. And, there is no need to implement the entirety of `Object.create` either.

But what if you did really want to use the second argument that `Object.create` enables? An implementation might be as follows:

	// namespace
	var lib = {};

	// if browser supports it
	if(Object.create) {
		// define a function that returns a new object
		lib.createObject = function(obj, props) {
			return Object.create(obj, props);
		};
	}

But, and here is the interesting bit, what about browsers that don't provide `Object.create`? Nothing! The browser doesn't cut the mustard, because the feature detection doesn't pass. The user won't get the enhanced experience. This is Progressive Enhancement at its best.

## Summary

The host is a dynamic and unpredictable environment, and polyfills try to bend the rules in order to create a static environment. At best, polyfills are harder to implement. At their worst, they are impossible to implement to standard. This increases development effort significantly but even worse, results in unreliable software. The answer, is of course to use wrappers. You get all the same functionality but without the pitfalls.

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://perfectionkills.com/whats-wrong-with-extending-the-dom/">What's wrong with extending the DOM?</a></dd>
	<dt class="citation" id="ref1">[1]</dt>
	<dd><a href="http://perfectionkills.com/extending-native-builtins/">Extending native built-ins</a></dd>
	<dt class="citation" id="ref3">[3]</dt>
	<dd><a href="https://github.com/es-shims/es5-shim">ES Shim readme: see "Shams" and "May fail" sections</a></dd>
	<dt class="citation" id="ref4">[4]</dt>
	<dd><a href="http://peter.michaux.ca/articles/cross-browser-widgets">Cross-browser widgets</a></dd>
</dl>

<!--

* The main takeaway is that you can't rely on native APIs, you can't rely on your implementation of a native API and sometimes a polyfill is impossible to implement using alternative methods. e.g. polyfill attachEvent or getElementById. And this doesn't just apply to old APIs, same goes for new ones like Zakas matchMedia.

* CONSISTENCY Then there is the question of consistency. Do you want to use some polyfills and some facades. Probably not. Just use a consistent abstraction, a facade.

-->

