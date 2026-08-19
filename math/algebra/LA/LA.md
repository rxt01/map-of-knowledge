---
abstract: the study of vector and linear maps
---
|            | I                      | II        |
| ---------- | ---------------------- | --------- |
| precursors | [[elementary algebra]] |           |
| #tags      |                        |           |
| level      | #college               | #bachelor |

# #english-note 
## solving equations
### two variables and equations
$$\begin{align}
ax + by = u ,\\
cx + dy = v.
\end{align}$$
$$\begin{align}
c(ax+by)=cu\\
a(cx+dy)=av
\end{align}$$
$$cax+cby-(acx+ady)=cu-av$$
$$bcy-ady=cu-av$$
$$(bc-ad)y=cu-av$$
$$y=\frac{cu-av}{bc-ad}$$
$$\begin{align}
d(ax+by)=du\\
b(cx+dy)=bv
\end{align}$$
$$dax+dby-(bcx+bdy)=du-bv$$
$$dax-bcx=du-bv$$
$$(ad-bc)x = du-bv$$
$$x=\frac{du-bv}{ad-bc}=\frac{bv-du}{bc-ad}$$
### more
#### elementary operations on matrices
permute two lines
multiply a line by a non zero scalar
add a multiple of a line to another line


#### RREF matrices
a matrix is RREF $\iff$
- $\forall$non empy line, the first non zero element is a 1
- in the colone of the first non zero element of a line all other  elements are 0
- the first non zero element is rightward from the one of the previous line
- all empty lines are bellow the non empty ones

#### pivot column
column of the first non zero element of a line in RREF matrices
#### L equivalent matrices
$A\sim B$ if $B$ can be obtained frome finitely many elementary operations on $A$
$A\sim B\implies r(A)=r(B)$
#### gauss jordan reduction algorithm
1. find the first non zero row
2. consider $a_{rk}$ the fisrt non zero element of that row, transforme its column in pivot column by 
	1. $$R_{1}'\leftarrow\left( \frac{1}{a_{rk}}R_{1} \right)$$
	2. $$\forall i\ne r,\ a_{ik}\ne0 , R_{i}'\leftarrow(R_{i}-a_{ik}R_{l})$$
3. go to the next non zero row and do the second step until there are only empty rows left to check
4. rearange rows st
	1. all empty rows are at the end
	2. the first non empty element of each rows is rightward of the one from the previous row
#### REF matrices
a matrix is REF $\iff$
-  the first non zero element is rightward from the one of the previous line
- all empty lines are bellow the non empty ones
#### gauss jordan resolution method
let $$A=\begin{bmatrix}
a_{1,1}& \cdots & a_{1,n}&c_{1} \\
\vdots&&\vdots\ &\ \vdots \\
a_{m,1}&\cdots&a_{m,n}&c_{m}
\end{bmatrix}$$
be the augmented matrix of the linear equations system
and let $A'$ be the RREF matrix of $A$, then the solutions of the original system are the same as that of the system represented by $A'$


## vectors
### absolute value
$$let\ \vec{v}=\begin{bmatrix}a_{1}\\ \vdots\\ a_{n}
\end{bmatrix} $$
$$||\vec{v}||=(a_1+\cdots+a_n)^{\frac{1}{2}}$$
### vector addition
$$let\ \vec{v}=\begin{bmatrix}a_{1}\\ \vdots\\ a_{n}
\end{bmatrix} \land  \vec{u}=\begin{bmatrix}b_{1}\\ \vdots\\ b_{n}

\end{bmatrix}$$
$$\vec{v}+\vec{u}=\begin{bmatrix}a_{1}+b_{1}\\ \vdots\\ a_{n}+b_{n}

\end{bmatrix}$$
### scalar multiplication
$$let\ \vec{v}=\begin{bmatrix}a_{1}\\ \vdots\\ a_{n}
\end{bmatrix} \land x\in \mathbb{C}$$
$$x\vec{v}=\begin{bmatrix}xa_{1}\\ \vdots\\ xa_{n}
\end{bmatrix}$$
### span
$$span(\vec{v},\vec{u},\cdots, \vec{w})=\{\vec{x}:a\vec{v}+b\vec{u}+\cdots+c\vec{w} , st \ a,b,\cdots, c\in \mathbb{C}\}$$
the span of a subset is a subspace
#### linear dependence
$\vec{v}$ and $\vec{u}$ are linearly dependent $\iff$ $span(\vec{v},\vec{u})=span(\vec{v})\lor span(\vec{v},\vec{u})=span(\vec{u})$
otherwise they are linearly independent
#### basis
a basis of a vector space $V$ is a set $B$ st, $B$ is linearly dependent $\land\ span(B)=V$ 
##### change of basis

