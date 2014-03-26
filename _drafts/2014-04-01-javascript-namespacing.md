---
layout: post
title:  "Javascript namespacing"
date:   2014-04-01 09:00:01
categories: js
---

Namespaces provide organisation, discoverability and in the context of Javascript the minimisation of global variables [[0](#ref0)]. Implementing namespaces is as simple as declaring a variable and assigning an object literal. Typically, over-engineered solutions [[1](#ref1)] are used but unnecessary and potentially problematic. Here, by example a simple solution is described.

Note: Javascript doesn't have a dedicated construct for namespacing but it can be mimicked through the use of variables and object literals.

## Defining a root level namespace

The root level should be the name of the application. The name of the application will be Zoo - see below:

	// zoo.js
	var zoo = {};

Each namespace belongs in a single file matching the namespace identifier. Do not be concerned about having too many files; overusing namespaces should be avoided and separate files should be concatenated into one for production-level performance.

## Attaching a second level namespace

The Zoo needs animals so let's define an animals property on the root namespace:

	// zoo.animals.js
	zoo.animals = {};

The application now has some basic structure.

## Attaching a component

The Zoo needs animals and so a Zebra component is defined as follows:

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
