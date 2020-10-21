---
published:  true
cloud:      true
promoting:  security
layout:     at-glossary
date:       2020-10-02 02:07:00 +0700
slug:       coin-control/
title:      Coin Control
hook:       What is coin control and where can you get it?

categories: [ crypto-jargon ]
tags:       [ crypto-opsec, dust-attack, ledger, electrum, cryptocurrency-wallet, crypto-tools]
note:       jargon
image:      [
"https://res.cloudinary.com/atnetcloud/image/upload/v1587527346/atnet/blog_trading/pay-with-btc_ku4see.jpg",
"https://res.cloudinary.com/atnetcloud/image/upload/c_lpad,h_360,w_700/v1601626705/atnet/_glossary/Screenshot_2020-09-08_at_15.51.09_ele277.jpg",
"https://res.cloudinary.com/atnetcloud/image/upload/c_lpad,h_360,w_700/v1601626722/atnet/_glossary/Screenshot_2020-09-08_at_17.14.56_l40exk.jpg"]

indepth:    /altcoin-wallets/


---

In the blockchain industry, we call **coin control** an advanced feature of cryptocurrency wallets that lets you choose which incoming transaction you want to spend and which to leave unspent.

This feature is necessary if you want to escape from a [dust attack](/glossary/dust-attack/), an attack on privacy that happens on the bitcoin blockchain.

<!--more-->

### Bitcoin wallets that support coin control

* [Ledger wallets](http://bit.ly/lnx-2020)
* [Electrum wallet](/glossary/electrum/)
* [Samourai wallet](/samourai-wallet-bitcoin-anonymity/)

#### Coin Control on a Ledger wallet

On any Ledger device, coin control is easily accessible through the Ledger Live application.

{% amp700cloud page.image[1] %}

Ledger Live supports coin control in the dialog you go through when sending crypto out. You simply click on "[coin control](/glossary/coin-control/)" and then unselect the dust.

{% amp700cloud page.image[2] %}

If you use change addresses, transaction of any size will move all your non-dusted coins from the dusted address.

<a href="http://bit.ly/lnx-2020" class="btn">Get a Ledger Wallet today</a>
