---
layout: post
title: Live validation is bad
date: 2037-01-01 09:00:01
categories
---

The idea behind live validation is good. It's good because the idea is to help users fix any problems as soon as possible, in context and just after they have made a mistake. If a user fills out a long form and only gets told after submission (some time after they filled out the field), then it may have a burden on them.

But what is really the problem here. Firstly as long as the user knows how to fix a problem then bringing the user back to context is not a big deal. Imagine a long form where the first field is a credit card number. The user makes their way through this form and presses submit. All fields are correct, except the credit card number.

The error reads "Your credit card number is missing a number." Even though it's been a minute since the user typed out credit card number, understanding the problem and fixing it is a simple one isn't it. And this logic follows for many live validation examples.

But if we can design our validation to improve the experience just a teeny tiny amount shouldn't we? Normally speaking we should of course. But when it comes to live validation it's not as simple as that. Live validation causes several problems for what is seemingly a small and potential gain. And it could even result in a worse experience.

Here's why:

## 1. Inconsistency of when to validate

For fields that have unknown lengths the fields should be validated onblur. For fields with a known length they should be validated at the point the known length and format is reached. This causes inconsistency in the experience for users and they might be expecting validation sooner or later than it is delivered.

There is also an inconstency with validating fields this way or through submit, as above with the server side only validation. It's just a disorientating, inconsistent experience for users. Some validation can’t be done on the client and so there will be a mix of onsubmit validation for that and inline for the other.

Not all fields can be validated this way causing further inconsitency. Radios, checkboxes, and select boxes all feel different to the user. Say for example with a set of radios, do you blur on the last input or every input?

## 2. What do you do when in error state?

When a field is in an error state, do you then switch to keyup or keep the error there until blur. Same for keyup validation for known lengths.

## 3. Showing an error once the user blurs is too late

Once you leave the field, ur focusing on the next one. Then the previous message comes up. Too late in fact.

## 4. Cross field?

Password & confirm password — think — i think fine.
Choose one if something else checked — think — i think fine.

## 5. Messy and complex rules for length of at least X

Some validation requirements mean that something should be at least X characters in length. 

This means as soon as the user types the field is erroneous. 

You can config each field separately perhaps, but this is more work and perhaps causes further inconsistency? 

Let's take an example. Let's say we configure a field to validate after 6 characters has been typed. That means the field would never error. It only validates once it's successful.

Maybe you need a rule to say “did the user get past 6 characters and then reduce the characters” but you see how complex this can get.

## 6. Complex to build

All of this to say is that is fairly complex to build and configure.

## But like Heydon says we can do something once we know fields are in an error state.

He says:

> Some fancy form validation scripts give you live feedback as you type your text entries, letting you know whether what you type is valid as you type it. This can become very difficult to manage. For entries that require a certain number of characters, the first few keystrokes always going to constitute an invalid entry. So, when do we send feedback to the user and how frequently?

> Not wanting to be the overbearing restaurant waiter continually interrupting customers to check in with them, we didn't flag errors on first run. Instead, only where errors are present after attempted submission do we begin informing the user.

> Once the user is actively engaged in correcting errors, I think it helpful to reward their efforts as they work. For fields now marked invalid, we could run our validation routine on each input event, switching aria-invalid from false to true where applicable.

## Summary

All of this goes away if you just validate a form on submit.

