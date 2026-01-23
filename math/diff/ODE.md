---
abstract: 
other names: ordinary differential equations
---

| precursors | [[multi vars calc]]                                                                                                                                                                                         |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| #tags      |                                                                                                                                                                                                             |
| level      | #bachelor                                                                                                                                                                                                   |


# #english-note 
## seperation of variables
move the variable that has the derivative on one side and everything on the other then integrate
$$\frac{dy}{dt}=f(t)g(y)$$
$$\frac{1}{g(y)} \frac{dy}{dt}=f(t)$$
$$\int \frac{1}{g(y)} \frac{dy}{dt}dt =\int f(t)dt$$
$$\int \frac{1}{g(y)}dy=F(t)$$
## existence and uniqueness theorem
if $f$ and $\frac{\partial f}{\partial y}$ are continuous near $(x_{0},y_{0})$, then $\exists!$ solution on an interval $\alpha<x_{0}<\beta$ to the I.V.P $$y'=f(x,y),\ \ y(x_{0})=y_{0}$$
## linear ODEs
an ODE is linear $\iff$ $$a_{n}(x)y^{(n)}+a_{n-1}(x)y^{(n-1)}+\cdots + a_{1}(x)y'+a_{0}(x)y=b(x)$$
a linear ODE is homogeneous $\iff b(x)=0$ 
### 1st order
standard form: $y'+p(x)y=f(x)$
#### integrating factors
$$r(x)y'+r(x)p(x)y=r(x)f(x)$$
$r(x)=e^{\int p(x)dx}$ $\implies$ $r(x)y'+r(x)p(x)y=\frac{d}{dx}(r(x)y)$
$$\frac{d}{dx}(r(x)y)=r(x)f(x)$$
$$y=\frac{1}{r(x)}\int r(x)f(x)dx$$
#### existence and uniqueness
if $f(x)$ and $p(x)$ are continuous on $(a,b)$, then $\exists!$ solution on $(a,b)$
#### bernoulli equation
$$y'+p(x)y=Q(x)y^n$$
$u=y^{1-n}$ $\implies$ $u'=(1-n)y^{-n}y'$
$$y^{-n}y'+p(x)y^{1-n}=Q(x)$$
$$\frac{1}{1-n}u'+p(x)u=Q(x)$$
$$u'+(1-n)p(x)u=(1-n)Q(x)$$
#### homogeneous
let the differential equation be writable as $$y'=F\left( \frac{y}{x} \right)$$then $u=\frac{y}{x}\implies y'=u+xu'$
hence the implicit solution is $$\int \frac{1}{F(v)-v}dv=\ln|x|+C$$

### 2nd order

standard form: $y''+p(x)y'+q(x)y=f(x)$
homogeneous: $f(x)=0$
#### existence & uniqueness
for the IVP
$$y''+p(x)y'+q(x)y=f(x),y(a)=b_{0},y'(a)=b_{1}$$
$p,q,f$ continuous on interval $I$ about $a$ $\implies$ $\exists!$ solution on $I$
#### superposition
supose $y_{1},y_{2}$ solve $y''+p(x)y'+q(x)y=0$
then $y=c_{1}y_{1}+c_{2}y_{2}$ also solves
#### general solution
supose there are two linearly independent solution $y_{1},y_{2}$ to $y''+p(x)y'+q(x)y=0$
then the general solution is $y=c_{1}y_{1}+c_{2}y_{2}$
#### constant coefficient ODEs
$$ay''+by'+cy=0,\ st.\ a,b,c\in \mathbb{R} $$
$y=e^{rt}$
$$p(r)=ar^2+br+c=0$$
if $p$ has two distinct real roots:
$$y=c_{1}e^{r_{1}t}+c_{2}e^{r_{2}t},\ st.\ p(r_{1}),p(r_{2})=0$$
if $p$ has a single real root:
$$y=c_{1}e^{rt}+c_{2}te^{rt},\ st.\ p(r)=0$$
if $p$ has complex roots
$r=\alpha \pm i\beta$
$y_{1}=e^{\alpha t}(\cos \beta t+i\sin \beta t)$
$y_{2}=e^{\alpha t}(\cos \beta t-i\sin \beta t)$
$\frac{y_{1}+y_{2}}{2}=e^{\alpha t}\cos \beta t$
$\frac{y_{1}-y_{2}}{2i}=e^{\alpha t}\sin \beta t$
$$y=c_{1}e^{\alpha t}\cos \beta t+c_{2}e^{\alpha t}\sin \beta t$$
### higher order
$$y^{(n)}+p_{n-1}(x)y^{(n-1)}+\cdots+p_{0}(x)y=f(x)$$
#### existence & uniqueness
for the IVP $y^{(n)}+p_{n-1}(x)y^{(n-1)}+\cdots+p_{0}(x)y=f(x),\ y(a)=b_{0},y'(a)=b_{1},\cdots,y^{(n-1)}(a)=b_{n-1}$
if all $p_{i}$ and $f$ are continuous on interval $I$ about $a$, $\implies \exists!$ solution on $I$


