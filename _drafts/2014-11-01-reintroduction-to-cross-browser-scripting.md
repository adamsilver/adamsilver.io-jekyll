---
layout: post
title:  "Reintroduction to cross-browser scripting"
date:   2014-11-01 09:00:01
categories: js
---

Heard of `isHostMethod`?

Know the difference between multi-browser and cross-browser scripting?

Truly understand why websites constantly need upgrading to keep up with new browsers?

Still 'optimising' for mobile?

Haven't heard of and taken note of professional javascript experts such as Richard Cornford, David Mark, Thomas Lahn?

If the answer to any of the above is *no* then keep reading!

The truth is, this article won't add anything these guys haven't already written about in the past but I hope that merely reintroducing some of the experts, some of the techniques and the reasons why might trigger fellow developers to read more, take the red pill etc.

You won't find these guys with shiny [0] blogs [1] trying to sell [2] you anything. However, what you *will* find is that the knowledge stands the test of time and avoids common pitfalls that most developers have faced, yet failed to understand and therefore have implemented poor technial solutions that have eventually been binned or upgraded.

What's worse than any of that? Your (or your client's) end-users have most likely suffered. Either in trying to access content or even buying a product the website sells.

## The red pill in short

* You have been doing it all wrong
* jQuery, Modernizr [INSERT LIBRARY HERE] isn't helping you at all
* It's going to take time to fully understand

## Why do we have all these issues?

The browser is something developers produce code to run in but it's not something we have control over. Backend developers have the control of the server. When they install Java they know exactly what version it is and exactly what to expect from the API.

Browsers are different - there are millions of them and they are all different. There are different sizes, capabilities, they appear on mobile, tablet, phablet, desktop, laptop, watches, glasses, fridges, game consoles, tvs and more.

The great thing about the web is that deploy your code once using the right techniques and all your end-users no matter where they are, what device they own can access your content.

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