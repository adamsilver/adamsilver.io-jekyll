---
layout: other
title: Articles
id: articles
permalink: /articles/
---

<div class="articleList">
	<h1>Articles</h1>
	{% for post in site.posts %}
		<div class="articleList-article">
			<h2 class="articleList-articleTitle"><a href="{{ post.url }}">{{ post.title }}</a></h2>
			{% include articleMeta.html date=post.date cont=post.content %}
		</div>
	{% endfor %}
</div>