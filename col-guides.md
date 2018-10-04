---
layout: col-security
title: "New Crypto Trader's Guides"
description: "Guides for newbie altcoin traders: where to buy, where to trade, links to longer reads."
permalink: /guides/
---

Join <a target="_blank" href="https://plus.google.com/b/118152650417780550154/communities/115259878580948161888">our community on Google+</a> for more basics and trading guides from all around the web.

<hr>

<h4>Crypto Trading Need-To-Know's</h4>

<p>For general 101 information regarding blockchain, types of blockchains and the role of cryptoasset price scroll down to the next section.</p>

{% assign items = site.posts | sort:date | reverse %}
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

<h4>Blockchain Technology 101: Blockchains, Blocks and the Role of Price</h4>

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
