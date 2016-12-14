---
layout: post
title: Semantic class names: are you being too generic?
date:   2037-01-01 09:00:01
categories: css
---

Make no mistake. Naming class names is difficult. It’s no coincidence that I
discuss semantic class names early on in [MaintainableCSS](http://maintainablecss.com/).

In that chapter, I explain that we should name a module based on what it is. Not what it looks like or how it behaves. Even if you’re sold on the rational, there’s still plenty of room for error.

Even if we avoid stylistic and behavioural class names, we can still get our
knickers in a twist. In reality, I mean that our class names will be either too generic or too specific. Both of which have their pros and cons.

Most developers go for generic. In theory, this is a good because the more generic the class name, the more reusable it is. In reality it’s not so simple.

To show you what I mean we’ll build a login form together. This form consists of an email and password field. And we'll start off at the specific end of the scale.

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
good because we can apply styling to this form without affecting the others.

But, if we wanted to, we could ensure that all forms, including this one have the same aesthetic. Either by using a mixin or by comma-delimitting selectors:

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

This is where we can be more generic. Perhaps `.loginForm-field` would be better. This enables us to reuse the same styles across all fields within the login form.

But this name still seems too specific. Aren't these styles relevant to all fields across all forms? Probably. Consistency is an important aspect of good design. 

Let's change these components into a module. And let's name this module `.formField`. That feels better doesn't it?

All three of the class names follow MaintainableCSS principles. But they
have significant differences in how they impact the maintainability of our
codebase.

Let’s find some more problems with this generic, reusable `.formField` module.

What if some fields need to accomodate a hint, for example? And each field that needs a hint needs different styles?

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

In this example we just need a few tweaks but what if we had something more
significant different? For example, we probably have form fields that are made up of radio buttons.

Using a modifier is problematic because there is little to inherit. When we named the form field `.formField` we didn’t consider radio buttons at all did we?

This isn’t a bad thing. In many ways this is good. If we try too early to find commonality in a design system, it can lead to over-engineered solutions. Technically speaking, you could name all elements `.item` because everything *is* an “item”, but this is neither practical nor useful.

Radio buttons are different to a text field. They would have a legend, a
fieldset, and a different look and feel. In reality, they are so different that
despite both being form fields, we shouldn’t consider them to be the same. **And this is a major point worth pondering over.**

At this point it becomes clear that `.formField` is too generic. We don’t want to update styles for a set of radios, and worry that we'll regress
styles in a text field. We also don’t wish to work out the few bits of
commonality between these two entities, just to shave a little CSS.

Where does this leave us then?

We’ve gone from too specific to too generic, and we're trying so hard to do a
good job.

If `.formField` is too generic and `.loginForm-email` (and `.loginForm-field`) is too specific then where do we go from here?

Having navigated through these problems, it's quite easy to decide on a good name. It would make sense to call the text field `.textField` and the radio group field `.radioGroupField`. 

This way, we can treat them as the distinct modules they are. They are specific enough to be able to differentiate. Yet they are generic
enough so the we can use them many times across several forms, without writing
unnecessary CSS.

The *real* problem is that we face decisions like this all the time.

This is why I lean toward being too specific because I’d rather have a little
more CSS and the flexibility to style elements consistently or differently
(whatever the case may be), than to get caught up with overrides and regression. I am not saying this is “perfect”. But that’s why I do it and why I advise it.

Also, this gives you the time to learn what is worth abstracting and
what isn’t. You might come to learn that even `.textField` is too generic in that you might have many different types of text fields that are better off being their own modules. You might not.

The takeaway here is to think and ask questions frequently and rigorously:

## 1. What if a module is used in lots of places but sometimes it can look a bit different for reasons such as proximity, location, contents etc?

In this case, you’ll probably benefit from a modifier.

## 2. What if a component can be used frequently, pretty much as is, elsewhere?

In this case, abstract into a module but be careful not to name it too
generically.

## 3. What if you’re spending a lot of time writing many different modifiers or
working out what to abstract as common styles?

In this case, it’s probably named too generically. Split up into separate
dedicated modules.

## Summary

Deciding on a name is tricky. But if we navigate through these problems frequently and vigorously we can ensure our CSS is as easy to maintain as possible.

