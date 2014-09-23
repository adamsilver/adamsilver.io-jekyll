---
layout: post
title:  "Semantic HTML"
date:   2016-01-15 09:00:01
categories: css html
---

<!--

- conclusion 1) 

-->

Semantic HTML is the use of mark-up to reinforce the meaning and *intention* of the content. Semantic HTML does *not* describe how the content looks or how it behaves. As well as using the the most appropriate element to describe the content, meaningful *IDs* and *Class* attributes should be used where neccessary, to provide hooks that allow the components to be enhanced with style and behaviour. 

Take this article as an example. It mostly consists of headings and paragraphs:
	
	<div id="article">
		<h1>Semantic HTML</h1>
		<p class="wordCount">435 words</p>
		<p>...</p>
		<p>...</p>
	</div>

The article is structured as follows:

- A container div with an ID attribute value of *article*.
- An h1 representing the primary heading of the article.
- A paragraph with a Class attribute value of *wordCount*.
- Further paragraphs for the main article content.

It is important to not that reading the HTML above does *not* describe how it looks but it *does* provide the meaning and intent.

## Benefits of Semantic HTML

There are many benefits to writing HTML with semantics in-mind. Here we discuss each of those:

### Accessibility

Some disabled users utilise the functionality of a screen reader and when the HTML is semantic there is a much higher chance it will be read out meaningfully to the user.

### Responsive Web Design (RWD)

RWD is responsible for styling a web page differently depending on the viewport size; because of this something that is styled one way for *large* screens may look quite different on *small* screens.

For example, it is quite common to find elements littered with a Class attribute value of *clearfix*. This ensures floated elements are cleared without the need for extra mark-up. In small screens the elements might stack below one another, meaning that *clearfix* has no meaning here; infact it becomes rather misleading and confusing in this context. Additionally the CSS rule would need overriding for small screens.

This is tricky because if another component that does require the *clearfix* in small screens (because they are small enough to fit) then the override becomes problematic. This wouldn't be a problem if the component was given a semantic Class attribute value because the styles can be applied based on what it is.

### SEO

Search engine crawlers rank the page based on the content. The content can only be understood if semantic HTML is used, therefore using semantic HTML improves search engine ranking.

### Developer understanding

Code is easier to understand, onboarding developers is easier as it should be quicker to understand the structure of the HTML document.

### Maintainability

It is easier to update a site's look and feel, requiring less effort to maintain the HTML i.e. a heading is always a heading no matter what it looks like; if we change the colour from red to black, the HTML will not need updating.

### Performance

A minor benefit is that the page weight is likely to be smaller when using semantic HTML. Unsemantic HTML might use inline styles or stylistic elements e.g. `<font>`.

## Summary

HTML is the foundation of a web page and the foundations, just like anything else in this world are the *most* important. Is it strongly advisable to use semantic HTML in order to experience the benefits described in this article because your client, your fellow developers and your users will thank you.