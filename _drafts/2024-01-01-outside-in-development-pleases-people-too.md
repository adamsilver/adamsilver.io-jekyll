---
layout: post
title:  "Outside-in development pleases people too"
date:   2015-01-01 09:00:01
categories: UXDD
---

As a Front-end developer I find myself nicely positioned between UX and Backend development. But the wholistic picture is a little complicated. In a dare I say it, Agile environment, the entire team are involved across several aspects of the project delivery pipeline. Why am I telling you this? I am telling you all of this because I want to talk about Outside-in Development in terms of *people* as well as code. Members of the team have different disciplines but ultimately we should all be work towards the single goal of **pleasing the user**.

If the user is pleased, then they love the product, consume it, buy the widget etc. And all software development should for the most part, start with this perspective, the *outside-in* perspective. Consider the opposite approach. if your mind starts to solve problems buried in the underlying structures first, then it is *very* likely you and your team are solving problems that don't exist, which most certainly means you're not pleasing the user or anyone else for that matter.

In a totally unreleastic, distilled and linear version of the development pipeline you *could* represent the relationships as follows: Business is the slave to the user; Product (and UX) is slave to the Business; Test Automation is slave to the Product; Front-end is slave to the Test Automation (in the form of Acceptance tests perhaps); Back-end is slave to the Front-end; APIs are slave to the back-end, and so it continues until you have struck the very center of the earth where you will find the lowest level code that is bearly recogniseable as even a thing.

As a Front-end developer, I am a servant to the User Experience. The output from UX might be a visual design and some behavioural requirements. Ultimately, I take these requirements and I start to write HTML, CSS and JS to achieve the design. However, there are other requirements, accessibility, search engine optimisation, performance etc. Interestingly these all relate to pleasing the user, and yet I could decide to ignore these things, because it *might* be more time consuming. But I slave on, because if you remember, we are all working to please the user.

Similarly, as I endeavour to please the user, and as we are one big team trying to help each other I expect the Backend developers to serve the Front-end developers. If we continue the previous example, for me to populate my beautiful, lean, accessible, performant HTML with real content, I need to get that from the Backend. I don't really care where this data comes from (CMS, database, file store, cookies etc). I just want something I can use to populate my view template. Industry lingo calls this a view model. A model that is appropriately designed to populate the view. I don't wish to have complex logic in my views, which is why Logicless template engines have become popular as an answer on Stackoverflow indicates:

> In the old JSP days, it was very common to have JSP files sprinkled with Java code, which made refactoring much harder, since you had your code scattered.

> If you prevent logic in templates by design (like mustache does), you will be obliged to put the logic elsewhere, so your templates will end up uncluttered.

> Another advantage is that you are forced to think in terms of separation of concerns: your controller or logic code will have to do the data massaging before sending data to the UI. If you later switch your template for another (let's say you start using a different templating engine), the transition would be easy because you only had to implement UI details (since there's no logic on the template, remember).

Note: you *don't* have to put the massaging code in the controller, you might have another component to do this. But alas this could be another article all on it's own.

This same pattern keeps on going. The API developers serve the Backend developers and so on. For example, there might be some very simplistic decoupled CRUD APIs. Rather than make 3 separate API calls to help construct the appropriate view model, the Backend developer can and should request a more appropriate API call that wraps up 3 separate calls into 1.

## Summary

Now obviously in reality, this all kinda happens at the same time. Excluding the lowest level system component (no dependences) e.g. the call to the database that goes and gets some data or whatever, everyone else relies on each other. For example, given you have a story and you have (automated) the acceptance tests, then I, as a front-end dev can't pass those tests, but then I can't pass those tests without all the other layers doing their thing. Point isn't about team work or process, it's about the approach and mindset of what it is we do and why we do it.