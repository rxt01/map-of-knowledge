---
abstract: linear algebra over abstract vector spaces
---
| precursors | [[LA]] [[real anal]] [[algebra]] |
| ---------- | -------------------------------- |
| #tags      |                                  |
| level      | #                                |
| degrees    |                                  |

# #english-note
## [vector](LA.md#vectors) spaces
let $\mathbb{F}$ be a [field](algebra.md#fields)
a set $V\ne\varnothing$ together with two operations
- vector addition $+:V\times V\to V$
- scalar multiplication $\cdot:\mathbb{F}\times V\to V$
where
- $(V,+)$ is an abelian group
- $\lambda(\mu v)=(\lambda \mu)v$
- $1v=v$
- $\lambda(v+w)=\lambda v+\lambda w$
- $(\lambda+\mu)v=\lambda v+\mu v$
is called an $\mathbb{F}-$vector space
an element of an $\mathbb{F}$-vector space is a vector
### linear combination
let $V$ b an $\mathbb{F}-$vector space
for $v_{1},\cdots ,v_{k}\in V$, $\alpha_{1},\cdots,\alpha_{k}\in \mathbb{F}$, $k<\infty$
$$\sum_{j=1}^k\alpha_{j}v_{j}$$
is a linear combination

### span of subset
the span of a subset is the set of all the possible linear combinations of vectors in the subset
the span of a list of vectors is the smallest subspace containing all those vector
#### generating set
a subset is a generating set of a subspace if it span exactly the whole subspace

every generating set contains a basis 

#### linearly independent
a subset is linearly independent if  every vector in the span of the set can only be reached one way
#### basis
a subset of a subspace is a basis for that subspace if it is generating and linearly independent
every vector space has a basis
#### dimension
the number of element in a basis of a subspace is the dimension of that subspace

### subspaces
a subset $U$ of $V$ is a subspace if it is also a vector space with the same identity, addition and scalar multiplication as $V$
every subspace of a finite dimensional vector space is finite dimensional
$$\dim U\leq\dim V$$
#### sum of subspaces
let $V_{1},\cdots V_{n}$ be subspaces of $V$ $$\sum\limits_{k=1}^{n}V_{k}=\left\{  \sum\limits_{k=1}^{n}v_{k}:v_{i}\in V_{i}\forall i\leq n  \right\}$$
$$\dim(V_{1}+V_{2})=\dim V_{1}+\dim V_{2} - \dim(V_{1}\cap V_{2})$$
##### direct sum
the sum $\sum\limits_{k=1}^{n}V_{k}$ is a direct sum $\iff \left( \vec{0}=\sum\limits_{k=1}^{n}v_{k} \iff v_{k}=\vec{0}\forall k\leq n \right)$
let $U,W$ be subspaces of $V$ then $U\oplus W\iff U\cap W=\{ \vec{0} \}$

let $U$ be a subspace of $V$ a finite dimensional vector space, then $\exists$ subspace $W$ of $V$ st $$U\oplus W=V$$
### finite dimmensional vector space
a vector space is finite dimmensional $\iff \exists$ finite generating set
### isomorphic vector spaces
2 vector spaces are isomorphic if $\exists$ isomorphisms form one onto the other
2 finite dimensional vector spaces are isomorphic $\iff$ they have the same dimension
### product of vector spaces
let $V_{1},V_{m}$ be vector space over $\mathbb{F}$, then the product $$V_{1}\times \cdots\times V_{m}=\{ (v_{1},\cdots,v_{m}):v_{k}\in V_{k}\forall k\leq m \}$$
addition on product is defined by $$(u_{1},\cdots,u_{m})+(v_{1},\cdots,v_{m})=(u_{1}+v_{1},\cdots,u_{m}+v_{m})$$
scalar multiplication on product is defined by $$\lambda(v_{1},\cdots,v_{m})=(\lambda v_{1},\cdots,\lambda v_{m})$$
the product of 2 vector spaces over $\mathbb{F}$ is a vector space over $\mathbb{F}$
$$\dim\left( \prod\limits_{k=1}^{m}V_{k} \right)=\sum\limits_{k=1}^{m}\dim V_{k}$$
### translates
let $v\in V$ and $U\subseteq V$, then a translate $v+U$ is the subset of $V$ defined by $$v+U=\{ v+u:u\in U \}$$
### quotient space
let $U$ be a subspace of $V$, then the quotient space $$V\setminus U=\{ v+U:v\in V \}$$
the quotien space $V\setminus U$ is a vector space where addition is defined as $$(v+U)+(w+U)=(v+w)+U$$
and scalar multiplicaiton is defined as $$\lambda(v+U)=(\lambda v)+U$$$$\dim(V\setminus U)=\dim V-\dim U$$
### dual space
$$V'=\mathcal{L}(V,\mathbb{F}) $$
$$\dim V'=\dim V$$
### dual basis
let $v_{1},\cdots,v_{n}$ be a basis of $V$, then the dual basis is the list $\varphi_{1},\cdots,\varphi_{n}$ of element of $V'$ st $$\varphi_{j}(v_{k})=\delta_{j,k}$$
where $\delta_{j,k}$ is the kronicker delta function
the dual basis of a basis of $V$ is a basis of $V'$

### annihilator
let $U\subseteq V$, the annihilator of $U$ is defined as $$U^{0}=\{ \varphi \in V':\varphi(u)=0\forall u\in U \}$$
$U^{0}$ is a subspace of $V'$
$\dim U^{0}=\dim V-\dim U$
$$U^{0}=\{ \vec{0} \}\iff U=V$$
$$U^{0}=V'\iff U=\{ \vec{0} \}$$
## polynomials
a function $p:\mathbb{F}\to \mathbb{F}$ is a polynomial with coefficient in $\mathbb{F}$ if $\exists a_{0},\cdots, a_{m}\in \mathbb{F}$ st $$p(z)=a_{0}+a_{1}z^{1}+\cdots+a_{m}z^{m} \forall z\in \mathbb{F}$$
$\mathcal{P}(\mathbb{F})$ is the set of polynomial with coefficient in $\mathbb{F}$
$\mathcal{P}(\mathbb{F})$ is an infinite dimensional vector space
### degree
a polynomial is said to have degree $m$ if $\exists a_{0},\cdots, a_{m}\in \mathbb{F}$ with $a_{m}\neq 0$ st $$p(z)=a_{0}+a_{1}z^{1}+\cdots+a_{m}z^{m} \forall z\in \mathbb{F}$$
the polynomial that is exactly $0$ as degree $-\infty$
$\mathcal{P}_{m}(\mathbb{F})$ is the set of polynomial with degree at most $m$
$\mathcal{P}_{m}(\mathbb{F})$ is a finite dimensional vector space
### product
let $p,q\in \mathcal{P}(\mathbb{F})$, then $pq\in \mathcal{P}(\mathbb{F})$ is the polynomial defined by $$(pq)(z)=p(z)q(z)$$
### polynomial of a linear map
let $p \in \mathcal{P}(\mathbb{F})$ be a polynomial given by $$p(z)=a_{0}+a_{1}z^{1}+\cdots+a_{m}z^{m}$$
then $p(T)$ is the operator on $V$ defined by $$p(z)=a_{0}I+a_{1}T^{1}+\cdots+a_{m}T^{m}$$
$$(pq)(T)=p(T)q(T)$$
$$p(T)q(T)=q(T)p(T)$$
### monic polynomial
a monic polynomial is a polynomial whose heighest degree coefficient equals 1
#### minimal polynomial
$\exists!$ monic polynomial $p\in \mathcal{P}(\mathbb{F})$ of smallest degree st $p(T)=0$
this is the minimal polynomial
$\text{deg }p\leq\dim V$
the $0$s of the minimal polynomial of $T$ are the eigenvalues of $T$

## linear maps
a linear map from $V$ to $W$ is a function $T:V\to W$ st the folowing hold:
- $T(u+v)=Tu+Tv\forall u,v\in V$
- $T(\lambda v)=\lambda Tv\forall v\in V,\lambda \in \mathbb{F}$
$\mathcal{L}(V,W)$ is the set of linear map from $V$ to $W$
$\mathcal{L}(V):=\mathcal{L}(V,V)$

$\mathcal{L}(V,W)$ is a vector space where $(S+T)(v)=Sv+Tv$ and $(\lambda T)(v)=\lambda (Tv)$
$\dim\mathcal{L}(V,W)=(\dim V)(\dim W)$

$T(\vec{0})=\vec{0}$
### product of linear maps
let $T\in \mathcal{L}(U,V)$ and $S\in \mathcal{L}(V,W)$ then the product $ST\in \mathcal{L}(U,W)$ is defined by $$(ST)(u)=S(Tu)$$

### null space
$$\text{null } T=\{ v\in V:Tv=\vec{0} \}$$
let $T\in \mathcal{L}(V,W)$ then the null space of $T$ is a subspace of $V$
### injective
a linear map $T$ is injective $\iff(Tu=Tv\implies u=v)\iff\text{null }T=\{ \vec{0} \}$ 
### range
$$\text{range }T=\{ Tv:v\in V \}$$
the range of $T$ is a subspace of $W$
### surjective
a linear map $T$ is surjective $\iff\text{range }T=W$
### fundamental theorem of linear maps
$$\dim V=\dim \text{null }T+\dim\text{range }T$$
### matrices
let $n,m$ be non negative integers, then a $m$-by-$n$ matrix $A$ is a rectangular array of element of $\mathbb{F}$ with $m$ rows and $n$ columns : $$A=\begin{bmatrix}
A_{1,1}&\cdots &A_{1,n} \\
 & \ddots  \\ 
A_{m,1}&\cdots &A_{m,n}
\end{bmatrix}$$
$\mathbb{F}^{m,n}$ is the set of all $m$-by-$n$ matrices with coefficient in $\mathbb{F}$
$\mathbb{F}^{m,n}$ is a vector space of dimension $mn$
#### matrix of a linear map
let $T\in \mathcal{L}(V,W)$, $v_{1},\cdots v_{n}\in V$ be a basis of $V$ and $w_{1},\cdots,w_{m}\in W$ be a basis of $W$ then the matrix of $T$ with respect to those basis is the $n$-by-$m$ matrix $\mathcal{M}(T)$ whose entry $A_{j,k}$ are defined by $$Tv_{k}=A_{1,k}w_{1}+\cdots+A_{m,k}w_{m}$$
#### addition and scalar multiplication of matrices
$$\begin{bmatrix} A_{1,1}&\cdots &A_{1,n} \\ & \ddots  \\ A_{m,1}&\cdots &A_{m,n}\end{bmatrix}+\begin{bmatrix} C_{1,1}&\cdots &C_{1,n} \\ & \ddots  \\ C_{m,1}&\cdots &C_{m,n}\end{bmatrix}=\begin{bmatrix} A_{1,1}+C_{1,1}&\cdots &A_{1,n}+C_{1,n} \\ & \ddots  \\ A_{m,1}+C_{m,1}&\cdots &A_{m,n}+C_{m,n}\end{bmatrix}$$
$$\mathcal{M}(T+S)=\mathcal{M}(T)+\mathcal{M}(S)   $$
$$\lambda \begin{bmatrix} A_{1,1}&\cdots &A_{1,n} \\ & \ddots  \\ A_{m,1}&\cdots &A_{m,n}\end{bmatrix}=\begin{bmatrix} \lambda A_{1,1}&\cdots &\lambda A_{1,n} \\ & \ddots  \\ \lambda A_{m,1}&\cdots &\lambda A_{m,n}\end{bmatrix}$$
$$\mathcal{M}(\lambda T)=\lambda \mathcal{M}(T)  $$
#### matrix multiplication
let $A$ be an $m$-by-$n$ matrix and $B$ an $n$-by-$p$ matrix, then $AB$ is the $m$-by-$p$ matrix defined by $$(AB)_{j,k}=\sum\limits_{r=1}^{n}A_{j,r}B_{r,k}$$
$$\mathcal{M}(ST)=\mathcal{M}(S)\mathcal{M}(T)   $$
#### column rank
the column rank of a matrix $A$ is the dimension of the span of the columns of $A$ in $\mathbb{F}^{m,1}$
#### row rank
the row rank of a matrix $A$ is the dimension of the span of the rows of $A$ in $\mathbb{F}^{1,n}$
the row rank equals the column rank
#### transpose
$$(A^{T})_{k,j}=A_{j,k}$$
#### conjugate transpose
$$(A^{*})_{j,k}=\overline{A_{k,j}}$$
#### rank
the rank of a matrix is the column rank of that matrix
### invertible
a linear map $T\in \mathcal{L}(V,W)$ is invertible if $\exists S\in \mathcal{L}(W,V)$ st $ST$ equals the identity on $V$ and $TS$ equals the indentity on $W$
such a $S$ is called the inverse $T^{-1}$ of $T$ and is unique
a linear is invertible $\iff$ it is injective and surjective
let $V,W$ be finite dimensional vector space with $\dim V=\dim W$ and $T\in \mathcal{L}(V,W)$ then 
$T$ is invertible $\iff T$ is surjective $\iff T$ is injective
### isomorphism
an isomorphism is an invertible linear map
let $n =\dim V,m=\dim W$, then $\mathcal{M}$ is an isomorphism between $\mathcal{L}(V,W)$ and $\mathbb{F}^{m,n}$
### quotient map
let $U$ be a subspace of $V$, then the quotient map $\pi:V\to V\setminus U$ is the linear map defined by $$\pi(v)=v+U$$
###
let $T\in \mathcal{L}(V,W)$ define $\tilde{T}:V\setminus(\text{null }T)\to W$ by $$\tilde{T}(v+\text{null }T)=Tv$$
$$\tilde{T}\circ \pi=T$$
$\tilde{T}$ is injective
$\text{range }\tilde{T}=\text{range }T$
$V\setminus(\text{null }T)$ and $\text{range }T$ are isomorphic vector spaces
### linear functional
a linear functional on $V$ is a linear map from $V$ to $\mathbb{F}$
### dual maps
let $T\in \mathcal{L}(V,W)$, the dual map $T'\in \mathcal{L}(W',V')$ is defined $\forall \varphi \in W'$ by $$T'(\varphi)=\varphi \circ T$$
$$(S+T)'=S'+T'$$
$$(\lambda T)'=\lambda T'$$
$$(ST)'=S'T'$$
$$\text{null }T'=(\text{range T})^{0}$$
$$\dim \text{null }T'=\dim\text{null }T+\dim W-\dim V$$
$T$ is surjective $\iff T'$ is injective
$$\dim \text{range }T'=\dim\text{range }T$$
$$\text{range }T'=(\text{null }T)^0$$
$T$ is injective $\iff T'$ is surjective
$$\mathcal{M}(T')=(\mathcal{M}(T) )^{t} $$
### operator
a linear map from a vector space to itself is called an operator
### invariant subspaces
let $T\in \mathcal{L}(V)$, a subspace $U$ of $V$ is invariant under $T$ if $Tu\in U\forall u\in U$
### eigenvalue
a number $\lambda \in \mathbb{F}$ is an eigenvalue of $T$ if $\exists v\in V$  st $v\neq 0\land Tv=\lambda v$
such a vector $v$ is called an eigenvector
the folowing are equivalent:
- $\lambda$ is an eigenvalue of $T$
- $T-\lambda I$ is not injective
- $T-\lambda I$ is not surjective
- $T-\lambda I$ is not invertible
$T$ has at most $\dim V$ distinct eigenvalues
every operator of a finite dimensional non zero complex vector space has an eigenvalue
## inner product spaces
an inner product on a vector space $V$ is a function $\langle,\rangle:V\times V\to \mathbb{F}$ st the folowing hold:
- $\langle \vec{f},\vec{f}\rangle\in[0,\infty)\forall \vec{f}\in V$
- $\langle \vec{f},\vec{f}\rangle=0\iff \vec{f}=\vec{0}$
- $\langle \vec{f}+\vec{g},\vec{h}\rangle=\langle \vec{f},\vec{h}\rangle+\langle \vec{g},\vec{h}\rangle\land \langle \alpha \vec{f},\vec{g}\rangle=\alpha \langle \vec{f},\vec{g}\rangle\forall \vec{f},\vec{g},\vec{h}\in V,\alpha \in \mathbb{F}$
- $\langle \vec{f},\vec{g}\rangle=\overline{\langle \vec{g},\vec{f}\rangle}\forall \vec{f},\vec{g}\in V$
a vector space with an inner product is an inner product space
$\langle \vec{g},\vec{0}\rangle=\langle \vec{0},\vec{g}\rangle=0\forall g\in V$
$\langle \vec{f},\vec{g}+\vec{h}\rangle=\langle \vec{f},\vec{g}\rangle+\langle \vec{f},\vec{h}\rangle\forall \vec{f},\vec{g},\vec{h}\in V$
$\langle \vec{f},\alpha \vec{g}\rangle=\bar{\alpha}\langle \vec{f},\vec{g}\rangle\forall \vec{f},\vec{g}\in V,\alpha \in \mathbb{F}$
### norm
$$||\vec{f}||=\sqrt{ \langle \vec{f},\vec{f}\rangle }$$
### orthogonality
$\vec{f}$ and $\vec{g}$ are orthogonal $\iff \langle \vec{f},\vec{g}\rangle=0$
### pythagorean theorem
let $\vec{f},\vec{g}$ be orthogonal vectors, then $$||\vec{f}+\vec{g}||^{2}=||\vec{f}||^{2}+||\vec{g}||^{2}$$

### cauchy schwarz inequality
$$|\langle \vec{f},\vec{g}\rangle|\leq ||\vec{f}||\cdot||\vec{g}||$$
### triangle inequality
$$||\vec{f}+\vec{g}||\leq ||\vec{f}||+||\vec{g}||$$
### paralelogram equality
$$||\vec{f}+\vec{g}||^{2}+||\vec{f}-\vec{g}||^{2}=2||\vec{f}||^2+2||\vec{g}||^2$$
### orthonormal family
a family $\{ e_{k} \}_{k\in \Gamma}$ in an inner product space is an orthonormal family $\iff$ $$\langle e_{i},e_{j}\rangle=\delta_{i,j}$$
where $\delta_{i,j}$ is the kroniker delta fucntion
### orthonormal basis
an orthonormal family $\{ e_{k} \}_{k\in \Gamma}$ is an orthonormal basis $\iff$ $$\overline{\text{span}\{ e_{k} \}_{k\in \Gamma}}=V$$
every finite dimensional inner product space has an orthonormal basis
### riesz representation theorem
let $V$ be a finite dimensional and $\varphi$ a linear functional on $V$, then $\exists!v\in V$ st $$\varphi(u)=\langle u,v\rangle\forall u\in V$$
### orthogonal complement
the orthogonal complement of $U$ is defined as $U^{\perp}=\{ \vec{h}\in V:\langle \vec{g},\vec{h}\rangle=0\forall \vec{g}\in U \}$
$$\{ \vec{0} \}^{\perp}=V$$
$$V^\perp=\{ \vec{0} \}$$
if $U$ is a subset of $V$ then $U\cap U^\perp \subseteq \{ \vec{0} \}$
if $G,H$ are subsets of $V$ and $G\subseteq H$, then $G^{\perp}\subseteq H^\perp$
let $U$ be a finite dimensional subspace of $V$, then $U\oplus U^\perp=V$
$$\dim U^{\perp}=\dim V-\dim U$$
$$U=(U^{\perp})^\perp$$
$$U^{\perp}=\{ 0 \}\iff U=V$$
### orthogonal projection
let $U$ be a finite dimensional subspace of $V$, the orthogonal projection of $V$ onto $U$ is the operator $P_{U}\in \mathcal{L}(V)$ defined as follows: $\forall v\in V$ write $v=u+w$ where $u\in U\land w\in U^\perp$ , then let $P_{U}v=u$
### pseudo inverse
let $V$ be a finite dimensional vector space and $T\in \mathcal{L}(V,W)$, the pesudoinverse $T^{\dagger}\in \mathcal{L}(W,V)$ of $T$ is the linear map from $W$ to $V$ defined by $$T^{\dagger}w=(T|_{(\text{null }T)^\perp})^{-1}P_{\text{range }T}w$$
### adjoints
the adjoint of $T$ is the function $T^{*}:W\to V$ such that $$\langle Tv,w\rangle=\langle v,T^{*}w\rangle$$
### self ajoint operator 
an operator $T$ is self adjoint if $T=T^{*}$
every eigenvalue of a self adjoint operator are real
### normal operators
an operator $T$ is normal if $T^{*}T=TT^{*}$
### positive operators
an operator $T$ is positive if it is self adjoint and $$\langle Tv,v\rangle\geq 0$$
### square root
an operator $R$ is the square root of an operator $T$ if $R^{2}=T$
$\forall$ positive operator $T$ on $V \exists !$ positive $R$ st $R^2=T$ 
### isometry
$T$ is an isometry if $||T\vec{f}||=||\vec{f}||\forall \vec{f}\in V$
### unitary operator
$T$ is unitary if $T^{*}T=TT^{*}=I$
### positive definite matrices
a matrix $B\in \mathbb{F}^{n,n}$ is positive definite if $B^{*}=B$ and $$\langle Bx,x\rangle>0$$
### norm of a linear map
let $T\in \mathcal{L}(V,W)$  then $$||T||=\max\{ ||Tv||:v\in V\land ||v||\leq 1 \}$$
### nilpotent operator
an operator $T$ is nilpotent if $\exists p$ st $T^p=0$
## [[multilinear algebra]]