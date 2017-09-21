---
layout: page
title: "Altcoin Security & Cold Storage | Crypto Homelab"
description: "All about desktop altcoin wallets and hardware wallets for safe alt coin storage."
permalink: /security/
navi:
 exclude: yes
---

{{ site.ads.aads728 }}

<blockquote>If you can send 100k USD instantly for 0.50 USD leaving money on exchanges is plain self-sabotage.</blockquote>

{% assign items = (site.security | sort: date) | reverse %}
{% for post in items  %}

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
          <amp-img itemprop="image" src="{{ post.image[0] }}" alt="Alt Coin Wallet" layout=""
          width="150px" height="80px">
          </amp-img>
        </figure>
      </a>
    </div>
    {% endif %}
   </div>


{% endfor %}
