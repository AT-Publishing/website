---
layout: forestry

published: true

guest: false

date: 2018-01-10 11:23:00 +0100
#update: 2018-01-10 11:23:00 +0100

author: https://twitter.com/tradingfanbois
author_name: tradingfanbois

comments: false

stories: false
note: 'Feature'
genres: Blog

permalink: tensorcharts/
german: false
cz: tensorcharts

tickers: false

title: "TensorCharts - Freemium crypto charting web-app with orderbook heatmap (you'll get to watch the whales)"
description: "TensorCharts are available free in the basic version that is still good for scalpers."

image:
- "/features/tensorcharts.png"
- "/features/cointerminal.png"
- "/features/tensor/tensor4.png"
- "/features/tensor/tensor9.png"
- "/features/tensor/tensor7.png"
- "/features/tensor/tensor5.png"

image_alt:
- "Ever heard of footprint charts? Tensorcharts are a similar idea, you will surprised how much information you can get from a single glance at the chart."

categories: ["no-ico", "trading"]

chart: []
tags: ["popular", "footprint-charts", "tensor-charts", "tensorcharts", "crypto-trading", "crypto-whales", "altcoin-trading"]



about:
 name: "tensorcharts"
 sameas: ["https://tensorcharts.com/", "https://www.youtube.com/channel/UCEEdXfhYRJQxlo8-w7qDZ1g", "https://bitcointalk.org/index.php?topic=2542026.0"]

related:
 - {"Collection of TensorCharts tutorials on YouTube and elsewhere": "/tensorcharts-tutorials/"}
 - {"Trading Strategy / Scalping with TensorCharts": "/strategy/scalping/"}
 - {"No-ICO projects": "/category/no-ico/"}
 - {"ScriptSpotlight - Automatic Divergences": "/scriptspotlight-auto-divergences/"}
---

{{ site.tc1 }}

