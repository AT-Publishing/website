---
layout: at-trading
published: true
guest: false

date: 2018-05-29 14:48:00 -0400

title: "The Stability of Stablecoins"
description: "Isn't it just NuBits all over again? The utility of stablecoins at the current stage of crypto might be misunderstood."

hook: "Isn't it just NuBits all over again? The utility of stablecoins at the current stage of crypto might be misunderstood."

author: https://reddit.com/u/karlvonbahnhof
author_name: KarlVonBahnhof
author_twitter: "_Karlvonbahnhof"

comments: true
identifier: 'stablecoinsmay18'

stories: true
genres: Blog
tickers: false

permalink: stability-of-stablecoins/
cz: false

image:
- "/features/stablecoins/stability-of-stablecoins.jpg"
- "/features/stablecoins/stats.png"
- "/features/stablecoins/stablecoins1.png"
- "/features/stablecoins/stablecoins2.png"

image_alt:
- "Stablecoins are hyped up right now, but how many of you 2016 New Generation OGs remember NuBits?"

categories: ["trading"]
tags: ["popular", "business-of-crypto", "stablecoin", "stablecoins", "tether", "nubits", "havven", "trueusd", "dai", "makerdao"]
chart: []

about:
 name: "stablecoins"
 sameas: ["https://hackernoon.com/the-instability-of-stablecoins-69e2c8e1729e", "https://multicoin.capital/2018/01/17/an-overview-of-stablecoins/"]

related:
- {"Dai - Stablecoin alternative to Tether": "/dai-stablecoin/"}
- {"All new cryptocurrencies that started trading in 2017": "/cryptocurrencies-launched-2017/"}
- {"Tether Emergency Notice (November 2017)": "/tether-hack/"}
---

Let's start with quick look at some data - [PDF via docdroid here](https://www.docdroid.net/LbFhNvP/stablecoinsc1.pdf), plus the [CSV source](https://www.docdroid.net/RD9TNMz/stablecoins-comparison.txt) if you care.


<div>
  {% amp700 border {{page.image[2]}} {{page.image_alt[0]}} %}
</div>


## How stable are the commonly used stablecoins?

I have pulled historical data from CoinMarketCap for the range of January 1 - May 29 2018, compared the daily closes and ran some basic Excel stats to see how well today's pegged cryptocurrencies hold around their 1 USD value.

The results show clearly that the fully backed IOUs are still the most stable pegged tokens:

<div>
  {% amp700 border {{page.image[1]}} {{page.image_alt[0]}} %}
</div>

### IOU's Tether and TrueUSD are the most stable

They keep the peg well most of the time, the price doesn't vary much and the lost value at minimum is less than 1.5%. It should be noted that TrueUSD is newer coin and only has available CMC data since March 2018.

In both Tether and TrueUSD there have been events where the price spiked in either direction before the market corrected back to the peg. **In all cases, there was a fundamental event**.

