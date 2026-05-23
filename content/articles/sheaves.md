---
title: "Sheaves"
category: "Pure Mathematics"
level: "Hard?"
tags:
summary: "sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf sheaf "
author: "Dilemma Lucis"
date: "2026-05-02"
favorite: false
---
The first time I've heard of this concept was when I was in, I think, somewhere between $9^{th}$ and $11^{th} grade. It was from a video lecture by Ngo Bao Chau, the only Vietnamese mathematician to win a Fields Medal for proving the fundamental lemma. Unsurprisingly, I understood nothing, but one word is stuck at the back of my mind. Sheaf... sheaf... what the hell is a sheaf... Perhaps it was back then where I subconciously made it my goal in life to understand it, to study and research it. At long last, after all these years of waiting, I am finally in a place where it makes sense for me to grasp the concept. So here we go.
***
The concept of a sheaf provides a systematic way to keep track of local algebraic data on a topological space, which is a fancy way to say functions on open sets. Examples you and I may or may not have encountered are regular functions on open subsets of a variety, smooth functions on open subsets of a manifold, k-forms also over a manifold, and maybe a lot of others. Sheaves are essential in the study of schemes; we cannot define a scheme without using sheaves. 

**Definition:** Let $X$ be a topological space. A *presheaf* $\mathscr{F}$ of abelian groups on $X$ consists of the data
 
- For every open subset $U \subseteq X$, an abelian group $\mathscr{F}(U)$, and
- For every inclusion $V \subseteq U$ of open subsets in $X$, a morphism of abelian groups $\rho_{UV}: \mathscr{F}(U) \rightarrow \mathscr{F}(V)$,

subject to the conditions:

1. $\mathscr{F}(\emptyset) = 0$
2. $\rho_{UU}$ is the identity map $\mathscr{F}(U) \rightarrow \mathscr{F}(U)$
3. If $W \subseteq V \subseteq U$, then $\rho_{UW} = \rho_{UV} \circ \rho_{VW}$

In the language of abstract nonsense, a presheaf is a contravariant functor from the category $\idl{Top}(X)$, whose objects are open sets and morphisms are inclusions, and the category $\idl{Ab}$ of abelian groups.

As a matter of terminology, if $\mathscr{F}$ is a presheaf on $X$, we refer to $\mathscr{F}(U)$ as the *sections* of the presheaf $\mathscr{F}$ over the open set $U$, and we sometimes use the notation $\Gamma(U, \mathscr{F})$ to denote the group $\mathscr{F}(U)$. We call the maps $\rho_{UV}$ *restriction maps*, and we sometimes write $s|_V$ instead of $\rho_{UV}(s)$, if $s \in \mathscr{F}(U)$.

A sheaf is roughly speaking a presheaf whose sections are determined by local data. To be precise, we give the following definition.

**Definition.** A presheaf $\mathscr{F}$ on a topological space $X$ is a *sheaf* if it satisfies the following supplementary conditions:

4. If $U$ is an open set, if $\{V_i\}$ is an open covering of $U$, and if $s \in \mathscr{F}(U)$ is such that $s|_{V_i} = 0$ for all $i$, then $s = 0$.

5. If $U$ is an open set, if $\{V_i\}$ is an open covering of $U$, and if we have elements $s_i \in \mathscr{F}(V_i)$ for each $i$, with the property that for each $i,j$,
   $$
   s_i|_{V_i \cap V_j} = s_j|_{V_i \cap V_j},
   $$
   then there exists an element $s \in \mathscr{F}(U)$ such that $s|_{V_i} = s_i$ for each $i$.

(Note: condition (1) implies that such an $s$ is unique.)

**Example 1.0.1.** Let $X$ be a variety over the field $k$. For each open set $U \subseteq X$, let $\mathcal{O}(U)$ be the ring of regular functions from $U$ to $k$, and for each $V \subseteq U$, let
$\rho_{UV} : \mathcal{O}(U) \to \mathcal{O}(V)$
be the restriction map (in the usual sense). Then $\mathcal{O}$ is a sheaf of rings on $X$: It clearly satisfies condition 1, 2, and 3. To verify conditions 4 and 5
, we note that a function which is $0$ locally is $0$, and a function which is regular locally is regular, because of the definition of regular function (I, §3). We call $\mathcal{O}$ the *sheaf of regular functions* on $X$.

