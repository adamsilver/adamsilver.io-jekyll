---
layout: post
title:  "Technical wanking"
date:   2015-02-09 09:00:01
categories: js spas
description: Technical Wanking is the practice of using cool and new tech just for the sake of it. Are you technical wanking?
---

Technical wanking is the practice of using cool and new technology because &mdash; well &mdash; it's *cool* and *new*. We should, however, choose technology on its technical merit and technical merit alone.

I first heard the term in 2010 when I was building my first Single Page Application (SPA). We were using "cutting-edge" libraries for client-side templating and other bits; we also wrote our own client-side router.

The administration system we were building didn't need to consider SEO, and only needed to work in Chrome. The application contained various CRUD interfaces with a few rich interactions around it sich as drag and drop and sorting interfaces.

I couldn't wait to start, solve a bunch of new, modern problems and propel my career accordingly. How could anyone resist the new buzzwords littering my CV?

Six months into the project, James Norton, a friend and colleague joined my team. We got talking about the codebase and James was quite scathing about the SPA architecture we were using. He said that I was technically wanking (which was amusing and hurtful, ha).

James actually went on to constructively explain why all the not-so-goodaspects of the user experience born out of the architecture were self-induced and unnecessary. For example, we wrote:

- a client-side JavaScript router, when we already had a perfectly robust server-side router written in Rails. We should have just let the browser handle the browsing.
- a client-side JavaScript view renderer which only re-rendered the parts of the Document tree that changed. Again Rails (in our case) had a good view templates. We should have just let the browser parse and render the HTML which is it what it does best.
- a lot of code that adapted generic REST API responses into something that was [appropropriate for the view](/articles/developing-templates-using-an-outside-in-approach). Once again, Rails, made this easy with a well designed ORM and plenty of utility functions to help server-side view templates get what they need.

While I was chuffed with all the clever solutions I had created, if we had used a traditional (often seen as archaic) the application would have worked a lot better without all the [problems with SPAs](/articles/the-disadvantages-of-single-page-applications/). I was solving self-induced problems to help my team get their work done, as opposed to deliverijng robust and useful experiences for users.

If we avoided the lure of SPAs, the result would have been just as slick. Just as beautiful. Just as rich. And it would have taken half the time to build, with a far nicer split of responsibilities between the server and client, meaning we could iterate faster. Not to mention it would have had better performance and accessibility. All of which contributes to the [overall UX]({% post_url 2016-05-17-hello-ux-designer %}).

## Don't mindlessly follow the crowd

“Everyone's building them,” they say. But when everyone's doing something, that *something* is usually a bad idea. For example, most people eat McDonalds, but it doesn't make it good for you.

We're paid to do this. We're meant to be professionals. It's our duty to do the right thing for users and the client. Not to make decisions solely to improve our CV. That's developer driven design.

Sometimes it's hard to push back, but we can only learn and do our best.
