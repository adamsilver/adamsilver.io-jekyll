---
layout: post
title:  "Why you don't understand Real Progressive Enhancement"
date:   2032-01-01 09:00:01
categories: js
---

So everyone has already accepted Progressive Enhancement as a good approach to developing client-side web UIs. But Progressive Enhancement is not Unobtrusive Javascript! Nor is it making sure the site works when Javascript is turned off (although it is a part of it).

Everyone knows that when it comes to HTML, the browser degrades an unknown element gracefully with no added effort. Take the `video` element for example. It just doesn't show the video, and allows you to nest fallback HTML e.g. an image which all browsers can use.

Likewise, CSS has a similar behaviour &mdash; it just doesn't render the style.

**No harm, no foul.**

Then along comes our friend, Javascript. You then write an application that uses an API &mdash; one that is provided by the browser.

What happens when your application tries to execute an API that a *particular* browser doesn't support?

**Boom. Javascript error.**

I am not just talking about cutting edge APIs. I am talking about `addEventListener` in IE6-IE8 inclusive, or *any* API for that matter.

*"But as long as the site works without Javascript we are fine, that's progressive enhancement."*

**Wrong.**

To explain, I need an example.

Imagine a simple task such as clicking a link retrieves your location. Something like:

	var link = document.getElementById('someLink');
	link.addEventListener('click', function(e) {
		e.preventDefault();
		// geolocation stuff
	});

Now, take a browser that supports `document.getElementById` (most since IE4), `el.addEventListener` (most since IE8), but can't handle the geolocation (a lot of browsers don't support this).

The script above will stop the link being handled by the browser but cause a Type Error when it gets to the geolocation shit.

Now, considering the above, tell me this &mdash; does it matter if the user turns of Javascript and the site still works i.e. they can follow the link like normal?

**No.**

I just demonstrated a completely common and valid scenario where the user has Javascript turned on (most users don't actively turn it off) &mdash; and some of the APIs are missing. Some of the APIs are missing in every browser.

No two browsers have identical capabilities so this scenario is not only common. It's 100% guaranteed.

So, again, what happens in this scenario?

**Boom. Broken page! JS errors! Broken page! User can't continue! You lose money!**

## So what to do instead?

*"Okay you got me, show me the Real Progressive Enhancment then!"*

As you can see above, the web is dynamic. Dynamic in that your website is being consumed on a million different browsers with a million different configs, each with different capabilities. The APIs available to an application is therefor dynamic and need checking for presencne and sometimes stability, *before* use.

Every developer says they know all about *Feature detection* and *Feature testing* but, I never see it safely used in their applications. This might mean because they handed off responsibility to a 3rd party library, a library that doesn't give you this capability.

**So what you need to do is fucking check your application can run before you fucking run it.** For the technical amongst us, the *calling* application needs to check the availability of it's dependencies, before excuting the application so that the application isn't left in limbo i.e. where some of the code executes but some errs.

That sounds complicated and jargony. Let's see how this actually manifests itself shall we?

Taking the previous example:

	// check environment provides whatthe application needs
	if(	document.getElementById &&
		document.documentElement.addEventListener &&
		navigator.geolocation) {

		// Application can run. Progressively enhance now etc!
	}

Now in reality, it's a little more complicated than this and you would abstract this complexity into a library of functions that work this way. Something like:

	if(lib.hasFeatures('getElementById', 'addEventListener', 'getLocation')) {
		var link = lib.getElementById(...);
		lib.addEventListener('submit', function(e) {
			lib.preventDefault(e);
			var location = lib.getLocation();
			// etc
		});
	}

So, if the browser fails to provide one or more dependencies, the application doesn't enhance &mdash; it just degrades to a JS off equivalent.

This is why it *is* important for the site to work without Javascript. Otherwise graceful degradation is useless. Might as well have a broken page that relies on Javascript like a Single Page Application, but this is just [stupid](/articles/the-disadvantages-of-single-page-applications/).

This is the Real Progressive Enhancement, something that you very *very* rarely see in the industry. Why?

**Not sure.**

*"Everyone loves McDonalds, but that doesn't make it good for you!"*

Most devs don't do this and so you end up with developers copying other developers. A lot of (read all of) the popular Javascript libraries don't expose it's capabilities to the calling application. i.e. most libraries provide static APIs. Meaning there is no way for you to know if the underlying code will run successfully or not.

And if you don't know, you can guarantee failure at some point or other. This is not just for old browsers, it's just as much for new browsers.

Infact, if you wan't to use the most bleeding edge browser APIs, all you have to do is check first before enhancing. You could decide to *only* use the most cutting edge browsers and then degrading for all other browsers.

<!--

*The problem of the web is actually the beauty of the web. Anyone with a browser and Internet connection can access your website.*

* Devs are fucking it all up by using static APIs

* Possible title: Progressive Enhancement the missing piece

-->

