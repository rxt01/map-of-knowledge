| precursors | [[tensors]] |
| ---------- | ----------- |
| status:    | #tolearn    |
| #tags      |             |
| level      | #           |
# #english-note 
# definition
a rank 1/2 [[tensors]] that is used in quantum mechanic to represent fermions

two full turn in order to get them back where they started


# physics
## neutral particle through magnetic field $\to$ $\ket{\uparrow}$ or $\ket{\downarrow}$
$\ket{\uparrow}$ and $\ket{\downarrow}\ \pi$ rad apart
if two states $\ket{\alpha}$, $\ket{\beta}$ are mutually exclusive, they are orthogonal $\braket{\alpha|\beta}=0$
$\braket{\uparrow|\downarrow}=0$ therefor $\pi$ rad apart.
2 full turns in physical for 1 full turn in state
therefor spinors
$$\ket{\psi}=\alpha\ket{\uparrow}+\beta\ket{\downarrow} $$
$$\psi \to \begin{bmatrix}\alpha\\\beta\end{bmatrix}$$

## light
polarization:
$\pi/2$ rad rotation -> $\pi$ rad + 1/4 cycle shift
half turn in physical -> full turn in polarization
therefor spinors
$$\ket{\psi}=\alpha\ket{\leftrightarrow}+\beta\ket{\updownarrow} $$
$$\psi \to \begin{bmatrix}\alpha\\\beta\end{bmatrix}$$
# square root of vectors
## Pauli matrices
$$\sigma_x = \begin{bmatrix} 0 & 1 \\ 1&0 \end{bmatrix}$$
$$\sigma_y = \begin{bmatrix} 0 & -i \\ +i&0 \end{bmatrix}$$
$$\sigma_z = \begin{bmatrix} 1 & 0 \\ 0&-1 \end{bmatrix}$$
$$tr(\sigma_i)=0$$
$$\sigma_i^\dagger = \sigma_i$$
$$\sigma_i^2 = I$$
$$\sigma_i\sigma_j = -\sigma_j\sigma_i (i\neq j) $$
## Pauli vectors
$$\vec{v}\to \begin{bmatrix} x \\ y \\ z \end{bmatrix} $$
$$\vec{v} = x\vec{e_x}+y\vec{e_y}+z\vec{e_z}$$
$$V= x\sigma_x + y\sigma_y +z\sigma_z$$
$$V = \begin{bmatrix}z&x-yi\\ x+yi&-z\end{bmatrix}$$



## 3D vectors
$$\begin{bmatrix}x\\ y\\ z\end{bmatrix}\to \begin{bmatrix}z&x-yi\\ x+yi&-z\end{bmatrix} \to \begin{bmatrix}\zeta_1\\ \zeta_2 \end{bmatrix}\begin{bmatrix}-\zeta_2&\zeta_1\end{bmatrix}$$
rotating 3D vector 
$$\begin{bmatrix}1&0&0\\ 0&cos\theta &-sin\theta\\ 0&sin\theta &cos\theta \end{bmatrix}\begin{bmatrix}x\\ y\\ z \end{bmatrix}$$
rotating Pauli vector
$$\begin{bmatrix}cos\frac{\theta}{2}&i sin\frac{\theta}{2}\\ i sin\frac{\theta}{2} & cos\frac{\theta}{2}\end{bmatrix}\begin{bmatrix}z&x-yi\\x+yi&-z\end{bmatrix}\begin{bmatrix}cos\frac{\theta}{2}&i sin\frac{\theta}{2}\\ i sin\frac{\theta}{2} & cos\frac{\theta}{2}\end{bmatrix}^\dagger$$

rotating spinors
$$\begin{bmatrix}cos\frac{\theta}{2}&i sin\frac{\theta}{2}\\ i sin\frac{\theta}{2} & cos\frac{\theta}{2}\end{bmatrix}\begin{bmatrix}\xi^1\\\xi^2\end{bmatrix}\begin{bmatrix}-\xi^2&\xi^1\end{bmatrix}\begin{bmatrix}cos\frac{\theta}{2}&i sin\frac{\theta}{2}\\ i sin\frac{\theta}{2} & cos\frac{\theta}{2}\end{bmatrix}^\dagger$$
## 4D vectors
%%[[general relativity]]%%
$$\begin{bmatrix}ct\\x\\y\\z\end{bmatrix}\to\begin{bmatrix}ct+z&x-yi\\x+yi&ct-z\end{bmatrix}\to\begin{bmatrix}\psi_1\\\psi_2\end{bmatrix}\begin{bmatrix}\psi_1^*&\psi_2^*\end{bmatrix}$$
# Clifford algebras

