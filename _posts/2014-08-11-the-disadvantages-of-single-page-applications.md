---
layout: post
title:  "The disadvantages of Single Page Applications"
date:   2014-08-11 09:00:01
categories: js
---

Single Page Applications (SPAs) have become extremely popular on the web, because they are *supposed* to 'provide a more fluid user experience' [[0](#ref0)]. However, there are several technical issues which can be detrimental to the User Experience. Before getting to the issues, let's first discuss the difference between an SPA and a traditional multi-page website (MPW).

## What differentiates an SPA from an MPW?

Whilst it's common to associate MVC, MVVM, XHR, DOM manipulation (and more) with an SPA, this article doesn't address them because they could *also* be utilised in an MPW. What *really* defines an SPA is that the **routing is handled by the client-side application using Javascript, instead of the server**. This means the application handles the browsing instead of the browser. Attempting to mimic the browser using Javascript is the root cause of the self-induced issues.

## Issues

### Navigation and fast back

Browsers store history, meaning pages load quickly when the user presses the *back* button. SPAs need to recreate this functionality. As Daniel Puplus says in his article [[1](#ref1)]:

> &ldquo;Back should be quick; users don’t expect data to have changed much.

> &ldquo;When a user presses the browser’s back button they expect the change to happen quickly and for the page to be in a similar state to how it was last time they saw it.

> &ldquo;In the traditional web model the browser will typically be able use a cached version of the page and linked resources.

> &ldquo;In a naive implementation of a SPA hitting back will do the same thing as clicking a link, resulting in a server request, additional latency, and possibly visual data changes.&rdquo;

Upon 'navigating', the application will need a method of storing and retrieving 'pages' from a cache. Unless of course we want to slow down the speed of loading 'pages', which is meant to be a significant benefit of SPAs. Storage options could include memory, local (or session) storage, client-side database and cookies.

**Note: The words 'navigating' and 'pages' are in quotes because SPAs, by definition don't have the concept of navigation and pages in the traditional sense. Quotes will be discarded going forward for brevity.**

The application will also need to determine *when* to store and retrieve pages from the cache. Navigation typically utilises *pushState* or *hashchange* and the application will need to differentiate between the user changing the URL (via clicking a link or typing a URL in the location bar) or manually hitting back/forward, which is not straightforward [[2](#ref2)].

### Navigation and remembering scroll history position

Browsers conveniently remember the scroll position of the pages you have visited and as Daniel Puplus says in his article:

> &ldquo;Lots of sites get this wrong and it’s really annoying. When the user navigates using the browser’s forward or back button the scroll position should be the same as it was last time they were on the page. This sometimes works correctly on Facebook but sometimes doesn’t. Google+ always seems to lose your scroll position.&rdquo;

Clicking forward or back should remember the scroll position, but unfortunately, as SPAs rely on faux navigation this functionality is lost. Upon navigation, the application will need to remember the scroll position so that it can be retrieved later. This is a topic heavily related to "Navigation and fast back" discussed previously.

### Cancelling navigation

The browser provides a *cancel* button, which when pressed, cancels the loading of the requested page. If a user clicks another link, the browser will cancel the previous request if one is in progress. This is useful for performance and also ensures the user's internet data allowance isn't eaten up unnecessarily.

SPA pages are likely to be retrieved via XHR, meaning several requests could be in progress at the same time; the first page request might be loaded last, even though it should have been cancelled out by the second page request. Also, the same link could be clicked twice, meaning the page will be requested (and loaded) twice, which is not efficient and could also cause visual glitches.

The application will need to handle this functionality too. This means exposing a custom *cancel* button (which is obviously not desirable), and the duplicate requests need handling as well as cancelling all previous (in-progress) requests.

### Navigation and data loss

Browsers normally provide the *beforeunload* event which allows the application to warn against losing unsaved changes. The application router will need to provide a hook to replicate this functionality i.e. *beforeRouting*.

### Search engine optimisation

Some SPAs don't require SEO, but for those that do, the solutions aren't straightforward [[3](#ref3)].

### Navigation and loading CSS &amp; JS

If an SPA grows to a significant size, loading the entire application on page load may be detrimental to the experience because it's akin to loading all pages of a website when only the home page was requested. Unfortunately, this leads to attempting to load CSS and JS for certain pages. Script loading is notoriously difficult and contains unreliable hacks [[4](#ref4)] which can can be fatal to the reliability of the application.

### Analytics

Analytics tools will normally track page views and related tools without any extra effort but because an SPA page isn't really a page, this has to be handled with extra script which is triggered by the application router.

### Automated functional testing

Whilst you can use Selenium (and other equivalents) to test SPAs, extra effort is required to handle timeouts of XHR calls because there is no signal to Selenium that an XHR call has finished, like there is when a (real) page finishes loading. This leads to more questions and problems; *How long should the timeout be? What happens if it takes longer than normal?* The test execution will likely be slower too.

## Summary

SPAs are meant to provide a better experience. It is therefore ironic that SPAs require significantly more development effort, with a result that is detrimental to the user. Javascript is never going to do it better than the browser! Websites can still have Rich User Interfaces without cramming the entire site into one document.

Furthermore, it is interesting to note that sites such as Twitter [[5](#ref5)] and Lifehacker [[6](#ref6)] realised the SPA architecture was a mistake and have since reverted their architectures. The issues described in this article are self-induced. Remember, **avoiding the SPA architecture avoids the issues**.

## Citations

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://en.wikipedia.org/wiki/Single-page_application">Wikipedia: SPAs</a></dd>
	<dt class="citation" class="citation" id="ref1"><a name="ref1"></a>[1]</dt>
    <dd><a href="https://medium.com/joys-of-javascript/4353246f4480">Beyond pushState - building single page applications</a></dd>
	<dt class="citation" class="citation" id="ref2"><a name="ref2"></a>[2]</dt>
	<dd><a href="http://stackoverflow.com/questions/2008806/how-to-detect-if-the-user-clicked-the-back-button">Stackoverflow: Detecting back button click</a></dd>
	<dt class="citation" class="citation" id="ref3"><a name="ref3"></a>[3]</dt>
	<dd><a href="http://stackoverflow.com/questions/7549306/single-page-js-websites-and-seo">Stackoverflow: SPAs and SEO</a></dd>
	<dt class="citation" class="citation" id="ref4"><a name="ref4"></a>[4]</dt>
	<dd><a href="http://blog.getify.com/labjs-script-loading-the-way-it-should-be/">Script loading hacks</a></dd>
    <dt class="citation" class="citation" id="ref5"><a name="ref5"></a>[5]</dt>
    <dd><a href="https://blog.twitter.com/2012/improving-performance-on-twittercom">Improving performance on twitter</a></dd>
    <dt class="citation" class="citation" id="ref6"><a name="ref6"></a>[6]</dt>
    <dd><a href="http://isolani.co.uk/blog/javascript/BreakingTheWebWithHashBangs">Lifehacker and the hash bang debarkle</a></dd>
</dl>