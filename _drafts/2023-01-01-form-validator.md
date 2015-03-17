
## Introduction

* Form validation is boring but necessary and vital. The most important interaction on the web is that of forms. Users are signing up, logging in, searching and buying something etc.

* I have seen and played with a gazilion of the shelf validation scripts but in reality they have never been able to cope with the various project requirements.

* Everyone says form validation is simple, but I have seen so much code tripping over itself.

* So I present to you the best form validator in the world!

## Planning the form validator base script

This script is useful to *any* project, no matter the requirements. The project might specify that monkeys dance around an input on error using canvas and this script won't change. It's designed based on the relationship of forms, controls and validation rules, not based on how and when the form is validated and how the form *looks* and *behaves* during validation. This is project-specific. So our base script only needs to consider the following:

1. A form contains multiple controls

* Each control must have a name attribute that identifies the control. This is an HTTP requirement too.

* A control, can optionally have validation rules. e.g. a *username* control could have two rules: i) that it not be empty and ii) that it contains at least 5 characters. 

Note: It is not important that we consider the types of rules there are such as "not empty" or "5 chachters" or "looks like an email address". A rule is something that either passes the test or doesn't.

* When at least one control is erroneous, the form is invalid and there are error messages associated with the form and the relevant controls.

So let's design the base form API:

	// takes a reference to a form element
	var validator = new FormValidator(form);

	// adds a validator with a bunch of rules to a control
	validator.addValidator("controlName", [{
		method: fn // fn is a function that returns true or false,
		message: "The error message text",
		params: {} // optional
	}]);