### dot product
in $\mathbb{R}^n$:
$$\begin{bmatrix}a_{1} \\
\vdots \\
a_{n}

\end{bmatrix}\cdot \begin{bmatrix}b_{1} \\
\vdots \\
b_{n}

\end{bmatrix}=\begin{bmatrix}a_{1}\cdots a_{n}

\end{bmatrix}\begin{bmatrix}b_{1} \\
\vdots \\
b_{n}

\end{bmatrix}=\sum_{k=1}^na_{k}b_{k}$$
in $\mathbb{C}^{n}$: $$\vec{u}\cdot\vec{v}=\vec{u}^{\dagger}\vec{v}$$

### orthogonal projection
$$\vec{v}_{\vec{u}}=\frac{\vec{v}\cdot\vec{u}}{\vec{u}\cdot \vec{u}}\vec{u}$$

### cross product
vector whose length is the area of the parallelogram made by two vector and which is perpendicular to those two vectors

anti-commutative
$\hat{i} \times \hat{j}=\hat{k}$
$$\begin{bmatrix}a \\
b \\
c
\end{bmatrix} \times \begin{bmatrix}d \\

e \\
f
\end{bmatrix}=\det\left(\begin{bmatrix}\hat{i} & a & d\\
\hat{j} & b & e \\
\hat{k} & c & f

\end{bmatrix}\right)=\hat{i}(bf-ce)+\hat{j}(cd-af)+\hat{k}(ae-bd) =\begin{bmatrix}bf-ce \\
cd-af \\
ae-bd

\end{bmatrix}$$

### mixt product
$$\begin{bmatrix}a \\
b \\
c
\end{bmatrix} \times \begin{bmatrix}d \\

e \\
f
\end{bmatrix}\cdot \begin{bmatrix}
g \\
h \\
i
\end{bmatrix}=\det\left(\begin{bmatrix} a & d & g\\
b & e & h\\
 c & f & i

\end{bmatrix}\right)$$


## matrices
$$M:V_{1}\to V_{2}\ $$
st:
- $M \vec{0}=\vec{0}$
- $M(\vec{v}+\vec{w})=M\vec{v}+M \vec{w}$
- $M(c \vec{v})=cM \vec{v}$

### particular matrices
#### identity
$$\mathbb{1}_{n\times n}=\begin{bmatrix}
1&0 &\cdots&0 \\
0&1&\cdots&0 \\
\vdots \\
0&0&\cdots&1
\end{bmatrix} $$
#### diagonal
$$\exists \alpha \in \mathbb{C}st\ \alpha A_{n\times n}=\mathbb{1}_{n\times n} $$
#### upper triangular
$$\forall i>j\ a_{ij}=0$$
##### unipotent
$$a_{ii}=1$$
#### lower triangular
$$\forall i<j\ a_{ij}=0$$
##### unipotent
$$a_{ii}=1$$
#### symetric
$$A=A^{\intercal}$$
#### antisymetric
$$a_{ij}=-a_{ji}$$
#### orthogonal
$$AA^{\intercal}=A^{\intercal}A=\mathbb{1} $$
#### unitary
$$AA^{\dagger}=A^{\dagger}A=\mathbb{1} $$
#### permutation
orthogonal matrix whose elements are all 0 or 1
#### orthonormal
orthogonal matrix whose rows and columns are vectors of length 1
#### special linear
$n\times n$ matrix with a determinant of 1
#### special orthogonal
special linear matrix that is orthogonal
#### special unitary
special linear matrix that is unitary
#### normal
$$AA^{\dagger}=A^{\dagger}A$$
#### hermitian
$$A^{\dagger}=A$$

### opperations
#### transpose
$$a^{\intercal}_{ij}=a_{ji}$$
$(A+B)^{\intercal}=A^{\intercal}+B^{\intercal}$
$(\alpha A)^{\intercal}=\alpha A^{\intercal}$
$(A^{\intercal})^{\intercal}=A$
#### scalar multiplication
$$a_{ij}'=\alpha a_{ij}$$
scalar multiplication is linear
#### sum of matrices
$$c_{ij}=a_{ij}+b_{ij}$$

