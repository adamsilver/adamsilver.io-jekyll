---
layout: post
title:  "Reintroducing Cross-browser Scripting"
date:   2014-11-01 09:00:01
categories: js
---

Have you heard of *isHostMethod*? Do you know the difference between Multi-browser and Cross-browser scripting? Do you understand the real reasons why libraries need updating to keep up with new browsers? Are you bogged down by User Agent sniffing and Adaptive Design? Do any of these questions resonate with you? If so, read on.

## Nothing new

This article won't provide you with anything that hasn't already been shared by others [0] but it is somewhat lost in the industry and I hope that merely reintroducing some of the information here may urge others to take a deeper interest.

## Cient-side challenges

When server-side developers produce software, they program against a single known and controlled development environment. Client-side developers don't have this luxury. There are so many different browsers and browser versions running on different operating systems and devices. Even in the early days there was more than one browser vendor installed on more than one type of desktop computer. 

Now there are browsers on watches, car radios, games consoles, mobile phones, tablets, fridges, glasses, tvs and more. It appears to be quite a challenge, scrap that nigh on impossible to build a website that can be reliably consumed on all of the above. Or *is* it?

## JS doesn't naturally degrade gracefully like HTML/CSS

When a browser doesn't recognise an HTML element the worst thing that happens is the piece of content isn't shown, as would be the case with the *video* element. Even in this case, alternative content can be displayed such as text/images. When a browser doesn't support a particular CSS ruleset, the element may end up without those styles but can still be viewed with little issue.

JS on the other hand can leave a page broken. Imagine enhancing a form with script that prevents the default action and continues to execute script that the browser doesn't support. The user is left without the ability to submit the form which *is* of course an issue.

## So how do we handle this?

Take the previous example and imagine if we could ask the browser a few questions before trying to execute our script, such as *Will you let me retrieve the form element? Will you let me react to the submit event? Will you let me prevent the default action? Will you let me check if the form field is valid? If it is valid can I submit the form?* 

Guess what? You *can*. And best of all, these questions can be asked to any browser.

There is no value in asking what browser they are [link to something saying how crap browser detection is]. Imagine asking if they are Firefox on Android 2.3 and then having to infer what the answers are to the above questions and based on that executing the script? Imagine repeating that for every browser, imagine repeating that for every feature.

TODO: and the ua can be changed and it doesnt reliabily tell you anything.

Once you have asked these questions correctly the script can stand the test of time and run safely on any browser no matter the device, no matter when it was released even in the future. If the browser cannot handle this then that feature reverts to a js-disabled equivalent where in this case the server will provide validation with a page refresh.

Peter Michaux demonstrates this technique in his article "Cross-browser widgets" [0].

## Conclusion

> You're only as good as your lowest level function

If a developer says 'we support IE7 and up' what they are realling saying is 'we don't care about IE6, we don't test in IE6, our page may or may not break in IE6, our libraries may or may not support IE6'. Poor users. Often support is based on the foundation of another library and *their* 'support'. David Mark says "You're only as good as your lowest level function".

After understanding and utilising Cross-browser scripting, the meaning of *support* changes all together. Support means an enhanced experienced and lack of support means the degraded experience. Happy users.

## TODO
- P.E. Is Cross Browser Scripting
- 'Feature Detection: State of the Art Browser Scripting'
- 'Browser Detection (and What to Do Instead'
- Still 'optimising' for mobile?
