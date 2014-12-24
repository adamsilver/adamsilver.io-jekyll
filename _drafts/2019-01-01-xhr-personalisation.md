---
layout: post
title:  "Using AJAX to personalise the page"
date:   2019-01-01 09:00:01
categories: 
---

Sometimes, developers (usually server-side) are on a pursuit to reduce page-load time by utilising content caching. This is useful until a page contains personalised content, meaning this type of caching can't be used as provided as a user might receive the cached version of somebody elses personalised content. The problem arises with the suggestion that this can be solved using Javascript via XMLHttpRequest (XHR) also known as AJAX, to request (and render) the personalised content and this is problematic for several reasons.

## Personalised content?

Before discussing the problems let's define personalised content. Personalised content is any content that is specific to a user. A "Logout" link in the page header is personalised because the page knows that *you* are logged in and that *you* may want to logout.

So, about those problems...

## Multiple HTTP requests

Instead of having a single HTTP request that contains the entire required response there will now be multiple. The first would be for the Document containing non-personalised content (which will be content-cached after the first request). The subsequent request will be via XHR (and is obviously not content-cached). This means *this* request will be hitting your web server anyway with the same latency as always. Also, there might be a request for each encapsulated portion of content i.e. Personalised header might be one call, and personalised products might be another call. But this is a bit of an architecture rabbit-hole which won't be discuss further in this article.

## Accessibility

If the user doesn't have Javascript (or they have Javascript but not the capability to make XHR calls, DOM traversal or DOM manipulation etc) they will be unable to use this functionality. This goes against all the principles of Progressive Enhancement and is completely against the spirit of the web.

And in the case of "logging out" this would be a poor decision. Furthermore, extra effort would be required to ensure the XHR-injected content is accessibile to screen readers.

## User Experience

The experience needs careful consideration considering the page has loaded and rendered and sometime later the personalised content response arrives and we need to inject it. There will be somewhat of a jarring experience, as the page fills in the gaps. Solutions may include loading spinners, hiding content and transitions but in reality they are far from perfect. Also, the user may not see the various updates as they are busy interacting further down the page. This is exacabated on slower connections.

## Performance

Performance is somewhat negated due to the fact that extra Javascript (implementation as well as library functions for making requests, parsing JSON, injecting HTML etc) needs to be written and included on the page increasing page-weight, which slows down the page load times.

Then there is runtime performance, which is particularly sensitive on battery powered mobile devices [0?]. Additionally when you inject new HTML you have the cost of reflows and repaints further slowing down performance. If you don't do this it is as fast as it possibly can be i.e. a single request, parse and render.

Also there is the extra CSS to handle the UX patches that must be in place to make the jarring experience...well...less jarring.

## The AJAX problem

* error handling and the indefinite spinner. 
* look at article by heilmann.

## More work

Scripts to write, error handling to cover, harder to automate and changes the way in which automated functional tests are written. Covering off the UX behaviour and cross-browser compatibility - whereever you add script you add an indefinitely bigger chance of failure for some browsers. As stated previously, extra effort would be required to make XHR injected content accessible to screen readers.

## Summary

Content-caching on a proxy server is very useful and if you have personalised content, just check for the presence of a cookie to determine whether the cached version should be served or not. There is no need to misue Javascript in this way as there are several negative side effects from doing this. AJAX should not break the web, it should enhance the experience where necessary. The example in this article seems like an innocent and quick win but as you add more personalisation to more parts of the page and website you end up doing several injections and mapped requests which degrades the front-end architecture, performance and UX to boot.

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

> I think this would be a useful technique in only special situations. It does accomplish what you want but will require multiple downloads and will make a portion of your page unaccessible to those who have disabled Javascript (from what I have heard that is 10% of the intenet population).

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