---
abstract: the study of algebraic structures
---
| precursors | [[proof]] [[elementary algebra]] [[set theory]] |
| ---------- | ----------------------------------------------- |
| status:    | #learning                                       |
| #tags      | #toreoganize                                    |
| level      | #bachelor                                       |
| type       | #purenatsc                                      |
# #english-note
## set properties
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
## monoids
set of elements $M$ with an operation $\circ$ st:
$$x,y\in M\implies x\circ y\in M\land y\circ x\in M$$
$$\exists! e\in M\ st,\forall x\in M\ e\circ x=x\circ e=x$$
$$(a\circ b)\circ c=a\circ (b\circ c)$$


## groups
a group is a monoid with inverses ie.
$$\forall x\in G\exists! x^{-1}\in G\ st,\ x\circ x^{-1}=x^{-1}\circ x= e$$
### property of inverses
$$(a\circ b)^{-1}=b^{-1}\circ a^{-1}$$
### order of an element
$|x|$ is the smallest positive $n$ st $x^n=e$
$$|x|\ divides\ |G|$$
### properties
if $G$ contains a subgroup $H$ st
$$|G|\nmid [G:H]!$$
then $H$ contains $N \trianglelefteq G$ st $N\ne \{e\}$


if $p$ is prime and $|G|=p^2$ then $G$ is abelian and $G\simeq \mathbb{Z}_{}{p^2}$ or$G\simeq \mathbb{Z}_{p} \times \mathbb{Z}_{p}$
#### Cauchy's theorem
if $|G|$ is finite, $p$ is prime and $p\ |\ |G|$, then $\exists x\in G\ st,\ |x|=p$

### subgroup
$$H \leq G$$
H is a subgroup of G
$$H < G$$
H is a proper subgroup of G
#### definition
a subgroup of G is a subset of G and is also a group
every group as at least two subgroup
- G
- $\{e\}$
#### Lagrange's theorem
$$H \le G \implies |H|\ divides\ |G|$$
#### normal subgroupes
$$H\trianglelefteq G\iff \forall x\in G,\ xH=Hx$$
$$\iff\forall x\in G,\ H=xHx^{-1}\iff \forall x\in G,\ \forall h\in H,\  x\circ h\circ x^{-1}\in H$$
if $G$ is abelian$$H\le G\implies H\trianglelefteq G$$
#### subgroup multiplication
$$H,K\le G$$
$$HK=\{h\circ k|h\in H,\ k\in K\}$$
$$HH=H$$
#### centralizer
$$H\le G$$
the centralizer of $H$ in $G$ $$Z(H)=\{x\in G|x\circ h=h\circ x\ \forall h\in H\}$$
for $H=\{e\}$ $Z(H)=G$
#### normalizer
the normalizer of $H$ in $G$ $$N(H)=\{x\in G|xHx^{-1}=H\}$$
$$Z(H)\le N(H)$$
$$H\le N$$
$$H\trianglelefteq G\implies G=N(H)$$
if $G$ is abelian $$N(H)=G$$
$$Z(H)=G$$
#### commutator
$$[G,G]= <x\circ y\circ x^{-1}\circ y^{-1}|x,y\in G>$$
$$[G,G]\trianglelefteq G$$
$G/[G,G]$ is abelian
if $G/N$ is abelian, $[G,G]\trianglelefteq N$

### cosets
for a given subgroup $H\le G$ the left coset of $H$ for $x$ is
$$xH=\{x\circ h|h\in H\}$$
the right coset of $H$ for $x$ is
$$Hx=\{h\circ x|h\in H\}$$
if $G$ is abelian $$xH=Hx$$
$$\forall x\in G\ |xH|=|Hx|=|H|$$

#### index
$[G:H]$ is the number of cosets for $H$
if $G$ is finite
$$[G:H]=\frac{|G|}{|H|}$$
##### index 2 theorem
$$H\le G \land [G:H]=2\implies H\trianglelefteq G$$
### cyclic group
G is cyclic if it's generated by a single element$$G = <x>$$
ie.$$\forall g\in G,\ \exists n\in \mathbb{Z}\ st,\ g=x^n$$
$$|<x>|=|x|$$
every cyclic group is either the integers or the integers mod n
#### fundamental theorem of finitely generated abelian groups
any abelian group which is finitely generated can be broken in finite number of cyclic group
$$G\simeq \mathbb{Z}_{n_{1}}\times\mathbb{Z}_{n_{2}}\times\cdots\times\mathbb{Z}_{n_{k}}$$
st,$$n_{1}>1\ \land\ n_{1}|n_{2}|\cdots|n_{k}$$

