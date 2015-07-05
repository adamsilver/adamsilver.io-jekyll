---
layout: post
title:  "Javascript namespacing"
date:   2014-07-11 09:00:01
categories: js
---

Namespaces provide organisation which leads to discoverability, and in the context of Javascript, the minimisation of global variables [[0](#ref0)]. Javascript doesn't (currently) have a dedicated construct for namespacing but it can be imitated. Typically over-engineered solutions [[1](#ref1)] are used but they are unnecessary and potentially problematic.

For demonstration purposes let's define an example application that we are going to sketch out using a simple, DRY, reliable and performant namespacing solution.

Our application will be a zoo and it will have animals and staff members. It will have two types of animal and two types of staff member. Additionally, some basic information about the zoo will be stored in the codebase.

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
			staff/
				zoo.staff.js
				zoo.staff.Keeper.js
				zoo.staff.SalesAssistant.js

Namespaces will be defined in zoo.js, zoo.animals.js and zoo.staff.js. All other files define components of the zoo. Each folder represents a namespace. Each namespace file simply assigns an empty object to a variable or property.

## Namespace setup

### Root namespace

	// zoo.js
	var zoo = {};

### Sub level namespace

For our example app we don't need a deep hierarchy. Add levels as you need them.

	// zoo.animals.js
	zoo.animals = {};

and

	// zoo.staff.js
	zoo.staff = {};

**Note**: The namespace matches the file name ensuring the namespaces are discoverable.

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

## Staff component definitions

### Keeper component

	// zoo.staff.Keeper.js
	zoo.staff.Keeper = function() {
		// constructor and not relevant to this
	};

### Sales assistant component

	// zoo.staff.SalesAssistant.js
	zoo.staff.SalesAssistant = function() {
		// constructor and not relevant to this
	};

**Note**: The component definition matches the file name ensuring the components are discoverable.

### Zoo information

	// zoo.information.js
	zoo.information = {
		name: "My Awesome Zoo",
		address: "52 Zoo Lane, ZA1 2AP"
	};

**Note**: Do not be concerned about having too many files; overly complex namespace hiearchies should be avoided and separate files should be concatenated into one for performance.

## Citations

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://www.yuiblog.com/blog/2006/06/01/global-domination/">Global Domination</a></dd>
	<dt class="citation" id="ref1">[1]</dt>
	<dd><a href="http://stackoverflow.com/questions/3410984/javascript-namespace">Over-engineered namespacing solutions on Stackoverflow</a></dd>
</dl>
