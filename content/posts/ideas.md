---
title: Project Ideas
description: List of project ideas that I eventually want to work on.
date: 2026/08/07
tags: [ideas]
---

I want to have a central repository of interesting project ideas that I either come up with or that I discovered online.


- [**Phoenix: Open Source "Frankenpad"**](/projects/phoenix-part0)
 
  Modernizing a ThinkPad X200 with a framework mainboard and other third party hardware. The project aims preserve the old ThinkPad aesthetic, functionality, and repairability while improving on some of its outdated features like the CPU, I/O, screen, and battery.

- **ShadowPhone: Open Source "dumb", yet secure phone**

  In this modern age of mass data harvesting, surveillance, social media addiction, and AI, I'm beginning to worry more and more about our rights to digital privacy and agency of our own thoughts and actions. I don't have to be the one to tell you that the greatest offender of this is your smartphone. It's the perfect balance of convenience, utility, and entertainment all wrapped up in a device that fits in your pocket. But it's those same perks that also feed people's obstinate unwillingness to fight back against algorithms designed to keep them addicted to their phones.

  There have been great movements to fight back against big tech in both privacy and social media addiction. [GrapheneOS](https://grapheneos.org/) is an awesome initiative to provide a truly secure mobile operating system, but it's only supported on Google's Titan M chip. Dumb phones are cellphones that try to limit your screentime and encourage "touching grass" by stripping functionality to just useful apps like maps, music playback, and messaging. I want to combine these two ideas and make a dumb phone that runs GrapheneOS. Unfortunately, the project is probably only possible if I tear down an existing Pixel and use its SOM in a custom phone chassis.

- **dotfiles: My complete, reproducible Linux desktop environment**

  I want a repo that manages my desktop configuration across all my environments. And because I might want something different depending on if it's my personal laptop, pc, or work laptop, I'll split them out in separate folders. Should look something like this:

  - *shared*: shared across all environments
  - *laptop*: laptop specific
  - *desktop*: home computer
  - *work*: work laptop (most likely windows-based, so I'll have to configure WSL2)

- **Cans: DIY Closed-back Headphones**

  I don't want to somehow make my own drivers, but I do want to design and build the headphone frames. They should be over-ear, closed-back headphones that are repairable and easy to assemble. I believe I'll need to buy one of those professional mannequin heads that can accurately measure headphones. In addition to that, we'll obviously need a 3d printer.

- **Keyboard: DIY Ergonomic Keyboard**

  Just a basic split ergonomic keyboard. Get to learn PCB design, driver programming, and case design. I'll use consumer switches and keycaps.

- **Astro: Rewriting my personal sites**

  I have two personal sites right now: [my portfolio](https://htemuri.github.io) and [my blog/content dump](https://htemuri.github.io/0xBADC0DE). These are both written with NextJS, and in the spirit of crafting lean software, I want to rewrite these to Astro. This isn't because my current sites are currently slow, it's just to simplify the code. I might also just go straight html/css for the portfolio and astro for the blog.

- **Server for synced notes**

  A server to store notes/tasks that supports mulitiple concurrent clients. I want to be able to create a note-taking client for linux and android that will allow me to record my thoughts and have them stored in one central location. Typically I would use something like signal's self message for notes and google keep for tasks, but I want something self-hosted for privacy and freedom to make changes.