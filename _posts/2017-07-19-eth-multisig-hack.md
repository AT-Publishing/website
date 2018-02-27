---
layout: forestry
german: false
published: true
comments: false
stories: true
genres: News
tickers: true
author: https://reddit.com/u/KarlVonBahnhof
author_name: KarlVonBahnhof
title: ETH multisig hack
date: 2017-07-19 16:47
update: 2017-07-19 22:00
permalink: "/eth-multisig-hack"
description: Some ETH multisig wallets created with parity are being drained right
  now.
image_alt:
- ETH holders right now
image:
- "/uploads/2017/05/31/pexels-photo-247873.jpeg"
chart: []
categories: ['coins']
tags: ['eth-multisig-hack', 'security']
identifier:
- ethhack452525
---

**Updates**

The bug in Parity 1.5+ has been fixed - [see it on github](https://github.com/paritytech/parity/commit/e06a1e8dd9cfd8bf5d87d24b11aee0e8f6ff9aeb).

[Some of the funds were secured by ways of the same hack by a group of white hackers.](https://press.swarm.city/parity-multisig-wallet-exploit-hits-swarm-city-funds-statement-by-the-swarm-city-core-team-d1f3929b4e4e)

> Swarm: A swift response from a whitehat hacker group used the same exploit to drain many other project’s parity multisig wallets, in order to protect them from theft. This group was able to save over 377,000 ETH. Unfortunately the 44,055 ETH that was in Swarm City’s wallet is gone.

> Black hat hacker wallet address with stolen ether: https://etherscan.io/address/0xb3764761e297d6f121e79c32a65829cd1ddb4d32

> White hat wallet address with preserved ether: https://etherscan.io/address/0x1dba1131000664b884a1ba238464159892252d3a



**Original article**

There is a reason for the selloff, if you are looking for one: [Parity 1.5+ security alert](https://pbs.twimg.com/media/DFHvB86W0AEOnX0.jpg).

Some multisig wallets with contracts for ICOs created with certain versions of Parity are vulnerable and getting drained.

So far all ICO money for Edgeless Casino, aeternity and swarm.city is gone. It is 153k ETH which was worth about $32M when the heist started. At the moment it is around $30M. [This is where the coins were sent to](https://etherscan.io/address/0xb3764761e297d6f121e79c32a65829cd1ddb4d32#internaltx).

The bug has not been fixed yet so the draining might be going to continue for a while longer, unless money is moved out of vulnerable wallets in time.

*The vulnerability is a serious one, allegedly one only needs the public key and certain kind of metadata and that is enough to regenerate the wallet.*
