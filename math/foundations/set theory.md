---
abstract:
---
| precursors | [[logic]] |
| ---------- | --------- |
| #tags      |           |
| level      | #bachelor |


# #english-note 
a set is a "collection" of things
these things are called elements
two sets are equal if they contain the same elements
if a set $X$ is finite, its cardinality $|X|$ is the amount of element in it
## ZFC axioms
### axiom of extensionality
$$\forall x\forall y[\forall z(z\in x\iff z\in y)\implies x=y]$$
### axiom of regularity
$$\forall x[x\ne\varnothing\implies\exists y(y\in x\land y\cap x=\varnothing)]$$
### axiom of pairing
$$\forall x\forall y\exists z (x \in z\land y \in z)$$
### axiom of union
$$\forall \mathcal{F}\exists A\forall Y\forall x ((x \in Y \land Y\in \mathcal{F} )\implies x \in A) $$
### axiom of infinity
$$\exists X (\varnothing \in X\land \forall y(y \in X \implies y\cup \{ y \}\in X))$$
### axiom of power set
$$\forall x\exists y\forall z(z\subseteq x\implies z\in y)$$
### axiom of choice
$$\forall X(\varnothing \in X \lor \exists f(dom f=X \land \forall A\in X(f(A)\in A)))$$

#### well ordering theorem
#### zorn's lemma

## cardinality
two sets have the same cardinality $\iff$ there is a [bijection](algebra.md#bijection) between them
$|A|=|B|$ is the same as $A\sim B$
$[a,b]\sim [ca,cb]$
$(-\frac{\pi}{2},\frac{\pi}{2})\sim \Re$
if $S\sim\mathbb{N}$ then $S$ is countably infinite
if $S$ is infinite but $S\nsim\mathbb{N}$ then $S$ is uncountable
$|s|<|P(S)|$
the number of transfinite cardinalities is larger than the cardinality of any set

# #french-note 
collection d'element
cardinal : nombre d'elemnt d'un ensemble $n(A)$ ou $|A|$
## operation des ensemble vs logic

| ensemble                         | logic    |
| -------------------------------- | -------- |
| $\cap$                           | $\land$  |
| $\cup$                           | $\lor$   |
| $'$                              | $\lnot$  |
| $\varnothing$                    | $0$      |
| $U$                              | $1$      |
| $A\setminus B \cup B\setminus A$ | $\oplus$ |

## set properties
<!-- this should be in [[set theory]] -->
### operations
a binary operation $\circ: A\times A\to A$ 
#### identity
the identity $e$ of a set under an operation $\circ$ is an element st $\forall a\in A,\ a\circ e=e\circ a=a$
#### inverses
$b\in A$ is an inverse of $a\in A \iff a\circ b=e=b\circ a$



#### associative property
an operation $\circ$ on $A$ is associative $\iff \forall a,b,c\in A,\ a\circ(b\circ c)=(a\circ b)\circ c = a\circ b\circ c$
#### commutative property
an operation $\circ$ on $A$ is commutative $\iff \forall a,b\in A, a\circ b=b\circ a$

### mappings
a mapping of a set $A$ into a set $B$ is a correspondence that associate with each element $a\in A$ a unique element $b\in B$ 
$$a \mapsto b$$
a maps into b or b is the image of a under the mapping
$$\alpha:A\to B $$
is a map of the set A into the set B
$$\alpha(a)$$
is the image of a under $\alpha$ 
$$\alpha = \beta \iff\forall a\in A,\  \alpha(a) = \beta(a)  $$


$$\forall\alpha:A\to B$$
- $\alpha$ has a right inverse $\iff \alpha$ is one-one
- $\alpha$ has a left inverse $\iff \alpha$ is onto
- if $\alpha$ has a right inverse $\beta:B\to A$ and a left inverse $\gamma:B\to A$ then $\beta = \gamma$
#### onto mappings (surjection)
a mapping $\alpha:A\to B$ is onto $\iff \forall b\in B,\ \exists a\in A, st.\  \alpha(a)=b$
#### one to one (injection)
a mapping $\alpha:A\to B$ is one-one $\iff \forall a_1,a_2\in A,\ \alpha(a)_{1}=\alpha(a)_{2} \iff a_{1} = a_{2}$
#### bijection
a mapping $\alpha:A\to B$ is a bijection $\iff$ $\alpha$ is a surjection and $\alpha$ is an injection
#### product of mappings
with $\alpha:A\to B$ and $\beta:B\to C$
$\beta \circ \alpha$
$(\alpha\circ\beta)(a)=\alpha(\beta (a)), \forall a\in A$
product mappings are associative
#### indentity mapping
$\epsilon_{A}:A\to A\ st.\ \epsilon_{A}(a)=a\ \forall a\in A$ 
### partitions
a collection $C$ of $n$ subset$X_{i}$ of $A$ form a partitions $\iff (\forall X_{i},X_{j}\in C\ st.\ i\ne j\wedge i,j\le n,\ X_{i}\cap X_{j}=\varnothing) \wedge (\bigcup\limits_{i=1}^{n} X_{i}=A)$ 
### relations

#### equivalence relations
a relation $\sim$ on a set $A$ is an equivalence relation $\iff$
- $a\sim a$ (reflexive property)
- $a\sim b\iff b\sim a$ (symetric property)
- $a\sim b\wedge b\sim c\implies a\sim c$ (transitive property)
##### equivalence set
let $A$ be a set and $\sim$ an equivalence relation on $A$
if $a\in A$, the equivalence set $[a] = \{x|x\in A,\ x\sim a\}$
$[a]=[b]\iff a\sim b$
$[a]\cap [b]\ne\varnothing\implies[a]=[b]$
all the equivalence set of a given equivalence relation form a partition of $A$
a given partition of $A$ defines an equivalence relation were the elements of a same subset are equivalent