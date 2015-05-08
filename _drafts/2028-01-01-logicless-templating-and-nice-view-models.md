---
layout: post
title:  "Designing better templates"
date:   2026-01-01 09:00:01
categories: ???
---

* Outside-in
* Logicless templating
* View models

I am big proponent of Outside-in Development [0] and when building a web application, the most outer edge starts with the View. Starting with the question of how we want View to look and behave, we can then construct the template and everything else that goes with it. However, many Front-end developers, including myself have had less than ideal experiences, having to work with overly complex templates, normally for very similar reasons. This article discusses the problems, why they are problems, and how to avoid those problems in the future.

As a Front-end developer, I am not too concerned about the finer details of those layers, so that complexity is abstracted away nicely, in what the industry calls a *View Model* - a Model that is appropriately designed to populate the View. I don't wish to have complex, business logic in my Views, which is why Logic-less templating has become popular, as an answer on Stackoverflow indicates [[0](#ref0)]:

> In the old JSP days, it was very common to have JSP files sprinkled with Java code, which made refactoring much harder, since you had your code scattered.

> If you prevent logic in templates by design (like mustache does), you will be obliged to put the logic elsewhere, so your templates will end up uncluttered.

> Another advantage is that you are forced to think in terms of separation of concerns: your logic code will have to do the data massaging before sending data to the UI. If you later switch your template for another (let's say you start using a different templating engine), the transition would be easy because you only had to implement UI details (since there's no logic on the template, remember).

I personally think Logic-less templating is too extreme, and a bit of misnomer, but without getting into the details, the point is the *design* of the solution has been driven from the Outside-in. And if the View is not provided with an appropriate View Model, it is the Front-end developer's responsibility to request the right thing from the layer below, which in this case would be the Backend developers.

But this should be happening at all levels. Consider a situation where the Backend consumes an API. If that API is simply a bunch of micro-services around CRUD database calls, then it is likely not fit-for-purpose, in helping the Backend provide an appropriate View Model. It might be a particular View contains data that ultimately comes from 3 separate API calls.

In this scenario it would be wise to demand more from the layer below and request an end-point that aggregates 3 seperate calls (expensive and complex) into 1 (cheap and easy). Industry lingo refers to this as an *Orchestrator* [[1](#ref1)]. Again, this is another topic in itself [[2](#ref2)] but the point is, enforce the right separation of concerns, by leaning on the layer below, in order to deliver something that works better for you and ultimately the user.

In summary, Outside-in Development promotes a different mindset in which to solve a problem, whereby each layer of the system &amp; team serves the layer above it, which of course enforces the right separation of concerns. If the layer below is not serving you well, it is your responsibility to work out a better solution together.

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://stackoverflow.com/questions/3896730/whats-the-advantage-of-logic-less-template-such-as-mustache">Logic-less templating discussion</a></dd>
	<dt class="citation" id="ref1">[1]</dt>
	<dd><a href="http://thenextweb.com/dd/2013/12/17/future-api-design-orchestration-layer/">API Orchestration Layer</a></dd>
	<dt class="citation" id="ref2">[2]</dt>
	<dd><a href="http://martinfowler.com/bliki/CQRS.html">CQRS</a></dd>
</dl>