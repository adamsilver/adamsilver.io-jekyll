---
layout: post
title: Live validation is problematic
date: 2037-01-01 09:00:01
categories: js
---

Live inline validation (or feedback) enables users to know whether what they type into a text box is valid *as they type*. The theory is that it's easier to fix errors as soon as they occur which sounds sensible. The thing is, live validation introduces more problems than it solves.

## 1. Interruption causes friction

For entries that require a certain number of characters, the first keystroke will always constitute an invalid entry. This means users will be interrupted early and often.

We could wait until the user has entered enough characters before showing an error. But this means the only way in which a user will get feedback is after they have completed the field successfully which is pointless.

Alternatively, we could provide feedback when the user leaves the field (`onblur`) but this is too late. The user has already started to mentally prepare for (and to fill out) the next field.

Another problem with triggering the feedback `onblur` is that many people switch windows or use a password manager to assist in filling out forms. But leaving the field will cause an error to show prematurely when the user hadn't finished yet.

## 2. Visual glitches are disorientating

When a field switches between valid and invalid states, the error appears and disappears respectively. This causes the page to judder which is disorientating, particularly for low-confidence users. Here's an example:

![Live feedback can cause the page to judder](/assets/img/live.gif)

Best practice states that any error message should be removed as the user starts to fix the field&mdash;either `onfocus` or `onkeypress`. The problem being that this causes the page to judder more often&mdash;when the user enters an erroenous field *and* when they leave a field in an invalid state.

## 3. Inconsistency in behaviour

Live validation as a technique can't be applied to other types of field. This includes radios, a date field (that is split into day month or year) or checkboxes.

The problem with these fields as that each of the separate controls needs to be considered as a whole. For example imagine a group of checkboxes whereby the user must check at least two.

As the user checks and leaves the first checkbox, it's impossible to know that this constitutes and error.

Also, some validation routines can only be executed on the server (via submission), such as checking someone's login credentials. This inconsistency in behaviour can confuse users unnecessarily.

## 4. False positives

Live validation is sometimes used to show a positive message or *green tick* when the user successfully fills out a field. This may provide a sense of progression and stop people feeling like they need to check through their answers.

However, client-side validation typically checks the *format*. This means that a correctly formatted field may still be erroneous. This, not only provides further inconsistency, but makes the experience an untrustworthy one.

## 5. Pre-populated fields

Pre-populated fields cause further issue. Should we display them in the 'successful' state? If they appear to have been validated already, should we then hide the success message until they have left the field again? It's involved and there is no perfect answer.

## 6. Validation inconsistency

On occasion we can validate some fields before leaving the field on `keypress`. For example if somebody types a letter in a numerical field, we can show an error instantly.

However, this again causes inconsistency issues and is rarely applicable for the slew of fields requiring various different validation routines.

## Summary

In *Inclusive Design Patterns*, Heydon talks of a hybrid approach which provides feedback *after* the user first submits the form. The idea being that once the user is actively fixing errors, live validation becomes less troublesome.

This is certainly true, but many of the problems we've discussed still apply. For example, whilst the user fixes the error, they will be interrupted too early or too late regardless.

I would go as far to say that designing the *perfect* live validation behaviour is nigh on impossible. And any potential usability benefit is outweighed by the problems it introduces.

There are easier and better ways to improve form usability. We can shorten forms by removing superfluous fields. And we can split long forms up with a One Thing Per Page approach.

As long as we ensure our forms have sufficient labelling&mdash;and as long as we ensure errors are easy to fix (with clear messaging)&mdash;users will have little trouble. If we validate `onsubmit` we avoid all the problems discussed here, whilst keeping the form experience consistent, familiar and friendly.

---

- Problem with https://www.wayfair.co.uk/v/checkout/authentication/register
- Two fields validate on blur. blur first field causes error when u tab into the next field, you then tab back or move to first field in order to fix and you now have done next to nothing and have two errors to fix. GAH.

To do it the recommended way you gotta apply onblur/onkeypress on a RULE basis, not just a FIELD basis.

