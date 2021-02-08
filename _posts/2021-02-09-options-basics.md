---
title:        "How to read option charts: Market sentiment analysis based on crypto derivatives"
description:  "Crypto options markets reflect the sentiment on the market and are small enough to split the whales from the retail. That makes them a useful tool for technical analysis."
image:        [
"https://theoryforceb4ef41a12c623318794.files.wordpress.com/2021/02/tube-reading.jpg",
"https://theoryforceb4ef41a12c623318794.files.wordpress.com/2021/02/deribit-options-table.png",
"https://theoryforceb4ef41a12c623318794.files.wordpress.com/2021/02/feb5-seller.png",
"https://theoryforceb4ef41a12c623318794.files.wordpress.com/2021/02/feb5.png"
]

note:         "Technical Analysis"
date:         2021-02-08 00:04:00 +0100
guide:        yes
pinned:       no
promoting:    exchanges

categories:   [ crypto-technical-analysis ]
tags:         [ crypto-charting, crypto-fundamentals, crypto-trading-strategy, deribit, bitfinex ]
permalink:    options-basics/


layout:       at-trading
cloud:        true
author:         https://www.altcointrading.net
author_name:    altcointrading
author_twitter: "altcointrading_"

related:
- {"Deribit 10% fee discount (bit.ly/deribit)":"/referral-code-deribit/"}
- {"How to Compare the Fundamental Value of Cryptocurrencies": "/value/"}
- {"List of Crypto Trading Tools (Free and Freemium)": "/tools/"}
- {"Crypto vs Forex Trading: How do they compare?": "/crypto-trading-vs-forex-trading-review/"}

---

Options are underused on the crypto markets, at least for now.

