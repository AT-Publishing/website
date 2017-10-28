---
layout: page
title: "basics"
description: "Where to trade altcoins? What are good exchanges for altcoin trading? Who has lowest fees?"
permalink: /category/101/
---

{% assign items = (site.posts | sort: date) | reverse %}

<h5><span class="tag">Recently updated user guides:</span></h5>

<section class="row columns twelve">
{% for post in items  %}
 {% if post.categories contains "basics" and post.tags contains 'update' %}
  {% include latestupdates.html %}
 {% endif %}
{% endfor %}
</section>

<section class="clearfix">
<hr>
<p>{{ site.tv_728-90_animated }}</p>
</section>

{% for post in site.posts %}
  {% if post.category contains "basics" or post.categories contains "basics" %}

  <div class="row home-latest clearfix">
    <div class="seven columns">
        <h5 class="post">
          <strong>
            {% if post.stories %}<span class="tag">{{ post.genres }}</span>&nbsp;
            {% elsif post.note %}<span class="tag custom-note">{{ post.note }}</span>&nbsp;
            {% endif %}
            <small>{{ post.date | date_to_string }}</small>

            {% if post.guest %}&nbsp;&middot;&nbsp;<small class="guest">Guest post by {{ post.author_name }}</small>{% endif %}

            <br>
            <a title="{{ post.title }}" href="{{site.url}}{{site.baseurl}}{{ post.url }}">
              {{ post.title }}
            </a>

          </strong>
        </h5>
        <div class="home-latest-excerpt">
          {% if post.update %}<em> Last update {{ post.update | date: "%d %b %Y" }}: </em>{% endif %}{{ post.description }}
        </div>
    </div>
      {% if post.image[0] %}
    <div class="five columns">
        <a title="{{ post.title }}" target="_blank" href="{{site.url}}{{site.baseurl}}{{ post.url }}">
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
