---
layout: post
title: Making web pages fast
date: 2039-01-01 09:00:01
categories:
---

Often, we cram too much into a single page. This causes the page to load slower. This leads to people blaming the page refresh for performance problems.

All to often they'll then suggest using AJAX.

AJAX, however, still needs to render new (parts of) screens. More crucially, it still has to make a request to the server.

And that’s not all. There are penalties in using AJAX.

1. We have to send more code to the user to make an AJAX request and handle errors causing slow page-load times.
2. As we have engineered away what the browser does for free with chunking and progressive rendering we have to hack and stuff.
3. We need to implement a custom loading indicator, aka a spinner, which is problematic because it's not familiar or accurate.

Loading indicators, by the way, are a problem because they aren’t accurate, unlike the browser’s native implementation. And they aren’t familiar to the user — that is, they are always custom to the site implementing them. But familiarity is a UX convention that we should only break if we really really have to.

This is not to say that AJAX is “bad”. AJAX is a useful enhancement in some situations as it avoids the need to request and reevaluating the same assets over and over.

However, it's not a solution to slow-loading pages. The real problem is that we've design a huge page that can never be fast.

So how do we make pages fast?

## 1. Write less damn code

- tabs
- grids
- carousels
- see heydon article
- etc etc

## 2. Chunk information across pages

- one thing per page
- image example
- nav example (http://yaronschoen.com/table-of-contents/)

## 3. Dealing with images

- If you really can't remove
- smush the shit
- show thumbnails first and load all images like rightmove
- or querystring to let user decide.
- or prove that

Got high Res images. Do u really need them? If so make sure u a) smush the shit out of them b) ask the user to download them thru a query string or send them to a dedicated page after displaying low Res thumbnails.  Old school technique. Good user experience. Test this though. But test it fairly. Don't compare this to large images on iPhone 79 on high speed world western web connections.

## 4. Do you really need that tool (sass) or framework (js)

- Then there is the amount of js u need. Do u really need that framework. Sometimes you really might need it but I'm willing to bet that most of the time you don't.

- Using a CSS preprocessor.  I count tell u the amount of times I've witnessed them used badly.  They make for a very bloated page. I'm not blaming the tool. It's the usage but it's still a cause of the problem. We take less responsible for what these things spit out the other end.

## 5. Good techniques

- CQRS
- CAP
- Edge caching
- Chunking (Jake)
- [Prefetch](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)
- lower down the stack
- service workers?
- http2?
- revving assets etc

## Summary

TODO

## Other bits

It's like when someone tidys there house and puts shit in cupboards but the shit is all still there. They haven't decluttered. They have organised. But for pages to be fast they need to be decluttered.

If something can be done lower down the stack it should. We control the speed of our servers. Not the speed of peoples devices and connections.

One thing per page branching bit with two drop downs. People expect a page to LOAD. But not for a second drop down to load after selecting an item in the first.

My site. Experience at DT making an app.

Tesco list page.

http://openmymind.net/2012/5/30/Client-Side-vs-Server-Side-Rendering/

https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf

Ask Raj about perf.

Tabs: penalty - load up all the stuff that goes into each tab. Need script to run and enhance. Instead, just make it look like a tab or make it a link. Perhaps.

Tabs js is an anti pattern. It's not mobile first friendly  .Encourages more. And thinks there is a fold that needs dealing with.

Links:
-https://alistapart.com/article/planning-for-performance
- https://boagworld.com/marketing/users-will-always-choose-the-easiest-option-so-if-we-want-a-competitive-advantage-we-must-focus-on-simplicity/
- reference twitter and other articles moving away from client-side render.