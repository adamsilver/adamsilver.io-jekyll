---
layout: post
title: Floating labels are problematic
date: 2038-01-01 09:00:01
categories: js
---

Whenever I tell people about the problems associated with placeholders, they normally respond by telling me about the floating label pattern. We often find ourselves attracted to novel and *different* patterns. But in this case, novel and different result in several usability problems. Here's why:

## 1. There is no space for an actual hint

Not all fields require a hint, but for those that do, the floating label pattern is unnecessarily constraining. The floating label begins its life inside the control leaving no space for an additional hint.

## 2. They are small and hard-to-read

A floating label is normally small. This is so that as it moves outside of the field, it takes up a small amount of space. But small text is hard-to-read.

## 3. They need landing space to move into

A floated label needs space to move into. This means that, if labels were of a usable size (see previous point) there would be no saved space anyway (just more white space).

Alternatively, we could create space *as* the label moves into position, but this causes the page to judder creating a disorientating experience in the process as the user types.

## 4. The animation is problematic

Animation itself is quite often janky. That aside, some users may find it distracting and disorientating. This is particularly applicable to low confidence or visually-impaired users. For people who zoom in, the label may float offscreen causing the user to lose context.

## 5. They have poor contrast

A floating label has low contrast to make it look different to a real value. Low contrast text is hard-to-read. As the label floats out of the field, it will need to change colour to make it look like a label otherwise the text could be "lost" against the background.

## 6. It may be mistaken for a value

People that don’t notice the subtle difference in contrast, will skip the field mistaking it for a value. When this happens, the user continues to submit the form only to be shown an error which is unnecessarily frustrating and time consuming.

## 7. Inconsistent behaviour

As radios, checkboxes and select boxes will have fixed labels (and legends) users will endure an inconsistent experience. For example, when looking at a textbox the user has to look *inside* the control for the label. Whereas for a select box they have to look *outside* the control.

Sticking to standard labels/legends, outside the field creates a consistent, familiar and in-turn friendly user experience.

## 8. The label may get cut off

If the floating label is longer than the size of the field, it will be cut off. By using this pattern we unnecessarily constrain ourselves as to the length of the label itself.

## 9. It's a misuse of the standards

Putting aside for the moment that placeholders themselves are problematic. If you're going to put *something* inside the field, it should be the hint, not the label.

## 10. They require more work

All of this to say that designing and building the floating label pattern is more work. More code brings more to maintain and more problems. All of which we've introduced ourselves.

## Summary

A floating label won't delight users. At most they delight designers. But of course we design for users, not for ourselves. This pattern is a solution that is quite desperately looking for a problem.

We should design with familiarity and consistency in-mind whenever possible. Nobody wants to use the forms that we design&mdash;users just want the outcome thereafter. There are better and more productive techniques for improving form design. Let's focus on those instead.