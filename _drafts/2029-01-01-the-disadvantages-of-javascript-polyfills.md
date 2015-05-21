---
layout: post
title:  "The disadvantages of Javascript polyfills"
date:   2026-01-01 09:00:01
categories: js
---

A polyfill can be described as follows:

> "A polyfill, [...] is a piece of code (or plugin) that provides the technology that you, the developer, expect the browser to provide natively. Flattening the API landscape [...]."

This sounds like a great idea because it means developers can assume that the API is available to use for all browsers. However, this can be very problematic as David Mark states:

> "Use wrappers. Do *not* augment host objects. You don't own them and you certainly don't want to try to implement 100% of the standard
functionality (just implement what you need). Besides host objects are allowed to throw exceptions just for *reading* their properties (and some do just that in IE)."

So let's break down what David is correctly saying.

## 1. Do not augment Host objects (and Native objects)

It's well known that messing with Host objects [[0](#ref0)] and to a slightly lesser extent, Native objects [[1](#ref1)] is an ill-advised technique prone to error. Polyfills rely on this technique and so they are, by their very nature, prone to error.

## 2. Having to implement entire standard

When you chose the polyfill technique, you have painted yourself into a corner in having to recreate the entire standard. This has made the job significantly harder (perhaps impossible) and is rarely needed to meet the feature requirements. This is why context is important. Lets' take an easy example such as `Array.prototype.forEach`

	// Check to see if we should try and define it and can define it
	if(!Array.prototype.forEach && TypeError && !!Function.prototype.call) {

		// Augment with forEach
		Array.prototype.forEach = function(callback, thisArg) {
		  if(typeof(callback) !== "function") {
		    throw new TypeError(callback + " is not a function!");
		  }
		  for(var i = 0; i < this.length; i++) {
		    callback.call(thisArg, this[i], i, this)
		  }
		}
	}

Now taking an example for `Object.create` which would seem straightforward but is infinitely harder (read impossible)

	if(!Object.create) {
		Object.create = function() {

		}
	}

* if you use the real object.create it does different things. i.e. the prototype object.

## 3. Use wrappers instead

* if you use a wrapper, you won't expect the same outcome, don't have to implement the entire thing and can lean on feature detection, dynamic apis.

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://perfectionkills.com/whats-wrong-with-extending-the-dom/">What's wrong with extending the DOM?</a></dd>
	<dt class="citation" id="ref1">[1]</dt>
	<dd><a href="http://perfectionkills.com/extending-native-builtins/">Extending native built-ins</a></dd>
</dl>