The idea of [TensorCharts](https://tensorcharts.com/) is similar to the one behind [Footprint Charts](https://footprintchart.com/). The charts that will let you "see inside the bars" as their slogan says, and unlike many marketing catchphrases, this one actually fits. It's an advanced software tool particularly good for daytraders and scalpers. If you trade legacy markets you can request a free demo of Footprint Charts app [here](https://marketdelta.com/solutions/footprint-charts/).

With footprint chart you see the regular chart candle split into blocks on the price axis (such as by 100 USD steps) to see the exact value traded on which price level. Each footprint chart block is colored and has a number inside that says exactly how much money was traded in that block.

Tensor Charts do something similar but in a web browser. With Tensor Chart you only get part of this information unless you zoom in. The blocks are always colored based on the relative volume traded there, zoom in and you'll get the traded volume as well. It is like a far more precise [volume flow](https://www.tradingview.com/script/EHTKtnIt-ST-Volume-Flow-v6/).

That is not all the additional information you get with [TensorCharts](https://tensorcharts.com/) though.

#### Orderbook Heatmap

Tensor Charts, even in the basic free version, are adding the orderbook visualization: While the price action is created by executed orders and displayed as green and red blocks for filled buys and sells, the limit orders waiting on either side of the market are shown in shades of blue and yellow, distinguished by order size:

{% amp700 border {{page.image[5]}} {{page.image_alt[0]}} %}

You can customize the the orderbook visualization ("orderbook heatmap") in settings to decide how granular the data should be.

The orderbook heatmap function makes it much easier to spot buy and sell walls, spoofers or someone trying to paint support and resistance only to cancel the order just before they would get filled.

To see a spoofer on a candlestick chart you really need to stop staring at the chart, open up the full orderbook and meditate for a while. Then, once the orders get pulled, there is no information left about them in the books. Contrary to that, Tensor Charts record this event as the past orders remain recorded in the heatmap after the candle close.

Not every waiting limit order will be pulled though, and so the Tensor Charts' heatmap also provides an idea about intermittent support and resistance levels. You can clearly see the areas with most money in open orders at a single glance.

Here for instance significant buys on BCH markets:

{% amp700 border {{page.image[2]}} {{page.image_alt[0]}} %}

Last but not least, the differences between various cryptocurrency markets also become apparent fairly quickly.

This 5M tensor chart of the ETHUSD market shows a lot of small orders, some of them coinciding into a resistance level:

{% amp700 border {{page.image[3]}} {{page.image_alt[0]}} %}

On this BTCUSD 5M chart you see the differences in order sizes are more marked, there are a few key levels with huge orders but the rest of the orders filling the space in between is of quite insignificant size in comparison:

{% amp700 border {{page.image[4]}} {{page.image_alt[0]}} %}

There's lot more that you can do with TensorCharts, I encourage you to explore their [documentation](https://docs.tensorcharts.com/docs/counters_ratio/).

#### TensorCharts FREE Plan

[TensorCharts](https://tensorcharts.com/) are available free with basic functions pulling data from the most popular exchange APIs: Bitfinex, Binance, GDAX, BitStamp, BitMEX. In the free plan you get 5M and 1H timeframes, orderbook heatmap and trades counter.

It is not necessary to create a user account.

If you like working with orderbook heatmaps and only [basic indicators like bbands](/technical-analysis/) or [fibs](/strategy/fibs), Tensorcharts are far better than the currently most popular free charting app Cryptowatch.

#### TensorCharts PRO Plans

Paid plans went live on September 18th 2018, one year to day since the development of the TensorCharts app started.

Plans range from 8 USD - 25 USD per month, paid only in crypto.

### Learn to use Tensor Charts

**THE BASICS**

For the basics, there is a couple of walkthrough videos on YouTube (cca 1 minute each).

[Series of TensorCharts video tutorials on YouTube](https://www.youtube.com/watch?v=YZCUMtV8rBU&list=PLV2igM-bP06wcjn5J2Msu9nI3VYhvhu6T)

<amp-youtube
       data-videoid="YZCUMtV8rBU"
       layout="responsive"
       width="700" height="360">
</amp-youtube>

**SCALPING**

Our trading strategy post on scalping features TensorCharts heavily. You can [read it here](/strategy/scalping/) or download it in PDF below.

<section class="sidebar-nl container-center">
<h4>Scalping Strategy PDF</h4>
<p>Too long to read now? Save it for offline - download this scalping strategy article as a PDF. No risk of eye cancer from its design either.</p>
<p><a href="/uploads/pdf/altcointrading-net_tensorcharts_scalping.pdf" target="_blank" title="AltcoinTrading.NET TensorCharts Scalping Guide"><b>Download PDF</b></a></p>
</section>

<p>&nbsp;</p>

**CVD**

CVD or Cumulative Volume Delta is an indicator available from the updated version of Tensorcharts. If you learn to read it properly it helps you spot price reversals - hence the note in the tutorial below about the predictive game.

["Counter-Trading with CVD" by Bitcoin Trading Challenge (28 mins)](https://www.youtube.com/watch?v=gj-zxO-ZnSU)

<amp-youtube
       data-videoid="gj-zxO-ZnSU"
       layout="responsive"
       width="700" height="360">
</amp-youtube>

<p>&nbsp;</p>

**FULL TENSORCHARTS DOCUMENTATION**

The community-sourced documentation is now available as a website at [docs.tensorcharts.com](https://docs.tensorcharts.com/). It is very brief but it outlines all the important features of Tensor Charts which you then can easily google.

### Summary: Powerful Tool

TensorCharts have come a long way since we first published a post about them in January 2018. As the development advanced, programmable indicators were added along with experimental indicators such as the [Counters Ratio](https://docs.tensorcharts.com/docs/counters_ratio/) and TensorCharts are now beating both Cryptowatch and TradingView in terms of the amount of information you can extract from them.   

We were probably the first blog to call for paid plans, this kind of tool should not be available for free. We're happy the paid plans are here, it could help with the only issue Tensor Charts traders keep complaining about: That during abrupt price action you can only hope the server won't get too overloaded. I'd argue it's still not as bad as when you get this on BitMEX though.

However, even the free version of tensor charts can give a trader quite a good edge if they use it right.

* Tensorcharts on Twitter: [@tensorcharts](https://twitter.com/tensorcharts)
* Tensorcharts on [Youtube](https://www.youtube.com/channel/UCEEdXfhYRJQxlo8-w7qDZ1g)
* Post about Tensorcharts on [ProductHunt](https://www.producthunt.com/posts/tensorcharts)

**Some Background, if you are interested**

The platform was originally built using collateral data from the developer's other project.

The other project is called [cointerminal.io](https://cointerminal.io/). There is another project named [CoinTerminal which is a news aggregator](https://site.cointerminal.co/) like Bloomberg terminal for cryptocurrencies, it is a paid one and has nothing to do with cointerminal.io.

{% amp700 border {{page.image[1]}} {{page.image_alt[0]}} %}

[Cointerminal.io](https://cointerminal.io/) is focused on market statistics. You can choose your favourite cryptocurrencies and get price development by 1H, 4H, 1D and 15D and also an indicator overview (MACD, RSI). There are price alerts and also a trading interface where you will be able to connect to cryptocurrency exchanges via API - cointerminal.io will be a paid service and tensor charts should be available in the PRO version.

The charts from the standard version are about as good as cryptowatch. They have the option to switch between candles and Heikin-Ashi and include set of the most used indicators (MACD with a divergence callout) when you click on "Analysis". A lot of these functionalities are still under development but you can already sign up to see it for yourself - it's all still free but limited. Here are two invite codes: `q7zg46fu`, `ogsqr1b9`.
