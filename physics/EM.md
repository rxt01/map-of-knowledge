---
abstract: 
other names: electro magnetism
---

|            | I                                   | II                                                                                                              |
| ---------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| precursors | [[diff and int calc]] [[mechanics]] | [[vector calc]] [[PDE]]                                                                                         |
| #tags      |                                     |                                                                                                                 |
| level      | #college                            | #bachelor                                                                                                       |
| degrees    | #natsc                              | #math/maths/option/others #math/stats/option/others #math/sc/option/others #physics/all/mandatory #EE/mandatory |

# #english-note 
## electric force
$$F=\frac{kq_{1}q_{2}}{r^2}$$
$$\vec{E}=\frac{\vec{F}}{q}=\frac{kq}{r^2}\hat{r}$$
### flux
$$\phi _{E}=\oint \vec{E}\cdot d\vec{A} = \frac{q}{\epsilon_{0}}$$
### potential
$$U=-\int \vec{F}\cdot d\vec{s}$$
$$U=\frac{kq_{1}q_{2}}{r'}$$
$$V=\frac{U}{q}=\frac{kq}{r}$$
$$V=-\int \vec{E}\cdot d\vec{s}$$
### resistance
$$V=IR$$
#### series

$$R_{eff}=R_{1}+R_{2}$$
#### parallel
$$R_{eff}=\frac{1}{\frac{1}{R_{1}}+\frac{1}{R_{2}}}$$
### power
$$P=IV$$
$$P=\frac{U}{t}$$
### kirchhoff rules
$$I_{1}+I_{2}=I_{3}+I_{4}$$
$$V-IR=0$$
### capacitance
$$C=\frac{Q}{V}$$
$$V-\frac{Q}{C}-IR=0$$
$$V-\frac{Q}{C}-\dot{Q}R=0$$
$$U=\frac{1}{2}CV^2$$

#### parallel
$$C_{eff}=C_{1}+C_{2}$$
#### series
$$C_{eff}=\frac{1}{\frac{1}{C_{1}}+\frac{1}{C_{2}}}$$

### reactance
like resistance but for ac
$$X=\frac{1}{\omega C}$$
### impendance
total of the resistance and the impedance
$$Z=\sqrt{ X^2+R^2 }$$
## magnetism
### biot-savart law
$$d\vec{B}=\frac{\mu_{0}}{4\pi} \frac{Id\vec{l}\times \hat{r}}{r^2}$$
$$\vec{F}=q\vec{v}\times \vec{B}$$
### gauss law
$$\oint \vec{B}\cdot d\vec{A}=0$$
### amper's law
$$\oint \vec{B}\cdot d\vec{l}=\mu_{0}I$$
# #french-note 
## charge electrique
### loi de coulomb
$$F=\frac{k|q_{1}q_{2}|}{r^2}$$
$$\vec{F}_{1\leftarrow2}=\frac{kq_{1}q_{2}}{r^2}\vec{u}_{2\to1}=\frac{kq_{1}q_{2}}{r^3}\vec{r}_{2\to1}=\frac{kq_{1}q_{2}}{r^3}(\vec{r}_{1}-\vec{r}_{2})=-\vec{F}_{2\leftarrow1}$$
$$k=8.99e9\text{N}\text{m}^2/\text{C}^2$$
## champ electrique
une charge $q_{1}$ emet un champ electrique $\vec{E}_{1}$
une charge $q_{2}$ subit une force $$\vec{E}_{1}=\frac{\vec{F}_{2\leftarrow1}}{q_{2}}$$
$$\vec{F}_{e,q\leftarrow}=q\vec{E}$$
$$\vec{E}=\frac{kq}{r^2}\vec{u}_{r}=\frac{kq\vec{r}}{r^3}$$
$$\vec{E}=\sum\limits_{i\le n}\vec{E}_{i}$$
### moment dipolaire
$$\vec{p}=q\vec{d}_{-\to+}$$
### mouvement d'une particule dans un champ
une particule chargee $q$ dans un champ electrique uniforme $\vec{E}$ subit une force $\vec{F}_{e}$
$$q\vec{E}=m\vec{a}$$
$$\vec{a}=\frac{q\vec{E}}{m}$$
### dipole dans un champ
$$\vec{t}=\vec{p}\times \vec{E}$$
## potentiel electrique
### energie potentiel electrique
#### champ non uniforme
$$\Delta U_{e}=-\int_{i}^f\vec{F}_{e}\cdot d\vec{s}=-q\int_{i}^f\vec{E}\cdot d\vec{s}$$
#### champ uniforme
$$\Delta U_{e}=-\vec{F}_{e}\cdot \vec{s}=-q\vec{E}\cdot \vec{s}$$
#### force exterieur
$$\Delta E_{mec}=\Delta K+\Delta U=W_{ext}$$
### potentiel electrique
$$\Delta V=\frac{\Delta U}{q}$$
#### champ non uniforme
$$\Delta V=V_{f}-V_{i}=-\int_{i}^f\vec{E}\cdot d\vec{s}$$
#### champ uniforme
$$\Delta V=V_{f}-V_{i}=-\vec{E}\cdot \vec{s}$$
### surfaces equipotentiel
surface ou les points on tous le meme potentiel electrique
les surface sont toujours perpendiculaires au champ electrique
### potentiel de charges ponctuelles
$$V=\frac{kq}{r}=\frac{q}{4\pi \epsilon_{0}r}$$
si plusieurs charge
$$V=\sum\limits_{i} \frac{kq_{i}}{r_{i}}$$
