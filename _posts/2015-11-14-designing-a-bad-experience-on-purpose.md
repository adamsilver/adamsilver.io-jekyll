---
layout: post
title: Designing a bad experience on purpose
date: 2015-11-14 09:00:01
categories: ux design
description: If you've ever been forced to design a bad experience on purpose, you'll like this article.
---

I once worked on a successful e-commerce website. The business wanted us to design something that was hard-to-use on purpose. Can you believe it?

They wanted users to be able to pay by PayPal. And, just as we started development, the business stopped us because they had concerns about our design solution.

Specifically, they were concerned with how easy it was to choose Paypal. This is what it looked like:

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/paymentchoice.png" alt="Payment choice page" width="100%" style="max-width: 300px;">
		<figcaption>Payment choice page</figcaption>
	</figure>
</div>

The issue was that when users paid by card, we received fifty pence as a
transaction fee. If the user paid by Paypal we would get nothing.

If the business takes 750,000 orders per week, fifty pence is a lot to lose.

The business wanted us to hide Paypal behind some sort of expand/collapse panel. In other words, to make Paypal hard to find.

But why give users the choice at all?

We knew our users *wanted* PayPal and many people *only* shop with PayPal for security *and* convenience reasons.

We also knew that users drop off during checkout for many reasons. Each person that drops off costs the business a lot more than fifty pence. The average order value was about £20.

## **What would happen if we added PayPal as originally designed?**

It’s hard to know but I think that:

* a small percentage of existing users would’ve started using PayPal
* and we would’ve attracted new users to the site.

If lots of people switched over to Paypal, I would assume they did so because it's their preference. Because it's easier for them. In which case they would be happier customers.

A happy customer is one that purchases more frequently. Or at least continues to use the service at the same frequency.

Also, a happy user is more likely to recommend the service to friends. That must be worth massive amounts in marketing terms.

Mid-to-late adopters need a nudge before they make the jump. PayPal could've
provided a welcome tipping point to attract new users.

And, if our competitors offered PayPal, users may decide to switch.

*So to sum up: keep users happy (+ attract new users) = business longevity*

## What if the worst happened?

The worse case scenario might include:

* all existing users switching to Paypal (no transaction free received).
* and no new users signing up

First, both of these points contradict each other. If Paypal makes existing
users switch I would imagine the service would attract new users.

Second, all of our users would be happier using Paypal. That’s why they
switched.

Third, there is no need to offer the ability to pay by card. This reduces the cost of development.

Fourth, the checkout flow is even easier to use as there is no choice in payment type. This would likely result in an uptick in conversion.

All of this to say, this is worth a lot more than 50p per order.

If you’re going to provide a feature, always make it easy-to-use. Or don’t bother.