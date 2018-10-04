---
layout: col-page
title: "All Altcoin Trading News"
description: "News for cryptocurrency traders - all timely posts here. Also on Telegram (altcointrading_net) and Facebook (Altcoin Trading Chatroom)."
permalink: /all-news/
navi:
 exclude: yes
---

{% assign items = site.posts | sort:date | reverse %}
{% for post in items  %}
{% if post.stories %}

<div class="row home-latest"  id="gtm-allnews">
  <div class="seven columns">
    <h5 class="post">
      <strong>
        {% if post.stories %}<span class="tag">{{ post.genres }}</span>&nbsp;
        {% elsif post.note %}<span class="tag custom-note">{{ post.note }}</span>&nbsp;
        {% endif %}
        <small>{{ post.date | date_to_string }}</small>

        {% if post.guest %}&nbsp;&middot;&nbsp;<small class="guest">Guest post by {{ post.author_name }}</small>{% endif %}

        <br>
        <a class="col-internal-link" href="{{site.baseurl}}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
      </strong>
    </h5>
    <div class="home-latest-excerpt">
      {% if post.last_modified_at %}<strong>UPDATE {{ post.last_modified_at | date: "%d %b %Y" }}</strong>&nbsp;{% endif %}
      {% if post.author %}<span class="author">Article by <a target="_blank" href="{{ post.author }}">{{ post.author_name }}</a></span>{% endif %}
      <br>
      {{ post.description }}
    </div>
  </div>
  {% if post.image[0] %}
  <div class="five columns">
    <a class="col-internal-link" href="{{site.baseurl}}{{ post.url }}" title="{{ post.title }}">
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
