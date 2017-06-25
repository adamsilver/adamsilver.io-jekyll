---
layout: post
title: Don't use AJAX for personalised content
date:   2014-12-29 09:00:01
categories: js a11y ux performance
description: Sometimes developers are on a pursuit to reduce page-load time by utilising AJAX to get around personalised content. This is problematic.
---

[Content caching](https://developer.akamai.com/stuff/Caching/Content_Caching.html) is a useful technique to increase the loading speed of a page. If the page has personalised content this technique doesn't work. This is is because one user may receive another user's personalised content which is insecure and undesirable.

The problem comes when someone suggests using AJAX to request the personalised content as a separate request. Before discussing the problem let's define exactly what personalised content is.

## What is personalised content?

Personalised content is content that is specific to a user. The most basic example would be a "Logout" link. This is because the page knows that *you* are logged in and that *you* may want to logout.

Even though this is personal it's cacheable because we can have two groups of users: logged out and logged in users. In which case, we can serve the correct cached page to each group with a cookie check.

Specific information, such as a user's name, or the contents of their shopping basket can't be cached.

Now that's clear, we can discuss the issues with using AJAX to request personalised content:

## 1. The architecture becomes complex

Using AJAX has a significant impact on architecture.

* Is there one extra request for personalised content or multiple?
* Do we serve it as JSON and then parse that on the client?
* How do we organise and initialise scripts?
* How do we organise partials?
* At what point is personalised content not essential to the experience?

## 2. Some people will have a broken experience

If the user doesn't have Javascript (and there are [many reasons why they won't](http://kryogenix.org/code/browser/everyonehasjs.html)), they'll get an incomplete or broken page. Not being able to logout, or not being able to see their basket is an example.

This goes against Progressive Enhancement which in-turn goes against the spirit of the web. We shouldn't unnecessarily exclude people.

## 3. Replacing browser behaviour degrades the experience

Using AJAX to load content stops us using the inherent functionality browsers provide for free. This functionality is an intuitive aspect of the browsing experience.

This includes displaying a loading indicator that accurately indicates the progress of the request. It also includes handling response and timeout errors.

Using AJAX and content-caching like this, means at first the page is only half rendered. Then, sometime later, the personalised content is injected into the page. This is, at least a little jarring as the page fills in the gaps.

We'll need to implement loading spinners, and hide content, and show the content perhaps with a transition. These things are often janky and they differ from site to site making for a low quality experience.

Moreover, the request may finish after scrolling down the page. This means the user may not notice this new personalised content and the page may jump unexpectedly.

## 4. Extra work is needed

First, a designer needs to design a loading spinner and transitions. Second, developers need to implement this functionality in good order for browsers and assistive technology. Third, testers will need to test and AJAX makes functional tests harder to write.

## 5. Performance actually degrades

Instead of a single HTTP request containing the whole response, there will now be multiple. The first would be for the Document containing non-personalised content. The next request(s) will be via AJAX and *will* hit the web server, therefore subject to the same latency as always.

And any performance increase is negated by the extra JS and CSS which needs to download and execute, including reflows and repaints in the browser. This includes:

* making a JSON request;
* parsing the response;
* handling errors;
* finding elements;
* traversing the Document tree;
* updating the Document; and
* loading spinners and whatever else.

## Summary

Content-caching *is* a very useful technique when used responsibly and for pages that don't contain personalised content. For pages that *do* contain personalised content, a [cookie check can determine whether the cached version should be served or not](https://blogs.akamai.com/2014/05/and-you-thought-your-page-could-not-be-cached.html).

Enhancements should not break the web, and make the experience worse. It should enhance the experience where it is valuable to do so.

AJAX seems like an innocent and beneficial solution, but it encourages bad practice that creates several self-induced problems for users and the development team.

<!--

## Todo:

* https://remysharp.com/2012/04/25/mobile-battery-performance
* http://itamarst.org/writings/dynamiccaching.html
* cache invalidated means it goes to server anyway

## Comment from blog covers it off:

> I think this would be a useful technique in only special situations. It does accomplish what you want but will require multiple downloads and will make a portion of your page unaccessible to those who have disabled JS (from what I have heard that is 10% of the intenet population).

> Plus I am dubious of the savings. The reason for the caching to not have a web brower contact the website. It can just retrieve the content from cache. But if it is having to retrieve a portion of the content anyway you still have to make a HTTP request. Might as well make that response a bit bigger and get rid of the multiple requests and more complex code.

> Sounds to me like this is going a little overboard on caching. Some pages are just not designed for caching. If that is the case then implement your application to use the “If-Modified-Since” header. That way the user can make their request but get back a small response in most cases.

> I think this is premature optimization.

-->