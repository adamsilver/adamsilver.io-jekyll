---
layout: post
title:  "The Real Progressive Enhancement"
date:   2032-01-01 09:00:01
tagline: "How to avoid the fuck you experience"
categories: js
---

> &ldquo;Progressive Enhancement is the philosophy of providing a baseline **core** experience for everyone; and creating an even better, **enhanced** experience for people who use a more capable browser.&rdquo;
> <br> &mdash; <cite>Adam Silver (Me!)</cite>

Progressive Enhancement is one of those things that "everybody" knows don't they? However, there are a lo of significant misunderstandings about it &mdash; from both a philosophical stand point and more importantly the technical implementation.

Whilst it doesn't just pertain to Javascript, it is the aspect that we developers tend to struggle with the most &mdash; we just don't seem to be able to answer the following question:

> &ldquo;How the hell am I meant to write Javascript in a Progressive Enhancement way?&rdquo;

Before answering this question, I think it would be highly beneficial to take a moment and set the scene&hellip;

> Unobtrusive Javascript is not Progressive Enhancement!

Placing script in external files does not, in anyway affect the ability to provide a *core* or *enhanced* experience to your users. *Ahem!*

> Handling the Javascript disabled scenario is only half of the story!

Granted, the majority of users have Javascript enabled. But, some do actually turn it off. Some use browsers that don't support Javascript. Sometimes a plug-in, perhaps one that disables tracking, causes all scripts to break &mdash; that is, one script references an object in another (blocked) script.

Sometimes a firewall, plug-in or proxy ate the script &mdash; this actually happened to me when I worked at Deutsche Telekom. The network decided to mess with a script it thought it recognised. As we worked for DT this eventually got fixed, but an "outsider" would likely not have got the same result.

But, and by far the **most common** and **most important** scenario is one where the browser lacks support to execute the code it's been given.

> JS does not degrade gracefully without developer intervention (unlike HTML and CSS).

For example `<input type="email">` and `border-radius` naturally degrade. However, when a browser tries to execute script it doesn't recognise, then you get an error &mdash; sometimes an irrevocable one. For example try running the code below in IE8.

	// 1. retrieve form
	var form = document.forms[0];

	// 2. attach event listen for submit event
	form.attachEvent('submit', function() {

		// 3. Stop the form from submitting
		window.event.returnValue = false;

		// 4.
		var widgets = document.getElementsByClassName('widget');

		// 5. etc
	});

This fails at point #4 as IE8 doesn't understand it. The problem here is that the user doesn't get the enhanced experience *nor* the degraded experience.

> The Fuck You experience

*No*, instead they get the **fuck you** experience. And, this problem applies to pretty much any browser. It's a continuum of new browsers and new APIs, each with their varying level of (reliable) support.

## What are others doing to solve this problem?

It seems that the industry talks about Progressive Enhancement in waves, one of which we are riding right now (at the time of writing). For the few that talk sense, there are many others that drown these people out.

> If a tree falls in the forest...

Some practice the art of ignoring there *is* a problem period; putting their Javascript in external files, making sure their site works when Javascript is disabled, and very often, abdicating responsiblity over to popular 3rd party libraries, without peeping under the hood to check for quality &mdash; which is the only way you can be sure of quality &mdash; or at the very least checking what happens in various unsupported browsers. Also, the fact that browsers are unsupported is a clear tell that these libraries don't practice Progressive Enhancement!

These libraries often mark support for a subset of browsers that they feel are worthy at *that* current moment. The unlucky people who use *other* browsers get the *fuck you* experience, &mdash; often at times when it would be pretty straightforward to have given these users the degraded *core* experience.

> Pull the rug out from under...

Additionally, you are on the end of it when a library drops support for a particular browser, in the way of upgrade and regression testing costs. If you don't want the lack of browser support but do want the bug fixes, you're *without a paddle*, so to speak.

> Cuts the mustard falls short

This approach is relatively new and has the *right* philosophy in that it has the notion of a core and an enhanced experience. Unfortunately, it turns out the technical implementation (as shown below) is frail.

	if(	document.querySelector && window.addEventListener && window.localStorage) {
		// bootstrap application
	}

CTM works by detecting (not testing) a few select modern browser APIs in order to *infer* that the browser is modern (how the developer decides what is and what is *not* modern is most certainly a head scratcher). Then if the browser is "modern" then it will enhance the experience for those users by bootstrapping the application.

The emphasis on *browsers* as opposed to *features* suggests this technique is doomed from the start, then of course inference is little better than User Agent sniffing, and we all know how frail UA sniffing is when it comes to developing for the general web. Furthermore, there are a lot of technical issues with CTM documented as follows:

**1. Detecting host objects like this is dangerous**. *H is for Host* explains everything you need to know and why `isHostMethod` is what you need to avoid the danger.

**2. Detecting the presence of an API is not enough**. CTM only *detects* host object methods but often an API can contain bugs. Nicholas Zakas has an *entire* e-book on the subject entitled *The Problem with Native JavaScript APIs* that is an important read. And if your not sure of the difference between feature detection and feature testing, Peter Michaux's article entitled *Feature Detection: State of the Art Browser Scripting* is a must-read.

