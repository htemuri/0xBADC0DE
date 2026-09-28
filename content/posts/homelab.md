---
title: My Homelab
description: How I return to owning my software and media
date: 2026/09/27
tags: [homelab, privacy, security, networking]
---

If you have read my ever growing list of ideas on this site, you will know that a lot of what I want to accomplish requires owning and configuring hardware to selfhost services. The biggest obstacle for this prerequisite, in my opinion, is the initial cost burden. The primary building blocks of a homelab are memory, storage, compute, and networking. Of the four, two have exploded in demand leading to a shortage in supply, and ultimately unreasonably high prices. Luckily for me, though, I bought all my server hardware at the start of 2023.

## Goal

Before I get into what I currently own, let me just run through my goals with the homelab. A lot of what I've been wanting these days is related to my digital privacy. You can read about it at length in the [OPSEC post](/posts/opsec), but essentially I want to hide all my traffic from my ISP/Telecoms carrier and I want to remove as many avenues of my data being harvested as possible. Related to the latter of the previous point, part of removing data tracking is to not use services that track/store your data. This includes basically everything you interact with online: email, social media, maps, video content, searching, online shopping, etc... An added benefit of replacing services is more money in your wallet every month. Here is what I want to accomplish with the lab:

1. Hide my rental WAN traffic from my ISP
2. Hide my cellular traffic from my telecoms provider
3. Provide me with aliases for email and phone numbers
4. Access my lab from anywhere with an internet connection
5. Replace the following services with my selfhosted version (or with a private client):
   - Netflix
   - Youtube
   - Gmail
   - Google Drive
   - Proton Pass
   - Spotify
   - Google Photos
   - Dictionary
   - Translator
   - Discord
   - News Sites
6. Consolidate my notes/ideas
7. Never worry about data loss. Sync everything with automatic backups and snapshots.
8. Add resiliency to physical issues like power outages or other _acts of god_.

## Current Hardware

##### Servers
- 2 x Dell R730 Servers each with 2xE5-2680v4 CPUs, 128GB DDR4 ECC RAM, Perc H730 Raid Controller, 2x512GB Samsung PM871a SATA SSDs
- 1 x Dell R730xd 24 SFF with 2xE5-2667v4 CPUs, 128GB DDR4 ECC RAM, Perc H330 HBA, 10x1.92TB Samsung PM863a SATA SSDs
- 1 x Dell R430 with E5-2620v4, 32GB DDR4 ECC RAM, Perc H330 Mini, 1x250GB Crucial MX500 SATA SSD

##### Networking
1 x Mikrotik RB5009UG+S+in Router
1 x TPLink TL-SG1024DE, 24 Port Gigabit Managed Switch

## Networking Setup

In order to accomplish goal 4 which is to "access my lab from anywhere with an internet connection," we will setup [Pangolin](https://pangolin.net/). Pangolin is basically like an open source version of [Twingate](https://www.twingate.com/) which allows you to access your network via a public bridge node - removing the need to publicly expose any ports on your network. Pangolin, like Twingate, also adds a layer of identity-based access so you can, instead of giving access to your entire network, limit who can reach what applications/subnets on your LAN.

That takes care of remote access, but in order to cross off goals 1 and 2, we'll make our internal network's WAN traffic route through a no-logs VPN like ProtonVPN. How is that better than just letting your ISP see your traffic? In America, ISPs can legally sell your data to third parties and one of my goals is to avoid data tracking services. Whether or not the "no-logs" claim by VPN companies can be trusted is widely debated, but ProtonVPN has consistenly proven that there is merit to THEIR claim of no logging. Adding an extra hop (or multiple) to all of your traffic can also affect your reliability. I've experimented with the all WAN through VPN thing with ProtonVPN before and had troubles because of their unwarned, scheduled VPN maintenance. So, this time, I want to see if I can setup a failover/HA setup for my VPN WAN routing.

In terms of intranet security, I want to set some strict firewalls/VLANs so that compromised internal services can't affect other internal services in the network. We'll also configure automatic TLS cert management for https on private domains for convenience.

