---
layout: post
title:  "Why semantic HTML is so important"
date:   2014-09-26 09:00:01
categories: html
---

Semantic HTML is the use of mark-up to reinforce the meaning and *intention* of the content by applying the correct element, class names and IDs based on what it *is*, not on what it *does* or how it *looks*. But why is this so important?

## 1. Responsive Design

When designing a website *responsively*, a component may be styled differently depending on the size of the screen.

### Example 1: Misleading mark-up

What does the following HTML tell us?

	<!-- module 1 -->
	<div class="row">
		<div class="column1">Content 1...</div>
		<div class="column2">Content 2...</div>
	</div>

It suggests that these two pieces of content sit beside each other in columns. This incorrectly suggest to us that it *looks* a certain way. It doesn't tell me what it is.

However, on "small" screens, "Content 2" sites below "Content 1" as there is not enough room to sit side-by-side. The problem is that the class names don't provide any meaningful information about the content &mdash; in fact, they are misleading.

Stylistic information should reside in CSS, not in HTML.

### Example 2: No way to target differences

It appears these classes are great because they are reusable &mdash; but they actually cause trouble. Let's expand our previous example and introduce a second module:

	<!-- module 2 -->
	<div class="row">
		<div class="column1">BIG Content 3...</div>
		<div class="column2">BIG Content 4...</div>
	</div>

Now, we have a different module, reusing the same class names to provide the same behaviour. The problem is that for module 2 as each piece of content is so big, we want this to stack on "medium" size screens. We could change the breakpoint, but then module 1 will  affected so that the content sits beneath each other way too early.

We *could* apply an additional class that will override the media query. This is the very beginning of bloat in the HTML and override hell in the CSS. Neither of which is something I want to tackle. I want to nip it in the bud.

Now, same example as before but with semantic HTML. Note: exchange `.module1` for your module name i.e. `.product`.

	<div class="module1">
		<div class="module1-someSection1">Content 3...</div>
		<div class="module2-someSection2">Content 4...</div>
	</div>

	<div class="module2">
		<div class="module2-someSection1">BIG Content 3...</div>
		<div class="module2-someSection2">BIG Content 4...</div>
	</div>

If these modules look the same we can reuse styles:

	.module1, .module2 {}

If they look different we have unique hooks to apply the differences:

	.module1 {}

	.module2 {}

## 2. Accessibility

Some disabled users utilise the functionality of a screen reader and when HTML is semantic, there is a much higher chance it will be read out meaningfully to the user.

## 3. Search Engine Optimisation and Experience

Search engine crawlers rank the page based on the content. The content is easier to understand if semantic HTML is used which improves ranking. Additionally, some search engines will improve the experience by listing additional information or shortcuts based on what the bot finding meaningful HTML.

## 4. Understanding

It is easier to understand semantic HTML, which increases the speed of onboarding and developing without the worry that you're affecting other parts of the site.

## 5. Maintainability

It is easier to update a site's look and feel, requiring less effort to maintain the HTML i.e. a *heading* is always a *heading* no matter what it looks like; if the colour is changed from red to black, the HTML will not need updating.

## 6. Automated functional testing

Functional tests are easier to write because the hooks are mapped to features. For example, if the feature contained a *continue* button, and the automated test scenario was "Given I click the continue button" then there is a clear 1-2-1 mapping between the feature and the HTML element. Without the semantic hook, automation testing becomes harder and sometimes impossible without providing extra hooks.

## 7. Performance

This is probably the least beneficial, but when you use semantic HTML the page weight is likely smaller. Non-semantic HTML might use inline styles or stylistic elements such as `<font>`. It also increases the likeliness of elements having multiple class names which increasing bloat.

## 8. Searchability

If an element has classes based on how it looks such as `.red` or `.clearfix` or `.pull-left` etc, then these classes will be all over the codebase. So if you're trying to hunt for a particular piece of HTML, the class name is not going to help you.

On the other hand, if your class names are semantic, a search is likely going to hunt down the HTML in question. Same goes for the CSS.

## 9. Unexpected regressions

If you have utility non-semantic classes that describe the look  then when you edit one of these classes, they will propogate to every single element with that class. Which normally means a developer, is too scared to touch an existing utility class because it is likely it will cause a regression.

When you use semantic class names, they are unique, so when editing one, it will only apply to the module in question.