---
layout: page
title: "altcoin trading"
description: "Where to trade altcoins? What are good exchanges for altcoin trading? Who has lowest fees?"
permalink: /category/trading/
---

<h4 class="exa">All posts related to <b>altcoin trading</b> or <b>technical analysis</b></h4>

<span id="note">"Altcoin Trading"</span>

{% for post in site.posts %}
  {% if post.category contains "trading" or post.categories contains "trading" %}
  <h4 class="post">
  <strong>
  <a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">{{ post.title | capitalize }}</a>
  </strong>
  <small>{{ post.date | date_to_string }}</small>
  </h4>
  <p>
  {{ post.description }} <br><a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}"> ~ Read more</a>
  </p>
  {% endif %}
{% endfor %}

{{ site.ads.trezor }}
