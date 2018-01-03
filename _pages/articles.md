---
layout: default
title: Articles about designing and building simple, human and inclusive digital services and websites
id: articles
permalink: /articles/
---

# Articles


I write to my subscribers first on my [private mailing list](/signup/)—some of those articles end up below. If you prefer, here's the [RSS feed]({{site.url}}/atom.xml).


<div>
{% for post in site.posts %}
	<div class="articleList-article">
		<h2 class="articleList-articleTitle"><a href="{{ post.url }}">{{ post.title }}</a></h2>
		<!-- {% include articleMeta.html date=post.date cont=post.content %} -->
	</div>
{% endfor %}
</div>