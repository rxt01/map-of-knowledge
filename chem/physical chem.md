---
abstract:
---
| precursors | [[multi vars calc]] [[general chem]] [[EM]] |
| ---------- | ------------------------------------------- |
| #tags      |                                             |
| level      | #bachelor                                   |


# #english-note 
## plank's blackbody radiation law
$$d\rho(\lambda,T)=\rho_{\lambda}(T)d\lambda= \frac{8\pi hc}{\lambda^{5}} \frac{d\lambda}{e^{hc/\lambda k_{B}T}-1} $$
### wien displacement law
$$\lambda_{max}T=b$$
where $b$ is Wien's displacement constant
### stefan boltzman law
$$R=\frac{c}{4}E_{V}=\sigma T^4$$
where $E_{V}$ is the total radiation energy density and $\sigma$ is the stefan boltzman constant
## postulates and general principles of quantum mechanics
### postulate 1
the state of a quantum-mechanical system is completely specified by a function $\Psi(r,t)$
that depends on the coordinates of the particle and on time. This function, called the
wavefunction or state function, has the important property that $\overline{\Psi(r,t)}\Psi(r,t)dxdydz$
is the probability that the particle lies in the volume element $dxdydz$ located at $r$ at
time $t$

### postulate 2
to every observable in classical mechanics there corresponds a linear, hermitian operator in quantum mechanics
#### hermitian operator
an operator $\hat{A}$ such that $$\braket{ m |\hat{A}|n  }=\overline{\braket{n  |\hat{A}|m  } }  $$
ie. $$\int_{-\infty}^{\infty}\overline{f_{m}}\hat{A}f_{n}dx=\int_{-\infty}^{\infty}f_{n}\overline{\hat{A}}\overline{f_{m}}dx   $$


### postulate 3
in any measurement of the observable associated with the operator $\hat{A}$, the only value that will ever be observed are the eigenvalues $a$, which satisfie the eigenvalue equation
$$\hat{A}\Psi_{a}=a\Psi_{a}$$
#### postulate 4
if a system is in a state described by a normalized wave function $\Psi$, then the average value of the observale associated with $\hat{A}$ is given by $$\braket{  a  } = \int_{-\infty}^{\infty}\overline{\Psi}\hat{A}\Psi d\tau  $$

supose $\Psi=\psi_{n}$ where $$\hat{A}\psi_{n}=a_{n}\psi_{n}$$
then $$\braket{  a  }=a_{n} $$
$$\braket{ a^2   }=a_{n}^{2} $$
hence $$\sigma^{2}_{n}=0$$
