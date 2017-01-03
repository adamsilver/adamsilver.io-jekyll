---
layout: post
title: Designing a bad experience on purpose
date: 2015-11-14 09:00:01
categories: ux design
description: If you've ever been forced to design a bad experience on purpose, you'll like this article.
---

Who, in their right mind would design something that's hard-to-use on purpose? That's what happened to me once. Let's just say the website sold stuff. And they wanted users to be able to pay using PayPal. Here's the design that the business blocked:

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/paymentchoice.png" alt="Payment choice page" width="100%" style="max-width: 400px;">
		<figcaption>Payment choice page</figcaption>
	</figure>
</div>

The problem with this design is that it was too simple. The reason this was a problem for the business was because when users paid by card, they received fifty pence as a transaction fee. If the user paid by Paypal they would get nothing.

The business took about 750,000 orders per week, which made fifty pence a big deal. The business wanted us to make PayPal hard to find. Perhaps by hiding it behind an expand or collapse panel or something.

I just thought, why bother providing a feature if we don't want people to use it. We knew our users *wanted* PayPal and many people *only* shop with PayPal for security and convenience reasons.

We also knew that users drop off during checkout for many reasons. Each order lost costs the business a lot more than fifty pence.

## What if we added PayPal as originally designed?

It’s hard to know but I think that:

* a small percentage of existing users would’ve started using PayPal; and
* we would’ve attracted new users to the site.

If lots of people switched over to Paypal, I would assume they did so because it's their preference. Because it's easier for them. In which case they would be happier customers.

A happy customer is one that purchases more frequently. Or at least continues to use the service at the same frequency. Also, a happy user is more likely to recommend the service to friends. That must be worth massive amounts in marketing terms.

Mid-to-late adopters need a nudge before they make the jump. PayPal could've
provided a welcome tipping point to attract new users.

And, if our competitors offered PayPal, users may decide to switch.

*Keep users happy (plus attract new users), business thrives.*

## What if the worst happened?

The worse case scenario might include:

* all existing users switching to Paypal (no transaction free received); and
* no new users signing up.

First, both of these points contradict each other. If Paypal makes existing
users switch I would imagine the service would attract new users.

Second, all of our users would be happier using Paypal. That’s why they
switched.

Third, there is no need to offer the ability to pay by card. This reduces the cost of development.

Fourth, the checkout flow is even easier to use as there is no choice in payment type. This would likely result in an uptick in conversion.

All of this to say, this is worth a lot more than fifty pence per order.

If you’re going to provide a feature, always make it easy-to-use. Or don’t bother.