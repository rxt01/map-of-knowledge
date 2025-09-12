---
abstract: linear algebra over abstract vector spaces
---
| precursors | [[LA]] [[real anal]] [[algebra]] |
| ---------- | -------------------------------- |
| #tags      |                                  |
| level      | #                                |
| degrees    |                                  |

# #english-note
## [vector](LA.md#vectors) spaces
let $\mathbb{F}$ be a [field](algebra.md#fields)
a set $V\ne\varnothing$ together with two operations
- vector addition $+:V\times V\to V$
- scalar multiplication $\cdot:\mathbb{F}\times V\to V$
where
- $(V,+)$ is an abelian group
- $\lambda(\mu v)=(\lambda \mu)v$
- $1v=v$
- $\lambda(v+w)=\lambda v+\lambda w$
- $(\lambda+\mu)v=\lambda v+\mu v$
is called an $\mathbb{F}-$vector space
### linear combination
let $V$ b an $\mathbb{F}-$vector space
for $v_{1},\cdots ,v_{k}\in V$, $\alpha_{1},\cdots,\alpha_{k}\in \mathbb{F}$, $k<\infty$
$$\sum_{j=1}^k\alpha_{j}v_{j}$$
is a linear combination

### span of subset
the span of a subset is the set of all the possible linear combinations of vectors in the subset
#### generating set
a subset is a generating set of a subspace if it span exactly the whole subspace

 
#### linearly independent
a subset is linearly independent if  every vector in the span of the set can only be reached one way
#### basis
a basis for a subspace if it is generating and linearly independent
#### dimension
the number of element in a basis of a subspace is the dimension of that subspace

