---
abstract: the study of algebraic structures
---
| precursors | [[proof]] [[elementary algebra]] [[set theory]] |
| ---------- | ----------------------------------------------- |
| status:    | #learning                                       |
| #tags      |                                                 |
| level      | #bachelor                                       |
| type       | #purenatsc                                      |
# #english-note
## set properties
### operations
a binary operation $\circ: A\times A\mapsto A$ 
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
$$\alpha:A\mapsto B $$
is a map of the set A into the set B
$$a\alpha$$
is the image of a under $\alpha$ 
$$\alpha = \beta \iff\forall a\in A,\  a\alpha = a\beta  $$


$$\forall\alpha:A\mapsto B$$
- $\alpha$ has a right inverse $\iff \alpha$ is one-one
- $\alpha$ has a left inverse $\iff \alpha$ is onto
- if $\alpha$ has a right inverse $\beta:B\mapsto A$ and a left inverse $\gamma:B\mapsto A$ then $\beta = \gamma$
#### onto mappings (surjection)
a mapping $\alpha:A\mapsto B$ is onto $\iff \forall b\in B,\ \exists a\in A, st.\  a\alpha=b$
#### one to one (injection)
a mapping $\alpha:A\mapsto B$ is one-one $\iff \forall a_1,a_2\in A,\ a_{1}\alpha=a_{2}\alpha \iff a_{1} = a_{2}$
#### bijection
a mapping $\alpha:A\mapsto B$ is a bijection $\iff$ $\alpha$ is a surjection and $\alpha$ is an injection
#### product of mappings
with $\alpha:A\mapsto B$ and $\beta:B\mapsto C$
$\alpha \beta:A\mapsto C$
$a(\alpha \beta)=(a\alpha)\beta, \forall a\in A$
product mappings are associative
#### indentity mapping
$\epsilon_{A}:A\mapsto A\ st.\ a\epsilon_{A}=a\ \forall a\in A$ 
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
## monoids

## rings
a ring is a nonempty set $R$ along with two operations:
- "addition" (+)
- "multiplication" ($\cdot$)
st.
- + is commutative
- + is associative
- $\exists$ a unique identity $0$ of addition
- every element of R as a unique additive inverse
- multiplication is associative
- $a(b+c)=ab+bc,\ (b+c)a=ba+ca$ (distributive law)
a ring whose multiplication is commutative is called a commutative ring
otherwise it is a non-commutative ring
a ring whose multiplication has an identity is called a ring with unity and the identity is called the unity
if $a,b,c\in R$ then:
- $a+c=b+c\implies a=b$
- $c+a=c+b\implies a=b$
a ring can have at most one unity
if an element $a$ of $R$ has a multiplicative inverse, it is unique
$$\forall a\in R, a\cdot0 =0\cdot a=0$$
### homomorphism
a mapping $\theta:R\to S$ of a ring $R$ into a ring $S$ is a homomorphism $\iff \forall a,b\in R$
- $(a+b)\theta=a\theta+b\theta$
- $(ab)\theta=(a\theta)(b\theta)$
if there exists an homomorphism of $R$ onto $S$ then $R$ is homomorphic to $S$
#### properties of homomorphisms
- if 0 is the zero of $R$ then $0\theta$ is the zero of $S$
- $a\in R\implies(-a)\theta=-(a\theta)$
- if $R$ has a unity $e$ and $\theta$ is an onto mapping then $S$ has $e\theta$ as unity
- if $a$ has a multiplicative inverse, then $(a^{-1})\theta=(a\theta)^{-1}$
- if $R$ is a commutative ring and $\theta$ is onto then $S$ is a commutative ring
### isomorphism
a homomorphism which is one-one is an isomorphism
if there exists an isomorphism of $R$ onto $S$ then $R$ is isomorphic to S

### zero divisors
$a\in R$ is a zero divisor of $R$ if $\exists c\in R,\ c\ne0\ st.\ ac=0 \lor \exists d\in R,\ d\ne0\ st.\ da=0$
if $a$ is not a zero divisor of $R$ then
- $b,c\in R, st.\ ab=ac\implies b=c$
- $b,c\in R, st.\ ba=ca\implies b=c$
## integral domain
an integral domain $D$ is a ring st.
- $|D| >1$
- $D$ is commutative
- $D$ has a unity
- $D$ has no nonzero zero divisors
### ordered integral domain
$D$ is an ordered integral domain $\exists D^+\subseteq D$ st.
- $a,b\in D^{+}\implies a+b\in D^+$
- $a,b\in D^{+}\implies ab\in D^+$
- $\forall a\in D\ a=0\oplus a\in D^{+}\oplus-a\in D^+$
if $c,d\in D$ then the relation $c>d$ means that $c-d\in D^+$
if $a\in D$ then the absolute value of $a$ $|a|$ is defined as
- if $a\ge0$ then $|a|=a$
- if $a<0$ then $|a|=-a$
#### well-ordering
a set $S$ of elements of an ordered integral domain is well-ordered if
$$\forall U\subseteq S\ st.\ |U|\ne0.\ \exists a\in U st.\ a\le x\ \forall x\in U$$

## fields

## groups
a group is a monoid with inverses
### definition
- set of element G
- operation: *
- closed under operation $$x,y \in G \implies x*y \in G$$
- inverses: $x^{-1}$ exist for all $x$ $$x*x^{-1}=e$$
- identity: $$y*e=e*y=y$$
- associativity: $$(a*b)*c=a*(b*c)$$
#### commutative
abelian group
#### non commutative
nonabelian group
### subgroup
$$H \leq G$$
H is a subgroup of G
$$H < G$$
H is a proper subgroup of G
#### definition
a subgroup of G is a subset of G and is also a group
is group as at least two subgroup
- G
- $\{e\}$
#### Lagrange's theorem
$$H \le G \implies |H|\ divides\ |G|$$
### cyclic group
G is cyclic if it's generated by a single element$$G = <x>$$every cyclic group is either the integers or the integers mod n
#### fundamental theorem of finitely generated abelian groups
any abelian group which is finitely generated can be broken in finite number of cyclic group

### homomorphisms
$$G\ *\ H\ +$$
$$x,y\in G$$
$$x*y=z$$
$$f:G\to H$$
$$x \mapsto f(x)$$
$$y \mapsto f(y)$$
$$z \mapsto f(z)$$
$$x*y=z \implies f(x)+f(y)=f(x*y)$$


### order of a group
number of element of a group
$|G|$
