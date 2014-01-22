---
layout: post
title:  "Creating accessible forms"
date:   2014-02-22 09:00:01
categories: forms accessibility dom js
---

Creating accessible forms is very simple. There are basic rules to follow:

## Labels

Labels provide information about each control; without them the user wouldn't know what information is required. Visual users will see the label and visually impaired users may use a screen reader which will read out the label. Labels are only needed for controls that provide a vessel for input e.g. submit buttons are fine without.

Associate a control with a label as follows:

	<label for="username">Username</label>
	<input id="username">

Note: the `for` attribute associates a label with another control explicitly.

## Fieldsets and related controls

Fieldsets provide information about a group of related controls. Typically this is useful for controls with a type attribute `radio` or `checkbox`.

Imagine a form control which allows the user to choose their favourite colour. The choices are represented as radios with associated labels: Red, Yellow and Blue.

“Red” doesn’t convey enough information on it’s own. However, wrapping the group of radios in a fieldset with a legend of “Favourite colour” will ensure the control can be read out by a screen reader as "Favourite colour, Red".

	<fieldset>
		<legend>Favourite colour</legend>
		<input type="radio" name="colour_red" id="colour_red">
		<label for="colour_red">Red</label>
		<!-- ... -->
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

The select control provides a list of options of which one can be selected for input. An accessibility issue can arise when script is used to submit the form when the select's change event fires.

Keyboard users may struggle. If a user wan't to select the 4th option this would then require 3 form submissions which would be a terribly frustrating experience.

## Avoid multiple select controls

Multiple select controls allow the user to select multiple options but it is recommended that these controls are avoided due to users not understanding how to use them. Checkboxes provide a better alternative.