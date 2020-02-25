---
published:  true
guest:      false
pinned:     false
guide:      false
sponsored:  false

cloud:      true

promoting:  analysis
layout:     at-trading

date: 2018-01-10 11:23:00 +0100

note: 'Trading Tool'
genres: Blog

permalink: tensorcharts/

title: "TensorCharts - Crypto charting app with Orderbook Heatmap, Counter's Ratio and more"
description: "Best crypto trading tool for your crypto 5-min chart strategy, scalping and market health analysis. TensorCharts are available free in the basic version that is still good for scalpers."

author: https://twitter.com/tradingfanbois
author_name: tradingfanbois

image:
- https://res.cloudinary.com/atnetcloud/image/upload/v1582614657/atnet/blog_tensorcharts/tensorcharts_vxc3td.png
- https://res.cloudinary.com/atnetcloud/image/upload/v1582614662/atnet/blog_tensorcharts/cointerminal_y3vih5.png
- https://res.cloudinary.com/atnetcloud/image/upload/v1582614657/atnet/blog_tensorcharts/tensor4_hv5i4o.png
- https://res.cloudinary.com/atnetcloud/image/upload/v1582614657/atnet/blog_tensorcharts/tensor9_znpvtm.png
- https://res.cloudinary.com/atnetcloud/image/upload/v1582614657/atnet/blog_tensorcharts/tensor7_kczr8l.png
- https://res.cloudinary.com/atnetcloud/image/upload/v1582614657/atnet/blog_tensorcharts/tensor5_il51aq.png

image_alt:
- "Ever heard of footprint charts? Tensorcharts are a similar idea, you will surprised how much information you can get from a single glance at the chart."

categories: ["no-ico", "trading"]

tags: ["popular", "footprint-charts", "tensor-charts", "tensorcharts", "crypto-trading", "counters-ratio", "CVD", "bitmex", "scalping", "5-min-strategy-crypto", "heatmap-crypto", "altcoin-trading"]

about:
 name: "tensorcharts"
 sameas: ["https://tensorcharts.com/", "https://www.youtube.com/channel/UCEEdXfhYRJQxlo8-w7qDZ1g", "https://bitcointalk.org/index.php?topic=2542026.0"]

related:
 - {"Collection of TensorCharts tutorials on YouTube and elsewhere": "/tensorcharts-tutorials/"}
 - {"Trading Strategy / Scalping with TensorCharts": "/strategy/scalping"}
 - {"ScriptSpotlight - Automatic Divergences": "/scriptspotlight-auto-divergences/"}
 - {"No-ICO projects": "/category/no-ico/"}
 - {"Cryptocurrency Strategy for Beginners: There is strategy even for hodling": "/cryptocurrency-strategy-beginners/"}

---

## What are Tensorcharts?

{{ site.tc1 }}

