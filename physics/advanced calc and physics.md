---
abstract:
---


| precursors | [[diff and int calc]] [[EM]] [[CM]] |
| ---------- | ----------------------------------- |
| #tags      |                                     |
| level      | #college                            |

# #french-note 
## math
### equations differentiels
ordre: ordre le plus eleve des derives
degre: degre de la derive d'ordre la plus eleve
solution: fonction respectant l'equation
solution general: famille de fonction respectant l'equation
solution particuliere: fonction respectant l'equation et la ou les valeurs initial et valeurs frontieres
#### ordre 1
##### separable
equation pouvant etre ecrite comme: $$f(t)dt+g(x)dx=0$$
solution: $$G(x)=-F(t)+C$$
$$x=G^{-1}(-F(t)+C)$$
ou $F$ est l'antiderive de $f$
##### lineaire
equation pouvant etre ecrite comme: $$\dot{x}+f(t)x=g(t)$$
solution: $$e^{\int f(t)dt}(\dot{x}+f(t)x)=e^{\int f(t)dt}g(t)$$
$$\frac{d}{dt}\left( xe^{\int f(t)dt} \right)=e^{\int f(t)ft}g(t)$$
$$xe^{\int f(t)dt}=\int e^{\int f(t)dt}g(t)dt$$
$$x=e^{-\int f(t)dt}\int e^{\int f(t)dt}g(t)dt$$

#### ordre 2 lineaire homogene a coefficient constant
$$a\ddot{x}+b\dot{x}+cx=0$$
polynome characteristique: $$P(r)=ar^{2}+br+c$$
soit $\lambda_{1},\lambda_{2}$ des solutions de $P(r)=0$
si $\lambda_{1}\neq \lambda_{2}\in \mathbb{R}$: $$x=C_{1}e^{\lambda_{1}t}+C_{2}e^{\lambda_{2}t}$$
si $\lambda_{1}=\lambda_{2}=\lambda \in \mathbb{R}$: $$x=e^{rt}(C_{1}+tC_{2})$$
si $\lambda_{1}=\alpha+\beta j,\lambda_{2}=\alpha-\beta j$
$$x=e^{\alpha t}(C_{1}\cos(\beta t)+C_{2}\sin (\beta t))$$


### vecteurs
forme polaire: $$\vec{u}=||\vec{u}||\angle\theta$$
forme algebrique: $$\vec{u}=\begin{bmatrix}
a&b
\end{bmatrix}$$
soit $\vec{u}=\begin{bmatrix}a&b\end{bmatrix},\vec{v}=\begin{bmatrix}c&d\end{bmatrix},k\in\mathbb{R}$ 
$$\vec{u}+\vec{v}=\begin{bmatrix}
(a+c)&(b+d)
\end{bmatrix}$$
$$k\vec{u}=\begin{bmatrix}
ka&kb
\end{bmatrix}$$
### nombres complex
$$j^{2}=-1$$
$$z=a+bj$$
$$\Re(z)=a$$
$$\Im(z)=b$$
soit $z_{1}=a_{1}+b_{1}j,z_{2}=a_{2}+b_{2}j,k\in \mathbb{R}$
$$z_{1}+z_{2}=(a_{1}+a_{2})+(b_{1}+b_{2})j$$
$$kz_{1}=ka_{1}+kb_{1}j$$
$$z_{1}z_{2}=(a_{1}a_{2}-b_{1}b_{2})+(a_{1}b_{2}+a_{2}b_{1})j$$
$$\frac{z_{1}}{z_{2}}=\frac{a_{1}a_{2}+(a_{2}b_{1}-a_{1}b_{2})j+b_{1}b_{2}}{a_{2}^{2}+b_{2}^{2}}$$
form trigonometric: $$z=||z||(\cos \theta+j\sin \theta)$$
form exponentiel: $$z=||z||e^{\theta j}$$
soit $z_{1}=||z_{1}||e^{\theta_{1} j},z_{2}=||z_{2}||e^{\theta_{2}j}$
$$z_{1}z_{2}=||z_{1}||||z_{2}||e^{j(\theta_{1}+\theta_{2})}$$
$$\frac{z_{1}}{z_{2}}=\frac{||z_{1}||}{||z_{2}||}e^{j(\theta_{1}-\theta_{2})}$$
$$z_{1}^{n}=||z_{1}||^{n}e^{n\theta_{1}j}$$

