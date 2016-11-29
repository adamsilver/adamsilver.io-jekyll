---
layout: post
title:  "Javascript namespacing"
date:   2014-07-11 09:00:01
categories: js
description: Organising your client-side Javascript is important. Namespaces are a sane, cross-browser approach to help with this.
---

Namespaces help you organise a codebase, so that others can easily find their way around it. In Javascript, they also minimise the number of [global variables](http://www.yuiblog.com/blog/2006/06/01/global-domination/).

Javascript doesn't (at the time of writing) have a dedicated way to namespace components. But we can do it using object literals.

I'll show you how to do namespace your components with an example application. The application represents a zoo. The zoo has a couple of animals plus some additional information.

This is the directory structure for the zoo:

	zoo/
	  zoo.js
      zoo.information.js
      animals/
        zoo.animals.js
        zoo.animals.Penguin.js
        zoo.animals.Tiger.js

The root namespace resides inside `zoo.js`.

	var zoo = {};

The animals need a sub level namespace too which resides inside `zoo.animals.js`.

	// zoo.animals.js
	zoo.animals = {};

You will notice that the namespace matches the name of the file. This consistency helps you find the relevant component later.

The zoo has a penguin and a tiger definition which reside inside `zoo.animals.Penguin.js` and `zoo.animals.Tiger.js` respectively. The penguin definition is shown below:

	zoo.animals.Penguin = function() {
      // constructor
	};

If you need to store some information in the zoo you can do so as follows:

	// zoo.information.js
	zoo.information = {
	  name: "My Awesome Zoo",
      address: "52 Zoo Lane, ZA1 2AP"
	};

Where possible, you should avoid deeply nested hierarchies. But don't worry about having a lot of files. You should be concatenating them for production anyway.