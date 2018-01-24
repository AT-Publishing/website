---

published: true
comments: false

layout: security
title: "Storing cryptocurrency wallets on virtual machines"
description: "How to use Virtualbox for your altcoin wallets or not very much trusted wallets storing forked coins."
tags:
- "bitcoin-fork"
- "virtualbox"
- "altcoin-wallets"
- "software"
categories:
- "software"
slug: virtualbox

image:
- "/editorial/bagholders.jpg"
image_alt:
- "How to use Virtualbox for altcoin wallets. Bagholders image via Pexels."

date: 2017-12-15 12:22:00 +0700
update: 2017-12-15 16:31:00 +0100

---

> If you are installing wallets that you do not trust very much (as with Bitcoin forks) you should do that on a separate device. But at the current rate you will soon run out of devices.

If you are looking to get safeish device, different from the one you use daily, to store a crypto wallet but you don't want to carry seventeen Android phones on you maybe you could make use of virtual machines.

They are like a separate device inside of your computer, they work on Mac, Windows and Linux laptops and it is not difficult to handle them. Great thing is you can have an Android machine in your laptop which was originally used by web developers for testing but as for crypto trading is concerned, it is a good way to have a wallet on a Linux-based machine without having to get used to working with a Linux laptop.

#### Is this secure?

