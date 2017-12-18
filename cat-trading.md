---
layout: page
title: "altcoin trading"
description: "Where to trade altcoins? What are good exchanges for altcoin trading? Who has lowest fees?"
permalink: /category/trading/
---

{% assign items = (site.posts | sort: date) | reverse %}

<div class="clearfix">&nbsp;</div>

<h5><span class="tag custom-note">Featured: Crypto Trading Strategy</span></h5>

<section class="row columns twelve">
{% for post in items  %}
 {% if post.categories contains "trading" and post.tags contains 'strategy' %}
  {% include latestupdates.html %}
 {% endif %}
{% endfor %}
</section>

<div class="clearfix">&nbsp;</div>


<h5><span class="tag">Recently updated articles:</span></h5>

{% for post in items  %}
{% if post.categories contains "trading" and post.tags contains 'update' %}

<p>
 <strong>Recently Updated:</strong> <a title="{{ post.title }}" href="{{ site.baseurl }}{{ post.url }}">{{ post.title | capitalize }}</a>
 <br>
 {% if post.update %}<em> Last update {{ post.update | date: "%d %b %Y" }}: </em>{% endif %} {{ post.description }}
</p>

{% endif %}
{% endfor %}


<hr>

<p>{{ site.tv_728-90_animated }}</p>

<span class="note">Articles on Altcoin Trading</span>


{% for post in site.posts %}
  {% if post.category contains "trading" or post.categories contains "trading" %}

  <div class="row home-latest"  id="gtm-{{post.categories[0]}}">
    <div class="seven columns">
      <h5 class="post">
        <strong>
          {% if post.stories %}<span class="tag">{{ post.genres }}</span>&nbsp;
          {% elsif post.note %}<span class="tag custom-note">{{ post.note }}</span>&nbsp;
          {% endif %}
          <small>{{ post.date | date_to_string }}</small>

          {% if post.guest %}&nbsp;&middot;&nbsp;<small class="guest">Guest post by {{ post.author_name }}</small>{% endif %}

          <br>
          <a title="{{ post.title }}" href="{{site.baseurl}}{{ post.url }}">{{ post.title }}</a>
        </strong>
      </h5>
      <div class="home-latest-excerpt">
        {% if post.update %}<em> Last update {{ post.update | date: "%d %b %Y" }}: </em>{% endif %}{{ post.description }}
      </div>
    </div>
    {% if post.image[0] %}
    <div class="five columns">
      <a target="_blank" href="{{site.baseurl}}{{ post.url }}" title="{{ post.title }}">
        <figure class="thumb">
          <amp-img itemprop="image" src="{{ post.image[0] }}" alt="Altcoin Trading Blog"
          layout="responsive"
          data-original-width="720px" data-original-height="360px"
          width="150px" height="80px">
          </amp-img>
        </figure>
      </a>
    </div>
    {% endif %}
  </div>



  {% endif %}
{% endfor %}


<hr>

{{ site.ads.aads728 }}

<hr>

<span class="note">Articles on Altcoin Arbitrage</span>

{% for post in site.posts %}
  {% if post.category contains "arbitrage" or post.categories contains "arbitrage" %}



  <div class="row home-latest"  id="gtm-{{post.categories[0]}}">
    <div class="seven columns">
      <h5 class="post">
        <strong>
          {% if post.stories %}<span class="tag">{{ post.genres }}</span>&nbsp;
          {% elsif post.note %}<span class="tag custom-note">{{ post.note }}</span>&nbsp;
          {% endif %}
          <small>{{ post.date | date_to_string }}</small>

          {% if post.guest %}&nbsp;&middot;&nbsp;<small class="guest">Guest post by {{ post.author_name }}</small>{% endif %}

          <br>
          <a title="{{ post.title }}" href="{{site.baseurl}}{{ post.url }}">{{ post.title }}</a>
        </strong>
      </h5>
      <div class="home-latest-excerpt">
        {% if post.update %}<em> Last update {{ post.update | date: "%d %b %Y" }}: </em>{% endif %}{{ post.description }}
      </div>
    </div>
    {% if post.image[0] %}
    <div class="five columns">
      <a target="_blank" href="{{site.url}}{{site.baseurl}}{{ post.url }}" title="{{ post.title }}">
        <figure class="thumb">
          <amp-img itemprop="image" src="{{ post.image[0] }}" alt="Altcoin Trading Blog"
          layout="responsive"
          data-original-width="720px" data-original-height="360px"
          width="150px" height="80px">
          </amp-img>
        </figure>
      </a>
    </div>
    {% endif %}
  </div>



    {% endif %}
  {% endfor %}
