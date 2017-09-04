---
layout: forestry
german: false
published: true
comments: false
stories: true
genres: Blog
tickers: 'BTCUSD'
author: https://reddit.com/u/KarlVonBahnhof
author_name: KarlVonBahnhof
title: Lending in the time of chain split
date: 2017-06-18 10:12 -04:00
update: 2017-06-18 16:31 -04:00
description: "Collecting the data on exchange policy in case of Bitcoin network split. If you lend out bitcoins, you need to read this."
permalink: "/lending-btc-chain-split"
image_alt:
- How long would you wait for dough?
image:
- "/img/emotions/lending-chain-split.jpg"
categories:
- trading
tags: []
---

Even if you are die hard altcoiner, if you are trading altcoins actively on Poloniex or Bittrex you definitely have some bitcoins. And if you sometimes take a break from trades,
maybe you loan them out for interest.

If you don't lend out your bitcoin, [there is a new website that was shared on reddit that is dedicated to explaining the 1st of August thing](https://1august.org) - the day when the bitcoin network might split (but might not). The chain split might occur but might not.

The general rule is if you have your bitcoins in a wallet where you own your private keys ([Electrum](https://electrum.org/#download), [Trezor](https://shop.trezor.io/?a=fany@tutanota.com), [Ledger](https://www.ledgerwallet.com/r/e274?path=/products/ledger-nano-s) to name the best) you will be able to extract both chains after the split.

{{ site.mailchimp }} If you have your bitcoins on an exchange but **not in an open margin position or lent out**, you should **probably** get both chains automatically. The exchange is however not forced to support both chains though, but there are no statements available regarding this.

**As of today, exchanges haven't released statements regarding the possible network split in August so the only available information is their statements from the possible hard fork of core vs unlimited in March 2017. This post will be updated once there are statements available and newsletter subscribers will get a notification, as usually.**

#### If you don't lend your coins

So, if you don't have to have bitcoins on the exchange and you don't want to sell them, your best bet is to have them in your wallet where you easily control the private key.

You can always go for [Electrum](https://electrum.org/#download) which doesn't have the new hip frontend design but is actually easy to use while it also stood the test of time without hacks and heists. If you don't have a cold storage (hardware wallet) you are probably too late ordering it now. [Ledger Nano S](https://www.ledgerwallet.com/r/e274?path=/products/ledger-nano-s) is sold out on backorder, ETA September 2017 which is too late. As for [Trezor](https://shop.trezor.io/?a=fany@tutanota.com), some amount of Trezors is available right now (for a markup) or you can opt in for the normally-priced backorder Trezor (ETA August 2017 -- too late).

#### If you make money lending to the people who borrow to gamble

The following is what exchanges have put out regarding possible chain splits. There were statements when the whole Bitcoin Core vs Bitcoin Unlimited affair was going on, but the problem was essentially the same: the network split.

### Poloniex

[Poloniex - Our position on possible hard fork](https://www.reddit.com/r/Bitcoin/comments/5zz0a9/poloniex_our_position_on_the_possible_hard_fork/)

> If you have Bitcoin on loan at the time of the fork, you do not have it on balance and therefore you cannot receive corresponding Bitcoin Unlimited. The terms of the loan dictate that you will receive the same number and type of coins you loaned within X days plus the agreed upon interest.

> Spot traders unambiguously own their purchases, and are the rightful recipients of the coins on the new chain and they can do with them what they like, whether that is selling them to others or taking them off of the platform entirely.

**TLDR;** Both coins listed. If you lend out your bitcoins you don't have them in your wallet, therefore you cannot receive the coins of the new chain. If you hold bitcoins in your wallet (spot or margin), you receive coins from both chains.

Poloniex is the only exchange that has this kind of lending policy for hard fork, maybe it has something to do with how the exchange engines are coded.

### Bitfinex

[How Bitfinex will handle hard fork](https://www.reddit.com/r/BitcoinMarkets/comments/62a1pv/how_bitfinex_will_handle_a_hardfork_with_respect/)

This is for the split into BTC-Core and BTC-Unlimited but the procedure is likely to be the same for the scaling split:

> In the event of a hardfork that results in a chain split, Bitfinex and other major exchanges—such as Poloniex, Kraken, and GDAX—are faced with the challenge of resolving complex accounting issues in margin trading. Ideally, each exchange would agree to a uniform and coherent methodology; however, each serves different audiences and have different market structures, making a universal solution unworkable. For example, Bitfinex has decided to take a different approach than the one proffered by Poloniex.

> After much analysis, we have chosen to handle the accounting of margin trading and funding based on the model of how stock spinoffs, dividends, and distributions are handled in equity markets.

> Specifically, in the case of a hardfork event, **lenders will receive both BTC and BTU**.

> Anyone that is short BTC/USD or long any BTC trading pair (ETH/BTC, LTC/BTC, etc.) [that is, borrowing BTC] will owe BTU to the lender, effectively making the user short BTU. An exception is in the case that BTC is borrowed but not in use as margin collateral, in which case BTU accrues to the lender.

> Users that are margin long BTC/USD or short any BTC trading pair will receive BTU.

**TLDR;** Both coins listed. If you are borrowing BTC for your margin position, you **don't** own coins from the new chain for your borrowed coins. If you are lending out BTC to other people, you own the new chain's coins.

The agreement of several exchanges regarding the listing of coins of both chains is [here](https://www.scribd.com/document/342194766/Hardfork-Statement-3-17-11-00am).

No new contingency statement has been released regarding the Jihan Wu drama, in May though PGP said Bitfinex might list a BIP148 token trading.

[Bitcoin is likely going to list a BIP148 token](https://www.reddit.com/r/Bitcoin/comments/6dcrim/bitfinex_is_likely_going_to_list_a_bip148_chain/)


### Kraken

Kraken has not released any statement statement regarding bitcoin fork (not now and not for the Unlimited drama), but the exchange was signed in the [BCC/BCU agreement](https://www.scribd.com/document/342194766/Hardfork-Statement-3-17-11-00am) alongside Bitfinex so it is likely their plan will be the same: both coins listed, borrowed bitcoins don't own new chain. [However, during the Ethereum network split Kraken did not support ETC](http://blog.kraken.com/post/151941749242/on-the-imminent-ethereum-eth-hard-fork).

### Exchanges with no lending

#### Bitstamp

Bitstamp is adding Litecoin on Monday the 19th of June 2017. In the statement that announced the LTC trading they also mentioned margin trading feature. It's not clear whether there will also be lending like on Bitfinex or whether they will handle the funds privately like Kraken. Either way, for one public lending system is unlikely with their slow engines, and the whole margin function is not likely to be rolled out until it is clear whether there will be the split or not.

Bitstamp was also signed under [the agreement](https://www.scribd.com/document/342194766/Hardfork-Statement-3-17-11-00am) regarding BCC/BCU alongside Bitfinex or Kraken.

#### Bittrex

[Statement from March 2017](https://bittrex.zendesk.com/hc/en-us/articles/115004479127-Statement-about-potential-Bitcoin-hard-fork)

> Bittrex would like to support both tokens.

Bittrex also signed [the agreement](https://www.scribd.com/document/342194766/Hardfork-Statement-3-17-11-00am) regarding BCC/BCU alongside Bitfinex or Kraken.

### Derivative Exchanges

If you trade futures or use them to hedge, you also need to know what your exchange will do.


#### Cryptofacilities

Cryptofacilities sent out their plan for bitcoin BCC/BCU hard fork [via email](https://www.reddit.com/r/Bitcoin/comments/60xxe3/cryptofacilities_hard_fork_contingency_procedures/).


> Indices: Crypto Facilities would calculate a new XBZ/USD real-time index (for marking) and reference rate (for settlement), representing the combined price of XBT and XBU. All outstanding bitcoin Futures and Turbos would be marked to and settled on XBZ/USD. This means that they would reference the combined value of both tokens, such that the impact of a potential split of value is mitigated.

>  It may be operationally impossible to implement a XBZ/USD index without delay right after a fork. For as long as the integrity of the new index cannot be assured, we reserve the right to mark outstanding contracts manually or to suspend trading. We would strive to minimize any such interruptions.

> All new maturities of bitcoin-related Futures would be listed on either of XBT or XBU, depending on what we deem to be the “major” token. We reserve the right to not list any new Futures for as long as no major token has emerged or to list Futures on both tokens.

**TLDR;** Trading will be halted until a dominant chain emerges. All contracts will be settled to the combined dollar value of both chains once the network splits.

#### Deribit

[Deribit will handle a fork](https://twitter.com/DeribitExchange/status/844087435856371712) similarly as Cryptofacilities - contracts will be settled at the combined price.

<blockquote class="twitter-tweet" data-lang="en-gb"><p lang="en" dir="ltr">In case of a hard fork our existing futures and options will at expire at BTC + BTU price. More details will follow in a newsletter soon.</p>&mdash; Deribit (@DeribitExchange) <a href="https://twitter.com/DeribitExchange/status/844087435856371712">21 March 2017</a></blockquote>
