---
layout: post
title: Floating labels are problematic
date: 2038-01-01 09:00:01
categories: js
---

I’ve mentioned in the past that placeholders are problematic and that we must
always use a label. Sometimes then point me in the direction of the floating
label pattern. This pattern is a solution looking for a problem but more on that later. For now let’s discuss why this pattern is problematic.

## There is no space for an actual hint

As the label is floated within the text box, there is no room for an additional
hint. We often don’t need a hint anyway, but if we do, it’s a problem. This
pattern is constraining for no good reason.

## The labels are too small

The labels are often tiny to save space. But small labels are hard to read. An
inclusive-design anti pattern, that’s for sure.

## They need dedicated space to fly into

A floated needs space to float into. This means, at least if labels were sized
appropriately, there would be no saved space anyway. Or otherwise screen moves as space is made to move label into.

## The animation is disorientating

For people with visual impairments this animation, which is often janky on
mobile btw, is disorientating and causes unnecessary friction. It’s also
distracting. It’s not fun. It’s not clever. Imagine being zoomed in and the label floating off screen.

## Mistakenly look filled in

This is exactly like placeholders. So people skip them, and are later shown an
error.

## They have poor contrast

They have to have poor contrast for people to get some sort of clue they are not real values. Poor contrast is another inclusive design anti pattern.

For them to look like placeholders they need a poor contrast. And the colour would need to change as they move out the field, depending on the colour. Poor contrast is bad for a11y again.

## Inconsistent behaviour

As radios, checkboxes and select controls won’t have floating labels, there will be a mix of styles. Inconsistency is a crucial aspect of designing good
experiences.

Visual flow and consistency. For example they aren't used on radios or checkboxes etc. Sometimes the user must look inside the box. Sometimes outside the control. If inside they have to map the contrast for meaning. :(

## They are unfamiliar

There are extremes of this pattern like Materialize.css trying to make the web
feel like Android, a rookie mistake in its own right. And there are others that
have normal-ish looking for fields but just float the labels. Either way they
are very different and less common breaking the third of Heni Swans UX
principles design with familiarity.

## The label may be cut off

They don’t always fit within the field, so they are constrained just like regular placeholders.

## The pattern goes against standards

Putting aside for the moment that placeholders themselves are problematic, what goes inside a field is meant to be a hint, not a caption. The latter is what a label is for.

## They require more work

Designing and building them is far harder than using a standard label. And more
code is more opportunity for problems and could suffer from performance
problems. Need to think about when the fields have errors too. If for example
someone failed to enter something and is shown an error “can’t be blank” is that label floated or inside the field?

Complex set of coding rules. When there are errors do you float the label? Or only when somebody failed to enter anything? What about blank text? It's still a value?

Complex set of coding rules: When updating your details the fields are populated.

## Summary

- What problems do they solve?
- Instead, prirotize making room for labels at the outside.
