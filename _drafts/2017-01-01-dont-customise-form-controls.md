---
layout: post
title:  "Don't customise form controls"
date:   2017-01-01 09:00:01
categories: accessibility
---

Form controls, unlike most other HTML elements, are nigh on impossible to style consistently Cross-browser. This is particulary the case with Select controls. This is due to *these* elements being tied to both the browser and OS and some browsers will ignore certain CSS rules. Designers often want to control every aspect (read pixel) of the UI  to the extent that everything looks identical on all browsers. You will notice that form controls can look quite different in different browsers [[0](#ref0)]. Because of these facts *custom* form controls cause periodic discussions between developers and designers.

## Users don't notice the difference

**Question:** Should websites (read form controls) look the same in every browser? <br>**Answer:** No [[1](#ref1)].

And Nicholas Zakas beautifully points out why in *Progresssive Enhancement 2.0* [[2](#ref2)]. You can go straight to 16 minutes in, to skip the history lesson, although that is also very informative.

Your users aren't noticing slight pixel differences, and they aren't noticing that form controls are slightly different on their iPhone (for example) compared to their favourite desktop browser, and, even if they are, they don't care. It's not going to stop them using your site, consuming content and purchasing items etc.

**Please don't take this article to mean we should be uneccessarily sloppy translating designs into living websites!**

It is arguably positive that browsers show these things differently as they match the native OS, and because a user uses the same browser repeatedly, there is an inherent expectation of how form controls look and behave in *that* browser.

The only people who look at websites in multiple browsers are Front-end Developers, not users. ([tweet that](https://twitter.com/share?source=tweetbutton&text=The only people that look at websites in multiple browsers are Front-end Developers, not users.&via=adambsilver&url={{site.url}}{{page.url}}&hashtags=frontend))

## "Solutions" result in a poor user experience

On some devices, when the user activates a Select control, the browser will show a native popup [[3](#ref3)]. This makes it easier to use. However, users forgo this behaviour if the control is customised with Javascript.

There are examples of such scripts, just Google "select replacement javascript". Try running them on an iPhone for example and notice the browser doesn't show the popup, leaving the user to pinch and zoom, making it harder to use. The behaviour is now different to all other websites who utilise native select controls. Typically these scripts don't support all browsers. Why would you want to even risk it just for a slight improvement in asthetics?

Attempting to tame them requires significant effort which most certainly results in code bloat and as has been described earlier, a degraded experience for at least some users, in at least some browsers. Garrett Dimon says:

> There are many things worth investing time to develop and implement. Customising the look and feel of form fields is absolutely not one of them. This is especially true if the method involves JavaScript to change the appearance. Browser form fields may not be the prettiest things in the world, but people are used to and comfortable with them. It’s not surprising that the sites I come across with custom-designed forms often have significant usability problems.

CSS is more reliable as it won't change the behaviour. However, the lack of CSS support for styling controls is exactly the reason why developers attempt the Javascript hackery in the first place.

## Summary

As an experienced Front-end Developer, it is important to know what works and what doesn't, and styling form controls to this extent is categorised by the latter. Some browsers are more friendly than others, but if you can't control them in a reliable, consistent way, *without* hurting the user experience, then it is not compelling to try in the name of *aesthetics* or *branding*. On the other hand this article describes the reasons *not* to. There are much more pressing matters requiring development and design effort. The web (and its constraints) just like any other platform, must be embraced.

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://www.456bereastreet.com/archive/200410/styling_even_more_form_controls/">Styling even more form controls</a></dd>
	<dt class="citation" id="ref1">[1]</dt>
	<dd><a href="http://dowebsitesneedtolookexactlythesameineverybrowser.com/">Do websites need to look exactly the same in every browser?</a></dd>
	<dt class="citation" id="ref2">[2]</dt>
	<dd><a href="https://www.youtube.com/watch?v=hdTxeR90_1E">Progressive Enhancement 2.0</a></dd>
	<dt class="citation" id="ref3">[3]</dt>
	<dd><a href="http://www.smashingmagazine.com/2010/03/11/forms-on-mobile-devices-modern-solutions/">Forms on mobile</a></dd>
</dl>