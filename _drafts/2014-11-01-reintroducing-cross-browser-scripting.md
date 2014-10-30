---
layout: post
title:  "Reintroducing Cross-browser Scripting"
date:   2014-11-01 09:00:01
categories: js
---

Have you heard of *isHostMethod*? Do you know the difference between Multi-browser and Cross-browser scripting? Do you understand the reasons why libraries need updating to keep up with new browsers? Are you bogged down by User Agent (UA) sniffing and Adaptive Design? Do any of these questions resonate with you? If so, read on.

## Nothing new

This article won't provide you with anything that hasn't already been [shared](http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting) by [others](http://www.twitter.com/cinsoft) but it is somewhat lost in the industry and I hope that merely reintroducing some of the information here may urge others to take a deeper interest.

## Client-side challenges are unique

When server-side developers produce software, they program against a single known and controlled development environment. Client-side developers don't have this luxury. There are so many different browsers and browser versions running on different operating systems and devices. Even in the early days there was more than one browser vendor installed on more than one type of desktop computer. This is the beauty of the web, not it's downfall.

Now there are browsers on watches, car radios, games consoles, mobile phones, tablets, fridges, glasses, tvs and more. It appears to be quite a challenge, scrap that nigh on impossible to build a website that can be reliably consumed on all of the above. Or *is* it?

## Unlike HTML and CSS, Javascript doesn't naturally degrade gracefully

When a browser doesn't recognise an HTML element the worst thing that happens is the piece of content isn't shown, as would be the case with the *video* element. In this case, alternative content can be shown. Similary, when a browser doesn't support a particular CSS ruleset, the element may end up without those styles but can still be viewed with little issue.

Script on the other hand can leave a page broken. Imagine enhancing a form with script that prevents the default action and continues to execute script that the browser doesn't support. The user is now unable to submit the form. This is a fatal issue.

## UA sniffing is not the answer

There is no value in sniffing the browser [[0](#ref0)]. This information provides nothing more than a browser telling you their ID, and even that can be spoofed. It doesn't tell you what features the browser has; they would need to be inferred. The browser could have disabled certain functionality or configured it differently. Even if you forget those things, imagine sniffing, then imagine mapping features to the sniff, then imagine doing that for every browser *and* every feature. It is quite obviosu that this technique is fraught with error and extremely time consuming. You will never be able to keep up with the never ending browsers and devices released daily.

## How to make Javascript degrade gracefully

Take the previous example and imagine being able to ask the browser a few questions before trying to execute our script, such as *Will you let me retrieve the form element? Will you let me react to the submit event? Will you let me prevent the default action? Will you let me check if the form field is valid?* Guess what? You *can* and Peter Michaux demonstrates this in his article [[1](#ref1)]. And vitally, these questions can be asked to any browser on any device or operating system.

Once you have asked these questions correctly, the script can stand the test of time and run safely on any browser no matter the device, no matter when it was released even in the future. If the browser answers no to these questions that feature reverts to a js-disabled equivalent, where in this case the server will provide validation with a page refresh. This *is* Progressive Enhancement; HTML and CSS isn't something that is either there or not there. It's based on the browser capability and this is the same for scripting.

## Summary

Traditionally, when writing multi-browser scripts, dropping support means that browser is likely to be unusable. With, cross-browser scripting the meaning of support changes. It's about whether the user will get the enhanced experience or not. And if not, the degraded experience is acceptable as the browser can't handle it anyway. This way users can use the site no matter what browser, device or configuration. This is the beauty of the web, don't lose site of that.

TODO:

* address the summary and talk about how this helps older browsers, current browsers and future browsers.

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://pointedears.de/scripts/faq/cljs/notes/detect-browser/">Browser detection (and what to do instead)</a></dd>
	<dt class="citation" class="citation" id="ref1"><a name="ref1"></a>[1]</dt>
    <dd><a href="http://peter.michaux.ca/articles/cross-browser-widgets">Cross-browser widgets</a></dd>
    <dt class="citation" class="citation" id="ref2"><a name="ref2"></a>[2]</dt>
    <dd><a href="">Cross-browser widgets</a></dd>
</dl>