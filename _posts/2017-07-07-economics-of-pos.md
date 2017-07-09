---
author: https://reddit.com/u/KarlVonBahnhof
author_name: KarlVonBahnhof
categories:
- eth
- altcoins
comments: true
date: 2017-07-07 01:00
description: Proof of stake shows off the extraordinary ability of crypto news portals
  to write a 500 word article that says absolutely nothing, and the amazing regard
  of the ETH boss crew to Social Justice.
genres: Blog
german: false
image:
- "/img/editorial/steak2.jpg"
- "/img/daddyvitalik/yeswecan.png"
- "/img/daddyvitalik/IsHeForReal.png"
- "/img/daddyvitalik/VitalikTheLordSavior.png"
image_alt:
- Even if you want to, you won't be staking before mid-2018, but Vitalik says he is
  not afraid of the switch, and that clearly means something.
layout: forestry
permalink: "/pos"
published: true
stories: true
tags:
- popular
tickers: true
title: Economics of Proof of Stake
update: 2017-07-10 01:00
chart: []
---
### The gist of PoS

{{ site.mailchimp }} In PoW (Proof of work) the longest chain is valid, as in the one with most *work*. In PoS the one that is agreed upon in betting *consensus* is accepted.

In the proposed version of proof of stake in ETH, stakers make bets on which block will be included in the blockchain. The block that is backed up by most bets is the winning one. The betting is automated and has several rounds as the odds of reaching consensus at each block changes. The initial bets are small, when a leader starts to emerge the bets grow.

The betting happens automatically. All the staker has to do is to put a full node online and lock up their stake for four months. In the last published at least 32 ETH is needed to participate in staking.

#### Will staking pay off?

If one wants to focus only on profits, staking could be compared to lending at an exchange. Bets made on the winning block get rewarded, the rest is lost. That means there will have to be losses too, but thanks to the system of several betting rounds the losses should be small - the bets start small and move higher once there's higher confidence regarding the winning block.

It is simply lots of tiny gambles with the odds in the staker’s favor.

There is a counterparty risk as well though: staker loses his lot if it appears that he is engaged in an illicit anti-network activity. This ban from staking is for Vitalik and his crew to judge.

Another small risk comes from volatility of ETH - should a big dump be obvious, staker cannot withdraw his money to sell, but this can be hedged with the help of derivatives.

But practically, staking could be more profitable than lending on an exchange, just probably not for individuals at home as they’d have to run a full node. Running a full node costs energy, maintenance and bandwidth and we all know that even though setting up a parity wallet to make a basic transaction is a matter of an hour max, the full ethereum blockchain has a fat ass.

There probably is an incentive for the ETH fanbois to prefer staking to lending on an exchange though, because as stakers they would be "helping the good cause".

It seems that Vitalik is aware of these sentiments that are outside of economics, but it is anyone's guess if he has plans to use them:

{% amp700 border {{page.image[2]}} {{page.image_alt[0]}} %}

_Image: From Vitalik's medium.com post ["A Proof of Stake Design Philosophy"](https://medium.com/@VitalikButerin/a-proof-of-stake-design-philosophy-506585978d51)_

___________________________

#### How is it really with the centralization and unfair advantages

The most promoted advantage of proof of stake is that it fights centralization of mining that seems to always emerge in PoW after some time.

