| precursors | [[diff and int calc]] [[proof]] |
| ---------- | ------------------------------- |
| status:    | #learnt up to anal I            |
| #tags      |                                 |
# #english-note 
hardcore and more rigorous version of [[diff and int calc]]

# definition of the limit
we say $\lim_{x\to c} f(x) =L$ when:
$$\forall \varepsilon >0, \exists\delta>0\ st\ 0<|x-c|<\delta \implies |f(x)-L|<\varepsilon $$
$$\forall\varepsilon>0,\exists\delta>0\ st\ x\in V_\delta (c) \implies f(x)\in V_\varepsilon (L)$$
## sequential criterion for functional limits
$$\lim_{x\to c} f(x) =L \iff \forall(x_n)\to c\ with\ x_n\ne c ,\forall n, f(x_n)\to L$$

# axioms of the reals
a non-empty set  $\Re$ together with operation $+,\times$ and ordering $\le$ is called the real number if it satisfies:
- (A) $(\Re,+,0)$ is an [abelian group](algebra)
- (M) $(\Re \setminus\{0\},\times , 1)$ is an abelian group
- (D) $x(y+z)=xy+xz$
- (0) $\le$ is a total order, compatible with $+$ and $\times$ , archimedean property
- (C) every Cauchy sequence is a convergent sequence $|x| := \{x\ge 0:x; x<0:-x\}$ 
## axiom of completeness
if any set $A\subseteq \Re$ is nonempty and bounded then $\sup A$ exists and is a real number
### consequences
#### nested intervals property
let $I_n = [a_n,b_n] \forall n\in \mathbb{N}$
and assume $I_{n+1} \subseteq I_n \forall n$
$$\cap^{\infty}_{n=1} I_n \ne \varnothing$$
#### archimedean property
i.  $\forall x\in\Re, \exists n\in\mathbb{N},n>x$
ii. $\forall x\in\Re x>0, \exists n\in\mathbb{N},\frac{1}{n}<x$
$\mathbb{Q}$ is dense in $\Re$
$$\forall a,b \in\Re, a<b,\exists\frac{m}{n}\in\mathbb{Q},a<\frac{m}{n}<b$$
#### cardinality of $\Re$
$\Re$ is uncountable
$|\Re| >|\mathbb{N}|$
##### set theory
two sets have the same cardinality $\iff$ there is a bijection between them
$|A|=|B|$ is the same as $A\sim B$
$[a,b]\sim [ca,cb]$
$(-\frac{\pi}{2},\frac{\pi}{2})\sim \Re$
if $S\sim\mathbb{N}$ then $S$ is countably infinite
if $S$ is infinite but $S\nsim\mathbb{N}$ then $S$ is uncountable
$|s|<|P(S)|$
the number of transfinite cardinalities is larger than the cardinality of any set
###### continuum hypothesis (CH)
there is no set $S$ with $|\mathbb{N}|<|S|<|\Re|$
Godel showed that CH doesn't lead to a contradiction with set theory
Cohen showed that $\sim$CH doesn't lead to a contradiction
CH is undesidable
###### one to one and onto
for $f:x\to y$
$f$ is one to one (1-1) "injection" when:$$f(x_1)=f(x_2) \implies x_1=x_2$$
$f$ is onto "surjection" when:$$\forall y\in Y, \exists x\in X, f(x)=y$$
if $f$ is 1-1 and onto, f is a 1-1 correspondance "bijection"

