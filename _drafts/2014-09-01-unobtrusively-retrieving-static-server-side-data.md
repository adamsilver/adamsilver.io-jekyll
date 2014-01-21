---
layout: post
title:  "Unobtrusively retrieving static server side data"
date:   2014-09-01 09:00:01
categories: js
---

- Take the example of a validation messages controlled with a CMS.
- might add values inside a <script></script> or
- might add values inside attribute on an html element.
- Instead <script src='serverside.php'></script> that returns a valid javascript file
- now just look up property via blah.blah