#### general solution
suppose $y_{1},\cdots,y_{n}$ solve $y^{(n)}+p_{n-1}(x)y^{(n-1)}+\cdots+p_{0}(x)y=0$
the $y=c_{1}y_{1}+\cdots+c_{n}y_{n}$ is the general solution $\iff \exists t_{0},\ st.\ W(t_{0})\ne 0$ 
#### constant coefficients
same as for 2nd order but more roots

### non homogenous
#### undetermined coefficient
let $y_{h}$ be the general solution to the homogeneous
let $y_{p},\tilde{y}_{p}$ be particular solutions to the non homogeneous
then $y_{h}+y_{p}$ is a particular solution to the non homogeneous
$y_{p}+\tilde{y}_{p}$ is a particular solution to the homogeneous
guess $y_{p}$ based on $f$ with undetermined coefficient
#### variation of parameter
$$y''+p(x)y'+q(x)y=g(x)$$
the homogenous equation has two linearly independent solutions $y_{1}$ & $y_{2}$
guess $y=u_{1}y_{1}+u_{2}y_{2}$
solves as $u_{1}=-\int \frac{y_{2}g}{y_{1}y_{2}'-y_{2}y_{1}'}dx$
$u_{2}=-\int \frac{y_{1}g}{y_{2}y_{2}'-y_{2}y_{1}'}dx$

## autonomous ODEs
an autonomous ODE only depends on the dependent variable
### equilibrium solutions
values where $f(y)=0$
an equilibrium solution $y = a$ is asymptotically stable if solutions that start near $a$ tend towards $a$ as $t \to \infty$ 
an equilibrium solution $y = a$ is unstable if solutions near $a$ leave $a$ as $t\to \infty$
## exact equations
take a potential function $F(x,y)$
an exact equation is an equation of the form $$M(x,y)dx+N(x,y)dy=0\lor M(x,y) + N(x,y) \frac{dy}{dx}=0$$
that was optained as $dF=0$ 
the solution to an exact equation is given by
$$\int dF = \int M(x,y)dx+\int N(x,y)dy$$
$$F=\int M(x,y)dx+\int N(x,y)dy$$

## wronskian
$$W(t)=\begin{bmatrix}
y_{1}& \cdots & y_{n}\\ 
\vdots & \vdots & \vdots \\
y_{1}^{(n-1)}& \cdots & y_{n}^{(n-1)} \\
\end{bmatrix}$$
let $y_{1}, \cdots ,y_{n}$ be analiticall functions
then they are linearly dependent $\iff$ $\forall t\ \det(W(t)) = 0$

