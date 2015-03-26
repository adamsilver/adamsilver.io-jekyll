---
layout: post
title:  "Outside-in development pleases people too"
date:   2015-01-01 09:00:01
categories: UXDD
---

As a Front-end developer I find myself cosily positioned between UX and Backend development, however, the wholistic picture is a little more complicated. In a dare I say it, Agile environment, the entire team are involved across several aspects of the project delivery process, which of course includes me. Why am I telling you this? Because I want to talk about Outside-in Development in terms of *people* as well as code. Whilst team members have different disciplines, we should all be working towards the single goal of **pleasing the user**.

If the user is *pleased*, then they love the product, consume it, buy the widget etc. And all software development should for the most part, start with this perspective, the *Outside-in* perspective. Consider the opposite approach. if your solving problems buried in the underlying structures first, then it is *very* likely you and your team are solving problems that don't exist, which most certainly means you're not pleasing the user or anyone else for that matter.

In a totally unreleastic, distilled, Waterfall version of an example development process, you could summarise the relationship as follows:

1. Business is the slave to the user
2. Product (and UX design) is slave to the Business
3. Test Automation is slave to the Product
4. Front-end is slave to the Test Automation (in the form of Acceptance tests perhaps)
5. Backend is slave to the Front-end
6. APIs are slave to the back-end

...and so it continues until you have struck the very center of the earth, where you will find the lowest level code that is bearly recogniseable as even a thing, and it has zero dependencies.

From an application perspective, the most outer edge starts with Front-end. Every problem that should be solved can be either achieved on the Front-end or pushed back down to the level below. If your not building a static website, then your building a dynamic website. And if your building a dynamic website,  the HTML needs to contain content that resides elsewhere. This could be an API, database, file store, cookies, etc. I personally don't (need to) care too much where it comes from, it's not my concern. So we put this information in what industry lingo calls, a *view model* - a model that is appropriately designed to populate the view. I don't wish to have complex logic in my views, which is why Logic-less templating has become popular, as an answer on Stackoverflow indicates:

> In the old JSP days, it was very common to have JSP files sprinkled with Java code, which made refactoring much harder, since you had your code scattered.

> If you prevent logic in templates by design (like mustache does), you will be obliged to put the logic elsewhere, so your templates will end up uncluttered.

> Another advantage is that you are forced to think in terms of separation of concerns: your logic code will have to do the data massaging before sending data to the UI. If you later switch your template for another (let's say you start using a different templating engine), the transition would be easy because you only had to implement UI details (since there's no logic on the template, remember).

Without getting into the details of this particular topic, the point is the *design* of the solution has been driven from the Outside-in perspective. And if the view is not provided with an appropriate view model, it is the Front-end developer's job to request the right thing from the layer below, which in this case would be the Backend developers.

But this doesn't (and shouldn't) just happen between the Front-end and Backend developers. For example, if the Backend gets data from an API, that API might just be a few micro services, or wrappers around CRUD database calls. In its most basic design it might need 3 separate API calls to aggregate the data to render a view to the user. Rather than make 3 separate API calls (which is expensive) to help construct the appropriate view model, the Backend developer can and should request a more appropriate API call that wraps up 3 into 1 from the layer below. In this example the API team.

The point is, Outside-in development promotes a different mindset in which to solve the problem, whereby each layer of the system &amp; team serves the layer above it. This enforces the right separation of concerns. If the layer below is not serving you well, tell them and get that rectified together so that you can each do your job better and be happier for it.