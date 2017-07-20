---
layout: post
title: Progressively enhanced Javascript
date: 2015-08-16 09:00:01
categories: progressiveenhancement js a11y
description: Using Javascript to design progressively enhanced interfaces is probably the most important and misunderstood subject in web development. Find out why and what you can do about it in this article.
---

Using Javascript to design progressively enhanced interfaces is probably the most important yet, misunderstood subject in web development.

In this article we're going to discuss these misunderstandings. Then, we'll explore cutting-edge techniques that have stood the test of time but that we've long forgotten.

> &ldquo;The problems we have with websites are ones we create ourselves&rdquo;
<br>&mdash; <cite>Motherfuckingwebsite.com</cite>

By default, the web is accessible to everyone. That's the web's super power. It's us designers and developers that take this natural super power and lace it with kryptonite, hurting users in the process.

Most of us care about users, but most of us also fail in execution. This is what we're going to be looking at momentarily. Before we do, let's define Progressive Enhancement.

> Progressive Enhancement ensures we give everyone a suitable experience for everyone; Then, where necessary, creating a better, enhanced experience for those using a more capable browser.

Progessive Enhancement applies to CSS too. But Javascript is where most of us struggle. We can't seem to nail down how to write Javascript in a progressively enhanced way.

## Progressive Enhancement myths

