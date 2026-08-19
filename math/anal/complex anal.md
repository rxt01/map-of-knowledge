---
abstract: 
other names: complex variables
---

| precursors | [[complex numbers]] [[real anal]] [[LA]]                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------ |
| #tags      |                                                                                                                          |
| level      | #bachelor                                                                                                                |


# #english-note 
## sequences
a sequence $(z_{n})_{n\in \mathbb{N}}\subseteq \mathbb{C}$ is convergent to $\zeta\in \mathbb{C} \iff \forall \varepsilon>0\exists N\in \mathbb{N}$ st $n\ge N \implies|z_{n}-\zeta|<\varepsilon$
let $z_{n}=x_{n}+iy_{n}$ and $\zeta=u+iv$, then $$\lim\limits_{ n \to \infty }z_{n}=\zeta \iff \lim\limits_{ n \to \infty }x_{n}=u\land \lim\limits_{ n \to \infty }y_{n}=v  $$
### bounded sequences
a sequences $(z_{n})$ is bounded if $\exists R\in \mathbb{R}^{+},N\in \mathbb{N}$ st $|z_{n}|<R\forall n>N$
if $(z_{n})$ is convergent, then it is bounded
### cauchy sequences
a sequence $(z_{n})$ is a cauchy sequence if $\forall\varepsilon>0\exists N\in \mathbb{N}^+ st. m,n>N \implies |z_{n}-z_{m}|<\varepsilon$
every cauchy sequence converge


## topology of $\mathbb{C}$
a subset $U\subseteq\mathbb{C}$ is open $\iff \forall z\in U\exists \varepsilon>0 st.\mathcal{B}_{\varepsilon}(z)\subseteq U$

## extended complex plane
$$\mathbb{C}\cup \infty$$
the $\varepsilon$-neighbourhoud of $\infty$ is defined as $\left\{  z:|z|> \frac{1}{\varepsilon}  \right\}$

## functions
### continuity
a function is continuous at $z=a$ $\iff \forall \varepsilon>0 \exists \delta>0 st. 0<|z-a|<\delta\implies|f(z)-f(c)|<\varepsilon$ 
### derivative
$$f'(z_{0})=\lim\limits_{ z \to z_{0} } \frac{f(z)-f(z_{0})}{z-z_{0}} $$
if the limit exist, then $f$ is differentiable at $z_{0}$
#### analytic functions
the function $f$ is analytic at a point $z_{0}$ if $\exists \varepsilon>0$ st $z\in \mathcal{B}_{\epsilon}(z_{0})\implies f'(z)$ exists
if $f$ is analytic on a domain $D$, then $f\in C^\infty$ on $D$
#### entire functions
a function is entire if it is analytic on the entire complex plane
#### singular point
a point $z_{0}$ is a singular point of $f$ if $f$ is not analytic at $z_{0}$
#### cauchy riemman equations
let $$f(z)=f(x+iy)=u(x,y)+iv(x,y)$$
be differentiable
then $$\frac{\partial u}{\partial x}= \frac{\partial v}{\partial y} \land \frac{\partial u}{\partial y}= -\frac{\partial v}{\partial x}$$
in polar coordinates
$$\frac{\partial u}{\partial r}=\frac{1}{r} \frac{\partial v}{\partial \theta}\land \frac{\partial v}{\partial r}=-\frac{1}{r} \frac{\partial u}{\partial \theta}$$
#### harmonic functions
let $\phi(x,y)$ be a real valued function of two real variables $x,y$ defined on a domain $D$ 
if $\phi,\phi_{x},\phi_{y},\phi_{xx},\phi_{xy},\phi_{yx}\phi_{yy}$ are all continuous and $$\phi_{xx}(x,y)+\phi_{yy}(x,y)=0$$
then $\phi(x,y)$ is harmonic on $D$

let $f(z)=f(x+iy)=u(x,y)+iv(x,y)$ be analytic, then both $u$ and $v$ are harmonic

