---
layout: post
title:  "Semantic HTML"
date:   2014-01-15 09:00:01
categories: css html
---

<!--

- explain the benefits
  - browsers without CSS
  - accessibility
  - responsive web design
  - Search engine optimisation
  - Maintainability
- conclusion 1) HTML is the foundation, ruining the foundation has fatal effects

-->

Semantic HTML provides meaning and the *intention* of the content. *Not* describing how it looks or how it behaves. As well as using the the most appropriate element to describe the content, meaningful *IDs* and *Class* attributes should be used. Imagine an article, much like this one, each paragraph would be represented as follows:

	<p>I am a paragraph</p>

An *introductory* paragraph, might need to be styled differently. A semantic class name provides this hook:

	<p class="introduction">This paragraph is an introductory one</p>

It's important to note that the Class attribute only provides meaning to this paragraph, not the styling.

There are several benefits as follows:

### Accessibility

Some disabled users, utilise the functionality of a screen reader. When the page is semantic there is a much higher chance it will be read out loud meaningfully to the user.

### Print

TBD

### RWD

TBD

### SEO

Search engine crawlers rank the page based on the content. The content can only be understood if semantic HTML is used. Semantic HTML therefore improves search engine ranking.

### Maintainability

1. Code is easier to understand, onboarding developers is easier and their understanding should be much quicker of how a web page is structured.

2. Easier to update a site look and feel requiring less effort to maintain the HTML i.e. a heading is always a heading no matter what the look and feel is.

### Performance

Page weight is likely to be smaller as not weighted down by the dreggs of HTML bloat and inline styles etc.




