---
abstract:
---
| precursors | [[point set top]] [[algebra]] [[LA]] |
| ---------- | ------------------------------------ |
| #tags      |                                      |
| level      | #grad                                |

# #english-note 
## homotopy
a homotopy is a continuous family of functions
$$f_{t}:X\to Y$$
where $t\in[0,1]$

$f_{0}$ and $f_{1}$ are homotopic relative to $A$ $f_{0}\simeq f_{1}$
if $f_{t}|_{A}$ is independent of $t$ for some $A \subseteq X$
### retraction
$X\xrightarrow[]{r}X$
a map st $r^2=r$
#### deformation retraction
a homotopy from the identity to a retraction
$f_{t}:X\to X$
$f_{0}=id_{X}$
$f_{1}=r$
$$f_{t}|_{r(X)}=id_{r(X)} \forall t$$
every contiunuous map factors as an embeding followed by a retraction from a deformation retraction
### homotopy equivalence
$X\xrightarrow[]{f}Y$
st $\exists Y\xrightarrow[]{g}X$
st:
- $fg:Y\to Y\simeq id_{Y}$
- $gf:X\to X\simeq id_{X}$


if $X\xrightarrow[]{f}Y$ is a homotopy equivalence then $X$ & $Y$ are homotopic $X\simeq Y$
if $X$ is homotopic to a point, then $X$ is contractible
## mapping cylinder
$m_{f}=X\times[0,1]\sqcup_{(x,1)\sim f(x)}Y$
## cell complexes
a set $X$ is a cell complex if it is formed in the following way
1. start with a discrete set $X^{0}$ whose point are 0 cells
2. inductively form the $n$-skeleton $X^{n}$ from $X^{n-1}$ by attaching $n$-cells $e_{\alpha}^{n}$ via maps $\varphi_{\alpha}:S^{n-1}\to X^{n-1}$, this means that $X^n$ is the quotient space of the disjoint union $X^{n-1}\sqcup_{\alpha}D_{\alpha}^{n}$ of $X^{n-1}$ with a collection of $n$-disks $D_{\alpha}^{n}$ under the identifications $x\sim \varphi_{\alpha}(x)\forall x\in \partial D_{\alpha}^{n}$. thus a set $X^{n}=X^{n-1}\sqcup_{\alpha}e_{\alpha}^{n}$ where each $e_{\alpha}^{n}$ is an open $n$-disk
3. the process can either be stoped by setting $X=X^n$ for some $n<\infty$, in such case, $n$ is the dimension on $X$, or continued indefinitely by setting $X=\cup_{n}X^n$, in the latter case $X$ is given the weak topology: a set $A\subset X$ is open $\iff A\cap X^n$ is open in $X^{n}\forall n$ 
### characteristic maps
each cell $e_{\alpha}^n$ in a cell complex $X$ has a characteristic map $\Phi_{\alpha}:D_{\alpha}^{n}\to X$ which extends the attaching map $\varphi_{\alpha}$ and is a homeomorphism from the interior of $D_{\alpha}^n$ onto $e_{\alpha}^n$. namely 
### subcomplexes
a subcomplex of a cell $X$ is a closed subspace $A\subset X$ that is a union of cells of $X$
