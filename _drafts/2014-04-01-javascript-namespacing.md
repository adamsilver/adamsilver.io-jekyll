---
layout: post
title:  "Javascript namespacing"
date:   2014-04-01 09:00:01
categories: js
---

<!-- minimising globals -->

Using namespaces in javascript gives us 2 benefits:

1. Structure
2. Minimising globals

By introducting a root namespace for the application we are only introducing one global variable minimising the risk of collision with other globals which

Defining a namespace is as simple as defining a variable and assigning an object literal. Typically, over-engineered solutions [[0](#ref0)] are proposed but best avoided as follows:

## Define top level namespace

The top level should be the name of the application. Let's name our application 'zoo'.

	// zoo.js
	var zoo = {};

Lower camel case naming is used for the namespace as upper camel case is typically reserved for constructors.

## Define second level namespace

Our 'zoo' needs animals so let's define the second level namespace:

	// zoo.animals.js
	zoo.animals = {};

## Define a component within namespace

Having provided some structure to our application let's create an animal component called 'Zebra'. This will be placed within the 'animals' namespace:

	// zoo.animals.Zebra.js
	zoo.animals.Zebra = function() {};
	zoo.animals.Zebra.prototype.eat = function() {};

<a name="ref0"></a>[0]: [Over-engineered namespacing solutions on Stackoverflow](http://stackoverflow.com/questions/3410984/javascript-namespace)