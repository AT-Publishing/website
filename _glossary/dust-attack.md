---
published:  true
cloud:      true
promoting:  payments-services
layout:     at-glossary
date:       2020-06-22 02:07:00 +0700
slug:       dust-attack/
title:      Dust Attack
hook:       What is a dust attack and what can you do if your crypto wallet was dusted?

categories: [crypto-jargon]
tags:       ["dust-attack", "electrum", "cryptocurrency-wallet", "opsec", "og-crypto-tools"]
note:       jargon
image:      ["https://res.cloudinary.com/atnetcloud/image/upload/v1601438903/atnet/_glossary/pexels-paul-theodor-oja-2437847_aeirb4.jpg", "https://res.cloudinary.com/atnetcloud/image/upload/c_lfill,h_360,w_700/v1601438858/atnet/_glossary/Screenshot_2020-09-30_at_10.56.15_AM_w12fgg.jpg"]

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

You will have to use the [Elextrum wallet](/glossary/electrum/) which is a bitcoin wallet that supports "coin control". That means you can decide which incoming transaction you want to spend an which not, even if they were both sent to the same address.

You have the following options:

* Spend the dust by sending it to a miner
* Spend the non-dust by sending it to a new wallet

More on [Reddit](https://www.reddit.com/r/TREZOR/comments/ium0gd/dust_attack/).
