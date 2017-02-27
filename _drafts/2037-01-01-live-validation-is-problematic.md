---
layout: post
title: Live validation is problematic
date: 2037-01-01 09:00:01
categories: js
---

Live inline validation (or feedback) enables users to know whether what they type into a text box is valid *as they type*. The theory is that it's easier to fix errors as soon as they occur. The thing is, live validation introduces more problems than it solves. Here's why:

## 1. Interruption causes friction

For entries that require a certain number of characters, the first keystroke is always going to constitute an invalid entry. This means users will be interrupted early and often.

We could wait until the user has entered enough characters before showing an error. But this means the only way in which a user will get live feedback is after they have completed the field successfully which is pointless.

Alternatively, we could provide feedback when the user leaves the field (`onblur`) but this is too late. The user has already started to mentally prepare for (and to fill out) the next field.

Also, users switch windows or use a password manager to help them fill out the form. When this happens the field will blur causing an error when the user wasn't finished yet.

In Inclusive Design Patterns, Heydon talks of a hybrid approach which provides feedback *after* the user first submits the form. The idea being that, once the user is actively fixing errors, live validation becomes less troublesome. However, the problem still exists because whilst the user is fixing the error, they will still be interrupted.

## 2. Visual glitches are disorientating

When the field switches between valid and invalid states, the error appears and disappears respectively, causing the page to judder. This can be disorientating, particularly for low confidence users. Here's an example:

![Live feedback can cause the page to judder](/assets/img/live.gif)

This problem is exacerbated when a user goes back to an erroneous field onblur. Because at this point it's advisable to hide the error, otherwise users will try and fix an error when there isn't one.

## 3. Inconsistency with other fields

Live validation as a technique can't be applied to other fields. Take checkboxes for example whereby the user must select at least one. Providing feedback as the user moves between checkboxes is hard to manage and is inconsistent with textbox (`keypress`) behaviour.

Also, some validation routines can only be performed on the server, via submission, such as checking user's login credentials. This inconsistency in behaviour could confuse users unnecessarily.

## 4. False positives

Often live validation is used to show a *green tick* when the user successfully fills out a field. This may provide a sense of progression and stop low-confidence users feeling like they need to check through their answers.

Typically, however, client-side validation checks the format. That is, that once the user goes to submit the form, whilst it was formatted correctly, they may be shown an error later on.

This, not only provides further inconsistency, but causes the experience to be an untrustworthy one.

## 5. Pre-populated fields

Pre-populated fields cause further complexity. Should the fields be loaded in a positive state, even though the user has not interacted yet? Does this mean they should be validated as the user types instead of blurring?

## 6. Validation inconsistency

On occasion we could validate some fields before they leave the field (onblur). For example if somebody types a letter in a numerical field, we can show an error. However, this again causes inconsistency issues and is rarely applicable for the slew of fields an validation routines which need to be applied. 

## Summary

I would go as far to say that designing the *perfect* live validation behaviour is nigh on impossible. And any usability benefit is outweighed by the problems it introduces.

There are easier and better ways to improve form usability. We can shorten forms by removing superfluous fields. And we can split long forms up with a One Thing Per Page approach.

As long as we ensure errors are easy to fix (with clear messaging), users won't have trouble anyway. And if we validate `onsubmit` we avoid the problems above, whilst keeping the form experience consistent, familiar and friendly.
