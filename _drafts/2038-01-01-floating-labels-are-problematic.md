---
layout: post
title: Floating labels are problematic
date: 2038-01-01 09:00:01
categories: js
---

I’ve mentioned in the past that placeholders are problematic and that we must always use a label. Then someone points me in the direction of the floating label pattern. This pattern is a solution looking for a problem but more on that later. For now let’s discuss why this pattern is problematic.

## 1. There is no space for an actual hint

Not all fields require a hint. But for those that do, the floating label pattern is unnecessarily constraining. The floating label begins its life inside the control leaving no space for an additional hint.

## 2. They are hard to read

When a floating label moves out of the field, its size is normally small. It has to be in order to save space (which is the main idea of the pattern). But small text is hard-to-read for a lot of people.

## 3. They need dedicated space to fly in to

A floated label needs space to fly in to. Meaning, that if labels were sized appropriately, there would be no saved space anyway.

Alternatively, we can create space as the label moves into position, but this causes the page to judder making for a disorientating experience.

## 4. The animation is disorientating

For people with visual impairments this sort of animation (which is often janky) is disorientating. And for users who zoom in, the label might float itself offscreen, meaning the user looses context.

## 5. It may be mistaken for a value

People that don’t notice the subtle difference in contrast will skip the field mistaking it for a value. One test showed that 99% of users thought they didn’t need to enter a value. When the user submits the form they will be frustratingly shown an error.

## 6. They have poor contrast

A floating label needs poor contrast to look like a placeholder. This low contrast is troublesome for users to read. Also, depending on technical implementation, the colour would need to change during the animation, otherwise the text could get lost in the label position.

## 7. Inconsistent behaviour

As radios, checkboxes and select boxes will have fixed labels (and legends) users will endure an inconsistent form experience. For example, for textboxes users will have to learn to look inside the box for the label. For a select box, they will have to look outside the field.

## 8. The label may get cut off

If the floating label is longer than the size of the field, it will be cut off. This means you’re unnecessarily constrained to what information you can put inside it.

## 9. It's a misuse of the standards

Putting aside for the moment that placeholders themselves are problematic. If anything at all should be inside a field, it should be a hint, not a label. But a floating label places a *label* in there.

## 10. They require more work

Designing and building them is far harder than using a standard label. And more code brings more opportunity for problems. Need to think about when the fields have errors too. If for example someone failed to enter something and is shown an error “can’t be blank” is that label floated or inside the field?

Complex set of coding rules. When there are errors do you float the label? Or only when somebody failed to enter anything? What about blank text? It's still a value?

Complex set of coding rules: When updating your details the fields are populated.

## Summary

- This unfamiliar pattern tries to bring Android-like styles and behaviour to the web. I don't spend much time analysing platform specific designs, but applying another platforms design to the web is normally a rookie mistake. When we embrace the web and use intuitive well known (non problematic patterns), users benefit. Heni Swans UX principles design with familiarity.
- What problems do they solve?
- This sort of pattern is not fun or clever. Nobody wants to use ur form. They want the outcome.
- Instead, prirotize making room for labels at the outside.
