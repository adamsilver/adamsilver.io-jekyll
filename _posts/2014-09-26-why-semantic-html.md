---
layout: post
title:  "Why Semantic HTML"
date:   2014-09-26 09:00:01
categories: html
---

Semantic HTML is the use of mark-up to reinforce the meaning and *intention* of the content by applying the correct element, class names and IDs based on what it *is*, not on what it *does* or how it *looks*. But why is this useful?

## 1. Responsive Design

When designing a website *responsively*, a component may be styled differently on large screens compared to small screens. A common example is when you want to have a elements line up beside each other for large screens but stack below on small screens.

If you use class names such as `grid` and `column1` this causes problems. Now the CSS has to target `column1` on small screens and make it stack. But you don't always want this to happen. For example you may have a different component that does have columns on small screens as well as large screens.

This is not a problem when you use semantic HTML class names because you just target the component in CSS and it doesn't interfere with any other component. You name the component based on what it is, not on what it does or what it looks like.

## 2. Accessibility

Some disabled users utilise the functionality of a screen reader and when HTML is semantic, there is a much higher chance it will be read out meaningfully to the user.

## 3. Search Engine Optimisation

Search engine crawlers rank the page based on the content. The content is easier to understand if semantic HTML is used which improves ranking.

## 4. Understanding

It is easier to understand semantic HTML, which increases the speed of onboarding and developing without the worry that you're affecting other parts of the site.

## 5. Maintainability

It is easier to update a site's look and feel, requiring less effort to maintain the HTML i.e. a *heading* is always a *heading* no matter what it looks like; if the colour is changed from red to black, the HTML will not need updating.

## 6. Automated functional testing

Functional tests are easier to write because the hooks are mapped to features. For example, if the feature contained a *continue* button, and the automated test scenario was "Given I click the continue button" then there is a clear 1-2-1 mapping between the feature and the HTML element. Without the semantic hook, automation testing becomes harder and sometimes impossible without providing extra hooks.

## 7. Performance

This is probably the least beneficial, but when you use semantic HTML the page weight is likely smaller. Unsemantic HTML might use inline styles or stylistic elements such as `<font>`. It also increases the likeliness of elements having multiple class names which increasing bloat.

**In life, without good foundations everything falls down. HTML is no different. When you use semantic HTML everything else is better.**