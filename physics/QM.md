---
abstract: 
other names: quantum mechanics
---

|            | I                                                                        | II                                           |
| ---------- | ------------------------------------------------------------------------ | -------------------------------------------- |
| precursors | [[CM]] [[EM]] [[waves and vibrations]] [[probability and stats]] [[ODE]] | [[probability theory]] [[PDE]] [[func anal]] |
| #tags      |                                                                          |                                              |
| level      | #bachelor                                                                | #bachelor                                    |


# #english-note 
## wave function
### schrodinger equation
$$i\hbar \frac{\partial\Psi}{\partial t}=-\frac{\hbar^{2}}{2m} \frac{\partial^{2}\Psi}{\partial x^{2}}+V\Psi$$
### probability of finding a particule
$$P(a\leq \mathcal{P}\leq b  |t=s)=\int_{a}^{b}|\Psi(x,s)|^{2}dx$$
### normalization
let $\Psi$ be a solution to schrodinger's equation, $$P_{tot}=\int_{-\infty}^{\infty}|\Psi(x,t)|^{2}dx$$
and $$P_{tot} \neq 1$$
if $P_{tot}=0\lor P_{tot}=\infty$, then $\Psi$ is non normalizable and must be rejected
otherwise, we must multiply $\Psi$ by a constant such that $P_{tot}=1$
### expeted values
#### position
$$\braket{x} =\int_{-\infty}^{\infty}x|\Psi(x,t)|^2dx =\int \overline{\Psi}[x]\Psi dx $$
#### velocity
$$\braket{  v  } = -\frac{i\hbar}{m} \int  \overline{\Psi} \frac{\partial\Psi}{\partial x} dx$$
#### momentum
$$\braket{  p  } = -i\hbar \int \left( \overline{\Psi} \frac{\partial\Psi}{\partial x}  \right)dx=\int \overline{\Psi}[-i\hbar( \partial/\partial x)]\Psi dx $$

#### arbitrary
$$\braket{  Q(x,p)  } = \int \overline{\Psi}[Q(x,-i \hbar \partial/\partial x)]\Psi  $$
### de broglie formula
$$p=\frac{h}{\lambda}= \frac{2\pi\hbar}{\lambda}$$
where $\lambda$ is the wavelenght of the wave function
### uncertainty principle
$$\sigma_{x}\sigma_{p}\geq \frac{\hbar}{2}$$
## time independent schrodinger equation
cases where $V$ is independent of $t$
$$-\frac{\hbar^{2}}{2m} \frac{d^{2}\psi}{dx^2}+V\psi=E\psi$$
### solving
set $$\Psi(x,t)=\psi(x)\varphi(t)$$
set $$E=\frac{i\hbar}{\varphi} \frac{d\varphi}{dt}$$
and $$-\frac{\hbar^{2}}{2m} \frac{d^{2}\psi}{dx^2}+V\psi=E\psi$$
hence $$\varphi(t)=e^{-iEt/\hbar}$$


### hamiltonian
$$\hat{H}=-\frac{\hbar^{2}}{2m} \frac{d^{2}}{dx^2}+V(x)$$
hence the time independent schrodinger equation is $$\hat{H}\psi=E\psi$$
and $$\braket{  H  }=E $$
$$\sigma_{H}^{2}=0$$
### from time independent to time dependent
$$\Psi(x,t)=\sum\limits_{n=1}^{\infty}c_{n}\psi_{n}(x)e^{-iE_{n}t/\hbar}$$
$$|c_{n}|^{2}=P(E_{n})$$
$$\sum\limits_{n=0}^{\infty}|c_{n}|^{2}=1$$
$$\braket{  H  }=\sum\limits_{n=1}^{\infty}|c_{n}|^{2}E_{n} $$
hence since $c_{n}$ is independent of time energy is conserved
### infinite square well
let $$V=\begin{cases}
0, & 0\leq x\leq a \\
\infty, & \text{otherwise}
\end{cases}$$
inside the well, the solutions are $$\psi_{n}(x)=\sqrt{ \frac{2}{a} } \sin\left(  \frac{n\pi}{a} x\right)$$
$$E_{n}= \frac{n^{2}\pi^{2}\hbar^{2}}{2ma^2}$$
$$\int \overline{\psi_{m}(x)}\psi_{n}(x)dx=\delta_{m,n} $$
hence the $\psi$s are orthonormal
$$\Psi(x,t) =\sum\limits_{n=1}^{\infty}c_{n}\sqrt{ \frac{2}{a} } \sin\left(  \frac{n\pi}{a} x\right)e^{-i(n^{2}\pi^{2}\hbar^{2}/2ma^2)t}$$
where $$c_{n}=\sqrt{ \frac{2}{a} }\int_{0}^{a}\sin\left( \frac{n\pi}{a}x \right)\Psi(x,0)dx$$
### simple harmonic oscilator
let $$V(x)= \frac{1}{2}m\omega^{2}x^{2}$$
<!--- TODO --->

### free particle
$$V(x)=0$$
