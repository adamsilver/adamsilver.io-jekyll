---
layout: post
title:  "Forms shouldn't submit on change of a select element"
date:   2014-01-15 09:00:01
categories: js
---

Unfortunatley, some websites choose to employ a select menu that submits a form when the value is changed; and with the submit button omitted from the User Interface (UI). The rationale behind this decision is ironically to improve the User Experience (UX), but in reality it is the opposite. 

## What does WCAG think?

WCAG 2.0 On Input Success Criterion 3.2.2 states that:

> Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component. (Level A)

That settles that but let's delve a little deeper...

## Accessibility considerations

Not all users use a mouse; keyboards and screen readers are also used. A keyboard user can tab to the select element and use their keyboard to select a different option. Take [this example](http://html.cita.illinois.edu/script/onchange/onchange-example.php) - the *HTML4* option can't accessed because it is already selected as the default option.

Also, in various browsers [[0]](#ref0), if the user presses Down just once, the form is submitted meaning its very difficult for me to get to other items in the list.

Vanessa Mosher and Steven Weintraub share Sarah Miller's test at the Open University with regard to screen readers:

 >Several people working with blind users commented on problems both with screen readers and for those using keyboards. For example, one cited a usability test by Sarah Miller at the Open University. Sarah found drop-down lists without Go buttons were confusing because while the user had to inspect every item in the list, the action of reading an item meant that it was selected. She added that the user chose to use the keyboard instead of a mouse to scroll through the options to view (or hear) them: the first option was automatically selected—the user never got past the first item in the list.

> A few respondents also commented that auto-submit drop-down menus may be counter productive when interpreted by screen reader software (often used by the visually impaired). It seems that the software automatically selects the first item in the menu when the user opens it using either a mouse or keyboard.

## Usability considerations

Select menus are not meant to be used for navigation, therefore users don't intuitively expect to navigate on selection. This is learned behaviour due to the unfortunate misuse of select menus.

Vanessa Mosher and Steven Weintraub share Larry Marinem's insight into usability:

 > One strong voice for using a Go button was Larry Marinem. Larry suggested that users do not expect the drop-down list to be a navigation device. He stated that there are certain things that users expect a control to do, and sometimes it is common for designers to over-automate a step of the task by changing the normal expected behavior of a control. Drop-down lists are expected to display the selected object, not go somewhere. With drop-down lists, it's not uncommon for users to mis-select something; the users are surprised when this type of control launches them off somewhere and more so when it launches them into a mis-selected area. Larry added that reducing the number of clicks does not make a site more usable; giving the users appropriate control of their navigation does.

## Summary

Select menus are *not* meant to be used for navigation. In doing so, the user experience is degraded for certain types of users and users using certain browsers. Avoiding this behaviour ensures it will work cross-browser, without Javascript and behave intuitively and consistently.

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://pauljadam.com/blog/javascript/onchange-event-on-a-select-inputjump-menu-accessibility-problems/">Paul Adam on the select change issue</a></dd>
</dl>