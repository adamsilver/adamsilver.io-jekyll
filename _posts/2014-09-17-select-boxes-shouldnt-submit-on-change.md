---
layout: post
title: "Select boxes shouldn't submit on change"
categories: forms ux a11y
description: Sometimes forms submitted when the user selects an option. This is problematic.
---

Some sites will submit the form when the user selects an option in a select box (or drop down menu) `onchange`. The idea is that removing the button declutters the interface and saves users an extra click. First, [minimal does not mean simple](http://uxmyths.com/post/115783813605/myth-34-simple-minimal), second [stop counting clicks](http://idyeah.com/blog/2012/06/stop-counting-clicks/) and third, read on.

<!-- <div class="image" style="max-width: 320px;margin: 0 auto;">
	<figure>
		<img src="/assets/img/sortby.png" alt="Sort by select" width="100%">
		<figcaption>Sort by select box missing a submit button</figcaption>
	</figure>
</div> -->

Unfortunately, some browsers will fire the `onchange` event as the user presses <kbd>Down</kbd>. As a user moves from the first to the second option, for example, the [form will submit before the user had a chance to move further down the list](http://html.cita.illinois.edu/script/onchange/onchange-example.php). To my knowledge, this happens in a plethora of Windows browsers including Chrome, Opera, Internet Explorer 9 and below.

Screen reader users can struggle too. This is because the act of reading an option, selects it, causing the form to submit. This means users can never get past the first option. Navigating users automatically can also be disorientating as users don't expect a form control to do this.

This is hardly surprising given that links are for navigation and forms are for inputting data. Not only is using a select box for navigation [materially dishonest](https://resilientwebdesign.com/chapter2/), but it also fails [Web Content Accessibility Guidelines Success Criteria 3.2.2](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-unpredictable-change.html) which says:

> Changing the setting of any user interface component does not automatically cause a change of context

Designing for inclusion means not excluding users based on their interaction and browser preferences. In this case, it also means giving users control and not over-automating an interface.

Reducing clicks and decluttering an interface may be the result of a well-designed experience, but they should not be objectives in and of themselves.

Every form&mdash;even if it only contains a single select box&mdash;should have a submit button.

<!-- <iframe width="100%" height="315" src="https://www.youtube.com/embed/rnKDDSo9Omk" frameborder="0" allowfullscreen></iframe> -->

<!--
Should a GO Button be Included with a Drop-down List?
-->