---
layout: post
title: Live validation is problematic
date: 2037-01-01 09:00:01
categories: js
---

Live validation (also known as inline validation or live feedback) enables users to know whether what they type into a text box is valid *as they type*. The theory is that it's easier to fix errors as soon as they occur. The thing is, live validation introduces more problems than it solves. Here's why:

## 1. Interruption causes friction

For entries that require a certain number of characters, the first keystroke is always going to constitute an invalid entry. This means users will be interrupted early and often.

We could wait until the user has entered enough characters before showing an error. But this means the only way in which a user will get live feedback is after they have completed the field successfully which is pointless.

Alternatively, we could provide feedback when the user leaves the field (`onblur`) but this is too late. The user has already started to mentally prepare for (and to fill out) the next field.

Heydon mentions a hybrid approach. It provides live feedback *after* the user first submits the form. The idea being that once the user is actively fixing errors, live feedback becomes less troublesome. However, the problem still exists because whilst the user is fixing the error, they will still be interrupted.

## 2. Visual glitches are disorientating

When the field switches between valid and invalid states, the error appears and disappears respectively, causing the page to judder. This can be disorientating, particularly for low confidence users. Here's an example:

![Live feedback can cause the page to judder](/assets/img/live.gif)

## 3. Inconsistency is confusing

Live validation as a technique can't be applied to other fields. Take checkboxes for example whereby the user must select at least one. Providing feedback as the user moves between checkboxes is hard to manage and is inconsistent with textbox (`keypress`) behaviour.

Also, some validation routines can only be performed on the server, via submission, such as checking user's login credentials. This inconsistency in behaviour could confuse users unnecessarily.

## Summary

I would go as far to say that designing the *perfect* live validation behaviour is nigh on impossible. And any usability benefit is outweighed by the problems it introduces.

There are easier and better ways to improve form usability. We can shorten forms by removing superfluous fields. And we can split long forms up with a One Thing Per Page approach.

As long as we ensure errors are easy to fix (with clear messaging), users won't have trouble anyway. And if we validate `onsubmit` we avoid the problems above, whilst keeping the form experience consistent, familiar and friendly.