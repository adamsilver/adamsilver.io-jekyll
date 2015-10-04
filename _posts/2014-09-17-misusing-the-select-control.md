---
layout: post
title:  "Misusing the select control"
date:   2014-09-17 09:00:01
categories: forms ux a11y
---

You have most likely seen and used a select menu without a submit button. An example of this would be sorting products on Amazon (shown below). The reasoning behind this is normally to declutter the UI and reduce clicks. Unfortunately, when you remove the submit button, and change the native browser behaviour, it leads to an *unfriendly* human experience.

<div class="image">
	<img src="/assets/img/sortby.png" alt="Sort by select" width="209">
</div>

## Links are for navigation

Select controls are meant to be used to help users fill in data. They are *not* meant to be used for navigation; that's what links are for. People don't intuitively expect to navigate on selection.

This is a *learned* behaviour and one that has become commonplace, due to the misuse of the select control. And now, others have and continue to adopt this anti-pattern to the detriment of their users.

There should be a difference between selection and *submission*. Combining the two into a single interaction causes usability issues as I show later. But don't just take my word for it&mdash;WCAG 2.0  states:

> &ldquo;Changing the setting of any user interface component does not automatically cause a change of context&rdquo;

## What the usability tests tell us?

Larry Marinem conducted a usability test on this specific topic. He suggested that users do not expect the drop-down list to be a navigation device. He stated that there are certain things that users expect a control to do, and sometimes it is common for designers to over-automate a step of the task by changing the normal expected behavior of a control.

Larry continues to say that drop-down lists are expected to display the selected object, not go somewhere. With drop-down lists, it's not uncommon for users to mis-select something; the users are surprised when this type of control launches them off somewhere and more so when it launches them into a mis-selected area. He added that reducing the number of clicks does not make a site more usable; giving the users appropriate control of their navigation does.

## What about keyboard users?

We should all know by now that users don't just use a mouse. Keyboards and screen reader software can be used to use a website. In the case of keyboard users, tabbing to a select control and then pressing up or down will select different options. In the following video, you will see that when I press *down* on the keyboard, I am taken to the selected option, but I failed in my attempt to get to the 3rd option.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/rnKDDSo9Omk" frameborder="0" allowfullscreen></iframe>

If you want to have a play yourself, visit [this example](http://html.cita.illinois.edu/script/onchange/onchange-example.php) in an offending browser, such as Chrome (Windows), Opera (Windows), IE6, IE7, IE8 and IE9 &mdash; there are likely other browsers that do this, so if you come across one **please let me know**.

## How about screen readers?

With regards to screen readers Sarah Miller's usability test has some interesting insights. Sarah found drop-down lists without Go buttons were confusing because while the user had to inspect every item in the list, the action of reading an item meant that it was selected.

She added that the user chose to use the keyboard instead of a mouse to scroll through the options to view (or hear) them: the first option was automatically selected—the user never got past the first item in the list.

She also stated that a few respondents commented that auto-submit drop-down menus may be counter productive when interpreted by screen reader software (often used by the visually impaired). It seems that the software automatically selects the first item in the menu when the user opens it using either a mouse or keyboard.

## What are my options?

If you want to avoid the pitfalls you have two simple options are your disposal:

1. Make the options links. Users intuitively understand what a link will do.

2. Give the select a submit button so that users can comfortably select an option and choose to submit it.

## Summary

UX is about creating human-friendly experiences. [Reducing clicks](http://idyeah.com/blog/2012/06/stop-counting-clicks/) and decluttering the UI might be results as part of a solution, but they should not be considered *objectives* in and of themselves.

> &ldquo;Everything should be made as simple as it needs to be, and no simpler.&rdquo;
> <br>&mdash; Albert Einstein

Select menus are *not* meant to be used for navigation; it is merely a learned behaviour. Removing the submit button significantly degrades the experience for your users. The good news is that, if you simply put the submit button back (or use links instead) the problem dissipates.