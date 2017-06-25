---
layout: post
title: Inline validation is problematic
date: 2037-01-01 09:00:01
categories: js
---

Inline validation informs users whether what they type is valid as they type. The theory is that it's easier to fix errors as soon as they occur instead of waiting until submission. The thing is, inline validation causes several problems:

## 1. Interruption causes friction

For fields thats require a certain number of characters, the first keystroke will cause an error. Meaning users will be interrupted early and often.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/inline-validation/01-first-key-stroke.gif" alt="" width="100%" style="max-width: 500px;">
	</figure>
</div>

We could wait until the user has entered enough characters but this means the only way a user will get feedback is after completing the field successfully which is pointless.

## 2. Interruption on blur is too late

We could provide feedback when the user leaves the field (`onblur`) but this is too late. The user has already started to mentally prepare for, and to fill out the next field.

Many people switch windows or use password managers to assist in filling out forms. Leaving the field (which triggers the blur event) causes an error to show prematurely before the user finishes typing.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/inline-validation/02-blur.gif" alt="" width="100%" style="max-width: 500px;">
	</figure>
</div>

And tabbing to the next field causes an error in the first. Due to this error, the user leaves the second field to fix the error in the first. This causes an error in two fields. This sucks.

## 3. Visual glitches are disorientating

When a field switches between valid and invalid states, the error appears and disappears respectively. This causes the page to judder which is disorientating and cab cause problems for mouse users.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/inline-validation/04-judder.gif" alt="" width="100%" style="max-width: 500px;">
	</figure>
</div>

Ideally error messages should be hidden as the user starts to fix the field&mdash;either `onfocus` or `onkeypress`. However, this exacerbates the problem.

## 4. Field groups are inconsistent

Groups of fields need to be considered holistically. Take a group of checkboxes, for example. The user must choose at least two options. If the user clicks *yellow* and blurs is that an error?

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/inline-validation/checkboxes.png" alt=""  style="max-width: 500px;">
	</figure>
</div>

Or the date field below. As the user leaves the day box, the field is instantly invalid. You could validate when the last box is blurred but what if, for example, someone leaves the first box empty, and then tabs onto month?

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/inline-validation/dateofbirth.png" alt="" style="max-width: 500px;">
	</figure>
</div>

Designing something that relies on the user doing something in the right order is not ideal. We could validate these fields `onsubmit` but that gives users a false positive as they have grown to expect fields to validate inline.

## 5. Server side validation makes for an inconsistent experience

Some validation routines can only be performed on the server via submission. For example, checking someone's login credentials. This inconsistency in behaviour is confusing.

## 6. False positives are untrustworthy

Some implementations use inline validation to show *green ticks* when the user fills out a field successfully. This may provide a sense of progression and stop people feeling like they need to check through their answers later on.

However, inline validation typically checks the *format*. This means that a correctly formatted field may still be erroneous once it's submitted. This not makes the experience untrustworthy and unpleasant.

## 7. Pre-populated fields are tricky

Pre-populated fields cause further issue. Should we display them in the success state, if there is one? If they appear to have been validated already, should we then hide the success message until they have left the field again?

## 8. Validation inconsistency

Some fields can be validated as the user types. For example, if typing a letter in a numerical field. But this causes inconsistency and is rarely applicable to the slew of fields requiring various different validation routines.

## 9. Users might not notice it

Many users look at the keyboard as opposed to their screen when typing. In this case users won't see the error until later or at all.

## 10. It forces users to switch contexts

Apart from interruption, inline validation causes users to frequently switch between *filling in a form* and *fixing mistakes* modes. This is a cognitive burden on the user.

## 11. Marking success is confusing

[Luke Wobrelski's testing](https://alistapart.com/article/inline-validation-in-web-forms) showed that users weren't sure how to interpret a green tick. He says the *participants knew we had no way to know their correct name, so they knew that the green check mark didn’t mean “correct.” But they weren’t sure and that was the problem.*

## 12. Problems for screen reader users

When someone is using a screen reader they may want to go through the form fields to get a feel for what is coming before attempting to fill each field out. This could cause errors in all fields before the user even started their journey.

## Summary

Inline validation causes many problems and forces users to switch between filling in forms and fixing them.

Designers like inline validation because it avoids users seeing lots of errors after filling a long form. Assuming this is a true we can solve this by:

* Removing unnecessary fields
* Ensuring fields are well-understood with clear guidance
* Using [One Thing Per Page](https://www.smashingmagazine.com/2017/05/better-form-design-one-thing-per-page/)

In any case, designing the perfect inline validation experience is nigh on impossible. Any potential benefit is outweighed by the problems it introduces.





<!--

“It’s frustrating that you don’t get the chance to put anything in [the field] before it’s flashing red at you.”

“When I clicked in the First Name field, it immediately came up saying that [my first name] is too short. Well of course it is! I haven’t even started!”

“I found it quite annoying how red crosses came up when you hadn’t finished typing. It’s just really distracting.”

E.g. blur tab error issue https://www.wayfair.co.uk/v/checkout/authentication/register

If going to do Ajax then it's not instant and could slow users down. And then user has to do two server calls. One for Ajax for each field and one for whole submission.

https://simplyaccessible.com/article/accessible-forms-angular/

In *Inclusive Design Patterns*, Heydon Pickering discusses a hybrid approach which shows errors *after* the user first submits the form. The idea being that once the user is actively fixing errors, inline validation is less problematic. This is true, but most of the problems still apply.
-->