---
layout: post
title:  "Single page applications"
date:   2014-10-01 09:00:01
categories: js
---

Single page applications (SPA) are *supposed* to 'provide a more fluid user experience' [[0](#ref0)] but beware of the following fatal pitfalls:

## Navigation and fast back

Browsers store history, meaning, these pages can load very quickly when the user presses the back button. SPAs need to recreate this functionality. As Daniel Puplus says in his article [[1](#ref1)]:

> "Back should be quick; users don’t expect data to have changed much.

> "When a user presses the browser’s back button they expect the change to happen quickly and for the page to be in a similar state to how it was last time they saw it.

> "In the traditional web model the browser will typically be able use a cached version of the page and linked resources.

> "In a naive implementation of a SPA hitting back will do the same thing as clicking a link, resulting in a server request, additional latency, and possibly visual data changes."

Each time the user 'navigates' there needs to be some way of storing and retrieving 'pages' from a cache, unless of course we want to slow down the speed of loading 'pages', which is meant to be a significant benefit of SPAs. Storage could be memory, local (or session) storage, client-side database or cookies.

**Note: The words 'navigates' and 'pages' are in quotes because SPAs, by definition don't have the concept of navigation and pages in the traditional sense. Quotes will be discarded for brevity going forward.**

It's not just a question of recreating a cache. It's also a question of determining when to store and when to retrieve pages from it. Navigation typically utilises `pushState` or `hashchange` and the application will need to differentiate between the user changing the URL (via clicking a link or typing a URL in the location bar) or manually hitting back/forward, which is not trivial [[2](#ref2)].

## Navigation and remembering scroll history position

Browsers remember the scroll position of the pages you have visited which is very convenient. As Daniel Puplus says in his article:

> "Lots of sites get this wrong and it’s really annoying. When the user navigates using the browser’s forward or back button the scroll position should be the same as it was last time they were on the page. This sometimes works correctly on Facebook but sometimes doesn’t. Google+ always seems to lose your scroll position."

Clicking forward or back should remember the scroll position, but unfortunately, as SPAs rely on faux navigation this functionality is absent.

Each time the user navigates, the scroll position will need to be stored and retrieved. This comes with the same pitfalls as the previous point: "Navigation and fast back".

## Cancelling navigation

Browsers provide a cancel button, which when pressed, cancels the loading of the requested page. Also, if a user clicks another link, the browser will cancel the previous request.

SPA links, however, are likely to be XHR meaning several requests could be in progress at the same time and so the first page request might be loaded last, even though it should have been cancelled out by the second page request. A link could also be clicked twice meaning the page will be requested twice and loaded twice causing visual glitches.

SPAs can't detect when the user presses "stop/cancel", so the UI would need to expose a custom stop button, which isn't desirable.

The application would need to manage duplicate requests and cancelling in progress requests.

## Avoid data loss on navigation

Browsers normally provide the `beforeunload` event which allows the application to warn against losing unsaved changes. Providing this functionality within SPAs will mean providing functionality that checks the page before any routing takes place.

## Search engine optimisation

SPAs don't always require SEO but for those that do, there ARE solutions, but they aren't necessarily easy or effortless [[3](#ref3)].

## Loading CSS and JS when navigating

If an SPA grows to a significant size, loading the entire application on page load may be detrimental to the experience, because it's akin to loading all pages of a website when only the home page was requested.

Unfortunately, this leads to the requirement to load CSS and JS for certain pages. Script loading is notoriously difficult and contains unreliable hacks [[4](#ref4)]. This can be fatal to the reliability of the application. Reliability should obviously be valued highly.

## Incapable browsers and accessibility

All browsers can render HTML rather well. Unfortunately, in the case of JS, browsers don't naturally degrade well on their own without employing feature detection and testing [[5](#ref5)]. If just a single critical feature doesn't exist it will be the white screen of death for those users [[6](#ref6)].

## Conclusion

Bearing in-mind SPAs are meant to provide a better and faster user experience, it is therefore ironic SPAs are likely to be slower and unreliable. So not only is there significantly extra development effort, the end result is detrimental to the user experience.

Frustratingly, the pitfalls described in this article are introduced by the SPA architecture. Avoiding the architecture avoids the pitfalls.

And remember, websites can still have rich user interfaces without cramming the entire site into one document.

<dl>
	<dt><a name="ref0"></a>[0]</dt>
	<dd><a href="http://en.wikipedia.org/wiki/Single-page_application">SPAs on Wikipedia</a></dd>
	<dt><a name="ref1"></a>[1]</dt>
    <dd><a href="https://medium.com/joys-of-javascript/4353246f4480">Beyond pushState - building single page applications</a></dd>
	<dt><a name="ref2"></a>[2]</dt>
	<dd><a href="http://stackoverflow.com/questions/2008806/how-to-detect-if-the-user-clicked-the-back-button">Stackoverflow on detecting back</a></dd>
	<dt><a name="ref3"></a>[3]</dt>
	<dd><a href="http://stackoverflow.com/questions/7549306/single-page-js-websites-and-seo">SPA SEO on stackoverflow</a></dd>
	<dt><a name="ref4"></a>[4]</dt>
	<dd><a href="http://blog.getify.com/labjs-script-loading-the-way-it-should-be/">Script loading hacks</a></dd>
	<dt><a name="ref5"></a>[5]</dt>
	<dd><a href="http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting">Stare of the Art Cross Browser Scripting</a></dd>
    <dt><a name="ref6"></a>[6]</dt>
    <dd><a href="http://sighjavascript.tumblr.com/">Sigh JavaScript</a></dd>
</dl>

<!--
 twitter, basecamp etc stopped doing it.
-->