---
abstract: the study of vector and linear maps
---
| precursors | [[elementary algebra]] |
| ---------- | ---------------------- |
| status:    | #learnt                |
| #tags      |                        |
| level      | #college               |
| type       | #                      |
# #english-note 
## solving equations
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





## vectors
### vector addition
$$let\ \vec{v}=\begin{bmatrix}a_{1}\\ \vdots\\ a_{n}
\end{bmatrix} \land  \vec{u}=\begin{bmatrix}b_{1}\\ \vdots\\ b_{n}

\end{bmatrix}$$
$$\vec{v}+\vec{u}=\begin{bmatrix}a_{1}+b_{1}\\ \vdots\\ a_{n}+b_{n}

\end{bmatrix}$$
### scalar multiplication
$$let\ \vec{v}=\begin{bmatrix}a_{1}\\ \vdots\\ a_{n}
\end{bmatrix} \land x\in \mathbb{R}$$
$$x\vec{v}=\begin{bmatrix}xa_{1}\\ \vdots\\ xa_{n}
\end{bmatrix}$$
### span
$$span(\vec{v},\vec{u},\cdots, \vec{w})=\{\vec{x}:a\vec{v}+b\vec{u}+\cdots+c\vec{w} , st \ a,b,\cdots, c\in \mathbb{R}\}$$
#### linear dependence
$\vec{v}$ and $\vec{u}$ are linearly dependent $\iff$ $span(\vec{v},\vec{u})=span(\vec{v})\lor span(\vec{v},\vec{u})=span(\vec{u})$
otherwise they are linearly independent
#### basis
a basis of a vector space $V$ is a set $B$ st, $B$ is linearly dependent $\land\ span(B)=V$ 
##### change of basis

### dot product
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

### cross product
vector whose length is the area of the parallelogram made by two vector and which is perpendicular to those two vectors

anti-commutative
$\hat{i} \times \hat{j}=\hat{k}$
$$|\begin{bmatrix}a \\
b \\
c
\end{bmatrix} \times \begin{bmatrix}d \\

e \\
f
\end{bmatrix}|=\det\left(\begin{bmatrix}\hat{i} & a & d\\
\hat{j} & b & e \\
\hat{k} & c & f

\end{bmatrix}\right)=\hat{i}(bf-ce)+\hat{j}(cd-af)+\hat{k}(ae-bd) =\begin{bmatrix}bf-ce \\
cd-af \\
ae-bd

\end{bmatrix}$$



## matrices
$$M:V_{1}\to V_{2}\ $$
st:
- $M \vec{0}=\vec{0}$
- $M(\vec{v}+\vec{w})=M\vec{v}+M \vec{w}$
- $M(c \vec{v})=cM \vec{v}$


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
$$\det M=\sum_{j=1}^{n}(-1)^{1+j} M_{1,j}\det(\tilde{M}_{1,j})$$
where$\tilde{M}_{i,j}$ is an $(n-1)(n-1)$ matrix obtained from $M$ by deleting the $i$th row and the $j$th column
#### properties of the determinant
$$\det(A^T)=\det(A)$$
$$\det(AB)=\det(A)\det(B)$$

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

### eigenvector
$\vec{v}$ is an eigenvector of $M \iff span(\vec{v})=span(M \vec{v})$

#### eigenvalue
for a given eigenvector $\vec{v}$ : $\lambda \vec{v}=M \vec{v}$

##### solving for eigenvector and eigenvalues

$$M\vec{v}=(\lambda I)\vec{v}$$
$$(M-\lambda I)\vec{v}=\vec{0}$$
we need to find$$\det(M-\lambda I)=0$$
$tr(M)=\lambda_{1}+\lambda_{2}$
$\det(M)=\lambda_{1}\lambda_{2}$
$\lambda_{1},\lambda_{2}=\frac{tr(M)}{2} \pm \sqrt{ \frac{tr(M)}{2}-\det (M) }$



###### for diagonal matrices
each basis is an eigenvector with an eigenvalue equal to the diagonal entries of the matrix
