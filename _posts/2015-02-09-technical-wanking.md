---
layout: post
title:  "Technical wanking"
date:   2015-02-09 09:00:01
categories: web
---

I have a secret. It's embarassing. I did something that I am ashamed of. I participated in the art of Technical Wanking. For those unaware, Technical Wanking is the practice of using "cool" and "new" technology because, well, it's "cool" and "new", but of course, technology should be chosen on its technical merit and technical merit alone. Let me tell you about how I came across this phenomena.

I first heard of it's existence in 2010 when I was building my first Single Page Application (SPA). I had that feel-good feeling. We were using various "cutting-edge" libraries for DOM stuff and client-side templating. We rolled our own client-side router. The adminstration system that we were building didn't need SEO, and was only to be used in Chrome and so we only tested in Chrome. It was a CRUD applicaton with a few rich interactions. I couldn't wait to get my teeth into this, get the experience under my belt and propel my career accordingly. How could anyone resist my talent, with all the new buzzwords littering my CV?

At about 6 months into the project, my friend James joined the team. I accompanied him on one of his first fag breaks. He was (and still is) a demanding man, and required my presence for the majority of his fag breaks. Besides the toxic fumes, I was much obliged. It didn't take long for us to get talking about the codebase. James was quite scathing and questioned the need and benefit of the architecture. It was right about this time that he chose to call me a Technical Wanker! Say *whatttt*? Fortunately, he didn't just abuse me. He went on to explain how all the not-so-good aspects of the code and User Experience (UX) were self-induced. To give *some* insight as to what he was getting at, this included:

1. **Writing a client-side router.** Our backend was written in Rails, which has a beautiful and perfectly reliable router. Let the browser handle the navigation.

2. **Writing a client-side view engine to rebuild/render parts of the page that changed on the client.** Again Rails (just like most server-side frameworks) has you covered. The browser is an expert at parsing and rendering HTML. Script will never do it better.

3. **Having to massage and work with generic REST APIs on the client.** Rails has a beautiful ORM and it's standard practice to expose beautiful and fit-for-purpose view-models ready for consumption by server-side view templates.

There are many more examples but the gist should be getting clearer. James continued to explain the application could have been *better* had we used a traditional architecture, without all the inherent problems with SPAs [[0](#ref0)]. Whilst I was still quite chuffed with all the clever things I appeared to be doing, I couldn't help but realise he was *right*. There was just no need. I was solving self-induced problems and nothing else. The application would have been just as slick. Just as beautiful. Just as rich. And it would have taken half the time to build, with a far nicer split of responsibilites between the server and client. Not to mention it would have had better performance, better accessibility and a better UX.

When did all this nonsense become standard practice? Everyone's building them. Everyone writes about them. The problem is, when everyone is doing it, it's usually stupid. This follows in all walks of life. Most people eat McDonalds, but it doesn't make it good for you. In a paid profession, it is your *duty* not to do stupid things and to serve the client and end-user to the very best of your ability. It's an epidemic in the industry and I know *many* developers scattered across the industry, who are in the trenches having to use cool new technology that just causes various problems. It's most certainly a close relative of Mortgage Driven Development [[1](#ref1)] but we won't go into that in this article.

In many ways I wish I hadn't participated in Technical Wankery back then, but then again, I wouldn't be where I am today having learnt all those useful lessons about what *not* to do. It's certainly a challenge convincing colleagues that "cool" and "new" technology isn't *cool* at all. But what's all this in aid of? The end-user of course! The *user* just wants to use *their* chosen browser to consume your content or buy your widget and get the hell back to living life. So now, I try to do for others what James did for me: hurl abuse at my fellow developers. Normally speaking, I get a good response, a little laugh, and the opportunity to explain myself.

## Citations

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="/articles/the-disadvantages-of-single-page-applications/">The disadvantages of Single Page Application</a></dd>
	<dt class="citation" id="ref1">[1]</dt>
	<dd><a href="http://codemanship.co.uk/parlezuml/blog/?postid=147">Mortgage Driven Development</a></dd>
</dl>