### matrix vector multiplication
$$\begin{bmatrix}a_{1,1} &\cdots & a_{1,m} \\
\vdots & \vdots & \vdots \\
a_{n,1} & \cdots & a_{n,m} 

\end{bmatrix} \begin{bmatrix}b_{1} \\
\vdots \\
b_{m}

\end{bmatrix}=
\sum_{k=1}^m
b_{k}\begin{bmatrix} a_{1,k} \\
\vdots \\
a_{n,k}

\end{bmatrix}=\begin{bmatrix}\sum_{k=1}^m a_{1,k}b_{k}\\
\vdots \\
\sum_{k=1}^m a_{n,k}b_{k}

\end{bmatrix}$$
### matrix matrix multiplication
multiplication is right to left
multiplication is associative
$$\begin{bmatrix}a_{1,1} &\cdots & a_{1,m} \\
\vdots& \vdots& \vdots \\
a_{n,1}& \cdots & a_{n,m} 

\end{bmatrix} \begin{bmatrix}b_{1,1} &\cdots & b_{1,k} \\
\vdots & \vdots & \vdots \\
b_{m,1} &\cdots & b_{m,k} 

\end{bmatrix}= \begin{bmatrix}\left( \sum_{p=1}^m a_{1,p}b_{p,1} \right)&\cdots& \left( \sum_{p=1}^m a_{1,p}b_{p,k}\right)\\
\vdots &\vdots &\vdots \\
\left( \sum_{p=1}^m a_{n,p}b_{p,1} \right)&\cdots &\left( \sum_{p=1}^m a_{n,p}b_{p,k}\right)

\end{bmatrix}$$
$let\begin{bmatrix}\vec{v}\cdots \vec{u}\end{bmatrix}$ be a matrix st, $\hat{i}\begin{bmatrix}\vec{v}\cdots \vec{u}\end{bmatrix}=\vec{v}$ etc
then
$$M\begin{bmatrix}\vec{v}\cdots\vec{u}

\end{bmatrix}=\begin{bmatrix}M\vec{v}\cdots M \vec{u} 

\end{bmatrix}$$
### determinant
represent the amount by which areas are scaled after a transformation for 2d transformations, the amount by which volumes are scaled after a transformation for 3d and in general the amount by which a hypervolume of n dimension is scaled for a nd transformation
a negative value means that the space is fliped
a determinant of 0 means that the collumns of the matrix are linearly dependents
$$\det \begin{bmatrix}a& b \\
c& d

\end{bmatrix}=ad-bc$$
for $M$ being an $n \times n$ matrix:
$$\det M=\sum_{j=1}^{n}(-1)^{1+j} m_{1,j}\det(\tilde{M}_{1,j})$$
where$\tilde{M}_{i,j}$ is an $(n-1)(n-1)$ matrix obtained from $M$ by deleting the $i$th row and the $j$th column
$$\det A\neq 0 \iff \exists A^{-1}$$
$$\det \mathbb{1}=1 $$

#### properties of the determinant
$$\det(A^T)=\det(A)$$
$$\det(AB)=\det(A)\det(B)$$
#### lewis carol identity
<!---- TODO--->
### trace
$$tr\left(\begin{bmatrix} a_{1,1}& \cdots& a_{1,n} \\
\vdots& \vdots& \vdots \\
a_{n,1}&\cdots &a_{n,n}


\end{bmatrix}\right)=\sum_{k=1}^{n}a_{k,k}$$


### rank
number of dimension of the image of the matrix
### column space
image of the transformation
span of the columns of the matrix

### null space 
ie kernel
$\{\vec{x}:M \vec{x}=\vec{0}\}$
$\text{ker}(M)$ is a subspace
### cofactor matrix
$$a_{cof_{ij}}=(-1)^{i+j}\det\tilde{M}_{i,j}$$
### adjoint matrix
$$adj(A)=(cof(A))^{\intercal}$$

### hermitian conjugate
$$A^{\dagger}=\overline{A^{\intercal}} $$
### 2d rotation matrices
$$R_{\theta}=\begin{bmatrix}
\cos \theta&-\sin \theta \\
\sin \theta&\cos \theta
\end{bmatrix}$$

### inverses
$A$ is invertible $\iff$ $\det(A)\neq0$

#### gauss jordan inversion method
take $(A|\mathbb{1})$, use the jordan reduction algorithm to arive at $(\mathbb{1}|A^-1)$
#### adjointe matrix inversion method
$$A^{-1}=\frac{1}{\det A}adj(A)$$

