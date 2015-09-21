---
layout: post
title:  "Javascript namespacing"
date:   2014-07-11 09:00:01
categories: js
citations:
 - title: Global Domination
   link: http://www.yuiblog.com/blog/2006/06/01/global-domination/
 - title: Over-engineered namespacing solutions on Stackoverflow
   link: http://stackoverflow.com/questions/3410984/javascript-namespace
---

Namespaces are used to help with code organisation and discoverability, and in the context of Javascript, the minimisation of global variables [[0](#ref0)]. Javascript doesn't (at the time of writing) have a dedicated construct for namespacing, but it can be imitated using object literals. This article discusses a simple and lean method of utilising namespaces in your application.

For demonstration purposes let's define an example application. Our application will be a zoo and just like *real* zoos it will have animals. Additionally, some basic information about the zoo will be stored in the codebase.

## Directory structure

It's helpful to visualise the directory structure as follows:

	src/
		zoo/
			zoo.js
			zoo.information.js
			animals/
				zoo.animals.js
				zoo.animals.Penguin.js
				zoo.animals.Tiger.js

Namespaces will be defined in `zoo.js` and `zoo.animals.js`. All other files define components of the zoo. Each folder represents a namespace. Each namespace file simply assigns an empty object to a variable or property.

## Namespace setup

### Root namespace

	// zoo.js
	var zoo = {};

### Sub level namespace

For our example app we don't need a deep hierarchy. Add levels as you need them. For us we just need to group animals.

	// zoo.animals.js
	zoo.animals = {};

*Note: The namespace matches the file name which aids discoverability.*

## Animal component definitions

### Penguin component

	// zoo.animals.Penguin.js
	zoo.animals.Penguin = function() {
		// constructor and not relevant to this
	};

### Tiger component

	// zoo.animals.Tiger.js
	zoo.animals.Tiger = function() {
		// constructor and not relevant to this
	};

### Zoo information

When it comes to static information you can simply assign an object to your chosen namespace.

	// zoo.information.js
	zoo.information = {
		name: "My Awesome Zoo",
		address: "52 Zoo Lane, ZA1 2AP"
	};

*Note: Do not be concerned about having too many files; overly complex namespace hiearchies should be avoided and separate files should be concatenated into one for performance.*

## Summary

Every component should be assigned to a namespace. Every namespace should be defined in its own file. File names and component names should match and static information can be assigned directly without the need for a separate namespace file as per `zoo.information`. Following these rules leads to an intuitive, well organised and simple codebase.