---
abstract:
---


| precursors | [[CM]] [[diff and int calc]] [[fluid dynamics]] [[aerodynamics]] [[numerical methods]]  |
| ---------- | ---- |
| #tags      |      |
| level      | #    |

# #english-note 
## projectile motion
### in a vacuum
$$x=v_{0}\cos(\theta)t$$
$$y=v_{0}\sin(\theta)t-\frac{g}{2}t^2$$
$$y=x\tan \theta-\frac{gz^{2}}{2v_{0}^{2}\cos^{2}\theta}$$
max range:$$R_{max}=\frac{v_{0}^{2}\sin(2\theta)}{g}$$
max height: $$H_{max} = \frac{v_{0}^{2}\sin^{2}(2\theta)}{2g}$$
time of flight:$$T=\frac{2v_{0}\sin \theta}{g}$$
### drag forces
$$F_{d}=\frac{1}{2}\rho v^{2}C_{d}A$$
where $C_{d}$ is relatively stable in subsonic regime, increases rapidly in transonic regime and decreases gradually in supersonic regime

ballistic coefficient:$$BC=\frac{m}{id^2}=\frac{SD}{i}=\frac{m}{C_{d}A}$$
where $i$ is the form factor, $d$ the diameter and $SD$ the sectional density
$$a_{drag}=-\frac{\rho v^{2}C_{d}A}{2m}=-\frac{\rho v^{2}}{2BC}C_{d,std}(M)$$
where $C_{d,std}(M)$ is the standard drag function at mach $M$

subsonic velocity decay approximation: $$v(x)=\frac{v_{0}}{1+\frac{\rho C_{d}A}{2m}x}$$

velocity dependent ballistic coefficient: $$BC(v)=BC_{ref}f(v)$$
where $f$ is a velocity dependent correction factor

retardation: $$R(v)=\frac{F_{d}(v)}{m}=KG(v)$$
where $K= \frac{\rho_{0}\pi d^2}{8mBC}$ and $G(v)$ is the drag function

trajectory equation: $$ \dot{\vec{v}}=\begin{bmatrix}
-\frac{F_{d}v_{x}}{m||v||} \\
-g-\frac{F_{d}v_{y}}{m||v||} \\
-\frac{F_{d}v_{z}}{m||v||}
\end{bmatrix}$$
### environmental effects
air density:$$\rho=\frac{PM}{RT}$$
crosswind deflection: $$D=WT_{lag}$$
where $W$ is the speed of the wind and $T_{lag}=$ time of flight $-($distance/muzzle velocity$)$

### spin
$$RPM=\frac{6000v}{twist}$$
where $twist$ it the barrel twist rate in cm per revolution
$$\omega=2\pi\frac{v}{twist}$$
