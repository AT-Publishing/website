---
published:  true
cloud:      true

layout:     at-trading
pinned:     false
guest:      false
sponsored:  false
stories:    false
guide:      false
note:       ScriptSpotlight
genres:     Blog

series:       ScriptSpotlight
categories:   [ crypto-technical-analysis ]
tags:         [ tradingview-scripts, divergence, obv, bbands, three-pushes-pattern, crypto-trading-strategy, crypto-charting, tradingview, top  ]

permalink: scriptspotlight-obv-div/

mentions:
 name: "divergence"
 sameas: "https://www.altcointrading.net/divergences/"

promoting: analysis

date: 2020-12-13 11:03:00 +0100

title: "OBV: On-Balance Volume Divergence Crypto Strategies"
description: "On Balance Volume divergence trading made easier by transforming OBV into oscillator. Pine script available for free on TradingView."

author: https://reddit.com/u/karlvonbahnhof
author_name: KarlVonBahnhof
author_twitter: "_Karlvonbahnhof"

image:
- https://res.cloudinary.com/dttheory/image/upload/c_scale,w_700/v1609243855/at-top/divs/obv-spotlight_rihxh2.jpg
- https://res.cloudinary.com/dttheory/image/upload/c_scale,w_700/v1609243856/at-top/divs/obv-div-2h-btcusd_sljsrj.jpg
- https://res.cloudinary.com/dttheory/image/upload/c_scale,w_700/v1609243856/at-top/divs/obv-div-4h-btcusd_hldzta.jpg
- https://res.cloudinary.com/dttheory/image/upload/c_scale,w_700/v1609243855/at-top/divs/obv-div-1d-btcusd_rk2bij.jpg
image_alt:
- "OBV divergences Script Spotlight (TradingView) on AltcoinTrading.NET"

---

*In ScriptSpotlight, we review TA scripts that are available from Tradingview public library. If you don't have a TradingView account yet, [make a free one here](http://bit.ly/at-tvd-eth).*

In this ScriptSpotlight:

* [Why OBV works](#how-obv-works)
* [OBV Oscillator Tradingview Script Review](#does-it-work)

## On Balance Volume (OBV)

On Balance Volume is a technical analysis indicator best known from the stock market. Swing traders use OBV to identify periods of quiet accumulation.

During such times, entities dubbed "smart money" are buying up the asset in question, but their activity has minimal effect on price.  

Traders who are able to use OBV, Wyckoff method or fundamental analysis to discover the "smart money" accumulation is happening can choose to enter the market at a better entry price than breakout traders.

There is also the use of OBV to improve your exit price or minimize the risk of drawdowns. Traders who spot a bearish OBV divergence can sell as the "smart money" starts selling into retail, typically all the while the news sites and social media are still insanely bullish.

### How OBV works

On Balance Volume is a way to graphically express the old stock market wisdom: **Volume precedes price action.**

The OBV chart is a single line that changes proportionally to the last period's volume.

* Current close price is below last close price (Price goes down): We subtract current traded volume from OBV (OBV goes down)
* Current close price is above last close price (Price goes up): We add current traded volume to OBV (OBV goes up)


### How to use OBV in crypto trading

Looking for smart money accumulation, we want to see only small increases in price but large volumes and therefore large changes in OBV.

On the chart, smart money accumulation will show as a **divergence of OBV vs price**.

#### OBV Divergence Types

OBV follows the same [divergence](/glossary/#div) patterns as RSI divergence:

* Bullish OBV divergence: OBV bottoms out, making higher low, on continually falling price
* Bearish OBV divergence: OBV tops out, making a lower high, on continually rising price

[Get OBV on TradingView](http://bit.ly/at-tvd-eth)

## OBV Divergence on TradingView

There is plenty of OBV scripts in the TradingView library.

Here's one version that is modified precisely to bring up divergences: [OBV Oscillator](https://www.tradingview.com/script/Ox9gyUFA-Indicator-OBV-Oscillator/).

The script calculates the regular OBV, as explained above...

```
src = close
obv(src) => cum(change(src) > 0 ? volume : change(src) < 0 ? -volume : 0*volume)
# new obv = if close went up then add volume,
#           if close went down then subtract volume,
#           else leave old obv
```

...and then it makes it into an oscillator by subtracting its own exponential moving average from itself:

```
obv_osc = (obv(src) - ema(obv(src),length))
```

This brings up weaker divergences on short time frames that would not always show up on regular OBV.

[Full script code](https://www.tradingview.com/script/Ox9gyUFA-Indicator-OBV-Oscillator/)

### Does it work?

Yes.

On shorter timeframes (1H-4H), the oscillator does bring up divergence that the plain OBV does not yet show.

**Below is a December 2020 BTCUSD in 2H timeframe.**

On the left, there is a clear bearish divergence that is far more pronounced with the oscillator. Plain OBV shows it as well, just much more shallower.

Later on, more to the right, there is another bearish divergence that is not shown on plain OBV at all.

With this weaker divergence you could argue that the price stayed more or less flat anyway, and so this div might not be worth the attention anyway.

{% amp700cloud border {{page.image[1]}} {{page.image_alt[0]}} %}

When in doubt, zoom out: Let's take a look at the same situation on a higher timeframe then.

**Below is BTCUSD in 4H.**

The divergence highlighted on 2H is still there (yellow), and moreover it is now a part of a larger divergence (pink).

The larger div is not shown in plain OBV.

{% amp700cloud border {{page.image[2]}} {{page.image_alt[0]}} %}

On the classic 1D chart, the differences between OBV oscillator and plain OBV vanish.

It is still worth noting that the oscillator will paint the line bright red to scream at you at that THIS IS NOT GOOD in case you'd prefer to ignore that...which you still kind of could with plain OBV.

{% amp700cloud border {{page.image[3]}} {{page.image_alt[0]}} %}

This could be one of the [three-pushes patterns](/glossary/bbands/) but I'll leave the full analysis to you.

That's right -

**It Is Still Just a Divergence**

OBV divergence is still a [divergence](/glossary/#div). Divergences are good for a quick glance to see where the market is at. They are not precise enough to give you information like "buy now".

To get that level of precision, you will need to either use additional different indicators or you can "scale in"/"scale out" of your position.

[Scaling in or out is basically DCA](/strategy/dollar-cost-averaging/) of speculative trading.

#### Summary

The OBV oscillator script on [TradingView](http://bit.ly/at-tvd-eth) makes OBV-price divergence more prominent on shorter timeframes. If used well, it will give you the chance to get better entry or exit price.

OBV as well as OBV divergences can be traded on at cryptocurrency markets, stock markets and in general anywhere as long as the volume data is public.
