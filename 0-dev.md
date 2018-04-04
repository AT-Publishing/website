---
layout: default
navi:
 exclude: yes
permalink: /dev
---

<div class="container">
  <div class="row">
<section id="today">
  <!-- SLOT 1  -->
  {% include home/today.html %}
</section>
</div>
</div>

<hr>

<amp-list width="auto" height="100" layout="fixed-height" src="https://atnet-feeds.netlify.com/atnet.json">
  <template type="amp-mustache">
    <div class="url-entry atnet-today">
      <a href="{{url}}">{{title}}</a>
    </div>
  </template>
  <div placeholder>Loading ...</div>
  <div fallback>Failed to load data.</div>
</amp-list>

<hr>

<amp-list width="auto" height="100" layout="fixed-height" src="https://ampproject-b5f4c.firebaseapp.com/examples/data/amp-list-urls.json">
  <template type="amp-mustache">
    <div class="url-entry">
      <p>{{title}}</p>
    </div>
  </template>
</amp-list>
