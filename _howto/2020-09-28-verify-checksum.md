---
layout:       at-trading
title:        "GPG Signature: Verify that your crypto wallet update is genuine"
description:  "How to do GPG signature verification and checksum verification: A step by step guide on verifying the integrity of crypto wallets, trading apps and other software you download."
note:         "Tech"
date:         2020-09-28 23:42:00 +0700
slug:         verify-signature/

guide:        true
pinned:       false
promoting:    analysis

categories: [ technical ]
tags: [ p2sh-wallet, bitcoin-wallet, crypto-opsec, altcoin-wallet, cryptocurrency-wallet, electrum, exodus, jaxx, ledger, bitfinex, kraken ]

image:
- "https://res.cloudinary.com/atnetcloud/image/upload/c_lfill,h_360,w_700/v1596693909/atnet/__women/pexels-peter-olexa-4012966_ocqe57.jpg"
- "https://res.cloudinary.com/atnetcloud/image/upload/c_lpad,h_360,w_700/v1601444942/atnet/_how-to/electrum-pgp-signature_fuyfch.jpg"
- "https://res.cloudinary.com/atnetcloud/image/upload/b_rgb:2c0b34,c_lpad,h_360,w_700/v1601444962/atnet/_how-to/electrum-locate_dnnyq8.jpg"
- "https://res.cloudinary.com/atnetcloud/image/upload/b_rgb:2c0b34,c_lpad,h_360,w_700/v1601444965/atnet/_how-to/electrum-verified_rvoxkz.jpg"
- "https://res.cloudinary.com/atnetcloud/image/upload/b_rgb:3c1b39,c_lpad,h_360,w_700/v1601447351/atnet/_how-to/shasum_kk06ey.jpg"

related:
- {"How to safely move Litecoin between SegWit P2SH (3) addresses and legacy (L) addresses": "/howto/move-ltc-p2sh/"}
- {"How to configure the Bitfinex App for Secure Trading": "/bitfinex-app/"}
- {"How to buy crypto (with KYC, no KYC, from anywhere)": "/how-to-buy-altcoins/"}

---

*This article is about PGP signatures, used to verify you downloaded a genuine copy of a software. For a guide on how to sign or verify a message in Electrum wallet, go [here](/howto/sign-verify-message/).*

In this guide we are going to look at why you should learn how to verify GPG signatures and what is the difference between GPG signatures vs checksum verification.

In the last section of this article, there is a [step-by-step guide](#electrum) on how to verify GPG signatures on Mac or Linux. It uses Electrum wallet as an example.


## Checksum vs GPG Signature

### GPG Signatures: Why are digital signatures important

GPG signature is a digital signature that can be made by someone who owns a private GPG key.

A GPG signature is then a proof that the files you downloaded have been signed by the owner of the GPG key.

Vwerifying GPG signatures will enhance your security. If you do that, you are making sure the software you're downloading was put up online by the organisation tied to a GPG key.

Typically, **developers do not change their GPG key often and they store it safely - just like you store your crypto wallet seed phrases**.

If a hacker gains access to a website that provides crypto wallets, they can replace the installer files but they will not be able to recreate the GPG signature. When you download those files, your GPG verification will fail and you will know that you muat not install that software.

Learn how to verify GPG signatures here:

* [Step-by-step guide how to verify GPG signatures on Mac](#electrum), using Electrum wallet as an example.

### Checksum is not a security feature

If you download open source software, you may have noticed that the developer sometimes provides a **checksum** alongside the installer files.

This is a common practice in software development especially if the installer file you have to download is a large file. You will also get a checksum for images used for virtual machines.

* BTW: [Installing shitcoin wallets in a virtual machine is not a good security practice](/security/virtualbox/).

Checksum is a hash of file. You can take a 2GB file, quickly run a hashing function on it and the output will always be just a short string, no matter how big the file is.

If you download a large file and the hash the developer provided with it, you can then run a hashing function on the big file yourself. If its result matches the hash provided by the developer, you know that the download succeeded and the big file is not corrupted. **And that's all you should use it for.**

{% amp700cloud page.image[4] %}

**Checksum verification is not a security practice.** If an attacker gets access to a download page and replaces a download file, they will also replace its checksum.


<div id="electrum"></div>

## Step by step guide by example
### Verify Electrum wallet GPG signature on Mac and Linux

We are going to walk you through the GPG signature verification on the example of [Electrum, a popular OG bitcoin wallet](/glossary/electrum/).

You will need to use command line for this, but all the commands are listed and explained below.

{% amp700cloud page.image[1] %}

**Scammer Alert:** Always download Electrum from the official downloads page, `electrum.org/#download`. Electrum provides installers for all common operating systems, along with their GPG signatures.

#### Signature Verification Step by step

1. Download Electrum from the official website, electrum.org. You will need both the installer and the GPG signature file.
2. Open your Terminal to install the package that can verify GPG signatures.
    On Mac that will be `brew install gnupg`, on Linux `apt install gnupg`. This is really the fastest, easiest and safest way.
3. Look up GPG keys tied up with the domain electrum.org
    You do that like this: `gpg --locate-keys electrum.org`. There should only be a single answer.
    The true Electrum GPG has been published in 2011, which you should see in the pub line of the output.
     {% amp700cloud page.image[2] %}
4. Save this key to your computer. The key_id is a code-like string just below the date of publishing. It will start with something like 66AB....
    `gpg --output ~/btc.keyring --export <key_id>`
    You now have a new file at ~/btc.keyring.
5. Change to the folder where you have your Electrum installer.
    You've also got its GPG signature file there. That's the file that ends with `.asc`.
6. Verify that they are matching the Electrum GPG key you downloaded.
    `gpgv --keyring ~/btc.keyring ./<electrum-installer>.asc ./<electrum-installer>`
    The output should say "Good signature".
    {% amp700cloud page.image[3] %}

That's it!

If you followed all the steps above and got a Good signature, you can safely install the Electrum wallet.
