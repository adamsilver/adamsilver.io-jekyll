---
layout: post
title:  "Select menu accessibility issues"
date:   2014-09-17 09:00:01
categories: forms ux a11y
---

We've all seen it. A select menu without a submit button. In this case, a script is used to submit the form when the selected value is changed. The thinking behind this is normally to declutter the UI and reduce clicks. However, UX is not about decluttering the UI or reducing clicks. It's about making human-friendly experiences. And unfortunately, this particular UI causes unfriendly experiences. This article discusses this unfriendliness.

## TL;DR

If you want the answer without the theory, here it is: *every* form must have a submit button, even if it only has a single control.

## Debunking a cleaner UI and reducing clicks

The point about a cleaner interface and less clicks is best addressed by Albert Einstein:

> &ldquo;Everything should be made as simple as it needs to be, and no simpler.&rdquo;

Counting clicks to measure a successful UX is mindless. [Stop it](http://idyeah.com/blog/2012/06/stop-counting-clicks/).

## Usability considerations

Select menus are not meant to be used for navigation, therefore users don't intuitively expect to navigate on selection. This is a *learned* behaviour due to this misuse of select menus.

Vanessa Mosher and Steven Weintraub share Larry Marinem's insight into usability:

> &ldquo;One strong voice for using a Go button was Larry Marinem. Larry suggested that users do not expect the drop-down list to be a navigation device. He stated that there are certain things that users expect a control to do, and sometimes it is common for designers to over-automate a step of the task by changing the normal expected behavior of a control. Drop-down lists are expected to display the selected object, not go somewhere. With drop-down lists, it's not uncommon for users to mis-select something; the users are surprised when this type of control launches them off somewhere and more so when it launches them into a mis-selected area. Larry added that reducing the number of clicks does not make a site more usable; giving the users appropriate control of their navigation does.&rdquo;

## Accessibility considerations

Not all users use a mouse. Keyboards and screen readers are also used. A keyboard user can tab to the select menu and use their keyboard to select a different option. Take [this example](http://html.cita.illinois.edu/script/onchange/onchange-example.php) - in some browsers, the *HTML4* option isn't accessible because it is already selected as the default option. Also, if the user presses *Down* just once, the form is submitted which means it's very difficult to access other options.

Vanessa Mosher and Steven Weintraub share Sarah Miller's usability test at the Open University with regard to screen readers:

> &ldquo;Several people working with blind users commented on problems both with screen readers and for those using keyboards. For example, one cited a usability test by Sarah Miller at the Open University. Sarah found drop-down lists without Go buttons were confusing because while the user had to inspect every item in the list, the action of reading an item meant that it was selected. She added that the user chose to use the keyboard instead of a mouse to scroll through the options to view (or hear) them: the first option was automatically selected—the user never got past the first item in the list.

> &ldquo;A few respondents also commented that auto-submit drop-down menus may be counter productive when interpreted by screen reader software (often used by the visually impaired). It seems that the software automatically selects the first item in the menu when the user opens it using either a mouse or keyboard.&rdquo;

## What browsers are affected?

The affected browsers (to my knowledge) are Chrome (on Windows), Opera (on Windows), Internet Explorer 6, 7, 8 and 9. It is very likely there are others.

## What the Web Standards say

WCAG 2.0 On Input Success Criterion 3.2.2 states that:

> &ldquo;Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component. (Level A)&rdquo;

In other words there should be a clear difference between input/selection and *submission*; combining the two actions breaks the functionality for some users which is unsurprising given the  Web Standards guidelines.

## Summary

Select menus are *not* meant to be used for navigation; it is merely a learned behaviour. Removing the submit button degrades the experience for some users. Ensuring every form has a submit button **guarantees** cross-browser compatibility for all.