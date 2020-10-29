---
layout:       at-trading
canonical:    'https://www.thebusinessofcrypto.com/articles/samourai-wallet-staggered-ricochet'

categories:   [ psa ]
tags:         [ cryptocurrency-wallets, crypto-opsec, adoption, bitcoin-wallet, electrum, samourai ]
note:         PSA
promoting:    onramp

date:         2019-01-25 01:04:00 +0700

title:        "How Samourai Wallet contributes to Bitcoin's fungibility"
description:  "The 'Bitcoin wallet for the streets' deserves every bit of that marketing slogan."


author: 'https://www.thebusinessofcrypto.com/articles/samourai-wallet-staggered-ricochet#about-the-author'
author_name:    'Chris at The Business Of Crypto'
author_twitter: "_Karlvonbahnhof"
editor_name:    Diana Trang

permalink:      samourai-wallet-bitcoin-anonymity/

image:
- "https://res.cloudinary.com/atnetcloud/image/upload/c_lfill,h_360,w_700/v1596693898/atnet/__women/pexels-daria-shevtsova-1546621_bjygn6.jpg"
image_alt:
- "Samourai Wallet has released an update that contributes heaps to Bitcoin's fungibility"


related:
- {"Guide to storing IOTA - and how to migrate from Light Wallet to Trinity": "/security/iota"}
- {"Tried and True OPSec Tools, Crypto Hodler's Edition": "/security/tools"}
---

In January 2019, Samourai Wallet released an update that made an important step towards the fungibility of Bitcoin as a payment vehicle.

When we consider the potential of cryptocurrencies to be used as money, Bitcoin has the undisputed advantage of adoption: Everyone knows what Bitcoin is, it has been used in peer-to-peer transactions for years, there are relatively easy ways to store it.

{{ site.bfx_long }}

By now, Bitcoin as a payment method has somewhat solidified by sticking around for so long.

One of the disadvantages though is the fact that Bitcoin's blockchain is public. In many corners of the cryptocurrency community, this is even the main reason for Monero's existence.

Nonetheless, there is the opposing argument as well - You only need stealth privacy quite rarely. And so, do we really need a separate crypto-money just for these rare cases? A separate blockchain for stealth transactions?

This article cannot provide an answer to that question - in time, the market will decide.

If you subscribe to the philosophy that it is not feasible to hold multiple cryptocurrencies for different uses, you will most likely benefit from what Samourai Wallet has been working on.  

#### Staggered Ricochet

Samourai Wallet really deserves to call itself "the bitcoin wallet for the streets". The first version of Samourai wallet came to existence during the bear market of 2015 already with the intention to offer some built-in transaction anonymizing function; ever since this angle kept only improving.

The new "Staggered Ricochet" is an extension of an existing premium option for BTC transactions called simply "Ricochet". Ricochet is not a mixing function, but it helps to increase your plausible deniability by adding hops into your transaction - the principle is similar to relay hops used by Tor, the anonymous deep web browser.

Ricochet makes your transaction somewhat slower and somewhat more expensive, because you are inserting extra transactions between your starting address and the destination address.

Staggered Ricochet is a take on some advanced issues that are emerging as blockchain transaction analytics becomes more advanced. This update improves Ricochet by making its tell-tale patterns less recognizable: Staggered Ricochet makes sure each hop-transaction gets mined in a different block and also, each hop-transaction will only first be exposed to the mempool when it is just ready to be broadcast.

Explanation from [Samourai Wallet's blog](https://blog.samouraiwallet.com/post/182192289762/staggered-ricochet-utxo-tagging-paynym-ux):

> One of the clever ways of fingerprinting transactions that blockchain spies have been known to use is monitoring the mempool and using associated metadata including time first broadcast to assist in their address clustering heuristics. To help break that method Staggered Ricochet transactions will not be exposed to the public mempool until they are ready to be broadcast.

#### Cost and Time

On the expense side, Samourai Wallet with the Staggered Ricochet option is a good fit for  the philosophy of using stealth privacy only once in a while: As with simple Ricochet, you are paying extra fees for the hops, and additionally, a Staggered Ricochet transaction will potentially take up to a few hours to confirm because of the block restriction. You do not want to use it every time, and you don't want to buy your coffee this way.

For the cases where you want privacy though, I would argue that state-of-the-art enhancements like the Staggered Ricochet can even be a safer option than using a private cryptocurrency: You are adding extra hops to a very busy public blockchain in a manner that cannot be easily detected.

If you choose to pay with a cryptocurrency known for its focus on anonymous transations, by doing so you are advertising that this particular transation really needs to stay hidden. All it takes is a vulnerability that breaks that ledger's anonymity - which by all means can happen.

***

**Samourai Wallet is available for free at [samouraiwallet.com/download](https://samouraiwallet.com/download).**

*As for smartphones, the app is currently only available for Android. If you are a slightly more advanced user, you can run the Android app on your computer via VirtualBox - [a how-to guide here](https://www.altcointrading.net/security/virtualbox).*

***
