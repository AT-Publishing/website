---
published:  true
cloud:      true
promoting:  exchanges
layout:     at-glossary
date:       2020-09-28 01:07:00 +0700
slug:       electrum/
title:      Electrum
hook:       All you need to know about the Electrum wallet, plus links to all the guides (how to install, signatures, backups, sweeping, segwit and legacy addresses)

categories: [ opsec ]
tags:       ["cryptocurrency-wallet", "electrum", "crypto-opsec", "og-crypto-tools"]
note:       OG Crypto Opsec
image:      ["https://res.cloudinary.com/atnetcloud/image/upload/v1588053673/atnet/altcoin-wallets/gold-bitcoin-844127_pfcs9y.jpg"]

indepth:    /altcoin-wallets/

related:
- {"Cryptocurrency Strategy for Beginners": "/cryptocurrency-strategy-beginners/"}
- {"Beginner’s guide on How to buy Ethereum (ETH)": "/howto/buy-ethereum/"}

---

Electrum is one of the oldest cryptocurrency wallets still in use.

The original Electrum wallet is a **bitcoin wallet**. Its homepage is at [electrum.org](https://electrum.org) and it is actively maintained by the same developer, Thomas Voegtlin, since 2011.

Electrum has a good track record in terms of security.

It can be an advanced bitcoin wallet if you enable advanced functionalities, but if you are more on the beginner end, they won't stand in your way.

**You Might Need These How-To's:**

* [How to safely install Electrum wallet, step by step guide](/howto/verify-signature/#electrum)
* [How to backup Electrum wallet](/security/backups/) (both the seed phrase and the full wallet)
* [How to make bitcoin signature in Electrum wallet](/howto/sign-verify-message/#how-to-sign-a-message-in-electrum)
* [How to verify bitcoin signature in Electrum wallet](/howto/sign-verify-message/#how-to-verify-a-message-in-electrum)
* [How to sweep private keys in Electrum](/security/sweep-private-keys/)
* [How to generate nested SegWit (P2SH) addresses (3-format) from your Bitcoin seed in Electrum](/howto/generate-bitcoin-p2sh-address/)

<!--more-->

### Electrum SegWit or Legacy?

During the Electrum wallet set up, the application asks you to choose between [SegWit and Legacy](/glossary/segwit/) wallet.

The difference here is mostly in the address format. SegWit is the newer format, it has some advanced capabilities and slightly lower fees.

If you don't care and just want to be on the safe side without complicating things, choose legacy.

* Legacy Bitcoin addresses start with `1`. These are recognised as valid at all exchanges except [LocalCryptos](https://bit.ly/2YD6gmA) which is a dApp and needs the advanced features of SegWit to automate the escrow process.
* SegWit Bitcoin addresses start with `3` (called P2SH) or `bc1` (called bech32). The `bc1` version is the latest one, but not yet accepted everywhere.

If you want to, you can make a legacy wallet and then create another Electrum wallet with the same seed, but choose SegWit. This will give you two wallets with different sets of addresses, but all under the same seed.

On [Ledger Nano Wallets](/blackfriday/#live-ledger), you can do the same thing by creating a new subaccount in Ledger Live.

### Electrum to store altcoins (Monero, ETH, ZEC)

Electrum is a bitcoin-only wallet.

The real Electrum wallet does not support any altcoins.

#### Electrum Forks for Altcoins

Back in the infancy of alternative cryptocurrencies, altcoins like monero had for a short time relatively similar codebase to that of bitcoin. Then it used to be possible to store monero in Electrum, in Trezor with a bit of hacking, and in any other bitcoin wallet.

Those times are gone; it is **no longer possible to store in Electrum any cryptocurrencies that are not bitcoin**.

Do not send monero to Electrum, do not send ethereum to Electrum, do not send zcash to Electrum.

#### Electrum forks

Because Electrum has been such a successful bitcoin wallet, with bitcoin forks and with some altcoins the developers opted to release their own wallets based on the original Electrum code.

Those wallets are a different software authored by developers other than Thomas Voegtlin.

Electrum forks for altcoins are NOT available from `electrum.org` and **may not be safe to use**.

### Electrum security issues

At the time of writing the latest Electrum release is *Electrum-4.0.4 (Nov 2020)* and there are no known vulnerabilities in it.

There have been two major security issues with older versions of the Electrum wallet. Both were exploited and fixed in 2018.

* Electrum versions older than 3.3.4 are [susceptible to a phishing attack](https://github.com/spesmilo/electrum/issues/4968), where the attacker tricks you into downloading a fake Electrum update and steals your private keys.
* Electrum versions older than 3.0.5 have a [serious vulnerability](https://www.reddit.com/r/Bitcoin/comments/7ooack/critical_electrum_vulnerability/) where your private keys may get exposed if your **currently open** wallet does not have a **passphrase** set and you're **online with browser open**.

As a precaution, it is recommended to

* always download Electrum from `electrum.org`
* verify the PGP signature provided by the developer (it is the same one since 2013)

<a class="btn" href="/howto/verify-signature/">How to verify a PGP signature</a>

### Electrum Advanced Features

* **Coin Control:** Deciding which incoming transaction you want to spend. This is useful for [dust attacks](/glossary/dust-attack/)
* **Bitcoin Signatures**: Electrum lets you [sign a message with your private keys](/howto/sign-verify-message/). A valid signature is a proof of ownership of that private key. This verification is typically needed when you lose access to an exchange account where you were not verified.  
* **Sweeping**: Private key [sweeping](/security/sweep-private-keys/), which is useful for redeeming forks and airdrops.
* **Watch-Only**: Creating watch-only wallets. This is a way to keep track of your transactions that is safer than having a full crypto wallet up and running.
