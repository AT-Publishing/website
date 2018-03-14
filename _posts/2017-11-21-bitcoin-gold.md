---
published: true
guest: false

date: 2017-11-21 16:12:00 +0700
update: 2017-11-24 17:16:00 +0700

author: https://reddit.com/u/KarlVonBahnhof
author_name: KarlVonBahnhof
author_twitter: '@_KarlVonBahnhof'

comments: false

stories: true
#note: 'User Guide'
genres: Blog

layout: forestry
tickers: ['BTGUSD']

title: "Bitcoin Gold: Why is it getting dismissed so fast?"
description: "Bitcoin Gold is one of the recent bitcoin forks. Ridden with controversy and skepticism - but relevant."

permalink: "/bitcoin-gold"
german: false

image: ["/editorial/freelunch1.jpg"]
image_alt: ["Free Lunch via Pexels"]

categories: ["altcoins"]
chart: []
tags: [ "btg", "bitcoin-gold", "bitcoin", "mining", "equihash", "pow"]


about:
 name: "bitcoin gold"
 sameas: ["https://bitcoingold.org/", "https://en.wikipedia.org/wiki/Bitcoin_Gold", "https://www.tradingview.com/symbols/BTGUSD/"]

---

Bitcoin Gold is one of the recent bitcoin forks. Their official website moved from btcgpu.org to bitcoingold.org and the dev team is so secret that it allows for the wildest conspiracy fantasies.

The BTG blockchain has replay protection, which means that it is safe to proceed with transactions there - you won't accidentally spend your BTC by doing that. Splitting tools are largely at works by now, and BTG is traded in several markets.

What you mostly hear is to sell everything. But let's look into the splitting first, and also into what BTG actually is.

#### SPLITTING

The splitting process is similar to the splitting after BCH (bcash) fork.

If you had your BTC in Electrum, you can make use of the sweeping functionality. You sweep your key and import it into a wallet that supports Bitcoin Gold. Alternatively you can also type in the key. You are sharing your private key with a third party though, so as with importing your key into Electron to get bcash, you will need to move your coins out of the wallet that was granted BTG first, and wait for confirmations.

The most popular wallets where you can import your keys are Coinomi and Freewallet.

