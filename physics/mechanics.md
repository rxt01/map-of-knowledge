---
abstract:
---


| precursors | [[diff and int calc]] |
| ---------- | --------------------- |
| #tags      |                       |
| level      | #college              |
| degrees    | #natsc                |
# #french-note 
## cinematique
### mouvement rectiligne

le mouvement est un vecteur $$\Delta \vec{r}=\Delta x\hat{\imath}$$
la vitesse est un vecteur $$\vec{v}_{moy}=v_{moy,x}\hat{\imath}$$
#### position et deplacement
la position est representer par un point


le passage d'une position a une autre est le deplacement $$\Delta x=x_{f}-x_{i}$$

$\Delta x$ peut etre positif, negatif ou nul
#### vitesse moyenne
$$v_{moy,x}=\frac{\Delta x}{\Delta t}$$

#### vitesse instantane
$$v=\dot{x}$$
#### vitesse scalaire
$$v_{scal}=\frac{d}{\Delta t}$$
$d$: distance parcouru($=\sum|\Delta x_{i}|$)
#### MRU
vitesse constante et accelaration nul
$$v_{x}=\frac{\Delta x}{\Delta t}\to x_{f}=x_{i}+v_{x}\Delta t$$
#### acceleration moyenne
$$a_{moy,x}=\frac{\Delta_{x}}{\Delta t}= \frac{v_{fx}-v_{ix}}{t_{f-t_{i}}}$$
#### acceleration instantanee
$$a_{x}=\dot{v}_{x}$$
#### signes des variable
##### position
$x>0$: l'objet est a droite
$x<0$: l'objet est a gauche
##### vitesse
$v_{x}>0$: le mouvement est vers la droite
$v_{x}<0$: le mouvement est vers la gauche
##### acceleration
$a_{x}>0$: l'acceleration est vers la droite
$a_{x}<0$: l'acceleration est vers la gauche


#### MRUA
$$x=x_{0}+v_{0,x}t+\frac{1}{2}a_{x}t^2$$
$$v_{x}=v_{0,x}+a_{x}t$$
$$v_{x}^2=v_{0,x}^2+2a_{x}(x-x_{0})$$$$x=x_{0}+\frac{v_{0x}+v_{x}}{2}t$$
#### chute libre
l'acceleration est seulement cause par le champ gravitationel
acceleration verticale
$$a_{y}=-g=-9.81\text{m/s}^2$$

#### plan incline
l'acceleration est le long d'un plan incline, laxe $x$ est choisi dans le meme sens que $\vec{a}$  $$a=g\sin \theta$$
### mouvement a deux dimensions
la position du point $1$ est $\vec{r}_{1}=x_{1}\hat{\imath}+y_{1}\hat{\jmath}$
la position du point 2 est $\vec{r}_{2}=x_{2}\hat{\imath}+y_{2}\hat{\jmath}$
$$\Delta \vec{r}=\vec{r}_{2}-\vec{r}_{1}$$
$$\Delta \vec{r}=(x_{2}-x_{1})\hat{\imath}+(y_{2}-y_{1})\hat{\jmath}$$
le vecteur vitesse en un point d'une trajectoire: $\vec{v}=v_{x}\hat{\imath}+v_{y}\hat{\jmath}$
$$v_{x}=v\cos \theta$$
$$v_{y}=v\sin \theta$$
$$\theta=\arctan \frac{v_{y}}{v_{x}}$$
le vecteur acceleration est la difference entre deux vecteurs vitesses par rapport au temps: $\vec{a}=\frac{\vec{v}_{2}-\vec{v}_{1}}{t_{2}-t_{1}}$
$\vec{a}=\frac{\Delta \vec{v}}{\Delta t}=\frac{\Delta v_{x}}{\Delta t}\hat{\imath}+\frac{\Delta v_{y}}{\Delta t}\hat{\jmath}$
#### mouvement du projectile
la trajectoire est une combinaison du MRU en x et d'un MRUA en y
#### mcu
vitesse est tangentielle et constante
periode: $T=\frac{2\pi r}{v}$ $(s)$
frequence: $f=\frac{1}{T}$ $(Hz)$

