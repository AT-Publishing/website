---
layout: forestry
german: false
published: true
comments: true
stories: false
genres: Opinion
tickers: false
author: https://reddit.com/u/KarlVonBahnhof
author_name: KarlVonBahnhof
title: 'PSA: Don''t send ETH from Bitstamp to Bitfinex'
date: 2017-09-01 00:00:00 +0000
description: Your money will be lost.
permalink: "/bitifinex-eats-your-eth"
image:
- "/img/trading/ethereum.jpg"
image_alt:
- Bitfinex eats your ETH.
categories:
- trading
- bitfinex
update: 2017-09-01 00:00:00 +0200
chart: []
tags: []
---
Apparently, the newly launched ETH trading on Bitstamp comes with an unpleasant surprise: If you withdraw ETH, the withdrawal is processed via a smart contract, **which is not indicated on the ETH withdrawal page** - there is only a fineprint note below the withdrawal page's fold that says "Please make sure that the receiving party supports Ethereum transactions generated from smart contracts prior to initiating an ETH withdrawal". 

If you happen to withdraw from Bitstamp to Bitfinex, your deposit will be confirmed on the blockchain but your money will not be credited because Bitfinex doesn't accept deposits from smart contract.

They'll still receive the money though. The money you didn't know was sent via a smart contract. Because the receiving wallets are not using a smart contract themselves, so that they could make the transaction bounce.

What a time to be alive. 

[Thread on r/bitfinex where you can leave your support ticket number](https://www.reddit.com/r/bitfinex/comments/6x792r/bitfinex_deposit_eth_from_smart_contract_wallet/)

The support is at Poloniex level at the moment: too many users having the same issue, no tickets resolved, and at the moment not looking likely to be resolved. Main thing is we have a new frontend interface boys!