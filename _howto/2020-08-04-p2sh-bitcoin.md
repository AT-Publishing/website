---
guide:        true
pinned:       false
cloud:        true
promoting:    payments-services
note:         "p2p/dex bitcoin"

layout:       at-trading
title:        "How to generate P2SH addresses in Bitcoin Electrum wallet"
description:  "Some dApps and non-custodial exchanges will only let you withdraw Bitcoin to P2SH addresses, here's how to generate yours from your seedphrase."

slug:           generate-bitcoin-p2sh-address/
categories:     [technical]
date:           2020-08-04 00:22:00 +0700

image:
- "https://res.cloudinary.com/atnetcloud/image/upload/v1596530762/atnet/_how-to/pexels-negative-space-169573_sxippd.jpg"
- "https://res.cloudinary.com/atnetcloud/image/upload/c_lpad,g_center,h_360,w_700/v1596530693/atnet/_how-to/generate-p2sh-btc-1_kkrima.png"
- "https://res.cloudinary.com/atnetcloud/image/upload/c_lpad,g_center,h_360,w_700/v1596530695/atnet/_how-to/generate-p2sh-btc-2_cnfxye.png"
- "https://res.cloudinary.com/atnetcloud/image/upload/c_lpad,g_center,h_360,w_700/v1596530694/atnet/_how-to/generate-p2sh-btc-3_gsxbuw.png"

about:
 name: "bitcoin p2sh"
mentions:
 name: "cryptocurrency wallet"
 sameas: ["https://www.altcointrading.net/altcoin-wallets/"]

author: https://altcointrading.net
author_name: AltcoinTradingNET
author_twitter: "altcointrading_"

#featured_series: [ScriptSpotlight]

related:
- {"Altcoin Wallets: Where to store altcoins in 2020?": "/altcoin-wallets/"}
- {"How To Use A Bitcoin ATM": "/howto/use-bitcoin-atm/"}
- {"How to safely move Litecoins between SegWit (P2SH) and legacy addresses": "/moving-ltc-p2sh/"}

---

<strong>This is a tutorial to help you generate P2SH bitcoin addresses to withdraw bitcoin from non-custodial apps like <a rel="nofollow" href="https://localcryptos.com/r/bocmask">LocalCryptos</a>.</strong>

If you are a P2P or DEX crypto trader, you probably know that to receive BTC from a decentralized app, you need to use a SegWit bitcoin address.

### Segwit addresses are not all the same

You can easily get a SegWit bitcoin wallet on your phone with the [Exodus](https://exodus.io) app, on your laptop with [Electrum](https.electrum.org) if you are old-school or on any device with [Ledger wallet](http://bit.ly/at-ledger-codes2020).

However, in 2020, any regularly updated bitcoin wallet app will prefer bech32 addresses. Bech32 addresses start with `bc1`.

The problem is that some non-custodial exchanges will only let you withdraw into a bitcoin address that starts with `3`. Bitcoin SegWit addresses starting with `3` are called P2SH addresses (pay-to-script-hash).

### Electrum lets you generate P2SH address set from bitcoin seed

Good news is you can generate a set of P2SH bitcoin addresses from your seedphrase in Electrum wallet. It is easy to do, but you need to know how to do it - the Electrum wallet provides no walkthrough for it.

If you worry about messing up your wallet, generate a new seedphrase first. It will work just the same.

### Step-by-step: Generate P2SH addresses in Bitcoin Electrum

This method works on a laptop with any operating system. The steps are always the same.

Before you start typing your seed anywhere, check with `https://electrum.org/#download` that you have the latest version of the wallet.

#### Step 1: Get your seedphrase, or generate a new one.

If you don't want to work with the seedphrase of a wallet you are currently using, that's fine. Just start creating a new wallet up to the step where you get the seedphrase.

Write the seed down and close the Electrum dialog where you were creating the new wallet.

{% amp700cloud page.image[1] %}


#### Step 2: Start a wallet restoration process.

Open the Electrum wallet and in the File menu, select "New/Restore".

Select you want "Standard wallet" and in the next step that you "Already have a seed".

#### Step 3: Type down your seedphrase and go to the advanced options.

Below the box into which you have to type in your seedphrase, you should see a button for extra "Options". Click that, select bip39 and ignore the warning that will be generated for you then.

{% amp700cloud page.image[2] %}


#### Step 4: Select derivation path "p2sh-segwit".

The derivation path of "p2sh-segwit" should be one of the options after typing in the seed. You can double check the derivation string below the options. It should contain the number 49 because your selection is based on BIP49. Don't change anything in there.

#### Step 5: Create the wallet.

Your wallet should now be ready to use. Check your addresses to see that they all start with a `3`.

{% amp700cloud page.image[3] %}
