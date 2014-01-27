---
layout: post
title:  "Single page applications"
date:   2014-10-01 09:00:01
categories: js
---

Just some of the things single page applications will fuck up:

## Fast back

'back' same as clicking a link - need to store cache in javascript memory - yuck

## Scrolling on history

Clicking forward or back should remember the scroll position

## Pending navigation

Need to be able to cancel navigation - single page apps do nothing when the user presses the stop/cancel button.

## Before navigating away

The beforeunload js event can be used to stop navigation. Would have to implement that for all navigation that is part of the single page app.

## Script loading

Single page apps are inherently a single page meaning you have to load up the entire app or load scripts via script. What about if I request a 'page' that doesn't have the code loaded for it yet. Ewww more problems

## Sheer code size

Take 'hello world'. To produce that in single page application architecture could require hundreds, if not thousands of lines of js. In html its just `<p>hello world</p>`

## Fallback for browsers without those mandatory features

Single page applications require a certain feature set if your browser doesn't support it its BLANK PAGE for them.

## Performance

Contrary to popular belief the browser is the absolute king of doing browsery type things like navigation, loading of css and js, informing the user that something is loading. It's what the browser specialises in etc. No javascript can do it faster.

<a name="ref0"></a>[0]:[Beyond pushState - building single page applications](https://medium.com/joys-of-javascript/4353246f4480)