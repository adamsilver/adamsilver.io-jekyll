---
layout: post
title:  "The Real Progressive Enhancement"
date:   2032-01-01 09:00:01
categories: js
---

> The problem of the web is actually the beauty of the web. Anyone with a browser and Internet connection can access your website.

* Dynamic Environment == Dynamic API

* Devs are fucking it all up by using static APIs

* Possible title: Progressive Enhancement the missing piece

* Unobtrusive js is not progressive enhancement

* Inline js does not mean its not progressively enhanced

========================

So everyone has already accepted Progressive Enhancement as a good approach to developing client-side web UIs.

Everyone also knows that HTML and CSS degrade gracefully without intervention. That's because HTML degrades by not showing an element, or not styling element. CSS degrades by not showing a style.

No harm done.

Then comes along our friend Javascript. Use an API the browser doesn't understand?

Boom. Javascript error.

> But as long as the site works without Javascript we are fine, that's progressive enhancement.

Wrong ( not necessarily for the polite amongst us).

Imagine a simple task such as clicking a link gets retrieves your geolocation. Something like:

	var link = document.getElementById('someLink');
	link.addEventListener('click', function(e) {
		e.preventDefault();
		// geolocation stuff
	});

Now, take a browser that supports retrieving elements by ID (most since IE4), adding event listeners (most since IE8), but can't handle the geolocation (a lot of browsers don't support this)

The script above will stop the link being handled by the browser but cause a type error when it gets to the geolocation shit.

Now tell me this - does it fucking matter that if the user turns of Javascript they can follow the link. No it fucking does not.

The user has Javascript turned on, has some required features, but is missing some required features. Broken page.

Boom.

So what to do instead?

As you can see above, the web is dynamic, your single web page is consumed in many different clients, different configs etc and so on. So you need to expose a dynamic API so the calling application check before executing.

That all sounds complication and jargony doesn't it. Just show me (some pseudo code)

	if(lib.can('find elements', 'add event listeners', 'perform geolocation')) {
		var link = document.getElementById('someLink');
		link.addEventListener('click', function(e) {
			e.preventDefault();
			// geolocation stuff
		});
	}

Then if the browser can't do said shit, it degrades to JS off equivalient.

This is the real progressive enhancement, something that you just don't see in the industry.

This just leads to, dropping supporting, endless upgrades, broken pages etc etc.



