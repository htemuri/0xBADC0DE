---
title: Data Structures
description: Notes on random data structures learned
date: 2025/12/15
tags: [data-structures]
---

## Table Of Contents <!-- omit from toc -->
- [Ring (Circular) Buffer](#ring-circular-buffer)
  - [Core Properties](#core-properties)
    - [Empty vs Full Problem](#empty-vs-full-problem)
  - [Basic Operations](#basic-operations)
  - [Cache \& Performance Characteristics](#cache--performance-characteristics)
    - [Power-of-Two Optimization](#power-of-two-optimization)
    - [Concurrency Considerations](#concurrency-considerations)



## Ring (Circular) Buffer

A ring buffer is a fixed-size array treated as if the end wraps back to the beginning.
	•	Two moving indices:
	•	head (read position)
	•	tail (write position)
	•	Indices advance modulo the buffer capacity.

Used when you want:
	•	bounded memory
	•	constant-time enqueue/dequeue
	•	predictable performance (no allocations)


### Core Properties

Fixed Capacity
	•	Size is decided up front.
	•	When full, you must decide a policy:
	•	reject writes
	•	overwrite old data
	•	block until space is available

Wrap-Around

Instead of shifting data, indices wrap:

index = (index + 1) % capacity

This is the entire trick.

#### Empty vs Full Problem

Because head == tail can mean either empty or full, common solutions are:

1. Keep a Count
	•	Track size
	•	Empty: size == 0
	•	Full: size == capacity

2. Leave One Slot Empty (Classic)
	•	Capacity N, usable slots = N - 1
	•	Empty: head == tail
	•	Full: (tail + 1) % N == head

3. Use a Full Flag
	•	Boolean full
	•	Cleared on read, set on write when tail catches head

### Basic Operations

Enqueue (Write)
	1.	Check if full
	2.	Write at tail
	3.	Advance tail

Dequeue (Read)
	1.	Check if empty
	2.	Read at head
	3.	Advance head

All O(1).

### Cache & Performance Characteristics
	•	Excellent cache locality
	•	No reallocations
	•	Very predictable latency
	•	Common in:
	•	audio buffers
	•	network stacks
	•	logging pipelines
	•	telemetry ingestion
	•	real-time systems

#### Power-of-Two Optimization

If capacity is a power of two:

index = index & (capacity - 1)

Instead of modulo:
	•	Faster
	•	Very common in high-performance code

This is why you’ll often see capacities like 1024, 4096, etc.

#### Concurrency Considerations

Single Producer / Single Consumer (SPSC)
	•	Can be lock-free
	•	Use atomic loads/stores for indices
	•	No contention on same variable

Multiple Producers / Consumers
	•	Usually requires:
	•	mutex
	•	CAS loops
	•	sequence counters
	•	Much harder to get right