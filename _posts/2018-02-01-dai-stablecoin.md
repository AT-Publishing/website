---
layout: forestry
published: true
guest: false

date: 2018-02-01 02:13:00 +0100
#update: 2018-01-25 23:12:00 +0100

author: https://reddit.com/u/karlvonbahnhof
author_name: KarlVonBahnhof

comments: true
identifier: 'daifeb18'

stories: true
#note: 'Feature'
genres: Blog
tickers: false

permalink: "/dai-stablecoin"
german: false
cz: false

title: "Dai - Stablecoin alternative to Tether"
description: "While crypto circles are speculating about the fate of Tether, there are other stablecoin alternatives out there already."

image:
- "/features/2018/maker-dao-dai.png"
image_alt:
- "MakerDAO image from Google."

categories: ["altcoins", "coins", "new-launches", "trading"]
tags: [ "dai", "usdt", "tether","cryptocurrencies", "maker-dao", "cryptocurrency-trading"]
chart: []

about:
 name: "dai"
 sameas: []
---

Dai is the first product of a distributed autonomous organization called MakerDAO. It is a decentralized stablecoin that runs entirely on Ethereum - more on that later. For now it is not widely known nor used but a system like this is a great addition to the crypto space as it advances in the way of removing a middle man.

#### How Dai works

Dai is a token pegged against USD, 1 Dai is 1 USD. Each Dai is backed by an asset on the Ethereum blockchain, the asset is held in a smart contract in a decentralized manner. Because the USD value of ETH fluctuates, it is necessary to deposit more ETH than the current USD value, otherwise the position might get liquidated at some point.

Anyone can generate Dai by sending Ethereum tokens to a specific address that holds tokens used for collateral, the result is collateralized debt position within the Dai's parent organization - the MakerDAO. Dai can also be purchased if you don't hold any tokens that could be held as collateral. There is a stability fee (similar to interest) that is paid by the user who is generating Dai and is used to maintain the peg.

The contract ends when the user repays the loan and the stability fee and gains back the access to the collateral.

The Dai has a system in order to maintain the target price of 1 USD and another emergency system to be engaged in times of market instability - [more in the whitepaper](https://makerdao.com/whitepaper/DaiDec17WP.pdf). The emergency system is based on supply and demand, when the Dai become too cheap the generation of new Dai gets more expensive. At the same time through the "interest rate" it starts paying better to hold Dai which creates more demand. When the Dai gets too expensive the system works in an analogous way.

There are several parameters in the collateral system that can be fine-tuned, that is done via a voting system within the MakerDAO. Holders of the MKR tokens can take part in the voting.

#### Pros of the Dai way

There is already a number of stablecoins out there - cryptocurrencies pegged to a fiat value. Typically stablecoins keep their peg in one way, that is by being a registered company and having the necessary amount of USD in a corporate bank account. That is reasonable only as long as the banking works without any problems: if the bank decides to freeze the account the tokens turn into an IOU. In other words, should some form of ban or even a fraud come, holders of the stablecoin might not get out whole and there is nothing to be done about it with this kind of system.

Dai is a token that proposes another way, one that takes some ideas from the principle behind crypto-backed p2p loans - a fiat value is backed by a crypto asset. Dai runs entirely on Ethereum so in this case, Dai is backed by ETH.

From the user point of view, the difference is that with crypto-backed stablecoin the USD value is obtained basically as a loan and traders are more aware of the risk. With the classic model of IOU tokens many crypto traders tend to treat them as cash, not always aware of the risk they carry.

From the technical point, one important advantage of the Dai system should be stressed: There is no link outside of the cryptocurrency system. That eliminates the problem of immutably recorded value that is a lie (such as, you can have a record that there is certain amount of cash or inventory in the physical world somewhere but there is no decentralized way to verify if that's really the case).

#### Cons of the Dai way

The Dai launched in December 2017. With a new system like this, the possibility of security holes, hacks and attacks is always strong.

The Dai also makes use of some external actors: Global settlers, Oracles and Keepers. These participate in the market or provide market information. The MKR voters have to vote to select trusted Oracles, which is a weak point. The Dai system has built-in maximum sensitivity threshold to changes though, which should prevent attacks - sudden attacks at least.

Last but not least, the system is clever but not average-joe-ready. The potential use cases sound great for someone who works in the crypto markets:

* you can hold USD-equivalent collateral in a leveraged position or contract
* you can bet a USD value on prediction markets
* it can be used for remittances to send certain value no matter the crypto market condition
* the blockchain is transparent which means controls and accounting can be easy


#### Conclusion

All things mentioned in the previous paragraph are advanced stuff, a beginner trader or investor is not going to go and use it. If however the crypto exchanges could make use of Dai (or another blockchain-based stablecoin) to provide USD pairs, that would be a much more seamless experience for everybody.

All in all, right now it seems that stablecoin systems will become a necessity, it is only a question which one will be the leader.

**Good resources about Dai:**

[Medium.com/cryptolinks](https://medium.com/cryptolinks/maker-for-dummies-a-plain-english-explanation-of-the-dai-stablecoin-e4481d79b90) - Simplified guide to Maker and the Dai.

[Post from MakerDAO announcing Dai going live](https://medium.com/@MakerDAO/dai-is-now-live-ad87e34fc826) also explaning how Dai works.
