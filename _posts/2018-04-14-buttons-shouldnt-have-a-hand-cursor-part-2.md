---
layout: post
title: Buttons shouldn't have a hand cursor part 2
date: 2018-04-14 09:00:01
categories: design html css
---

In [Buttons shouldn’t have a hand cursor](/articles/buttons-shouldnt-have-a-hand-cursor/) I explained that the hand (or pointer) cursor doesn’t mean clickable and that it’s meant to signify a link.

However, there were some important things I didn’t address: why did we start using the pointer cursor in the first place? Are conventions on the Web different to the OS? Have things changed? How does all of this affect users?

## The history of the pointer cursor

In response to part one, [Mark Griffiths](https://medium.com/@TheBespokePixel) explained the history behind the pointer cursor.

It first appeared in Apple’s HyperCard in 1987. It was used to signify things you can click. When the Internet came along, Mosaic used the pointer cursor just for links.

That’s the first time the convention changed as far as I know.

Some people think the convention has (or should be) changed back to its original meaning. In the context of HyperCard, the pointer cursor really did mean clickable. If you clicked anywhere that didn’t have the pointer cursor, nothing happened.

This is not the case with web pages. As I explained in the first part, pretty much everything is clickable: text, whitespace, images, form controls, buttons, and links. If the pointer does mean clickable, then the cursor should always be a pointer, rendering its meaning useless.

With the history somewhat laid out, why then, did we (designers, developers but not browsers!) start using the pointer for buttons? And was there a user need?

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/buttons2/mosaic.png" alt="" width="100%">
		<figcaption>Mosaic's buttons (both in-page and part of the shell) look the same and have strong perceived affordance.</figcaption>
	</figure>
</div>

Notice how all the browser buttons are styled exactly the same as the search button within the page. Also notice how buttons and links look very different. None of these buttons have the pointer.

They didn’t need it. They had strong perceived affordance. [They looked like buttons](https://www.nngroup.com/articles/clickable-elements). They look like they can be pushed. And to top it of, they use the same styles as the OS, making them [consistent](https://developer.paciellogroup.com/blog/2017/08/inclusive-design-principle-be-consistent/).

Links, however, were signified by being blue and underlined. In those days, underlines were an alternative way to highlight words (like bold and italic). But, when the web came along that meaning changed.

Links were new and special — but they had weak affordance. Because of this they were given the pointer cursor, to give users an extra clue that this wasn’t just highlighted text. This was interactive, hyper text!

That’s why the original convention changed and browser vendors standardised it accordingly.

## Enabling style changes

Today, the default styling for buttons still matches the OS. But now, browsers let you override the default styling with CSS. Thanks CSS. In the old days, we didn’t style them because we couldn’t style them.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/buttons2/button.png" alt="" width="100%" style="max-width: 100px;">
		<figcaption>Mac default button style</figcaption>
	</figure>
</div>

Back then the way to give buttons an “on brand” style was to use `<input type="image">` setting the src to an image URL. And for links, we’d do the same thing by nesting an `<img>` inside the link (calls to action).

So links and buttons started to look (but not behave) the same. Around this time, we noticed that some buttons had the default cursor and some links-styled-as-buttons had the pointer. Inevitably, we normalised the cursor too.

Other sites started doing the same thing. Boom, another change of convention. This one, however, blurred the lines between links and buttons. And now we (or perhaps just me) have a bit of a debate going on.

The first mistake was that we took consistency too far by [making links and buttons look the same](/articles/but-sometimes-buttons-look-like-links/). The second mistake was that we took away the one remaining signifier that tells users that they’re different. The third and most important mistake was that none of this was driven by user needs—at least not to my knowledge.

## More than buttons

Years ago, I was creating a form (my favourite thing to do by the way). I noticed that clicking a label would set focus to the text box. I wondered (as a designer, not a user!) why it didn’t have the pointer.

I reasoned that the pointer meant clickable. So I “fixed” it with CSS. No research, no usability testing — I didn’t read the specification — I just changed it because that’s what I thought I should do. Not only did I not understand what the pointer cursor was for, but I changed the design without even knowing if it benefited users.

Even if I had ran tests, and those tests showed that these particular users found it useful, wouldn’t I also need to test that it doesn’t take away the perceived affordance of a link?

I can’t speak for everyone, but I’ve never seen, nor heard users complain that a well-designed button didn’t have the pointer cursor and decided not to click it (and that’s considering the prevalent inconsistency and blurring of the lines). And by well-designed, I mean a button that looks like a button. If you’re going to expect users to click a button that doesn’t look like one, then that’s another debate altogether.

Now, if you asked a user what the pointer cursor means, they might well say that it means clickable. But [what users say and what they do are different things](https://alistapart.com/article/what-the-failure-of-new-coke-can-teach-us-about-user-research-and-design).

##“But Microsoft and Apple use the pointer cursor for buttons”

You’re right, they don’t always follow their own standards and guidance. But is this a reason? I’ve worked in many teams that don’t follow their own standards due to a myriad of reasons. Maybe they forgot, or maybe they weren’t aware the standards existed.

Often the people who defined the standards aren’t always responsible for what’s produced in the end.

Just because someone wrote a thing, doesn’t mean people will listen. All it takes is a lack of attention, a lack of understanding. Designers and developers often do what they want, without research. As noted above, I did this myself.

Sometimes the mistake is by accident. Maybe the developer uses a third-party CSS framework. Maybe it sets the cursor incorrectly for buttons. And that’s all it takes.

## “But the web is different”

Some say that the web is different. The web has its own set of conventions. But to most people — people that aren’t us — the web is not a distinct thing. It’s a thing people use on their computer and their phone.

> “There’s no distinction between what’s a browser, what’s a website, what’s an operating system” — [Jakob Nielsen, Mobile Usability Futures](https://www.youtube.com/watch?v=sELOUAmFHjA&feature=youtu.be&t=3m4s)

If the lines weren’t already blurred, many apps are just shells around web apps. And with form fields being heavily integrated with the OS, it’s hard for users to tell where the OS/browser ends and the web begins.

## Should buttons and links look different?

If buttons and links should look the same, shouldn’t they be the same? Shouldn’t they do the same thing? If they don’t behave the same way, surely they shouldn’t look the same.

If we agree that buttons and links are different, and we agree that (some) users will find value in knowing that difference, why would we try and normalise them by taking away the one (albeit subtle) signifier that differentiates them?

> “It’s better to make things visually apparent, rather than hoping people will discover them [by moving their mouse or tapping around the interface]” — [Jakob Nielsen, Mobile Usability Future](https://www.youtube.com/watch?v=sELOUAmFHjA&feature=youtu.be&t=45m17s)

Presumably browser vendors would remove all the special behaviour tied to links if people weren’t right clicking on them (to open a context menu) and doing various things with them.

Yes, sometimes links look like buttons for prominence but that’s not reason to normalise the cursor. It’s reason to create a design language that differentiates buttons from links. That’s where I believe the challenge is.

## Does the pointer cursor on buttons stop users from achieving their goal?

[Jared Spool asked this question on Twitter](https://twitter.com/jmspool/status/913003208792035328), but I wasn't sure it was the right question.

If we're going against standards, then it seems more appropriate to ask: does the pointer cursor on (well-designed) buttons help the user achieve their goal?

I don't believe so no. I've never seen a user stop and say “I'm not pressing the button because it doesn't have a pointer.” Of course, on mobile devices, there's no cursor available.

I also setup a little test (hardly definitive admittedly) with friends and family to see if users hesitated (or something) due to there being no pointer cursor, but everyone managed to get through the flow just fine.

## Summary

If users need to know that a thing does something and that’s demonstrable in user research even with clear, well-designed buttons, then, and only then do we need a change of convention. And in that case, maybe we need a new cursor—not the same one as we use for links.

But let’s not pretend that the pointer cursor means clickable. Everything means clickable including this “text select” cursor. It’s just that buttons and links, on the surface at least, appear to do similar things.

Is this over? I’ll end with a quote from Don Norman’s book, “The design of everyday things”:

> “Standards simplify life for everyone. At the same time, they tend to hinder future development. There are often political struggles in finding common agreement. Nonetheless, when all else fails, standards are the way to proceed.”

