---
abstract: calculus of multiple variables
---
| precursors | [[diff and int calc]] |
| ---------- | --------------------- |
| status:    | #need-refresh         |
| #tags      |                       |
| level      | #bachelor             |
| type       | #appliednatsc         |
# #english-note 


## derivative tricks
$$\frac{d}{dt}(x(t)\hat{\imath}+y(t)\hat{\jmath}+z(t)\hat{k}+\cdots) =\dot{x}\hat{\imath}+\dot{y}\hat{\jmath}+\dot{z}\hat{k}+\cdots$$

$$\frac{d}{dx}f(x,y)=\frac{\partial f}{\partial x}/ \frac{\partial f}{\partial y}$$
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

