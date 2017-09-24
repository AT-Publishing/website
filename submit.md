---
layout: page
title: Submit News, Submit Press Release
permalink: /submit/
tags:
- hidden
navi:
 exclude: yes
image:
 - "/img/editorial/jump.jpg"
image_alt:
 - "Contact altcointrading.net"
---

{% amp700 border {{page.image[0]}} {{page.image_alt[0]}} %}

__________________________

<style>
input, select, textarea {width: 100%}
</style>

Submit news source, idea for an article or a press release.

<form action="https://formspree.io/submit@altcointrading.net" method="POST">
<p> What are you submitting? <br>
<select>
 <option value="pr">Press Release</option>
 <option value="idea">Idea</option>
 <option value="news">News Source</option>
</select>
</p>
<p> Your email <br>
<input type="email" name="email" placeholder="E-mail address">
</p>
<p> Content or links to source<br>
<textarea name="message" placeholder="Your message"></textarea>
</p>
<p>
<button type="submit">Send</button>
</p>
</form>
