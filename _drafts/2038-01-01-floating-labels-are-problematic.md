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
		<figcaption>Small text is hard to read</figcaption>
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

Exusing the fact that web animations are often janky, they could be distracting and disorientating for users. Particularly for low confidence or visually-impaired users. And when zooming in, the label may disappear off screen.

## 5. They have poor contrast

Like regular placeholder text, a floating label has low contrast to make it look different to a real value. Low contrast text is hard-to-read.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/floatinglabels/5-contrast.png" alt="Alt" width="100%" style="max-width: 500px;">
		<figcaption>They have poor contrast</figcaption>
	</figure>
</div>

And, as the label floats out of the field, it will need to change colour to make it look like a label. Otherwise the text could be "lost" against the background colour.

## 6. They may be mistaken for a value

People that don’t notice the subtle difference in contrast, may skip the field mistaking it for a value. When this happens, the user goes on to submit the form only to be shown an error&mdash;all of which is unnecessarily frustrating and time consuming.

## 7. They are located inconsistently

As radios, checkboxes and select boxes will have fixed labels (and legends) users will endure an inconsistent experience.

For example, when looking at a textbox the user has to look *inside* the control for the label. Whereas for a select box they have to look *outside* the control.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/floatinglabels/7-consistency.png" alt="Alt" width="100%" style="max-width: 500px;">
		<figcaption>Inconsistent description location</figcaption>
	</figure>
</div>

Sticking to standard labels and legends that are positioned outside the field creates a consistent and familiar user experience. Two qualities often found in well-designed UIs.

## 8. The label may get cut off

If the floating label is longer than the size of the field, it will get cut off. By using this pattern we unnecessarily constrain ourselves as to the length of the label itself.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/floatinglabels/8-cutoff.png" alt="Alt" width="100%" style="max-width: 500px;">
		<figcaption>The label may get cut off</figcaption>
	</figure>
</div>

## 9. It's a misuse of the standards

Putting aside for the moment that placeholders themselves are problematic. If you're going to put *something* inside the field, it should be the hint, not the label.

## 10. They require more work

All of this to say that designing and building the floating label pattern is more work. More code means more problems. All of which we've introduced ourselves.

## Summary

A floating label won't delight users. At most they delight designers. But we are not our users. This pattern is a solution that is desperately looking for a problem.

We should design with familiarity and consistency in-mind whenever possible. Nobody wants to use the forms that we design&mdash;they are not a form of entertainment&mdash;users only desire the outcome.

There are better and more productive techniques for improving form design. Let's spend time and energy on those instead.