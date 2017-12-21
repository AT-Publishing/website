---
layout: page
title: "no-ico"
description: "Featured no-ICO cryptocurrency projects: People who develop a project in the cryptocurrency space without an ICO backing and funding. "
permalink: /category/no-ico/
---

{% assign items = (site.posts | sort: date) | reverse %}

<section class="clearfix">
<hr>
<p>{{ site.ledger_728-90_animated }}</p>
</section>

{% for post in site.posts %}
  {% if post.category contains "no-ico" or post.categories contains "no-ico" %}

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
            <a title="{{ post.title }}" href="{{site.baseurl}}{{ post.url }}">
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
        <a title="{{ post.title }}" target="_blank" href="{{site.baseurl}}{{ post.url }}">
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
