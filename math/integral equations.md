---
abstract:
---
| precursors | [[real anal]] [[LA]] [[PDE]] [[multi vars calc]] |
| ---------- | ------------------------------------------------ |
| #tags      |                                                  |
| level      | #grad                                            |

# #english-note 
## volterra integral equation
equations of the form $$x(t)=f(t)+\int_{0}^{t} g(t-\tau)x(\tau)d\tau$$
where $f(t),g(t)$ are known functions and $x(t)$ is unknown
apply the [[ODE#laplace transform|laplace transform]] to obtain $$X(s)=F(s)+G(s)X(s)$$
hence $$X(s)=\frac{F(s)}{1-G(s)}$$
to find $f(x)$, we now need to find the inverse laplace transform of $X(s)$
