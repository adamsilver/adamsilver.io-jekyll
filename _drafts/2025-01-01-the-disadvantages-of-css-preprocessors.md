---
layout: post
title:  "The disadvantages of CSS preprocessors"
date:   2015-01-01 09:00:01
categories: css
---

* Extra (and specific) tooling is needed. Developers shouldn't have to be limited to a specific IDE.

* Compile time. Every save might have an overhead for seconds to minutes. Not as good as save and refresh.

* Saving source files and generated files in source control. Do you save just .less or scss files or do you also save the generated CSS files. Remove the extra cognitive burden.

* Removing fine control. Relying on Less means accepting what it spits out as we are abstracted from that. This could cause problems with performance (Mixins are an example) that we have to workaround which slows us down.

* Cannot adhere to conventions. e.g. unable to nest media queries meaning that they are decoupled from the element which goes against maintenance standards which slows us down.

* Onboarding. By requiring that knowledge we narrow the choice of candidates...Alternatively we don’t require the knowledge from candidates, meaning they learn on the job which slows us down.

* Debugging source files. As the source files aren’t interpreted by the browser there is a significant cognitive burden when debugging. Debugging is 90% of the job and this is a huge problem that slows us down.

* Another tool to the tech stack. Every tool added is something that we now have to setup, work with, work around, upgrade, maintain, monitor and rely on, which slows us down

* CSS linters (command line, htc or IDE) are commonly available. LESS specific either not readily available and that slows us down.

* Sprinkling for example @brandRed all over the place is actually worse than the CSS forced equivalent. What if the colour changes from red to something else. Have to do a search and replace anyway. Might as well have been a hex code sprinkled or better yet, comma delimit a single selector. Only update in one place.

* File size deceiving.

## But what about variables, mixins and nesting...

### Variables

selector,
anotherSelector {
	color: red;
}

### Mixins

selector,
anotherSelector {
	border-radius: 3px;
	-webkit-border-radius: 3px;
}

## Nesting

.someComponent {
}

.someComponent .someChild {
}

## Summary

Less might have attractive qualities but there are suitable alternatives without using a preprocessor.
There are simple ways to reuse styles in a semantic and maintainable way.
“Debugging is twice as hard as programming” - it’s our duty to make that as easy as possible.
We can speed up drastically.

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="http://stackoverflow.com/questions/3896730/whats-the-advantage-of-logic-less-template-such-as-mustache">Logic-less templating discussion</a></dd>
</dl>

[]:http://jaketrent.com/post/cons-css-preprocessors/
[]:http://stackoverflow.com/questions/28570752/what-are-the-advantages-disadvantages-of-using-css-preprocessors-e-g-sass-less
[]:http://blog.millermedeiros.com/the-problem-with-css-pre-processors/

