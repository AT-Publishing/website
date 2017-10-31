---
published: true
guest: false

date: 2017-10-12 19:12:00 +0700
update: 2017-10-12 19:36:00 +0700

author: https://reddit.com/u/KarlVonBahnhof
author_name: KarlVonBahnhof

comments: false

stories: false
note: 'User Guide'
genres: Blog

layout: forestry
german: false
tickers: false

title: "IOTA Snapshots"
description: "IOTA snapshot is typically the culprit when you check your IOTA wallet and find zero balance. Here's what they are for and how to get rid of that zero balance glitch."

permalink: "/iota-snapshots"
image:
- "/editorial/people1.jpg"

image_alt:
- "There has been some talk about that you need to claim IOTAs else you lose them - it gets a little misinterpreted."
categories:
- basics
- coins
chart: []
tags: ["iota snapshots", "iota", "iota wallet"]
identifier: 'iota10122017'
---

*For a guide to securing your IOTA storage click [here](https://www.altcointrading.net/security/iota).*

If you don't care for the fluff [skip right to the zero-balance fix](#iota-zero-balance-fix).

_________________

First things first - it's a regular fixture on IOTA subreddits to see people panic over their zero balances in the IOTA GUI wallet. Unfortunately one of the first links that come up in Google when you start asking is a link to a Reddit post where someone mentions an excerpt out of context:

> if you don't claim your IOTAs during snapshots, i.e. transfer the tokens from the old database (before the snapshot) to the new one (after the snapshot), you will lose all the IOTAs stored in your seed.

This however comes from an older version of the [IOTA development roadmap](https://blog.iota.org/iota-development-roadmap-74741f37ed01) and was only addressing people who bought in during the crowdsale. They needed to claim their IOTAs before the first snapshot. There is no need to claim IOTAs now.

The snapshots however are a regular thing and so are updates of the IOTA wallet.

If you have the GUI wallet you must have downloaded it from [Github from the latest release](https://github.com/iotaledger/wallet/releases/) section. You downloaded it manually, not with a package manager and not from an app store, which means **you will also have to do updates manually**.

Generally, the first thing you should do if your IOTA wallet starts showing zero balance is to check the release page at [github.com/iotaledger/wallet/releases/](https://github.com/iotaledger/wallet/releases/) and your wallet version. Download and replace your wallet software before proceeding with getting rid of the glitch.

### What are IOTA snapshots

Snapshotting occurs in IOTA from time to time. It is done to prevent the tangle from becoming too big (like Ethereum's - the ETH blockchain has a different solution for this though). During the snapshot all balances are saved - the only time it was different was the very first snapshot where crowdsale investors needed to claim their IOTAs and some other early snapshots.

The network design has since been changed and manual claiming for coins in current seeds is no longer necessary. There is no claim function in the IOTA wallet 2.5.1 but if you have old forgotten IOTAs on an outdated IOTA seed (not one only made of letters and 9s) you might still need to claim them. Do that on the [IOTA Slack](http://slack.iota.org/) or via email to david@iota.org.

You should still follow IOTA development because claiming might be needed in the future if there's a substantial code change. Sadly with IOTA you cannot really buy and hold, having forgotten you bought, but that is not because of the snapshots.

So during the IOTA snapshot balances stay in place - what is destroyed during the snapshot are the transaction data. The history is removed, it starts from scratch again, but balances stay where they were before the snapshot.

The only complication from a user point of view is that their wallet's addresses start from fresh too - like they never have been attached to tangle. The tangle can't see them until you attach the addresses back to it.  

So finally for the fix.

<div id="iota-zero-balance-fix"></div>

### How to fix IOTA wallet zero balance issue

1. Make sure you have the [latest version of the IOTA wallet](https://github.com/iotaledger/wallet/releases/).
2. Log in with your seed. -- [More on IOTA seed generation](https://www.altcointrading.net/security/iota).
3. Click receive to generate your receiving address.
4. Click 'attach to tangle' and wait for the process to complete.
5. If the first attachment didn't fix the issue, go to 'Tools' - 'Edit Node Config' - 'minWeightMagnitude', set the value to 14, save and attach again.

You can try attaching to tangle for as long as you want, eventually your balance will show up. If you skipped the previous part: Your IOTA coins are most likely not lost, the zero balance is just a result of the regular snapshots.
