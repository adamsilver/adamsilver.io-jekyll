---
layout: post
title:  "The disadvantages of Javascript polyfills"
date:   2026-01-01 09:00:01
categories: js
---

A polyfill, also known as a shim, attempts to level the browser playing field, by implementing an API directly when it isn't natively provided by the browser. The popularity of polyfills seems to have arisen due to various proclamations such as "You don't even need a library anymore, you can just use the APIs directly". One reason for this is due to browsers providing APIs such as `document.getElementsByClassName()` as well as many others. Another reason is that older browsers are seeing less usage (shock) and so it appears some of the problems have gone away. Strangely, if old browsers are irrelevant (they are not) and new browsers have got everything we need (they don't), then why the need for polyfills at all?

The thing is, just because these APIs exist in the modern browsers of today, it most certainly does *not* mean that polyfills are the way to go. Infact polyfills most certainly are **not** the way to go. Also, the point about older browsers is silly. Various different (versions of) browsers are released daily. And just because developers want to drop support for a browser doesn't mean your users want to (or are able to) upgrade their browser.

But why is *now* in particlular, a good time to use APIs directly? The answer is that it isn't. Old browsers were once modern and *they* had the latest and greatest APIs. In anycase, it was much easier to polyfill back then (when nobody did) because there were less browsers to keep tabs on. Today, there are many *more* browsers, so polyfilling is asking for more trouble than ever before and this is only getting *harder*.

Browsers, like websites, like all software, contain bugs. This is because it's written by your fellow human. Just because it's a native API doesn't mean it can be relied upon. Sometimes, the spec is just misunderstood and implemented differently across browser vendors. Relying on a browser implementation is no better than relying on your own implementation, and most certainly can't forgo proper feature *testing*.

Polyfills by their very nature rely on host and native object augmentation which has been ill-advised for longer than I have been developing for the web (approx. 15 years). If you're unaware of this fact, please make it a point to read the links cited at the bottom of this article.

Furthermore, you may not need the entire API for the component that you're building; you may not even be *able* to implement a polyfill because there's just no way to do it. This is why context is important (something that David Mark express frequently). What exactly does David mean by context? As David's not writing this, you will just have to go by my personal view on this. Firstly, understand and define the problem and secondly, work out the leanest solution. With polyfills it's all or nothing, wherby you rarely need *all* of the API and the solution is anything but lean.

## Case study: Polyfilling Object.create

As an example, `Object.create` seems like a rather straightforward API to polyfill but it's uncessarily painful. Let me quote the ES5 shim readme.

> For the case of simply "begetting" an object that inherits prototypically from another, this should work fine across legacy engines.

Notice *should*. I really like to build upon solid foundations. To quote David Mark - you're only as reliable as your lowest level function. Then the readme continues with a warning:

> The second argument is passed to Object.defineProperties which will probably fail either silently or with extreme prejudice.

Does any of this sound like something you want to add to your technology stack? And this is just *one* example. There are many, many others.

Polyfills just don't give you enough protection from underlying browser differences. Additionally, you really don't want your application logic having knowledge of browser implementations. This is why abstractions are a positive thing. Enter facades.

## Facades. That's better.

A facade (a form of wrapper) is a design pattern that creates a different interface for a feature. The goal of a facade is to abstract away some underlying interface so that you don't need to access it directly. All interaction goes through the facade, which allows you to manipulate the operation of the underlying functionality as necessary.

Using a facade allows you to completely abstract away the differences, with the flexibility to provide a solution relevant to the context of your problem with an alternative better, simpler method signature. Inside the facade there is nothing to stop you using portions of the API, and feature testing various implementations and acting accordingly based on the tests [0]. Acting accordingly might be bailing (not enhancing) or fixing.

## Case study: Facade for cloning an object

If we require the ability to clone an object, *and* it's only required to enhance the UI for *modern* browsers, then `Object.create` is a perfect candidate to solve this specific problem. See an example implementation below:

	var lib = {};
	if(Object.create) {
		lib.cloneObject = function(o) {
			return Object.create(o);
		};
	}

What if wee want to support the (progressively) enhanced experience in a broader range of browsers. A possible solution might be as follows:

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

