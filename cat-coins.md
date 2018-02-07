---
layout: category
title: "Featured Altcoins"
description: "Best cryptocurrencies to invest in, as they come and go."
permalink: /category/altcoins/
category: "coins"
---

{{ site.ads.binance728 }}

{% assign allitems = (site.posts | sort: date) | reverse %}

<h3 class="cat-post clear"><strong>Featured in "no-blockchain cryptocurrencies"</strong></h3>

{% for post in allitems  %}
{% if post.categories contains "coins" and post.tags contains 'no-blockchain' %}
{% include category/all.html %}
{% endif %}
{% endfor %}
