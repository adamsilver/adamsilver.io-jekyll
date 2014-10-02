---
layout: post
title:  "Forms with multiple submit buttons"
date:   2014-03-20 09:00:01
categories: accessibility
---

Forms with multiple submit buttons can cause issues. When using a pointing device (e.g a finger or a mouse) these problems don't surface. However, the user may also submit the form in other ways e.g. a keyboard. In this case the form will be submitted as if the user pressed the first button in the document tree. Let's take an example:

	<form>
		<input type="text" name="firstName" value="Adam">
		<input type="text" name="lastName" value="Silver">
		<input type="submit" name="delete" value="Delete">
		<input type="submit" name="save" value="Save">
	</form>

The above example represents a typical edit page for a user and the form is convenient as one page provides two different actions; delete or update.

If the firstName or lastName control has focus, and the enter key is pressed, the form will submit as if the user clicked (or tapped) the delete button. It is unlikely this is the intended behaviour. It's certainly a dangerous course of action.

The best solution (if possible) would be to split the form into two, so each form has just one button.

When a form *does* have two actions it leads to the following question: **What is the forms primary action?** In the above example it's quite obvious; it should be the save button - but it isn't always a clear decision.

Another option would be to place the save button first in the document tree:

	<form>
		<input type="text" name="firstName" value="Adam">
		<input type="text" name="lastName" value="Silver">
		<input type="submit" name="save" value="Save">
		<input type="submit" name="delete" value="Delete">
	</form>

If necessary, CSS can be used to visually position them as desired.

The last option would be to place a duplicate button at the top of the form:

	<form>
		<input type="submit" name="save" value="Save">
		<input type="text" name="firstName" value="Adam">
		<input type="text" name="lastName" value="Silver">
		<input type="submit" name="delete" value="Delete">
		<input type="submit" name="save" value="Save">
	</form>


If needed, CSS can be used to hide the duplicate button. If the button *is* hidden, when the user tabs through the elements of the page and arrives at the hidden button, the user is likely to be unaware of the currently focused element and the page will appear unresponsive. This can be alleviated by showing the button on focus but this isn't always the desired friendly behaviour.