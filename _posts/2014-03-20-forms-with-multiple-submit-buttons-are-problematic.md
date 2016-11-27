---
layout: post
title: Forms with multiple submit buttons are problematic
date:   2014-03-20 09:00:01
categories: forms a11y ux
description: Forms with multiple submit buttons have both UX problems and technical problems all of which is discussed in this article.
---

Forms that have multiple submit buttons are problematic for people who use a keyboard. The problem occurs due to the way forms work with regards to submission.

When a user fills out a form, they can submit that form at any time by pressing enter, even if they are focussed on a text field. When there are multiple buttons, the form submits as if the first button was pressed.

This isn't always desirable because the first button may not be considered the primary action of the form. For example, you might have an address form with a postcode look-up.

<div class="image" style="max-width: 320px;margin: 0 auto;">
	<figure>
		<img src="/assets/img/multiplesubmit.png" alt="Delivery address form" width="100%">
	</figure>
</div>

Pressing enter will always perform a postcode look-up. That's because that button appears before the primary button.

Your best option is to split up the forms. In the above example, have one that does the postcode look-up. And have another that saves the address.

Not only does this help keyboard users, but it provides a better all-round experience. This is because each page or feature has a dedicated focus which reduces the cognitive burden on users.

If you *really* can't do that, then you'll have to choose a primary action. This isn't always easy, because some forms have two buttons with similar weighting.

If the form's primary action doesn't come first, then you'll have to modify the design which isn't always possible. Or you'll need to add a duplicate button to the top of the form and hide it visually with CSS.

When the user tabs via keyboard to the hidden button, the UI will appear unresponsive. That's because the button is focused but off-screen. This is an undesirable experience that can disorientate users.

If at all possible, split up the forms.