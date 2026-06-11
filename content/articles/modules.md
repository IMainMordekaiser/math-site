---
title: "Modules"
slug: "modules"
category: "Pure Mathematics"
level: "Core"
tags:
  - "modules"
  - "rings"
  - "atiyah-macdonald"
summary: "Definition and basic properties of modules"
author: "Nguyen Duy Anh"
date: "2026-03-22"
favorite: true
---

Modules generalize vector spaces by allowing scalars to come from a ring.

## Definition

Let $A$ be a ring. An **$A$-module** is an abelian group $M$ together with a scalar multiplication
$A \times M \to M$
satisfying the usual axioms.

## First examples

- Every ideal of $A$ is an $A$-module.
- Every abelian group is a $\mathbb{Z}$-module.

## Quotients

If $N \subseteq M$ is a submodule, then $M/N$ is again an $A$-module.

$$
(a+b)m = am + bm, \qquad a(m+n)=am+an
$$