---
layout: post
title:  "Using AJAX to personalise the page"
date:   2019-01-01 09:00:01
categories: 
---

Sometimes, developers (typically with a background in server-side development) are on a pursuit to reduce page-load time by utilising content caching [0]. This is useful until a page contains personalised content, meaning this type of caching can't be used. The problem arises with the suggestion that Javascript with XMLHttpRequest (XHR) also known as AJAX, to pull the personalised content in and this is problematic for several reasons.

## Personalised content?

Before getting to the problem let's define personalised content. Personalised content is any content that is specific to a user. A "Logout" link in the page header is personalised because the page knows that *you* are logged in and that *you* may want to logout.

So let's get back to the problem...

## Multiple HTTP requests

Instead of having a single HTTP request that contains the entire required response there will now be multiple. The first would be for the Document containing non-personalised content (which will be content-cached after the first request). The subsequent request will be via XHR (and is obviously not content-cached). This means *this* request will be hitting your web server anyway with the same latency as always. The amount of XHR requests might increase for each bit of personalised content but that's a bit of an architecture rabbit-hole which we won't discuss here.

## Accessibility

If the user doesn't have Javascript, or they have Javascript but not the capability to make XHR calls, DOM traversal or DOM manipulation etc they will be unable to use this functionality. This goes against all the principles of Progressive Enhancement and is completely against the spirit of the web. 

And in the case of "logging out" this would be a poor decision. Furthermore, extra effort would be required to make the XHR injected content accessibile to screen readers.

## User Experience

The experience needs careful consideration considering the page has loaded and rendered and sometime later the personalised content response arrives and we need to inject it. There will be a jarring experience of sorts as the page fills in the gaps. Loading spinners, hiding content and transitions come to mind and they are still quite jarring and may not see the various updates as they are busy interacting further down the page. The slower the connection the more this is exacabated.

## Performance

Whilst the entire endeavour is based on speed the extra scripts required for implementation and library type functions (that may already be available on the page YMMV) need to be included on the page increasing page weight and slowing down the page load.

Then you have the runtime performance which is particularly sensitive on battery powered mobile devices [0?]. Additionally when you inject new HTML you have the cost of reflows and repaints further slowing down performance. If you don't do this you have one request, one parse, one render.

Also there is the extra CSS to handle the UX patches that must be in place to make the jarring experience...well...less jarring.

## The AJAX problem

* error handling and the indefinite spinner. 
* look at article by heilmann.

## More work

Scripts to write, error handling to cover, harder to automate and changes the way in which automated functional tests are written. Covering off the UX behaviour and cross-browser compatibility - whereever you add script you add an indefinitely bigger chance of failure for some browsers. As stated previously, extra effort would be required to make XHR injected content accessible to screen readers.

## Summary

* None of these problems we have today
* "AJAX should not break the web" 
* Premature and unecessary optimisation
* Pages that 

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