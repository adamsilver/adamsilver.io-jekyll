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

<div class="featuredArticles">
	<h2>Featured articles</h2>
	<div id="articleList">
		<ol class="articles">
			{% for post in site.posts %}
				{% if post.categories contains 'featured' %}
					<li class="article">
						<h2 class="title"><a href="{{ post.url }}">{{ post.title }}</a></h2>
						{% include articleMeta.html date=post.date cont=post.content %}
					</li>
				{% endif %}
			{% endfor %}
		</ol>
	</div>
</div>

<div class="belief">
	<h2>Belief</h2>

	<p>I believe websites should be accessible to <em>everyone</em> and that the best results are achieved by embracing the conventions of the web combined with a humanised and simple experience.
</div>

<div class="belief">
	<h2>Approach</h2>

	<p>I love to work together from ideation all the way through to production. My preference is to lean on Agile methodologies to help focus on the truly essential &mdash; <em>less but better</em>.</p>
</div>

<div class="thoughts">
	<h2>Writing</h2>

	<p>I write <a href="/articles/">articles</a> on this blog as well as on the <a href="http://medium.com/simple-human">Simple=Human</a> publication with my friend <a href="http://theluckystrike.co.uk">Mark Jenkins</a>, which is all about leadership, design and development. It's definitely worth checking out.
</div>
