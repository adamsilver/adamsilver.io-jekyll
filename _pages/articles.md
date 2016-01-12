---
layout: default
title: Articles
id: articles
permalink: /articles/
---

# Articles

<div id="articleList">
	{% for post in site.posts %}
		<div class="article">
			<h2 class="title"><a href="{{ post.url }}">{{ post.title }}</a></h2>
			{% include articleMeta.html date=post.date cont=post.content %}
		</div>
	{% endfor %}
</div>