### quotient group
if $N\trianglelefteq G$
$$G/N=\{xN|x\in G\}$$
$$(xN)*(yN)=(x\circ y)N$$
$(G/N, *)$ forms a groupe
if $G$ is abelian then $G/N$ is abelian and$$|G/N|=[G:N]$$
### direct product
$$(G,\circ) \times(H,*)$$
$$(g,h)\ g\in G,\ h\in H$$
$$(g_{1},h_{1})(g_{2},h_{2})=(g_{1}\circ g_{2},h_{1}*h_{2})$$
identity:$$(e_{g},e_{h})$$
inverses:$$(g,h)^{-1}=(g^{-1},h^{-1})$$
if $G,H$ are abelian then$G\times H$ is also abelian$$|G\times H|=|G|\ |H|$$
#### semidirect product
$H,N$ groups
$\pi:H\to \text{Aut}(N)$

then $H\ltimes_{\pi}N$
$$(H\times N, \circ)$$
where $$(h_{1},n_{1})\circ(h_{2},n_{2})=(h_{1}h_{2},(\pi(h_{2}^{-1})n_{1})n_{2})$$
$$N\trianglelefteq (H\ltimes_{\pi}N)$$
#### iternal products
let $H,K\le G$ then
$G\simeq H\times K \iff$
- $G=HK =\{hk|h\in H,k\in K\}$
- $H\trianglelefteq G,K \trianglelefteq  G$
- $H\cap K=\{e\}$


let $H,K\le G$ then
$G\simeq H\ltimes_{\omega}K \iff$
- $G=HK$
- $K \trianglelefteq G$
- $H\cap K=\{ e \}$

### homomorphisms
$$(G\ \circ)\ (H\ *)$$
$$x,y\in G$$
$$\pi:G\to H$$
$$x \mapsto \pi(x)$$
$$y \mapsto \pi(y)$$
$$z \mapsto \pi(z)$$
$$\pi(x)*\pi(y)=\pi(x\circ y)\ \forall x,y\in G$$

#### properties of homomorphisms
$$\pi(e_{G})=e_{H}$$
$$[\pi(x)]^{-1}=\pi(x^{-1})$$

#### kernel
$$\ker \pi=\{x\in G|\pi(x)=e_{H}\}$$
$$\ker \pi\trianglelefteq G$$
#### isomorphisms
$\pi:G\to H$ is an isomorphism $\iff$
- $\pi$ is a bijection
- $\pi$ is a homomorphism
if $\exists$ isomorphism $\pi:G\to H$, $G$ and $H$ are isomorphic ($G\simeq H$)

if $\pi:G\twoheadrightarrow H$ is an onto homomorphism:
$$H\simeq G/N,\ N=\ker\pi$$

if $G\simeq H$ and $G$ is abelian, then $H$ is abelian

##### automorphism
a automorphism of $G$ is an isomorphism $\pi:G\to G$
$$\text{Aut}(G)=(\{\pi|\pi:G\to G\ iso \}, \circ)$$
where $\circ$ is composition of mappings form a groupe
$$\text{Aut}(G)\le \text{Bij}(G,G)$$


$$\text{Aut}(\mathbb{Z}_{n})\simeq \mathbb{Z}^\times_{n}$$

$\exists X\ st, \exists Y\subseteq \text{Aut}(X)\ st,\ G\simeq Y$
###### inner automorphism
for $x\in G$, $$C_{x}:G\to G$$
$$C_{x}(g)=x\circ g\circ x^{-1}$$
$$\text{Inn}(G)=\{C_{x}|x\in G\}$$
$$\text{Inn}(G)\trianglelefteq \text{Aut}(G)$$

$$\text{Inn}(G)\simeq G/Z(G)$$
###### outer automorphism
$$\text{Out}(G)=\text{Aut}(G)/\text{Inn}(G)$$

