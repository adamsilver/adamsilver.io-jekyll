---
layout: post
title:  "The disadvantages of Single Page Applications"
date:   2014-08-11 09:00:01
categories: js spas featured
description: SPAs are full of pitfalls. There are many reasons why.
---

Single Page Applications (SPAs) supposedly provide a better, more fluid experience. Having built several SPAs over the years I've found there to be many problems with them, from both a technical and usability perspective.

Before we discuss the problems, let's first define what an SPA is or perhaps more importantly, what it is not.

## What exactly is an SPA?

You may be tempted to associate certain technologies or patterns with an SPA, such as MVC, MVVM, AJAX and client-side templates. But we can use these technologies and patterns to build multi-page, ROCA-style web applications.

What *really* defines an SPA is the fact that client-side Javascript handles the routing, instead of the server. That is, the the browser no longer handles the *browsing*.

When you put it like that, it should be of no surprise as to why SPAs are so problematic. Let's find out why that is.

## 1. Navigation and fast back

Browsers store history so that pages load quickly when the user presses the *back* button. Daniel Puplus explains in [Building Single Page Applications](https://medium.com/joys-of-javascript/4353246f4480) that:

> &ldquo;Back should be quick; users don’t expect data to have changed much.<br><br>
> &ldquo;When a user presses the browser’s back button they expect the change to happen quickly and for the page to be in a similar state to how it was last time they saw it.<br><br>
> &ldquo;In the traditional web model the browser will typically be able use a cached version of the page and linked resources.<br><br>
> &ldquo;In a naive implementation of a SPA hitting back will do the same thing as clicking a link, resulting in a server request, additional latency, and possibly visual data changes.&rdquo;

One of the apparent benefits to SPAs is their speed. So if you don't want users to experience slow loading pages, you'll need to recreate the native browser behaviour in Javascript.

To do this the application will need a mechanism to store and retrieve 'pages' from a cache. Your options may include memory, local or session storage, client-side databases or cookies.

*The words 'navigating' and 'pages' are in quotes because SPAs, by definition, don't have the concept of navigation and pages in the traditional sense. I'll stop quoting these words for brevity from now on.*

The application also needs to determine *when* to store and retrieve pages from the cache. Navigation typically uses `pushState` or `hashchange`.

Therefore the application will need to differentiate between a user changing the URL (by clicking a link or typing a URL in the location bar) or [manually pressing back or forward, which is not simple](http://stackoverflow.com/questions/2008806/how-to-detect-if-the-user-clicked-the-back-button).

## 2. Remembering scroll position

Browsers conveniently remember the scroll position of pages you have visited. Daniel Puplus explains that:

> &ldquo;Lots of sites get this wrong and it’s really annoying. When the user navigates using the browser’s forward or back button the scroll position should be the same as it was last time they were on the page. This sometimes works correctly on Facebook but sometimes doesn’t. Google+ always seems to lose your scroll position.&rdquo;

Clicking forward or back should remember the scroll position. But as SPAs rely on faux navigation, the application will need to reimplement it. To do this it will need a mechanism to store the scroll position, and retrieve and set it accordingly.

## 3. Cancelling navigation

Consider what a browser gives us for free:

1. If a user clicks the *cancel* button, the browser will stop any in-flight requests.
2. If a user clicks a link, the browser will cancel any in-flight request and start the new request.

As SPAs retrieve pages with AJAX, several page requests could be in-flight at the same time. The first page request could be loaded last, even though the browser would normally cancel it when a user makes a subsequent request. A user may even click (and therefore request) the same link twice.

This is problematic because:

- it's inefficient;
- the user's data allowance is eaten up unnecessarily; and
- it causes visual glitches as subsequent requests finish and the DOM updates.

You'll need to recreate this browser functionality somehow. First you'll need to expose a cancel button, which is obviously undesirable. And the application will have to handle duplicate requests.

## 4. Navigation and data loss

We may want to warn users about losing unsaved changes. We can use the `beforeunload` event to do this which the browser provides for free. But, with SPAs, the Javascript handles the routing. This means you'll need to replicate this functionality i.e. `beforeRouting`.

## 5. Search engine ranking

Not all SPAs need SEO. But if yours does, then the [solutions aren't simple to implement](http://stackoverflow.com/questions/7549306/single-page-js-websites-and-seo).

## 6. Loading CSS &amp; Javascript

If an SPA grows to a significant size, loading the entire application on page load may be detrimental to the experience because it's akin to loading all pages of a website when the user only asked for the home page. Unfortunately, this leads to conditionally loading CSS and JS with script. [Script loading is notoriously difficult and contains unreliable hacks](http://blog.getify.com/labjs-script-loading-the-way-it-should-be/) which is fatal to the reliability of the application.

## 7. Analytics is harder to implement

Analytics tools will track page views by default. But because an SPA page isn't really a page, tracking page views is more difficult. To do this the router will need to log the event somehow.

## 8. Automated functional testing

It's harder to test SPAs. Tools like Selenium don't know when AJAX requests finish. Testers will need to handle timeouts and execution speed will be slower.

## 9. Performance

Pages are "long lived" increasing the chance of exposing a memory leak. This can degrade UX and cause battery drain on mobile devices.

## 10. Loading indicators

With AJAX, you'll need to implement your own loading indicator. This suffers from two problems:

1. The browser's loading indicator can display *progress* as it has access to this information under the hood. Javascript doesn't have access to the same information so can only show that something is loading or not.
2. User's find *their* browser's loading indicator familiar. No matter what website, the loading indicator will appear in the same place. When we use Javascript to do this, we lose this familiarity which in turn breaks the third of Henny Swan’s UX principles, *design with familiarity in mind*.

## 11. It's going to fail!

[Everyone has Javascript, Right?](http://kryogenix.org/code/browser/everyonehasjs.html) Wrong. It's going to fail and because SPAs *depend* on many different Javascript enhancements, when it does fail it will do so in a fatal way as they tend not to [conform to Progressive Enhancement](/articles/writing-javascript-that-conforms-to-progressive-enhancement/).

## Summary

SPAs are meant to provide a better experience. Not only are SPAs harder to design and build, they result in subpar experiences for users.

Javascript is never going to beat the browser at what it does best&mdash;*browsing*. You can still have enhanced experiences without cramming an entire site into one document.

Sites such as [Twitter](https://blog.twitter.com/2012/improving-performance-on-twittercom), [Lifehacker](http://isolani.co.uk/blog/javascript/BreakingTheWebWithHashBangs) and more recently [Delicious](http://blog.delicious.com/2016/01/delicious-changes/) have experienced many of these issues and have since reverted to more traditional archictures with positive results.

Solve real problems. Let the browser handle the browsing.