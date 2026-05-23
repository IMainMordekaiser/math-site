---
title: "Morphisms(?)"
category: "Pure Mathematics"
level: "Hard"
tags:
summary: "I do not know what I am about to learn"
author: "Dilemma Lucis"
date: "2026-04-17"
favorite: false
---
And we're back at it with Hartshorne's, it's been a week or so I suppose. This time we're learning about morphisms between different types of varieties I suppose? I don't know, I've never studied this. 
***
We want to define a *morphism* of varieties to have a category to work with. First we discuss the regular functions on a variety. 

Let $Y$ be a quasi-affine variety in $\A^n$, and consider functions $f$ from $Y$ to $k$, the field:

**Definition:** A function $f: Y \rightarrow k$ is regular at a point $P \in Y$ if there is an open neighborhood $U$ with $P \in U \subseteq Y$, and polynomials $g, h \in A = k[x_1, ..., x_n]$ such that $h$ is nowhere zero on $U$, and $f = g/h$ on $U$. We say that $f$ is regular on $Y$ if it's regular at every point in $Y$.

**Lemma 3.1.** *A regular function is continuous, when k is identified with $A^1_k$ in its Zariski topology.*

Now, I was told by my mentor not to try and understand proofs, and instead try to understand the intent behind these lemmas and theorems to know what we're building towards. So I will do that. Now let us consider a quasi-projective variety $Y \subseteq \P^n$. 

**Definition.** A function $f : Y \to k$ is \emph{regular at a point} $P \in Y$ if there is an open neighborhood $U$ with $P \in U \subseteq Y$, and homogeneous polynomials $g,h \in S = k[x_0,\dots,x_n]$ of the same degree, such that $h$ is nowhere zero on $U$, and $f = g/h$ on $U$. (Note that in this case, even though $g$ and $h$ are not functions on $\mathbb{P}^n$, their quotient is a well-defined function whenever $h \neq 0$, since they are homogeneous of the same degree.) We say that $f$ is regular on $Y$ if it is regular at every point of $Y$.

Apparently, the notion of regularity is like this because rational functions also behave nicely? "The only functions you can build algebraically from polynomials that behave well locally are ratios $g/h$" - ChatGPT. I will ask my mentor on this.

As in the quasi-affine case, regular functions are necessarily continuous. An important consequence of this is that if $f = g$ on some non-empty open subset $U \in X$ and both are regular functions, then $f = g$ everywhere, because the set of points where $f - g = 0$ is closed and dense and hence X (See chapter 1, I remember this stuff on my own though ayyy).

Now we can define the category of varieties (why?)

**Definition:** Let k be a fixed algebraically closed field. A *variety over k* (or simply *variety*) is any affine, quasi-affine, projective, or quasi-projective variety as defined above. If $X, Y$ are two varieties, a *morphism* $\varphi: X \rightarrow Y$ is a continuous map such that for every open set $V \subseteq Y$, and for every regular function $f: V \rightarrow k$, the function $f(\varphi):\varphi^{-1}(V) \rightarrow k$ is regular. 

The morphism is defined to be maps that preserve well-behaved functions. What does a function from a variety to a variety look like though? 

Clearly the two compositions of a morphism is a morphism (I guess?), so we have a category. In particular, we also have a notion of an isomorphism: an *isomorphism* $\varphi: X \rightarrow Y$ of two varieties is a morphism which admits an inverse morphism $\psi: Y \rightarrow X$ with $\psi \circ \varphi = id_X, \varphi \circ \psi = id_Y$. An isomorphism is always bijective and bicontinuous, but a bijective and bicontinuous morphism may not be an isomorphism.

Now we introduce some rings of functions associated with any variety.

**Definition:** Let $Y$ be a variety. We denote by $\O(Y)$ the ring of all regular functions on $Y$. If $P$ is a point in $Y$, we define the local ring of $P$ on $Y$ to be $\O_{P, Y}$ (or simply $\O_P$) to be the ring of germs (huh? as in bacteria?) of regular functions on $Y$ near $P$. In other words, an element of $\O_P$ is a pair $\langle U, f \rangle$, where $U$ is an open subset of $Y$ containing $P$, and $f$ is a regular function on $U$, and where we identify two such pairs $\langle U, f \rangle$ and $\langle V, g \rangle$ if $f = g$ on $U \cap V$. 

I genuinely needs more "in other words", so excuse the repeated phrasing. In other words, $\O_P$ is the set of regular functions defined near $P$. It's a ring, so we also need to define addition and multiplication: 
$$
\langle U, f \rangle + \la V, g \ra = \la U \cap V, f + g \ra
$$  
$$
\la U, f \ra \cdot \la V, g \ra = \la U \cap V, fg \ra 
$$
That last phrase is written rather ambiguously; it means we're defining an equivalence relation: $\langle U, f \rangle = \langle V, g \rangle$ if $f = g$ on $U \cap V$. 

$\O_P$ is a local ring, its maximal ideal $\idl{m}$ is the set of germs of regular functions which vanish at $P$. For if $f(P) \neq 0$, then $\dfrac{1}{f}$ is regular in some neighborhood of $P$ (why?), which makes it unit. The residue field $\O_P/\idl{m}$ is isomorphic to $k$.

**Definition:** If $Y$ is a variety, we define the *function field* $K(Y)$ of $Y$ as follows: an element of $K(Y)$ is an equivalence class of pairs $\langle U, f \rangle$ where $U$ is a nonempty open subset of $Y$, $f$ is a regular function on $U$, and where we identify two pairs $\langle U, f \rangle$ and $\langle V, g \rangle$ if $f = g$ on $U \cap V$. The elements of $K(Y)$ are called *rational functions* on $Y$.

Note that $K(Y)$ is a field. I will not prove this or else my brain will combust.

I am starting to lose it, so here's a quick review:
- We define regular functions on affine and projective varieties: functions that can be written as $\dfrac{g}{h}$ where $h \neq 0$, around a neighborhood of a point $P$
- We then define morphisms of varieties: morphisms are maps such that pulling them back preserves regular functions. This gives varieties a categorical structure.
- We then define local rings of functions: its elements are something called germs - equivalence classes of *pairs of open sets and functions* defined on those sets *only near P* - that means we only consider open sets containing some point P. 
- Finally we defined something called a function field: its elements are rational functions - equivalence classes of germs.

Now we have defined, for any variety $Y$, the ring of global functions $\mathcal{O}(Y)$, the local ring $\mathcal{O}_P$ at a point $P$ of $Y$, and the function field $K(Y)$. By restricting functions we obtain natural maps
$$
\mathcal{O}(Y) \to \mathcal{O}_P \to K(Y)
$$
which in fact are injective by (3.1.1). Hence we will usually treat $\mathcal{O}(Y)$ and $\mathcal{O}_P$ as subrings of $K(Y)$.

If we replace $Y$ by an isomorphic variety, then the corresponding rings are isomorphic. Thus we can say that $\mathcal{O}(Y)$, $\mathcal{O}_P$, and $K(Y)$ are \emph{invariants} of the variety $Y$ (and the point $P$) up to isomorphism.

Our next task is to relate $\mathcal{O}(Y)$, $\mathcal{O}_P$, and $K(Y)$ to the affine coordinate ring $A(Y)$ of an affine variety, and the homogeneous coordinate ring $S(Y)$ of a projective variety, which were introduced earlier. We will find that for an affine variety $Y$, $A(Y) = \mathcal{O}(Y)$, so it is an invariant up to isomorphism. However, for a projective variety $Y$, $S(Y)$ is not an invariant: it depends on the embedding of $Y$ in projective space (Ex. 3.9).



