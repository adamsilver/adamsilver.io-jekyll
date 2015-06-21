---
layout: post
title:  "The disadvantages of Javascript polyfills"
date:   2026-01-01 09:00:01
categories: js
---

A polyfill, also known as a shim, is a user defined implementation of an API that a developer expects a browser to provide natively, normalising browser differences. As a huge proponent of the outside-in approach to development, I can see the lure to try develop web applications as if all browsers are the same. That said, attempting to tame browsers in this way produces unreliable Javascript code which in turn results in unhappy *users*.

## Augmenting host objects

Several experts for well over a decade have explained compelling reasons not to even attempt host object augmentation. Richard Cornford, David Mark and Thomas Lahn, amongst others, have all explained the pitfalls for well over a decade and Kangax published two flagship articles on the subject. Unfortunately, polyfills augment host and native objects and so this alone is reason enough to avoid them.

## Feature detection is not enough

As Peter Michaux explains in *Feature Detection: State of the art browser scripting*, the mere presence of an API is not necessarily enough to determine reliable usage. This is where feature testing comes in. Polyfills just detect the presence of an API, they do not iron out the bugs or inconsistencies. This is why facades are useful as we will see later on.

## Decoupling browser and application logic

In Maintainable Javascript Applications by Nicholas Zakas, he talks about the importance of decoupling application and browser logic. Additionally, if you choose to ignore these wise words, then application logic needs to be updated when frail browser APIs cause problems, typically when new bugs arise as new browsers are released.

## Context context context

You may not need the entire API for the component that you're building; you may not even be *able* to implement a polyfill because there's just no way to do it. This is why context is important (something that David Mark expresses frequently). What exactly does David mean by context? First understand the problem of exactly what you're trying to solve. Second, work out the leanest solution. With polyfills it's all or nothing, wherby you rarely need *all* of the API and the solution is anything but lean.

## Case study: Object.create

It doesn't take much effort to find real world examples of problematic polyfills. I did originally plan to delve into technical examples where polyfills are problematic but cut it out when I stumbled across the documentation in the ES5 Shim project &mdash; it's rather telling.

> For the case of simply "begetting" an object that inherits prototypically from another, this **should** work fine across legacy engines.

The word "should" doesn't denote confidence does it? Personally, I like to build on top of reliable foundations. As David Mark says, you're only as reliable as your lowest level functions &mdash; and so it follows in the case of polyfills, not very. It gets worse...

> The second argument is passed to Object.defineProperties which will **probably fail either silently or with extreme prejudice**.

Does any of this sound like something you want to add to your codebase? And this is just *one* of many examples. Simply put, polyfills make for unreliable foundations. Attempting to write beautiful reliable applications on top of such foundations is like trying to polish a turd.

## Enter the facade pattern

A facade, a form of wrapper, is a design pattern that normally provides a simplified interface to something more complex. This allows you to completely abstract away the differences, with the flexibility to provide a suitable solution and a simplified method signature. Inside the facade there is nothing to stop you using portions of the API, and feature testing various implementations and acting accordingly, much like Peter Michaux demonstrates in his article *Cross browser Widgets*.

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

* Why this article? The world has gone crazy for polyfills and I can see why. But the world goes crazy for McDonalds and it's bad for us. I want to explain why this seemingly popular technique to develope web applications, whilst popular, is actually a bad idea so that your software development is more reliable and in turn ensures happy users.

* Browsers are written by us humans and so it follows that browsers contain bugs. Just because an API is implemented in a browser doesn't mean it's trustworthy. Sometimes, the spec is simply misunderstood and implemented differently across browser vendors. Adding a polyfill to the mix just adds complexity in the form of another user-defined implementation.

* The main takeaway is that you can't rely on native APIs, you can't rely on your implementation of a native API and sometimes a polyfill is impossible to implement using alternative methods. e.g. polyfill attachEvent or getElementById. And this doesn't just apply to old APIs, same goes for new ones like Zakas matchMedia.

* CONSISTENCY Then there is the question of consistency. Do you want to use some polyfills and some facades. Probably not. Just use a consistent abstraction, a facade.

* The idea of browsers TODAY being okay to polyfill. Browsers come out all the time and then yesterdays modern browsers are screwed, u end up having to polyfill everything from getEBI to addListener.

* Browser software, just like web pages or any other software for that matter contains bugs. Why? Because they are written by humans and *humans* are buggy.
-->

