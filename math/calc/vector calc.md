---
abstract: calculus of vectors
---
| precursors | [[multi vars calc]] [[LA]]                                                     |
| ---------- | ------------------------------------------------------------------------------ |
| #tags      |                                                                                |
| level      | #bachelor                                                                      |

# #english-note 
## line integral
$$\int_{C}f(x_{1}\cdots,x_{m})ds=\lim_{ n \to \infty }\sum_{k=1}^{n}f(x_{1_{k}}\cdots,x_{m_{k}})\Delta s_{k}=\int_{a}^{b}f(x_{1}(t)\cdots,x_{m}(t))|\begin{bmatrix}
\dot{x_{1}} \\
\vdots \\
\dot{x_{m}}
\end{bmatrix}|dt $$
$$\int_{c}f(x_{1},\cdots,x_{m})dx_{n}=\int_{a}^{b}f(x_{1},\cdots, x_{m})\dot{x_{n}}dt$$

## vector fields
a vector field is a function $\vec{F}:\mathbb{R}^{n}\to \mathbb{R}^{n}$

###  flow
line integral in a vector field
$$\int_{C}\vec{F}\cdot \vec{T}ds=\int_{C}\vec{F}\cdot d\vec{r}=\int_{a}^b\vec{F}(\vec{r}(t))\cdot \dot{\vec{r}}dt=\int_{a}^{b}Mdx+\int_{a}^{b}Ndy=\int_{R}\int \left(\frac{\partial N}{\partial x}-\frac{\partial M}{\partial y}\right)dydx$$
if $C$ is closed, called circulation
$$\oint_{C}\vec{F}\cdot \vec{T}ds$$
### flux
$$\oint_{C}\vec{F}\cdot \vec{n}ds=\int_{a}^bMdy-\int_{a}^bNdx=\int_{R}\int \left(\frac{\partial M}{\partial x}+\frac{\partial N}{\partial y}\right)dydx$$


### conservative vector fields
a field $\vec{F}$ is conservative on an open domain if $\int_{C}\vec{F}\cdot d\vec{r}$ is the same for all paths $C$ between points $A$ and $B$ in the domain
$\vec{F}$ is concervative $\iff$ $\exists f$ st $\vec{F}=\nabla f \iff \frac{\partial M}{\partial y}=\frac{\partial N}{\partial x} \land \frac{\partial N}{\partial Z}=\frac{\partial P}{\partial y}\land\frac{\partial M}{\partial z}=\frac{\partial P}{\partial x}$
#### fundamental theorem of line integrals
$$\int_{C}\vec{F}\cdot d\vec{r}=f(\vec{r}(b))-f(\vec{r}(a))$$
## surfaces
### surface area
$$\iint\limits_{S}d\sigma=\int_{a}^{b}\int_{c}^{d}|\vec{r}_{u}\times \vec{r}_{v}|dudv$$
### surface integral

$$\int_{a}^{b}\int_{c}^{d}G(f(u,v),g(u,v),h(u,v))|\vec{r}_{u}\times \vec{r}_{v}|dudv$$
### orientable surfaces
a smooth surface is orientable if there is a continuous field of unit normal vectors
### flux
$$\iint\limits_{S}\vec{F}\cdot(\vec{r}_{u}\times \vec{r}_{v})dudv$$
### curl
$$\nabla \times \vec{F}=\left(\frac{\partial P}{\partial y}-\frac{\partial N}{\partial z}\right)\hat{\imath}  + \left(\frac{\partial M}{\partial z}-\frac{\partial P}{\partial x}\right)\hat{\jmath} + \left(\frac{\partial N}{\partial x}-\frac{\partial M}{\partial y}\right)\hat{k} $$
### stoke's theorem
$$\oint_{C} \vec{F}\cdot d\vec{r}=\iint\limits_{S}(\nabla \times \vec{F})\cdot \vec{n}d\sigma$$
### divergence
$$\nabla \cdot \vec{F}= \frac{\partial M}{\partial x} + \frac{\partial N}{\partial y} + \frac{\partial P}{\partial z}$$
### divergence theorem
$$\iint \limits_{S}\vec{F}\cdot \vec{n}ds= \iiint\limits_{D} \nabla  \cdot \vec{F}dV$$
## generalized [FTOC](diff%20and%20int%20calc.md#fundamental%20theorems%20of%20calculus)
$$\int_{\partial M}f=\int_{M}df$$
where $\partial M$ is the boundary of $M$

