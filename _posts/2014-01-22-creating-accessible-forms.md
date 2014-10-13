---
layout: post
title:  "Creating accessible forms"
date:   2014-01-22 09:00:01
categories: accessibility
---

<!-- none option on radios -->

Creating accessible forms is very simple. There are basic rules to follow:

## Labels

Labels provide information about each control. Visual users will see the label and visually impaired users may use a screen reader which will read out the label. Labels are only needed for controls that provide a vessel for input e.g. submit buttons are fine without.

Additionally, browsers may provide the ability to click a label which will either move focus to the control or even mark the control as checked in the case of a checkbox or radio control.

Associating a control with a label as follows:

	<label for="username">Username</label>
	<input id="username">

Note: the `for` attribute associates a label with another control explicitly by matching the id attribute of the control.

## Fieldsets and related controls

Fieldsets provide information about a group of related controls. Typically this is useful for controls with a type attribute *radio* or *checkbox*.

Imagine a form control which allows the user to choose their favourite colour. The choices are represented as radios with associated labels: Red, Yellow and Blue.

“Red” doesn’t convey enough information on its own. However, wrapping the group of radios in a fieldset with a legend of “Favourite colour” will ensure the control can be read out by a screen reader as "Favourite colour, Red".

	<fieldset>
		<legend>Favourite colour</legend>
		<input type="radio" name="colour" id="colourRed" value="red">
		<label for="colourRed">Red</label>
		<!-- ... -->
	</fieldset>

## Optional radio group control

Radio controls can not be toggled; once marked as checked they cannot be unchecked until a different radio control is checked. Therefore it is imperative that an additional radio control is added with a 'None selected' option so that the user may change their mind. An example follows:

	<fieldset>
		<legend>Favourite colour</legend>
		<input type="radio" name="colour" id="colourNone" value="none">
		<label for="colourNone">None selected</label>
		<input type="radio" name="colour" id="colourRed" value="red">
		<label for="colourRed">Red</label>
		<input type="radio" name="colour" id="colourBlue" value="blue">
		<label for="colourBlue">Blue</label>
	</fieldset>

## Option groups and options

The optgroup element can improve accessibility of the options within a select control by adding information to groups of options. If a user had to select their favourite fruit including variety then adding an optgroup named "Apple" containing options such as "Pink Lady" would be advisable as follows:

	<select>
		<optgroup label="Apples">
			<option>Pink lady</option>
			<!-- ... -->
		</optgroup>
		<!-- ... -->
	</select>

## Don't abuse select controls

The select control provides a list of options of which one can be selected for input. An [accessibility/usability issue can arise when script is used to submit the form when the select's change event fires](/articles/select-menu-accessibility-issues/). Keyboard users may struggle. If a user wants to select the 4th option this would then require 3 form submissions which would be a terribly frustrating experience.

## Avoid multiple select controls

Multiple select controls allow the user to select multiple options but it's recommended that these controls are avoided due to users not understanding how to use them. Checkboxes provide a better alternative.