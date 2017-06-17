---
layout: post
title: Making websites fast
date: 2039-01-01 09:00:01
categories: ux performance
---

This is how it goes. We cram a load of shit onto a single web page. This makes the page slow. Slow to load, slow to render. Slow.

Instead of getting rid of the shit, we blame the page refresh. There's only one way to avoid the page refresh and that's AJAX.

However, AJAX still needs to render new (parts of) screens. More crucially it still has to make a request to the server. That's not all&mdash;there are penalties in using AJAX.

First, making requests, handling different responses, traversing the Document and injecting HTML requires *more* code to be sent initially. This also needs to be evaluated and executed on the client.

Second, AJAX engineers away things the browser does for free, such as progressive rendering (more on this later). To avoid this problem we must resort to hacks that need even more code. Plus nobody uses the hack anyway.

And, we need to design and build a custom loading indicator. Not only is this yet more work and more code but they are a poor replacement for the ones provided by browsers.

A browser's indicator displays progress. That is, a user can tell how long until the request finishes. Custom spinners don't display progress, so users get frustrated and click again causing further delays.

Custom indicators are unfamiliar as they look different per site and are positioned differently. Browser indicators appear in the same place no matter the website. Familiarity and accuracy are two qualities often found in well-designed interfaces.

This doesn't mean AJAX is *bad*. AJAX is useful depending on the situation as it avoids requesting the same assets over and over. But it's not a solution to slow-loading pages. At best it patches over the problems that lie beneath.

The real problem is that we have designed something that can never be fast. Therefore, the question is how do we make sure our websites are fast?

## 1. Simplify the interface

The best way to make pages fast, is to have less on them. You'd be forgiven for wanting to punch me in the face as this is obvious. Yet, [web pages keep getting fatter and fatter](https://www.keycdn.com/support/the-growth-of-web-page-size/).

Do we need background videos, modal windows and social media buttons plastered everywhere? The answer from the people is a resounding *no*. The fastest feature is the one we never even built.

What about the way we design components? Hamburger menus, tabs, carousels, accordions, image galleries and expanding panels. All these things have one thing in common. They hide stuff.

Designers are obsessed with patterns that save space and look clean. A clean interface is good but not at the cost of clarity. If pages only contain the essential, then there is nothing, or at least much less that needs to be hidden.

And effort aside, making fully responsive and inclusive components is even *more* code that users rarely appreciate. Afterall, it slows the page down and requires the user to exert energy to reveal the hidden content.

Heydon Pickering coined the seemingly satirical term *Unprogressive Non-enhancement*. This is how he explains it:

> You take some structured content, which follows the vertical flow of the document in a way that everyone understands.

> Which people traverse easily by either dragging their scroll bar with their mouse, or operating the keyboard using the up and down keys, or using the spacebar.

> Or if they're using a touch device, simply flicking backwards and forwards in that easy way that we've all become used to. **What you do is you take that, and you fucking well leave it alone.**

Letting things stack naturally is the perfect start. Not only does this embrace the way the web works&mdash;it makes for a remarkably accessible and fast experience.

Letting things stack isn't our only option. We can chunk stuff across multiple pages. Once pages have little on them the page refresh ‘problem’ is no longer a problem. Pages are fast by default and by design.