Option markets have been getting more attention recently, as a result of the GME action. The GME pump was actually the (option-based) [gamma squeeze](https://www.bloomberg.com/news/articles/2021-02-04/reddit-s-power-to-push-stocks-down-is-the-next-worry-for-traders), not a regular spot market short squeeze.

### Using options for market analysis

There are interesting, non-speculative uses for options in the crypto space.

* You can use options instead of a stop-loss order for instance. Not a bad idea if you trade with leverage on exchanges that [crash under heavy load, like Kraken](https://twitter.com/altcointrading_/status/1357005993096413185) or Coinbase or Binance.
* Options can be used for hedging and to manage your risks. When used well, options limit the amount of money put to risk better than any futures or spot position.

However, this is a blog about [technical analysis](/technical-analysis/) for the crypto markets. We'll keep it focused around the use of options for analysis.

This article will explain how to use the option markets to look at **market sentiment** and **whale activity**. It is written for people who never traded options and perhaps don't even want to. The point is really just to understand what goes on in the option charts.

We won't go into "the greeks" and other technical stuff, but there is a list of resources at the bottom.

### Options basics

Options are a derivative, a financial instrument based on an underlying asset. Crypto options are based on cryptoassets - typically bitcoin, less often ethereum and other altcoins.

An option contract gives its owner the *option* to make a trade with the underlying asset for a price agreed in advance (the **strike price**). The date when the trade is meant to happen is also agreed in advance (the **expiration date**).  

##### Calls and Puts explained

* Buying a call option means getting the option to buy the asset for strike price at expiration date. The call option is making money if the spot price is above the strike price, because you're getting the asset cheaper than it currently trades.
* Buying a put option means getting the option to sell the asset for strike price at expiration date. The put option is making money if the spot price is below the strike price, because you're selling the asset dearer than it currently trades.

On crypto markets, that "optional" final trade happens *always* and traders get paid out in crypto. For traders who use options to speculate, biggest share of their profit or loss will come from the difference between the strike price and the spot price of the asset when the final trade executes.

There are other ways to yield profit or information from options, though.

##### Premium

Buying an option costs. There are other fees as well, but for the purposes of analysis you only need to know that there is a one-off fee for buying an option contract, and that this fee goes to the seller of the contract.

The price of the contract (the **premium**) changes based on supply/demand logic, just like any other market would. That is where market sentiment is reflected.

This was the bare minimum you need to know if you just want to understand what is happening on the options markets.

### Basic options chart cheatsheet

{% amp700cloud page.image[1] %}

*Taken from [Deribit options exchange](http://bit.ly/deribit).*

### How to read options charts

##### Skew

The way option's premium changes based on the option's strike price is called **skew**.

If the price for buying an options contract was the same for every strike price, that would be called flat skew. Flat skew is unlikely to happen. There is supply and demand in play, and supply and demand are skewed by the prevailing bias.  

Skew tells you whether the market, in total, puts more money into the view that the underlying asset is underpriced, or into the view that it is overpriced.

Arguably following the actual money is a better information than getting your sentiment from social media. As we all know, often the smaller fishes make sure they are heard the most.

##### Skew on legacy vs crypto markets

**On stock markets**, call options are cheap and put options are expensive. There is a large demand for put options because stock holders use them to hedge against falling price of the stock they hold.

The demand for call options is not matching it, which results in the skew.

**On crypto markets**, traders in general have some expectations to the upside. There is some hedging activity but all in all call options are relatively expensive due to the high demand.

Even "out of the money" calls are more expensive in crypto than they would be on legacy markets. (Out of money call is a contract to buy the asset at a price that is even higher than the current spot price.)

If the skew changes, it shows an important sentiment shift on the market. The skew is a good sentiment indicator - it is backed by actual money and it's very difficult to paint it.

### Whale watching on option markets

Crypto options are a market small enough for Deribit Insights still highlighting individual whale positions on Twitter. You can follow significant trades on any market, sure. But only options make it possible to speculate on very specific targets.

[Here](https://twitter.com/DeribitInsights/status/1355494231754858500) is one large bitcoin options trader letting himself be heard that he expects BTCUSD to range for the next 5 days: *One 'Fund' logically decided the range was set for the next week, selling 5th Feb 28k Put 40+42k Call Strangles (Selling both) x800*

If you typed those numbers into the [position builder spreadsheet](https://coinpub.org/spreadsheets/pnl-calculators/) linked in resources, you'd get the following chart.

{% amp700cloud page.image[2] %}

The chart shows that the position of that 'found' would earn money as long as BTCUSD would be between ~35k and ~48k on 5th February. The maximum profit would have been for spot price around 40k.

The position was large enough to move the options market, that's why it was highlighted in the tweet. Needless to say, it ended up making money.

{% amp700cloud page.image[3] %}

You will not get this level of accuracy from sentiment analysis of social media posts. And I'm not even taking into account that your average crypto-redditor hardly has any money in crypto.

##### Fair warning

This is just another method for [technical analysis, based on what other traders anticipate](/glossary/pattern-trading/). There is no guarantee any of that activity is in touch with reality at all.

If you made it this far though, chances are it will be easy enough for you to learn to read the option markets and use that information as a piece in the puzzle.

Not many people will give it the time it needs, which is always a good thing for a trader.

What follows now is a list of typical participants on the crypto option markets to give you an idea of what you'll be looking at.

### Who are the crypto option markets participants?

The following list sums up the most typical entities on crypto options market, including the positions they like to trade.

> Directional funds, or whales

Directional funds are large crypto holders who open simple positions to express their views on where the spot price will go. These "funds" trade options for speculative profits.

Typical positions expressing the "fund's" views:
* buying calls (bullish)
* selling puts (bullish)
* buying asset on spot and buying puts as a hedge (bullish)
* shorting futures and buying calls as a stop loss (bearish)
* multi-leg option constructs that limit risks (uncertainty)

> Yield enhancement traders

Yield enhancing traders in crypto options markets are larger spot crypto holders who use a lot of hedged and arbitrage strategies. They are trading to generate yield from their spot holdings but without explicitly speculating on the direction of the future price movements.

Typical yield enhancing positions:
* cash & carry arbitrage and other strategies that collect the premium regardless of how the spot price moves
* strangles and other option constructs that make money when the spot price leaves a trading range to either direction
* covered calls, which is a low risk strategy of earning income from an asset you already own by selling its call options

> Bitcoin Miners

Miners are a category of option markets participants specific to bitcoin.

Their activity can be focused on yield generation or hedging:
* yield collection on the bitcoin they hold and pay the bills of their mining operation
* hedging through buying put options as a protection against bitcoin price drop

> Volatility funds

Volatility traders are among the more technical options traders. They trade speculating on the volatility of the spot market, not its direction.

> Market makers

Market makers provide liquidity. As in other markets, they will get in at extreme prices and out with a small profit, making this activity a numbers game.

An oversimplified example:
1. market maker buys option contracts when they are extremely underpriced just after a whale sold a lot of them
2. then the market maker will offer those contracts for sale a little less underpriced, collecting the difference

> Retail

Last but not least, retail is the diverse and splintered group of small traders.

Even though retail traders are usually not coordinated, they will often trade in agreement based on influential news or common sentiment. Technical analysis itself can be a [tool generating crowd agreement](/strategy/fibs/).

When the retail is in agreement, market sentiment is most clearly visible but it is also the good time to start looking for large traders who trade in the opposite direction.


### Resources

##### For the technical basics of option markets:

Brief but pretty complete intro to technicals of the option markets is hanging on the Twitter profile of Tony Stewart `@pelioncap` who is a pro trader with long experience on legacy and crypto option markets. The PDF link below goes to a document compiled from that Twitter thread (which has nearly 100 chained tweets!)

<p><a class="btn" href="/uploads/pdf/pelioncap-options-intro.pdf">Tony Stewart's options intro in PDF</a></p>

##### For the market analysis:

* [Deribit Options flow](https://insights.deribit.com/option-flows/) is a weekly-ish blog series at [Deribit](http://bitly.com/deribit/) that explores exactly the sentiments that can be read out of the changes in options pricing on the BTC options markets.
* [Deribit Insights on Twitter](https://twitter.com/DeribitInsights/status/1356544427603468294) get tweet threads also focusing on sentiments on the options market. They even highlight individual positions, if they are big enough.
* [Options position builder](https://coinpub.org/spreadsheets/pnl-calculators/) is a Google spreadsheet that you will need to read the above two links, unless you are a seasoned options trader. The position builder will chart and visualize the positions reported in the option flow and Deribit insights above.
