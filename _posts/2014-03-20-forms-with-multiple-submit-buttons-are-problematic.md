---
layout: post
title: Forms with multiple submit buttons are problematic
date:   2014-03-20 09:00:01
categories: forms a11y ux
description: Forms with multiple submit buttons have both UX problems and technical problems all of which is discussed in this article.
---

Forms with multiple submit buttons are problematic for keyboard users because of the way submission works. When a user fills out a form, they can submit that form by pressing enter, even if the focus is within a field.

When there are multiple buttons, the form submits as if the *first* button was pressed. This is problematic because if there are multiple buttons it's impossible to know which of them the user intends to press. For example, you might have an address form with a postcode look-up.

<div class="image" style="max-width: 320px;margin: 0 auto;">
	<figure>
		<img src="/assets/img/multiplesubmit.png" alt="Delivery address form" width="100%">
	</figure>
</div>

Pressing enter will always perform a postcode look-up because it's first in the document flow.

## Split up the forms

The best course of action would be to split your forms so that there is only one submit button. Then there is no ambiguity in the act of submission.

In the example above, one form would perform the look-up. Another would save the users address.

This pattern is not only beneficial to keyboard users. This pattern is inclusive to all types of users. It's a better experience because a big task is broken down into two. This reduces the cognitive load on users.

If you can't split your forms up then there is another option.

## Choose a primary button

If you *really* can't split up your forms, then you'll have to choose a primary action. This isn't always easy, because some forms have two buttons with similar weighting.

If the form's primary action doesn't come first, then you'll have to modify the design which isn't always possible. Or you'll need to add a duplicate button to the top of the form and hide it visually with CSS.

However, when the user tabs via keyboard to the hidden button, the UI will appear unresponsive. That's because the button is focused but off-screen. This is an undesirable experience that can disorientate users.

If at all possible, split up the forms.