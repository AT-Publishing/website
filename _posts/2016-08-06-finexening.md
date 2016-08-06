---
layout: blog
title: "The Finexening - Bitfinex hack"
description: "The best of Reddit's response on the Bitfinex hack"
category: "trading"
permalink: finexening/
image:
- "/img/bitfinex/gox.png"
image_alt:
- "Comparisons to MtGox is quite obvious."
update: 2016-08-06
---

{% amp700 border {{page.image[0]}} {{page.image_alt[0]}} %}

_Image: {{page.image_alt[0]}}_

________________________

If you are reading this bit chances are you didn't miss all the drama. The best source of information is probably their status page at [bitfinex.statuspage.io](https://bitfinex.statuspage.io), though the information is scarce. Sane Tackett /u/zanetackett is trying to keep the facade of the company and panic hasn't kicked in but as for useful info he doesn't provide much.

{{ site.ads.trezor }}

Bad news for all ETH, ETC or LTC traders is that even though their assets were not affected by the hack, it seems they are lost too - just as USD assets, which were uneffected as well. The most likely outcome is some form socialized loss - a haircut - if it can be made in a legal way. The official statement however is still "we have not decided yet". Most traders conclude it was actually quite expected after the spectacular 24h downtime couple of weeks earlier during wild price movements. Though Kraken fails like this too, repeatedly, and no hack occured as of yet - so take out of it what you like.

Here is the most important info you might have missed if you haven't been lurking on Reddit since that not-so-much-black-swan event happened.

#### Will it affect the general trust in cryptocurrencies?

There is a lot of people who don't really think so.

<blockquote class="twitter-tweet" data-lang="en-gb"><p lang="en" dir="ltr">Collectively, high-profile exchange hacks like MtGox and Bitfinex have set <a href="https://twitter.com/hashtag/Bitcoin?src=hash">#Bitcoin</a> back...</p>&mdash; #BubbleMoku (@CarpeNoctom) <a href="https://twitter.com/CarpeNoctom/status/761502184571822080">5 August 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

After all Bitfinex was hacked, there is no flaw in any coin - but, if you are not actually able to safely trade anywhere, what is it for? This is a setback for all cryptos, and probably will be "solved" by bullshit regulations that will make crypto trading even more of a hassle with risks not really lowered.

<div class="reddit-embed" data-embed-media="www.redditmedia.com" data-embed-parent="false" data-embed-live="false" data-embed-uuid="f4695195-89c8-4417-8f22-089008d82f51" data-embed-created="2016-08-06T15:08:25.903Z"><a href="https://www.reddit.com/r/BitcoinMarkets/comments/4vtv1m/bitfinex_down_due_to_bitcoin_security_breach/d667ehe">Comment</a> from discussion <a href="https://www.reddit.com/r/BitcoinMarkets/comments/4vtv1m/bitfinex_down_due_to_bitcoin_security_breach/">Bitfinex down due to bitcoin security breach</a>.</div><script async src="https://www.redditstatic.com/comment-embed.js"></script>

{{ site.ads.ledger }}

#### Was the Bitfinex hack an inside job?

Maybe.

<blockquote class="twitter-tweet" data-lang="en-gb"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/Bitcoin?src=hash">#Bitcoin</a> <a href="https://twitter.com/hashtag/HackLeak?src=hash">#HackLeak</a> exposed.<br>hypot. P2SH stats vs Futures <a href="https://twitter.com/OKCoinBTC">@OKCoinBTC</a>, hack info = value.<br><br>HD: <a href="https://t.co/CH4kErhTfs">https://t.co/CH4kErhTfs</a> <a href="https://t.co/GI4nzBXQf7">pic.twitter.com/GI4nzBXQf7</a></p>&mdash; Beetcoin (@Beetcoin) <a href="https://twitter.com/Beetcoin/status/761299853985058817">4 August 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Can we learn from our mistakes for the next time?

