---
layout: post
title: Misusing the select control
categories: forms ux a11y
description: Sometimes designers and developers misuse the select drop down control. Find out about the problems and how to solve in this article.
---

I've seen many designers misuse the select menu by using it as a form of navigation. One example of this approach is with a Sort By form which many ecommerce sites use to allow users to sort a list of products.

<!-- <div class="image" style="max-width: 320px;margin: 0 auto;">
	<figure>
		<img src="/assets/img/sortby.png" alt="Sort by select" width="100%">
		<figcaption>Sort by select box missing a submit button</figcaption>
	</figure>
</div> -->

This technique is appealing because removing the button declutters the UI. And submitting the form when the user changes selection saves the user an extra click.

Whilst this seems sensible it's actually problematic. And in fact aiming for a [minimal UI](http://uxmyths.com/post/115783813605/myth-34-simple-minimal) and [counting clicks](http://idyeah.com/blog/2012/06/stop-counting-clicks/) doesn't always lead to an agreeable User Experience. Here's why:

## 1. Keyboard users find them difficult

Some browsers will immediately submit the form when the user selects an option. As a user moves from the first to the second option, the form will submit before the user had a chance to move further down the list.

To experience this for yourself visit [the demo](http://html.cita.illinois.edu/script/onchange/onchange-example.php) in an offending browser such as:
Chrome (Windows), Opera (Windows), IE6, IE7, IE8 or IE9.

## 2. Screen reader users find them difficult

Sarah Miller's research showed that dropdown lists without submit buttons were confusing to screen reader users. The act of reading an option meant that it was selected. Therefore the user could never get past the first option.

## 3. Users expect to use links for navigation

Links are for navigation. Forms are for submitting data&mdash;in our case filtering a set of search results. We should use the right element. In doing so we conform to the third of Henny Swan's UX principles, *design with familiarity in mind*.

## 4. Users expect selection and submission to be separate

There is a difference between selecting something and submitting it to the server for processing. Users can check and amend their entries before submitting them. In fact this is a WCAG 2.0 recommendation:

> &ldquo;Changing the setting of any user interface component does not automatically cause a change of context&rdquo;

The button invites the user to make an explicit action at their convenience, and therefore conforms to the second of Henny Swan's UX principles, *to give users control*.

## 5. Users find it disorientating

Larry Marinem's usability research found that users are prone to mis-selecting an option. So when it launches them off somewhere else, users found this disorientating.

## Summary

Reducing clicks and decluttering a UI *might* be the results of a well-designed solution, but they should not be objectives in and of themselves.

We should consider people with different preferences and browsers so that they can effectively use the websites we put in front of them.

Our solutions should be familiar wherever possible and keep the user in control of their actions. In this case, we must always include a button.





<!-- <iframe width="100%" height="315" src="https://www.youtube.com/embed/rnKDDSo9Omk" frameborder="0" allowfullscreen></iframe> -->