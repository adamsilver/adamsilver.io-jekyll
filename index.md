---
layout: default
id: home
---

<div class="me">
	<div class="face">
		<img src="/assets/img/adam2.jpg" alt="Adam Photo" width="85" height="85">
	</div>
</div>

# Hello, my name is Adam Silver, a UX engineer with over 15 years experience designing, prototyping and building human-friendly websites.

## Featured articles

<div id="articleList">
	{% for post in site.posts %}
		{% if post.tags contains 'featured' %}
			<div class="article">
				<h3 class="title"><a href="{{ post.url }}">{{ post.title }}</a></h3>
				{% include articleMeta.html date=post.date cont=post.content %}
			</div>
		{% endif %}
	{% endfor %}
</div>


## Belief

I believe in creating amazing digital products that are [accessible](/articles/the-role-of-the-front-end-developer/#accessibility) to everyone, no matter their age, ability, choice of device or interaction preferences. We can do this by designing humanised and simple experiences that [embrace the conventions of the web](/articles/designing-honestly-for-the-web/).

## Approach

I love to work together from ideation all the way through to production. My preference is to lean on Agile methodologies to help focus on the truly essential &mdash; <em>less but better</em>.

## Writing

Not only do I [write here](/articles/) but I also write on the [Simple=Human](http://medium.com/simple-human) publication with my friend [Mark Jenkins](http://theluckystrike.co.uk), which is a collection of articles written by us about leadership, design and development.

## Interested in working with me?

[Get in touch](mailto:adambsilver+project@gmail.com) so we can discuss your project.
