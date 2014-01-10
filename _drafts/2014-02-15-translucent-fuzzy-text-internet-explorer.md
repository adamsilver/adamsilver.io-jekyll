Setting opacity on text causes a “fuzzy” text effect. It happens if you have the following declared styles:

h1 { filter:alpha(opacity=50); }

One solution is to let Internet Explorer degrade by simply omitting this style.

However if the translucent text is mandatory you can add a background-color which fixes the issue as follows:

h1 { filter:alpha(opacity=50); background-color: #fff; }

Types of form elements
Multiple select
Multiple submit buttons
Submit type=image - not appearing in the elements collection, and the coordinates thing
HTML5