### fixed points
the point $z_{0}$ is a fixed point of $f$ if $f(z_{0})=z_{0}$
### attracting points
the point $z_{0}$ is an attracting point of $f$ if $|f'(z_{0})|<1$
### n cycle
an $n$-cycle for a function $f$ is a set $\{ z_{0},\cdots,z_{n-1} \}$
of $n$ complex numbers st $z_{k}=f(z_{k-1})$ for $1\leq k\leq n-1$ and $f(z_{n-1})=z_{0}$
### integration
let $f(t)=u(t)+iv(t)$,then $$\int_{a}^{b}f(t)dt=\int_{a}^{b}u(t)dt+i \int_{a}^{b}v(t)dt$$
#### curves
$$C:z(t)=x(t)+iy(t),\text{ for } a\leq t\leq b$$
##### simple closed curves
a curve $C$ is a simple closed curve if $z(a)=z(b)$ is the only point of intersection
every simple closed curve divides the plane into two domains
the bounded domain is the interior and the unbounded one is the exterior
##### smooth curves
a curve $C$ is smooth if $z'$ exists and is nonzero on the interval
##### length
let $C$ be a smooth curve, then $$L(C)=\int_{a}^{b}|z'(t)|dt$$
##### paths
a curve $C$ that is constructed by joining finetely many smooth curves end to end is called a contour or a path
#### complex integral
let $C$ be a contour, then $$\int_{C}f(z)dt=\lim\limits_{ n \to \infty }\sum\limits_{k=1}^{n}f(c_{k})\Delta z_{k} $$
let $z(t)$ be any parametarization of $C$, then $$\int_{C}f(z)dt=\int_{a}^{b}f(z(t))z'(t)dt$$
#### continuous triangle inequality
let $f(t)=u(t)+iv(t)$ be a continuous function of the real parameter $t$, then $$\left|\int_{a}^{b}f(t)dt\right|\leq \int_{a}^{b}|f(t)|dt$$
#### ML inequality
let $f(z)=u(x,y)+iv(x,y)$ be continuous on the contour $C$, then $$\left|\int_{C}f(z)\right|\leq ML$$
where $L$ is the length of $C$ and $M$ an upper bound for $|f(z)|$ on $C$
#### domains
a domain $D$ is a connected open set
##### simply connected domain
a domain $D$ is simply connected if the interior of all simply closed contour of $D$ is contained in $D$
###### multiply connected domain
a domain that isn't simply connected is multiply connected
#### green's theorem
let $C$ be a simple closed contour with positive orientation and let $R$ be the domain that forms the interior of $C$
if $P,Q$ are continuous and have continuous partial derivative $P_{x},P_{y},Q_{x},Q_{y}$ at all points on $C$ and $R$, then $$\int_{C}P(x,y)dx+Q(x,y)dy=\iint\limits_{R}(Q_{x}(x,y)-P_{y}(x,y))dxdy$$
#### cauchy goursat theorem
let $f$ be analytic in a simply connected domain $D$
if $C$ is a simple closed contour that lies in $D$, then $$\int_{C}f(z)dz=0$$
##### extended theorem
let $C,C_{1},\cdots,C_{n}$ be simple closed positively oriented contours with the properties that $C_{k}$ lies interior to $C$ for $1\leq k\leq n$ and the interior of $C_{k}$ as no point in common with the interior of $C_{j}$ if $k\neq j$
let $f$ be analytic on a domain $D$ containing all the contours and the region between $C$ and $C_{1}+\cdots+C_{n}$, then $$\int_{C}f(z)d(z)=\sum\limits_{k=1}^{n}\int_{C_{k}}f(z)dz$$

