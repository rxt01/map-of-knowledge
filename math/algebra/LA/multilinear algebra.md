---
abstract:
---
| precursors | [[LA]] |
| ---------- | ------ |
| #tags      |        |
| level      | #      |
| degrees    |        |

## multilinear algera
<!-- should be in [[multilinear algebra]] -->
### bilinear forms
a bilinear form on $V$ is a function $\beta:V\times V\to \mathbb{F}$ st $$v\mapsto \beta(v,u)\land v\mapsto \beta(u,v)$$
are both linear functionals on $V\forall u\in U$ 
the set of bilinear forms on $V$ is denoted $V^{(2)}$
$$\dim V^{(2)}=(\dim V)^2$$
$$V^{(2)}=V_{\text{sym}}^{(2)}\oplus V_{\text{alt}}^{(2)}$$
### matrix of a bilinear form
let $\beta$ be a bilinear form on $V$ and $e_{1},\cdots,e_{n}$ be a basis of $V$, the matrix of $\beta$ with respect to the basis is the $n$-by-$n$ matrix $\mathcal{M}(\beta)$ whose entry $\mathcal{M}(\beta)_{j,k}$ are defined by $$\mathcal{M}(\beta)_{j,k}=\beta(e_{j},e_{k}) $$
### symetric bilinear forms
a bilinear form $\rho \in V^{(2)}$ is symetric if $$\rho(u,w)=\rho(w,u)$$
the set of symetric bilinear forms of $V$ is $V_{\text{sym}}^{(2)}$
### symetric matrices
a matrix $A$ is symetric if it equals its transpose
### alternating bilinear forms
a bilinear form $\alpha \in V^{(2)}$ is alternating if $$\alpha(v,v)=0$$
the set of alternating bilinear forms of $V$ is $V_{\text{alt}}^{(2)}$
### quadratic forms
for $\beta$ a bilinear form on $V$, define a function $q_{\beta}:V\to \mathbb{F}$ by $q_{\beta}(v)=\beta(v,v)$ a function $q:V\to \mathbb{F}$ is a quadratic form on $V$ if $\exists$ bilinear form  $\beta$ on $V$ st $q=q_{\beta}$
### m-linear form
for $m$ a positive integer, an $m$-linear form on $V$ is a fucntion $\beta:V^{m}\to \mathbb{F}$ st $$v \mapsto \beta(u_{1},\cdots,u_{k-1},v,u_{k+1},\cdots,u_{m})$$
is a linear map from $V$ to $\mathbb{F}$

the set of $m$-linear form on $V$ is $V^{(m)}$
a function $\beta$ is a multilinear form if it is an $m$-linear form for some positive integer $m$
### bilinear functional
a bilinear functional $\beta:V\times W\to \mathbb{F}$ st $v\mapsto \beta(v,w)$ is a linear functional on $V$ and $w\mapsto \beta(v,w)$ is a linear functional on $W$
the vector space of bilinear functional on $V\times W$ is $\mathcal{B}(V,W)$
$$\dim \mathcal{B}(V,W) =(\dim V)(\dim W)$$
### tensor product
the tensor product $V\otimes W$ is defined to be $\mathcal{B}(V',W')$
for $v\in V,w\in W$ the tensor product $v\otimes w$ is the element of $V\otimes W$ defiend by $$(v\otimes w)(\varphi,\tau)=\varphi(v)\tau(w)\forall(\varphi,\tau)\in V'\times W'$$
$$\dim(V\otimes W)=(\dim V)(\dim W)$$
if $V,W$ are inner product space, then $\exists!$ inner product on $V\otimes W$ st $$\langle v\otimes w,u\otimes x\rangle=\langle v,u\rangle\langle w,x\rangle$$
### bilinear maps
a bilinear map from $V\times W$ to a vector space $U$ is a function $\Gamma:V\times W\to U$ st $v\mapsto \Gamma(v,w)$ is a linear map from $V$ to $U$ and $w\mapsto \Gamma(v,w)$ is a linear map from $W$ to $U$
