---
abstract: 
other names: ordinary differential equations
---

| precursors | [[multi vars calc]]                                                                                                                                                                                         |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| #tags      |                                                                                                                                                                                                             |
| level      | #bachelor                                                                                                                                                                                                   |
| degrees    | #math/actuaria/option/maths #math/maths/mandatory #math/stats/option/maths #math/finance/mandatory #math/sc/option/maths #physics/all/mandatory  #EE/mandatory #computerE/mandatory #math/honours/mandatory |

# #english-note 
## seperation of variables
move the variable that has the derivative on one side and everything on the other then integrate
$$\frac{dy}{dt}=f(t)g(y)$$
$$\frac{1}{g(y)} \frac{dy}{dt}=f(t)$$
$$\int \frac{1}{g(y)} \frac{dy}{dt}dt =\int f(t)dt$$
$$\int \frac{1}{g(y)}dy=F(t)$$
## existence and uniqueness theorem
if $f$ and $\frac{\partial f}{\partial y}$ are continuous near $(x_{0},y_{0})$, then there is a unique solution on an interval $\alpha<x_{0}<\beta$ to the I.V.P $$y'=f(x,y),\ \ y(x_{0})=y_{0}$$
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
## wronskian
$$W(t)=\begin{bmatrix}
y_{1}& \cdots & y_{n}\\ 
\vdots & \vdots & \vdots \\
y_{1}^{(n-1)}& \cdots & y_{n}^{(n-1)} \\
\end{bmatrix}$$
let $y_{1}, \cdots ,y_{n}$ be analiticall functions
then they are linearly dependent $\iff$ $\forall t\ \det(W(t)) = 0$

