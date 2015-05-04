---
layout: default
title: Frontend code guidelines
id: guides
permalink: /frontend-code-guidelines/
---

# {{page.title}}

This acts as a single point of reference for any code guidelines, standards and conventions for use in any website or application.

## Definition of done

This guide clarifies what it takes for a story to be considered done.

* HTML is valid according to W3C. http://validator.w3.org/

* HTML is accessible.

* HTML is written to agreed conventions.

* CSS is valid according to W3C. http://jigsaw.w3.org/css-validator/

* CSS is written to agreed conventions.

* CSS passes CSS lint rules.

* JS passes JSHint rules.

* JS passes JSCS rules.

* JS is written to agreed conventions.

* JS Jasmine unit tests pass.

* JS Jasmine unit test coverage is at certain level dependent upon story.

* Demo'd and approved by Product Owner before Pull Request.

* Code reviewed and approved by at least one other developer.

* Cross browser tested according to the browser matrix we support.

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

### Syntax

* Use soft tabs.

* When grouping selectors, keep individual selectors to a single line. Include one space before the opening brace of declaration blocks for legibility. Place closing braces of declaration blocks on a new line.

	selector,
	selectorN {

	}

* Include one space after : for each declaration. Place closing braces of declaration blocks on a new line. End all declarations with a semi-colon. The last declaration's is optional, but your code is more error prone without it.

	selector {
		rule: value;
		rule2: value;
	}

* Comma-separated property values should include a space after each comma (e.g., box-shadow).

	selector {

	}

* Don't prefix property values or color parameters with a leading zero (e.g., .5 instead of 0.5).

* Lowercase all hex values, e.g., #fff. Lowercase letters are much easier to discern when scanning a document as they tend to have more unique shapes.

* Use shorthand hex values where available, e.g., #fff instead of #ffffff.

* Quote attribute values in selectors, e.g., input[type="text"]. They’re only optional in some cases, and it’s a good practice for consistency.

* Avoid specifying units for zero values, e.g., margin: 0; instead of margin: 0px;.

	/* Bad CSS */
	.selector, .selector-secondary, .selector[type=text] {
	  padding:15px;
	  margin:0px 0px 15px;
	  background-color:rgba(0, 0, 0, 0.5);
	  box-shadow:0px 1px 2px #CCC,inset 0 1px 0 #FFFFFF
	}

	/* Good CSS */
	.selector,
	.selector-secondary,
	.selector[type="text"] {
	  padding: 15px;
	  margin-bottom: 15px;
	  background-color: rgba(0,0,0,.5);
	  box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
	}

### Conventions and style

#### Split files  up by what they are, not where they live

Sometimes components live in many places or get moved around. If they are named based on what they are, then little or no reorganising needs to take place later.

#### Don't use @import

Compared to <link>s, @import is slower, adds extra page requests, and can cause other unforeseen problems. Avoid them and instead opt for an alternate approach:

* Use multiple <link> elements

#### Media query placement

Place media queries as close to their relevant rule sets whenever possible. Don't bundle them all in a separate stylesheet or at the end of the document. Doing so only makes it easier for folks to miss them in the future. Here's a typical setup.

#### Prefixed properties

Don't use vendor prefixes unless absolutely necessary and beneficial to the product. They are prefixed for a reason. Instead be happy that they degrade gracefully all on their own.

#### Shorthand notation

Strive to limit use of shorthand declarations to instances where you must explicitly set all the available values.

	/* good */
	selector {
		padding-left: 10px;
	}

	/* bad */
	selector {
		padding: 0 0 10px 0;
	}

Likewise:

	/* good */
	selector {
		padding: 10px 10px 0 10px;
	}

	/* bad */
	selector {
		padding-left: 10px;
		padding-right: 10px;
		padding-top: 10px;
	}

Common overused shorthand properties include:

* padding
* margin
* font
* background
* border
* border-radius

