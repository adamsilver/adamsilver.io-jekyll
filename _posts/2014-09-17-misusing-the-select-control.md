---
layout: post
title:  "Misusing the select control"
date:   2014-09-17 09:00:01
categories: forms ux a11y
---

You have most likely seen or used a select menu without a submit button. The most common example would be sorting products on a product list page such as Amazon.

<div class="image">
	<img src="/assets/img/sortby.png" alt="Sort by select">
</div>

The reasoning behind this is normally to declutter the UI and reduce clicks. Unfortunately, when you remove the submit button, and change the native browser behaviour, it leads to an *unfriendly* human experience.

If you want the conclusion without the *why*, here it is: **every form must have a submit button, even if it only has a single control.**

If you do want the *why*, keep reading.

Select controls are meant to be used to help users fill in data. They are *not* meant to be used for navigation; that's what links are for.

People don't intuitively expect to navigate on selection. This is a *learned* behaviour and one that has become commonplace, due to the misuse of the select control. And now, others have and continue to adopt this anti-pattern to the detriment of their users.

Basically, there should be a difference between selection and *submission*. Combining the two into a single interaction causes usability issues as I show later. Don't take my word for it &mdash; listen to what Web Content Accessibility Guidelines have to say on this:

> &ldquo;Changing the setting of any user interface component does not automatically cause a change of context&rdquo;
> <br>&mdash; WCAG 2.0 On Input Success Criterion 3.2.2

Vanessa Mosher and Steven Weintraub share Larry Marinem's insight into usability:

> &ldquo;Larry suggested that users do not expect the drop-down list to be a navigation device. He stated that there are certain things that users expect a control to do, and sometimes it is common for designers to over-automate a step of the task by changing the normal expected behavior of a control. Drop-down lists are expected to display the selected object, not go somewhere. With drop-down lists, it's not uncommon for users to mis-select something; the users are surprised when this type of control launches them off somewhere and more so when it launches them into a mis-selected area. Larry added that reducing the number of clicks does not make a site more usable; giving the users appropriate control of their navigation does.&rdquo;

Not all people use a mouse; some use keyboards and screen readers etc. A keyboard user can tab to the select menu and press *up* and *down* to select an option.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/rnKDDSo9Omk" frameborder="0" allowfullscreen></iframe>

In the above video, you will see that when I press *down* on the keyboard, I am taken to the selected page, but I was trying to get to the 3rd or 4th option in the select control and was unable to do so.

*Note: if you want to have a play yourself, visit [this example](http://html.cita.illinois.edu/script/onchange/onchange-example.php) in an offending browser, such as Chrome (Windows), Opera (Windows), IE6, IE7, IE8 and IE9 &mdash; there are likely other browsers that do this, so if you come across one, please let me know.*

Vanessa Mosher and Steven Weintraub share Sarah Miller's usability test at the Open University with regard to screen readers:

> &ldquo;Sarah found drop-down lists without Go buttons were confusing because while the user had to inspect every item in the list, the action of reading an item meant that it was selected. She added that the user chose to use the keyboard instead of a mouse to scroll through the options to view (or hear) them: the first option was automatically selected—the user never got past the first item in the list.

> &ldquo;A few respondents also commented that auto-submit drop-down menus may be counter productive when interpreted by screen reader software (often used by the visually impaired). It seems that the software automatically selects the first item in the menu when the user opens it using either a mouse or keyboard.&rdquo;

UX is about creating human-friendly experiences. It is *not* about [reducing clicks](http://idyeah.com/blog/2012/06/stop-counting-clicks/) or cleaning up the UI. Reducing clicks and having a cleaner interface might be part of the *result*, but they shouldn't be considered objectives, in and of themselves. The aim is to make something as simple as possible, but no simpler. And in this case, this rule has been broken.

> &ldquo;Everything should be made as simple as it needs to be, and no simpler.&rdquo;
> <br>&mdash; Albert Einstein

Select menus are *not* meant to be used for navigation; it is merely a learned behaviour. Removing the submit button significantly degrades the experience for your users. The good news is that, if you simply put the submit button back, you don't have to think about any of these problems or the affected browsers anymore.