#### deformation of contour
let $C_{1},C_{2}$ be 2 simple closed positively oriented contours st $C_{1}$ lies interior to $C_{2}$ 
if $f$ is analytic in a domain $D$ that contain both $C_{1}$ and $C_{2}$ and the region between them, then $$\int_{C_{1}}f(z)dz=\int_{C_{2}}f(z)dz$$
#### anti derivatives
let $f$ be analytic in the simply connected domain $D$
if $z_{0}$ is a fixed value in $D$, and if $C$ is any contour in $D$ with initial point $z_{0}$ and terminal point $z$, then the function $$F(z)=\int_{C}f(\xi)d\xi=\int_{z_{0}}^{z}f(\xi)d\xi$$
is well defined and analytic on $D$, with its derivative given by $F'(z)=f(z)$
#### fundamental theorem of calculus
let $f$ be analytic in a simply connected domain $D$
if $z_{0}$ and $z_{1}$ are 2 points in $D$ connected by a a contour $C$, then $$\int_{C}f(z)dz=\int_{z_{0}}^{z_{1}}f(z)dz=F(z_{1})-F(z_{0})$$
where $F$ is the antiderivative of $f$
#### cauchy integral formula
let $f$ be analytic in the simply closed domain $D$ and let $C$ be a simple closed positively oriented contour that lies in $D$
if $z_{0}$ is a point that lies interior to $C$, then, $\forall n\in \mathbb{N}$, $$f^{(n)}(z_{0})=\frac{n!}{2\pi i}\int_{C} \frac{f(z)}{(z-z_{0})^{n+1}}dz$$
#### leibniz's rule
let $G$ be an open set and $I:a\leq t\leq b$ be an interval of real numbers, let $g(z,t)$ and its partial derivative $g_{z}(z,t)$ with respect to $z$ be continuous functions $\forall z\in G,t\in I$, 
then $F(z)=\int_{a}^{b}g(z,t)dt$ is analytic for $z\in G$, and $F'(z)=\int_{a}^{b}g_{z}(z,t)dt$
#### moera's theorem
let $f$ be a continuous function in a simply connected domain  $D$ 
if $\int_{C}f(z)dz=0 \forall$ closed contour $C$ in $D$, then $f$ is analytic in $D$
#### gauss mean value theorem
if $f$ is analytic in a simply connected domain $D$ that contains the circle $C_{R}(z_{0})=\{ z:|z-z_{0}|=R \}$, then $$f(z_{0})=\frac{1}{2\pi}\int_{0}^{2\pi}f(z_{0}+Re^{i\theta})d\theta$$
#### maximum modulus principle
let $f$ be analytic and nonconstant in the domain $D$
then $|f(z)|$ does not attain a maximum value at any point $z_{0} \in D$
if $f$ is continuous on the closed region $R$ that consists of $D$ and its boundary points $B$
then $|f(z)|$ assumes its maximum value, and does so only at point(s) $z_{0}$ on the boundary $B$
#### cauchy's inequality
let $f$ be analytic in the simply connected domain $D$ that contain the circle $C_{R}(z_{0})=\{ z:|z-z_{0}|=R \}$ 
if $|f(z)|\leq M\forall z\in C_{R}(z_{0})$, then $$|f^{(n)}(z_{0})|\leq \frac{n!M}{R^n}$$ for $n\in \mathbb{N}^+$

#### liouviles theorem
if $f$ is an entire function and is bounded for all values of $z$ in the complex plane, then $f$ is constant
#### fundamental theorem of algebra
if $P$ is a polynomial of degree $n\geq1$, then $P$ has at least one 0

let $P$ be a polynomial of degree $n\geq1$, then $P$ can be expressed as the product of linear factors, that is  $$P(z)=A\prod\limits_{k=1}^{n}(z-z_{k})$$
where $z_{k}$ are the zeros of $P$, counted according to multiplicity and $A$ is a constant
### power series
the power series $\sum\limits_{k=0}^{\infty}c_{k}(z-\alpha)^{k}$ have radius $\rho>0$
then $\forall r$, $0<r<\rho$ the series converges uniformely on the closed disk $\bar{D}_{r}(\alpha)=\{ z:|z-\alpha|\leq r \}$
if the series $\sum\limits_{k=0}^{\infty}c_{n}(z-\alpha)^{k}$ converges uniformely to $f(z)$ on the set $T$ and $C$ is a contour contained in $T$, then $$\sum\limits_{n=0}^{\infty}\int_{C}c_{n}(z-\alpha)^{n}dz=\int_{C}\sum\limits_{n=0}^{\infty}c_{n}(z-\alpha)^{n}dz=\int_{C}f(z)dz$$
#### uniqueness
let $$f(z)=\sum\limits_{k=1}^{\infty}a_{k}(z-\alpha)^{k}=\sum\limits_{k=1}^{\infty}b_{k}(z-\alpha)^{k}$$
in some disk  $D_{R}(\alpha)$, then $a_{n}=b_{n}\forall n\in \mathbb{N}^+$


#### taylor series
if $f(z)$ is analytic at $z=\alpha$, then the series $$\sum\limits_{k=0}^{\infty} \frac{f^{(k)}(\alpha)}{k!}$$
is the taylor series of $f$ centered at $\alpha$
if $\alpha=0$ then it is the maclaurin series
##### taylors theorem
let $f$ be analytic on a domain $G$ and $D_{R}(\alpha)$ be any disk contained in $G$
the the taylor series for $f$ converges to $f(z)\forall z\in D_{R}(\alpha)$
#### annulus
given $0\leq r<R$, we define the annulus centered at $\alpha$ with radii $r$ and $R$ by $$A(\alpha,r,R)=\{ z:r<|z-\alpha|<R \}$$
the closed annulus centered at $\alpha$ with radii $r$ and $R$ is given by $$\bar{A}(\alpha,r,R)=\{ z:r\leq|z-\alpha|\leq R \}$$
#### laurents theorem
let $0\leq r<R$ and $f$ be analytic in the annulus $A(\alpha,r,R)$
if $\rho$ is any number st $r<\rho<R$, then $\forall z_{0}\in A$, $f$ has the laurent series representation $$f(z_{0})=\sum\limits_{n=-\infty}^{\infty}c_{n}(z_{0}-\alpha)^n$$
where $$c_{n}= \frac{1}{2\pi i}\int_{C_{\rho}^{+}(\alpha)} \frac{f(z)}{(z-\alpha)^{n+1}}dz$$
#### classification of singularities
let $f$ have an isolated singularity at $\alpha$ with laurent series $$f(z)=\sum\limits_{n=-\infty}^{\infty} c_{n}(z-\alpha)^{n}\forall z\in A(\alpha,r,R)$$

