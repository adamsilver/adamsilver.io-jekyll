---
layout: post
title:  "Forms shouldn't submit on change of a select element"
date:   2014-01-15 09:00:01
categories: js
---

On the web it is common to see a select element that submits a form when the value is changed with the submit button omitted from the User Interface (UI). The rationale behind this decision is ironically to improve the User Experience (UX), but in reality it is often detrimental. WCAG 2.0 On Input Success Criterion 3.2.2 states that:

> Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component. (Level A)

**Not all users use a mouse.** Some are navigating the web with a screen reader or keyboard. For example, a keyboard user can tab to the select element and use their keyboard to select a different option. 

Take [this example](http://html.cita.illinois.edu/script/onchange/onchange-example.php) - *HTML4* can't easily be accessed because it is already selected as the default option. Instead I have to navigate to another option, wait for the page to load, hit Back in my browser and then select it; this only works because the browser history remembers my previous choice.

Furthermore, in various browsers [[0]](#ref0), if the user presses Down just once, the form is submitted. This means, in order to get to the last option in the select element requires 5 page refreshes; this is tedious at best.

## Summary

Forms are ubiquitous and users are accustomed to their behaviour; fill out a form and submit it. There is no need to change this behaviour. All forms should have a submit button and forms should not be submitted when the select element value is changed. It is advisable to use solutions that work cross-browser, without JS and that behave intuitively and consistently.

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://pauljadam.com/blog/javascript/onchange-event-on-a-select-inputjump-menu-accessibility-problems/">Paul Adam on the select change issue</a></dd>
</dl>