**Example 1.0.2.**: In the same way, you can define the sheaf of continuous real-valued functions, differentiable functions, holomorphic functions on a topological space, a differentiable manifold, and a complex manifold, respectively.

**Example 1.0.3.**: Let $X$ be a topological space, $A$ abelian group. We define the *constant sheaf* $\mathscr{A}$ on $X$ determined by $A$ as follows: Give $A$ the discrete topology, and for any open set $U \subseteq X$, let $\mathscr{A}(U)$ be the group of all continuous maps of $U$ onto $A$. Then with the usual restriction maps, we obtain a sheaf $\mathscr{A}$. Note that for every connected open set $U$, $\mathscr{A}(U) \cong A$: Every element $a$ in $A$ corresponds to a function that sends all of $U$ to $a$. Every function $f$ in $\mathscr{A}(U)$ can only send all of $U$ to one element of $A$, because if there are two distinct elements $a$ and $b$, then the inverse of these two elements must be disjoint clopen sets, and U can be rewritten as $f^{-1}(a) \cup f^{-1}(b) \cup ...$, contradiction, since $U$ is connected. That is why it is called a constant sheaf. If $U$ is an open set whose connected components are open, then $\mathscr{A}(U)$ is a direct product of copies of $A$, one for each connected component.

**Definition.** If $\mathscr{F}$ is a presheaf on $X$, and if $P$ is a point of $X$, we define the *stalk* $\mathscr{F}_P$ of $\mathscr{F}$ at $P$ to be the direct limit of the groups $\mathscr{F}_U$ for all open sets $U$ containing $P$, via the restriction map $\rho$.

We are going to need to talk a little bit about direct limits. Assume that we have a bunch of objects $A_i$, and maps  between them $\varphi_{ij}: A_i \rightarrow A_j$ whenever $i \leq j$. Then the direct limit is constructed by
1. Take the disjoint union $\bigsqcup A_i$
2. Impose the relation 
$$
a_i \sim a_j \text{ if there exists } k \geq i, j \text{ such that } \varphi_{ik}(a_i) = \varphi_{jk}(a_j)
$$
3. The direct limit is defined by $\underset{\longrightarrow}\lim \text{ } A_i = \bigsqcup A_i/\sim$

Take a look at the local ring defined last time: 

**Definition:** Let $Y$ be a variety. We denote by $\O(Y)$ the ring of all regular functions on $Y$. If $P$ is a point in $Y$, we define the local ring of $P$ on $Y$ to be $\O_{P, Y}$ (or simply $\O_P$) to be the ring of germs of regular functions on $Y$ near $P$. In other words, an element of $\O_P$ is a pair $\langle U, f \rangle$, where $U$ is an open subset of $Y$ containing $P$, and $f$ is a regular function on $U$, and where we identify two such pairs $\langle U, f \rangle$ and $\langle V, g \rangle$ if $f = g$ on $U \cap V$. 

It is literally the same thing! Our objects $A_i$ are rings of functions over an open set, $\mathcal{O}(U_i)$. If $U_j \subseteq U_i$, then $i < j$, and $\varphi_{ij}$ is the restriction map $f \mapsto f|_{U_j}$. The equivalence relation in the definition of the local ring is then precisely the equivalence relation defined in the direct limit.

Thus an element of $\mathscr{F}_P$ is represented by a pair $\langle U, s \rangle$, where $U$ is an open neighborhood of $P$, and $s$ is an element of $\mathscr{F}(U)$. Two such pairs $\langle U, s \rangle$ and $\langle V, t \rangle$ define the same element of $\mathscr{F}_P$ if and only if there is an open neighborhood $W$ of $P$ with $W \subseteq U \cap V$ such that $s|_W = t|_W$.

Thus we may speak of elements of the stalk $\mathscr{F}_P$ as *germs* of sections of $\mathscr{F}$ at the point $P$. In the case of a variety $X$ and its sheaf of regular functions $\mathcal{O}$, the stalk $\mathcal{O}_P$ at a point $P$ is just the local ring of $P$ on $X$, which was defined in (I, §3).

