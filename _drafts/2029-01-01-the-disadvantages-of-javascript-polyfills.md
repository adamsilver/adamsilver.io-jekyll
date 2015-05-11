---
layout: post
title:  "The disadvantages of Javascript polyfills"
date:   2026-01-01 09:00:01
categories: js
---

* Credit David Mark. Perhaps quote him.

> Use wrappers. Do *not* augment host objects. You don't own them and
you certainly don't want to try to implement 100% of the standard
functionality (just implement what you need). Besides host objects are allowed to throw exceptions just for *reading* their properties (and some do just that in IE).

* Not a long article

* Don't augment host objects -Kangax?

* Implement entire standard, which is rarely needed, and requires larger effort and prone to error or impossible. Object.create anyone?

* if you use the real object.create it does different things. i.e. the prototype object.

* if you use a wrapper, you won't expect the same outcome, don't have to implement the entire thing and can lean on feature detection, dynamic apis.

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="https://sites.google.com/site/adoromedia/javascript/polyfills">TBD</a></dd>
</dl>