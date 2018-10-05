---
layout: col-security
title: "New Crypto Trader's Guides"
description: "Guides for newbie altcoin traders: where to buy, where to trade, links to longer reads."
permalink: /guides/
---

<h4>Crypto Trading Need-To-Know's</h4>

<p>For general 101 information regarding blockchain, types of blockchains and the role of cryptoasset price scroll down to the next section.</p>

CONTENTS

1/ [Crypto Trading Guides: How to get started with crypto trading](#guides)

2/ [How to do a blockchain news research](#blockchain-news-research)

3/ [Blockchain Technology 101](#blockchain-tech-101)

<hr>

{% assign items = site.posts | sort:date | reverse %}

<h4 id="guides">How to start cryptocurrency trading</h4>

{% for post in items  %}
{% if post.guide %}
<div class="row sec-latest">

  {% if post.image[0] %}
  <div class="twelve columns security-bg">
    <a class="col-internal-link" href="{{site.url}}{{site.baseurl}}{{ post.url }}" title="{{ post.title }}">
      <figure class="thumb">
        <amp-img itemprop="image" src="{{ post.image[0] }}" alt="{{ post.title }}"
        layout="responsive"
        data-original-width="720px" data-original-height="360px"
        width="720px" height="360px">
        </amp-img>
      </figure>
    </a>
  </div>
  {% endif %}

  <div class="twelve columns security-olay">
    <h2>
      <strong>

        {% if post.stories %}<span class="tag">{{ post.genres }}</span>&nbsp;
        {% elsif post.note %}<span class="tag custom-note">{{ post.note }}</span>&nbsp;
        {% endif %}
        <small>{{ post.date | date_to_string }}</small>

        {% if post.guest %}&nbsp;&middot;&nbsp;<small class="guest">Guest post by {{ post.author_name }}</small>{% endif %}

        <br>

        <a class="col-internal-link" href="{{site.url}}{{site.baseurl}}{{ post.url }}" title="{{ post.title }}">
          {{ post.title }}
        </a>

      </strong>
    </h2>
    <a class="col-internal-link" href="{{site.url}}{{site.baseurl}}{{ post.url }}" title="{{ post.title }}">
    <div class="home-latest-excerpt">

      {{ post.description }}

      {% if post.update %}
        <p><small><br> Last update {{ post.update | date: "%d %b %Y" }} </small></p>
      {% endif %}

    </div>
    </a>
  </div>

</div><!-- gtm -->



{% endif %}
{% endfor %}

<br>

<hr>

<h4 id="blockchain-news-research">How to do a blockchain news research</h4>

The blockchain industry is booming and in 2018, the number of cryptocurrency news outlets is bigger than ever.

The growing number of independent resources is very well in line with the concept of decentralization. There is absolutely nothing wrong with that.

However, the problem for the user is how to sift through all the alternative sources that come up in search.

**A simple system on how to sift through cryptocurrency news sites:**

1. **Start with mainstream sites.** Big cryptocurrency news outlets release a lot of stuff, most of which is not important or even interesting. Fast news portals need to publish multiple times a day though, in order to stay popular. Their business model relies on big but unfocused traffic: Think people who habitually check out the site without looking for something in particular. This traffic is monetized via display advertising, whether it is sensible for actual revenue generation or not. You can get the best value without annoying popups if you set up [Google Alerts](https://www.google.com/alerts). Having an alert for broad keywords like "bitcoin" will allow you to scan the headlines of the mainstream crypto news outlets as they get published without having to show up on their websites at all.
2. **When it's interesting, it's on Reddit.** For the juiciest news, they will be posted on Reddit rather sooner than later. Good subreddits with diligent moderators are r/bitcoin, r/cryptocurrency, r/altcoin and r/ethtrader.
3. **Small Bloggers.** Once you've got the mainstream outlets cleared, it's good to keep informed about what the bloggers and alternative outlets say. Smaller publishers and Medium bloggers are very rarely sponsored at all, which means they will offer a more independent view - at least as long as their portal is not a complete amateur action. Medium blogs especially are known for their high technical level. Diving deep into the blockchain technology is something the mainstream outlets cannot afford to publish, their generic audience is not looking for the bother to understand something technically complex. Therefore don't sleep on smaller publishers!  

While on Medium.com you can [sift through newly published writeups via tags](https://medium.com/tag/bitcoin), to research small bloggers and independent outlets you might need to turn to cryptocurrency news aggregators.

One of the good ones is [CoinSpectator](https://coinspectator.com). It is an extensive aggregator that specializes in sourcing smaller, hand-picked cryptocurrency blogs and blockchain news sites. You can choose whether to view blog articles, news articles or both. Users vote for the linked news in a similar way as on Reddit without the brigading. The best of the best then makes it into the Top feed.

The news on CoinSpectator updates in real time and there is an infobox with cryptocurrency prices, so it is very convenient to have CoinSpectator open on one of your screens while you're trading.


<br>

<hr>

<h4 id="blockchain-tech-101">Blockchain Technology 101: Blockchains, Blocks and the Role of Price</h4>

#### Definition of Blockchain

Blockchain is a term that denotes literally a chain of blocks, where block is a bundle of confirmed transactions and additional features that ensure blocks cannot be skipped or reordered in the future.

#### Definition of Block Time

**Block Time** can be defined as the average time that is taken for generating an extra block in the block chain.

Bitcoin Block Time: For Bitcoin 10 minutes will be the block time.

#### Definition of Private, Public and Consortium Blockchain

[Blockchains](https://bitcoinfy.net/bitcoin-and-blockchain-technology/) are functioning under the peer to peer networking method. As it is a straightforward phenomena: Not involving any third person into the transaction process.

**Private blockchains** are similar to decentralized databases and may have its use as an internal tool for organizations and businesses where member parties do not want to trust each other.

Bitcoin is a **public blockchain**, meaning the use of it is not restricted to anybody. The transactions on Bitcoin blockchain cannot be deemed as canceled nor taken back. This is known as “Reversibility of Transactions”. This is to be noted that majority of the users have lost their Bitcoins, just because of their sheer negligence while transacting.

A **semi decentralized blockchain** is known as the **“Consortium Blockchain”**. The users will be restricted by the administrators of this blockchain, since only the faithful nodes are enabled for executing the consensus protocol.  

Now, how can a Bitcoin be owned?

#### Bitcoin Regulatory Hurdles

Bitcoin specifically has also faced many regulatory issues from protective governments. There are some countries such as Bangladesh, Bolivia, Ecuador, Saudi Arabia, and Kyrgyzstan that have declared Bitcoin as illicit and illegal.

#### Availability & Price of Bitcoin

* There is a considerable number of Bitcoin ATMs throughout the world. Over 1964  Bitcoin ATM’s are there in USA and 539 in Canada. The number of Bitcoin ATMs through the world is considered a strong fundamental positive in the business of bitcoin trading because it shows there is demand for cryptocurrencies other than for speculation.
* “Bitpay” or Coinbase” are the usual Bitcoin payment services for merchants who decide to accept cryptocurrencies. One of the other popular processors in the past was also “Mycelium“.
* Plenty of exchange providers are available throughout the world that are dealing with cryptocurrencies.

The first and foremost thing to understand about the Bitcoin price is that it would be always fluctuating.

An unforeseen thing can be happened in the increase and decrease of the Bitcoin price within a short or longer period of time.

This is because the fact that [cryptocurrencies trade on capital markets](https://www.altcointrading.net/) and is fundamentally completely normal. However, the amplitudes of cryptocurrency price fluctuations might be relatively high due to its novel nature, illiquid markets, and young economy respectively.

**For interesting facts that are not quite common knowledge scroll down through this blockchain infographic:**

<figure>
<amp-img itemprop="image" src="/uploads/infographics/blockchain-technology-101-infographics.jpg" alt="blockchain technology 101 infographic" title="blockchain technology 101 infographic" layout="responsive" width="700px" height="15426px"></amp-img></figure>

<br>

<hr>
<p>Originally appeared on <a href="https://www.thebusinessofcrypto.com/articles/blockchain-tech-101/">The Business Of Crypto</a>. Infographics provided by <a href="https://bitcoinfy.net/bitcoin-and-blockchain-technology/">Bitcoinfy</a>, republished with permission.</p>
<hr>
