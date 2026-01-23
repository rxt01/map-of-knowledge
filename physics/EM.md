---
abstract: 
other names: electro magnetism
---

|            | I                                   | II                                                                                                              |
| ---------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| precursors | [[diff and int calc]] [[mechanics]] | [[vector calc]] [[PDE]]                                                                                         |
| #tags      |                                     |                                                                                                                 |
| level      | #college                            | #bachelor                                                                                                       |


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
total of the resistance and the reactance
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
### champ electrique d'un dipole
sur l'axe:
$$\vec{E}=\frac{2k\vec{p}}{r^3}$$
sur l'axe:$$\vec{E}=-\frac{k\vec{p}}{r^3}$$
### distributions continues de charges
charge lineique: $\lambda =\frac{Q}{L}$
$$\lambda=\frac{dq}{dx}$$
$$Q=\int \lambda dx$$
charge surfacique: $\sigma=\frac{Q}{A}$
$$\sigma=\frac{dq}{dA}$$
$$Q=\int \sigma dA$$
charge volumique: $\rho=\frac{Q}{V}$
$$\rho=\frac{dq}{dV}$$
$$Q=\int \rho dV$$
#### champ d'une distribution continues de charge
$$d\vec{E}=k \frac{dq}{r^2}\hat{r}$$
$$\vec{E}=k\int \frac{dq}{r^2}\hat{r}$$
### champ produit par un anneau
$$\vec{E}=\int \frac{dq}{4\pi \epsilon_{0}} \frac{z\hat{k}}{(R^{2}+z^{2})^{3/2}}=\frac{Qz}{4\pi \epsilon_{0}(R^{2} +z^{2} )^{3/2}}\hat{k}$$
### champ produit par un disque
sur l'axe d'un disque
$$\vec{E}= \frac{\sigma z\hat{k}}{2\epsilon_{0}} \int_{0}^{R} \frac{rdr}{(r^{2}+z^{2})^{3/2}}=\frac{\sigma}{2\epsilon_{0}}\left(\frac{z}{|z|}-\frac{z}{\sqrt{ R^2+z^2 }}\right)$$
### champ produit par un plan isolant infini
$$\vec{E}=\frac{\sigma}{2\epsilon_{0}} \frac{z}{|z|}\hat{k}$$

### mouvement d'une particule dans un champ
une particule chargee $q$ dans un champ electrique uniforme $\vec{E}$ subit une force $\vec{F}_{e}$
$$q\vec{E}=m\vec{a}$$
$$\vec{a}=\frac{q\vec{E}}{m}$$
### dipole dans un champ
$$\vec{t}=\vec{p}\times \vec{E}$$
## theorem de gauss
### flux electrique
$$\Phi_{E}=\int\limits_{surface}\vec{E}\cdot d\vec{A}$$
### theorem de gauss
$$\Phi_{E}=\frac{Q_{int}}{\epsilon_{0}}$$
### conducteurs en equilibre electrostatique
$$\vec{E}=0$$
tout juste a l'exterieur du conducteur:$$\vec{E}=\frac{\sigma}{\epsilon_{0}}\hat{n}$$

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
### potentiel d'une distribution continue
$$V=\frac{1}{4\pi \epsilon_{0}}\int \frac{dq}{r}$$

### champ electric selon le potentiel
$$E_{x}= \frac{-dV}{dx}$$
$$\vec{E}=-\hat{\imath}\frac{\partial V}{\partial x}-\hat{\jmath}\frac{\partial V}{\partial y}-\hat{k}\frac{\partial V}{\partial z}$$
$$E_{r}= -\frac{dV}{r}$$
### potentiel des conducteurs en equlibbre electrostatitque
$$\vec{E}=0$$
$$\Delta V=0$$
### source de difference de potentiel
#### generateur de van de graff
#### piles et generateurs
$$\varepsilon=\frac{W_{pile}}{q}$$
### energie potentiel d'un dipole
$$U=-pE\cos \phi=-\vec{p}\cdot \vec{E}$$
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
$$U_{c}= \frac{q^{2}}{2C}=\frac{1}{2}C(\Delta V)^{2}=\frac{1}{2}Q\Delta V$$
## courant electrique

