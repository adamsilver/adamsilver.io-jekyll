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

Wikipedia states:

> Semantic HTML is the use of HTML markup to reinforce the semantics, or meaning, of the information in webpages rather than merely to define its presentation or look. Semantic HTML is processed by regular web browsers as well as by many other user agents.

Semantic HTML describes the *intention* of the content, but not describing how it looks or how it behaves. It's not just the tags. It's also the use of semantic *IDs* and *Class* attributes.

Imagine an article, much like this one, each paragraph would be represented as follows:

	<p>I am a paragraph</p>

An *introductory* paragraph, might need to be styled differently. A semantic class name provides this hook.

	<p class="introduction">This paragraph is an introductory one</p>

It's important to note that the class name itself only provides the paragraphs intention and not the styling.

### Accessibility

Screen readers read the text of page based on the HTML elements that are used.

### Print

### RWD

### etc

### SEO

Crawlers such as the Googlebot, are another type of user agent. They rank the page based on the content. The content can only be understood if semantic HTML is used. Semantic HTML is clean and tends not to include inline styles, decorative images (tabless) etc and because of this the page is ranked better in search engines.

### Maintainability




