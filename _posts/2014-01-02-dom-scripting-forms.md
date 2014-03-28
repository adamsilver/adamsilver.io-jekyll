---
layout: post
title:  "DOM scripting forms"
date:   2014-01-02 09:00:59
categories: forms dom js
---

The HTML DOM has dedicated APIs for retrieving and manipulating forms and controls. It’s always important to use the right API and in this case the DOM 0 API [[0](#ref0)] Forms collection is appropriate but unfortunately often forgotten.

## Contents

1. [Accessing a form](#accessingForm)
2. [Accessing form controls](#accessingControls)
3. [Accessing form control by name](#accessingControlByName)
4. [Inspecting a controls value](#inspectingControlValue)

<a name="accessingForm"></a>

## Accessing a form

Accessing a form with a name attribute 'login' is as follows:

	var loginForm = document.forms.login;

<a name="accessingControls"></a>

## Accessing form controls

Once we have the form we can retrieve all the controls in a form:

	var loginControls = loginForm.elements;

If the login form contained a username and password control then `loginFormControls` would be a collection of two controls.

<a name="accessingControlByName"></a>

## Accessing a control by name

There are several types of controls such as inputs, selects and textareas that each allow user input. Having retrieved the controls earlier we can loop over each control or retrieve a particular control by index or name. Retrieving a control by name is as follows:

	var usernameControl = loginControls.username;

<a name="inspectingControlValue"></a>

## Inspecting a controls value

Once we have a control we can interrogate its value:

	var usernameValue = usernameControl.value;

This is useful if you want to perform client side validation for example.

<dl>
	<dt><a name="ref0"></a>[0]</dt>
	<dd><a href="http://docs.oracle.com/cd/E19957-01/816-6408-10/">DOM 0 API</a></dd>
</dl>

