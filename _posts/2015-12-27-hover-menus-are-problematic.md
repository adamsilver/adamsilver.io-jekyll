---
layout: post
title: Hover menus are problematic
date: 2015-12-27 09:00:01
categories: ux responsivedesign
description: Hover menus have been around for years on the web. But this has never been a great experience, and now more than ever it is ill advised. Find out why.
---

Designers think hover menus are popular because they *aid discoverability* and *save users a click*, the latter of which is a common [UX fallacy](http://uxmyths.com/post/654026581/myth-all-pages-should-be-accessible-in-3-clicks). The thing is, hover menus are problematic and here's why:

## 1. The hover tunnel and accidental deactivation

When a user opens a menu, they can't intuitively move the mouse directly to a sub link because it accidentally closes the menu&mdash;either by leaving the menu or activating another one by accident. This frustrates users and drains their energy.

<div class="image">
	<figure>
		<img src="/assets/img/hover1.jpg" alt="Hover" width="100%" style="max-width: 500px;">
		<figcaption>The menu accidentally closes when you move directly from Companies to the latest article.</figcaption>
	</figure>
</div>

<div class="image">
	<figure>
		<img src="/assets/img/hover2.jpg" alt="Hover" width="100%" style="max-width: 500px;">
		<figcaption>To keep the menu open, you must move the mouse carefully down and then across.</figcaption>
	</figure>
</div>

## 2. Understanding user intention and accidental activation

Hovering is not an intention to activate. At most, it suggests that the user *might* interact. Technically, the user is always hovering. This is why hover states are beneficial to the user, such as a [change of cursor](/articles/buttons-shouldnt-have-a-hand-cursor/) (browsers do this by default) and a change of style.

With hover, a user can accidentally open a menu even though they never intended to do so. When this happens, it obscures the content behind disrupting the experience.

Also, if a user wants to click a link within a page, when the menu opens  before clicking that link, the user may end up navigating to another page instead. This is a horrible experience.

<div class="image">
	<figure>
		<img src="/assets/img/hover3.jpg" alt="Hover" width="100%" style="max-width: 500px;">
		<figcaption>User wants to click link below the menu but...</figcaption>
	</figure>
</div>

<div class="image">
	<figure>
		<img src="/assets/img/hover4.jpg" alt="Hover" width="100%" style="max-width: 500px;">
		<figcaption>...the menu opens accidentally so the user clicks "Energy" instead.</figcaption>
	</figure>
</div>

To work around these issues, you can add a small delay before showing a menu. But, this creates another problem: when the user does intend to open the menu, they have to wait for the delay to finish which makes the menu feel unresponsive.

## 3. Accessibility and fine motor skills

Items on the bottom of the menu are hard to click because the user might accidentally move the mouse off, leaving the user to reopen the menu again.

## 4. Touch-enabled devices and Responsive Design

There is no hover on touch-enabled devices&mdash;unless the user plugs in a pointing device. Touch-enabled devices are everywhere and they come in all shapes and sizes.

## Summary

Instead of focusing on device classification, we should focus on device capability. We can't control who will access our website or with what device; it's better to design for touch, mouse, finger and keyboard interchangeably.

The most inclusive and simple approach is to show a menu via click. This works when the user:

- taps with a finger
- clicks with a mouse
- tabs via keyboard and presses enter

Also, once activated, it stays open *until* the user clicks elsewhere which solves the tunnel problem altogether. Because clicking or tapping is a clear intention, there is no accidental activation or deactivation either.
