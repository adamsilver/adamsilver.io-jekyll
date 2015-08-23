---
layout: post
title:  "The disadvantages of customising form control design"
date:   2017-01-01 09:00:01
categories: accessibility
---

Designers often want to control every aspect of the UI, for which form controls are not exempt. By default, form controls look very different across browsers [0] because they are integrated deeply into the Operating System and Device. Attempting to tame the design of form controls comes with several disadvantages.

## 1. It causes problems for the user (negative value add)

Some form controls are more problematic than others. When developers endeavour to tame these elements, user experience is often degraded. Ironically, this is why visual designers *think* they must tame the design of these things.

It is arguably beneficial, that browsers display form controls differently as they match the native OS, and because a user uses the same browser repeatedly, there is an inherent expectation of how form controls look and behave in *that* browser. Don't underestimate the importance of consistency in user experience.

For example, when the user activates a Select menu, on some devices, the browser will show a native popup [[3](#ref3)]. This makes it easier to use.

The only way to truly tame a select element is to recreate it with Javascript. The problem is what you "gain" in the *look*, you lose in functionality.

For example, the native popup is destroyed when you use select menu replacement script. You are now required to pinch and zoom. Not to mention the Javascript can be problematic itself and is another point of failure.

Users favour behaviour over pixel-perfect shine and colour, every time.

And, don't get me wrong, you can make form controls look suitably beautiful without going overboard. Designers must embrace the web and it's constraints. Use them to the users advantage.

## 2. It is a sisyphean task

> "Using CSS to style form controls to look exactly the same across browsers and platforms is impossible."
<br> &mdash; Roger Johansson

Unlike most HTML elements, form controls are nigh on impossible to style consistently Cross-browser because these components are deeply embedded in to the Operating System and Device. This means browsers ignore some CSS rules that you try and throw at it.

It takes a grand effort to do so, which is costly to the business.

## 3. It adds little to no value

Whilst it's understandable that a designer wants to control the look and feel of *everything* in the name of design asthetics and/or branding, this is a problem in the designers mind, not in the mind of the person using the form.

Branding and design asthetics can be applied elsewhere. There is a significant chance that your design and development effort belongs elsewhere.

## 4. Users don't notice anyway

As an extension to point #3, if you're users don't care, and it doesn't hurt the user experience, why bother?

Your users aren't noticing pixel differences, and they aren't noticing that form controls are slightly different on their iPhone (for example) compared to their favourite desktop browser.

Even *if* they did notice, they *really* don't care. It's not going to stop them using your site, consuming content and purchasing items etc &mdash; where is there are many reasons worth putting effort into that will!

## Conclusion

Attempting to tame form controls induces significant development effort, which most certainly results in code bloat, bugs, and as has been described earlier, a degraded experience for at least some users. As Garrett Dimon says:

> &ldquo;There are many things worth investing time to develop and implement. Customising the look and feel of form fields is absolutely not one of them.&rdquo;

Users are comfortable with forms and their appearance. Avoid any potential problems by letting go of overzealous design control is win for the business and a win for users.

<!--

And Nicholas Zakas beautifully points out why in *Progresssive Enhancement 2.0* [[2](#ref2)]. You can go straight to 16 minutes in to skip the history lesson, although that is also very informative.

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://www.456bereastreet.com/archive/200701/styling_form_controls_with_css_revisited/">Styling form controls with CSS, revisited</a></dd>
	<dt class="citation" id="ref1">[1]</dt>
	<dd><a href="http://dowebsitesneedtolookexactlythesameineverybrowser.com/">Do websites need to look exactly the same in every browser?</a></dd>
	<dt class="citation" id="ref2">[2]</dt>
	<dd><a href="https://www.youtube.com/watch?v=hdTxeR90_1E">Progressive Enhancement 2.0</a></dd>
	<dt class="citation" id="ref3">[3]</dt>
	<dd><a href="http://www.smashingmagazine.com/2010/03/11/forms-on-mobile-devices-modern-solutions/">Forms on mobile</a></dd>
</dl>

-->