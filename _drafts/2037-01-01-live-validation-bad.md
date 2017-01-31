---
layout: post
title: Live validation is bad
date: 2037-01-01 09:00:01
categories
---

The idea behind live validation is to help users fix errors as soon as they occur. If the user fills out a long form and the form is only validated later onsubmit, then they may have lost some context of the erroneous field.

But is this really a problem? Firstly, there is often opportunity in form design to make forms shorter, or to split long forms up over many pages (see One Thing Per Page). Secondly, even if a form is long this is probably of little issue&mdash;as long as fixing the error is easy.

What does *easy* mean though? Easy means helping the user understand they have a problem and explaining clearly how to fix it. If we get this right, live validation or not, a form is going to be easy to use (all things being equal).


Live validation itself actually has problems. And if we consider the problems with the overall picture it's easy to see that this often touted UX recommendation is probably best avoided. Let's take a look at some of the problems now:

1. Onblur is too late and disrupts the flow of moving to the next field

2. Onkeyup is too early and interupts the user

3. Inconsistency

---

But what is really the problem here. Firstly as long as the user knows how to fix a problem then bringing the user back to context is not a big deal. Imagine a long form where the first field is a credit card number. The user makes their way through this form and presses submit. All fields are correct, except the credit card number.

The error reads "Your credit card number is missing a number." Even though it's been a minute since the user typed out credit card number, understanding the problem and fixing it is a simple one isn't it. And this logic follows for many live validation examples.

Here's why:

## 1. Inconsistency of when to validate

For fields that have unknown lengths the fields should be validated onblur. For fields with a known length they should be validated at the point the known length and format is reached. This causes inconsistency in the experience for users and they might be expecting validation sooner or later than it is delivered.

There is also an inconstency with validating fields this way or through submit, as above with the server side only validation. It's just a disorientating, inconsistent experience for users. Some validation can’t be done on the client and so there will be a mix of onsubmit validation for that and inline for the other.

Not all fields can be validated this way causing further inconsitency. Radios, checkboxes, and select boxes all feel different to the user. Say for example with a set of radios, do you blur on the last input or every input?

## . What do you do when in error state?

When a field is in an error state, do you then switch to keyup or keep the error there until blur. Same for keyup validation for known lengths.

## . Showing an error once the user blurs is too late

Once you leave the field, your focusing on the next one. Then the previous message comes up. Too late in fact.

## . Messy and complex rules for length of at least X

Some validation requirements mean that something should be at least X characters in length. 

This means as soon as the user types the field is erroneous. 

You can config each field separately perhaps, but this is more work and perhaps causes further inconsistency? 

Let's take an example. Let's say we configure a field to validate after 6 characters has been typed. That means the field would never error. It only validates once it's successful.

Maybe you need a rule to say “did the user get past 6 characters and then reduce the characters” but you see how complex this can get.

## 6. Page jumps around

Whilst typing or when bluring.

Whilst typing the error appears and hides as the user types the correct and incorrect thing. Often when we fix a typo, we move the cursor all the way back to the beginning. Quicker than moving the cursor to the correct spot for some people.

## But like Heydon says we can do something once we know fields are in an error state.

He says:

> Some fancy form validation scripts give you live feedback as you type your text entries, letting you know whether what you type is valid as you type it. This can become very difficult to manage. For entries that require a certain number of characters, the first few keystrokes always going to constitute an invalid entry. So, when do we send feedback to the user and how frequently?

> Not wanting to be the overbearing restaurant waiter continually interrupting customers to check in with them, we didn't flag errors on first run. Instead, only where errors are present after attempted submission do we begin informing the user.

> Once the user is actively engaged in correcting errors, I think it helpful to reward their efforts as they work. For fields now marked invalid, we could run our validation routine on each input event, switching aria-invalid from false to true where applicable.

But the problem still stands because the user is interupted when they are trying to fix the thing and onblur is too late.

## Summary

All of this goes away if you just validate a form on submit.

