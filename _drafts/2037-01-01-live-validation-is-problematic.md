---
layout: post
title: Live validation is problematic
date: 2037-01-01 09:00:01
categories: js
---

Live inline validation (or feedback) enables users to know whether what they type into a text box is valid *as they type*. The theory is that it's easier to fix errors as soon as they occur which sounds sensible. The thing is, live validation introduces more problems than it solves.

## 1. Interruption causes friction

For entries that require a certain number of characters, the first keystroke will always constitute an invalid entry. This means users will be interrupted early and often.

We could wait until the user has entered enough characters before showing an error. But this means the only way in which a user will get feedback is after they have completed the field successfully which is somehat pointless.

Alternatively, we could provide feedback when the user leaves the field (`onblur`) but this is too late. The user has already started to mentally prepare for (and to fill out) the next field.

Also many people switch windows or use password managers to assist in filling out forms. But leaving the field (which triggers the blur event) will cause an error to show prematurely when the user hadn't finished yet.

And that's not all. Imagine tabbing away from the first field causes an error to show. At this point in time focus is on the second field but the error message from the first field prompts the user to fix it. Now the user has tabbed away twice leaving two fields that have barely had any attention to be in an error state.

## 2. Visual glitches are disorientating

When a field switches between valid and invalid states, the error appears and disappears respectively. This causes the page to judder which is disorientating, particularly for low-confidence users or those with disabilities. Here's an example:

![Live feedback can cause the page to judder](/assets/img/live.gif)

Ideally, any error messages should be removed as the user starts to fix the field&mdash;either `onfocus` or `onkeypress`. However, the problem here is that this causes the page to judder more often&mdash;when the user enters an erroenous field *and* when they leave a field in an invalid state.

## 3. Inconsistency in behaviour

Live validation as a technique can't be applied to other types of field. This includes radios, a date field (that is split into day month or year) or checkboxes.

The problem with these fields as that each of the separate controls needs to be considered as a whole. For example imagine a group of checkboxes whereby the user must choose at least two.

As the user checks and leaves the first checkbox, it's impossible to know that this constitutes an error.

Also, some validation routines can only be executed on the server (via submission), such as checking someone's login credentials. This inconsistency in behaviour can confuse users.

## 4. False positives

Live validation is sometimes used to show a positive message or *green tick* when the user successfully fills out a field. This may provide a sense of progression and stop people feeling like they need to check through their answers.

However, client-side validation typically checks the *format*. This means that a correctly formatted field may still be erroneous once submitted to the server. This, not only provides further inconsistency, but makes the experience an untrustworthy and unpleasant one.

## 5. Pre-populated fields

Pre-populated fields cause further issue. Should we display them in the 'successful' state? If they appear to have been validated already, should we then hide the success message until they have left the field again? It's tricky and there is no perfect answer.

## 6. Validation inconsistency

On occasion we can validate some fields before leaving the field on `keypress`. For example if somebody types a letter in a numerical field, we can show an error instantly.

However, this again causes inconsistency issues and is rarely applicable for the slew of fields requiring various different validation routines.

## 7. Many users might miss it anyway

Many users have their head down focussed on the keyboard&mdash;that is most people don't *touch type*. In this case inline validation won't be seen.

## 8. Context switching

Apart from overzealous interruption, live validation causes users to constantly switch mental contexts between *filling in form* and *fixing a form*. This is yet another source of friction.

## Summary

In *Inclusive Design Patterns*, Heydon Pickering talks of a hybrid approach which provides feedback *after* the user first submits the form. The idea being that once the user is actively fixing errors, live validation becomes less troublesome.

This is true, but having discussed this with him, many of the problems still apply. For example, whilst the user fixes the error, they will be interrupted too early or too late regardless.

I would go as far to say that designing the *perfect* live validation experience is nigh on impossible. And any potential usability benefit is outweighed by the problems it introduces.

There are easier and better ways to improve form usability. We can shorten forms by removing superfluous fields. And we can split long forms up using the One Thing Per Page design pattern.

As long as we ensure our forms have sufficient labelling&mdash;and as long as we ensure errors are easy to fix (with clear messaging)&mdash;users will have little trouble. If we validate `onsubmit` we avoid all the problems discussed here, whilst keeping the form experience consistent, familiar and friendly.

<!--
E.g. blur tab error issue https://www.wayfair.co.uk/v/checkout/authentication/register
-->