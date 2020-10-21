---
published:  true
cloud:      true
promoting:  security
layout:     at-glossary
date:       2020-08-27 00:37:00 +0700
slug:       segwit/
title:      Segwit (vs Legacy)
hook:       What do crypto traders call Segwit and should you use it?

categories: [crypto-jargon]
tags:       [blockchain-technology, segwit, noncustodial-trading, custodial-trading, otc-trading]
note:       jargon
image:      ["https://res.cloudinary.com/atnetcloud/image/upload/c_lfill,g_face,h_360,w_700/v1598344765/atnet/__women/pexels-thiago-matos-2239700_hgitpt.jpg"]

indepth:    /altcoin-wallets/

---

**SegWit** is a crypto jargon term that stands for **Segregated Witness**.

Segregated Witness is a network feature activated on the Bitcoin and Litecoin blockchains.

* You may be looking for: [LTC address converter](/howto/move-ltc-p2sh/), [BTC address converter](/howto/generate-bitcoin-p2sh-address/)

<!--more-->

### What does Segregated Witness mean?

SegWit segregates part of the data out of the transaction. It is specifically part of the transaction signature data that gets removed. As a result, the transaction is smaller in terms of bytes, and requires less network fee.

In general, segwit transactions are cheaper, and on top of that they allow certain advanced scripting. Second layer scaling solutions such as Lightning Network are among these advanced capabilities.

### Should you use Segwit or Legacy?

Ultimately, it is up to you. Segwit and legacy addresses are mutually compatible.

If you support second layer scaling and scripting solutions on the Bitcoin and Litecoin network, use SegWit. If you like the idea of *slightly* cheaper transactions, use SegWit. If you don't really care, keep using legacy.

### Segwit vs legacy address format

Bitcoin network:

* Bitcoin Legacy (P2PKH, or "pay to public key hash"): address starting with `1`
* Bitcoin Nested SegWit (P2SH, or "pay to script hash"): address starting with `3`
* Bitcoin Native SegWit (bech32, or "base32 encoded with error detection"): address start with `bc1`

Litecoin network:

* Litecoin Legacy (P2PKH, or "pay to public key hash"): address starting with `L`
* Litecoin Nested SegWit (P2SH, or "pay to script hash"): address starting with `M` or more rarely with `3`

### From your private key, you can generate either address format

If you own a private key, you can choose to use Segwit or Legacy addresses with it - or both. Your wallet seed can be used to generate either address format.

**The address format matters because...**

* ... not all features you might want to use are available with all formats.
* ... your wallet might only support one address type at a time. Electrum wallet does this, and for you it means that if you choose to restore a seed into a SegWit wallet, your Legacy balance will not show.
* ... some exchanges will only let you send coins to a legacy wallet.

For a full list on which wallets support which address format, head over to our post about [altcoin wallets](/altcoin-wallets/).

### Why do some wallets say a SegWit address is invalid?

Segwit and legacy addresses are mutually compatible. You can transfer your coin from a legacy address into a segwit address and the other way round.

That however does not mean that all wallets will let you make a transaction to any address.

Some wallets did not implement SegWit address generation yet, because it is quite a new technology and they worry about possible bugs. For instance the bloxkchain.com wallet does not support other than legacy addresses. That means they will not let you send or receive your coins from or to a segwit address.

Some wallets, and still some exchanges, will not let you withdraw coins to anything other than legacy address. This is done to minimize possible errors on part of users.

Decentralized exchanges and non-custodial trading platforms like <a rel="nofollow" href="https://localcryptos.com/r/bocmask">LocalCryptos</a> will only let you withdraw coins to SegWit addresses, because they need the scripting functionality that are enabled by SegWit.

* You may be looking for the [LTC address converter](/howto/move-ltc-p2sh/) or the [BTC address converter](/howto/generate-bitcoin-p2sh-address/)
