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
<div class="columns four">
<amp-iframe
  width=320 height=270px
  layout="responsive"
  sandbox="allow-scripts allow-same-origin allow-modals allow-popups allow-forms"
  src="https://atnet-feeds.netlify.com/newsblade">
  <amp-img layout="fill" src="/img/ads/ad-placeholder.jpg" placeholder></amp-img>
</amp-iframe>
</div>
</div>
</div>
