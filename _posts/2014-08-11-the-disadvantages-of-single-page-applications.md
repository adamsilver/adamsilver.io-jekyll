---
layout: post
title:  "The disadvantages of Single Page Applications"
date:   2014-08-11 09:00:01
categories: js spas featured
description: SPAs are full of pitfalls. There are many reasons why.
---

Many people think Single Page Applications (SPAs) provide a better user experience. On the contrary, not only do they cause problems for users, but they are significantly harder to design and build. Before getting into the issues, let's first clarify what an SPA is.

## What exactly is an SPA?

You might associate MVC, AJAX and client-side templating with an SPA. But these are not characteristics that define an SPA. In fact, we can use all of these things to build [ROCA-style](http://roca-style.org/) websites.

What really defines an SPA as such, is the fact that client-side Javascript handles the routing *instead* of the browser. That is, the application hijacks the behaviour that browsers provide natively.

It's hardly surprising then that this causes the following problems:

## 1. History and fast back

Browsers store history so that pages load quickly when the user clicks *back*. Daniel Puplus explains in [Building Single Page Applications](https://medium.com/joys-of-javascript/4353246f4480) that:

> &ldquo;Back should be quick; users don’t expect data to have changed much.<br><br>
> &ldquo;When a user presses the browser’s back button they expect the change to happen quickly and for the page to be in a similar state to how it was last time they saw it.<br><br>
> &ldquo;In the traditional web model the browser will typically be able use a cached version of the page and linked resources.<br><br>
> &ldquo;In a naive implementation of a SPA hitting back will do the same thing as clicking a link, resulting in a server request, additional latency, and possibly visual data changes.&rdquo;

One of the supposed benefits to SPAs is speed. So if you want users to enjoy a fast experience, the application will need to cache pages, using memory, local storage, client-side databases or cookies.

The application also needs to determine *when* to store and retrieve thiese pages from the cache. The application will also have to differentiate between:

* a user changing the URL (by clicking a link or typing a URL in the location bar); and
* [manually pressing back or forward](http://stackoverflow.com/questions/2008806/how-to-detect-if-the-user-clicked-the-back-button) which is not easy to solve.

## 2. Scroll position

Browsers remember the scroll position of pages you have visited. Daniel Puplus explains how SPAs have trouble here:

> &ldquo;Lots of sites get this wrong and it’s really annoying. When the user navigates using the browser’s forward or back button the scroll position should be the same as it was last time they were on the page. This sometimes works correctly on Facebook but sometimes doesn’t. Google+ always seems to lose your scroll position.&rdquo;

SPAs don't navigate in the traditional sense. Therefore the application must store the scroll position and apply it when the user hits back or forward.

## 3. Cancelling navigation

Consider what a browser gives us for free:

1. When a user clicks the *cancel* button, the browser will stop any in-flight requests.
2. When a user clicks a link, the browser will again, stop any in-flight requests and make a new request.

As SPAs retrieve pages via AJAX, there could be several requests in-flight. The first page request could finish last. And, a user may click (and therefore request) the same link twice. This is problematic because:

- it's inefficient;
- the user's data allowance could be eaten up unnecessarily; and
- it causes visual glitches as a subsequent page request finishes (when the browser would normally have cancelled it).

The application will need to handle duplicate requests. And the UI will need a cancel button, which is highly undesirable.

## 4. Unsaved changes

On occasion an application, upon leaving the page, will warn users about losing any unsaved changes. The browser's `beforeunload` event enables this behaviour.

However, the application cannot tap into this event because users don't request real pages. Meaning, the application will need to reimplement this behaviour if needed.

## 5. Search engine ranking

Not all SPAs need SEO. But when they do, [it's not easy to solve](http://stackoverflow.com/questions/7549306/single-page-js-websites-and-seo).

## 6. Loading CSS &amp; Javascript

If an SPA grows to a significant size, loading the entire application on page load will be slow. This leads to conditionally loading CSS and JS with script.

The problem is that [script loading is notoriously difficult and contains unreliable hacks](http://blog.getify.com/labjs-script-loading-the-way-it-should-be/) which slows down development and threatens the reliability of the application.

## 7. Analytics

Analytics tools track page views by default. But because an SPA page isn't really a page, tracking page views now requires extra work.

## 8. Automated functional testing

Selenium has dedicated hooks to know when a page finishes loading. There is no such hooks to know when an AJAX request finishes. As SPA pages are loaded in this way, testers will need to handle timeouts and it will be slower to run the tests.

## 9. Performance

Pages are "long lived" increasing the chance of memory leak issues. This can degrade UX and cause battery drain on mobile devices.

## 10. Loading indicators

When a page is loading, a browser provides a loading indicator. With AJAX, the application will need to provide a custom one that displays itself accordingly. Despite the extra design and development effort, there are two other issues:

1. The browser's loading indicator displays *progress*. That is, a user can tell how long left the request is going to take. Javascript can't provide the same level of feedback. This is why users fear the dreaded spinner.
2. The user's browser provides a predictable and familiar loading indicator, no matter which website they visit. When we use Javascript to do this, we  break the third of Henny Swan’s UX principles, *design with familiarity in mind*.

## 11. It's going to fail!

[Everyone has Javascript, Right?](http://kryogenix.org/code/browser/everyonehasjs.html) Wrong. Because SPAs *depend* on many different enhancements, when it does fail it will do so in a fatal way as they tend not to [conform to Progressive Enhancement](/articles/writing-javascript-that-conforms-to-progressive-enhancement/).

## Summary

SPAs are harder to design, harder to build, and they typically result in subpar experiences for users.

[Twitter](https://blog.twitter.com/2012/improving-performance-on-twittercom), [Lifehacker](http://isolani.co.uk/blog/javascript/BreakingTheWebWithHashBangs) and more recently [Delicious](http://blog.delicious.com/2016/01/delicious-changes/) have experienced many of these issues and have reverted to more traditional architectures with excellent results.

Javascript is never going to beat the browser at what it does best&mdash;*browsing*. We can still give users rich and enhanced experiences without cramming an entire site into one document.

We should let the browser manage the browsing experience, and spend our time solving *real* user problems.