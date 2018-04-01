---
layout: post
title: Progressive enhancement explained simply
date: 2018-04-01 09:00:01
categories: js
---

*This is a little excerpt from my upcoming book, Form Design Patterns. [Sign up to my newsletter]({{site.url}}/signup/) and I'll tell you when it's on pre-sale.*

Progressive enhancement is about users. It just happens to make our lives as designers and developers easier too. Instead of keeping up with a set of browsers and devices (which is impossible!) we can just focus on features.

First and foremost, progressive enhancement is about always giving users a reasonable experience, no matter their browser, device, or quality of connection. When things go wrong – and they will – users won’t suffer in that they can still get things done.

There are a lot of ways an experience can go wrong. Perhaps the style sheet or script fails to load. Maybe everything loads, but the user’s browser doesn’t recognize some HTML, CSS, or JavaScript. Whatever happens, using progressive enhancement when designing experiences stops users having an especially bad time.

It starts with HTML for structure and content. If CSS or JavaScript don’t load, it’s fine because the content is there.

If everything loads OK, perhaps various HTML elements aren’t recognized. For example, some browsers don’t understand `<input type="email">`. That’s fine, though, because users will get a text box (`<input type="text">`) instead. Users can still enter an email address; they just don’t get an email-specific keyboard on mobile.

Maybe the browser doesn’t understand some fancy CSS, and it will just ignore it. In most cases, this isn’t a problem. Let’s say you have a button with `border-radius: 10px`. Browsers that don’t recognize this rule will show a button with angled corners. Arguably, the button’s perceived affordance is reduced, but users are left unharmed. In other cases it might be helpful to use feature queries.

Then there is JavaScript, which is more complicated. When the browser tries to parse methods it doesn’t recognize, it will throw a hissy fit. This can cause your other (valid and supported) scripts to fail. If your script doesn’t first check [that the methods exist (feature detection) and work (feature testing)]({{site.url}}/articles/progressively-enhanced-javascript/) before using them, then users may get a broken interface. For example, if a button’s click handler calls a method that’s not recognized, the button won’t work. That’s bad.

That’s how you enhance. But what’s better is not needing an enhancement at all. HTML with a little CSS can give users an excellent experience. It’s the content that counts and you don’t need JavaScript for that. The more you can rely on content (HTML) and style (CSS), the better. I can’t emphasize this enough: so often, [the basic experience is the best and most performant one]({{site.url}}/articles/designing-for-actual-performance/). There’s no point in enhancing something if it doesn’t [add value](http://inclusivedesignprinciples.org/#add-value).

Of course, there are times when the basic experience isn’t as good as it could be – that’s when it’s time to enhance. But if we follow the approach above, when a piece of CSS or JavaScript isn’t recognized or executed, things will still work.

Progressive enhancement makes us think about what happens when things fail. It allows us to build experiences with resilience baked in. But equally, it makes us think about whether an enhancement is needed at all; and if it is, how best to go about it.
