---
layout: post
title:  "Semantic HTML"
date:   2016-01-15 09:00:01
categories: css html
---

<!--

- conclusion 1) 

-->

Semantic HTML is the use of mark-up to reinforce the meaning and *intention* of the content. Semantic HTML does *not* describe how the content looks or how it behaves. As well as using the the most appropriate element to describe the content, meaningful *IDs* and *Class* attributes should be used. 

Take this page as an example. It's an article with some headings and content mostly represents as paragraphs:
	
	<div id="article">
		<h1>Semantic HTML</h1>
		<p class="wordCount">435 words</p>
		<p>...</p>
		<p>...</p>
		...
	</div>

The article is structured as follows:

- A container div with an ID attribute value of *article*.
- An h1 representing the primary heading of the article.
- A paragraph with a Class attribute value of *wordCount*.
- Some paragraphs to house each of the paragraphs of the article.

Reading the HTML standalone does *not* tell you how it looks or behaves but it *does* provide the meaning and intent.

## Benefits of Semantic HTML

### Accessibility

Some disabled users utilise the functionality of a screen reader and when the HTML is semantic there is a much higher chance it will be read out meaningfully to the user.

### Responsive Web Design (RWD)

RWD is responsible for styling a web page differently depending on the viewport size; because of this something that is styled one way for *large* screens may look quite different on *small* screens.

For example, it is quite common to find Class attribute values of *clearfix* scattered in the HTML. This will ensure floated elements are cleared without the need for extra mark-up. In small screens the elements might stack below one another, meaning that *clearfix* has no meaning here. That style would need overriding for small screens. 

This is tricky because if we take another component, e.g. a row of icons, they might *not* stack in small screens because they are small enough to fit in a small viewport. This wouldn't be a problem if the component was semantically given a Class attribute value of *icons*.

### SEO

Search engine crawlers rank the page based on the content. The content can only be understood if semantic HTML is used, therefore improving search engine ranking.

### Maintainability

1. Code is easier to understand, onboarding developers is easier and their understanding should be much quicker of how a web page is structured.

2. Easier to update a site look and feel requiring less effort to maintain the HTML i.e. a heading is always a heading no matter what the look and feel is.

### Performance

Page weight is likely to be smaller as not weighted down by the dreggs of HTML bloat and inline styles etc.

## Summary

HTML is the foundation of a web page and as with anything else in life, the foundations are the most important. Always use semantic HTML in order to gain all the benefits discussed in this article. Your client, your fellow team mates and your users will thank you.