The idea of [TensorCharts](https://tensorcharts.com/?r=14) is similar to the one behind [Footprint Charts](https://footprintchart.com/). The charts that will let you "see inside the bars" as their slogan says, and unlike many marketing catchphrases, this one actually fits.

It's an advanced charting tool particularly good for daytraders and scalpers on the legacy markets. You can request a free demo of the Footprint Charts app [here](https://marketdelta.com/solutions/footprint-charts/).

#### Difference between Tensorcharts vs Footprintcharts

With footprint chart you see the regular candlestick chart candle split into steps on the price axis (such as into steps by 100 USD). This way you get to see the exact amount of money traded on which price level.

Each footprint chart block is colored and has a number inside - the number of dollars that was traded in that block.

Tensor Charts, a web app developed originally for crypto, draw from a similar idea. With Tensor Chart you get different granularity of information, depending on much you zoom in.

That is actually a feature: It prevents the analysis paralysis.

The price blocks at Tensor Charts are always colored at a scale based on the volume traded there, zoom in and you'll get the traded money as well.

Basically, it is similar to a far more precise [volume flow script](https://www.tradingview.com/script/EHTKtnIt-ST-Volume-Flow-v6/).

That's not all though. In addition to the traded footprint, TensorCharts also provide a whole host of other advanced crypto trading tools.

#### What is Orderbook Heatmap

Here's what I mean: Even in the basic free tier, TensorCharts provide the famous orderbook heatmap.

What's the orderbook visualization good for? Let me explain:

* The price action, and therefore the market, is made by executed orders.
* Executed orders are displayed as green and red blocks for filled buys and sells. On a standard chart theese would be green and red candlesticks.
* The buy support and sell resistance is practically enforced by limit orders waiting on either side of the market. These are shown in shades of blue and yellow, distinguished by their size.

{% amp700cloudborder {{page.image[5]}} {{page.image_alt[0]}} %}

You can customize your orderbook heatmap through settings and decide how granular the data should be.

#### See the spoofers thanks to orderbook heatmap

The orderbook heatmap function makes it easy to discover buy and sell walls. You will also just as easily see if the walls get pulled or if they execute. If you have been crypto trading for a bit, you know that spoofers like to paint support and resistance only to cancel their orders just before they would get filled.

To see a spoofer on a candlestick chart you really need to stop staring at the chart, open up the full orderbook and meditate for a while.

Then, once the orders get pulled, there is no information left about them in the books.

Contrary to that, Tensor Charts record this event as the past orders remain recorded in the heatmap after the candle close.

#### Intermittent support and resistance for your 5-min trading strategies

Even when there are no spoofers though, the Tensor Charts' heatmap also provides an idea about intermittent support and resistance levels.

You can clearly see the areas with most money in open orders at a single glance.

Here for instance significant buys on BCH markets:

{% amp700cloudborder {{page.image[2]}} {{page.image_alt[0]}} %}

#### Differences in strength between several altcoins

Last but not least, the differences between various cryptocurrency markets also become apparent fairly quickly.

This 5M tensor chart of the ETHUSD market shows a lot of small orders, some of them coinciding into a resistance level:

{% amp700cloudborder {{page.image[3]}} {{page.image_alt[0]}} %}

On this BTCUSD 5M chart you see the differences in order sizes are more marked, there are a few key levels with huge orders but the rest of the orders filling the space in between is of quite insignificant size in comparison:

{% amp700cloudborder {{page.image[4]}} {{page.image_alt[0]}} %}

There's lot more that you can do with TensorCharts, I encourage you to explore their [documentation](https://docs.tensorcharts.com/docs/counters_ratio/).

### What you get in TensorCharts FREE Plan

<a rel="nofollow" href="https://tensorcharts.com/?r=14">TensorCharts</a> are available free with basic functions pulling data from the most popular exchange APIs: Bitfinex, Binance, GDAX, BitStamp, BitMEX. In the free plan you get 5M and 1H timeframes, orderbook heatmap and trades counter.

It is not necessary to create a user account.

If you like working with orderbook heatmaps and only [basic indicators like bbands](/technical-analysis/) or [fibs](/strategy/fibs), Tensorcharts are far better than the currently most popular free charting app Cryptowatch.

### TensorCharts PRO Plans

Paid plans went live on September 18th 2018, one year to day since the development of the TensorCharts app started.

Plans range from 8 USD - 25 USD per month, paid only in crypto.

### How to use Tensor Charts

We have a **whole section for [TensorCharts Tutorials](/tensorcharts-tutorials/)** but if you don't want to go there just now, below a couple of walkthrough videos on YouTube (cca 1 minute each).

[Series of TensorCharts video tutorials on YouTube](https://www.youtube.com/watch?v=YZCUMtV8rBU&list=PLV2igM-bP06wcjn5J2Msu9nI3VYhvhu6T)

<amp-youtube
       data-videoid="YZCUMtV8rBU"
       layout="responsive"
       width="700" height="360">
</amp-youtube>


## Summary: Powerful Tool

TensorCharts have come a long way since we first published a post about them in January 2018.

As the development advanced, programmable indicators were added along with experimental indicators such as the [Counters Ratio](https://docs.tensorcharts.com/docs/counters_ratio/).

**TensorCharts are now beating both Cryptowatch and TradingView** in terms of the amount of information (and therefore edge) you can extract from them.   

We were probably the first blog to call for paid plans, this kind of tool should not be available for free.

We're happy the paid plans are here, it could help with the only issue Tensor Charts traders keep complaining about: That during abrupt price action you can only hope the server won't get too overloaded. I'd argue it's still not as bad as when you get this on BitMEX though.

Still, even the free version of Tensor Charts can give you quite a good edge if you use it right.

[The TensorCharts app](http://bit.ly/tensor-charts)

* Tensorcharts on Twitter: [@tensorcharts](https://twitter.com/tensorcharts)
* Tensorcharts on [Youtube](https://www.youtube.com/channel/UCEEdXfhYRJQxlo8-w7qDZ1g)
* Post about Tensorcharts on [ProductHunt](https://www.producthunt.com/posts/tensorcharts)


### Full TensorCharts Pricing information


|                        |FREE                          |PREMIUM                       |TEAM                          |ALGO TRADER                   |
|------------------------------|------------------------------|------------------------------|------------------------------|------------------------------|
|                              |$0                            |$18                           |5x$8                                   total $40|$25                           |
|                              |For newcomers exploring orderflow, heatmaps and volumetric analysis|For experienced daytraders who don't want to compromise on anything. Low latency, full data and all features available|For a team of 5 members, great value/price ratio. Full feature set, quality data and good update rate|Do you need just TC data, low latency and unlimited websocket subscriptions?|
|                              |                              |                              |                              |                              |
|CONNECTIVITY                  |                              |                              |                              |                              |
|# of devices                  |1                             |1                             |5                             |1                             |
|# of simultaneous markets     |3                             |20                            |5*10                          |unlimited                     |
|# of server side alerts       |1                             |50                            |5*25                          |0                             |
|                              |                              |                              |                              |                              |
|DATA                          |                              |                              |                              |                              |
|trades history                |10min                         |3h                            |1h                            |3h                            |
|large trades history          |X                             |3d                            |24h                           |3d                            |
|double data history           |X                             |✔                             |✔                             |✔                             |
|orderbook price range         |10%                           |15%                           |10%                           |15%                           |
|update rate                   |10s chart, 1s trades          |0.8s chart, 0.1s trades       |0.8s chart, 0.7s trades       |0.8s chart, 0.1s trades       |
|                              |                              |                              |                              |                              |
|FEATURES                      |                              |                              |                              |                              |
|timeframes                    |only 1h, 5min                 |all                           |all                           |all                           |
|# of trades counters          |1                             |unlimited                     |unlimited                     |1                             |
|scripts                       |only defaults                 |defaults+custom               |defaults+custom               |only defaults                 |
|ads                           |yes                           |no ads                        |no ads                        |no ads                        |
|customer support              |low priority                  |highest priority              |high priority                 |highest priority              |
|drawings saved in cloud       |✔                             |✔                             |✔                             |✔                             |
|tick chart                    |X                             |✔                             |✔                             |X                             |
|early access to new features  |X                             |✔                             |✔                             |X                             |
|                              |                              |                              |                              |                              |
|CVD                           |X                             |✔                             |✔                             |X                             |
|large trades tracker          |X                             |✔                             |✔                             |X                             |
|scripting module              |X                             |✔                             |✔                             |X                             |
|trades feed sound             |X                             |✔                             |✔                             |X                             |
|unlimited trades counters     |X                             |✔                             |✔                             |X                             |
|volume profile / fixed / delta|X                             |✔                             |✔                             |X                             |
|vwap                          |X                             |✔                             |✔                             |X                             |
|real time chart               |X                             |✔                             |✔                             |X                             |
|bitmex stats                  |X                             |✔                             |✔                             |X                             |
|heiking ashi + renko          |X                             |✔                             |✔                             |X                             |
|numerical heatmaps            |X                             |✔                             |✔                             |X                             |
|data export                   |X                             |X                             |X                             |✔                             |
|                              |                              |                              |                              |                              |



## TensorCharts Pricing Info

The cost of TensorCharts subscription is comparable with TradingView. It really only comes down to which platform you prefer for your trading.

For BlackFriday, TensorCharts usually dicount their Premium plan by **full 50%**.

[More about typical crypto charting Black Friday offers](/blackfriday/#tradingview-black-friday---40-60-off-on-yearly-plans)

```
50% OFF Tensorcharts Premium:
- 9 USD per month (standard price is 18 USD)
- payments in BTC
```

|                        |FREE                          |PREMIUM                       |TEAM                          |ALGO TRADER                   |
|------------------------------|------------------------------|------------------------------|------------------------------|------------------------------|
|                              |$0                            |$18                           |5x$8                                   total $40|$25                           |
|                              |For newcomers exploring orderflow, heatmaps and volumetric analysis|For experienced daytraders who don't want to compromise on anything. Low latency, full data and all features available|For a team of 5 members, great value/price ratio. Full feature set, quality data and good update rate|Do you need just TC data, low latency and unlimited websocket subscriptions?|


<b>Start with <a rel="nofollow" href="http://bit.ly/tensor-charts">TensorCharts For Free</a> and if you like it, upgrade the next Black Friday.</b>

========
