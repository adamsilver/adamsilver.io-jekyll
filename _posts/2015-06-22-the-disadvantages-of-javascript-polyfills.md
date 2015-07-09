---
layout: post
title:  "The disadvantages of Javascript polyfills"
date:   2015-06-22 09:00:01
categories: js
---

A polyfill, also known as a shim, is a user defined implementation of an API that a developer expects a browser to provide natively, normalising browser differences. As a huge proponent of the outside-in approach to development, I can see the lure to try to develop web applications as if all browsers are the same. That said, this article discusses the problems you face when attempting to tame browsers in this way, which ultimately results in unreliable Javascript, unreliable web pages and of course, unhappy *users*.

## Augmenting host objects

Polyfills *must* augment host and native objects in order to plug missing gaps. The problem being that augmenting host objects and (to a slightly lesser extent) native objects is ill-advised and has been for well over a decade by experts including Richard Cornford, David Mark, Thomas Lahn and Kangax &mdash; the latter of which published two dedicated articles on the subject entitled *What's wrong with extending the DOM?* [[0](#ref0)] and *Extending native built-ins* [[1](#ref1)]. Here is a choice snippet below, but I highly advise reading the entire article:

> &ldquo;In fact, DOM extension seemed so temptingly useful [...]. But what hides behind this seemingly innocuous practice is a huge load of trouble. [...] the downsides of this approach far outweigh any benefits.&rdquo;

## Feature detection is not enough

