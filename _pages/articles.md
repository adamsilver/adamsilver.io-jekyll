---
layout: default
title: Articles about designing and building simple, human and inclusive digital services and websites
id: articles
permalink: /articles/
---

# Articles


I write to my subscribers first on my [private mailing list](/signup/)—some of those articles end up below. If you prefer, here's the [RSS feed]({{site.url}}/atom.xml).


<div class="articleList">
	{% for post in site.posts %}
		<div class="articleList-article">
			<h2 class="articleList-articleTitle"><a href="{{ post.url }}">{{ post.title }}</a></h2>
			<p class="articleList-date">Published on <time date-time="{{post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%-d %B %Y" }}</time></p>
		</div>
	{% endfor %}
</div>