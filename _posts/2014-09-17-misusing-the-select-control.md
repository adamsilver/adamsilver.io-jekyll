---
layout: post
title: "Select boxes: don't submit onchange"
categories: forms ux a11y
description: Sometimes forms submitted when the user selects an option. This is problematic.
---

Many sites submit forms when the user selects an option in a select box (`onchange`). The idea is that removing the button declutters the interface and saves users an extra click. First, [minimal does not mean simple](http://uxmyths.com/post/115783813605/myth-34-simple-minimal) and second [stop counting clicks](http://idyeah.com/blog/2012/06/stop-counting-clicks/). Third, read on:

<!-- <div class="image" style="max-width: 320px;margin: 0 auto;">
	<figure>
		<img src="/assets/img/sortby.png" alt="Sort by select" width="100%">
		<figcaption>Sort by select box missing a submit button</figcaption>
	</figure>
</div> -->

## 1. Keyboard users find them difficult

Some browsers immediately submit the form when the user selects an option. As a user moves from the first to the second option, the [form will submit before the user had a chance to move further down the list](http://html.cita.illinois.edu/script/onchange/onchange-example.php). You can see this in action by using Chrome (Windows), Opera (Windows), IE6, IE7, IE8 or IE9.

## 2. Screen reader users find them difficult

Sarah Miller's research found that dropdown lists without submit buttons were confusing to screen reader users. The act of reading an option meant that it was selected. Therefore the user could never get past the first option.

## 3. Users expect links to navigate

Links are for navigation. Forms are for submitting data. We should use the right element. In doing so we conform to the third of Henny Swan's [UX principles](https://www.smashingmagazine.com/2015/02/bbc-iplayer-accessibility-case-study/#ux-principles), *design with familiarity in mind*.

## 4. Selection and submission should be separate

There is a difference between selecting something and submitting it. Users should be able to check and amend their entries before submission. This is a WCAG 2.0 recommendation:

> Changing the setting of any user interface component does not automatically cause a change of context

By letting users submit their choice in their own time, we conform to the second of Henny Swan's UX principles, *to give users control*.

## 5. It's disorientating

Larry Marinem's usability research found that users are prone to mis-selecting an option. So when it launches them off somewhere else, users found this disorientating.

## Summary

Designing for inclusion means not excluding users based on their interaction and browser preferences. In this case it also means giving users control and not over-automating an interface.

Reducing clicks and decluttering an interface may be the result of a well-designed experience, but they should not be objectives in and of themselves. Give users control and embrace convention.

<!-- <iframe width="100%" height="315" src="https://www.youtube.com/embed/rnKDDSo9Omk" frameborder="0" allowfullscreen></iframe> -->