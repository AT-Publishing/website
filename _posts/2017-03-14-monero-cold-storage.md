---
layout: at-trading
date: 2017-03-15 01:20
title: "Monero Cold Storage: 2017 Situation"
description: "After years of promises about Monero hardware wallet implementations in 2018 we are finally getting ... Ledger wallet in beta. Let's not get out hopes up."

categories: ["reports"]

tags: ["monero", "cold-storage", "hardware-wallets", "monero-ledger", "monero-trezor"]

permalink: monero-cold-storage/
cz: false


image:
- "/editorial/tagged/goodbye.png"
- "/img/xmr/monero-ledger.jpg"
- "/img/wallets/jaxx.png"
image_alt:
- "The crowd has been demanding a Monero HW wallet for about two years now but there still isn't a convenient cold storage for XMR in 2018."

comments: false

about:
 name: "monero wallet cold storage"
 sameas: ["https://moneroinfo.org/eng-store-and-protect/", "https://monero.stackexchange.com/questions/tagged/cold-storage"]

stories: false
note: 'User Guide'

author: "news@altcointrading.net"
author_name: GenericShill

related:
 - {"Cakewallet - First ever iOS wallet for Monero": "/cakewallet"}
 - {"Monero Light Wallets Overview (Finally some progress)": "/monero-wallet/"}

---


**2018 Updates regarding Monero cold storage**

After the [Ledger CTO said they will implement Monero but within an unclear time frame](https://www.altcointrading.net/ledger-monero), Monero actually included first Ledger wallet support in their [Lithium Luna release](https://getmonero.org/2018/03/29/monero-0.12.0.0-released.html). Trezor started [advertising Monero support for their model Trezor T](https://www.reddit.com/r/Monero/comments/8pika5/monero_support_on_new_trezor_model_t/) in June 2018 before the actual is implemented.


**2018 Updates regarding Monero hot wallets**

* For hot wallets, there is a new [iOS app - Cakewallet for Monero](/cakewallet)
* Coinomi is [nearly done with their Monero integration](https://twitter.com/kimionis/status/954112970338029570) (web, iOS, Android)

*Original 2017 article continues below.*

<hr>


Since early 2017 there were rumors about various wallet providers finally integrating Monero - desktop wallets, light clients, hardware wallets. Turns out we got all of this for DASH, also for ETH, in some cases for ZEC, DAO, REP...Not for XMR though.

It got to the point that such a feature would shake up the market of hardware wallet providers - even if it were a standalone Monero-only wallet, **[people would buy it](https://www.reddit.com/r/Monero/comments/5lf9ns/is_there_any_update_on_monero_support_for_the/)**.

That's an obvious opportunity, so what is the problem?

{{ site.mailchimp }}

It is a technical one. There is a lot of open sourced code to handle Bitcoin and today's most popular altcoins all use some of Bitcoin's basics. For most altcoins you would always tweak some code that has already been used for BTC - it makes the process a whole lot easier.

Monero's blockchain is unique which is great for the transaction privacy but not so good for wallet implementation. Monero was built from scratch and none of the BTC codebase can be reused. The whole system has to be developed again, specifically for Monero.

Apparently this will be a chance for someone new to enter the market because the winners of today don't have enough people (nor pressing need for the profit and glory) to be bothered with Monero.

#### The only complete Monero cold wallet solution

To this day, the only available cold storage solution for Monero is **paper wallet**. Monero uses word-based seeds as Bitcoin, when you are setting up a wallet you can write those down on a piece of paper and store it in a fire-proof safety deposit box. If you are well versed in computer security and encryption you can encrypt a text file and then back it up on several locations, this way you are less likely to lose your Monero seed.

There are various [printable templates for the paper wallet](https://www.monero.how/monero-paper-wallet-offline-cold-storage) available online. It is recommended not to print the seed because it could remain saved in the printers memory. Print only the Monero paper wallet template and write down your seed with a pencil.

To generate the seed you should always use the **official Monero GUI or CLI** client from [getmonero.com](https://getmonero.org/downloads/) (verify the integrity!) on a [dedicated computer](/security/device-management). There is a [way to use the GUI without downloading the whole blockchain](https://getmonero.org/resources/user-guides/remote_node_gui.html). It works is a similar way as Electrum wallet for Bitcoin.

If you have a good Linux machine available that you only use for crypto storage, and you also have good connection to the internet without data limitations you can always run your own full node which is more convenient for moving XMR around. [Here are some tips on how to keep the full Monero wallet secure](https://monero.stackexchange.com/questions/7330/best-practices-to-keep-monero-wallet-secure).

#### Ledger Nano - ,,First push request for a code review has been done."

{% amp700 border {{page.image[1]}} "ledger monero" %}

For about a year the Monero community [spammed this public Trello board of Ledger Wallet](https://trello.com/c/wsK0myEm/52-monero-support) with requests for XMR support and for a time it looked quite promising. However, u/btchip from Ledger cleared it up later in 2017:

> It's not yet started - a few other things to work on first. We have no ETA but have the right communication channels open to move quickly once we go. [via r/ledgerwallet](https://www.reddit.com/r/Monero/comments/5lf9ns/is_there_any_update_on_monero_support_for_the/dbvmfo0/)

Eventually, Monero got to the Ledger Wallet's roadmap and [in late 2017 the integration finally started](https://www.reddit.com/r/Monero/comments/6y2kcf/ledger_hardware_wallet_monero_integration_started/).

The [last update from January 2018](https://www.reddit.com/r/Monero/comments/7pfj0z/ledger_hardware_wallet_monero_integration_some/) suggests the integration is almost complete and Ledger is moving on to code review and PR. It looks like we will have Monero support in Ledger this year.

#### Trezor - Project Stalled

<p>
{{ site.ads.trezorlong }}
</p>

Trezor by SatoshiLabs was supposed to get Monero supported by their hardware wallet, [someone unrelated worked on the project before](https://forum.getmonero.org/4/academic-and-technical/2495/experimental-trezor-firmware-testing) and there are a few brave ones who hacked up their Trezors to get a working hardware wallet for Monero punk-style.

The developer kept up new (experimental) releases up until December 2016 when the links to his Github repo went defunct. Alarmed Monero users started inquiring and [here is his explanation on Reddit](https://www.reddit.com/r/TREZOR/comments/5ezhly/monero_with_trezor/) - in short, the experimental Trezor firmware became obsolete before it stopped being experimental.

There already was a [project to add Trezor support for Monero](https://forum.getmonero.org/9/work-in-progress/265/adding-monero-support-for-trezor?page=&noscroll=1#post-1520) (even successfully funded!) in 2015 but it is marked as **"Completed  -  Failed promises and broken dreams"**.

#### Keepkey - No Plans

The Trezor spin-off never seriously planned to implement Monero:

> We are considering it, but it is not on the roadmap at the moment. [ via r/keepkey](https://www.reddit.com/r/keepkey/comments/5m58vv/monero_support/dc1fkzx/)

#### Light Wallets for Monero

In the meantime there has been a lot of progress in terms of smartphone apps for Monero. They are all third-party and there have been some fraudulent apps, too - [see the article on Monero light clients](/monero-wallet/).
