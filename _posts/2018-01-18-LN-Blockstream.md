---
layout: forestry
published: true
guest: false

date: 2018-01-18 11:56:00 +0100
#update: 2018-01-10 11:23:00 +0100

author: "news@altcointrading.net"
author_name: GenericShill

comments: false
stories: true
#note: 'Feature'
genres: Blog
tickers: false

permalink: blockstream-lightning-charge/
german: false
cz: false


title: "First version of Bitcoin Lightning Network is on the mainnet"
description: "LN Micro-transaction protocol on the bitcoin blockchain is currently powering the Blockstream e-shop, and is buggy."

image:
- "/editorial/tagged/lightning-charge.png"
image_alt:
- "This particular implementation is called c-lightning, was developed by Blockstream."

categories: ["basics", "news"]
tags: ["blockstream", "lightning-network", "bitcoin-scaling", "micropayments", "ln"]
chart: []


about:
 name: "lightning charge"
 sameas: ["https://blockstream.com/2018/01/16/lightning-charge.html", "https://lightning.network/"]

---

On January 16th, first implementation of Lightning Network went on the mainnet. LN is the Bitcoin's off-chain scaling solution, analogous project with Ethereum's Raiden.

This particular implementation is called c-lightning and was developed by Blockstream. The particular solution developed on top of it is [Lighthing Charge](https://github.com/ElementsProject/lightning-charge) which aims to provide a way to make affordable micropayments on the bitcoin blockchain. Lightning Charge comes with a way to integrate bitcoin micropayments into WooCommerce, a popular e-commerce solution. Users can already test that out on the [Blockstream store](https://store.blockstream.com/) online. The store accepts real mainnet coins, not testnet ones.

There are prominent warning on the e-shop homepage saying this is a test run and users may lose funds. And sadly, according to Twitter discussions that emerged during the past two days [Lightning Charge is buggy](https://twitter.com/TraceMayer/status/953430172019101696) indeed, at least for now.

The equivalent on the Ethereum blockchain, [microraiden](https://raiden.network/micro.html), has been on the mainnet since November 30th 2017 and is running a bounty program.
