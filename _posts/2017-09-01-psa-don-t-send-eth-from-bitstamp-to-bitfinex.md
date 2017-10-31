---
layout: forestry
german: false
published: true
comments: false
stories: false
genres: 'Blog'
tickers: false

note: 'PSA'

author: https://reddit.com/u/KarlVonBahnhof
author_name: KarlVonBahnhof
title: 'Don''t send ETH from Bitstamp to Bfx'
date: 2017-09-01 00:18:50 +0200
description: Your money will be lost.
permalink: "/bitifinex-eats-your-eth"
image:
- "/img/trading/ethereum.jpg"
image_alt:
- Bitfinex eats your ETH.
categories:
- trading
- bitfinex
- eth
- exchanges
update: 2017-09-01 01:00:00 +0200
chart: []
tags: ["psa", "bitstamp", "smart contracts", "bitfinex"]
identifier:
- missingethbitfinex
---
Apparently, the newly launched ETH trading on Bitstamp comes with an unpleasant surprise: If you withdraw ETH, the withdrawal is processed via a smart contract, **which is not indicated on the ETH withdrawal page** - there is only a fineprint note below the withdrawal page's fold that says "Please make sure that the receiving party supports Ethereum transactions generated from smart contracts prior to initiating an ETH withdrawal".

If you happen to withdraw from Bitstamp to Bitfinex, your deposit will be confirmed on the blockchain but your money will not be credited because Bitfinex doesn't accept deposits from smart contract.

They'll still receive the money though. The money you didn't know was sent via a smart contract. Because the receiving wallets are not using a smart contract themselves, so that they could make the transaction bounce.

What a time to be alive.

[Thread on r/bitfinex where you can leave your support ticket number](https://www.reddit.com/r/bitfinex/comments/6x792r/bitfinex_deposit_eth_from_smart_contract_wallet/)

The support is at Poloniex level at the moment: too many users having the same issue, no tickets resolved. The only thing that sparks some "hope" is a recent tweet from Bitfinex: Apparently, they [solve deposit "errors" for a $25 processing fee](https://twitter.com/bitfinex/status/900646338941128704). I say "errors" because they were talking about sending BCH to an old BTC wallet, which is not really an error since the blockchain got duplicated so the address exists on BCH too if it existed on BTC before the fork. It's not as much a payment for an error as a ... payment for something that is invented to solve a problem which doesn't really exist.

Anyway! Main thing is we have a new frontend interface boys!
