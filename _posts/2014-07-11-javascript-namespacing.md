---
layout: post
title:  "Javascript namespacing"
date:   2014-07-11 09:00:01
categories: js
description: Organising your client-side Javascript is important. Namespaces are a sane, cross-browser approach to help with this.
---

Namespaces are used to help with code organisation, discoverability, and in the context of Javascript, the minimisation of [global variables](http://www.yuiblog.com/blog/2006/06/01/global-domination/).

Client-side Javascript doesn't (at the time of writing) have a dedicated construct for namespacing, but it can be imitated using object literals.

For demonstration purposes let's define an example application. Our application will be a zoo and just like *real* zoos it will have animals and some additional information.

## Directory structure

It's helpful to visualise the directory structure as follows:

	zoo/
		zoo.js
		zoo.information.js
		animals/
			zoo.animals.js
			zoo.animals.Penguin.js
			zoo.animals.Tiger.js

Namespaces will be defined in `zoo.js` and `zoo.animals.js`. All other files define components of the zoo. Each folder represents a namespace. Each namespace file simply assigns an empty object to a variable or property.

## Root namespace setup

	// zoo.js
	var zoo = {};

## Sub level namespace setup

For our example app we don't need a deep hierarchy. Add levels as you need them. For us we just need to group animals.

	// zoo.animals.js
	zoo.animals = {};

*Note: The namespace matches the file name which aids discoverability.*

## Penguin definition

	// zoo.animals.Penguin.js
	zoo.animals.Penguin = function() {
		// constructor
	};

## Tiger definition

	// zoo.animals.Tiger.js
	zoo.animals.Tiger = function() {
		// constructor
	};

## Zoo information

When it comes to information you can simply assign an object to your chosen namespace.

	// zoo.information.js
	zoo.information = {
		name: "My Awesome Zoo",
		address: "52 Zoo Lane, ZA1 2AP"
	};

*Note: Do not be concerned about having too many files; overly complex namespace hiearchies should be avoided and separate files should be concatenated for production.*
