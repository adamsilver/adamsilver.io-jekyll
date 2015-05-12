---
layout: post
title:  "The disadvantages of Javascript polyfills"
date:   2026-01-01 09:00:01
categories: js
---

Polyfills *sound* great don't they? Wikipedia has a good description of what they are:

> In web development, a polyfill (or polyfiller) is downloadable code which provides facilities that are not built into a web browser. It implements technology that a developer expects the browser to provide natively, providing a more uniform API landscape.

The problem is, they are not as great as the sound as David Mark says:

> Use wrappers. Do *not* augment host objects. You don't own them and
you certainly don't want to try to implement 100% of the standard
functionality (just implement what you need). Besides host objects are allowed to throw exceptions just for *reading* their properties (and some do just that in IE).

So in summary:

1. You should never augment host objects [0]. Everyone knows that don't they?

2. Implementing an entire standard is requires significant effort, prone to errors due to #1 and is *very* rarely needed.

So what to do instead? Use wrappers:


* Implement entire standard, which is rarely needed, and requires larger effort and prone to error or impossible. Object.create anyone?

* if you use the real object.create it does different things. i.e. the prototype object.

* if you use a wrapper, you won't expect the same outcome, don't have to implement the entire thing and can lean on feature detection, dynamic apis.

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="https://sites.google.com/site/adoromedia/javascript/polyfills">TBD</a></dd>
</dl>