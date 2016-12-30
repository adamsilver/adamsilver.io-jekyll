---
layout: post
title: Why placeholders are problematic
date: 2016-06-16 09:00:01
categories: design ux
---

You might be tempted to use placeholders to store hints. Or maybe as a replacement for labels. Either way, there are many reasons why this is problematic for users.

## 1. It's easy to forget

When the user starts typing the placeholder disappears. This makes it easy to forget. The hint is there to guide the user and so it should always be available for reference.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/forget.png" alt="Placeholder disappears when typing" width="100%">
		<figcaption>Placeholder text disappears as you type</figcaption>
	</figure>
</div>

## 2. Lack of browser support

[Most browsers support the placeholder but some don't](http://caniuse.com/#feat=input-placeholder). For people using an unsupported browser, the placeholder is completely unavailable creating a broken experience.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/support.png" alt="Broken for browsers lacking support" width="100%">
		<figcaption>Broken experience for browsers lacking support</figcaption>
	</figure>
</div>

## 3. Pre-populated forms are hard to use

When a form is pre-populated, it’s very difficult to understand. Even if you have label, the hint would still be unavailable.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/populated.png" alt="Populated field are hard to use" width="100%">
		<figcaption>Populated field are hard to use</figcaption>
	</figure>
</div>

## 4. Reviewing a long form is difficult

In order to verify they have entered the correct values, a user will need to remember what the hints were in the first place. This is because the  value has replaced the hint. This is an unnecessary burden on the user.

## 5. Errors are hard to fix

Errors are hard to fix because the message and the value lack context. And the hint may contain information to help fix the error.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/2.png" alt="Error message with a label for context." width="100%">
		<figcaption>Different hint patterns when there are errors</figcaption>
	</figure>
</div>

You might say that you can give the field context by having a more verbose error message e.g. "Expiry date must only contain numbers" instead of "Must be a number". But this only partially solves the problem.

## 6. Some browsers hide the placeholder on focus

Some browsers hide the placeholder when the user focuses, instead of when they start typing. This means the user has to read ahead of the current field to read the hint. Another unnecessary burden on the user.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/disappearing.png" alt="Placeholders disappear on focus" width="100%">
		<figcaption>Placeholders disappear on focus</figcaption>
	</figure>
</div>

## 7. Placeholder text may be mistaken for a value

People with a good eye may notice that a placeholder has a lower contrast than a real value. But many people won't notice it and so they will skip the field thinking it's already filled in. Then when the user submits the form they will be shown an error.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/empty.png" alt="Placeholders mistaken for real values" width="100%">
		<figcaption>Placeholders might be mistaken for real values</figcaption>
	</figure>
</div>

## 8. They have insufficient contrast

Placeholder text is low contrast. So low that people with vision impairments will struggle to read it.

## 9. Screen readers may not announce them

Placeholders may not be read out by screen readers which is the visual
equivalent of a blank box. Labels are *always* read out.

## 10. The hit area is reduced

Clicking or tapping a label puts the field into focus. This is particularly helpful for people with fine motor skill impairments. If there is a missing label it's harder to select the field.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/10.png" alt="No label means a smaller hit area." width="100%">
		<figcaption>No label means a smaller hit area.</figcaption>
	</figure>
</div>

## 11. Placeholder text can be cut off

If the placeholder text is longer than the size of the field, it's cut off. So you're constrained as to the size of the hint you put in there. Text outside of a field doesn't suffer from this problem.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/11.png" alt="Placeholder copy gets cropped." width="100%">
		<figcaption>Long text gets cropped.</figcaption>
	</figure>
</div>

## Is it okay to use them in addition to a label?

No. If a hint is valuable to the user, then why make it hard to reference? If the hint isn't vital to the user, then why bother including it all?

## Summary

All of these problems cause friction for real people trying to fill out a form. The sort of friction we can and should eliminate.

If you're trying to help the user, [always include a clear, always-visible label](/articles/always-use-a-label/). If the field benefits from an additional hint, include that outside the field too.