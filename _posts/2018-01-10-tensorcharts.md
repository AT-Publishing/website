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

permalink: "/tensorcharts"
german: false
cz: tensorcharts

tickers: false

title: "TensorCharts - Free charting webapp where you'll get to watch the whales"
description: "TensorCharts are available free for now - collateral data from the developer's other project."

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
tags: ["footprint-charts", "tensor-charts", "crypto-trading", "whale-watching", "altcoin-trading"]



about:
 name: "tensorcharts"
 sameas: ["https://tensorcharts.com/", "https://www.youtube.com/channel/UCEEdXfhYRJQxlo8-w7qDZ1g", "https://bitcointalk.org/index.php?topic=2542026.0"]


---

The idea of [TensorCharts](https://tensorcharts.com/) is similar as the one behind [Footprint Charts](https://footprintchart.com/) - the charts that will let you "see inside the bars" as their slogan says. It's an advanced software tool particularly good for daytraders and scalpers, you can request a free demo [here](https://marketdelta.com/solutions/footprint-charts/).

Tensor charts do something similar but in a web browser: while with footprint chart you can split the regular chart candle into blocks on the price axis (such as by 100 USD steps) and see the exact value traded there. Each footprint chart block is coloured and has a number inside that says exactly how much money was traded in that block. With tensor chart you only get part of this information: the blocks are coloured based on the relative volume traded there. It is like more precise [volume flow](https://www.tradingview.com/script/EHTKtnIt-ST-Volume-Flow-v6/).

Additional info you get with [TensorCharts](https://tensorcharts.com/) though is the orderbook visualisation: While the price action created by filled orders is displayed as green and red blocks for filled buys and sells, the limit orders waiting on either side of the market are done in shades of blue, distinguished by order size:

{% amp700 border {{page.image[5]}} {{page.image_alt[0]}} %}


This makes it much easier to spot the walls, spoofers or someone painting support and resistance. To see a spoofer on a candlestick chart you really need to stop staring at the chart, open up the full orderbook and meditate for a while. Then, once the orders get pulled, there is no information left about them in the books. Contrary to that with the visualisation the past orders remain recorder after the candle close.

It also provides an idea about interminent support and resistance levels - you can clearly see the areas with most money in the orders. Here for instance significant buys on BCH:

{% amp700 border {{page.image[2]}} {{page.image_alt[0]}} %}

Last but not least, the differences between the cryptocurrency markets also become apparent at the first sight.

This 5m visualisation on the ETHUSD market shows a lot of small orders, some of them coinciding into a resistance level:

{% amp700 border {{page.image[3]}} {{page.image_alt[0]}} %}

On this BTCUSD 5m chart you see the differences in order sizes are more marked, there are a few key levels with huge orders but the rest of the orders filling the space in between is insignificant in comparison:

{% amp700 border {{page.image[4]}} {{page.image_alt[0]}} %}


[TensorCharts](https://tensorcharts.com/) are available free for now pulling data from Bitfinex API, it is collateral data from the developer's other project.

The other project is called [cointerminal.io](https://cointerminal.io/). There is another project named [CoinTerminal which is a news aggregator](https://site.cointerminal.co/) like Bloomberg terminal for cryptocurrencies, it is a paid one and has nothing to do with cointerminal.io.

{% amp700 border {{page.image[1]}} {{page.image_alt[0]}} %}

[Cointerminal.io](https://cointerminal.io/) is focused on market statistics. You can choose your favourite cryptocurrencies and get price development by 1H, 4H, 1D and 15D and also an indicator overview (MACD, RSI). There are price alerts and also a trading interface where you will be able to connect to cryptocurrency exchanges via API - cointerminal.io will be a paid service and tensor charts should be available in the PRO version.

The charts from the standard version are about as good as cryptowatch. They have the option to switch between candles and Heikin-Ashi and include set of the most used indicators (MACD with a divergence callout) when you click on "Analysis". A lot of these functionalities are still under development but you can already sign up to see it for yourself - it's all still free but limited. Here are two invite codes: `q7zg46fu`, `ogsqr1b9`.



#### Learning to use TensorCharts

There will be a post in [Trading Strategy](/strategy/) about how you can read the chart and what information to look for. For the basics, there is a couple of walkthrough videos on YouTube (cca 1 minute each).

[Series of short video tutorials on YouTube](https://www.youtube.com/watch?v=YZCUMtV8rBU&list=PLV2igM-bP06wcjn5J2Msu9nI3VYhvhu6T)


<amp-youtube
       data-videoid="YZCUMtV8rBU"
       layout="responsive"
       width="700" height="360">
</amp-youtube>

<p>&nbsp;</p>


#### Summary: Powerful tool

If [TensorCharts](https://tensorcharts.com/) had programmable indicators it would be a clear winner over TradingView. The charts alone can give a trader quite a good edge if they are used right - it's perhaps strange to call for it but this really should be a paid tool. For now you can make do with the combination of TradingView and TensorCharts and hope the TensorCharts server won't get too overloaded.

And if you aren't sure how you could make use of this kind of chart, watch out for a more detailed post in [Strategy](/strategy/) later this week.