**PoW**: If you are late to the party or don't have access to cheap electricity or don't have enough capital to constantly upgrade your mining equipment, your mining profits will not pay for your expenses - at least not until your coin increases in price, and if you should be waiting for that it would make more sense to simply trade. In addition to this you are fighting mining cartels that might be engaged in [selfish mining](https://www.cs.cornell.edu/~ie53/publications/btcProcFC.pdf).

> "Selfish Mining": A group of miners can form a pool that behaves as single agent [...] following some strategy. Selfish-Mine allows a pool **of sufficient size** to obtain a **revenue larger than its ratio of mining power**.

> The key insight behind the selfish mining strategy is to force **the honest miners into performing wasted computations on the stale public branch**. [...] Selfish miners achieve this goal by selectively revealing their mined blocks to invalidate the honest miners’ work. Approximately speaking, the selfish mining pool **keeps its mined blocks private**, secretly bifurcating the blockchain and creating a private branch. Meanwhile, the honest miners continue mining on the shorter, public branch.


**PoS**:
If ETH main office says you cheat, you lose your stake. If ETH main office says you are honest, you get transaction fees and the block reward. Your profit is proportional to how much you stake, nothing else - there is no difficulty, there will be some hardware maintenance but not as much as with PoW. If you have more starting capital you will earn more, but proportionally more - you are not supposed to get an edge when you have more money.

To put it bluntly, if everything should work as drafted it would mean that the business of *staking* would not scale the way the business of *mining* does, but  while at the same time *staking* would not pay off for small individual participants, similarly as with *mining* of well established coins.

This kind of anti-capitalistic compromise understandably causes some stir, but Vitalik is clearly bigger than that:

{% amp700 border {{page.image[1]}} {{page.image_alt[0]}} %}

_Image: via [@BitfuryGeorge](https://twitter.com/BitfuryGeorge/status/883177297309839360)_

___________________________

And to add to this: it is not even quite clear that PoS is really free from all this unfairness.

**What's  not clear**

* Staker A owns 100 ETH and stakes all 100 of it. Staker B owns 100 000 ETH and stakes all of it but into 1000 different accounts. Has Staker B has 1000x chance to find the block over Staker A?
* What if all the stakers are the same staker? How would anyone know?

The answers to this would *probably* be that this is an attack, there might be a fork - you know the drill. It is unclear how would this be detected.

* If a staker-attacker has an ETH short equal or more than his stake and is the majority network validator, then the staker-attacker has nothing to lose. The currency will lose in value but the staker-attacker has the short to profit from the drop.

While there is an argument that it is not possible to short this much ETH on any exchange, it might be possible in the future if there are more highly leveraged futures or option markets available. One could also long Alt/ETH pairs.

* The "nothing at stake" problem: In the case of a consensus failure stakers have nothing to lose by voting for multiple blockchain-histories, which prevents the consensus from ever resolving. Because there is little cost in working on several chains (unlike in proof-of-work systems), anyone can abuse this problem "for free".

In one Ethereum implementation called *slasher*, this behavior would fall under "cheating" and would lead to the loss of the stake, [but slasher introduces other problems](https://github.com/ethereum/economic-modeling/tree/master/casper) - what if most staking nodes drop out (blockchain generation freezes, called "ice age") and what if there is no consensus (blockchain generation gets stuck). You can read the whole mildly technical explanation [at ethereum's github](https://github.com/ethereum/economic-modeling/tree/master/casper). [Casper should work with some form of slashing conditions](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ).


___________________________

In the Ethereum roadmap, [the switch to PoS is planned for June 2018](https://np.reddit.com/r/ethereum/comments/609yjl/vladzamfir_if_the_price_of_ether_stays_high_i/df4r7hq/) (the switch has been [postponed several times](https://www.quora.com/When-will-ethereum-switch-to-proof-of-stake)). **At this stage, of course PoS in ETH is not ready yet,** but what is the hype all about, really? 

PoS is not convenient for big miners, it is not convenient for hobby miners/stakers, it is not convenient for traders & holders because it introduces new possible problems and reasons for forks - but it's the next big thing because it is a system that is "more fair" and also "eco friendly"? Quite serious there?

Frankly it does not really scream advantages, other than what relates to "Vitalik philosophy":

{% amp700 border {{page.image[3]}} {{page.image_alt[0]}} %}

_Image: From Vitalik's medium.com post ["A Proof of Stake Design Philosophy"](https://medium.com/@VitalikButerin/a-proof-of-stake-design-philosophy-506585978d51)_

___________________________

**Reading:**


* [https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ)
* [https://github.com/ethereum/economic-modeling/tree/master/casper](https://github.com/ethereum/economic-modeling/tree/master/casper)
* [Paper on Selfish Mining](https://www.cs.cornell.edu/~ie53/publications/btcProcFC.pdf)