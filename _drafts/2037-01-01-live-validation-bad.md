---
layout: post
title: Live validation is problematic
date: 2037-01-01 09:00:01
categories: js
---

Live validation (also known as inline validation and live feedback) enables users to know whether what they type into a text box is valid *as they type*.
The theory is that it's easier to fix errors as soon as they occur. The thing is, live validation introduces more problems than it solves. Here's why:

## 1. Interuption causes friction

The problem, for example, is that for entries that require a certain number of characters, the first keystroke is always going to constitute an invalid entry. This means users will be interrupted early and often.

We could wait until the user has entered enough characters before showing an error. But this means the only way in which a user will get live feedback is after they have completed the field successfully which is pointless.

Alternatively, we could provide feedback when the user leaves the field (`onblur`) but this is too late. The user has already started to prepare and fill out the next field.

Heydon talks about a hybrid approach, which enables live feedback *after* the user first submits the form. The idea being that once the user is actively fixing errors, live feedback becomes less troublesome. However, the problem still stands because whilst the user is fixing the error, they will still be interrupted.

## 2. Visual glitches are disorientating

When the field switches between valid and invalid states, the error appears and disappears respectively, causing the page to judder. This can be disorientating, particularly for low confidence users. Here's an example:

![Live feedback can cause the page to judder](/assets/img/live.gif)

## 3. Inconsistency is confusing

This technique isn't suitable for checkboxes, for example. Consider a rule whereby one or more checkboxes must be selected. Providing feedback as the user moves between checkboxes is hard to manage and is inconsistent with the textbox behaviour.

Also, some validation routines can only be performed on the server, via submission, such as checking login credentials. This inconsistency in behaviour could confuse users unnecessarily.

## Summary

I would go as far to say that designing the *perfect* live validation behaviour is nigh on impossible. And any usability benefit is outweighed by the problems it introduces.

There are easier and better ways to improve form usability. We can shorten forms by removing superfluous fields. And we can split long forms using a One Thing Per Page approach. Moreover, if we ensure errors are easy to fix (with clear messaging) then users won't have trouble anyway.

If we validate `onsubmit` these problems fade away. By keeping things consistent we make things familiar. Without interruption users can focus on the task at hand, with errors being shown consistently and when users most expect them.