qtt de charge qui traverse une surface par unite de temps
$$i=\left|\frac{Q}{\Delta t}\right|$$
$$i=\left| \dot{q}\right|$$
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
$$i=\left( \frac{A}{\rho \ell} \right)\Delta V$$
#### resistance
$$R=\frac{\rho \ell}{A}$$
### loi d'ohm
$$R=\frac{\Delta V}{i}$$
### puissance electrique
$$P=\dot{U}=\varepsilon \dot{q}=\varepsilon i =\Delta Vi= \frac{(\Delta V)^2}{R}=Ri^2$$
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
### piles reelles
pile ayant une resistance interne $r$
$$\Delta V_{pile}=\frac{R_{eq}}{r+R_{eq}}\varepsilon$$
$$P_{pile}=P_{\varepsilon}-P_{r}=\varepsilon i-ri^2$$

### association de resistance
#### serie
$$\sum\limits_{}R_{i}=R_{eq}$$
#### parallele
$$\frac{1}{\sum\limits_{} \frac{1}{R_{i}}}=R_{eq}$$

### instruments de mesures
#### amperemetre
mesure le courant dans le circuit (serie)
#### voltmetre
mesure la difference de oitentiel (prallele)
### circuit RC
#### chargement
mailles:$$\varepsilon-Ri-\frac{q}{C}=0$$

$$q=C\varepsilon(1-e^{-t/\tau}) =q_{m}(1-e^{-t/\tau})$$
avec $\tau=RC$ constante de temps (s)

#### dechargement
mailles:
$$\frac{q}{C}-Ri=0$$
$$q=q_{m}e^{-t/\tau}$$
## champ magnetique
le champ magnetique est tangent aux lignes de champ
le modul est proportionel a la densite des lignes de champ
pole nord $\to$ pole sud
les lignes de champ ne se croisent jamais
toute charge en mouvement fait un champ magnetique
pour un fil rectilign regle de la main droite (pouse: direction courant, doits: ligne de champ)
### loi de biot-savard
$$\vec{B}= \frac{\mu_{0}i}{4\pi} \int \frac{d\vec{\ell}\times \hat{r}}{r^2}$$
pour une section rectiligne 
$$B=\frac{\mu_{0}i}{4\pi}(\cos \theta_{1}-\cos \theta_{2})$$
ou $\theta_{k}$ est l'angle and $\vec{i}$ et $\hat{r}_{k}$

#### champ magnetique d'un fil infini
pour un fil inifi ou si $r\ll L$
$$\vec{B}=\frac{\mu_{0}i}{2\pi r}\vec{u}_{l}\times \vec{u}_{r}$$
a une distance $r$ du fil
#### boucle de courant
##### au centre 
$$\vec{B}= \frac{\mu_{0}i}{2R}\hat{k}$$
##### a une distance $z$
$$\vec{B}=\frac{\mu_{0}i}{2} \frac{R^{2}\hat{k}}{(R^{2}+z^{2})^{3/2}}$$
##### sur l'axe de la boucle $|z|\gg R$
$$\vec{B}=\frac{\mu_{0}i}{2} \frac{\pi R^{2}}{\pi|z|^{3}}\hat{k}$$
#### moment magnetique d'une boucle
$$\vec{\mu}=i\vec{A}$$
$N$ boucles jointes: $$\vec{\mu}=Ni\vec{A}$$
sur l'axe de la boucle $|z|\gg R$
$$\vec{B}= \frac{\mu_{0}\vec{\mu}}{2\pi|z|^3}$$
### theorem d'ampere
$$\Phi_{B}=\oint \vec{B}\cdot d\vec{A}=0$$
$$\oint \vec{B}\cdot d\vec{s}=\mu_{0}i_{inc}$$
#### solenoide
module sur l'axe $$B=\frac{\mu_{0}ni}{2}|\cos \alpha_{2}-\cos \alpha_{1}|$$
ou $n=\frac{N}{L}$
a l'interieur
$$B=\mu_{0}ni=\mu_{0} \frac{N}{L}i$$


