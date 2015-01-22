---
layout: post
title:  "Technical wanking"
date:   2015-01-01 09:00:01
categories: web
---

Technical Wanking is all about using shiny, new technology because well, it's shiny, new technology. Of course technology should be chosen on it's quality under the hood and based on how fit-for-purpose it is. Unfortunately, for me, I didn't coin the term myself. That has to be credited to James Norton, a fantastic Front-end Developer with a tendency to tell it how it is.

I first heard the term a good few years back when I was building my first Single Page Application and it felt good. I was a using libraries; one general purpose DOM library, one UI component library and a templating library. We also rolled our own client-side router. We only tested in Chrome, it was a backend system and it didn't matter as much as a consumer facing site. It didn't need SEO. It was a CRUD applicaton with a few rich interactions. I couldn't wait to get my teeth into this, get the experience under my belt and propel my career accordingly. How could any client resist me with all the new buzzwords littering my CV?

About 6 months in and it was going quite smoothly.  The architecture ironed out, features being delivered frequently. Then James joined the team. And I accompanied him on one his first fag breaks. In his usual blunt fashion he questioned the architecure. He explained that I was a Technical Wanker. I laughed as he went on to explain how all the not-so-good aspects of the code was self induced. To give *some* insight as to what he was getting at this included:

1. Writing a client-side router. Our backend was written in Rails, which Rails has a beautiful router. No need to recreate one on the client.

2. Writing a view engine to on rebuild/render parts of the page that changed. Sounds simple but not. Will leave those details to a future post perhaps. Either way Rails views are just fine.

3. Having to massage and work with generic REST APIs on the client. Rails has a lovely ORM and is used to exposing beautiful fit-for-purpose viewModels for consumption in a traditional server side view template.

4. Cross domain issues and more.

He went on to say that we could have had a very fast CRUD application using a traditional thin client without all the inherent floors in SPAs [xx](xx). Whilst I was still delighted at all the clever things I appeared to be doing, I couldn't help but realise he was right. There was just no need. I was solving self-induced problems and nothing else. The application would have been just as slick. Just as beautiful. Just as rich. And it would have taken half the time to build with a far nicer split of responsibilites between server and client. Not to mention it would have had a better performance, better accessibility and a better User Experience.

For the rest of my time building the project, every time I ran into a problem, I checked that it wasn't my fault. I dreamt at how much easier tis would have been if I decided to stop Technical Wanking. When did all this nonsense become the done thing? Everyone's building these things, everyones writing about these things! The problem I have found, in all walks of life may I add is that if everyone is doing it, it's usually stupid. Just a few examples of this in the wild:

* Most people eat McDonalds
* Most people drink too much Coke
* Most people consume too much alcohol
* Most people sunbathe for way too long
* Most people get into ridiculous amounts of debt despote there high levels of income.
* and so on.

The differnce of course is that when people do this they only affect themselves (and close family and friends). In professional web development, it is your duty not to do stupid things and to serve the client and end-user.

Why rely on solid, guaranteed to work, with far less effort, server-side technology, when we can make our lives and our users life much more difficult if we push this stuff to a client-side only application? It's an epidemic in the industry and one of the side affects of the disease of Technical Wankery is that of Mortgage Driven Development. Watch out of that one. Fortunately most people don't do this on purpose but it happens. I have seen it.

Anyway, having realised my mistakes and not wanting to be called a Technical Wanker again, I have since, always questioned silly, new shiny technology without deep analysis and critique. It has so far served me and my end-users very well indeed. I also get to call other developers Technical Wankers too, without being called a hypocrit. I usually get a good laugh and positive, inquisitive response.