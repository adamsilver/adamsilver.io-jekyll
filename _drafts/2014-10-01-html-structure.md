There are many other websites out there with information as to how to create a basic web page, so I won't repeat that. What I will talk about is the unique way in which I go about structuring the HTML for large and smaller websites.

Common template structure

Whilst the code per project is custom, I find the following to be a great base to work from - (remove/add HTML as required):

https://gist.github.com/1037425

Project background

I am used to working on rather large websites with a medium-size front-end team. It is therefore important to have some structure to our HTML but allowing each developer working with different templates to achieve the design. A site will usually contain several different templates. There are usually common components (container, header, content, footer etc). There are various different layouts i.e. 1 column, 2 column, 3 column and many others.

Using the <div id="content"> elements

The HTML inside of <div id="content"> is where the template-specific modules live. The <div id="primary">, <div id="secondary"> and <div id="tertiary"> elements can be used in a hierarchical fashion, allowing visual layout, such as columns. If <div id="tertiary"> isn't needed remove; if extra 'sections' are needed, then add them.



The HTML is semantic and flexible, and there are enough 'hooks' to allow different CSS files to control the visual layout for each unique template. It is simple but can be very powerful.

Body id and class

The body id is used to affect page specific layout and the body class is used to create section specific layout. If the page in question is a payment page within an e-commerce website, then the code may be something like:

https://gist.github.com/1037427

I use "pg" before the unique id as it is likely that a module called "paymentInformation" will be within the page as well (and will require the same id). So I reserve "pg" as a prefix for page ids. The section of the site is "checkout" (as opposed to "account management" or "browse"), so the class name reflects that also. Styling of common components with in sections becomes very easy. Styling the different layouts (1 or 2 column) based on body id also becomes very easy.

Summary

I have shown the basic HTML structure I use and explained some of the powerful features. I plan to elaborate on this in later posts and write about applying CSS to control the layout of this mark-up in a development environment, where building encapsulated modules, while adhering to a common standard results in robust HTML (and CSS), that will scale up (or down) as the project changes through its life-cycle.

