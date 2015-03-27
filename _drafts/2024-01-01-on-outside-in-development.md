---
layout: post
title:  "On Outside-in Development"
date:   2015-01-01 09:00:01
categories: UXDD
---

As a Front-end developer I find myself cosily positioned between UX design and Backend development, however, the wholistic picture is a little more complicated. In a dare I say it, Agile environment, the entire team are involved across several aspects of the project delivery process, which of course includes me. Why am I telling you this? Because I want to talk about Outside-in Development in terms of *people* as well as code. Whilst team members have different disciplines, we should all be working towards the single goal of *pleasing the user*.

If the user is *pleased*, then they love the product; consume it; buy the widget etc. And all software development should, for the most part, start with this perspective; the *Outside-in* perspective. Consider the opposite approach. If your solving problems buried in the underlying structures first, then it is *very* likely you and your team are solving problems that don't exist, which most certainly means you're not pleasing the user or anyone else for that matter.

**Note:** there are times Inside-out Development is useful and necessary, but I won't go into that here.

In a totally unreleastic, distilled, Waterfall version of an example development process, you could summarise the relationship as follows:

1. Business is the slave to the user
2. Product (and UX design) is slave to the Business
3. Test Automation is slave to the Product
4. Front-end is slave to the Test Automation (in the form of Acceptance tests perhaps)
5. Backend is slave to the Front-end
6. APIs are slave to the Backend

...and so it continues until you have struck the very center of the earth, where you will find the lowest level component that is bearly recogniseable as even a thing, and it has zero dependencies.

From an application perspective, the most outer edge starts with Front-end. Every problem that needs solving can be either achieved on the Front-end or pushed back down to the level below. If your not building a static website, then your building a dynamic website. And if your building a dynamic website, the HTML needs to contain content that resides elsewhere. This could be an API, database, file store, cookies, etc. I personally don't (need to) care too much where it comes from, it's not my concern. So we put this information in what industry lingo calls, a *View Model* - a Model that is appropriately designed to populate the View. I don't wish to have complex, business logic in my Views, which is why Logic-less templating has become popular, as an answer on Stackoverflow indicates [[0](#ref0)]:

> In the old JSP days, it was very common to have JSP files sprinkled with Java code, which made refactoring much harder, since you had your code scattered.

> If you prevent logic in templates by design (like mustache does), you will be obliged to put the logic elsewhere, so your templates will end up uncluttered.

> Another advantage is that you are forced to think in terms of separation of concerns: your logic code will have to do the data massaging before sending data to the UI. If you later switch your template for another (let's say you start using a different templating engine), the transition would be easy because you only had to implement UI details (since there's no logic on the template, remember).

I think Logic-less templating is too extreme and a bit of misnomer but without getting into the details, the point is the *design* of the solution has been driven from the Outside-in perspective. And if the View is not provided with an appropriate View Model, it is the Front-end developer's job to request the right thing from the layer below, which in this case would be the Backend developers.

But this should be happening at all levels. For example, if the Backend consumes an API, then that API might just provide a few micro-services, or wrappers around CRUD database calls. However, the requirement might need to build up a View that contains data from 3 separate micro-services. In this scenario it would be wise to demand more from the layer below and request an API end-point that aggregates 3 seperate calls (expensive and complex) into 1 (cheap and easy). Industry lingo refers to this as an *Orchestrator* [[1](#ref1)]. Again, this is another topic in itself [[2](#ref2)] but the point is, enforce the right separation of concerns, by leaning on the layer below, in order to deliver something that works better for you and ultimately the user.

In summary, Outside-in Development promotes a different mindset in which to solve a problem, whereby each layer of the system &amp; team serves the layer above it, which of course enforces the right separation of concerns. If the layer below is not serving you well, it is your responsibility to work out a better solution together.

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://stackoverflow.com/questions/3896730/whats-the-advantage-of-logic-less-template-such-as-mustache">Logic-less templating discussion</a></dd>
	<dt class="citation" id="ref1">[1]</dt>
	<dd><a href="http://thenextweb.com/dd/2013/12/17/future-api-design-orchestration-layer/">API Orchestration Layer</a></dd>
	<dt class="citation" id="ref2">[2]</dt>
	<dd><a href="http://martinfowler.com/bliki/CQRS.html">CQRS</a></dd>
</dl>

