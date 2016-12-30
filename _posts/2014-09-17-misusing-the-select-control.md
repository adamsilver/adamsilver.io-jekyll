---
layout: post
title: Misusing the select control
categories: forms ux a11y
description: Sometimes designers and developers misuse the select drop down control. Find out about the problems and how to solve in this article.
---

Designers sometimes omit buttons to declutter the UI and [reduce clicks](http://idyeah.com/blog/2012/06/stop-counting-clicks/), both of which are UX fallacies. This introduces several usability problems which I'll discuss in this article.

<div class="image" style="max-width: 320px;margin: 0 auto;">
	<figure>
		<img src="/assets/img/sortby.png" alt="Sort by select" width="100%">
		<figcaption>Sort by select box missing a submit button</figcaption>
	</figure>
</div>

## 1. Keyboard users find them difficult

When foussed on the select menu, pressing up or down will select the options. In the following video I'm unable to select the 3rd option which creates a broken experience.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/rnKDDSo9Omk" frameborder="0" allowfullscreen></iframe>

If you want to check this out for yourself, visit [the demo](http://html.cita.illinois.edu/script/onchange/onchange-example.php) in an offending browser, such as Chrome (Windows), Opera (Windows), IE6, IE7, IE8 and IE9.


## 2. Screen reader users find them difficult

Sarah Miller found that dropdown lists without buttons were confusing because, while the user had to inspect every item in the list, the action of reading an item meant that it was selected so the user would never get past the first item in the list. Again a broken experience.

## Select menus aren't for navigation

We should use links for navigation and forms to submit information. The problem is that it's a little bit of a grey area.

This is because we might use forms to filter or sort search results for example. The user has selected an option, much like they might select a link. But that's the end of the similarity.

If you're going to use a form, then you must include a submit button.

1. Select menus are to help users fill in data. Not navigate. Grey area.
2. Selection and submission should be separate.
3. This behaviour relies on Javascript
4. Screen readers have trouble with them
5. Keyboard users have trouble with them


## Links are for navigation.

Select menus are to help users fill in data. They are *not* meant to be used for navigation; that's what links are for. They can be used as a means of changing the data that is displayed on a page. Think search results or filtering but that's it.

## Inputting data versus submitting data.

There should be a difference between selection and *submission*. Combining the two into a single interaction causes usability issues (which I will show later).

> &ldquo;Changing the setting of any user interface component does not automatically cause a change of context&rdquo;
> <br>&mdash;<cite>WCAG 2.0 Guidelines</cite>

## Generally difficult to use.

Larry Marinem conducted usability tests and states that sometimes designers try to "over-automate" by reducing combining selection and submission and that dropdown lists are expected to display the selection, not go somewhere.

Users are prone to mis-selecting an option so when it launches them off somewhere else, this can be really disorientating. He added that reducing the number of clicks does not make a site more usable but giving the users appropriate control of their navigation does.

## What are my options?

Adding the submit button back works beautifully and puts the user firmly back in control. Alternatively, you can make each option a link as follows:

	<a href="/whatever/?sort=popularity">Popularity</a>
	<a href="/whatever/?sort=location">Location</a>
	<a href="/whatever/?sort=etc">Etc</a>

Which reduces the clicks, exposes the options and doesn't have usability problems.

## Summary

UX is about creating human-friendly experiences. Reducing clicks and decluttering the UI might be the result of a solution but they should not be considered *objectives* in and of themselves.

> &ldquo;Everything should be made as simple as it needs to be, and no simpler.&rdquo;
> <br>&mdash; <cite>Albert Einstein</cite>