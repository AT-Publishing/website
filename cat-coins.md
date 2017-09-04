---
layout: page
title: "best altcoins"
description: "Best altcoins to invest in at the moment."
permalink: /category/altcoins/
---

{% for post in site.posts offset: 0 limit: 1 %}
  {% if post.category contains "coins" or post.categories contains "coins" or post.categories contains "altcoins" %}
  <h4 class="post">
  <strong>
  <a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">{{ post.title | capitalize }}</a>
  </strong>
  <small>{{ post.date | date_to_string }}</small>
  </h4>
  <div class="row">
    <div class="nine columns">
      {{ post.description }}
    </div>
    {% if post.image[0] %}
    <div class="three columns">
      <a target="_blank" href="{{ post.url }}">
        <figure class="thumb">
          <amp-img itemprop="image" src="{{ post.image[0] }}" alt="Best altcoins to invest in" layout="responsive"
          width="150px" height="80px">
          </amp-img>
        </figure>
      </a>
    </div>
    {% endif %}
   </div>
  {% endif %}
{% endfor %}

{{ site.ads.aads728 }}

{% for post in site.posts offset: 1 limit: 30 %}
  {% if post.category contains "coins" or post.categories contains "coins"  or post.categories contains "altcoins" %}
  <h4 class="post">
  <strong>
  <a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">{{ post.title | capitalize }}</a>
  </strong>
  <small>{{ post.date | date_to_string }}</small>
  </h4>
  <div class="row">
    <div class="nine columns">
      {{ post.description }}
    </div>
    {% if post.image[0] %}
    <div class="three columns">
      <a target="_blank" href="{{ post.url }}">
        <figure class="thumb">
          <amp-img itemprop="image" src="{{ post.image[0] }}" alt="Best altcoins to invest in" layout="responsive"
          width="150px" height="80px">
          </amp-img>
        </figure>
      </a>
    </div>
    {% endif %}
   </div>
  {% endif %}
{% endfor %}
