---
layout: at-trading
title: "All about the DAO hack"
description: "A summary of what is going on with DAO's and ETH"
category: "trading"
permalink: dao-hack/
image:
- "https://www.ethereum.org/images/assets/1900/Ethereum-homestead-background-3.jpg"
- "/img/screenshots/dao1.PNG"
- "/img/screenshots/dao2.PNG"
- "/img/screenshots/dao3.PNG"
- "/img/screenshots/dao-reg.PNG"
image_alt:
- "DAOs have a critical vulnerability that can probably be removed only by a hard fork."
update: 2016-06-23


about:
 name: "the dao"
 sameas: ["https://en.wikipedia.org/wiki/The_DAO_(organization)", "https://www.coindesk.com/understanding-dao-hack-journalists/"]

---

{% amp700 border {{page.image[0]}} {{page.image_alt[0]}} %}

_Image: {{page.image_alt[0]}}_

________________________

#### The DAO hack simplified

Great summary can be found on [erratasec blog](http://blog.erratasec.com/2016/06/etheriumdao-hack-similfied.html).

It starts with an explanation of what are smart contracts (the main purpose of the Ethereum platform) actually good for.


> *Let's say that we want to organize a small conference. We need 100 people to sign up and pay/deposit money, so we can rent a hotel and such. But if not enough people sign up by a certain date, then the deposits need to be refunded. With Ethereum, we can write in a JavaScript-like language to code up this contract. It'll guarantee that everyone will get a ticket to the conference, or everyone will get their money refunded, depending on how many sign up.*


The main point is, this whole redistribution of payments that, depending on a condition, might or might not be returned to the people who paid them, is supposed to be made automatic. There is supposed to be no human overseeing it or interpreting the circumstances to help *someone in power* decide.

Then the DAOs are explained, specifically how you *leave* a DAO (not just TheDAO but any DAO). The issue here is to leave you need to create your own DAO if you have invested in a project that is still ongoing. Your *child DAO* will receive the payout of your investment once the project is over.

> *When you want to leave the fund, you split from it. This includes your share of unspent Ethereum coins, but also tokens representing returns on investments you were part of, but which haven't yet paid out. That's why you "split" rather than "cash out", you need your own DAO shard to track those investments until they pay out.*

This DAO splitting is exactly where the hack occured

>  *When a member exits the investment scheme, they call the function name splitDAO(). (...) The member will supply some of their own code with the transaction. Among the things that code will do is tell the DAO code how to transfer Ethereum coin. (...) [Another] issue is that Ethereum code is recursive. That means when a function is running, it may call itself a second time. The bug is that when splitDAO() is called, it will then call the recipients code to transfer Ethereum coin, after which the recipients code will call splitDAO() again before finishing. This causes the process to repeat itself, transferring more Ethereum coin, then calling splitDAO() again, which calls the hacker's code, which calls splitDAO(), which calls the hacker's code, and so on. The process will continue endlessly, until it drains all of TheDAO's coin.*

* [Ethereum/TheDAO hack simplified, erratasec.com](http://blog.erratasec.com/2016/06/etheriumdao-hack-similfied.html)

You can see that the bug is inherent to DAO codebase and closely related to how Ethereum platform works. If this very basic code is not altered, all future DAOs are subject to this bug.

#### Stolen money recovery

The only way to *undo* this is to rewind the blockchain to the state before the attack occured which has been seriously considered and which spooked all the non-ETH fanbois. It would undo not only the hack but also all the other transactions that occured in the meantime which means screwing over the few for the sake of an organization that is too big to fail, as the ErrataSec article points out. We know that from centralized banking.

* [Why the Wrong Response to The DAO Attack Could Kill Ethereum, coindesk.com](http://www.coindesk.com/ethereum-response-dao-kill/)

Currently the ongoing solution to this issue implemented by the developers was one that avoids the rewind: New child *whitehat* DAO attacks were created with the purpose to attack the malicious DAO. The whitehad DAOs rolled out on the 21st of June while developers kept reassuring everybody the attacker cannot access the stolen funds for 27 days which is enough time to come up with a solution.

* [Ethereum Developers Launch White Hat Counter-Attack on The DAO, coindesk.com](http://www.coindesk.com/ethereum-developers-draining-dao/)

This attempt to shake off the hacker failed. Since the whitehat DAOs needed capital to run, they started accepting donations. The person behind the initial hack also donated some ETH to the whitehat DAOs and is hence a shareholder, possibly planning to drain the whitehat DAOs as well.

<div class="reddit-embed" data-embed-media="www.redditmedia.com" data-embed-parent="false" data-embed-live="false" data-embed-created="2016-06-22T19:18:28.549Z"><a href="https://www.reddit.com/r/ethereum/comments/4p9z93/it_seems_attacker_just_targeted_the_whitehatdaos/d4j7ldn">Comment</a> from discussion <a href="https://www.reddit.com/r/ethereum/comments/4p9z93/it_seems_attacker_just_targeted_the_whitehatdaos/">It seems attacker just targeted the WhiteHatDAOs</a>.</div><script async src="https://www.redditstatic.com/comment-embed.js"></script>

Meanwhile, a Cornell professor found 10 other vulnerabilities in DAO and calls for a DAO 2.0 movement.

* [Cornell Professor Calls for 'DAO 2.0' Movement, coindesk.com](http://www.coindesk.com/cornell-prof-discovered-dao-vulnerability-reveals-10-exploits/)


#### Current Ethereum Sentiment

{% amp700 noborder {{page.image[2]}} {{page.image_alt[0]}} %}

People on ETH trading subreddits feel that the dev team looks after them and have more confidence in ETH now than in BTC (with notoriously indecisive governance) - in spite of the fact ETH is fundamentally flawed and DAOs are subject to future fund drainings.

* [I'm dumping all my BTC for ETH, /r/ethtrader](https://www.reddit.com/r/ethtrader/comments/4p9ivx/im_dumping_all_my_btc_for_eth/) with a screenshot full of unconfirmed bitcoin transactions.

This goes hand in hand with the sentiment that is being created by the community voices, and that is that the DAO hack is good for Ethereum since it is only *pruning*, similar to the shaking out of the weak hands during a run-up, where only the most faithful will prevail.

<div class="reddit-embed" data-embed-media="www.redditmedia.com" data-embed-parent="false" data-embed-live="false" data-embed-created="2016-06-22T18:56:51.453Z"><a href="https://www.reddit.com/r/ethtrader/comments/4p9ba2/important_announcement_recession_is_cancelled/d4j3dot">Comment</a> from discussion <a href="https://www.reddit.com/r/ethtrader/comments/4p9ba2/important_announcement_recession_is_cancelled/">Important announcement: Recession is cancelled, effective immediately</a>.</div><script async src="https://www.redditstatic.com/comment-embed.js"></script>

For clarification, traders say that the weak hands are being shaken off when there is a bullish market that retraces significantly after a profit taking on a local top, forcing highly leveraged longs to market sell at a loss. That results in some more price drop where winners take it all, i.e. people with enough capital will take the advantage of - pardon my French - cheap coins and drive the price up.

It has nothing to do with pseudo-Christian faith in a leader/savior and putting money into a platform where they might be irreversibly lost while there are plenty of alternatives without this downside.

Consequently careful speculations occurred on /r/bitcoinmarkets considering manipulations from the side of wealthy ETH holders that need the ETH price to hike up to $30 once again before they cash out for good.

<div class="reddit-embed" data-embed-media="www.redditmedia.com" data-embed-parent="false" data-embed-live="false" data-embed-created="2016-06-22T19:14:01.813Z"><a href="https://www.reddit.com/r/BitcoinMarkets/comments/4p8s1p/daily_discussion_wednesday_june_22_2016/d4ja4bb">Comment</a> from discussion <a href="https://www.reddit.com/r/BitcoinMarkets/comments/4p8s1p/daily_discussion_wednesday_june_22_2016/">[Daily Discussion] Wednesday, June 22, 2016</a>.</div><script async src="https://www.redditstatic.com/comment-embed.js"></script>


It is probably worth mentioning that some people are just in for the penny stock chance.

{% amp700 noborder {{page.image[3]}} {{page.image_alt[0]}} %}


Meanwhile, officials are concerned.

{% amp700 noborder {{page.image[4]}} {{page.image_alt[0]}} %}


####Some more reading

* [Coindesk DAO fail analysis](http://www.coindesk.com/the-dao-an-analysis-of-the-fallout/)

* [What Ethereum's DAO Disaster Means for Bitcoin Development](http://www.coindesk.com/the-dao-bitcoin-development/)
