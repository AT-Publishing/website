---
published: true

layout: at-trading
guest: false

date: 2018-03-31 23:58:00 -0300

title: "DEX Series, Episode 2: Copy trading"
description: "Legacy houses are capitalizing big on crypto followers. Can decentralized exchanges offer better experience in managed trading or is the space too crowded?"

author: https://twitter.com/tradingfanbois
author_name: tradingfanbois
author_twitter: "@tradingfanbois"

comments: true
identifier: 'dex2march18'

stories: true
genres: Blog
tickers: false

permalink: dex-copytrading/
cz: false

image:
- "/editorial/tagged/atnet-jam.png"
- "/features/dex/etoro-btc.jpg"
image_alt:
- "Managed crypto trading is not at its best by a long shot, the space is not as crowded as it might seem at the first sight. Traffic jam image via Unsplash."

categories: ["exchanges"]
tags: [ "business-of-crypto", "aurora-dao", "leverj-io", "altcoin-io", "0x", "ddex", "idex", "ron-bernstein", "non-custodial-trading", "airswap"]
chart: []

about:
 name: "copy trading"
 sameas: ["https://en.wikipedia.org/wiki/Copy_trading"]

related:
- {"DEX Series, Episode 1: Trade execution management": "/dex-trading/"}
- {"LeverJ: Non-custodial trading with leverage": "/leverj/"}
- {"Altcoin.io, new DEX on atomic swaps": "/altcoinio/"}

series: dex
---

This is second article of the series on DEXes - decentralized cryptocurrency exchanges or trading platforms if you will. In the [first part](/dex-trading/) we were talking about the trade execution management. A quick rundown:

> The OGs of decentralized trading try to keep absolutely every part of the process decentralized and recorded on the blockchain.  

> Decentralized everything aligns well with the ideology of crypto. However, it makes manual spot trading sluggish and expensive and it also makes bot trading impossible. Order cancellation costs money, trade execution depends on the blockchain congestion, automatic order matching solutions are not reliable.

> By the end of 2017 new products emerged based on the novel idea of an exchange that only decentralizes the critical elements of the business. Turns out it is possible to have non-custodial trading platforms where the process of submitting, canceling and executing orders can be managed and optimized in a centralized fashion by buffering this activity: Trading is kept at the platform, only orders that are fully filled and checked for fraud are sent to the blockchain.

The buffering of the whole trading activity opens a whole space of new possibilities. Order cancellation costs nothing because it is not broadcast to the blockchain, that is good for bots. Trading is also as fast as the exchange servers which crypto traders might have a slight PTSD about but it is still something that can be easily handled and optimized, unlike the congestion of a public blockchain.

