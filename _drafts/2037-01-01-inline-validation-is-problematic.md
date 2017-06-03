---
layout: post
title: Inline validation is problematic
date: 2037-01-01 09:00:01
categories: js
---

Inline validation enables users to know whether what they type is valid *as they type*. The theory is that it's easier to fix errors as soon as they occur. Whilst this sounds sensible, live validation causes more problems than it solves. Here's why:

## 1. Interruption causes friction

For entries that require a certain number of characters, the first keystroke will always constitute an invalid entry. This means users will be interrupted early and often.

We can wait until the user has entered enough characters before showing an error. But this means the only way in which a user will get feedback is after they have completed the field successfully which is pointless.

## 2. Interruption on blur is too late

Alternatively, we can provide feedback when the user leaves the field (`onblur`) but this is too late. The user has already started to mentally prepare for (and to fill out) the next field.

Many people switch windows or use password managers to assist in filling out forms. Leaving the field (which triggers the blur event) causes an error to show prematurely before the user finishes typing.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/inline-validation/01-first-key-stroke.gif" alt="" width="100%" style="max-width: 500px;">
		<figcaption>No space for hint</figcaption>
	</figure>
</div>

Furthermore, tabbing to the next field causes an error in the first. The user is now prompted to fix that error. They leave that field to fix the error in the first. Now the user has two errors to fix and they are not completely to blame.

## 3. Visual glitches are disorientating

When a field switches between valid and invalid, the error appears and disappears. This causes a page judder which is disorientating, particularly for low-confidence users or those with disabilities. Here's an example:

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/inline-validation/04-judder.gif" alt="" width="100%" style="max-width: 500px;">
		<figcaption>No space for hint</figcaption>
	</figure>
</div>

Ideally error messages should be hidden as the user starts to fix the field&mdash;either `onfocus` or `onkeypress`. However, this causes the page to judder more often&mdash;when the user enters an erroneous field *and* when they leave a field in an invalid state.

## 4. Inconsistent behaviour

We can't apply this technique to other types of field such as radio buttons, checkboxes or a date field such as one that is split into day month and year.

The problem is that each of the separate controls needs to be considered as a whole. For example, imagine a group of checkboxes whereby the user must choose at least two.

As the user checks and leaves the first checkbox, it's impossible to know that this constitutes an error. Or a date of birth field as follows:

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/inline-validation/03-date.png" alt="" width="100%" style="max-width: 500px;">
		<figcaption>No space for hint</figcaption>
	</figure>
</div>

As the user leaves the day box, the field is instantly invalid. You could validate when the last box is blurred but that doesn't entirely solve the problem. What if, for example, someone leaves the first box empty, and then tabs onto month.

Also, some validation routines can only be performed on the server (via submission), such as checking someone's login credentials. This inconsistency in behaviour is confusing.

## 5. False positives are untrustworthy

Some implementations use live validation to show positive messages or *green ticks* when the user fills out a field successfully. This may provide a sense of progression and stop people feeling like they need to check through their answers later on.

However, client-side validation typically checks the *format*. This means that a correctly formatted field may still be erroneous once submitted to the server. This not only provides further inconsistency, but makes the experience an untrustworthy and unpleasant one.

## 6. Pre-populated fields are problematic

Pre-populated fields cause further issue. Should we display them in the 'successful' state? If they appear to have been validated already, should we then hide the success message until they have left the field again? It's tricky and there is no perfect answer.

## 7. Validation inconsistency

On occasion we can validate some fields before leaving the field on `keypress`. For example if somebody types a letter in a numerical field, we can show an error instantly.

However, this again causes inconsistency issues and is rarely applicable for the slew of fields requiring various different validation routines.

## 8. Many users might miss it anyway

Many users have their head down focussed on the keyboard&mdash;that is most people don't *touch type*. In this case inline validation won't be seen.

## 9. Context switching

Apart from overzealous interruption, live validation causes users to constantly switch mental contexts between *filling in form* and *fixing a form*. This is yet another source of friction.

## 10. Marking success is confusing

[Luke Wobrelski's testing](https://alistapart.com/article/inline-validation-in-web-forms) showed that users weren't sure how to interpret a tick. He says the *participants knew we had no way to know their correct name or postal code, so they knew that the green check mark didn’t mean “correct.” But they weren’t sure and that was the problem.*

## Inline validation after submitting errors

In *Inclusive Design Patterns*, Heydon Pickering discusses a hybrid approach which shows errors *after* the user first submits the form. The idea being that once the user is actively fixing errors, inline validation is less problematic. This is certainly true, most of the problems still apply.

## Summary

Whilst there is some evidence that inline validation is helpful in some cases, using it on occasion creates an inconsistency. Whilst consistency is not the only quality in well-design interfaces, this inconsistency is confusing.

In any case, designing the *perfect* inline validation experience is nigh on impossible. And any potential benefit is outweighed by the significant problems it creates.

If we do everything else right&mdash;remove unnecesary fields, use clear labels, keep forms short with One Thing Per Page etc&mdash;then our forms will have minimum friction anyway.

Validating on submit avoids all these problems and creates a consistent, familiar and friendly experience.



<!--

“It’s frustrating that you don’t get the chance to put anything in [the field] before it’s flashing red at you.”

“When I clicked in the First Name field, it immediately came up saying that [my first name] is too short. Well of course it is! I haven’t even started!”

“I found it quite annoying how red crosses came up when you hadn’t finished typing. It’s just really distracting.”

E.g. blur tab error issue https://www.wayfair.co.uk/v/checkout/authentication/register

If going to do Ajax then it's not instant and could slow users down. And then user has to do two server calls. One for Ajax for each field and one for whole submission.
-->