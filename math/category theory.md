---
abstract:
---
| precursors | [[algebra]](optional) [[top]](optional) |
| ---------- | --------------------------------------- |
| status:    | #learning                               |
| #tags      |                                         |
| level      | #bachelor                               |
| type       | #purenatsc                              |
# #english-note 
## category
a category with one object is a monoid
### definition
a category $C$ consists of
- a class of objects $ob(C)$
- $\forall X,Y\in ob(C)\ \exists$ a class $C(X,Y) \equiv Hom_C(X,Y) = Mor_C(X,Y)$
- $\forall X,Y,Z\in ob(C)$ a map $C(X,Y)\times C(Y,Z) \to C(X,Z)$ $$(f,g)\mapsto f\circ g$$
s.t.
- $\circ$ is [associative](algebra.md#associative%20property)
- $\forall X \in ob(C)\ \exists\ id_X \in C(X,X)\ s.t.\ f\circ id_X=f=id_X\circ f$
#### small category
a category $C$ is called small if $ob(C)$ is a set
a category s.t. $C(X,Y)$ are sets $\forall X,Y$ are called locally small
### opposite category
$C^{op}$ is a category s.t. $ob(C^{op})=ob(C)$, $C^{op}(X,Y)=C(Y,X)$$$g\ \circ^{op}f = f\ \circ g$$


