---
title: Computer Architecture
description: Notes on the book "Computer Architecture, A Quantitative Approach"
date: 2025/03/17
---

## Table Of Contents <!-- omit from toc -->

- [Chapter 1](#chapter-1)
  - [1.1 Introduction](#11-introduction)
  - [1.2 Classes of Computers](#12-classes-of-computers)
    - [Flynn's Taxonomy of Computer Architectures:](#flynns-taxonomy-of-computer-architectures)
  - [1.3 Defining Computer Architecture](#13-defining-computer-architecture)
  - [1.4 Trends in Technology](#14-trends-in-technology)
  - [1.8 Measuring, Reporting, and Summarizing Performance](#18-measuring-reporting-and-summarizing-performance)


## Bookmark <!-- omit from toc -->

Stopped reading at page: **`36`**

> [!Note]
> 
> After finishing the book, go over:
> - *Memory Hierarchy*: Appendix B, Chapter 2, and Appendix D.
> - *Instruction-Level Parallelism*: Appendix C, Chapter 3, and Appendix H
> - *Data-Level Parallelism*: Chapters 4 and 6, Appendix G
> - *Thread-Level Parallelism*: Chapter 5, Appendices F and I
> - *Request-Level Parallelism*: Chapter 6
> - *ISA*: Appendices A and K


## Chapter 1

### 1.1 Introduction

RISC (Reduced Instruction Set Computer) enabled by C and UNIX/LINUX focused on two performance techniques:
1. ILP (Instruction level parallelism)
2. Caches

Intel x86 (80x86) → CISC (with internal RISC-like execution)<br/>
ARM → Pure RISC

### 1.2 Classes of Computers

**Hard real-time system** has absolute deadlines, and if those allotted time spans are missed, a system failure will occur.<br/>
In **soft real-time systems**, the system continues to function even if missing a deadline, but with undesirable lower quality of output.

> There are basically two kinds of parallelism in applications:
> 1. *Data-Level Parallelism (DLP)* arises because there are many data items that can be operated on at the same time.
> 2. *Task-Level Parallelism (TLP)* arises because tasks of work are created that can operate independently and largely in parallel.
>
>Computer hardware in turn can exploit these two kinds of application parallelism in four major ways:
> 1. *Instruction-Level Parallelism* exploits data-level parallelism at modest levels with compiler help using ideas like pipelining and at medium levels using ideas like speculative execution.
> 2. *Vector Architectures and Graphic Processor Units (GPUs)* exploit data-level
parallelism by applying a single instruction to a collection of data in parallel.
> 3. *Thread-Level Parallelism* exploits either data-level parallelism or task-level parallelism in a tightly coupled hardware model that allows for interaction among parallel threads.
> 4. *Request-Level Parallelism* exploits parallelism among largely decoupled tasks specified by the programmer or the operating system.

#### Flynn's Taxonomy of Computer Architectures:

1. **Single Instruction Stream, Single Data Stream (SISD)**
   - A standard uniprocessor executing one instruction at a time.
   - Exploits **instruction-level parallelism (ILP)** through methods like superscalar and speculative execution.

2. **Single Instruction Stream, Multiple Data Streams (SIMD)**
   - Multiple processors execute the **same instruction** simultaneously on **different data**.
   - Exploits **data-level parallelism (DLP)**.
   - Examples: vector processors, multimedia instructions, GPUs.

3. **Multiple Instruction Streams, Single Data Stream (MISD)**
   - Theoretical; no commercial systems exist.
   - Included primarily for completeness.

4. **Multiple Instruction Streams, Multiple Data Streams (MIMD)**
   - Multiple processors independently fetch instructions and process data.
   - Targets **task-level parallelism (TLP)**.
   - More flexible but also more complex and expensive.
   - Two types:
     - **Tightly coupled MIMD**: focuses on **thread-level parallelism** with cooperating threads.
     - **Loosely coupled MIMD**: includes clusters and warehouse-scale systems that exploit **request-level parallelism**.

### 1.3 Defining Computer Architecture

An **Instruction Set Architecture (ISA)** defines the interface between hardware (CPU) and software (programs), describing how instructions are executed by a processor.

1. **Class of ISA**:
   - Most ISAs today are **general-purpose register architectures**.
   - Two main classes:
     - **Register-memory ISA** (e.g., 80x86): Instructions can directly operate on memory.
     - **Load-store ISA** (e.g., ARM, MIPS): Memory access only through load/store instructions.

2. **Memory Addressing**:
   - Commonly uses **byte addressing**.
   - ARM and MIPS require **alignment** (address divisible by data size), while 80x86 does not, although aligned access is faster.

    | Size (`s`) | Address (`A`) | Aligned? (`A mod s = 0`)        |
    |------------|---------------|---------------------------------|
    | 4 bytes    | `0x0004`      | ✅ Yes (`0x0004 mod 4 = 0`)      |
    | 4 bytes    | `0x0005`      | ❌ No (`0x0005 mod 4 = 1`)       |
    | 8 bytes    | `0x0010`      | ✅ Yes (`0x0010 mod 8 = 0`)      |
    | 8 bytes    | `0x0014`      | ❌ No (`0x0014 mod 8 = 4`)       |

    ARM and MIPS ***NEED*** to be aligned!



3. **Addressing Modes**:
   - Determine how memory locations are specified.
   - **MIPS**: Register, Immediate, Displacement.
   - **80x86**: More complex, including absolute, based-indexed, scaled indexed addressing.
   - **ARM**: Similar to MIPS but also supports PC-relative, auto-increment, and auto-decrement modes.

4. **Operand Types and Sizes**:
   - Common sizes: 8-bit, 16-bit, 32-bit, 64-bit.
   - Floating-point (IEEE 754) in 32-bit and 64-bit; 80x86 also supports 80-bit floating-point.

5. **Operations**:
   - Categories: Data transfer, arithmetic/logical, control, floating-point operations.
   - **MIPS** is simple (RISC), easy to pipeline; **80x86** has richer, complex instructions (CISC).

6. **Control Flow Instructions**:
   - Support for conditional branches, jumps, procedure calls, and returns.
   - Use PC-relative addressing.
   - Differences in how conditions are tested (e.g., condition registers vs. general-purpose registers).

7. **Encoding**:
   - **Fixed-length** instructions (e.g., ARM, MIPS): simpler decoding.
   - **Variable-length** instructions (e.g., 80x86): smaller program size but complex decoding.
   - ARM and MIPS have compact instruction extensions (Thumb/Thumb-2, MIPS16) to reduce program size.


### 1.4 Trends in Technology

**Moore's Law** states that the observation that the number of transistors on computer chips doubles approximately every two years.

**Bandwidth or throughput** is the total amount of work done in a given time, such as megabytes per second for a disk transfer. In contrast, **latency or response time** is the time between the start and the completion of an event, such as milliseconds for a disk access.


![Intel Core i7 die floorplan](/notes/computer-arch-1/core-i7-layout.png)

### 1.8 Measuring, Reporting, and Summarizing Performance