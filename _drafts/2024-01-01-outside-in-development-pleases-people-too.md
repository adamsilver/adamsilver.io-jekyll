---
layout: post
title:  "Outside-in development pleases people too"
date:   2015-01-01 09:00:01
categories: UXDD
---

As a Front-end developer I find myself nicely positioned between UX and Backend development. But the wholistic picture is a little complicated. In a dare I say it, Agile environment, the entire team are involved across several aspects of the project delivery process. Why am I telling you this? I am telling you all of this because I want to talk about Outside-in Development in terms of *people* as well as code. Members of the team have different disciplines but ultimately we should all be work towards the single goal of **pleasing the user**.

If the user is pleased, then they love the product, consume it, buy the widget etc. And all software development should for the most part, start with this perspective, the *outside-in* perspective. Consider the opposite approach. if your mind starts to solve problems buried in the underlying structures first, then it is *very* likely you and your team are solving problems that don't exist, which most certainly means you're not pleasing the user or anyone else for that matter.

In a totally unreleastic, distilled Waterfall version of the development process you *could* represent the relationships as follows: Business is the slave to the user; Product/UX is slave to the Business; Test Automation is slave to the Product; Front-end is slave to the Test Automation (in the form of Acceptance tests perhaps); Back-end is slave to the Front-end; APIs are slave to the back-end, and so it continues until you have struck the very center of the earth where you will find the lowest level code that is bearly recogniseable as even a thing.

From a code perspective, the very edge of outside-in development starts with Front-end. Every problem that should be solved can be either achieved on the Front-end or pushed back appropriately down to the level below. If your not building a static website, then your building a dynamic website. And if your building a dynamic website than the HTML needs to contain content that resides elsewhere. This could be an API, Database, file store or cookies etc. I personally don't (need to) care too much where it comes from. So we put this content in the what the industry calls a *view model*. A model that is appropriately designed to populate the view. I don't wish to have complex logic in my views, which is why Logicless template engines have become popular, as an answer on Stackoverflow indicates:

> In the old JSP days, it was very common to have JSP files sprinkled with Java code, which made refactoring much harder, since you had your code scattered.

> If you prevent logic in templates by design (like mustache does), you will be obliged to put the logic elsewhere, so your templates will end up uncluttered.

> Another advantage is that you are forced to think in terms of separation of concerns: your controller or logic code will have to do the data massaging before sending data to the UI. If you later switch your template for another (let's say you start using a different templating engine), the transition would be easy because you only had to implement UI details (since there's no logic on the template, remember).

Note: you *don't* have to put the massaging code in the controller, you might have another component to do this. But alas this could be another article all on it's own.

But this doesn't (and shouldn't) just happen between the Front-end and Backend developers. For example, if the Backend get their data from an API, that API might just be a few basic wrappers around CRUD database calls. In it's most basic design it might need 3 separate API calls to collect all the data to render a view to our user. Rather than make 3 separate API calls (expensive) to help construct the appropriate view model, the Backend developer can and should request a more appropriate API call that wraps up 3 into 1.

## Summary

Now obviously in reality, this all kinda happens at the same time. Excluding the lowest level system component (no dependences) e.g. the call to the database that goes and gets some data or whatever, everyone else relies on each other. For example, given you have a story and you have (automated) the acceptance tests, then I, as a front-end dev can't pass those tests, but then I can't pass those tests without all the other layers doing their thing. Point isn't about team work or process, it's about the approach and mindset of what it is we do and why we do it.