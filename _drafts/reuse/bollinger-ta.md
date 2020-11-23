
In April 2018, [John Bollinger asked on Twitter](https://twitter.com/bbands/status/981267684493963264) what  everyone's favorite technical indicators are that they've mostly come to rely on. Given that many people aspire to be like John Bollinger, in terms of trading at least, we may safely assume that the responses recorded were to a decent extent authentic.

<div>
  {% amp700 border {{page.image[1]}} {{page.image_alt[0]}} %}
</div>

The results were not very surprising - traders generally flock to the same things and are creatures of habit; unless you live under a rock you'll be well aware that when it comes to crypto trading, the same chart setups get plastered across the whole of cryptotwitter and cryptoreddit. There is nothing wrong with that, on the contrary, it is precisely the reason why basic technical analysis still very often works.

--



#### Market cap weighted cryptocurrency indexes

**CCI30** - [cci30.com](https://cci30.com/)

Created by mathematician Igor Rivin and economist Carlo Scevola, CCI30 is an index that contains the usual coins such as BTC, ETH and IOT, but currently also smaller coins like TRON, OMG and Tether. The constituents are weighed by market cap, more specifically it uses an exponentially weighted moving average of the market capitalization. The composition changes each quarter and the weights of contributions monthly. This index is currently used by thecryptosfund.com where you can invest in the basket of cryptocurrencies of CCI30 - currently it outperforms just holding bitcoin.


**Crypto20** - [crypto20.com](https://crypto20.com/en/portal/exchange/)

Crypto20 is a byproduct of a tokenized investment fund that [trades on the decentralized exchange IDEX under the ticker C20](https://idex.market/eth/c20). While you can get the price data programmatically from [the IDEX API](https://github.com/AuroraDAO/idex-api-docs) the data about the composition is only available from the [C20 homepage](https://crypto20.com/en/portal/performance/).



#### Price weighted cryptocurrency indexes

**CryptoCompare** - [cryptocompare.com](https://www.cryptocompare.com/coins/guides/how-does-our-cryptocurrecy-index-work/)

CryptoCompare has a landing page detailing a crypto index that uses the VWAP approach (Volume Weighted Average Price) taking into account the past 24 hour volumes. That would be the only price-based crypto index right now - however, the index is not listed in their API.

#### Other sources worth mentioning

**Santiment** [santiment.net](https://santiment.net/)

Santiment is a network token of a project that gathers data on all ERC20 projects and is in the business of providing unique information about crypto markets. Very unique data is publicly available at [the SANbase](https://sanbase-low.santiment.net/projects), tracking interesting things such as developer activity on Github which you won't find elsewhere. From the whitepaper, the focus seems to be on gathering crowd sentiment, network activity and also tracking large transactions.



**Large cap cryptocurrencies vs small cap cryptocurrencies**

There used to be an observation on the crypto markets that when large-cap cryptocurrencies are retracing after an advance, the end of the retrace is often preceded by big gains in small-cap altcoins. Similarly, during a bull run, traders like to close their small-cap altcoin positions first across the board, simply because the rise there is almost entirely based on hype.

In legacy finance the charts are behaving in a similar manner - [smaller companies, represented by the Russel index, weaken first](https://greenmangotrading.wordpress.com/2014/12/14/case-study-dot-com-bubble/) as their capital dries up faster.

Cryptomarketsignal gives an overview of cryptocoins with daily and weekly gains split into tables by the market cap size, including data for each market cap segment as a whole. Very nice single-glance information: [cryptomarketsignal.com/small-cap/](https://cryptomarketsignal.com/small-cap/)





## The Theory

The gist behind the technical market timing tools is to look for typical trader behavior that is likely to shape the market into a reversal: what is needed is a) a lot of independent participants doing the same thing in different parts of the market so that in consequence the market as a whole is affected, and b) small amount of participants who trade significantly more volume than the rest.

The latter approach is dubbed *whale watching* in the cryptocurrency space, but it is by no means a new thing. In cryptos we already have various tools for that - [orderbook heatmaps](/tensorcharts/), big order sound alerts, large transaction monitoring on the general network, etc. As for the technical analysis approach, the indicator that singles out bulk activity is IIIX.

Looking for the independent participants who may be small but numerous is trickier, and here we'll investigate if getting this information from the advance, decline contributions of a basket of cryptoassets, is reasonable.

This section is a quick intro into the three selected technical timing tools. Real data tests will be shown below.

### Advance - Decline contributions

The Advance/Decline Line is an indicator that you can find on the [TradingView library](http://bit.ly/at-tvd-glob) in several versions, however, because it works with a basket index it is not directly useful for cryptocurrencies. The legacy ADL is not completely useless, more on that later, but it is not the same.

The Advance/Decline Line compares advances and declines of constituents of an index over the given timeframe (normally daily). It does not take into account how big the advances or declines are, but rather only measures how many of each there were. This number is then made relative to past values of the index. The actual figures you get from the indicator will depend on your starting point, but the information you are looking for is only a divergence anyway.

What the ADL measures is the overall participation on the markets: As you probably know, eventually during long bull runs, all of the boats get lifted by the tide - *it is too late to buy shares of Amazon, but it is early enough to buy other tech companies*, *bitcoin is too expensive but look at ethereum, litecoin, ripple, tron, vechain...*. This quality relies a lot on psychology, which is why it works the same in cryptocurrencies as in legacy markets.

The critical information given by the Advance/Decline Line is the disagreement between the price development and the development of the market participation - a divergence. With ADL, though the full range of momentum divergences would not make sense, it is not a momentum indicator so looking for all kinds of technical divs will give you bogus information.

* A bullish divergence only occurs if the participation is broadening but price is not growing - in other words during accumulations.
* Topping occurs when there is narrowing participation but prices are not declining.

An event very close to the ADL topping is something we have seen in January 2018: Bitcoin started to decline but some other markets were holding up surprisingly well - for example, the ETH/USD market. In the crypto investing circles it became a legitimate question at that time: Will BTC now dump without a bad effect on the alts? Will big altcoins carry on with their extravaganza, leaving the rusty shit-tech bitcoin behind? EthTrader dubbed it *the great decoupling* but unlike the *flippening*, the decoupling was not talked about again when ETH eventually corrected to 400 USD a short while later.

From the point of view of the technical timing tools, the *decoupling* was not a likely turn of events: The market participation in cryptocurrencies was narrowing, some coins were stronger than others but ultimately it was a signal that an overall correction was likely, even inevitable.


### Intraday Intensity Index

IIIX or Intraday Intensity Index is the only indicator of the ones mentioned here that will make sense if used on a single cryptocurrency chart. It is available on TradingView in several versions, a good one is [this IIIX by KIVANÇ fr3762](https://www.tradingview.com/script/klr607Yi-INTRADAY-INTENSITY-INDEX-IIIX-by-KIVANÇ-fr3762/).

IIIX is a combination of high-low ratios over a given timeframe. The ratios are adjusted so that they supposedly single out the whales: For daily values, IIIX is calculated by subtracting the day's high and low from double the closing price, divided by the volume and multiplied by the difference between the high and the low.

John Bollinger has advised to use IIIX combined with bbands for confirmations:

* When looking for the bottom, the price should touch the lower bband and IIIX should have positive values.
* When looking for a top, the price should touch the upper bband and IIIX should have negative values.


### Breadth Thrust

Breadth Thrust is an old indicator that will undoubtedly need some testing and tweaking to be applied to cryptos. Historically it was used for generating fairly rare and very long-term entry signals ahead of the start of a bull run.

Breadth Thrust is a 10-day moving average of the `advances/(advances+declines)` ratio of an index. The information traders look for here is just a single event - the *thrust*.

In the traditional reading the thrust occurs when the ratio moves from values below 0.4 to values over 0.615 in the span of 10 days (traditionally that is two trading weeks). What that signifies is that after some period of weak participation (which is typical during a bottom range) suddenly the advance in a few select markets pick up very rapidly over short time. In the case of the bottom range, it happens when big enough investors start to rapidly accumulate.

That is good information to know, but it is worth mentioning that big investors buy spot and they don't mind being a bit too early.

### Follow the legacy markets!

Everyone is sick of the classic bubble chart that gets blasted all over the mainstream media whenever the price of bitcoin makes a move in either direction. The truth is that the tech bubble and the bitcoin pop charts are indeed similar - as they should be, because they reflect the market psychology more than anything else. Fear of missing out, greed and hype drive all markets on different scales and the effect is more pronounced for markets that are still developing and very immature.

What also started transpiring from mainstream media during 2017 though, was the tactic of looking at trading activity in bitcoin and ethereum (the cryptocurrencies that are most commonly traded by legacy folks as well) and take any bearish reversal signs there as a leading signal for development on more traditional technology markets. The idea is that because cryptocurrencies are such a high risk investment, when there is a change of sentiment and big traders start focusing on less risky strategies, they will first pull out of cryptocurrencies and then perhaps from riskier tech stocks, all the way down to the safest bets.

During bullish reversals, the risk seeking will go the other way round, which is why the legacy indicators available on TradingView are not completely useless even for traders who are solely trading crypto: even on the free plan you can have a legacy ADL under your favorite crypto chart to see the comparison. Alternatively, John Bollinger produces a weekly chart packed with much more than just the relevant information. You can find it [here near the bottom](https://www.bollingerbands.com/) - it is simply a PDF pack of charts without any comments or interpretations, but he recently made a [quick guide available from here](https://docs.wixstatic.com/ugd/58be43_8375a55d23bf4dd4949d17277814333c.pdf). You might still need to do a lot of research.
