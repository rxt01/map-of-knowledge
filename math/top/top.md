---
abstract:
---
| precursors | [[set theory]] |
| ---------- | -------------- |
| status:    | #tolearn       |
| #tags      |                |
| level      | #bachelor      |
| type       | #              |
# #english-note 

## topologies
a topology $\mathcal{T}$ on a set $X$ is a collection of subsets of $X$ st:
- $X,\varnothing \in \mathcal{T}$
- every finite intersections of elements of $\mathcal{T}$ is in $\mathcal{T}$
- every union of elements of $\mathcal{T}$ is in $\mathcal{T}$
the elements of $\mathcal{T}$ are open sets
### discrete topology
let $X$ be an arbitrary set
$\mathcal{T }:=\mathcal{P}(X)$
### trivial topology
let $X$ be an arbitrary set
$\mathcal{T}:=\{ X,\varnothing \}$
### metric topology
let $(M,d)$ be any metric space
let $\mathcal{T}$ be the collection of open sets in the usual metric space sens

#### eucledian topology
the metric topology of $\mathbb{R}$ with the usual eucledian metric

### basis of a topology
let $X$ be a topological space. a collection $\mathcal{B}$ of subset of $X$ is a basis for $X$ if
- every $B\in \mathcal{B}$ is open
- every open subset of $X$ is the union of elements in $\mathcal{B}$ 


let $X$ be a set and $\mathcal{B}$ a collection of subsets of $X$. then $\mathcal{B}$ is a basis for a unique topology on $X \iff$
- $\cup_{B\in \mathcal{B}}B=X$
- $B_{1},B_{2}\in \mathcal{B}\land x\in B_{1}\cap B_{2} \implies\exists B_{3}\in \mathcal{B}\ st.\ x\in B_{3}\subseteq B_{1}\cap B_{2}$
### countability
a topological space is called second countable if it has a countable basis for its topology
a space is first countable if there is a countable neighborhood basis at each point
every secound countable space is first countable

### neighborhood basis
let $X$ be a topological space and $p\in X$. a collection $\mathcal{B}_{p}$ of neighborhoods of $p$ is called a neighborhood basis for $X$ at $p$ if every neighborhood of $p$ contains come $B\in \mathcal{B}_{p}$

### subspace topology
let $X$ be a space and $S \subseteq X$ any subset. then$$\mathcal{T}_{S}:=\{ U\subseteq S|\exists V\subseteq X\ st.\ U=S\cap V\} $$
defines the subspace topology on $S$
### product topology
let $X_{1}\cdots X_{n}$ be spaces. the product topology on $X_{1}\times \cdots \times X_{n}$ is generated by the basis
$$\mathcal{B}-\{ U_{1}\times \cdots\times U_{n}|U_{i}\ open\ in\ X_{i}\forall i \} $$

## closed sets
if $X$ is a topological space, a subset $F\subseteq X$ is closed if its complement $X \setminus F$ is open
### closure
the closure of $A$ in $X$ is the set $$\bar{A}:=\cap \{ B\subseteq X|B \supseteq A, B\ \text{ is closed} \}$$
### interior
the interior of $A$ in $X$ is the set $$A^{\circ}=\cup \{ C\subseteq X| C\supseteq A, C\ \text{is open} \}$$
### exterior
$$\text{Ext}(A):=X\setminus \bar{A}$$

### boundary
$$\partial A:=X\setminus(A^{\circ}\cup \text{Ext}(A))$$
## convergence
### limit points
a point $p\in X$ is a limit point of $A$ if every neighborhood of $p$ contains a point of $A$ other than $p$
### isolated points
a point $p\in A$ is an isolated point of $A$ if p has a neighborhood $U$ in $X$ with $U\cap A=\{ p \}$
### dense subsets
a subset $A$ of a space $X$ is dense in $X$ if $\bar{A}=X$
### convergent sequence
if $X$ is a space, $(x_{i})_{i=1}^{\infty}$ is a sequence of points in $X$, and $x\in X$, we say the sequence converges to the limit $x$ if for every neighborhood $U$ of $x$ there is $N\in \mathbb{N}$ st. $x_{i}\in U\ \forall i \ge N$
## continuous maps
a function $f:X\to Y$ is continuous if $\forall$ open set $V\subseteq Y$, its pre-image $f^{-1}(V)$ is open in $X$

constant maps are continuous
indentity maps are continuous
if $f:X\to Y$ is continuous and $g:Y\to Z$ is continuous, then $g\circ f:X\to Z$ is also continuous

a function $f:X\to Y$ is continuous $\iff$ each point $x$ has a neighborhood on which $f$ is continuous

### homeomorphism
a continuous function $\varphi:X\to Y$ which has a continuous inverse $\varphi^{-1}:Y\to X$
if $X$ and $Y$ have a homeomorphism between them, they are homeomorphic $X \simeq Y$



let $(X_{1},\mathcal{T}_{1})$ and $(X_{2},\mathcal{T}_{2})$ be spaces and $f:X_{1}\to X_{2}$ bijective. then $f$ is a homeomorphism $\iff$
$$U\in \mathcal{T}_{1}\iff f(U)\in \mathcal{T}_{2}  $$


