---
layout: blog
title: "Monero - Where the heck are you supposed to cold-store it?"
description: "One of the most mature altcoins. How to hold it though?"
category: "trading"
permalink: monero-wallet/
image:
- "/img/monero-logo.jpg"
- "/img/wallets/xmr-lightwallet.png"
- "/img/wallets/mymonero.png"
image_alt:
- "XMR wallet"
update: 2017-01-03
---

{% amp700 border {{page.image[0]}} {{page.image_alt[0]}} %}

_Image: {{page.image_alt[0]}}_

________________________


Monero is undoubtedly one of the altcoins that cannot be called shitcoin: private and untracable, developers are responsive and not assholes just collecting money, setup is trustless, market cap grew insanely in 2016. Yet if you want to trade the coin the only hassle free way seems to be the dodgy setup of money on the exchange. Since the Bitfinex hack in August 2016 it has been a popular topic to joke whether thenext in line is Kraken or Poloniex.

Either way, if you trade Monero short term on spot or with leverage you can always cashout Bitcoin and store it in your Electrum or Mycelium wallet.

What if you want to invest in Monero long term? You should not leave the coin on an exchange and forget about it for a couple of months.


{{ site.ads.aads728 }}


#### Lightweight client like Electrum for Monero...Eh?

<blockquote class="reddit-card" data-card-created="1483411736"><a href="https://www.reddit.com/r/Monero/comments/4ghl0z/will_there_ever_be_a_lightweight_wallet_like/?ref=share&ref_source=embed">Will there ever be a lightweight wallet (like Electrum) for Monero?</a> from <a href="http://www.reddit.com/r/Monero">Monero</a></blockquote>
<script async src="//embed.redditmedia.com/widgets/platform.js" charset="UTF-8"></script>

Every cryptotrader knows Electrum. It's the lightweight wallet that is easy to use and doesn't need you to download the full blockchain. There are integrations - Electrum for Litecoin and Dash ([see here](/altcoin-wallets/)). Unfortunately, nothing like this for Monero.

The only alternative for Monero is software called LightWallet. It is not the same system as Electrum - it needs full node, the *light* part is that the node runs somewhere else and the wallet connects to it from outside.

In other words someone runs the node for you and will let your wallet to use it.

<div class="reddit-embed" data-embed-media="www.redditmedia.com" data-embed-parent="false" data-embed-live="true" data-embed-uuid="61d47572-8d5f-448b-92bd-3ae43bd693f4" data-embed-created="2017-01-03T02:49:16.915Z"><a href="https://www.reddit.com/r/Monero/comments/4ghl0z/will_there_ever_be_a_lightweight_wallet_like/d2hnur8/">Comment</a> from discussion <a href="https://www.reddit.com/r/Monero/comments/4ghl0z/will_there_ever_be_a_lightweight_wallet_like/">Will there ever be a lightweight wallet (like Electrum) for Monero?</a>.</div><script async src="https://www.redditstatic.com/comment-embed.js"></script>

