---
layout: post
title:  "Don't customise form controls"
date:   2017-01-01 09:00:01
categories: accessibility
---

Form controls, unlike most other HTML elements, are impossible to style Cross-browser. This is due to *these* elements being tied to the browser and Operating System. As an example Safari on Mac shows a completely different select element compared to Windows XP.

Interestingly, this is a positive thing, because a user tends to use the same browser and the user has an inherent expectation of how form controls look and behave.

On certain devices, the browser will show a native control when the user activates a select box to make it easier to select an option [[0](#ref0)]. Users forgo this behaviour if the control is customised with Javascript. 

One example can be seen with Select2 [[1](#ref1)], a script built for customising the look and feel of Select menus. View the example page on an iPhone using Safari (or Nexus 5 using Chrome) and notice the browser doesn't show a  native control which makes selecting an option harder for users. Furthermore, the component itself doesn't support all browsers.

Attempting to tame them is a drawn out process which results in code bloat and likely, a degraded experience for at least some users, in at least some browsers. Garrett Dimon says:

	> Browser form fields may not be the prettiest things in the world, but people are used to and comfortable with them. It’s not surprising that the sites I come across with custom-designed forms often have significant usability problems.

CSS is more reliable as it won't change the behaviour but not all browsers will listen to all CSS rules so you might be left with something half styled which is worse than leaving it alone in the first place.

As an experienced Front-end Developer, it is important to know what works and what doesn't and this falls under the latter. Some browsers are more friendly than others but if you can't completely control them in a reliable, consistent way then there is little point in jumping through the hoops in order to do so.

Don't waste your time and your vistors time. Including the code in order to customise these things at best causes code bloat which of course increases page load time and increases the risk of bugs.

There are many ways to improve the usability of forms, and custom forms is definitely not one of those ways.

http://www.smashingmagazine.com/2010/03/11/forms-on-mobile-devices-modern-solutions/
http://ivaynberg.github.io/select2/
http://www.456bereastreet.com/archive/200605/dont_customise_the_look_and_feel_of_form_fields/
http://aaronmbushnell.com/lets-stop-customizing-form-fields/