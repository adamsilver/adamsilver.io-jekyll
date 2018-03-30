---
layout: post
title: But sometimes buttons look like links
date: 2017-10-16 09:00:01
categories: ui
---

Sometimes we make links look like buttons. Sometimes we make buttons look like links. This is unfortunate and maybe there's something we can do about this. But before we get to it, let's discuss the four different types of buttons and links.

## 1. Submit buttons

When we login, register or add to basket we’re using a form. These buttons are submit buttons.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/buttonslinks/01-submit.png" alt="" width="100%" style="max-width: 340px;">
		<figcaption>“Sign in” is a submit button.</figcaption>
	</figure>
</div>

## 2. Links

Links let us navigate to pages or locations within a page. Either way, they’re typically underlined to stand out amongst prose content. Or they might reside in a special place like a header to help cognition.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/buttonslinks/02-link.png" alt="" width="100%" style="max-width: 340px;">
		<figcaption>Links are underlined to stand out against copy.</figcaption>
	</figure>
</div>

## 3. Buttons

Buttons (that have `type="button"`) are not submit buttons. Buttons are used to create features that rely on Javascript. Behaviours such as revealing a menu or showing a date picker.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/buttonslinks/03-button.png" alt="" width="100%" style="max-width: 340px;">
		<figcaption>The person icon reveals the account menu.</figcaption>
	</figure>
</div>

## 4. Call to action buttons

Call to action buttons often look like buttons to make them prominent in an interface. There's no dedicated element. They are just regular links styled to call users to action—hence the name.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/buttonslinks/04-cta.png" alt="" width="100%" style="max-width: 340px;">
		<figcaption>“Checkout” is a link styled to call users to action.</figcaption>
	</figure>
</div>

## What’s the problem?

