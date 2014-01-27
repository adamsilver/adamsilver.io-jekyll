---
layout: post
title:  "Reintroduction to cross-browser scripting"
date:   2014-11-01 09:00:01
categories: js
---

* Heard of `isHostMethod`?
* Know the difference between multi-browser and cross-browser scripting?
* Truly understand why websites constantly need upgrading to keep up with new browsers?
* Still 'optimising' for mobile?
* Never taken note of professional javascript experts such as Richard Cornford, David Mark and Thomas Lahn?

If the answer to any of the above is *no* then keep reading.

The truth is this article won't provide you with anything that hasn't already been shared by the aformentioned people above but I hope that merely reintroducing some of it may urge other developers to take the red pill.

You won't find these guys with shiny [0] blogs [0] trying to sell [0] you something. However, what you *will* find is that the information and techniques stand the test of time and avoid common pitfalls that most developers have faced, yet failed to understand and therefore have implemented poor technial solutions that ultimately pain the end-users and force them to visit competitor sites.

## The red pill

* You have been doing it all wrong
* jQuery, Modernizr [INSERT LIBRARY HERE] isn't helping you at all
* It's going to take time to fully understand

## Coding on the client

When server-side developers produce software they have a known environment. They are in complete control of the machine it runs on and what software is running.

Client-side developers don't have this luxury. There are so many different browsers and browser versions running on different operating systems and device. Even in the days of yore there was more than one browser vendor installed on more than one type of desktop computer.

And now there are browsers on watches, car radios, games consoles, mobile phones, tablets, fridges, glasses, tvs and more.

It appears to be quite a challenge, scrap that nigh on impossible to build a website that can be reliably consumed on all of the above - or *is* it?

## HTML and CSS degrade gracefully

Provide any browser with valid HTML and it can be guaranteed that the content can be consumed. Add a sprinkling of CSS and give your site an identity.

Add some script and this is where it can all go wrong but why?

HTML and CSS naturally degrade. If an HTML element is not understood the page won't fundamentally break and most often the content within the tag is still displayed for consumption. If CSS is not understood then the element loses that style - none of this is a deal breaker!

Script on the other hand can leave a page broken. Imagine enhancing a form with script that prevents the default action and continues to execute script that the browser can't handle. The user is left with an inability to submit the form. This *is* a deal breaker!

So what do we do instead?

Take the preceeding example - imagine if we could ask the browser a few questions before trying to execute our script, questions like:

Will you let me retrieve the form element?
Will you let me react to the submit event?
Will you let me prevent the default action?
Will you let me check if the form field is valid?
If it is valid can I submit the form?

You know what? You CAN ask the browser these questions - maybe not in that exact manner. But also notice that these questions can be asked to *ANY* browser. This is very important.

There is no value in asking what browser they are [link to something saying how crap browser detection is]. Imagine asking if they are Firefox on Android 2.3 and then having to infer what the answers are to the above questions and based on that executing the script? Imagine repeating that for every browser, imagine repeating that for every feature. It'

Once you have asked these questions correctly the script can stand the test of time and run safely on any browser no matter the device, no matter when it was released even in the future. If the browser cannot handle this then that feature reverts to a js-disabled equivalent where in this case the server will provide validation with a page refresh.

Peter Michaux [4] demonstrates this technique practically in his article "Cross-browser widgets" [5].

## The meaning of the word 'support'

Developers often use the word support in-place of the 'care about' or 'test in'. Often their support is based on the foundation of another library and *their* 'support'.

If a developer says 'we support IE7 and up' what they are saying is 'we don't care about IE6, we don't test in IE6, our page may or may not break in IE6, our libraries may not support IE6'.

Having now demonstrated cross-browser techniques the meaning of 'support' changes.

YUI support matrix?

Developers usually mean to say 'care about' as opposed to the word support. Let's take an example. If a developer says "we only support IE7+""

## More resources to check out


David Mark, an expert in Cross-browser scripting released a good while back a general purpose library called My Library [6] that exposes an API dynamically based on the browser's capability.

David Mark has more recently started an open source project called Jessie [0] which is a collection of cross-browser functions with the added benefit of being able to customise the libary to your exact requirements based on exactly what functionality you need and the level of browser support required - more on that can be found on the Jessie wiki [0].



This is progressive enhancement and this is cross-browser scripting.

***********

Back in 2008 Peter Michaux wrote two particularly excellent articles:

* 'Feature Detection: State of the Art Browser Scripting'

And looking back even further into history Richard Cornford wrote:

* 'Browser Detection (and What to Do Instead'




* multi browser scripting (wikipedia)
* david mark and his primers
* thomas lahn somehow
* dynamic api