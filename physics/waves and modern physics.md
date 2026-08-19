---
abstract:
---


| precursors | [[CM]] [[EM]] |
| ---------- | ------------- |
| #tags      |               |
| level      | #college      |

# #french-note 
## oscillations
### mouvement harmonique simple
une oscillation autour d'une position d'equilibre
 $$x=x_{m}\cos(\omega t+\phi)$$
 $$\omega=\frac{2\pi}{T}=2\pi f$$
 phase: $\Phi=\omega t+\phi$
 $$v_{x}=-\omega x_{m}\sin(\omega t+\phi)$$
 $$a_{x}=-\omega^{2} x_{m}\cos(\omega t+\phi)$$
 $$\ddot{x}=-\omega^{2}x$$
#### system bloc ressort
$$F_{x}=-kx=ma_{x}$$
$$a_{x}=-\frac{k}{m}x$$
$$\omega=\sqrt{ \frac{k}{m} }$$
$$T=2\pi \sqrt{ \frac{m}{k} }$$
system vertical:
a l'equiliber $$F_{y}=-mg+k\Delta L=0$$
$$F_{y}=-mg+k(\Delta L-y)=ma_{y}$$
$$a_{y}=-\frac{k}{m}y$$
$$\frac{k}{m}=\frac{g}{\Delta L}$$
##### energie
$$U=\frac{1}{2}kx^{2}=\frac{1}{2}kx^{2}_{m}\cos^{2}(\omega t+\phi)$$
$$K=\frac{1}{2}mv^{2}=\frac{1}{2}kx^{2}_{m}\sin^{2}(\omega t+\phi)$$
$$E_{mec}=U+K=\frac{1}{2}kx^{2}+\frac{1}{2}mv^{2}=\frac{1}{2}kx^{2}_{m}$$
#### pendules 
$$\tau_{z}=-Lmg\sin \theta=-I\alpha_{z}$$
$$\alpha= \ddot{\theta}=-\frac{Lmg}{I}\sin \theta \simeq -\frac{Lmg}{I}\theta$$
$$\omega=\sqrt{ \frac{Lmg}{I} }=\sqrt{ \frac{g}{L} }$$
$$T=2\pi \sqrt{ \frac{L}{g} }\simeq 2\sqrt{ L }$$
##### pendules compose
$$\sum \tau_{z}=-mgh\sin \theta=I\alpha_{z}$$
$$\alpha=-\frac{mgh}{I}\sin \theta \simeq-\frac{mgh}{I}\theta$$
$$\theta=\theta_{m}\cos(\omega t+\phi)$$
$$\omega=\sqrt{ \frac{mgh}{I} }$$
$$I=I_{cm}+mh^{2}$$
#### circuit LC
$$\Delta V_{C}+\Delta V_{L}=\frac{Q}{C}-L\ddot{\imath}=0$$
$$i=-\dot{Q}$$
$$\ddot{Q}=-\left( \frac{1}{LC} \right)Q$$
$$Q=Q_{m}\cos(\omega t+\phi)$$
$$\omega=\sqrt{ \left( \frac{1}{LC} \right) }$$
$$i=\omega Q_{m}\sin(\omega t+\phi)$$
### oscillations amorties
$$\vec{f}_{f}=-b\vec{v}$$
$$\sum\limits_{}F_{x}=-kx-bv_{x}=ma$$
$$\ddot{x}+\frac{b}{m}\dot{x}+\frac{k}{m}x=0$$
$$x=x_{0}e^{-bt/2m}\cos(\omega t+\phi)$$
$$\omega=\sqrt{ \frac{k}{m}-\frac{b^{2}}{2m^2} }=\sqrt{ \omega_{0}^{2}-\frac{b^2}{2m^{2}} }$$
$$\omega_{0}=\sqrt{ \frac{k}{m} }$$
$$E_{mec}=U+K=\frac{1}{2}kx_{m}^{2}=\frac{1}{2}kx^{2}_{m}e^{-bt/m}$$
$$b_{c}=\sqrt{ 4km }$$
#### circuit RLC
$$\Delta V_{C}+\Delta V_{L}+\Delta V_{R}=\frac{Q}{C}-L\ddot{\imath}-Ri$$
$$i=-\dot{Q}$$
$$\ddot{Q}+\frac{R}{L}\dot{Q}+\frac{1}{LC}Q=0$$
$$Q=Q_{0m}e^{-Rt/2L}\cos(\omega_{a}t+\phi)$$
$$\omega_{a}=\sqrt{ \frac{1}{LC}-\frac{R^2}{4L^2} }=\sqrt{ \omega_{0}^{2}-\frac{R^{2}}{4L^{2}} }$$
### osciallation force
$$F_{ext}=F_{m}\cos(\omega_{ext}t+\phi)$$
$$\ddot{x}+\frac{b}{m}\dot{x}+\frac{k}{m}x=\frac{F_{m}\cos(\omega_{ext}t+\phi)}{m}$$
$$x_{m}=\frac{F_{m}}{m\sqrt{ (\omega _{ext}^{2}-\omega_{0}^{2})^{2}+\left( \frac{b\omega_{ext}}{m} \right)^2 }}$$
$$\omega_{0}=\sqrt{ \frac{k}{m} }$$
#### resonance
$$x_{m}=\frac{F_{m}}{m\sqrt{ \left( \frac{b\omega_{ext}}{m} \right)^{2} }}=\frac{F_{m}}{m\left( \frac{b\omega_{ext}}{m} \right)}=\frac{F_{m}}{b\omega_{ext}}$$
## ondes
### types d'ondes
- mecaniques (ont besoin d'un milieu pour se deplacer)
- ondes electromagnetiques (oscillation des champs electrique et magnetique)
- ondes de matiere (associes aux paricule comme l'electron et le proton)
- ondes gravitationnelles (oscillation de la courbure de l'espcae temps)
### ondes progressives a une dimension
$$f(x,t)=f(x\pm vt)$$
$$\frac{\partial^{2}f}{\partial x^{2}}=\frac{1}{v^{2}} \frac{\partial^{2}f}{\partial t^2}$$
### ondes sur une corde
$$v=\sqrt{ \frac{F}{\mu} }$$
### ondes progressives sinusoidales
$$v=\frac{d}{t}=\frac{\lambda}{T}=\lambda f$$
$$y(x;0)=y_{m}\sin(kx+\phi)$$
$$k=\frac{2\pi}{\lambda}$$
$$y(x;t)=y_{m}\sin(k(x-vt)+\phi)=y_{m}\sin\left( kx-\frac{2\pi}{\lambda}vt+\phi \right)$$
$$y(x;t)=y_{m}\sin (kx-2\pi ft+\phi)=y_{m}\sin t(kx-\omega t+\phi)$$
$$v=\lambda f=\frac{\omega}{k}$$
$$\frac{\partial y}{\partial t}=-\omega y_{m}\cos(kx-\omega t+\phi)$$
$$\frac{\partial^{2} y}{\partial t^{2}}=-\omega^{2} y_{m}\sin(kx-\omega t+\phi)$$
$$\ddot{y}=-\omega^{2}y$$
### puissance
$$P=\frac{1}{2}Z\omega^{2}y_{m}^{2}=\frac{1}{2}\mu v\omega^{2}y^{2}_{m}$$
$$Z=\mu v=\sqrt{ \mu F }=\frac{F}{v}$$
 
### reflexion et transmission des ondes
dur: extrimite fixe, onde inverse
mol: extrimite libre, onde non inverse


une partie est reflechie et une autre est transmise
plus dense > moin dense => mol
moin dense > plus dense => dure

pas de reflexion pour la transmission
### superposition des ondes
$$y'(x;t)=y_{1}(x;t)+y_{2}(x;t)$$
### intefrerence
soit
$$y_{1}=y_{m}\sin(kx-\omega t+\phi_{1})=y_{m}\sin(\Phi_{1})$$
$$y_{2}=y_{m}\sin(kx-\omega t+\phi_{2})=y_{m}\sin(\Phi_{2})$$
$$\Delta \Phi=\Phi_{2}-\Phi_{1}=\phi_{2}-\phi_{1}$$
$$y'(x;t)=2y_{m}\cos\left( \frac{\Delta \Phi}{2} \right)\sin(kx-\omega t+\bar{\phi})$$
$$y'_{m}=2y_{m}\cos\left( \frac{\Delta \Phi}{2} \right)$$
intereference constructive: $\Delta \Phi=2\pi n$
interference destructive: $\Delta \Phi=2\pi n+\pi$
### ondes stationaires
resultat de l'intefrerance entre deux ondes egal en mouvement oppose

tout les points font un mouvement harmonique simple

soit
$$y_{1}=y_{m}\sin(kx+\omega t)$$
$$y_{2}=y_{m}\sin(kx-\omega t)$$
$$y'(x;t)=2y_{m}\sin(kx)\cos(\omega t)$$
$$y'_{m}=2y_{m}\sin(kx)$$
interference constructive: $x=\frac{2\pi n+1}{2k}$
interference destructive: $x=\frac{\pi n}{k}$

position des noeuds: $x_{n}=\frac{n\lambda}{2}$
position des ventres: $x_{n}=\frac{(2n+1)\lambda}{4}$

### mode normaux d'oscillation
$$y'(L;t)=2y_{m}\sin(kL)\cos(\omega t)=0 \iff kL=n\pi$$
$$\lambda_{n}=\frac{2L}{n}$$
$$f_{n}=\frac{v}{\lambda_{n}}=\frac{nv}{2L}=nf_{1}$$
$$f_{1}=\frac{v}{2L}$$
## ondes sonores
onde longitudinale qui se propage dans un milieu a la maniere d'une onde progressive sinusoidale
$$s=s_{m}\sin(kx-\omega t+\phi)$$
$$v=\lambda f=\frac{\omega}{k}$$
module de compressibilite: $$B:=-\frac{F/A}{\Delta V/V}=-\frac{\Delta p}{\Delta V/V}=-V\frac{\partial p}{\partial V}=-V \frac{\partial}{\partial V} \left(-\frac{\partial U}{\partial V}\right)=V \frac{\partial^{2}U}{\partial V^2}$$

dans un long tuyeau: $$\Delta p=-\frac{B\Delta V}{V}=-\frac{B\Delta s}{\Delta x}=-B \frac{\partial s}{\partial x}$$
$$\Delta p=-Bks_{m}\cos(kx-\omega t+\phi)=-\Delta p_{m}\cos(kx-\omega t+\phi)$$
$$\Delta p_{m}=Bks_{m}$$
### vitesse du son
$$v=\sqrt{ \frac{B}{\rho} }$$
dans un gaz
$$B=\gamma p$$
$$pV= \frac{mRT}{M}$$
$$B=\frac{\gamma mRT}{VM}=\frac{\gamma \rho RT}{M}$$
$$v=\sqrt{ \frac{\gamma RT}{M} }$$
### ondes en plusieurs dimension
$$s(r;t) = s_{m}(r)\sin(kr-\omega t+\phi)$$
### intensite sonore
$$I=\frac{P}{A}=\frac{1}{2}\rho v\omega^{2}s^{2}_{m}=\frac{1}{2}Z\omega^{2}s^{2}_{m}$$
$$Z=\rho v=\sqrt{ \rho B }=\frac{B}{v}$$
onde spherique:
$$I=\frac{P_{S}}{A}=\frac{P_{S}}{4\pi r^{2}}$$
$$\beta=10dB\log \frac{I}{I_{0}}$$
seuil d'audibilite:
$$I_{0}=1e-12Wm^{-2}$$
### interference des ondes sononres
$$s_{1}=s_{m}\sin(kr_{1}-\omega t+\phi_{1})=s_{m}\sin(\Phi_{1})$$
$$s_{2}=s_{m}\sin (kr_{2}-\omega t+\phi_{2})=s_{m}\sin(\Phi_{2})$$
$$s=2s_{m}\cos\left( \frac{\Delta \Phi}{2} \right)\sin(k\bar{r}-\omega t+\bar{\phi})$$
constructive: $\Delta \Phi=2\pi n$
destructive: $\Delta \Phi=2\pi n+1$

$$\Delta \Phi=k(r_{2}-r_{2})+(\phi_{2}-\phi_{1})=\frac{2\pi \Delta r}{\lambda}+\Delta \phi$$
soit $\Delta \phi=0$
constructive: $\Delta r=m\lambda$
destructive: $\Delta r=\left( m+\frac{1}{2} \right)\lambda$
### battemeents
$$f_{batt}=|f_{1}-f_{2|}$$
$$f_{mod}=\frac{|f_{1}-f_{2}|}{2}$$
### ondes sonores stationaires
extrimite ferme: noeud
extrimite ouverte: ventre

#### ferme-ferme / ouvert-ouvert
$$\lambda_{n}=\frac{2L}{n}$$
$$f_{n}=\frac{nv}{2L}=nf_{1}$$
#### ouvert fermer

$$\lambda_{2n-1}=\frac{4L}{2n-1}$$
$$f_{2n-1}=\frac{(2n-1)v}{4L}=(2n-1)f_{1}$$
### effet doppler
#### source et detecteur imobile
$$f=\frac{v_{x}}{\lambda}$$
#### detecteur en mouvement
$$f'=\frac{v'_{x}}{\lambda}=\frac{v_{x}-v_{Dx}}{v_{x}}f$$
#### source en mouvement
$$\lambda'=v_{x}T-v_{Sx}T=\frac{v_{x}-v_{Sx}}{f}$$
$$f'=\frac{v_{x}}{\lambda'}=\frac{v_{x}}{v_{x}-v_{Sx}}f$$
#### source et detecteur en mouvement
$$f'=\frac{v_{x}-v_{Dx}}{v_{x}-v_{Sx}}f$$
### vitesse supersonic
$$\sin \theta=\frac{v_{s}}{v}$$


## ondes electromagnetiques
### equations de maxwell
$$\begin{align}
\oint \vec{E}\cdot d\vec{A}&=0 \\
\oint \vec{B}\cdot d\vec{A}&=0 \\
\oint \vec{E}\cdot d\vec{s}&=-\int \frac{\partial\vec{B}}{\partial t}\cdot \vec{A} \\
\oint \vec{B}\cdot d\vec{s}=\epsilon_{0}\mu_{0}\int \frac{\partial\vec{E}}{\partial t}\cdot d\vec{A}
\end{align}$$

### proprietes
$$\vec{B}\perp \vec{E}$$
$\vec{E}\times \vec{B}$ donne le sens de propagation (ondes transversale)
$$c=\frac{1}{\sqrt{ \epsilon_{0} \mu_{0}}}$$
$\vec{B}$ et $\vec{E}$ sont en phase
$$B=\frac{E}{c}$$

$$\vec{E}=E_{m}\sin(ky-\omega t+\phi)\hat{k}$$
$$\hat{B}=B_{m}\sin(ky-\omega t+\phi)\hat{\imath}$$
une charge electrique accelerer produit une onde electromagnetique
### equation d'onde
#### loi de faraday
<!--- TODO --->
#### theorem d'ampere maxwell
<!--- TODO --->
### energie transporte
$$I:=\frac{P}{A}=\frac{P_{s}}{4\pi r^{2}}$$
$$u=u_{E}+u_{B}=\frac{\epsilon_{0}}{2}E^{2}+\frac{1}{2\mu_{0}}B^{2}$$
$$u=\epsilon_{0}E^{2}$$
$$I=\frac{P_{moy}}{A}=\frac{U_{moy}}{A\Delta t}=\frac{u_{moy}Ac\Delta t}{A\Delta T}=\epsilon_{0}cE^{2}_{moy}=\frac{\epsilon_{0}c}{2}E^{2}_{m}=\frac{1}{2\mu c}E^{2}=\frac{1}{2}\sqrt{ \frac{\epsilon_{0}}{\mu_{0}} }E^{2}_{m}$$

### pression de radiation
$$p_{rad}=\frac{F_{rad}}{A_{eclaire}}=\left(\frac{1+\mathcal{R}}{c}\right)I$$
$\mathcal{R}$: proportion de la lumiere reflechie

### polarisation de la lumiere
plan de polarisation: plan du champ electrique
$$I_{0}=\frac{1}{2\mu_{0}c}E_{0}^{2}$$
$$I=I_{0}\cos^{2} \theta$$
## propagation de la lumiere
### vitesse de la lumiere dans les milieux transparents
$$n:=\frac{c}{v}=\sqrt{ \kappa }=\frac{\lambda}{\lambda_{m}}$$

### reflexion de la lumiere
$$\theta=\theta'$$
$$\delta=180^{\circ}-2\theta$$
### refraction
$$n_{1}\sin \theta_{1}=n_{2}\sin \theta_{2}$$
$$\delta=|\theta_{1}-\theta_{2}|$$
### reflexion totale interne
$$\sin \theta_{c}=\frac{n_{2}}{n_{1}}$$
### polarisation par reflexion
$$\tan \theta_{p}=\frac{n_{2}}{n_{1}}$$
## formation des images
### miroirs plans
$$q=-p$$
### miroirs spheriques
$$\frac{1}{p}+\frac{1}{q}=\frac{1}{f}=\frac{2}{R}$$
#### grandissement
$$m=\frac{y'}{y}=-\frac{q}{p}$$
### dioptres spheriques
$$\frac{n_{1}}{p}+\frac{n_{2}}{q}=\frac{n_{2}-n_{1}}{R}$$
#### grandissement
$$m=\frac{y'}{y}=-\frac{n_{1}q}{n_{2}p}$$
### dioptres plans
$$\frac{n_{1}}{p}+\frac{n_{2}}{q}=0$$
$$m=1$$
### lentilles minces
$$\frac{1}{p}+\frac{1}{q}=\left( \frac{n_{2}}{n_{1}}-1 \right)\left( \frac{1}{R_{1}}-\frac{1}{R_{2}} \right)=\frac{1}{f}=V$$
$$m=-\frac{q}{p}$$
### oeil
#### accomodation
$$\frac{1}{d_{PR}}+\frac{1}{\ell}=V_{min}$$
$$\frac{1}{d_{PP}}+\frac{1}{\ell}=V_{max}$$
$$A_{acc}=V_{max}=V_{min}$$


## interfecrence de la lmiere
conditions d'interference
$N:=\frac{r}{\lambda_{n}}=\frac{nr}{\lambda}$
constructive:$$N_{2}-N_{1}=m_{c},\ m_{c}\in \mathbb{Z}$$
destructive: $$N_{2}-N_{1}=m_{d}+\frac{1}{2},\ m_{d}\in \mathbb{Z}$$
$$N=\frac{nr}{\lambda}+N_{refl}$$
dure: $N_{refl}=\frac{1}{2}$
molle: $N_{refl}:0$
### experience de young
$$N_{2}-N_{1}=\frac{\Delta r}{\lambda}$$
$$\Delta r\approx d\sin \theta$$
constructive: $$d\sin \theta=m_{c}\lambda,\ mc\in \mathbb{Z}$$
destructive: $$d\sin \theta=\left( m_{d}+\frac{1}{2} \right)\lambda,\ m_{d}\in \mathbb{Z}$$
$$\sin \theta \approx \tan \theta=\frac{y}{L}$$
constructive: $$y_{m_{c}}=\frac{m_{c}\lambda}{d}L,\ m_{c}\in \mathbb{Z}$$
destructive: $$y_{m_{d}}=\frac{\left( m_{d}+\frac{1}{2} \right)\lambda}{d},\ m_{d}\in \mathbb{Z}$$
$$\Delta y=\frac{\lambda L}{d}$$
$$I_{(2)}=4I_{(1)}\cos^{2}\left( \frac{\Delta \Phi}{2} \right)$$
$$\Delta \Phi=\frac{2\pi d\sin\theta}{\lambda}$$
### couche mince
$$N_{1}=N_{refl}$$
$$N_{2}=\frac{n_{2}L}{\lambda}+N_{refl}$$
$$\Delta N_{k>2}\sim \mathcal{O}^{k-1} $$
$n_{1,2}<n_{2,3}$:$N_{refl}=\frac{1}{2}$
$n_{2,3}<n_{1,2}$: $N_{refl}=0$

#### bulle de savon
constructive: $$L=\frac{\left( m_{c}+\frac{1}{2} \right)\lambda}{2n}$$
destructive: $$L=\frac{(m_{d}+1)\lambda}{2n}$$
### interferometre de michelson
$$\Delta m =\frac{2d}{\lambda}$$
ou $\Delta m$ est le nombre de frange qui passent devant un point en deplacant le miroir 1 d'une distance $d$

$$\Delta m=\frac{2\ell(n-1)}{\lambda}$$
## difraction de la lumiere
### fente etroite
$$a\sin \theta=p\lambda,\ p\in\mathbb{Z}\setminus \{ 0 \}$$
### iradiance
$$I=I_{max} \left( \frac{\sin \alpha}{\alpha} \right)^{2}$$
$$\alpha=\frac{\Delta \Phi}{2}=\frac{\pi a\sin \theta}{\lambda}$$
### ouverture circulaire
$$\sin \theta_{1}=\frac{1.22\lambda}{D}$$
### pouvoir de resolutino des instruments d'optiques
lentille:$$R_{pic}=\frac{1.22\lambda f}{D}$$
ou $f$ est la distance focale de la lentille
$$\theta_{R}=\frac{1.22\lambda}{D}$$
### diffractino par deux fentes
$$I=I_{max}\cos^{2}\left( \frac{\Delta \Phi}{2} \right)\left( \frac{\sin \alpha}{\alpha} \right)^{2}$$
$$\Delta \Phi=\frac{2\pi d\sin \theta}{\lambda}$$
$$\alpha=\frac{\pi a\sin \theta}{\lambda}$$
### resaux de diffraction
$$\Delta y=\frac{\lambda L}{d}$$
$$d=\frac{1}{n}$$
## relativite restreinte
### relativite galileene
$$\begin{align}
x'&=x-vt&x&=x'+vt \\
y'&=y&y&=y' \\
z'&=z&z&=z'
\end{align}$$
$$\begin{align}
u_{x}'&=u_{x}-v&u_{x}&=u'_{x}+v \\
u_{y}'&=u_{y}&u_{y}&=u_{y}' \\
u_{z}'&=u_{z}&u_{z}&=u_{z}' \\
\end{align}$$
$$d=d'$$
$$\vec{a}'=\vec{a}$$
### postulats d'einstein
la vitesse de la lumiere est la meme dans tous les referentiels
### dilatation du temps
$$\Delta t=\frac{\Delta \tau}{\sqrt{ 1-\left( \frac{v}{c} \right)^{2} }}=\gamma \Delta \tau$$
$$\gamma=\frac{1}{\sqrt{ 1-\left( \frac{v}{c} \right)^{2} }}$$
$$\beta=\left( \frac{v}{c} \right)^2$$
### contraction des longueurs
$$L=\frac{L_{0}}{\gamma}$$
### effet doppler relativiste
$$f=\sqrt{ \frac{1\mp\beta}{1\pm \beta}}f_{0}$$
$$\lambda=\sqrt{ \frac{1\pm\beta}{1\mp \beta} }\lambda_{0}$$
### transformation de lorentz
$$\begin{align}
x'&=\gamma(x-vt) \\
y'&=y \\
z'&=z \\
t'&=\gamma\left( t-\frac{vx}{c^2} \right)
\end{align}$$
### vitesse relativiste
$$u_{x}'=\frac{u_{x}-v}{1-\frac{vu_{x}}{c^2}}$$
$$u_{y}'=\frac{u_{y}}{\gamma(1-\frac{vu_{x}}{c^2})}$$
$$u_{x}=\frac{u_{x}'+v}{1+\frac{vu'_{x}}{c}}$$
$$u_{y}=\frac{u_{y}'}{\gamma(1+\frac{vu'_{x}}{c})}$$
### quantite de mouvement relativiste
$$p_{x}:=m \frac{dx}{d\tau}$$
$$\gamma_{p}=\frac{1}{\sqrt{ 1-u^{2}/c^2 }}$$
$$\vec{p}=\gamma_{p}m\vec{u}$$
### energie
$$d\tau^2=dt^2-\left( \frac{dx}{c} \right)^2$$
$$E=\gamma_{p}mc^2=E_{0}+K$$
$$E_{0}=mc^2$$
$$K=(\gamma_{p}-1)mc^2=(\gamma_{p}-1)E_{0}$$
$$E_{0}^2=E^2-p^2c^2$$

