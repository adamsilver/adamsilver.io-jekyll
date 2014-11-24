---
layout: post
title:  "Don't customise form controls"
date:   2017-01-01 09:00:01
categories: accessibility
---

Form controls, unlike most other HTML elements, are impossible to style Cross-browser. This is due to *these* elements being tied to both the Browser and Operating System (OS) and some Browsers will ignore certain CSS rules. Designers often want to control every aspect (read pixel) of the user interface (UI) to the extent that everything looks identical on all browsers. You will notice that form controls, in particular, look very different in different browsers [[0](#ref0)].

## Users don't notice the difference

Should websites (read form controls) look the same in every browser? No [[1](#ref1)]. And Nicholas Zakas points out beautifully as to why in his presentation *Progresssive Enhancement 2.0* [[2](#ref2)].

Your users aren't noticing slight pixel differences, and they aren't noticing that form controls are slightly different on their iPhone (for example) compared to their favourite desktop browser, and, even if they are, they don't care. It's not going to stop them using your site; consuming content, purchasing items, etc.

Interestingly, it is arguably a good thing that browsers show these things differently as they match the native experience i.e. form controls look the same in the OS, and because a user uses the same browser, there is an inherent expectation of how form controls look and behave in that browser. The only people that look at websites in multiple browsers are Front-end Developers, not users.

## The "Solutions" are problematic

On certain devices, the browser will show a native popup control [[3](#ref3)] when the user activates a select control, which make it easier to use. Users forgo this behaviour if the control is customised with Javascript.

There are examples of such scripts, just Google "select replacement javascript". Try running them on an iPhone or Android and notice the browser doesn't show a native control, which makes selecting an option harder for users. The behaviour is now different to all other websites who utilise native select controls. Typically these scripts don't support all browsers; if a checkout form uses a custom select control in an unsupported browser then say goodbye to the sale. Such an unnecessary loss of custom.

Attempting to tame them is a long process which results in code bloat and as has been described earlier, a degraded experience for at least some users, in at least some browsers. Garrett Dimon says:

> There are many things worth investing time to develop and implement. Customising the look and feel of form fields is absolutely not one of them. This is especially true if the method involves JavaScript to change the appearance. Browser form fields may not be the prettiest things in the world, but people are used to and comfortable with them. It’s not surprising that the sites I come across with custom-designed forms often have significant usability problems.

CSS is more reliable as it won't change the behaviour. However, the lack of CSS support for styling controls is exactly the reason why developers attempt the Javascript hackery in the first place.

## Summary

As an experienced Front-end Developer, it is important to know what works and what doesn't, and styling controls to this extent comes under the latter category. Some browsers are more friendly than others, but if you can't completely control them in a reliable, consistent way, then there is no point in attempting to style them anyway.

Don't waste your time and your vistors time. Adding the code in order to customise form controls will, at best, cause code bloat which of course increases page load time and increases the risk of bugs.

There are many useful ways to improve the usability of forms and that is where design and development effort should be focused. As with any platform, the web (and it's constraints) need to embraced.

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://www.456bereastreet.com/archive/200410/styling_even_more_form_controls/">Styling even more form controls</a></dd>
	<dt class="citation" id="ref1">[1]</dt>
	<dd><a href="http://dowebsitesneedtolookexactlythesameineverybrowser.com/">Do websites need to look exactly the same in every browser?</a></dd>
	<dt class="citation" id="ref2">[2]</dt>
	<dd><a href="https://www.youtube.com/watch?v=hdTxeR90_1E">Progressive Enhancement 2.0</a></dd>
	<dt class="citation" id="ref3">[3]</dt>
	<dd><a href="http://www.smashingmagazine.com/2010/03/11/forms-on-mobile-devices-modern-solutions/">Forms on mobile</a></dd>
	<dt class="citation" id="ref4">[4]</dt>
	<dd><a href="http://ivaynberg.github.io/select2/">Select2</a></dd>
</dl>

Todo:
* http://www.456bereastreet.com/archive/200605/dont_customise_the_look_and_feel_of_form_fields/
* http://aaronmbushnell.com/lets-stop-customizing-form-fields/