## force magnetique
$$\vec{F}_{m}=q\vec{v}\times \vec{B}$$
$$F_{m}=|q|vB\sin \phi$$
### force de lorentz

particule dans un champ electrique et un champ magnetique
$$\vec{F}=q\vec{E}+q\vec{v}\times \vec{B}$$
#### applications
##### selecteur de vitesse
$$v=\frac{E}{B}$$
###### spectrometre de masse
$$m= \frac{|q|rB_{sv}B_{0}}{E}$$
### force magnetique sur les files
$$\vec{F}_{m}=i\vec{\ell}\times \vec{B}$$
$\vec{\ell}$: longeur du fil dans la dircetion du courant
#### plusieurs fils
$$\vec{F}_{i\to j}=i_{j}\vec{\ell}_{j}\times \vec{B}_{i}$$
ou $$B_{i}=\frac{\mu_{0}i_{i}}{2\pi r}$$
si deux files dans le meme sens, s'attirent
sens oppose se repousse
### dipole magnetique dans un champ magnetique
le moment magnetique $\vec{\mu}$ ve s'aligne sur $\vec{B}$
moment de force $\vec{\tau}=\vec{\mu}\times \vec{B}$
moment magnetique $\vec{\mu}=Ni\vec{A}$
energie potentiel $U=-\vec{\mu}\cdot \vec{B}$
### magnetisme des atomes
#### mouvement orbital des electrons
$$i=\frac{ev}{2\pi r}$$
$$\vec{\mu}_{orb}=\frac{evr}{2}\hat{k}$$
$$\vec{\mu}_{orb}=-\frac{e}{2m}\vec{L}$$
$$L=\sqrt{ \ell(\ell+1) }\hbar$$
$$L_{z}=m_{\ell}\hbar$$
$$\mu_{orb,z}=-m_{\ell}\mu_{B}$$
#### spin de l'electron
$$S_{z}=m_{s}\hbar$$
$$\vec{\mu}_{s}=g \frac{|q|}{2m}\vec{S}$$
le moment magnetique d'electron en doublet s'annule
#### atome dans un champ magnetique
$$U=-\vec{\mu}\vec{B}=-\mu_{z}B_{z}$$
### propriete manetiques des materiaux
#### paramagnetisme
moments magnetique s'annulent pas
dans un champ magnetique: alignement faible des champs dans le meme sens que le champ magneitque
#### ferromagnetisme
effets magnetiques intenses
moment magnetique permanent
tres grand alignement des momnet magnetiques
regions d'alignement sans champ exterieur
#### diamegnetisme
momnet s'aligne a l'envers du champ exterieur


## induction
une variation de champ electrique sur une bobine induit une force electro motrice dans la bobine
le sens du courant depend de la direction et de l'augmentation ou de la diminution du champ magnetique

### flux magnetique
pour un champ magnetique non uniforme
$$\Phi_{B}=\int\limits_{surface}\vec{B}\cdot d\vec{A}$$
pour un champ uniform:
$$\Phi_{B}=\vec{B}\cdot \vec{A}=BA\cos \theta$$
### loi de faraday
$$\varepsilon= -\dot{\Phi}_{B}$$
pour une bobine de $N$ spires: $$\varepsilon=-N\dot{\Phi}_{B}$$
courant induit $$i=\frac{|\varepsilon|}{R}$$

