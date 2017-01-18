---
layout: post
title: Don't initialise Javascript automagically
date: 2017-01-06 09:00:01
categories: js
description: Front-end devs are seduced by complexity. One way this manifests itself is in the magical looping over behavioural classes.
---

I used to write Javascript that initialises components automagically. Don’t
worry I’ll explain what I mean. Take a look below:

    var datepickers = document.getElementsByClassName(‘datepicker’);
    for(var i = 0; i < datepickers.length; i++) {
      new DatePicker(datepickers[i]);
    }

The technique works by looping over every element with a particular behavioural
class name. If the Document contains the class name several times, the script
creates several instances. With no Javascript changes at all. That’s the
automagical bit.

Developers commend this technique because there’s only four lines of code. Less
if using a library. And it never needs updating. If you want another date
picker, just add a class of date picker. Job done.

This approach is problematic for many reasons. Here’s why:

## 1. It’s harder to understand the codebase at a glance

To understand the codebase at a glance, you need to know what behaviour exists
and where.

The loop doesn’t tell you how many date pickers there are. There could be a
thousand instances or there could be one (or none) — in which case the loop is
misleading. Either way you don’t know.

## 2. You might apply behaviour by accident

If you happen to use a class that corresponds to a component, then you might
accidentally initialise behaviour.

## 3. It’s difficult to estimate stories

If you can’t document what you’re changing and where, it’s difficult to define
and estimate a story.

## 4. It’s difficult to QA

After modifying a date picker, a tester will ask you what parts of the system
you’ve affected. The loop doesn’t help you answer this question.

## 5. It’s harder to debug

If there’s a problem with one date picker, finding and debugging it is more
tricky. You will have to find the problematic instance by searching the HTML
templates. Then you will need to step through the loop until you find the
erroneous one.

## 6. It’s harder to delete

As you don’t know where the loop is executing, you can’t delete code in
confidence. Thus, the code stays in the codebase for a long time.

## 7. It’s hard to determine behaviour

This approach forces you to store behaviour in HTML attributes. This isn’t an
elegant way to define behavioural relationships. HTML becomes bloated and hard
to read. Every attribute value is a string, when you might, for example, want a
number.

    <div class="datepicker otherComponent" data-datepicker-attr="etc" data-datapicker-event="listener" data-othercomponent-attr="blah">

## 8. It’s painful to customise

When you need to use models and XHR etc, it becomes painful to work with this
approach.

I’ll give you an example. Imagine you have a form with two date pickers: a
start-date and end-date.

When the user chooses a start-date, the end-date values update. This is to
ensure the end-date is always after the start-date.

This is hard to define in HTML. In Javascript it’s easy:

    var startDate = new DatePicker();
    var endDate = new DatePicker();
    startDate.on('changed', function() { endDate.whatever(); });

## 9. It’s painful to infer behaviour from HTML

The loop doesn’t allow you to customise an instance by passing in options. Instead, you have to store behaviour in HTML. When you change behaviour, you must update the HTML. This goes against recommended​ [practices](https://en.wikipedia.org/wiki/Separation_of_concerns).

## 10. It’s painful to override behaviour

To override behaviour, you will need to add an extra class to the HTML. Then the date picker (or the loop) will determine the override by checking for this extra class. At this point, the component (or the loop) is no longer generic.​

## 11. It’s hard to destroy instances

It’s easy to store the instances during initialisation. But, determining and
retrieving one later so you can destroy it, is harder this way.

## 12. It increases the chance of performance issues

This approach means the Javascript has to crawl the DOM a lot more than is
otherwise necessary. First to find elements that need enhancing, and second to
determine behaviour from attributes.

[Touching the DOM is expensive](https://www.nczonline.net/blog/2009/02/03/speed-up-your-javascript-part-4/), which increases the risk of performance issues. The risk increases further when you have many components and many instances of a component.

## 13. It’s harder to unit test

It’s difficult to unit test behaviour when you store behaviour in HTML. You
might then decide to use HTML fixtures. But they are slow and you’re no longer
writing unit tests. You *could* mock the DOM but this is tedious and
problematic. The less you store in HTML the easier it is to test.

## “But I don’t want to update Javascript every time I want a new instance?”

I fail to see why updating Javascript is a problem. In fact, I would *expect*
you to change Javascript when updating behaviour. Updating HTML instead of
Javascript is not better.

## “Is this necessary—it  feels like code bloat?”

If code is valuable, it’s not code bloat.

## “But the Javascript will have a lot more code.”

Maybe. Maybe not. It depends on your architecture and your requirements. Even if
it did, good code is not just determined by the number of lines.

## “But let’s at least use it for simple components.”

Even if it did work for simple components, you have to draw a line between
simple and complex. This is arbitrary and having two ways of doing the same
thing makes code inconsistent.

## “It’s easier for **backend developers to add behaviour in HTML.**”

You need to decide whether backend developers should be writing Javascript or
not. If they should be writing it, then help them do it right. They are software
engineers. Trust them.

## Summary

Good code is not about number of lines.

Good code is not about how easy it is to write the first time.

Good code is easy to reason about. 

Good code is easy to update.

Good code is consistent.

Good code is easy to unit test.

[Good code is easy to delete.](http://programmingisterrible.com/post/139222674273/write-code-that-is-easy-to-delete-not-easy-to.)

Bad code is easy to write but hard to delete. Bad code is magical. Magic is
entertaining. Code shouldn’t be entertaining.

Automagical loops obfuscate complexity. They make things appear simple when
they’re not.

Help future-you by writing Javascript that doesn’t suffer from these problems.
HTML isn’t good at defining behaviour. But Javascript is.