**[Lightweight wallet](https://bitcointalk.org/index.php?topic=903579.0), [Releases on Github - exe for Windows and jar for Linux/Android/anything with java](https://github.com/jwinterm/LightWallet2/releases)**

You need to have simplewallet and necessary dlls in the same folder as LightWallet to run the program - you will get these on the official download page at [getmonero.com](https://getmonero.org/downloads/). Or, you know, [read the docs yourself](https://github.com/jwinterm/LightWallet2) actually.

{% amp700 border {{page.image[1]}} {{page.image_alt[0]}} %}

This client is your best bet if you want GUI and don't want to store your coins with some third party web service.


#### Full Node

**[getmonero.com](https://getmonero.org/downloads/)**

Of course, if you don't mind running the full node, there is a command-line wallet that comes with it. No GUI though - you need to use the command line.



#### Web Client

**[mymonero.com](https://mymonero.com/#/)**

This is something that is actually endorsed on the getmonero.com website unlike the LightWallet. MyMonero is website that will get you a Monero address, sign up pretty much takes one click. You click the one and only button on the landing page and in thenext step it is already showing you your private login key:

> *Below this you will find your thirteen word "Private Login Key". Keeping this secure and private is very important, as it is the only way that you will be able to login to your MyMonero account. As we don't store your private login key on the server there is no way to recover it if it is lost!*


The next step is already your web wallet, it doesn't even want your email address:

{% amp700 border {{page.image[2]}} {{page.image_alt[0]}} %}

Pretty impressive.

If you don't want to use MyMonero for some reason, there are also multi-altcoin web wallets like {% aff Cryptonator https://www.cryptonator.com/about %} but in this case I'd follow the XMR devs endorsement.

### Hardware Wallets

If you are a serious believer it would of course be ideal to have proper cold storage. However the present situation is still bleak.

#### Trezor hardware wallet and Monero

Developer [NoodleDoodle started thread on the official Monero forum](https://forum.getmonero.org/4/academic-and-technical/2495/experimental-trezor-firmware-testing) documenting that he's working on Trezor firmware that would support XMR. He kept the thread updated with new (experimental) releases up until December 2016 when the links to his Github repo went defunct. Alarmed Monero users started inquiring and [here](https://www.reddit.com/r/TREZOR/comments/5ezhly/monero_with_trezor/) is the response that was posted on Reddit:

> NoodleDoodle's experimental binaries are available [here](https://forum.getmonero.org/4/academic-and-technical/2495/experimental-trezor-firmware-testing), while his source code is no longer posted at github, but source code forks are referenced [here](https://www.reddit.com/r/Monero/comments/5dnhgv/does_anyone_have_a_linkcopy_to_noodledoodles/).
**The experimental V0313 simplewallet client supports the --hardware-wallet flag, i.e. ./simplewallet --hardware-wallet 0. This simplewallet command will cease to function about this time next year when implementation of CT functionality becomes mandatory.** This point about CT forced me to examine how well the experimental code supports wallet recovery from 25 Electrum mnemonic seed words synthesized from the 24 BIP 39 mnemonic seed words - used to typically restore a Trezor hardware wallet. No use in using a Trezor with an experimental Monero capability unless there is a "reliable" means to perform a software wallet restore when Monero CT becomes mandatory.

> I was unsuccessful carrying out the 25 Electrum seed word recovery unless the Trezor V0313 firmware was used with with no Trezor password (a plausible deniability rubber-hose password) that can complement the a Trezor's connection PIN. For example, within the V0313 binary distributions there is a C++ ./trezorctl command, which is different from https://github.com/trezor/python-trezor/blob/master/trezorctl. Try a V0313
% ./trezorctl recover_mnemonic 0 "" English explain olympic caught soccer ethics retire outdoor giant deposit legal quarter cupboard radar silent palm ecology scrap adapt install bone warm clog fantasy language
Private key: f7a5feeec0bf87c4124c158d298388f3adf0009ad35cdbfcde4888a95ba8d200 Wallet address: 49y97TqN1yyHMPmHPWFt7aHkF9zpLdGV51Lsx8j7tEDuHw7kALtQVoWTyitz5qhcwADnPsg7fFKZs5XynjzDuTm134tRyyv Mnemonic: exult toenail snug dotted germs begun dual lettuce alpine enlist patio nutshell upon cuddled shocking gumball upgrade unfit glide camp sovereign neither smash snake lettuce

> For the 24 word BIP 39 seed test vector above, I could only get a blank password (the empty quotes after the integer 0) to be used to reconstitute a Monero wallet that didn't involve the Trezor hardware device using either simplewallet or monero-wallet-cli using the bolded mnemonic with the --restore-deterministic-wallet argument.
IMO, the Monero Trezor wallet capability is at a standstill unless some serious software development talent steps up to the plate an takes over were NoodleDoodle left off, or NoodleDoodle is incentivized to get the ball rolling again so hardware wallet vendors can perform tighter integrations with their existing frameworks.

> If memory serves me from postings, **NoodleDoodle is more interested with trying to integrate Monero with Ledger or Keepkey hardware implementations 1st** before pressing forward with any other Trezor integrations.

> Another point worth noting is the **current Monero Trezor implementation is not consistent with recommended BIP 32/39/44 test vector results** posted here that properly mimics Trezor password behaviors. Additionally, bitcoin-explorer (bx) commands also faithfully mimic Jaxx private/public keys and address synthesis abilities for a number of other altcoins. (Worth noting Jaxx doesn't currently support BIP 39 passwords.)

> As another example, using the same BIP 39 seed words above, and a rubber-hose password of 1234, here the results relevant to m/44/128/0 which IMO should correspond to ./simplewallet --hardware-wallet 0 to simplify integration with existing hardware wallets in general:
% echo "explain olympic caught soccer ethics retire outdoor giant deposit legal quarter cupboard radar silent palm ecology scrap adapt install bone warm clog fantasy language" | bx mnemonic-to-seed -p "1234" | bx hd-new | bx hd-private -d -i 44 | bx hd-private -d -i 128 | bx hd-private -d -i 0 | bx hd-to-ec | ./xmr
Seed : 0c0660372103343dc2c68cfd9cec0c4105b8c16d79b3fee2f9108162876e4a1f Private Spend Key : 1f326ada06a021e5eb29955abef22d2c05b8c16d79b3fee2f9108162876e4a0f Private View Key : beb076f8fa3e0c4508a111c683e85bde8776886d5654f15fede38b4f34c21b04 Public Spend Key : 932ab0238a1091443b1374f7d078ee4fc5a7797f9f1b1aaad54cda388a1e397a Public View Key : 8f6efc5e1187ea49ec2969fbdd4416d06d739ea0b2ef0aa2c394eeb04820c609 Monero Address : 47Ca9Q9pMEQCQvazCgp1oTELtaAHGB2CyVaJAzHZQbvQMVzKgU2FEdFDN9B3TeNChbbs1Ur8bnCdFUE1r7zpKc7X26Quv91 Electrum Seed Words : aspire argue upwards bias berries zero eldest anybody illness voyage fizzle laboratory sewage emit powder foyer sanity oyster vitals afloat igloo gleeful heels ivory oyster

> FYSA - Monero kicked my butt for a while to determine how to write the ./xmr command above in C++.

In other words, the experimental Trezor firmware became obsolete before it stopped being experimental.

There already was a [project to add Trezor support for Monero](https://forum.getmonero.org/9/work-in-progress/265/adding-monero-support-for-trezor?page=&noscroll=1#post-1520) (even successfully funded!) in 2015 but it is marked as **"Completed  -  Failed promises and broken dreams"**.


{{ site.ads.trezor }}


______________________

#### Ledger the hardware wallet and Monero

> The Ledger Wallet already supports altcoins as long as they support BIP39 and BIP 32. However, a client application (the software wallet) is needed to communicate with the chip. Fork the Ledger Chrome app (https://github.com/LedgerHQ/ledger-wallet-chrome) and build support for the altcoin.

[Source](http://support.ledgerwallet.com/knowledge_base/topics/are-altcoin-supported-by-ledger-hardware-wallets)

{{ site.ads.ledger }}

______________________


So, the problem is that as Monero keeps evolving the codebase is not stable enough to think about hardware implementations. The code gets obsolete before there is chance to properly test it.

Hopefully, there will at least be a native GUI soon™.


{{ site.ads.aads728 }}
