---
layout: post
title:  "DOM Scripting forms"
date:   2014-01-02 09:00:59
categories: forms
---

The HTML DOM has dedicated APIs for retrieving and manipulating forms and controls. It’s always important to use the right API for the job and in this case the DOM 0 API [[0](#ref0)] Forms collection is appropriate but unfortunately often forgotten.

## Contents

3. [Accessing a form](#accessingForm)
4. [Accessing form controls](#accessingControls)
6. [Accessing form control by name](#accessingControlByName)
8. [Inspecting a controls value](#inspectingControlValue)

<a name="accessingForm"></a>

## Accessing a form

To access a form:

	var loginForm = document.forms.login;

<a name="accessingControls"></a>

## Accessing form controls

Once we have the form we can retrieve all the controls in a form:

	var loginControls = loginForm.elements;

If the login form contained the typical username and password controls then `loginFormControls` would be a collection of two controls (and a submit button if you had one of those in the form).

<a name="accessingControlByName"></a>

## Accessing a control by name


There are several types of controls such as inputs, selects and textareas that each allow user input. Having retrieved the controls earlier we can loop over each control or retrieve a particular control by index or name.

Retrieving a control with the name “username”:

	var usernameControl = loginControls.username;

<a name="inspectingControlValue"></a>

## Inspecting a controls value

Once we have a control we can interrogate the value:

	var usernameValue = usernameControl.value;

This is useful if you want to perform client side validation.

## Summary

Forms have been around on the web for a very long time and the APIs discussed in this article are reliable, convenient and concise. You don’t need a library to script forms. Common libraries will advise using selector engines which is ill advised in general and definitely inappropriate for these requirements.

<a name="ref0"></a>[0]:[DOM 0 API](http://docs.oracle.com/cd/E19957-01/816-6408-10/)

