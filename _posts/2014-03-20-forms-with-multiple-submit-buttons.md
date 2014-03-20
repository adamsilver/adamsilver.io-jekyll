---
layout: post
title:  "Forms with multiple submit buttons"
date:   2014-03-20 09:00:01
categories: forms
---

Forms with multiple submit buttons can cause issues. When using a pointing device (e.g a finger or a mouse) these problems don't surface. However, the user may also submit the form in other ways e.g. a keyboard. In this case the form will be submitted as if the user pressed the first button in the document tree. Let's take an example:

	<form>
		<input type="text" name="username">
		<input type="text" name="password">
		<input type="submit" name="forgotPassword" value="Forgot password">
		<input type="submit" name="login" value="Login">
	</form>

If the username or password control has focus, and the enter key is pressed, the form will submit as if the user clicked (or tapped) the forgot password button. It is unlikely this was the required behaviour.

The best solution (if possible) would be to split the form into two, so each form has just one button.

When a form *does* have two actions it leads to the following question: **What is the forms primary action?** In the above example it's quite obvious; it should be the login button - but it isn't always a clear decision.

Another option would be to place the login button first in the document tree:

	<form>
		<input type="text" name="username">
		<input type="text" name="password">
		<input type="submit" name="login" value="Login">
		<input type="submit" name="forgotPassword" value="Forgot password">
	</form>

If necessary, CSS can be used to visually position them as desired.

The last option would be to place a duplicate button at the top of the form:

	<form>
		<input type="submit" name="login" value="Login">
		<input type="text" name="username">
		<input type="text" name="password">
		<input type="submit" name="forgotPassword" value="Forgot password">
		<input type="submit" name="login" value="Login">
	</form>


If needed, CSS can be used to hide the duplicate button. If the button *is* hidden, when the user tabs through the elements of the page and arrives at the hidden button, the user could be unaware of the currently focused element and the page will appear unresponsive. This can be alleviated by showing the button on-focus but this isn't perfectly cross-browser or accessible.