[It is not true that you cannot get from your computer into your virtual computer and the other way around](https://security.stackexchange.com/questions/3056/how-secure-are-virtual-machines-really-false-sense-of-security). The virtual machine is sharing resources with the physical machine so there can be a virus targeted to exploit that.

The advantage here is that it's not very likely as VMs are not a popular solution, especially not for cryptocurrecies where particularly the new lambo crop of altcoin traders isn't geeky at all. You get further plus points if you do this on <a class="internal" href="/security/device-management">a Linux machine that is not being used in a risky manner itself</a>, and it is quite a good balance of convenience and reasonable mistrust for a Linux  machine that has Electrum with bitcoins on it that you are looking to split after a fork.

Storing cryptocurrencies on a virtual machine is nowhere near cold storage though.

## What cryptocurrecies is this solution suitable for?

Quite some, actually. Androids are hugely popular pretty much everywhere other than the US so a lot of coins have an Android wallet. Ideally the wallet is available from the Google Play Store but you should be able to install it from source too. You can also use this device (or a Linux device set up as virtual machine) to access web interfaces like mymonerowallet or myetherwallet without having the history of it on your laptop.

**Available Android hot wallets and multicoin wallets from the Play Store:**

* [Jaxx](https://play.google.com/store/apps/details?id=com.kryptokit.jaxx&hl=en) - huge amount of altcoins, [list here](https://decentral.zendesk.com/hc/en-us/articles/218373867-Which-tokens-does-Jaxx-support-)
* [Coinomi](https://play.google.com/store/apps/details?id=com.coinomi.wallet&hl=en) - huge amount of smaller altcoins, [list here](https://coinomi.com/#supported-coins)
* [Freewallet](https://play.google.com/store/apps/details?id=ltcc.org.freewallet.app) - for BTC & forks, LTC, ETH & forks, STEEM, ZCASH, XMR, EOS, BANCOR, TETHER, ERC20 Tokens, XRP

**Single coin wallets from the Play store:**

* [Electrum for Bitcoin](https://play.google.com/store/apps/details?id=org.electrum.electrum)
* [BCH ElectronCash](https://play.google.com/store/apps/details?id=org.electroncash.electroncash&hl=en)
* [Stratis](https://play.google.com/store/apps/details?id=com.stratis.live)
* [IOTA mobile wallet in beta](https://play.google.com/store/apps/details?id=org.iota.wallet)
* [ETH Lunary wallet](https://play.google.com/store/apps/details?id=com.rehanced.lunary)
* [Dash wallet](https://play.google.com/store/apps/details?id=hashengineering.darkcoin.wallet)
* [NEO app](https://play.google.com/store/apps/details?id=neo.app)
* [Byteball client](https://play.google.com/store/apps/details?id=org.byteball.wallet)
* [QTUM wallet](https://play.google.com/store/apps/details?id=org.qtum.wallet)
* [LTC Loafwallet](https://play.google.com/store/apps/details?id=com.loafwallet)


In this post I'll go with Android virtual machine on an [Elementary OS](https://elementary.io/) Linux computer but there are next to no differences for computers with other OS. The result will be a "tablet" inside of your laptop, so as a little heads up - it gets controlled by touch which doesn't work very well with mouse (you need to click and hold).


## Setting up Android machine in Virtualbox

What you'll need is the software for the virtualization - download [VirtualBox from here](https://www.virtualbox.org/wiki/Downloads) - and an [Android ISO](http://www.android-x86.org/download). It's quite a lot of data to download, the Android image will have about 800 MB.

First things first, install VirtualBox.

![](/sec/virtualbox-setup/1androidiso.jpeg)

Go to http://www.android-x86.org/download and get the ISO file of the latest Android. I am going with the 64 bit 7.1 here.

![](/sec/virtualbox-setup/2virtualbox.jpeg)

Now create the virtual machine on which you will use the Android: Open VirtualBox and click "New".

![](/sec/virtualbox-setup/3.jpeg)

Name the machine (doesn't matter), say it is a Linux - Other Linux x86.

![](/sec/virtualbox-setup/4.jpeg)

For the rest of the setup you can go with defaults - you will have VDI disk image with some amount of disk space and RAM allocated.

![](/sec/virtualbox-setup/5.jpeg)

That created a machine that is ready to have the Android installed on it. Start it up clicking on "Start".

![](/sec/virtualbox-setup/6.jpeg)

You will be asked to select a startup disk - this is where you select the Android ISO you downloaded.

Here comes the installation.

![](/sec/virtualbox-setup/7.jpeg)

Create a new partition - select "New", press enter.

![](/sec/virtualbox-setup/8.jpeg)

Press enter while on bootable and navigate to "Write", enter. Confirm by typing in "yes", enter.

When it's done you'll have an sda1 partition, go to "Quit", enter.

![](/sec/virtualbox-setup/8i.jpeg)

The installer will take you to dialog to format the partition - select sda1, enter.

Select ext4 and format the disk.

Choose YES from now on - you really want to format, you want GRUB and you want that whatever directory writeable.


![](/sec/virtualbox-setup/9.jpeg)

When it finishes you are done, the Android device will launch on next start of the machine.

![](/sec/virtualbox-setup/10unmount.jpeg)

Before you reboot the machine to launch your Android you need to unmount the ISO because otherwise the machine will keep attempting to reinstall Android. In Virtualbox menu go to Devices > Optical Drives and unselect the ISO.

Restarting the device will take you to the Android setup, the same thing you'd do on a phone.

![](/sec/virtualbox-setup/11.jpeg)

Set up the device as a new device with Google account. You need a Google account because you need access to the Play Store but sometimes there is a problem if you try and setup a new account. You can still try though.

![](/sec/virtualbox-setup/12.jpeg)
![](/sec/virtualbox-setup/13.jpeg)

The last step is to launch the Play Store and looking up app the wallet you want.

![](/sec/virtualbox-setup/15play.jpeg)

![](/sec/virtualbox-setup/15.jpeg)

When you have the app you setup a new wallet like you normally would and backup your seed on a piece of paper because that's the easiest fool-proof way.

![](/sec/virtualbox-setup/16voila.jpeg)

And that is it. If something happens to your laptop or to the VirtualBox you will have access to your coins if you backed up your seed on that paper, like said before. If you want to save yourself the hassle of going through this neckbeard hell again you can backup the entire machine as well so that you'll be able to import it into another VirtualBox installation with just a couple of clicks.

The cryptocurrency wallets will synchronize when you launch them so there's no need to do the backup regularly. You really just need to do it once after your wallet(s) have been set up. [Here is a tutorial for the backup if you're up for it](https://www.howtogeek.com/howto/36870/how-to-backup-and-move-virtualbox-machines/) - it is not an easy piece of cake though, being you I'd be pretty happy with the pencil and paper solution.

<style>

img {max-width: 100%}
article ul > li > a {text-decoration: underline}
</style>
