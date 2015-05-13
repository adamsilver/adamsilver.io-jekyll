---
layout: post
title:  "The disadvantages of Javascript polyfills"
date:   2026-01-01 09:00:01
categories: js
---

A polyfill, can be described as follows:

> "A polyfill, or polyfiller, is a piece of code (or plugin) that provides the technology that you, the developer, expect the browser to provide natively. Flattening the API landscape if you will."

Whilst this *sounds* great it has its disadvantages which are best summarised by David Mark as follows:

> "Use wrappers. Do *not* augment host objects. You don't own them and you certainly don't want to try to implement 100% of the standard
functionality (just implement what you need). Besides host objects are allowed to throw exceptions just for *reading* their properties (and some do just that in IE)."

So let's break down what David is correctly saying.

## Do not augment Host objects (and Native objects)

It's been known for a *very* long time that messing with Host objects [[0](#ref0)] and to a slightly lesser extent Native objects [[1](#ref1)] is an ill-advised technique prone to error. Polyfills rely on this technique and so by their very nature they are error prone and problematic.

## Implementing entire functionality

* Implement entire standard, which is rarely needed, and requires larger effort and prone to error or impossible. Object.create anyone?

* if you use the real object.create it does different things. i.e. the prototype object.

## Use wrappers instead

* if you use a wrapper, you won't expect the same outcome, don't have to implement the entire thing and can lean on feature detection, dynamic apis.

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://perfectionkills.com/whats-wrong-with-extending-the-dom/">What's wrong with extending the DOM?</a></dd>
	<dt class="citation" id="ref1">[1]</dt>
	<dd><a href="http://perfectionkills.com/extending-native-builtins/">Extending native built-ins</a></dd>
</dl>