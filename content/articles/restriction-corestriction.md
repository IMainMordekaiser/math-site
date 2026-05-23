---
title: "Restrictions and Corestrictions"
category: "Pure Mathematics"
level: "High"
tags:
  - "Category Theory"
  - "Homological Algebra"
summary: "And my effort at reading something back to front"
author: "Dilemma Lucis"
date: "2026-03-23"
favorite: false
---

### Definition: 
If $\rho:H \rightarrow G$ is a group map, the forgetful functor $\rho^\sharp$ from $\textbf{G-mod}$ to $\textbf{H-mod}$ is exact. For every $G-$module $A$, there is a natural surjection $(\rho^\sharp A)_H \rightarrow A_G$ and a natural injection $A^G \rightarrow (\rho^\sharp A)^H$.

These two maps extend uniquely to the two morphisms $\rho_* = \text{cor}_H^G$ (called corestriction) and $\rho^* = \text{res}_H^G$ (called restriction) of $\delta$-functors:

$\text{cor}_H^G = H_*(H; \rho^\sharp A) \rightarrow H_*(G, A)$

$\text{res}_H^G = H^*(G, A) \rightarrow H^*(H; \rho^\sharp A)$

from the category $\textbf{G-mod}$ to $\textbf{Ab}$. This is an immediate consequence of the theorem that $H_*(G, A)$ and $H^*(G, A)$ are universal $\delta$-functors, once we notice that $T_*(A) = H_*(H; \rho^\sharp A)$ and $T^*(A) = H^*(H; \rho^\sharp A)$ are $\delta$-functors

---------------------------------------------------------------------------------

Today is the first day I met this definition. For context, I am attending a supervised reading class in Homological Algebra out of my own FOMO, knowing damn well everytime I step into the Emmy Noether room that I will not understand whatever is being written on that board. This class studies Weibel's *An Introduction to Homological Algebra*, the introduction only for those who already knew Homological Algebra. 

This time however, I thought to myself: "What if instead of blankly staring at Anuj (the presenter for today) and the whiteboard, I try to understand what is in the book?". The definition pops up in the beginning of section 6.7. I understood about three tenths of the buzzwords, and even less considering how they are placed together in this way. But mama ain't raised no quitter, so below is my recollection of my honest attempt of mathematical comprehension:

"Okay so a *group map* is basically just a group homomorphism, a map which preserves the "structure" of a group, so to say, and a *functor* is a map that sends objects from one category to the other, in this case, from the category of modules over the group $G$ to modules over the group $H$. The first sentence is saying that whenever we have a group map $\rho$ from $G$ to $H$, we can define a so-called "forgetful functor" $\rho^\sharp$ from $\textbf{G-mod}$ to $\textbf{H-mod}$.

What's a forgetful functor doing here though? Ahh, I see, it makes a $G$-module $A$ an $H$-module, by defining scalar multiplication $h \cdot a = \rho(h) \cdot a$, for any $h \in H, a \in A$. Which is also why the definition says that it is exact: since these functors don't actually change the contents, or the elements, of the module, all modules, kernels, images stay the exact same, and exact sequences of $G$-modules remain exact after you apply a functor on to each of its element.

All that for one single sentence. Now what the hell is that "natural surjection $(\rho^\sharp A)_H \rightarrow A_G$" he's talking about? Imma look it up, oh, $A_G$ is $A$ quotiented by $<g \cdot a \vert g \in G, a \in A>$, so in $A_G$, $g \cdot a = a$. Similarly , $(\rho^\sharp A)_H = A/<\rho(h) \cdot a \vert h \in H, a \in A>$. 

It's easy to see that $<\rho(h) \cdot a \vert h \in H, a \in A>$ is inside of $<g \cdot a \vert g \in G, a \in A>$, so $(\rho^\sharp A)_H \in A_G$, and the surjection sends $[a]_H$ to $[a]_G$. It is also well-defined, we can check that. 

The natural injection $A^G \to (\rho^\sharp A)^H$ is simpler actually:

$A^G = \{a \in A : g \cdot a = a \text{ for all } g \in G\}$,
and

$(\rho^\sharp A)^H = \{a \in A : \rho(h)\cdot a = a \text{ for all } h \in H\}$, 

so if $a$ is in $A^G$, it is unchanged by the action of every element of g, so it is also unchanged by the action of every element that is the image of $\rho$, so a is in $(\rho^\sharp A)^H$, and the injection is just inclusion.

So now we can extend them to morphisms of $\delta$-functors. Wait, what are $\delta$-functors again?

Oh

Oh no

It's not a functor. It's a bunch of functors

A cohomological $\delta$-functor on an abelian category $\mathcal{A}$ to an abelian category $\mathcal{B}$ (here I had to check what abelian categories are again) is a *sequence of functors* 

$T^n: \mathcal{A} \rightarrow \mathcal{B}$

with connecting homomorphisms

$\delta^n: T^n(C) \rightarrow T^{n+1}(A)$ for every short exact sequence $0 \rightarrow A \rightarrow B \rightarrow C \rightarrow 0$

such that the long sequence

$0 \rightarrow T^0(A) \rightarrow T^0(B) \rightarrow T^0(C) \rightarrow T^1(A) \rightarrow ...$

is exact.

Dually, a homological $\delta$-functor is a sequence of functors

$S_n: \mathcal{A} \rightarrow \mathcal{B}$

together with connecting homomorphisms

$\delta_n: S_n(C) \rightarrow S_{n-1}(A)$ for every short exact sequence $0 \rightarrow A \rightarrow B \rightarrow C \rightarrow 0$

such that the long sequence

$\cdots \rightarrow S_2(C) \xrightarrow{\delta_2} S_1(A) \rightarrow S_1(B) \rightarrow S_1(C) \xrightarrow{\delta_1} S_0(A) \rightarrow S_0(B) \rightarrow S_0(C) \rightarrow 0$

is exact.

Specifically, the $\delta$-functors that the definition was refering to are these: $H_*(G, -), H_*(H; \rho^\sharp -)$, the cohomological $\delta$-functors, and $H^*(G, -), H^*(H; \rho^\sharp -)$, the homological $\delta$-functors.

What the hell do these functors do exactly? What do you mean from $\textbf{G-mod}$ to $\textbf{Ab}$? And then what are the theo-"

And the class was over; Anuj has finished covering a big portion of chapter 6, while I'm halfway through a definition. Not even the raging Singaporean heat could've scorched me the way this experience did. My immense lack of experience haunts me for another day.

I enjoy novelty, and often times I find it through learning. To me, new definitions look like gold coins and shiny objects, and they make me feel like Smaug the Terrible; wanting to own and to usurp them all, paying no attention to trivial matters like "pre-requisites" or "background knowledge". Emphasis on "feel like"; while Smaug is a very powerful fire-drake with claws and scales and breaths of fire and it can get whatever the hell it wants to, I am but an undergrad with a normal (or even worse than normal) brain. Smaug has the prerequisites! 

The experience of learning something "back to front" can be described as already knowing what the light at the end of the tunnel is, but the tunnel itself is submerged in a sea of black tar, and I, drawn like a moth to the flame, crawl and usher my way through, little by little. Such a stupid idea, you might say, but neither you nor I can make a moth not be drawn to the flame anymore.  

In the end though, Smaug was burnt and suffocated by his very own gold and almost died, and the same thing might just be happening to me. And just like Smaug, I'm probably going to writhe and yell out in pain, then shake it all off and seek to destroy the nearest city. 

I have learnt nothing at all, and see you next time.


