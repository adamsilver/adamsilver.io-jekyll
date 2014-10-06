---
layout: post
title:  "Reintroduction to cross-browser scripting"
date:   2014-11-01 09:00:01
categories: js
---

Have you heard of *isHostMethod*? Do you know the difference between Multi-browser and Cross-browser scripting? Understand the real reasons why Javascript frameworks need updating to keep up with new browsers? Are you bogged down by User Agent sniffing and Adaptive Design? If this sounds like you, keep reading!

## Nothing new

This article won't provide you with anything that hasn't already been shared by others but it is somewhat lost in the industry and I hope that merely reintroducing some of the information here may urge others to take a deeper interest.

TODO:
You won't find these guys with shiny [0] blogs [0] trying to sell [0] you something. However, what you *will* find is that the information and techniques stand the test of time and avoid common pitfalls that most developers have faced, yet failed to understand and therefore have implemented poor technial solutions that ultimately pain the end-users and force them to visit competitor sites.

## Cient-side challenges

When server-side developers produce software, they program against a single known and controlled development environment. Client-side developers don't have this luxury. There are so many different browsers and browser versions running on different operating systems and devices. Even in the early days there was more than one browser vendor installed on more than one type of desktop computer. 

Now there are browsers on watches, car radios, games consoles, mobile phones, tablets, fridges, glasses, tvs and more. It appears to be quite a challenge, scrap that nigh on impossible to build a website that can be reliably consumed on all of the above - or *is* it?

## HTML and CSS naturally degrade gracefully

When a browser doesn't recognise an HTML element the worst thing that happens is the piece of content isn't shown, as would be the case with the *video* element. Even in this case, alternative content can be displayed such as text/images.

If a browser doesn't support a particular CSS ruleset the element may end up without those styles but can still be consumed pretty comfortably.

## But what's different about script?

HTML and CSS naturally degrade. If an HTML element is not understood the page won't fundamentally break and most often the content within the tag is still displayed for consumption. If CSS is not understood then the element loses that style - none of this is a deal breaker!

Script on the other hand can leave a page broken. Imagine enhancing a form with script that prevents the default action and continues to execute script that the browser can't handle. The user is left with an inability to submit the form. This *is* a deal breaker!

So what do we do instead?

Take the previous example and imagine if we could ask the browser a few questions before trying to execute our script, such as *Will you let me retrieve the form element? Will you let me react to the submit event? Will you let me prevent the default action? Will you let me check if the form field is valid? If it is valid can I submit the form?*

Guess what? You *can* ask the browser these questions. But also notice that these questions can be asked to *any* browser. This is very important.

There is no value in asking what browser they are [link to something saying how crap browser detection is]. Imagine asking if they are Firefox on Android 2.3 and then having to infer what the answers are to the above questions and based on that executing the script? Imagine repeating that for every browser, imagine repeating that for every feature.

Once you have asked these questions correctly the script can stand the test of time and run safely on any browser no matter the device, no matter when it was released even in the future. If the browser cannot handle this then that feature reverts to a js-disabled equivalent where in this case the server will provide validation with a page refresh.

Peter Michaux [4] demonstrates this technique in his article "Cross-browser widgets" [5].

## The meaning of the word 'support'

Developers often use the word support in-place of the 'care about' or 'test in'. Often their support is based on the foundation of another library and *their* 'support'.

If a developer says 'we support IE7 and up' what they are saying is 'we don't care about IE6, we don't test in IE6, our page may or may not break in IE6, our libraries may not support IE6'.

Having now demonstrated cross-browser techniques the meaning of 'support' changes.

YUI support matrix?

Developers usually mean to say 'care about' as opposed to the word support. Let's take an example. If a developer says "we only support IE7+""


## TODO
- P.E. Is Cross Browser Scripting
- 'Feature Detection: State of the Art Browser Scripting'
- 'Browser Detection (and What to Do Instead'
- Still 'optimising' for mobile?