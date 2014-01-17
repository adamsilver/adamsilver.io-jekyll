---
layout: post
title:  "Input type image"
date:   2014-05-01 09:00:01
categories: dom forms
---

This element is commonly used to provide more control over the look and feel of submit buttons. They have some peculiarities.

## `elements` collection

Early implementations of the `elements` collection never returned `input` elements with a `type` attribute of `image`. If these elements need to be retrieved you must find alternative DOM APIs.

## Coordinates

When submitted the value of the control will be the coordinates in which it was clicked. Making it tricky if the user submitted without a pointing device. Avoid/look up.

<!-- http://msdn.microsoft.com/en-us/library/ms537449(v=VS.85).aspx-->