**Definition.** If $\mathscr{F}$ and $\mathscr{G}$ are presheaves on $X$, a morphism $\varphi : \mathscr{F} \to \mathscr{G}$ consists of a morphism of abelian groups $\varphi(U) : \mathscr{F}(U) \to \mathscr{G}(U)$ for each open set $U$, such that whenever $V \subseteq U$ is an inclusion, the diagram
$$
\begin{array}{ccc}
\mathscr{F}(U) & \xrightarrow{\ \varphi(U)\ } & \mathscr{G}(U) \\
\downarrow \rho_{UV} & & \downarrow \rho'_{UV} \\
\mathscr{F}(V) & \xrightarrow{\ \varphi(V)\ } & \mathscr{G}(V)
\end{array}
$$
is commutative, where $\rho$ and $\rho'$ are the restriction maps in $\mathscr{F}$ and $\mathscr{G}$. If $\mathscr{F}$ and $\mathscr{G}$ are sheaves on $X$, we use the same definition for a morphism of sheaves. An *isomorphism* is a morphism which has a two-sided inverse.

Note that a morphism $\varphi : \mathscr{F} \to \mathscr{G}$ of presheaves on $X$ induces a morphism $\varphi_P : \mathscr{F}_P \to \mathscr{G}_P$ on the stalks, for any point $P \in X$. The following proposition (which would be false for presheaves) illustrates the local nature of a sheaf.

**Proposition 1.1.** Let $\varphi : \mathscr{F} \to \mathscr{G}$ be a morphism of sheaves on a topological space $X$. Then $\varphi$ is an isomorphism if and only if the induced map on the stalk $\varphi_P : \mathscr{F}_P \to \mathscr{G}_P$ is an isomorphism for every $P \in X$.

Our next task is to define kernels, cokernels and images of morphisms of sheaves.

**Definition.** Let $\varphi : \mathscr{F} \to \mathscr{G}$ be a morphism of presheaves. We define the *presheaf kernel* of $\varphi$, *presheaf cokernel* of $\varphi$, and *presheaf image* of $\varphi$ to be the presheaves given by $U \mapsto \ker(\varphi(U))$, $U \mapsto \operatorname{coker}(\varphi(U))$, and $U \mapsto \operatorname{im}(\varphi(U))$ respectively.

Note that if $\varphi : \mathscr{F} \to \mathscr{G}$ is a morphism of sheaves, then the presheaf kernel of $\varphi$ is a sheaf, but the presheaf cokernel and presheaf image of $\varphi$ are in general not sheaves. This leads us to the notion of a sheaf associated to a presheaf.

**Proposition-Definition 1.2.** Given a presheaf $\mathscr{F}$, there is a sheaf $\mathscr{F}^+$ and a morphism $\theta : \mathscr{F} \to \mathscr{F}^+$, with the property that for any sheaf $\mathscr{G}$, and any morphism $\varphi : \mathscr{F} \to \mathscr{G}$, there is a unique morphism $\psi : \mathscr{F}^+ \to \mathscr{G}$ such that $\varphi = \psi \circ \theta$. Furthermore the pair $(\mathscr{F}^+, \theta)$ is unique up to unique isomorphism. $\mathscr{F}^+$ is called the sheaf associated to the presheaf $\mathscr{F}$.

*Proof.* We construct the sheaf $\mathscr{F}^+$ as follows. For any open set $U$, let $\mathscr{F}^+(U)$ be the set of functions $s$ from $U$ to the union $\bigcup_{P \in U} \mathscr{F}_P$ of the stalks of $\mathscr{F}$ over points of $U$, such that

(1) for each $P \in U$, $s(P) \in \mathscr{F}_P$, and  

(2) for each $P \in U$, there is a neighborhood $V$ of $P$, contained in $U$, and an element $t \in \mathscr{F}(V)$, such that for all $Q \in V$, the germ $t_Q$ of $t$ at $Q$ is equal to $s(Q)$.

Now one can verify immediately (1) that $\mathscr{F}^+$ with the natural restriction maps is a sheaf, that there is a natural morphism $\theta : \mathscr{F} \to \mathscr{F}^+$, and that it has the universal property described. The uniqueness of $\mathscr{F}^+$ is a formal consequence of the universal property. Note that for any point $P$, $\mathscr{F}_P = \mathscr{F}^+_P$. Note also that if $\mathscr{F}$ itself was a sheaf, then $\mathscr{F}^+$ is isomorphic to $\mathscr{F}$ via $\theta$.

