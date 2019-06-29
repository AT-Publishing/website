---
layout: at-trading
published: true
comments: true
stories: true
genres: Opinion
tickers: XRPBTC
author: https://reddit.com/u/KarlVonBahnhof
author_name: KarlVonBahnhof
title: Ripple vs Stellar
date: 2017-05-22 02:38 -04:00
update: 2017-12-29 21:20 +0100
description: "Ripple's end of 2017 epic bull run is closely followed by Stellar price action. How do Ripple vs Stellar compare?"
permalink: ripple-vs-stellar/
image:
- "/features/ripple-network.jpg"
- "https://www.tradingview.com/x/ctF9dUWV"
categories:
- altcoins
- altcoins
- trading
- exchanges
image_alt:
- Ripple is having an epic bull run at the end of 2017 that actually follows fibs real licely. Check for updates at altcointrading.net/fibs/daily
tags: [updates, feature, no-blockchain]


about:
 name: "stellar"
 sameas: ["https://www.stellar.org/", "https://en.wikipedia.org/wiki/Stellar_(payment_network)", "https://twitter.com/stellarlumens"]

---

Ripple is pumping. Okay. It <a class="intern" href="/fibs/daily">follows fibs nicely</a> and the market is finally not as thin as it was at the bottom so if you are an active trader, this is a blessing.

But should you buy Ripple now?

