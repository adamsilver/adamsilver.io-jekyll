---
layout: default
id: home
---

<div class="me">
	<div class="face">
		<img src="/assets/img/adam2.jpg" alt="Adam Photo" width="85" height="85">
	</div>
	<h1 class="intro">Hello, my name is Adam Silver, a UX engineer with over 15 years experience designing, prototyping and building human-friendly websites.</h1>
</div>

<div class="homePageSection">
	<h2>Featured articles</h2>
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
</div>

<div class="homePageSection">
	<h2>Belief</h2>

	<p>I believe in creating amazing digital products that are <a href="/articles/the-role-of-the-front-end-developer/#accessibility">accessible</a> to everyone, no matter their age, ability, choice of device or interaction preferences. We can do this by designing humanised and simple experiences that <a href="/articles/designing-honestly-for-the-web/">embrace the conventions of the web</a>.</p>
</div>

<div class="homePageSection">
	<h2>Approach</h2>

	<p>I love to work together from ideation all the way through to production. My preference is to lean on Agile methodologies to help focus on the truly essential &mdash; <em>less but better</em>.</p>
</div>

<div class="homePageSection">
	<h2>Writing</h2>

	<p>Not only do I <a href="/articles/">write here</a> but I also write on the <a href="http://medium.com/simple-human">Simple=Human</a> publication with my friend <a href="http://theluckystrike.co.uk">Mark Jenkins</a>, which is a collection of articles written by us about leadership, design and development.</p>
</div>

<div class="homePageSection">
	<h2>Interested in working with me?</h2>
	<p><a href="mailto:adambsilver+project@gmail.com">Get in touch</a> so we can discuss your project.</p>
</div>
