---
layout: post
title:  "Semantic HTML"
date:   2014-01-15 09:00:01
categories: css html
---

HTML contains the content of a web page. It wraps pieces of content within certain HTML elements such as `<h1>`s, or `<div>`s etc. *Semantic* HTML is all about using the correct element for the piece of content. It describes the intention of what this piece of information represents regardless of how it looks or how it behaves. This means not using inline styles and using the correct element for the job.

As a very simple example, a top level heading would be represented by doing this:

	<h1>Your heading</h1>

Instead of doing this:

	<div class="h1">Your heading</div>

Where CSS contains a declration of `.h1` with the top level heading styles.

Or this:

	<div style="<!-- styles that make it look like a top level heading -->">Your heading</div>

Or even this:

	<font size="7">Your heading</font>

## Why does it matter

If all four methods above have the same end result then why does it matter? Actually, they don't have the same result. They may have the same result *visually* but thats where the similarity ends. HTML is accessed and interpreted by different user agents, assitive devices, search engine crawlers and of course, we developers. Semantic HTML provides a number benefits for each of the aformentioned interpreters.

### Accessibility

Screen readers read the text of page based on the HTML elements that are used.

### Print

### RWD

### etc

### SEO

Crawlers such as the Googlebot, are another type of user agent. They rank the page based on the content. The content can only be understood if semantic HTML is used. Semantic HTML is clean and tends not to include inline styles, decorative images (tabless) etc and because of this the page is ranked better in search engines.

### Maintainability

http://webdesignfromscratch.com/html-css/semantic-html/