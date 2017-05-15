---
layout: post
title: Live validation is problematic
date: 2037-01-01 09:00:01
categories: js
---

Inline validation enables users to know whether what they type is valid *as they type*. The theory is that it's easier to fix errors as soon as they occur. Whilst this sounds sensible, live validation causes more problems than it solves. Here's why:

## 1. Interruption causes friction

For entries that require a certain number of characters, the first keystroke will always constitute an invalid entry. This means users will be interrupted early and often.

We can wait until the user has entered enough characters before showing an error. But this means the only way in which a user will get feedback is after they have completed the field successfully which is pointless.

## 2. Interruption on blur is too late

Alternatively, we can provide feedback when the user leaves the field (`onblur`) but this is too late. The user has already started to mentally prepare for (and to fill out) the next field.

Also many people switch windows or use password managers to assist in filling out forms. Leaving the field (which triggers the blur event) causes an error to show prematurely before the user finishes typing.

That's not all. 

Tabbing to the next field causes an error in the first. The user is now prompted to fix that error. They leave that field to fix the error in the first. Now the user has two errors to fix and they are not completely to blame.

## 3. Visual glitches are disorientating

When a field switches between valid and invalid, the error appears and disappears. This causes a page judder which is disorientating, particularly for low-confidence users or those with disabilities. Here's an example:

![Live feedback can cause the page to judder](/assets/img/live.gif)

Ideally error messages should be hidden as the user starts to fix the field&mdash;either `onfocus` or `onkeypress`. However, this causes the page to judder more often&mdash;when the user enters an erroneous field *and* when they leave a field in an invalid state.

## 4. Inconsistent behaviour

We can't apply this technique to other types of field such as radio buttons, checkboxes or a date field such as one that is split into day month and year.

The problem is that each of the separate controls needs to be considered as a whole. For example, imagine a group of checkboxes whereby the user must choose at least two.

As the user checks and leaves the first checkbox, it's impossible to know that this constitutes an error. Or a date of birth field as follows:

![Date of birth](/assets/img/dob.png)

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

## A hybrid approach?

In *Inclusive Design Patterns*, Heydon Pickering discusses a hybrid approach which provides feedback *after* the user first submits the form. The idea being that once the user is actively fixing errors, live validation becomes less troublesome.

This is true, but having discussed this with Heydon, we agreed that most of the problems still apply.

## Summary

I would go as far to say that designing the *perfect* live validation experience is nigh on impossible. And any potential benefit is outweighed by the significant problems it causes.

There are easier and better ways to improve forms. We can shorten forms by removing superfluous fields. And we can split long forms up using the [One Thing Per Page]() design pattern.

As long as we ensure our forms have sufficient labelling&mdash;and as long as we ensure errors are easy to fix (with clear messaging)&mdash;users will have little trouble. Validating `onsubmit` avoids many problems and keeps the experience consistent, familiar and friendly.

<!--
E.g. blur tab error issue https://www.wayfair.co.uk/v/checkout/authentication/register

If going to do Ajax then it's not instant and could slow users down. And then user has to do two server calls. One for Ajax for each field and one for whole submission.
-->