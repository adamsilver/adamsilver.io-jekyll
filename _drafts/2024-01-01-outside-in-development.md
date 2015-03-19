---
layout: post
title:  "Outside-in software development"
date:   2015-01-01 09:00:01
categories: UXDD
---

As a front-end developer, in some respects I fit nicely in-between UX and the backend developers. However, in reality, the full picture is more complex; I tend to work very closely with UX in order to inform them about the web as a platform and to use both its constraints and its powers to the users advantage. But I also work very closely with backend developers, designing and implementing the technical contracts between our disciplines and automation engineers writing acceptance tests and making them go green.

But why am I telling you all of this? I am telling you all of this because I want to talk about outside-in software development in terms of *people* as well as code. Members of the dev team have different responsibilitis and remits but ultimately we all work towards one thing: **Pleasing the user**

If the user is pleased, then they tend to love the product, consume it, buy the widget etc. And all software development should start from this perspective, the *outside-in* perspective. If you were to work the opposite way, the *inside-out* way, it is likely you and your team are solving problems that don't exist, let alone pleasing the end-user! So, we agree at this point that outside-in is the right approach, yes? Good. Let's continue.

If we try and distill this down in terms of why we we do the things we do to deliver software it can kind of be summarised as follows: Business is the slave to the user; Product (and UX) is slave to the Business; Test Automation is slave to the Product; Front-end is slave to the Test Automation (in the form of Acceptance tests perhaps); Back-end is slave to the Front-end; APIs are slave to the back-end, and so it continues until you have struck the very center of the earth where you will find the lowest level code that is bearly recogniseable as even a thing.

If we now apply the same outside-in logic to the technical application architecture, we quickly arrive at where the front-end meets the backend which is, of course the view. We front-end developers own the view and the HTML it generates (and the JS and CSS in which the HTML references). So we should be defining a fit-for-purpose view model in which to populate the view. In terms of HTML this is usally a straightforward task. You look at it from the outside, at the visual design, and make a note of the various pieces that you will need to make your view template logic as lean as possible. It doesn't matter to the view template, where this data comes from, be it APIs, databases, CMS entrys, static file, or cookies. The view template is not concerned by this. This is why logic-less templates have become all the rage. This Stackoverflow answer explains this well:

> In the old JSP days, it was very common to have JSP files sprinkled with Java code, which made refactoring much harder, since you had your code scattered.

> If you prevent logic in templates by design (like mustache does), you will be obliged to put the logic elsewhere, so your templates will end up uncluttered.

> Another advantage is that you are forced to think in terms of separation of concerns: your controller or logic code will have to do the data massaging before sending data to the UI. If you later switch your template for another (let's say you start using a different templating engine), the transition would be easy because you only had to implement UI details (since there's no logic on the template, remember).

Templates aren't designed to do complex things. You shouldn't have to, for example construct "You have 3 items in your basket" within the template via separate properties (psuedo code):

	model.basketSummaryMessage = "You have {} items in your basket";
	model.itemCount = 3;

And then have to format the string in the template (again psuedo code):
	
	<p>{{Format(model.basketSummaryMessage, model.itemCount)}}</p>

Instead this should really be:

	model.basketSummaryMessage = "You have 3 items in your basket";

And then a much simplified template:

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