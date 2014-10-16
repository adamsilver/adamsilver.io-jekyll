---
layout: post
title:  "Accessible interactive elements"
date:   2015-01-01 09:00:01
categories: accessibility
---

Any interactive element on a web page needs to be accessible, meaning that interaction can take place via a pointing device, keyboard, screen reader, touch etc. In order for this to happen focusable elements must be used. Focusable elements include `<a>`, `<button>`, `<select>`, `<input>` and `<textarea>`.

## Todo

I created a test page and put it through the following browsers: IE6+, FF3+, Chrome, Opera 10.5. I found that just as Snook said, giving an element a tabindex of “0″ allowed it to receive focus, as well as not affecting the way the rest of the document flow receives focus – apart from Opera.

Opera will focus on the element programatically through JavaScript, but will not:


- apply native browser styling for focus (no outline etc)
- allow the element to receive focus via keyboard





