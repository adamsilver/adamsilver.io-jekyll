---
layout: post
title: The problem with live form validation
date: 2037-01-01 09:00:01
categories: js
---

Live validation (or feedback) enables users to know whether what they type into a text box is valid *as they type*. The theory is that it's harder to fix errors if they are only told later once they submit the form.

Firstly, shortening forms or splitting up forms up across screens (see One Thing Per Page) is probably a better move. Keeping forms short removes any potential problem.

Secondly, if the messaging is clear and easy to act upon then&mdash;live validation or not&mdash;fixing errors and completing the form isn't going to be a problem.

The problem with live validation, for example, is that for entries that require a certain number of characters, the first keystroke is always going to constitute an invalid entry. This means it will interupt users too early too often.

We could wait until the user has entered enough characters before showing an error, but this means live feedback won't kick in until they have completed the field successfully which seems pointless.

We could provide feedback when the user leaves the field (onblur) but this is too late. The user has already finished with that field and is preparing for the next one.

Another option would be to enable live feedback after the user first submits the form. The idea here is that once the user is actively fixing errors, live feedback becomes more useful and less problematic. Thanks to Heydon for this idea of his.

However, the problem still stands because whilst the user is fixing the error, they will still be interrupted. And again onblur is still too late!

That's not all though. Depending on the visual design of the error messages, the page could judder as errors appear and disappear while the user types which is disorientating. And can be particularly problematic when using a mouse, as the elements move in response to blurring the field.

![Live feedback can cause the page to judder](https://cdn-images-1.medium.com/max/1600/1*XBGf_n7pIbd0fXxN4KfLNQ.gif)

Some fields, such as checkboxes, can't be validated like this. And some validation routines can only be ran on the server (via submission), such as checking login credentials. This inconsistency in behaviour could be confusing for users.

If we validate onsubmit these problems fade away. By keeping things consistent we make things familiar. Moreover by not interupting users, they stay on-task and complete a form with ease.