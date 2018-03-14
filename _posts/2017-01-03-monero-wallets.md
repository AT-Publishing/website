---
layout: forestry
title: "Monero Wallets in 2018: Finally Some Progress in Light Wallets"
description: "Updated with overview of Monero smartphone wallets and a way to run the official GUI without your own full node."

update: 2017-01-22
comments: true
identifier: 'monerowallet0218'

categories: ["wallets", "altcoins"]
tags: [   "monero", "monero-wallets","cryptocurrencies", "hot-wallets"]

permalink: monero-wallet/
german: false
cz: false

image:
- "/editorial/tagged/monero-remote-node.png"
- "/img/monero-logo.jpg"
- "/img/wallets/mymonero.png"
image_alt:
- "Monero GUI wallet can be connected to a remote node if you cannot sync the whole blockchain."

about:
 name: "best monero wallet"
 sameas: ["https://themerkle.com/top-3-monero-wallet-solutions/", "https://blockonomi.com/monero-guide/"]

stories: false
note: 'User Guide'

author: "news@altcointrading.net"
author_name: GenericShill

related:
 - {"Cakewallet - First ever iOS wallet for Monero": "/cakewallet"}
 - {"Monero Cold Storage Drama (Update 2018)": "/monero-cold-storage/"}
---

**Current situation with Monero wallet solutions:**

