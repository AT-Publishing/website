---
layout: col-security
title: "Cryptocurrency Trading Strategy & Tutorials"
description: "Long reads about technical analysis in cryptocurrency trading and trading strategies."
permalink: /strategy/
---

{% assign items = (site.strategy | sort: date) | reverse %}
{% for post in items  %}


<div class="row sec-latest">

  {% if post.image[0] %}
  <div class="twelve columns security-bg">
    <a rel="follow" href="{{site.url}}{{site.baseurl}}{{ post.url }}" title="{{ post.title }}">
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

        <a rel="follow" href="{{site.url}}{{site.baseurl}}{{ post.url }}" title="{{ post.title }}">
          {{ post.title }}
        </a>

      </strong>
    </h2>
    <a target="_blank" href="{{site.url}}{{site.baseurl}}{{ post.url }}" title="{{ post.title }}">
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

<p>
{{ site.tv_728-90_animated }}
</p>