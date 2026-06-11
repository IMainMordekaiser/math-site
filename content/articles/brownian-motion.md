---
title: "Random Walk and Brownian Motion"
category: "Applied Mathematics"
level: "Medium"
tags:
  - "Stochastic Calculus"
summary: "From random walks to Brownian motion"
author: "Nguyen Duy Anh"
date: "2026-03-30"
favorite: false
---
### 1) Random Walk
Consider a random variable 

$X_i =
\begin{cases}
+\Delta x & \text{with probability } p = 0.5 \\
-\Delta x & \text{with probability } 1 - p = 0.5
\end{cases}$

, and let $S_n = \sum_{i = 0}^n X_i$. Then, $S_n$ is defined to be the *random walk* after n steps. Often, we take $X_0 = 0$. It has several important properties:

- $\mathbb{E}[S_n] = 0$
- $\mathrm{Var}(S_n) = n \cdot (\Delta x)^2$
- By CLT, $S_n \approx \mathcal{N}(0, n \cdot (\Delta x)^2)$ as $n \rightarrow \infty$

### 2) Brownian Motion
While we could model stock price as a random walk, it is often better to use a continuous time model.

Set $t = n \cdot \Delta t$, and we get $S_n \approx \mathcal{N}(0, \dfrac{t}{\Delta t} \cdot (\Delta x)^2)$. To make this process continuous, we want to take the limit as $\Delta t \rightarrow 0$. As we shrink $\Delta t$, $\Delta x$ needs to shrink accordingly to maintain finite variance. Therefore we have to find a function $f$ such that $\Delta x = f(\Delta t)$ and
$\lim_{\Delta t \to 0} \frac{t}{\Delta t}\,(f(\Delta t))^2$
remains finite.

$\Delta x = \sqrt{\Delta t}$ works wonders for us - any power other than $\dfrac{1}{2}$ and the variance either approaches infinity or 0 as $\Delta t$ shrinks. This leads us to the *Brownian motion*:

$$
W_t = \lim_{\Delta t \to 0} S_n \quad \text{with } \Delta x = \sqrt{\Delta t}
$$

Properties of Brownian motion:

- $W_0 = 0$ (starts at zero)
- $W_t$ has independent increments
- $W_t$ has normally distributed increments: $W_t - W_s \sim \mathcal{N}(0, t - s)$ for $0 \le s < t$
- $W_t$ has continuous paths, but is nowhere differentiable

A Brownian motion is *nowhere differentiable* since
$$
\lim_{h \to 0} \frac{W_{t+h} - W_t}{h}
= \lim_{h \to 0} \frac{\sqrt{h}\,Z}{h}
= \lim_{h \to 0} \frac{Z}{\sqrt{h}}
= \infty
$$
where $Z = \mathcal{N}(0, 1)$ ($W_{t+h} - W_t = \mathcal{N}(0, h) = \sqrt{h}\,Z$)

Squared increments of a Brownian motion are *non-zero*.

Proof:
$\mathbb{E}[(dW_t)^2] = \mathrm{Var}(dW_t) = \mathrm{Var}(W_{t+dt} - W_t) = \mathrm{Var}(\mathcal{N}(0, dt)) = dt$

$\mathrm{Var}((dW_t)^2) = \mathbb{E}[(dW_t)^4] - \left(\mathbb{E}[(dW_t)^2]\right)^2 = 3dt^2 - dt^2 = 2dt^2.$ (I haven't checked, or as mathematicians would say, "this is left as an exercise for the reader")

As $dt \to 0$, the variance goes to zero faster than the mean, which converges to $dt$.