* For hot wallets, there is a new [iOS app - Cakewallet for Monero](/cakewallet) still unverified by community.
* Freewallet for Monero is probably a scam.
* Coinomi is [nearly done with their Monero integration](https://twitter.com/kimionis/status/954112970338029570) (web, iOS, Android).
* [Ledger CTO said they will implement Monero, ETA is to be announced](https://www.altcointrading.net/ledger-monero).

{{ site.ads.binance728 }}

Monero is undoubtedly one of the altcoins that cannot be called shitcoin: [private and untraceable, trustless setup](https://www.monero.how/how-does-monero-privacy-work), developers are responsive and not assholes who are just in for the quick buck, market cap has been growing insanely since 2016. Yet if you wanted to hold Monero for a long time the only hassle-free way was the dodgy setup of money on the exchange. Since the Bitfinex hack in August 2016 people kept casually guessing which crypto platform will get attacked next.

Fortunately, blockchain developers started waking up to Monero storage solutions even though it is a more complex task than wallet solutions for Bitcoin-derived cryptocurrencies.

#### Monero Mobile Wallets

In 2018 we got the first [**iOS app for Monero** - the Cakewallet](/cakewallet) which is a third-party code that has not been tested and verified by Monero developers. It passed the Apple App Store approval and is often recommended in the community but the truth is even if the developer opensources the code, [it cannot be verified that it is indeed the code of the App Store Cakewallet](https://www.reddit.com/r/Monero/comments/7usbhx/psa_no_way_to_verify_github_code_is_app/). Cakewallet therefore cannot be recommended to store large amounts of XMR.

**Android wallet for Monero** has been available on the Play Store since mid 2017. The app is called [Monerujo](https://monerujo.io/), it is a light client where the user holds his own private keys. The [Play store Monerujo page](https://play.google.com/store/apps/details?id=com.m2049r.xmrwallet&hl=en) shows very positive feedback, code was published on [Github](https://github.com/m2049r/xmrwallet). The concerns are similar as with Cakewallet, it is not safe store large amounts of XMR on there.

**Freewallet should be avoided**, the app holds users' private keys and there have been [multiple scam accusations](https://www.reddit.com/r/CryptoCurrency/comments/6gtrmd/freewalletorg_scam_millions_stolen/).

**The recommended setup with mobile Monero wallets:**

* Use a smartphone app to carry small amount of cash that you might need for transactions
* Use the official full Monero client or a cold storage solution to store the bigger part of the stash

[Fluffypony said there are plans for official Android and iOS apps](https://www.reddit.com/r/Monero/comments/7usbhx/psa_no_way_to_verify_github_code_is_app/dtnmxef/), apparently those will be variants of the full GUI client that will connect to a remote node, so the users will not have to go through the trouble of syncing their own nodes.

For now Fluffypony owns and maintains the web interface MyMonero.com where the only user problems were either results of forgotten keys or of phishing. [No other TLD alternatives of MyMonero are legitimate other than dot com](https://www.reddit.com/r/Monero/wiki/avoid).

#### Lightweight client like Electrum for Monero?

Electrum, the famous light crypto wallet, does not support Monero. Not even in its many forked incarnations for alternative cryptocurrencies - [see here](/altcoin-wallets/). Monero runs on an entirely different blockchain that does not have much in common with BTC, Electrum is a no-go.

* [Will there ever be lightweight wallet for Monero?](https://www.reddit.com/r/Monero/comments/4ghl0z/will_there_ever_be_a_lightweight_wallet_like/)

The only alternative for Monero is connecting to a node run by someone else, you only run an interface that connects to that node remotely. There was a software called [LightWallet, no longer maintained since 2016](https://github.com/jwinterm/LightWallet2/releases), but it is also exactly the way the official Monero GUIs work with remote nodes.

> You can use lightWallet which uses a remote node. This is perfectly safe from the perspective that you keep your own private keys and therefore the remote node can not steal your coins, but compromises your privacy in various ways. So does Electrum and other Bitcoin thin clients for that matter (even more than Bitcoin itself).
If you are okay with CLI, simplewallet can also be used with a remote node.
There is no alternative to running your own full node that gives you maximum privacy and security, but there are alternatives. Again this applies to Bitcoin as well. [via r/monero](https://www.reddit.com/r/Monero/comments/4ghl0z/will_there_ever_be_a_lightweight_wallet_like/d2hnur8/)

**Monero GUI with Remote Node**

The official download section on [getmonero.com](https://getmonero.org/downloads/) now has a multitude of clients for Windows, Mac, and flavors of Linux. It is the same GUI client that is used to run a full Monero node, the only difference is you need to [find a remote node](https://moneroworld.com/#nodes) to connect to and then [use custom settings in the Monero wallet GUI](https://getmonero.org/resources/user-guides/remote_node_gui.html).

The official GUI connected to a remote node is the best compromise between security and usability.

#### Full Node

**[getmonero.com](https://getmonero.org/downloads/)**

Of course if you have the hardware and data to run a Monero full node, create a wallet with the GUI or CLI tool on your machine and go through with the local blockchain synchronization. In terms of security, running own Monero node is the best option.

#### MyMonero - Monero Web Wallet

**[mymonero.com](https://mymonero.com/#/)**

MyMonero is something that is actually owned and maintained by Fluffypony, Monero's creator. MyMonero is website that will get you a Monero address, sign up pretty much takes one click. You click the one and only button on the landing page and in thenext step it is already showing you your private login key:

> *Below this you will find your thirteen word "Private Login Key". Keeping this secure and private is very important, as it is the only way that you will be able to login to your MyMonero account. As we don't store your private login key on the server there is no way to recover it if it is lost!*

The next step is already your Monero wallet, it doesn't even want your email address:

{% amp700 border {{page.image[2]}} {{page.image_alt[0]}} %}

Pretty impressive in terms of usability but security-wise running a GUI connected to a remote node is still the lesser of two evils.

### Jaxx Monero Support

The multi-altcoin wallet Jaxx announced they got [Apple's blessing](https://bitcoinmagazine.com/articles/monero-coming-jaxx-wallets-including-ios-with-apple-s-blessing-1476224917/) to include Monero in their iOS app available from Apple store. [Jaxx later cancelled the implementation plans](https://cointelegraph.com/news/jaxx-cancels-monero-integration-cites-difficulties-working-with-community). It is probably not a great loss given the [security issues with Jaxx](/jaxx-vulnerability).


### Hardware wallets

{{ site.ads.trezor }}

There have been years of plans and announcements about hardware wallets intergations of Monero, but the main problem remains: Monero keeps evolving, the code gets obsolete very fast and also, the XMR blockchain is unique so the implementations cannot be reused for other coins. [Read about Monero hardware wallets in this article](/monero-cold-storage/).
