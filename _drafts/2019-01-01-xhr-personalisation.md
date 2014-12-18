---
layout: post
title:  "Using AJAX to personalise the page"
date:   2019-01-01 09:00:01
categories: 
---

* Instead of having one page request for the document you now have multiple.
* The XHR calls are obviously going to be hitting the app/web server and will be slow.
* Accessibility - if hiding content until AJAX'd in that portion of the page requires js turned on, and the various features of js (xhr, dom traversal and updating etc)
* UX - the page is going to require updating after the fact the page has loaded and the user is interacting. Even on a relatively fast connection this can show itself. On a slow connection this is exacabated.
* None of these problems we have today

## Blah says:

> I think this would be a useful technique in only special situations. It does accomplish what you want but will require multiple downloads and will make a portion of your page unaccessible to those who have disabled Javascript (from what I have heard that is 10% of the intenet population).

> Plus I am dubious of the savings. The reason for the caching to not have a web brower contact the website. It can just retrieve the content from cache. But if it is having to retrieve a portion of the content anyway you still have to make a HTTP request. Might as well make that response a bit bigger and get rid of the multiple requests and more complex code.

> Sounds to me like this is going a little overboard on caching. Some pages are just not designed for caching. If that is the case then implement your application to use the “If-Modified-Since” header. That way the user can make their request but get back a small response in most cases.

> I think this is premature optimization.

## For JE

* How are we going to measure success

## Citations

"AJAX should not break the web" http://www.smashingmagazine.com/2010/02/10/some-things-you-should-know-about-ajax/