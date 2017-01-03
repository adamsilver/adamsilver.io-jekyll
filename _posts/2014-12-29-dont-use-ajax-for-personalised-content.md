---
layout: post
title: Don't use AJAX for personalised content
date:   2014-12-29 09:00:01
categories: js a11y ux performance
description: Sometimes developers are on a pursuit to reduce page-load time by utilising AJAX to get around personalised content. This is problematic.
---

You may be trying to reduce page-load time by using [content caching](https://developer.akamai.com/stuff/Caching/Content_Caching.html) to improve UX.

If your page contains personalised content this technique doesn't work. This is because one user may receive another user's personalised content. This is obviously dangerous and no good.

Next, somebody says we should use AJAX to pull in the personalised content. This is problematic for many reasons. Before discussing them, let's first discuss exactly what personalised content is.

## What is personalised content?

Personalised content is content that is specific to a user. The most basic example would be a "Logout" link. This is because the page knows that *you* are logged in and that *you* may want to logout.

Even though this is personal, this can be cached because you can group users into two buckets: logged out users and logged in users. So you can serve the correct cached page to each bucket.

Personalised content that can't be cached is content that is unique to a specific user. For example, a users name or the contents of their shopping basket.

Okay, so now we've cleared that up. What's the problem with using AJAX to load in personalised content?

## 1. The architecture becomes complex

What seems like a simple use of AJAX has a significant effect on architecture.

* Is there one extra request for personalised content or multiple?
* Do you serve it as JSON and then parse that on the client?
* How do you organise your scripts for this?
* How do you organise the view partials for this on the server?
* At what point is personalised content not essential to the UX and how does that affect architecture?

## 2. Some people will have a broken experience

If the user doesn't have Javascript (and there are [many reasons why they won't](http://kryogenix.org/code/browser/everyonehasjs.html)), then they'll get an incomplete and broken web page. Not being able to logout, or not being able to see their basket equates to a broken experience.

This goes against Progressive Enhancement which in-turn goes against the spirit of the web. We shouldn't unnecessarily exclude people.

## 3. Replacing browser behaviour degrades the experience

When we use AJAX to load in content, we stop using the inherent functionality browsers provide for free. This functionality is an intuitive aspect of the browsing experience.

This includes displaying a loading indicator that accurately indicates the progress of the request. It also includes handling response and timeout errors.

Using AJAX and content-caching like this, means at first the page is only half rendered. Then, sometime later, the personalised content is injected into the page. This will be at least a little bit jarring as the page fills in the gaps.

You'll need to implement loading spinners, and hide content, and show the content perhaps with a transition. These things are rarely smooth and they differ from site to site. All of which does not help the user.

Sometimes the second request might finish after the user has scrolled down the page and started interacting. This means the user may not notice this new personalised content.

## 4. Extra work is needed

First, a designed needs to provide a loading indicator. Then they might need to design transitions.

Second, developers will need to implement this functionality and ensure this content is accessible to screen readers.

Third testers will need to test all this and using AJAX makes functional tests harder to write.

## 5. Performance actually degrades

Instead of a single HTTP request that contains the whole response there will now be multiple. The first would be for the Document containing non-personalised content. The subsequent request will be via AJAX and *will* hit your web server, therefore subject to the same latency as always.

And any performance increase is negated by the extra JS and CSS which needs to download and execute (reflows and repaints) in the browser. This includes:

* making a JSON request;
* parsing the response;
* handling errors;
* finding elements;
* traversing the Document tree;
* updating the Document; and
* loading spinners and whatever else.

## Summary

Content-caching *is* a very useful technique when used responsibly and for pages that don't contain personalised content. For pages that *do* contain personalised content, a [cookie check can determine whether the cached version should be served or not](https://blogs.akamai.com/2014/05/and-you-thought-your-page-could-not-be-cached.html).

It is ill-advised to misuse Javascript in this way as there are several negative side effects in doing so. AJAX should not break the web, it should enhance the experience where necessary.

AJAX seems like an innocent and beneficial solution, but in reality it encourages bad practice that creates several self-induced problems for users and the development team.

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