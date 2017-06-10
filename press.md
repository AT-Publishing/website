---
layout: page
title: Press Releases
permalink: /press-releases/
tags:
- hidden
navi:
 exclude: yes
image:
 - "/img/editorial/cleanslate.jpg"
image_alt:
 - "altcointrading.net"
---

{% amp700 border {{page.image[0]}} {{page.image_alt[0]}} %}

__________________________

{{ site.ads.aads728 }}

{% for post in site.press offset: 0 limit: 15 %}
  <h4 class="post">
    <strong>
      <a href="/{{ post.url }}"><span class="tag">PRESS RELEASE</span>&nbsp;{{ post.title }}</a>
    </strong>
    <small>{{ post.date | date_to_string }}</small>
  </h4>
  <p>
  {{ post.description }}
  </p>
{% endfor %}

__________________________

{{ site.ads.aads728 }}

If you want to inquire about publishing a press release please shoot us an email to `jmt@altcointrading.net`.