any two open balls in $\mathbb{R}^n$ are homeomorphic
the unit ball $\mathbb{B}^{n}\simeq \mathbb{R}^n$

if $f$ is a bijective map then,
$f$ is a homeomorphism $\iff$ $f$ is closed $\iff$ $f$ is open

### open maps
a continuous map $f:X\to Y$ is open if for every open $U \subseteq X$, $f(U)$ is open in $Y$
### closed maps
a continuous map is closed if it takes closed set to closed sets

### product of continuous maps
given continuous maps $f_{i}:X_{i}\to Y_{i}, 1\le i\le n$ put
$f_{1}\times \cdots \times f_{n}:X_{1}\times \cdots\times X_{n}\to Y_{1}\times \cdots \times Y_{n}$
$(x_{1},\cdots,x_{n})\mapsto(f_{1}(x_{1}),\cdots,f_{n}(x_{n}))$

if each $f_{i}$ is continuous, so is the product
if each $f_{i}$ is a homeoporphism, so is the product
## hausdorff spaces
a topological space is $X$ is hausdorff if any pair of distinct points have disjoint neighborhood
## upper half-space
$\mathbb{H}^n\subseteq \mathbb{R}^n$ is
$\mathbb{H}^n:=\{ (x_{1},\cdots,x_{n})\in \mathbb{R}^{n} |x_{n}\ge 0\}$
## locally eucledian spaces
a space $M$ is locally eucledian of dimension $n$ if every point $x\in M$ has a neighborhood homeomorphic to an open ball $\mathbb{B}^{n}\subseteq \mathbb{R}^n$
## topological manifold
an $n$-dimensional topological manifold is a second countable hausdorff space that is locally eucledian of dimension $n$


if $m\ne n$, a nonempty space cannot be both an $m$-manifold and an $n$-manifold


the product of a topological manifold is a topological manifold

### manifolds with boundary
an $n$ dimensional manidolf with boundary is a second countable hausdorff space in which every point has a neighborhood homeomorphic to a open subset of $\mathbb{R}^n$ or $\mathbb{H}^n$

no points on a manifolds with boundary is both a interior and boundary point
#### interior points
a point with a neighbourhood homeomorphic to an open subset or $\mathbb{R}^n$
#### boundary points
a point with a neighbourhood homeomorphic to an open subset of $\mathbb{H}^n$ and the image of that point lies on the boundary of the upper half space


## disjoint union
let $(X_{\alpha})_{\alpha\in A}$ be an indexed family
then $\sqcup_{\alpha \in A}X_{\alpha}=\{ (x,\alpha)|x\in X_{\alpha} \}$
### disjoint union topology
let $(X_{\alpha})_{\alpha\in A}$ be an indexed family of spaces, and let $\sqcup_{\alpha\in A} X_{\alpha}$ denote their disjoint union. then a subset $U\subseteq \sqcup_{\alpha\in A} X_{\alpha}$ is open in the disjoint union topology if $U\cap X_{\alpha}$ is open for each $\alpha\in A$
## quotient spaces
let $X$ be a space, $Y$ a set and $q:X\to Y$ a surjective function
define the quotient topology on $Y$ by setting $U\subseteq Y$ is open $\iff$ the preimage $q^{-1}(U)$ is open in $X$
## adjunction space
let $X$ and $Y$ be spaces, $A\subseteq Y$ be closed, and $f:A\to X$ a continuous function.
define the adjunction space$$X \cup_{f}Y:=X\sqcup Y/\sim$$
where $a\sim f(a) \forall a\in A$
## conectedness
a topological space $X$ is disconnected $\iff$ it can be expressed as the disjoint union of two non-empty open subsets $U\sqcup V=X$
a space that is not disconnected is said to be connected

$X$ is connected $\iff$ $X,\varnothing$ are the only subsets of $X$ which are clopen
### path connectedness
let $X$ be a topological space and $p,q\in X$. a path in $X$ from $p$ to $q$ is a continuous map $f:[0,1]\to X$ with $f(0)=p$ and $f(1)=q$

a space $X$ is path connected $\iff \forall o,q\in X$ $\exists$ a path in $X$ from $p$ to $q$


path connectedness $\implies$ connectedness
### local connectedness
a space $X$ is locally connected if it admits a basis of connected open subsets
#### local path connectedness
a space $X$ is locally path connected if it admits a basis of path connected open subsets
## components
let $X$ be a topological space.
a component of $X$ is a maximal nonempty connected subset of $X$

the components of $X$ form a partition of $X$
### path components
a path component of $X$ is a maximal nonempty path connected subset of $X$
path components partition $X$

## compactness
an open cover of a space $X$ is a collection $\mathcal{U}$ of open subsets of $X$ whose union is $X$
a subcover of $\mathcal{U}$ is a subcollection of elements of $\mathcal{U}$ that still covers $X$

a space is compact if every open cover of $X$ has a finite subcover
a subset $A\subseteq X$ is compact if it is compact as a subspace

every finite space is compact
every space with the trivial topology is compact
a subset of a discrete space is compact $\iff$ it is finite
