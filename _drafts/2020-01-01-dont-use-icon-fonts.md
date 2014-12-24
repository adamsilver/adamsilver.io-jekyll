---
layout: post
title:  "Icon fonts"
date:   2015-01-01 09:00:01
categories: accessibility
---

* Icon fonts have become popular and in summary, if you don't know, they are icons embedded in a font, that is embedded in CSS which can be applied to HTML elements via data or class attributes. All sounds quite nice until you analyse the negative impact of them.

## Unsemantic HTML

Adding empty spans, aria and data attributes just for an icon:

	<span aria-hidden="true" data-icon="&#x21dd;"></span>

Decorative images like icons should likely be CSS background images.

For inline images that provide meaning then:

	<img src="image.png">

If using class-names like class="icon-pencil" then you have unsemantic HTML which we all know the benefits of semantics so no need to go into that here. [](/semantic-article/)


## Bloated CSS

Instead of

	selector {
		background: url(path/to/image.png);
	}

You get

	[data-icon]:before {
		font-family: icons; /* BYO icon font, mapped smartly */
		content: attr(data-icon);
		speak: none; /* Not to be trusted, but hey. */
	}

* [data-blah]
* :before
* Even the examplified code says "not to be trusted"

## Accessibility

* (Screen reader) Support for speak: none
* (Screen reader) Support for aria attributes (and as filament group says) not even this attributes work in a bullet proof way.
* Screen reader interpretation of unicode

## Private Unicode Area

As Ian Feather states in *Ten reasons we switched from an icon font to SVG*: 

> I'd heard rumours about devices overriding glyphs in the private unicode area and using them to serve emoji but I hadn't seen it happen until recently. Emoji was historically stored in the private unicode area, but at different ranges, so it would make sense that there could be conflicts.

> I can't remember which device I was testing on but I saw one of our tick icons replaced with a multi-colour printer. The page looked amateurish and broken and certainly gave us impetus to make this transition.

## Cross-browser support

As Ian Feather states:

> Font face support and detection is historically quite tricky to get right. 

Basically this technique is not Cross-browser and if developing for the open web then this is clearly very important.

Issues have been documented in Opera Mini and Chrome.

Different browsers, devices and OSs render text differently. This is expected and acceptable in text but is likely unacceptable for iconography.

Font icons work back to IE8. What do you get in that

As Filament group state support is pretty poor:

> Did you know that most methods for including icon fonts don’t accommodate screenreaders very well, and require some specific markup patterns to work well and be accessible? And we discovered that a number of both old (and new!) mobile browsers—specifically Opera Mini, the Nokia XPress Browser, Blackberry 4–5, Android 2.1, and Windows Phone 7–7.8— do not support @font-face at all. With little bit of research, we were surprised to learn that (at time of writing) these browsers serve at least 370 Million users worldwide.

Lack of support then leans on polyfills which of course are JS so relying on the presence of "behavioural" technology for one of style and content.

## Architectural issues

### Using the same selector for more than one thing like clearfix and icons

As Ian Feather states:

> If you want to use font-icons in css you need to declare them using the content property in generated content. Sometimes you might find yourself having to complicate your code to make this possible i.e. because you are already using the :before and :after pseudo elements on the element or because the element doesn’t support generated content.

> In that case you could choose to render it inline but you then end up with html entities scattered through your markup which can easily be lost or forgotten about within a large application.

### Fiddly to position

> Admittedly this may be a result of how we created and managed our icon glyphs but we always found them awkward to position exactly how we wanted (and in a consistent fashion cross browser). We resorted to line height hacks and absolute/relative positioning to get them just right and it was difficult to come up with an abstraction that worked consistently.

Fine grained control with a background css rule.

## Design limitations

Ian feather states:

> Font icons are well known to have a single colour limitation. SVGs, on the other hand, can support multiple colours as well as gradients and other graphical features.

## Creation and maintenance effort

* Have to create them. Instead of just cropping an image and saving it into your images directory, you now have to save the image to a temporary directory, run it through a generator, choose the custom names and/or codes, save that out and update your CSS appropriately. Then of course apply any HTML hooks to pick up the icons. The same goes with any further updates.

## blocking css font download perf

* FOUT
* FOIT
* Downloading blocking
* One of the two main reasons for using icon fonts is perf. Downloading one font and having access to a range of different fonts (and variants in style) seemed like a boon. But all the trade offs and jumping through hoops (which Filament group talk about) are negating and performance benefits. i.e. more css, more js, more HTML.

## Summary

Ultimiately this is not the way to add decorative (or inline) images to a web page meaning that you end up with a lot of trade offs as described in the article. The good news is you can just revert to to tried and tested techniques that work for everybody and have very limited negative aspects. What are the negative aspects as people see them: Maintenance! Maintenance in having more than one size, more than one colour etc and on a whim giving them CSS treatment like shadow, emboldment and animation.

## Citations

[0]: http://ianfeather.co.uk/ten-reasons-we-switched-from-an-icon-font-to-svg/
[0]: http://css-tricks.com/examples/IconFont/
[0]: https://www.youtube.com/watch?v=dfweWyVScaI (mentions css font block render)
[0]: http://www.filamentgroup.com/lab/bulletproof_icon_fonts.html
uses polyfills for ie.

[0]: https://github.com/filamentgroup/a-font-garde
[0]: http://modernwebaccessibility.com/en/blog/demystify-speak-none

icon loader js - tablet shows nothing as cant render the icon