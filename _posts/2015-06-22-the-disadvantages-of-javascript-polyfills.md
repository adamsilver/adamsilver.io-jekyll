---
layout: post
title:  "The disadvantages of Javascript polyfills"
date:   2015-06-22 09:00:01
categories: js polyfills
description: Javascript polyfills are ever-present in the front end industry, but they are very problematic and unnecessary.
---

A polyfill, also known as a shim, is a user-defined implementation of an API that some browsers provide natively, normalising browser differences.

As a proponent of [outside-in development](/articles/developing-templates-using-an-outside-in-approach), I see the lure of trying to develop as if all browsers are the same. The problem is that [browsers are not the same](/articles/browsers-are-different-but-so-what/). And tackling the "problem" with a polyfill is problematic. Here's why:

## 1. They augmenting host objects

Polyfills augment host and native objects. Experts such as Richard Cornford, David Mark, Thomas Lahn and Kangax have told us this is a bad idea. The latter of which published two articles on the subject: 

- [What's wrong with extending the DOM?](http://perfectionkills.com/whats-wrong-with-extending-the-dom/)
- [Extending native built-ins](http://perfectionkills.com/extending-native-builtins/)

Here's a choice snippet:

> &ldquo;DOM extension seemed so temptingly useful [...]. But what hides behind this seemingly innocuous practice is a huge load of trouble. [...] the downsides of this approach far outweigh any benefits.&rdquo;

## 2. Feature detection is not enough

As Peter Michaux shows us in [Feature Detection: State of the art browser scripting](http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting), the mere presence of an API is not always enough to determine its reliablity. This is where feature *testing* comes in.

Polyfills tend to just detect the presence of an API. They don't iron out the bugs or inconsistencies found in different browsers. Even if they did, they would have to override the original, whereby the override may contain a reference to it. This is dangerous and unnecessary. Instead, use facades, which we'll discuss shortly.

## 3. They intertwine browser and application logic

As Nicholas Zakas says in [Scalable JavaScript Application Architecture](https://www.youtube.com/watch?v=vXjVFPosQHw), it is important to decouple application and browser logic. He says:

> &ldquo;Application logic should be written one way for all browsers in order to keep the code maintainable. If you’re using native APIs in your application logic, you can’t help but know what browser is being used because you need to account for browser differences. That means your application logic will always need to be updated as new browsers and new browser versions are released. **That’s a recipe for disaster**&rdquo;.

## 4. We rarely need need the full API

We may not need the full API to solve the problem. We may not even be *able* to implement a polyfill because there's just no way to do so. This is why context is important.

We should first look to understand the problem precisely. And then solve *that* problem only. We rarely need *all* of an API, which I'll demonstrate in a moment. With polyfills it's all or nothing.

## 5. They come with caveats

It takes little effort to find problematic polyfills. Take the [ES5 Shim](https://github.com/es-shims/es5-shim) documentation. In describing the `Object.create` polyfill it states:

> &ldquo;For the case of simply "begetting" an object that inherits prototypically from another, this **should** work fine across legacy engines.&rdquo;

The word *should* doesn't instill confidence. We should, of course, build atop of reliable foundations&mdash;we are only as good as our lowest level functions. It continues:

> &ldquo;The second argument is passed to Object.defineProperties which will **probably fail either silently or with extreme prejudice**.&rdquo;

We shouldn't expect our team to rely on code like this, much less our users. Any code we write around this is just ‘polishing a turd’.

## What should we do instead?

A facade or wrapper, is a design pattern that simplifies an interface to something more complex. This allows us to abstract away the differing browser implementations and bugs. And with the added bonus of being able to simplify the method signature.

Inside the facade there is nothing to stop us using bits of an API, and feature testing various implementations and acting accordingly, much like Peter Michaux shows us in his other article [Cross browser Widgets](http://peter.michaux.ca/articles/cross-browser-widgets).

Cloning an object is pertinent to this article because `Object.create` solves this problem. If we want to support *modern* browsers only&mdash;that is those that provide `Object.create`&mdash;then an implementation might look like this:

	var lib = {};
	if(Object.create) {
	  lib.cloneObject = function(obj) {
	    return Object.create(obj);
	  };
	}

As this implementation only uses a small part of the entire API, the exposed method signature has just one argument, solving the precise problem and no more. But what about browsers lacking `Object.create`?

If we want to degrade gracefully, we don't have to do anything (hello Progressive enhancement!). If we want to support other browsers add a second fork as follows:

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

The context of the problem changed. It got a little harder&mdash;but the implementation is still lean and the method signature holds up. But, we didn't need to worry about recreating `Object.create` in its entirety.

What if we did need the full API? We would need two changes: change the name of the function to something more appropriate and expand the method signature to allow for property descriptors:

	var lib = {};
	if(Object.create) {
	  lib.createObject = function(obj, props) {
        return Object.create(obj, props);
	  };
	}

What about browsers lacking `Object.create`? Same as before. Either degrade gracefully or add another fork. This is the very essence of Progressive Enhancement.

## Summary

At best, polyfills are hard to implement and complicate matters by intertwining browser and application logic. This complexity is costly.

At worst, polyfills have caveats and gaps that cause pain for the developer and broken experiences for users.

Instead, use facades, which enable us to build reliable, progressively enhanced and therefore inclusive experiences.

<!--

* ADDED IMPLEMENTATION Just because an API is implemented in a browser doesn't mean it's trustworthy. Sometimes, the spec is simply misunderstood and implemented differently across browser vendors. Adding a polyfill to the mix just adds complexity in the form of another user-defined implementation.

* CONSISTENCY Then there is the question of consistency. Do you want to use some polyfills and some facades. Probably not. Just use a consistent abstraction, a facade.

-->