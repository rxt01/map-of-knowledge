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
#### charges ponctuelles
$$U= \frac{kq_{1}q_{2}}{r_{12}}$$
$$U=\sum\limits_{i<j}^{N} \frac{kq_{i}q_{j}}{r_{ij}}$$

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
$$V=\frac{kq}{r}=\frac{q}{4\pi \varepsilon_{0}r}$$
si plusieurs charge
$$V=\sum\limits_{i} \frac{kq_{i}}{r_{i}}$$
### champ electric selon le potentiel
$$E_{x}= \frac{-dV}{dx}$$
$$\vec{E}=-\hat{\imath}\frac{\partial V}{\partial x}-\hat{\jmath}\frac{\partial V}{\partial y}-\hat{k}\frac{\partial V}{\partial z}$$
$$E_{r}= -\frac{dV}{r}$$
### potentiel des conducteurs en equlibbre electrostatitque
$$\vec{E}=0$$
$$\Delta V=0$$
## condensateurs
deux armature: $+Q,-Q$
potentiels: $V_{+},V_{-}$
### capacite d'un condensateur
$$C=\frac{Q}{\Delta V_{c}}$$
#### condensateur plan
$$C_{vode=}\frac{\epsilon_{0}A}{d}$$
#### condensateur cylindrique
$$C_{vide}= \frac{2\pi \epsilon_{0}L}{\ln\left( \frac{b}{a} \right)}= \frac{2L}{k\ln\left( \frac{b}{a} \right)}$$
#### condensateur spherique
$$C_{vide}=4\pi \epsilon_{0} \frac{ab}{b-a}= \frac{ab}{k(b-a)}$$
### dielectrique
$$\Delta V=\frac{\Delta V_{vide}}{\kappa}$$
$$C=\kappa C_{vide}$$
### energie emmagasine
$$U_{c}= \frac{q^{2}}{2C}=$$
## courant electrique

qtt de charge qui traverse une surface par unite de temps
$$i=\left|\frac{Q}{\Delta t}\right|$$
$$i=\left| \frac{dq}{dt}\right|$$
sans la presence de champ electrique les electrons se deplacent aleatoirement a $10^5$m/s avec une vitesse moyenne nul

en presence d'un champ electrique, ils gagnet un vitesse de derive 1$\mu$m/s de sens oppose au champ electrique
$n$: nombre d'eelctron par unite de volume

$$n=\frac{N}{V}= \frac{\mathcal{N}_{A}n_{mole}}{V} =\frac{\mathcal{N}_{A}}{M}\rho_{mat} $$
### densite du courant
$$J= \frac{i}{A}$$
$$\vec{J}=\sigma \vec{E}=\frac{1}{\rho}\vec{E}$$
### resistivite
#### conducteurs
$$\rho=\rho_{0}(1+\alpha(T-T_{0}))$$
ou $0$ est 20$^o$
#### semi conducteurs
isolants a basse temperature
conducteurs a haute temperature
#### supra conducteur
la resistivite diminue avec la temperature
a basse temperature, resistivite presque nul
### courant des fils conducteurs
#### pile
$$\Delta V=\varepsilon$$
#### fil
$$i=\left( \frac{A}{\rho l} \right)\Delta V$$
#### resistance
$$R=\frac{\rho l}{A}$$
### loi d'ohm
$$R=\frac{\Delta V}{i}$$
### puissance electrique
$$P=\frac{dU}{dt}=\frac{\varepsilon dq}{dt}=\varepsilon i =\Delta Vi= \frac{(\Delta V)^2}{R}=Ri^2$$
## circuits a courant continu


### lois de kirchhoff
#### loi des noeuds
$$\sum\limits_{}i_{entrant}=\sum\limits_{}i_{sortant}$$
#### loi des mailles
$$(\Delta V)_{maille}\sum\limits_{}\Delta V_{i}=0$$
### calcul des differences de potentiel
un fil possede le meme potentiel sur toute sa longueur

apres un element du circuit, le courant perd du potentiel

pile : $\Delta V=\pm\varepsilon$ 
condensateur: $\Delta V=\pm\frac{q}{C}$
resistance: $\Delta V=\pm Ri$ 
(+) si sorti +
(-) si sorti -
### association de resistance
#### serie
$$\sum\limits_{}R_{i}=R_{eq}$$
#### parallele
$$\frac{1}{\sum\limits_{} \frac{1}{R_{i}}}=R_{eq}$$
