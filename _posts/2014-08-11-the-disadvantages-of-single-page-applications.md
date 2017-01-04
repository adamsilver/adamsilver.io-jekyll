---
layout: post
title:  "The disadvantages of Single Page Applications"
date:   2014-08-11 09:00:01
categories: js spas featured
description: SPAs are full of pitfalls. There are many reasons why.
---

Single Page Applications (SPAs) supposedly provide a better and more fluid experience. Having built several SPAs over the years I've found there to be many problems with them, from both a technical and usability perspective.

Before we discuss the problems, let's first define what an SPA is or perhaps more importantly, what it is *not*.

## What exactly is an SPA?

An SPA may well use MVC, MVVM, AJAX and client-side templating, but these elements cannot be used to class an application as an SPA. In fact we can use all of these things to build rich, ROCA-style websites.

What makes an SPA unique is this. Instead of the browser managing the browsing, developer-written Javascript handles it. That is a client-side router replaces all the inherent features a browser gives us for free.

When you put it like that, it's of little surprise as to why they're so problematic. Let's discuss each problem in turn.

## 1. History and fast back

Browsers store history so that pages load quickly when the user presses the *back* button. Daniel Puplus explains in [Building Single Page Applications](https://medium.com/joys-of-javascript/4353246f4480) that:

> &ldquo;Back should be quick; users don’t expect data to have changed much.<br><br>
> &ldquo;When a user presses the browser’s back button they expect the change to happen quickly and for the page to be in a similar state to how it was last time they saw it.<br><br>
> &ldquo;In the traditional web model the browser will typically be able use a cached version of the page and linked resources.<br><br>
> &ldquo;In a naive implementation of a SPA hitting back will do the same thing as clicking a link, resulting in a server request, additional latency, and possibly visual data changes.&rdquo;

One of the apparent benefits to SPAs is their speed. So if you don't want users to experience slow loading pages, the application will need a mechanism to store and retrieve pages from a cache. Options include memory, local or session storage, client-side databases or cookies.

The application also needs to determine *when* to store and retrieve pages from the cache. Navigation typically uses `pushState` or `hashchange` which introduces another problem. It will have to be able to differentiate between:

* a user changing the URL (by clicking a link or typing a URL in the location bar); or
* [manually pressing back or forward, which is not simple](http://stackoverflow.com/questions/2008806/how-to-detect-if-the-user-clicked-the-back-button).

## 2. Scroll position

Browsers remember the scroll position of pages you have visited. In the same article, Daniel Puplus explains how SPAs have trouble here:

> &ldquo;Lots of sites get this wrong and it’s really annoying. When the user navigates using the browser’s forward or back button the scroll position should be the same as it was last time they were on the page. This sometimes works correctly on Facebook but sometimes doesn’t. Google+ always seems to lose your scroll position.&rdquo;

Because SPAs rely on faux navigation, they need a mechanism of their own to store the scroll position, and to retrieve and set it accordingly.

## 3. Cancelling navigation

Consider what a browser gives us for free on this:

1. If a user clicks the *cancel* button, the browser will stop any in-flight requests.
2. If a user clicks a link, the browser will again, stop any in-flight requests and make the new one.

As SPAs retrieve pages via AJAX, there could be several requests in-flight. The first page request could be loaded last. A user may even click (and therefore request) the same link twice.

This is problematic because:

- it's inefficient;
- the user's data allowance could be eaten up unnecessarily; and
- it causes visual glitches as a page request finishes (when it should have been cancelled).

The application will need a way to do this. First the UI needs a cancel button, which is obviously undesirable. And second the application should handle duplicate requests.

## 4. Unsaved changes

On occasion an application will warn users about losing unsaved changes, when they navigate away from a page. The browser provides the `beforeunload` event to do this. An SPA will need to recreate this behaviour with a hook before routing takes place.

## 5. Search engine ranking

Not all SPAs need SEO. But when they do, [it's not easy to do](http://stackoverflow.com/questions/7549306/single-page-js-websites-and-seo).

## 6. Loading CSS &amp; Javascript

If an SPA grows to a significant size, loading the entire application on page load will be slow. Unfortunately, this leads to conditionally loading CSS and JS with script. [Script loading is notoriously difficult and contains unreliable hacks](http://blog.getify.com/labjs-script-loading-the-way-it-should-be/) which is threat to the application's reliability.

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

[Twitter](https://blog.twitter.com/2012/improving-performance-on-twittercom), [Lifehacker](http://isolani.co.uk/blog/javascript/BreakingTheWebWithHashBangs) and more recently [Delicious](http://blog.delicious.com/2016/01/delicious-changes/) have experienced many of these issues and have reverted to more traditional archictures with excellent results.

Javascript is never going to beat the browser at what it does best&mdash;*browsing*. We can still give users rich and enhanced experiences without cramming an entire site into one document.

We should let the browser manage browser, and spend our time solving *real* user problems.