### fonctions multivaries
#### limites
$$\begin{align}
\lim\limits_{ (x,y) \to (a,b) }f(x,y)=L &\iff  \\
\forall\varepsilon>0\exists\delta>0 t.q \sqrt{ (x-a)^{2}+(y-b)^{2} }<\delta &\implies |f(x,y)-L|<\varepsilon
\end{align}$$

soit $\lim\limits_{ (x,y) \to (a,b) }f=L_{f},\lim\limits_{ (x,y) \to (a,b) }g=L_{g},k_{1},k_{2}\in \mathbb{R}$
$$\lim\limits_{ (x,y) \to (a,b) }(k_{1}f+k_{2}g)=k_{1}L_{f}+k_{2}L_{g} $$
$$\lim\limits_{ (x,y) \to (a,b) }fg=L_{f}L_{g} $$
$$\lim\limits_{ (x,y) \to (a,b) } \frac{f}{g}=\frac{L_{f}}{L_{g}} $$
$$\lim\limits_{ (x,y) \to (a,b) } f^{n}=L_{f}^n $$
#### derives partielles
$$f_{x}=\lim\limits_{ h_{x} \to 0 } \frac{f(x+h_{x},y)-f(x,y)}{h_{x}} $$
$$f_{y}=\lim\limits_{ h_{y} \to 0 } \frac{f(x,y+h_{y})-f(x,y)}{h_{y}} $$
#### diferentielle totale
$$df=f_{x}dx+f_{y}dy$$
#### derive totale
$$\dot{f}=f_{x}\dot{x}+f_{y}\dot{y}$$

