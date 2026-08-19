---
abstract:
---
| precursors | [[real anal]] [[multi vars calc]] [[LA]] [[fourier anal]] [[complex anal]] |
| ---------- | -------------------------------------------------------------------------- |
| #tags      |                                                                            |
| level      | #bachelor                                                                  |
# #english-note
## harmonic functions
### dirichlet problem
let $\Phi(u,v)$ be harmonic in a domain $G$ in the $w$ plane
then $\Phi$ satisfies laplace's equation $$\Phi_{uu}(u,v)+\Phi_{vv}(u,v)=0$$
at each point $w=u+iv$ in $G$
if $w=f(z)=u(x,y)+iv(x,y)$ is a conformal mapping from a domain $D$ in the $z$ plane onto $G$, then the composition $$\phi(x,y)=\Phi(u(x,y),v(x,y))$$
is harmonic in $D$ and $\phi$ satisfies laplace's equation $$\phi_{xx}(x,y)+\phi_{yy}(x,y)=0$$
$\forall z=x+yi\in D$
### poisson integral formula
let $U(t)$ be a real valued function that is piecewise continuous and bounded for all real $t$. the function $$\phi(x,y)=\frac{y}{\pi}\int_{-\infty}^{\infty} \frac{U(t)}{(x-t)^{2}+y^{2}}dt$$
is harmonic in the upper half $\Im z>0$ and has boundary values $\phi(x,0)=U(x)$ wherever $U$ is continuous
### orthogonal families of level curves

let $\phi(x,y)$ be harmonic in a domain $D$, $\psi(x,y)$ be its harmonic conjugate and $F(z)=\phi(x,y)+i\psi(x,y)$ be the complex potential.
then, the 2 families of level curves given by $\{ \phi(x,y)=K_{1}:K_{1} \in \mathbb{R} \text{ constant} \}$ and $\{ \psi(x,y)=K_{2}:K_{2}\in \mathbb{R} \text{ constant} \}$  are orthogonal in the sence that:
$(a,b)$ is a point common to the two curves $\phi(x,y)=K_{1}$ and $\psi(x,y)=K_{2}\ \land\ F'(a+ib)\ne 0 \implies$ these curves intersect orthogonally
