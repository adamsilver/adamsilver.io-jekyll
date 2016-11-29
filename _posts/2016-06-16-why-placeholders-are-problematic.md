---
layout: post
title: Why placeholders are problematic
date: 2016-06-16 09:00:01
categories: design ux
---

When browsers introduced the placeholder, designers were quick to use them for hints and instructions as a way to help users fill in forms. Whilst this sounds good, it's actually problematic due to the way the placeholder behaves.

There is effectively one 'space' containing two values: the hint and the value. It comes down to the fact that the valuable information put in placeholders is not always available to users when they need it. And the problem is exacerbated when placeholders are used as a replacement for labels.

Here's why the placeholder is problematic:

## 1. Disappearing placeholder text is easy to forget

Because the placeholder disappears as the user types, they can easily forget the requirements of the field. This is especially the case with more complex fields.

For a login form, you may be tempted to omit labels because you think the fields are obvious, but why risk making it hard for people to use, in the name of [minimalism](http://uxmyths.com/post/115783813605/myth-34-simple-minimal)? The aim is to make something as easy as possible.

## 2. Not all browsers support placeholders

Whilst the majority of browsers support placeholders, some people use browsers that don’t. The [web is for everyone](https://adactio.com/journal/10665) and we shouldn't forget that. People using a browser without placeholder support, will see a blank box.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/2.jpeg" alt="Caniuse.com Placeholder support" width="100%">
		<figcaption>Caniuse.com Placeholder support</figcaption>
	</figure>
</div>

## 3. Pre-populated values are hard to understand

When a form is pre-populated—as is the case with an *edit details* form— it’s very difficult to understand what the value means without a label. See the example below:

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/3.png" alt="Pre-populated values without labels are hard to understand" width="100%" style="max-width: 400px;">
		<figcaption>Pre-populated values without labels are hard to understand</figcaption>
	</figure>
</div>

## 4. Reviewing a long form is difficult

If a user has filled in a long form and wants to go back to review what they entered, they'll need to have remembered what each field wanted. Also, some browsers autocomplete entries incorrectly which can exacerbate the problem.

## 5. Erroneous fields are harder to fix

A form containing errors is now harder to fix, because the information lacks
context without labels. For example, see the field below:

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/5.png" alt="Error message lacks context when the label is missing." width="100%" style="max-width: 400px;">
		<figcaption>Error message lacks context when the label is missing.</figcaption>
	</figure>
</div>

The error message explains that a number is required, but not the *type* of number. In this case the error message needs to be unnecessarily verbose i.e. “*Expiry date must use numbers only*”.

However, a field with a label doesn’t suffer from such problems:

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/5b.png" alt="Error message with a label for context." width="100%" style="max-width: 400px;">
		<figcaption>Error message with a label for context.</figcaption>
	</figure>
</div>

## 6. Some browsers will remove placeholder text on focus

When browsers first implemented placeholders, they would disappear as soon as the user focused on the control. This meant the user would have no time to read the instructions before typing. This resulted in users having to read *ahead* of the currently focused input.

Whilst most browsers only hide the placeholder when the user starts *typing*, some browsers still have this original behaviour.

## 7. Placeholder text may be mistaken for a value

People scan empty fields to know what they have missed, but the difference in placeholder contrast is so subtle that it can make a field *appear* complete. This can result in a user skipping a required field, only to be shown an error later once they submit the form.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/7.png" alt="The difference between a placeholder and a value is subtle" width="100%" style="max-width: 400px;">
		<figcaption>The difference between a placeholder and a value is subtle</figcaption>
	</figure>
</div>

## 8. They have insufficient contrast

Placeholder copy is afforded by being slightly greyed out which is problematic for two reasons. First, it’s hard to notice the difference in colour. Second, the colours are of insufficient contrast making it hard to read for people with vision impairments.

## 9. Screen readers may not announce them

Placeholders may not be read out by screen readers which is the visual
equivalent of a blank box. Labels are *always* read out.

## 10. A missing label reduces the size of the hit area

This means that people with fine motor skill impairments will find it harder to apply focus to a field with their finger or mouse.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/10.png" alt="No label means a smaller hit area." width="100%" style="max-width: 400px;">
		<figcaption>No label means a smaller hit area.</figcaption>
	</figure>
</div>

## 11. Placeholder text is limited to the size of the field

Placeholder text is cut off if it goes beyond the size of the field so you’re constrained as to what kind of hint or instruction to put there. Labels don’t suffer from this problem.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/11.png" alt="Placeholder copy gets cropped." width="100%" style="max-width: 400px;">
		<figcaption>Placeholder copy gets cropped.</figcaption>
	</figure>
</div>

## Is it okay if they're used in addition to labels?

Not particularly. Its certainly better but it’s still problematic.

If a piece of text adds value to the user—in this case by helping the user fill out a form, either by showing an additional hint, input format or example of what goes in the field—then it would be better if it was always available for the user to refer to.

On the other hand, if the placeholder is used in addition to a label, and doesn’t contain any vital information, then I wonder why you'd include it in the first place. It's clearly not adding value.

## Summary

Each of the problems discussed above cause friction for people trying to fill in a form — the sort of friction that drains peoples energy — the sort of friction that a great user experience strives to eliminate.

If you’re trying to help the user, the best place to start is to [always include a clear, always-visible label](/articles/always-use-label/).

On occasion, a placeholder — in *addition* to label — *might* be helpful, but use them judiciously and if in doubt, test with different people, under
different circumstances and different browsers.
