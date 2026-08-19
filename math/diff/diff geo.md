---
abstract:
---

| precursors | [[point set top]] [[abstract LA]] [[real anal]] [[PDE]] [[multilinear algebra]] [[algebra]]II |
| ---------- | --------------------------------------------------------------------------------------------- |
| #tags      |                                                                                               |
| level      | #bachelor                                                                                     |

# #english-note 
## curves in $\mathbb{R}^n$
a curve in $\mathbb{R}^{n}$ is a smooth map $\gamma:[a,b]\to \mathbb{R}^{n}$ st $\gamma'(x)\neq0 \forall x\in[a,b]$
### closed curves
a curve $\gamma:[a,b]\to \mathbb{R}^{n}$ is closed if $\gamma$ can be extended to a smooth map $\tilde{\gamma}:\mathbb{R}\to \mathbb{R}^{n}$ st : $$\tilde{\gamma}(x+(b-a))=\tilde{\gamma}(x)$$
### orientation preserving reparametarization
let $\gamma:[a,b]\to \mathbb{R}^{n}$ and $\tilde{\gamma}:[c,d]\to \mathbb{R}^{n}$ be two curves
then $\tilde{\gamma}$ is an orientation preserving reparametarization of $\gamma$ if $\exists$ bijective smooth map $\varphi:[a,b]\to[c,d]$ st $\varphi'(x)>0 \forall x \in[c,d]$ and $\tilde{\gamma}=\gamma \circ \varphi$
### length
let $\gamma:[a,b]\to \mathbb{R}^{n}$ be a curve. then the function $v:[a,b]\to \mathbb{R}$,$t\mapsto|\gamma'(t)|$ is called the speed of $\gamma$ and $$\mathcal{L}(\gamma):=\int_{a}^{b}v $$
is called the length of $\gamma$

suppose $\gamma:[a,b]\to \mathbb{R}^{n},\tilde{\gamma}:[c,d]\to \mathbb{R}^{n}$ are two curves st. $\tilde{\gamma}=\gamma \circ\varphi$ for some diffeomorphism $\varphi:[c,d]\to[a,b]$. then $$\mathcal{L} (\gamma) = \mathcal{L}( \tilde{\gamma})$$
### rigid motion
a rigid motion of $\mathbb{R}^{n}$ is a map $g:\mathbb{R}^{n}\to \mathbb{R}^{n}$ of the form $$g(y)=Ay+b$$
where $A\in O(n)$ is an orthogonal matrix and $b\in \mathbb{R}^{n}$ is a vector

let $\gamma:[a,b]\to \mathbb{R}^{n}$ be a curve and $g:\mathbb{R}^{n}\to \mathbb{R}^{n}$ be a rigid transformation. then $$\mathcal{L}(g\circ\gamma ) = \mathcal{L}(\gamma)  $$

### arclength
let $\gamma:[a,b]\to \mathbb{R}^{n}$ be a curve, then the function $$s:[a,b]\to \mathbb{R},\ s(t):=\mathcal{L}(\gamma|_{[a,t]})=\int_{a}^{t}|\gamma'| $$ is the arclenght function
let $v=|\gamma'|$. let $g:[a,b]\to \mathbb{R}^k$ be a smooth function, then $$\frac{dg}{ds}:=\frac{g'}{v}$$
and $$\int_{a}^{b}gds:=\int_{a}^{b}gv$$

the arclength function $s:[a,b]\to \mathbb{R}$ of a curve $\gamma:[a,b]\to \mathbb{R}^{n}$ is an orientation preserving diffeomorphism of the interval $[a,b]$ onto the interval $[0,L]$ where $L=\mathcal{L}(\gamma)$. the reparametrization $$\tilde{\gamma}:[0,L]\to \mathbb{R}^{n},\ \tilde{\gamma}=\gamma \circ s^{-1}$$
 has unit speed i.e $|\tilde{\gamma}'|=1$
### unit tangent
for a curve $\gamma:[a,b]\to \mathbb{R}^{n}$, the normalized velocity vector field $$T:[a,b]\to S^{n-1},\ T=\frac{d\gamma}{ds}=\frac{\gamma'}{|\gamma'|}$$
is the unit tangent field of $\gamma$
#### bending energy
let $T$ be a unit tangent field of a curve $\gamma:[a,b]\to\mathbb{R}^{n}$. then $$\mathcal{B}(\gamma)= \frac{1}{2}\int_{a}^{b}\left\langle  \frac{dT}{ds}, \frac{dT}{ds} \right\rangle ds$$
is the bending energy of $\gamma$
## curves variation