Buy Ripple only of you trust its fundamentals, as a long term investment - and this is entirely your call. There is no problem storing it - {% aff Ledger Nano S https://www.ledgerwallet.com/r/e274?path=/products/ledger-nano-s %} has a Ripple wallet.

### Ripple's Fundamentals

To some altcoin traders, Ripple is a *centralized bankster scamcoin*, a sort of "step back" in the world of crypto. To others, Ripple being [backed by banks](https://dealbook.nytimes.com/2013/11/11/the-rush-to-coin-virtual-money-with-real-value/?_php=true&_type=blogs&_r=1) is actually a good, reassuring sign.

Some things to keep in mind:

**Ripple is not a blockchain.** No blockchain also means there is no scaling problem and so in this way, Ripple as a medium for payments and settlements is better. The Ripple network works in such a way that transactions are forgotten once they are through so the ledger doesn't grow as fast as blockchains do (all of them, Ethereum too).

In Ripple, only address balances are kept - no histories. Meaning, **Ripple is only a payment protocol**.

Ripple cannot be mined. Transactions get validated via consensus mechanism where participants are responsible to choose a set of validators that will not be fraudulent: [https://ripple.com/technical-faq-ripple-consensus-ledger/](https://ripple.com/technical-faq-ripple-consensus-ledger/)


[https://youtu.be/i6mhQcpPtyk](https://youtu.be/i6mhQcpPtyk)

<amp-youtube data-videoid="i6mhQcpPtyk" layout="responsive" width="700" height="360"></amp-youtube>

&nbsp;

### Ripple's Competition: Stellar

Stellar makes it possible to send remittances cheaply across borders via its tokens, lumens. Originally, Stellar was based on the Ripple protocol (and founded by one of the Ripple founders) but after changes in the Ripple codebase Stellar forked.

Compared to Ripple being picked up mostly by banks, Stellar is a platform that gets used [IRL in non-profits](http://fortune.com/2016/12/06/fintech-stellar-blockchain-stripe-remittances/).

> On a call with Fortune, McCaleb, Stellar's cofounder and chief technology officer, expressed his desire to connect everyone in the world through the Stellar network. "We're trying to be an Internet-level protocol for payments," he said, drawing an analogy to SMTP, a standard for email transmission.
He added: "We want everybody to plug into it and for money to float seamlessly."Other companies are also competing to become the standard for blockchain-based cross-border payments. Among them are McCaleb's former firm Ripple, and Chain, a fintech startup backed by Visa.

There is no mining in Stellar. Confirmations are done by selected trusted nodes - AKA Stellar Consensus Protocol. To a non-techie it is similar to Ripple: In Bitcoin, any miner is a trusted node by default, in consensus mechanism participants choose a trusted set of validators.

The reality is more complex:

> At a low level, the consensus mechanism used by Stellar is a decentralized version of PBFT called [Stellar Consensus Protocol](https://www.stellar.org/papers/stellar-consensus-protocol.pdf), whereas [Ripple uses probabilistic voting](https://ripple.com/dev-blog/consensus-whitepaper-released/). Those are fairly different even though they both tackle solving the same problem of reaching consensus between nodes. SCP biases towards correctness at the expense of liveness; Ripple follows a model similar to Bitcoin allowing ledger forks to occur temporarily and relying on majority validation.

It is not clear from this but the Stellar network [remembers transactional history](https://www.stellar.org/developers/guides/concepts/ledger.html). "Transactions are now a series of operations that affect the state of the world. For example, a single transaction can trivially say A sends to B if B sends to C. These abstractions, coupled with the network’s distributed exchange, produce a surprisingly rich vocabulary for contracts. Bonds, escrow, collateralized debt and the Lightning Network are all possible on the network." - via [bitcoinmagazine](https://bitcoinmagazine.com/articles/stellar-s-jed-mccaleb-what-s-new-on-the-upgraded-stellar-network-1452109082/)

> At the system level, **Stellar's native currency is inflationary whereas Ripple's is not**.

More to this below.

> At the ledger operation level, Stellar adopted a very [strict API based off XDR](http://www.faqs.org/rfcs/rfc1832.html), Ripple is built on top of [Google Protocol Buffers](https://developers.google.com/protocol-buffers/). XDR can be thought of as "statically typed" vs "dynamically typed" for something like proto buf: the tradeoffs made are speed of development (in Ripple) vs safety and correctness (for Stellar's approach).

> - [via Quora](https://www.quora.com/What-is-the-main-difference-between-Stellar-and-Ripple-protocols)

#### The Inflation

**Stellar has limited supply with built-in inflation**

[via stellar.org:](https://www.stellar.org/developers/guides/concepts/inflation.html)

The Stellar distributed network has a built-in, fixed, nominal inflation mechanism. New lumens are added to the network at the rate of 1% each year. Each week, the protocol distributes these lumens to any account that gets over .05% of the “votes” from other accounts in the network.
Using the set options operation, every account selects another account as its inflation destination, or nominee to receive new currency. The inflation destination will persist until changed with another set options operation.

**Ripple has limited supply buy the native currency gets destroyed with successful transactions**

[via xrpchat](https://www.xrpchat.com/topic/2207-xrps-deflationary-nature/)

**Q:** I guess this is a very basic-level question, but I don't see it usually comes up on this forum whenever people speculate about XRP's future price:

Given the deflationary nature of XRP, do you believe this feature might ever be an obstacle for XRP's success? I mean, people will tend to save their XRP and not to spend them because they will be supposed to get more valuable over time, but at the same time this could also result in a constraint of XRP market and liquidity. By contrast, the Stellar network automatically applies a small inflation rate of 1% to its currency that could help solve this issue.

What is your opinion? Could this be an original design flaw of XRP?

**A:** Small amount of xrp gets destroyed with each transaction and its expected that as demand and transaction will increase that destruction rate will increase which will cause the same effect as inflation because of slowly decreasing supply but since things are in initial stage its gonna take long time in my opinion.

#### The giveaway

If you hold **Bitcoins or Ripple** you can invest in Stellar/Lumens for free (which is frankly a no-brainer). **There is a [second Stellar giveaway for Bitcoin hodlers lined up for the summer 2017](https://www.stellar.org/blog/bitcoin-claim-lumens-2/).** The giveaway starts on June the 27th and the only drawback is you will need to have a facebook profile that confirms you reside in an unrestricted state:

*Due to regulatory restrictions, this program is closed to residents of the U.S. states of New York, Georgia, New Hampshire, and Connecticut as well as the nations of Iran, Cuba, North Korea, and other countries subject to sanctions by the United States.*

There's probably still enough time to make one.

You will get Lumens automatically if you have BTC or XRP on Kraken, Poloniex, Deribit or BTC38.

{{ site.ads.aads728 }}

#### So, Ripple is deflationary.

* There is currently circulating 38,532,538,149 XRP out of 99,994,681,824.21 XRP.
* There is currently circulating 9,624,904,739 XLM out of 102,920,806,155 XLM.

Both coins are really only possibly valuable for payment processing -- at least as long as Paypal or something like that is not an option. Well.

Meh.

> Unlike some other fintechs, Ripple is bank centric. Banks connect to the Ripple network not their customers. This has two big benefits. First, customers are used to trusting banks (which is better than having to get comfortable with entrusting your money to some fintech you never heard of). Second, regulators are comfortable with banks (which means they will not pull the plug on Ripple as they might with non bank fintechs). - via [linkedin](https://www.linkedin.com/pulse/ripple-vs-swift-payment-revolution-david-blair)


There is something to the obsession with bank coins. They say that when the wall street decides to pour all the money into something you would be stupid for not taking the ride with them. It's just that in the case of Ripple, the banks [are thrilled to use Ripple as a layer](https://www.linkedin.com/pulse/ripple-vs-swift-payment-revolution-david-blair) but that can only increase the value of Ripple by burning the currency as transactions get settled.

Ultimately, given the hype on altcoin forums whenever anything gets official acknowledgement from the shiny official people up there in the institutions, it's quite likely the "fundamental" price growth is going to be small compared to the *buy the rumor* hype. In other words, bubbles.

On the other hand, Stellar looks more compatible with Bitcoin - maybe as an offchain layer, one day?
