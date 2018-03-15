---
layout: col-security
title: "Cryptocurrency Trading Strategy & Tutorials"
description: "Long reads about technical analysis in cryptocurrency trading and trading strategies."
permalink: /strategy/
---

{% if site.strategy_callout %}
<section class="sidebar-nl container-center">
{{ site.strategy_callout }}
<p>To get an email alert <a target="_blank" href="http://altcointrading.us15.list-manage1.com/subscribe?u=b5cca524e997c8e12f8ad51e1&id=9b56578f1c">opt-in and choose "Trading strategy & security"</a></p>
</section>
{% endif %}

{% assign items = (site.strategy | sort: date) | reverse %}
{% for post in items  %}

<div class="row sec-latest">

  {% if post.image[0] %}
  <div class="twelve columns security-bg">
    <a class="col-internal-link" href="{{site.url}}{{site.baseurl}}{{ post.url }}" title="{{ post.title }}">
      <figure class="thumb">
        <amp-img itemprop="image" src="{{ post.image[0] }}" alt="{{ post.title }}"
        layout="responsive"
        data-original-width="720px" data-original-height="360px"
        width="720px" height="360px">
        </amp-img>
      </figure>
    </a>
  </div>
  {% endif %}

  <div class="twelve columns security-olay">
    <h2>
      <strong>

        {% if post.stories %}<span class="tag">{{ post.genres }}</span>&nbsp;
        {% elsif post.note %}<span class="tag custom-note">{{ post.note }}</span>&nbsp;
        {% endif %}
        <small>{{ post.date | date_to_string }}</small>

        {% if post.guest %}&nbsp;&middot;&nbsp;<small class="guest">Guest post by {{ post.author_name }}</small>{% endif %}

        <br>

        <a class="col-internal-link" href="{{site.url}}{{site.baseurl}}{{ post.url }}" title="{{ post.title }}">
          {{ post.title }}
        </a>

      </strong>
    </h2>
    <a class="col-internal-link" href="{{site.url}}{{site.baseurl}}{{ post.url }}" title="{{ post.title }}">
    <div class="home-latest-excerpt">

      {{ post.description }}

      {% if post.update %}
        <p><small><br> Last update {{ post.update | date: "%d %b %Y" }} </small></p>
      {% endif %}

    </div>
    </a>
  </div>

</div><!-- gtm -->
{% endfor %}
