---
layout: post
title:  "JavaScript namespacing"
date:   2014-04-01 09:00:01
categories: js
---

A namespace is a descriptive way of naming objects in a way that encapsulates its members, which enables the same member names within multiple different objects.

Utilising this concept is very simple in JavaScript but often over-engineered solutions are utilised which are often best avoided. The following is a very simple way of achieving namespacing:

## Rule 1: Each namespace requires a separate file

The first level is our application name. Let's call our application 'zoo'.

	// zoo.js
	var zoo = {};

LowerCamelcase naming is used as we reserve UpperCamelCase for constructors only.

Now we wish to define a secondary level namespace called 'animals' so that we can group all of our animals within this namespace.

	// zoo.animals.js
	zoo.animals = {};

Now we wish to define our first animal component called 'Zebra' (which *is* a constructor) and it has a method called `eat`. We want this Zebra to be defined within the animals namespace:

	// zoo.animals.Zebra.js
	zoo.animals.Zebra = function() {};
	zoo.animals.Zebra.prototype.eat = function() {};

## Rule 2: Script order is important

zoo.js must be included *before* zoo.animals.js and zoo.animals.Zebra.js. That is very simple to achieve:

	<script src="zoo.js"></script>
	<script src="woopah.animals.js"></script>
	<script src="woopah.animals.Zebra.js"></script>

## Summary

Namespacing in JavaScript is very simple. Notice there are no functions, closures, immediately invoked functions required and it is completely DRY and readable.
