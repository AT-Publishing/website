---
guide:        true
pinned:       false
cloud:        true
promoting:    payments-services
note:         P2SH address compatibility
layout:       at-trading

title:        How to safely move Litecoin between SegWit P2SH (3) addresses and legacy (L) addresses
description:  "Some exchanges don't support LTC withdrawals to P2SH wallets and other don't support legacy addresses. Here's how to convert between them."

slug:         move-ltc-p2sh/

image:
- "https://res.cloudinary.com/atnetcloud/image/upload/v1596607764/atnet/_how-to/ltc-p2sh-transfers_hvn9gg.jpg"
image_alt:
- How to move litecoins between exchanges
categories:   [technical]
tags:         [ p2sh-wallet, altcoin-wallet ]

date:         2017-09-01 00:18:00 +0200
update:       2020-08-05 00:09:00 +0200
about:
 name:        "litecoin p2sh"

author:       https://reddit.com/u/KarlVonBahnhof
author_name:  KarlVonBahnhof
related:
- {"How to generate P2SH addresses in Bitcoin Electrum wallet": "/howto/generate-bitcoin-p2sh-address/"}
- {"How To Use A Bitcoin ATM": "/howto/use-bitcoin-atm/"}
- {"How to safely use bitcoin for payments": "/howto/pay-with-bitcoin/"}
---

Back in 2017, some time before Bitcoin, Litecoin also upgraded their network to get SegWit support. Segwit, or segregated witness, makes transactions more efficient and cheaper, and also enabled atomic swaps between LTC and BTC.

This newer format is called `P2SH` (pay-to-script-hash).

#### Difference between P2SH and Legacy LTC address

* Segwit-compatible LTC address: starts with `M` or `3`
* Legacy LTC address: starts with `L`

Hardware wallets and OG wallet apps got upgraded soon after the network upgrade. As a result, you will now often get Segwit-compatible addresses for LTC as the default.

However, for crypto exchanges the situation is different.

* Some exchanges haven't upgraded and only allow LTC withdrawals to legacy addresses.
* Some exchanges (mostly DEX and dApp platforms) on the other hand only allow withdrawal to P2SH addresses because, that's the only way a contract-based dApp can reach the LTC blockchain.

Here's how to move litecoins around without losing them.

#### How to withdraw Litecoin from Exchange to P2SH Address (Hardware wallets)

<strong>You will need a P2SH Litecoin address to withdraw LTC from non-custodial exchanges like <a rel="nofollow" href="https://localcryptos.com/r/bocmask">LocalCryptos</a>.</strong>

If you are using a hardware wallet like Ledger or Trezor, your default LTC addresses will be almost definitely P2SH, and they will start with the letter `M`.

**If your exchange gives you an error** that says an address starting with **M is not a valid LTC address**, you will still be able to withdraw into the P2SH address that starts with `3`.

Litecoin addresses that start with `3` are equivalent to that starting with `M`, so the coin will show up in the same wallet, in the same address. Using the `3`-address is just like using an alias.

1. Copy your `M`-address where you want to receive the LTC
2. Go to [https://litecoin-project.github.io/p2sh-convert/](https://litecoin-project.github.io/p2sh-convert/) which is a public converter script recommended by Trezor to use for this purpose.
3. Send a small amount of LTC to your `3`-address and check that the transaction arrived well. There were reports of `Uphold.com` messing this up and sending bitcoins instead.
4. If the test transaction went well, withdraw the rest.

#### How to withdraw Litecoin to a legacy address (Wallet Apps)

In Trezor and Ledger wallets, you can still generate a new legacy account and get an `L`-address.

Alternatively, you can use the `Exodus.io` wallet app - Exodus only supports `L`-addresses for Litecoin.

Once your LTC is transferred and confirmed, **hardware wallets** will send the LTC from the legacy account into the P2SH account. (**This is not automatic**, you have to do it manually.)

Wallet apps like **Jaxx and Exodus won't send LTC to a P2SH address**, you will need to get an L-address too if you are moving Litecoin from there.
