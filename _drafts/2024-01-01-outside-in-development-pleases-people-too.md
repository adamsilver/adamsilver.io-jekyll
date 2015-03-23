---
layout: post
title:  "Outside-in development pleases people too"
date:   2015-01-01 09:00:01
categories: UXDD
---

As a front-end developer I tend to work very closely with UX in order to inform them about the web as a platform *and* to use both its constraints and its powers to the users advantage. But I also work very closely with Backend Developers, designing and implementing the technical contracts between our disciplines. I also work with Automation Engineers writing acceptance tests and making them pass.

But why am I telling you all of this? I am telling you all of this because I want to talk about Outside-in Development in terms of *people* as well as code. Members of the dev team have different responsibilitis but ultimately we all work towards one thing: **Pleasing the user**

If the user is pleased, then they tend to love the product, consume it, buy the widget etc. And all software development should start from this perspective, the *outside-in* perspective. Consider the opposite approach: Inside-out software development. If your mind starts to solve problems buried in the underlying structures first, then it is *very* likely you and your team are solving problems that don't exist, which most certainly means you're not pleasing the user or anyone else for that matter.

In a distilled, unrealistic, linear version of the development pipeline in terms of people, you *could* represent the relationship as follows: Business is the slave to the user; Product (and UX) is slave to the Business; Test Automation is slave to the Product; Front-end is slave to the Test Automation (in the form of Acceptance tests perhaps); Back-end is slave to the Front-end; APIs are slave to the back-end, and so it continues until you have struck the very center of the earth where you will find the lowest level code that is bearly recogniseable as even a thing.

## Front-end as the servants to the UX design

I am a servant to the User Experience. The output from UX might be a visual design and some behavioural requirements. Ultimately, I take these requirements and I start to write HTML, CSS and JS to achieve the design. However, there are other requirements, accessibility, search engine optimisation, performance etc. Interestingly these all relate to pleasing the user, and yet I could decide to ignore these things, because it *might* be more time consuming etc, but I don't, because I am working to please the user remember. So, I jump through the extra hoops, and produce something that is as good as possible for the user.

## Back-end as the servants to the Front-end

Similarly, as I have been jumping through all these hoops to please the user, I would expect Backend to serve the Front-end. *One* technical Front-end requirement is likely to be the view model. The model that is appropriate for the view, to populate the HTML for our end user. So I will define this because this makes my job easier and enforces a healthy separation of concerns and the single responsibility principle. As a Front-end developer I really shouldn't have to care where bits of data and content reside. I just know that I need it to populate the view template for our users. And because some templating engines *can* do silly non-view things (cough JSP, cough), you will find that development teams *do* silly things. Which is why Logicless templates have become popular as an answer on Stackoverflow states:

> In the old JSP days, it was very common to have JSP files sprinkled with Java code, which made refactoring much harder, since you had your code scattered.

> If you prevent logic in templates by design (like mustache does), you will be obliged to put the logic elsewhere, so your templates will end up uncluttered.

> Another advantage is that you are forced to think in terms of separation of concerns: your controller or logic code will have to do the data massaging before sending data to the UI. If you later switch your template for another (let's say you start using a different templating engine), the transition would be easy because you only had to implement UI details (since there's no logic on the template, remember).

In practical terms this is the result you end up with:

	<p>{{Format(model.basketSummaryMessage, model.itemCount)}}</p>

Vs.

	<p>{{model.basketSummarymessage}}</p>

Much better. But the seperation of concerns, outside-in development mentality doesn't stop here. The same can be done from the backend perspective. Rather than make 3 separate API calls to help construct the appropriate view model to give to the view, the backend developer can request a more appropriate API call that combines 3 separate calls into 1 as a facade around the 3 calls etc. Which simplifies the backend logic.

## todo

Now obviously in reality, this all kinda happens at the same time. Excluding the lowest level system component (no dependences) e.g. the call to the database that goes and gets some data or whatever, everyone else relies on each other. For example, given you have a story and you have (automated) the acceptance tests, then I, as a front-end dev can't pass those tests, but then I can't pass those tests without all the other layers doing their thing. Point isn't about team work or process, it's about the approach and mindset of what it is we do and why we do it.

## advantages

Moving into a presenter class means you can unit test.
Templates are piss poor replacements for programming logic.
Maintaince is a nightmare.

## All answers here

http://stackoverflow.com/questions/3896730/whats-the-advantage-of-logic-less-template-such-as-mustache