Often times we don't need to set all the values a shorthand property represents. For example, HTML headings only set top and bottom margin, so when necessary, only override those two values. Excessive use of shorthand properties often leads to sloppier code with unnecessary overrides and unintended side effects.

#### Comments

Each module or natural section of code should be split out into separate files reducing the need to comment. However, there is a limit to how many individual files you can have on a page. On production this is okay because you can bundle but in development this is problematic. For that reason one file may have one or more distinct parts. A juicy comment block with the name of the component/section helps. Make sure the wording is searchable.

	/***********************************************
	* Side basket on menu page
	***********************************************/

	.sideBasket {

	}

The 2nd reason to comment is if some obscure CSS is required for a bug.

#### ID/class naming conventions

Names should be semantic so keep them meaningful and englishified. They should be understandable by anybody and use lower camel case.

	/* good */
	.loginButton {

	}

	/* bad */
	.btn-login {

	}

	/* bad */
	.btnLogin {

	}

#### Selectors

* Use classes over generic element tag for optimum rendering performance and cross-browser support; avoid using attribute selectors (e.g., [class^="..."]). Browser performance is known to be impacted by these and cross-browser compatibility becomes an issue.

	/* good */
	.textInput {

	}

	/* bad */
	input[type="text"] {

	}

* Keep selectors short and strive to limit the number of elements in each selector to three. But don't break module conventions i.e. any styling specifically belonging to a module should be qualified by the module container.

	/* good */
	.someModule {

	}

	.someModule .someChildThatBelongsToModule {

	}

	/* bad */

	.someModule {

	}

	.someChildThatBelongsToModule {

	}

### Bundling and Minification and more

All files should be bundled and revved. Bundle file names should be in the following format:

	<name of bundle>.<the version>.css

e.g. globalModules.123.css

### Architecture

#### Base

Base rules are the defaults. They are almost exclusively single element selectors but it could include attribute selectors, pseudo-class selectors, child selectors or sibling selectors. Essentially, a base style says that wherever this element is on the page, it should look like this.

Developers should be *very* careful when editing the base styles and it should be imperative that any change to these styles be communicated and reviewed by the other developers.

Examples of base rules:

	html,
	body {
		margin: 0;
	}

	a {
		color: #000;
	}

	a img {
		border: none;
	}

As there aren't many state classes just add these to base.css. An example of a state class:

	.hide {
		display: none;
	}

#### Clearfix

Littering the HTML DOM with *clearfix* classes is not ideal because it is not semantic. Read more under HTML/Semantic HTML.md. It talks about Responsive Web Design issues too.

The clean way to solve this is by having a dedicated file called clearfix.css.

Within this file is one ruleset with comma delimited (opt-in) selectors.

	/* Inside clearfix.css */
	#whatever:after,
	selector:after,
	.andSoOnEtc:after {
		clear:both;
		content:".";
		display:block;
		height:0;
		visibility:hidden;
	}

It is then likely that various versions of IE will need a conditional style, within the relevant conditional IE stylesheet for hasLayout issues.

	/* e.g fixing IE7 */

	#whatever,
	selector,
	.andSoOnEtc {
		zoom: 1
	}

And for IE6...considering the effort for this is minimal...

	/* e.g fixing IE6 */

	#whatever,
	selector,
	.andSoOnEtc {
		height: 1%;
	}

#### Colour

Reusing colours is straightforward. Take an example where two different paragraphs and one heading specific to a module require the same colour.

	.someModule p,
	.someOtherModule p,
	.basketModule h2 {
		color: #ff0000;
	}

#### Layout rules

Layout rules divide the page into sections. Layout holds one or more modules together.

Examples of layout rules:

	#container {

	}

	#header {

	}

	#footer {

	}

	#content {

	}

##### Grids

Due to the mandatory requirements and subsequent benefits of semantic HTML, it is advisable that we don't have constructs that are named based on their styles such as .column, .column-1-of-3 or .centeredColumns.

