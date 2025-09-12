---
abstract:
---
| precursors | [[point set top]] [[algebra]] [[LA]] |
| ---------- | ------------------------------------ |
| #tags      |                                      |
| level      | #grad                                |
| degrees    | #math/maths/option/maths             |
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
