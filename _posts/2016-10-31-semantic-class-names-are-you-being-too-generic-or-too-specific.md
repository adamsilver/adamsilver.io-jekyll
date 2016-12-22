---
layout: post
title: "Semantic class names: are you being too generic or too specific?"
date: 2016-10-31 09:00:01
categories: css
---

Even if you’re completely sold on [semantic class names](http://maintainablecss.com/chapters/semantics/) and avoid stylistic and behavioural class names altogether, choosing a good class name is hard.

The problem boils down to naming your classes either too generically or too specifically. Both of which have pros and cons. But I like to think we can choose a class name without any cons. Let's see.

Most developers I've worked with tend to use overly generic class names. There's a tendency to do this because&mdash;at least in theory&mdash;the more generic something is the more reusable it is. But for CSS this isn't really the case.

It's easier to explain what I mean by example. So, let's build a login form together. The login form has an email and password field. I will leave out certain elements for brevity.

To start, we could name these elements as follows:

    <form class=”loginForm”>
      <div class=”loginForm-email”>
        <label>…</label>
        <input type=”email”>
      </div>
      <div class=”loginForm-password”>
        <label>…</label>
        <input type=”password”>
      </div>
    </form>

These class names are coupled to this one module. They can't be reused elsewhere. This is good because we can style the form without affecting other forms. On the other hand, by using a mixin or comma-delimitting selectors we *can* reuse the *styles*:

    .loginForm-email,
    .loginForm-password,
    .someOtherForm-someField {
      /* Common field style */
    }

There are problems with this approach. First, you could end up with quite a lot of CSS which seems a bit unnecessary. Second, every new field requires CSS changes. Simple changes, but changes nonetheless.

Now if your forms have a different structure and aesthetic this isn't a problem at all. In fact it's a benefit. But I would guess that most, if not all forms will have the same styling. Afterall, good design is consistent.

We could improve our approach by upgrading a field to a module and naming it `.formField`. This feels better to me, at least at this stage of the analysis. This module doesn't require a mixin or comma-delimitted selectors. And each new field does not require CSS changes.

Let's continue by finding some problems with this generic, reusable `.formField` module. What if some fields need to accomodate a hint, for example? And for the purposes of this example this sort of field needs different styles to accomodate the hint.

This is where [modifiers](http://maintainablecss.com/chapters/modifiers/) come in. Just add an extra class name and make the required tweaks.

    <form class=”someForm”>
      <div class=”formField”>
        <label>…</label>
        <input type=”text”>
      </div>
      <div class=”formField formField-withHint”>
        <label>…</label>
        <p>The hint goes here</p>
        <input type=”text”>
      </div>
    </form>

In this case we just needed a few tweaks and so this generic class name works well. But what if we had something that's significantly different? For example, you might need a field with radio buttons.

Using a modifier is problematic because there is little to inherit. When we named our module `.formField` we didn’t consider radio buttons, or any other type of control for that matter.

This isn’t necessarily a bad thing. In fact, in many ways this is good. If we try too early to find commonality in a design system, it can lead to over-engineered solutions.

Text fields are very different to radios. The latter requires a legend, fieldset and a different structure. They're so different that despite them both being form fields, we shouldn't consider them to be the *same* at all. This point is worth deliberating over.

Earlier, `.formField` felt like a good name for a class. But now, with this new information it doesn't seem so good. We don't want to update styles for a radio field and worry about regressing the text fields.  And, we don't want to work out the few bits of commanility between these two entities, just to shave a little CSS.

Having analysed the situation, it's much easier to decide on a good name. I would suggest naming the text field `.textField` and the radios `.radioField`.

This enables us to treat them as the distinct modules they are. They're specific enough to be able to differentiate. Yet they are generic enough to be reused across multiple forms, without writing unnecessary CSS.

In retrospect this seems rather easy. The problem is that we face decisions like this all the time. Or we don't face them and end up with unmaintainable CSS. This is why I prefer to start with specific class names.

I'd rather have a little more CSS and the flexibility to style elements consistently (or differently whatever the case may be). Otherwise, I'd have to contend with overrides and regression.

This affords us the space and time to learn what is worth abstracting and what isn't. You may learn that even `.textField` is too generic. For example, you might have many different types of text fields that are better off being their own modules. You might not.

What's important is that we think about these things frequently and rigorously. I've found the following questions useful over the years:

**1) Do you have a module appearing in many places but with slightly different aesthetics based on proximity, location or content?**

If yes, you should probably use a [modifier](http://maintainablecss.com/chapters/modifiers/).

**2) Do you have a component that could be used elsewhere pretty much as is?**

If yes, you should probably convert the module into a component. But, be careful not to name it too generically.

 **3) Do you have a module with many different modifiers? Or are you spending time working out what styles are common to all scenarios?**

If yes, you probably named the module too generically. Split it out into several dedicated modules.

Having to think about class names is hard. But not thinking about class names is much harder, at least down the line. If in doubt, go specific, but if you think about these problems frequently you may not have to.