---
layout: post
title:  "The multiple submit button problem"
tagline: "And how to solve it"
date:   2014-03-20 09:00:01
categories: accessibility
---

Every now and then a form is designed to be multi purpose &mdash; for example, you may have an address form that has a post code look up facility; one button saves the address, one button looks up the address via post code. Forms such as this can cause problems for users that submit the form via keyboard.

## The problem

As an example lets take an edit details form. Code as follows:

	<form>
		<input type="text" name="firstName" value="Adam">
		<input type="text" name="lastName" value="Silver">
		<input type="submit" name="delete" value="Delete">
		<input type="submit" name="save" value="Save">
	</form>

This form has been designed to *also* allow the deletion of these details and hence has two submit buttons: *save* and *delete*.

The user can submit the form while focused on `firstName` or `lastName` by pressing the enter key. If they do this, the form will be submitted based on the first button in the document flow, which in this case is the *delete* button.

This is likely *not* what the user intended and is a dangerous course of action.

## The best solution

Where possible, the best solution would be to split out the forms into two. This means each form contains *one* submit button. Often this provides a better User Experience in the form of focused pages and actions dedicated to each task the user wishes to accomplish.

## The not quite as good solution

If you *must* have two actions in one form then you must answer the following question:

> What is the form's primary action?

This is not always a straightforward answer, but in the example above it's clearly the *save* button.

Having done this, you must put the primary action first in the document flow as follows:

	<form>
		<input type="text" name="firstName" value="Adam">
		<input type="text" name="lastName" value="Silver">
		<input type="submit" name="save" value="Save">
		<input type="submit" name="delete" value="Delete">
	</form>

The only potential problem here is that you might be limited by the powers of CSS in terms of visually positioning the buttons as desired. If this is the case then you can duplicate the primary button at the top of the form and hide it off screen with CSS:

	<form>
		<input type="submit" name="save" value="Save">
		<input type="text" name="firstName" value="Adam">
		<input type="text" name="lastName" value="Silver">
		<input type="submit" name="delete" value="Delete">
		<input type="submit" name="save" value="Save">
	</form>

The trade off here is that when the user is tabbing through the page and arrives at the hidden button, the UI will appear to be unresponsive. This is because focusing on an interactive element would normally provide some sort of visual feedback. As the button is hidden you lose this functionality.

The solution to this, is to display the button if focused, and then hide again when the user loses focus from this button. Again, this may not be desired but it's a trade off you may have to make.

## Summary

The simple addition of a submit button causes usability and accessibility problems which degrades the user experience. Where possible design this out of the system and embrace the constraints of the web. If it really isn't possible to do this, then a little effort to choose the primary action will improve the experience for these users.