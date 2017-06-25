---
layout: post
title: Infinite scrolling is probably a bad idea
date: 2015-11-24 09:00:01
categories: ux design
description: Infinite scrolling is a popular UI pattern but find out why it's probably a bad idea in this article.
---

On more than one occasion I have found myself trying to convince team-mates that infinite scrolling and its close relative *show more* is more likely to degrade the experience than improve upon it. I thought I would jot down my notes on the matter and share them with you. Here they are:

## 1. The footer becomes unusable

People understand what a footer is and that it is likely to contain links to important secondary information. Infinite scrolling means the footer keeps getting pushed just out of reach by the freshly loaded content.

## 2. Performance degrades

If you're using infinite scrolling on a long page, you're constantly loading more and more content into memory. This will have a negative impact on page performance, since the browser has much more work to do in order to render the page.

Also, the page needs to listen constantly for scroll events which can cause client-side performance problems.

## 3. Analytics is harder to implement

Due to the way infinite scrolling works, dropping some Google Analytics code into the page isn't going to give you much insight. Therefore you will need to write your own analytics implementation to track newly loaded content. This is then more costly to develop, maintain and test.

## 4. Bookmarking and the back button become problematic

You can't easily bookmark a segment of results to come back to or share with your friends.

Even if you do manage it and you end up bookmarking segment 15 (where each segment is say 40 items) then when you return to that bookmark, you suffer from long page-load times.
Similarly, you can't use the back button as it doesn't go back to the previous segment of results. Instead it goes back to the previous page.

## 5. People may suffer from choice paralysis

With very long pages people can feel paralysed by the amount of content and choices&mdash;infinite scrolling may well cause inaction and in-turn, lower click through rates. Just see [what happened to Etsy](http://danwin.com/2013/01/infinite-scroll-fail-etsy/).

## 6. The scrollbar becomes unusable and untrustworthy

The scroll bar inevitably becomes very small and hard to use. It's hard to place your mouse on the scrollbar and the slightest movement might scroll a large part of the page when you only wanted to scroll a little bit.

Even worse, the scrollbar plays a trick on users as it displays the page length inaccurately — the scrollbar will be near the bottom and then suddenly when the items are loaded in, it will jump up and reveal there is now more content to scroll through. **It's dishonest design to tell people that they're almost done when they're not**.

## 7. It's generally hard to use

Design is about communication. When someone arrives at a set of results, they want to instantly be able to understand what's going on...

> What am I looking at?<br>
> How do I get to the next set of results?<br>
> How many results are there?<br>
> How long will it take me to browse through them all?<br>
> Should I bother to browse through them?<br>
> Or should I search again?<br>
> Or should I try filtering instead?<br>

If the user doesn't understand the answers to these questions, they will have a feeling of unrest, uncertainty and disorientation. When they do know the answers to these questions, they can make informed and quick decisions, without losing energy.

With pagination, people can anticipate the effort required to browse through the results. There is a happy sense of completion when a page is finished. There is a clear end. Pagination gives people control to decide whether or not to continue to the next page.

Also, smaller pages, means a faster, more focused, less overwhelming experience with none of the pitfalls described above. People don't mind clicking links (to new pages) as long as each click is meaningful and leads them closer to their desired goal.