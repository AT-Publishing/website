---
layout: page
title: "altcoin wallets"
description: "Where to keep altcoin safely? There are hardware wallets for altcoins already!"
permalink: /category/wallets/
---

<h4 class="exa">All posts related to <b>altcoin wallets</b></h4>

<span id="note">"Altcoin wallets"</span>

{% for post in site.posts %}
  {% if post.category contains "wallets" or post.categories contains "wallets" %}
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
