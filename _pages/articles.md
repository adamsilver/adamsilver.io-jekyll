---
layout: default
title: Articles
id: articles
permalink: /articles/
---

# Articles

<div id="articleList">
	{% for post in site.posts %}
		<a href="{{ post.url }}">
			<div class="article">
				<h2 class="title">{{ post.title }}</a></h2>
				{% include articleMeta.html date=post.date cont=post.content %}
			</div>
		</a>
	{% endfor %}
</div>