### order of a group
number of element of a group
$|G|$

if $|G|=p$ prime
$G\simeq \mathbb{Z}_{p}$



### group action
an action of the group $G$ on the set $X$ is a map $G\times X\to X$
$(g,x)\mapsto \pi(g)x$
st,
$\pi(e)x=x$
$\pi(g_{1}g_{2})x=\pi(g_{1})[\pi(g_{2})x]$



$\pi:G\to \text{Bij}(X,X)$
a groupe action makes an equivalence relation on $X$
$$x\sim y \iff \exists g\in G\ st,\ \pi(g)x=y$$
#### orbit
$$O_{x}=\{y\in X|x\sim y\}$$
$O_{x}$ is not a group
#### stabilizer
$$\text{Stab}_{G}(x)=\{g\in G|\pi(g)x=x\}$$
$\text{Stab}_{G}(x)\le G$
$$|O_{x}|=|G/\text{Stab}_{G}(x)|$$
#### cayley's theorem
$$\forall G\ \exists H\ st\ G\simeq H\land H\le\text{Bij}(G,G)$$


if $G$ is finite
$$G\hookrightarrow S_{n},\ n=|G|$$

### simple groupes
$G$ is simple if the only normal subgroups are $\{e\}$ and $G$ 


### group classification

## rings
a ring is a nonempty set $R$ along with two operations:
- "addition" (+)
- "multiplication" ($\cdot$)
st.
- $(R,+)$ forms an abelian groupe $(e=0)$
- $R$ is closed under multiplication
- multiplication is associative
- $a(b+c)=ab+bc,\ (b+c)a=ba+ca$ (distributive law)
if there is no 1, $R$ is a rng 
a ring whose multiplication is commutative is called a commutative ring
otherwise it is a non-commutative ring
a ring whose multiplication has an identity is called a ring with unity and the identity is called the unity
if $a,b,c\in R$ then:
- $a+c=b+c\implies a=b$
- $c+a=c+b\implies a=b$
a ring can have at most one unity
if an element $a$ of $R$ has a multiplicative inverse, it is unique
$$\forall a\in R, a\cdot0 =0\cdot a=0$$
if every non zero element of $R$ has an inverse then $R$ is a division ring
if $x$ as in inverse, then $x$ is a unit of $R$ 
### homomorphism
a mapping $\varphi:R\to S$ of a ring $R$ into a ring $S$ is a homomorphism $\iff \forall a,b\in R$
- $\varphi(a+b)=\varphi a+\varphi b$
- $\varphi(ab)=(\varphi a)(\varphi b)$
if there exists an homomorphism of $R$ onto $S$ then $R$ is homomorphic to $S$
#### properties of homomorphisms
- if 0 is the zero of $R$ then $\varphi(0)$ is the zero of $S$
- $a\in R\implies\varphi(-a)=-(\varphi a)$
- if $R$ has a unity $1$ and $\varphi$ is an onto mapping then $S$ has $\varphi (1)$ as unity
- if $a$ has a multiplicative inverse, then $\varphi(a^{-1})=(\varphi a)^{-1}$
- if $R$ is a commutative ring and $\varphi$ is onto then $S$ is a commutative ring
#### kernel
$$\text{ker}(\varphi)=\{r\in R|\ \varphi r=0\}$$
the kernel is always a two sided ideal in $R$
### isomorphism
a homomorphism which is one-one and onto is an isomorphism
if there exists an isomorphism of $R$ onto $S$ then $R$ is isomorphic to S


if $\varphi:R\to S$ is an isomorphism
then so is $\varphi^{-1}:S\to R$

### zero divisors
$a\in R$ is a zero divisor of $R$ if $\exists c\in R,\ c\ne0\ st.\ ac=0 \lor \exists d\in R,\ d\ne0\ st.\ da=0$
if $a$ is not a zero divisor of $R$ then
- $b,c\in R, st.\ ab=ac\implies b=c$
- $b,c\in R, st.\ ba=ca\implies b=c$
### ideals
$I\subseteq R$ 
- closed under +
- closed under $\cdot$
- $\forall r\in R,a\in I, ra\in I\lor ar\in I$
if $x$ is a unit in $R$
then $x\in I \implies I=R$


