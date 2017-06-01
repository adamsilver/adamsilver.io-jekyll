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

Custom indicators are unfamiliar as they look different per site and are positioned differently. Browser indicators appear in the same place no matter the website. Familiarity and accuracy are two qualities often found in well-designed interfaces.

This is not to say that AJAX is *bad*. AJAX is a useful enhancement depending on the situation because it avoids repetitively requesting and re-evaluating client-side assets.

However, it's not a solution to slow-loading pages. At best it patches over the real problems that lie beneath.

The real problem is that we have designed something that can never be fast. Therefore, the real question is how do we make sure our websites are fast?

## 1. Simplify the interface

The best way to make pages fast, is to have less on them. You'd be forgiven for wanting to punch me in the face for this statement as it's so obvious. Yet, look around, [web pages keep getting fatter](https://www.keycdn.com/support/the-growth-of-web-page-size/).

Do we really need hero images, background videos and social media buttons plastered everywhere? The answer from the people is a resounding *no*. The fastest feature is the one we never build.

What about they way we design interfaces? Hamburger menus, tabs, carousels, accordions, image galleries and expanding panels.

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

Scroll jacking, [floating labels](/articles/floating-labels-are-problematic/), [font-size widgets](http://adrianroselli.com/2016/12/dont-re-create-browser-features.html), custom fonts. Kill.

Calm, relax. That was for me, not for you. I hope you found that as therapeutic as I did. Let's continue.

## 2. Reduce code

By simplifying the interface itself, we've already  reduced the size of the code significantly. But we can do more:

### 1. Create lean HTML

Sometimes developers use the wrong element. A `<button>`, for example, is half the size of `<div role="button" tabinidex="0">` and doesn't require any script to make it accessible.

[Divitus](https://csscreator.com/divitis) is an antiquated buzzword, but its meaning is still prevalent today. We often use [additional elements unncessarily](http://getbootstrap.com/components/#navbar-brand-image). Additional elements take longer to request, parse and render. Every element needs justification for its existence.

Classitus, is the use of extra classes. Extra classes may decrease CSS footprint, but signifcantly increases the HTML. Keeping HTML lean is important because unlike CSS, it can't be cached, because it often contains personalised and dynamic content.

We may also find ourselves adding various [attributes in the name of accessibility]((https://silktide.com/i-thought-title-text-improved-accessibility-i-was-wrong/)). They aren't always valuable and add further weight to the page.

Similarly, the first rule of ARIA is not to use it. To associate errors to a form control, we might use `aria-describedby` as follows:

	<label for="age">
      Age
	</label>
	<div id="age_error">Enter your age</div>
	<input id="age" aria-describedby="age_error">

Instead put the error in the label:

	<label for="age">
      Age
      <div>Enter your age</div>
	</label>
	<input id="age">

Using [HTML attributes to automagically initialise script](/articles/dont-initialise-javascript-automagically/) also increases the size of HTML (and has other problems too).

And whilst a codified grid system is rarely needed and often problematic in practice, if you need one you may consider far [more minimal approach](https://github.com/Heydon/fukol-grids).

### 2. Simplify your design system

For example, the design of public-facing government services have a simple interface. Everything is aligned left and everything stacks naturally. In this case, we may be able to [avoid CSS classes altogether](https://www.smashingmagazine.com/2016/11/css-inheritance-cascade-global-scope-new-old-worst-best-friends/). A simple interface is a performant one.

### 3. Use less script

I've talked about the [problem with single page applications](/articles/the-disadvantages-of-single-page-applications/) before. Contrary to popular belief, they aren't necessarily faster. Using AJAX engineers away the ability to [chunk responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding#Chunked_encoding). See the video in [Jake's article for evidence](https://jakearchibald.com/2016/fun-hacks-faster-content/).

It's not just the act of rendering. The code required to create robust client-side applications is large in size too with all the same problems we've already discussed.

If we need a library, maybe we don't need the whole library. Don't put that burden on your users. Starting with an entire framework or library puts you on the back foot.

Twitter's tweet [button script weighs 50k](http://www.heydonworks.com/article/look-at-this-shitty-tweet-button). We can do the same thing with 0 bytes with a simple href.

### 4. Use preprocessors responsibly

[Preprocessors are deceitful](https://jaketrent.com/post/cons-css-preprocessors/#file-size-is-deceiving). What looks like small code to begin with may end up huge after compilation.

### 5. Use content breakpoints

Designing every screen and module to a predefined set of breakpoints is not only backwards, but it often results in more code.

Many a time, a module needs one breakpoint, or no breakpoints. Designing to predefined breakpoints also encourages the unnecessary tweaking of a design.

## 3. Optimise images

Not everyone surfs the world western web on high quality devices. But if you really need that high resolution image:

- [use the right image](https://www.sitepoint.com/gif-png-jpg-which-one-to-use/)
- [smush the shit out of it](https://imageoptim.com/mac)
- [use progressive rendering](https://blog.codinghorror.com/progressive-image-rendering/)

## 4. The other stuff

The following techniques are less to do with the user interface, and more to do with technology lower down the stack.

CQRS makes database queries faster. If you're application is national or even global then users might benefit from edge caching.

Enable chunking to show them what you got. Cache your assets so users don't have to download them again.

Turn on Gzip (using a well-designed design system improves Gzip performance too) and use HTTP2.

- Prefetch

---

## What about *perceived* performance?

And that’s not all. Unlike aiming for ‘perceived’ performance gains — where you still send the same quantity of code but you chew it up first (ed: seriously) — you can actually make your Web Stuff cheaper to use. My data contract doesn’t care whether you send small chunks or one large chunk; it all adds up the same.

My favorite thing about aiming to have less stuff is this: you finish up with only the stuff you really need — only the stuff your user actually wants.

## Summary

Less weight, less complexity, less distraction, less bother, less bullshit.

## Links

- uncrate.com
- http://openmymind.net/2012/5/30/Client-Side-vs-Server-Side-Rendering/
- https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf
-https://alistapart.com/article/planning-for-performance
- https://boagworld.com/marketing/users-will-always-choose-the-easiest-option-so-if-we-want-a-competitive-advantage-we-must-focus-on-simplicity/
- reference twitter and other articles moving away from client-side render.
- who killed my battery.

<!--

- Banner blindness. Column blindness.
http://usabilitygeek.com/ux-designers-ditch-sidebar-2016/

- death by a thousand cuts ben frain

- visually controlled js implemented select box (features of highly effective forms aaron gust)

-->