### loi de lenz
le courant induit par une variation de flux magnetique produit un champ induit qui s'oppose a la variation du flux magnetique exterieur
#### conducteur en mouvement
$$\varepsilon=-B\ell v$$
$$i= \frac{|B\ell v|}{R}$$
force magnetique en direction oppose de la vitesse
pour avoir une vitesse constante:
$$F_{ext}=\frac{v\ell^2B^2}{R}$$
### generateur
$$\varepsilon=NBA\omega \sin(\omega t)$$
### theorem d'ampere-maxwell
$$\oint \vec{B}\cdot d\vec{s}=\mu_{0}i_{inc}+\epsilon_{0}\mu_{0}\int \dot{\vec{E}}\cdot d\vec{A}=\mu_{0}i_{inc}+c^{-2}\int \dot{\vec{E}}\cdot d\vec{A}$$
### equations de Maxwell
$$\begin{align}
\oint \vec{E}\cdot d\vec{A} &= \frac{Q_{int}}{\epsilon_{0}} \\
\oint \vec{B}\cdot d\vec{A} &= 0 \\
\oint \vec{E}\cdot d\vec{s} &= -\int \dot{\vec{B}}\cdot d\vec{A} \\
\oint \vec{B}\cdot d\vec{s} &=\mu_{0}i_{inc}+c^{-2}\int \dot{\vec{E}}\cdot d\vec{A}
\end{align}$$
#### ondes electromagnetiques
une changement de champ electrique donne un changement de champ magnetique qui donne un changement de champ electrique sous la forme d'onde electromagnetique

## inductance
### inductance mutuelle
$$M=\frac{N_{n}\Phi_{m\to_{n}}}{i_{m}}$$
$$\varepsilon_{m}=-M \ddot{\imath}_{n}$$


### auto induction
flux total de la bobine: $\Phi_{bobine}=N\Phi_{B}$
inductance: $$L=\frac{N\Phi_{B}}{i}$$
pour un solenoide: $$L=\frac{\mu_{0}N^{2}A}{\ell}$$
#### f.e.m d'auto-induction
$$\varepsilon_{L}=-N\dot{\Phi}_{B}$$
$$\varepsilon_{L}=-L\ddot{\imath}$$

