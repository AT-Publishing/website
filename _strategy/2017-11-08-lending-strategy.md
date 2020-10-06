---
orderby: a
published: true
note: 'Real Data'

layout: strategy
title: "Margin Lending Strategy Template (Best for Bitfinex lending)"
description: "How to decide whether the swap rate is enough to cover your risk and why it is a stupid idea to lend your coins for peanuts."

categories:   [ yield ]
tags:         [ crypto-lending, crypto-trading-strategy, market-metrics, bitfinex, bitmex, poloniex ]

slug: lending/

image: [
"https://res.cloudinary.com/atnetcloud/image/upload/v1601538278/atnet/bitfinex-app/peanuts_fxdas0.jpg",
"https://res.cloudinary.com/atnetcloud/image/upload/v1601538307/atnet/bitfinex-app/rates1_vkfvnc.jpg",
"https://res.cloudinary.com/atnetcloud/image/upload/v1601538358/atnet/bitfinex-app/rates2_igqvwt.jpg",
"https://res.cloudinary.com/atnetcloud/image/upload/b_rgb:000000,c_lpad,h_360,w_700/v1601529692/atnet/bitfinex-app/Screenshot_2020-10-01_at_8.22.01_AM_h3ree4.png"]

image_alt: ["Why you shouldn't lend your cryptocurrency for peanuts"]

date: 2017-11-11 10:36:00 +0700
update: 2017-11-11 11:39:00 +0700

author: "https://reddit.com/u/KarlVonBahnhof"
author_name: "KarlVonBahnhof"
author_twitter: "@_KarlVonBahnhof"

---

A lot has been written about margin funding — ranging from “hey free moneyh” to country-specific tax problems.

Some crypto traders like to lend their coins when they aren’t trading them (and also when they want to make themselves stop trading), some (a minority) prefer to withdraw their coins to a wallet where they own the private keys unless the lending rates go to really mental heights.

How is lending important for your overall [cryptocurrency strategy](/strategy/crypto-investment/)?

Too many cryptocurrency traders don't really think they need a **strategy for margin lending**, because in lending they *cannot get margin called*.

They don't realize that by being careless like this they are having an impact on the crypto market as a whole.

Keep reading if this sounds like a surprise to you.

## Your current crypto lending options

Margin lending is the only way to yield interest on your crypto without opening a trading position, or without [wrapping your crypto in a DeFi contract](/glossary/yield-farming/).

