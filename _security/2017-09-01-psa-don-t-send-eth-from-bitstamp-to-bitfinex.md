---
layout:     at-trading
note:       PSA
promoting:    onramp

author:       https://reddit.com/u/KarlVonBahnhof
author_name:  KarlVonBahnhof

title:        'Don''t send ETH between exchanges'
date:         2020-10-28 00:30:55 +0000
description:  Their smart contract mechanisms are rarely compatible. Your money will be lost and exchanges will not want to help you, for legal reasons.
permalink:    bitifinex-eats-your-eth/
image:        ["https://res.cloudinary.com/atnetcloud/image/upload/v1603937675/atnet/cybersecurity/ethereum_tojfxf.jpg"]
image_alt:    ["Do not send ETH between exchanges."]
categories:   [ psa ]
tags:         [ custodial-trading, bitfinex, bitstamp, independent-reserve ]

related:
- {"Buying Crypto Non-KYC: Where to do it with minimal risk?": "/buy-crypto-no-kyc/"}
- {"Shocking Facts About Cryptocurrency Heists [Infographics]": "/cryptocurrency-heists-infographic/"}
- {"Michael Foster of LocalCryptos: Venezuela could be start of a bigger movement": "/localcryptos-interview/"}

---

Ever since ETH trading launched on mainstream custodial exchanges, people have been having this problem.

With Bitcoin, you could get away with sending BTC directly between exchanges - although technically you are not allowed to do that for legal reasons.

Either way, most people assumed the same would go through with ETH.

It does not. Exchanges process ETH withdrawals via a smart contract, and deposits via different smart contract. It is a script, not a simple wallet to wallet transaction.

And for the security of the funds, the deposit smart contract will reject any funds that come from a smart contract, not from a plain wallet.

If you send ETH directly from another exchange, it will be coming from a contract and it will not be credited on the receiving side.

This is for the technical part of the problem.

### Do not test them on this in 2020

Now, the legal part of it.

In 2020 the authorities started cracking down hard on [non-KYC exchanges](/buy-crypto-no-kyc/).

Sending money directly between two crypto trading platforms is problematic in this regard. If you think about what it actually does, you will find it could be interpreted as sending money between two banks.

The only exchange that has a banking license is Kraken.

You can safely assume that the most popular exchanges like Bitfinex will not get anything close to a banking license anytime soon.

Act accordingly.

* [More about Bitfinex and Deversifi](/coupon-bitfinex-5egv78ytlc/#about-bitfinex)

### What if you already did it?

The receiving exchange still has the money. It is not *completely* lost.

What you need is to contact the customer service and get them to manually credit it.

This can lead to varying amounts of trouble, depending how overloaded the support system currently is.

In periods of heavy market action, the support will be overloaded and you will probably need to harass them on social media for attention. They might also [charge you for solving deposit issues](https://twitter.com/bitfinex/status/900646338941128704).

Also, due to the legal issues above, it is possible they will refuse to help you.  

Anyway, it is better to try.

* Bitfinex maintains the [r/bitfinex](https://www.reddit.com/r/bitfinex/)
* Kraken reps will get back to you on mentioning "kraken exchange" or "kraken futures" in [r/bitcoinmarkets dailies](https://www.reddit.com/r/bitcoinmarkets/)
