---
layout: page
title: "altcoin trading"
description: "Where to trade altcoins? What are good exchanges for altcoin trading? Who has lowest fees?"
permalink: /category/trading/
---

{% assign items = (site.posts | sort: date) | reverse %}


{% for post in items  %}
{% if post.categories contains "trading" and post.tags contains 'update' %}

<p>
 <strong>Recently Updated:</strong> <a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">{{ post.title | capitalize }}</a>
 <br>
 {% if post.update %}<em> Last update {{ post.update | date: "%d %b %Y" }}: </em>{% endif %} {{ post.description }}
</p>

{% endif %}
{% endfor %}






{% for post in site.posts %}
  {% if post.category contains "trading" or post.categories contains "trading" %}
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
      {% if post.update %}<em> Last update {{ post.update | date: "%d %b %Y" }}: </em>{% endif %} {{ post.description }}
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
