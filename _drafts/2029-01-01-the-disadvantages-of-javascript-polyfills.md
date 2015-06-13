---
layout: post
title:  "The disadvantages of Javascript polyfills"
date:   2026-01-01 09:00:01
categories: js
---

A polyfill can be described as a piece of code that provides the technology that you expect the browser to provide natively, flattening the API landscape. I am a huge proponent of Outside-in Development, and so the idea of flattening or normalising the browsers appears to be a great idea. In reality however, this can be very problematic, particularly due to the frailty of the Host environment, the *browser*. David Mark sums up the problem:

> "Use wrappers. Do *not* augment host objects. You don't own them and you certainly don't want to try to implement 100% of the standard
functionality (just implement what you need). Besides host objects are allowed to throw exceptions just for *reading* their properties (and some do just that in IE)."

If David's executive summary isn't quite enough juice for you, then read on as I break down some of the points.

## 1. Augmenting Host and Native objects is a bad idea

It's well known that messing with host objects [[0](#ref0)] and to a slightly lesser extent, native objects [[1](#ref1)] is an ill-advised technique that's prone to error. Polyfills rely on this technique and so they are, by their very nature, prone to error.

## 2. Implementing entire standard is very hard and sometimes unnecessary

When choosing the polyfill technique, you unfortunately paint yourself into a corner &mdash; you now have to recreate all aspects of that API. This makes the job significantly harder, perhaps impossible *and* is often unnecessary to build the feature you want. This is why context is so important. Let's explore this further with two examples.

### 2.1 A polyfill that works

`Array.prototype.forEach` is one of the easier polyfills to implement, and in short the following works:

	// If not already defined and function dependencies are available
	if(!Array.prototype.forEach && TypeError && !!Function.prototype.call) {
		// Augment with forEach
		Array.prototype.forEach = function(callback, thisArg) {
			if(typeof callback !== "function") {
				throw new TypeError(callback + " is not a function!");
			}
			var i = 0;
			var length = this.length;
			for(; i < length; i++) {
				callback.call(thisArg, this[i], i, this);
			}
		};
	}

So far so good.

### 2.2 A polyfill that doesn't work

`Object.create` is very difficult to polyfill reliably. Let's explore the issues by using the example on MDN [[2](#ref2)] as follows:

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

	// Correctly throws a error
	var myObj = Object.create(null, { a: 1 });

Notice the error that occurs. This happens because the properties argument is incorrectly formatted.

Next, find a browser that doesn't provide `Object.create` or omit the feature detection so the real API is overriden, and once again  type the following into the console:

	// Incorrectly does not throw an error
	var myObj = Object.create(null, { a: 1 });

Notice no error occurs. The error is incorrectly supressed because the polyfill isn't checking the format of the property description. You could argue that the polyfill could be edited to handle this scenario but for the moment let's note that the intelligent minds over at MDN didn't cover this and that more work needs to be done.

For the last demonstration, type the following into the console:

	// Create object defining an unwriteable `a` property
	var myObj = Object.create(null, {
		a: {
			value: 1,
			writeable: false
		}
	});

	// Assign 2 to the a property
	myObj.a = 2;

	// returns 1 when real, returns 2 when polyfilled
	myObj.a;


When attempting to assign `2` to the `a` property, this is incorrectly allowed. The real `Object.create` correctly disallows the assignment. This is just *one* of several properties that need careful consideration &mdash; `configurable`, `enumerable`, `get` and `set` are the others. This is not the only example of unreliable polyfills &mdash; there are many more [[3](#ref3)].

## 3. Avoid polyfills. Use wrappers!

Earlier, I briefly mentioned that *context* is important but what exactly do I mean by *context*? *Context* is all about understanding the problem *first*. Only then can you work out the solution. Let's explore this with two examples.

### 3.1 Cloning an object (modern browsers)

If we require the ability to clone an object, *and* it's only required to enhance the UI for *modern* browsers, then `Object.create` is a perfect candidate to solve this specific problem. See an example implementation below:

	var lib = {};
	if(Object.create) {
		lib.cloneObject = function(o) {
			return Object.create(o);
		};
	}

### 3.2 Cloning an object (all browsers)

The context of this new problem is more involved. We want to support the (progressively) enhanced experience in a broader range of browsers. A possible solution might be as follows:

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

If the browser lacks `Object.create`, the fallback is a slightly more complex/older implementation, which many browsers support. It is important to note, there is no need to recreate the entire standard and the function leans on feature detection to provide the most performant, up-to-date standards where possible.

### 3.3 Creating a new object

What if you wanted to create an object? This question is surprisingly more involved than it first appears. There are lots of options at our disposal.

	// this creates you a new object
	var myObj = {};

	// so does this
	function Blah() {};
	var myObj = new Blah();

	// and this
	var myObj = new Object();

	// and this
	var myObj = Object.create();

Each of these will create a new object, but the choice will be very different depending on what functionality you *need*. For the purposes of this demo, I am going to assume the ECMAScript 5 features that we discussed earlier are desired.

	var lib = {};
	if(Object.create) {
		lib.createObject = function(obj, props) {
			return Object.create(obj, props);
		};
	}

For browsers that provide `Object.create`, the ES5 features can be used reliably. But, and here is the interesting bit, what about browsers that don't provide `Object.create`? Nothing, the browser doesn't cut the mustard, because the feature detection doesn't pass. The user won't get the enhanced experience. This is Progressive Enhancement at its best. There is absolutely nothing wrong with that.

For completeness the calling application code is provided below. Don't worry if you are a little hazy on feature detection, feature testing and dynamic APIs &mdash; there are fantastic articles [[4](#ref4)] on this subject.

	if(lib.createObject) {
		// enhanced experience
		var myObj = lib.createObject(null, ...);
		// etc
	}

## Summary

The Host is a dynamic (and unpredictable) environment, and polyfills try to bend the rules in order to create a static environment. At best, polyfills are harder to implement. At their worst, they are impossible to implement to standard. This increases development effort significantly but even worse results in unreliable software. The answer, is of course to use wrappers. You get the all the same functionality but without the pitfalls.

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://perfectionkills.com/whats-wrong-with-extending-the-dom/">What's wrong with extending the DOM?</a></dd>
	<dt class="citation" id="ref1">[1]</dt>
	<dd><a href="http://perfectionkills.com/extending-native-builtins/">Extending native built-ins</a></dd>
	<dt class="citation" id="ref2">[2]</dt>
	<dd><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Polyfill">MDN polyfill</a></dd>
	<dt class="citation" id="ref3">[3]</dt>
	<dd><a href="https://github.com/es-shims/es5-shim#shams">ES Shim (Shams and may fail)</a></dd>
	<dt class="citation" id="ref4">[4]</dt>
	<dd><a href="http://peter.michaux.ca/articles/cross-browser-widgets">Cross-browser widgets</a></dd>
</dl>