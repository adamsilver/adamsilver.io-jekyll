---
layout: default
title: booking an appointment
id: about
permalink: /case-studies/book-appointment
---

- The challenge we ran into was…
- I realized we didn’t understand…
- Our first attempt to address this challenge was…
- We learned these critical things we never knew about our users…


# Choosing a date and time slot

## Background

Agents need to book appointments with claimants. To do that, their calendars are exposed to the system. Based on the type (and therefor length) of appointment, a range of dates and times need to be presented for the agent to choose.

This process happens with the claimant. The claimant's calendar isn't part of the system, but even it was, the claimant would have to make sure it truly reflects reality. And what if in reality, the claimant had no time in their calendar. That would mean an appointment couldn't be booked there and then and would stop the claim from being live as it would go against policy.

The point being that it's the agent's calendar that is exposed for availability and the rest happens live with verbal communication in-person or over the phone.

The existing third-party system presented availability in single-week batches. Within each day, users could expand the morning or afternoon to reveal time slots. The agent chooses one based on claimant's availability and that's that.

## The challenge

The challenge was to give agents a quick way to choose a time slot without confusing them based on their past experience with the third-party system they'd been accustomed to.

## #1

Our first attempt to address this challenge made a few tweaks to the existing interface.

1. We flipped the interface on it's side. Instead of days of the week along the top, we put them along the side.
2. Similarly, instead of times running from top to bottom, times ran from left to right.
3. We also decided to use conventional form controls with radio buttons as this was standard and well-understood generally by our users.
4. We omitted the AM and PM segmentation as we weren't sure it was needed.

From our initial research we also noticed that agents would reference appointmnets based on how far they are into the future. For example, they'd want to book an appointment for “this week” or “next week”, or “4 weeks from now”, so we put this on the interface too.

It worked really well. We tested with about 12 agents over two sessions and they were able to find and choose a slot easily. 

But, we failed to realise that an appointment with a short duration would create more slots. This was problematic when the claimant wanted an early afternoon slot because it was hard to spot where the afternoon appointments started.

## #2

We added AM and PM solving the above problem. And this time agents had no trouble booking a slot for morning or afternoon.

With this out of the way, we asked agents how long into the future some appointments needed to be booked. Some were 3 months or even 6 months into the future. Pagination to flip one week at a time wasn't enough.

## #3

We let users jump ahead to any date in the future by using a date picker widget. This worked really well. We kept the previous and next pagination links as they worked well for users finding a date within the next 1 or 2 weeks.

## #4

Up to now we had only really tested with mouser users, using a large screen. We didn't really think about small screens because all our agents were using desktop monitors with large screens.

While we wanted to solve the small-screen problem it wasn't pressing. But what we had failed to test up until this point was people using a screen reader. Civil servants are users too and some of them have access needs.

I contacted Leonie Watson, Chris Moore and Steven Langley—all screen reader users. And got them to test the interface.

I had always heard that forms and tables didn't go well together but I never really understood why. It turns out that form controls inside tables can work okay and this did work okay, but it's a bit of extra effort to navigate.

The only other issue that was raised is that some of the crucial information stored in the table headings isn't read out by screen readers. So to solve that, that meant duplicating the contents of the headings inside each of the radio button labels.

Having duplicate content and approaching design based on individual needs isn't ideal as there's more to maintain and can create a performance problem. So we decided to explore a different layout without tables.

First, I reconstructed the same layout but with DIVs. This is materially dishonest, because something that looks like a table should be a table. And it also didn't eradicate the need for duplicate content.

Second, I decided to scrap the table altogether and use nested fieldsets. The first fieldset was to wrap the entire group of slots. The second was to wrap the day's slots. This worked really well. But we also needed a third level to group the morning and afternoon slots for that day.

This works well because a fieldset is malleable. There's no table getting in the way and we can change the layout easily for small and large screens as necessary. The problem is that when using the form in forms mode, only that level's fieldset is read out.

Screen reader users didn't report a problem, as they could navigate without using forms mode.

The other thing that came up was the time format itself. using a dot between the hours and minutes caused screen readers to read out “nine point four five”. As users could be confused that this is a decimal number, we changed this to use a colon which is a less ambiguous way to represent the numbers that denote a time.