## dualite onde particule
### photon
$$E=hf=\frac{hc}{\lambda}$$
$$E_{faisc}=Nhf=\frac{Nhc}{\lambda}$$
### rayonnement du corp noir

$$I=\sigma T^4$$
$$R^{Wien}_{T}(\lambda)=\frac{b}{\lambda^5}e^{-a/\lambda T}$$
$$R^{Planck}_{T}(\lambda)=\frac{b}{\lambda^{5}} \frac{1}{e^{a/\lambda T}-1}$$
$$R_{T}(\lambda)= \frac{8\pi c^{2}h}{\lambda^{5}} \frac{1}{e^{hc/\lambda kT}-1}$$
### effet photoelectrique
$$\frac{hc}{\lambda}=eV_{arret}+\Phi$$
$$\lambda_{seuil}=\frac{hc}{\Phi}$$
### effet compton
$$p=\frac{h}{\lambda}$$
$$\frac{h}{\lambda}=\frac{h}{\lambda'}\cos \theta+p_{e,x}$$
$$0=\frac{h}{\lambda'}\sin \theta+p_{e,y}$$
$$\Delta \lambda=\frac{h}{mc}(1-\cos \theta)$$
$$E'=\frac{hc}{\lambda'}=\frac{hc}{\lambda+\Delta \lambda}$$
### ondes de matiere
$$\lambda=\frac{h}{p}$$
### principe d'incertitude
$$\Delta x\Delta p_{x}\geq \frac{\hbar}{2}$$
$$\Delta E\Delta t\geq \frac{\hbar}{2}$$
## mecanique quantique
### fonction d'onde
$$\Pi(x)=|\psi(x)|^2$$
$$P(x_{1}\leq x\leq x_{2})=\int_{x_{1}}^{x_{2}}|\psi(x)|^{2}dx=\int_{x_{1}}^{x_{2}}\overline{\psi(x)}\psi(x)dx $$
$$\int_{-\infty}^{\infty}\overline{\psi(x)}\psi(x)dx=1 $$
$$\langle x\rangle=\int_{-\infty}^{\infty}\overline{\psi(x)}x\psi(x)dx$$
### equation de shrodinger
$$-\frac{\hbar}{2m} \Psi_{xx}+U\Psi=i\hbar \Psi_{t}$$
### particule libre
$$U=0$$
$$\Psi=Ae^{i(kx-\omega t)}=Ae^{i(px-Et)/\hbar}$$
$$p=\frac{h}{2\pi}k=\hbar k$$
$$\frac{p^{2}}{2m}=E$$
### equation independante du temps
$$\Psi=\psi e^{-iEt/\hbar}$$
$$-\frac{\hbar}{2m} \psi_{xx}+U\psi=E \psi$$
### particule confinee a une dimension
$$U=\begin{cases}
0 & 0\leq x\leq L \\
\infty& 0>x \lor L<x
\end{cases}$$
$$\lambda_{n}=\frac{2L}{n}$$
$$p=\frac{h}{2L}n$$
$$E=\frac{h^{2}}{8mL^{2}}n^{2}=n^{2}E_{1}$$
$$\Delta E=\frac{hc}{\lambda}$$
$$\psi_{n}(x)=\begin{cases}
\sqrt{ \frac{2}{L} }\sin\left( \frac{n\pi x}{L} \right) & 0\leq x\leq L \\
0& 0>x\lor L<x
\end{cases}$$
### puits a deux dimensions
$$\psi_{n_{x},n_{y}}=\psi_{n_{x}}\psi_{n_{y}}$$
$$E_{n_{x},n_{y}}=\frac{h^{2}}{8m}\left( \frac{n_{x}^{2}}{L_{x}^{2}}+\frac{n_{y}^{2}}{L_{y}^2} \right)$$
### puits de hauteur finie
$$U(x)=\begin{cases}
0&-\frac{L}{2}\leq x\leq \frac{L}{2} \\
U_{0}&x<-\frac{L}{2}\lor x> \frac{L}{2}
\end{cases}$$
particule non confinee: energie non quantifie
#### particule piege
$$\psi=Ce^{-\kappa x}$$
$$\kappa=\frac{\sqrt{ 2m(U_{0}-E) }}{\hbar}=\sqrt{ \frac{2mU_{0}}{\hbar^{2}}-k^2 }$$
### spin
$$S=\sqrt{ s(s+1) }\hbar$$
$$S_{z}=m_{z}\hbar$$
## physique atomique
### raies spectral
$$\frac{1}{\lambda}=R_{\infty}\left( \frac{1}{n_{1}^{2}}-\frac{1}{n_{2}^2} \right)$$
### model de bohr
$$v=\sqrt{ \frac{e^{2}}{4\pi \epsilon_{0}mr} }$$
$$E=-\frac{e^{2}}{8\pi \epsilon_{0}r}$$
$$L=mrv=n\hbar$$
$$v=\frac{e^{2}}{4\pi \epsilon_{0}\hbar n}=\frac{\alpha c}{n}$$
$$r=\frac{\hbar}{\alpha mc}n^2=a_{0}n^2$$
$$E_{n}=-\frac{1}{2} \frac{\alpha^{2}mc^{2}}{n^2}$$
#### ions hydrogenoides
$$U=-\frac{Ze^{2}}{4\pi \epsilon_{0}r}$$
$$\alpha\to Z\alpha$$
### moment cinetique
$$L=\sqrt{ \ell(\ell +1) }\hbar$$

### fonctions donde
#### etat fondamental
$$\psi_{1s}(r)=\frac{1}{\sqrt{ \pi a_{0}^{3} }}e^{-r/a_{0}}$$
$$\Pi_{1s}=4\pi r^{2}|\psi_{1s}|^{2}=\frac{4r^2}{a_{0}^{3}}e^{-2r/a_{0}}$$
#### n=2
$$\psi_{2,0,0}=\frac{1}{\sqrt{ 8\pi a_{0}^3 }}\left( 1-\frac{r}{2a_{0}} \right)e^{-r/2a_{0}}$$
$$\psi_{2,1,0}=\frac{1}{4\sqrt{ 2\pi a_{0}^{3} }}e^{-r/2a_{0}}\cos \theta$$
$$\psi_{2,1,\pm_{1}}=\mp \frac{1}{8\sqrt{ \pi a_{0}^{3} }}e^{\frac{-r}{2a_{0}}\sin \theta}e^{\pm i \phi}$$
### moment cinetique total
$$\vec{J}=\vec{L}+\vec{S}$$
$$J=\sqrt{ j(j+1) }\hbar$$
$$j=|\ell\pm \frac{1}{2}|$$
### couplage spin orbite
$$\vec{\mu}_{s} =-\frac{ge}{2m}\vec{S}$$
$$\mu_{\ell}=-\frac{e}{2m}\vec{L}$$
$$E_{n,j}=E_{n}\left( 1+ \frac{\alpha^{2}}{n}\left( \frac{1}{j+\frac{1}{2}}-\frac{3}{4n} \right) \right)$$
### effet zeeman
$$U_{m_{\ell}}=-\vec{\mu}_{\ell}\cdot \vec{B}=\frac{e}{2m}\vec{L}\cdot \vec{B}=\frac{e}{2m}L_{z}B=\frac{e\hbar}{2m}m_{\ell}B=\mu_{B}m_{\ell}B$$
$$U_{Z}=\mu_{B}g_{j}m_{j}B$$
### structure hyperfine
$$\vec{\mu}_{p}=\frac{g_{p}e}{2m_{p}}\vec{S}_{p}$$
### atomes a plusieurs electrons
$$U=U_{noy}+U_{e}=-\frac{Ze^{2}}{4\pi \epsilon_{0}r}+U_{e}$$
## physique nucleaire
### rayon du noyeau
$$r=r_{0}A^\frac{1}{3}$$
### energie de liaison
$$E_{l}=(Zm_{H}+Nm_{n}-M)c^2$$
$$E_{l/n}=\frac{E_{l}}{A}$$
### loi de desintegration
$$\dot{N}=-\lambda N$$
$$N=N_{0}e^{-\lambda t}$$
$$R=\lambda N_{0}e^{-\lambda t}$$
$$t_{1/2}=\frac{\ln(2)}{\lambda}=\tau \ln(2)$$
### desintegration alpha
$$X_{Z}^{A}\to X_{Z-2}^{'A-4}+He_{2}^4$$
$$Q=-\Delta Mc^{2}=(M_{X}-M_{X'}-M_{He})c^{2}$$
### desintegration beta
#### $\beta^-$
$$X_{Z}^{A}\to X_{Z+1}^{'A}+e^{-}+\overline{\nu} $$
$$Q=-\Delta Mc^{2}=(M_{noyX}-M_{noyX'}-m_{e}-m_{\nu})c^{2}=(M_{X}-M_{X'}-m_{\nu})c^2$$
#### $\beta^+$
$$X_{Z}^{A}\to X_{Z-1}^{'A}+e^{+}+\nu$$
$$Q=-\Delta Mc^{2}=(M_{X}-M_{X'}-2m_{e}-m_{\nu})c^{2}$$


### capture electronique
$$X_{Z}^{A}+e^{-}\to X_{Z-1}^{'A}+\nu$$
### dose de rayonnement ionisant
$$D:=\frac{\Delta E}{M}$$
$$DE=w_{R}D$$

