---
tags:
  - video
  - tags
abstract: 
link: https://youtu.be/ZYj4NkeGPdM
topics:
  - "[[combinatorial game theory]]"
  - "[[surreal numbers]]"
author:
  - https://youtube.com/@owenmaitzen339
  - Owen Maitzen
---
# #english-note 
2 playr game where you have blue and red branches and a bleu and a red player
each player can only cut branches of his or her collor
the last player who can make a move wins
## simple positions
| position                     | outcome                               |
| ---------------------------- | ------------------------------------- |
| 1 of a color                 | that player wins                      |
| n of each color              | the starting player looses            |
| m of a color, n of the other | the player with the most branches win |

## values
positions have values
red are negative and bleu are positive
if the total value is 0 then the one who plays first looses
if the total value is $\star$ then the one who plays first wins
if the total value is positive blue wins
if the total value is negative red wins

| tree                                  | value               |
| ------------------------------------- | ------------------- |
| n branch                              | $\pm$ n             |
| 1 branch with n of other color on top | $\pm \frac{1}{2^n}$ |
| n green branche                       | $\star_{n}$         |
| n * green branching with blue on top  | $\uparrow_{n}$      |
| n * green branching with red on top   | $\downarrow_{n}$    |
|                                       |                     |
### special numbers
#### $\star_{n}$
$x+\star_{n} || x$ that is $x+\star_{n}$ is confused with $x$ 
$$\star_{n}+\star_{n}=0$$
$$\star_{n}+\star_{m}=\star_{n\oplus m}$$ where $\oplus$ is the bitwise xor
#### $\uparrow_{n}$ and $\downarrow_{n}$
$$\uparrow_{n}+\downarrow_{n}=0$$
$$\uparrow_{n}+\uparrow_{1}=\uparrow_{n+1}$$
$$\uparrow_{1}||\star_{1}||0$$
$$\uparrow_{2}>\star_{1}$$
$$\uparrow_{1}>\star_{n} \forall n>1$$



## green branches
green branches can be cut by both players
 
## number representation
numbers can be represented as $\{ X|Y \}$ where $X$ is the set of possible move of blue and $Y$ the set of possible move of red
$$0=\{ | \}$$
$$n=\{ n-1| \}$$
$$-n=\{ |-n+1 \}$$
$$\frac{1}{2^{n}}=\left\{ 0|\frac{1}{2^{n-1}} \right\}$$
$$\star_{n}=\{ 0,\star_{1}\dots,\star_{n-1}|0,\star_{1}\dots,\star_{n-1} \}$$
$$\uparrow_{n}=\{ 0|\star_{1}+\uparrow_{n-1} \}$$
$$\omega =\{ \mathbb{N}|  \}$$
$$\textbf{over}=\{ 0|\textbf{over} \}$$
$$\textbf{under}=\{ \textbf{under}|0 \}$$
$$\textbf{on}=\{ \textbf{on}| \}$$
$$\textbf{off}=\{ |\textbf{off} \}$$
$$\textbf{dud}= \{ \textbf{dud}|\textbf{dud} \}=\textbf{on}+\textbf{off}$$
## reading recomendations
- [[Winning Ways for Your Mathematical Plays]]
- [[On Numbers and Games]]
