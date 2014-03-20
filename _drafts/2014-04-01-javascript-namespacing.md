---
layout: post
title:  "Javascript namespacing"
date:   2014-04-01 09:00:01
categories: js
---

Using namespaces in JavaScript provides two benefits:

1. Organisation/descoverability
2. Minimising globals

Declaring a single variable and assigning an object literal to it enables further system components to be attached, minimising the risk of collision drastically. Typically over-engineered solutions [[0](#ref0)] are used but unnecessary and potentially problematic.

## Root level namespace

The root level should be the name of the application. Let's name our application 'zoo'.

	// zoo.js
	var zoo = {};

Conventionally constructors utilise upper camel case and so all other variables should be lower camel case and so our namespace is declared as such.

## Second level namespace

Our 'zoo' needs animals so let's define the second level:

	// zoo.animals.js
	zoo.animals = {};

## Attaching a component to a namespace

The application now has some structure, so let's create an animal component called 'Zebra'. This will be attached to the animals namespace:

	// zoo.animals.Zebra.js
	zoo.animals.Zebra = function() {};
	zoo.animals.Zebra.prototype.eat = function() {};

<a name="ref0"></a>[0]: [Over-engineered namespacing solutions on Stackoverflow](http://stackoverflow.com/questions/3410984/javascript-namespace)