---
abstract:
---
 
| precursors | [[probability and stats]] [[multi vars calc]] |
| ---------- | --------------------------------------------- |
| #tags      |                                               |
| level      | #bachelor                                     |


# #english-note
## postulates
### equilibrium states
$\exists$ particular states of simple systems that, macroscopically are characterized completly by the internal energy $U$, the volume $V$ and the mole numbers $N_{1}, N_{2}, \dots, N_{r}$ of the chemical components
### entropy
$\exists$ function of the extensive parameters of any composite system, defined for all equilibrium states and having the following property: the values assumed by the extensive parameters in the absence of an internal constraint are those that maximize the entropy over the manifold of constrained equilibrium states

the entropy of a composite system is additive over the constituent subsystems. the entropy is continuous and differentiable and is a monotonically increasing function of the energy
$$S=\sum\limits_{\alpha}S^{(\alpha)}$$
$$S^{(\alpha)}=S^{(\alpha)}(U^{(\alpha)},V^{(\alpha)},N_{1}^{(\alpha)},\dots,N_{r}^{(\alpha)})$$
$$S(\lambda U,\lambda V,\lambda N_{1},\dots,\lambda N_{r})=\lambda S(U,V,N_{1},\dots,N_{r})$$

## laws
### zeroth
$$A\rightleftharpoons C\land B\rightleftharpoons C\implies A\rightleftharpoons B$$

### first
$$\Delta U\ =\ Q\ -\ W$$
(energy is always concerved in a close system)
### second
$$\Delta S = \frac{\Delta Q}{T}$$
(the total entropy of an isolated system never decreases)
### third


## heat
at constant mole number
$$dQ=dU+dW$$
### quasi-static processes
$$dW=-PdV$$
where $P$ is the pressure and $V$ the volume
hence
$$dQ=dU+PdV$$


## equilibrium

$$\left( \frac{\partial S}{\partial U} \right)_{V,N_{1},\dots,N_{r}}>0$$

$$\left( \frac{\partial U}{\partial S} \right)_{V,N_{1},\dots,N_{r}}=T$$
$$-\left( \frac{\partial U}{\partial V} \right)_{S,N_{1},\dots, N_{r}}=P$$
$$\left( \frac{\partial U}{\partial N_{j}} \right)_{S,V,\dots,N_{k},\dots}=\mu_{j}$$
where $T$ is the temperature, $P$ the pressure and $\mu_{j}$ the electrochemical potential of the $j$th component
$$dU= TdS - PdV + \sum\limits_{j=1}^{r}\mu_{j}dN_{j}$$

$$dQ=TdS$$
### thermal equilibrium
