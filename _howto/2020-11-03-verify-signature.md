---
layout:       at-trading
title:        "How to sign a message or verify a signature in a bitcoin wallet"
description:  "This is the one thing where you might actually need the Electrum wallet. Ledger wallet no longer supports message signing."
note:         "Tech"
date:         2020-11-03 03:42:00 +0700
slug:         sign-verify-message/

guide:        true
pinned:       false
promoting:    exchanges

categories: [ technical ]
tags: [ p2sh-wallet, bitcoin-wallet, crypto-opsec, altcoin-wallet, cryptocurrency-wallet, electrum, trezor, billfodl ]

image:
- "https://res.cloudinary.com/atnetcloud/image/upload/v1604394597/atnet/pexels-maria-tyutina-1603933_kbejzt.jpg"
- "https://res.cloudinary.com/atnetcloud/image/upload/c_lfill,g_west,h_360,w_700/v1604394376/atnet/_how-to/sign1_mze3qr.jpg"
- "https://res.cloudinary.com/atnetcloud/image/upload/c_lfill,g_west,h_360,w_700/v1604394385/atnet/_how-to/sign2a_rzb79r.jpg"

related:
- {"How to verify you downloaded a genuine crypto wallet, and not a malicious imposter?": "/howto/verify-signature/"}
- {"How to safely move Litecoin between SegWit P2SH (3) addresses and legacy (L) addresses": "/howto/move-ltc-p2sh/"}

---

You know what they say: Not your keys, not your bitcoin.

Conversely - if you can prove you own the keys, for all intents and purposes that also says you own the crypto.

**This verification is typically needed when you lose access to an exchange account where you were not KYC'd.**

### Message Signature as a proof

For obvious reasons, you cannot show the private key to anyone.

Showing it would prove your ownership, but at the same time it would make you lose said ownership.

One of the established ways to prove the ownership of a private key is to sign a message with it. To sign a message you only work with the public address associated with your private keys, but you need to do it from the wallet that holds it.

That requires your physical access to your wallet device or laptop, and a password that decrypts the wallet and lets you use it.

### Crypto wallets that let you sign a message

Message signing has become an advanced function. Most new crypto wallets that are user friendly do not support it.

* **Trezor**: SUPPORTS MESSAGE SIGNING
  - [Trezor wallet's](/blackfriday/#live-billfodl) Chrome extension lets you sign a message with an address belonging to your wallet.
* **Ledger**: NO SUPPORT
  - Ledger wallet did support message signature and verification in its old web interface. The web UI us now deprecated. Ledger Live does NOT support message signing.
* **Electrum**: SUPPORTS MESSAGE SIGNING
  - [Electrum supports message signatures](/glossary/electrum/) for all address formats: legacy, P2SH segwit and bech32 native segwit. However, a lot of crypto software that deals with message verifications will not validate bech32 signatures - The format is too new.

### Your wallet does not support message signatures?

If you have access to your wallet's seed phrase, use it to load your wallet into Electrum.

**Here's how to do it:**

* Open the Electrum wallet and in the File menu, select "New/Restore"
* Select "Standard wallet"
* Select "Already have a seed"

If you need to verify ownership of a Legacy address starting with `1`:
* Type in your seed phrase
* Choose legacy

If you need to verify ownership of a P2SH Segwit address starting with `3`:

* Type in your seed phrase and click "Options"
* Select BIP39 (ignore any warnings)
* Select derivation path "p2sh-segwit"

If you need to verify ownership of a native Segwit address starting with `bc1`:
* Type in your seed phrase
* Choose segwit


### What if you still cannot sign a message?

This can happen. Especially if you use native segwit address.

To prove your ownership, the exchange (or whoever asks) can require you to move an arbitrary (but pre-defined) amount of crypto from the address in question to any other address in your wallet.

You are sending money to yourself, so there is no loss (other than transaction fee). Signature is still obviously the preferred method.

### How to Sign a Message in Electrum

{% amp700cloud page.image[1] %}

1. Open the Electrum wallet. If you have multiple wallets, you need to go to the one which has the address you are verifying.
2. Go to addresses and find the address you need to use.
3. Right-click the address and choose "Sign/Verify Message"
4. Copypaste the message to sign into its box and click "Sign". You will be asked for the wallet password.
5. The signature string is in the bottom box.

{% amp700cloud page.image[2] %}


### How to Verify a Message in Electrum


1. Open the Electrum wallet. If you have multiple wallets, you need to go to the one which has the address you are verifying.
2. Go to addresses and find the address you need to use.
3. Right-click the address and choose "Sign/Verify Message"
4. Copypaste the message to sign into its box.
5. Copypaste the signature into its box and click "Verify".
