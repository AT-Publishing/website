---
layout: forestry
german: false
published: true
comments: true
stories: false
genres: false
tickers: false

note: 'PSA'

author: https://reddit.com/u/KarlVonBahnhof
author_name: KarlVonBahnhof
title: 'How to safely move litecoins after recent network upgrades'
date: 2017-09-01 00:18:00 +0200
description: "Litecoin got new P2SH which most exchanges and mainstream wallets don't support yet."
permalink: "/moving-ltc-p2sh"
image:
- "/img/coins/ltc.png"
image_alt:
- How to move litecoins between exchanges
categories:
- wallets
- altcoins
- ltc
update: 2017-09-04 10:09:00 +0200
chart: []
tags: ["litecoin segwit", "segwit", "ltc", "p2sh"]
identifier:
- ltcaddresses
---

Litecoin recently upgraded their network to get SegWit support and to enable the possibility of atomic swaps with BTC. Trezor wallet upgraded their wallets accordingly but most exchanges haven't followed yet. Consequently, people have been having withdrawal issues recently and as customer support is nonexistent ([at least for plebs - traders who are not ultra high net worth](https://www.reddit.com/r/BitcoinMarkets/comments/6xjp5f/even_corporate_accounts_cant_withdraw_real_money/dmgwmzp/)), you don't get to know what to do because the money coming from your trading fees obviously doesn't matter.

Here's how to move litecoins around without losing them.

#### Getting Litecoin from Exchange to Trezor

> P2SH stands for “Pay to script hash”. Segregated Witness accounts and multisig accounts use these addresses.

After the litecoin network upgrade [Trezor enabled LTC SegWit addresses](https://blog.trezor.io/litecoins-new-p2sh-segwit-addresses-843633e3e707). These are different from the old Litecoin addresses - the legacy ones start with L, the new ones with M or 3. When you try to withdraw to an M-address though, the exchange interface will mostly tell you it's not a valid Litecoin address.

Trezor offers an advice - you can [convert the M-address into a 3-address](https://litecoin-project.github.io/p2sh-convert/), which is equivalent. That's not the ideal way though - some platforms mess this up:

> Sending litecoins to your TREZOR? M-address refused? Use a 3-address. Please use the [converter here](https://litecoin-project.github.io/p2sh-convert/) to translate between them.

> Warning for Uphold.com Customers! Do not send litecoins from Uphold.com to a 3–address generated in this way. Uphold will not send any litecoins to a 3-address. Instead, they will send you bitcoins, which you will not be able to spend!

The solution is to send the LTC to your legacy account in your Trezor wallet. If this is the first time you are using Trezor you can still generate a new legacy account and get an L-address.

Once your LTC is transferred and confirmed you can send the LTC from the legacy account into the new one. **This is not automatic**, you have to do it manually. It's a normal transaction, same as you are used to.

{{ site.ads.trezor }}

&nbsp;

#### Jaxx Wallet: The Same Issue as Exchanges

Jaxx LTC wallet won't send LTC to a P2SH address, the send button will remain greyed out. You will need to generate an L-address too if you are moving litecoin from Jaxx.

#### Ledger Wallet and LTC SegWit

The situation with Ledger is similar to Trezor. If you are generating new wallet you can [choose whether you want legacy or SegWit](https://www.reddit.com/r/ledgerwallet/comments/6wdegr/ledger_s_nano_and_segwit_activation/) - "Choose your address type". You will eventually need to move your coins to SegWit address but it is not necessary yet, so [if you are just withdrawing from an exchange, get a legacy address](https://blog.ledger.co/ledger-releases-segregated-witness-support-f1712f69e99c). If you only have a SegWit address on Ledger wallet, you can create a new account and choose that you want legacy address type. As with Trezor, you can move your LTC between legacy and SegWit account as normal transactions.