### eigenvector
$\vec{v}$ is an eigenvector of $M \iff span(\vec{v})=span(M \vec{v})$

#### eigenvalue
for a given eigenvector $\vec{v}$ : $\lambda \vec{v}=M \vec{v}$
all $\lambda_{i}\in \mathbb{C}$

##### solving for eigenvector and eigenvalues

$$M\vec{v}=(\lambda \mathbb{1} )\vec{v}$$
$$(M-\lambda \mathbb{1} )\vec{v}=\vec{0}$$
we need to find$$\det(M-\lambda \mathbb{1} )=0$$
$tr(M)=\lambda_{1}+\lambda_{2}$
$\det(M)=\lambda_{1}\lambda_{2}$
$\lambda_{1},\lambda_{2}=\frac{tr(M)}{2} \pm \sqrt{ \frac{tr(M)}{2}-\det (M) }$



###### for diagonal matrices
each basis is an eigenvector with an eigenvalue equal to the diagonal entries of the matrix
### characteristic polynomial 
let $M$ be an $n\times n-$matrix
the characteristic polynomial of $M$ is $$\chi_{M}(x):=\det(M-x\mathbb{1} )$$
the eigenvalues of $M$ are exactly the roots of the characteristic polynomial of $M$

### LDPU factorization
L matrix: lower triangular unipotent matrix
D matrix: invertible diagonal matrix
P matrix: partial permutation matrix
U matrix: upper triangular unipotent matrix
$\forall A_{n\times n}$ can be expressed as $$A=LDPU$$
### matrix exponential
$$e^{A}=\mathbb{1}+ \sum\limits_{n=1}^{\infty} \frac{1}{n!}A^{n}$$

