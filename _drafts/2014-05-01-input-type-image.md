---
layout: post
title:  "Input type image"
date:   2014-05-01 09:00:01
categories: dom forms
---

The `input` element with `type` attribute `image` is typically used over regular submit buttons when finer visual control is required but they have some peculiarities.

## The `elements` collection

Early implementations of the `elements` collection never returned these elements. If these elements need to be retrieved you must find alternative DOM APIs such as

## Submitted values

When the form is submitted via pressing the image submit button the value will be the coordinates in which it was clicked relative to the image.

TODO: Making it tricky if the user submitted without a pointing device. Avoid/look up.

<!-- http://msdn.microsoft.com/en-us/library/ms537449(v=VS.85).aspx-->