---
layout: post
title:  "Beware of single page applications"
date:   2014-10-01 09:00:01
categories: js
---

Single page applications are *supposed* to 'provide a more fluid user 
experience' [0](#ref0) but beware of the following fatal pitfalls:

## Fast back

Browsers can store previously visited pages in the cache which means when the user clicks back the page is loaded quickly. SPAs don't have this. There will need to be a way to store and retrieve pages from a cache - memory, local storage? Additionally faux navigation hangs off pushState or hashchange and in either situation it will need to differentiate between a user changing the URL via clicking a link, changing the URL manually or  hitting back/forward.

## Scrolling on history

Clicking forward or back should remember the scroll position. Browsers do this by default but messing with navigation messes with this functionality. Trying to add this behaviour will be tricky and will require the scroll position to be stored and retrieved in relation to the previous "Fast back" point.

## Pending navigation

SPAs can't detect when the user presses "stop/cancel". Would need to expose a custom stop button in the UI or forgo that useful ubiquitous functionality.

## Before navigating away

Browsers normally expose a `beforeunload` event meaning you can easily warn against unsaved changes. Similar behaviour will need to be built for the SPA - perhaps a 'beforeRouting' feature?

## Script loading

SPAs inherently reside in a single HTML document. Either load the entire application's script on load which may not be desired or performant or load scripts via script which is very unreliable [xxx](xxxx). The one thing you don't want to play games with is the reliability of your application even starting.

## Sheer code size

Take 'hello world'. To produce that in single page application architecture could require hundreds, if not thousands of lines of js. In html its just `<p>hello world</p>`

## Fallback for browsers without those mandatory features

Single page applications require a certain feature set and if your browser doesn't support it its **blank** page for them.

## Performance

Contrary to popular belief [xxxx](xxx) the browser is the best at navigation, loading HTML, CSS and JS, informing the user that something is loading, where the scroll position should be etc. JS cannot do this better.

<a name="ref0"></a>[0]:[Beyond pushState - building single page applications]
(https://medium.com/joys-of-javascript/4353246f4480)

<dl>
	<dt><a name="ref0"></a>[0]</dt>
	<dd><a href="http://en.wikipedia
	.org/wiki/Single-page_application">Wikipedia</a></dd>
</dl>
