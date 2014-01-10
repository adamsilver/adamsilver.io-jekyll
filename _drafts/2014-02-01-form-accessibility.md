---
layout: post
title:  "Form accessibility"
date:   2014-02-01 09:00:01
categories: forms accessibility
---

## Contents

1. [Labels](#labels)
2. [Fieldsets](#fieldsets)
3. [Select conrol abuse](#selectControlAbuse)


<a name="labels"></a>
## Labels

Labels provide information about each from control both for visual and visually impaired users. They are only needed for controls that provide a vessel for input (submit buttons are fine without).

When a screen reader finds a control with a label, it will read the text within the label. To associate a control with a label is as follows:

	<label for="username">Username</label>
	<input id="username">

The for attribute associates a label with another control explicitly.

<a name="fieldsets"></a>
## Fieldsets

Fieldsets provide information about a group of related controls. Usually, this is important for controls with type radio or checkbox.

Let’s look at a simple example. Imagine a form control which allows the user to select their favourite colour. The choices are represented as radios with associated labels: Red, Yellow and Blue.

“Red” doesn’t convey enough information on it’s own. This is where a fieldset can help. Wrap the group of radios in a fieldset with a legend of “Favourite colour” and we have the complete information.

## Select control abuse

The select element provides a list of options of which one can be selected for input. An accessibility issue arises when they are abused with the use of JavaScript; submitting the form when the select *changes* value.

This is an accessibility issue for keyboard users because as they scroll through each value with the keyboard the page is refreshed. So selecting option 5 means 4 page refreshes.

## Summary