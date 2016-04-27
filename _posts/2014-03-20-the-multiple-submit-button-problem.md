---
layout: post
title:  "The multiple submit button problem"
date:   2014-03-20 09:00:01
categories: forms a11y ux
description: Forms with multiple submit buttons have both UX problems and technical problems all of which is discussed in this article.
---

Sometimes a form is designed to be multi-purpose. Take the example below. It represents an edit details form whereby the user can either update their information or delete it all together. This kind of form causes usability problems for keyboard users.

<div class="image" style="max-width: 320px;margin: 0 auto;">
	<figure>
		<img src="/assets/img/multiplesubmit.png" alt="Multi submit problem" width="100%">
		<figcaption>Multiple submit buttons</figcaption>
	</figure>
</div>

<!-- <form>
	<input type="text" name="firstName" value="Adam">
	<input type="text" name="lastName" value="Silver">
	<input type="submit" name="delete" value="Delete">
	<input type="submit" name="save" value="Save">
</form> -->

The user can submit the form while focused on *first name* or *last name* control by pressing the enter key. If they do this the form will be submitted based on the first button in the document flow which in this case is the *update* button.

This is not always the case though. Sometimes the visual design means that the *delete* button is first in the document flow (and there is no CSS trick to get around this). In this case the user presses enter, and instead of updating their details, they delete them.

## What's the best solution?

Where possible, the best solution would be to split out the forms into two. This means each form contains *one* submit button. Often this provides a better User Experience in the form of focused pages and actions dedicated to each task the user wishes to accomplish.

In our example above the delete button would become a link to a page that allows the user to delete the details.

## What if you "must have" two actions in one form?

If you *must* have two actions in one form then you must answer the following question: **what is the form's primary action?**

This is not always a straightforward answer, but in the example above it's clearly the *update* button. For this simply make sure that button comes first in the document flow.

The only potential problem here is that you might be limited by the powers of CSS in terms of visually positioning the buttons as desired. If this is the case then you can duplicate the primary button at the top of the form and hide it off screen with CSS:

The trade off here is that when the user is tabbing through the page and arrives at the hidden button, the UI will appear to be unresponsive. This is because focusing on an interactive element would normally provide some sort of visual feedback. As the button is hidden you lose this functionality.

The solution to this, is to display the button if focused, and then hide again when the user loses focus from this button. Again, this may not be desired but it's a trade off you may have to make.

## Summary

The simple omission of the submit button causes usability and accessibility problems which degrades the experience. Where possible design this out of the system and [embrace the constraints of the web](/articles/designing-honestly-for-the-web/). If it really isn't possible to do this, then a little effort to choose the primary action will improve the experience for these users.