In [Resilient Web Design](https://resilientwebdesign.com/) Jeremy Keith discusses the idea of material honesty. He says that “one material should not be used as a substitute for another, otherwise the end result is deceptive”.

Making a link look like a button is materially dishonest. It tells users that links and buttons are the same when they’re not.

In [Buttons In Design Systems](https://medium.com/eightshapes-llc/buttons-in-design-systems-eac3acf7e23) Nathan Curtis says that we should distinguish links from buttons because “button behaviours bring a whole host of distinct considerations from your simple anchor tag”.

For example, we can open a link in a new tab, copy the address or bookmark it for later. All of which we can’t do with buttons.

Call to action buttons—which again, are just links—are deceptive. Users are blissfully unaware because this styling removes their perceived affordance, obscuring their behaviour.

We could make call to action buttons look like regular links. But this makes them visually weak which negates their prominence. Hence the problem.

Sometimes it makes sense to present links next to buttons as part of the same menu. Kidly’s account menu button* shown earlier is next to a basket link. You wouldn’t know it though because both are styled the same way with iconography.

Here’s another example demonstrating the same issue:

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/buttonslinks/05-menu.png" alt="" width="100%" style="max-width: 340px;">
		<figcaption>“Previous day” and “Next day” are links. “Choose day” is a button styled as a link.</figcaption>
	</figure>
</div>

All three items in the menu are styled to look like links even though ‘Choose day’ is actually a button.

Clicking ‘Choose day’ opens a calendar, but it deceptively looks as if it will take me to another page like ‘Previous day’ and ‘Next day’. And it seems I can right click and open it in a new tab, like any other link.

Maybe it should open in a new page and that would solve the problem? Maybe that’s not the desired experience? In any case, the reason we’ve styled these items the same is because consistency is a quality of good design.

But on this occasion we’ve taken consistency too far. We’ve stamped out the differences, removed the unique signifier and made a dishonest interface. Consistency is not about making different things the same. It’s about making the same things the same.

## How can we differentiate call to action buttons?

If you’ve been nodding along so far, then you’ll probably agree that a call to action needs to stand out. But that it also needs to look different to buttons to signify the behaviour of a link.

One example is the Government Digital Service’s ‘start buttons’:

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/buttonslinks/06-start.png" alt="" width="100%" style="max-width: 340px;">
		<figcaption>“Start now” is a link styled prominently to call users to action.</figcaption>
	</figure>
</div>

Start buttons stand out. They also look different to GDS’s standard submit button. The start button is slightly bigger and has an arrow. The arrow suggests the user is going to be taken to a new flow.

There's a difference, but it’s subtle, and could be lost on users (more on this shortly). First, [submit buttons shouldn’t have a hand cursor](/articles/buttons-shouldnd-have-a-hand-cursor/). In doing so, the hand (pointer) helps those using a pointing device spot a link.

Second, we need to make them less button-y and more link-y. To do this we could use a combination of whitespace, size and other visual treatment to make sure they stand out. Like using the right cursor, an underline would probably help.

What may also help is not having a load of other stuff on the page. The more stuff there's, the more it fights for attention and diminishes the prominence of the call to action.

It’s wise to have only one primary link/action/button anyway. Admittedly this isn’t always possible, or even the right thing to do but we can explore this approach on a case by case basis.

## How can we differentiate buttons and links that form part of the same menu?

The problem here is that we want the items to be equally weighted without removing the perceived affordance. Buttons naturally dominate links!

Kidly’s menu looks consistent and equally weighted due to the use of iconography. But in doing so the meaning (subtle or otherwise) is lost.

With the schedule page ‘Choose day’ is not more or less important than ‘Previous day’ or ‘Next day’. Perhaps we need to make ‘Choose day’ look less link-y and more button-y without overpowering the links?

Locating them in the same place is a no brainer. Perhaps we can use whitespace and a separator. Maybe we just need a smaller button. One thing we definitely shouldn’t do is give the button an underline. This would be deceptive.

## Do users care? Would they care?

Because we have made links look like buttons and buttons look like links—and because we have exacerbated the problem by incorrectly using the hand cursor—users have acclimatised and the lines have blurred.

Perhaps, if users knew they could open a call to action in a new window, they would? I certainly might. Maybe others wouldn’t. But does that matter? Choice is an act of inclusive design.

Same goes for labels. Many sites don’t connect labels to radio buttons. Due to this people don’t trust that clicking the label (which is often easier) will mark the radio button as checked. If most sites did it right, users may start to use this and reap the benefits.

Users shape design and design shapes users. That is, if the majority of sites differentiated buttons from links, perhaps users would care and find value in the functionality that lies beneath.

In isolation we might think of this as a small problem. But in combination with lots of other small problems, an experience can degrade noticeably. Death by a thousand cuts so to speak.

When we talk about getting the small details right, this is the kind of thing that comes to mind.

## It’s the journey, not the destination.

Others say it’s become a grey area. This is because forms and links can both take users to the same destination.

This is true, but the journey is not the same as the destination. What I mean is, the destination might be America, but the journey might consist of flying or swimming. Should a plane be full of water? Oh that was a bad analogy.

Here’s a better one. My TV and the accompanying remote have power buttons. The one on the remote is rubbery, small, red in colour and located in the top right corner. There’s also a lot of additional buttons in close proximity.

The one on the TV is solid, much bigger and concealed. It would be an odd experience if the designs were reversed or made ‘consistent’ by ignoring the context for which they are to be used.

Forms and links may take users to the same place. But just because the destination is the same, the journey (the interaction) is different.

Pretending they are the same and removing the perceived affordance in the process isn't useful. Semantics are there for a reason, why design the meaning out of a component due to aesthetic minimalism?

## Summary

I often go on about solving real problems. I get frustrated when we spend time solving problems that aren’t problems. Design, after all, is about solving problems.

This is definitely not the biggest problem in the world. But I think there's something to this. I think there's something we can do about it. Something that provides affordance and improves the experience by making it honest.

In isolation this may not seem like a big deal, but in combination with other small gains this could make a big difference. What do you think?

*Under the hood, Kidly’s account menu button incorrectly uses an anchor. I should have used the button element.