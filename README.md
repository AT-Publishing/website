`     

`


# full website - altcointrading.net

`All content belongs to github.com/altcointrading`

# the theme

The Jekyll theme is available for free from [this repo](https://github.com/altcointrading/trading).

It is a clean lightweight theme optimized with an old version of AMP (Google's Accelerated Mobile Pages).

The theme's layout `forestry` is compatible with the publishing tool [Forestry](https://forestry.io/).

**Developers:** [AT](https://github.com/altcointrading), [mthjn](https://github.com/mthjn), [xin_chao](https://bitbucket.org/xin_chao)

________________________

(c) 2016 - 2018 https://github.com/altcointrading

/////


```
<item>
    <title><![CDATA[ Latest articles on {{ site.title | xml_escape }} ]]></title>
    <description><![CDATA[ {% if site.strategy_callout %}{{ site.strategy_callout }}{% elsif site.security_callout%}{{ site.security_callout }}{% elsif site.series_callout%}{{ site.series_callout }}{% else%}For more long reads follow the #Cryptolounge on Medium.com/Cryptolounge{% endif %} ]]></description>
    <media:content url="https://cdn-images-1.medium.com/max/1000/1*5qMcgRmoNVbUKJredX7CRQ.png" medium="image" />
    <author><![CDATA[ info@altcointrading.net ]]></author>
    <dc:creator><![CDATA[ JMT, jmt@altcointrading.net ]]></dc:creator>
    <pubDate>{{ site.time | date_to_rfc822 }}</pubDate>
    <link>{{ "/" | prepend: site.baseurl  | prepend: site.url }}</link>
    <content:encoded>
      <![CDATA[ <img src="https://i.imgur.com/uMgLKmt.png"> ]]>
      {% for post in site.posts limit:3 %}
      <![CDATA[
      <h4>{{ post.title | xml_escape }}</h4>
      <p>
        {{ post.description | xml_escape }}<br>
        <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">[Read it]</a><br>
        - From {{ post.date | date_to_rfc822 }} by {{ post.author_name | xml_escape }}
      </p>
      ]]>
      {% endfor %}
      <![CDATA[ <img src="https://i.imgur.com/q9vaDf2.png"> ]]>
      {% assign strat = (site.strategy | sort: date) | reverse %}
      {% for post in strat limit:1 %}
      <![CDATA[
      <h4>{{ post.title | xml_escape }}</h4>
      <p>
        {{ post.description | xml_escape }}<br>
        <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">[Read it]</a><br>
        - From {{ post.date | date_to_rfc822 }} by {{ post.author_name | xml_escape }}
      </p>
      ]]>
      {% endfor %}
      <![CDATA[ <img src="https://i.imgur.com/F1xX7ts.png"> ]]>
      {% assign sec = (site.security | sort: date) | reverse %}
      {% for post in sec limit:2 %}
      <![CDATA[
      <h4>{{ post.title | xml_escape }}</h4>
      <p>
        {{ post.description | xml_escape }}<br>
        <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">[Read it]</a><br>
        - From {{ post.date | date_to_rfc822 }} by {{ post.author_name | xml_escape }}
      </p>
      ]]>
      {% endfor %}
      {% assign items = (site.posts | sort: date) | reverse %}
      {% for post in items limit:2 %}
      {% if post.note contains 'PSA' %}
      <![CDATA[
      <h4>PSA | {{ post.title | xml_escape }}</h4>
      <p>
        {{ post.description | xml_escape }}<br>
        <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">[Read it]</a><br>
        - From {{ post.date | date_to_rfc822 }} by {{ post.author_name | xml_escape }}
      </p>
      ]]>
      {% endif %}
      {% endfor %}
    </content:encoded>
  </item>
  <item>
    <title><![CDATA[ Fresh Off The Press - Industry press releases published via {{ site.title | xml_escape }} this week ]]></title>
    <description><![CDATA[ Follow hashtag #BusinessOfCrypto on Twitter ]]></description>
    <media:content url="https://cdn-images-1.medium.com/max/800/1*HYTEgxhpZ6iItz2JJh76cw.png" medium="image" />
    <author><![CDATA[ press@altcointrading.net ]]></author>
    <dc:creator><![CDATA[ BusinessOfCrypto, @BOC__Official ]]></dc:creator>
    <pubDate>{{ site.time | date_to_rfc822 }}</pubDate>
    <link>{{ "/press-releases/" | prepend: site.baseurl  | prepend: site.url }}</link>
    <content:encoded>
      {% for post in site.press reversed %}
      {% assign daysToSec = 1209600 %}
      {% assign pageTime = post.last_modified_at | date: '%s' | times: 1 %}
      {% assign endTime = 'now' | date: '%s' | minus: daysToSec | times: 1 %}
      {% if pageTime > endTime %}
      <![CDATA[
      <h4>{{ post.title | xml_escape }}</h4>
      <p>
        {{ post.description | xml_escape }}<br>
        <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">[Read it]</a><br>
        - From {{ post.date | date_to_rfc822 }} by {{ post.author_name | xml_escape }}
      </p>
      ]]>
      {% endif %}
      {% endfor %}
      {% for item in site.data.medium.payload.posts %}
      {% if item.virtuals.subtitle contains "Press" %}
      <![CDATA[
      <h4>{{item.title}}</h4>
      <p>{{ item.virtuals.subtitle }}</br>
      <a href="{{item.uniqueSlug | prepend: 'https://medium.com/cryptolounge/' }}">[Read it]</a>
      </p>
      ]]>
       {% endif %}
      {% endfor %}
    </content:encoded>
  </item>

```
