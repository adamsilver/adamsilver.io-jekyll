---
layout: post
title: Always use a label
date: 2016-07-01 09:00:01
categories: design ux
description: Fields with missing labels cause problems. And yet, designers omit them all the time. Why?
---

*First sent to my [private mailing list](/signup).*

Designers often remove labels to create a minimal aesthetic and save space. However, [minimal doesn't always mean simple](http://uxmyths.com/post/115783813605/myth-34-simple-minimal). Labels are essential to the user experience.

- Sighted users can see the instructions.
- Visually-impaired users can hear the instructions when using a screen reader.
- Motor-impaired users can easily move focus to the field due to the larger hit area. (Clicking a label moves focus to the field).

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
* Screen reader users will struggle to understand what's going on. The values will be announced as "Select size, Small, Medium, Large"&mdash;that is, they're a mix of instructions and options to pick.

## 2. Search form

When a form has just one field&mdash;as would be the case with a search form&mdash;designers rely on placeholder text and the submit button to denote meaning. Take a look at [Selfridges'](http://www.selfridges.com/) search form.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/labels/selfridges.png" alt="Selfridges’ search form omits the label" width="100%" style="max-width: 350px;">
		<figcaption>The search field is missing a label</figcaption>
	</figure>
</div>

### Notes

* Visual users will be okay to begin with due to the placeholder. But [ placeholders are problematic](/articles/placeholders-are-problematic/) for many reasons. One example is that once the user starts typing the instruction disappears.
* Motor-impaired users again will find it harder to select the field.
* Screen reader users will find it difficult because the placeholder is not announced.
* If a foreigner wants to translate the page using the browser's translation routine, the placeholder is ignored which causes confusion.

## Summary

Trying to declutter an interface to reduce noise is a noble goal. But labels aren't noise. Removing labels to save space causes unnecessary usability problems.

Accomodating a visual label might be a [design challenge](/articles/the-design-challenge/), but we should embrace this challenge by prioritising their inclusion during the early stages of design. This ensures our forms are user-friendly.