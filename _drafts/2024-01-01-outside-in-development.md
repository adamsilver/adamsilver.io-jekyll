---
layout: post
title:  "Outside-in software development"
date:   2015-01-01 09:00:01
categories: UXDD
---

## Intro

* As a front-end developer I sit in-between UX/product and back-end developers.

* This means that I do what I do because the user requires the feature.

* The backend developers do what they do because it is a requirement of the front-end developer, which in turn is because the user requires the feature. i.e. product defined the requirement. For example, the backend developer will provide the view template with an appropriate fit-for-purpose view model because that is how the page is designed.

* Depending on architecture the backend developers will push their requirements back to a DB engineer or an API engineer and so forth.

## Example

* Take Amazon, with a shopping basket page. Elaborate on the requirement and how it drives the design.

## Summary

* Business is the slave to the user
* UX/Product is slave to the Business
* Test Automation is slave to the UX/Product
* Front-end is slave to the Test Automation (Acceptance tests)
* Back-end is slave to the front-end
* APIs are slave to the back-end
* Etc

Now obviously in reality, this all kinda happens at the same time. Excluding the lowest level system component (no dependences) e.g. the call to the database that goes and gets some data or whatever, everyone else relies on each other. For example, given you have a story and you have (automated) the acceptance tests, then I, as a front-end dev can't pass those tests, but then I can't pass those tests without all the other layers doing their thing. Point isn't about team work or process, it's about the approach and mindset of what it is we do and why we do it.

For example, I have found myself having to deal with god-awful view templates because backend developers aren't willing to provide beautiful, fit for purpose view models for me to integrate into. I have witnessed this also by backend developes having to do more massaging of API data than should be necessary. Instead they should have pushed the requirement down to API teams.

Ultimately, the software development team includes everyone, even the user, when the Product Owner acts as such. Without the user we have nothing, and with the user we have a requirement, and with that requirement it drives the design of each layer of development. Etc

## Citations

http://programmers.stackexchange.com
/questions/166409/tdd-outside-in-vs-inside-out