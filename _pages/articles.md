---
layout: default
title: Articles
id: articles
permalink: /articles/
---

# Articles

I write for my dear subscribers on my [private mailing list](/signup/). Some of those articles end up below.

<div>
{% for post in site.posts %}
	<div class="articleList-article">
		<h2 class="articleList-articleTitle"><a href="{{ post.url }}">{{ post.title }}</a></h2>
		{% include articleMeta.html date=post.date cont=post.content %}
	</div>
{% endfor %}
</div>