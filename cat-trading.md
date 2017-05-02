---
layout: page
title: "altcoin trading"
description: "Where to trade altcoins? What are good exchanges for altcoin trading? Who has lowest fees?"
permalink: /category/trading/
---
{{ site.ads.trezorlong }}

{% for post in site.posts offset: 0 limit: 1 %}
  {% if post.category contains "trading" or post.categories contains "trading" %}
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
          <amp-img itemprop="image" src="{{ post.image[0] }}" alt="Altcoin Trading Blog" layout=""
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
  {% if post.category contains "trading" or post.categories contains "trading" %}
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
          <amp-img itemprop="image" src="{{ post.image[0] }}" alt="Altcoin Trading Blog" layout=""
          width="150px" height="80px">
          </amp-img>
        </figure>
      </a>
    </div>
    {% endif %}
  </div>
  {% endif %}
{% endfor %}

<span id="note">"Altcoin Arbitrage"</span>

{% for post in site.posts %}
  {% if post.category contains "arbitrage" or post.categories contains "arbitrage" %}
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
          <amp-img itemprop="image" src="{{ post.image[0] }}" alt="Altcoin Trading Blog" layout=""
          width="150px" height="80px">
          </amp-img>
        </figure>
      </a>
    </div>
    {% endif %}

    {% endif %}
  {% endfor %}
