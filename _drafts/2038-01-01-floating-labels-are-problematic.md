---
layout: post
title: Floating labels are problematic
date: 2038-01-01 09:00:01
categories: js
---

When I wrote [Placeholders are Problematic](/articles/placeholders-are-problematic/) many people suggested the floating label pattern as a solution. We are often seduced by novel patterns that save space. The thing is, this pattern is problematic. Here's why:

## 1. There is no space for an actual hint

Not all fields require a hint. For those that do, the floating label is unnecessarily constraining. The floating label starts inside the control leaving no space for an additional hint.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/floatinglabels/1-hint.png" alt="Alt" width="100%" style="max-width: 500px;">
		<figcaption>No space for hint</figcaption>
	</figure>
</div>

## 2. They are small and hard-to-read

A floating label is normally small. This is so that as it moves outside of the field, it takes up a small amount of space. But small text is hard-to-read.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/floatinglabels/2-readability.png" alt="Alt" width="100%" style="max-width: 500px;">
		<figcaption>Small text is hard-to-read</figcaption>
	</figure>
</div>


## 3. They need landing space to move into

A floating label needs space to move into. This means that, if labels are a usable size (see previous point), there would be no saved space anyway&mdash;just more *white* space.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/floatinglabels/3-space.png" alt="Alt" width="100%" style="max-width: 500px;">
		<figcaption>They need landing space</figcaption>
	</figure>
</div>

Alternatively, we could create space *as* the label moves into position. But this causes the page to judder creating a disorientating experience as the user starts typing.

## 4. The animation is problematic

Animation, even if it's done well, could be distracting and disorientating, partilar those low confidence or visually impaired users. And, when zooming in, the label may disappear off screen.

## 5. They have poor contrast

Like placeholder text, a floating label has low contrast to differentiate it but low contrast text is hard-to-read.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/floatinglabels/5-contrast.png" alt="Alt" width="100%" style="max-width: 500px;">
		<figcaption>They have poor contrast</figcaption>
	</figure>
</div>

Also, if the label floats outside of the field, it will have to change colour. Otherwise the text will be lost against the background colour (if it's a similar colour).

## 6. They may be mistaken for a value

People may skip the field thinking it's completed already. When they submit, they will see an error that needs fixing. This is unnecessarily frustrating and time consuming.

## 7. They are located inconsistently

Radio buttons, checkboxes and select boxes will have static labels and legends. Text boxes will have labels that move. This makes for an inconsistent experience.

When looking at a text box, for example, the user has to look *inside* the control. For a select box they have to look *outside* of it.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/floatinglabels/7-consistency.png" alt="Alt" width="100%" style="max-width: 500px;">
		<figcaption>Inconsistent description location</figcaption>
	</figure>
</div>

## 8. The label may get cropped

If the floating label is longer than the size of the field, it will be cropped. By using this pattern we unnecessarily constrain ourselves to the length of the field. Some fields are small but need useful hint text.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/floatinglabels/8-cutoff.png" alt="Alt" width="100%" style="max-width: 500px;">
		<figcaption>The label may get cropped</figcaption>
	</figure>
</div>

## 9. It's a misuse of the standards

Even though we know placeholders are problematic regardless, if you're going to put *anything* inside the field, it should be a hint, not a label.

## Summary

Forms are not a source of entertainment. The floating label won't suddenly make users enjoy using forms. Users don't care. They just want the outcome.

Using static labels and legends that are position outside of the field creates a familiar and consistent experience. Two qualities often found in well-designed interfaces.

There are better and more productive techniques for improving form design. Let's spend time and energy on those instead.