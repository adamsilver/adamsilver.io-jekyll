---
layout: post
title:  "The disadvantages of Javascript polyfills"
date:   2026-01-01 09:00:01
categories: js
---

A polyfill can be described as follows:

> "A polyfill, [...] is a piece of code [...] that provides the technology that you, the developer, expect the browser to provide natively. Flattening the API landscape [...]."

This sounds like a great idea because it means developers can assume that the API is available to use for all browsers. However, this can be very problematic as David Mark states:

> "Use wrappers. Do *not* augment host objects. You don't own them and you certainly don't want to try to implement 100% of the standard
functionality (just implement what you need). Besides host objects are allowed to throw exceptions just for *reading* their properties (and some do just that in IE)."

So let's break down what David is correctly saying.

## 1. Augmenting Host and Native objects is a bad idea

It's well known that messing with host objects [[0](#ref0)] and to a slightly lesser extent, native objects [[1](#ref1)] is an ill-advised technique that's prone to error. Polyfills rely on this technique and so they are, by their very nature, prone to error.

## 2. Over exertion in having to implement entire standard

When you choose the polyfill technique, you paint yourself into a corner by having to recreate the entire standard. This has made the job significantly harder, perhaps impossible *and* is often unnecessary to build the feature you want. This is why context is so important. Let's explore this further with two examples...

### 2.1 Easy example: `Array.prototype.forEach`

`Array.prototype.forEach` is one of the easier polyfills to write, and in short the following is a working a solution:

	// If not already defined and function dependencies are available
	if(!Array.prototype.forEach && TypeError && !!Function.prototype.call) {
		// Augment with forEach
		Array.prototype.forEach = function(callback, thisArg) {
			if(typeof(callback) !== "function") {
				throw new TypeError(callback + " is not a function!");
			}
			for(var i = 0; i < this.length; i++) {
				callback.call(thisArg, this[i], i, this);
			}
		};
	}

### 2.2 Impossible example: `Object.create`

This method is impossible to polyfill reliably. Taking MDN [[2](#ref2)] as an example we can look deeper at the issue.

	// If not already defined
	if (typeof Object.create != 'function') {
		// Production steps of ECMA-262, Edition 5, 15.2.3.5
		// Reference: http://es5.github.io/#x15.2.3.5
		Object.create = (function() {
		    // To save on memory, use a shared constructor
		    function Temp() {}

		    // make a safe reference to Object.prototype.hasOwnProperty
		    var hasOwn = Object.prototype.hasOwnProperty;

			return function (O) {
				// 1. If Type(O) is not Object or Null throw a TypeError exception.
				if (typeof O != 'object') {
					throw TypeError('Object prototype may only be an Object or null');
				}

				// 2. Let obj be the result of creating a new object as if by the
				// expression new Object() where Object is the standard built-in
				// constructor with that name
				// 3. Set the [[Prototype]] internal property of obj to O.
				Temp.prototype = O;

	      		var obj = new Temp();

	      		Temp.prototype = null; // Let's not keep a stray reference to O...

				// 4. If the argument Properties is present and not undefined, add
				// own properties to obj as if by calling the standard built-in
				// function Object.defineProperties with arguments obj and
				// Properties.
				if (arguments.length > 1) {
					// Object.defineProperties does ToObject on its first argument.
					var Properties = Object(arguments[1]);
					for (var prop in Properties) {
				  		if (hasOwn.call(Properties, prop)) {
				    		obj[prop] = Properties[prop];
				  		}
					}
				}

				// 5. Return obj
				return obj;
			};
	  })();
	}

To demonstrate the problem, open your favourite browser, one that provides `Object.create`. Type the following into the console:

	var myObj = Object.create(null, { a: 1 });

Notice the error that occurs, which is because the properties argument is in an incorrect format; key-value pairs are not enough.

Next, find a browser that doesn't provide `Object.create` or omit the feature detection and override the original. Type the following again into the console:

	var myObj = Object.create(null, { a: 1 });

Notice there is no error because the polyfill allows this. You could probably guard against this so add this to your backlog because it's only a polyfill if it identically mimics the real thing.

Finally, type the following into the console:

	var myObj = Object.create(null, {
		a: {
			value: 1,
			writeable: false
		}
	});

	myObj.a = 2;

	// returns 1 when real, returns 2 when polyfilled
	myObj.a;

We have defined a property that is *not* writeable. And yet, when `2` is assigned to `myObj.a` it is accepted. The real implementation does not accept the assignment. This should be enough to demonstrate that polyfills are not a good cross-browser [[3](#ref3)] solution.

## 3. Avoid polyfills. Use wrappers!

So as we said before *context* is important. What does context mean? It means, to ask the question *what functionality do we require?* and *then* defining an appropriate *context-specific* solution. As an example, let's say you want the ability to clone an object. `Object.create` provides this for you. An implementation might be as follows:

	var lib = {};
	if(Object.create) {
		lib.cloneObject = function(o) {
			return Object.create(o);
		};
	}

Any browser providing `Object.create` will reliably clone you an object. For completeness, if you wanted to provide the functionality to browsers that don't provide `Object.create` an implementation might be as follows:

	var lib = {};
	if(Object.create) {
		lib.cloneObject = function(o) {
			return Object.create(o);
		};
	} else {
		lib.cloneObject = (function() {
			var Fn = function() {};

			return function(o) {
				Fn.prototype = o;
				return new Fn();
			};
		})();
	}

## Summary

Polyfills *seem* like such a good idea, to use the APIs as they were intented. But we live in a world where there are a great many browsers and the accompanying host environments are unpredictable. At best, Polyfills are harder to implement than cherry picking *just* what you need based on your context. And, at worst, they are impossible to implement reliably making development much harder. Fortunately, wrappers provide the functionality you need without the pitfalls.

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://perfectionkills.com/whats-wrong-with-extending-the-dom/">What's wrong with extending the DOM?</a></dd>
	<dt class="citation" id="ref1">[1]</dt>
	<dd><a href="http://perfectionkills.com/extending-native-builtins/">Extending native built-ins</a></dd>
	<dt class="citation" id="ref2">[2]</dt>
	<dd><a href="http://perfectionkills.com/extending-native-builtins/">MDN polyfill</a></dd>
	<dt class="citation" id="ref3">[3]</dt>
	<dd><a href="/articles/reintroducing-cross-browser-scripting/">Reintroducing Cross-browser scripting</a></dd>
</dl>
