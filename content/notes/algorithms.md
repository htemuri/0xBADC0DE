---
title: Algorithms
description: Notes on random algorithms learned
date: 2025/12/09
tags: [algorithms]
---

## Table Of Contents <!-- omit from toc -->
- [Rate limiting](#rate-limiting)
  - [Leaky Bucket](#leaky-bucket)

## Rate limiting

### Leaky Bucket

Enforces an average rate by using a counter as the "bucket". The counter is decremented at the desired rate and incremented as new inputs/tokens are ingested. The limiter rejects new inputs/tokens if the counter + token size exceeds the arbitrary max threshold. 
