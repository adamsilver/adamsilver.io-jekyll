---
layout: post
title:  "Single page applications"
date:   2014-10-01 09:00:01
categories: js
---

Single page applications are *supposed* to 'provide a more fluid user experience' [[0](#ref0)] but beware of the following fatal pitfalls.

## Navigation and fast back

Browsers store history meaning these pages can load very quickly when the user presses the back button. SPAs need to recreate this functionality. As Daniel Puplus says in his article [[1](#ref1)]:

> "Back should be quick; users don’t expect data to have changed much.

> "When a user presses the browser’s back button they expect the change to happen quickly and for the page to be in a similar state to how it was last time they saw it.

> "In the traditional web model the browser will typically be able use a cached version of the page and linked resources.

> "In a naive implementation of a SPA hitting back will do the same thing as clicking a link, resulting in a server request, additional latency, and possibly visual data changes."

Each time the user 'navigates' there needs to be some way of storing and retrieving pages from a cache, unless of course we want to slow down the speed of loading 'pages' which is meant to be a significant benefit of SPAs. This could be memory, local/session storage, local database, cookies, etc.

Additionally, there needs to be logic for when and what to store in the cache. SPA navigation hangs off `pushState` or `hashchange` and the application will need to differentiate between the user changing the URL (via click or URL) or manually hitting back and forward (which off the top of my head I am not sure is possible, certainly not easy).

## Navigation and remembering scroll history position

Browsers remember the scroll position of the pages you have visited which is very convenient. As Daniel Puplus says in his article:

> "Lots of sites get this wrong and it’s really annoying. When the user navigates using the browser’s forward or back button the scroll position should be the same as it was last time they were on the page. This sometimes works correctly on Facebook but sometimes doesn’t. Google+ always seems to lose your scroll position."

Clicking forward or back should remember the scroll position. Browsers do this for free but as SPAs rely on faux navigation this functionality is lost.

Each time the user navigates the scroll position will need to be stored and retrieved. Fixing this with JS will expose similar issues to that discussed in "Navigation and fast back" previously.

## Cancelling navigation

Browsers provide a handy cancel button which when pressed cancels the loading of the requested page. Additionally, if a user clicks another link the browser will cancel the previous request which is beneficial in itself but also from a performance and data usage point of view.

SPA links, however, are likely to be XHR meaning several 'page' requests could be in progress at the same time and so the first page request might load last even though it should have been cancelled out by the second page request. The user could also have clicked the link twice meaning the 'page' will be requested twice and loaded twice causing visual glitches.

SPAs can't detect when the user presses "stop/cancel", so the UI would need to expose a custom stop button which is definitely not a desirable experience. Then automatic page request management would need handling within the SPA; perhaps logic that ensures the same request isn't made twice or if an additional request is made that in-progress XHRs are cancelled.

## Avoid data loss on navigation

Browsers normally provide the `beforeunload` event which allows the application to warn against losing unsaved changes. Providing this functionality within SPAs will mean providing functionality that checks the page before any routing takes place.

## Search engine optimisation

SPAs don't always require SEO but for those that do there may be solutions but they certainly aren't straightforward or quick to implement [[2](#ref2)].

## Loading CSS and JS when navigating

If the SPA is of a significant size then loading the entire application JS on page load may be detrimental to the initial experience. It's a little bit like loading all pages of a website when only the home page was requested which doesn't make sense. Unfortunately this leads to attempting to load in 'page' specific CSS and JS only when those 'pages' are requested. Script loading is notoriously difficult and contains unreliable hacks [[3](#ref3)]. This can be fatal to the reliability of the application. Reliability is something that would be right at the top of my list of requirements when building a web application.

## Incapable browsers and accessibility

All browsers can render HTML rather well. Unfortunately, in the case of JS, browsers don't naturally degrade well on their own without employing feature detection and testing [[4](#ref4)]. If just a single critical feature doesn't exist it will be the white screen of death for those users [[5](#ref5)].

## Conclusion

Bearing in-mind single page applications are meant to provide a better and faster user experience, it is therefore ironic SPAs are likely to be slower and unreliable. So not only is there significantly extra development effort, the end result is detrimental to the user experience.

Frustratingly, most of the pitfalls described in this article are introduced by the SPA architecture. Avoiding the architecture avoids the pitfalls.

And remember, users can still have rich user interfaces without cramming it all into one document.

<dl>
	<dt><a name="ref0"></a>[0]</dt>
	<dd><a href="http://en.wikipedia.org/wiki/Single-page_application">SPAs on Wikipedia</a></dd>
	<dt><a name="ref1"></a>[1]</dt>
    <dd><a href="https://medium.com/joys-of-javascript/4353246f4480">Beyond pushState - building single page applications</a></dd>
	<dt><a name="ref2"></a>[2]</dt>
	<dd><a href="http://stackoverflow.com/questions/7549306/single-page-js-websites-and-seo">SPA SEO on stackoverflow</a></dd>
	<dt><a name="ref3"></a>[3]</dt>
	<dd><a href="http://blog.getify.com/labjs-script-loading-the-way-it-should-be/">Script loading hacks</a></dd>
	<dt><a name="ref4"></a>[4]</dt>
	<dd><a href="http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting">Stare of the Art Cross Browser Scripting</a></dd>
    <dt><a name="ref5"></a>[5]</dt>
    <dd><a href="http://sighjavascript.tumblr.com/">Sigh JavaScript</a></dd>
</dl>