There are two methods that should be utilised depending on the problem.

##### 1. Generic style

Where possible, if several pages use the **EXACT** same layout, it might be beneficial to use generic names for main constructs, such as "primaryContent" and "secondaryContent". Example below on this. But this is very much dependent upon the visual design.

Assuming visual design changes will be applied consistently to these pages, only the selector here will have to change to apply to all pages.

##### 2. Specific style

In an ideal world, the visual design will design something that is so consistent and maps beautifully to lean HTML and CSS to boot which you can easily apply without pain across the entire site. Bearing in-mind the ideal world has never happened? It is likely you will need to forget option #1.

At time of writing, this is particulary very difficult as a 960px visual grid does not map to HTML and CSS in a concise way. Nothing wrong with that, just use semantic mark-up such as "searchFilterContainer" (for left section on big screens) and "searchResultsRestaurants" (for the right section on big screens).

##### Generic example

If for example we have the following requirements:

a) Viewport width of 960 is two columns
b) Viewport width is less than 960 means each column is stacked

Then the solution in HTML should be something like this:

HTML:

	<div id="content">
		<div id="primaryContent">
			<!-- some modules -->
		</div>
		<div id="secondaryContent">
			<!-- some modules -->
		</div>
	</div>

CSS:

	#content {
		overflow: hidden;
		width: 960px;
	}

	@media (max-width: 960px) {
		#content {
			overflow: auto; /* 'hidden' is only required when we are floating columns */
			width: 640px;
		}
	}

	#content #primaryContent,
	#content #secondaryContent {
		float: left;
		width: 480px;
	}

	@media (max-width: 960px) {
		#content #primaryContent,
		#content #secondaryContent {
			float: none;
			width: auto;
		}
	}

If you wanted to reuse but only target certain pages or sections with these styles you could qualify these with a body id as follows:

	@media (max-width: 960px) {
		body#orderConfirmation the rest of the selector {

		}
	}

Etc.

Doing it this way means we gain all the benefits of semantic mark-up whilst keeping the page entirely scalable including the challenges of RWD.

#### Module

Every module should be encapsulated with a container with the module name as the class or ID. IDs should be used sparingly but there are times when they are the right thing; usually when a module is unique to a page or site.

All children that depend on living within a module must be qualified by the container selector. Here is an example:

	.sideBasket {

	}

	.sideBasket p {

	}

	.sideBasket ul .item {

	}

##### Separation of files and the constraints

There is a a limit of 31 CSS files for some versions of Internet Explorer.

Unfortunately, this means that each module can't belong to it's own file. It would then be advisable to put modules in a globalModules.css and for page specific modules e.g. modules that belong on the home page put in homeModules.css.

As an example for serp (the first page to agreed standards), breadcrumb, header and footer live in globalModules.css. All serp stuff lives in searchResults.css.

#### Internet Explorer conditional CSS

In order to provide essential CSS fixes to IE9 and below there should be a file per each browser that we support.

Do not group these files together with a conditional comment such as "IE9 and below".

	<!--[if IE 6]><link rel="stylesheet" href="/css/ie6.css" type="text/css" media="all"><![endif]-->

	<!--[if IE 7]><link rel="stylesheet" href="/css/ie7.css" type="text/css" media="all"><![endif]-->

	<!--[if IE 8]><link rel="stylesheet" href="/css/ie8.css" type="text/css" media="all"><![endif]-->

	<!--[if IE 9]><link rel="stylesheet" href="/css/ie9.css" type="text/css" media="all"><![endif]-->

The benefits include:

* Each problem browser will only have 1 extra HTTP request that is as lightweight and specific as possible

* Dropping support for a version if/when decided is straightforward. Delete the line in the HTML, delete the file.

* CSS fixes are encapsulated within the CSS file and not via HTML calss littering.

* CSS hacks are not required because the conditional CSS is loaded last and specifically targeted towards the browser version.

## JS

## Images