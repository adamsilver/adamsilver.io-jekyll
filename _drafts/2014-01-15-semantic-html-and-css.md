---
layout: post
title:  "Semantic HTML"
date:   2014-01-15 09:00:01
categories: css html
---

<!--

- asume knowldge of HTML
- describe unsemantic html
- describe what semantic HTML is
- explain the benefits
  - browsers without CSS
  - accessibility
  - responsive web design
  - Search engine optimisation
  - Maintainability
- conclusion 1) HTML is the foundation, ruining the foundation has fatal effects

-->

Wikipedia has a decent definition of what *semantic* HTML is:

> Semantic HTML is the use of HTML markup to reinforce the semantics, or meaning, of the information in webpages rather than merely to define its presentation or look. Semantic HTML is processed by regular web browsers as well as by many other user agents.

But allow me to explain a bit more. *Semantic* HTML is about using the correct element for the piece of content. It describes the intention of what this piece of information represents regardless of how it looks or how it behaves. Furthermore, it means using semantic ids and class names. A few examples follow:

## A paragraph

Imagine an article, much like this one, each paragraph would be represented as follows:

	<p>I am a paragraph</p>

## An introductory paragraph

This is where using the correct id or class name comes in. There are benefits in this too, discussed later. See below:

	<p class="introduction">This paragraph is an introductory one</p>

## The benefits of Semantic HTML

If all four methods above have the same end result then why does it matter? Actually, they don't have the same result. They may have the same result *visually* but thats where the similarity ends. HTML is accessed and interpreted by different user agents, assitive devices, search engine crawlers and of course, we developers. Semantic HTML provides a number benefits for each of the aformentioned interpreters.

### Accessibility

Screen readers read the text of page based on the HTML elements that are used.

### Print

### RWD

### etc

### SEO

Crawlers such as the Googlebot, are another type of user agent. They rank the page based on the content. The content can only be understood if semantic HTML is used. Semantic HTML is clean and tends not to include inline styles, decorative images (tabless) etc and because of this the page is ranked better in search engines.

### Maintainability




