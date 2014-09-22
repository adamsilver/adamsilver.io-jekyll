---
layout: post
title:  "Semantic HTML"
date:   2014-01-15 09:00:01
categories: css html
---

<!--

- explain the benefits
  - browsers without CSS
- conclusion 1) HTML is the foundation, ruining the foundation has fatal effects

-->

Semantic HTML is the use of mark-up to reinforce the meaning and *intention* of the content. Semantic HTML does *not* describe how the content looks or how it behaves. As well as using the the most appropriate element to describe the content, meaningful *IDs* and *Class* attributes should be used. Imagine an article, much like this one, each paragraph would be represented as a paragraph:

	<p>I am a paragraph</p>

An *introductory* paragraph might need to be styled differently. A semantic class name provides this hook:

	<p class="introduction">This paragraph is an introductory one</p>

It's important to note that the Class attribute only provides *meaning* to this paragraph and does not in anyway indicate the styling.

## Benefits of Semantic HTML

### Accessibility

Some disabled users utilise the functionality of a screen reader. When the page is semantic there is a much higher chance it will be read out meaningfully to the user.

### Responsive Web Design (RWD)

RWD is responsible for styling a web page differently depending on the viewport size; because of this something that is styled one way for *large* screens may look quite different on *small* screens.

For example, it is quite common to find `.clearfix` scattered amongst the HTML. The Clearfix technique will ensure floated elements are cleared without the need for extra mark-up. When in small screens, the elements might stack below one another, meaning that the Clearfix class needs to be overriden for small screens. This is tricky because if we take another component, say a row of icons; they might *not* stack in small screens because they are small enough to fit in a small viewport. This wouldn't be a problem if the component was called `.icons`.

Note: you could apply this same logic to any component that has different treatment based on the viewport size.

### SEO

Search engine crawlers rank the page based on the content. The content can only be understood if semantic HTML is used. Semantic HTML therefore improves search engine ranking.

### Maintainability

1. Code is easier to understand, onboarding developers is easier and their understanding should be much quicker of how a web page is structured.

2. Easier to update a site look and feel requiring less effort to maintain the HTML i.e. a heading is always a heading no matter what the look and feel is.

### Performance

Page weight is likely to be smaller as not weighted down by the dreggs of HTML bloat and inline styles etc.




