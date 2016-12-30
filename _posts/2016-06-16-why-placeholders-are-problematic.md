---
layout: post
title: Why placeholders are problematic
date: 2016-06-16 09:00:01
categories: design ux
---

Since placeholders came along, designers have adopted them as means of storing hints. Their appeal lies in their minimal aesthetic. Unfortunatley, [minimal does not always mean simple](http://uxmyths.com/post/115783813605/myth-34-simple-minimal).

Some designers have gone one step further, and replaced labels with placeholders. Either way, placeholders are a problematic for many reasons. Here's why:

## 1. It's easy to forget

The placeholder disappears when the user types. Once it's gone it's hard to remember.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/forget.png" alt="Placeholder disappears when typing" width="100%">
		<figcaption>Placeholder text disappears as you type</figcaption>
	</figure>
</div>

## 2. Lack of browser support

[Not all browsers support the placeholder](http://caniuse.com/#feat=input-placeholder). In which case, the user will suffer a broken experience.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/support.png" alt="Broken for browsers lacking support" width="100%">
		<figcaption>Broken experience for browsers lacking support</figcaption>
	</figure>
</div>

## 3. Populated values are hard understand

Whilst a missing label is fatal, a missing hint is still problematic. The hint is still valuable to a user when editing a field.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/populated.png" alt="Populated field are hard to use" width="100%">
		<figcaption>Populated field are hard to use</figcaption>
	</figure>
</div>

## 4. Reviewing a long form is difficult

A user will need to memorise all the hints in order to check their form entries before submission. This is because as each form field is filled out, the hint disappears.

## 5. Errors are hard to fix

Errors are hard to fix because the message and the value lack context. And the hint may contain information to help fix the error.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/2.png" alt="Error message with a label for context." width="100%">
		<figcaption>Different hint patterns when there are errors</figcaption>
	</figure>
</div>

You could write a verbose error message. For example "Expiry date must only contain numbers" instead of "Must be a number". But this doesn't entirely solve the problem.

## 6. Some browsers hide the placeholder on focus

Some browsers hide the placeholder when the user focuses, instead of when they start typing. This means the user has to read ahead of the current field to read the hint.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/disappearing.png" alt="Placeholders disappear on focus" width="100%">
		<figcaption>Placeholders disappear on focus</figcaption>
	</figure>
</div>

## 7. Placeholder text may be mistaken for a value

People that don't notice the subtle difference in contrast will skip the field mistaking it for a value. When the user submits the form they will be frustratingly shown an error.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/empty.png" alt="Placeholders mistaken for real values" width="100%">
		<figcaption>Placeholders might be mistaken for real values</figcaption>
	</figure>
</div>

## 8. They have insufficient contrast

Placeholder text has a lower contrast to help users realise it's not a value. Some people will struggle to read the text due to the lack of contrast.

## 9. Screen readers may not announce them

Placeholders may not be read out by screen readers which is the visual
equivalent of a blank box.

## 10. The hit area is reduced

Clicking a label moves the focus to the field. This is helpful to everyone but even moreso to people with fine motor skill impairments. Fields with the label and hint outside, increases the size of the hit area.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/10.png" alt="No label means a smaller hit area." width="100%">
		<figcaption>No label means a smaller hit area.</figcaption>
	</figure>
</div>

## 11. Placeholder text can be cut off

If the placeholder is longer than the size of the field, it will be cut off. This means you're unnecessarily constrained to what information you can put inside it.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/11.png" alt="Placeholder copy gets cropped." width="100%">
		<figcaption>Long text gets cropped</figcaption>
	</figure>
</div>

## Summary

People often ask me if it's okay to use a placeholder in addition to a label. I suggest that if the hint is valuable to the user experience, we should make it easy to read. Putting the hint inside a placeholder doesn't achieve this.

On the other hand, if you're using it as an enhancement, it suggests the hint isn't particularly important. In which case don't bother including at all. Not every field needs a hint.

In any case, these problems are easy to avoid. [Always use a label](/articles/always-use-a-label/). And if necessary, include a hint outside the field too.