---
layout: at-trading
date: 2017-03-23 03:20
title: "How to setup Monero core wallet (for dummies)"
description: "Monero CLI wallet is the only reasonable and well tested option we have to store larger amount of XMR although the new beta graphical wallet (GUI) is out too. Finally something user-friendly. "
categories:
- "wallets"
permalink: monero-wallet-dummies/
image:
- "/img/xmr/monero-cli-1.jpg"
- "/img/xmr/monero-cli-2.png"
- "/img/xmr/monero-cli-3.jpg"
- "/img/xmr/monero-gui-1.png"
- "/img/xmr/monero-gui-2.png"
- "/img/xmr/monero-gui-3.png"
- "/img/xmr/monero-gui-4.png"
image_alt:
- "Monero CLI wallet is the only reasonable and well tested option to store larger amount of XMR. A graphical wallet (GUI) is out too and working though. It's probably safe but it is beta and it's always safer to wait some time with new releases to get them tested."

update: 2017-03-23 03:20

comments: true
stories: false

published: true

---

{% amp700 border {{page.image[0]}} {{page.image_alt[0]}} %}

_Image: {{page.image_alt[0]}}_

________________________


{{ site.ads.aads728 }}

If you hold a sizable amount of Monero and [mymonero.com](https://mymonero.com) is not an option for security reasons (which it shouldn't if you have a large stash) you'll have to get the Monero's core client.

That means downloading the full blockchain and creating a seed for your XMR wallet.

The setup is not difficult, especially now that there is a GUI option for those who are not comfortable with command line clients. However, you should consider the size of the Monero blockchain: it is around 10 GB now so you'll use a lot of data. And even though it's not really a big issue for most people these days, the blockchain also grows so make sure you have enough space on your hard drive. [This thread](https://forum.getmonero.org/20/general-discussion/315/blockchain-size-forecast) on Monero forums says 57 GB blockchain by 2020 is a reasonable estimate so with some commonly retailed 1 TB external HDD you should be well beyond OK even for a very long term storage.

If you want to store a lot of XMR you should go for the CLI wallet. A [Stack Overflow thread here](http://monero.stackexchange.com/questions/3237/is-the-gui-safe-for-storing-thousands-of-monero) explains this code of good practice: The GUI wallet works with the same deamon as the CLI wallet, it is just a wrapper. The GUI shouldn't be less secure than the CLI - but you just don't know. The CLI client has been used since Monero's inception, it is thoroughly tested by real users. The GUI wallet is new. Leave it some time.

#### Monero CLI Wallet

You can download Monero Core for your OS [here](https://getmonero.org/downloads/).

{% amp700 border {{page.image[0]}} {{page.image_alt[0]}} %}

If you're a real human the only two scripts you'll use are `monerod` and `monero-wallet-cli`. In a console app (like iTerm on Mac) simply navigate into the extracted file you downloaded from the link above and run `./monerod`.

MoneroD means Monero deamon, it will start downloading the blockchain. This will take a few hours. You should see random gibberish of this kind until the blockchain is fully synced:

{% amp700 border {{page.image[1]}} {{page.image_alt[0]}} %}

When it's done it'll tell you SYNCHRONIZED OK. At this point you can generate the monero CLI wallet, run `./monero-wallet-cli`.

{% amp700 border {{page.image[2]}} {{page.image_alt[0]}} %}

The client will ask for a name of the wallet and a password. It will generate your address and seed for you so copy the address and write the seed on paper. You should have the monero deamon running.

Now, right now and until you `exit` this process you are in the CLI wallet interface. You only need to know the following:

* To check your balance, type `refresh`.
* To send Monero, type `transfer [address] [amount]`.
* To leave the CLI wallet, type `save`, wait for response and then type `exit`.

{{ site.ads.aads728 }}


#### Monero GUI Wallet

You can download the beta release of Monero GUI wallet [here](https://getmonero.org/2016/12/22/monero-core-gui-beta-released.html).

{% amp700 border {{page.image[3]}} {{page.image_alt[0]}} %}

{% amp700 border {{page.image[4]}} {{page.image_alt[0]}} %}

_Image: Allowing an app from outside of the App Store in system preferences is as much challenge as you'll be facing with the XMR GUI wallet_

The GUI is much easier to work with, especially if you have worked with BTC wallets like Electrum before. You simply download your distribution from the link above, extract the file and if you're on Mac, move the app into Applications. Once you launch the GUI it guides you through the wallet creation and starts synchronizing the blockchain automatically.

{% amp700 border {{page.image[5]}} {{page.image_alt[0]}} %}

If you're just creating a new wallet go with the default localhost:18081 and write down your seed and password on paper. Your wallet files will be in home/Monero/wallets.

{% amp700 border {{page.image[6]}} {{page.image_alt[0]}} %}

With a wallet at the ready you get into this view which is the actual GUI client. The wallet will start downloading the blockchain by itself. All you do from here is wait, and wait, and wait.

#### Further reading

* [Learn more about Monero cryptocurrency](http://weuse.cash/monero/) - how it works
* [Monero tutorials](https://www.monero.how/) - how to create paper wallet for Monero cold storage and other useful things.
