---
published:  true
cloud:      true
promoting:  exchanges
layout:     at-glossary
date:       2020-09-28 01:07:00 +0700
slug:       electrum/
title:      Electrum
hook:       All you need to know about the Electrum wallet - is it good, which coins it supports, should you use it.

categories: [ opsec ]
tags:       ["electrum", "cryptocurrency-wallet", "opsec", "og-crypto-tools"]
note:       OG Crypto Opsec
image:      ["https://res.cloudinary.com/atnetcloud/image/upload/v1588053673/atnet/altcoin-wallets/gold-bitcoin-844127_pfcs9y.jpg"]

indepth:    /altcoin-wallets/

related:
- {"OPSEC Primers: Sweeping private Keys": "/security/sweep-private-keys/"}
- {"How to generate P2SH addresses in Bitcoin Electrum": "/howto/generate-bitcoin-p2sh-address/"}
- {"ATNET Glossary: Trading Psychology": "/glossary/trading-psychology/"}

---

Electrum is one of the oldest cryptocurrency wallets still in use.

The original Electrum wallet is a **bitcoin wallet**. Its homepage is at [electrum.org](https://electrum.org) and it is actively maintained by the same developer, Thomas Voegtlin, since 2013.

Electrum has a good track record in terms of security.

It can be an advanced bitcoin wallet if you enable advanced functionalities, but if you are more on the beginner end, they won't stand in your way.

### Electrum to store altcoins (Monero, ETH, ZEC)

Electrum is a bitcoin-only wallet. The original Electrum wallet does not support any altcoins.

Back in the infancy of alternative cryptocurrencies, altcoins like monero had for a short time relatively similar codebase to that of bitcoin. Then it used to be possible to store monero in Electrum, in Trezor with a bit of hacking, and in any other bitcoin wallet.

Those times are gone; it is **no longer possible to store in Electrum any cryptocurrencies that are not bitcoin**.

Do not send monero to Electrum, do not send ethereum to Electrum, do not send zcash to Electrum.

#### Electrum forks

Because Electrum has been such a successful bitcoin wallet, with bitcoin forks and with some altcoins the developers opted to release their own wallets based on the original Electrum code.

Those wallets are a different software authored by developers other than Thomas Voegtlin.

Electrum forks for altcoins are NOT available from `electrum.org` and **may not be safe to use**.

### Electrum security issues

At the time of writing the latest Electrum release is *Electrum-4.0.3* and there are no known vulnerabilities in it.

There have been two major security issues with older versions of the Electrum wallet. Both were exploited and fixed in 2018.

* Electrum versions older than 3.3.4 are [susceptible to a phishing attack](https://github.com/spesmilo/electrum/issues/4968), where the attacker tricks you into downloading a fake Electrum update and steals your private keys.
* Electrum versions older than 3.0.5 have a [serious vulnerability](https://www.reddit.com/r/Bitcoin/comments/7ooack/critical_electrum_vulnerability/) where your private keys may get exposed if your **currently open** wallet does not have a **passphrase** set and you're **online with browser open**.

As a precaution, it is recommended to

* always download Electrum from `electrum.org`
* verify the PGP signature provided by the developer (it is the same one since 2013)

<!--<a class="btn" href="/howto/verify-signature/">How to verify a PGP signature</a>-->

### Electrum Advanced Features

* Deciding which incoming transaction you want to spend. This is useful for [dust attacks](/glossary/dust-attack/)
* Private key [sweeping](/security/sweep-private-keys/), which is useful for redeeming forks and airdrops.
* Creating watch-only wallets, which is a way to keep track of your transactions that is safer than having the real crypto wallet up and running.