deplacement circulaire: $\Delta s=r\Delta \theta$ $(m)$

l'orientation de la vitesse change
l'acceleration pointe toujours le centre de la trajectoire circulaire
module de l'acceleration centripete: $a_{c}=\frac{v^2}{r}$ $(m/s^2)$
#### MCUA
referentiel: lorsque la dirrection de l'acceleration change avec le mouvement, les vecteurs unitaires $\hat{\imath}$ et $\hat{\jmath}$ sont remplaces par les vecteurs unitaire "mobiles" $\vec{u}_{\theta}$ et $\vec{u}_{r}$
$$\vec{a}=a_{\theta}\vec{u}_{\theta}+a_{r}\vec{u}_{r}$$
une variation du module de la vitesse est relie a une acceleration tangentielle

une variation d'orientation est relie a une acceleration prependiculaire (radiale)

$$\vec{v}=v_{\theta}\vec{u}_{\theta}$$
$a_{r}=\frac{v_{\theta}^2}{r}$
$$\vec{a}=a_{\theta}\vec{u}_{\theta}+a_{r}\vec{u}_{r}=\frac{dv}{dt}\vec{u}_{\theta}-\frac{v^2}{r}\vec{u}_{r}$$
module de l'acceleration: $a=\sqrt{ a_{\theta}^2+a_{r}^2 }$
orientation: $\phi=\arctan\left( \frac{|a_{r}|}{a_{\theta}} \right)$
$\phi$: angle de $\vec{a}_{\theta}$ a $\vec{a}$

$\Delta s=v_{0\theta}t+\frac{1}{2}a_{\theta}t^2$
$v_{\theta}=v_{0\theta}+a_{\theta}t$
$v_{\theta}^2=v_{0\theta}^2+2a_{\theta}\Delta s$
### mouvement relatif

$$\vec{r}_{a/b}=\vec{r}_{a/c}+\vec{r}_{c/b}$$
$$\vec{v}_{a/b}=\vec{v}_{a/c}+\vec{v}_{c/b}$$
$$\vec{a}_{a/b}=\vec{a}_{a/c}$$


## dynamique
### forces
une action exerce par un objet sur un objet
superposition des forces: $$\vec{F}_{res}=\sum_{i}^{n}\vec{F}_{i}$$
#### gravitationelle
$$\vec{F}_{g}=m\vec{g}$$
#### elastic
$$\vec{F}_{el}=-k\Delta L\hat{\imath}$$
#### normal
$$\vec{N}$$
#### tension
$$\vec{T}$$
#### compression
$$\vec{C}$$
#### frotement cinetique
$$\vec{f}_{c}$$
#### frotement statique
$$\vec{f}_{s}$$
#### pousse d'archimede
$$\vec{F}_{A}=\rho_{f}V_{im}g\hat{\jmath}$$
### forces fondamentals
#### gravitationelle
force lie a la masse
#### electromagnetique
force lie aux charge electrique et magnetique
#### interaction forte
force lie aux gluons et quarks
#### interaction faible
force lie aux nutrinos

### premiere loi de newton
tout objet reste immobile ou dans un mouvement rectiligne uniforme si $\vec{F}_{res}=0\vec{}$

seulement dans un referentiel inertiel

### deuxieme loi de newton
$$\vec{F}_{res}=m\vec{a}$$
### poid
$$\vec{P}=\vec{F}_{g}=m\vec{g}$$
poid apparent: force de contact qui supporte l'objet. correspond a la sensation de poid
$$\vec{P}_{ap}=m\vec{g}-m\vec{a}$$
### force de frottement
[[coefficients of friction]]
$$f_{smax}=\mu_{s}N$$
$$f_{c}=\mu _{c}N$$
### trainee
[[drag coefficients]]
$$f_{T}=\frac{1}{2}C_{X}A\rho_{f}v^2$$

### 3e loi de newton
les forces existent toujours par pairs
elles ont le meme module
meme direction mais sens opposes
#### forces internes
si un systeme est forme de plusiseurs blocs, tous les blocs ont la meme acceleration
### cordes et poulies
la tension est la meme partout dans la corde

