---
layout: post
title: Designing for performance
date: 2039-01-01 09:00:01
categories: ux performance
---

This is how it goes. We put a load of shit into a single web page. This makes the page slow. Slow to load, slow to render. Slow.

Instead of getting rid of the shit, we blame the page refresh. There's only one way to avoid the page refresh and that's AJAX.

However, AJAX still needs to render new (parts of) screens. More crucially it still has to make a request to the server. That's not all&mdash;there are penalties in using AJAX and it doesn't necessarily result in faster experiences.

Firstly, making requests; handling different responses; traversing the document tree; and injecting HTML requires *more* code to be sent initally. This also needs to be evaluated and executed on the client.

Secondly, AJAX engineers away progressive rendering&mdash;which by the way&mdash;browsers do for free. To reinstate this functionality we resort to [hacks](https://jakearchibald.com/2016/fun-hacks-faster-content/) that need yet more code. (Plus nobody uses the hack anyway.)

Thirdly, using AJAX means we have to give users another way of knowing that something is being loaded. Again, browsers give us a really good loading indicator for free.

With AJAX, we need to design and build a custom one. Not only is this more work and more code, but they are an inferior replacement for those provided by browsers.

This is because a browser's indicator displays progress. That is, a user can tell how long until the request finishes. Custom loading indicators or *spinners* don't display progress, so users get frustrated and click again causing further delays.

And custom indicators are unfamiliar as the look and placement differs from site to site. Conversely, the browser's indicator appears in the same place and behaves the same for every website. This creates a familiar and informative experience that we should be loathed to forgo.

This doesn't mean AJAX is *bad*. AJAX is useful depending on the situation as it avoids requesting the same assets over and over and may well render faster if updating a small segment of the page. But it's not a solution to slow-loading pages. At best it patches over the problems that lie beneath.

The real problem is that we've designed something that can never be fast. Therefore the question really is *how do we design for performance?*

## 1. Simplify the interface

The best way to make pages fast, is to have less stuff in them. You'd be forgiven for wanting to punch me in the face as this is obvious. And yet [web pages keep getting fatter and fatter](https://www.keycdn.com/support/the-growth-of-web-page-size/).

Do we need background videos, modal dialogs and social media buttons plastered everywhere? The answer from the people is a resounding *no*. The fastest feature is one we never build.

What about the way we design components? Hamburger menus, tabs, carousels, accordions, image galleries and expanding panels. All these things have one thing in common. They hide stuff.

Designers are obsessed with patterns that save space and look clean. A clean interface is good but not at the cost of clarity. If pages only contain the essential, then there should be little and maybe even nothing to hide.

Effort aside, designing fully responsive and inclusive components creating *more* code. More code that users rarely appreciate. After all, it slows the page down and requires the user to exert energy revealing the hidden content.

Heydon Pickering coined the seemingly satirical term *Unprogressive Non-enhancement*. This is how he explains it:

> You take some structured content, which follows the vertical flow of the document in a way that everyone understands.

> Which people traverse easily by either dragging their scroll bar with their mouse, or operating the keyboard using the up and down keys, or using the spacebar.

> Or if they're using a touch device, simply flicking backwards and forwards in that easy way that we've all become used to. **What you do is you take that, and you fucking well leave it alone.**

Letting things stack naturally is a good start. Not only does this embrace the way the web works&mdash;it makes for a remarkably inclusive and fast experience.

*A fast experience, by the way, is a vital aspect of designing inclusive experiences. Some people don't have fast connections and this shouldn't cause exclusion.*

Letting things stack isn't our *only* option. We can chunk stuff across multiple pages. Once pages have little on them the page refresh ‘problem’ is no longer a problem. Pages are fast by design. Sometimes to the point where the [page refresh is unnoticeable](http://uncrate.com).

With regards to longish complex forms (or even shortish ones) there is [One Thing Per Page](https://www.smashingmagazine.com/2017/05/better-form-design-one-thing-per-page/) which I've spoken and written about before.

But this pattern isn't reserved for forms. A typical product page contains an image carousel, description, add to basket form, other details, shipping information, related products, ratings and comments. We can split this up too.

Most users don't read every single aspect of a product, every time they visit the page. Instead give users a lightweight page and the choice to drill down further.

Give users one high-definition image *without* a carousel. Then let users click *show all* which would show all the images in a page of its own. No Javascript needed, saving yet more code. Let the content flow.

This uses the natural building blocks of the web as a form of [progressive disclosure](https://medium.muz.li/design-technique-progressive-disclosure-1980def8dc97?gi=361cf4735361). Ultimately, this speeds things up drastically.

People on expensive data contracts benefit too. They can choose to see all the images by following the link or they can wait until they are connected to WI-FI.

It's easier to share page content or imagery this way too. Sending users to a page where most of the stuff is hidden is problematic.

Tabs: If stuff is hidden by default, how important is its existence on this page? Or if the tab contains a small amount of content just show it. Or consider putting it on a separate page.

If you're feeling brave, put your site's [navigation menu on a separate page](http://yaronschoen.com/table-of-contents/) too. The page is light and loads quickly. Maybe this is too far. Maybe not.

Modal dialogs are often misused. All too often they contain too much content that would be better off as a new page anyway. This improves performance and doesn't break the back button (like a dialog often does).

Less code, less problems and a faster, better experience. I'm seeing a theme here. Scroll jacking, [floating labels](/articles/floating-labels-are-problematic/), [font-size widgets](http://adrianroselli.com/2016/12/dont-re-create-browser-features.html), [side bars](http://usabilitygeek.com/ux-designers-ditch-sidebar-2016/), custom select boxes&mdash;kill.

## 2. Reduce code

By simplifying the interface we've already reduced the code by literally not writing any. But coding the remaining features brings forth a different opportunity&mdash;to write less code.

### Create lean HTML

Sometimes developers use the wrong element. A `<button>` is half the size of `<div role="button" tabinidex="0">` and doesn't require script to make it accessible again.

[Divitus](https://csscreator.com/divitis) is an antiquated buzzword but its still prevalent today. We often use [additional elements unncessarily](http://getbootstrap.com/components/#navbar-brand-image). These make the request longer to make, parse and render. We should be able to justify the existence of every element.

Classitus is the use of extra classes. Extra classes may decrease the size of CSS but they signifcantly increase the size of HTML.

Ensuring HTML is small is important. Unlike CSS, it can't be easily cached. This is because it's likely to contain personalised and dynamic content. This in turn encourages the [misuse of AJAX](/articles/dont-use-ajax-for-personalised-content/).

We may also find ourselves adding various [attributes in the name of accessibility]((https://silktide.com/i-thought-title-text-improved-accessibility-i-was-wrong/)). But, they aren't always necessary or valuable, and they add further weight to the page.

Similarly, the first rule of ARIA is not to use it. To associate errors to a form control we might use `aria-describedby`:

	<label for="age">
      Age
	</label>
	<div id="age_error">Enter your age</div>
	<input id="age" aria-describedby="age_error">

Instead putting the error in the label is more performant *and* more inclusive:

	<label for="age">
      Age
      <div>Enter your age</div>
	</label>
	<input id="age">

Using [HTML attributes to automagically initialise script](/articles/dont-initialise-javascript-automagically/) increases the HTML (and has other problems too).

<!-- A [codified grid system is rarely needed](/articles/stop-using-device-breakpoints/), but if you really really need one consider a [minimal approach](https://github.com/Heydon/fukol-grids). -->

Don't add HTML hooks just for automated functional tests. [Semantic hooks serve everyone's purpose equally](https://maintainablecss.com/chapters/semantics/).

### Simplify your design system

Government Digital Services design simple websites. Most things are left aligned and stack naturally. In this case we may be able to [avoid CSS classes altogether](https://www.smashingmagazine.com/2016/11/css-inheritance-cascade-global-scope-new-old-worst-best-friends/) which further proves that a simple interface is a performant one.

### Use less script

[Single pages applications don't necessarily render faster](http://openmymind.net/2012/5/30/Client-Side-vs-Server-Side-Rendering/) and come with a whole [bunch of problems](/articles/the-disadvantages-of-single-page-applications/). But it's not just rendering. It takes a lot of code to create a robust client-side application, that typically prompts developers to use a large framework.

But maybe we don't need the whole framework. Putting that burden on the user is an act of negligence. Starting with an entire framework or library puts you on the back foot.

[Twitter's tweet button script weighs 50k](http://www.heydonworks.com/article/look-at-this-shitty-tweet-button). We can do the same thing with 0 bytes of script by using a simple link.

### Use preprocessors responsibly

[Preprocessors are deceitful because they can generate large CSS](https://jaketrent.com/post/cons-css-preprocessors/#file-size-is-deceiving).

### Use content breakpoints

Often a module may need just one breakpoint or even no breakpoints. Designing to a predefined set of breakpoints encourages the unnecessary tweaking of a design that results in more code.

## 3. Images

Not everyone has access to the [world western web](https://www.smashingmagazine.com/2017/03/world-wide-web-not-wealthy-western-web-part-1/). Not everybody is on high-end devices either. So, if you really need that high resolution image help the user by:

- [using the right image](https://www.sitepoint.com/gif-png-jpg-which-one-to-use/)
- [smushing the shit out of it](https://imageoptim.com/mac)
- [using progressive rendering](https://blog.codinghorror.com/progressive-image-rendering/)

## 4. Backend stuff

Enable [chunking](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding#Chunked_encoding) and progressive rendering. Don't engineer it away.

Use Command Query Responsibility Segregation to make database queries fast (good for sites that have more reads than writes). The idea is that reads are fast and come from read representations of your data.

Use a Content Delivery Network for your static resources. And cache HTML and AJAX responses too.

Cache assets with long expiry dates so that users don't have to download assets again.

Place scripts at the bottom and use `async` and `defer` attributes. Async is good for completley independent scripts that can run later like analytics.

Use [HTTPS over HTTP2](https://www.troyhunt.com/i-wanna-go-fast-https-massive-speed-advantage/) with Gzip compression. Gzip, by the way, works better with a well-designed and consistent design system&mdash;the more HTML is repeated the better the compression.

Use [preload and prefetch](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf) where appropriate. Addy Osmani says *preload resources you have high-confidence will be used in the current page. Prefetch resources likely to be used for future navigations across multiple navigation boundaries.*

## Summary

You know what's better than perceived performance? Actual performance. Avoid techniques that merely provide a mirage of speed.

Instead, declutter and optimise the foundations of your design system that will in turn result in less weight, less complexity, less distraction, less hassle and ultimately, less [bull shit](http://deathtobullshit.com/).

Together, these techniques produce fast and simple experiences that make users feel awesome.

<!--
- https://alistapart.com/article/planning-for-performance
- https://boagworld.com/marketing/users-will-always-choose-the-easiest-option-so-if-we-want-a-competitive-advantage-we-must-focus-on-simplicity/
- who killed my battery.http://cdn.oreillystatic.com/en/assets/1/event/79/Who%20Killed%20My%20Battery_%20Analyzing%20Mobile%20Browser%20Energy%20Consumption%20Presentation.pdf
- https://ethanmarcotte.com/wrote/designed-lines/
-->