these are the types of singularities
- if $c_{n}=0\forall n<0$, then $f$ has a removable singularity at $\alpha$
- if $k$ is a positive integer st $c_{-k}\neq0$ but $c_{n}=0\forall n<-k$, then $f$ has a pole of order $k$ at $\alpha$
- if $c_{n}\neq0$ for infinitely many negative integers $n$, then $f$ has an essantial singularity
#### orders of 0s
a function $f$ analytic in $D_{R}(\alpha)$ has a 0 of order $k$ at the point $\alpha \iff$ $f^{(n)}(\alpha)=0 \forall n<k$ but $f^{(k)}\neq 0$
$\iff$ the taylor series given by $f(z)=\sum\limits_{n=0}^{\infty}c_{n}(z-\alpha)^{n}$ has $c_{0}=c_{1}=\cdots=c_{k-1}=0$ but $c_{k}\neq 0$
$\iff f$  can be expressed in the form $$f(z)=(z-\alpha)^{k}g(z)$$
where $g$ is analytic at the point $\alpha$ and $g(\alpha)\neq 0$


if $f(z),g(z)$ are analytic at $z=\alpha$ and have 0s of orders $m$ and $n$ respectively at $z=\alpha$, then their product $h(z)=f(z)g(z)$ has a 0 of order $m+n$ at $z=\alpha$

#### order of poles
a function $f$ analytic in a puctured disk $D_{R}^{*}(\alpha)$ has a pole of order $k$ at the point $\alpha \iff f$  can be expressed in the form $$f(z)= \frac{h(z)}{(z-\alpha)^k}$$
where the function $h$ is analytic at the point $\alpha$ and $h(\alpha)\neq 0$

if $f$ is analytic and has a 0 of order $k$ at a point $\alpha$, then $g(z)=\frac{1}{f(z)}$ has a pole of order $k$ at the point $\alpha$

if $f$ has a pole of order $k$ at $\alpha$, then $g(z)=\frac{1}{f(z)}$ has a removable singularity at $\alpha$
if we define $g(\alpha)=0$, then $g(z)$ has a 0 of order $k$ at $\alpha$

if $f(z),g(z)$  have poles of orders $m$ and $n$ respectively at $z=\alpha$, then their product $h(z)=f(z)g(z)$ has a poleof order $m+n$ at $z=\alpha$

