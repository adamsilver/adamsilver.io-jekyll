---
layout: post
title:  "Don't use AJAX to display personalised content on cached pages"
date:   2014-12-29 09:00:01
categories: js
---

Sometimes, developers are on a pursuit to reduce page-load time by utilising content caching [[0](#ref0)]. This is useful until a page contains personalised content, meaning this type of caching can't neccessarily be used. This is because a user might receive the cached version of somebody elses personalised content. The problem arises with the suggestion that this can be solved using AJAX to request the personalised content and this is problematic for several reasons. Before discussing the problems, let's define personalised content.

## Personalised content

Personalised content is any content that is specific to a user. The most basic example would be a "Logout" link because the page knows that *you* are logged in and that *you* may want to logout.

## Architecture

*Is there one extra request for personalised content or multiple? Do you serve it as JSON and then parse that on the client? How do you organise your scripts for this? How do you organise the view partials for this on the server? At what point is personalised content not essential to the User Experience (UX) and how does that affect architecture?*

What seems like a simple use of AJAX has a significant effect on architecture and it doesn't stop there.

## Accessibility

If the user doesn't have Javascript (or they have it but not the capability to make AJAX requests, traverse or manipulate the Document etc) they will be unable to use this functionality. This goes against the principle of Progressive Enhancement [[1](#ref1)] and is completely against the spirit of the web. And in the case of "logging out" this would obviously be a poor decision. Furthermore, extra effort would be required to ensure the injected content is accessibile to screen readers. This alone is reason enough to realise this is an unacceptable technical solution.

## Design

Christian Heilmann rightly says that *AJAX shouldn't break the web* [[2](#ref2)] and using it in this way is doing just that. He also highlights that when AJAX is used, it is important to remember how much the browser does for free, that subtly goes unnoticed. This includes displaying a loading indicator with  progress bar as well as handling page not found and timeout errors. Utilising AJAX and content-caching like this, means the page is only half loaded and half rendered at which point, and sometime later, the personalised content is injected. The UX is likely to be at least a little jarring as the page fills in the gaps.

Solutions may include loading spinners, hiding content and transitions but in reality they are far from perfect. Also, the user may not see the various updates as they are busy interacting further down the page. This is all exacabated on slower connections.

## Effort

Extra design effort is required to cater for the aformentioned degrading in UX. Extra development effort is required to write and test script. It's also harder to automate the functional testing and changes the way in which those tests are written.

## Performance

Instead of having a single HTTP request that contains the entire required response there will now be multiple. The first would be for the Document containing non-personalised content. The subsequent request will be via AJAX and *will* hit your web server, therefore subject to the same latency as always.

The potential performance benefit is somewhat negated by requiring extra Javascript including invoking and (parsing) the JSON request, finding elements, traversing and updating the Document. All of this code adds to the page-weight slowing down the load time. There is also extra CSS required to alleviate the self-induced jarring experience. Runtime performance also degrades because injecting HTML causes reflows and repaints.

## Summary

Content-caching *is* a very useful technique when used responsibly and for pages that don't contain personalised content. For pages that *do* contain personalised content, a simple cookie check can determine whether the cached version should be served or not [[3](#ref3)]. It is ill-advised to misuse Javascript in this way as there are several negative side effects in doing so. AJAX should not break the web, it should enhance the experience where necessary. AJAX seems like an innocent and beneficial solution, but in reality it encourages bad practice that creates several self-induced problems for users and the development team.

## Citations

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="https://developer.akamai.com/stuff/Caching/Content_Caching.html">Content caching</a></dd>
	<dt class="citation" id="ref1">[1]</dt>
	<dd><a href="http://jakearchibald.com/2013/progressive-enhancement-still-important/">Progressive Enhancement is still important</a></dd>
	<dt class="citation" id="ref2">[2]</dt>
	<dd><a href="http://www.smashingmagazine.com/2010/02/10/some-things-you-should-know-about-ajax/">Some things you should know about AJAX</a></dd>
	<dt class="citation" id="ref3">[3]</dt>
	<dd><a href="https://blogs.akamai.com/2014/05/and-you-thought-your-page-could-not-be-cached.html">And you thought your page could not be cached</a></dd>
</dl>

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