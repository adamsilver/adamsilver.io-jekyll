---
layout: post
title: Forms with multiple submit buttons are problematic
date:   2014-03-20 09:00:01
categories: forms a11y ux
description: Forms with multiple submit buttons have both UX problems and technical problems all of which is discussed in this article.
---

Forms with multiple submit buttons are problematic for keyboard users because of how submission works. A user can submit a form by pressing *enter*, when the focus is within a field (as opposed to a button).

If there are multiple buttons, the form will behave as if the user pressed the *first* button. This is not always desirable. For example, you might have an address form with a postcode look-up.

<div class="image" style="max-width: 320px;margin: 0 auto;">
	<figure>
		<img src="/assets/img/multiplesubmit.png" alt="Delivery address form" width="100%">
	</figure>
</div>

Pressing enter will always perform a postcode look-up because it's first in the document flow. There are two solutions at our disposal.

## 1. Split up the forms

The best course of action is to split your form into two. This means each form will have a single button removing any ambiguity during submission.

All users benefit from this approach, not just keyboard users. Breaking down one big form into two small ones reduces the cognitive load on users. And having one call-to-action helps users make the next step.

If for some reason, you can't split up your forms then there is another, less-than-ideal option.

## 2. Choose a primary button

If you *really* can't split the forms into two, then you'll need to choose a primary action. This isn't always easy because some forms have two buttons with similar weighting.

If the primary button doesn't naturally come first then, if possible, you should modify the design so it does. If it doesn't come first, then you'll need to duplicate it and place it at the top of the form.

You'll need to ensure it is visually hidden with CSS but this is problematic. As the user tabs to the hidden button, the UI will seem unresponsive. This is because the button is in focus, but is visually hidden. This can  disorientate users.

## Summary

Forms with multiple submit buttons are problematic. But it's easy to design this problem out of the system. To do this, split the large form into separate smaller forms. In doing so each form has a single call-to-action which will help users progress easily, whether they use the keyboard or otherwise.