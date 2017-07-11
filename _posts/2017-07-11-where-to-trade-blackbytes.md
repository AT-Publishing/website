---
layout: forestry
german: false
published: true
comments: true
stories: true
genres: Opinion
tickers: false
author: https://reddit.com/u/KarlVonBahnhof
author_name: KarlVonBahnhof
title: Where to trade blackbytes
date: 2017-07-11 02:35
update: '2017-07-11T02:01:38.300Z'
description: Byteball is a payment network that makes it easy to set conditional payments
  - finalize payment only if condition is met - similar to ethereum smart contracts
  but more user-friendly.
permalink: "/byteball"
image:
- "/uploads/2017/07/11/pexels-photo-200092.jpeg"
image_alt:
- The next airdrop comes August the 7th
chart: []
categories:
- altcoins
- trading
tags: []
---
Two days ago, on the full moon, there was a blackbytes airdrop. If you signed a message with a BTC address before the deadline on 9th of July, you received free **bytes** and some hours later also some **blackbytes**.

While the bytes can be traded on [Bittrex (by millions as GBYTE)](https://bittrex.com/Market/Index?MarketName=BTC-GBYTE), the blackbytes aren't traded anywhere. To trade these for bytes you need to sign up to the byteball slack channel [via the autoinviter here](http://slack.byteball.org/) and head to #trading_blackbyte channel. The channel has a bot that works as an order book by Gigabyte per Gigablackbyte:

![](https://image.prntscr.com/image/D2NJV0HoTAqCiTrhnt38OQ.png)

Currently the top of the ask book is at 0.01290 GB/GBB and top of the bid book at 0.02008 GB/GBB. 

Gigabytes per bitcoin are trading at Bittrex around 0.24 BTC ($585). 

#### About Byteball

Byteball is a payment network that makes it easy to set conditional payments - *finalize payment only if condition is met* - similar to ethereum smart contracts but more user-friendly:

![](https://wiki.byteball.org/uploads/slackjore/bind-400.png)


The way transactions are confirmed is from the high level similar to [IOTA's tangle](https://www.altcointrading.net/iota):

> Transactions created by users are cryptographically linked to each other, and once you add your new transaction, other users start adding theirs on top of yours, and the number of other transactions that link to your transaction grows like snowball.

In byteball this is called DAG (directed acyclic graph) - every new transaction references one or more earlier ones by including and signing their hashes. By including its parents, each new transaction also indirectly includes and confirms all parents of the parents, parents of the parents of the parents, and so on.


The supply is capped, there is no mining:

> The total number of bytes is 10^15, all bytes were issued in the genesis transaction. Since the fees paid are returned into the circulation, the money supply will remain the same.

The difference between bytes and blackbytes is that blackbytes have enhanced privacy:

>  Private payments can be made using blackbytes, a cash-like untraceable currency. Its transactions are not visible on the public database that shows all payments made with (white)bytes. Blackbytes are sent peer-to-peer instead in an encrypted chat session.

[Read more at bitcointalk](https://bitcointalk.org/index.php?topic=1608859.0)

### Byteball airdrops

If you didn't catch the first airdrop, there will be another one the next full moon (August 7th) - [byteball.org](https://byteball.org) has a countdown.

#### How to get into the next airdrop

To enter the byteball giveaway you need to [download byteball wallet](https://byteball.org/#download) and from it [enter the chat window with the transition bot](byteball:A2WMb6JEIrMhxVk+I0gIIW1vmM3ToKoLkNF8TqUV5UvX@byteball.org/bb#0000). The bot will tell you to first state your byteball address, then your bitcoin addresses each followed by a message signed with that address. The signed message must contain only your byteball address.