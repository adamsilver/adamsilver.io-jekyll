---
layout: post
title: Developing templates using an outside-in approach
date: 2016-08-08 09:00:01
categories: development html
description: When backend developers have their way, HTML templates are a breeding ground for complexity. We should strive to develop templates using an outside-in perspective.
---

When we design websites, we start with a user problem and translate that into a set of screens and flows.

Next, we translate these screens into front-end code. We look at the best way to split up the design into pages,
[modules](http://maintainablecss.com/chapters/modules/) and components.

After this, we integrate data and logic into a template to be displayed to the user on-screen. The object that contains this data and logic is called a
*view-model* — it’s a Model designed *for* the View.

You can’t design a view-model without first understanding the requirements of the View itself. And you can’t understand the requirements of the View without first understanding the visual and interaction design requirements et cetera.

Sometimes, a view-model is poorly designed, neglected or designed from the
inside-out. This often means it exposes too much low-level logic — something
which makes a template unnecessarily difficult to work with. This is best
demonstrated with a simple example.

Take a *Welcome Message* module: it contains a piece of text and a link, and it renders differently under three scenarios:

1. The user is anonymous.
2. The user is authenticated and has supplied their name.
3. The user is authenticated but hasn’t supplied their name.

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/templates/anon.png" alt="Anonymous user" width="100%">
		<figcaption>Anonymous user</figcaption>
	</figure>
</div>

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/templates/recognised-with-name.png" alt="Authenticated with a name" width="100%">
		<figcaption>Authenticated with a name</figcaption>
	</figure>
</div>

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/templates/recognised-no-name.png" alt="Authenticated without a name" width="100%">
		<figcaption>Authenticated without a name</figcaption>
	</figure>
</div>

Consider the following template (built in
[Swig](http://paularmstrong.github.io/swig/)):

{% raw %}
    {% if isLoggedIn %}
        {% if firstName && lastName %}
            <div class="welcomeMessage">
                <p>Hello {{firstName}} {{lastName}}</p>
                <a href="{{signOutLink.href}}">{{signOutLink.text}}</a>
            </div>
        {% else %}
            <div class="welcomeMessage">
                <p>Welcome back</p>
                <a href="{{signOutLink.href}}">{{signOutLink.text}}</a>
            </div>
        {% endif %}
    {% else %}
        <div class="welcomeMessage">
            <p>Welcome</p>
            <a href="{{signInLink.href}}">{{signInLink.text}}</a>
        </div>
    {% endif %}
{% endraw %}

Forget for the moment that you might be able to factor out the nested
if-statement — and, that you could reuse the HTML by abstracting it into a
partial — this template is overly *complicated*.

It exposes low-level information that the template does not need to know in
order to do its job. It’s been designed from little pieces, from the inside-out.

For example, there is nothing in the design that requires knowledge of the first name and last name separately (as they are styled the same) and there is no need to determine if the user is authenticated.

Instead, consider the following template:

{% raw %}
    <div class=”welcomeMessage”>
        <p>{{message}}</p>
        <a href=”{{link.href}}”>{{link.text}}</a>
    </div>
{% endraw %}

The view-model has been designed from the outside-in; it contains just what the template needs in order to render itself. And because there is always a message and a link, there is no need for conditionality. This template is dumb-by-design, and leaves complex logic to reside somewhere more appropriate in the stack.

In comparison to the original, this template is just four lines compared to 18 and consists mostly of HTML, making this template much easier to work with. As an added bonus, the logic that no-longer resides in the template can be unit-tested. For example, we can now test that the message is “Welcome <name>” when the user is authenticated.

This gives a glimpse as to the impact a well-designed view-model can have on the maintainability of a template.

With this in-mind let’s have a look at the common scenarios we need to design for when developing a template.

## 1. When a module has dynamic properties

When data or text is dynamic it will reside somewhere else in a system e.g. a database. In fact, even if it is *static* it may still reside somewhere else for internationalisation or maintenance purposes.

What’s important is that the template should not concern itself with where
this data comes from — it’s just information exposed via the view-model.

Taking the design as follows:

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/templates/recognised-with-name.png" alt="Authenticated with a name" width="100%">
		<figcaption>Authenticated with a name</figcaption>
	</figure>
</div>

The view-model would be:

	{
	  message: "Hello Adam Silver",
      link: { href: "/sign-out", text: "Sign out" }
	}

And the template would be:

{% raw %}
    <div class=”welcomeMessage”>
      <p>{{message}}</p>
      <a href=”{{link.href}}”>{{link.text}}</a>
    </div>
{% endraw %}

The message consists of text that may ultimately be retrieved from resource
files and a database. Perhaps the link’s href property could come from a routes configuration object etc.

Regardless, the template doesn’t care — it leaves this responsibility to other parts of the system. The view-model is lean and provides just enough information for the View to render itself.

## 2. When a module has conditionality

Conditionally showing a portion of a View involves display-logic. The simplest of its type is based on a condition: if-this-show-that.

The important thing to remember, is that a template shouldn’t have to know why something is shown or not. It should just know whether it should.

We’ll modify the original requirements so that it  only* displays a welcome
message when the the user is authenticated and has supplied their name:

<div class="image">
	<figure>
		<img src="{{ site.url }}/assets/img/templates/recognised-with-name.png" alt="Authenticated and name is supplied" width="100%">
		<figcaption>Authenticated and name is supplied</figcaption>
	</figure>
</div>

When the message should be shown, the view-model would be:

	{
	  showMessage: true,
	  message: "Hello Adam Silver",
	  link: { href: '/sign-out', text: 'Sign out' }
	}

When the message is hidden the view-model would be:

    {
      showMessage: false
    }

And the template would be:

{% raw %}
    {% if showMessage %}
      <div class="welcomeMessage">
        <p>Welcome</p>
        <a href="{{signInLink.href}}">{{signInLink.text}}</a>
      </div>
    {% endif %}
{% endraw %}

Here the explicit boolean property determines whether it’s shown. Don’t be
tempted to expose lower-level logic that the template uses to infer visibility.

## 3. When showing a collection of items

When showing a number of similar items you will need to loop over a collection or array. As an example, let’s display a list of restaurants by area.

The view-model would be:

    {
      restaurants: [{
          name: "Pizza House",
          address: "..."
      }, ...]
    }

And the template would be:

{% raw %}
	<div class="restaurants">
	  {% for restaurant in restaurants %}
	    <div class=”restaurant”>
          <h2>{{restaurant.name}}</h2>
	      <p>{{restaurant.address}}</h2>
	    </div>
	  {% endfor %}
	</div>
{% endraw %}

Often with loops, you will only show the items if there are items in the
collection. You may be tempted to interrogate the size of the collection in the template as follows:

	{% if restaurants.length > 0 %}
	   <div class="restaurants">
	       {% for restaurant in restaurants %}
	           <div class=”restaurant”>
	               <h2>{{restaurant.name}}</h2>
	               <p>{{restaurant.address}}</h2>
	           </div>
	       {% endfor %}
	   </div>
	{% endif %}

Whilst this isn’t the end of the world, it can lead to maintenance problems.
Instead, continue to use the approach used in the previous example by explicitly checking a boolean property *before* iterating over the loop:

	{% if showRestaurants %}
	   <div class="restaurants">
	       {% for restaurant in restaurants %}
	         <div class=”restaurant”>
	               <h2>{{restaurant.name}}</h2>
	               <p>{{restaurant.address}}</h2>
	           </div>
	       {% endfor %}
	   </div>
	{% endif%}

This way templates are consistent, and the logic behind the conditionality can evolve over time without having to change the template — perhaps the restaurants are only shown to authenticated users for example.

## Summary

Ultimately, templates should be easy-to-read and consist mostly of HTML and just enough information in order to support the display-logic. They shouldn’t have to infer display-logic from other properties and they shouldn’t have to care where this data comes from.

Architecting a system is difficult and sometimes that difficulty bleeds out into the template. This creates problems for the developers who maintain them (mostly front-end developers).

This is why logic-less templates are popular. They attempt to enforce the
separation of concerns between back-end and front-end. You don’t need to use a logic-less template engine to reap the benefits. You can architect your view-models in much the same way regardless.

Designing a view-model *for* the View allows more logic to be unit-tested and drastically improves the maintainability of your templates.