On 28 March 2018 an [article by Hannah Murphy](https://www.ft.com/content/ea22a772-3276-11e8-b5bf-23cb17fd1498) was published on the FT reporting how legacy platforms are raking up profits on cryptocurrency investors via copy trading strategies.

Traditionally, *copy trading* is a system in which a portion of the trader's funds is relocated to the portfolio of the copied trader. Every action the copied trader initiates is then applied to his own portfolio as well as to the funds of the traders who copy him - opening a trade, setting a stop loss, closing a trade. A spin-off strategy in which traders keep the responsibility is called *mirror trading*, a service similar to an algorithmic strategy marketplace - traders buy someone else's strategy based on their risk preferences, once the strategy is activated the trades based on its signals are automatically applied to the trader's account.

The eToro's copy trading launch in 2010 meant a breakthrough in their business which was founded in 2006 - initially it was a platform targeting retail forex traders. Over time traditional indexes and stock CFDs were added, eToro also offers Bitcoin CFD since January 2014. CFD stands for *contract-for-difference*, a way to speculate on future price of an asset without buying the physical asset itself. The vaguely but very strongly marketed eToro crypto launch in 2017 was their switch from CFD to real asset - [since 3 September 2017, eToro users who buy cryptocurrency](https://www.etoro.com/blog/from-the-markets/building-a-new-crypto-environment-block-by-block/) own the actual cryptocurrency rather than the CFD.

The aggressive marketing payed off as the company got in total more than $1bn in customer deposits in 2017. In the fourth quarter alone eToro received more than 1m registration requests. As in crypto markets in general, this was such an explosive growth that no company was quite prepared to handle it. For eToro the current decline in overall activity is a welcome breathing space, [FT reports](https://www.ft.com/content/ea22a772-3276-11e8-b5bf-23cb17fd1498). On the other hand, German Ayondo which is another copy trading business capitalized on their crypto offers while the opportunity lasted and now they are leaning more towards legacy products. The executives are betting on cryptocurrencies dying for good this time.

Judging from a brief overview one could conclude the legacy folks used up the opportunity to give the retail not-really-trader the means to very simply speculate or invest in cryptocurrencies. Dig in a bit into the [FAQ section on eToro](https://www.etoro.com/en/help/#c1) and see the hidden gems though:

* Since September 2017, eToro users who long a cryptocurrency own the actual cryptocurrency and not the CFD but the option to withdraw the cryptocurrency out of the platform into user's own wallet is not available. It is planned to launch at some point in the future but for now the main advantage of the real cryptocurrency trading via eToro is that your long position does not cost an overnight fee (CFD positions incur overnight maintenance fee).
* There is a peculiar way of selling cryptocurrency - the SELL order which initiates a short position opens always a CFD, it does not sell the actual cryptocurrency even if the user has it. Shorting therefore always incurs overnight fee. However, the user can "convert" their crypto into fiat to take profit and withdraw money out of eToro.
* Leverage is not planned to be implemented for cryptoassets.
* Last but not least, since 15 December 2017 the stop loss order on crypto markets at eToro has been disabled due to high volatility which made it impossible to guarantee execution.

When it comes to the famous copy trading feature, for cryptocurrencies it does not look so peachy either. From the FAQ:

> If clients copy a Popular Investor who is trading cryptocurrencies, what type of position do they open? -- When copying Popular Investors or investing in our CopyFunds strategies, all positions will remain as CFDs and not the underlying asset.

In other words, you cannot copy trade real crypto, the not-really-traders traders always pay the overnight fees. [AnythingCrypto also reports](https://www.anythingcrypto.com/guides/risks-of-trading-bitcoin-on-etoro) other perks of the cryptocurrency CFDs in an older review, complaining about the high spreads and high fiat withdrawal fees. The [knowledge base on eToro states CFDs are necessary for copy trading](https://www.etoro.com/customer-service/cfd-trading/) to keep the proportion of allocated funds the same between portfolios of different sizes. The logic behind it is valid for stocks (you cannot buy half a stock), but not for cryptocurrencies (you can buy half ETH). It simply has not been implemented and frankly, as long as there are people willing to pay for CFDs to copy trade, it does not make sense for the company to offer anything else.

{% amp700 border {{page.image[1]}} {{page.image_alt[0]}} %}

In spite of these obvious inconveniences for the user, cryptocurrency boom made eToro not only hugely successful but also the leader among platforms with similar offerings: By the end of 2013, eToro had about 3 million accounts; at the end of 2017 it was 8 million opened accounts and [crypto trading activity on there is allegedly rising again as of 28 March 2018](https://www.marketwatch.com/story/crypto-adoption-will-be-boosted-by-sideways-trading-says-analyst-2018-03-28). Compared to that, RobinHood is at [4m user accounts as of February 2018](https://craft.co/robinhood/metrics#income-statement).

<amp-iframe width="700" height="700"
    sandbox="allow-scripts allow-same-origin"
    layout="responsive"
    frameborder="0"
    src="https://craft.co/embed/v1/companies/etoro/online_presence">
</amp-iframe>

We now see that there definitely is the room to offer a better managed trading service to people who do not want to trade full-time. While traditional cryptocurrency trading platforms are either [not really targeting retail at all anymore](https://www.altcointrading.net/bitfinex-banking/) or too busy [dealing with their naughty shareholders](https://cryptoslate.com/coinbase-warn-vcs-back-off-booking-1-billion-revenue/), let's explore if the current generation of decentralized trading platforms has the means to provide better trading services.

### Hybrid model will be necessary for managed products

In order to successfully sell either a trade execution strategy or copy trading of a popular trader, the trade execution needs to be reproducible in a guaranteed way. Without some guarantee of control there is no fair product to offer. However, no such control is possible in a fully decentralized exchange that operates completely on-chain.

In a fully on-chain trading, orders are posted on the blockchain before they are picked up by a counterparty. Likewise, canceled orders are not truly canceled until the cancellation order is mined. That leaves the [final responsibility for the trade execution to a miner](https://github.com/ConsenSys/0x-review/blob/49b37d9d3eb3ea57a77863044c0cf0418cab1be8/report/3_general_findings.md#front-running). As long as the posted unfilled orders are public on the blockchain, miners can very easily frontrun them or decide to sabotage stop loss orders.

The currently accepted solution to the miner frontrunning problem is to have an off-chain orderbook and order matching system that **does not broadcast trade intent to the blockchain**. This means the insides of the order submission and cancellation logic are kept somewhere private though, which introduces centralization. However, by centralizing the order matching and keeping it private within the trading platform the exchange gains better control over their product.

With batched filled orders submitted by the exchange and waiting to be mined the centralized solution provided to preserve their right ordering can be simply to monitor the miner fees at the given moment and to slightly overpay the transactions that need to be mined first.

As explained in our [intro to decentralized trading](https://www.altcointrading.net/dex-trading/), any form of centralized order matching and trade execution has nothing to do with centralizing the user fund management. The 2018 generation of decentralized trading platforms implement the *hybrid model* - they remain non-custodial but tweak the trade execution paths towards some degree of centralization.


#### Platform fitness (ABC order)

**0x implementations**

Several new exchanges have been built on the 0x protocol - we will talk about [Radar Relay](https://radarrelay.com) and [Paradex](https://paradex.io/) here.

Paradex implements the [Matching model](https://medium.com/paradex/choosing-paradexs-relayer-model-7190414c2aca) for their relayers. That streamlines the trading experience by centralizing some power in the relayers: Paradex is responsible for the matching and their relayers only accept orders with a counterparty from the same exchange. This way party A trades with the relayer who then immediately trades back out of that position with party B. The way trading is limited to Paradex only makes it impossible for the platform to participate in the shared order book system that is a popular feature of the 0x protocol where trading can occur among multiple exchanges. The crypto community is obsessed with this shared liquidity thing for no apparent reason and symptomatically, the founders of Paradex are not original cryptogeeks: The CEO is [Ron Bernstein of Intrade](https://www.augmentpartners.com/team).

Radar Relay on the other hand focuses mainly on the [idea of shared liquidity](https://relayer.network/) which pushes the decentralization further by not having to send money into a smart contract created by someone. Radar Relay uses the [Open Orderbook Model](https://www.0xproject.com/wiki#Open-Orderbook) where the relayer accepts orders with unspecified takers and then let's the orders publicly sit there waiting to be picked up by anyone.

Both exchanges advertise their opennes towards bigger traders or institutions and provide API, but the default way of how 0x in the open orderbook mode handles canceled orders still incurs transaction costs as the cancellation needs to be recorded on the blockchain. Paradex is therefore the only candidate for any advanced trading functionalities because order submission and cancellation does not cost anything.

**AirSwap.io**

Airswap is a DEX that implements the Swap protocol, an automated but still peer-to-peer way of trading on the Ethereum blockchain. The matching solution relies on the [Indexer protocol](https://swap.tech/whitepaper/#indexer-protocol) which is an off-chain service that aggregates submitted orders and matches prospective peers. AirSwap aims to create rather a marketplace for token creators than a trading platform though.

[Swap Whitepaper (Read Online)](https://swap.tech/whitepaper/)

**DDEX**

DDEX is a hybrid exchange built as an implementation of the Hydro middleware. Hydro aims to avoid the cancellation cost and frontrunning problems of 0x-like open order books while maintaining the idea of shared liquidity. On Hydro the exchange system is closed, but closed among an alliance of exchanges. However, the main focus of Hydro as given in whitepaper is rather ideological - simply to bootstrap the use of shared liquidity.

[Hydro Whitepaper (PDF)](https://thehydrofoundation.com/Hydro-Whitepaper-v0116-en.pdf)

**IDEX**

IDEX is an exchange network built into Aurora DAO client. On IDEX, trading engine is centralized - it hosts the off-chain balances and orderbook, matches trades, and manages the queue of pending transactions. The settlement execution and asset storage is managed by a smart contract which is decentralized.

With internally queued transactions and internal centralized matching a mass of advanced functionalities becomes possible, however as per the whitepaper Aurora Labs are looking to provide more of the classic products such as margin trading and decentralized p2p lending. Aurora network also has the neat feature of a native [stablecoin called the boreals](https://auroradao.com/platform/boreal/) which probably defines the market segment for IDEX as the fiat-like pair trading.

[Aurora Labs Whitepaper (PDF)](https://auroradao.com/assets/Aurora-Labs-Whitepaper-V0.9.5.pdf)

**LeverJ**

LeverJ is a non-custodial trading platform primarily focused on leveraged derivatives and products usable by institutions - that's why the API-friendly developments such as [zero knowledge API keys](https://www.altcointrading.net/dex-trading/#zero-knowledge-api-keys). Nonetheless, this API-readiness also makes them a potentially good place for people looking for the black box way of trading - at least as long as they will keep the UI easy to navigate. The main solution the platform advertises is to make it possible to hedge ETH against fiat using only ETH, but there will be other crypto products listed too.

They use the centralized off-chain orderbook and matching, transactions are batched before they get sent out to the blockchain and therefore cancellation of an order costs nothing. The native utility tokens used on the platform are designed to create ways to alleviate trading fees in exchange for contributing to the stability of the platform by holding its tokens.

LeverJ planned for the copy trading business already in their whitepaper. Starting with a trade replay feature to be used for studying, the roadmap also includes managed trading features and a social network idea similar to TradingView user feeds (here called *subscription*). These are supposed to start launching [closer to the end of 2018](https://leverj.io/#cp-tl), we will see how optimistic that was. Further down the road a marketplace for automated strategies is planned - that means basically mirror trading.

[LeverJ Whitepaper (PDF)](https://leverj.io/whitepaper.pdf)

### Summary

Although at the first sight it looks as if the DEX space is filling up, when you segment the individual platforms by what they claim to go for in their whitepapers, you see that as for now there is not really a lot of market competition.

Only some DEXes are targeting trading services for non-traders. There are DEXes that are simply showcases for a cool idea and there are DEXes modelling what we have now with custodial crypto exchanges, except without the custody. Obviously the cryptocurrency trading space is in its infancy and trading is only a segment of that very new space.

Needless to say, development of services like copy trading is expensive in terms of both money and time. Another problem though is that they are completely new products - you can certainly imagine how your Average eToro Joe's eyes will glaze over when you start talking about something outlandish like token staking. Therefore it might be the case that diligent optimization for customer satisfaction could make or break an otherwise technically sound product.

**Further Reading**

Articles about decentralized trading, stablecoins and similar writeups get posted to Twitter with hashtag [#BusinessOfCrypto](https://twitter.com/search?f=tweets&q=%23BusinessOfCrypto&src=typd)

* Cashing in on the crypto followers / [Article](https://www.ft.com/content/ea22a772-3276-11e8-b5bf-23cb17fd1498)
* Eliminating Front Running with Decentralized Exchanges / [Article](https://hackernoon.com/eliminating-front-running-with-decentralized-exchanges-2a5163991ffd)
* Airswap Analysis — Decentralized Exchange for Market Makers / [Article](https://medium.com/@krresearch1/airswap-analysis-decentralized-exchange-for-market-makers-98e4145afb0e)
* Radar Relay Side-by-Side: Decentralized Exchanges / [Article](https://medium.com/radarrelay/radar-relay-side-by-side-decentralized-exchanges-211e99bc7810)
* Copy Trading (Wikipedia) / [Article](https://en.wikipedia.org/wiki/Copy_trading)
* Mirror Trading (Wikipedia) / [Article](https://en.wikipedia.org/wiki/Mirror_trading)
