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

## Augmenting Host and Native objects

It's well known that messing with host objects [[0](#ref0)] and to a slightly lesser extent, native objects [[1](#ref1)] is an ill-advised technique that's prone to error. Polyfills rely on this technique and so they are, by their very nature, prone to error.

## Implementing entire standard

When you choose the polyfill technique, you paint yourself into a corner by having to recreate the entire standard. This has made the job significantly harder (perhaps impossible) and is rarely needed to meet the feature requirements. This is why context is important.

### Polyfill implementation for `Array.prototype.forEach`

In short, this works.

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

### Polyfill implementation for `Object.create`

This method is impossible to polyfill reliably, but let's take MDN's stab at it:

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

So to demonstrate the problem, open your favourite browser -- one that provides `Object.create`. Type the following into the console:

	var myObj = Object.create(null, { a: 1 });

Notice the error that occurs, which is because the properties argument is *more* than just key-value pairs.

Now, either find a browser that doesn't provide `Object.create` or omit the feature detection and override the original. Type the following again into the console:

	var myObj = Object.create(null, { a: 1 });

Notice there is no error because the polyfill allows this. This might be able to be guarded against but let's do one more anyway:

	var myObj = Object.create(null, {
		a: {
			value: 1,
			writeable: false
		}
	});

	myObj.a = 2;

	// returns 1 when real, returns 2 when polyfilled
	myObj.a;

This is scratching the surface of the problems with polyfills but hopefully serves to show that not only are they sisyphean in nature but they require a lot more effort.

## Using wrappers

Back to context. It might well be that you just wanted the ability to clone with `Object.create` provides nicely. This would be much easier and perfectly reliable as follows:

	var cloneObject;
	if(Object.create) {
		cloneObject = function(o) {
			return Object.create(o);
		};
	} else {
		cloneObject = (function() {
			var Fn = function() {};

			return function(o) {
				Fn.prototype = o;
				return new Fn();
			};
		})();
	}

## TODO:

* Summary

* if you use a wrapper, you won't expect the same outcome, don't have to implement the entire thing and can lean on feature detection, dynamic apis.

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://perfectionkills.com/whats-wrong-with-extending-the-dom/">What's wrong with extending the DOM?</a></dd>
	<dt class="citation" id="ref1">[1]</dt>
	<dd><a href="http://perfectionkills.com/extending-native-builtins/">Extending native built-ins</a></dd>
</dl>