$I \subsetneq R$ is a two sided ideal $\iff I=\text{Ker}(\varphi)$
where $\varphi:R\to S$ is a homomorphism
#### maximal ideal
$M$ is a maximal ideal when
$$M\subseteq I\subseteq R\implies I=M\lor I=R$$
#### principal ideal
$I$ is a principal ideal if
$\exists r\in R\ st.\ I=(r)=\{ rs|s\in R \}$

## integral domain
an integral domain $D$ is a ring st.
- $|D| >1$
- $D$ is commutative
- $D$ has a unity
- $D$ has no nonzero zero divisors



if $D$ is an integral domain, then $D[x]$ is an integral domain

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
### irreducibles
a nonunit, nonzero $a$ is called irreducible if
$a=bc \implies$ bis a unit or c is a unit 
### primes
a nonunit, nonzero $a$ is called prime if
$a|bc \implies a|b\lor a|c$

all primes are irreducible
### gauss' lemma
a primitive polynomial factors over $\mathbb{Z} \iff$ it factors over $\mathbb{Q}$ 

### unique factorisation domain

if $D$ is a integral domain st all nonzero elements admit a finite, unique up to units, factorization into primes
then $D$ is a unique factorisation domaine

in a unique factorisation domain, irreducible is the same as prime 

if $D$ is a unique factorisation domain, then $D[x]$ is also a unique factorisation domain
#### principal ideal domain
if every ideal is principal, then $D$ is a principal ideal domain

the maximal ideals of $D$ are of the form $(p)$ where $p$ is prime
##### euclidian domain
$D$ is a euclidean domain if 
$\exists d:D\setminus\{ 0 \}\to \mathbb{Z}^+$ st
- $d(r)\le d(rs)$ if $r,s\ne0$
- $\exists q,r\in D\ st,\ a=qb+r$ with $r=0\lor d(r)<d(b)$


## fields
<!-- some of that should be in [[galois theory]] -->
a field is a commutative division ring

every field is an integral domain

any finite integral domain is a field


if $F_{q}$ is a finite field, then
$F_{q}^{*}=F_{q}\setminus \{ 0 \}$ is a cyclic group under multiplication


### characteristic
smallest nonnegative $n$ st
additing $x$ to itself $n$ times $=0\ \forall x$ 

### homomorphisms
all ring homomorphisms $\varphi:F\to R$ is one-one
### automorphisms
$\varphi:F\to F$


let $g(x)\in F[x]$
if $\alpha$ is a root of $g$ and $\varphi$ is an automorphism of $F[\alpha]$ fixing $F$ then,
$\varphi(\alpha)$ is also a root of $g(x)$

### extensions
$K$ is called an extension of $F$ if $F \subseteq K$
$K$ is also a [vector space](abstract%20LA.md) over $F$


#### algebraic numbers
$\alpha\in K$ is algebraic over $F$ if 
$\exists$ a nonzero polynomial $f(x)\in F[x]\ st.$
$f(\alpha)=0$
#### algebraic extensions
$K$ is an algebraic extension of $F$ if every $\alpha \in K$ is algebraic over $F$

if $L$ is an algebraic extension of $K$ and $K$ is an algebraic extension of $F$ then,
$L$ is an algebraic extension of $F$


##### algebraic closure
if $F$ has no proper algebraic extension then, $K$ is algebraically closed

an algebraic closure of $F$ is an algebraic extension of $F$ that is algebraically closed



#### degree
the degree of $K$ over $F$ is the dimension of $K$ as a vector space over $F$ 
$[K:F]$


if $K$ is a finite expension of $F$ and $L$ is a finite expension of $K$ then,
$L$ is a finite expension of $F$ and $[L:F]=[L:K][K:F]$


if $[K:F]=p$ is prime then,
$$K=F[\alpha]\ \forall \alpha\in K\setminus F$$
if $[K_{1}:F],[K_{2}:F]$ are coprime, then $K_{1}\cap K_{2}=F$


### fundamental theorem of algebra
every nonconstant polynomial with complex coefficient has a root in $\mathbb{C}$
