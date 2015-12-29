---
layout: post
title:  Why hover menus are problematic
date:   2015-12-27 09:00:01
categories: ux responsivedesign
---

Hover menus are very popular on the web. People think they are popular because they "aid discoverability" and "save users a click" &mdash; the latter of which is a common UX fallacy. The thing is, hover menus are problematic and here's why:

## 1. The hover tunnel and accidental deactivation

When a user opens a menu, they can't intuitively move the mouse directly to a sub menu item because this will accidentally close the menu &mdash; either by leaving the menu or activating another menu by accident. This makes the menu very hard and frustrating to use which **drains vital user energy**.

<div class="image">
	<figure>
		<img src="/assets/img/hover1.jpg" alt="Hover" width="100%">
		<figcaption>The menu accidentally closes when you move directly from Companies to the latest article</figcaption>
	</figure>
</div>

<div class="image">
	<figure>
		<img src="/assets/img/hover2.jpg" alt="Hover" width="100%">
		<figcaption>To keep the menu open, you must move the mouse carefully down and then across</figcaption>
	</figure>
</div>

## 2. Understanding user intention and accidental activation

**Hovering is not an intention to activate**. It is at most a *suggestion* that the user *might* interact with something. Technically, the user is always hovering. This is why hover states are beneficial to the user, such as a change of cursor (browsers do this by default) and a change of style.

With hover, a user can accidentally open a menu even though they never intended it and when this happens it obscures the content behind disrupting the experience.

Also, if a user intends to click a link within a page, when the menu pops open just before clicking that link, the user may end up navigating away accidentally. I have seen this happen several times and it's a very bad experience indeed.

<div class="image">
	<figure>
		<img src="/assets/img/hover3.jpg" alt="Hover" width="100%">
		<figcaption>User wants to click link below the menu but...</figcaption>
	</figure>
</div>

<div class="image">
	<figure>
		<img src="/assets/img/hover4.jpg" alt="Hover" width="100%">
		<figcaption>...the menu opens accidentally so the user clicks Energy instead</figcaption>
	</figure>
</div>

Often to work around these issues, a small delay is added before showing a menu, but this induces another problem &mdash; when the user does intend to activate the menu, they have to wait for the delay to finish which makes the menu feel unresponsive again causing further frustration.

## 3. Accessibility and fine motor skills

Items on the bottom of the menu are hard to click because the user might accidentally move the mouse off leaving the user to reopen the menu again.

## 4. Touch-enabled devices and Responsive Design

There is no hover on touch-enabled devices (unless the user plugs in a pointing device). And touch-enabled devices are everywhere and they come in all shapes and sizes.

## Embrace the web, design for everyone

**Instead of focusing on device classification, focus on device capability.** You can't control who will access your website and with what device so it's advisable to design for touch, mouse, finger, keyboard interchangeably.

The simplest solution is to show a menu via click. Click works when the user taps, when the user clicks with the mouse, and when the user tabs via keyboard and presses enter.

Also with click, once activated it stays open *until* the user clicks elsewhere which solves the tunnel problem altogether. And because clicking or tapping is a clear intention, there is no accidental activation/deactivation solving all the aforementioned problems above.
