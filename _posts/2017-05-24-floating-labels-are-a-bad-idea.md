---
layout: post
title: Floating labels are a bad idea
date: 2017-05-24 09:00:01
categories: design patterns forms
description: We're often seduced by novel patterns that save space such as the floating label. Find out why this is a problem for users.
---

After writing [Placeholders are Problematic](/articles/placeholders-are-problematic/) some people suggested the floating label. We are often seduced by novel patterns that save space but this pattern is a bad idea. Here's why:

## 1. There is no space for a hint

Floating labels start inside the text box leaving no space for an additional hint.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/floatinglabels/1-hint.png" alt="" width="100%" style="max-width: 500px;">
		<figcaption>No space for hint</figcaption>
	</figure>
</div>

## 2. They are hard-to-read

Floating labels typically have small text, so that as it floats, it takes up a small amount of space. But small text is hard-to-read.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/floatinglabels/2-readability.png" alt="" width="100%" style="max-width: 500px;">
		<figcaption>Small text is hard-to-read</figcaption>
	</figure>
</div>


## 3. They need space to move into

Floating labels needs space to move into. If label text is friendly (see previous point), there would be no saved space anyway&mdash;just more *white* space.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/floatinglabels/3-space.png" alt="" width="100%" style="max-width: 500px;">
		<figcaption>They need space to move into</figcaption>
	</figure>
</div>

Alternatively, we could create space *as* the label moves into position. But this makes the page judder, creating a disorientating experience as the user starts typing.

## 4. The animation is problematic

Animation, even if it's done well, could be distracting and disorientating, particularly for low confidence or visually impaired users. And, when zooming in, the label may disappear off screen.

## 5. They have poor contrast

Like placeholder text, floating labels have low contrast to differentiate it but low contrast text is hard-to-read.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/floatinglabels/5-contrast.png" alt="" width="100%" style="max-width: 500px;">
		<figcaption>They have poor contrast</figcaption>
	</figure>
</div>

Depending on the design, when the label floats outside of the field, its colour will need to change. Otherwise the text will be lost against the background colour.

## 6. They may be mistaken for a value

People may skip the field thinking it's completed already. When they submit, they will see an error which needs fixing. This is frustrating and time consuming.

## 7. They are inconsistently located

Radio buttons, checkboxes and select boxes have static labels and legends. Where as text boxes have floating labels. This creates an inconsistent experience.

When looking at a text box, for example, the user has to look *inside* the control. For a select box they have to look *outside* of it.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/floatinglabels/7-consistency.png" alt="" width="100%" style="max-width: 500px;">
		<figcaption>Inconsistent location</figcaption>
	</figure>
</div>

## 8. The label may get cropped

If the floating label is longer than the size of the field, it will be cut off by the field. We should [design for content](/articles/stop-using-device-breakpoints/), we shouldn't make content fit the design.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/floatinglabels/8-cutoff.png" alt="" width="100%" style="max-width: 500px;">
		<figcaption>The label may get cropped</figcaption>
	</figure>
</div>

## 9. It ignores the standards

We know placeholders are problematic anyway. However, if we're going to put text inside a text box, it should be a hint, not a label.

## Summary

Forms are not a source of entertainment. The floating label won't make users enjoy using forms. Users don't care. They just want the outcome.

Static labels and legends positioned outside the field create familiar and consistent experiences. Two qualities often found in well-designed interfaces.

There are better and more productive techniques for improving form design. Let's spend time and energy on those instead.