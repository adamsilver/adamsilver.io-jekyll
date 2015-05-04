---
layout: default
title: Frontend code guidelines
id: guides
permalink: /frontend-code-guidelines/
---

# {{page.title}}

This acts as a single point of reference for any code guidelines, standards and conventions for use in any website or application.

## HTML

### HTML5 doctype

Enforce standards mode and more consistent rendering in every browser possible with this simple doctype at the beginning of every HTML page.

	<!DOCTYPE html>
	<html>
		...
	</html>


### Apple touch icons

	<link rel="apple-touch-icon" href="/images/ios/touch-icon-iphone-precomposed.png">
	<link rel="apple-touch-icon" sizes="57x57" href="/images/ios/touch-icon-iphone-precomposed.png">
	<link rel="apple-touch-icon" sizes="72x72" href="/images/ios/touch-icon-ipad-precomposed.png">
	<link rel="apple-touch-icon" sizes="114x114" href="/images/ios/touch-icon-iphone-retina-precomposed.png">
	<link rel="apple-touch-icon" sizes="144x144" href="/images/ios/touch-icon-ipad-retina-precomposed.png">

### Character encoding

Quickly and easily ensure proper rendering of your content by declaring an explicit character encoding. When doing so, you may avoid using character entities in your HTML, provided their encoding matches that of the document (generally UTF-8).

	<head>
	  <meta charset="UTF-8">
	</head>

### Data attributes

Data attributes may be useful. They should be formatted with dashes as follows:

	<div data-some-name="some value"></div>

### IE compatibility mode

Internet Explorer supports the use of a document compatibility <meta> tag to specify what version of IE the page should be rendered as. Unless circumstances require otherwise, it's most useful to instruct IE to use the latest supported mode with edge mode.

For more information, read this [article](http://stackoverflow.com/questions/6771258/whats-the-difference-if-meta-http-equiv-x-ua-compatible-content-ie-edge-e).

	<meta http-equiv="X-UA-Compatible" content="IE=Edge">

This really should be avoided as we writing new code. This is for sites that were never going to be developed for new browsers.

# CSS and JavaScript includes

Per HTML5 spec, typically there is no need to specify a type when including CSS and JavaScript files as text/css and text/javascript are their respective defaults.

### HTML5 spec links

[Using link](http://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-link-element)
[Using style](http://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-style-element)
[Using script](http://www.w3.org/TR/2011/WD-html5-20110525/scripting-1.html#the-script-element)

#### CSS:

	<link rel="stylesheet" href="code-guide.css">

#### JS:

	<script src="code-guide.js"></script>

### Language attribute

From the HTML5 spec:

> Authors are encouraged to specify a lang attribute on the root html element, giving the document's language. This aids speech synthesis tools to determine what pronunciations to use, translation tools to determine what rules to use, and so forth.

Read more about the lang attribute in the spec (http://dev.w3.org/html5/spec-preview/global-attributes.html#the-lang-and-xml:lang-attributes).

Head to Sitepoint (http://www.sitepoint.com/web-foundations/iso-2-letter-language-codes/) for a list of language codes.

	<html lang="en-GB">
	...
	</html>

### Semantic HTML

The foundation of solid front-end code is built upon semantic HTML. The benefits include:

* Accessibility

* Responsive Web Design

* SEO

* Developer understanding and onboarding

* Maintainability

* Performance

For more information see this article: [Semantic HTML](http://adamsilver.github.io/articles/semantic-html/).

### Syntax

* Use soft tabs with spaces.

* Nested elements should be indented once.

* Always use double quotes, never single quotes, on attributes.

Don't omit optional closing tags (e.g. `</li>` or `</body>`).

	<!DOCTYPE html>
	<html lang="en-GB">
		<head>
			<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
			<title>Page title</title>
		</head>
		<body>
			<img src="/path/to/images/company-logo.png" alt="Company">
			<h1>Page title</h1>
			<div class="searchResults"></div>
		</body>
	</html>

### HTML (not XML/XHTML)

* Don't include a trailing slash in self-closing elements.

* Boolean attributes should use short form notation. Spec states "Authors should be aware that many user agents only recognize the minimized form of boolean attributes and not the full form."

The only reason to self-close tags and use long form attributes is for serving up a page using application/xhtml+xml which we don't do and should never do. XHTML came second and lost the battle shortly after its arrival. The most cross-browser compliant code is HTML.

Added bonus (for the performance obsessive): a few less bytes.

### Using IDs

Use IDs sparingly but a unique module should use one if it only appears once on a page. e.g. header is a perfect candidate for an ID.

Required:

* In page anchors and skip links

* form controls with labels

* Unique module identifiers

#### Bad examples

Coming soon.

#### Good examples

Coming soon.

## CSS

## JS

