---
layout: post
title:  "Technical wanking"
date:   2015-02-09 09:00:01
categories: js spas
image: thinking.jpg
tagline: When I went cutting-edge
citations:
 - title: The disadvantages of Single Page Application
   link: /articles/the-disadvantages-of-single-page-applications/
---

**I have a secret.** It’s something that I am embarrassed about. I participated in the art of Technical Wanking.

Technical Wanking is the practice of using cool and new technology because &mdash; well, it’s cool and new. Of course, technology should be chosen on its technical merit and technical merit alone.

I first heard of this terminology back in 2010 when I was building my first Single Page Application (SPA). We were using various “cutting-edge” libraries for DOM stuff and client-side templating, and we rolled our own client-side router.

The administration system we were building didn’t need to consider SEO, and was only to be used in Chrome (and so we only tested in Chrome). It was a CRUD application with a bunch of rich interactions.

I couldn’t wait to get my teeth into this, get the experience under my belt and propel my career accordingly. **How could anyone resist my talent, with all the new buzzwords littering my CV?**

At about 6 months into the project, my friend James Norton joined the team. I accompanied him on one of his fag breaks. It didn’t take long for us to get talking about the codebase. James was quite scathing and questioned the need and benefit of the architecture. He decided this was the time to call me a Technical Wanker (thanks James).

Fortunately, he didn’t just call me names. He went on to constructively explain how all the not-so-good aspects of the code and UX were self-induced. Here are a few of the problems we were solving:

1. **Writing a client-side Javascript router.** Our backend was written in Rails, which has a beautiful and perfectly reliable router. Let the browser handle the navigation.
2. **Writing a client-side Javascript view renderer to rebuild/render only parts of the DOM tree that changed.** Again Rails (just like most server-side frameworks) has you covered. The browser is an expert at parsing and rendering HTML. Script will never do it better.
3. **Writing client-side Javascript to massage and work with generic REST APIs.** Rails has a beautiful ORM and it’s standard practice to expose beautiful and fit-for-purpose view-models ready for consumption by server-side view templates.

There’s more but you get the gist.

James went on to explain the application could have been better had we used a traditional architecture, without all the inherent problems with SPAs [[0](#ref0)].

Whilst I was still quite chuffed with all the clever things I appeared to be doing, I couldn’t help but realise he was right. There was just no need.

I was solving self-induced problems to assist my team get their work done, as opposed to delivering a great and reliable experience for our users.

If we had avoided the lure of the coolness behind building a SPA, the end result would have been just as slick. Just as beautiful. Just as rich. And it would have taken half the time to build, with a far nicer split of responsibilities between the server and client, meaning we could iterate faster. Not to mention it would have had better performance and accessibility. All of which contributes to the overall UX.

**When did all this nonsense become standard practice?**

"Everyone’s building them", they say. The problem is, when everyone is doing something, that *something* is usually a bad idea. This follows in all walks of life &mdash; **most people eat McDonalds, but it doesn’t make it good for you.**

In a paid profession, it is your duty to serve the client and their users to the very best of your ability. Not to use tech in order to improve your CV etc.

I know many developers scattered across the industry, who are in the trenches having to use this cutting-edge tech that causes more problems than it solves.

In many ways I wish I hadn’t participated in Technical Wanking back then, but then again, I wouldn’t be where I am today having learnt many lessons about what not to do. All I will say is beware of the latest fad. **[Maybe it’s time to be boring](/articles//the-boring-front-end-developer/)?**
