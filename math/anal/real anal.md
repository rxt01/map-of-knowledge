---
abstract: hardcord and more rigorous version of calc
---

|            | anal I                                            | anal II                                                                                                                                       | anal III                                                                                                                                      | IV                   |
| ---------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| precursors | [[point set top]] [[diff and int calc]] [[proof]] | [[multi vars calc]]                                                                                                                           | [[vector calc]]                                                                                                                               |                      |
| #tags      | #toreoganize                                      | #toreoganize                                                                                                                                  |                                                                                                                                               |                      |
| level      | #bachelor                                         | #bachelor                                                                                                                                     | #bachelor                                                                                                                                     | #bachelor            |

# #english-note 


## definition of the limit
we say $\lim_{x\to c} f(x) =L$ when:
$$\forall \varepsilon >0, \exists\delta>0\ st\ 0<|x-c|<\delta \implies |f(x)-L|<\varepsilon $$
$$\forall\varepsilon>0,\exists\delta>0\ st\ x\in V_\delta (c) \implies f(x)\in V_\varepsilon (L)$$
### sequential criterion for functional limits
$$\lim_{x\to c} f(x) =L \iff \forall(x_n)\to c\ with\ x_n\ne c ,\forall n, f(x_n)\to L$$

## axioms of the reals
a non-empty set  $\mathbb{R}$ together with operation $+,\times$ and ordering $\le$ is called the real number if it satisfies:
- (A) $(\mathbb{R},+,0)$ is an [abelian group](algebra.md)
- (M) $(\mathbb{R} \setminus\{0\},\times , 1)$ is an abelian group
- (D) $x(y+z)=xy+xz$
- (0) $\le$ is a total order, compatible with $+$ and $\times$ , archimedean property
- (C) every Cauchy sequence is a convergent sequence $|x| := \{x\ge 0:x; x<0:-x\}$ 
### axiom of completeness
if any set $A\subseteq \mathbb{R}$ is nonempty and bounded then $\sup A$ exists and is a real number
#### consequences
##### nested intervals property
let $I_n = [a_n,b_n] \forall n\in \mathbb{N}$
and assume $I_{n+1} \subseteq I_n \forall n$
$$\cap^{\infty}_{n=1} I_n \ne \varnothing$$
##### archimedean property
i.  $\forall x\in \mathbb{R}, \exists n\in\mathbb{N},n>x$
ii. $\forall x\in \mathbb{R}\ x>0, \exists n\in\mathbb{N},\frac{1}{n}<x$
$\mathbb{Q}$ is dense in $\mathbb{R}$
$$\forall a,b \in \mathbb{R} , a<b,\exists\frac{m}{n}\in\mathbb{Q},a<\frac{m}{n}<b$$
##### cardinality of $\mathbb{R}$
$\mathbb{R}$ is uncountable
$|\mathbb{R}| >|\mathbb{N}|$
![[set theory#cardinality]]
###### continuum hypothesis (CH)
there is no set $S$ with $|\mathbb{N}|<|S|<|\mathbb{R}|$
Godel showed that CH doesn't lead to a contradiction with [[set theory]]
Cohen showed that $\sim$CH doesn't lead to a contradiction
CH is undecidable
###### one to one and onto
for $f:x\to y$
$f$ is one to one (1-1) "injection" when:$$f(x_1)=f(x_2) \implies x_1=x_2$$
$f$ is onto "surjection" when:$$\forall y\in Y, \exists x\in X, f(x)=y$$
if $f$ is 1-1 and onto, f is a 1-1 correspondance "bijection"

## sequences
a sequences of real numbers:
a map $$a:\mathbb{N} \to \mathbb{R} $$ $$\lor a:\mathbb{N}_0 \to \mathbb{R} $$
notation$$(a_1,a_2,a_3,a_4,...)$$
$$(a_n)_{n\in \mathbb{N}} \lor (a_n)_{n=1}^\infty \lor (a_n)$$
### limits
#### convergence
a sequence $(a_n)$ converges to $L\in \mathbb{R}$ when:
$$\forall\varepsilon>0,\exists N\in\mathbb{N}, n\geq N \implies |a_n-a|<\varepsilon$$
if $(a_n)$ converges, then the limit is unique
##### topological view of convergence
for $a\in \mathbb{R}$ and $\varepsilon>0$, the [$\varepsilon$](point%20set%20top.md) of a is $V_\varepsilon (a)  = \{x\in \mathbb{R}|\ |x-a|<\varepsilon\} = (a-\varepsilon,a+\varepsilon)$
$(a_n)\to a$ when $$\forall\varepsilon>0,\exists N\in\mathbb{N},n\geq N \implies a_n \in V_\varepsilon(a)$$
#### divergence
$(a_n)$ does not converges to a when:
$$\exists\varepsilon >0, \forall N\in\mathbb{N}, \exists n\geq N, |a_n-a|\geq\varepsilon$$
#### sequence boundaries
A sequence $(a_n)$ is bounded if $\exists M >0, \forall n, |a_n| < M$
if $(a_n)\to a$ then $(a_n)$ is bounded
##### monotone convergences theorem
$(a_n)$ is increasing if $a_n \leq a_{n+1} \forall n$
$(a_n)$ is decreasing if $a_n \geq a_{n+1} \forall n$
if $(a_n)$ is increasing or decreasing, $(a_n)$ is monotone
if $(a_n)$ is monotone and bounded, then it converges

#### limit rules
if $(a_n)\to a \land (b_n)\to b \land c\in \mathbb{R}$
- $\lim ca_n=ca$
- $\lim (a_n+b_n)=a+b$
- $\lim(a_nb_n)=ab$
- $\lim(\frac{a_n}{b_n})=\frac{a}{b}$ when $b\ne 0$
### subsequences
if $(a_n)$ converges, every subsequence converges to the same limit
#### Bolzano-Weierstrauss theorem
if $(a_n)$ is bounded, then it has a convergent subsequence
## series
A series is the sum of a sequence
$$\sum a_n$$
let $S_k = a_1+a_2+\cdots+a_k$
this is the kth partial sum
$S_1=a_1$
$S_2 =a_1+a_2$
$S_3=a_1+a_2+a_3$
$.$
$.$
$.$
$\sum a_K=\lim S_k$

if $\sum a_k=A$ and $\sum b_k =B$ then:
- $\sum ca_k=cA$ for $c\in \mathbb{R}$
- $\sum (a_k+b_k)=A+B$
$\sum r^k$ diverges when $|r|\geq 1$ and if $|r|<1$, then $\sum r^k=\frac{1}{1-r}$
let $0\le a_k\le b_k$
- if $\sum b_k$ converges, then $\sum a_k$ converges and $\sum a_k\le\sum b_k$
- if $\sum a_k$ diverges, then $\sum b_k$ diverges
### commutativity
if $\sum a_k$ is a series and $\sum |a_k|$ converges, we say $\sum a_k$ is absolutely convergent
if $\sum a_k$ converges but $\sum |a_k|$ diverges, we say $\sum a_k$ is conditionally convergent
if $\sum a_k$ is absolutely convergent, then commutativity is applicable
if $\sum a_k$ is conditionally convergent, them commutativity is not applicable and every real number can be obtained by rearranging the series
## set boundaries
### definition
a set $A\subseteq \mathbb{R}$ is bounded above when $\exists b \in \mathbb{R}, \forall a \in A, a\le b$ 
$b$ is a upper bound of $A$
a set $A\subseteq \mathbb{R}$ is bounded below when $\exists b \in \mathbb{R}, \forall a \in A, a\ge b$ 
$b$ is a lower bound of $A$
### suprema
if $A\subseteq \mathbb{R}$ is bounded above, the least upper bound is the supremum $\sup A$
$$s\in \mathbb{R} \land A\subseteq \mathbb{R} , s=\sup A \iff \forall a\in A, s\geq a \land \forall b=upperbound(A), s\leq b $$
let $s$ be an upper bound of $A$ 
$$s=\sup A \iff \forall \varepsilon>0, \exists a \in A, s-\varepsilon < a$$

### infima
if $A\subseteq \mathbb{R}$ is bounded below, the greatest lower bound is the infimum $\inf A$

## sets 
any closed interval $[a,b]$ is a closed set
### open sets
A set $O\subseteq \mathbb{R}$ is open if: $$\forall x\in O, \exists V_\varepsilon (x), V_\varepsilon (x)\subseteq O$$
#### union
if $A$ and $B$ are open then $A \cup B$ is open
any finite or infinite union of open sets is open
#### intersection
if $A$ and $B$ are open then $A \cap B$ is open
any finite intersection of open sets is open
### closed sets
A point $x$ is a limit point of a set $A$ when
$\forall \varepsilon>0, V_\varepsilon (x) \cap A$ contains a point other than $x$
$x$ is a limit point of $A$ 
$\iff \exists a_n \in A, a_n \ne x \forall n \land (a_n)\to x$
A set $F\subseteq \mathbb{R}$ is closed if $F$ contain every limit point of $F$
$F$ is closed when: $$\forall a_n\in F,a_n\to a, \implies a\in F$$
### clopen sets
a set is clopen if it is both open and closed
### closure
let $L$ be the sets of limit points of $A$, then the closure of $A$ is$$\overline{A} = A\cup L$$
given any $A$,
- $\overline{A}$ is closed
- $\overline{A}$ is the smallest closed superset of $A$
### open vs closed
for $A\subseteq \mathbb{R}, A^c = \mathbb{R} \setminus A=\{x\in \mathbb{R} | x\notin A\}$
$A^{cc}=A$
- $O$ is open $\iff O^{c}$ is closed
- $F$ is closed $\iff F^{c}$ is open
### Cantor set
$C_1 = [0,1]$
$C_2 = [0,1/3] \cup [2/3,1]$
$C_3 = [0,1/9] \cup [2/9,1/3]\cup [2/3,7/9] \cup [8/9,1]$
$$C = \cap_{n=1}^\infty c_n$$
#### properties
- $C$ is uncountable
- $C$ doesn't only include the endpoints because $C$ is uncountable but the number of endpoints is countable
- $C$ is closed
- $C$ is not open
- $C$ is a fractal (A set which looks the same at different scales "self-similar") of dimension $\frac{\ln 2}{\ln 3}$
### compact sets
for the NIP the sets don't need to be intervals, they only need to be compact sets
$K\subseteq \mathbb{R}$ is compact when: $a_n \in K, \implies (a_n)$ has a convergent subsequence and the limit is in $K$
a set $K\subseteq \mathbb{R}$ is compact $\iff K$ is closed and bounded
let $K_n$ all be compact, $K_1\supseteq K_2\supseteq k_3 \supseteq\cdots$
$\implies \cap_{n=1}^\infty K_n \ne \varnothing$
### covers
#### open cover
given $A\subseteq \mathbb{R}$, an open cover of $A$ is some collection of open sets
$\{O_\lambda\}, \lambda\in\Lambda$
with $A\cup_{\lambda\in\Lambda} O_\lambda$
if $\Lambda$ is finite then it's called a finite open cover
##### finite subcover
a finite subcover of some open cover is just a choice of finitely many sets from $\{O_\lambda\}$ which still cover $A$
##### Heine-Borel theorem
for some subset $K\subseteq \mathbb{R}$, the following are equivalent:
- $K$ is compact
- $K$ is closed and bounded
- any open cover of $K$ has a finite subcover
### connected sets
$E$ is connected when: $$a,b\in E \land c\in \mathbb{R} \land a<c<b\implies c\in E$$
$E$ is disconnected when we can write $E=A\cup B$ and $\overline{A}\cap B = \varnothing$ and $A\cap \overline{B} = \varnothing$
$E$ is connected if it is not disconnected
## functions
### Dirichelet's function
$f(x)=\{x\in\mathbb{Q} :1; x\notin\mathbb{Q} :0\}$
$f$ is discontinuous at every point
$g(x)=\{x\in\mathbb{Q} :x; x\notin\mathbb{Q} :0\}$
$g$ is continuous at x=0 and nowhere else
### thomae's function
write $x\in\mathbb{Q}$ as a fraction $\frac{m}{n}$ in reduced form
$t(x)=\{x\in \mathbb{N}:1;x\in \mathbb{Q}:1/n;x\notin\mathbb{Q}:0\}$
$t$ is not continuous at any $x\in\mathbb{Q}$
$t$ is continuous at every $x\notin\mathbb{Q}$
### continuity
$f$ is continuous at $x=c$ when $\forall\varepsilon>0,\exists\delta>0\ st\ 0<|x-c|<\delta \implies |f(x)-f(c)|<\varepsilon$
$\forall\varepsilon>0,\exists\delta>0\ st\ x\in V_\varepsilon (c)\implies f(x)\in V_\varepsilon (f(c))$
$\forall (x_n)\to c, \lim f(x_n)=f(c)$
given $A\subseteq \mathbb{R}$, we say $f(x)$ is continuous on $A$ when $f(x)$ is continuous at every point of $A$
if $f$ and $g$ are continuous at $c$, then:
- $kf$ is continuous $\forall k \in \mathbb{R}$ at $c$
- $f+g$ is continuous at $c$
- $fg$ is continuous at $c$
- $\frac{f}{g}$ is continuous at $c$ when $g(c)\ne 0$
all polynomial are continuous on all of $\mathbb{R}$
any rational function is continuous on all of it's domain

#### extreme value theorem
if $f(x)$ is continuous on $[a,b]$, then $f(x)$ has an absolute min and max on $[a,b]$
if $f$ is continuous, then $f([a,b])$ is a closed interval
if $K$ is compact and $f$ is continuous, then $f(K)$ is compact
#### uniform continuity
$f$ is uniformly continuous on $A\subset \mathbb{R}$ 
$$\iff\forall\varepsilon>0,\exists\delta>0\ st\ \forall x,y \in A, |x-y|<\delta \implies |f(x)-f(y)|<\varepsilon$$
$f$ is not uniformly continuous on $A$ when: $\exists (x_n),(y_n) \in A\ with\ |x_n-y_n| \to 0\land \neg |f(x_n)-f(y_n)| \to 0$
if $f$ is continuous on a compact set $K$, then if is uniformly continuous on $K$
#### intermediate value theorem
if $f$ is continuous and $E\subseteq \mathbb{R}$ is connected, then $f(E)$ is connected
### derivative
let $f$ be a function $c\in \mathbb{R}$
$$f'(c)=\lim_{x\to c} \frac{f(x)-f(c)}{x-c}$$
if this limit exists, we say $f$ is differentiable at $c$
if $f$ is differentiable at $c$ it is also continuous at $c$
#### extreme value theorem
let $f$ be differentiable on $[a,b]$, say $f(c)$ is an extremum among all values in $(a,b)$, where $c\in(a,b)$ then $f'(c)=0$
#### Rolle's theorem
if $f$ is differentiable on $[a,b]$ and $f(a)=f(b)$ then $\exists c\in (a,b)$ such that $f'(c)=0$
#### corollaries of MVT
if $f'(x)=0\forall x$ then $f$ is a constant
if $f'(x) =g'(x)\forall x$ then $f(x)=g(x)+C$
## sequences of function
let $f_n:A\to \mathbb{R}$ be functions for all $n\in\mathbb{N}$. then $f_n$ converges pointwise on $A$ to $f(x)$ when:
$$\forall a\in A, f_n(a)\to f(a)$$
we say $f_n$ converges uniformly on $A$ to $f(x)$ when: 
$$\forall\varepsilon>0, \exists N\in\mathbb{N},\ st\ n>N\implies|f_n(x)-f(x)|<\varepsilon\ \forall x\in A$$
when $f_n\to f$ converges uniformly, then :
- if $f_n$ is continuous $\forall n$, then $f$ is continuous
- if $f_n$ is bounded $\forall n$, then $f$ is bounded
- if $f_n$ is differentiable $\forall n$, then $f$ is differentiable (when $f'_n$ converges uniformly)
- $(\int_a^b f_n(x)dx)\to\int_a^bf(x)dx$

## topology of $\mathbb{R}^n$
### closed rectangles
$$[a_{1},b_{1}]\times\cdots\times[a_{n},b_{n}]\subset \mathbb{R}^n $$
where $a_{i}\leq b_{i}\forall i$
### open rectangles
$$(a_{1},b_{1})\times\cdots\times(a_{n},b_{n})\subset \mathbb{R}^n $$
where $a_{i}\leq b_{i}\forall i$
### open sets
a subset $U\subseteq \mathbb{R}^n$ is open $\iff \forall x\in U\exists$ an open rectangle $R$ st. $x\in R\subseteq U$
### closed sets
a subset $C\subseteq \mathbb{R}^n$ is closed $\iff \mathbb{R}^{n}\backslash C$ is open
### interior
let $A\subseteq \mathbb{R}^n$
 $$A^{\circ}:=\cup_{R\subseteq A}R$$
st $R$ are open rectangles
### exterior
$$\text{ext}A:=(\mathbb{R}^{n}\backslash A )^\circ$$
### closure
$$\bar{A}:=\mathbb{R}^{n}\backslash \text{ext}A $$
### boundary
$$\partial A:=\mathbb{R}^{n}\backslash(A^{\circ}\cup \text{ext}A) $$
### nested rectangles
a nested sequence of nonempty closed rectangles in $\mathbb{R}^n$ has nonempty intersection
### bounded subsets
$A\subseteq \mathbb{R^n}$ is bounded $\iff \exists R>0$ st $A\subseteq V_{R}(0)$ 
### open cover
an open cover of $A\subseteq \mathbb{R}^{n}$ is a set $\mathcal{O}$ of open subsets of $\mathbb{R}^{n}$ st $A\subseteq \cup_{u\in \mathcal{O}}U$
### compactness
$A$ is compact $\iff \forall$ open cover of $A$, there exists a finite subcover of $A$ 
every closed rectangles in $\mathbb{R}^{n}$ is compact
### connectedness
a subset $E\subseteq \mathbb{R}^{n}$ is disconnected $\iff \exists$ open subsets $U,V \subseteq E$ st. $U\cap V=\varnothing$ and $U\cup V=E$
otherwise, $E$ is connected
### convex
a subset $C\subseteq \mathbb{R}^{n}$ is convex $\iff$ for any two distinct points $x,y\in C$, $(1-t)x+ty\in C \forall t\in[0,1]$
every convex subset of $\mathbb{R}^{n}$ is connected
## functions 
### limits
let $A\subseteq \mathbb{R}^{n}$, $c$ be a limit point of $A$, and $f:A\to \mathbb{R}^{m}$. a limit of $f$ as $x$ approaches $c$ is a vector $L\in \mathbb{R}^{m}$ satisfying: $$\forall \epsilon>0 \exists \delta>0, st. f(x)\in V_{\epsilon}(L) \forall x\in V_{\delta}(c)\cap A$$
### continuity
a fonction $f:A\to \mathbb{R}^{m}$ where $A\subseteq \mathbb{R}^{n}$ is continuous at $c\in A \iff \forall \epsilon>0 \exists \delta>0$ st whenever $x\in V_{\delta}(c)\cap A$ then $f(x)\in V_{\epsilon}(f(c))$

a function $f:A\to \mathbb{R}^{m}$ is continuous at $c\in A\subseteq \mathbb{R}^{n} \iff \pi_{i}\circ f:A\to \mathbb{R}$ is continuous at $c$ $\forall i\in \{ 1,\cdots,m \}$ 
### paths
let $A \subseteq \mathbb{R}^{n}$
a path in $A$ is a continuous function of the form $[a,b] \xrightarrow[]{\gamma}A$
#### path connctedness
$A \subseteq \mathbb{R}^{n}$ is path connected $\iff \forall x,y\in A \exists a,b\in \mathbb{R}$ with $a\leq b$ and $\exists \gamma:[a,b]\to A$ with $\gamma(a)=x \land \gamma(b)=y$ 

every convex subset of $\mathbb{R}^{n}$ is path connected

every path connected subset of $\mathbb{R}^{n}$ is connected
### differential
let $\mathbb{R}^{n}\xrightarrow[]{f}\mathbb{R}^{m}$ and let $c\in \mathbb{R}^{n}$
$f$ is differentiable at $c$ $\iff \exists$ a linear transformation $D_{c}f:\mathbb{R}^{n}\to \mathbb{R}^{m}$ s.t. $$\lim_\limits{ h \to 0 } \frac{|f(c+h)-f(c)-(D_{c}f)(h)|}{|h|}=0$$ $D_{c}f$ is the differential of $f$ at $c$
$f$ is differentiable on its domain $D \iff$ it is differentiable $\forall c\in D$
#### jacobian
$$[D_{c}f]=\begin{bmatrix}
\langle e_{1},(D_{c}f)(e_{1})\rangle & \cdots & \langle e_{1},(D_{c}f)(e_{n})\rangle  \\
\vdots &\vdots &\vdots \\
\langle e_{m},(D_{c}f)(e_{1})\rangle & \cdots & \langle e_{m},(D_{c}f)(e_{n})\rangle
\end{bmatrix}$$

#### partial derivatives
$$\mathbb{R}\ni h\mapsto \varphi_{c:i}(h):=(c_{1},\cdots,c_{i-1},h,c_{i+1},\cdots,c_{n})$$
if $f\circ \varphi_{c:i}$ is differentiable at $c_{i}$ then $(\partial_{i}f)(c):=(f\circ\varphi_{c:i})'(c_{i})$
define $\gamma_{c_{i}:e_{i}}:\mathbb{R}\to \mathbb{R}^{n}$ $\gamma_{c_{i}:e_{i}}(t):=c+te_{i}$
if $f$ is differentiable at $c$
$$[D_{c}f]=\begin{bmatrix}
(\partial_{1}f_{1})(c) & \cdots & (\partial_{n}f_{1})(c) \\
\vdots & \vdots & \vdots  \\
(\partial_{1}f_{m})(c) & \cdots & (\partial_{n}f_{m})(c)
\end{bmatrix}$$

if $f:A\to \mathbb{R}^{m},A\subseteq \mathbb{R}^{n}$ is open  $\land c\in A\land \exists U\subseteq \mathbb{R}^{n}$ open s.t $c\in U\land \partial_{i}f_{j}$ exists and are continuous on $U$ then $f$ is differentiable at $c$ and $f\in C^n$ where $n \geq 1$
#### derivative functor
$$A\ni x\mapsto D_{x}f\in \text{Hom}(\mathbb{R}^{m},\mathbb{R}^{n})$$
$$A\xrightarrow[]{D_{\square}f}\text{Hom}(\mathbb{R}^{m},\mathbb{R}^{n})$$

$$(D_{\square}f)(e_{i}:A\to \mathbb{R}^{m})$$
$$A\ni x \mapsto (D_{x}F)(e_{i})=(\partial_{i}f)(x)$$
#### vector field
a vector field on $A\subseteq \mathbb{R}^{n}$ is a function $V:A\to \mathbb{R}^{n}$
$(D_{x}f)(V(x))$ defines a function 
$A\xrightarrow[]{\mathcal{V}f}\mathbb{R}^{m}$
$x\mapsto (D_{x}f)(V(x))$
$$V=\sum\limits_{i=1}^{n}\langle E_{i},V\rangle E_{i}$$
where $x\xmapsto[]{\langle E_{i},V\rangle}\langle e_{i},V(x)\rangle$
##### properties
- $V(f+g)=Vf+Vg$
- $V(cf)=cVf$
- $m=1 \implies V(fg)=(Vf)g+f(Vg)$
#### commutativity of partial derivatives
let $A \subseteq \mathbb{R}^{n}$ open, $c\in A$ $f:A\to \mathbb{R}^{m}$ satisfying:
- $\partial_{i}f$ exist on some open subset $U\ni c$
- $\partial_{i}\partial_{j}f$ exist on $U$
- $\partial_{i}\partial_{j}f$ is continuous at $c$
$\forall i,j$
then 
$(\partial_{i}\partial_{j}f)(c)=(\partial_{j}\partial_{i}f)(c)$
#### continuous differentability
$A \subseteq \mathbb{R}^{n}, c\in A,f:A\to \mathbb{R}^{m}$ is $k$-times continuously differentiable at $c \iff \exists U\subseteq \mathbb{R}^{n}$ open with $c\in U\subseteq A$ st $\partial_{i_{1}},\cdots \partial_{i_{l}}f_{j}$ exist in $U$ and are continuous at $c \forall i_{p}\in \{ 1,\cdots,n \},l\in \{ 1,\cdots,k \}$
$f\in C^\infty(\mathbb{R}^{m},A)$ at $c \iff f\in C^{k}(\mathbb{R}^{m},A)\forall k\in \mathbb{N}$


#### differentiability
$f:A\to \mathbb{R}^{m}$ is $k$-times differentiable $\iff U$ open neighborhood of $c\in A$ st
- $D_{x}f$ is defined $\forall x\in U$
- $\mathcal{V}f$ is $k-1$-times differentiable at $c$ $\forall$ $k-1$-times differentiable vector fields $V:U\to \mathbb{R}^{n}$

#### differential equations
##### integral curves
given a vector field $V:\mathbb{R}^{n}\to \mathbb{R}^{n}$
an integral curve of $V$ through $c\in \mathbb{R}^{n}$ consists of an open set $U\subseteq \mathbb{R}$ with $0\in U$ and a differentiable  function $\gamma\text:U\to \mathbb{R}^{n}$ satisfying:
- $\gamma(0)=c$
- $\gamma'(t)=V(\gamma(t)) \forall t\in U$
#### inverse differential
$A\subseteq \mathbb{R}^{n}$open, $c\in A,f:A\to \mathbb{R}$ differentiable at $c$ and supose $\exists U,V\subseteq \mathbb{R}^{n}$ open st $c\in U\subseteq A, f(U)=V\land \exists g:V\to \mathbb{R}^{n}$ satisfying $g$ is differentiable at $f(c) \land f\circ g=id_{V}\land g\circ f=id_{U}$
then $D_{f(c)}g=(D_{c}f)^{-1}$
#### inverse function theorem
let $A\subseteq \mathbb{R}^{n}$ open, $c\in A,f:A\to \mathbb{R}^{n}$ of class $C^1$ on $A$ and supose $\text{det}(D_{c}f)\ne 0$
then $\exists U,V\subseteq \mathbb{R}^{n}, g:V\to \mathbb{R}^{n}$ st
- $c\in U\subseteq A,f(c)\in V$
- $f\circ g=id_{V} \land g\circ f=id_{U}$
- $g$ is continuous on $V$ and differentiable at $f(c)$
- $D_{f(c)}g=(D_{c}f)^{-1}$
#### implicit function theorem
<!-- TODO -->
### diffeomorphisms
$V,U \subseteq \mathbb{R}^{m}$
$U$ and $V$ are diffeomorphic $\iff \exists V\xleftrightharpoons[\psi]{\varphi}U$
st $\varphi,\psi$ are differentiable and are inverses

### critical point
let $U\subseteq \mathbb{R}^{n}$, $f:U\to \mathbb{R}^{m}$
a crtical point of $f$ is a point $c\in U$ st. $D_{c}f$ has rank $<m$ denote $C_{f}$
#### regular value
a regular value of $f$ is a point $b\in \mathbb{R}^{m}\setminus f(C_{f})$ denote $R_{f}$
#### regular point
a regular point of $f$ is a point in $f^{-1}(R_{f})$
### derivation
a derivation of $\mathbb{R}^{n}$ at $c\in \mathbb{R}^{n}$
is a linear function $\mathcal{V}_{c}:C^\infty(\mathbb{R},\mathbb{R}^{n})\to \mathbb{R}$
satisfying $\mathcal{V}_{c}(fg)=(\mathcal{V}_{c}f)g(c)+f(c)(\mathcal{V}_{c}g)$

$\mathcal{V}_{c}(constant)=0$
$f(c)=g(c)=0\implies\mathcal{V}_{c}(fg)=0$

let $\mathcal{V}_{c}$ be a derivation of $\mathbb{R}^{n}$ at $c\in \mathbb{R}^{n}$ then $\exists!$ vector $v_{c}\in T_{c}\mathbb{R}^{n}$ st $\mathcal{V}_{c}f=(D_{c}f)(v_{c})$
### hadamard lemma
if $f:\mathbb{R}^{n}\to \mathbb{R}$
$\exists g:\mathbb{R}^{n}\to \mathbb{R}^{n}$ st
the folowing diagram commutes
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNSxbNCwwLCJcXG1hdGhiYntSfV5uIl0sWzQsNCwiXFxtYXRoYmJ7Un1eblxcdGltZXNcXG1hdGhiYntSfV5uIl0sWzAsNCwiXFxtYXRoYmJ7Un1eblxcdGltZXNcXG1hdGhiYntSfV5uIl0sWzAsMiwiXFxtYXRoYmJ7Un0iXSxbMCwwLCJcXG1hdGhiYntSfSJdLFswLDEsIlxcRGVsdGEiXSxbMSwyLCJpZFxcdGltZXMgZyJdLFsyLDMsIlxcbGFuZ2xlO1xccmFuZ2xlIl0sWzMsNCwiK2YoMCkiXSxbMCw0LCJmIiwyXV0=&embed" width="786" height="688" style="border-radius: 8px; border: none;"></iframe>
ie $f(x)=f(0)+\sum\limits_{i=1}^{n}x_{i}g_{i}(x)$
and $g_{i}(0)=(\partial_{i}f)(0)$
## manifolds
a subset $M \subseteq \mathbb{R}^{k}$ is an $m$-dimensional manifold $\iff \forall c\in M \exists U,V\subseteq \mathbb{R}^{k}$ and a diffeomorphisms $U\xleftrightharpoons[\psi]{\varphi}V$ st. 
- $c\in U$
- $\varphi(U\cap M)=(\mathbb{R}^{m}\times \{ 0 \})\cap V$
equivalently
a subset $M \subseteq \mathbb{R}^{k}$ is an $m$-dimensional manifold $\iff \forall c\in M \exists U\subseteq \mathbb{R}^{k},W\subseteq \mathbb{R}^{m}$ open together with $\alpha:W\to \mathbb{R}^{k}$
satisfying $c\in U\land \alpha(W)=U\cap M$
- $\alpha$ is differentiable and 1 to 1
- $D_{y}\alpha:\mathbb{R}^{m}\to \mathbb{R}^{k}$ has rank $m$
- $\alpha^{-1}:U\cap M\to W$ is continuous

$f^{-1}(r)$ is an $(m-n)$-dimensional manifold if $r\in R_{f}$
### tangent space
let $U\subseteq \mathbb{R}^{n}$ be open, $c\in U$
the tangent space of $U$ at $c$ is the set $T_{c}U:=\{ c\}\times \mathbb{R}^{n}\ni(c;v)=v_{c}$
with the following vector space structure
- $0_{c}$ is the zero vector
- $u_{c}+v_{c}:=(u+v)_{c}$
- $\lambda(v_{c}):=(\lambda v)_{c}$
#### tangent space of a manifold
let $M\subseteq \mathbb{R}^{k}$ be an $m$-dimmensional manifold, $c\in M$
let $U\subseteq \mathbb{R}^{m},V\subseteq \mathbb{R}^{k}$ open st $c\in V$ and $\varphi:U\to M\cap V$ be a parametarization
set the tangent space of $M$ at $c$ to be $T_{c}M:=(D_{\varphi^{-1}(c)}\varphi)(T_{\varphi^{-1}(c)}U)$
equivalently 
given all $R\xrightarrow[]{\gamma}M$ satisfying:
- $\gamma(0)=c$
- $\gamma$ is differentiable at $0$
span $\{ \gamma'(0)=(D_{0}\gamma)(1) \}=T_{c}M$
### differentials
let $N\subseteq \mathbb{R}^{l},M\subseteq \mathbb{R}^{k}$ be manifold, $f:N\to M$
let $\tilde{f}$ be extension of $f$ in an open neighborhoud $V$ of $c$
$\tilde{f}|_{V\cap N}=f$
then $\tilde{f}:V\to \mathbb{R}^{k}$
$D_{c}\tilde{f}:T_{c}V\to T_{f(c)}\mathbb{R}^{k}$
$T_{c}N\subseteq T_{c}V$

####
data: 
- $W,V$ finite dimensional vector spaces
- $V\xleftarrow[]{T}W$ a linear transformatiion
- ordered bases $\mathcal{B}=\{ v_{1},\cdots v_{m}\}$ of $V$ & $\mathcal{C}={w_{1},\cdots,w_{n}}$ of $W$
the matrix associated to $T$ with respect to the basis $\mathcal{B}$ and $\mathcal{C}$ is the matrix associated to the linear transformation $_{\mathcal{B}}T^\mathcal{C}:\mathbb{R}^{n}\to \mathbb{R}^{m}$ wich is uniquely determined by the commutativity of the diagram
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMiwwLCJXIl0sWzAsMCwiViJdLFswLDIsIlxcbWF0aGJie1J9Xm0iXSxbMiwyLCJcXG1hdGhiYntSfV5uIl0sWzAsMSwiVCIsMl0sWzAsMywiXFxQaGlfXFxtYXRoY2Fse0N9Il0sWzEsMiwiXFxQaGlfe1xcbWF0aGNhbHtCfX0iLDJdLFszLDIsIl9cXG1hdGhjYWx7Qn1UXlxcbWF0aGNhbHtDfSJdXQ==&embed" width="432" height="432" style="border-radius: 8px; border: none;"></iframe>
where $\Phi_{\mathcal{C}}(w_{i}):=e_{i}$
ie $_{\mathcal{B}}T^{\mathcal{C}}:=\Phi_{\mathcal{B}}\circ T\circ \Phi_{\mathcal{C}}^{-1}$
### submanifold
$N\subseteq M$ is a submanifold of $M$ of dimension $n$
$\iff \forall c\in N\exists U\subseteq \mathbb{R}^{m},V\subseteq \mathbb{R}^{k},\varphi:V\cap M\to U$ satisfying:
$$\varphi(V\cap M)\subseteq \mathbb{R}^{n}\times \{ 0 \}\subseteq \mathbb{R}^{m}$$
$$\varphi(V\cap M)=(\mathbb{R}^{n}\times \{ 0 \})\cap U$$

if $N\hookrightarrow M$ then $c\in N\implies T_{c}N\subseteq T_{c}M$
#### normal vector
let $N\hookrightarrow M$ and $c\in N$
$$\mathcal{\nu}_{c}^MN:=\{ v\in T_{c}M:\langle u,v\rangle=0 \forall u\in T_{c}N \} $$
### orientation
an orientation on an $m$-dimensional manifold $M\subseteq \mathbb{R}^{k}$ is a choice of orientations on $T_{c}M \forall c\in M$ st
$\forall c\in M\exists U\in \mathbb{R}^{m}$ and a diffeomorphism $\varphi:U\to M\cap V$ for some open $V\subseteq \mathbb{R}^{k}$st
$D_{x}\varphi:T_{x}\mathbb{R}^{m}\to T_{\varphi(x)}M$
is orientation preserving $\forall x\in U$

a manifold is orientable if $\exists$ an orientation on it

if $M$ is orientable, then only two orientation exist
### degree
let $M\xleftarrow[]{f}N$ be differentiable
and $M$ & $N$ oriented $m$-dimensional manifolds
then $f^{-1}(r)$ is a $0$-dimensional submanifold of $N$
if $N$ is compact then $f^{-1}(r)$ is a finite subset of $N$

asume $M$ is connected
define the degree of $f$ at a regular value $r\in R_{f}$ is $$deg(f;r):=\sum\limits_{x\in f^{-1}(r)}signD_{x}f$$
where $signD_{x}f$ is + if $D_{x}f$ is orientation preserving and - if it isnt

$deg(f;r)=deg(f;r') \forall r,r'\in R_{f}$

if $f$ is homotopic to $g$ then $deg(f)=deg(g)$ 
### index
let $A\subseteq \mathbb{R}^{m}$ open,  $V:A\to \mathbb{R}^{m}$
let $c$ be an isolated crtitical point of $V$
the index of $V$ at $c$ is the degree of the function $\partial V_{\epsilon}(c)\to S^{m-1}$ where $x\mapsto \frac{V(x)}{|V(x)|}$
### vector fields on manifolds
let $M\subseteq \mathbb{R}^{k}$ be a smooth manifold
a smooth tanget vector field on $M$ is a smooth function $V:M\to \mathbb{R}^{k}$ st $V_{x}\in T_{x}M\forall x\in M$
### homotopy
let $M,N$ be smooth manifolds, $f,g:N\to M$ smooth functions
a smooth homotopy from $f$ to $g$ is a smooth function $M\xleftarrow[]{H}[0,1]N$
st $H(0,\_)=f,H(1,\_)=g$

smooth homotopy is an equivalence relation


if $f,g$ are diffeomorphisms and $H(t,\_)$ is a diffeomorphism $\forall t\in[0,1]$ then $H$ is a smooth isotopy
### flow
a flow on a manifold $M$ consists of a smooth funciton $\varphi:\mathbb{R}\times M\to M$ st.
- $\varphi(t,\_)$ is a diffeomorphism
- $\varphi(0,\_)$ is the identity
- $\varphi(s+t,\_)=\varphi(s,\_)\circ\varphi(t,\_)$

$\tilde{\varphi}:\mathbb{R}\to Diffeo(M)$ where $t\mapsto \varphi(t,\_)$
$\tilde{\varphi}$ is a group homeomorphism where $\mathbb{R}$ is a group under $+$

set $V:M\to \mathbb{R}^{k}$ where $x\mapsto V_{x}:=(D_{0}\varphi(\_,x))(1)$ as a vector field on $M$

### triangulation
a trangulation of a manifold $M$ is a cell complex $K$ together with a homeomorphism $K\to M$
#### euler caracteristic
the euler caracteristic of a cell complex $K$ is $\chi(K)=\sum\limits_{i=o}^{max}(-1)^i|K_{i}|$
if $M$ is a manifold we choose triangulation $K$ and define $\chi(M)=\chi(K)$
### poincare-hopf theorem
if $M$ is a compact connected smooth manifold and $V$ is a tangent vector field on $M$ with isolated critical points
$$\sum\limits_{c\in CP(V)}\imath(V,C)=\chi(M)$$
#### hairy ball theorem
there does not exist a nonvanishing vector field on $S^{2m} \forall m\in \mathbb{N}$
## metric spaces
a metric space consists of:
- a set $X$
- a metric $X\times X\xrightarrow[]{d} \mathbb{R}$
st:
- $d(x,y)=0 \implies x=y$
- $d(x,y)=d(y,x)$
- $d(x,z)\le d(x,y)+d(y,z)$
### cauchy sequence
a sequence in $X$ is a fucntion $x:\mathbb{N}\to X$
$x$ is a cauchy sequence $\iff \forall \epsilon>0\exists N\in\mathbb{N}$ st $d(x_{n},x_{m})<\epsilon \forall n,m\ge N$
$x$ converges to $limx\in X \iff \forall \epsilon>0\exists N\in \mathbb{N}$ st $d(limx,x_{n})<\epsilon \forall n\ge N$
if $x$ converges then $x$ is cauchy
### complete spaces
$(X,d)$ is complete $\iff$ every cauchy sequence converges
### topology
a subset $A\subseteq X$ is open $\iff \forall x\in A\exists r>0$ st $B_{r}(x):=\{ y\in X:d(x,y)<r \} \subseteq$ 
a subset $B\subseteq X$ is closed $\iff X\setminus B$ is open
### functions
let $(X,d_{x})$ and $(Y,d_{y})$ be metric spaces 
$f:X\to Y$ is
- an isometry $\iff d_{x}=d_{y}\circ (f\times f)$
- a contraction $\iff \exists \alpha\in[0,1)$ st $d_{y}(f(x),f(x'))\le \alpha d_{x}(x,x')$
- distance decreasing $\iff d_{y}(f(x),f(x'))<d_{x}(x,x')$ whenever $x,x'$ are distinct
- lipsitz $\iff \exists M\in[0,\infty)$ st $d_{y}(f(x),f(x'))\le Md_{x}(x,x')$
- continuous at $c\iff \forall \epsilon>0\exists \delta>0$ st $x\in B_{\delta}(c)\implies f(x)\in B_{\epsilon}(f(c))$
#### fixed points
a fixed point is a point $x\in X$ st $f(x)=x$
every function which is distance decreasing on a complete metric space as a unique fix point
if $\exists N$ st $f^N=f\circ_{i=2}^{N}f$ is a contraction then $\exists!$ fixed point
#### contraction
$[a,b]\xrightarrow[]{f}[a,b]$ differentiable is a contraction $\iff \exists k<1$ st $|f'(x)|<k\forall x\in[a,b]$

### closure
let $A\subseteq X$
the closure of $A$ is the set $\bar{A}:=\cap_{B\supseteq A\land Bclosed}B$
### limit point
a limit point of $A$ is an element $x\in X$ st $(B_{r}(x)\cap A)\setminus\{ x \}\ne\varnothing$
$\bar{A}=A\cup$(limit points of $A$)
### completion
a completion of $(X,d)$ is a complete metrix space $(\tilde{X},\tilde{d})$ with an isometry $\eta:(X,d)\to(\tilde{X},\tilde{d})$
satisfying the following universal property:
for any other complete metric space $(Z,\rho)$ with an isometry $\varphi:(X,d)\to(Z,\rho) \exists!$ isometry $h:(\tilde{x},\tilde{d})\to(z,\rho)$ st $h\circ \eta=\varphi$ 
a completion always exist and $\bar{\eta(X)}=\tilde{X}$
### compactness
let $(X,d)$ be a metric space and $A\subseteq X$
the folowing are equivalent:
- $\forall$ sequence in $A \exists$ convergent subsequence whose limit is in $A$
- every open cover of $A$ contains a finite subcover
- $A$ is compact
### boundedness
$A\subseteq X$ is bounded $\iff \exists D>0$ st $D(a,b)\le D\forall a,b\in A$
