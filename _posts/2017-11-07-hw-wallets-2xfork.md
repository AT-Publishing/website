---
published: true
guest: false

date: 2017-11-07 18:12:00 +0700
update: 2017-11-07 18:36:00 +0700

author: https://twitter.com/tradingfanbois
author_name: tradingfanbois
author_twitter: '@tradingfanbois'

comments: false

stories: true
#note: 'User Guide'
genres: Blog

layout: forestry
german: false
tickers: false

title: "Hardware wallets and Bitcoin SegWit2x Fork: Ledger vs Trezor"
description: "Both of the top hardware wallet companies have published their stances on the upcoming Bitcoin fork and how they will deal with the missing replay protection."

permalink: "/segwit2x-ledger-trezor"
image:
- "/editorial/keys.jpg"

image_alt:
- "With all hardware wallets, you own your private keys in form of the seed so you get the SegWit2x coins. The redeem procedure is different though."
categories:
- basics
chart: []
tags: ["segwit2x", "bitcoin", "bitcoin fork", "trezor", "ledger"]
identifier: 'hwsegwit2x11072017'
---

Bitcoin is set for a chain split from a hard fork again -- this time the consensus is that it won't be a non-event like the Bitcoin Gold fork. To some traders, this is just a dividend - getting free coins to add to their stash, to either trade them, sell them for BTC or cash them out. The SegWit2x creators insist 2x will be the new Bitcoin though, and that the legacy chain will die -- which means they did not implement replay protection. Transactions relayed on the 2x chain can be replayed on the legacy Bitcoin chain too, which makes splitting your coins to get the 2x coin trickier.

SegWit2x is planned to roll out on Bitcoin block 494784 (around November 16).

## Ledger Wallet and SegWit2x

[Read Ledger's announcement here.](https://www.ledger.fr/2017/11/06/preparing-segwit2x-hard-fork/)

Ledger wallet will support both 1x and 2x chains.

From the most generic user perspective, Ledger recommends to download the latest firmware update to get the interface for coin splitting.

You only need to split the coins if you care for both the 1x and 2x chains, valuing them independently. Because of the lack of replay protection, you need to process your coins in the interface provided by Ledger to avoid replaying your transactions.

For the actual splitting, Ledger provides two ways: one relies on a 3rd party tool and is manual, one is Ledger's own and will be automated. The automated way (available on Ledger Nano S and Blue but not on Ledger Nano) is the preferred one as it's suitable for beginners too, according to Ledger.

Ledger calls the automatic process *“half custodian” process*: They will taint users' coins which within the Ledger architecture is possible without the users handing over access to their keys.

Ledger will provide further details closer to the fork.

**If you don't own a [Ledger Nano S](https://www.ledgerwallet.com/r/e274?path=/products/ledger-nano-s), you probably won't get one before the 2x fork if you order now. You can still [order one here (currently in stock)](https://www.ledgerwallet.com/r/e274?path=/products/ledger-nano-s), chances are this is not the last Bitcoin fork.**

{{ site.ledger_728-90_animated }}


## Trezor Wallet and SegWit2x

[Read SatoshiLabs' announcement here.](https://blog.trezor.io/trezor-statement-segwit2x-2x-hard-fork-b2x-f245fe4f0fb)

[Trezor wallet](https://shop.trezor.io?a=fany@tutanota.com) will support both 1x and 2x chains.

You will need to split your coins manually if you want to value the 1x and 2x chains independently. This process will only be manual with Trezor and a splitting tool specific to this fork (a fork without replay protection) will be implemented.

SatishiLabs make it clear in their blog post that the coin splitting tool will come without any warranties -- if something happens to your coins, they are not responsible.

SatoshiLabs will update [the Trezor blog post](https://blog.trezor.io/trezor-statement-segwit2x-2x-hard-fork-b2x-f245fe4f0fb) with splitting guide closer to the fork.

#### Bottom line

*You will get 2x coins with both Ledger and Trezor. It seems like more winning point for Ledger wallet once again: The coin splitting features Ledger provides are clear more understandable to the laymen, plus they make it known there have been some security enhancement works.*