For the sake of completeness, I will briefly cover the other non-DeFi way to collect interest, which is by trading [perpetual swaps](/glossary/perps/). It can be the [BitMEX perps](http://bit.ly/2Muo11z) but there are equivalent products on other exchanges available now.

* Perpetual swap is a derivative product that is pegged to a spot market, such as BTCUSD.
* Interest rates, or funding rates, in perpetual swaps serve as a *mechanism to regulate the peg*.
* As traders open directional positions to speculate on the price of the cryptocurrency, they create a bias on the market - such as a *bullish bias*.
* The bias will make the perps market deviate from its spot market.
* A deviation from the peg will trigger a change in the funding rates. At some point it will be convenient to enter a position against the market's trend, because your loss from that will be smaller than your profit from the funding rate.
* As traders flock in to collect the interest rate profit, the market returns back to the peg.

This strategy post is about the **classic crypto margin lending**, where you lend money to other crypto traders on the same platform without opening a trading position. You can do this on some of the [crypto trading platforms](/altcoin-exchanges/) that offer margin trading.

[Bitfinex](http://bit.ly/bfx2020-bl) launched a new lending interface in autumn 2020 (Lending PRO). It's safe to say Bitfinex offers the best margin lending product on the crypto trading scene right now.

Other than that, you can margin lend on [Poloniex](https://poloniex.com). Both these exchanges are inherently shady, neither requires KYC or any kind of ID verification to let you access lending.

<a href="http://bit.ly/bfx2020-bl" class="btn">Sign up at Bitfinex</a>


## Estimating the risk of margin lending

To decide whether it is *rational* for you to provide money through margin funding on a crypto trading platform, you need to find your **lowest acceptable rate**. That is the lowest interest rate you are willing to accept to lend your cryptoasset.

The metric for deciding whether a rate is acceptable will be a comparison of **how much you are risking to lose** vs **how much you are expecting to gain**.

In margin lending on a custodial platform, your biggest risk is that the exchange will get hacked, bankrupt, exit scam or just go tits up in any other way. Yeah, the scenario that "never" happens, until it actually happens.

There are other things to consider:

* Not the exchange but your account can get hacked.
* Opportunity cost. Are you deciding between lending vs trading? Are you keeping USD for lending when you would make more in terms of dollars by buying a crypto?
* There can be a fork with the exchange issuing a statement they [won't grant the new chain to lenders](https://www.reddit.com/r/BitcoinMarkets/comments/6qn130/poloniex_is_handling_it_all_wrong_and_backwords/).
* Margin call cascade that will make borrowers default. This is a real possibility on exchanges with high leverage, such as [BitMEX](http://bit.ly/2Muo11z), although these platforms typically have an *insurance fund* for these occasions.   


> It is not reasonable to go into exact figures when you don't have the data to back up a sensible calculation.

We don’t know how likely which event is and we [cannot reasonably project similar data from legacy markets](/strategy/crypto-market-psychology/) on crypto.

Crypto markets changing quickly and trading platforms are adopting these changes early to stay on top of the game - think DeFi. Because of this constant development there is not yet enough past data to make a reasonable risk model. It is too many unknown unknowns to go into exact numbers.

One rational thing you can do in an unstable environment like this is **to set the bar high enough** to have some cushion.

1. **Rate with a cushion**: Find a minimum acceptable rate with enough of a leeway to justify your risk of loss.
2. **Treat it like a trade**: Tweak how much of your stash you are lending based on how high the interest rate level is.


## Why are daily interest rates useless

> To get ballpark numbers, work with the assumption that any exchange gets hacked *once a year*.

Exchanges give you daily rate, which is not the format we are used to when we deal with fiat interest rates. Other than that, it is inconvenient to think in terms of daily rates if you want to factor in your risk.

If you provide money for margin lending on a custodial exchange, you are **mainly risking an exchange hack**. As explained above, there are other risks, some of which may be unknown unknowns.

The unknown unknowns are the reason why it is less important to think in terms exact numbers, and more reasonable to think in the directon of **a cushion of profit that will make you comfortable enough with the idea of losing it all**.

To get a **mental image**, you can work with the assumption that your exchange or your account on it gets hacked *once a year*, and you lose all of your lending deposit.

Now that we have a way to picture what we're *realistically risking* in a yearly timeframe, let's also convert our *returns* to yearly format.

#### How to calculate yearly interest rate from daily interest rates on Bitfinex

We need to convert the daily interest rate provided by the exchange to a yearly **return with compounding**, that is including the profits from lending out your lending profits as well, and **after the fees** your exchange will charge you for providing funding.

[Bitfinex](http://bit.ly/bfx2020-bl) will give your yearly return rate directly in the overview of lending rates - the APR column:

{% amp700cloud border {{page.image[3]}} %}

Nevertheless, you will still need to look at some spreadsheet math I will do for you in the next section to decide on your minimum acceptable lending rate.  

Here’s the basic formula to calculate **lending profits with compound interest, before fees**:

```
A = P x (1 + r)^n

A	... end amount
P	... principal (starting amount)
r	... decimal rate per single period (1 day in this case)
n	... number of periods (365 in this case)
```

Bitfinex takes at least 15% cut from your lending profit. The fee is higher if you post hidden lending offers.

* *Sign up with shill code `5egV78YtlC` to get a 6% fee discount on Bitfinex lending market.*

Here's the formula for profit adjusted for Bitfinex 15% lending fee:

```
B = (A - P) x (1 - fee)

B ... cash profit after fees
fee ... 0.15

```

In percents, that would be


```
C = 100 x B / P

C ... yearly percent return on principal

```

## Working with lending rates fluctuations

Daily margin lending rates fluctuate wildly, but they are not completely random.

Traders get used to seeing certain interest rate levels as *normal*. These levels become something like a support level, as you would say in a [technical analysis](/technical-analysis/) speak. Lenders are reluctant to keep their money locked in lending when the rates are lower than that.

For years, this popular minimum on Bitfinex has been around 0.01% daily.

On the contrary, the upside is much less limited. Super high rates on USD are quite normal during FOMO bull runs when everyone wants to go long. The neighborhood of 0.15% a day for USD on Bitfinex was not a rare thing to see during the 2017 crypto bull market.

{% amp700 border {{page.image[1]}} {{page.image_alt[0]}} %}

So while it is not reasonable to expect you'll be able to get the same rate every day every month, it is also not off to expect juicy rates.

**It is a reasonable strategy to refrain from lending if the rates keep low, or to lend smaller amount, and to keep money in reserve for when the markets start moving abruptly. The upside potential there is big enough to justify that.**

The last thing to show is the way to establish your minimum acceptable rate, and why the popular minimum rate is not good high enough.  

{% amp700 border {{page.image[2]}} {{page.image_alt[0]}} %}

### Your minimum acceptable daily rate

Now, finally for spreadheet magic.

Let's take a look at how your **yearly returns** change if your **average daily rate** changes just a little.

I'll start with the USD daily rate of 0.01%, which is the popular "floor" rate on Bitfinex. As with anything popular, there's probably no other reason to it than that *it's a nice number*.


| P | $20,000   | $20,000   | $20,000   | $20,000   | $20,000   |
|---|---------|---------|---------|---------|---------|
| r | 1.0001  | 1.00015 | 1.0003  | 1.001   | 1.002   |
| A | $20,743 | $21,125 | $22,314 | $28,805 | $41,471 |
| B | $632    | $957    | $1,967  | $7,484  | $18,251 |
| C | 3%      | 5%      | **10%**     | **37%**     | **91%**     |


```
A ... end amount before fees
B ... cash profit after fees
C ... percent return after fees

principal $20,000
n = 365 days
daily rates: 0.01%, 0.015%, 0.03%, 0.1%, 0.2%
```

You see that the popular mental threshold of *0.01% daily gives only 3% return per year* with compounding. That is **six hundred dollars earned on twenty thousand dollars left exposed to constant risk for 365 days straight**.

It's much higher than any interest rate you can get from a bank these days, true enough. But if you really feel like this profit is high enough to justify giving away the custody of your crypto to a platform that you have no reason to trust, there is something wrong with you.

A more reasonable floor is 0.03% which is around 10% return per annum.

### Lending position size management

As in trading, the worst mistake here is to lend more money when the rates go down, because you want to fill your monthly profit target.

If the rates are down there is simply **not the opportunity for lending** at the moment. It is perhaps more convenient to borrow, actually. Or maybe to stay out of the market.

With lending, you should **scale your position the same way you do when you're trading**: adding to your winners (that is, when the rates are rising) and cutting your losers (in this case, when the rates are getting too low).

_If you really want to be careless about your money, please, get off Polo and Finex. Go to [Cloudbet](http://bit.ly/at-cbet), gamble away and really do have at least some fun while you're at it. Don't be a sucker lending for next to nothing._

### Lending: The "better than nothing" fallacy

This is something that has been cropping out on Reddit, particularly on subreddits related to newer altcoins.

There was an uproar on r/IOTA when Bitfinex kicked out US customers on 9th November 2017. The problem was an unbelievable one: [Where do I send my coins?! I don't want to install the wallet it's too complicated?!](https://www.reddit.com/r/Iota/comments/7bxo00/bitfinex_booting_us_customers_where_to_move_my/)

Turns out IOTA early holders would lend their holdings on Bitfinex, even though the rates were stable at literal next to nothing - 0.000001% a day level.

How big a chunk of the lending books are people who want to store their altcoin on an exchange and think, *well, it's better than nothing*?

This is a mistake. Maybe it will not end up in terrible disaster this time, but if you keep handling your crypto like this, eventually the inevitable will strike.

In crypto lending, better than nothing is NOT better than nothing. You are still exposed to risks.

#### What are you actually doing when you are lending cryptocurrency for peanuts

Some lend their cryptocurrency at a rate from the top of the book, because they want to see it get filled. There's a lot of people like that, which means someone will come front-run you with a cheaper offer, only to get front-run by the next sucker.

Eventually, somebody in the right mind will be happy to take all the cheap coins. And to use them. For shorting. Shorting the currency the suckers are long-term holders of but keep it on an exchange in lending, even though it doesn't pay off.  

In particular, **by lending your crypto for peanuts** you are making monster whale shorts positions **effectively free**. All because you refuse to handle your own [crypto wallet](/altcoin-wallet/) or are a victim of the "better than nothing" fallacy.

If you really don’t want to withdraw a cryptocurrency from an exchange -- which is a mistake but you already know that -- just don’t give it away to other traders for next to nothing.

___________________________

Thanks to [u/middle0fnowhere](https://reddit.com/u/middle0fnowhere) for feedback.

___________________________
