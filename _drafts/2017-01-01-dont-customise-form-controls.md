---
layout: post
title:  "Don't customise form controls"
date:   2017-01-01 09:00:01
categories: accessibility
---

Form controls, unlike most other HTML elements, are impossible to style Cross-browser. This is due to the elements being coupled to the browser and operating system. As an example Safari on Mac shows a completely different select element compared to Windows XP.

Interestingly, this is a good thing, because a user tends to use the same browser and it becomes an inherent expectation for users to recognise form controls in this way and for them to behave the way they do. 

On certain mobile device, the browser will popup a native control when the user activates a select box to make it easier to select an option [0]. Users won't get this behaviour if the control is customised with Javascript. An example can be seen with [Select2](http://ivaynberg.github.io/select2/) by navigating on an iPhone Safari or Nexus 5 Chrome for example.

CSS is more reliable as it won't change the behaviour but not all browsers will listen to all CSS rules so you might be left with something half styled which is worse than leaving it alone in the first place.

Attempting to tame them is a drawn out process which results in code bloat and likely a degraded User Experience for at least some users, in some browsers. Garrett Dimon says:

	> Browser form fields may not be the prettiest things in the world, but people are used to and comfortable with them. It’s not surprising that the sites I come across with custom-designed forms often have significant usability problems.

As an experienced Front-end Developer, it is important to know what works and what doesn't and this falls under the latter. Some browsers are more friendly than others but if you can't completely control them in a reliable, consistent way then there is little point in jumping through the hoops in order to do so.

Don't waste your time and your vistors time. Including the code in order to customise these things at best causes code bloat which of course increases page load time and increases the risk of bugs.

There are many ways to improve the usability of forms, and custom forms is definitely not one of those ways.

http://www.456bereastreet.com/archive/200605/dont_customise_the_look_and_feel_of_form_fields/
http://aaronmbushnell.com/lets-stop-customizing-form-fields/