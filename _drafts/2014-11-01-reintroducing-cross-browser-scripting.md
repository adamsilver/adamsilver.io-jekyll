---
layout: post
title:  "Reintroducing Cross-browser Scripting"
date:   2014-11-01 09:00:01
categories: js
---

Have you heard of *isHostMethod*? Do you know the difference between Multi-browser and Cross-browser scripting? Do you understand the reasons why libraries need updating to keep up with new browsers? Are you bogged down by User Agent (UA) sniffing and Adaptive Design? Do any of these questions resonate with you? If so, read on.

## Nothing new

This article won't provide you with anything that hasn't already been [shared](http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting) [previously](http://www.twitter.com/cinsoft) but it is somewhat forgotten about in the industry. I hope reintroducing some of the information here urges others to be more inquisitive about how web UIs are developed.

## Client-side challenges are unique

When server-side developers produce software, they program against a single known and controlled development environment. Client-side developers don't have this luxury. There are so many different browsers and browser versions running on different operating systems and devices. Even when the Internet was young there was more than one browser.

Now there are browsers on watches, car radios, games consoles, mobile phones, tablets, fridges, glasses, tvs and more. It appears to be quite a challenge, scrap that, nigh on impossible to build a website that can be reliably consumed on all browsers. Or *is* it?

## Unlike HTML and CSS, Javascript doesn't naturally degrade gracefully

When a browser doesn't recognise an HTML element the worst thing that happens is the piece of content isn't shown, as would be the case with the *video* element. In this case, alternative content can be shown. Similary, when a browser doesn't support a particular CSS ruleset, the element is without those styles but content is still likely to be consumable.

Script on the other hand can leave a page broken. As an example, imagine enhancing a form with script that prevents the default action and continues to execute script that the browser doesn't support. The user is now unable to submit the form which is fatal to the experience.

## UA sniffing is not the answer

There is no value in reading the UA string [[0](#ref0)] besides identifying the browser and even then, it can be spoofed. It doesn't tell you what features the browser has, so they would need to be inferred. The browser could be lacking features, have plugins enabled or configured differently, all of which affects the capability and behaviour of the browser.

Even if you forget those things, imagine sniffing, then imagine mapping features to the sniff, then imagine doing that for every browser *and* every feature. It is quite obvious that this technique is fraught with errors and extremely time consuming (read expensive). Browsers and devices are released too frequently to even attempt to keep up with the mapping anyway.

## How to make Javascript degrade gracefully

Take the previous example and imagine being able to ask the browser a few questions before trying to execute the script, such as *Can you retrieve (form) elements? Can you react to the form's submit event? Can you prevent the default action?*

Guess what? You *can*.

Peter Michaux demonstrates this in his article [[1](#ref1)] using the concept of Feature Detection and Feature Testing. Once you have asked these questions, the script can run safely on any browser, old, current or even in the future. If the browser answers *no* to (any of) these questions, the behaviour reverts to a js-disabled degraded equivalent. In this example, the server will validate the form. **This *is* Progressive Enhancement!**

## The meaning of *support*

Traditionally, when writing Multi-browser scripts, dropping browser support means, no testing in that browser, and that it is likely broken, meaning of course, the user suffers.

With Cross-browser scripting, the meaning of support changes. It boils down to one thing: whether the user will get the enhanced experience or not. And if not, the degraded experience is just fine as the browser can't handle it anyway. This way users can use the site regardless of what browser, device or configuration.

**This is the beauty of the web, *not* its downfall.**

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://pointedears.de/scripts/faq/cljs/notes/detect-browser/">Browser detection (and what to do instead)</a></dd>
	<dt class="citation" class="citation" id="ref1"><a name="ref1"></a>[1]</dt>
    <dd><a href="http://peter.michaux.ca/articles/cross-browser-widgets">Cross-browser widgets</a></dd>
</dl>