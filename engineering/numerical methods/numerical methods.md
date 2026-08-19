---
abstract:
---


| precursors | [[LA]] [[PDE]] |
| ---------- | -------------- |
| #tags      |                |
| level      | #bachelor      |

# #english-note 
## euler's method
consider the order $N$ ODE $$y^{(N+1)}(t)=f(t,y(t),\dot{y}(t),\dots,y^{(N)}(t))$$
let $h$ be the size of the step, then $$\vec{y}_{i+1}=\begin{bmatrix}
y_{i+1} \\
\dot{y}_{i+1} \\
\vdots \\
y^{(N-1)}_{i+1} \\
y^{(N)}_{i+1}
\end{bmatrix}=\begin{bmatrix}
y_{i}+h\dot{y}_{i} \\
\dot{y}_{i}+h\ddot{y}_{i} \\
\vdots \\
y^{(N-1)}_{i}+hy^{(N)}_{i} \\
y^{(N)}_{i}+hf(t_{i},y_{i},\dot{y}_{i},\dots, y^{(N)}_{i})
\end{bmatrix}$$
