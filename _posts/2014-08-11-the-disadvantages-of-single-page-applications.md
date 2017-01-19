---
layout: post
title:  "The disadvantages of single page applications"
date:   2014-08-11 09:00:01
categories: js spas featured
description: Single page applications promise a better experience. This is rarely the case. Find out why in this article.
---

Many people think single page applications (SPAs) provide a better user experience. But, not only do they cause usability problems, they are significantly harder to design and build.

Before getting into the issues, let's first clarify what an SPA is.

## What exactly is an SPA?

We might associate MVC, AJAX and client-side templating with an SPA. But these are not the defining characteristics of an SPA. We can use all of these things to build a rich, [ROCA-style](http://roca-style.org/) website.

What really defines an SPA as such, is the fact that client-side Javascript handles the routing *instead* of the browser. That is, the application hijacks the behaviour that browsers inherently provide natively for *free*.

When it's put like that, it's hardly surprising they cause so many problems:

## 1. History and fast back

Browsers store history so that pages load quickly when the user clicks *back*. Daniel Puplus explains in [Building Single Page Applications](https://medium.com/joys-of-javascript/4353246f4480) that:

> &ldquo;Back should be quick; users don’t expect data to have changed much.<br><br>
> &ldquo;When a user presses the browser’s back button they expect the change to happen quickly and for the page to be in a similar state to how it was last time they saw it.<br><br>
> &ldquo;In the traditional web model the browser will typically be able use a cached version of the page and linked resources.<br><br>
> &ldquo;In a naive implementation of a SPA hitting back will do the same thing as clicking a link, resulting in a server request, additional latency, and possibly visual data changes.&rdquo;

If we want users to enjoy the same, fast experience, we'll need to mimic the native browser behaviour in Javascript. The application will need to store pages in a cache by using memory, local storage, client-side databases or cookies.

The application will also need to determine *when* to retrieve these pages. As part of this it will need to differentiate between:

* a user changing the URL (by clicking a link or typing a URL in the location bar); and
* [manually pressing back or forward](http://stackoverflow.com/questions/2008806/how-to-detect-if-the-user-clicked-the-back-button) which is not easy to solve.

## 2. Scroll position

Browsers remember the scroll position of pages you have visited. Daniel Puplus explains how SPAs have trouble here:

> &ldquo;Lots of sites get this wrong and it’s really annoying. When the user navigates using the browser’s forward or back button the scroll position should be the same as it was last time they were on the page. This sometimes works correctly on Facebook but sometimes doesn’t. Google+ always seems to lose your scroll position.&rdquo;

SPAs don't navigate in the traditional sense. Therefore the application must store the scroll position and apply it when the user hits back or forward.

## 3. Cancelling navigation

Consider what a browser gives us for free:

* When a user clicks the *cancel* button, the browser will stop any in-flight requests.
* When a user clicks a link, the browser will again, stop any in-flight requests and make a new request.

As SPAs retrieve pages via AJAX, there could be several requests in-flight. The first page request could finish last. And, a user may click (and therefore request) the same link twice. This is problematic because:

- it's inefficient;
- the user's data allowance could be eaten up unnecessarily; and
- it causes visual glitches as a subsequent page request finishes (when the browser would normally have cancelled it).

The application will need to handle duplicate requests. And the UI will need a cancel button, which is highly undesirable.

## 4. Unsaved changes

On occasion an application, upon leaving the page, will warn users about losing any unsaved changes. The browser allows us to use the `beforeunload` event to do just this.

However, the application cannot use this feature because users don't request real pages. Meaning, the application will need to reimplement this behaviour if needed.

## 5. Search engine ranking

Not all SPAs need SEO. But when they do, [it's not easy to solve](http://stackoverflow.com/questions/7549306/single-page-js-websites-and-seo).

## 6. Loading CSS &amp; Javascript

If an SPA grows to a significant size, loading the entire application on page load will be slow. This leads to conditionally loading CSS and JS with a script loader.

The problem is that [script loading is notoriously difficult and contains  hacks](http://blog.getify.com/labjs-script-loading-the-way-it-should-be/). This slows down development and reduces the reliability of the application.

## 7. Analytics

Analytics tools track page views by default. But SPA pages aren't really pages. This means the application will have to notify the analytics tool that a pseudo page has been loaded.

## 8. Automated functional testing

Selenium knows when a page has finished loading. However, SPAs load pages with AJAX. This means that:

* tests are more complicated and must handle timeouts; and
* the tests will be slower to execute.

## 9. Memory leaks

Pages are "long lived" increasing the chance of memory leak issues. This can degrade UX and cause battery drain on mobile devices.

## 10. Loading indicators

Browsers show a loading indicator during page load. SPAs use AJAX to load pages and so we need to implement a custom one. This requires extra work.

Also, the browser's indicator displays *progress*. That is, a user can tell how long until the request finishes. Javascript can only state that something is loading, not how long left there is. This leads users to request the link again.

Furthermore, the user's browser provides a predictable and familiar loading indicator, no matter which website they visit. When we use Javascript to do this, we break the third of Henny Swan’s UX principles, *design with familiarity in mind*.

## 11. It's going to fail

[Everyone has Javascript, Right?](http://kryogenix.org/code/browser/everyonehasjs.html) explains that Javascript loading or executing will fail. SPAs *depend* on many different enhancements, and they tend not to conform to [Progressive Enhancement](/articles/writing-javascript-that-conforms-to-progressive-enhancement/). This means when it does fail, the resulting experience will be a blank page.

## Summary

Ironically, SPAs are harder to design and harder to build. And yet, they typically produce slow, disagreeable experiences for users.

Twitter, Lifehacker and Delicious have reverted to traditional architectures because of these issues which you can read about in:

- [Improving performance on Twitter](https://blog.twitter.com/2012/improving-performance-on-twittercom);
- [Breaking The Web With Hash Bangs](http://isolani.co.uk/blog/javascript/BreakingTheWebWithHashBangs); and
- [Delicious changes](http://blog.del.icio.us/?p=1174).

Javascript is never going to beat the browser at what it does best&mdash;*browsing*. We can still give users rich and enhanced experiences without cramming an entire site into one document.

We should let the browser manage the browsing experience, and spend our time solving *real* user problems.