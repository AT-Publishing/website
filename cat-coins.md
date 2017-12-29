---
layout: page
title: "featured altcoins"
description: "Best cryptocurrencies to invest in, as they come and go."
permalink: /category/altcoins/
---

{% assign items = (site.posts | sort: date) | reverse %}

<h3 class="post">Featured in "no-blockchain cryptocurrencies":</h3>

{% for post in items  %}
{% if post.categories contains "coins" and post.tags contains 'no-blockchain' %}
<div class="row home-latest">
{% if post.image[0] %}
<div class="five columns">
  <a  class="index-internal" target="_blank" href="{{ site.baseurl }}{{ post.url }}" title="{{ post.title }}">
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
  <div class="seven columns">
    <h5 class="post">
      <strong>
        {% if post.stories %}<span class="tag">{{ post.genres }}</span>&nbsp;
        {% elsif post.note %}<span class="tag custom-note {{ post.noteclass }}">{{ post.note }}</span>&nbsp;
        {% endif %}
        <small>{{ post.date | date: "%d %b %Y, %R" }} UTC</small>

        {% if post.guest %}&nbsp;&middot;&nbsp;<small class="guest">Guest post by {{ post.author_name }}</small>{% endif %}

        <br>

        <a  class="index-internal"  href="{{ site.baseurl }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>

      </strong>
    </h5>
    <div class="home-latest-excerpt">
      {% if post.update %}<em> Last update {{ post.update | date: "%d %b %Y, %R" }} UTC: </em>{% endif %}{{ post.description }}
    </div>
  </div>

</div>
{% endif %}
{% endfor %}



{{ site.ads.binance728 }}

<h3 class="post">All from this category:</h3>


{% for post in items  %}
{% if post.category contains "coins" or post.categories contains "coins" %}

<div class="row home-latest">
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

</div>


{% endif %}
{% endfor %}

<style>
.maincontent h5.post {
  border-right: 5px solid #7A838D;
  border-left: none;
}
</style>
