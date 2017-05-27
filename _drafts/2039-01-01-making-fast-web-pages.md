---
layout: post
title: Making websites fast
date: 2039-01-01 09:00:01
categories: ux performance
---

This is how it goes. We cram a load of shit onto a single web page. This makes the page slow. Slow to load, slow to render. Slow.

Instead of getting rid of the shit, we blame the page refresh. There's only one way to avoid the page refresh and that's AJAX.

However, AJAX still needs to render new (parts of) screens. More crucially it still has to make a request to the server. That's not all&mdash;there are penalties in using AJAX.

First, making requests, handling different responses, traversing the Document and injecting HTML requires *more* code to be sent initially. This needs to be sent, evaluated and executed on the client.

Second, AJAX engineers away things the browser does for free, such as chunking and progressive rendering (more on this later). To avoid this problem we must resort to hacks that need even more code. Plus nobody uses the hack anyway.

Furthermore, we need to design and build a custom loading indicator. Not only is this yet more work and more code but they are a poor replacement for the ones provided by browsers.

This is because a brower's indicator displays progress. That is, a user can tell how long until the request finishes. Custom spinners don't display progress, so users get frustrated and click again, causing their experience to slow down further.

Custom indicators are unfamiliar as they lok different per site and are positioned differently. Browser indicators appear in the same place no matter the website. Familiarity and accuracy are two qualities often found in well-designed interfaces.

This is not to say that AJAX is *bad*. AJAX is a useful enhancement depending on the situation because it avoids repetitively requesting and re-evaluating client-side assets.

However, it's not a solution to slow-loading pages. At best it patches over the real problems that lie beneath.

The real problem is that we have designed something that can never be fast. Therefore, the real question is how do we make sure our websites are fast?

## 1. UI

The best way to make pages fast, is to have less on them. You'd be forgiven for wanting to punch me in the face for this statement as it's so obvious. Yet, look around, web pages keep getting fatter.

Do we really need hero images, background videos and social media buttons plastered everywhere? The answer from the people is a resounding *no*. The fastest feature is the one we never build.

What about they we design interfaces? Hamburger menus, tabs, carousels, accordions, image galleries and expanding panels.

What do these design patterns have in common? They hide stuff. Designers are obsessed with patterns that save space and look clean. A clean interface is good but not at the cost of clarity.

If pages only contain the essential, then there is often nothing (or much less) that needs to be hidden. And despite the effort, making fully responsive and inclusive interface components is yet *more* code.

More code that users rarely appreciate. This is because:

- these components cause slow loading and rendering
- hiding things requires effort to reveal it

Heydon Pickering coined the seemingly satirical term *Unprogressive Non-enhancement*. This is how he expains it:

> You take some structured content, which follows the vertical flow of the document in a way that everyone understands.

> Which people traverse easily by either dragging their scroll bar with their mouse, or operating the keyboard using the up and down keys, or using the spacebar.

> Or if they're using a touch device, simply flicking backwards and forwards in that easy way that we've all become used to. **What you do is you take that, and you fucking well leave it alone.**

Letting things stack naturally like this is an excellent start. Not only does this embrace the way the web works&mdash;not only does it make access remarkably easy&mdash;it's also extremely performant.

But letting things stack isn't our only option. We can chunk stuff across multiple pages. Once pages have little on them, the page refresh "problem" is no longer a problem. Pages are fast by default and by design.

With regards to long complex forms (or even shortish ones for that matter) there is the [One Thing Per Page](https://www.smashingmagazine.com/2017/05/better-form-design-one-thing-per-page/) pattern which I've spoken and written about before.

In fact I talk about it so much at work, that I'm even starting to do my own head in with it. I dread to ask my colleagues what they think of my repetitive verbal abuse.

But I go on about it for good reason. If you're not aware of it, go have a read. It's worth it. Importantly, this pattern can be extended beyond forms.

For example, imagine a product page containing 10 high-res photos, a description, an add to basket form, dimensions, shipping information, related products, ratings, comments, and reviews or what have you.

Typically, the images are collapsed down into a carousel. Instead, load up one image and include a *show all* link. Clicking this link would naturally show a page with all the images on it.

This keeps the product page lightning fast. No images, means no need for a carousel. No carousel means far less code.

Also, the image page is as fast as it can be. Once again no carousel is needed.

Not only is this in all likeliness easier to use, but the user will expect *this* page to take a little longer to load. It contains images afterall.

Users don't always come to a product page and view everything. Giving users the choice to drill down quickly is another quality of well-designed experiences.

People on expensive data contracts benefit too. They can choose to see the images or wait until they are connected to WI-FI.

It's also easier to share. Imagine sending the user to the product page in order for them to look at a particular photo within the carousel. When they arrive at the page that image won't be there. They'll have to swipe to discover it.

The same goes for tabs. If stuff is hidden by default, I would question just how important it is to the page. If the tab contains a little bit of content, just stack it. If not perhaps linking to a separate page will work well.

If you're brave, like Yaron, you could place your site's [menu on a separate page](http://yaronschoen.com/table-of-contents/) too.

Modal windows, oh modal windows. They often take up the entire screen particularly on small screens. Instead, put the content on a separate page, don't break the back button and keep the experience fast. Less code and less problems equals faster experiences.

Scroll jacking? [Floating labels](/articles/floating-labels-are-problematic/)? Resize widgets? Custom fonts. Kill.

Okay breath (that was for me, not for you). That felt good for, did it for you? Let's continue anyway.

## 2. Code

Technically speaking, we've already been attending to the size of code, but we've done so by just not coding things at all&mdash;my favourite way to do things. But what if we have to code stuff?

### Use the right element

They are free, accessible and performant by default. An example: `<button>` vs `<div role="button" tabindex="0">`. Not only is `<button>` less than half the size of the `<div>`, it doesn't require any extra code to make it accessible.

### Bloated HTML

One thing

Don't use extra elements or overly class names.

If the page is simple, the design system can be simple and you might even to use an even leaner CSS architecture such as Heydon's.

### Third party scripts

Twitter's tweet button script is 50k. We don't even need that script. We can use a link coming in at a few bytes.

	<a href="https://twitter.com/share?source=tweetbutton&text=&quot;Article title&quot;&via=adambsilver&url=http://adamsilver.io/">Tweet</a>

Often, we start with libraries and frameworks before we understand the problem we're solving. These libraries and frameworks not only weigh a lot, but they need evaluating and executing.

But just as often we don't actually need the thing. Get rid and only add something when you need it.

### Grids

(who needs a grid) https://github.com/Heydon/fukol-grids. Better if you don't have things in grids. Not talking visual grids. Talking about multiple columns. The code for a grid if you need for a product list is tiny

### Breakpoints

If you don't use device breakpoints, then you'll only add break points when the content breaks. That's less code.

### Preprocessors

I count tell u the amount of times I've witnessed them used badly.  They make for a very bloated page. I'm not blaming the tool. It's the usage but it's still a cause of the problem. We take less responsible for what these things spit out the other end.

### Design system

Abstract all the common parts. In conjunction with previous point, put button in to a module of its own. Same class used everywhere. Good for gzip and CSS stays the same size. The module is reused.

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

## TODO

-tesco product list, lots of ajax calls versus form multi checkbox and a single submit.
- columns
- checkout heydonws menu article