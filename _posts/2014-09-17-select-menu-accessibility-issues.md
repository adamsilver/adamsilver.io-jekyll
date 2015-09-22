---
layout: post
title:  "Select menu accessibility issues"
date:   2014-09-17 09:00:01
categories: forms ux a11y
---

You have most likely seen or used a select menu without a submit button. The most common example would be sorting products on a product list page.

<div class="image">
	<img src="/assets/img/sortby.png" alt="Sort by select">
</div>

The reasoning behind this is normally to declutter the UI and reduce clicks. However, UX is not about decluttering the UI or reducing clicks. It's about making human-friendly experiences.

Unfortunately, when you remove the submit button, and change the native browser behaviour, it leads to an unfriendly human experience. This is the topic of this article.

If you want the conclusion *without* the theory, here it is: **every form must have a submit button, even if it only has a single control.** And if you do want the reason behind it, keep reading.

Select controls are meant to be used to to help users input data. They are *not* meant to be used for navigation. People don't intuitively expect to navigate on selection. This is a *learned* behaviour that has become quite commonplace, due to the misuse of this UI control. But don't just take my word for it&hellip;

> &ldquo;Changing the setting of any user interface component does not automatically cause a change of context&rdquo;
> <br>&mdash; WCAG 2.0 On Input Success Criterion 3.2.2

Basically, there should be a difference between selection and *submission*. Combining the two into a single interaction causes usability issues as we will see later.

Vanessa Mosher and Steven Weintraub share Larry Marinem's insight into usability:

> &ldquo;One strong voice for using a button was Larry Marinem. Larry suggested that users do not expect the drop-down list to be a navigation device. He stated that there are certain things that users expect a control to do, and sometimes it is common for designers to over-automate a step of the task by changing the normal expected behavior of a control. Drop-down lists are expected to display the selected object, not go somewhere. With drop-down lists, it's not uncommon for users to mis-select something; the users are surprised when this type of control launches them off somewhere and more so when it launches them into a mis-selected area. Larry added that reducing the number of clicks does not make a site more usable; giving the users appropriate control of their navigation does.&rdquo;

Not all people use a mouse; some use keyboards and screen readers etc. A keyboard user can tab to the select menu and press up and down to select an option.

Take [this example](http://html.cita.illinois.edu/script/onchange/onchange-example.php) &mdash; in some browsers, the *HTML4* option isn't accessible because it is already selected as the default option. Also, if the user presses *Down* just once, the form is submitted which means it's very difficult to access other options.

Vanessa Mosher and Steven Weintraub share Sarah Miller's usability test at the Open University with regard to screen readers:

> &ldquo;Several people working with blind users commented on problems both with screen readers and for those using keyboards. For example, one cited a usability test by Sarah Miller at the Open University. Sarah found drop-down lists without Go buttons were confusing because while the user had to inspect every item in the list, the action of reading an item meant that it was selected. She added that the user chose to use the keyboard instead of a mouse to scroll through the options to view (or hear) them: the first option was automatically selected—the user never got past the first item in the list.

> &ldquo;A few respondents also commented that auto-submit drop-down menus may be counter productive when interpreted by screen reader software (often used by the visually impaired). It seems that the software automatically selects the first item in the menu when the user opens it using either a mouse or keyboard.&rdquo;

The affected browsers (to my knowledge) are Chrome (on Windows), Opera (on Windows), Internet Explorer 6, 7, 8 and 9. It is likely there are others.

> &ldquo;Everything should be made as simple as it needs to be, and no simpler.&rdquo;
> <br>&mdash; Albert Einstein

UX is about creating human-friendly experiences. It is *not* about [reducing clicks](http://idyeah.com/blog/2012/06/stop-counting-clicks/) or cleaning up the UI. Reducing clicks and having a cleaner interface might be part of the outcome of solving a problem, but they are *not* objectives in and of themselves. The aim is to make something as simple as possible, but no simpler. And in this case, this rule has been broken.

## Summary

Select menus are *not* meant to be used for navigation; it is merely a learned behaviour. Removing the submit button degrades the experience for some users. Ensuring every form has a submit button **guarantees** cross-browser compatibility for all.