Some say it was plain as a yoghurt that Finex will be hacked: It had strange downtimes during busy times - but so do many exchanges. [It was hosted on an AWS](https://www.reddit.com/r/BitcoinMarkets/comments/4vtv1m/bitfinex_down_due_to_bitcoin_security_breach/d666nk6) - every expert will cringe but Gemini also run on AWS and OKCoin International too. Ask the bot coders - they know where to put their codes to be in the same datacenter as the exchange. There is no exchange that would keep their own bare metal in a server room. Cost cutting wins.

Only thing we can do is to NEVER baghold or anything like that: Send money to exchange, do the trade, send them to Trezor.

{{ site.ads.trezor }}

#### Who runs Bitfinex anyway?

<div class="reddit-embed" data-embed-media="www.redditmedia.com" data-embed-parent="false" data-embed-live="false" data-embed-uuid="324f63fa-8a2d-4886-a9b7-fa6dbef79390" data-embed-created="2016-08-06T14:49:21.941Z"><a href="https://www.reddit.com/r/BitcoinMarkets/comments/4webkx/daily_discussion_saturday_august_06_2016/d66oeue">Comment</a> from discussion <a href="https://www.reddit.com/r/BitcoinMarkets/comments/4webkx/daily_discussion_saturday_august_06_2016/">[Daily Discussion] Saturday, August 06, 2016</a>.</div><script async src="https://www.redditstatic.com/comment-embed.js"></script>

Bitfinex's CEO is a Dutch man [Jean-Louis van der Velde](https://bestbitcoinexchange.co/locations.html#asia). [Here is his LinkedIn](https://www.linkedin.com/in/j-l-van-der-velde-26a24b6). Their risk manager is also public on LinkedIn - [here](https://www.linkedin.com/in/giancarlo-devasini-2a564682?trk=pub-pbmap). Their PR representative Zane Tackett is well known to anyone on Reddit - /u/zanetackett, loyal till his death and beyond. His boss is [Phill Potter](https://www.linkedin.com/in/philip-potter-087495a6). However **none of these people actually founded Bitfinex**. The platform was fonded by [a freelance sysadmin Raphael Nicolle](https://fr.linkedin.com/in/raphaelnicolle/en) with codebase from Bitcoinica, an exchange that was hacked back in the 2012.

#### Is someone liable for something? They had BitGo which is insured..?

The insurance doesn't cover this hack. BitGo supplied Bitfinex with an implementation of segregated user-specific wallets to fill the regulatory requirements that were raised by futures regulatory commissions - margin swaps offered on finex were basically a futures product without the user specific wallets. However Bitfinex **probably** had complete control over the BitGo implementation and turned off its security functions (like, limits on withdrawals).

<div class="reddit-embed" data-embed-media="www.redditmedia.com" data-embed-parent="false" data-embed-live="false" data-embed-uuid="6d857b4d-0587-4229-8a58-2fb7b34eea5c" data-embed-created="2016-08-06T15:04:07.053Z"><a href="https://www.reddit.com/r/BitcoinMarkets/comments/4w2osg/daily_discussion_thursday_august_04_2016/d63n4rp">Comment</a> from discussion <a href="https://www.reddit.com/r/BitcoinMarkets/comments/4w2osg/daily_discussion_thursday_august_04_2016/">[Daily Discussion] Thursday, August 04, 2016</a>.</div><script async src="https://www.redditstatic.com/comment-embed.js"></script>

USD funds for verified USA customers that came from US bank accounts should be insured via SynapsePay.

#### Are now Kraken and Poloniex coming next?

Kraken uses BitGo but with a different setup:

<div class="reddit-embed" data-embed-media="www.redditmedia.com" data-embed-parent="false" data-embed-live="false" data-embed-uuid="2bc0682a-fae0-4c6b-9e30-b92fb66f5174" data-embed-created="2016-08-06T15:07:32.945Z"><a href="https://www.reddit.com/r/BitcoinMarkets/comments/4vw7ti/kraken_you_are_up_to_bat/d62kdih">Comment</a> from discussion <a href="https://www.reddit.com/r/BitcoinMarkets/comments/4vw7ti/kraken_you_are_up_to_bat/">Kraken, you are up to bat.</a>.</div><script async src="https://www.redditstatic.com/comment-embed.js"></script>

Poloniex ... Well, who knows anything about Poloniex, right?


#### Is there still hope?

Bitfinex will not pay for the losses of its customers. Bitstamp did, but the loss was smaller and they had VC funding. The only way a VC might want to flow into Bitfinex would probably be via an acquisition. If some other exchange with better security bought Finex they could essentially only buy the user base and their position. To simplify it, Finex accounts could carry on their existence on another platform with their pre-hack balance.

Bitfinex's daily volume was known and it seems that a hack of this size wasn't such a big hit really. It is unclear why Bitfinex people refuse to state their net BTC worth.

<div class="reddit-embed" data-embed-media="www.redditmedia.com" data-embed-parent="false" data-embed-live="false" data-embed-uuid="fdea13c4-49b9-4650-8d42-28a36418d318" data-embed-created="2016-08-06T15:11:12.669Z"><a href="https://www.reddit.com/r/BitcoinMarkets/comments/4vtv1m/bitfinex_down_due_to_bitcoin_security_breach/d666970">Comment</a> from discussion <a href="https://www.reddit.com/r/BitcoinMarkets/comments/4vtv1m/bitfinex_down_due_to_bitcoin_security_breach/">Bitfinex down due to bitcoin security breach</a>.</div><script async src="https://www.redditstatic.com/comment-embed.js"></script>

## Places to watch

* stakepool teamspeak
* reddit's bitcoin markets
* trading view cryptocurrency trollbox
* /u/zanetackett with a big grain of salt
* bitfinex.statuspage.io

**NOTE** There have been phishing emails from "ibitfinex.com", these are fraudulent.

## The price action coming from this?

Because altcoins often mirror Bitcoin's price action, do expect a wild ride until the dust settles...Which might take months. In an event like this all TA is probably worthless.

There will be more shit to come once people realize Zane is a nice guy but all in all, not your family, and that blockchain companies are full of ex JP Morgan motherfuckers who are only going where the $$$ is and don't give a shit about the people who actually make the existence of the business possible - the customers. And since folks with pedigrees are so networked each with another they will never lose a penny or reputation, effectively. We traders will, unless we protect our assets by a proper risk management.

<div class="reddit-embed" data-embed-media="www.redditmedia.com" data-embed-parent="false" data-embed-live="false" data-embed-uuid="d2b63219-1fca-4470-89f6-4ae4d2375cb6" data-embed-created="2016-08-06T15:21:08.578Z"><a href="https://www.reddit.com/r/BitcoinMarkets/comments/4webkx/daily_discussion_saturday_august_06_2016/d66p3hw">Comment</a> from discussion <a href="https://www.reddit.com/r/BitcoinMarkets/comments/4webkx/daily_discussion_saturday_august_06_2016/">[Daily Discussion] Saturday, August 06, 2016</a>.</div><script async src="https://www.redditstatic.com/comment-embed.js"></script>
