---
orderby: a
published: true
note: 'Real Data'

layout: strategy
title: "On Lending"
description: "How to decide whether the swap rate is enough to cover your risk and why it is a stupid idea to lend your coins for peanuts."

categories: ['lending', 'bitcoin', 'altcoins', 'p2p']
tags: ['bitfinex', 'poloniex', 'bitmex']

slug: cryptocurrency-lending/

image: ["/editorial/peanuts.jpg", "/strat/rates1.png", "/strat/rates2.png"]
image_alt: ["Why you shouldn't lend your cryptocurrency for peanuts"]

date: 2017-11-11 10:36:00 +0700
update: 2017-11-11 11:39:00 +0700

author: "https://reddit.com/u/KarlVonBahnhof"
author_name: "KarlVonBahnhof"
author_twitter: "@_KarlVonBahnhof"

---

A lot has been written about margin funding — ranging from “hey free moneyh” to country-specific tax problems.

Some crypto traders like to lend their coins when they aren’t trading them (and also when they want to make themselves stop trading), some (a minority, I'm afraid) prefer to withdraw their coins to a wallet where they own the private keys unless the lending rates go to really mental heights.

How is this important for your cryptocurrency trading strategy? Too many cryptocurrency traders don't really think they need a strategy for lending because in lending they *cannot get rekt, so what*. However, by being careless like this they might actually be causing themselves harm even when we are not considering the possibility of their exchange getting hacked at all. Keep reading if this sounds like a new and surprising information to you.

## Estimating the risk of lending on an crypto exchange

How do you go about having a strategy for lending you crypto at all then? Well, in the simplest way you should decide what is the **lowest acceptable rate** that you are willing to accept to lend your coins.

The first thing one considers is that the exchange might get hacked, bankrupt, exit scam or otherwise just go belly up. This is the thing that everyone keeps talking about, it "never" happens until it happens and then it's just talking again for a year.

**There are far likelier things to consider though:**

There can be a bug on the exchange that is specific to your account -- you know that happens and the [customer support won't answer for weeks](https://www.altcointrading.net/customer-support-zen).

Then there is the opportunity cost. If your OK-rate is 0.05% daily and you lend your money for 2 days, you won't be able to monetize a rate jump to 0.20% a day if the highs last less than 2 days (which they typically do). So there is the cost of opportunity even if you have a separate stash for lending so that you don't consider locked up loaned out money a loss when a cryptocurrency you could be trading moves abruptly.

There can also be a fork with the exchange issuing a statement they [won't grant the new chain to lenders](https://www.reddit.com/r/BitcoinMarkets/comments/6qn130/poloniex_is_handling_it_all_wrong_and_backwords/) when you have your coins locked up already, or [changing the conditions after the fact like Bitfinex did with the Bitcoin Cash fork](https://www.bitfinex.com/posts/214/review).

> It is not reasonable to go into exact figures when you don't have the data to back up a sensible calculation.

But the problem is we simply don’t know how likely which event is, and that is not even considering all the things we are not aware of that influence the markets too. There is a lot of FUD around Bitfinex and Tethers, Poloniex has caused a lot of pain to [margin lenders](https://www.reddit.com/r/Bitcoin/comments/5ow8gw/warning_do_not_lend_on_poloniex/) and [borrowers](https://www.reddit.com/r/BitcoinMarkets/comments/6qrxoq/poloniex_bitcoin_loans_not_ending/) alike, but none of this is a reason to be complacent. The history we have as a cryptocurrency community is short, the time over which margin lending has been available has been even shorter. Cryptocurrency markets are for the time being still isolated from legacy markets, so there is no correlation with those either.

Not only we don’t know what’s likely to happen, I doubt there is enough data to make even a poor [model of a future outlook](https://www.quora.com/What-is-the-bitcoin-price-prediction-for-2019). There is simply too much of unknown unknowns to go into exact numbers.

**The one thing you can do is to set the bar high enough. Have a padding that would justify the risk of damage and optimize the percentage of your stash that you are lending at a certain interest rate level.**

#### Calculating yearly return from daily interest rates

Currently you can lend money without trading on [Bitfinex](https://www.bitfinex.com/?refcode=5egV78YtlC) and [Poloniex](https://poloniex.com). Both these exchanges are inherently shady, neither requires verification.

With [BitMEX](https://www.bitmex.com/register/iYQB44) perpetual swap you either pay interest or earn one but you must have an open position. It is possible to have a position solely for the purpose of earning interest but it is more advanced trading wizardry.

Exchanges give you daily rate which is probably a little too abstract to work with when you want to roughly consider it next to things like exchange hacks which happen maybe once a year. Let's first convert the daily interest rate to a yearly percentage return with compounding (lending out also previous lending profits) and after the fees.

If you just want to do a one-off check, you can use **a compound interest calculator** [like this one](http://www.moneychimp.com/calculator/compound_interest_calculator.htm) that gives the correct numbers for Bitfinex lending. Fees are already included in the calculation (Bitfinex takes 15% from your lending profit, more if you post hidden offers - use the [referral code 5egV78YtlC](https://www.bitfinex.com/?refcode=5egV78YtlC) to get a 10% fee discount there).


For those who like to keep spreadsheets here’s **the formula for the lending profits with compounded interest:**

```
A = P x (1 + r)^n

A	... end amount
P	... principal (starting amount)
r	... decimal rate per single period (1 day in this case)
n	... number of periods (365 in this case)
```

So for illustration the decimal rate for a typical Bitfinex USD rate of 0.05% daily will be `1.0005`.

Your profit adjusted for Bitfinex 15% lending fee:

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

**Working with daily rates**

While the rates fluctuate wildly they are not completely random. Traders get accustomed to certain levels which makes it easy for the levels to form some kind of support, as you would say in a TA speak. In 2016 people were going nuts when Bitfinex was lending USD for 0.15% a day but it is a regular occurrence these days, especially during either FOMO when everyone wants in or during a dump when everyone wants to hold on to their underwater position. Simply put, extremely high rates were **not a very rare occurrence in 2017**.

{% amp700 border {{page.image[1]}} {{page.image_alt[0]}} %}

So while it is not reasonable to expect you'll be able to get some exact interest rate every day but it is not completely off to count on the typical rate to change over a year. Even better, it is not off to only fish for juicy rates.

{% amp700 border {{page.image[2]}} {{page.image_alt[0]}} %}

*Both images above come from now defunct resource called bfxdata.com.*

Let's take a look at how the yearly profits change after a year when the daily rate changes just a little to illustrate the point.

I'll start with the USD daily rate of 0.01% which seems to be the mental boundary with all coins for many lenders, mostly without any reasons to back it up other than *it's a nice number*.


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

You see that the popular threshold of 0.01% daily gives only 3% return per year with compounding. **Six hundred dollars earned on 20k at constant risk for 365 days**.

It's not something you can get from a bank these days, true enough, but if you really feel it's enough to justify you giving away your cryptocurrencies to an institution that you have no reason to really trust to, there is something wrong with you.

**Lending size management**

Now, remember, the mistake here is to send in more money when the rates are down so that you can fill your monthly profit target.

If the rates are down there is simply **not the opportunity for lending** at the moment. It is perhaps more convenient to borrow, actually. Or maybe to stay out of the market.

With lending, you should **scale your position the same way you do when you're trading**: adding to your winners (that is, when the rates are rising) and cutting your losers (in this case, when the rates are getting too low).

If you really want to be careless about your money, please, get off Polo and Finex. Do go to Nitrogen Sports, do gamble away and really do have at least some fun while you're at it. Don't be a sucker lending for next to nothing.

## The "better than nothing" fallacy

This is something that has been cropping out on Reddit lately, particularly on subreddits related to altcoins that out of all the bigger exchanges are traded pretty much only on Bitfinex.

As you know, by 9th November 2017 Bitfinex was closing the shop for people located in the USA. Now the panic arose: [Where do I send my altcoin?! I don't want to install the wallet it's too complicated?!](https://www.reddit.com/r/Iota/comments/7bxo00/bitfinex_booting_us_customers_where_to_move_my/)

> Better than nothing is not really better than nothing in lending on Poloniex or Bitfinex.

[IOTA](https://www.altcointrading.net/security/iota/) is a fine example as the Bitfinex lending rates have been consistently really **effectively zero** yet the lending book is always full. Who is lending there then? Does the exchange provide some of it? Could it be multi-account traders who lend to themselves only to have access to margin trading interface with cost basis (which Finex does not disallow)?

How big a chunk of the lending book are people who **want to store their altcoin on an exchange** and think like, *well, it's better than nothing*?

What people are doing here is missing the forest for the trees.

## What are you actually doing when you are lending cryptocurrency for peanuts

Sometimes you provide your cryptocurrency at a very low rate and it might sit in the book for a minute. Some other people interested in lending will see it and withdraw their coin instead. Some -- many -- will engage their "oh well suck it up" mentality though and front-run you with a cheaper offer, only to get front-run by the next sucker.

Eventually, somebody in the right mind will be happy to take all the cheap coins though. And to use them. For shorting. Shorting the coin the suckers are long-term holders of but keep it on an exchange in lending.  

**By lending your crypto for peanuts you are making monster whale shorts possible because you are making them effectively free.**

If you really don’t want to withdraw a coin from an exchange -- which is a mistake but you already know that -- lay it over to your margin wallet to use as collateral but really, don’t lend it for next to nothing.

___________________________

Thanks to [u/middle0fnowhere](https://reddit.com/u/middle0fnowhere) for many ideas.

___________________________
