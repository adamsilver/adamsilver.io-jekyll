---
layout: default
title: Articles
id: articles
permalink: /articles/
---

# Articles

I publish to my [private mailing list](/signup/) first (about once a month ish) and some of those articles appear below some time later.

<div>
{% for post in site.posts %}
	<div class="articleList-article">
		<h2 class="articleList-articleTitle"><a href="{{ post.url }}">{{ post.title }}</a></h2>
		{% include articleMeta.html date=post.date cont=post.content %}
	</div>
{% endfor %}
</div>