With regards to long complex forms (or even shortish ones for that matter) we can use [One Thing Per Page](https://www.smashingmagazine.com/2017/05/better-form-design-one-thing-per-page/) which I've spoken and written about before.

And, this pattern isn't reserved for forms. A product page containing an image carousel, description, add to basket form, other details, shipping information, related products, ratings and comments could be split up.

Most users don't read every single aspect of a product each and every time they visit the page. Instead give users the a lightweight, and therefore fast page, with the choice to drill down further.

Give users one high-definition image *without* a carousel. Then let users click *show all* which would show all the images in a page of its own. No Javascript is needed on either page. Just let the content flow naturally.

This uses the natural building blocks of the web as a form of [progressive disclosure](https://medium.muz.li/design-technique-progressive-disclosure-1980def8dc97?gi=361cf4735361). Ultimately, this speeds things up drastically.

People on expensive data contracts benefit too. They can choose to see all the images or wait until they are connected to WI-FI.

It's easier to share page content or imagery this way too. Sending users to a page where most of the stuff is hidden is a problem.

The same goes for tabs. If stuff is hidden by default, how important is it to appear on this page? If the tab contains a small amount of content, show it. If not consider a separate page again.

If you're brave like Yaron, you could place your site's [menu on a separate page](http://yaronschoen.com/table-of-contents/) too. The menu page loads so quickly, that users may not even notice the refresh.

Modal windows are often used badly. And too often they contain so much content that justifies a new page altogether again.

Again, not only does this improve performance, but it doesn't break the back button. Less code, less problems and a faster, better experience. I'm seeing a theme here.

Scroll jacking, [floating labels](/articles/floating-labels-are-problematic/), [font-size widgets](http://adrianroselli.com/2016/12/dont-re-create-browser-features.html), custom fonts. Kill.

## 2. Reduce code

By simplifying the interface we've already reduced the code by literally not writing any. But in coding the features that remain, there is opportunity to reduce the code:

### Create lean HTML

Sometimes developers use the wrong element. A `<button>` is half the size of `<div role="button" tabinidex="0">` and doesn't require any script to make it accessible again.

[Divitus](https://csscreator.com/divitis) is an antiquated buzzword but its still prevalent today. We often use [additional elements unncessarily](http://getbootstrap.com/components/#navbar-brand-image). These make the request longer to make, parse and render. Every element needs a reason to exist.

Classitus is the use of extra classes. Extra classes may decrease the size of CSS but they signifcantly increase the size of HTML.

Ensuring HTML is small is vital because unlike CSS, it can't be easily cached. This is because it's likely to contain personalised and dynamic content. This in turn encourages the [misuse of AJAX](/articles/dont-use-ajax-for-personalised-content/).

We may also find ourselves adding various [attributes in the name of accessibility]((https://silktide.com/i-thought-title-text-improved-accessibility-i-was-wrong/)). They aren't always valuable and add further weight to the page.

Similarly, the first rule of ARIA is not to use it. To associate errors to a form control we might use `aria-describedby`:

	<label for="age">
      Age
	</label>
	<div id="age_error">Enter your age</div>
	<input id="age" aria-describedby="age_error">

But, instead putting the error in the label is more performant and more inclusive:

	<label for="age">
      Age
      <div>Enter your age</div>
	</label>
	<input id="age">

Using [HTML attributes to automagically initialise script](/articles/dont-initialise-javascript-automagically/) also increases the size of HTML (and has other problems too).

Whilst a codified grid system is rarely needed, if you need one you may consider a [more minimal approach](https://github.com/Heydon/fukol-grids).

Finally, don't add HTML hooks just for automated functional testing. Semantic hooks serve everyone's purpose equally.

### Simplify your design system

Government services are simple. Most things are left aligned, and compontents stack naturally. In this case we may be able to [avoid CSS classes altogether](https://www.smashingmagazine.com/2016/11/css-inheritance-cascade-global-scope-new-old-worst-best-friends/), proving that a simple interface is a performant one.

### Use less script

I've talked about the [problem with single page applications](/articles/the-disadvantages-of-single-page-applications/) before. Contrary to popular belief they aren't necessarily faster. AJAX engineers away [chunk responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding#Chunked_encoding) which you can see in Jake Archibalds article [Fun Hacks For Faster Content](https://jakearchibald.com/2016/fun-hacks-faster-content/).

It's not just the act of rendering. It takes a lot of code to create robust client-side applications that often prompt developers to use a framework.

But maybe we don't need the whole framework. Don't put that burden on your users. Starting with an entire framework or library puts you on the back foot.

[Twitter's tweet button script weighs 50k](http://www.heydonworks.com/article/look-at-this-shitty-tweet-button). We can do the same thing with 0 bytes of script by using a simple link.

### Use preprocessors responsibly

[Preprocessors deceitful produce large CSS files](https://jaketrent.com/post/cons-css-preprocessors/#file-size-is-deceiving).

### Use content breakpoints

Often a module may need just one breakpoint or even no breakpoints. Designing to a predefined set of breakpoints encourages the unnecessary tweaking of a design that results in more code.

### Place scripts at the bottom

Place scripts at the bottom and consider using `async` and `defer` attributes. Async is good for completley independent scripts that can run later like analytics.

## 3. Images

Not everyone surfs the [world western web](https://www.smashingmagazine.com/2017/03/world-wide-web-not-wealthy-western-web-part-1/) on high-end devices. But if you really need that high resolution image:

- [use the right image](https://www.sitepoint.com/gif-png-jpg-which-one-to-use/)
- [smush the shit out of it](https://imageoptim.com/mac)
- [use progressive rendering](https://blog.codinghorror.com/progressive-image-rendering/)

## 4. Backend

CQRS makes querying databases fast.

(Command Query Responsibility Segregation is a recommended architectural pattern for sites that have more reads (GET) than writes (POST). The premise here is that reads are really fast and come from read representations of your data whereas writes are asynchronous meaning that you have to cater for eventual consistency. Eventual consistency (staleness of data) is normally a good trade off for performance and scalability. Some engineers struggle with the idea of having data duplicated across multiple stores - but this architectural pattern promotes multiple read representations of the same data in multiple types of stores. The server should not be working out what to present at run-time, almost every page’s data is saved in a database, typically a key-value store. This keeps the server code very simple (it’s a simple data bind) and you can have all your complex logic in creating those read representations that execute asynchronously whenever you see a change in your domain model (events). This model also works well with edge caching (CDNs) where you can effectively save read representations of your data i.e. web pages closer to the user.)

Edge caching reduces network latency by physically bringing various assets and pages closer to the user.

(Use a CDN (Content Delivery Network) for your static resources and scripts. You can place your webserver behind the CDN and cache almost everything including the generated HTML. Design for browser and edge (CDN) caching your page; set up your server to add HTTP Cache-Control headers and configure your CDN to honour these cache headers. This does not just apply to assets e.g. images, fonts and styles, but the HTML and AJAX responses too. This will ensure a scalable and robust design whereby your web servers will be doing less. You can also cache AJAX responses at the edge for a shorter time again specified by cache control directives.)

Enable chunking and allow progressive rendering. Don't engineer it away by using AJAX.

Cache assets with long expiry dates so that users don't have to download assets again.

Use HTTP2 and Gzip. Gzip by the way works better with a well-designed consistent design system, as the more HTML that is repeated the better the compression.

(Use HTTPS (HTTP2 if available) and Gzip compression to optimize download, it’s a no-brainer. Gzip compression can also be enabled on the edge (some CDN solutions provide this).)

Addy Osmani discusses benefits of [preload and prefetch](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf): *preload resources you have high-confidence will be used in the current page. Prefetch resources likely to be used for future navigations across multiple navigation boundaries.*

Stateless backend

(Design the backend to be completely stateless i.e. no session or in-memory state on the server. State is passed back to the browser which is sent to the server on every request - i.e. aiming for a more RESTful design. This also applies to authentication cookies, anti-forgery tokens, etc. This allows the backend to seamlessly scale out or in, horizontally with traffic. If possible, split the backend into micro-sites based on context and employ a reverse proxy - you will find that you may be able to host parts of your site as static. )

Authentication

(Authentication can be handled via OpenID Connect authorization or hybrid flows if you have a backend server that can issue encrypted secure cookies over HTTPS, or implicit flow if you do not have a server and have to adopt the SPA model. With OpenID Connect, depending on what flow you wish to implement, the identity servers issue a code or access and id tokens that are signed and have an expiry. Your server has the responsibility of validating a provided token or exchanging a code for a token, extracting the identity in the form of claims and optionally issuing your own secure cookie for your site. Use an identity server or federate identity to trusted identity providers for authentication/authorization; please, please don’t engineer your own solution for authentication or security.)

## Summary

Each of these improvements come together to form a simple experience that is fast. Fast experiences make users feel awesome.

You know what's better than perceived performance? Actual performance. By removing the clutter and optimising the foundations of a system, we nip performance issues in the bud.

We avoid techniques that merely provide a mirage of speed.

Less weight, less complexity, less distraction, less bother, less bull shit. Nice.

<!--

## Links

- http://openmymind.net/2012/5/30/Client-Side-vs-Server-Side-Rendering/
- https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf
-https://alistapart.com/article/planning-for-performance
- https://boagworld.com/marketing/users-will-always-choose-the-easiest-option-so-if-we-want-a-competitive-advantage-we-must-focus-on-simplicity/
- reference twitter and other articles moving away from client-side render.
- who killed my battery.http://cdn.oreillystatic.com/en/assets/1/event/79/Who%20Killed%20My%20Battery_%20Analyzing%20Mobile%20Browser%20Energy%20Consumption%20Presentation.pdf

- uncrate.com

- death by a thousand cuts ben frain

- Banner blindness. Column blindness.
http://usabilitygeek.com/ux-designers-ditch-sidebar-2016/



- visually controlled js implemented select box (features of highly effective forms aaron gust)

-->