* [TrueUSD jumped up when Binance listed the token](https://news.bitcoin.com/trust-token-blames-bots-for-volatility-of-trueusd-stablecoin/) and the market was temporarily thrown off balance by the demand.
* Tethers traded below the peg value when the [Tether FUD](https://www.reddit.com/r/CryptoCurrency/comments/7vf11u/tether_fud_has_been_debunked/) was at its highest point and people were afraid the USDT tokens were not actually backed by USD.

That is the risk of holding IOUs: There will be a **bank run if bad rumors start to spread** about the company that holds the USD collateral, no matter what the truth is.

Consequently, what we see now is fighting for IOU market share via high profile partnerships and auditing as clear as possible:

* Both [the TrueUSD lauch announcement](https://blog.trusttoken.com/trueusd-a-usd-backed-stablecoin-you-can-trust-9688796cfd0d) and the recent [Circle/Poloniex new stablecoin on Centre news release](https://blog.circle.com/2018/05/15/circle-announces-usd-coin-bitmain-partnership-and-new-strategic-financing/) were emphasizing mainly the transparency and trust aspect.

It is not quite what cryptocurrencies were designed for, which matters **not for ideological reasons but for the material point** - if it happens that one day a FUD will actually prove to be the truth it might get ugly. For now though the numbers speak clearly.


<div>
  {% amp700 border {{page.image[3]}} {{page.image_alt[0]}} %}
</div>


### Dai has the third place

Dai by MakerDAO is not as stable as dollar-backed IOUs, the value lost at bottom during the past 5 months is 6.5% which is **already tradable** quite comfortably. You see from the chart the price spikes are fairly short-lived and swiftly traded back to around 1 USD.

The Dai is a collateralized stablecoin that anyone can generate by sending surplus of ETH to the contract, which creates some buffer for ETHUSD fluctuations. It has an [intrinsic mechanism](https://www.reddit.com/r/MakerDAO/comments/8782vz/pricestability_of_dai/) where people who had Dai generated this way can earn profit off helping return the peg, and also an emergency rescue mechanism if the peg starts failing hard.

What are the risks here? While there are no regulatory dangers - the backing collateral is fully crypto - it is not hard to imagine that perhaps with a good vulnerability FUD people would run away until there wouldn't be enough people to bother maintaining the peg. Another risk is [too big a dump in the crypto collateral](https://prestonbyrne.com/2018/01/11/epicaricacy/) which would amount to a similar effect: The collateral buffer gets depleted, more drastic measures will be needed and eventually holders will lose value.

What should be noted though is the coin remained reasonably stable during the first five months of 2018, when the price of the collateral (ETH) went from 1400 USD to 400 USD and back upwards. It is not apparent from the daily close values available from CoinMarketCap but when ETH slid off the ATH in mid January 2018 the Dai actually had several brief drops to as low as 0.8$ - [here a screenshot from the blog of Preston Byrne](https://prestonbyrne.files.wordpress.com/2018/01/1exhdqyv.jpg?w=535&h=374).

On the daily chart these incidents don't show at all, though - with stops in place, this could be **a great market to write a bot for** if that's your jam. The concept of Dai does not rely on this primarily but it does help that Dai is traded on mainstream places like Bitfinex/Ethfinex.

I will elaborate a bit more on **holding** the stablecoin further down in Conclusion, first let's look into the obvious loser:

### What happened to NuBits

NuBits is one of the oldest stablecoins. It has been around since 2014 and over the four years of its existence, the 1 USD peg [has been broken](https://bitcointalk.org/index.php?topic=1525453.0) [several times](https://discuss.nubits.com/t/nubits-history-what-the-heck-has-happened/5492). At the time of writing NuBits trade at 0.36 USD (May 2018), this time the [peg has been gone since March 19th 2018](https://discuss.nubits.com/t/so-whats-happened-to-the-pegging-since-19th-march/6009).

How can this happen? To understand, something should first be said about the NuBits architecture and the cryptocurrency industry in general.

The cryptospace right now is at brink of more wide-spread use cases, which means more people are coming in **with the purpose of earning return on investment**. These people are **not the same type of technological innovators** as the crypto OGs. As a result, blockchain folks are starting to knock each other off and compete only in terms of marketing. While that is not by itself a problem, it might become a problem for the users if **known vulnerabilities get replicated** this way.

*Why NuBits failed*

* NuBits are digital tokens issued on the Nu Network which also issues shares (NuShares) so as to create a community of shareholders to govern the network and maintain the peg.

* The peg is maintained through the laws of supply and demand in a centralized way - Nubits are either created or bought up by BTC reserves held on the Nu Network.

* Once the reserves get depleted, the only good way to save the peg is to raise more funds through the sale of NuShares, which only works as long as there are buyers.

This is [where the peg ultimately failed again in March 2018](https://www.reddit.com/r/NuBits/comments/862zbe/what_is_happening_does_anyone_have_an_explanation/). To put it simply, the Nu Network is **not profitable enough** to have the **reserves for times of sustained attack**, and March 2018 is not the first time it happened.

*From [a Moneyness blog post from August 2016 - "End of a stablecoin"](http://jpkoning.blogspot.com/2016/08/end-of-stablecoin.html):*


> Back in September 2014 a developer going by the pseudonym JordanLee set out on a brave attempt at pegging a cryptocurrency, NuBits, to the U.S. dollar. The $1 peg lasted for around twenty months [...]

> In late May [2016], a [single large seller](https://discuss.nubits.com/t/it-is-time-for-immediate-use-of-tier-6-liquidity-nsr-sales/3974) of NuBits emerged, offloading around 10% of the entire NuBits supply in a day or two [...] To keep the price of NuBits at $1, the NuBits team that was tasked with maintaining the peg had to use up a large quantity of its reserves. In the course of events the team decided to widen the peg to $0.95-$1.01 in order to slow the reserve bleed. However, the next round of selling broke the peg for good and the price quickly plummeted below 50 cents.

This scenario is possible in **every stablecoin that relies on sales of a share token** and has the **owner as the lender of last resort**. Other than NuBits it also makes Bitshares vulnerable, and some of the newly proposed stablecoins don't really seem to implement anything more sophisticated than the reliance on issuance, share auction and trading activity.

### Stablecoin Trends in 2018

This year the stablecoin trend is moving away from any form of backing to a system that mimics fiat currencies:

* [Seigniorage Shares - a system similar to the fiat banking](https://multicoin.capital/2018/01/17/an-overview-of-stablecoins/) proposed for crypto in 2015: Tokens are not backed by any asset or collateral. They are not IOUs nor collateralized, the stable value is maintained only by manipulating the supply and demand which is done via an algorithm.

Several of the new stablecoin project that are being funded and developed in 2018 are inspired by seigniorage. These include **Basis** (formerly Basecoin), **Fragments**, **Carbon** and **Kowala**; they were not included in the peg comparison above because none of them are live yet.

Basis, a stablecoin working with improved seigniorage shares system, even uses it as their marketing slogan - *A stable cryptocurrency with an algorithmic central bank*.

Does it sound foolish trying to pull off something central banks do while being far, far smaller and far less trusted than central banks? Shut up and take my money...

#### Seigniorage Stablecoin Projects Overview

Carbon / [homepage](https://www.carbon.money/) - [@carbon_money](https://twitter.com/carbon_money) - **[whitepaper](https://www.carbon.money/whitepaper.pdf)**

* Carbon works with the stablecoin and a Carbon Credit token. In times of sub-peg values, the system relies on selling the Credit token which burns the stablecoin. Credits can be sold at secondary market as well.
* Ultimately the system will only work given enough market participation which is even said in the whitepaper very clearly.

Kowala / [homepage](https://www.kowala.tech/) - [@KowalaTech](https://twitter.com/KowalaTech) - **[whitepaper](https://cdn2.hubspot.net/hubfs/3919777/pdf/kowala-protocol-whitepaper-v1.0.pdf?t=1527621680950)**

* Mechanism of peg are rather weak: Trading activity, Variable Block Reward Algorithm (so that it doesn't pay to create new tokens), Stability fee (transaction fee that is destroyed rather than sent to miners to reduce coin supply).
* Would you still transact tokens if you knew you will burn your money by doing that? I would wait for the next guy to bite first.

Fragments / [homepage](https://www.fragments.org/) - [@fragmentsorg](https://twitter.com/fragmentsorg) - **[whitepaper](https://www.fragments.org/protocol/)**

* Focuses on creating a spendable token on the ETH blockchain - a stablecoin that you will be able to use to pay for things in the real world.
* Mechanisms of peg however rely on trading activity and on manipulating the supply/demand via a system of USD Fragment bonds and on the owner's reserve backing.

Basis / [homepage](http://www.basis.io/) - [@basisprotocol](https://twitter.com/basisprotocol) - **[whitepaper](http://www.basis.io/basis_whitepaper_en.pdf)**

* Basis relies on manipulating the supply/demand using not only share tokens but also bond tokens: Bonds are created when the value of the stablecoin falls below the peg and are sold off undervalued as bond that promises 1 Basis stablecoin in the future once creation of new stablecoins is necessary. This bond system helps to keep the peg if the value rises above it by generating stablecoins for the bond holders. Once bonds are depleted the networks starts using the Shares token - new stablecoins are generated for holders of the Share token.
* The bond system also relies on people buying the bonds: If the trust in Basis is lost, it will fail no matter how cheap the bonds are sold. In the whitepaper from April 2018 this is commented with "a thorough robustness
analysis paper will be posted to our website in the coming days".

**The trend of spendable stablecoins**

There is one more aspect and that is how are the stablecoins meant to be used. While the Fragments project, at least on the high level, doesn't seem to have a particularly sophisticated pegging system, it is designed to be a spendable currency. To spend money on common day to day consumer goods, the coin does not need the tightest peg - that only becomes a problem once you intend to hold large amounts of the stablecoin to preserve the fiat value.

Another new stablecoin focusing on the spendability is **Havven**. Havven works on a similar idea as Dai (collateral backing on-chain), they just claim the token holders have [better incentives to maintain the peg (links to whitepaper)](https://havven.io/uploads/havven_whitepaper.pdf).

What really stands out though is they are indeed making the [backoffice part of using a stablecoin more user-friendly](https://blog.havven.io/eusd-is-live-3e58cc5c44f9).

If you've only just looked up Havven and you're scratching your head how this consistently bad a stablecoin can actually be partners with DEX giants like IDEX and Radar Relay: what you see on CoinMarketCap is their utility token.

The [launch of the stablecoin is set to June 11th, 2018](https://havven.io/faq) but with what they already released Havven is making steps towards the spendability goals: [since May, you can buy Apple products in the USA with their ETH-backed token](https://blog.havven.io/purchase-apple-products-with-eusd-in-the-estore-usa-only-58ee537772bc) that is already out.

#### Conclusion

What is more important, the perfect peg or the usability? Depends on what position you are looking from.

Future-wise, the **angle of spendability** seen at Havven and Fragments may be good news for cryptocurrency adoption. Could stablecoin systems get used for real-life purchases? Theoretically yes, fiat currencies fluctuate a great deal too, it is a long shot though.

How about **stablecoins for trading**? That is I think the only real use case for now. If you want a good, liquid fiat market on a professional trading platform but you cannot KYC because you live somewhere other than US or EU, collateralized tokens might be the only way; likewise when you want to trade fiat markets on decentralized exchanges.

From the trader's point of view, the risk of broken peg is small enough for short term positions, plus the fact that the token trades on a high volume platform with market makers does contribute to the stability of the peg.

Don't ask me who is the fish here though.

In terms of value preservation, at this stage no matter which stablecoin you choose, **there is no free lunch**: you are always exposed to banking issues (IOUs), artificial devaluation (Dai, in an extreme case) or attack resulting in loss of trust (all of them).

Similarly, if you decide to hold a non-IOU stablecoin it will need to be **a calculated and active process**: you will need to participate on the maintenance of the peg. With the current size of crypto market **a price-stable coin cannot be a risk-free way to park your fiat value** for a year or so. **I would simply not recommend using any stablecoin for passive value preservation**, no matter how pretty the team's website is and how cool the smart contract tech sounds.

All in all, if you are in cryptocurrencies uncomfortable with the volatility, best thing to do is really either to sell some to reach the level where you sleep well again, to diversify into a basket (there are now crypto index funds for that, too) or to learn how to hedge.
