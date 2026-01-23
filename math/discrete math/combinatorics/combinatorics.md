---
abstract:
---
| precursors | [[set theory]] |
| ---------- | -------------- |
| #tags      |                |
| level      | #              |

# #english-note 
## product rule
let there be $k$ different aspect that determine the total number of outcome
if $\forall i\leq k$ there are $n_{i}$ different outcomes for the $i$th aspect, then the total number of outcome is $$\prod\limits_{i=1}^{k}n_{i}$$
## sum rule
let there be $k$ distinct cases with the property that every outcome lies in exactly one of the case.
if $\forall i\leq k$ there are $n_{i}$ possible outcomes for the $i$th case, then the total number of outcome is $$\sum\limits_{i=1}^{k}n_{i}$$
## permutations
a permutation of $n$ distinct element is an arrangement of those elements into an ordered line
the number of permutations of $n$ element is $$n!$$
if $1\leq r\leq n$ then an $r$-permutation of $n$ objects is an arrangement of $r$ of the $n$ objects into an ordered line
the number of $r$-permutations of $n$ elements is $$\frac{n!}{(n-r)!}$$
### with repetition
let there be $n$ objects, $\forall i$ with $1\leq i\leq m$, $r_{i}$ of them are of type $i$ and $\sum\limits_{i=1}^{m}r_{i}=n$, then the number of permutation of those objects is $$\frac{n!}{\prod\limits_{i=1}^{n}r_{i}!}$$

## combinations
let $n\in \mathbb{N}^{+}$, $0\leq r\leq n$, assume that we have $n$ distinct element 
an $r$-combination of the $n$ elements is a subset consisting of $r$ of the objects
$$\left(\begin{matrix}n\\r\end{matrix}\right)= \frac{n!}{r!(n-r)!}$$
### binomial theorem
$\forall a,b\in \mathbb{R},n\in \mathbb{N}$ we have that $$(a+b)^{n}=\sum\limits_{r=0}^{n}\left(\begin{matrix}n\\r\end{matrix}\right)a^{r}b^{n-r}$$
### with repetition
the number of ways of chosing $r$ objects from $n$ types of objects is $$\left(\begin{matrix}n+r-1\\r\end{matrix}\right)$$
## fibonacci sequence
the fibonacci sequence is the sequence $(f_{n})_{n \in \mathbb{N}}$ defined by $f_{0}=1,f_{1}=1,f_{n}=f_{n-1}+f_{n-2}$
## pigeon asshole principle
if there are $n$ item that fall into $m$ different category and $n>km$ then at least 1 of the categories must have at least $k+1$ item
<!-- more specifically, if there are n pigeons and m pigeon's assholes and n>m, then there is at least 1 pigeon with more than 1 asshole
proof: BOB IS YOUR UNCLE-->
## erdos-szekeres theorem
$\forall a,b\geq1$, if $S$ is a sequence of $ab+1$ distinct real number, then there is either an increasing subsequence of lenght $a+1$ or a decreasing subsequence of lenght $b+1$ in $S$
## inclusion exclusion
let $A_{1},\cdots,A_{n}$ be finite sets, then $$|\bigcup\limits_{i=1}^{n}A_{i}|=\left( \sum\limits_{i=1}^{n}|A_{i}| \right)-\left( \sum\limits_{1\leq i< j\leq n}|A_{i}\cap A_{j}| \right)+\cdots+|\bigcap\limits_{i=1}^{n}A_{i}|$$

# #french-note 
## permutation
distribution ordone de $n$ element different sans repetition
$$P_{n}=n(n-1)!=n!=\Gamma(n+1)=\int_{o}^\infty t^{n}e^{-t}dt$$
### permutation avec repetition
soit $n_{k}$ le nombre de repetition d'un element
$$P_{n;n_{1}\cdots,n_{k}}= \frac{n!}{\prod\limits_{l=1}^{k}n_{l}!}$$
## arrangements
selection ordone de $r$ element different parmis $n$ elements differents
$$nPr= \frac{n!}{(n-r)!}$$
## combinaisons
selection non ordone de $r$ elements differents parmi $n$ elements differents
$$\left(\begin{matrix}n\\r\end{matrix}\right)= \frac{n!}{r!(n-r)!}$$
soit $P_{a}^b$ le $a^e$ element de la $b^e$ ranger du triangle de pascal
$$\left(\begin{matrix}n\\r\end{matrix}\right)=P_{r}^n$$
