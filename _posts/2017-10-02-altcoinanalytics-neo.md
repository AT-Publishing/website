---
published: true
guest: true

date: 2017-10-02 18:12:00 +0700
update: 2017-10-03 04:36:00 +0700

author: https://www.reddit.com/user/atc2017
author_name: atc2017

comments: true

stories: true
genres: Blog

layout: forestry
german: false
tickers: false

title: 'Sentiment: Altcoin Analytics Primer - NEO'
description: "Maynard Keynes said in relation to some markets that \'we devote our intelligence to anticipating what average opinion expects the average opinion to be\'."

permalink: "/altcoin-analytics-primer-neo"
image:
- "/editorial/asia-street-small.png"
- "/img/neo/neo-twitter.jpg"
- "/img/neo/neo-sentiment.jpg"

image_alt:
- "Maynard Keynes said in relation to some markets that 'we devote our intelligence to anticipating what average opinion expects the average opinion to be'."
categories:
- trading
chart: []
tags: ["altcoinanalytics", "neo", "sentiment analysis"]
identifier: 'guestaltcoinanalytics10012017'
---

> Couple days ago u/atc2017 of <a rel="nofollow" href="http://www.altcoinanalytics.com/">altcoinanalytics.com</a> showed up on subreddits for crypto traders with analyses of social media activity vs price of a cryptocurrency. I asked him for a post here because even if some of you might say social media is full of shills and BS, it does not matter for your short-term trades if it was campaign as long as it gains a following and makes a price action happen. Here's a post with a little bit of background and explanation but if you are only interested in the numbers, go ahead and subscribe at the page linked above. This particular example is about NEO (former AntShares) because that's what's been making money to a lot of people over the past months - [more about NEO here](https://hackernoon.com/is-neo-the-one-67799886b78f). He publishes reports on all sorts of altcoins and also about correlations, which is a really popular thing among coin traders. Comments for this post are open.

<a target="_blank" class="button" href="/uploads/pdf/20170928_altcoinreport_NEO.pdf"><i class="fa fa-2x fa-file-pdf-o"></i> Download report on NEO</a>

### Why it matters

Maynard Keynes said in relation to some markets that **'we devote our intelligence to anticipating what average opinion expects the average opinion to be'**. He was saying that a significant part of the traders in some markets chase the current "sure thing", the thing that is "confirmed". According to this observation, big chunk of traders go into trades that are conventionally believed to be a good idea. The fundamental reality doesn't intrude all that much as long as it's uncertain enough - hence market expectations rule for long enough to trade on them.

A lot of the price actions in altcoin markets are driven by sentiment and popularity on social media. [Looking at older data on the BTCUSD market, social media tended to have predictive power.](https://thisisgentlemen.net/forums-predict-bitcoin-price/) Among traders this is a known thing and that's why it's not fool-proof: It's easy to pay for a Twitter campaign, Reddit shills or a bunch of people who type specific search terms into Google. Therefore sentiment analysis can never be the only thing to use to make a decision. It can still be helpful to know there's something up in case the social media activity gets a following (even if it's a paid activity!).

#### Twitter analysis

The following graph gives insight into this popularity by measuring the average number of Tweets on a chosen cryptocurrency and the tweets' sentiment. The sentiment is shown as the percentage of tweets that is either extremely positive or extremely negative.

{% amp700 border {{page.image[1]}} {{page.image_alt[0]}} %}

**What are you looking at:**

* Dark blue bar - Extremely negative
* Brown bar - Extremely positive
* Yellow bar - Neutral

* Sum of bars - Total tweets for a specific date

* Grey line - Benchmark: tweets on BTC and ETH, scaled to the market cap of the chosen coin.

* Dark line - Price of coin to explore the correlation with the Twitter activity, axis on right hand side (in this case NEO)

* Twitter mentions hourly (past 5 days): This shows the average hourly Tweets on a coin for the past 5 days of several similar coins. This puts in perspective the number of Tweets (is it above or below similar coins)

* Sentiment: This gives an indication of average sentiment of Tweets. The Twitter sentiment ranges from +1 (positive) to -1 (negative). It is plotted against the benchmark (average sentiment of BTC and ETH) and against the price of the cryptocurrency.

{% amp700 border {{page.image[2]}} {{page.image_alt[0]}} %}


#### Other than Twitter: Risk Metrics

This gives a global overview of Risk Metrics with respect to the specific coin. The main points of interest here are the altcoin's volatility and correlation with Bitcoin.

**Data describing the altcoin**

* Mkt cap - Market capitalization in US dollars
* Standard devation - Standard deviation as proxy for risk including decay
* Downside deviation - [Standard deviation with sub-zero percent returns only](http://www.investopedia.com/terms/d/downside-deviation.asp)
* BTC correlation - Correlation with BTCUSD
* Max price - All-time-high

**Regression with BTC**

* BTC regr
Regression with BTC as explanatory variable. This measures how many of the coins
return can be explained by Bitcoin movement.

```
o   B0: Constant
o   S0: Standard deviation of constant
o   B1: Beta --> If Bitcoin goes up with 1, altcoin goes up with B1
o   S1: Standard error of B1. This can be used to test significance
o   R2: What percentage of the altcoin return are explained by Bitcoin's price action
```


### About the data processing

The reports retrieves historical price series to calculate Risk Metrics. For the Twitter analysis **tweets with a hashtag** on the specific coin are downloaded in bulk with a Python script using the [Tweepy](http://www.tweepy.org/) library. The textual analysis is done with the help of the [TextBlob library](https://pypi.python.org/pypi/textblob), which is used to analyze the sentiment of each individual tweet. The code is not opensourced at the moment.


_____________________

*Edited by u/KarlVonBahnhof.*

_____________________
