---
layout: blog
date: 2017-03-22 4:20
title: "Cryptosignal - ETH Hashrate vs Price Correlation"
description: "A data scientist created a free tool that lets you correlate the dollar price of ETH with hash rate, difficulty or daily number of transactions - that's a free altcoin trading signal."
categories:
- "no-ico"
- "trading"

permalink: cryptosignal/
image:
- "/img/emotions/u-wot2.jpg"
- "/img/eth/cryptosignal.jpg"
image_alt:
- "Yeah it's a wonder"

update: 2017-04-14 13:00
german: false
comments: true
stories: true

published: true

---

{% amp700 border {{page.image[0]}} {{page.image_alt[0]}} %}

_Image: {{page.image_alt[0]}}_

________________________


{{ site.ads.aads728 }}

#### Cryptosign.al

[https://cryptosign.al](https://cryptosign.al) is a free tool that lets you correlate the dollar price of ETH with hash rate, difficulty or daily number of transactions.

The tool was published via r/bitcoinmarkets only a few hours ago. [Here's what](https://www.reddit.com/r/BitcoinMarkets/comments/60php5/introducing_cryptosignal_directly_analyze_bitcoin/) the author himself has to say:

> Hey BitcoinMarkets,
Cryptosign.al is a tool for finding patterns in the prices / data of the top cryptocurrencies (right now just BTC and ETH). It gives you the ability to directly overlay charts, use common technical indicators, and visualize statistics including linear and polynomial regression, and correlation. Right now, the data is updated daily but I’m looking to make the periods smaller in the near future.
I’m a data scientist by trade and have been working on this site casually for the last 6 months, it’s been a ton of fun and I hope you guys find it useful. Some upcoming features I was thinking of: hourly (or finer) periods and live updates, more data sources (signals) to analyze, more advanced modeling features.
I would really enjoy hearing some feedback and any ideas you guys have (eg, the next feature you want to see the most).
Also worth mentioning that I’ve been a long time member on these and other crypto subreddits but I’m separating my work/play accounts. Thanks for all your contributions and I hope this website reciprocates that at least a little bit.
Edit: Some people may be receiving a startup page for Nginx. I'll look into it, but PM if it's still an issue in a day or two, thanks :)

#### Is ETH overpriced now at 40 USD?

So far Cryptosignal is only available for BTCUSD and ETHUSD but if it gets popular it might change in the future. Specifically, people already suggested to add Google Trends volume (to track adoption and general interest) and of course more altcoins.

It is amazing to see it clearly how considering the hashrate ETH was undervalued for some time. The price matched the hashrate in the recent ETH surge:

{% amp700 border {{page.image[1]}} {{page.image_alt[0]}} %}

On the contrary, BTC looks undervalued at the moment.

Nonetheless, the correlation between hash rate and price has been a controversial topic. The majority opinion seems to be that hash rate follows price, not the other way round.

Consider [this thread from October 2016](https://www.reddit.com/r/Bitcoin/comments/577awf/hashrate_vs_price/). OP suggests that (on the bitcoin market) the hash rate could act as a ceiling for potential price growth:

> BTC supply can be divided between existing bitcoins [where the supply (just for simplification) is very unelastic, because of hodling etc.] and freshly minted bitcoins [where the supply is very elastic, because miners are selling everything they mine for current price (again for simplification)].

> So with those assumptions, where the price is defined by near zero profit of miners, the price should be rising max at the pace of hashrate surge. But the trick is the max. It would happen only in a world without technological innovation. If miners get more effective tools, then the price will surge less than hashrate.

> So if those thoughts are correct, I think much more hashrate has to be added to allow btc price to grow. For example from halving we see only 25% rise of hashrate, but much of it if not all is swallowed by the technological advance.

> So does bitcoin need surge in demand that will cause temporary high price that will be very attractive for miners and that will then cause the high hashrate and new equilibrium will come?

> In short: should the hashrate follow the price or vice versa? Maybe there was some article about that, I would be happy to read it.

To a comment that says hash rate and price are not correlated like this, OP responds with an explanation that the correlation for BTCUSD was bad when BTC was in it's infancy but as the market matures the correlation improves.

> They were not related in the past, because it was a wild west. The approx 2 years 1/2013-1/2015 were anomal in many ways (price overshooted). But during the last year the correlation is near perfect for example. Now the situation must consolidate for next few halvings. After them, who knows how the price will be determined. Maybe another factor steps in by then - the fees.

[This Stack Overflow thread](http://bitcoin.stackexchange.com/questions/3171/relation-between-network-hash-rate-bitcoin-value) back from 2012 claims the hash rate to be rather a lagging indicator but on the individual level, if hash rate grows it means that more people decided to mine the coin. If they decided so for profit it indicates they expect the coin they mine will increase in value over time.

That would go well together with the idea that in some cases if price lags behind growing hash rate it could mean bullish sentiment.

[Go to Cryptosignal](https://cryptosign.al)