# sequences
a sequences of real numbers:
a map $$a:\mathbb{N} \to \Re$$ $$\lor a:\mathbb{N}_0 \to \Re$$
notation$$(a_1,a_2,a_3,a_4,...)$$
$$(a_n)_{n\in \mathbb{N}} \lor (a_n)_{n=1}^\infty \lor (a_n)$$
## limits
### convergence
a sequence $(a_n)$ converges to $L\in\Re$ when:
$$\forall\varepsilon>0,\exists N\in\mathbb{N}, n\geq N \implies |a_n-a|<\varepsilon$$
if $(a_n)$ converges, then the limit is unique
#### topological view of convergence
for $a\in\Re$ and $\varepsilon>0$, the [![\varepsilon \!](https://wikimedia.org/api/rest_v1/media/math/render/svg/f4bd2f8c9241ab34af72babb5f87c90a2521338e)-neighborhood](topology) of a is $V_\varepsilon (a)  = \{x\in\Re|\ |x-a|<\varepsilon\} = (a-\varepsilon,a+\varepsilon)$
$(a_n)\to a$ when $$\forall\varepsilon>0,\exists N\in\mathbb{N},n\geq N \implies a_n \in V_\varepsilon(a)$$
### divergence
$(a_n)$ does not converges to a when:
$$\exists\varepsilon >0, \forall N\in\mathbb{N}, \exists n\geq N, |a_n-a|\geq\varepsilon$$
### sequence boundaries
A sequence $(a_n)$ is bounded if $\exists M >0, \forall n, |a_n| < M$
if $(a_n)\to a$ then $(a_n)$ is bounded
#### monotone convergences theorem
$(a_n)$ is increasing if $a_n \leq a_{n+1} \forall n$
$(a_n)$ is decreasing if $a_n \geq a_{n+1} \forall n$
if $(a_n)$ is increasing or decreasing, $(a_n)$ is monotone
if $(a_n)$ is monotone and bounded, then it converges

### limit rules
if $(a_n)\to a \land (b_n)\to b \land c\in\Re$
- $\lim ca_n=ca$
- $\lim (a_n+b_n)=a+b$
- $\lim(a_nb_n)=ab$
- $\lim(\frac{a_n}{b_n})=\frac{a}{b}$ when $b\ne 0$
## subsequences
if $(a_n)$ converges, every subsequence converges to the same limit
### Bolzano-Weierstrauss theorem
if $(a_n)$ is bounded, then it has a convergent subsequence
# series
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
- $\sum ca_k=cA$ for $c\in\Re$
- $\sum (a_k+b_k)=A+B$
$\sum r^k$ diverges when $|r|\geq 1$ and if $|r|<1$, then $\sum r^k=\frac{1}{1-r}$
let $0\le a_k\le b_k$
- if $\sum b_k$ converges, then $\sum a_k$ converges and $\sum a_k\le\sum b_k$
- if $\sum a_k$ diverges, then $\sum b_k$ diverges
## commutativity
if $\sum a_k$ is a series and $\sum |a_k|$ converges, we say $\sum a_k$ is absolutely convergent
if $\sum a_k$ converges but $\sum |a_k|$ diverges, we say $\sum a_k$ is conditionally convergent
if $\sum a_k$ is absolutely convergent, then commutativity is applicable
if $\sum a_k$ is conditionally convergent, them commutativity is not applicable and every real number can be obtained by rearranging the series
# set boundaries
## definition
a set $A\subseteq \Re$ is bounded above when $\exists b \in \Re, \forall a \in A, a\le b$ 
$b$ is a upper bound of $A$
a set $A\subseteq \Re$ is bounded below when $\exists b \in \Re, \forall a \in A, a\ge b$ 
$b$ is a lower bound of $A$
## supremum
if $A\subseteq \Re$ is bounded above, the least upper bound is the supremum $\sup A$
$$s\in \Re \land A\subseteq\Re, s=\sup A \iff \forall a\in A, s\geq a \land \forall b=upperbound(A), s\leq b $$
let $s$ be an upper bound of $A$ 
$$s=\sup A \iff \forall \varepsilon>0, \exists a \in A, s-\varepsilon < a$$

## infimum
if $A\subseteq \Re$ is bounded below, the greatest lower bound is the infimum $\inf A$

# sets 
any closed interval $[a,b]$ is a closed set
## open sets
A set $O\subseteq \Re$ is open if: $$\forall x\in O, \exists V_\varepsilon (x), V_\varepsilon (x)\subseteq O$$
### union
if $A$ and $B$ are open then $A \cup B$ is open
any finite or infinite union of open sets is open
### intersection
if $A$ and $B$ are open then $A \cap B$ is open
any finite intersection of open sets is open
## closed sets
A point $x$ is a limit point of a set $A$ when
$\forall \varepsilon>0, V_\varepsilon (x) \cap A$ contains a point other than $x$
$x$ is a limit point of $A$ 
$\iff \exists a_n \in A, a_n \ne x \forall n \land (a_n)\to x$
A set $F\subseteq \Re$ is closed if $F$ contain every limit point of $F$
$F$ is closed when: $$\forall a_n\in F,a_n\to a, \implies a\in F$$
## clopen sets
a set is clopen if it is both open and closed
## closure
let $L$ be the sets of limit points of $A$, then the closure of $A$ is$$\overline{A} = A\cup L$$
given any $A$,
- $\overline{A}$ is closed
- $\overline{A}$ is the smallest closed superset of $A$
## open vs closed
for $A\subseteq\Re, A^c = \Re \setminus A=\{x\in \Re | x\notin A\}$
$A^{cc}=A$
- $O$ is open $\iff O^{c}$ is closed
- $F$ is closed $\iff F^{c}$ is open
## Cantor set
$C_1 = [0,1]$
$C_2 = [0,1/3] \cup [2/3,1]$
$C_3 = [0,1/9] \cup [2/9,1/3]\cup [2/3,7/9] \cup [8/9,1]$
$$C = \cap_{n=1}^\infty c_n$$
### properties
- $C$ is uncountable
- $C$ doesn't only include the endpoints because $C$ is uncountable but the number of endpoints is countable
- $C$ is closed
- $C$ is not open
- $C$ is a fractal (A set which looks the same at different scales "self-similar") of dimension $\frac{\ln 2}{\ln 3}$
## compact sets
for the NIP the sets don't need to be intervals, they only need to be compact sets
$K\subseteq \Re$ is compact when: $a_n \in K, \implies (a_n)$ has a convergent subsequence and the limit is in $K$
a set $K\subseteq \Re$ is compact $\iff K$ is closed and bounded
let $K_n$ all be compact, $K_1\supseteq K_2\supseteq k_3 \supseteq\cdots$
$\implies \cap_{n=1}^\infty K_n \ne \varnothing$
## covers
### open cover
given $A\subseteq\Re$, an open cover of $A$ is some collection of open sets
$\{O_\lambda\}, \lambda\in\Lambda$
with $A\cup_{\lambda\in\Lambda} O_\lambda$
if $\Lambda$ is finite then it's called a finite open cover
#### finite subcover
a finite subcover of some open cover is just a choice of finitely many sets from $\{O_\lambda\}$ which still cover $A$
#### Heine-Borel theorem
for some subset $K\subseteq\Re$, the following are equivalent:
- $K$ is compact
- $K$ is closed and bounded
- any open cover of $K$ has a finite subcover
## connected sets
$E$ is connected when: $$a,b\in E \land c\in\Re\land a<c<b\implies c\in E$$
$E$ is disconnected when we can write $E=A\cup B$ and $\overline{A}\cap B = \varnothing$ and $A\cap \overline{B} = \varnothing$
$E$ is connected if it is not disconnected
# functions
## Dirichelet's function
$f(x)=\{x\in\mathbb{Q} :1; x\notin\mathbb{Q} :0\}$
$f$ is discontinuous at every point
$g(x)=\{x\in\mathbb{Q} :x; x\notin\mathbb{Q} :0\}$
$g$ is continuous at x=0 and nowhere else
## thomae's function
write $x\in\mathbb{Q}$ as a fraction $\frac{m}{n}$ in reduced form
$t(x)=\{x\in \mathbb{N}:1;x\in \mathbb{Q}:1/n;x\notin\mathbb{Q}:0\}$
$t$ is not continuous at any $x\in\mathbb{Q}$
$t$ is continuous at every $x\notin\mathbb{Q}$
## continuity
$f$ is continuous at $x=c$ when $\forall\varepsilon>0,\exists\delta>0\ st\ 0<|x-c|<\delta \implies |f(x)-f(c)|<\varepsilon$
$\forall\varepsilon>0,\exists\delta>0\ st\ x\in V_\varepsilon (c)\implies f(x)\in V_\varepsilon (f(c))$
$\forall (x_n)\to c, \lim f(x_n)=f(c)$
given $A\subseteq\Re$, we say $f(x)$ is continuous on $A$ when $f(x)$ is continuous at every point of $A$
if $f$ and $g$ are continuous at $c$, then:
- $kf$ is continuous $\forall k \in \Re$ at $c$
- $f+g$ is continuous at $c$
- $fg$ is continuous at $c$
- $\frac{f}{g}$ is continuous at $c$ when $g(c)\ne 0$
all polynomial are continuous on all of $\Re$
any rational function is continuous on all of it's domain

### extreme value theorem
if $f(x)$ is continuous on $[a,b]$, then $f(x)$ has an absolute min and max on $[a,b]$
if $f$ is continuous, then $f([a,b])$ is a closed interval
if $K$ is compact and $f$ is continuous, then $f(K)$ is compact
### uniform continuity
$f$ is uniformly continuous on $A\subset\Re$ 
$$\iff\forall\varepsilon>0,\exists\delta>0\ st\ \forall x,y \in A, |x-y|<\delta \implies |f(x)-f(y)|<\varepsilon$$
$f$ is not uniformly continuous on $A$ when: $\exists (x_n),(y_n) \in A\ with\ |x_n-y_n| \to 0\land \neg |f(x_n)-f(y_n)| \to 0$
if $f$ is continuous on a compact set $K$, then if is uniformly continuous on $K$
### intermediate value theorem
if $f$ is continuous and $E\subseteq\Re$ is connected, then $f(E)$ is connected
## derivative
let $f$ be a function $c\in\Re$
$$f'(c)=\lim_{x\to c} \frac{f(x)-f(c)}{x-c}$$
if this limit exists, we say $f$ is differentiable at $c$
if $f$ is differentiable at $c$ it is also continuous at $c$
### extreme value theorem
let $f$ be differentiable on $[a,b]$, say $f(c)$ is an extremum among all values in $(a,b)$, where $c\in(a,b)$ then $f'(c)=0$
### Rolle's theorem
if $f$ is differentiable on $[a,b]$ and $f(a)=f(b)$ then $\exists c\in (c,b)$ such that $f'(c)=0$
### corollaries of MVT
if $f'(x)=0\forall x$ then $f$ is a constant
if $f'(x) =g'(x)\forall x$ then $f(x)=g(x)+C$
# sequences of function
let $f_n:A\to\Re$ be functions for all $n\in\mathbb{N}$. then $f_n$ converges pointwise on $A$ to $f(x)$ when:
$$\forall a\in A, f_n(a)\to f(a)$$
we say $f_n$ converges uniformly on $A$ to $f(x)$ when: 
$$\forall\varepsilon>0, \exists N\in\mathbb{N},\ st\ n>N\implies|f_n(x)-f(x)|<\varepsilon\ \forall x\in A$$
when $f_n\to f$ converges uniformly, then :
- if $f_n$ is continuous $\forall n$, then $f$ is continuous
- if $f_n$ is bounded $\forall n$, then $f$ is bounded
- if $f_n$ is differentiable $\forall n$, then $f$ is differentiable (when $f'_n$ converges uniformly)
- $(\int_a^b f_n(x)dx)\to\int_a^bf(x)dx$


# important definitions for anal II
## definition of a diagram
a diagram consists of:
- a set $X = \{X_1, \cdots, X_n\}$ where $X_i$ is a set
- a set $F$ of maps $F=\{X_j \to X_i\}$ 
a diagram commutes when  $\forall P=\{f_1,\cdots,f_m\}, Q=\{g_1,\cdots,g_k\}$. $source(f_1)= source(g_1)\land target(f_m) =target(g_K)\implies f_m\circ\cdots\circ f_1=g_k\circ\cdots\circ g_1$    
## path in a diagram $(X,F)$
a path consists of a subset $P\subseteq F$   $P=\{f_1,\cdots,f_m\}$st. the source of $f_j$ is the target of $f_{j-1}$ $\forall j \in \{2, \cdots, m\}$ 

## definition of a cartesian product
the cartesian product of $X$ and $Y$ consists of a set $U$ together with $\pi_X:U\to X$ and $\pi_Y :U\to Y$ satisfying the following universal property:
	$\forall V$ together with $\pi'_X:V\to X$ &$\pi'_Y: V\to Y$ there exists a unique function $h:V\to U$ st. the diagram $\{U,V,X,Y\}, \{\pi_X,\pi_Y,\pi'_X\pi'_Y,h\}$ commutes. ie. $\pi_X\circ h=\pi'_X$ and $\pi_Y \circ h=\pi'_Y$ 