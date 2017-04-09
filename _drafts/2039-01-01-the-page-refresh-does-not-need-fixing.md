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

---

Browse the Internet. I'll wait here while you do that. Back? Cool. You will have noticed that most websites are cram-packed with stuff you just don't need and that your eyes have learnt to glaze over. Even well-known successful websites suffer from this problem.

It's not just the *amount* of things, but its the things themselves. Quite often it's form over function. More literally speaking, we're prone to dumping several high resolution images on a single page.

Sometimes we even go one step further and put background videos on the screen; to make an impact; to be different; to separate us from the competition. These sorts of things are not the mark of a positive user experience.

More interestingly though is *why* do we do this. As I have an unhealthy obsession for simplicity, I've managed to research and consciously observe people practicing the are of complicating things. Here's some notes on the matter:

1. We, people that is, have a complex about doing more. Mark Jenkins wrote an article about two different designers and how their approach and the resulting contribution sets them apart. In short, we as humans always want to do more and we worry about our own contribution. The more we contribute the better we feel. But this is often counterproductive.

2. Greg McKeown talks about how success often breed failure because with success comes growth. With growth comes more opportunity, more departments, more people trying to contribute (see previous point). This manifests itself in different departments (marketing, digital, merchandising) vying for space on different parts of a website. Inevitably stuff gets added and pages get bloated.

3. We often think that people care about our product as much as we do. We get emotionally invested in the products we design. But most people don't care about our site like we do. They don't come for entertainment. They just want the outcome. So *we* get bored and *we* add more stuff. In many respects we come up with problems to solve.

4. More specifically related to this topic is that we think all users must complete tasks within 3 clicks[^] which is a gigantic UX myth. It's not about clicks (or pages), it's about users making their way through a process as quickly and as easily as possible.

5. We often confuse simplicity for having *one* of something[^]. But that's not necessarily true. Having one of something that is intertwined with many things is far from simple.

6. And lastly, we often assume that our users are the same as us. We think they have the same cutting edge devices and the same expensive data contracts. But actually they don't[^West].

Whatever the reason, we end up having to come up with clever ways to make slow pages faster. It's like eating donuts ever day, putting on five stone in weight, and then coming up with innovative ways to make a fat man run fast. I'm thinking rocket boots, do you have any better ideas?

*Innovation* by the way is a dirty word. Most often, it's seen as a license to spend a lot of time solving problems that are typically introduced by the same person trying to solve them.

Ultimately, somebody announces *the page refresh is the problem*. To get rid of the page refresh we can put everything on a single page and use AJAX. But this is rather obviously not solving the actual problem. AJAX doesn't avert the server-side round trip. It just avoids the page refresh.

Even with AJAX, the page still needs to repaint. It still has to make requests to the server. That's not all. There are penalties in using AJAX. We need to send more code to the user to do this fancy stuff and we need to write more code to handle errors and to show a custom loading indicator.

Loading indicators, by the way, are a problem because they aren't accurate, like the browser's native implementation. And they aren't familiar to the user&mdash;that is, they are always custom to the site implementing them. But familiarity is a UX convention that we should only break if we really really have to.

It's clear that in many ways by trying to improve the experience we've created a poorer one. The problem isn't that the page is slow, the real problem is designing a page that cannot be fast.