---
layout: category
title: "No-ICO - Cryptocurrency Projects without ICO funding"
description: "Featured no-ICO cryptocurrency projects: People who develop a project in the cryptocurrency space without an ICO backing and funding. "
permalink: /category/no-ico/
category: "no-ico"
---


{% assign features = site.posts | sort:date | reverse %}

<p><strong>FEATURED</strong></p>

<section class="row columns twelve">
{% for post in features  %}
{% if post.categories contains page.category %}
{% if post.categories contains "featured" %}
  {% include category/updated.html %}
  {% endif %}
  {% endif %}
{% endfor %}
</section>
