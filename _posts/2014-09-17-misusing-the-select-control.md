---
layout: post
title: "Select boxes shouldn't submit on change"
categories: forms ux a11y
description: Sometimes forms submitted when the user selects an option. This is problematic.
---

Some sites will submit when the user selects an option in a select box (drop down menu) on change. The idea is that removing the button declutters the interface and saves users an extra click. First, [minimal does not mean simple](http://uxmyths.com/post/115783813605/myth-34-simple-minimal), second [stop counting clicks](http://idyeah.com/blog/2012/06/stop-counting-clicks/) and third, read on.

<!-- <div class="image" style="max-width: 320px;margin: 0 auto;">
	<figure>
		<img src="/assets/img/sortby.png" alt="Sort by select" width="100%">
		<figcaption>Sort by select box missing a submit button</figcaption>
	</figure>
</div> -->

Some browsers immediately submit the form when the user presses <kbd>Down</kbd>. As a user moves from the first to the second option, the [form will submit before the user had a chance to move further down the list](http://html.cita.illinois.edu/script/onchange/onchange-example.php). You can see this when using Chrome (Windows), Opera (Windows), IE6, IE7, IE8 or IE9.

Sarah Miller's research found that screen reader users can struggle. The act of reading an option selects it, meaning the user can never get past the first option. This is also disorientating as the user is taken somewhere without expecting it.

Ultimately this comes down to convention. Links are for navigation. Forms are for inputting data. We should use the right element for the job. This ensures that selecting something and submitting it are separate actions. This gives users control and conforms to [WCAG 2.0 criterion 3.2.2](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-unpredictable-change.html):

> Changing the setting of any user interface component does not automatically cause a change of context

Designing for inclusion means not excluding users based on their interaction and browser preferences. In this case, it also means giving users control and not over-automating an interface.

Reducing clicks and decluttering an interface may be the result of a well-designed experience, but they should not be objectives in and of themselves.

Every form&mdash;even one with a select box&mdash;should have a submit button to submit the form.

<!-- <iframe width="100%" height="315" src="https://www.youtube.com/embed/rnKDDSo9Omk" frameborder="0" allowfullscreen></iframe> -->

<!--
Should a GO Button be Included with a Drop-down List?
-->