## vector spaces
let $V$ be a $\mathbb{C}-$[vector space](abstract%20LA.md#vector%20spaces)
the opposite vector is unique ie. $\vec{u}+\vec{v}=\vec{v}+\vec{u}=\vec{0}=\vec{v}+\vec{w}=\vec{w}+\vec{v} \implies \vec{u}=\vec{w}$
every vector space has a basis
### subspace
a subset $W$ of $V$ is a subspace provided that
- $\vec{0}\in W$
- $x+y\in W\forall x,y\in W$
- $\lambda x\in W\forall \lambda\in \mathbb{C},x\in W$
#### trivial
$V$ and $\{ \vec{0} \}$ are trivial subspaces

### linear combination
let $\vec{v}_{1},\vec{v_{2}},\cdots,\vec{v}_{n}\in V$
let $\lambda_{1},\lambda_{2},\cdots,\lambda_{n}\in \mathbb{C}$
then $\lambda_{1}\vec{v}_{1}+\lambda_{2}\vec{v}_{2}+\cdots+\lambda_{n}\vec{v}_{n}$ is a linear combination

### finitely generated vector spaces
$V$ is finitely generated if $\exists B\subset V$ st. $|B|<\infty \land \text{span}(B)=V$


#### coordinates
let $V$ be a finitely generated vector space
let $v=\{ \vec{v}_{1},\vec{v}_{2},\cdots, \vec{v}_{k}\}$ be a basis of $V$
$\forall x\in V$ $\exists!(\lambda_1,\lambda_{2},\cdots,\lambda_{k})\in \mathbb{C}\times^k\mathbb{C}$ st. $$x=\lambda_{1}\vec{v}_{1}+\lambda_{2}\vec{v}_{2}+\cdots+\lambda_{k}\vec{v}_{k}$$
these are the coordinates of $x$ w.r.t the basis $v$
##### coordinate map
$$[\_]_{v}\in GL(k,\mathbb{C} ):V\to \mathbb{C}^k$$
the coordinate map is a bijective linear map ie. it's a $k\times k$ invertible matrix
### dimension
the number of element in a basis of the vector space $V$ is the dimension of $V$

let $V$ be an $\mathbb{F}_{p}$ vector field where $p$ is a prime, then $$|V|=p^{\dim V}$$

### change of basis
let $V$ be a vector space
let $v$ be a basis of $V$
let $w$ be a basis of V

the transformation matrix from $v$ to $w$ $$T_{v}^w=\left(\begin{matrix}
|  & | & \cdots & |  \\
[w_{1}]_{v} & [w_{2}]_{v} & \cdots & [w_{k}]_{v} \\
|  & | & \cdots & | 
\end{matrix}\right)$$
the transformation matrix is invertible
$$[x]_{v}=T_{v}^w[x]_{w}$$
$$T_{w}^v=(T_{v}^w)^{-1}$$
### affine spaces
an affine space on a vector space $\mathcal{V}$ consistes of a set $\mathcal{A}$ of points and of an operration $+:\mathcal{A}\times \mathcal{V}\to \mathcal{A}$ st:
- $\forall A,B\in \mathcal{A} \exists! \vec{v}\in \mathcal{V}st\ A+\vec{v}=B$
- $\forall B\in \mathcal{A},\vec{v}\in \mathcal{V}\exists!A\in \mathcal{A}st\ A+\vec{v}=B$
- $A+(\vec{u}+\vec{v})=(a+\vec{u})+\vec{v}$
## euclidean space
### inner product
a map $\langle\_,\_\rangle:V\times V\to \mathbb{C}$ is an inner product provided that
- $\langle x,y\rangle=\overline{\langle y,x\rangle} \forall x,y\in V$
- $\langle x,0\rangle=\langle 0,x\rangle=0\forall x \in V$
- $\langle \alpha x+\beta y,z\rangle=\alpha\langle x,z\rangle+\beta\langle y,z\rangle \forall x,y,z \in V,\alpha,\beta \in \mathbb{C}$
- $\langle x,\alpha y+\beta z\rangle=\overline{\alpha}\langle x,y\rangle+\overline{\beta}\langle x,z\rangle \forall x,y,z\in V,\alpha,\beta \in \mathbb{C}$
- $\langle x,x\rangle \geq 0\forall x \in V$ $\langle x,x\rangle>0\forall 0\ne x \in V$
### euclidean space
an euclidean space is a paire $\mathbb{E}:=(V,\langle \_,\_\rangle)$ where $V$ is a vector space and $\langle \_,\_\rangle$ is an inner product on $V$
### geometry of an euclidean space
for $v\in \mathbb{E}$ the norm of $v$ is defined as $|v|:=\sqrt{ \langle v,v\rangle }$
for non zero $x,y \in \mathbb{E}$ the angle $\varphi$ between $x$ and $y$ is defined via $\cos \varphi:=\frac{\langle x,y\rangle}{|x||y|}$
two elements $x,y \in \mathbb{E}$ are orthogonal provided that $\langle x,y\rangle=0$
$$|x+y| \le |x|+|y|\ \forall x,y \in \mathbb{E} $$
$$|\langle x,y\rangle|\leq|x||y|$$
### orthonormal basis
a basis $e=(e_{1},e_{2},\cdots,e_{k})$ of $\mathbb{E}$ is orthonormal if  $\langle e_{i},e_{j}\rangle=\delta_{ij}$
every finite dimensional euclidean space has an orthonormal basis
$$\forall v\in \mathbb{E},\ v=\sum_{i=1}^k \langle v,e_{i}\rangle e_{i}$$
$$\forall v,y\in \mathbb{E},\ \langle v,w\rangle =\sum_{i=1}^k\langle v,e_{i}\rangle \langle w,e_{i}\rangle  $$
### orthogonal complement
the orthogonal complement of $V$ is:$$V^\perp:=\{ w\in \mathbb{E}|\langle w,v\rangle =0\ \forall v\in V  \}$$
$\vec{0}\in V^\perp$
$V^\perp$ is a subspace
$V \cap V^\perp=\{ \vec{0} \}$
every $w\in \mathbb{E}$ can be written as $w=x+y$ where $x \in V$ and $y\in V^\perp$
#### orthogonal projection
$w\in \mathbb{E}$ can be written as $w=x+y$ where $x \in V$ and $y\in V^\perp$
the vector $x$ is the orthogonal projection of $w$ onto $V$
$x=\text{pr}_{V}(w)$
#### length
let $v+w=u\in \mathbb{E}$ with $v\in V$ and $w\in V^\perp$
$\forall x \in V$ $|u-x| \ge |u-v|=|w|$
#### distance
the length $|w|$ of $w$ is  the distance from $u$ to $V$ 
### orthogonal matrices
a matrix $A\in \mathbb{C}^{k\times k}$ is orthogonal if $A^tA=\mathbb{I}$
$A^{-1}=A^t$
$A^t$ and $A^{-1}$ are also orthogonal
### isometries
let $F:\mathbb{E}\to \mathbb{E}$ be a linear map
$F$ is an isometry provided that $|F(v)|=|v|$ $\forall v\in \mathbb{E}$

