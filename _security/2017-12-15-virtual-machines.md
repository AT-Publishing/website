---
layout:       security
title:        "Virtual Machine Crypto Wallets: Should You Bother?"
description:  "When does it make sense to put a crypto wallet on a virtual machine? Includes a full walkthrough tutorial on how to set up a cryptocurrency wallet in Virtualbox."
tags:           [crypto-wallets, virtual-machine, cold-storage, wallet-security, crypto-security]
categories:     [homelab, tutorial]
promoting:      entertainment
slug:           virtualbox
date:           2017-12-15 12:22:00 +0700

image:          ["https://res.cloudinary.com/atnetcloud/image/upload/v1586242335/atnet/cybersecurity/black-laptop-beside-audio-mixer-set-919734_ae2uzl.jpg"]
image_alt:
- "How to use Virtualbox for crypto wallets. Bagholders image via Pexels."

---

Does it make sense to install your desktop crypto wallets on a virtual machine?

Only in some cases.

## Don't Do It: Virtual Machine Bitcoin Wallet for Security

If you were looking for a way to set up a [cold wallet](/altcoin-wallets/) for your bitcoin stash without having to invest in a hardware wallet or a [spare device for tiered crypto storage management](/device-management/), here's the bad news for you.

Putting your bitcoin wallet into a virtual machine **does not protect it** from malicious software that gets into the computer that hosts it.

It is [possible for a program on a computer to access contents of a virtual machine](https://security.stackexchange.com/questions/3056/how-secure-are-virtual-machines-really-false-sense-of-security) and it is also possible for a program on a virtual machine to access its host computer.

The virtual machine and its host computer are sharing the same resources, this link can be targeted and exploited.

The only advantage left for you to rely on here is the fact that very few people would resort to virtual machines for their crypto storage.

However, this is not a good reason. To a malware developer, adding a VM-targeting method to their script is a matter of some lines of code that are written once and don't cost extra to deploy on any number of victim machines.

**In short: Don't do this.** Storing cryptocurrencies on a virtual machine is nowhere near cold storage.

Get a Ledger hardware wallet, they run discount offers comparable with Black Friday several times each year.

<p><a href="/blackfriday/" class="btn">Go to Eternal Black Friday ></a></p>

## Go Ahead: Virtual Machine Crypto Wallet Due to Lack of Devices

If you are installing crypto wallets that you do not trust too much (such as with Bitcoin forks or [crypto airdrops](/airdrops/)), technically you should do that on a separate device each time around.

But at the current rate you would probably need to carry around seventeen thousand Android phones.

#### Airdrops & Forks

At the same time, most airdrop and fork campaigns are not malicious, and it's also not usually life changing amount of money. In this case, it is reasonable to use an Android in a virtual machine to store your altcoin wallets.

#### Android app download to collect bounty

Another good use-case are bounty campaigns. Many ERC-20 tokenized apps will pay out bounties in TRX, BTC or ETH when you download their Android app. Typically, this is a launch promo and it's done to boost their numbers.

Virtual machine is a great way to do it because you will fulfill the condition but you won't clutter your phone with garbage apps you will never use again (let's face it).

**You can have a virtual Android device on Mac, Windows and Linux laptops.**

## Tutorial: Get a Virtual Machine Crypto Wallet

In this post I'll go with Android virtual machine on an [Elementary OS](https://elementary.io/) (Linux).

There are only small differences for Mac and Windows.

The result will be a tablet screen inside of your laptop. It is controlled by touch which translates well into touchpad. If you use mouse, you need to click and hold.

#### First things first, install VirtualBox.

What you'll need is the software for the virtualization.

