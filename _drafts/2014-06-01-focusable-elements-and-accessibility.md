---
layout: post
title:  "Focusable elements and accessibility"
date:   2014-06-01 09:00:01
categories: dom accessibility
---

By default the following elements can receive focus:

1. anchors
2. `select` menus
3. inputs
4. buttons
5. textareas

## Accessibility

There are users that use their keyboard to navigate a page. It is important that the interactive elements can be used by the mouse and keyboard. To do this I would advise that focusable elements are used to create interactive elements.

<!--
Article by Snook
I came across this article by Snook recently. I wanted to check it out for myself.



I created a test page and put it through the following browsers: IE6+, FF3+, Chrome, Opera 10.5. I found that just as Snook said, giving an element a tabindex of “0″ allowed it to receive focus, as well as not affecting the way the rest of the document flow receives focus – apart from Opera.



Opera will focus on the element programatically through JavaScript, but will not:

apply native browser styling for focus (no outline etc)
allow the element to receive focus via keyboard
Note: In Opera you have to use ctrl+UP or ctrl+DOWN to navigate page elements by keyboard.



I think I care about Opera too much to ignore this issue. I am certain focusable elements can be used to achieve the same functionality – at least I haven’t experienced a situation so far that proves otherwise.

Solving Snook’s accessibility problem by example
Snook said “For example, let’s say you wanted to create a tabbed interface for some information on the screen. The headings for each section could be the tabs. Having them as links doesn’t make much sense since the links wouldn’t go anywhere. But having them as keyboard focusable means you could set up onfocus events to bring the selected tab to the forefront.”


I don’t agree with Snook that the tabs don’t go anywhere with JavaScript off. I would solve this by creating mark-up like this:

http://gist.github.com/651170
-->

With JavaScript turned off the anchors will link to their related div elements. With JavaScript turned on the script will hide and show the relevant div based on which anchor was clicked by getting at the href value. But more importantly the elements that control the tabs are focusable as they are anchors, meaning the user can navigate to the tabs via the keyboard.