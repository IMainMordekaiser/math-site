---
title: "My intuition behind Logistic Regression"
category: "Applied Mathematics"
level: "Medium"
tags:
summary: "Building intuition for logistic regression"
author: "Nguyen Duy Anh"
date: "2026-03-31"
favorite: false
---
We love linear regression because, turns out, the world is quite linearly dependent. Earnings is linearly dependent on hours worked, Uber fares are linearly dependent on travelled length, a person's wealth is linearly dependent on their parents' wealth, just to name a few. 

Rigorously speaking, the model looks like this: 
$$
Y = \beta_0 + X_1 \beta_1 + X_2 \beta_2 + ...
$$
where $Y$ is called the *dependent variable*, and $X_i$'s are called *predictor variables*.

While it is an incredibly powerful model with unfathomably many applications, it is not omnipotent. Specifically, the dependent variable can only be a *numerical* variable, like salary, fares, wealth, ... What if we also want to *classify* stuff? What if we want to know whether someone can get into Ivy League or not (categorical) based on their parents' wealth (and other stuff)?

Turns out, we can still use linear regression to do this (sort of)! Instead of only looking at the category, we look at the probability $p$ that something belongs in a category i.e. probability that someone can get into Ivy League, and hence the probability that they don't is $1 - p$. 

Now, $p$ varies from 0 to 1, so we still can't directly apply linear regression yet, so instead we use *odds*, whose formula is $\dfrac{p}{1-p}$. This now varies from $-\infty$ to $\infty$, but there's still one problem: small variance of $p$ can lead to huge changes in odds; if p goes from 0.999 to 0.9995, our odds literally doubles. To solve this, we take the *log odds*, which is $\ln(\dfrac{p}{1-p})$. This is now much better to do linear regression on:

$$
\ln(\dfrac{p}{1-p}) = \beta_0 + X_1 \beta_1 + X_2 \beta_2 + ...
$$

Rewrite this and we get

$$
p = \dfrac{1}{1 + e^{-(\beta_0 + X_1 \beta_1 + X_2 \beta_2 + \cdots)}}
$$

and voilà, logistic regression.