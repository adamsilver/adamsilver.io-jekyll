---
layout: post
title:  "Outside-in software development"
date:   2015-01-01 09:00:01
categories: UXDD
---

As a front-end developer, in some respects I fit nicely in-between and across UX/Product and the backend developers. However, in reality, the full picture is slightly more complex; I tend to work very closely with UX in order to inform them about the web as a platform and to use both its constraints and its powers to the users advantage. But I also work very closely with backend developers, signing off technical/API contracts between our worlds and testing engineers getting acceptance tests defined and passing etc. There's more to all this as you can imagine, but you can read more about that elsewhere.

But why am I telling you all of this? I am telling you all of this because I want to talk about outside-in software development in terms of people as well as code. People have different responsibilitis and remits but ultimately we all work towards one thing: **Pleasing the user**

If the user is pleased, then they tend to love the product, consume it, buy the widget etc. And all software development should start from this perspective, the *outside* perspective. If you were to work the opposite way, the *inside-out* way, it is likely you and your team are solving problems that don't exist, let alone pleasing the end-user. So we agree at this point that outside-in is the right approach, yes? Good. Let's continue.

If we try and distill this down in terms of why we, the individuals within the SDT, do what we do it can be described as follows: Business is the slave to the user, Product (and UX) is slave to the Business, Test Automation is slave to the Product, Front-end is slave to the Test Automation (in the form of Acceptance tests), Back-end is slave to the front-end, APIs are slave to the back-end, etc and so on.

The first technical discussion nicely takes place in my world, the front-end developer world. That's where the important stuff is! Just kidding. And so the front-end world starts with the HTML, which leads is very quickly to the view. What generates the view? The view template. What provides the view with the information it requires to render? The *view-model*. And here we can begin the outside-in approach to development. The view should not be concerned with how data is retrieved or where it comes from. Without going into too much detail here, you can see that the front-end developer must define the requirements of how the view model should be architected.  Not the other way around. I can't tell you the amount of times I have to struggle to work with view models that aren't fit for purpose and this just makes the template fugly and unmaintainable. The message has always been from backend developers don't wish to do the right thing as it's more effort. They would rather chuck a model at the view template and let us front-end devs struggle. You might argue whats the difference between putting the logic in the view directly or in another abstraction. It's hard to explain, but effectively, the view should be given what it needs and nothing more. Push the rest back a step. 

Same goes from the backend perspective. Rather than make 3 separate API calls to help construct the appropriate view model to give to the view, the backend engineer can request the appropriate API itself combines the 3 separate calls into one as a facade around the 3 calls etc. Either way, it's the appropriate system component taking the right responsibility to do its job.




## Summary

Now obviously in reality, this all kinda happens at the same time. Excluding the lowest level system component (no dependences) e.g. the call to the database that goes and gets some data or whatever, everyone else relies on each other. For example, given you have a story and you have (automated) the acceptance tests, then I, as a front-end dev can't pass those tests, but then I can't pass those tests without all the other layers doing their thing. Point isn't about team work or process, it's about the approach and mindset of what it is we do and why we do it.

For example, I have found myself having to deal with god-awful view templates because backend developers aren't willing to provide beautiful, fit for purpose view models for me to integrate into. I have witnessed this also by backend developes having to do more massaging of API data than should be necessary. Instead they should have pushed the requirement down to API teams.

Ultimately, the software development team includes everyone, even the user, when the Product Owner acts as such. Without the user we have nothing, and with the user we have a requirement, and with that requirement it drives the design of each layer of development. Etc

## Citations

http://programmers.stackexchange.com
/questions/166409/tdd-outside-in-vs-inside-out