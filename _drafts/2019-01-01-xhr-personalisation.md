---
layout: post
title:  "Using AJAX to personalise the page"
date:   2019-01-01 09:00:01
categories: 
---

Sometimes, developers (usually server-side) are on a pursuit to reduce page-load time by utilising content caching. This is useful until a page contains personalised content, meaning this type of caching can't be used as provided as a user might receive the cached version of somebody elses personalised content. The problem arises with the suggestion that this can be solved using AJAX, to request (and render) the personalised content and this is problematic for several reasons.

## Personalised content?

Before discussing the problems let's define personalised content. Personalised content is any content that is specific to a user. A "Logout" link in the page header is personalised because the page knows that *you* are logged in and that *you* may want to logout.

So, about those problems...

## Multiple HTTP requests

Instead of having a single HTTP request that contains the entire required response there will now be multiple. The first would be for the Document containing non-personalised content (which will be content-cached after the first request). The subsequent request will be via AJAX (and is obviously not content-cached). This means *this* request will be hitting your web server anyway with the same latency as always. Also, there might be a request for each encapsulated portion of content i.e. Personalised header might be one call, and personalised products might be another call. But this is a bit of an architecture rabbit-hole which won't be discuss further in this article.

## Accessibility

If the user doesn't have JS (or they have JS but not the capability to make AJAX requests, DOM traversal or DOM manipulation etc) they will be unable to use this functionality. This goes against all the principles of Progressive Enhancement and is completely against the spirit of the web.

And in the case of "logging out" this would be a poor decision. Furthermore, extra effort would be required to ensure the XHR-injected content is accessibile to screen readers.

## User Experience

The experience needs careful consideration considering the page has loaded and rendered and sometime later the personalised content response arrives and we need to inject it. There will be somewhat of a jarring experience, as the page fills in the gaps. Solutions may include loading spinners, hiding content and transitions but in reality they are far from perfect. Also, the user may not see the various updates as they are busy interacting further down the page. This is exacabated on slower connections.

## Performance

This entire endeavour is about decreasing page-load time. However, the performance benefit is somewhat negated by requiring extra JS which is likely to include implementation (which is likely to involve request, traverse and update Document based on response) and some library functions for making requests, parsing the (JSON) response, retrieving elements, traversing the Document and inject HTML. All of this code adds to the page-weight slowing down the load time. There is also extra CSS required to alleviate the potentially jarring UX.

Runtime performance also degrades, particularly with sensitive battery-powered mobile devices. Also, when updating the Document there is the cost of reflows and repaints further slowing down performance. 

## The AJAX problem

* error handling and the indefinite spinner. 
* look at article by heilmann.

## Effort

Let's not forget the extra development effort required for this to happen. More scripts to write and test, more error handling to cover, it's harder to automate and changes the way in which automated functional tests are written. Whereever script is added there is a significantly higher chance of failure for some browsers.

## Summary

Content-caching *is* a very useful technique when used responsibly and for pages that don't contain personalised content. For pages that *do* contain personalised content, a simple cookie check can determine whether the cached version should be served or not. There is no need to misue JS in this way as there are several negative side effects in doing so. AJAX should not break the web, it should enhance the experience where necessary. The example in this article seems like an innocent, quick win but as you can see it's problematic and encourages bad practice as more personalised features are added to the website.

## Citations

[0]: https://developer.akamai.com/stuff/Caching/Content_Caching.html
[0]: http://itamarst.org/writings/dynamiccaching.html
[0]: http://www.smashingmagazine.com/2010/02/10/some-things-you-should-know-about-ajax/
[0]: https://blogs.akamai.com/2014/05/and-you-thought-your-page-could-not-be-cached.html

------------------------------------------------------------

## For JE

* How are we going to measure success
* Progressive enhance and phase 2 it
* scope creeping story, not the aim
* needs to be thought out for entire site strategy not just serp
* affects front end architecture

## Comment from blog covers it off:

> I think this would be a useful technique in only special situations. It does accomplish what you want but will require multiple downloads and will make a portion of your page unaccessible to those who have disabled JS (from what I have heard that is 10% of the intenet population).

> Plus I am dubious of the savings. The reason for the caching to not have a web brower contact the website. It can just retrieve the content from cache. But if it is having to retrieve a portion of the content anyway you still have to make a HTTP request. Might as well make that response a bit bigger and get rid of the multiple requests and more complex code.

> Sounds to me like this is going a little overboard on caching. Some pages are just not designed for caching. If that is the case then implement your application to use the “If-Modified-Since” header. That way the user can make their request but get back a small response in most cases.

> I think this is premature optimization.

## Other ways of getting siginifant perf benefits

* group ajax calls on menu page - thats a LOT of calls.
* keep page light weight
* make search accurate
* smush images
* reduce page weight in assets, css, js

Todo: 

* cache invalidated means it goes to server anyway