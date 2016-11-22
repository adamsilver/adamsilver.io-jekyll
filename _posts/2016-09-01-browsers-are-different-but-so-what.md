---
layout: post
title: Browsers are different but so what?
date: 2016-09-01 09:00:01
categories: development html
---


You know, it’s funny, when the web came along, we used the medium of print to set expectations for how things should be.

When you print out a business card it always looks the same, no matter who you are or where you are. It’s a physical thing.

This is not the case with browsers. Browsers are not identical to each other. They are largely similar, but they still have plenty of differences. Just like Mac and Windows. Both computers can be used to perform very similar tasks. But they *are* different.


When people first encountered this difference on the web they would be like “WTF”. Founders, business owners, testers and even designers and developers (you know the very people that are meant to know this shit ) all included.

This reaction is based on a belief system , the belief that the browser should behave a certain way, in this case like print.

The funny thing about belief systems, is that even if they are wrong, it doesn’t really matter right?

Well, kinda. Let me explain:

It’s true that if people paying for the project believe a website should look identical, then that’s what front-end developers (and testers etc) will be tasked with. And this is exactly what happened to me and many other people working in the industry.

It’s false because people’s beliefs change due to new experiences and education. Over time people learnt that the browser is different. It’s special and uniquely powerful. It’s not print.

This often leads to the realisation that the idea of making things look identical and “perfect” in all browsers is not only Sisyphean, but that it’s not required or even *valuable* to the user on the other end. I guess what I am trying say is users don’t care!

Most people use one or two browsers. And even if they use more than that, it still doesn’t matter, because users don’t even notice — they don’t care about your website like you do — they just want to use the service and get back to their day. And even if they did notice, so what?

Furthermore, those subtle differences would be the same across all the websites they browse to in that browser. For example, radio buttons are rendered slightly different in IE9. But that will be the case for every website that uses radios. It becomes an expectation and one that in almost all scenarios doesn’t hurt the experience.

If a client or tester or whoever else says “But [insert browser] does it like this…” this is typically a huge waste of time. My response is almost always “Yes, is that a problem?”. Invariably there is no actual reason to worry about this at all.

Case in point. On a recent project a download attribute was added to a link:

	<a href=”/path/to/file.pdf” download>Download PDF file</a>

Without this, some browsers — depending on the file-type — will load that file in the browser like a web page. This is the case for a PDF file for example.

This attribute ensures that the file is to be treated as a download in the traditional sense i.e. downloaded into a folder on the user’s machine.
The “problem” is that when the file can’t be found, FireFox displays a “special” screen that explains that it can’t be downloaded. Other browsers just show the regular 404 page served by the website typically “We can’t find what you’re looking for” etc.

Is this a problem? Of course not. Firefox will do this for all websites that use the download attribute. Arguably it’s an enhancement for FireFox Users — lucky them! In the future FireFox might change the behaviour. Maybe Chrome copies them. Maybe none of this happens. Who knows and who cares? Users don’t.

My point is this. The web is its own thing. It has its own ways. This is not something to be feared. There is nothing to bat into shape. The web and the browser is to be [embraced](/articles/embracing-simplicity/) to the user’s advantage.