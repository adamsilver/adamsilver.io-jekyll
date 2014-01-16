---
layout: post
title:  "Opting in and out of CSS rules"
date:   2014-03-01 09:00:01
categories: css
---

It seems to be common practice to find overrides in CSS code. In my experience developers typically don't have the foresight of writing CSS with scalability and maintainability in-mind.

## Opting out of CSS rules

I see this issue frequently and find it really frustrating to work with. So let's take a look at an example. The developer's first task is to write some CSS for list items within copy so they look like bullet points. The following code is written:

	li {
		margin-bottom: 10px;
		margin-left: 30px;
		padding: 5px;
		list-style: square;
		font-size: 1.2em;
	}

The styles have been applied to each list item on the site which seems okay at first.

Unfortunately, after some time passes it's now my job to write the CSS for a navigation component. Typically, navigation is a list of links and so I am going to use list items to mark it up. The first thing I have to do now is override each css rule:

	#navigation li {
		/* opting out of CSS rules i.e. having to override */
		margin-bottom: 0;
		margin-left: 0;
		padding: 10px;
		font-size: 1.5em;
		list-style: none;
		float: left;
	}

This is likely (even though minimally) to affect the rendering performance as the browser tries to apply 2 sets of CSS rules.

Regardless, I wanted to talk about the fact this code has an impact on me personally. Inspecting the rules is more difficult as there are more rules to scroll through and I have to go through the effort of opting out of the rules that one developer (usually the first developer on the project) deemed acceptable to apply to all elements on a website.

This particularly rings true if you have applied a CSS 'reset' which removes margin and padding from the list items in the first place.

## Opting in to CSS rules

The opposite allows me to write the CSS rules for the navigation with the knowledge that I am not to be burdened with inheriting some overzealous CSS rules.

	.genericCopy li {
		margin-bottom: 10px;
		margin-left: 30px;
		padding: 5px;
		list-style: square;
		font-size: 1.2em;
	}

	#navigation li {
		float: left;
		padding: 10px;
		list-style: none;
		font-size: 1.5em;
	}

Now the bullet list item styles are opt-in only. If by chance the navigation styles did require the "generalCopy" styles then I can opt-in as follows:

	.genericCopy li,
	#navigation li  {
		margin-bottom: 10px;
		margin-left: 30px;
		padding: 5px;
		list-style: square;
		font-size: 1.2em;
	}

	#navigation li {
		/* some styles just for navigation */
	}

It follows the principles of DRY and there is no need to have an abstract class name which bloats the HTML.

## Summary

What appears to be such a straightforward task can escalate into a lot of technical debt. Opt-in would be advisable.
