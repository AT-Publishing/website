---
layout: page
title: "altcoin exchanges"
description: "Best altcoin exchanges - for new coins, for trading, for trading bots."
permalink: /category/exchanges/
---

{% assign items = (site.posts | sort: date) | reverse %}


{% for post in items  %}
{% if post.categories contains "exchanges" and post.tags contains 'update' %}

<p>
 <strong>Recently Updated:</strong> <a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">{{ post.title | capitalize }}</a>
 <br>
 {% if post.update %}<em> Last update {{ post.update | date: "%d %b %Y" }}: </em>{% endif %} {{ post.description }}
</p>

{% endif %}
{% endfor %}

{% for post in items  %}
{% if post.category contains "exchanges" or post.categories contains "exchanges" %}

<h4 class="post">
<strong>
<a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">{{ post.title | capitalize }}</a>
</strong>
<small>{{ post.date | date_to_string }}</small>
</h4>

<div class="row">
  <div class="nine columns">
  {% if post.update %}<em> Last update {{ post.update | date: "%d %b %Y" }}: </em>{% endif %} {{ post.description }}
  </div>
  <div class="three columns">
    <a target="_blank" href="{{ post.url }}">
      <figure class="thumb">
        <amp-img itemprop="image" src="{{ post.image[0] }}" alt="Altcoin Trading Blog" layout=""
        width="150px" height="80px">
        </amp-img>
      </figure>
    </a>
  </div>
</div>

{% endif %}
{% endfor %}