4 hypotheses:
- la masse des cordes est neglige par rapport a la corde
- l'etirement des cordes est negligeable
- la masse de la poulie est negligeable
- la poulie tourne sans frottement autour de son axe
### dynamique du mouvement circulaire
#### mcu
$$\vec{F}_{res}=m\vec{a}_{c}=\frac{mv^2}{r}\vec{u}_{c}$$
#### mouvement helicoidal
##### vitesse
$$\vec{v}=v_{\theta}\vec{u}_{\theta}+v_{z}\hat{k}=v\sin \phi \vec{u}_{\theta}+v\cos \phi \vec{k}$$
##### periode de revolution
$$T= \frac{2\pi r}{v_{\theta}}=\frac{2\pi r}{v\sin \phi}$$
##### acceleration centripete
$$a_{c}=\frac{v_{\theta}^{2}}{r} = \frac{v^{2}\sin^{2}\phi}{r}$$

#### loi de la gravitation universelle
$$F_{g}=\frac{Gm_{1}m_{2}}{r^2}$$
$G=6,67(10^{-11})$Nm$^2$/kg$^2$
#### mouvement orbital
$$v=\sqrt{ \frac{GM}{r} }$$
##### 3e loi de kepler appliquee aux orbites circulaires
$$T^{2}= \frac{4\pi^{2}}{GM}r^3$$

#### mcu non uniforme
$$\vec{F}=\vec{F}_{c}+\vec{F}_{\theta}$$
$$\vec{F}_{c}=\frac{mv^2}{r}$$
$$\vec{F}_{\theta}=m\vec{a}_{\theta}=m\frac{dv}{dt}$$


## energies
l'energie est une capacite a mettre un objet en mouvement (ou a le deformer) <!-- capacite a effectuer un travail (le travail est l'energie utiliser) -->

### concervation de l'energie
l'energie est une grandeur scalaire physique qui se conserve
l'energie d'un systeme isole demeure constante <!-- seulement dans un univers vide vue que la symetrie temporel n'est pas applicable pour un univers courbe -->
lorsqu'un system est en interaction avec un autre systeme, les forces exercees de l'un a l'autre transferent de l'energie
le transfert d'energie est note $W$ et il est appele: travail d'une force. une force peut augmenter ou diminuer l'energie
### energi cinetique
$$K=\frac{1}{2}mv^2$$
### travail d'une force
energie transferee par une force pour realiser un mouvement
#### force constante
$$W=\vec{F}\cdot \Delta \vec{r}=F\Delta r\cos \phi=\vec{F}^T\Delta \vec{r}$$
#### force variable
$$W=\int_{i}^{f}\vec{F}\cdot d\vec{r}$$

### theorem de l'energi cinetique
$$\Delta K=K_{f}-K_{i}=W$$
### travail de la force elastique
$$W_{el}=\frac{1}{2}kx_{i}^{2} - \frac{1}{2}kx_{f}^{2}$$

### puissance
$$P_{moy}=\frac{W}{\Delta t}$$
puissance instantane
$$P=\dot{W}=\vec{F}\cdot \vec{v}=Fv\cos \phi$$
### energie potentiel
$$U_{el}=\frac{1}{2}kx^2$$
$$U_{g}=mgh$$
### energie mecanique
$$E_{mec}=K+U$$
$$E_{mec,i}=E_{mec,f}$$
$$K_{i}+U_{i}=K_{f}+U_{f}$$
$$\Delta K+\Delta U=0$$
$$\Delta E_{mec}=0$$
$$\Delta E_{mec}=W_{ext}$$
### energie thermique
$$E_{th}=K_{micro}+U_{micro}$$
$$\Delta E_{th}=Q$$
$$\Delta E=W_{ext}+Q$$

## collisions
### impulsion
$$J=\int_{t_{i}}^{t_{f}}\vec{F}dt$$

### qtt de mouvement
$$\vec{p} = m\vec{v}$$
$$\vec{F}_{res}=m\dot{\vec{v}}=\dot{\vec{p}}$$
$$\vec{p}_{i}=\vec{p}_{f}$$
$$\Delta \vec{p}=\vec{J}$$
### centre de masse
$$\vec{r}_{cm}=\frac{1}{M}\int \vec{r}dm=\frac{1}{V}\int \vec{r}dV$$


