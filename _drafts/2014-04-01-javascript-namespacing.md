---
layout: post
title:  "Javascript namespacing"
date:   2014-04-01 09:00:01
categories: js
---

Namespaces provide organisation which leads to discoverability and in the context of Javascript, the minimisation of global variables [[0](#ref0)]. Javascript doesn't have a dedicated construct for namespacing but it can be imitated. Typically over-engineered solutions [[1](#ref1)] are used but they are unnecessary and potentially problematic.

For demonstration purposes let's define an example application that we are going to sketch out using a simple, DRY, reliable and performant namespacing solution.

Our application will be a zoo and it will have animals and staff members. It will have two types of animal and two types of staff member. Additionally, some basic information about the zoo will be stored in the codebase.

First we define a root level namespace:

	// zoo.js
	var zoo = {};

We place this single global variable into a file that matches the name of the application. In this case 'zoo'. An object literal is assigned to it so that we can have deeper namespacing structures and scale up as necessary.

We now need to attach two more namespaces:

	// zoo.animals.js
	zoo.animals = {};

and...

	// zoo.staff.js
	zoo.staff = {};

Now that we have structure we will first create the animal types:

	// zoo.animals.Penguin.js
	zoo.animals.Penguin = function() {
		// constructor and not relevant to this
	};

and...

	// zoo.animals.Tiger.js
	zoo.animals.Tiger = function() {
		// constructor and not relevant to this
	};

You will notice by now that the namespace identifer and the animal components themself match the file names - this improves discoverability.

Now we create the staff member types:

	// zoo.staffMembers.Keeper.js
	zoo.staffMembers.Keeper = function() {
		// constructor and not relevant to this
	};

and...

	// zoo.staffMembers.SalesAssistant.js
	zoo.staffMembers.SalesAssistant = function() {
		// constructor and not relevant to this
	};

Do not be concerned about having too many files; overly complex namespace hiearchies should be avoided and separate files should be concatenated into one for production-level performance.

Finally, we need to represent some basic information about the zoo:

	// zoo.information.js
	zoo.information = {
		name: "My Awesome Zoo",
		address: "52 Zoo Lane, ZA1 2AP"
	};

In this last case we simple attach properties onto the information object. In this particular case it is a good idea not to attach

<dl>
	<dt><a name="ref0"></a>[0]</dt>
	<dd><a href="http://www.yuiblog.com/blog/2006/06/01/global-domination/">Global Domination</a></dd>
	<dt><a name="ref1"></a>[1]</dt>
	<dd><a href="http://stackoverflow.com/questions/3410984/javascript-namespace">Over-engineered namespacing solutions on Stackoverflow</a></dd>
</dl>
