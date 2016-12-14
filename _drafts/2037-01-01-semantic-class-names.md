---
layout: post
title: Semantic class names: are you being too generic?
date:   2037-01-01 09:00:01
categories: css
---

Make no mistake. Naming class names is difficult. It’s no coincidence that I
discuss [semantic class names](http://maintainablecss.com/chapters/semantics) so early on in [MaintainableCSS](http://maintainablecss.com/). In that chapter, I explain why we should name a module based on what it is. Not what it looks like or how it behaves. 

But, even if you’re completely and utterly sold on the rational; even if you avoid stylistic and behavioural class names, you can still get your knickers in a twist. The problem boils down to naming your classes either too generically or too specifically. Both of which have pros and cons. 

Most developers go for generic. In theory, this is a good because the more generic the class name, the more reusable it is. In reality it’s not so simple.

It's easier to explain all this with an example. Let's build a login form together. Our login form consists of an email and password field.

To start, we could name these elements as follows:

    <div class=”loginForm”>
      <form>
        <div class=”loginForm-email”>
          <label>…</label>
          <input type=”email”>
        </div>
        <div class=”loginForm-password”>
          <label>…</label>
          <input type=”password”>
        </div>
      </form>
    </div>

These class names are specific and coupled to the module. This is
good because we can apply styling to this form without affecting the others. But, if we wanted to, we could ensure that all forms (including this one) have the same aesthetic. Either by using a mixin or by comma-delimitting selectors:

    .loginForm,
    .someOtherForm {
      /* Common styles for container */
    }

    .loginForm-email,
    .loginForm-password,
    .someOtherForm-someField {
      /* Common styles for fields */
    }

If you have a lot of forms, you could end up with a lot of CSS. This seems a bit unnecessary. Can we do better?

We could choose a more generic class name. Perhaps `.loginForm-field` would be better. This enables us to reuse the same styles across all fields within the login form. But aren't these styles relevant to all fields across all forms? Probably. Consistency is an important aspect of good design. 

Let's change these components into a module. And let's name this module `.formField`. That feels better doesn't it?

All of the class names we've tried so far are semantic. But, they impact the maintainability of our CSS in very different ways. Let's continue and find some more problems with this generic, reusable `.formField` module.

What if some fields need to accomodate a hint, for example? And each of these fields needs different styles?

This is where [modifiers](http://maintainablecss.com/chapters/modifiers/) come
in. Just add an extra class name and make the required tweaks.

    <div class=”someForm”>
      <div class=”formField”>
        <label>…</label>
        <input type=”text”>
      </div>
      <div class=”formField formField-withHint”>
        <label>…</label>
        <p>The hint goes here</p>
        <input type=”text”>
      </div>
    </div>

In this case we just need a few tweaks but what if we had something that was significantly different? For example, plenty of forms have fields that are made up of radio buttons.

Using a modifier is problematic because there is little to inherit. When we named the form field `.formField` we didn’t consider radio buttons at all did we?

This isn’t a bad thing. In many ways this is good. If we try too early to find commonality in a design system, it can lead to over-engineered solutions. Technically speaking, you could name all elements `.item` because everything *is* an “item”, but this is neither practical nor useful.

Text fields are very different to a set of radios. The latter requires a legend, fieldset and a different structure e.g. labels are to the right of the control. 

They're so different that despite them both being form fields, we shouldn't consider them to be the *same* at all. This is a point worth pondering over.

Clearly `.formField` is too generic and causes problems. We don't want to update the radio field and worry about regressing the styles in a text field. And, we don't want to work out the few bits of commanility between these two entities, just to shave a little CSS.

If `.formField` is too generic and `.loginForm-email` (and `.loginForm-field`) is too specific then what do we do?

Having analysed the situation at length, it's much easier to decide on an appropriate name. I would suggest naming a text field `.textField` and set of radios `.radioGroupField`.

This enables us to treat them as the distinct modules they are. They are specific enough to be able to differentiate. Yet they are generic enough to be reused across multiple forms, without writing unnecessary CSS.

The problem is that we face decisions like this all the time. Or we don't bother and end up with our knickers in a twist. This is why I prefer to start with specific class names.

I'd rather have a little more CSS and the flexibility to style elements consistently (or different whatever the case may be). Otherwise, I'd have to tackle the issue of overrides and regression.

This approach also gives you the space and time to learn what is worth abstracting and what isn't. You may even learn that `.textField` is too generic. For example, you might have many different types of text fields that are better off being their own modules. You might not.

What's important is that we think and ask questions frequently and rigorously.

## 1. Do you have a module appearing in many places but with slightly different aesthetics based on proximity, location or contents?

You probably need a [modifier](http://maintainablecss.com/chapters/modifiers/).

## 2. Do you have a componentn that could be used elsewhere pretty much as is?

You should probably convert the module into a component. Be careful not to name it too generically.

## 3. Do you have a module with many different modifiers? Or are you spending time working out what styles are common to each scenario?

You probably named the module too generically. Split it out into several dedicated modules.

## Summary

Deciding on a name is tricky. But if we navigate through these problems frequently and vigorously, we can ensure our CSS easy to maintain.