### collisions
le centre de masse se deplace en ligne droite a vitesse constante

#### collisions elastiques
$$K_{i}=K_{f}$$
##### collisions elastique frontale
cible immobile
$$v_{1f}=\left(\frac{m_{1}-m_{2}}{m_{1}+m_{2}}\right)v_{1i}$$
$$v_{2f}=\left( \frac{2m_{1}}{m_{1}+m_{2}} \right)v_{1i}$$
###### $m_{1}=m_{2}$
$$\vec{v}_{i_{1}}=\vec{v}_{f_{2}}$$
###### $m_{1} > m_{2}$
$$$$

###### $m_{1}<m_{2}$
$$\vec{v}_{1i}$$
#### collisions inelastiques
une partie de l'energie cinetique est transformee en energie thermique, sonore etc
$$K_{i}<K_{f}$$
##### collisions parfaitement inelastiques
les deux objets restent lies ensemble apres la collision
$$\vec{p}_{i}=\left( \sum m\right)\vec{v}_{f}$$

#### collisions explosives
une partie de l'energie du systeme est transformee en energie cinetique
$$K_{i}>K_{f}$$
## cinematique de rotation
### vitesse angulaire
#### moyenne
$$\omega_{moy,z}=\frac{\Delta \theta}{\Delta t}$$
#### instantanee
$$\omega_{z}=\frac{d\theta}{dt}$$
### acceleration angulaire
#### moyenne
$$\alpha_{moy,z}=\frac{\Delta \omega}{\Delta t}$$
#### instantanee
$$\alpha_{z}=\frac{d\omega}{dt}$$

### acceleration angulaire constante
$$\omega=\omega_{0}+\alpha t$$
$$\theta=\theta_{0}+\omega_{0}t+\frac{1}{2}\alpha t^2$$
$$\omega^2-\omega^2_{0}=2\alpha(\theta-\theta_{0})$$
$$\theta=\theta_{0}+\frac{\omega_{0}+\omega}{2}t$$
### MCUA
$$\Delta s=r\Delta \theta$$
$$v=r\omega$$
$$a_{\theta}=r\alpha$$
$$a_{r}=-r\omega^2$$
### moment d'inertie
$$I=\sum m_{i}r^2_{i}$$
$$K=\frac{1}{2}I\omega^2$$
$$I = I_{cm}+Mh^2$$
### conservation de l'energie
$$\Delta K+\Delta U=0$$
### roulement
$$K=K_{rot}+K_{cm}=\frac{1}{2}I_{cm}\omega^2+\frac{1}{2}Mv_{cm}^2=\frac{1}{2}(I_{cm}+MR^2)(\omega^2)$$
### transmission de rotation
#### roues solidaires
roues ayant le meme essieu
$$\vec{\omega}_{1}=\vec{\omega}_{2}$$
#### roues en contacte
$$R_{1}\vec{\omega}_{1}=-R_{2}\vec{\omega}_{2}$$
#### transmission par couroie ou poulie
$$R_{1}\vec{\omega}_{1}=R_{2}\vec{\omega}_{2}$$
## dynamique de rotation
### moment de force
$$\vec{\tau}=\vec{F}\times \vec{r}$$
$$\vec{\tau}=I\vec{\alpha}$$
### energie cinetique
$$K=\frac{1}{2}I\omega^2$$
### travail
$$W=\int_{\theta_{i}}^{\theta_{f}}\tau d\theta$$
### puissance
$$P=\vec{\tau}\cdot \vec{\omega}$$
### moment cinetique
$$\vec{l}=\vec{r}\times \vec{p}$$
$$\vec{\tau}=\dot{\vec{l}}$$
$$\vec{l}=I\vec{\omega}$$
## gravitation

[[astronomical data]]
### champ gravitationelle
$$\vec{g}=\frac{\vec{F}_{g}}{m_{0}}$$
### vitesse de liberation
$$v_{lib}=\sqrt{ \frac{2GM}{R} }$$


