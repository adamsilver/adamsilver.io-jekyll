---
layout: post
title:  "Technical wanking"
date:   2015-01-01 09:00:01
categories: web
---

Technical Wanking is about using cool new technology because, well, it's cool new technology.  Unfortunately, I didn't coin the term myself - that has to be credited to James Norton, a talented Front-end Developer with a tendency to tell it how it is. Of course technology should be chosen on its technical merit and technical merit alone, let me explain.

I first heard the term a good few years back when I was building my first Single Page Application (SPA) and I had that warm, fuzzy feeling. I was a using various libraries: one for general purpose DOM stuff, one for UI components e.g. drag and drop and one for client-side templating. We also rolled our own client-side router. We only tested in Chrome, it was an administrative application and it didn't matter as much as a consumer facing site. It didn't need SEO. It was a CRUD applicaton with a few rich interactions. I couldn't wait to get my teeth into this, get the experience under my belt and propel my career accordingly. How could anyone resist my talent, with all the new buzzwords littering my CV?

At about 6 months into the project, it was going quite well and around this time, James joined the team. I accompanied him on one of his first fag breaks. He was a needy man, and required my company for the majority of his fag breaks. Besides the smoke itself, I was much obliged. In his standard manner, he questioned the SPA architecture. He called me a Technical Wanker! I laughed as he went on to explain how all the not-so-good aspects of the code and User Experience (UX) were self-induced. To give *some* insight as to what he was getting at, this included:

1. Writing a client-side router. Our backend was written in Rails, which has a beautiful router. Let the browser handle the navigation.

2. Writing a view engine to rebuild/render parts of the page that changed on the client. Again Rails has you covered to create HTML. The browser is an expert at parsing and rendering HTML. Script will never do it better.

3. Having to massage and work with generic REST APIs on the client. Rails has a lovely ORM and is used to exposing beautiful fit-for-purpose viewModels for consumption in server-side view templates.

4. Cross domain issues and more.

He went on to say that we could have had a very fast application using a thin-client architecture, without all the inherent floors in SPAs [[0](#ref0)]. Whilst I was still quite chuffed with all the clever things I appeared to be doing, I couldn't help but realise he was right. There was just no need. I was solving self-induced problems and nothing else. The application would have been just as slick. Just as beautiful. Just as rich. And it would have taken half the time to build, with a far nicer split of responsibilites between the server and client. Not to mention it would have had better performance, better accessibility and a better UX.

During the rest of the project, I kept a close eye on any problems that arose and I mentally put them into a bucket of "self induced" and "other". I mentally went back in-time to put the my previous experiences into those same buckets. I was now conscious again. When did all this nonsense become standard practice? Everyone's building these things, everyones writing about these things! The problem I have found, in all walks of life may I add, is that if everyone is doing it, it's usually stupid. Most people eat McDonalds, but it doesn't make it good for you. In a paid profession, it is your duty not to do stupid things and to serve the client and end-user to the very best of your ability. Unfortunately, it's a bit of an epidemic in the industry and is a close relative of Mortgage Driven Development [[xx]()], so watch out for that one too.

I wish I hadn't become a Technical Wanker back then. But I guess if I hadn't I wouldn't have learnt so much about what *not* to do in future. Having realised my mistakes and not wanting to be called a Technical Wanker again, I have since, always questioned cool, new technology with deep analysis and critique. It has, so far, served me and my end-users very well. I also have fun calling fellow developers Technical Wankers, without being hypocritical. Thankfully, I usually get a laugh and a positive, inquisitive reply.