## systems of ODEs
### changing to first order systems
consider an $n$-th order diferentail equation $$y^{(n)}=F(y^{(n-1)},\cdots,y',y,x)$$
we define new variable $u_{1},u_{2},\cdots,u_{n}$ and write the system $$\begin{align}
u_{1}' &= u_{2} \\
u_{2}' &= u_{3} \\
 & \vdots \\
 u_{n-1}' & = u_{n} \\
u_{n}' & = F(u_{n},u_{n-1},\cdots,u_{2},u_{1},x)
\end{align}$$
once we solve the system, we just set $y=u_{1}$ and this solve the original equation

### picard's theorem
If  $\forall j = 1, 2, \cdots , n ,\forall k = 1, 2, \cdots , n$ each $F_{j}$ is continuous and the derivative $\frac{\partial F_{j}}{\partial x_{k}}$ exists and is continuous near some $(x_{1}^{0},x_{2}^{0},\cdots,x_{n}^{0},t^{0})$, then $\exists!$ solution to $$\begin{align}
x_{1}' & = F_{1}(x_{1},x_{2},\cdots,x_{n},t) \\
x_{2}' & = F_{2}(x_{1},x_{2},\cdots,x_{n},t) \\
 &  \vdots \\
x_{n}' & = F_{n}(x_{1},x_{2},\cdots,x_{n},t)
\end{align}$$ subject to the initial condition
$$x_{1}(t^{0})=x_{1}^{0},x_{2}(t^{0})=x_{2}^{0},\cdots, x_{n}(t^{0})=x_{n}^0$$ (at least for $t$ in some small interval) 
### linear systems of ODEs
a linear system of ODEs is a system that can be written as $$\dot{\vec{x}}(t)=P(t)\vec{x}(t)+\vec{f}(t)$$
where $P(t)$ is a matrix valued function and $\vec{x}(t),\vec{f}(t)$ are vector valued fucntion
superposition still aplies for homogeneous systems, that is $\vec{f}=\vec{0}$
variation of parameter still aplies for non homogeneous
#### eigenvalue method
##### 1st order
supose we have a system $$\dot{\vec{x}}=P\vec{x}$$
if $P$ is an $n\times n$ constant matrix that has $n$ distinct real eigenvalues $\lambda_{1},\lambda_{2},\cdots,\lambda_{n}$, then $\exists n$ linearly independent coresponding eigenvectors $\vec{v}_{1},\vec{v}_{2},\cdots,\vec{v}_{n}$, and the general solution to $\dot{\vec{x}}=P\vec{x}$ can be written as $$\vec{x}=\sum\limits_{i=1}^{n}c_{i}\vec{v}_{i}e^{\lambda_{i} t}$$

Let $P$ be a real-valued constant matrix. If $P$ has a complex eigenvalue $a+bi$ and
a corresponding eigenvector $\vec{v}$ , then $P$ also has a complex eigenvalue $a-bi$ with a corresponding eigenvector $\bar{\vec{v}}$ . Furthermore, $\dot{\vec{x}}=P\vec{x}$ has two linearly independent real-valued solutions $$\vec{x}_{1}=\Re\vec{v}e^{(a+bi)t},\vec{x}_{2}=\Im\vec{v}e^{(a-bi)t}$$

##### 2nd order
Let $A$ be a real $n\times n$ matrix with $n$ distinct real negative (or zero) eigenvalues we
denote by $-\omega_{1}^{2}>-\omega_{2}^{2}>\cdots>-\omega_{n}^{2}$ , and corresponding eigenvectors by $\vec{v}_{1},\vec{v}_{2},\cdots,\vec{v}_{n}$ . If $A$ is invertible (that is, if $\omega_{1}>0$), then $$\vec{x}(t)=\sum\limits_{i=1}^{n}\vec{v}_{i}(a_{i}\cos(\omega_{i}t)+b_{i}\sin(\omega_{i}t))$$
is the general solution of $$\ddot{\vec{x}}=A\vec{x}$$
for some arbitrary constants $a_{i},b_{i}$
if $A$ has a zero eigenvalue, that is $\omega_{1}=0$, and all other eigenvalues are distinct and negative, then the general solution can be written as $$\vec{x}=\vec{v}_{1}(a_{1}+b_{1}t)+\sum\limits_{i=2}^{n}\vec{v}_{i}(a_{i}\cos(\omega_{i}t)+b_{i}\sin(\omega_{i}t))$$
##### repeated eigenvalues
#### matrix exponential
let $$\dot{\vec{x}}=P\vec{x}$$ where $P$ is a constant matrix, then the general solution is $$\vec{x}=e^{tP}\vec{c}$$ where $\vec{c}=\vec{x}(0)$


#### nonhomogeneous systems
consider the equation with initial solution $$\dot{\vec{x}}(t)+P\vec{x}(t)=\vec{f}(t)\land \vec{x}(0)=\vec{b}$$
where $P$ is constant
the solution can be written as $$\vec{x}(t)=e^{-tP}\int_{0}^{t}e^{sP}\vec{f}(s)ds+e^{-tP}\vec{b}$$
##### eigenvector decomposition
#### variable coefficient
##### variation of parameter
consider the equation $$\dot{\vec{x}}=A(t)\vec{x}(t)+\vec{f}(t)$$
suppose we solved the associated homogeneous equation $\dot{\vec{x}}=A(t)\vec{x}(t)$ and found a fundamental matrix solution $X(t)$. the general solution for the associated homogeneous eqaution is $\vec{x}=X(t)\vec{c}$ for a constant vector $\vec{c}$
a particular solution to the nonhomogeneous equation is $$\vec{x}_{p}=X(t)\int[X(t)]^{-1}\vec{f}(t)dt$$
## boundary value problems
### eigenvalue problem
lets consider the following eigenvalue problems
$$x''+\lambda x=0,\ x(a)=0,\ x(b)=0$$
$$x''+\lambda x=0,\ x'(a)=0,\ x'(b)=0$$
$$x''+\lambda x=0,\ x(a)=x(b),\ x'(a)=x'(b)$$
$\lambda$ is an eigenvalue $\iff \exists$ nonzero solution to the boundary value problem for that $\lambda$
a non zero solution is a corresponding eigenfunction

#### orthogonality
supose that $x_{1}(t),x_{2}(t)$ are eigenfunctions of the same eigenvalue problem for different eigenvalue $\lambda_{1}$ and $\lambda_{2}$. then they are orthogonal in the sense that $$\int_{a}^{b}x_{1}(t)x_{2}(t)dt=0$$
#### freeholm alternative
exactly one of the following statement hold:
either $x''+\lambda x=0$ has a nonzero solution, or $x''+\lambda x=f(t)$ has a unique solution $\forall f$ continuous on $[a,b]$
### sturm-liouville problems
problems of the form $$\frac{d}{dx}\left( p(x) \frac{dy}{dx} \right)-q(x)y+\lambda r(x)y=0,\ a<x<b,$$
$$\alpha_{1}y(a)-\alpha_{2}y'(a)=0,\ \beta_{1}y(b)+\beta_{2}y(b)=0$$

let $p(x),p'(x),q(x),r(x)$ be continuous on $[a,b]$ and $p(x)>0,r(x)>0\forall x \in[a,b]$. then the sturm-liouville problem has an increasing sequence of eigenvalues $$\lambda_{1}<\lambda_{2}<\lambda_{3}<\cdots$$
st. $$\lim\limits_{ n \to \infty } \lambda_{n}=+\infty $$
and $\forall \lambda_{n} \exists!$ up to a constant multiple eigenfunction  $y_{n}(x)$. moreover, if $q(x)\geq 0$ and $\alpha_{1},\alpha_{2},\beta_{1},\beta_{2}\geq 0$, then $\lambda_{n}\geq 0 \forall n$
#### orthogonality
let $y_{j},y_{k}$ be two distinct eigenfunctions for two distinct eigenvalues $\lambda_{j},\lambda_{k}$. then $$\int_{a}^{b}y_{j}(x)y_{k}(x)r(x)dx=0$$ that is, $y_{j},y_{k}$ are orthogonal with respect to the weight function $r(x)$
#### fredholm alternative
suppose we have a regular sturm liouville problem. then either $$\frac{d}{dx}\left( p(x) \frac{dy}{dx} \right)-q(x)y+\lambda r(x)y=0,\ a<x<b,$$
$$\alpha_{1}y(a)-\alpha_{2}y'(a)=0,\ \beta_{1}y(b)+\beta_{2}y(b)=0$$ has a nonzero solution ($\lambda$ is an eigenvalue) or $$\frac{d}{dx}\left( p(x) \frac{dy}{dx} \right)-q(x)y+\lambda r(x)y=f(x),\ a<x<b,$$
$$\alpha_{1}y(a)-\alpha_{2}y'(a)=0,\ \beta_{1}y(b)+\beta_{2}y(b)=0$$
has a unique solution $\forall f(x)$ continuous on $[a,b]$
#### eigenfunction series
series of the form $$f(x)=\sum\limits_{n=1}^{\infty}c_{n}y_{n(x)}$$
st. $y_{n}$ are eigenfunctions and $$c_{m}=\frac{\langle f,y_{m}\rangle}{\langle y_{m},y_{m}\rangle}=\frac{\int_{a}^{b}f(x)y_{m}(x)r(x)dx}{\int_{a}^{b}(y_{m}(x))^{2}r(x)dx}$$
## laplace transform
$$\mathcal{L}\{ f(t) \} =F(s) :=\int_{0}^{\infty}e^{-st}f(t)dt $$
$$\mathcal{L}\left\{ Af(t) + Bg(t) \right\} = A\mathcal{L}\left\{ f(t) \right\} +B\mathcal{L}\left\{ g(t) \right\}  $$
### exponential order
a function $f(t)$ is of exponential order as $t$ goes to infinity if $$\lim\limits_{ t \to \infty } \frac{f(t)}{e^{ct}} $$
exist and is finite for some $c$ 
### existance of laplace transform
let $f(t)$ be continuous on the interval $[0,\infty)$ and of exponential order for a certain constant $c$. then $F(s)=\mathcal{L}\left\{ f(t) \right\}$ is defined $\forall s>c$
### uniqueness
let $f(t), g(t)$ be continuous and of exponential order. suppose that $\exists C$ st  $F(s)=G(s)\forall s>C$. then $f(t)=g(t)\forall t\geq 0$


### transform of some functions

$$\mathcal{L}\{ C \} = \frac{C}{s}$$
$$\mathcal{L}\{ t^{p} \} = \frac{\Gamma(p+1)}{s^{p+1}}$$
$$\mathcal{L}\{ e^{-at} \} = \frac{1}{s+a}$$
$$\mathcal{L}\{ \sin(\omega t) \}= \frac{\omega}{s^2+\omega^2}$$
$$\mathcal{ L }\{ \cos(\omega t) \} = \frac{s}{s^2+\omega^2}$$
$$\mathcal{L}\{ \sinh(\omega t) \} = \frac{\omega}{s^{2}-\omega^2} $$
$$\mathcal{L}\{ \cosh(\omega t) \} = \frac{s}{s^{2}-\omega^2} $$
$$\mathcal{L}\{ u(t-a) \} = \frac{e^{-as}}{s} $$
$$\mathcal{L}\{ \delta(t) \}=1 $$
$$\mathcal{L}\{ \delta(t-a) \} = e^{-as} $$
$$\mathcal{L}\left\{  \mathrm{erf}\left( \frac{t}{2a} \right)  \right\} = \frac{1}{s}e^{(as)^{2}}\mathrm{erfc}(as) $$
$$\mathcal{L}\{ t\sin(\omega t) \} = \frac{2\omega s}{(s^2+\omega^2)^2} $$
$$\mathcal{L}\{ t\cos(\omega t) \} = \frac{s^{2}-\omega^{2}}{(s^2+\omega^2)^2} $$
$$\mathcal{L}\{ e^{-at}\sin(\omega t) \} = \frac{\omega}{(s+a)^{2}+\omega^2} $$
$$\mathcal{L}\{ e^{-at}\cos(\omega t) \} = \frac{s+a}{(s+a)^2+\omega^2} $$
$$\mathcal{L}\{ e^{-at}\sinh(\omega t) \} = \frac{\omega}{(s+a)^{2}-\omega^2} $$
$$\mathcal{L}\{ e^{-at}\cosh(\omega t) \} = \frac{s+a}{(s+a)^2-\omega^2} $$
$$\mathcal{L}\left\{  \frac{1}{\sqrt{ \pi t }}\exp\left( -\frac{a^{2}}{4t} \right)  \right\} =\frac{e^{-a\sqrt{ s }}}{\sqrt{ s }} $$

$$\mathcal{L}\left\{  \frac{a}{\sqrt{ 4\pi t^{3} }}\exp\left( -\frac{a^{2}}{4t} \right)  \right\} =e^{-a\sqrt{ s }} $$
$$\mathcal{L}\left\{  \frac{1}{\sqrt{ \pi t }}-ae^{a^{2}t}\mathrm{erfc}(a\sqrt{ t })  \right\} = \frac{1}{\sqrt{ s }+a} $$
$$\mathcal{L}\left\{  \mathrm{erfc}\left( \frac{a}{2\sqrt{ t }} \right)  \right\} =\frac{e^{-a\sqrt{ s }}}{ s }$$
$$\mathcal{L}\left\{  \frac{1}{2\sqrt{ \pi t^{3} }}(e^{bt}-e^{at})  \right\} = \sqrt{ s-a } - \sqrt{ s-b } $$
$$\mathcal{L}\left\{  \frac{1}{t}(e^{bt}-e^{at})  \right\} = \ln \frac{s-a}{s-b} $$
$$\mathcal{L}\{ J_{0}(at) \}=\frac{1}{\sqrt{ s^2+a^2 }} $$
$$\mathcal{L}\{ J_{0}(a\sqrt{ t }) \} = \frac{\exp\left( -\frac{a^{2}}{4s} \right)}{s} $$
$$\mathcal{L} \left\{\frac{1}{\sqrt{ \pi t }}\cos(a\sqrt{ t })\right\} = \frac{\exp\left( -\frac{a^{2}}{4s} \right)}{\sqrt{ s }}$$
$$\mathcal{L}\left\{ \frac{2}{\sqrt{ \pi }} \sinh(a\sqrt{ t })  \right\} = \frac{a\exp\left( \frac{a^{2}}{4s} \right)}{s^{3/2}} $$
$$\mathcal{L}\left\{  \frac{1}{\sqrt{ \pi t }}e^{at}(1+2at)  \right\} = \frac{s}{(s-a)^{3/2}}$$
$$\mathcal{L}\{ af(t)+bg(t) \}=aF(s)+bG(s) $$
$$\mathcal{L}\{ f(at) \}=\frac{1}{a}F\left( \frac{s}{a} \right) $$
$$\mathcal{L}\{ f(t-a)u(t-a) \} = e^{-as}F(s) $$
$$\mathcal{L}\{ e^{-at}f(t) \} = F(s+a) $$
$$\mathcal{L}\{ g'(t) \} = sG(s)-g(0) $$
$$\mathcal{L}\{ g^{(n)}(t) \} = s^{n}G(s) - \sum\limits_{k=0}^{n-1} s^{n-k-1}g^{(k)}(0)$$
$$\mathcal{L}\{ (f*g)(t) \} = F(s)G(s) $$
$$\mathcal{L}\{ tf(t) \}=-F'(s) $$
$$\mathcal{L}\{ t^{n}f(t) \} = (-1)^{n}F^{(n)}(s) $$
$$\mathcal{L}\left\{  \int_{0}^{t}f(\tau)d\tau  \right\} = \frac{1}{s}F(s) $$
$$\mathcal{L} \left\{  \frac{f(t)}{t}  \right\} = \int_{s}^{\infty}F(\sigma)d\sigma $$
$$\mathcal{L}\{ f(t) \text{ periodic with period } P \} = \frac{1}{1-e^{-P s}}\int_{0}^{P}e^{-st}f(t)dt $$
where $u$ is the heaviside function, $\delta$ the dirac delta function, $\Gamma(t)= (t-1)! =\int_{0}^{oo}e^{-t}\tau^{t-1}d\tau$, $\mathrm{erf}(t)=\frac{2}{\sqrt{ \pi }}\int_{0}^{t}e^{-\tau^{2}}d\tau$, $\mathrm{erfc(t)}=1-\mathrm{erf}(t)$ and $(f*g)(t)=\int_{0}^{t}f(\tau)g(1-\tau)d\tau$

### inverse
$$f(t)=\mathcal{L}^{-1}\left\{ F(s) \right\} = \frac{1}{2\pi i}\lim\limits_{ T \to \infty } \int_{\gamma-iT}^{\gamma+iT}e^{st}F(s)ds $$
where the integration is done along the vertical line $\Re(s)=\gamma$ in the complex plane st $\gamma$ is greater than the real part of all singularities of $F$ and $F$ is bounded on the line
### solving ODE
- take the laplace transform of both side of the equation
- plug the initial values
- solve algebraically for $X(s)$
- take the laplace transform of $X(s)$ to obtain $x(t)$
## series method
consider a linear second-order omogeneous ODE of the form $$P(x)y''+Q(x)y'+R(x)y=0$$
suppose that $P(x),Q(x),R(x)$ are polynomials. we will try a sulotion of the form $$y=\sum\limits_{k=0}^{\infty}a_{k}(x-x_{0})^{k}$$ and solve for the $a_{k}$
### singular points
the point $x_{0}$ is callend an ordinary point if $P(x)\ne 0$. that is the functions $$\frac{Q(x)}{P(x)}, \frac{R(x)}{P(x)}$$
are defined for $x$ near $x_{0}$ other wise, $x_{0}$ is a singular point 
if $$\lim\limits_{ x \to x_{0} } \frac{(x-x_{0})Q(x)}{P(x)}, \lim\limits_{ x \to x_{0} } \frac{(x-x_{0})^{2}R(x)}{P(x)}  $$
both exists and are finite, then $x_{0}$ is a regular singular point
#### method of frobenius
suppose that $$P(x)y''+Q(x)y'+R(x)y=0$$ has a regular singular point at $x=0$. then $\exists$ at least one solution of the form $$y=x^{r}\sum\limits_{k=0}^{\infty}a_{k}x^{k}$$