let $f$ and $g$ be analytic with zeros of orders $m$ and $n$ respectively at $\alpha$, then the quotient $h(z)=\frac{f(z)}{g(z)}$ has the folowing behavior
- if $m>n$, then $h$ has a removable singularity at $\alpha$, if we define $h(\alpha)=0$, then $h$ has a 0 of order $m-n$ at $\alpha$
- if $m<n$, then $h$ has a pole of order $n-m$ at $\alpha$
- if $m=n$, then $h$ has a removable singularity at $\alpha$ and can be defined so that $h$  is analytic at $\alpha$ by $h(\alpha)=\lim\limits_{ z \to \alpha }h(z)$
####
let $f$ be analytic in a domain $D$ containing $\alpha$ and $f(\alpha)=0$
if $f$ is not identically zero in $D$, then $\exists$ punctured disk $D_{R}^{*}(\alpha)$ in which $f$ has no 0s
#### l'hopital's rule
let $f,g$ be analytic at $\alpha$
if $f(\alpha)=0$ and $g(\alpha)=0$ but $g'(\alpha)\neq 0$, then $$\lim\limits_{ z \to \alpha } \frac{f(z)}{g(z)}= \frac{f'(\alpha)}{g'(\alpha)} $$
#### singularities with limits
let $f$ be analytic in $D_{R}^{*}(\alpha)$, 
then $f$ can be defined to be analytic at $\alpha \iff \lim\limits_{ z \to \alpha }f(z)$ exists and is finite
then $f$ has a pole of order $k$ at $\alpha \iff \lim\limits_{ z \to \alpha }|f(z)|=\infty$
then $f$ has an essential singularity at $\alpha \iff \lim\limits_{ z \to \alpha }|f(z)|$ doesn't exists
#### residue
let $f$ have a nonremovable isolated singularity at the point $z_{0}$
then $f$ has the laurent series representation $\forall z\in D_{R}^{*}(z_{0})$ given by $f(z)=\sum\limits_{k=-\infty}^{\infty}a_{n}(z-z_{0})^{n}$
$$\text{Res}[f,z_{0}]=a_{-1}$$
##### cauchy's residue theorem
let $D$ be a simply connected domain and $C$ be a simple closed positively oriented contour that lies in $D$
if $f$ is analytic inside $C$ and on $C$ except at points $z_{1},\cdots,z_{n}$ that lie inside $C$, then $$\int_{C}f(z)dz=2\pi i\sum\limits_{k=1}^{n}\text{Res}[f,z_{k}]$$
##### residues at poles
if $f$ has a simple pole at $z_{0}$, then $$\text{Res}[f,z_{0}]=\lim\limits_{ z \to z_{0} }(z-z_{0})f(z) $$
if $f$ has a pole of order $k$ at $z_{0}$, then $$\text{Res}[f,z_{0}]= \frac{1}{(k-1)!}\lim\limits_{ z \to z_{0} } \frac{d^{k-1}}{dz^{k-1}}(z-z_{0})^{k}f(z) $$
#### cauchy principal value
$$P.V\int_{-\infty}^{\infty}f(x)dx=\lim\limits_{ R \to \infty } \int_{-R}^{R}f(x)dx$$
####
let $f(z)= \frac{P(z)}{Q(z)}$, where $P,Q$ are polynomials of degree $m,n$ respectively if $Q(x)\neq 0\forall x \in \mathbb{R},n\geq m+2$, then $$P.V\int_{-\infty}^{\infty} \frac{P(x)}{Q(x)}dx=2\pi i\sum\limits_{j=1}^{k}\text{Res} \left[  \frac{P}{Q},z_{j} \right]$$
where $z_{j}$ are the poles of $\frac{P}{P}$ that lie in the upper half plane
#### integrands with branch points
<!--- TODO --->
#### meromorphic functions
a function $f$ is said to be meromorphic in a domain $D$ provided that the only singularities of $f$ are isolated poles and removable singularities

analytic functions are a special case of meromorphic functions
rational function $f(z)= \frac{P(z)}{Q(z)}$ where $P,Q$ are polynomials, are meromorphic in the entire complex plane
##### argument principle
let $f$ be meromorphic in the simply clonnected domain $D$ and $C$ be a simple closed positively oriented contour in $D$ st $f$ has no 0s or poles for $z\in C$, then $$\frac{1}{2\pi i}\int_{C} \frac{f'(z)}{f(z)}dz=Z_{f}-P_{f}$$
where $Z_{f}$ is the number of 0s of $f$ that lie inside $C$ and $P_{f}$ is the number of poles of $f$ that lie inside $C$
##### winding number
let $f$ be meromorphic in the simply connected domain $D$
if $C$ is a simple closed positively oriented contour in $D$ st for $z\in C, f(z)\neq 0\land f(z)\ne \infty$, then $$W(f(C),a)= \frac{1}{2\pi i}\int_{C} \frac{f'(z)}{f(z)-a}dz$$ 
is the winding number of $f(C)$ about $a$ 
it counts the number of times the curve $f(C)$ winds around the point $a$
###### rouche's theorem
let $f,g$ be meromorphic functions defined in the simply connnected domain $D$, $C$ be a simple closed contour in $D$ and $f,g$ have no 0s or poles for $z\in C$
if the strict inequality $|f(z)+g(z)|<|f(z)|+|g(z)|$ holds $\forall z\in C$, then $$Z_{f}-P_{f}=Z_{g}-P_{g}$$
### conformal mappings
<!--- TODO --->
#### bilinear transformations
let $a,b,c,d$ denote 4 complex constants with the restriction that $ad\ne bc$, then the function $$w=S(z)= \frac{az+b}{cz+d}$$
is a bilinear transformation also called mobius transformation or linear fractional

$$z=S^{-1}(w)= \frac{-dw+b}{cw-a}$$
$$S(\infty)=\frac{a}{c}$$
$$S^{-1}\left( \frac{a}{c} \right)=\infty$$
$$S^{-1}(\infty)=-\frac{d}{c}$$
$$S\left( -\frac{d}{c} \right)=\infty$$
<!--- TODO --->

