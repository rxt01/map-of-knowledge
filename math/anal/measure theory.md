---
abstract:
---
| precursors | [[real anal]]II [[point set top]]                                                                                             |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------- |
| #tags      | #tocheck #toreoganize                                                                                                         |
| level      | #bachelor                                                                                                                     |


# #english-note 
## outer measure on $\mathbb{R}$
the outer measure of a set $A \subseteq \mathbb{R}$ is 
$$|A|=\inf\left\{ \sum\limits_{k=1}^{\infty} \ell(I_{k}):I_{k} \text{are open intervals st} A\subseteq \bigcup\limits_{k=1}^{\infty}I_{k} \right\}$$
$$A\subseteq B\subseteq \mathbb{R}\implies|A|\le|B|$$
### translation
for $t\in\mathbb{R}$ and $A\subseteq \mathbb{R}$
$$t+A=\{ t+a:a\in A \}$$
$$|t+A|=|A|$$
### subaditivity
let $(A)_{n}$ be a sequence of subset of $\mathbb{R}$
then $$|\bigcup\limits_{k=1}^\infty A_{k}|\leq \sum\limits_{k=1}^{\infty}|A_{k}|$$
### closed intervals
let $a,b\in \mathbb{R}$, $a<b$
$|[a,b]|=b-a$
## $\sigma$-algebras
let $X$ be a set and $\mathcal{S}$ a set of subste of $X$. then $\mathcal{S}$ is a $\sigma$-[algebra](algebra.md#algebras) of $X$ $\iff$
- $\varnothing\in \mathcal{S}$
- $E\in \mathcal{S}\implies X\setminus E\in \mathcal{S}$
- $(E)_{n}\in \mathcal{S} \implies \bigcup\limits_{k=1}^{\infty}E_{k}\in \mathcal{S}$
let $\mathcal{S}$ be a $\sigma$-algebra on a set $X$ then:
- $X\in \mathcal{S}$
- $D\cup E\in \mathcal{S}\land D\cap E\in \mathcal{S}\land D\setminus E\in \mathcal{S} \forall D,E\in \mathcal{S}$
- $(E)_{n}\in \mathcal{S} \implies \bigcap\limits_{k=1}^{\infty}E_{k}\in \mathcal{S}$

suppose $A$ is a set of subset of $X$ then the intersection of  all $\sigma$-algebra on $X$ that contain $A$ is a $\sigma$-algebra on $X$ 
### measurable spaces
a measurable space is an ordered pair $(X,S)$ where $X$ is a set and $\mathcal{S}$ a $\sigma$-algebra on $X$
#### measurable sets
a set $A$ is measurable $\iff A\in \mathcal{S}$
### borel set
the smallest $\sigma$-algebra on $\mathbb{R}$ containing all open subsets of $\mathbb{R}$ is the collection of borel subset of $\mathbb{R}$ its elements are borel sets
### measurable functions
a function $f:X\to \mathbb{R}$ is measurable $\iff f^{-1}(B)\in \mathcal{S} \forall$ borel sets $B\subseteq \mathbb{R}$
let $g$ be a borel measurable defined on a subset of $\mathbb{R}$ that include the range of $f$ then $g\circ f:X\to \mathbb{R}$ is measurable
addition, substraction, multiplication and division of measurable functions are measurable

### characteristic function
let $E$ be a subset of $X$ then the characteristic function of $E$ is
$\chi_{E}:X\to \mathbb{R}$ defined by $\chi_{E}(x)=\begin{cases}1&x\in E  \\ 0&x\notin E\end{cases}$
### borel measurable functions
let $X\subseteq \mathbb{R}$ a function $f:X\to \mathbb{R}$ if $f^{-1}(B)$ is a borel set $\forall$ borel set $B\in \mathbb{R}$
every continuous function is borel measurable
### increasing functions
let $X\subseteq \mathbb{R}$ and $f:X\to \mathbb{R}$
$f$ is increasing $\iff \forall x,y\in X (x\le y\implies f(x)\le f(y))$
every increasing function on a borel subset of $\mathbb{R}$ is borel measurable
#### strictly increasing functions
$f$ is strictly increasing $\iff \forall x,y\in X (x< y\implies f(x)<f(y))$
## measures
let $X$ be a set and $\mathcal{S}$ a $\sigma$-algebra on $X$
a measure on $(X,\mathcal{S})$ is a function $\mu:\mathcal{S}\to[0,\infty]$ st $\mu(\varnothing)=0$ and $$\mu\left( \bigcup\limits_{k=1}^{\infty}E_{k} \right)=\sum\limits_{k=1}^{\infty}E_{k}$$
for every disjoint sequence $(E)_{n}$ of sets in $\mathcal{S}$
### measure space
a measure space $(X,\mathcal{S},\mu)$ consists of a set $X$, a $\sigma$-algebra $\mathcal{S}$ on $X$ and a measure $\mu$ on $(X,\mathcal{S})$ 
### lebesgue measure
the lebesgue measure $\lambda$ is the measure on $(\mathbb{R},\mathcal{B})$, where $\mathcal{B}$ is the $\sigma$-algebra of borel subsets of $\mathbb{R}$, that assigns to each borel sets its outer measure
the lebegue measure is sometimes instead defined as the measure on $(\mathbb{R},\mathcal{L})$, where $\mathcal{L}$ is the $\sigma$-algebra of lebesgue measurable subsets of $\mathbb{R}$,  that assigns to each lebesgue measurable sets its outer measure
#### lebesgue measurable sets
a set $A\subseteq \mathbb{R}$ is lebesgue measurable sets if $\exists$ a borel set $B\subseteq A$ such that $|A\setminus B|=0$ 
the folowing are equivalent
- $A$ is lebesgue measurable
- $\forall \varepsilon>0\exists$ closed set $F\subseteq A$ with $|A\setminus F|<\varepsilon$
- $\exists$ closed set $(F)_{n}$ contained in $A$ with $|A\setminus \bigcup\limits_{k=1}^{\infty}F_{k}|=0$
-  $\exists$ a borel set $B\subseteq A$ such that $|A\setminus B|=0$ 
- $\forall \varepsilon>0\exists$ open set $F\supseteq A$ with $|G\setminus A|<\varepsilon$
- $\exists$ open set $(G)_{n}$ containing $A$ with $|(\bigcap\limits_{k=1}^{\infty}G_{k})\setminus A|=0$
- $\exists$ a borel set $B\supseteq A$ such that $|B\setminus A|=0$ 
the set $\mathcal{L}$ of lebesgue measurable subset of $\mathbb{R}$ is a $\sigma$-algebra on $\mathbb{R}$
the outer measure is a measure on $(\mathbb{R},\mathcal{L})$
#### lebesgue measurable functions 
a function $f:X\to \mathbb{R}$ is lebesgue measurable $\iff f^{-1}(B)$ is lebesgue measurable $\forall$ borel sets $B\subseteq \mathbb{R}$
### almost every
a set $E\in \mathcal{S}$ contains almost every element of $X$ if $\mu(X\setminus E)=0$ 
## cantor set
the cantor set $C$ is $[0,1]\setminus\left( \bigcup\limits_{k=1}^{\infty}G_{k} \right)$ where $G_{1}=\left( \frac{1}{3}, \frac{2}{3} \right)$ and $G_{n}$ for $n>1$ is the union of the midle-third open intervals in the intervals of $[0,1]\setminus\left( \bigcup\limits_{j=1}^{n-1}G_{j} \right)$
the cantor set is the set of numbers in $[0,1]$ that have only 0s and 2s in their base 3 representation
the cantor set is a closed subset of $\mathbb{R}$
the cantor set has lebesgue measure 0
the cantor set contains no interval with more than 1 element
the cantor set is uncountable
### cantor function
the cantor funciton $\Lambda:[0,1]\to[0,1]$ is defined by converting the base 3 representation into base 2 representatino as follows:
- if $x\in C$ then $\Lambda(x)$ is computed from the unique base 3 representaion of $x$ containing only 0s and 2s converting each 2 by 1 and interpreting the string as base 2
- if $x\in[0,1]\setminus C$ then $\Lambda(x)$ is computed from the base 3 representation of $x$ by truncating after the first, replacing all the 2s before the first 1 into 1s and interpreting the result as base 2
$\Lambda$ is continuous increasing from $[0,1]$ onto $[0,1]$
$\Lambda(C)=[0,1]$
## integration
### S-partiction
given a set $X$ and a $\sigma$-algebra $\mathcal{S}$ of $X$
an $\mathcal{S}$-partition of $X$ is a partition of $X$ made of sets of $\mathcal{S}$
### lower lebesgue sum
let $(X,\mathcal{S},\mu)$ be measure space, $f:X\to[0,\infty]$ an $\mathcal{S}$-measurable function, and $P$ an $\mathcal{S}$-partition $A_{1},\cdots A_{n}$ of $X$
the lower lebesgue sum is defined as $$\mathcal{L(f,p)=\sum\limits_{j=1}^n}\mu(A_{j})\inf\limits_{A_{j}}f $$
### integral of non negative functions
let $(X,\mathcal{S},\mu)$ be measure space and $f:X\to[0,\infty]$ an $\mathcal{S}$-measurable function
the integral of $f$ with respect to $\mu$ is defined by $$\int fd\mu=\sup\{ \mathcal{L}(f,P):P\text{ is an }S\text{-partition of }X  \}$$
$E\in \mathcal{S}\implies \int \chi_{E}d\mu=\mu(E)$
$$\int (f+g)d\mu=\int fd\mu+\int gd\mu$$
### integral of real valued functions
let $f:X\to[-\infty,\infty]$ , define$f^+,f^-:X\to[0,\infty]$
$$f^+=\begin{cases}
f(x) & f(x)\ge0 \\
0 & f(x)<0
\end{cases}\land f^{-}=\begin{cases}
0 & f(x)\ge 0 \\
-f(x) & f(x)<0
\end{cases}$$
$f=f^{+}-f^{-}$
$|f|=f^{+}+f^{-}$
$$\int fd\mu=\int f^{+}d\mu-\int f^{-}d\mu$$
$$\int cfd\mu=c\int fd\mu$$
$$\int (f+g)d\mu=\int fd\mu+\int gd\mu$$
$$\left|\int fd\mu\right|\le\int|f|d\mu$$
#### integral of a subset
let $E\subseteq X$
$$\int_{E}fd\mu=\int \chi_{E}fd\mu$$
$$\left|\int_{E}fd\mu\right|\leq \mu(E)\sup\limits_{E}|f|$$

### riemman integrable
a function $f$ is riemman integrable on $[a,b] \iff$ $$|\{ x\in[a,b]:f\text{ is not continuous at }x \}|=0$$
if $f$ is riemman integrable and $\lambda$ denotes the lebesgue measure on $\mathbb{R}$ then $$\int_{a}^{b}f=\int_{[a,b]}fd\lambda$$
### l1-norm
let $(X,\mathcal{S},\mu)$ be a measure space, $f:X\to[\infty,\infty]$ be $\mathcal{S}$-measurable
the $\mathcal{L}^1$-norm of $f$ is defined by $$||f||_{1}=\int |f|d\mu$$

properties:
- $||f||_{1}\ge0$
- $||f||_{1}=0\iff f(x)=0\forall\forall x\in X$
- $||cf||_{1}=|c|||f||_{1}\forall c\in \mathbb{R}$
- $||f+g||_{1}\leq||f||_{1}+||g||_{1}$


#### lebesgue space l1
the lebesgue space is defined by$$\mathcal{L}^1(\mu)=\{ f:f\text{ is an }\mathcal{S} \text{-measurable function from }X\text{ to }\mathbb{R}\land||f||_{1}<\infty \} $$
#### l1R
$\mathcal{L}^{1}(\mathbb{R})=\mathcal{L}^{1}(\lambda)$ where lambda is the lebesgue measure on either the borel subsets of $\mathbb{R}$ or the lebesgue measurable subsets of $\mathbb{R}$
## differentiation
### markov's inequality
let $(X,\mathcal{S},\mu)$ be a measure space and $h\in \mathcal{L}^1(\mu)$ then $$\mu (\{x\in X:|h(x)|\geq c  \})\le \frac{1}{c}||h||_{1} \forall c>0$$
### hardy-litlewood maximal function
let $h:\mathbb{R}\to \mathbb{R}$ be a lebesgue measurable function
the hardy-litlewood function $h^*:\mathbb{R}\to[0,\infty]$ of $h$ is $$h^{*}(b)=\sup\limits_{t>0} \frac{1}{2t}\int_{b-t}^{b+t}|h|$$


#### hardy-litlewood maximal inequality
let $h\in \mathcal{L}^{1}(\mathbb{R})$ then $$\mu (\{b\in \mathbb{R}:h^{*}(b)> c  \})\le \frac{3}{c}||h||_{1} \forall c>0$$
### lebesgue differentiation theorem v1
let $f\in \mathcal{L}^{1}(\mathbb{R})$ then $$\lim\limits_{ t\downarrow0 } \frac{1}{2t}\int_{b-t}^{b+t}|f-f(b)|=0\forall\forall b\in \mathbb{R} $$ 
### lebesgue differentiation theorem v2
let $f\in \mathcal{L}^{1}(\mathbb{R})$, define $g:\mathbb{R}\to \mathbb{R}$ by $$g(x)=\int_{-\infty}^{x}f$$
then $g'(b)=f(b)\forall\forall b\in \mathbb{R}$
### density
let $E\in \mathbb{R}$ the density of $E$ at $b\in \mathbb{R}$ is $$\lim\limits_{ t \downarrow 0 } \frac{|E\cap(b-t,b+t)|}{2t} $$
if $E$ is lebesgue measurable, then its density is $1$ at almost every element of $E$ and 0 at almost every element of $\mathbb{R}$
## product measure
### rectangles
let $X,Y$ be sets,  a rectangle in $X\times Y$ is a set of the form $A\times B$ where $A\subseteq X\land B\subseteq Y$
### product of $\sigma$-algebras
let $(X,\mathcal{S})$ and $(Y,\mathcal{T})$ be measurable spaces then the product $\mathcal{S}\otimes \mathcal{T}$ is defined as the smallest $\sigma$-algebra on $X\times Y$ that contains $\{ A\times B:A\in \mathcal{S}\land B\in \mathcal{T} \}$
#### measurble rectangle
a set $A\times B$, where $A\in \mathcal{S}\land B\in \mathcal{T}$, is a measurabe rectangle of $\mathcal{S}\otimes \mathcal{T}$
### cross sections
let $E\subseteq X\times Y$, $a\in X,b\in Y$ then the cross sections are defined as 
$$[E]_{a}=\{ y\in Y:(a,y)\in E \}\land[E]^{b}=\{ x\in X:(x,b)\in E \}$$
if $E \in \mathcal{S}\otimes\mathcal{T}$ then $[E]_{a}\in \mathcal{T}\forall a\in X\land[E]^{b}\in \mathcal{S}\forall b\in Y$

#### cross sections of functions
let $X,Y$ be sets, $f:X\times Y\to \mathbb{R}$ and $a\in X,b\in Y$ then the cross section functions are defined as $$[f]_{a}(y)=f(a,y)\forall y\in Y\land[f]^{b}(x)=f(x,b)\forall x\in X$$
if $f$ is measurable, then $[f]_{a},[f]^b$ are measurable
### algebras
let $W$ be a set and $\mathcal{A}$ a set of subset of $W$, then $\mathcal{A}$ is an algebra on $W$ if the folowing hold:
- $\varnothing\in \mathcal{A}$
- $E\in \mathcal{A}\implies W\setminus E\in \mathcal{A}$
- $E,F\in \mathcal{A}\implies E\cup F\in \mathcal{A}$
<!-- arent algebras suposed to be on fields???? -->
<!-- arent they also suposed to have a function???-->
<!-- TOCHECK -->
the set of finite unions of measurable rectangles in $\mathcal{S}\otimes\mathcal{T}$ forms an algebra <!--????--> on $X\times Y$
### monotone classes
let $W$ be a set and $\mathcal{M}$ a set of subset of $W$, then $\mathcal{M}$ is a monotone class on $W$ if the folowing hold:
- $E_{1}\subseteq E_{2}\subseteq \cdots$ is an increasing sequence of set in $\mathcal{M}\implies \bigcup\limits_{k=1}^{\infty}E_{k}\in \mathcal{M}$
- $E_{1}\supseteq E_{2}\supseteq \cdots$ is an decreasing sequence of set in $\mathcal{M}\implies \bigcap\limits_{k=1}^{\infty}E_{k}\in \mathcal{M}$

if $\mathcal{A}$ is an algebra on $W$, then the smallest $\sigma$-algebra containing $\mathcal{A}$ is the smallest monotone class on $\mathcal{A}$
### finite measure
a measure $\mu$ on a measurable set $(X,\mathcal{S})$ is finite if $\mu(X)<\infty$
#### $\sigma$-finite
$\mu$ is $\sigma$-finite if the whole space can be written as a countable union of sets with finite measure
### iterated integrals
$$\int_{X}\int_{Y}f(x,y)d\mu(y)d\mu(x):=\int_{X}(\int_{Y}f(x,y)d\mu(y)d)\mu(x)$$
### product of measure
$$(\mu \times \nu)(E)=\int_{X}\int_{Y}\chi_{E}(x,y)d\nu(y)d\mu(x)$$
### borel subsets
a borel subset of $\mathbb{R}^{n}$ is an element of the smallest $\sigma$-algebra on $\mathbb{R}^{n}$ containing all open subset of $\mathbb{R}^{n}$
the $\sigma$-algebra of borel subsets of $\mathbb{R}^{n}$ is $\mathcal{B}_{n}$
$$\mathcal{B}_{n}\otimes\mathcal{B}_{m}=\mathcal{B}_{n+m} $$
### lebesgue measure
the lebesgue measure $\lambda_{n}$ on $\mathbb{R}^{n}$ is defined inductively by $$\lambda_{n}=\lambda_{n-1}\times \lambda_{1}$$
where $\lambda_{1}$ is the lebesgue measure on $(\mathbb{R},\mathcal{B}_{1})$
### measure of a dilation
let $t>0$
$E\in B_{n}\implies tE\implies \mathcal{B}_{n}\land \lambda_{n}(tE) t^{n}\lambda_{n}(E)$
## metric spaces

a metric on a non empty set $V$ is a function $d:V\times V\to[0,\infty)$ st:
- $d(f,f)=0\forall f\in V$
- $f,g\in V\land d(f,g)=0\implies f=g$
- $d(f,g)=d(g,f)\forall f,g\in V$
- $d(f,h)\le d(f,g)+d(g,h)\forall f,g,h\in V$
a metric space $(V,d)$ is a set $V$ along with a metric $d$ on $V$
### open balls
the open ball cneterd at $f$ of radius $r$ is defined by $$B(f,r)=\{ g\in V :d(f,g)<r\}$$
### closed balls
the open ball cneterd at $f$ of radius $r$ is defined by $$\bar{B}(f,r)=\{ g\in V :d(f,g)\leq r\}$$
### open subsets
a subset $G$ of a metric space $V$ is open when $\forall f\in G\exists r>0$ st $B(f,r)\subseteq G$
### closed subsets
a subset is closed if its complement is open
### closure
let $E$ be a subset of $V$ then $$\bar{E}=\{ g:V:B(g,\varepsilon)\cap E\neq0\forall \varepsilon>0 \}$$
### continuity
a function $T$ is contiunous at $f\iff \forall \varepsilon>0\exists \delta>0$ st $d(f,g)<\delta\implies d(T(f),T(g))<\varepsilon$
### cauchy sequences
a sequence $(f_{n})$ is cauchy if $\forall \varepsilon \exists n\in \mathbb{N}^{+}$ st $j,k\ge n\implies d(f_{j},f_{k})<\varepsilon$
### complete metric spaces
a metric space $V$ is complete $\iff$ every cauchy sequence in $V$ converges to some element of $V$
## complex

### measurable complex functions
a function $f:X\to \mathbb{C}$ is measurable if $\Re f,\Im f$ are both measurable
### complex integrals
$$\int fd\mu=\int(\Re f)d\mu+i \int(\Im f)d\mu$$
$$\left|\int fd\mu\right|\leq \int|f|d\mu$$
$$\int \bar{f}d\mu=\overline{\int f d\mu}$$
## vector spaces
<!-- from now on should probably be somewhere else -->
### aditions
an adition on a set $V$ is a function $+:V\times V\to V$
### scalar multiplication
a scalar multiplication on a set $V$ by a field $\mathbb{F}$ is a function $\cdot:V\times \mathbb{F}\to V$
### vector space
a vector space over $\mathbb{F}$ is a set $V$ along with an adition on $V$ and a scalar multiplication on $V$ st the folowing hold:
- $\vec{f}+\vec{g}=\vec{g}+\vec{f}\forall \vec{f},\vec{g}\in V$
- $(\vec{f}+\vec{g})+\vec{h}=\vec{f}+(\vec{g}+\vec{h})\land (\alpha \beta)\vec{f}=\alpha(\beta \vec{f})\forall \vec{f}\in V,\alpha,\beta\in \mathbb{F}$
- $\exists \vec{0}\in V$ st $\vec{f}+\vec{0}=\vec{f}\forall \vec{f}\in V$
- $\forall \vec{f}\in V\exists \vec{g}\in V$ st $\vec{f}+\vec{g}=\vec{0}$
- $1\vec{f}=\vec{f}\forall \vec{f}\in V$
- $\alpha(\vec{f}+\vec{g})=\alpha \vec{f}+\alpha \vec{g}\land(\alpha+\beta)\vec{f}=\alpha \vec{f}+\beta \vec{f}\forall \vec{f},\vec{g}\in V,\alpha,\beta\in \mathbb{F}$
### subspaces
a subset $U$ of $V$ is a subspaces if it is also a vector space
### normed vector spaces
a norm on a vector space $V$ is a function $\lvert| \cdot |\rvert:V\to[0,\infty)$ st:
- $\lvert |\vec{f}| \rvert=0\iff \vec{f}=\vec{0}$
- $||\alpha \vec{f}||=|\alpha|||\vec{f}||\forall \alpha\in \mathbb{F},\vec{f}\in V$
- $||\vec{f}+\vec{g}||\leq||\vec{f}||+||\vec{g}||\forall \vec{f},\vec{g}\in V$
a normed space $(V,||\cdot||)$ consists of a vector space $V$ along with a norm $||\cdot||$ on $V$
normed vector spaces are metric spaces
### banach spaces
a complete normed vector space is a banach space
### linear map
let $V,W$ be vector spaces, a function $T:V\to W$ is linear if the folowing hold:
- $T(\vec{f}+\vec{g})=T(\vec{f})+T(\vec{g})\forall \vec{f},\vec{g}\in V$
- $T(\alpha \vec{f})=\alpha T(\vec{f})\forall \vec{f}\in V,\alpha \in \mathbb{F}$
#### bounded linear maps
the norm of $T$ is defined by $$||T||=\sup\{ ||T\vec{f}||:\vec{f}\in V\land||f||\leq 1 \}$$
$T$ is bounded if $||T||<\infty$
the set of bounded linear map from $V$ to $W$ is $\mathcal{B}(V,W)$
if $W$ is a banach space, then $\mathcal{B}(V,W)$ is a banach space
### linear functionals
a linear map from $V$ to $\mathbb{F}$ is a linear functional
### null space
the null space of $T$ is defined as $$\text{null }T = \{ \vec{f}\in V:T\vec{f}=\vec{0} \}$$
### bounded linear functionals
let $\varphi: V\to F$ be a linear functional that is not identically 0, then the following are equivalent:
- $\varphi$ is a bounded linear functional
- $\varphi$ is a continuous linear functional
- null $\varphi$ is a closed subspace of $V$
- $\overline{\text{null }\varphi }\neq V$
every infinite dimensional normed vector space has a discontinuous linear functional
### chains
a collection $\mathcal{C}$ of subset of $V$ is a chain when $\Gamma,\Omega\in \mathcal{C}\implies \Gamma \subseteq \Omega \lor \Omega \subseteq \Gamma$
#### zorn's lemma
let $V$ be a set and $\mathcal{A}$ a collection of subset of $V$ with the property that the union of all set in $\mathcal{C}$ is in $\mathcal{A}$ for all chain $\mathcal{C}\subseteq \mathcal{A}$, then $\mathcal{A}$ contains a maximal element
this statement is equivalent to the [[set theory#axiom of choice|axiom of choice]] and the [[set theory#well ordering theorem|well ordering theorem]]
### dual spaces
$$V'=\mathcal{B}(V,\mathbb{F}) $$
### baire's theorem
a complete metric space is not the countable union of closed subsets with empty interior
the countable intersection of dense open subsets of a complete metric space is nonempty
## lebesgue spaces
### p norm
$$||f||_{p}=\left( \int|f|^p d\mu\right)^\frac{1}{p}$$
$$||f||_{p}=\sup\left\{  \left|\int fhd\mu\right|:h\in \mathcal{L}^{p'}(\mu)\land ||h||_{p'}\leq_{1}  \right\}$$
### essential supremum
$$||f||_{\infty}=\inf\{ t>0:\mu(\{ x\in X:|f(x)|>t \})=0 \}=\inf\{ t>0:|f(x)|\leq t \forall\forall x \}$$
### lebesgue space
$\mathcal{L}^{p}(\mu)$ is the set of $\mathcal{S}$ measurable functions $f:X\to \mathbb{F}$ st $||f||_{p}<\infty$

$\mathcal{L}^{p}(\mu)$ is a vector space
### dual exponent
for $1\leq p\leq \infty$ the dual exponent $p'$ of $p$ is the element of $[1,\infty]$ st $$\frac{1}{p}+\frac{1}{p'}=1$$
#### young's inequality
$$ab\leq \frac{a^p}{p}+\frac{b^{p'}}{p'}$$
#### hodel inequality
$$||fh||_{1}\leq ||f||_{p}||h||_{p'}$$
### mincowski inequality
$$||f+g||_{p}\leq ||f||_{p}+||g||_{p}$$
## Lp spaces
### almost 0 functions
$\mathcal{Z}(\mu)$ is the set of $\mathcal{S}$-measurable fucntion from $X$ to $\mathbb{F}$ which equal 0 $\forall\forall x$
for $f\in \mathcal{L}^p(\mu)$, let $\tilde{f}$ be the subset of $\mathcal{L}^p(\mu)$ defined by $$\tilde{f}=\{ f+z:z\in \mathcal{Z(\mu)}  \}$$
## Lp
$L^{p}(\mu)$ is the collection of subset of $\mathcal{L}^{p}(\mu)$ defined by $$L^{p}(\mu)=\{ \tilde{f}:f\in \mathcal{L}^{p}(\mu)  \}$$
$\tilde{f}+\tilde{g}=\tilde{(f+g)}$
$\alpha \tilde{f}=\tilde{(\alpha f)}$
### Lp norm
$$||\tilde{f}||_{p}=||f||_{p}$$
$L^p$ is a banach space and $||\cdot||_{p}$ a norm on $L^p$
## hilbert spaces
a hilbert space is a banach space that is an inner product space
every hilbert space has an [[abstract LA#orthonormal basis|orthonormal basis]]
### distance from a point to a set
let $U$ be a nonempty subset of a vector space $V$ and $\vec{f}\in V$ the distance from $\vec{f}$ to $U$ is $$\text{distance}(\vec{f},U)=\inf\{ ||\vec{f}-\vec{g}||:\vec{g}\in U \}$$
### convex subset
$U$ is convex $\iff (1-t)\vec{f}+t\vec{g}\in U\forall \vec{f},\vec{g}\in U,t\in[0,1]$
### orthogonal projection
let $U$ be a non empty closed convex subset of a hilbert space $V$
the orthogonal projection of $V$ onto $U$ is the function $P_{U}:V\to U$ defined by setting $P_{U}(\vec{f})$ equal to the unique element of $U$ that is the closest to $U$


### identity map
the identity map $I:V\to V$ is defined by $I\vec{f}=\vec{f}\forall \vec{f}\in V$ 


### adjoint
let $V,W$ be hilbert spaces and $T:V\to W$ be a bounded linear map
the ajoint of $T$ is the funciton $T^*:W\to V$ st $$\langle T\vec{f},\vec{g}\rangle=\langle \vec{f},T^{*}\vec{g}\rangle\forall \vec{f}\in V,\vec{g}\in W$$
### operator
an operator is a linear map from a vcetor space to itself
if $V$ is a vector space then $\mathcal{B}(V)$ denotes the normed vector space of bounded operators on $V$ ie $\mathcal{B}(V)=\mathcal{B}(V,V)$
### inverse
$T$ is invertible $\iff$ it is 1-1 and onto
$$T^{-1}\circ T=T\circ T^{-1}=I$$
### eigenvalue
a number $\alpha \in \mathbb{F}$ is an eigenvalue of $T$ if $T-\alpha I$ is not injective
### eigenvectors
a nonzero vector $\vec{f}\in V$ is an eigenvector of $T$ corrseponding to an eigenvalue $\alpha \in \mathbb{F}$ if $T\vec{f}=\alpha \vec{f}$
### spectrum
$$\text{sp}(T)=\{ \alpha \in\mathbb{F}:T-\alpha I \text{ is not invertible} \}$$
### normal operators
an operator $T$ is normal if $T^*T=TT^{*}$



## real and complex measure
let $(X,\mathcal{S})$ be a measurable space
a function $\nu:\mathcal{S}\to \mathbb{F}$ is countably additive when $$\nu\left( \bigcup\limits_{k=1}^{\infty}E_{k} \right)=\sum\limits_{k=1}^{\infty}\nu E_{k}$$
a real measure on $(X,\mathcal{S})$ is a countably additive function $\nu:\mathcal{S}\to \mathbb{R}$
a complex measure on $(X,\mathcal{S})$ is a countably additive function $\nu:\mathcal{S}\to \mathbb{C}$
$\nu(\varnothing)=0$

let $\mu$ be a positive measure on $(X,\mathcal{S})$ and $h\in \mathcal{L}^1(\mu)$
then $hd\mu$ is the real or complex measure on $\mathcal{S}$ defined by $$(hd\mu)(E)=\int_{E}hd\mu$$
### total variation measure
let $\nu$ be a complex measure
the total variation measure is the function $\nu:\mathcal{S}\to[0,\infty]$ defined by $$|\nu|(E)=\sup\left\{  \sum\limits_{k=1}^{n}|\nu(E_{k})|:n\in \mathbb{N}^{+}\land E_{k}\text{ are disjoints sets in }\mathcal{S}\text{ st }\bigcup\limits_{k=1}^{n}E_{k}\subseteq E   \right\}$$
if $d\nu=hd\mu$ then $|\nu|(E)=\int_{E}|h|d\mu$
### addition and scalar multiplication of measure
$$(\nu+\mu)(E)=\nu(E)+\mu(E)$$
$$(\alpha \nu)(E)=\alpha(\nu(E))$$
### vector space of measure
$\mathcal{M}_{\mathbb{F}}(\mathcal{S} )$ is the vector space of measure on $\mathcal{S}$ where addition is addition of measure and scalar multiplication is scalar multiplicaiton of measure
### total variation norm
$$||\nu||=|\nu|(X)$$
### banach space of measure
$\mathcal{M}_{\mathbb{F}}(\mathcal{S})$ along with $||\nu||$ forms a banach space
### singular measures
$\nu,\mu$ are singular with respect  to each other $\nu\perp \mu$ if $\exists A,B\in \mathcal{S}$ st :
- $A\cup B=X\land A\cap B=\varnothing$
- $\nu(E)=\nu(E\cap A)\land \mu(E)=\mu(E\cap B)\forall E\in \mathcal{S}$

## fourier analysis
### unit disk and circle
$$\mathbb{D}=\{ w\in \mathbb{C}:|w|<1 \}$$
$$\partial \mathbb{D}=\{ z\in \mathbb{C}:|z|=1 \}$$
### measurable subsets
a subset $E$ of $\partial \mathbb{D}$ is measurable if $\{ t\in(-\pi,\pi]:e^{it}\in E \}$ is a borel subset of $\mathbb{R}$
$$\sigma(E)= \frac{|\{ t\in(-\pi,\pi]: e^{it}\in E \}|}{2\pi}$$
### Lp
$L^p(\partial \mathbb{D})$ is $L^p(\sigma)$ with $\mathbb{F}=\mathbb{C}$
### fouried coefficient
let $f\in L^1(\partial \mathbb{D})$ 
for $n\in \mathbb{Z}$ the nth fourier coefficient $\hat{f}(n)$ is defined by $$\hat{f}(n)=\int_{\partial \mathbb{D}}f(z)\overline{z^{n}}d\sigma(z)=\int_{-\pi}^{\pi}f(e^{it})e^{-int} \frac{dt}{2\pi}$$
$\hat{f+g}(n)=\hat{f}(n)+\hat{g}(n)$
$\hat{\alpha f}(n)=\alpha \hat{f}(n)$
$|\hat{f}(n)|\leq ||f||_{1}$
$\lim\limits_{ n \to \pm\infty }\hat{f}(n)=0$
### fourier series
the fourier series of $f$ is $$\sum\limits_{n=-\infty}^{\infty}\hat{f}(n)z^{n}$$
### prf
for $0\leq r<1$ define $\mathcal{P}_{r}f:\partial \mathbb{D}\to \mathbb{C}$ by $$(\mathcal{P}_{r}f )(z)=\sum\limits_{n=-\infty}^{\infty}r^{|n|}\hat{f}(n)z^n$$
### poisson kernel
$$P_{r}(\zeta)= \frac{1-r^{2}}{|1-r\zeta|^2}$$
the family of function $\{ P_{r} \}_{r\in[0,1)}$ is called  the poisson kernel on the open disk  $\mathbb{D}$
### harmonic fucntion
a funciton $u:G\to \mathbb{C}$ on an open subset $G\subseteq \mathbb{R}^2$ is harmonic if $$(D_{1}(D_{1}u))(w)+(D_{2}(D_{2}u))(w)=0$$
the left side of the equation is the laplacian $(\Delta u)(w)$
### differentiable
let $f:\partial \mathbb{D}\to \mathbb{C}$ and $k\in \mathbb{N}$
define $\tilde{f}:\mathbb{R}\to \mathbb{C}$ by $\tilde{f}(t)=f(e^{it})$
$f$ is $k$-time continuously differentiable if $\tilde{f}$ is $k$-time diffenrentiable everywhere on $\mathbb{R}$ and its $k$-th derivative is continuous
if $f$ is $k$-time continuously differentiable then $f^{[k]}:\partial \mathbb{D}\to \mathbb{C}$ is defined by $$f^{[k]}(e^{it})=\tilde{f}^{(k)}(t)$$
$$\hat{f^{[k]}}(n)=i^{k}n^{k}\hat{f}(n)$$
### orthonormal basis of L2
the family $\{ z^n \}_{n\in \mathbb{Z}}$ is an orthonormal basis of $L^{2}(\partial \mathbb{D})$
### convolution
let $f,g\in L^1(\partial \mathbb{D})$, the convolution $f*g$ is the function defined by $$(f*g)(z)=\int_{\partial \mathbb{D}}f(w)g(z\bar{w})d\sigma(w)$$
$$||f*g||_{p}\leq ||f||_{1}||g||_{p}$$
$$f*g=g*f$$
$$f*g*h=f*(g*h)=(f*g)*h$$
$$\hat{f*g}(n)=\hat{f}(n)\hat{g}(n)$$
### fourier transform
the fourier transfom of $f$ is the function $\hat{f}:\mathbb{R}\to \mathbb{C}$ defined by $$\hat{f}(t)=\int_{-\infty}^{\infty}f(x)e^{-2\pi itx}dx$$
#### derivative
let $g(x)=xf(x)$ then $$(\hat{f})'(t)=-2\pi i\hat{g}(t)$$
$$\hat{(f')}(t)=2\pi it\hat{f}(t)$$

### convolution
let $f,g:\mathbb{R}\to \mathbb{C}$ then $$(f*g)(x)=\int_{-\infty}^{\infty}f(t)g(x-t)dt$$

$$\hat{f*g}=\hat{f}\hat{g}$$
### upper half plane
$$\mathcal{H}=\{ (x,y)\in \mathbb{R}^{2}:y>0 \}=\{ z\in \mathbb{C}:\Im z>0 \} $$
$$\partial\mathcal{H}=\{ (x,y)\in \mathbb{R}^{2}:y=0 \}=\{ z\in \mathbb{C}:\Im z=0 \}=\mathbb{R} $$
### fourier transfom on L2
the fourier transform $\mathcal{F}$ on $L^{2}(\mathbb{R})$ is the bounded operator on $L^2(\mathbb{R})$ such that $\mathcal{F}f=\hat{f}\forall f\in L^1(\mathbb{R})\cap L^2(\mathbb{R})$
## probability measures
let $\mathcal{F}$ be a $\sigma$-algebra on a set $\Omega$
a probability measure on $(\Omega,\mathcal{F})$ is a measure $P$ on $(\Omega,\mathcal{F})$ st $P(\Omega)=1$
$\Omega$ is a sample space
an event is an element of $\mathcal{F}$
if $A$ is an event, then $P(A)$ is the probability of $A$
if $P$ is a probability measure on $(\Omega,\mathcal{F})$, then the triple $(\Omega,\mathcal{F},P)$ is a probability space
### indicator function
let $A\in \Omega$ then the indicator function on $A$ is the funciton $1_{A}:\Omega\to \mathbb{R}$ defined by $$1_{A}(w)=\begin{cases}
1 & w\in A \\
0 & w \not\in A
\end{cases}$$
### almost surely
an event $A$ is alomst surely if $P(A)=1$ or equivalently $P(\Omega\setminus A)=0$
### independent events
two event $A$ and $B$ are independent if $$P(A\cap B)=P(A)P(B)$$
### random variable
a random variable on $(\Omega,\mathcal{F})$ is a measurable function from $\Omega$ to $\mathbb{R}$
### expectation
if $X\in \mathcal{L}^1(P)$ then the expectation  of the variable $X$ is defined by $$EX=\int_{\Omega}XdP$$
### independent random variables
2 random variables $X,Y$ are independent if $\{ X\in U \}$ and $\{ Y\in V \}$ are independent events $\forall$ borel sets $U,V$ in $\mathbb{R}$
if $X,Y$ are independent, then $E(XY)=EX\cdot EY$

### variance
let $(\Omega,\mathcal{F},P)$ be a probability space and $X\in \mathcal{L}^{2}(P)$ be a random variable
the variance of $X$ is defined as $E((X-EX)^{2})$
the standard deviation of $X$ is defined by $\sigma(X)=\sqrt{ E((X-EX)^2) }$
### probability distribution
the probability distribution of $X$ is the probability measure defined on $(\mathbb{R},\mathcal{B})$ by $$P_{X}(B)=P(X\in B)=P(X^{-1}(B))$$
the distribution function is the function $\tilde{X}:\mathbb{R}\to[0,1]$ defined by $$\tilde{X}(s)=P_{X}((-\infty,s])=P(X\leq s)$$
### density function
if $\exists h\in L^{1}(\mathbb{R})$ such that $$\tilde{X}(s)=\int_{-\infty}^{s}hd\lambda \forall s\in \mathbb{R}$$
then $h$ is the density function of $X$
