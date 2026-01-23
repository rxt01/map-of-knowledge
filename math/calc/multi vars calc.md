---
abstract: calculus of multiple variables
---
| precursors | [[diff and int calc]] [[LA]]                                                                             |
| ---------- | -------------------------------------------------------------------------------------------------------- |
| #tags      |                                                                                                          |
| level      | #bachelor                                                                                                |

# #english-note 


## derivative tricks
$$\frac{d}{dt}(x(t)\hat{\imath}+y(t)\hat{\jmath}+z(t)\hat{k}+\cdots) =\dot{x}\hat{\imath}+\dot{y}\hat{\jmath}+\dot{z}\hat{k}+\cdots$$

$$\frac{d}{dx}f(x,y)=\frac{\partial f}{\partial x}/ \frac{\partial f}{\partial y}$$
$$\frac{\partial f}{\partial x}|_{(x_{0},y_{0})}=\frac{d}{dx}(f(x,y_{0}))|_{x=x_{0}}$$
$$\dot{w}=\frac{\partial w}{\partial x}\dot{x}+\frac{\partial w}{\partial y}\dot{y}+\cdots$$
$$\nabla f=\left(\begin{matrix}
\frac{\partial f}{\partial x} \\
\frac{\partial f}{\partial y}
\end{matrix}\right)$$
$$D_{\vec{u}}f(x_{0},y_{0})=\nabla f|_{(x_{0},y_{0})}\cdot \vec{u}$$

## time defined paths
### arc length
$Arclength=\int_{a}^{b}\sqrt{ \dot{x}^{2}+ \dot{y}^{2}+\dot{z}^{2} \cdots} dt$
### curvature

$$\kappa=|\frac{d\vec{T}}{ds}|=\frac{1}{| \vec{v}|}| \dot{\vec{T}}|$$
where $\vec{T}$ is the unit tangent vector and $s$ is the arclength

#### circle of curvature
tangent to the curve
$$r=\frac{1}{\kappa}$$

### principle unit normal
$$\vec{N}=\frac{1}{\kappa} \frac{d\vec{T}}{ds}$$



### binormal vector
$$\vec{B}=\vec{T}\times \vec{N}$$

### torsion
$$\tau=-\frac{d\vec{B}}{ds}\cdot \vec{N}$$
### acceleration
$$\vec{a}=\dot{|\vec{v}|}\vec{T}+k|\vec{v}|^2\vec{N}$$
$a_{\vec{N}}=k|\vec{v}|^2$
$a_{\vec{T}}=\dot{|\vec{v}|}$
$$|\vec{a}|=\sqrt{ {|a_{\vec{N}}|}^{2}+{|a_{\vec{T}}|}^{2} }$$

## second derivative test
$f_{xx}<0 \land f_{xx}f_{yy}-f_{xy}^2>0$: local max
$f_{xx}>0 \land f_{xx}f_{yy}-f_{xy}^2>0$: local min
$f_{xx}f_{xy}-f_{xy}^2<0$: saddle
$f_{xx}f_{xy}-f_{xy}^2=0$: inconcliusive
## integral trics
$$\int_{a}^b\int_{c}^df(x,y)dxdy=\int_{\theta_{0}}^{\theta_{1}}\int_{r_{0}(\theta)}^{r_{1}(\theta)}\varphi(r,\theta)rdrd\theta$$

$x=\rho \sin\phi\cos \theta$
$y=\rho \sin \phi \sin\theta$
$z=\rho \cos \phi$
$$dxdydz=\rho^2\sin \phi d\rho d\phi d\theta$$
$x=g(u,v),y=h(u,v)$
$$\int \int_{R}f(x,y)dydx=\int \int_{G}f(g(u,v),h(u,v))J(u,v)dudv$$
## jacobian
$$J(u,v)=\det\begin{bmatrix}
\frac{\partial x}{\partial u}& \frac{\partial x}{\partial v} \\
\frac{\partial y}{\partial u}& \frac{\partial y}{\partial v}
\end{bmatrix}$$
