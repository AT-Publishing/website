---
layout: page
title: "altcoin wallets"
description: "All about desktop altcoin wallets and hardware wallets for safe alt coin storage."
permalink: /category/wallets/
---



{% assign items = (site.posts | sort: date) | reverse %}

<h5><span class="tag">Recently updated articles:</span></h5>

{% for post in items  %}
{% if post.categories contains "wallets" and post.tags contains 'update' %}

<p>
 <strong>Recently Updated:</strong> <a title="{{ post.title }}" href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">{{ post.title | capitalize }}</a>
 <br>
 {% if post.update %}<em> Last update {{ post.update | date: "%d %b %Y" }}: </em>{% endif %} {{ post.description }}
</p>

{% endif %}
{% endfor %}

{% for post in items  %}
{% if post.category contains "wallets" or post.categories contains "wallets" %}

<div class="row home-latest">
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
  <div class="seven columns">
    <h5 class="post">
      <strong>
        {% if post.stories %}<span class="tag">{{ post.genres }}</span>&nbsp;
        {% elsif post.note %}<span class="tag custom-note">{{ post.note }}</span>&nbsp;
        {% endif %}
        <small>{{ post.date | date_to_string }}</small>

        {% if post.guest %}&nbsp;&middot;&nbsp;<small class="guest">Guest post by {{ post.author_name }}</small>{% endif %}

        <br>
        <a title="{{ post.title }}" href="{{site.url}}{{site.baseurl}}{{ post.url }}">{{ post.title }}</a>
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