### circuits RL
augmentation du courant:
$$\varepsilon-L \ddot{\imath}-Ri=0$$
$$i=\frac{\varepsilon}{R}(1-e^{-tR/L})$$
diminution:
$$-Ri-L \ddot{\imath}=0$$
$$i=\frac{\varepsilon}{R}e^{-tR/L}$$
### energie emmagasinee dans une bobine
$$P_{pile}-P_{R}-P_{L}=0$$
courant augment: energie augment dans la bobine
courant diminue: energie diminu dans la bobine
$$U_{L}=\int P_{L}dt=\int_{0}^{i} Li'di' = \frac{1}{2}Li^{2}$$
#### densite d'energie magnetique
$$u_{B}=\frac{E}{V}=\frac{B^{2}}{2\mu_{0}}$$
$$u=u_{E}+u_{B}=\frac{\epsilon_{0}E^2}{2}+\frac{B^{2}}{2\mu_{0}}$$
### circuits LC
$$i=-\dot{Q}$$
$$\ddot{Q}=\frac{Q}{LC}$$
$$Q=Q_{m}\cos(\omega t)$$
$$\omega=2\pi f=\frac{1}{\sqrt{ LC }}$$
$$i=i_{m}\sin (\omega t)$$
$$i_{m}=\omega Q_{m}$$
#### energie
$$U_{L}=\frac{Q^{2}_{m}}{2C}\sin^{2}(\omega t)$$
### circuits RLC
$$\frac{Q}{C}+R\dot{Q}+L\ddot{Q}=0$$
$$Q=Q_{em}e^{-RT/(2L)}\cos(\omega_{a}t)$$
$$\omega_{a}=\sqrt{ \frac{1}{LC}-\frac{R^2}{4L^2} }=\sqrt{ \omega^{2}_{na} -\frac{R^2}{4L^2}}$$
resistance critique:$$R_{c}=\sqrt{ \frac{4L}{C} }$$
## circuits a courant alternatif
$$\varepsilon=\varepsilon_{m}\sin(\omega t)$$
$$i=i_{m}\sin(\omega t-\phi)$$
$\phi$: constante de phase representant le dephasage
$\phi=0\implies$ f.e.m et courant en phase
$\phi>0\implies$ courant en retard sur f.e.m
$\phi<0\implies$ courant en avance sur f.e.m
### resistance
$$\Delta V_{R}=\Delta V_{Rm}\sin (\omega t)$$
$$i_{R}=\frac{\Delta V_{Rm}}{R}\sin(\omega t)$$
$$i_{Rm}=\frac{\Delta V_{Rm}}{R}$$
$$\phi_{R}=0$$
### condensateurs
$$\Delta V_{C}=\Delta V_{Cm}\sin(\omega t)$$
$$i_{C}=\omega C\Delta V_{Cm}\cos(\omega t)=\omega C\Delta V_{Cm}\sin\left( \omega t+\frac{\pi}{2} \right)$$
$$\phi_{C}=-\frac{\pi}{2}$$
#### reactance capacitive
$$i_{Cm}=\omega C\Delta V_{Cm}$$
$$X_{C}=\frac{1}{\omega C}$$
$$i_{Cm}=\frac{\Delta V_{Cm}}{X_{C}}$$
### bobines d'induction
$$\Delta V_{L}=\Delta V_{Lm}\sin(\omega t)$$
$$i_{L}=\frac{\Delta V_{Lm}}{\omega L}(-\cos(\omega t))=\frac{\Delta V_{Lm}}{\omega L}\sin\left( \omega t-\frac{\pi}{2} \right)$$
$$\pi_{L}=\frac{\pi}{2}$$
#### reactance inductive
$$i_{Lm}=\frac{\Delta V_{Lm}}{\omega L}$$
$$X_{L}=\omega L$$
$$i_{Lm}=\frac{\Delta V_{Lm}}{X_{L}}$$
### circuit RLC en serie
$$\varepsilon^{2}_{m}=\Delta V^{2}_{Rm}+(\Delta V_{Lm}-\Delta V_{Cm})^{2}=(R^2+(X_{L}-X_{C})^2)i_{m}$$
$$i_{m}=\frac{\varepsilon_{m}}{\sqrt{ R^2+(X_{L}-X_{C})^2 }}$$
#### impedence
$$Z=\sqrt{ R^{2}+(X_{L}-X_{C})^{2} }=\sqrt{ R^{2}+\left( \omega L-\frac{1}{\omega C} \right)^2 }$$
$$i_{m}=\frac{\varepsilon_{m}}{Z}$$
#### constante de phase
$$\tan \phi=\frac{X_{L}-X_{C}}{R}$$
#### resonance
$$\omega_{0}=\frac{1}{\sqrt{ LC }}$$
### puissance
$$P=\varepsilon_{m}i_{m}(\sin^{2}(\omega t)\cos \phi-\sin(\omega t)\cos(\omega t)\sin \phi)$$
$$P_{moy}=\frac{1}{2}\varepsilon_{m}i_{m}\cos(\phi)\left( \frac{\varepsilon_{m}}{\sqrt{ 2 }} \right)\left( \frac{i_{m}}{\sqrt{ 2 }} \right)\cos \phi$$
$$\varepsilon_{eff}=\frac{\varepsilon_{m}}{\sqrt{ 2 }}$$
$$i_{eff}=\frac{i_{m}}{\sqrt{ 2 }}$$
$$P_{moy}=\varepsilon_{eff}i_{eff}\cos \phi$$
$$i_{eff}=\frac{\varepsilon_{eff}}{Z}$$
$$\cos \phi=\frac{R}{Z}$$
$$P_{moy}=\frac{R}{Z^{2}}\varepsilon^{2}_{eff}$$
### transformateurs
$$\varepsilon_{s}=\frac{N_{s}}{N_{p}}\varepsilon_{p}$$
$$\varepsilon_{p}i_{p}=\varepsilon_{s}i_{s}$$
$$i_{s}=\frac{N_{p}}{N_{s}}i_{p}$$
$$i_{p}=\left( \frac{N_{s}}{N_{p}} \right)^{2}\varepsilon_{p}$$
$$R_{eq}=\left( \frac{N_{p}}{N_{s}} \right)^2R$$
