---
layout: post
title: The problem with live form validation
date: 2037-01-01 09:00:01
categories: js
---

Live validation enables users to know whether what they type is valid as they enter text into text boxes. The theory is that it's harder to fix errors if they are told later on, once they submit the form.

Firstly, shortening forms or splitting forms up across screens (see One Thing Per Page) is often a better prospect. Keeping forms short makes fixing errors easy.

Secondly, if we ensure our messaging is clear and easy to act upon then live validation or otherwise, the form is going ot be easy to use regardless.

The problem with live validation, for example, is that for entries that require a certain number of characters, the first keystroke is always going to constitute an invalid entry. Meaning it will interupt users too early too often.

We could wait until the user has entered enough characters before showing an error, but this means live feedback won't kick in until they have completed the field successfully. This seems pointless.

We could provide feedback when the user leaves the field (onblur). But this is too late. The user has already finished with that field and is mentally preparing themselves for the next one.

We could enable live feedback after the user first submits the form. The idea here is that once the user is actively fixing errors, live feedback becomes more useful and less problematic. Props to Heydon for that idea.

However, the problem still stands because whilst the user is fixing the error, the user is still interrupted. And again onblur is still too late!

There are a couple of other problems to be aware of too. Depending on the visual design of the error messages, the page could judder as errors appear and disappear while the user types.

And other fields, such as checkboxes can't be validated like this. And some things can only be validated on the server (via submission). This causes inconsistency in behaviour which users may find disorientating.

Validating a form on submission avoids all of these problems. Any potential to interupt the user as they concentrate disappears. Validating every field is consistent providing a familiar flow for users as they look to complete the form.