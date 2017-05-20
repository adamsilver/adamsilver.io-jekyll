---
layout: post
title: Making websites fast
date: 2039-01-01 09:00:01
categories: ux performance
---

This is how it goes. We cram a load of shit onto a single web page. This makes the page slow. Slow to load, slow to render. Slow.

Instead of getting rid of the shit, people blame the page refresh for causing all these problems. Typically, they'll suggest loading stuff up later (after page load) with AJAX.

AJAX, however, still needs to render new (parts of) screens. More crucially it still has to make a request to the server. That's not all&mdash;there are penalties in using AJAX.

First, we have to send more code to the client. We need to make requests, handle responses, traverse the Document, build and inject HTML, and manage errors when stuff goes wrong.

Second, using AJAX means engineering away stuff the browser does for free, such as chunking/progressive rendering. To get this back we need hacks and even more code. More on progressive rendering later.

Third, we need to design and implement custom loading spinners which is yet more work but more importantly, they aren't accurate, unlike the browser’s native implementation.

They aren’t familiar to the user either&mdash;they are always custom to the website. But familiarity is a UX convention that we should only break if we really have to.

This is not to say that AJAX is *bad*. AJAX is a useful enhancement depending on the occasion as it avoids the need to request and reevaluate the same assets repetitively.

However, it's not a solution to slow-loading pages. The real problem is that we've design a huge page that can never be fast. So how can we make pages fast?

## 1. Less UI

The fastest way to make web pages fast is to literally not add shit onto the page. Obvious. And yet, go and browser the Internet to see what I mean.

Back? Good. Let's continue.

Tabs. Instead split onto two separate pages or let the content stack beneath each other. Scrolling is easier than tapping. Anything more than two tabs works shitty on small screens anyway. If tabs are split across pages then easier to bookmark and keeps both pages smaller. Get rid.

Carousels. Should I use a carousel. Again, no. Making carousels responsive, touch friendly and fully accessible is hard work and a lot of code. Nobody wants to use your carousel anyway. Kill it.

If you have a carousel of images, like a typically ecommerce site or property site. Just show one decent quality image, and allow the user to view more on another page. Another page means link friendly, share friendly, and fast. It also means the user has chosen to look at images, meaning they'll expect a longer loading time.

So much better than waiting for the carousel to automatically move, or to work out that the little fucking dots are or aren't tapable. Or to hope that a swipe gesture is actually going to do something.

Carousels, tabs, accordions and expanding panels all have the same thing in common. They hide shit from the user.

Heydon Pickering has coined a term called Unprogressive Non-enhancement. He explains:

> You take some structured content, which follows the vertical flow of the document in a way that everyone understands.

>Which people traverse easily by either dragging their scroll bar with their mouse, or operating the keyboard using the up and down keys, or using the spacebar.

> Or if they're using a touch device, simply flicking backwards and forwards in that easy way that we've all become used to. What you do is you take that, and you fucking well leave it alone.

Here's a few more.

Scroll jacking. This makes your page feel completely broken.

Background video. Nobody gives a shit. Get rid.

Social media buttons. Leave it out.

Modal windows. Fuck. Off.

Floating labels: nobody wants to use the forms you've built.

How about reimplemeting stuff the browser does such as a text resizer. CMD+ does it. etc. Also just make sure the text is a decent size. Too many sites don't do this. Build something better, need less configuraiton.

Don't offer grid view list view. Test properly and do one properly if at all possible. Less UI again.

And on and on and on.

## 2. Less code

If you've followed rule number 1, you'll already be producing better experiences, and writing far less code.

But we can write less code more literally speaking.

- grids (who needs a grid) https://github.com/Heydon/fukol-grids. Better if you don't have things in grids. Not talking visual grids. Talking about multiple columns. The code for a grid if you need for a product list is tiny.

- social media scripts. Heydon shows that the code should be a few bytes, but the Twitter embed script is 50k. Just because you didn't write it, doesn't mean it's not your fault.