Whilst there are many [myths about Progressive Enhancement](http://www.sitepoint.com/javascript-dependency-backlash-myth-busting-progressive-enhancement/) I want to point out a couple of things.

First, unobstrusive Javascript (placing Javascript in external files), does not, in anyway, mean it's progresively enhanced.

Second, Javascript off is not the thing we're really solving here. Whilst some people do turn off Javascript, that's not the main use case. [Everyone has Javascript, Right?](http://kryogenix.org/code/browser/everyonehasjs.html) shows all the points of failure.

The last point is most common and most troublesome: *Using Javascript that the browser doesn't recognise.* Javascript&mdash;unlike HTML and CSS&mdash; doesn'tdegrade gracefully without intervention.

You see, `<input type="email">` degrades gracefully into a text box. And `border-radius` degrades gracefully by simply not showing rounded borders.

Javascript, however, will throw errors when the browser runs code it doesn't recognise. Internet Explorer 8, for example, breaks on the final line of this code:

	var form = document.forms[0];
	form.attachEvent('submit', function() {
      window.event.returnValue = false;
      var foos = document.getElementsByClassName('foo');
	});

This is because, it doesn't recognise `getElementsByClassName`. The page didn't degrade, nor did it fully enhance and that's the problem. The script intercepts the form's submit event, but breaks in the process giving users a broken interface.

Handling submit on the client to save a round trip (enhancement, fine. Handling submit on the server (core) is also fine. But this is neither.

Neither the browser nor the features in this example are relevant. It could be any browser and any feature. It makes no difference how new a browser is or what cutting edge feature it might support.

## What shouldn't we do?

It's often useful to explore problems with other solutions. Often we can't deduce what it is we should do, until we find out what it is we shouldn't.

### Don't ignore the problem exists

I struggled for a long time with this. I always thought about the current set of browsers that particular project had to adhere to. But just because I ignored those using different browsers, doesn't mean they don't exist.

### Don't hand off responsibility to third party libraries

When we put that script in our project, it becomes our responsibility. We should check under the hood for quality and watch out for the typical [multi-browser approach](https://gist.github.com/david-mark/06b9879f963ebb0eed62) that directly opposes Progressive Enhancement.

When a library releases a new version, they often drop support for various browsers. This is a never ending cycle. This is what Jeremy Keith is getting at when referring to the web as a [continuum](https://adactio.com/journal/6692).

### Don't rely on Cutting The Mustard

[Cutting The Mustard](http://responsivenews.co.uk/post/18948466399/cutting-the-mustard) (CTM) is a relatively new approach which poses as a reliable solution and one that is based on giving users a core or an enhanced experience. It's the implementation itself that is problematic.

	if(document.querySelector && window.addEventListener && window.localStorage) {
        // bootstrap application
	}

The script detects a few choice methods, to then infer that the browser is ‘modern’. This is impossible because of the sheer amount of new (versions of) browsers being released every day. And this is irrelevant because release date doesn't determine capability.

If the check passes, the Javascript application starts and attempts to give users an enhanced experience. Inferences are almost as frail as user agent sniffing, something that Richard Cornford explains in [Browser Detection and What To Do Instead](http://jibbering.com/faq/notes/detect-browser/).

Specifically though, CTM has the following problems:

- Detecting host objects this way is dangerous. [H is for Host](http://www.cinsoft.net/host.html) explains why and provides a robush alternative.
- Merely, detecting the existence of a method is not enough**.  Nicholas Zakas has a wonderful case study in [The Problem with Native JavaScript APIs](http://chimera.labs.oreilly.com/books/1234000001655/index.html). Peter Michaux's article [Feature Detection: State of the Art Browser Scripting](http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting) explains this in even more detail.
- It unnecessarily gives users the degraded experience. For example, due to the detection of a few choice ‘modern’ methods, it excludes Internet Explorer 8 (or 6 for that matter) from giving users client-side form validation even though these browsers are perfectly capabile of ensuring users have a fast experience.
- CTM often relies on polyfills. [Polyfills are problematic](/articles/the-disadvantages-of-javascript-polyfills/) in their own right. But if CTM needs polyfills, it shows that on its own the technique isn't robust.
- The condition needs constant maintenance as new browsers are released. We shouldn't have to update scripts when new browsers come out. We should revolve our scripts around features, not browsers.
- It's unreliable because if the application uses a method that is not within the condition, then there is a good chance the browser doesn't fully enhance.

## What is the solution?

Like Jeremy Keith says *I’ve always maintained that, given the choice between making something my problem, and making something the user’s problem, I’ll choose to make it my problem every time.*

In order to give users a core experience, we must ensure the interface works without Javascript. Why? Because that is the experience they will get, when Javascript is enabled but the browser doesn't recognise it.

Then we must detect, and where necessary, test *all* of the features the application references before the application uses them. This ensures the page doesn't end up half enhanced and therefore  irrevocably broken.

To do this reliably we need to use wrappers (or facades). The library should expose a dynamic API that adapts to the browser. This is how it might look:

	if(hasFeatures('find', 'addListener', 'storeValue')) {
      var el = find('.whatever');
      addListener(el, "click", function() {
        storeValue('key', 'value');
	  });
	}

Notes:

- It looks remarkably similar to CTM. The difference is that it doesn't reference browser methods directly. Facades are leaner and context specific, allowing the library to iron out bugs enabling us to reliably enhance an interface.
- There is a one to one mapping between what is in the condition and what the application uses. If the condition doesn't pass, the user gets the core experience.
- There is no need for polyfills. The library provides the method or it doesn't, depending on the browser. No caveats.
- The application logic is decoupled from the browser.

## How do we engineer a dynamic API?

Peter Michaux's article [Cross-Browser Widgets](http://peter.michaux.ca/articles/cross-browser-widgets) provides a detailed walkthrough all in one article. However, let's walk through a little example now.

	// use isHostMethod
	if(document.documentElement.classList.add) {
      var addClass = function(el, className) {
        return el.classList.add(className);
      };
	}

The calling application does this:

    if(addClass) {
      addClass(el, 'thing');
    }

The application is blissfully unaware that it only runs in browsers supporting `classList`. Those using Internet Explorer 9 and below get the degraded experience and that's okay. If you want to support Internet Explorer 9, add a fork as follows:

	var addClass;

	// Use isHostMethod
	if(document.documentElement.classList.add) {
      addClass = function(el, className) {
        return el.classList.add(className);
      };
	} else if(typeof html.className === "string") {
      addClass = function(el, className) {
        var re;
        if (!el.className) {
          el.className = className;
        } else {
          re = new RegExp('(^|\\s)' + className + '(\\s|$)');
          if (!re.test(el.className)) {
            el.className += ' ' + className;
          }
        }
      }
	}

This implementation supports almost every browser and the application didn't need to change. In future you can remove this fork once the number of visitors diminishes to a suitable level.

That is something only you can determine. Either way, users get a decent experience, proving that a library never needs to drop browser support, at least not in the traditional sense.

## Summary

Progressive Enhancement puts users first. Misunderstanding the application of Progressive Enhancement puts users last. Moreover, Progressive Enhancement is not more work, it's less work.

We don't have to endlessly play catch up with browsers. We don't have to give users a broken experience. Instead let's write backwards compatible and future proof code that creates robust and inclusive experiences for everyone.

<!--

Cornford:
The combination of the facts that it is impossible to determine which browser is executing the script, and that it is impossible to be familiar with all browser DOMs can be rendered insignificant by using feature detection to match code execution with any browser's ability to support it. But there is still going to be a diversity of outcomes, ranging from total failure to execute any scripts (on browsers that do not support javascript, or have it disabled) to full successful execution on the most capable javascript enabled browsers.

Veal:
I would add - and with a mobile connection you have no choice but to use the proxy because that is the way the network is configured. They are not as open as your home broadband and companies often employ a proxy to save bandwidth, and again you cannot avoid this


	if(document.querySelector && window.addEventListener && window.localStorage) {
	    // application that uses other APIs

	    window.addEventListener("load", function(e) {
	        // FAIL = ANOTHER FUCK YOU
	        var matches = window.matchMedia(...);
	        // ...other stuff...
	    }, false);
	}

The idea of abstractions are good, the idea of several abstractions i.e. a library, is also good. But if that library is monolithic in nature, context-less, lacks feature detection and feature testing, leans on polyfills (or browser sniffing or object inferences etc) and does **not** expose a dynamic API, then ultimately you are unable to Progressively Enhance your application and your users and the business you work for, will suffer for it.

At the very least, it is beneficial to be able to spot code that does not conform to the principles of Progressive Enhancement. Particularly, the kind that doesn't even attempt to degrade gracefully in the face of danger.

This example will also demonstrate that Progressive Enhancement is not a drag in the way of "having to support old irrelevant browsers". Quite the opposite in-fact. The words "drops support for" changes to "degrades gracefully in". You also get to determine an appropriate degradation point suitable for your project.

-->