---
published:  true
cloud:      true
promoting:  payments-services
layout:     at-glossary
date:       2020-09-30 02:07:00 +0700
slug:       dust-attack/
title:      Dust Attack
hook:       What is a dust attack and what can you do if your crypto wallet was dusted?

categories: [crypto-jargon]
tags:       ["dust-attack", "ledger", "electrum", "cryptocurrency-wallet", "opsec", "og-crypto-tools"]
note:       jargon
image:      [
"https://res.cloudinary.com/atnetcloud/image/upload/v1601438903/atnet/_glossary/pexels-paul-theodor-oja-2437847_aeirb4.jpg",
"https://res.cloudinary.com/atnetcloud/image/upload/c_lfill,h_360,w_700/v1601438858/atnet/_glossary/Screenshot_2020-09-30_at_10.56.15_AM_w12fgg.jpg",
"https://res.cloudinary.com/atnetcloud/image/upload/c_lpad,h_360,w_700/v1601626705/atnet/_glossary/Screenshot_2020-09-08_at_15.51.09_ele277.jpg",
"https://res.cloudinary.com/atnetcloud/image/upload/c_lpad,h_360,w_700/v1601626722/atnet/_glossary/Screenshot_2020-09-08_at_17.14.56_l40exk.jpg"]

indepth:    /altcoin-wallets/


---

Dust attack is an attack on privacy that happens on the bitcoin blockchain.

A potentially malicious actor is sends the smallest possible transaction amount to large amount of addresses and presumably runs a bot that watches from which addresses the coins were moved and where.

Following the movements of the dust may eventually lead to a transaction that will be identifiable in real life, such as an online order or a p2p cash sale. It can also be used to link different wallets owned by the same person.

### September 2020 Dust Attack

There was a dust attack going on in September 2020. The dust amount was 547 satoshis and the attack posed as an advertisement for a website `memo dot sv`:

{% amp700cloud page.image[1] %}

### Can you prevent a dust attack?

No.

Anyone can send bitcoin to any address.

### What to do if your wallet was dusted

You have the following options:

* Spend the dust by sending it to a miner
* Spend the non-dust by sending it to a new wallet

Generally, spending **everything but the dust** is a better option. More in comments under [Reddit](https://www.reddit.com/r/TREZOR/comments/ium0gd/dust_attack/).

#### Dusted address on a Ledger wallet

If the address that got dusted was in a wallet on any Ledger device, or if you [have a spare Ledger wallet to use](/blackfriday/#live-ledger), your solution is easy.

{% amp700cloud page.image[2] %}

Ledger Live supports coin control in the dialog you go through when sending crypto out. You simply click on "[coin control](/glossary/coin-control/)" and then unselect the dust.

{% amp700cloud page.image[3] %}

If you use change addresses, transaction of any size will move all your non-dusted coins from the dusted address.

<a href="http://bit.ly/lnx-2020" class="btn">Get a Ledger Wallet today</a>

#### Dusted address on a basic crypto wallet

If the address that got dusted was under a [basic crypto wallet](/altcoin-wallets/) like Exodus, Jaxx or Blockchain.com, you will have to use the [Electrum wallet](/glossary/electrum/).

Electrum is a bitcoin wallet that supports advanced features such as what's called [coin control](/glossary/coin-control/). That means you can decide which incoming transaction you want to spend an which not, even if they were both sent to the same address.