#### derive directionel
$$\frac{dz}{dr}=z_{x} \frac{dx}{dr}+z_{y} \frac{dy}{dr}=z_{x}\cos \theta+z_{y}\sin \theta$$
#### gradient
$$\nabla f(x,y)=\begin{bmatrix}
z_{x} \\
z_{y}
\end{bmatrix}$$
#### integrales multiples
$$V=\iint_{R} f(x,y)dA$$
$R$ borne par $y=g(x),y=h(x),x=a,x=b$: $$\iint_{R}f(x,y)dA=\int_{a}^{b}\int_{f(x)}^{g(x)}f(x,y)dydx$$
$R$ borne par $x=g(y),x=h(y),y=c,y=d$: $$\iint_{R}f(x,y)dA=\int_{c}^{d}\int_{f(y)}^{g(y)}f(x,y)dxdy$$
moyenne:
$$moy(f)=\frac{\iint_{R} f(x,y)dA}{\iint_{R}dA}$$
#### coordonnees polaires
$$r=\sqrt{ x^{2}+y^2 }$$
$$dA=rdrd\theta$$
#### coordonnees cylindriques
$$x=r\cos \theta$$
$$y=r\sin \theta$$
$$z=z$$
$$r^{2}=x^{2}+y^{2}$$
$$dV=rdrdzd\theta$$
#### coordonnees spheriques
$$x=r\cos \varphi \sin \theta$$
$$y=r\sin \varphi \sin \theta$$
$$z=r\cos \theta$$
$$r=\sqrt{ x^{2}+y^{2}+z^{2} }$$
$$dV=r^{2}\sin \theta drd\theta d\varphi$$
## physics
### equations du mouvement
$$\vec{v}=\dot{x} \hat{\imath} + \dot{y}\hat{\jmath} +\dot{z}\hat{k} $$
$$\vec{a}=\ddot{x}\hat{\imath}+\ddot{y}\hat{\jmath}+\ddot{z}\hat{k}$$
#### mouvement rectiligne uniform
$$\vec{v}=\dot{x}\hat{\imath}=v_{0}\hat{\imath}$$
$$x=tv_{0}+x_{0}$$
#### mouvement rectiligne uniformement accelere
$$\vec{a}=\ddot{x}\hat{\imath}=a\hat{\imath}$$
$$v=at+v_{0}$$
$$x=\frac{1}{2}at^{2}+v_{0}t+x_{0}$$
#### mouvement circulaire uniforme et uniformement accelere
$$\dot{\theta}=\omega$$
$$\theta=\omega t+\theta_{0}$$
$$\ddot\theta= \alpha$$
$$\omega=\alpha t+\omega_{0}$$
$$\theta=\frac{\alpha t^{2}}{2}+\omega_{0}t+\theta_{0}$$
#### mouvement parabolique
$$\vec{a}=a_{0}\hat{\jmath}$$
$$\vec{v}_{0}=v_{0_{x}}\hat{\imath}+v_{0_{y}}\hat{\jmath}$$
$$a_{0}=\ddot{y}$$
$$y=\frac{at^{2}}{2}+v_{0_{y}}t+y_{0}$$
$$x=v_{0_{x}}t+x_{0}$$
#### mouvement rectiligne sinusoidal
[[waves and modern physics#mouvement harmonique simple|oscillateur harmonique]]
$$x=x_{m}\cos(\omega t+\phi)$$
$$v=-\omega x_{m}\cos(\omega t+\phi)$$
$$a=-\omega^{2}x_{m}\cos(\omega t+\phi)$$
$$\ddot{x}=-\omega^{2}x$$
$$\ddot{x}+\omega^{2}x=0$$
### chute libre avec frottement
$$\vec{F}_{b}=-b\vec{v}$$
$$b=6\pi \eta R$$
$$\dot{v}+\frac{b}{m}v=g$$
$$v=\frac{mg}{b}+\left( v_{0}-\frac{mg}{b} \right)e^{-tb/m}$$
pour $v_{0}=0$: $$y=\frac{mgt}{b}+\frac{m^{2}g}{b^{2}}(e^{-bt/m}-1)+y_{0}$$
### circuits

$$\epsilon_{L}=-L\ddot{\imath}$$
#### RL
$$i_{m}=\frac{\epsilon}{R}$$
$$\epsilon+u_{R}+u_{L}=0$$
$$\epsilon-Ri-L\ddot{\imath}=0$$
$$\ddot{\imath}+\frac{R}{L}i=\frac{\epsilon}{L}$$
$$\begin{align}
i&=\frac{\epsilon}{R}\left(1-e^{-tR/L}\right) \\
&=i_{m}(1-e^{-tR/L})
\end{align}$$
$$u_{L}(t)=-L\ddot{\imath}$$
si pile retire: $$i(t)=\frac{\epsilon}{R}e^{-Rt/L}$$
#### RC
$$i=\dot{q}=C\dot{u}_{C}$$
$$\epsilon-u_{C}-Ri=0$$
$$\epsilon-u_{C}-CR\dot{u}_{C}=0$$
$$\dot{u}_{C}+\frac{1}{RC}u_{C}=\frac{\epsilon}{RC}$$
$$u_{C}=\epsilon(1-e^{-t/RC})$$
$$i=\frac{\epsilon}{R}e^{-t/RC}$$
decharge du condensateur: $$u_{c}=\epsilon e^{-t/RC}$$
#### RLC
$$u_{C}-Ri-L\ddot{\imath}=0$$
$$i=-C\dot{u}_{C}$$
$$u_{C}+RC\dot{u}_{C}+LC\ddot{u}_{C}=0$$
$$\ddot{u}_{C}+\frac{R}{L}\dot{u}_{C}+\frac{1}{LC}u_{C}=0$$
##### $R$ negligeable:
$$\ddot{u}_{C}+\frac{1}{LC}u_{C}=0$$
soit $\omega^2=\frac{1}{LC}$
equation caracteristic: $$r^{2}+\omega^{2}=0$$
$$r=\pm \omega j$$
$$u_{C}=u_{Cm}\cos(\omega t)$$
##### R faible
equation caracterisitc:$$r^{2}+\frac{R}{L}r+\frac{1}{LC}=0$$
soit $\omega_{a}=\sqrt{ \frac{1}{LC}-\frac{R^{2}}{4L^{2}} },\ \beta=\frac{R}{2L}$
$$r=-\beta\pm \omega_{a}j$$
$$\begin{align}
u_{C}&=u_{Cm}e^{-\beta t}\left(\cos( \omega_{a}t)+\frac{\beta}{\omega_{a}}\sin (\omega_{a}t) \right) \\
&=u_{Cm}\sqrt{ 1+\frac{\beta^{2}}{\omega_{a}^{2}} }\cos\left( \omega_{a}t-\arctan\left( \frac{\beta}{\omega_{a}} \right) \right)e^{-\beta t}
\end{align}$$
#### regime sinusoidale
$$u=u_{0}\cos(\omega t)=u_{0}e^{j\omega t}$$
$$i=i_{0}\cos(\omega t+\phi)=i_{0}e^{j\phi}e^{j\omega t}$$
##### impedences complexes
$$Z=\frac{u}{i}$$
###### resistance
$$Z=\frac{iR}{i}=R$$
###### bobine
$$Z=\frac{L\ddot{\imath}}{i}=\frac{Lij\omega}{i}=j\omega L$$
###### condensateur
$$Z=\frac{u}{uCj\omega}=\frac{1}{j\omega C}$$

### thermodynamics
$$\Delta(U+E_{C}+E_{P})=W+Q$$
system a vitesse constante:
$$\Delta U=W+Q$$
system isole: $$\Delta U=0$$
#### gas parfait
$$PV=nRT$$
$$P\alpha=R'T$$
$\alpha=\frac{V}{m},R'=\frac{R}{M}$
$$dU(V,T)=U_{V}dV+U_{T}dT$$
$$dU(P,T)=U_{P}dP+U_{T}dT$$
$$dW=-PdV$$
capacite calorique:
volume constant: $c_{v}=U_{T}$
pression constante: $c_{p}=U_{T}$

volume constant: $$dQ=c_{v}dT$$
pression constante: $$dQ=c_{p}dT$$


$$dQ=c_{v}dT+Pd\alpha=(c_{v}+R')dT-\alpha dp=c_{p}dT-\alpha dp$$

processus adiabatique: $dQ=0$
### statique des fluides
$$\rho=\frac{dm}{dV}$$
#### forces volumiques
pesanteur, electromagnetique, inertie...
$\vec{f_{v}}$
#### surfaciques
$$\vec{dF}=\vec{dF_{n}}+\vec{dF_{\tau}}$$
$$\vec{dF_{n}}=-pdS \vec{n_{ext}}$$
$$\vec{dF_{\tau}}=\vec{0}$$

#### champ de pression
$$\vec{f_{v}}-\nabla p=\vec{0}$$
### centre de masse
$$\vec{r}_{cm}=\frac{1}{M}\int \vec{r}dm=\frac{\int \vec{r}dm}{\int dm}$$
3d: $dm=\rho dV$
2d: $dm=\sigma dS$
1d: $dm=\lambda d\ell$
### repartion uniforme de charge
$$\Phi_{E}=\oint \vec{E}\cdot d\vec{A}=\frac{Q_{int}}{\varepsilon_{0}}$$
application du [[vector calc#stoke's theorem|theorem de stokes]]
