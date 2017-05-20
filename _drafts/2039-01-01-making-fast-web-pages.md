---
layout: post
title: Making websites fast
date: 2039-01-01 09:00:01
categories: ux performance
---

This is how it goes. We cram a load of shit onto a single web page. This makes the page slow. Slow to load, slow to render. Slow.

Instead of getting rid of the shit, we blame the page refresh. There's only one way to avoid the page refresh and that's AJAX.

However, AJAX still needs to render new (parts of) screens. More crucially it still has to make a request to the server. That's not all&mdash;there are penalties in using AJAX.

First, in order to: make requests, handle different responses, traverse the Document and inject HTML requires more code which needs to be sent, evaluated and executed on the client.

Second, we end up engineering away things the browser does for free, such as chunking/progressive rendering (more on this later). To keep this benefit we must resort to hacks that need even more code.

Third, we need to design and build our own loading spinner. Not only is this more work and code but they are a poor replacement for the ones provided by the browser.

This is because they display progress leading to the dreaded infinite spinner. And they're also unfamiliar. Browser loading indicators appear in the same spot on every website they visit. Familiarity and accuracy are two qualities often found in a well-designed interface.

This is not to say that AJAX is *bad*. AJAX is a useful enhancement depending on the situation because it avoids repetitively requesting and re-evaluating client-side assets.

With that said, it's not a solution to slow-loading pages. At most it patches over the real problems that lie beneath.

The real problem is that we have designed something that can never be fast. The real question is how do we make sure our websites are fast?

## 1. UI

The best way to make fast pages is to have less on it. It's so obvious and yet we keep piling on the pounds. Go and browse the Internet and you'll see what I mean.

Do we really need hero images, background videos and social media buttons plastered everywhere or modal dialogs? The answer from the people is resounding *no*. The fastest feature is the one you never built.

That's the obvious stuff out of the way, but what about the way we design interfaces: hamburger menus, tabs, carousels, accordions, image galleries and expanding panels.

What these design patterns have in common is that they hide stuff. Designers are obsessed with patterns that save space and look clean. A clean interface is good but not at the cost of clarity.

If a page only contains the essential, then there is nothing we need to bother hide. Designing fully responsive and inclusive components like these take much effort, much testing and send a whole load of code to the user that they rarely appreciate.

Don't bother.

Heydon Pickering describes this approach as Unprogressive Non-enhancement. This is how he describes the term:

> You take some structured content, which follows the vertical flow of the document in a way that everyone understands.

> Which people traverse easily by either dragging their scroll bar with their mouse, or operating the keyboard using the up and down keys, or using the spacebar.

> Or if they're using a touch device, simply flicking backwards and forwards in that easy way that we've all become used to. What you do is you take that, and you fucking well leave it alone.

It's not just about letting things stack but it's about using pages as a form of progressive disclosure. There is a dedicated pattern called One Thing Per Page which works superbly well for forms, but there is no reason not to extend this to other types of chunking.

For tabs, instead of stacking, just have a page refresh that goes to a dedicated page.

For an image gallery, just show one high quality to keep the inital page loading fast and offer a "view all" dedicated page. In fact this is always a better experience for sites that offer it, such as RightMove.co.uk.

