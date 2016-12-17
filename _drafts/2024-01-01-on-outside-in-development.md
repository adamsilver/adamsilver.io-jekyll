---
layout: post
title: On Outside-in Development
date: 2015-01-01 09:00:01
categories: process thinking
---

I want to talk about Outside-in Development. It interestingly has a strong connection with User Centered Design. Whilst a team is made up of several different disciplines, everyone in that team should be working toward the single goal of pleasing the user.

If we can please the user, then they probably like the product; consume it; buy the widget; come back for more. And all products, software or otherwise should&mdash;for the most part at least&mdash;start with this perspective. The Outside-in perspective.

Consider the opposite approach. If you get to work on designing and building internal structures first, then you massively increase the chance of solving problems that aren't even problems. They probably don't exist yet. If you're spending time here, you're most certainly not pleasing the user.

Outside-in development isn't always possible. Sometimes Inside-out development is usefull and necessary but that's a topic for another time.

Going back to the team for a moment. You could summarise each person as a servant to another.

- Product supports User;
- Test Automation supports the Product;
- Front-end supports Test Automation;
- Back-end supports Front-end; and
- Databases and 3rd Party APIs support Back-end

In reality it's more nuanced than this. Because everyone is responsible for UX. But you can see the point. Ultimately it all leads back to the user. Like it should.

<!--Every problem that can be simply pushed back to the level below should be.
Derek Featherstone said, “If you can solve the problem with a simpler solution lower in the stack, you should-->

In terms of application code, the most outer edge is Front-end. If you're building a dynamic website, then HTML needs to contain content that originates from somewhere else. This could be an API, database, file store, cookies etc. Or it has logic that depends on the state of this data.

Regardless, if you're a front-end developer you shouldn't necessarily concern yourself about the finer details of these other layers. Obviously knowing about them helps but I mean to the extent that you take on the responsibility in some form or other in the *Front-end*. This is something I explain in "Developing better templates with an outside-in approach".

In that article I explain that template logic should be just that, and anything more complex should be abstracted away into a View Model. A View Model is something that resides in the back-end.

This principle should be applied to all levels of the system. For example, let's say the back-end builds up a View Model from 3 seperate API calls. If at all possible, you would be wise to demand more from the API developers and request that 3 separate calls (expensive and complex) are converted into 1 call (cheap and easy).

The industry calls this an Orchestration Layer. The reason APIs are designed so generically in the first place is so that once they are written the developers don't need to touch them again. But this is short-sighted.

Whilst we all want to provide an API that doesn't need updating it's an endeavour that is either impossible or causes much trouble. If you're going to do this, you might as well creat an API that can read from a database and except an SQL query. This way it's one end-point with a million different possibilities. Job done.

I have brushed over these topics and again things are never black and white. But the point is to try and enforce the right separation of concerns. Too often separation of concerns are determined by the lower levels of the system and this causes a lot of trouble for the outer layers.

Every layer leads to the User. Improve each layer, you'll ultimately improve the User Experience. This might come in the form of:

- speed of application (if right layer doing the right thing then faster): better to expose dedicated fast api call than have to make 3
- easier to maintain: quicker to release new features/improvements
- less bugs: if each layer is as simple as possible then less bugs. as per view model.

Ultimately, Outside-in Development is a mindset in which to solve a problem. If the layer below is not serving you well, it's your responsiblility to work out a better solution together.

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://stackoverflow.com/questions/3896730/whats-the-advantage-of-logic-less-template-such-as-mustache">Logic-less templating discussion</a></dd>
	<dt class="citation" id="ref1">[1]</dt>
	<dd><a href="http://thenextweb.com/dd/2013/12/17/future-api-design-orchestration-layer/">API Orchestration Layer</a></dd>
	<dt class="citation" id="ref2">[2]</dt>
	<dd><a href="http://martinfowler.com/bliki/CQRS.html">CQRS</a></dd>
</dl>

> In the old JSP days, it was very common to have JSP files sprinkled with Java code, which made refactoring much harder, since you had your code scattered.

> If you prevent logic in templates by design (like mustache does), you will be obliged to put the logic elsewhere, so your templates will end up uncluttered.

> Another advantage is that you are forced to think in terms of separation of concerns: your logic code will have to do the data massaging before sending data to the UI. If you later switch your template for another (let's say you start using a different templating engine), the transition would be easy because you only had to implement UI details (since there's no logic on the template, remember).