[Coinomi](https://coinomi.com) is closed source, which is not ideal, but it is available as an [Android app](https://play.google.com/store/apps/details?id=com.coinomi.wallet&hl=en). Android wallets have a tad better privacy than Windows-based wallets or web browser wallets because Android is based on Unix. It gets another step better if you have a dedicated Android phone for cryptocurrency stuff. And last but not least, with a phone app you can simply scan the code Electrum gives you when you sweep.

[Freewallet is just another wallet provider that announced BTG support lately](https://cointelegraph.com/news/first-dedicated-bitcoin-gold-wallet-announced). The difference here is that Freewallet provides a dedicated wallet for BTG whereas Coinomi is a multi-cryptocurrency wallet, similar to Jaxx or Exodus. [FreeWallet](https://freewallet.org/currency/btg) is just as good an option as Coinomi: Will do the job, nothing to worry if you move BTC from the pre-fork wallet first and if you want to sell your BTG right now anyway, you'll just send them to an exchange either way.

You can sell BTG on [Bittrex](https://bittrex.com), [Bitfinex](https://www.bitfinex.com/?refcode=5egV78YtlC) or [Binance](https://binance.com), out of the more popular exchanges. [HitBTC](https://hitbtc.com), [BitBay](https://bitbay.com) and [CEX.IO](https://cex.io) were among the first exchanges associated with Bitcoin Gold and support the trading of it as well, indeed.


**The most important essentials to know:**

* Transfer BTC to another wallet if you are splitting with a third party.
* By transacting on a BTG chain you don’t threaten the BTC because there is RP but you are revealing your TX history because they share this history.
* You are also revealing your previous BTC address, possibly where you’re getting income from if you do and the address label is known.



#### STORAGE



**Trezor**

[Trezor wallet](https://shop.trezor.io?a=fany@tutanota.com) implemented a BTG wallet in their beta wallet interface today. If you had BTC on a Trezor device before the BTG fork, you can claim them [as described in their blog](https://blog.trezor.io/claim-bitcoin-gold-bgold-btg-f66969e7f2c0). You get BTG for both SegWit and legacy wallet -- no matter where your BTC were.

If you claim with Trezor, you aren't moving BTC away from it because you are using a tool they developed natively - you aren't sharing your keys with a third party.

You can choose where to send the BTG - it could, again, be a Coinomi wallet. (Coinomi is a multicoin wallet. Don't mess it up: Bitcoin Gold addresses start with either A or G as the first symbol.) With Trezor beta interface you are getting a full-fetched BTG wallet too, though.

**Ledger**

[Ledger Wallet](https://www.ledgerwallet.com/r/e274?path=/products/ledger-nano-s) provides a splitting tool similar to Trezor's, the process analogous. With Bitcoin Gold the splitting is not automated -- [here's their own tutorial](https://ledger.zendesk.com/hc/en-us/articles/115005456969-How-to-use-Bitcoin-Gold-with-Ledger).

Ledger wallet people warned couple of days ago the network might not be stable yet though, and they aren't taking any responsibility if something happens to your BTG or BTC.

**bitcoingold.org**

> “We will publish guides for retrieving BTG from the most popular wallets, including Bitcoin Core, Electrum, Mycelium, hardware wallets, paper wallets, and more.”


#### IDEA BEHIND BITCOIN GOLD

Via [Arstechnica](https://arstechnica.com/tech-policy/2017/11/bitcoin-gold-the-latest-bitcoin-fork-explained/):

> While Bitcoin Cash was designed to resolve Bitcoin's capacity crunch with larger blocks, Bitcoin Gold aims to tackle another of Bitcoin's perceived flaws: the increasing centralization of the mining industry that verifies and secures Bitcoin transactions.

Arstechnica continues to explain how the introduction of application-specific integrated circuits (ASICs) lead to mining centralization. However, they state:

> In practice, this means that a node's influence over the network is **proportional** to the amount of computing power it has.

-- which is not entirely the truth. The big miners get in fact disproportionate advantage because of unfair mining exploits that allow them to manipulate the pool of smaller miners.

BTG implements a modified Proof-of-work called [Equihash](https://www.cryptolux.org/images/b/b9/Equihash.pdf): Zcash already uses it. The main advantage of Equihash over BTC's SHA256 is that it doesn’t get more convenient with better hardware because of a crucial step in the Equihash mining process that is memory-intensive rather than computationally intensive.

More memory will make Equihash mining faster but it makes no sense to optimize the hardware: it just needs a lot of generic memory. There is no application-specific hardware optimization in Equihash, just more or less memory. That means normal PC with a lot of memory still has a chance.

GPU mining is not a bad thing then, so...

#### WHY BTG LOOKS SO SKETCHY THEN?

One reason is that it’s a fork, which seems to be frowned upon in the Bitcoin community -- Satoshi vision and all.

Another thing is it is called **Bitcoin** Gold. So many people have forked the Bitcoin code before, but they typically created something they openly called an altcoin. According to the community, if BTG is simply an altcoin with an airdrop, it shouldn’t be called **Bitcoin** *something*.

AltcoinTrading.net listed BTG in the [airdrops](https://altcointrading.net/airdrops) section. FreeWallet's co-founder Alvin Hagg said something to that effect, in a statement regarding the launch of the FreeWallet BTG client:
> This is the second Bitcoin chain split we’ve supported. FreeWallet succeeded in providing uninterrupted operations during both of these events. There is a great opportunity when a new network is launched, as **users are subject to a free airdrop**. FreeWallet’s mission is to make sure users can access this money and remain happy.

JP Buntinx of [themerkle commented](https://themerkle.com/freewallet-implements-bitcoin-gold-support/):

> It would have been better to see more companies focus on SegWit and Bitcoin Cash rather than Bitcoin Gold. However, airdrops shouldn’t be ignored by any means, as people deserve access to their funds first and foremost.

Why is Bitcoin Gold being dismissed in the cryptocurrency media this easily? Are bitcoiners getting complacent regarding network developments?

##### Bitcoin Gold Red Flags

From [CoinSutra](https://coinsutra.com/bitcoin-gold/):  

> Also, haywire information sources on the Bitcointalk forum raise massive red flags about their future and their intentions. I was really surprised to learn that they might have an ICO for these pre-mined blocks, but again, there is little clarity about it on their official website.

The red flags the author talks about are the BTG premine: Bitcoin Gold technically forked on 25th of October 2017 but the launch of the currency happened about two weeks later, allowing the creators to privately mine about 100.000 BTG first.

Bitcoiners don't like to see it. In the altcoin community, this is not perceived so terribly. Premine is an alternative to ICO -- and one that cannot get you busted by big boy finance folks -- in that the creators gain money for future development. The negative side effect for traders is that the empire can pretty much manipulate the market, as long as it is small and immature. That is true but not the end of the world. If the coin is not an outright scam, the creators don't want to kill it by dumping everything at once, and since they aren't dumping, they are holding and therefore don't want to anything stupid that would damage their money.

I personally don't see anything particularly shady here. Claiming that having mined 100k coins leaves ["less for the people"](https://arstechnica.com/tech-policy/2017/11/bitcoin-gold-the-latest-bitcoin-fork-explained/) is laughable.

The second major issue was that the code was not public before the launch.
The BTG codebase is developed by an anonymous person of unknown reputation and was not open sourced for review before the actual fork on October 25. The team eventually released the code during the launch and it was OK, had full replay protection and all. You can review the code and its contributors yourself at [https://github.com/BTCGPU/BTCGPU](https://github.com/BTCGPU/BTCGPU).

It still was the reason why Coinbase said ([and still says](https://support.coinbase.com/customer/portal/articles/2892196-bitcoin-gold-faq)) they aren’t supporting BTG, that they only might grant it someday in the future when they think it's all safe and good.


...At the first sight it just really looked like a bullshit fork and an attempt to split the community. It could be, only maybe, that people are missing something.

##### What the BTG team says

The team says they cannot be competitors to BTC in the same way as Bcash and B2x because these two forks are using SHA256 which runs on ASICs, so there is the direct fight over the mining power. BTG uses Equihash and is meant to run on GPU.

The BTG team says they want to showcase BTC doesn’t have to function on ASIC mining. That the status quo is not the only possible way, that there can be a stable blockchain that does it differently, and shares Bitcoin's history, and doesn't employ half-assed temporary solutions like throwing bigger blocks on the network congestion problem.

And that Bitcoin core could consider adopting something similar to Equihash one day.

#### SO WHO IS BEHIND BTG?

> The Bitcoin Gold project is being driven by some developers, miners, and their head Jack Liao, the CEO of the  Hong Kong-based mining equipment manufacturing company, [LightningAsic](http://lightningasic.com/).

Bitcoin Gold’s lead developer is someone who calles themselves `h4x3rotab` and claim: *"Bitcoin Gold is also a real blockchain to pilot Bitcoin upgrades."*

-- That is not threatening Bitcoin, mind you. That is what Litecoin is currently known for: a sandbox, a real-value testnet.

Why the heck is [someone who has a business around ASIC miners](http://lightningasic.com/) involved in BTG, though?  

**Jack Liao** is a businessman from Hong Kong, educated in China.

[Some takeouts from his interview for 8btc.com](http://news.8btc.com/jack-liao-the-person-behind-bitcoin-gold-aims-to-compete-with-bitcoin-cash):

> Honestly, I think the BCH team is very short-sighted and BCH will die several months later as a result of losing hashrate in the fight with Bitcoin. As for BTG, we will upgrade our code and technical features to better service the community and distinguish ourselves from Bitcoin and other coins.

> I don’t think BCH has the first mover advantage. There are plenty of exchanges, mining pools and miners are willing to support us.

> It’s meaningless that Bitmain squanders money to support BCH. I don’t think Bitmain is big enough to maintain a forked coin with such a large market capitalization. They set the EDA mechanism in hopes of miners would stick to the BCH chain, but only to find that more problems are caused. The community will gradually lose heart in it.

> The roadmap of BTG is feasible and good for the community. As time goes on, we will be able to gain more attention.

> The whole cryptocurrency community is filled with greed and selfishness. Mining pools charge 4%-5% of transaction fees and they don’t have a problem with that. What’s wrong with us having a premine of 200,000 BTG to raise money for the development? To those who have a problem with the premine of BTG: mine or fuck off.


#### WHO SUPPORTED THEM (And why?)

* From the start, places associated with mining and larger holdings, perhaps through Liao's contacts:
  * BitBay
  * CEX.IO

* One of the first markets was Bitfinex.
  * They granted BTG but the exchange's name wasn’t related with the fork from the start. Still, it's a place with OTC market and wannabe-wholesale-fuck-retail kind of marketplace.

Maybe it is something like business hedge. Also, maybe mining-related businesses are too getting fed up with the current ASIC situation. Maybe ASIC-centralization has reached a dead point. It's all just a guess though.

#### WHY IT COULD BE USEFUL

BTG has replay protection so the absolute worst case scenario is ... that it is an airdropped altcoin. The best case however would really be a showcase for possible BTC development directions, even though Jack Liao says BTG is going to differentiate itself from BTC.

* Without the ASIC crew it wouldn’t have been possible to block the SegWit upgrade.
* Community consensus would matter more again.
* People could mine again, nodes wouldn’t be geographically centralized, people wouldn’t need to go like “okay i’ll bite” and actually spend money as if on charity to support the network.

In case you are interested in BTG mining, here's what they have to say on their website:

1. You can solo mine BTG using the full node client or you can mine with a pool. Some public mining pools that have worked with us are listed on our home page. We invite you to join our Slack #mining channel for technical help and advice about mining BTG.
2. The Bitcoin Gold full node client with signed prebuilt binaries will be available for download at btcgpu.org and the source code can be found at https://github.com/BTCGPU/BTCGPU. These are the only two sites affiliated with the Bitcoin Gold development team.

#### WHAT COULD HAVE BEEN DONE DIFFERENTLY?

Nothing about it being a bitcoin fork that is called Bitcoin *something*.

If there was meant to be an appeal to Bitcoin development, an altcoin wouldn’t really do the trick because people are used to having new altcoins cropping up left, right and center.

If there isn't meant to be an appeal and someone uses the name Bitcoin to attract attention, it still isn't damaging Bitcoin -- the only thing it does in that case is making it more difficult for future Bitcoin *somethings* to attract attention.

So: It is a marketing stunt, nothing wrong with that. It introduces an aspect of competition. It threatens the conceited stagnation in the Bitcoin environment. Bitcoin is not getting bigger or smaller from a marketing stunt alone. In itself, it is not a bad thing for anybody.

There is also no bad blood in saying that maybe one day Bitcoin’s fork will become the new default chain. It doesn’t seem likely that it could be BTG, nor does the team claim it is what they are going for, but it is an utter nonsense to dismiss a fork just because it is a fork.

That leaves us with one thing: The team could have been more open with the code from the start. It is dodgy when the developer is anonymous (which socially still means the developer has no reputation) and the code is closed source at the same time.

**So, bitcoiners, why do you want to dump? Because it is a fork?**
