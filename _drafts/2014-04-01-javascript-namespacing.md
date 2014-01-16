---
layout: post
title:  "JavaScript namespacing"
date:   2014-04-01 09:00:01
categories: js
---

The goal of this article is to emphasis just how simple it is to organise your JavaScript codebase with namespaces. There is a lot of complex solutions out there on the web and it is advisable these solutions are avoided.


There are a lot of different ways people go about writing namespaces in JavaScript.  Having played with a few of the approaches I am keen on sharing a very simple, effective, DRY way of doing this and feel that the other approaches are over engineered with little reason.

## Rule 1: Each level requires a separate file

The first level is our application name. Let's call our application Zoo.

	// zoo.js
	var zoo = {};

Now we wish to define a secondary level namespace called Animals so that we can group all of our animals within this namespace.

	// zoo.animals.js
	zoo.animals = {};

Now we wish to define our first animal component called Zebra (which is a constructor) and it has a method called `eat`. We want this Zebra to be defined within the animals namespace:

	// zoo.animals.Zebra.js
	zoo.animals.Zebra = function() {};
	zoo.animals.Zebra.prototype.eat = function() {};

## Rule 2: Script order is important

zoo.js must be included *before* zoo.animals.js and zoo.animals.Zebra.js. That is very simple to achieve:

	<script src="zoo.js"></script>
	<script src="woopah.animals.js"></script>
	<script src="woopah.animals.Zebra.js"></script>

Notice there are no special functions, closures, immediately invoked functions and it is completely DRY and readable. The namespace is at the top of the file where it belongs.
