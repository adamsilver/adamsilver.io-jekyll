---
layout: post
title: "Placeholders are problematic"
date: 2016-06-16 09:00:01
categories: design ux
description: Placeholders have 13 problems and one simple solution. Find out everything you need to know in this article.
---

Since the placeholder attribute came along, designers have used it as means of storing hints. The appeal lies in their minimal aesthetic (they save space).

Some designers go one one step further, and replace labels with placeholders. Either way, placeholders are an inclusive design anti-pattern which causes problems for users. Here's why:

## 1. They are hard to remember

The placeholder disappears when the user types. Once it's gone it's hard to recall.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/forget.png" alt="Placeholder disappears when typing" width="100%">
		<figcaption>Placeholder text disappears as you type.</figcaption>
	</figure>
</div>

## 2. Lack of browser support

[Not all browsers support placeholders](http://caniuse.com/#feat=input-placeholder). In which case, the user will suffer a broken experience.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/support.png" alt="Broken for browsers lacking support" width="100%">
		<figcaption>Broken experience for browsers lacking support.</figcaption>
	</figure>
</div>

## 3. Populated values lack clarity

It's obvious that a missing label is fatal. But if the hint is missing, a user will find it harder to provide an answer.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/populated.png" alt="Populated field are hard to use" width="100%">
		<figcaption>Populated fields are hard to use.</figcaption>
	</figure>
</div>

## 4. Reviewing entries before submission is difficult

A user will need to memorise all the hints in order to check their form entries before submission. This is because as each form field is filled out, the hint disappears. The more fields there are, the bigger the problem.

## 5. Errors are hard to fix

Errors are hard to fix because the message and the value lack context. And the hint may contain information to help fix the error.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/2.png" alt="Error message with a label for context." width="100%">
		<figcaption>Different hint patterns when there are errors.</figcaption>
	</figure>
</div>

You could write a verbose error message. For example “Your password must be at least 8 characters” instead of “Must be at least 8 characters”. But this doesn't entirely solve the problem.

## 6. Some browsers hide the placeholder on focus

Some browsers hide the placeholder when the user focuses, instead of when they start typing. This means the user has to read ahead of the current field to read the hint.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/disappearing.png" alt="Placeholders disappear on focus" width="100%">
		<figcaption>Placeholders disappear on focus.</figcaption>
	</figure>
</div>

## 7. Placeholder text may be mistaken for a value

People that don't notice the subtle difference in contrast will skip the field mistaking it for a value. One test showed that [99% of users thought they didn't need to enter a value](http://www.uxmatters.com/mt/archives/2010/03/dont-put-hints-inside-text-boxes-in-web-forms.php). When the user submits the form they will be frustratingly shown an error.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/empty.png" alt="Placeholders mistaken for real values" width="100%">
		<figcaption>Placeholders might be mistaken for real values.</figcaption>
	</figure>
</div>

Or some users will try and select the placeholder text (because they think it's actual text) and it will be confusing when they can't.

## 8. They have insufficient contrast

Placeholder text has a lower contrast to help users realise it's not a value. Some people will struggle to read the text due to the lack of contrast.

## 9. Screen readers may not announce them

Placeholders may not be read out by screen readers making this exclusive to sighted users.

## 10. The hit area is reduced

Clicking a label moves the focus to the field. This helps everyone but even moreso to users with fine motor skill impairments. Fields with the label and hint outside, increases the size of the hit area.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/10.png" alt="No label means a smaller hit area." width="100%">
		<figcaption>No label means a smaller hit area..</figcaption>
	</figure>
</div>

## 11. Placeholder text can be cut off

If the placeholder is longer than the size of the field, it will be cut off. This means you're unnecessarily constrained to what information you can put inside it.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/11.png" alt="Placeholder copy gets cropped." width="100%">
		<figcaption>Long text gets cropped.</figcaption>
	</figure>
</div>

## 12. Some browsers don't translate them

For example, when Chrome translates a web page, it will fail to translate the text inside a placeholder.

## 13. Browser auto-complete exacerbates the problem

The browser's auto-completion routine populates the fields automatically. This means the placeholder text disappears making it difficult for the user to check the values against what the fields intended.

## 14. In Windows High Contrast Mode placeholder text looks like an actual value

In High Contrast Mode, placeholder text is given high contrast colors, making it look like an actual value.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/placeholders/14.png" alt="Placeholder copy gets cropped." width="100%">
		<figcaption>Placeholder text in Windows 10 High Contrast Mode</figcaption>
	</figure>
</div>

## Summary

Some people ask me if it's okay to use a placeholder in addition to a label. I say that if the hint is valuable to the user, we should make it easy-to-read and readily accessible. The placeholder doesn't meet these requirements.

Others say that the placeholder is just an enhancement and not essential to the user. To this I say that if the hint isn't essential then don't include it. Content is not an enhancement.

It's clear&mdash;at least in the case of placeholders&mdash;that [minimal does not mean simple](http://uxmyths.com/post/115783813605/myth-34-simple-minimal). Avoid placeholders. [Always use a label](/articles/always-use-a-label/). And, if you do need a hint, place it outside the field.