**3. CTM degrades the experience unnecessarily**. CTM could easily rule out a perfectly capable browser from receiving the *enhanced* experience. Let's say you want your app to perform client-side form validation, something that say IE8 is perfectly capable of. CTM will unnecessarily suppress the enhanced experience &mdash; resorting to server round trips and the disadvantages that come with that (those are out of scope for this article).

**4. Some CTM implementations rely on Javascript polyfills to plug missing gaps**. Putting to one side that polyfills are ill-advised [0], the fact remains that CTM is not enough to determine whether you get the enhanced experience. CTM simply *suggests* that this browser is *somewhat* modern *at the time* it was written. It's like "hey, I am a modern browser, now load some polyfills for the older browsers". Weird.

**5. The CTM condition needs constant maintainance along the continuum of new browsers**. Again it's the same old problem &mdash; when do I drop support for a browser? This question doesn't really need to ever be asked. Either the browser is capable or not. Again go back to the philosophy of Progressive Enhancement for a moment. The point of CTM is that you don't ever provide the *fuck you* experience; worst-case, the *core* experience is fine.

**6. It's unreliable**. If the application uses any method beyond the ones in the CTM test, you likely provide a broken experience. Take the following example, it will break in browsers where `matchMedia` isn't provided. And, that's ignoring the aformentioned bugs with `matchmedia`. Whilst we are on the topic of bugs, `querySelector` also has bugs, so detection again in this context is *unreliable*.

	if(	document.querySelector && window.addEventListener && window.localStorage) {
		// application that uses other APIs

		window.addEventListener("load", function(e) {
			var matches = window.matchMedia(...);
		});
	}

Affectively, CTM is on to something, it's a good first step but leaves a lot to be desired.

## What's the solution?

*Disclaimer: this technique has been around for a long time and none of these ideas are my own.*

It should be becoming increasingly obvious what we need to do to answer the question of &ldquo;How the hell am I meant to write Javascript in a Progressive Enhancement way?&rdquo;

We need something that ensures the user never gets the *fuck you* experience but receives the much more reasonable *core* experience, or depending on the browser, network, browser extensions etc, the *enhanced* experience.

In order to do that you need to detect and, where necessary *test* any API the application utilises. The reason to detect is so that you can first determine the functionality exists and the reason to test is to ensure the API is bug free.

The only way to reliably do this is through facades. A library that practices the Real Progressive Enhancement will provide a (dynamic) API that lets you ask questions of it, abstracting the complexity away from the calling application. It looks something like this:

	if(lib.hasFeatures('x', 'y', 'z')) {
		x();
		y();
		z();
	}

You could have replaced `hasFeatures` for `actuallyCutsTheMustard` or `canEnhanceBasedOn`.

Notice it is remarkably similar to CTM, but abstracted away into a library so that you, the developer can easily decouple application logic from browser APIs (and *bugs!*). For the above application to run, the libary has exposed to the application that not only are all the required APIs available to use but they are *bug* free in this browser. There is no need for polyfills, user agent sniffing or inferences. There is a 1-to-1 mapping between what you check and what you use. Simple.

And, when the browser doesn't cut the mustard, the application can bail out safely. The user gets the degraded, js-disabled equivalent &mdash; the core experience. The user won't mind [0](zakas vid), if their browser can't provide the enhanced experience on this website, it can't provide that same experience on another website. You lose nothing in providing the core experience.

This is the **Real** Progressive Enhancement.

Explaining the intricacies of how to build a library like this really is out of scope for this article, and in anycase Peter Michaux does a far better job than I could ever do in *Cross-browser widgets*.

## Citations

<dl>
	<dt class="citation" id="ref0">[0]</dt>
	<dd><a href="#">Soon</a></dd>
</dl>

<!--

Perfectly capable browsers of yesteryear are deemed old today, browsers that support ES6 today will be deemed old in 2 years from now. It just doesn't have to be that way. Think in terms of features, not browsers. You only need browsers to verify that your detection and tests work in the largest range of browsers you can get your hands on.

* hasFeatures() >> cutsTheMustard()

* Infer is bad! link to an article and state that it is bad.

`matchMedia("(min-width: 400px)");` in Internet Explorer 9.

http://chimera.labs.oreilly.com/books/1234000001655/index.html

* no op isn't good enough, its a black hole.

* https://youtu.be/li4Y0E_x8zE?t=23m11s

> &ldquo;I’ve always maintained that, given the choice between making something my problem, and making something the user’s problem, I’ll choose to make it my problem every time.&rdquo;
> <br>&mdash; <cite>Jeremy Keith</cite>

Eg: loop through elements hide them but cant add event listener which shows them again, hidden content forever.

Cornford: The combination of the facts that it is impossible to determine which browser is executing the script, and that it is impossible to be familiar with all browser DOMs can be rendered insignificant by using feature detection to match code execution with any browser's ability to support it. But there is still going to be a diversity of outcomes, ranging from total failure to execute any scripts (on browsers that do not support javascript, or have it disabled) to full successful execution on the most capable javascript enabled browsers.

CTM: The more time goes on the more it becomes even less reliable.

Some say this is too much effort, but libraries and websites, software should be written once, and used many times.

-->