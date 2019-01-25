---
layout: forestry
published: false

title: "Trezor (SatoshiLabs) added DASH wallet and ZCASH wallet"
description: "Trezor now added native support for DASH and ZCASH - and explained what the altcoin needs to get supported (looking at you, Monero)."
categories:
- "wallets"



permalink: trezor-multicoin/
image:
- "/img/wallets/trezor-alena-slush.jpg"
- "/img/wallets/trezor-altcoins1.png"
- "/img/wallets/trezor-altcoins2.png"
image_alt:
- "The new Trezor supports DASH and ZCASH"
update: 2017-03-03
#tags:
#- "popular"
comments: true
stories: true

---

{% amp700 border {{page.image[0]}} {{page.image_alt[0]}} %}

_Image: {{page.image_alt[0]}}_

________________________


{{ site.ads.aads728 }}

> **Trezor the hardware wallet now supports not only Bitcoin but also ZCASH and DASH in its native interface. It is also possible to store ETH and LTC through external wallets.**

[Read the whole post on blog.trezor.io](https://blog.trezor.io/multi-currency-support-bitcoin-dash-and-zcash-in-trezor-wallet-7377d812112a#.lo4zsnogf)

By the end of January 2017 Trezor released an announcement that the hardware wallet will now support DASH and ZCASH in addition to Bitcoin.

It has been already possible to store altcoins in Trezor if you linked the hardware wallet to an Electrum light wallet - or to another supported wallet, like [MyEtherWallet](https://blog.trezor.io/trezor-integration-with-myetherwallet-3e217a652e08#.2g4f3e2h7) for ETH.

Electrum was long ago also forked to support [Litecoin](https://electrum-ltc.org/) and [Dash](https://electrum-dash.org/). The disadvantage for Trezor users however was that one had to manage several separate wallets.

#### DASH and ZCASH right in the native Trezor interface

The new upgraded version of Trezor now allows to manage accounts with different currencies accessible all at once from the web wallet interface. All you have to do is choose the currency from the menu in the left column.

{% amp700 border {{page.image[1]}} {{page.image_alt[0]}} %}

{% amp700 border {{page.image[2]}} {{page.image_alt[0]}} %}

There is a limitation for ZCASH users who want to enjoy the full privacy of Z-addresses though:

> *"As for ZCASH: TREZOR Wallet only supports T-addresses only. This is due to the hardware limitations of the device and the requirements of Z-addresses. We apologize for the inconvenience caused."*

Because of the increased load related to browsing additional blockchains Trezor also upgraded their servers for the release:

> *"We are happy to announce that [server availability] spottiness will no longer be an issue. We have successfully deployed additional Insight/Bitcore servers for multi-currency support to address availability issues on the beta. As we are now using self-hosted servers, the speed of the Wallet should be greatly increased."*

#### Why DASH and ZCASH?

There is a straightforward reason why DASH and ZCASH were chosen rather than for instance [Monero](http://coinmarketcap.com/currencies/monero/) which has much bigger user base than [ZCASH](http://coinmarketcap.com/currencies/zcash/). The Trezor wallet uses **insight/bitcore** to gather information about the blockchain. And while Insight was originally developed for Bitcoin, several other cryptocurrencies forked it to make it work with their own blockchain.

The Insight API project is opensource, you can read its code on [Github](https://github.com/bitpay/insight-api/) - just as you can see [the list of people who forked it on Github](https://github.com/bitpay/insight-api/network/members).

You'll see quite a few coin-y names:

```
dashpay
zcash
vbuterin
shadowproject (shadowcash)
casinocoin
auroracoin
startcoin
litecoin
reddcoin
opalcoin
nanocoin
beavercoin
ai-coin
templecoin
dogeparty
digibyte
decred
...
```

...and others like Blocktrail, Bitgo, Blockexplorer or 21dotco.

Let's hope that in the future there will be more working forks of Insight for altcoins that are actually used and traded beyond the initial pump and dump.


&nbsp;

{{ site.ads.trezor }}

&nbsp;

#### Get Trezor while you can

**...and backorder while you cannot.**

You can get your own Trezor via the {% aff shop.trezor.io online store or on Amazon https://shop.trezor.io?a=fany@tutanota.com %}. Don't forget to check if the package is uncorrupted upon arrival. If it was apparently tampered with, take a picture and ask for a replacement.

As for the altcoins, you can buy, trade and lend ZCASH on {% aff Bitfinex https://www.bitfinex.com/?refcode=5egV78YtlC %} - the link will get you 10% fee discount.
DASH is best available to buy, trade and lend at {% aff Poloniex https://poloniex.com %}.

**More about Trezor:**

<a target="_blank" href="https://www.facebook.com/BitcoinTrezor"><i class="fa fa-facebook"></i> https://www.facebook.com/BitcoinTrezor</a>

<a target="_blank" href="https://twitter.com/bitcointrezor"><i class="fa fa-twitter"></i> https://twitter.com/bitcointrezor</a>

<a target="_blank" href="https://www.reddit.com/r/TREZOR/"><i class="fa fa-reddit"></i> https://www.reddit.com/r/TREZOR/</a>

{{ site.ads.aads728 }}
