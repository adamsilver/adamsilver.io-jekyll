---
layout: post
title: Always use a label
date: 2016-07-01 09:00:01
categories: design ux
---

You might be tempted to remove labels from certain form controls to create a minimal aesthetic. This is a common [UX fallacy](http://uxmyths.com/post/115783813605/myth-34-simple-minimal) which can lead to subpar experiences.

Labels are essential because:

1. *sighted* users will be able to see the instructions;
2. *visually-impaired* users will hear the instructions when using a screen reader; and
3. *motor-impaired* users will find it easier to select a field thanks to the larger hit area. This is because clicking a label will move focus to the control.

Let's take a look at two examples whereby designers frequently ditch the label.

## 1. Add to basket form

When a form uses a select menu, designers sometimes rely on the first option in the list to denote meaning. Take a look at ASOS's *add to basket* form.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/labels/asos.jpeg" alt="ASOS’ product form omits labels on drop downs" width="100%" style="max-width: 350px">
		<figcaption>The menus are mising labels</figcaption>
	</figure>
</div>

### Notes

* This is *okay* for visual users when an option hasn't been selected yet. But, if one has been selected, it's hard to understand, as is the case with the colour menu shown above.
* Motor-impaired users will find it harder to select the field due to the smaller hit area.
* Screen reader users won't understand the values that are being read out. And when they are read out it will be disorientating for the values to be read out as "Select size, Small, Medium, Large". One is the instruction, and one is a value.

## 2. Search form

When a form has just one field&mdash;as would be the case with a search form&mdash;designers rely on placeholder text and the submit button to denote meaning. Take a look at [Selfridges'](http://www.selfridges.com/) search form.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/labels/selfridges.png" alt="Selfridges’ search form omits the label" width="100%" style="max-width: 350px;">
		<figcaption>The search field is missing a label</figcaption>
	</figure>
</div>

### Notes

* Visual users will be okay to begin with due to the placeholder. But [ placeholders are problematic](/articles/why-placeholders-are-problematic) for many reasons. One example is that once the user starts typing the instruction disappears.
* Motor-impaired users again will find it harder to select the field.
* Screen reader users will find it difficult because the placeholder is not announced.
* If a foreigner wants to translate the page using the browser's translation routine, the placeholder is ignored which causes confusion.

## Summary

It's easy for a visual designer who has good vision to discard the label in pursuit of a minimal aesthetic. But as we've seen this causes problems for others.

Accomodating a visual label might be a [challenge](/articles/the-design-challenge/), but it's a challenge that we should embrace, not avoid. By including a label we can ensure our forms are easy to use for all sorts of people.