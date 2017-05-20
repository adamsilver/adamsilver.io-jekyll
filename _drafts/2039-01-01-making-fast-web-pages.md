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

They rarely appreciate because all this shit makes the page load slow, and hides stuff they want to see. Don't bother.

Heydon Pickering coined Unprogressive Non-enhancement as an design approach. This is how he expains it:

> You take some structured content, which follows the vertical flow of the document in a way that everyone understands.

> Which people traverse easily by either dragging their scroll bar with their mouse, or operating the keyboard using the up and down keys, or using the spacebar.

> Or if they're using a touch device, simply flicking backwards and forwards in that easy way that we've all become used to. What you do is you take that, and you fucking well leave it alone.

Letting things stack naturally like this is an excellent first move. Not only does it embrace the workings of a web page, and not only does it expose the content that users are looking for, but it's also extremely performant.

But this is not just about letting things stack. It's about chunking stuff across multiple pages. You see once pages have little on them, the page refresh issue disappears. Pages become fast by default.

With regards to long complex forms (or even shortish ones for that matter) there is a design pattern called One Thing Per Page. I've spoken and written about this before.

In fact, I talk about it so much at work, that I'm even starting to do my own head in with it. I dread to ask my colleagues what they think of my repetitive verbal abuse.

But I go on about it for good reason. If you're not aware of it, go have a read. It's worth it. I'll still be here, when you come back.

But this pattern shouldn't be reserved for forms. We can use it for other types of interface and just regular content.

For example, let's say you have a product page. It contains 25 high resolution images, a description, an add to basket form, extra details, dimensions, shipping information, related products, ratings, comments, and reviews or what have you.

Typically, the 25 high resolution images are collapsed down into a Carousel. I know, I just mentioned carousels again. But why not just load up one high resolution image, and include a *show all* link. Clicking it will show a simple page with 25 high resolution images.

The beauty here is that it keeps the product page fast. It also speeds up the image page as it only contains images. This is good because the user asked to see them all. The user will expect it to take a longer time. But also, it gives users choice, another quality of well-designed experiences.

Users visit the product page for many different reasons. Perhaps to check washing information, or to check the price, or perhaps on this occasion they want to scroll through each and every high resolution image.

Splitting the page up also gives users the ability to choose. Another quality that crops up often in well-designed interfaces. People on data contracts get to choose if they want to see those images, or wait for another time when they are connected to WIFI.

The same goes for tabs. Do you really need the stuff inside the tabs, if it's hidden. If not, get rid. If it's a little bit of information, just stack it. If not link out to separate pages again.

If you're brave, like Yaron, you might put the navigation menu on a page of it's own. Heydon also mentions is a useful accessible pattern in Menu Buttons[^].

And modal windows. The amount of times I see the model take up the entire screen, particularly on mobile. Just put it on a separate page. No need for extra code and complexity. Keep things fast, keep things simple.

This is a great start. But feel free to carry on. Scroll jacking: see ya. Floating labels: goodbye. Resize widgets: browsers have those&mdash;it's called <kbd>CMD+</kbd>. 29 different custom fonts: kill.

TODO: tesco product list, lots of ajax calls versus form multi checkbox and a single submit.

TODO: columns

## 2. Code

We've made excellent progress so far. And by removing or simplifying features we've drastically reduced the code already. But we can do more.

As Heydon explains in the same talk, Twitter's share script weighs in at 50k. But we only need a few bytes of HTML:

	<a href="https://twitter.com/share?source=tweetbutton&text=&quot;Article title&quot;&via=adambsilver&url=http://adamsilver.io/">Tweet</a>

I even took Heydon's advice and got rid of the share links altogether.

- grids (who needs a grid) https://github.com/Heydon/fukol-grids. Better if you don't have things in grids. Not talking visual grids. Talking about multiple columns. The code for a grid if you need for a product list is tiny.

- Using aria instead of using the right element. Use a heading for a heading, and a button for a button etc.

- break points. If you don't use device breakpoints, then you'll only add break points when the content breaks. That's less code.

- sass

- overly verbose CSS class names

- If the page is simple, the design system can be simple and you might even to use an even leaner CSS architecture such as Heydon's. I promise this article is not *just* about Heydon.

- Then there is the amount of js u need. Do u really need that framework. Sometimes you really might need it but I'm willing to bet that most of the time you don't.

- abstract all the common parts. In conjunction with previous point, put button in to a module of its own. Same class used everywhere. Good for gzip and CSS stays the same size. The module is reused.

- Using a CSS preprocessor.  I count tell u the amount of times I've witnessed them used badly.  They make for a very bloated page. I'm not blaming the tool. It's the usage but it's still a cause of the problem. We take less responsible for what these things spit out the other end.

## 3. Architecture

- CQRS
- CAP
- Edge caching
- Chunking (Jake)
- [Prefetch](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)
- lower down the stack quote
- service workers?
- http2 is faster
- revving assets etc
- gzip (design and code techniques help this technique, everything together helps)

---

## 4. Images

- If you really can't remove
- smush the shit
- show thumbnails first and load all images like rightmove
- or querystring to let user decide.
- or prove that

Got high Res images. Do u really need them? If so make sure u a) smush the shit out of them b) ask the user to download them thru a query string or send them to a dedicated page after displaying low Res thumbnails.  Old school technique. Good user experience. Test this though. But test it fairly. Don't compare this to large images on iPhone 79 on high speed world western web connections.

## What about *perceived* performance?

And that’s not all. Unlike aiming for ‘perceived’ performance gains — where you still send the same quantity of code but you chew it up first (ed: seriously) — you can actually make your Web Stuff cheaper to use. My data contract doesn’t care whether you send small chunks or one large chunk; it all adds up the same.

My favorite thing about aiming to have less stuff is this: you finish up with only the stuff you really need — only the stuff your user actually wants.

## Summary

Less weight, less complexity, less distraction, less bother, less bullshit.

## Links

- youmightnotneedjs.com
- uncrate.com
- http://openmymind.net/2012/5/30/Client-Side-vs-Server-Side-Rendering/
- https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf
-https://alistapart.com/article/planning-for-performance
- https://boagworld.com/marketing/users-will-always-choose-the-easiest-option-so-if-we-want-a-competitive-advantage-we-must-focus-on-simplicity/
- reference twitter and other articles moving away from client-side render.

## Other notes

It's why people ignore banner ads and second and third columns. More on that later.

Sometimes we even go one step further and put background videos on the screen; to make an impact; to be different; to separate us from the competition. These sorts of things are not the mark of a positive user experience.