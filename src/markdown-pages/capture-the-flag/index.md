---
slug: '/capture-the-flag/guide'
date: '2019-05-04'
title: 'Guide to Capture The Flag'
---

# Introduction

### Author: Steve Bezalel (IF 2018)

This is a guide on how to start CTF, covering the basics on how to solve the problems, also where to go and what to learn from this point.


## WTF is CTF?

CTF (Capture the Flag) is a type of information security competition on which the contestants will be tasked to solve a number of challenges. To solve these challenges, the contestants may have to hack a system, leak certain data, or find a piece of text hidden somewhere in a webpage or a file. All these will give the contestants a flag in form of a text which will be accumulated to points hence the name **Capture the Flag**.

What differs CTF to other competitions is that the contestants are usually **encouraged** to do research on the Internet, be it some common vulnerabilities that other people has documented, or even some [zero-day attacks](https://www.kaspersky.com/resource-center/definitions/zero-day-exploit).

There are a few styles of CTF competition, namely Jeopardy, Attack-Defense, and Hack the Box. This guide will cover mostly regarding Jeopardy style CTF, as it is the most common one.

Flags in CTF are usually (but not always) a text of [leetspeak](https://en.wikipedia.org/wiki/Leet) wrapped within `CTFNAME{flag}`, e.g.:

```c++
CTFGUIDE{th1s_1s_4_fl4g}
```

### Subcategories in CTF

Challenges given in a CTF competition usually fall into these 6 main categories:
- Web Exploitation
- Binary Exploitation / Pwning
- Reverse Engineering
- Digital Forensics
- Cryptography
- Miscellaneous

Introductions and simple problems on each category will be explained in more detail in their own pages.

### Writeups

Writeups are step-by-step documentations made by contestants on how to solve certain problems. They are written after the competitions. There are tons of writeups of different sorts of problems on the Internet. These can be your guidelines on solving a similar challenges in a competition.

### Environment Setup

Before you start doing CTFs, it is **highly recommended** to learn and use UNIX-based OS, e.g. [ubuntu](https://ubuntu.com/) or even [kali linux](https://www.kali.org/). This is because most challenges require some kind of tools which might not be compatible in other systems. Moreover, learning and using these systems will be useful in other circumstances. You can use a virtualized environment e.g. [VirtualBox](https://www.virtualbox.org/), or install the OS native on your computer if you prefer.

## What's Next

Most competitions require experience, and what better way to earn some other than joining the competitions themselves. But joining a competition right away might be too hard. This guide and some other resources may help. CTF competitions are regularly posted in [CTFTime](https://ctftime.org/). After every CTF competitions, people usually post their writeups too. We encourage you to try joining these competitions and reading other people's writeups.
