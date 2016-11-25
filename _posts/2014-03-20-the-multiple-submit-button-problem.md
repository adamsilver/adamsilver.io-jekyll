---
layout: post
title:  "The multiple submit button problem"
date:   2014-03-20 09:00:01
categories: forms a11y ux
description: Forms with multiple submit buttons have both UX problems and technical problems all of which is discussed in this article.
---

Sometimes forms are designed with more than one action. The example below shows an edit form. The user can either update their information or delete it altogether. A form with multiple actions causes problems for keyboard users.

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

## 1. Split the forms up

If possible, you should split out the forms into two. This means each form contains *one* submit button. This provides a better experience all-round. This is because each page has particular focus. Thus reducing cognitive burden.

In the above example, the delete button would become a link to a page that allows the user to delete the details.

## 2. Choose a primary action

If you *must* have two actions then you need to work out what the primary action of the form is. This is not always easier to answer.

In the above example, it's wise to make *update* the primary action because you probably don't want to make deletion easy.

To do this make sure the button is first in the document flow as per the design above. If the design doesn't allow you to do this then you should duplicate the primary button and put it at the top of the form. Hide it visually off screen with CSS.

Unfortunately, this approach has a problem. When the user uses their keyboard to tab to through the form, the UI will appear to be unresponsive. This is because the user has focused on a button that is off screen.

## Summary

Forms with multiple submit buttons cause problems for users not using a mouse. If at all possible, design this out of the system. Your users will thank you.