If the browser lacks `Object.create`, the fallback is a slightly more complex (and older) implementation, which many more browsers support. Also take note that there is no need to recreate the entire standard. So in context of the problem this works, and works *reliably*.



===================

TODO:

* Change facade wording etc pla

### 3.3 Creating a new object

What if you wanted to create an object? This question is surprisingly more involved than it first appears. There are a lot of options at our disposal.

	// this creates you a new object
	var myObj = {};

	// so does this
	function Blah() {};
	var myObj = new Blah();

	// and this
	var myObj = new Object();

	// and this
	var myObj = Object.create();

Each of these will create a new object, but the choice will be very different depending on context. For the purposes of this demo, I am going to assume the ECMAScript 5 features that we discussed earlier are desired and necessary.

	var lib = {};
	if(Object.create) {
		lib.createObject = function(obj, props) {
			return Object.create(obj, props);
		};
	}

For browsers that provide `Object.create`, the ES5 features can be used reliably. But, and here is the interesting bit, what about browsers that don't provide `Object.create`? Nothing! The browser doesn't cut the mustard, because the feature detection doesn't pass. The user won't get the enhanced experience. This is Progressive Enhancement at its best. There is absolutely nothing wrong with that.
For completeness the code for the calling application is provided below:

	if(lib.createObject) {
		// enhanced experience
		var myObj = lib.createObject(null, ...);
		// etc
	}



## Summary

The host is a dynamic and unpredictable environment, and polyfills try to bend the rules in order to create a static environment. At best, polyfills are harder to implement. At their worst, they are impossible to implement to standard. This increases development effort significantly but even worse, results in unreliable software. The answer, is of course to use wrappers. You get all the same functionality but without the pitfalls.

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://perfectionkills.com/whats-wrong-with-extending-the-dom/">What's wrong with extending the DOM?</a></dd>
	<dt class="citation" id="ref1">[1]</dt>
	<dd><a href="http://perfectionkills.com/extending-native-builtins/">Extending native built-ins</a></dd>
	<dt class="citation" id="ref2">[2]</dt>
	<dd><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Polyfill">MDN Object.create polyfill</a></dd>
	<dt class="citation" id="ref3">[3]</dt>
	<dd><a href="https://github.com/es-shims/es5-shim">ES Shim readme: see "Shams" and "May fail" sections</a></dd>
	<dt class="citation" id="ref4">[4]</dt>
	<dd><a href="http://peter.michaux.ca/articles/cross-browser-widgets">Cross-browser widgets</a></dd>
</dl>


<!--

## What to do instead?





	5. Break down the bad points
		5.2 implementing entire standard
		5.3 checking existence of an API is not always enough

	When you use native JavaScript APIs directly, you are placing a bet. That bet is that all browsers implement the API exactly the same. You're banking your future development time on it. And if a browser implements that API incorrectly, what is your course of action? How quickly can you roll out a fix to your users? You'll start writing workarounds and browser detection, and all of a sudden your code isn't as straightforward to maintain. And sometimes the differents in the browsers are so great that a simple workaround won't do.

	Where there's a choice between facades and polyfills, I always choose the facade. The reason is that polyfills suffer from the same downsides as native APIs. They represent yet another implementation of the same functionality.

	The main takeaway is that you can't rely on native APIs, you can't rely on your implementation of a native API and sometimes a polyfill is impossible to implement using alternative methods. e.g. polyfill attachEvent or getElementById. And this doesn't just apply to old APIs, same goes for new ones like Zakas matchMedia.

	Then there is the question of consistency. Do you want to use some polyfills and some facades. Probably not. Just use a consistent abstraction, a facade.



	On the other hand, using a wrapper, or a facade,

	So in short, don't stop abstracting these browser differences away. New APIs are great, make use of them, detect, test and write a facade, enhance from there. Don't exacabate the problem of browser bugs by increasing the chance of creating and working around more of them.

	Also, application logic shouldn't be aware of the browser. If you use polyfills then it has to be aware of browser problems and mitigate against new browsers being released which happens all the time. Abstract into a library, means your app logic never has to change.

-->