As Peter Michaux demonstrates in *Feature Detection: State of the art browser scripting* [[2](#ref2)], the mere presence of an API is not necessarily enough to determine reliable usage. This is where feature *testing* comes in. Polyfills *tend* to just detect the presence of an API; they do not iron out the bugs or inconsistencies found across the breadth of browsers; even if they did, they would have to override the original, whereby the override may contain a reference to the original &mdash; a dangerous and unnecessary way to go. This is why facades are useful as we will see later on.

## Decoupling browser and application logic

As Nicholas Zakas presents in *Scalable JavaScript Application Architecture* [[3](#ref3)], it is important to decouple application and browser logic. He states:

> &ldquo;Application logic should be written one way for all browsers in order to keep the code maintainable. If you’re using native APIs in your application logic, you can’t help but know what browser is being used because you need to account for browser differences. That means your application logic will always need to be updated as new browsers and new browser versions are released. **That’s a recipe for disaster**&rdquo;.

## Context context context

You may not need the full API to solve your problem; you may not even be *able* to implement a polyfill because there's just no way to do it. This is why context is important, which is something Javascript expert David Mark expresses frequently. What exactly does David mean by context? You would have to ask David to be completely sure but I will hazard a guess that, *first* it's vital to understand the problem of exactly what you're trying to solve. Then, *second*, implement an appropriate solution for said problem &mdash; specifically don't do *more* than solve the problem (YAGNI). This seems sensible doesn't it? That's because it is. With polyfills it's all or nothing, whereby you rarely need *all* of the API and the solution is anything but lean.

## Caveats

It doesn't take much effort to find examples of problematic polyfills. I did originally plan to demonstrate some technical problems myself, but when I stumbled across the documentation in the *ES5 Shim* [[4](#ref4)] project, I found that to be very telling all by itself. In describing the `Object.create` polyfill it states:

> &ldquo;For the case of simply "begetting" an object that inherits prototypically from another, this **should** work fine across legacy engines.&rdquo;

The word "should" doesn't instill confidence does it? Personally, I like to build on top of reliable foundations. As David Mark says, you're only as reliable as your lowest level function(s). So in the case of polyfills that would be, not very. Unfortunately, it continues:

> &ldquo;The second argument is passed to Object.defineProperties which will **probably fail either silently or with extreme prejudice**.&rdquo;

Does any of this sound like something you want to add to your codebase? I would hope not. Providing code for your team to use, whereby they can't reliably use the fully exposed API without severe recourse, can only be interpreted as a bad idea. And it should go without saying that it doesn't matter how good the application code is on top of these foundations, as the saying goes, you're simply polishing a turd.

## What to do instead?

A facade, a form of wrapper, is a design pattern that normally provides a simplified interface to something more complex. This allows you to completely abstract away the differing browser implementations and bugs, with the flexibility to provide a suitable solution and a simplified method signature. Inside the facade there is nothing to stop you using portions of the API, and feature testing various implementations and acting accordingly, much like Peter Michaux demonstrates in his other brilliant article *Cross browser Widgets* [[5](#ref5)].

Cloning an object is pertinent to this article because `Object.create` is a useful API to solve this problem. If you just wanted to support modern browsers i.e ones that provide `Object.create`, then an implementation might be as follows:

	var lib = {};
	if(Object.create) {
		lib.cloneObject = function(obj) {
			return Object.create(obj);
		};
	}

Note there is only one argument. This facade uses a smaller part of an API, exposing a simpler method signature creating a lean solution to our problem in the process. What about browsers lacking `Object.create`? Simply add a second fork:

	// Code credited to David Mark. Thanks.
	var lib = {};
	if(Object.create) {
		lib.cloneObject = function(obj) {
			return Object.create(obj);
		};
	} else {
		lib.cloneObject = (function() {
			var Fn = function() {};
			return function(obj) {
				Fn.prototype = obj;
				return new Fn();
			};
		})();
	}

The context of the problem changed; it got a little harder &mdash;  but the implementation is still lean and method signature still what we need. What we most certainly didn't need to do, was to worry about recreating `Object.create` in its entirey.

With that said, what if you did need the full functionality this API can provide? Well you would only need two simple edits: change the name of the function to be appropriate and expand the method signature to allow for property descriptors:

	var lib = {};
	if(Object.create) {
		lib.createObject = function(obj, props) {
			return Object.create(obj, props);
		};
	}

But what about browsers lacking `Object.create`? Nothing happens. The user gets the degraded experience as the browser doesn't cut the mustard. This is the very essence of Progressive Enhancement and why it is so important in producing reliable front-end code.

## Summary

At first polyfills seem like a great idea. Having explored the intricacies of this technique, it's clear that at best, polyfills are harder to implement and cause application and browser logic to be tightly coupled &mdash; which is costly. At their worst they come with highly problematic caveats that cause pain for the developer &mdash; ultimately resulting in unreliable software and unhappy users. The answer is to use facades, enabling the abstracting away of complexity into reliable and lean software &mdash; every developers dream.

## Citations

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://perfectionkills.com/whats-wrong-with-extending-the-dom/">What's wrong with extending the DOM?</a></dd>
	<dt class="citation" id="ref1">[1]</dt>
	<dd><a href="http://perfectionkills.com/extending-native-builtins/">Extending native built-ins</a></dd>
	<dt class="citation" id="ref2">[2]</dt>
	<dd><a href="http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting">Feature Detection: State of the art browser scripting</a></dd>
	<dt class="citation" id="ref3">[3]</dt>
	<dd><a href="https://www.youtube.com/watch?v=vXjVFPosQHw">Scalable JavaScript Application Architecture</a></dd>
	<dt class="citation" id="ref4">[4]</dt>
	<dd><a href="https://github.com/es-shims/es5-shim">ES Shim readme: see "Shams" and "May fail" sections</a></dd>
	<dt class="citation" id="ref5">[5]</dt>
	<dd><a href="http://peter.michaux.ca/articles/cross-browser-widgets">Cross-browser widgets</a></dd>
</dl>

<!--

* ADDED IMPLEMENTATION Just because an API is implemented in a browser doesn't mean it's trustworthy. Sometimes, the spec is simply misunderstood and implemented differently across browser vendors. Adding a polyfill to the mix just adds complexity in the form of another user-defined implementation.

* CONSISTENCY Then there is the question of consistency. Do you want to use some polyfills and some facades. Probably not. Just use a consistent abstraction, a facade.

-->