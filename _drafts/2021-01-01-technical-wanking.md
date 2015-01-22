---
layout: post
title:  "Technical wanking"
date:   2015-01-01 09:00:01
categories: web
---

Technical Wanking is about using cool, new technology because well, it's cool, new technology. Of course technology should be chosen on its technical merit and technical merit alone. Unfortunately, I didn't coin the term myself. That has to be credited to James Norton, a talented Front-end Developer with a tendency to tell it how it is.

I first heard the term a good few years back when I was building my first Single Page Application (SPA) and I had that warm, fuzzy feeling. I was a using cool libraries; one general purpose DOM library, one UI component library and a templating library. We also rolled our own client-side router. We only tested in Chrome, it was a backend system and it didn't matter like a consumer facing site. It didn't need SEO. It was a CRUD applicaton with a few rich interactions. I couldn't wait to get my teeth into this, get the experience under my belt and propel my career accordingly. How could anyone  resist my talent, with all the new buzzwords littering my CV?

At about 6 months into the project, it was going pretty smoothly. James joined the team around this time. And I accompanied him on one his first fag breaks. He was a needy man, and required my company for the majority of his fag breaks. Besides the smoke itself, I was much obliged. In his usual blunt way, he questioned the SPA architecture. He explained that I was a Technical Wanker. I laughed as he went on to explain how all the not-so-good aspects of the code were self induced. To give *some* insight as to what he was getting at, this included:

1. Writing a client-side router. Our backend was written in Rails, which has a beautiful router. No need to recreate one on the client.

2. Writing a view engine to rebuild/render parts of the page that changed. This might sound simple but it wasn't; take my word it for the moment. Either way Rails (like any other server-side framework) has you covered.

3. Having to massage and work with generic REST APIs on the client. Rails has a lovely ORM and is used to exposing beautiful fit-for-purpose viewModels for consumption in a traditional server-side view template.

4. Cross domain issues and more.

He went on to say that we could have had a very fast CRUD application using a traditional thin client without all the inherent floors in SPAs [[0](#ref0)]. Whilst I was still delighted at all the clever things I appeared to be doing, I couldn't help but realise he was right. There was just no need. I was solving self-induced problems and nothing else. The application would have been just as slick. Just as beautiful. Just as rich. And it would have taken half the time to build, with a far nicer split of responsibilites between server and client. Not to mention it would have had better performance, better accessibility and a better User Experience.

During the rest of the project, I kept a close eye on any problems that arose and I mentally put them into a bucket of "self induced" and "other". I mentally went back in-time to put the other overcome problems into those buckets. At least I was now conscious again. When did all this nonsense become the done thing? Everyone's building these things, everyones writing about these things! The problem I have found, in all walks of life may I add, is that if everyone is doing it, it's usually stupid. Just a few examples of this in the wild:

* Most people eat McDonalds
* Most people drink too much Coke
* Most people consume too much alcohol
* Most people sunbathe for way too long
* Most people get into ridiculous amounts of debt despite there high levels of income.
* Most people don't get enough exercise
* Most people don't persue their passions
* and so on.

The differnce of course is that when people do the above they normally affect themselves (and a perhaps minimal others). In the paid, professional world of web development, it is your duty not to do stupid things and to serve the client and end-user.

Why rely on reliable techniques, that require less effort, when we can make our lives and our users life much more difficult in the name of adding buzzwords to our CV and doing the cool thing? It's an epidemic in the industry and one of the side affects of Technical Wanking is Mortgage Driven Development [[1](#ref1)]. Watch out for that one too.

I wish I hadn't become a Technical Wanker back then. But I guess if I hadn't I wouldn't have learnt so much about what *not* to do in future. Having realised my mistakes and not wanting to be called a Technical Wanker again, I have since, always questioned cool, new technology with deep analysis and critique. It has, so far, served me and my end-users very well indeed. I also get to call other developers Technical Wankers, without being hypocritical. Thankfully, I usually get a laugh and a positive, inquisitive reply.