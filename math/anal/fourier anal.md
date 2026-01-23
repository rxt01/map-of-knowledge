---
abstract:
---
| precursors | [[complex anal]] [[ODE]] |
| ---------- | ------------------------ |
| #tags      |                          |
| level      | #bachelor                |


# #english-note
## fourier series
decomposition of 2$\pi$ periodic functions in terms of eigenfunctions of the following eigenvalue problem $$x''+\lambda x=0,\ x(-\pi)=x(\pi),\ x'(-\pi)=x'(\pi)$$
that is $$f(t)=\frac{a_{0}}{2}+\sum\limits_{n=1}^{\infty}a_{n}\cos(nt)+b_{n}\sin(nt)$$



### inner product of functions
$$\langle f(t),g(t)\rangle :=\int_{-\pi}^{\pi}f(t)g(t)dt$$
$$\langle \cos(mt),\cos(nt)\rangle = 0 \forall m\neq n$$
$$\langle \sin(mt),\sin(nt)\rangle = 0 \forall m\neq n$$
$$\langle \sin(mt),\cos(nt)\rangle = 0 \forall m,n \in \mathbb{N}$$
$$\langle 1,1\rangle = 2\pi$$
the coefficient of the fourier series are given by
$$a_{n}= \frac{\langle f(t),\cos(nt)\rangle}{\langle \cos(nt) , \cos(nt)\rangle}=\frac{1}{\pi}\int_{-\pi}^{\pi}f(t)\cos(nt)dt$$
$$b_{n}= \frac{\langle f(t),\sin(nt)\rangle}{\langle \sin(nt) , \sin(nt)\rangle}=\frac{1}{\pi}\int_{-\pi}^{\pi}f(t)\sin(nt)dt$$
### differentiation and integration
let $$f(t)=\frac{a_{0}}{2}+\sum\limits_{n=1}^{\infty}a_{n}\cos\left( \frac{n\pi t}{L} \right) + b_{n}\sin\left( \frac{n\pi t}{L} \right)$$
be a piecewise smooth continuous function and the derivative $f'(t)$ be piecewise smooth. then the derivative can be obtained by differentiating each term and the antiderivative by antidifferentiating each term
### odd and even functions
let $f(t)$ be a picewise smooth  function defined on $[0,L]$. then the odd periodic extension of $f(t)$ has the fourier series $$F_{odd}(t)=\sum\limits_{n=1}^{\infty}b_{n}\sin\left( \frac{n\pi t}{L} \right)$$ where $$b_{n}=\frac{2}{L}\int_{0}^{L}f(t)\sin\left( \frac{n\pi t}{L} \right)dt$$
and the even periodic extension of $f(t)$ has the fourier series $$F_{even}(t)=\frac{a_{0}}{2}\sum\limits_{n=1}^{\infty}a_{n}\cos\left( \frac{n\pi t}{L} \right)$$ where $$a_{n}=\frac{2}{L}\int_{0}^{L}f(t)\cos\left( \frac{n\pi t}{L} \right)dt$$