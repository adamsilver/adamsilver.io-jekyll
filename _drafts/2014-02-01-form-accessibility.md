---
layout: post
title:  "Form accessibility"
date:   2014-02-01 09:00:01
categories: forms accessibility dom js
---

## Contents

1. [Labels](#labels)
2. [Fieldsets](#fieldsets)
3. [Option groups](#optionGroups)
4. [Select conrol abuse](#selectControlAbuse)
5. [Multiple select controls](#multipleSelect)


<a name="labels"></a>
## Labels

Labels provide information about each from control both for visual and visually impaired users. They are only needed for controls that provide a vessel for input (submit buttons are fine without).

When a screen reader finds a control with a `label`, it will read the text within it. To associate a control with a `label` is as follows:

	<label for="username">Username</label>
	<input id="username">

The `for` attribute associates a `label` with another control explicitly.

<a name="fieldsets"></a>
## Fieldsets

Fieldsets provide information about a group of related controls. Usually, this is important for controls with a type attribute `radio` or `checkbox`.

Let’s look at a simple example. Imagine a form control which allows the user to select their favourite colour. The choices are represented as radios with associated labels: Red, Yellow and Blue.

“Red” doesn’t convey enough information on it’s own. This is where a `fieldset` excels. Wrap the group of `radio`s in a `fieldset` with a `legend` of “Favourite colour” and this will be read out appropiately by a screen reader as 'Favourite colour, Red'.

	<fieldset>
		<legend>Favourite colour</legend>
		<input type="radio" name="colour_red" id="colour_red">
		<label for="colour_red">Red</label>
		<!-- ... -->
	</fieldset>

<a name="optionGroups"></a>
## Options groups

The `optgroup` element can improve accessibility of the options within a `select` control by adding information to groups of `option`s. If a user had to select their favourite fruit including variety then adding an `optgroup` of "Apple" and a bunch of options such as "Pink Lady" would be advisable as follows:

	<select>
		<optgroup label="Apples">
			<option>Pink lady</option>
			<!-- ... -->
		</optgroup>
		<!-- ... -->
	</select>

<a name="selectControlAbuse"></a>
## Select control abuse

The select element provides a list of options of which one can be selected for input. An accessibility issue arises when they are abused with the use of script; submitting the form when the select *changes* value.

This is an accessibility issue for keyboard users because as they scroll through each value with the keyboard the page is refreshed. So selecting option 5 means 4 page refreshes.

<a name="multipleSelect"></a>
## Multiple select controls

Multiple select controls allow the user to select multiple options but it is recommended that these controls are avoided due to users not understanding how to use them. Checkboxes provide a better alternative.