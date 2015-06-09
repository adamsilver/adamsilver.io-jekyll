---
layout: post
title:  "The disadvantages of Javascript polyfills"
date:   2026-01-01 09:00:01
categories: js
---

A polyfill can be described as a piece of code that provides the technology that you expect the browser to provide natively, flattening the API landscape. This *sounds* wonderful - include polyfill, utilise API as if all browsers are the same. However, this can be very problematic as David Mark rightly states:

> "Use wrappers. Do *not* augment host objects. You don't own them and you certainly don't want to try to implement 100% of the standard
functionality (just implement what you need). Besides host objects are allowed to throw exceptions just for *reading* their properties (and some do just that in IE)."

So let's break down the points David raises.

## 1. Augmenting Host and Native objects is a bad idea

It's well known that messing with host objects [[0](#ref0)] and to a slightly lesser extent, native objects [[1](#ref1)] is an ill-advised technique that's prone to error. Polyfills rely on this technique and so they are, by their very nature, prone to error.

## 2. Over exertion in implementing entire standard

When choosing to polyfill, you paint yourself into a corner by having to recreate the entire standard. This makes the job significantly harder, perhaps impossible *and* is often unnecessary to build the feature you want. This is why context is so important. Let's explore this further with two examples...

### 2.1 Easy example: `Array.prototype.forEach`

`Array.prototype.forEach` is one of the easier polyfills to write, and in short the following is a working a solution:

	// If not already defined and function dependencies are available
	if(!Array.prototype.forEach && TypeError && !!Function.prototype.call) {
		// Augment with forEach
		Array.prototype.forEach = function(callback, thisArg) {
			if(typeof callback !== "function") {
				throw new TypeError(callback + " is not a function!");
			}
			for(var i = 0; i < this.length; i++) {
				callback.call(thisArg, this[i], i, this);
			}
		};
	}

### 2.2 Hard example: `Object.create`

`Object.create` is impossible to polyfill reliably. Let's explore the issues by using the example on MDN [[2](#ref2)] as follows:

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

Unfortunately, the error is supressed because the polyfill isn't checking for the format of the second argument. You could guard against this so be sure to this to your technical backlog because it's only a polyfill if it identically mimics the real thing.

For the last demonstration, type the following into the console:

	var myObj = Object.create(null, {
		a: {
			value: 1,
			writeable: false
		}
	});

	myObj.a = 2;

	// returns 1 when real, returns 2 when polyfilled
	myObj.a;

We have defined `a` that is *not* writeable; when we try to assign `2` to the property it is incorrectly allowed - the real implementation does not allow the assignment. Remember there are other properties that need consideration: `configurable`, `enumerable`, `get` and `set`. This should be enough to demonstrate that polyfills are not a good cross-browser solution.

## 3. Avoid polyfills. Use wrappers!

So as we said before *context* is important but what exactly does context mean? It means, to ask the question of *what functionality do we require?* and *then* defining an appropriate *context-specific* solution.

Imagine you wanted a function to clone an object. In this case `Object.create` is a useful API to create a `cloneObject` function:

	var lib = {};
	if(Object.create) {
		lib.cloneObject = function(o) {
			return Object.create(o);
		};
	}

Any browser providing `Object.create` will reliably clone you an object. For completeness and for browsers without `Object.create` the following implementation is suitable:

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

Now if the browser lacks `Object.create` the implementation falls back to a more long winded method which works in a very broad range of browers. There is no need to recreate the entire standard and the function leans on feature detection to provide the most performant, up-to-date standards where possible.

## Summary

At first, polyfills *seem* like a good idea in order to use the APIs as they were intented. But we live in a world where there are a great many browsers and the accompanying host environments are unpredictable. At best, polyfills are harder to implement. At their worst, they are impossible to implement reliably, making development much harder. Fortunately, wrappers provide the functionality you need without the pitfalls.

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://perfectionkills.com/whats-wrong-with-extending-the-dom/">What's wrong with extending the DOM?</a></dd>
	<dt class="citation" id="ref1">[1]</dt>
	<dd><a href="http://perfectionkills.com/extending-native-builtins/">Extending native built-ins</a></dd>
	<dt class="citation" id="ref2">[2]</dt>
	<dd><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Polyfill">MDN polyfill</a></dd>
</dl>