You could even [put the menu to a dedicated page](http://yaronschoen.com/table-of-contents/) if you felt brave, which is exactly what Yaron does on his site.

Modal windows are a prime example, of putting too much on a single page. Normally the stuff shoved inside one, takes up the whole screen, particualrly on mobile. Just put it on a separate page.

When pages are light and well built, the page refresh problem is simply not a problem and not something users will notice or care about.

Then these other features that you should just not use: scroll jacking, floating labels or adding stuff a browser does for free such as text resizing and complex grid layouts.

I could go on forever, but I'm forcing myself to stop.

TODO: And it's a good way of designing an inclusive menu[^ heydowns menu component article].

## 2. Code

Number 1 is the most important, because not doing something requires not even writing code but there are things around the code itself.

- grids (who needs a grid) https://github.com/Heydon/fukol-grids. Better if you don't have things in grids. Not talking visual grids. Talking about multiple columns. The code for a grid if you need for a product list is tiny.

- social media scripts. Heydon shows that the code should be a few bytes, but the Twitter embed script is 50k. Just because you didn't write it, doesn't mean it's not your fault.

- Using aria instead of using the right element. Use a heading for a heading, and a button for a button etc.

- break points. If you don't use device breakpoints, then you'll only add break points when the content breaks. That's less code.

## 3. Architecture

---

## 4. Images

- If you really can't remove
- smush the shit
- show thumbnails first and load all images like rightmove
- or querystring to let user decide.
- or prove that

Got high Res images. Do u really need them? If so make sure u a) smush the shit out of them b) ask the user to download them thru a query string or send them to a dedicated page after displaying low Res thumbnails.  Old school technique. Good user experience. Test this though. But test it fairly. Don't compare this to large images on iPhone 79 on high speed world western web connections.

## 4. Do you really need that tool (sass) or framework (js)

- Then there is the amount of js u need. Do u really need that framework. Sometimes you really might need it but I'm willing to bet that most of the time you don't.

- Using a CSS preprocessor.  I count tell u the amount of times I've witnessed them used badly.  They make for a very bloated page. I'm not blaming the tool. It's the usage but it's still a cause of the problem. We take less responsible for what these things spit out the other end.

## 5. Performance techniques

- CQRS
- CAP
- Edge caching
- Chunking (Jake)
- [Prefetch](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)
- lower down the stack quote
- service workers?
- http2 is faster
- revving assets etc

- abstract all the common parts. In conjunction with previous point, put button in to a module of its own. Same class used everywhere. Good for gzip and CSS stays the same size. The module is reused.

## What about *perceived* performance?

And that’s not all. Unlike aiming for ‘perceived’ performance gains — where you still send the same quantity of code but you chew it up first (ed: seriously) — you can actually make your Web Stuff cheaper to use. My data contract doesn’t care whether you send small chunks or one large chunk; it all adds up the same.

My favorite thing about aiming to have less stuff is this: you finish up with only the stuff you really need — only the stuff your user actually wants.

## Summary

- TODO

Less weight, less complexity, less distraction, less bother, less bullshit.

---

youmightnotneedjs.com

uncrate.com

## Other bits

It's like when someone tidys there house and puts shit in cupboards but the shit is all still there. They haven't decluttered. They have organised. But for pages to be fast they need to be decluttered.

If something can be done lower down the stack it should. We control the speed of our servers. Not the speed of peoples devices and connections.

My site. Experience at DT making an app.

Tesco list page.

http://openmymind.net/2012/5/30/Client-Side-vs-Server-Side-Rendering/

https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf

Links:
-https://alistapart.com/article/planning-for-performance
- https://boagworld.com/marketing/users-will-always-choose-the-easiest-option-so-if-we-want-a-competitive-advantage-we-must-focus-on-simplicity/
- reference twitter and other articles moving away from client-side render.

---

Browse the Internet. I'll wait here while you do that. Back? Cool. You will have noticed that most websites are cram-packed with stuff you just don't need and that your eyes have learnt to glaze over. Even well-known successful websites suffer from this problem.

It's why people ignore banner ads and second and third columns. More on that later.


It's not just the *amount* of things, but its the things themselves. Quite often it's form over function. More literally speaking, we're prone to dumping several high resolution images on a single page.

Sometimes we even go one step further and put background videos on the screen; to make an impact; to be different; to separate us from the competition. These sorts of things are not the mark of a positive user experience.

---

If you have a carousel of images, like a typically ecommerce site or property site. Just show one decent quality image, and allow the user to view more on another page. Another page means link friendly, share friendly, and fast. It also means the user has chosen to look at images, meaning they'll expect a longer loading time.

