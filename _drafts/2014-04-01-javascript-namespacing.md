---
layout: post
title:  "Javascript namespacing"
date:   2014-04-01 09:00:01
categories: js
---

Namespaces provide organisation which leads to discoverability and in the context of Javascript, the minimisation of global variables [[0](#ref0)]. Javascript doesn't have a dedicated construct for namespacing but it can be imitated easily which will be shown later. Typically, over-engineered solutions [[1](#ref1)] are used but they are unnecessary and potentially problematic. By example a very simple solution is implemented below.

## Defining a root level namespace

The root level should be the name of the application. The name of our example application will be Zoo. A single global variable called zoo is defined and an object literal is assigned to it. We assign an object literal so that we can attach further namespaces to it as properties of this single global variable which will be shown later.

	// zoo.js
	var zoo = {};

Each namespace belongs in a single file matching the namespace identifier. Do not be concerned about having too many files; overly complex namespace hiearchies should be avoided and separate files should be concatenated into one for production-level performance.

## Attaching a second level namespace

The Zoo needs animals so a second level namespace is defined. This is achieved by assigning a property to the zoo variable and again we assign an object literal to the property.

	// zoo.animals.js
	zoo.animals = {};

The application now has some basic structure.

## Attaching a component

The Zoo needs at least one animal and so a Zebra component is defined. Again, we assign another property to the animals namespace but this time instead of assigning an object literal we assign a (constructor) function. This isn't necessary but is used to emphasis that the Zebra property is not another namespace - it's a regular component attached to a namespace.

	// zoo.animals.Zebra.js
	zoo.animals.Zebra = function() {};
	zoo.animals.Zebra.prototype.eat = function() {};

Just repeat the last two steps as the application grows.

<dl>
	<dt><a name="ref0"></a>[0]</dt>
	<dd><a href="http://www.yuiblog.com/blog/2006/06/01/global-domination/">Global Domination</a></dd>
	<dt><a name="ref1"></a>[1]</dt>
	<dd><a href="http://stackoverflow.com/questions/3410984/javascript-namespace">Over-engineered namespacing solutions on Stackoverflow</a></dd>
</dl>
