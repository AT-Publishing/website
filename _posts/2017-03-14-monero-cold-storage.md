---
layout: blog
date: 2017-03-15 01:20
title: "Monero Cold Storage: Current Situation"
description: "The promises of upcoming Monero hardware wallets are for now just promises."
categories:
- "wallets"
- "altcoins"
- "xmr"
permalink: monero-cold-storage-2017/
image:
- "/img/emotions/crowd.jpg"
- "/img/xmr/monero-ledger.jpg"
- "/img/wallets/jaxx.png"
image_alt:
- "The crowd wants it but there won't be an easy-to-use Monero cold storage any time soon even though this single product could make a new leader in the field of hardware wallets."

tags: ["update"]

update: 2017-01-19 20:18 +0100
german: "monero-cold-storage-2017/"
comments: false
stories: true

published: true

---

{% amp700 border {{page.image[0]}} {{page.image_alt[0]}} %}

_Image: {{page.image_alt[0]}}_

________________________


{{ site.ads.aads728 }}


**Updates**

* For hot wallets, there is a new [iOS app - Cakewallet for Monero](/cakewallet)
* Coinomi is [nearly done with their Monero integration](https://twitter.com/kimionis/status/954112970338029570) (web, iOS, Android)
* [Ledger CTO said they will implement Monero, ETA is to be announced](https://www.altcointrading.net/ledger-monero)


<hr>


Not so long ago there were rumors about various wallet providers finally integrating Monero - desktop wallets, light clients, hardware wallets. Turns out we got all of this for DASH, also for ETH, in some cases for ZEC, DAO, REP...Not for XMR though.

Meanwhile, Monero's long-term holder base increased, price has been consolidating at a nice level after the surge by the end of summer 2016 and everyone who ever heard of altcoin trading is eager to jump after the first viable product that will provide a safe storage for Monero.

It got to the point that such a feature would shake up the market of hardware wallet providers - even if it were a standalone Monero-only wallet, **[people would buy it](https://www.reddit.com/r/Monero/comments/5lf9ns/is_there_any_update_on_monero_support_for_the/)**.

That's an obvious opportunity, so what is the problem?

{{ site.mailchimp }} It is a technical one. There is a lot of open sourced code to handle Bitcoin and today's most popular altcoins all use some of Bitcoin's basics. DASH is the obvious example but even ETH was in fact built up on a Bitcoin fork. That means, for most altcoins you could pick, you would always just tweak a BTC block explorer and use it, or you would fork a BTC light wallet and so on - it makes the process a whole lot easier.

That is, you can do this with most altcoins other than Monero. Monero was built from scratch and none of the BTC codebase can be reused. The whole system has to be developed again, specifically for Monero.

Apparently this will be a chance for someone new to enter the market because the winners of today don't have enough people (nor pressing need for the profit and glory) to be bothered with Monero.

#### Ledger Nano - ,,No ETA"

{% amp700 border {{page.image[1]}} "ledger monero" %}

There is a [public Trello board](https://trello.com/c/wsK0myEm/52-monero-support) regarding the Monero support and for a time it looked quite promising. However, u/btchip from Ledger cleared it up:

> It's not yet started - a few other things to work on first. We have no ETA but have the right communication channels open to move quickly once we go. [via r/ledgerwallet](https://www.reddit.com/r/Monero/comments/5lf9ns/is_there_any_update_on_monero_support_for_the/dbvmfo0/)


#### Trezor - Project Stalled

<p>
{{ site.ads.trezorlong }}
</p>

Trezor by SatoshiLabs was supposed to get Monero supported by their hardware wallet, [someone worked on the project before](https://altcointrading.net/monero-wallet/) and there are a few brave ones who hacked up their Trezors to get a working hardware wallet for Monero punk-style. Working for now, that is. The code written for Trezor will be incompatible soon as Monero upgraded since that.


#### Keepkey - ,,Erm, not really."

The Trezor spin-off is not planning to implement Monero either:

> We are considering it, but it is not on the roadmap at the moment. [ via r/keepkey](https://www.reddit.com/r/keepkey/comments/5m58vv/monero_support/dc1fkzx/)

#### Jaxx - ,,Near term plans halted"

{% amp700 border {{page.image[2]}} "jaxx monero" %}

<blockquote class="twitter-tweet" data-lang="en-gb"><p lang="en" dir="ltr">Saddens me to announce we&#39;ve halted <a href="https://twitter.com/jaxx_io">@jaxx_io</a> <a href="https://twitter.com/monerocurrency">@monerocurrency</a> near term integration plans. Too many difficulties. Need to refocus resources.</p>&mdash; Anthony Di Iorio (@diiorioanthony) <a href="https://twitter.com/diiorioanthony/status/826953622088982528">2 February 2017</a></blockquote>

Jaxx was the most promising Monero integration, hands down. In [November 2016]( http://decentral.ca/jaxx-monero-integration-update/) Jaxx people asked the Monero team for help - fluffypony [provided source code for both backend and front-end](https://www.reddit.com/r/Monero/comments/5dsqrf/jaxx_monero_integration_update_3/da73yrj) and whenever Jaxx developers were clueless with something they could ask. The discussion was even public on Reddit at first, before trolls chased the devs away to private channels. Since then amount of news diminished.

Fast-forward to February 2017, `"something something no Monero for Jaxx"`. It seems like there was some tension between the Jaxx team and fluffypony - apparently fluffy's changes in XMR codebase rendered some of the Jaxx's new code useless again so the management decided to ditch it for now and focus on the [currently ongoing major Jaxx upgrade](https://twitter.com/diiorioanthony/status/842000749106237441), although [fluffypony was more sarcastic than that](https://www.reddit.com/r/Monero/comments/5rjll8/looks_like_monero_wont_be_in_jaxx_for_a_while/dd7yfo6/).

### Who's still working on that?

Chances are it's going to be fashionable to start claiming work on XMR support to get people buy your product in expectations of future joy.

Nonetheless, [Exodus, the desktop multicoin wallet with Shapeshift integration](https://www.exodus.io/) seems to have Monero support as top priority for new features.

Likewise the official web client mymonero.com should get a mobile interface later this year. Mymonero.com is a fully functional thing by now, the obvious idea would be to use what is there now as a webview to create the most basic online-only app. [And some have indeed succeeded with that](https://www.reddit.com/r/Monero/comments/5tfz27/why_not_use_opensourced_mymonero_fronend_as_quick/), so hopefully this is expectation is a realistic one.


<h4 class="post comment" id="disqus_embed">Comment on "{{ page.title }}"</h4>


<amp-iframe width="600px" height="400px" layout="responsive" sandbox="allow-scripts allow-same-origin allow-modals allow-popups allow-forms" src="https://amp2disqus.netlify.com/altcointrading/#monero"><amp-img layout="fill" src="/img/ads/ad-placeholder.jpg"
 placeholder></amp-img></amp-iframe>
