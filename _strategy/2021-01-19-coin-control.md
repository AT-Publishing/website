---
orderby:    a
genres:     Blog
note:       'Offramping'
layout:     strategy

title:        "Strategic Profit-Taking: Coin Control for HODLers"
description:  "Did you HODL for years? Coin control will make it easier to sell"
slug:         "coin-control-selling-crypto/"

image:          [
"https://theoryforceb4ef41a12c623318794.files.wordpress.com/2021/01/roads2.jpg",
"https://theoryforceb4ef41a12c623318794.files.wordpress.com/2021/01/screenshot_2020-09-08_at_15.51.09_ele277.jpg",
"https://theoryforceb4ef41a12c623318794.files.wordpress.com/2021/01/screenshot_2020-09-08_at_17.14.56_l40exk.jpg" ]
image_alt:      ["Did you HODL for years? Coin control will make it easier to sell"]

author:         "https://www.altcointrading.net"
author_name:    "AltcoinTrading.NET"
author_twitter: "@altcointrading_"
categories:     [ trading-technique ]
tags:           [ "hodl-strategy", "crypto-investment-strategy", "coin-control", "dollar-cost-averaging", "crypto-investment-strategy", "trading-strategy", "bitfinex", "independent-reserve" ]

related:
- {"Coin Control: What is it and which wallets have it?": "/glossary/coin-control/"}
- {"Selling Crypto Non-KYC: Where to do it with minimal risk?": "/buy-crypto-no-kyc/"}
- {"Margin Lending Strategy": "/strategy/lending/"}

---

**Coin control** is a security feature of some cryptocurrency wallets. It could also be called a privacy feature, depends on how you use it.

For instance, you will need coin control to protect yourself from [dust attacks](/glossary/dust-attack/).

The same feature can help you sell your cryptocurrency stack with less trouble, though.

In this crypto strategy article we will discuss how to use coin control function in Ledger and Electrum wallets to make selling your crypto easier in the future and also what your options are if you transact a lot with your crypto holdings.

### What Coin Control does

In the [ATNET Glossary entry on coin control](/glossary/coin-control/), we define coin control as follows:

> Coin control is an advanced feature of cryptocurrency wallets that lets you choose which incoming transaction you want to spend and which to leave unspent.

### Coin Control strategy for hodlers

The legacy institutions do not care about where your coins come from, but some cryptocurrency exchanges do.

