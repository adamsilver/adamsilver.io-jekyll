---
layout: post
title: The problem with live form validation
date: 2037-01-01 09:00:01
categories: js
---

Live validation (or feedback) enables users to know whether what they type into a text box is valid *as they type*. The theory is that it's better to know about errors as soon as they occur. The thing is, on balance, live validation produces more problems than it solves.

## 1. Interupting the user

The problem with live validation, for example, is that for entries that require a certain number of characters, the first keystroke is always going to constitute an invalid entry. This means it will interupt users too early and too often.

We could wait until the user has entered enough characters before showing an error, but this means live feedback won't kick in until they have completed the field successfully which is pointless.

Alternatively, we could provide feedback when the user leaves the field (`onblur`) but this is too late. The user has already finished with that field and is preparing for the next one.

Heydon talks about a hybrid approach, which is to enable live feedback after the user first submits the form. The idea here is that once the user is actively fixing errors, live feedback becomes less of an issue. However, the problem still stands because whilst the user is fixing the error, they will still be interrupted.

## 2. Visual glitches

Depending on the visual design, the page could judder fields becomes switch between valid and invalid states. That is the error appears and disappears while typing, which can disorientate users.

![Live feedback can cause the page to judder](https://cdn-images-1.medium.com/max/1600/1*XBGf_n7pIbd0fXxN4KfLNQ.gif)

## 3. Inconsistency

Live validation is not suitable for checkboxes, for example. Consider a rule whereby one or more checkboxes must be selected. Providing feedback as the user moves between checkboxes is hard to manage and behaves differently to a textbox.

Also, some validation routines can only be performed on the server, via submission, such as checking login credentials. This inconsistency in behaviour could confuse users unnecessarily.

## Summary

I would go as far to say that getting live validation right is nigh on impossible. Any potential benefit is outweighed by the problems introduced by the feature itself.

There are better ways to improve the usability on forms. Firstly we can shorten forms by removing fields or chunking them using the One Thing Per Page pattern.

Secondly, if we ensure messaging is clear and easy to act upon then fixing errors and completing the form is going to be easy regardless.

If we validate `onsubmit` these problems fade away. By keeping things consistent we make things familiar. Without interuption, users can focus on the task at hand, with errors being shown when users most expect them.