Download [VirtualBox from here](https://www.virtualbox.org/wiki/Downloads) - and an [Android ISO](http://www.android-x86.org/download). FYI, the Android ISO has about 800 MB.

*(Full-size version of the image opens on click)*

<amp-img itemprop="image" alt="Altcoin Trading Security"
 src="https://res.cloudinary.com/atnetcloud/image/upload/v1586239225/atnet/cybersecurity/1androidiso_ctht1f.jpg" layout="responsive"
 data-original-width="753px" data-original-height="823px"
width="753px" height="823px"></amp-img>

**Step 1** Go to `http://www.android-x86.org/download` and get the ISO file of the latest Android. I am going with the 64 bit 7.1 here.

<amp-img itemprop="image" alt="Altcoin Trading Security"
 src="https://res.cloudinary.com/atnetcloud/image/upload/v1586239225/atnet/cybersecurity/2virtualbox_jtcljx.jpg" layout="responsive"
 data-original-width="1920px" data-original-height="1080px"
width="753px" height="423px"></amp-img>

**Step 2** Now create the virtual machine on which you will use the Android: Open VirtualBox and click "New".

<amp-img itemprop="image" alt="Altcoin Trading Security"
 src="https://res.cloudinary.com/atnetcloud/image/upload/v1586239225/atnet/cybersecurity/3_zvj1na.jpg" layout="responsive"
 data-original-width="1920px" data-original-height="1080px"
width="753px" height="423px"></amp-img>

**Step 3** Name the machine (doesn't matter), say it is a Linux - `Other Linux x86`.

<amp-img itemprop="image" alt="Altcoin Trading Security"
 src="https://res.cloudinary.com/atnetcloud/image/upload/v1586239225/atnet/cybersecurity/4_h18rjg.jpg" layout="responsive"
 data-original-width="1920px" data-original-height="1080px"
width="753px" height="423px"></amp-img>

**Step 4** For the rest of the setup you can go with defaults. You will have VDI disk image with some amount of disk space and RAM allocated.

<amp-img itemprop="image" alt="Altcoin Trading Security"
 src="https://res.cloudinary.com/atnetcloud/image/upload/v1586239225/atnet/cybersecurity/5_jodpln.jpg" layout="responsive"
 data-original-width="1920px" data-original-height="1080px"
width="753px" height="423px"></amp-img>

#### Setting up Android phone in Virtualbox

**Step 1** You have created a virtual machine that is ready to have the Android installed on it. Now start it up by clicking on "Start".

<amp-img itemprop="image" alt="Altcoin Trading Security"
 src="https://res.cloudinary.com/atnetcloud/image/upload/v1586239225/atnet/cybersecurity/6_ckab8e.jpg" layout="responsive"
 data-original-width="1920px" data-original-height="1080px"
width="753px" height="423px"></amp-img>

**Step 2** You will be asked to select a startup disk. Select the Android ISO you downloaded. This will take you to the installation.

<amp-img itemprop="image" alt="Altcoin Trading Security"
 src="https://res.cloudinary.com/atnetcloud/image/upload/v1586239226/atnet/cybersecurity/7_salf6a.jpg" layout="responsive"
 data-original-width="1920px" data-original-height="1080px"
width="753px" height="423px"></amp-img>

**Step 3** Create a new partition - select "New", press enter.

<amp-img itemprop="image" alt="Altcoin Trading Security"
 src="https://res.cloudinary.com/atnetcloud/image/upload/v1586239226/atnet/cybersecurity/8_uktyag.jpg" layout="responsive"
 data-original-width="1920px" data-original-height="1080px"
width="753px" height="423px"></amp-img>

**Step 4** Press enter while on bootable and navigate to "Write", enter. Confirm by typing in "yes", enter.

When it's done you'll have an sda1 partition, go to "Quit", enter.

<amp-img itemprop="image" alt="Altcoin Trading Security"
 src="https://res.cloudinary.com/atnetcloud/image/upload/v1586239226/atnet/cybersecurity/8i_gcmvpq.jpg" layout="responsive"
 data-original-width="1920px" data-original-height="1080px"
width="753px" height="423px"></amp-img>

**Step 5** The installer will take you to dialog to format the partition - select sda1, enter.

Select ext4 and format the disk.

Choose `YES` from now on - you DO really want to format, you DO want GRUB and you DO want that whatever directory writeable.


<amp-img itemprop="image" alt="Altcoin Trading Security"
 src="https://res.cloudinary.com/atnetcloud/image/upload/v1586239227/atnet/cybersecurity/9_e1wtsp.jpg" layout="responsive"
 data-original-width="1920px" data-original-height="1080px"
width="753px" height="423px"></amp-img>

**Step 6** You are **almost** done.

<amp-img itemprop="image" alt="Altcoin Trading Security"
 src="https://res.cloudinary.com/atnetcloud/image/upload/v1586239226/atnet/cybersecurity/10unmount_f9boxf.jpg" layout="responsive"
 data-original-width="1920px" data-original-height="1080px"
width="753px" height="423px"></amp-img>

Before you reboot the machine to launch your fake Android phone, **unmount the ISO**. If you don't, the machine will keep attempting to reinstall Android.

So, go to Virtualbox menu and open `Devices > Optical Drives` to **unselect the ISO**.

#### Create a Virtual Machine Crypto Wallet

**Step 1** Restart the virtual machine device. This will take you to the Android setup. It's exactly the same thing as you do when you buy a new phone.

<amp-img itemprop="image" alt="Altcoin Trading Security"
 src="https://res.cloudinary.com/atnetcloud/image/upload/v1586239226/atnet/cybersecurity/11_qi8jfh.jpg" layout="responsive"
 data-original-width="1920px" data-original-height="1080px"
width="753px" height="423px"></amp-img>

**Step 2** Set up the device as a new device with Google account. -- You need a Google account to get access to the Play Store where the crypto wallet apps are.

<amp-img itemprop="image" alt="Altcoin Trading Security"
 src="https://res.cloudinary.com/atnetcloud/image/upload/v1586239227/atnet/cybersecurity/12_bewdoc.jpg" layout="responsive"
 data-original-width="1920px" data-original-height="1080px"
width="753px" height="423px"></amp-img>


<amp-img itemprop="image" alt="Altcoin Trading Security"
 src="https://res.cloudinary.com/atnetcloud/image/upload/v1586239227/atnet/cybersecurity/13_nzbcpk.jpg" layout="responsive"
 data-original-width="1920px" data-original-height="1080px"
width="753px" height="423px"></amp-img>

**Step 3** The last step is to launch the Play Store. Go ahead and look up the crypto wallet you want to use.

<amp-img itemprop="image" alt="Altcoin Trading Security"
 src="https://res.cloudinary.com/atnetcloud/image/upload/v1586239227/atnet/cybersecurity/15play_wfalts.jpg" layout="responsive"
 data-original-width="1920px" data-original-height="1080px"
width="753px" height="423px"></amp-img>


<amp-img itemprop="image" alt="Altcoin Trading Security"
 src="https://res.cloudinary.com/atnetcloud/image/upload/v1586239227/atnet/cybersecurity/15_k3ao5i.jpg" layout="responsive"
 data-original-width="1920px" data-original-height="1080px"
width="753px" height="423px"></amp-img>

From here it's all like on a regular phone: Create a new wallet, backup your seed on a piece of paper, start using it...

<amp-img itemprop="image" alt="Altcoin Trading Security"
 src="https://res.cloudinary.com/atnetcloud/image/upload/v1586239228/atnet/cybersecurity/16voila_iwm6m4.jpg" layout="responsive"
 data-original-width="1920px" data-original-height="1080px"
width="753px" height="423px"></amp-img>

And that is it.

## What cryptocurrecies is this solution suitable for?

Any cryptocurrency that has an Android wallet on the official Google Play store.

Androids are hugely popular pretty much everywhere other than the US, so most cryptos offer an Android wallet.

Just don't install anything sketchy. Remember, malware can escape from the virtual machine into your host machine too.

**Available Android hot wallets and multicoin wallets from the Play Store:**

* [Jaxx for Android](https://play.google.com/store/apps/details?id=com.kryptokit.jaxx&hl=en) - huge amount of altcoins, [list here](https://decentral.zendesk.com/hc/en-us/articles/218373867-Which-tokens-does-Jaxx-support-)
* [Coinomi for Android](https://play.google.com/store/apps/details?id=com.coinomi.wallet&hl=en) - huge amount of altcoins, [list here](https://coinomi.com/#supported-coins)

**Single coin wallets from the Play Store:**

* [Android Electrum for Bitcoin](https://play.google.com/store/apps/details?id=org.electrum.electrum)
* [Android BCH ElectronCash](https://play.google.com/store/apps/details?id=org.electroncash.electroncash&hl=en)
* [Android Stratis](https://play.google.com/store/apps/details?id=com.stratis.live)
* [Android IOTA mobile wallet in beta](https://play.google.com/store/apps/details?id=org.iota.wallet)
* [Android ETH Lunary wallet](https://play.google.com/store/apps/details?id=com.rehanced.lunary)
* [Android Dash wallet](https://play.google.com/store/apps/details?id=hashengineering.darkcoin.wallet)
* [Android NEO app](https://play.google.com/store/apps/details?id=neo.app)
* [Android Byteball client](https://play.google.com/store/apps/details?id=org.byteball.wallet)
* [Android QTUM wallet](https://play.google.com/store/apps/details?id=org.qtum.wallet)
* [Android LTC Loafwallet](https://play.google.com/store/apps/details?id=com.loafwallet)
* ...
