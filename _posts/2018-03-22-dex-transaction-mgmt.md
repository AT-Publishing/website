---
layout:      at-trading
categories: [ trading-platforms ]
tags:       [ noncustodial-trading ]
date:       2018-03-23 12:35:00 -0300

title:        "Evolution of Non-Custodial Trading: Order Execution Management"
description:  "On non-custodial order execution - what has been done, what is being done and how trade buffering and zero-knowledge API keys can make decentralized exchanges fast, cheap and usable even for bot (algo) trading."

author:           https://twitter.com/tradingfanbois
author_name:      tradingfanbois
author_twitter:   "@tradingfanbois"

genres:           Blog
permalink:        dex-trading/

image:
- "/editorial/tagged/exchanges.png"
- "/features/2018/binance-traffic.png"
image_alt:
- "On non-custodial trade execution - what has been done, what is proposed and how zero-knowldge API keys can make decentralized exchanges user-friendly. Roadmap image from Pexels."

related:
- {"Orderbook heatmap trading": "/tensorcharts/"}
- {"LeverJ: Non-custodial trading with leverage": "/leverj/"}

---

Decentralized crypto exchanges look to be booming in 2018 - only by a very superficial search on Twitter there is [more than 10 decentralized trading places found](https://twitter.com/search?f=users&q=decentralized%20exchange). For now they are mostly built on the Ethereum blockchain but NEO-based platforms and previews of EOS-based ones are starting to pop up too.

In this article we will be analyzing several newer platforms that are coming in 2018. While the concept of DEX has been around for some time, the trading experience [has its perks](https://blog.altcoin.io/decentralized-exchanges-explained-and-why-we-need-them-more-than-ever-4ef9fbb9192d). Following up on a [webinar from 16th March 2018 on by LeverJ](https://youtu.be/-jenA5UumfE) we are going to talk about the novel ways of crypto trading without being overly technical.

## Non-Custodial Trading & New Solutions

**What is a non-custodial exchange?**

Non-custodial exchange is a trading platform that does not own the private keys of your cryptocurrency assets. The most popular crypto trading platforms are custodial - Coinbase, Bitfinex, BitMEX, OKEx and others are all custodians of the users' assets. In order to make a trade on a custodial platform the user needs to deposit assets into a wallet owned and controlled by the platform.

There are pros and cons to this approach.

Custodial exchanges are easily manageable. The event of opening a trade is an information in a database, as far as the user doesn't initiate a withdrawal from the exchange, the actions taken do not depend on the asset's blockchain throughput or congestions. The trades themselves are not recorded on a blockchain either, just in the exchange's databases. As long as the backend of the [trading platform actually works](/kraken-upgrade/) and the systems are [upgraded to reflect the traffic changes on the platform](https://craft.co/binance/metrics#operations), trading on custodial exchanges can be very comfortable.

_____________________________

{% amp700 border {{page.image[1]}} {{page.image_alt[0]}} %}

*Web traffic growth on the Binance exchange in 2017. [Source](https://craft.co/binance/metrics#operations)*

_____________________________


The disadvantage is the black swan event which in the cryptocurrency space is apparently not something as rare as it should be. With money on the exchange, trader stands to lose his roll when the exchange gets hacked, becomes fraudulent or gets trapped in regulatory affairs. Custodial exchanges want traders to keep money with them though, interest-generating cryptocurrencies or P2P lending are examples of features that incentivize it. Exchange then might engage in arbitrage trading or other operations with customer funds to earn profit, although [exchanges keep refuting this argument](https://qz.com/1059179/huobi-and-okcoin-chinas-two-biggest-bitcoin-btc-exchanges-were-themselves-to-150-million-in-idle-client-funds/) and so it remains hypothetical.  

### Why are non-custodial exchanges important?

Non-custodial trading is more difficult to manage, scale and (hypothetically) to make asymmetric profit on, it is less vulnerable to both security risks and top-down regulations. As long as the trader retains the ownership of his funds, the only obvious things to regulate there are formalities - for instance a DEX might need to be officially called a trading *platform* rather than an *exchange* as the latter might suggest a legacy level of regulatory standard.

While top-down regulation might sound great to someone who is being salty over lost money in an exchange hack, ultimately the result of it is expensive AML/KYC which fails exactly the same type of person who likes to call for top-down protections. The costs of verification procedures and compliance for custodial exchanges are already overwhelming, the result is the smaller retail traders are becoming a burden; they don't pay off.

For now the disadvantages of non-custodial trading remain generally centered around usability: Is it better to have on-chain trading and depend on mempool levels? Or is it better to have off-chain book and depend on smart-contracts and matching engine optimization and scalability? How to implement fiat pairs, what [stablecoin](/dai-stablecoin/) is the best one for the job?

Those are rather superficial issues that will hopefully get cleared up with growing pressure of market competition and more attention from the trading community. As long as the trading works reasonably, a DEX is a clear winner for the trader: The trading account is only determined by an address and a private key where trader sends cryptoassets, there is no identity verification, no geographical limitations, no legal requirements.


## DEX trading schema


Very generally, the process of executing a trade on a DEX consists of four steps:

1. Money sent to an address fully controlled by the trader where trade can be initiated from.
2. Order submission: On-chain or into a contract for off-chain management.
3. Order is live, waiting to be picked up: P2P, Relayers or centralized matching engine.
4. Trade is settled, fees and funds are released and transfered to their owners.

<figure class="border">
<amp-img itemprop="image" src="/features/2018/dex-schema.png" alt="DEX trading schema" title="AltcoinTrading.NET - DEX trading schema" layout="responsive" width="690px" height="715px" >
</amp-img>
</figure>


### On-chain vs Off-chain DEX Trading

The two main ways of managing decentralized trading is either fully on-chain or with an off-chain order book where the trade orders are managed via smart contracts.

#### On-Chain: Atomic Swaps & State Channels

Currently the most hyped solution to decentralized trading on the blockchain is the way of atomic swaps. From a technical standpoint, all trader's cryptoassets are stored on the blockchain. Only the trader has the private key, only the trader owns the assets. As soon as this solution is working reliably this will be a great way to spot trade with no counterparty risks.

Atomic swaps have been around for a little while and as an experiment only. From [the altcoin.io blog](https://blog.altcoin.io/the-evolution-of-atomic-swaps-e33ad3af8818):
* On 19th September 2017, Decred completed the first on-chain atomic swap between Decred and Litecoin.
* On October 7th 2017, Altcoin.io completed the first Ethereum to Bitcoin atomic swap.
* On 16th November 2017, Lightning Labs confirmed the world’s first off-chain atomic swap over the lightning network. Important milestone, swaps over Lightning network will be faster and cheaper.

On the future atomic swap exchange Altcoin.io the use hashed-time-locked-contracts (HTLCs) is going to be implemented for the execution of the swap trading - that way neither party can take the offered funds without first offering their own. Essentially, user's funds are in his own wallet at all times but there is a smart contract to submit trade orders to the blockchain.

Altcoin.io proposes an atomic swap matching engine with orders on the blockchain.

> In the future, using our Atomic Swap order matching engine, you will be able to trade in two ways. Either by setting your own token price, or by using a fair market value as calculated using other markets’ relative price. This lets you list niche coins that can’t be traded on other exchanges.

One day this could be a great way to spot-trade between BTC and ETH or ETH-based tokens. However, at the current state of both the blockchains this would not be feasible. A critical feature for the success of atomic swap trading are *payment channels* and *state channels*, ways for different blockchains to interact one with another that are being built upon the Bitcoin's Lightning network.

That means, state channels and payment channels both depend on the Lightning network development for Bitcoin blockchain and on the Raiden network for Ethereum, which is the material point here: The problem is *when* will the atomic swap trading be production-ready. [Altcoin.io](/altcoinio/) initially set their release date to Q1 2018 which was clearly overly optimistic. In fact, [Elizabeth Stark liked a recent critics of how hyped the swaps became](http://archive.is/nR5u3). The liked tweet said that everyone who says atomic swaps will be ready in the matter of months does not know what they are talking about.

In short, trading via atomic swaps is an interesting solution that will have its place but it depends on too many independent developments - mainly the [atomic swap readiness of other cryptocurrencies](https://swapready.net/) and the production reliability of the off-chain scaling solutions.

For now, it is time to look elsewhere.

#### Hybrid Approaches: Off-Chain Matching

The off-chain order book that handles orders submitted directly from a wallet owned by the trader is a popular approach known from EtherDelta. With these classic older decentralized exchanges there is no solution implemented as matching engine; automatic smart contracts have been proposed for that but the solution turned out to be impractical - [severely dependent on an artificial constraint](https://www.0xproject.com/pdfs/0x_white_paper.pdf) called *price-adjustment model* which can easily create large fluctuations in the market.

Another hybrid solution is the 0x protocol. It uses off-chain matching but done in a decentralized way by Relayers, independent actors who gain money from matching successful trades. This approach addresses some of the issues of decentralized trading but still keeps a lot of the inconveniences, more on this in a bit.

The only ways to date that proposed concrete and reasonable solutions aiming to make non-custodial trading powerful, fast and packed with advanced features have been introducing some degree of centralization with the emphasis on keeping the control of the assets to the trader and optimizing the functionalities critical for trading in a centralized manner. One such solution is implemented as [IDEX](https://idex.market), a spot ERC20 exchange created on behalf of Aurora Labs. Another is the derivative exchange [LeverJ](/leverj/) which uses the off-chain matching type of model with some interesting technical innovations.

There is a lot of great work being done but keep in mind it's not the end of history:

* The fundamental limitation of it is the need to trust a smart contract and the token limitations - an Ethereum DEX can only trade Ethereum tokens.
* The on-the-fly limitations lie in the connection of the trade submissions, matching and order book updates - there can always be communication lags that create opportunities for exploits and mistakes.

**Why is EtherDelta trading so slow**

The slow trade execution on EtherDelta is caused by its [lack of automated matching routine](https://www.reddit.com/r/EtherDelta/comments/6t4w55/does_etherdelta_has_a_matching_algorithm_or_the/). Trades from the order book don't get matched by an engine, each order needs to be picked up be someone in order to complete, as explained [here in a guide on how to trade on EtherDelta](https://www.reddit.com/r/EtherDelta/comments/6hrtj9/how_to_trade_execute_a_trade_place_an_order/).

While that keeps EtherDelta a more decentralized ERC20 exchange it also causes the lags, pricing gaps and high costs of trading: ETH blockchain will charge the trader for that no matter whether the order will actually get filled and an order cancellation on a DEX is one more order to be recorded on the blockchain. Common practices such as adjusting or moving orders therefore become very expensive.

**The 0x solution of the liquidity problem**

0x is a protocol on top of which decentralized ETH exchanges can be built. The 0x protocol offers a solution for the order book management by introducing Relayers, off-chain actors whose job is to match orders from the two sides of the order book and who receive the trading fee. The concept of Relayers is explained in the [0x whitepaper, page 7](https://www.0xproject.com/pdfs/0x_white_paper.pdf)

Order book in 0x itself is off-chain too, only the transaction is settled on-chain which makes the trading less costly, liquidity is also more promising as anyone can become a Relayer. The 0x setup does not require to trust the Relayers as they are only transmitting signals about possible trade partners, the traders need to complete the trade themselves.

Relayers earn the trading fees for their work but are exposed to the risk of one side pulling their order in the last moment. At the protocol level 0x does not have any mechanism against the abuse by submitting a mass of bogus orders to pull them later though which could potentially diminish the incentives of working as a Relayer.

The way cancelled transactions are dealt with in 0x is less costly than on EtherDelta - 0x batches the cancel procedure which lowers the cost somewhat. However, the cancel order still needs to be recorded on the blockchain otherwise the old trade is at risk of being executed at some point in the future.

**The way of centralized matching - IDEX and LeverJ**

The only feasible solution that would enable smooth trading experience on par with custodial exchange houses is the idea of **buffering the trading activity** so that only the **finalized executed trades** get recorded on the blockchain.

[IDEX](https://idex.market) addresses the issues of EtherDelta and 0x by centralizing the non-critical components of the trading process. To optimize this experience, IDEX maintains ownership of broadcasting user authorized transactions to the Ethereum network:

* users unlock their account by uploading a JSON keystore file to sign orders with their private keys
* orders are processed and either cancelled or matched by a smart contract
* filled trades are added to a queue to be broadcast into the Ethereum network
* users can keep trading their balances before the settled trade mines, only withdrawal is impossible before then

Unfilled cancelled orders on IDEX are purged and invalidated as needed, they are not recorded on the blockchain and therefore do not cost anything.

Grossly discounting the technology needed to make non-custodial leveraged trading possible, [LeverJ](https://leverj.io) offers a similar solution to the matching problem - off-chain order book with an off-chain centralized automated matching routine.

* users link their wallets via a zero-knowledge API (more on that further down)
* orders are processed and either cancelled or matched by a centralized engine
* filled trades that passed the period of checks for abuse are added to a queue to be broadcast into the Ethereum network
* users can keep trading their balances before the settled trade mines, only withdrawal is impossible before then

LeverJ has one added security element - orders are matched off-chain and periodically synced to the blockchain but before they are there is a routine to check for abuse. If there is a sign of abuse the trade is not sent to the blockchain and the release of funds for withdrawal is blocked for investigation.

Similarly as on IDEX, on LeverJ unfilled cancelled orders are not stored to be synced to the blockchain and therefore do not cost anything.

This is how the general DEX trade execution path changes after the introduction of some degree of centralized management:

<figure class="border">
<amp-img itemprop="image" src="/features/2018/dex-buffering.png" alt="DEX trading schema" title="AltcoinTrading.NET - DEX trading schema" layout="responsive" width="749px" height="749px" >
</amp-img>
</figure>

These half-centralized solutions seem to offer a good compromise: Because the user needs to authorize the trading activities with his private key, the platform still does not get the custody of the user's assets. But thanks to the centralized back-office the matching engine can be optimized for speed. Trading also does not depend on blockchain congestion or attacks because the blockchain sync can be postponed as needed without it affecting the trading.

### User Experience

A common thing on decentralized trading platform is to trade with crypto tokens directly from the user's wallet. It is most often MetaMask but there is typically the option to have MyEtherWaller or Ledger wallet too. For instance here is a [guide from DDEX](https://medium.com/ddex/ledger-support-setting-up-your-ledger-nano-s-on-ddex-427e7b3c9e4e) that shows how a plugged-in Ledger wallet gets automatically detected through the browser app by the DEX interface. You can trade right from your hardware wallet, or from MetaMask.

With MetaMask this is easy enough for ShapeShift-style exchange, I'm sure it is a bit of a burden to reach through the pizza boxes for your Ledger device to sign a transaction each time though. For more developed trading markets where there is demand for scalping or arbitrage, either solution is an obvious limitation.

The only decentralized outfit to this day that aims for this kind of product is LeverJ and they are developing a solution based on zero-knowledge API keys. This is currently not a vaporware, a working demo exists.

#### Zero-knowledge API keys

Simplified explanation of the workflow:

1. MetaMask user signs up at LeverJ. This generates a dialog where the user signs a message with his trading ETH address. This step is key to the way zero-knowledge API keys work - they are API keys containing a trail back to the particular ETH wallet.
2. The signature is verified by LeverJ server. The original wallet address is extracted from the signature and a user account with the respective address is created.
3. API key and secret is generated for the user in his browser, user approves it and sends the key into an ETH contract on the blockchain. The contract serves as a registry of user API keys while the API secret is never sent anywhere, it remains stored in the user's browser local storage. The purpose of the API key is to authorize trades on behalf of the user, which is why it needs to be signed by the user's ETH address. The API does not have permission to access the user's funds, only to execute trades inside the platform.
4. User can trade directly from his ETH wallet, actions are signed by the API secret in his browser storage. This way of signing trades via an API also makes automated bot trading possible.

The risk here is mainly human error and bad OPSEC on behalf of the user. The order submission and matching is centralized on LeverJ with a centralized way to check for fraud or abuse. This centralized abuse check should soften the impact of security problems.

Full webinar about the concept is embedded as a YouTube video at the bottom of the page but if you care to skip ahead to only see the meat of the webinar, here are the most important timestamps:

* [intro to the problem](https://youtu.be/-jenA5UumfE?t=2m11s)
* [walkthrough with the UX mockups](https://youtu.be/-jenA5UumfE?t=8m30s)
* [demo with a dev UX](https://youtu.be/-jenA5UumfE?t=31m30s)

### Security Aspects and Impact of a Breach

Both the fully on-chain and partially off-chain trading accounts on decentralized exchanges are vulnerable to phishing attacks and impostors, as was seen for instance in the EtherDelta hack: Malicious actor hijacked the exchange's DNS and [created impostor website with a fake contract address](https://blog.drhack.net/etherdelta-hacked-millions-stolen/) where traders deposited their funds to never see them again.

This kind of attack (user by user, "skimming") is always possible, even with trading based on atomic swaps as traders always need to initiate the trade by moving the asset they want to trade, even if it is to a wallet they control themselves.

A hack of a DEX should have a much softer impact on the ecosystem though because a heist of a hot wallet or cold storage with a big chunk of the total user funds on the exchange is not possible. A heist of effectively a large amount of money is possible but hard to pull off.

A good DEX whitepaper should include a section that goes into detail of possible attack scenarios, as seen in the [LeverJ whitepaper](https://leverj.io/whitepaper.pdf) starting at page 5, "Attack Vectors". The paper explains a heist on the LeverJ protocol has two tedious parts susceptible to detection - the stolen assets first get gathered by skimming a large number of users and then they need to be released from the smart contract. For additional security the LeverJ exchange will delay every contract release so that there is enough time for the fraud detection.


_____________________________

**If you find this post useful, share it!**

<div class="container-center">
{% include dogeshare.html %}
</div>

_____________________________


## Further Reading

[beginner] **Crypto Exchanges: Custodial vs. Non-Custodial vs. Decentralized** / [Article](https://medium.com/@jacobrobertwoods/crypto-exchanges-custodial-vs-non-custodial-vs-decentralized-3d1d04cf205)

[beginner] **The Evolution of Atomic Swaps** / [Article](https://blog.altcoin.io/the-evolution-of-atomic-swaps-e33ad3af8818)

[beginner] **Altcoin.io Preview Whitepaper** / [Article](https://www.preview.altcoin.io/lite-paper.pdf)

[intermediate] **IDEX: A Real-Time and High-Throughput Ethereum Smart Contract Exchange** / [Article](https://idex.market/static/IDEX-Whitepaper-V0.7.5.pdf)

[intermediate] **An Overview of Stablecoins** / [Article](https://multicoin.capital/2018/01/17/an-overview-of-stablecoins/)

[advanced] **Zero-knowledge API Keys** / [Article](https://blog.leverj.io/zero-knowledge-api-keys-43280cc93647) / [Webinar](https://youtu.be/-jenA5UumfE)

<amp-youtube
          data-videoid="-jenA5UumfE"
          layout="responsive"
          width="700" height="360">
</amp-youtube>

<br>
