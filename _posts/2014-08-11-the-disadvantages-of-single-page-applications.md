---
layout: post
title:  "The disadvantages of Single Page Applications"
date:   2014-08-11 09:00:01
categories: js spas featured
description: SPAs are full of pitfalls. There are many reasons why.
---

Single Page Applications (SPAs) have become extremely popular on the web, because they *supposedly* [provide a more fluid experience](http://en.wikipedia.org/wiki/Single-page_application). The thing is, SPAs introduce a host of problems. Before explaining what these are I first want to make clear what a Single Page Application actually is.

## What exactly is an SPA?

You may associate MVC, MVVM, AJAX and client-side templating with SPAs. But, you would be confused because you can use all of these techniques to build a traditional multi-page, ROCA website.

What really defines an SPA is the fact that client-side Javascript code manages the routing behaviour instead of the browser. And this is the root cause of all the problems inherent to SPAs. Let's take a look now.

## 1. Navigation and fast back

Browsers store history, meaning pages load quickly when the user presses the *back* button. SPAs need to recreate this functionality. As [Daniel Puplus says in his article](https://medium.com/joys-of-javascript/4353246f4480):

> &ldquo;Back should be quick; users don’t expect data to have changed much.<br><br>
> &ldquo;When a user presses the browser’s back button they expect the change to happen quickly and for the page to be in a similar state to how it was last time they saw it.<br><br>
> &ldquo;In the traditional web model the browser will typically be able use a cached version of the page and linked resources.<br><br>
> &ldquo;In a naive implementation of a SPA hitting back will do the same thing as clicking a link, resulting in a server request, additional latency, and possibly visual data changes.&rdquo;

When 'navigating', the application will need a way of storing and retrieving 'pages' from a cache. Unless you want to slow down the loading of 'pages'. But isn't that meant to be one of the benefits? Storage options include memory, local (or session) storage, client-side database and cookies.

*The words 'navigating' and 'pages' are in quotes because SPAs, by definition, don't have the concept of navigation and pages in the traditional sense. I'll stop quoting these words for brevity.*

The application also needs to determine *when* to store and retrieve pages from the cache. Navigation typically uses *pushState* or *hashchange*. Therefore the application will need to differentiate between a user changing the URL (by clicking a link or typing a URL in the location bar) or [manually pressing back or forward, which is not straightforward](http://stackoverflow.com/questions/2008806/how-to-detect-if-the-user-clicked-the-back-button).

## 2. Remembering scroll position

Browsers conveniently remember the scroll position of pages you have visited. Daniel Puplus explains that:

> &ldquo;Lots of sites get this wrong and it’s really annoying. When the user navigates using the browser’s forward or back button the scroll position should be the same as it was last time they were on the page. This sometimes works correctly on Facebook but sometimes doesn’t. Google+ always seems to lose your scroll position.&rdquo;

Clicking forward or back should remember the scroll position. But as SPAs rely on faux navigation, this functionality is lost. To reimplement it, the application will need to store the scroll position. Then later the position will need to be retrieved and applied accordingly.

## 3. Cancelling navigation

Consider what a browser gives us for free:

1. If a user clicks the *cancel* button, the browser will stop any in-flight requests.
2. If a user clicks a link, the browser will cancel any in-flight request and start the new request.

As SPAs retrieve pages with AJAX, several page requests could in in-flight at the same time. The first page request could be loaded last, even though the browser would normally cancel it when a user makes a subsequent request. A user may even click, (and therefore request) the same link twice.

This is problematic because:

- it's inefficient;
- the user's data allowance is eaten up unnecessarily; and 
- it causes visual glitches as subsequent requests finish later on.

You'll need to recreate this browser functionality somehow. First you'll need to expose a cancel button, which is obviously undesirable. And the application will need to be able to cancel previous or duplicate requests.

## 4. Navigation and data loss

When the browser navigates, using Javascript we can tap into the `beforeunload` event. This allows the application to warn users about losing unsaved changes. As the Javascript handles the routing, the application will have to replicate this functionality i.e. `beforeRouting`.

## 5. Search engine ranking

Not all SPAs need SEO. But if your SPA does need it, then the [solutions aren't simple to implement](http://stackoverflow.com/questions/7549306/single-page-js-websites-and-seo).

## 6. Loading CSS &amp; Javascript

If an SPA grows to a significant size, loading the entire application on page load may be detrimental to the experience because it's akin to loading all pages of a website when the user only asked for the home page. Unfortunately, this leads to conditionally loading CSS and JS with script. [Script loading is notoriously difficult and contains unreliable hacks](http://blog.getify.com/labjs-script-loading-the-way-it-should-be/) which is fatal to the reliability of the application.

## 7. Analytics is harder to implement

Analytics tools will track page views by default. But because an SPA page isn't really a page, tracking page views is more difficult. To do this the router will need to log the event some how.

## 8. Automated functional testing

Whilst you can use Selenium, for example, to test SPAs, it's not so easy. Extra work will need to be done, to handle timeouts, because there is no signal for Selenium to hook into, like there would be for a *real* page.

This leads to more questions. *How long should the timeout be? What happens if it takes longer than normal?* The test execution speed will be slower too.

## 9. Performance problems

Pages are "long lived" increasing the chance of exposing a memory leak due to the lack of page reloads. This can degrade UX and cause battery drain on mobile devices.

## 10. Loading indicator issues

The browser shows a loading indicator when a page is loading. With AJAX, you have to recreate your own loading indicator which has two problems:

1. The custom loading indicator cannot indicate progress. It can only indicate that it's loading. A browser indicator is closer to the metal, and so can show progress.
2. It's disorientating to the user because their browsers loading indicator is familiar which is a critical element of design.

## 11. It's going to fail!

[Everyone has Javascript, Right?](http://kryogenix.org/code/browser/everyonehasjs.html) Wrong. It's going to fail and because SPAs *depend* on many different Javascript enhancements, when it does fail it will do so in a fatal way as they tend not to [conform to Progressive Enhancement](/articles/writing-javascript-that-conforms-to-progressive-enhancement/).

## Summary

Whilst SPAs are meant to provide a better experience, it's clear and ironic that they are much harder to design and build with a result that is detrimental to the user.

Javascript is never going to beat the browser at what it does best&mdash;*browsing*. You can still have enhanced experiences without cramming an entire site into one document.

Sites such as [Twitter](https://blog.twitter.com/2012/improving-performance-on-twittercom), [Lifehacker](http://isolani.co.uk/blog/javascript/BreakingTheWebWithHashBangs) and more recently [Delicious](http://blog.delicious.com/2016/01/delicious-changes/) have experienced many of these issues and have since reverted to more traditional archictures with positive results.

Solve real problems. Let the browser handle the browsing.