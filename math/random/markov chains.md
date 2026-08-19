---
abstract:
---
| precursors | [[probability theory]] |
| ---------- | ---------------------- |
| #tags      |                        |
| level      | #                      |

# #english-note 
## matrices
### distribution vectors
a vector where $\forall i$ $0\leq v_{i}\leq1$ and $$\sum\limits_{i}v_{i}=1$$
### transition matrix
square matrix where all columns are distribution vectors
### markov chain
a sequence $(X)_n$ of distribution vectors st for a transition matrix $A$, $$X_{n}=AX_{n-1}=A^{n}X_{0}$$
#### stationary distribution
[[LA#eigenvector|eigenvector]] of the transition matrix $A$ for the eigenvalue 1
$\lim\limits_{ n \to \infty }A^{n}$ is equal to the matrix where the columns are that eigenvector
