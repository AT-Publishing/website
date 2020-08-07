---
published:  true
guest:      false
pinned:     false
guide:      false
sponsored:  false

cloud:      true

promoting:  exchanges
layout:     at-trading

title: "Technical Analysis: Divergences (With a Divergence Cheat Sheet)"
description: "Divergence is a disagreement between price and an oscillating indicator such as MACD or RSI. It is not strong enough an indicator to enter a position, but it gives an idea of the state of the market."

permalink: divergences/


image:
- https://res.cloudinary.com/atnetcloud/image/upload/v1582609532/atnet/blog_divs/bitfinex-divergences_iqfmiz.png
- https://res.cloudinary.com/atnetcloud/image/upload/v1582609354/atnet/blog_divs/divergences1_lcfavg.jpg
- https://res.cloudinary.com/atnetcloud/image/upload/v1582609354/atnet/blog_divs/hiddendivergences_ptaof1.png
- https://res.cloudinary.com/atnetcloud/image/upload/v1582609354/atnet/blog_divs/price-stochrsi_hhovvf.png
- https://res.cloudinary.com/atnetcloud/image/upload/v1582609354/atnet/blog_divs/price-bbands_hxbpi5.png

image_alt: "Divergences between lows or highs on the price action and the MACD or RSI can provide valuable signals."


stories: false
note: 'Trading Strategy'
categories: [ crypto-technical-analysis ]
tags:       [ crypto-trading-strategy, crypto-charting, trading-divergences ]

author:      https://twitter.com/tradingfanbois
author_name: tradingfanbois

about:
 name: "technical analysis divergence"
 sameas: ["https://www.investopedia.com/terms/d/divergence.asp"]

related:
 - {"Trading Strategy: Technical analysis as a tool for strategic thinking": "/strategy/technical/"}
 - {"Ichimoku cloud - Does it make sense to tweak the settings for crypto?": "/ichimoku-cloud/"}
---

#### What are divergences in trading?

When traders talk about **divergences**, or **divs**, they are pointing out a disagreement between the price action and a technical indicator. The thing to look for in the price development are highs and lows, pick a pair of prominent ones and check if your indicator rendered the opposite thing: price made higher high, look for lower high in the indicator for that timespan.

The indicator of choice is typically some kind of oscillator (RSI, MACD).

These divergences signify prevailing momentum in the market. Depending on the type of the divergence they suggest either continuation or reversal.

**Divergences in short**

We distinguish *regular divergence*, *hidden divergence* and *exaggerated divergence*.

*Regular Divergence* is a sign of trend reversal. Price keeps the trend but indicator already shows the reversal.

* Signal to **short** = regular divergence in **tops**. Price makes higher high but oscillator makes lower high. Underlying weakness, possible exhaustion at the end of a bull trend.
* Signal to **long** = regular divergence in **bottoms**. Price makes lower low but oscillator makes higher low. Underlying strength, possible bottoming in progress.

*Hidden Divergence* is a divergence that follows the trend. Hidden divs show the market is inclined to continue the current trend.

* Signal to **short** = hidden divergence in **tops**. Price makes lower highs but oscillator makes higher highs. Tends to be found on lower highs in a downtrend.
* Signal to **long** = hidden divergence in **bottoms**. Price makes higher low but oscillator makes lower low. Tends to be found during continuation pauses in an uptrend.

*Exaggerated Divergence* is only different in that price makes double top or double bottom rather than new high or new low.

{% amp700cloud border {{page.image[1]}} {{page.image_alt[0]}} %}

#### Divergences only show a level where to wait for entry signal

The logic behind divergences is that sometimes the indicators shows hidden tendencies of the market (strength or weakness) that might not be visible from the price action yet.

However, this is not a sharp enough indication to signal the actual entry. It gives the idea about the direction you should be looking for when looking for an entry on that timeframe but you will need to dig deeper and switch to shorter timeframes to find a plausible place for your entry.

#### Examples of MACD divergence, RSI divergence and %bb divergence

**Price vs MACD Divergence, standard settings**

This is a regular bullish divergence on an old ETHUSD chart.

{% amp700cloud border {{page.image[0]}} {{page.image_alt[0]}} %}

**Price vs StochRSI Divergence**

This is a 1D chart of BTCUSD, Bitfinex. The StochRSI shows hidden bearish divergence, the momentum is set to continue the bearish trend.

{% amp700cloud border {{page.image[3]}} {{page.image_alt[0]}} %}

**Price vs %b Divergence, BBands 21 periods - stdev 3**

Divergence with %b is a more precise way to observe whether new extremes of the price action are closer to or farther from the bollinger band's boundaries. There is a more reliable version of the *double bottom* formation on the bbands: price makes a new low but that now is not a new low relatively to the bbands. That is to say, the first low is below the lower bband and the second low is a lower low in absolute terms (the price) but also either on or above the lower bband - [video on bbands explaining that in this article](/technical-analysis/).

TradingView provides the %b indicator which measures how far is the price from the bollinger band of your selected standard deviation and it plots this distance. The situation where you have new low in price but not a new low relatively to the bands shows as a regular bullish divergence on %b.

This is a 2H chart of BTCUSD, Bitfinex - the same period as the previous one on 1D. Having bearish divergences on a longer timeframe and a bullish divergence on a shorter one shows a short recovery might be in the cards but the bulls aren't winning yet.

{% amp700cloud border {{page.image[4]}} {{page.image_alt[0]}} %}

## Divergences Cheat Sheets

* [Comprehensive Divergences Cheat-sheet](https://res.cloudinary.com/atnetcloud/image/upload/v1582609528/atnet/blog_divs/5SnaDpt_whl4al.png)  with proper explanations. It is valid for all oscillating indicators, you can use it to evaluate MACD divergences as well as RSI divergences.

<amp-img itemprop="image" alt="Altcoin Trading - TA Divergences Cheatsheet"
 src="https://res.cloudinary.com/atnetcloud/image/upload/v1582609528/atnet/blog_divs/5SnaDpt_whl4al.png" layout="responsive"
 data-original-width="1031px" data-original-height="2464px"
width="750px" height="1792px"></amp-img>

* [Basic divergences cheatsheet from BabyPips](https://res.cloudinary.com/atnetcloud/image/upload/v1582609523/atnet/blog_divs/babypips-divergences-cheatsheet_my6dqy.jpg)

<amp-img itemprop="image" alt="Simple Divergences Cheatsheet"
 src="https://res.cloudinary.com/atnetcloud/image/upload/v1582609523/atnet/blog_divs/babypips-divergences-cheatsheet_my6dqy.jpg" layout="responsive"
 data-original-width="652px" data-original-height="965px"
width="652px" height="965px"></amp-img>

#### Crypto Divergences Explained by Josh Olszewicz

Josh Olszewicz did a Youtube series called *Better know an indicator* which included a good video on divergences. Other videos from the same series included the intro to [Ichimoku cloud for crypto traders](/ichimoku-cloud/).

<amp-youtube
          data-videoid="nGbqFV0koaQ"
          layout="responsive"
          width="700" height="360">
</amp-youtube>

<br>


#### Resources To Learn More About Price/Oscillator Divergences


* ”dukascopy.com / Do you know everything about divergences?”

<a href="https://www.dukascopy.com/fxcomm/fx-article-contest/?Do-You-Know-Everything-About=&action=read&id=890" class="button">Divs on dukascopy.com</a>

* ”babypips.com / Trading Divergences”

<a href="http://www.babypips.com/school/high-school/trading-divergences" class="button">Trading Divergences</a>
