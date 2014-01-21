---
layout: post
title:  "The mobile website problem"
date:   2014-08-01 09:00:01
categories: mobile accessibility
---

Why do we have mobile versions of websites? Doesn’t this go against the spirit of the web? Front-end web developers have been trying (but not necessarily succeeding) to build websites that work cross-browser no matter what browser or device or capability. We think about design across different resolutions and use feature detection and progressive enhancement to layer on a better experience where possible.

- For a better user experience
- To be optimised for touch interactions
- To have a more appropriate layout
- To have a lightweight version and save bandwidth

What does the user experience when viewing a non-optimised/disparate website on mobile? Well it partly depends on what device they’re using. Taking iPhone or Android as an example for a moment most sites will be okay…it won’t be an optimal experience…they will have to pinch-to-zoom etc but a satisfactory experience none-the-less (assuming the existing User Experience (UX) is at a professional level in the first place).

It’s crazy that we are reverting to bad practices because of the mobile and tablet boom.

If we wanted to make our sites print friendly we wouldn’t create a print version of the website i.e. print.example.com. Instead we provide a stylesheet optimised for print.

In the past I have searched for a resource on my iPhone only to be forwarded to the mobile version and the resource on mobile is completely different to that on desktop. This is very frustrating for obvious reasons.

We have the technologies to do this right
In many cases we have the technologies to create context-specific (mobile, tablet etc) designs using feature detection, feature testing and CSS media queries. We can change the layout for smaller devices so that we don’t have columns and increase button size and we can enhance for touch interactions if they are available. We certainly don’t need to user agent sniff and we don’t need disparate sites for each device.

Developers need to have a strategy to design pages in tandem with designers to ensure a consistent and fantastic UX across multiple device sizes and capabilities.