---
layout: post
title: Buttons shouldn't have a hand cursor
date: 2016-07-01 09:00:01
categories: design ux
---

There is this belief that the hand cursor means 'clickable', but this is incorrect and potentially problematic. My hope is that by the end of the article, you’ll never want to use the hand cursor for buttons ever again.

## The hand does not mean clickable

It’s no accident that browsers don’t give buttons (and other elements) a hand cursor — it’s because they’re not meant to. Take a look at the following screenshot:

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/buttons/chrome.jpeg" alt="Chrome on Mac OS" width="100%">
		<figcaption>Chrome on Mac OS</figcaption>
	</figure>
</div>

Almost every element is interactive and clickable — the menu, the tabs, the whitespace, the browser buttons, the bookmark bar and Google’s search box — but, none of them have a hand cursor.

There are more interactive and clickable elements not shown above— select menus, sliders, checkboxes, radios, labels, images, empty space (e.g right click — view source) and text — again, none of them have a hand cursor.

The same goes for any computer you have ever used. You can tap, drag, select, press, left click and right click on a plethora of different elements including buttons. However, buttons are not afforded by a hand cursor displaying on hover.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/buttons/license.jpeg" alt="“License Agreement” is a link and uses the hand cursor. The buttons don’t." width="100%">
		<figcaption>“License Agreement” is a link and uses the hand cursor. The buttons don’t.</figcaption>
	</figure>
</div>

Affordance is provided by the way something looks regardless of the cursor. Remember, the cursor is only available when hovering with a pointing device such as a mouse.

This is why, for example, [checkboxes are never round](http://danieldelaney.net/checkboxes) (and radios are never square). This is also why links are typically underlined. This is why links do, in fact, have a hand cursor.

## The hand cursor is for links

The hand (and often underlined text) signifies a link. Links are not buttons. Links came along with the web. To help users understand that they are different, they are given the hand cursor. It serves as an extra clue. Here’s why:

* Clicking a link opens a web page or resource.
* (On desktop) I can right-click on a link and do many things (that I can’t do with a button). Open in new tab/window, save a link, copy address, add to reading list, bookmark it and more.
* (On mobile devices) I can tap and hold on a link and get a similar context menu as per the previous point.
* A link also tells me that I am just going somewhere else. I am not modifying any data or making changes in anyway (like a button is likely to do).

## Summary

When a button has the hand cursor, it subtly suggests that the user is interacting with a link when they’re not. If you want to give visual feedback when the user hovers, you can do so with other style changes such as background colour. A well-designed button does not need a hand cursor to help the user realise it does something.

The hand cursor is reserved for links. This is because they are unique in their behaviour. Browsers and Operating Systems have done the work for you — because contrary to popular belief — browsers know best.

Links have always been handled this way since the web came along — this is the convention of the web that you need not innovate on. You can rest easy knowing that browsers have you covered. This leaves you and your team to solve real problems.

<!--

http://ux.stackexchange.com/questions/3788/default-cursor-on-mouse-over-of-a-button-is-not-a-hand-pointer

-->