- Using aria instead of using the right element. Use a heading for a heading, and a button for a button etc.

- break points. If you don't use device breakpoints, then you'll only add break points when the content breaks. That's less code.

## 3. Chunk information across pages

If you still need the feature then consider chunking up big tasks into smaller tasks. Form design has one thing per page as a design pattern. But we can extend this to other examples.

Everytime I go onto a site with an image gallery, like Ebary, or Amazon, or Rightmove or Zoopla, or ASOS, I have to wait for images to load, the swiping is always a friggin pain and the page takes a long time to load.

I've built these things many times myself. Designers hate the idea of splitting information across pages and as I said above, the page refresh scares the shit out of them.

But actually, Yaron shows that even a page refresh to reveal a menu is no issue whatsoeevr. And it's a good way of designing an inclusive menu[^ heydowns menu component article].

- one thing per page
- image example
- nav example (http://yaronschoen.com/table-of-contents/)

## 4. Images

- If you really can't remove
- smush the shit
- show thumbnails first and load all images like rightmove
- or querystring to let user decide.
- or prove that

Got high Res images. Do u really need them? If so make sure u a) smush the shit out of them b) ask the user to download them thru a query string or send them to a dedicated page after displaying low Res thumbnails.  Old school technique. Good user experience. Test this though. But test it fairly. Don't compare this to large images on iPhone 79 on high speed world western web connections.

## 4. Do you really need that tool (sass) or framework (js)

- Then there is the amount of js u need. Do u really need that framework. Sometimes you really might need it but I'm willing to bet that most of the time you don't.

- Using a CSS preprocessor.  I count tell u the amount of times I've witnessed them used badly.  They make for a very bloated page. I'm not blaming the tool. It's the usage but it's still a cause of the problem. We take less responsible for what these things spit out the other end.

## 5. Performance techniques

- CQRS
- CAP
- Edge caching
- Chunking (Jake)
- [Prefetch](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)
- lower down the stack quote
- service workers?
- http2 is faster
- revving assets etc

- abstract all the common parts. In conjunction with previous point, put button in to a module of its own. Same class used everywhere. Good for gzip and CSS stays the same size. The module is reused.

## What about *perceived* performance?

And that’s not all. Unlike aiming for ‘perceived’ performance gains — where you still send the same quantity of code but you chew it up first (ed: seriously) — you can actually make your Web Stuff cheaper to use. My data contract doesn’t care whether you send small chunks or one large chunk; it all adds up the same.

My favorite thing about aiming to have less stuff is this: you finish up with only the stuff you really need — only the stuff your user actually wants.

## Summary

- TODO

Less weight, less complexity, less distraction, less bother, less bullshit.

---

youmightnotneedjs.com

uncrate.com

## Other bits

It's like when someone tidys there house and puts shit in cupboards but the shit is all still there. They haven't decluttered. They have organised. But for pages to be fast they need to be decluttered.

If something can be done lower down the stack it should. We control the speed of our servers. Not the speed of peoples devices and connections.

My site. Experience at DT making an app.

Tesco list page.

http://openmymind.net/2012/5/30/Client-Side-vs-Server-Side-Rendering/

https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf

Links:
-https://alistapart.com/article/planning-for-performance
- https://boagworld.com/marketing/users-will-always-choose-the-easiest-option-so-if-we-want-a-competitive-advantage-we-must-focus-on-simplicity/
- reference twitter and other articles moving away from client-side render.

---

Browse the Internet. I'll wait here while you do that. Back? Cool. You will have noticed that most websites are cram-packed with stuff you just don't need and that your eyes have learnt to glaze over. Even well-known successful websites suffer from this problem.

It's why people ignore banner ads and second and third columns. More on that later.


It's not just the *amount* of things, but its the things themselves. Quite often it's form over function. More literally speaking, we're prone to dumping several high resolution images on a single page.

Sometimes we even go one step further and put background videos on the screen; to make an impact; to be different; to separate us from the competition. These sorts of things are not the mark of a positive user experience.

