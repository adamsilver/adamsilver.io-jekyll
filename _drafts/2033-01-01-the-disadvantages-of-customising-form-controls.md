---
layout: post
title:  "The disadvantages of customising form control design"
date:   2017-01-01 09:00:01
categories: accessibility
---

[Form controls look different](http://www.456bereastreet.com/archive/200701/styling_form_controls_with_css_revisited/) across browsers and devices because they are integrated deeply with the Operating System. Often, designers want to style form controls to, and I quote, *match the brand*. This is problematic for several reasons:

1. It's pretty much impossible

> "Using CSS to style form controls to look exactly the same across browsers and platforms is impossible."
<br> &mdash; Roger Johansson

Unlike most HTML elements, form controls are nigh on impossible to style consistently Cross-browser because these components are deeply embedded in to the Operating System and Device. This means browsers ignore some CSS rules that you try and throw at it.

It takes a grand effort to do so, which is costly to the business.

2. Users don't care

Your users aren't noticing pixel differences, and they aren't noticing that form controls are slightly different on their iPhone (for example) compared to their favourite desktop browser.

Even *if* they did notice, they *really* don't care. It's not going to stop them using your site, consuming content and purchasing items etc &mdash; where is there are many reasons worth putting effort into that will!

3. You lose free important UX and accessibility features

- Like mobile
- screen reader forms mode

4. It's costly to build and maintain

## Summary

It is arguably *beneficial* that browsers display form controls differently, matching the OS in the process. Because a user uses the same browser repeatedly, there is an inherent expectation of how form controls look and behave. It is wise not to underestimate the importance of consistency in user experience.

For example, when the user activates a `select` menu, on some devices the browser will display a popup [[3](#ref3)] which signficantly makes the control easier to interact with. Something you can't mimic with code, as it's baked into the native OS.

The problem is, the only way to truly control the *appearance* of a select control, is to recreate it with Javascript. Unfortunately, what you "gain" in *look*, you lose in functionality. For example, you lose the popup behaviour; requiring the user to pinch and zoom.

And, don't get me wrong, you can make form controls look suitably beautiful without going overboard. Designers must embrace the web and it's constraints. Use them to the users advantage.


## Conclusion

As Garrett Dimon says:

> &ldquo;There are many things worth investing time to develop and implement. Customising the look and feel of form fields is absolutely not one of them.&rdquo;

Users favour behaviour over pixel-perfect shine and colour every time. Users are comfortable with forms and their natural appearance. It's important to give away *some* control to the natural web. The business and their users will benefit from this.



<!--

And Nicholas Zakas beautifully points out why in *Progresssive Enhancement 2.0* [[2](#ref2)]. You can go straight to 16 minutes in to skip the history lesson, although that is also very informative.

<dl>
	<dt class="citation" id="ref1">[1]</dt>
	<dd><a href="http://dowebsitesneedtolookexactlythesameineverybrowser.com/">Do websites need to look exactly the same in every browser?</a></dd>
	<dt class="citation" id="ref2">[2]</dt>
	<dd><a href="https://www.youtube.com/watch?v=hdTxeR90_1E">Progressive Enhancement 2.0</a></dd>
	<dt class="citation" id="ref3">[3]</dt>
	<dd><a href="http://www.smashingmagazine.com/2010/03/11/forms-on-mobile-devices-modern-solutions/">Forms on mobile</a></dd>
</dl>

-->