The US exchange and trading platform Coinbase was the first in this cohort, rejecting bitcoin deposits whenever the coins had passed through a known casino wallet in the past. It is not surprising considering that Coinbase was the first crypto exchange that was [court-ordered to hand over customer information to authorities in 2018](https://www.forbes.com/sites/kellyphillipserb/2018/02/28/coinbase-notifies-customers-that-it-will-turn-over-court-ordered-data/).

Kraken, another US-based platform, followed soon after. Reports of people getting their bitcoin deposits rejected started popping out on Reddit, among them people who claimed they work freelance and were just trying to sell the crypto their client sent them. Supposedly it was the client who got the coins from a gambling site.  

Remember, bitcoin is pseudonymous. Bitcoin transactions can be traced back. Most of the existing addresses are unidentified, but wallets belonging to casinos, marketplaces and trading platforms are known. They might not always be labeled and exactly determined, but they will inevitably have higher frequency of transactions going through them, more money in them, or both.

Unless you can prove that the crypto you are selling is the same you provably bought at a certain exchange on a certain date, there is no way to prove it was not you who owned the coins when they were sent into a casino or darknet wallet at any point in the past.

That is the practical issue for you as a cryptocurrency trader. The coins we get from margin trading and futures markets are not the same coins we deposited.

### Selling with KYC what you bought with KYC

As long as you are a hodler, your situation is easiest. Keep your trade and withdrawal logs from the exchange where you bought. Even better, sell at the same platform where you bought.

Ideally you should be able to make a [bitcoin signature](/howto/sign-verify-message/) with the address you used to withdraw the coins after you bought them on a KYC exchange.

You will probably be selling your coins from a different address even as long-term holder as a lot of bitcoiners changed from legacy to segwit addresses. Your access to the last address before sale is proven by the fact that you sent the coins out of it, or you might be asked to sign a message again.

In the best case scenario, there would be only personal addresses in between those two. Nothing that would look like a busy commercial hot wallet. Keep in mind that if something dodgy happened with your coins between the two points that you verified ownership of, you will have a hard time convincing the authorities it was not you who were in control of the coins at that point.

### Can you still split the coins?

If you have a lot of crypto and you want to sell good part of it in the years to come, you may still be able to use the coin control feature to single out the coins you bought on a KYC exchange and held. Even if you reused the same address many times, it is still doable.
Coins from P2P exchanges and coins that were on trading platforms like OKcoin futures will have to be considered "mixed".

Retrieve your KYC exchange logs and identify the coins that you still hold where you deposited them.

If you used different addresses for different exchanges, you're all set.

If not, use coin control in Ledger or Electrum wallets to split the wallet balance. Find the transactions that are documented in your KYC exchange logs and send *only that money* to a different address under the same wallet:

{% amp700cloud page.image[1] %}

{% amp700cloud page.image[2] %}

Don't have the keys from the old wallet? You are still good as long as you sell on the exchange where you bought and the coins were only in private-looking addresses since you bought them.

### Cannot do coin control?

One obvious option are the P2P markets like [LocalCryptos](http://bit.ly/localcryptos). You will not be able to trade large amounts there, but it could be good enough for ["dollar cost averaging" out of the market](/strategy/dollar-cost-averaging/).

Another option is making your purchase directly in cryptocurrency.

And lastly, crypto-backed lending.

#### Lending as the way out

There has been a number of P2P lending platforms, both crypto and fiat backed. The early ones mostly failed, it was difficult to make people pay back.

A second wave of crypto-backed lending came with the ICO bubble which produced a lot of dodgy lending tokens and one relatively stable lending project, Nexo.

In 2020, Bitfinex opened a new service called [Bitfinex Borrow](http://bit.ly/at-bfxborrow) which lets you borrow large-cap cryptos or several fiat currencies for collateral made up of cryptos or fiat.  

Crypto-backed loans will be one way to buy your lambo if you cannot prove the origin of your holdings.

Other than that, borrowing instead of selling can also be more convenient due to taxes.

Bitfinex offers fiat loans in USD, EUR and JPY and as it is a very liquid exchange, you would not have huge issues exchanging between them. But the same operation could get borderline impossible on a niche platform that only does loans.

This is important point to consider when you think about your risks. More in the next section.

### Other issues you may face cashing out

To illustrate what will likely happen to quite a few of us in the future, here is a [post made on Thursday, February 15, 2018](https://www.reddit.com/r/KrakenSupport/comments/7xnj05/withdrawal_rejected/) to the official KrakenSupport subreddit.

> Kraken won't let me withdraw 160,000 USD. I am a Canadian resident and I am trying to withdraw to the same bank account that I made my initial deposits. Here is proof of my verification [...] I can also upload all my trades in Kraken to show that none of the money is suspicious.

Kraken's representative answered the issue was that OP's bank rejected the transaction and in the spirit of not pissing off their banking partners, Kraken blocked all traffic between OP's Kraken account and that bank.

The rep then suggested OP withdraws in a different fiat currency, explaining that Kraken uses different intermediary banks for different fiat currencies.

OP eventually succeeded withdrawing the amount in small batches of CAD. Other posters chimed in with similar experience - splitting the withdrawal into small chunks and spreading it out among different currencies or even different exchanges is the best way to cash out.

*If you want to lower your risks of getting stuck at verifying your accounts on a bunch of exchanges when you decide to sell, verify now to get ahead*

* [Bitfinex](http://bit.ly/at-bfx-banner2020)
* [Independent Reserve](http://bit.ly/at-indyres)
* [LocalCryptos](http://bit.ly/localcryptos) (P2P)
