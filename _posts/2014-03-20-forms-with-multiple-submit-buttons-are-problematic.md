---
layout: post
title: Forms with multiple submit buttons are problematic
date:   2014-03-20 09:00:01
categories: forms a11y ux
description: Keyboard users find forms with multiple buttons problematic. Find out why in this article.
---

Forms with multiple submit buttons are problematic for keyboard users because of how submission works. A user can submit a form by pressing <kbd>Enter</kbd>, when a field is focused.

If there are multiple buttons, the form will behave as if the user pressed the *first* button in the Document flow. This isn't always desirable. For example, you might have an address form with a postcode look-up.

<div class="image">
	<figure>
		<img src="/assets/img/multiplesubmit.png" alt="Delivery address form" width="100%" style="max-width: 320px;">
		<figcaption>Delivery address form with multiple submit buttons.</figcaption>
	</figure>
</div>

Pressing <kbd>Enter</kbd> will always perform a postcode look-up because the Find Address button is the first button. 

There are two ways to solve this problem.

## 1. Split up the forms

The best solution is avoidance. This means splitting the form up into two separate ones. As a result each form will have just one button removing any ambiguity in submission and action.

All users benefit from this approach because breaking down big forms into little ones reduces the cognitive load. And, having just one primary call to action makes it obvious how to proceed.

## 2. Choose a primary button

If you can't split up the form, then the other approach involves having to choose a primary action which isn't always obvious.

In any case, if the primary action's button doesn't come first in the Document flow, you can duplicate it and place it at the top of the form.

To remove it visually you'll need to use CSS like this:

	.visually-hidden {
	  border: 0!important;
	  clip: rect(0 0 0 0)!important;
	  height: 1px!important;
	  margin: -1px!important;
	  overflow: hidden!important;
	  padding: 0!important;
	  position: absolute!important;
	  width: 1px!important;
	}

However, as a user tabs to the hidden button, the interface will appear to be unresponsive. This is because the button is in focus but hidden, which can disorientate users.

To fix this you can give the button a `tabindex="-1"` attribute which stops the button from being navigable via the keyboard.