---
abstract: chemistry of solutions
lang: fr
---


| precursors | [[general chem]] |
| ---------- | ---------------- |
| #tags      |                  |
| level      | #college         |


# #french-note
## solution
une solution est un melange homogene
une solution est compose d'un solvant et d'un solute
le solvant est celui en plus grande quantite
### dissolution
action de disperser un solute dans un solvant pour former une solution

### principe de dispersion
deux substances miscibles se melange spontanement
a cause de la [deuxieme loi de la thermodynamic](thermodynamics.md#second)

### solution ideal
une solution est ideal si elle se comporte comme un melange parfait
- se melange spontanement par la loi du desordre
- le melange ne libere ni ne consomme aucune energie
- les molecules ont les memes interaction avant et apres le melange
- $V_{total}=V_{solute}+V_{solvant}$

### saturation
le maximum de solute possible est dissous

|solution insature| moins de solute que le maximum|
|---|---|
|solution sature| quantite maximal de solute|
|solution sursature| plus que le maximum. le solute forme un precipite ou une bulle|

### concentration
$$C=\frac{q_{solute}}{q_{solution}}$$
$[M]$

une substance est dite soluble si sa concentration est de $0.0100 \text{mol/L}$ ou plus dans une solution sature

la quantite est en masse, volume ou decompte (mol)

| type de concentration                          | unite du solute | unite de la solution |
| ---------------------------------------------- | --------------- | -------------------- |
| concentration molaire volumique (mola**r**ite) | mol             | L                    |
| concentration massique volumique               | g               | L                    |
| pourcentage volumique                          | mL              | 100mL                |
| pourcentage massique                           | g               | 100g                 |
| pourcentage molaire                            | mol             | 100mol               |
| pourcentage massique/volumique                 | g               | 100mL                |
| fraction molaire $\in [0,1]$                   | mol             | mol                  |
| ppm                                            | g               | $10^6$ mL            |
| ppb                                            | g               | $10^9$ mL            |
| ppt                                            | g               | $10^{12}$ mL         |


### masse volumique

$$\rho=\frac{m}{V}$$
**la masse volumique n'est pas une concentration**

### dilution
diminution de la concentration en ajoutant du solvant
$$C_{1}V_{1}=C_{2}V_{2}$$

$$C_{1}>C_{2}$$
$$V_{1}<V_{2}$$



### changements d'unites de concecntration
#### exprimer les concentrations
initiales et finales en identifiant les unites au numerateur et au denominateur

#### convertir le numerateur

#### convertir le denominateur

#### recalculer la concentration
## proprietes colligatives
proprietes qui ne dependent que du nombre de particule de solute et non de la nature du solute
### coefficient de van't hoff
$i=\frac{n_{particules\ en\ sln}}{n_{compose\ dissous}}$
### abaissement de la pression de vapeur $\Delta P$
la pression de vapeur: un liquide est en equilibre dynamique avec sa vapeur
loi de raoult: $P_{sln}=\chi_{slv}P^o_{slv}$
$P_{sln}$: pression de vapeur de la solution
$\chi_{slv}$: fraction molaire du solvant
$P^o_{slv}$: pression de vapeur pur du solvant

$\Delta P=P^o_{slv}-P_{sln}$

#### pression de vapeur d'une solution ideale
solution ideal:
- une solution ou le solvant et le solute sont volatils
- le solute et le solvant suivent la roi de raoult
$P_{A}=\chi_{A}P^o_{A}$
$P_{B}=\chi_{B}P^o_{B}$
$P_{tot}=P_{A}+P_{B}$
#### fraction molaire de la vapeur
$\gamma_{A}=\frac{P_{A}}{P_{tot}}$

### abaissement du point de congelation et elevation du point d'ebulition
la presence d'un solute non-volatil diminue le point de congelation du solvant et augment le point d'ebulition de celui-ci
$$\Delta T_{cong}=iK_{c}m$$
$$\Delta T_{cong}=T^o_{cong}-T_{cong\ sln}$$
$m$: molalite
$i$: coeficient de van't hoff
$T^o_{cong}$: temperature de congelation du solvant pur
$K_{C}$: [constante cryoscopique](cryoscopic%20constants.md)


$$\Delta T_{eb}=iK_{eb}m$$
$$\Delta T_{eb}=T^o_{eb}-T_{eb\ sln}$$
$T^o_{eb}$: temperature d'ebulition pure
$K_{eb}$: [constante ebulioscopique](ebullioscopic%20constants.md)
### pression osmotique
pression necessaire pour arreter l'osmose
$$\pi=iCRT$$
$\pi$: pression osmotique
$i$: coefficient de van't hoff
$C$: concentration
$R$: constante des gazs
$T$: temperature

## cinetique chimique
etudes de la vitesse d'une reaction chimique et des facteurs qui l'influencent
### vitesse reactionnel moyenne
variation de concentration en fonction du temps
$$V=\frac{\Delta [produits]}{\Delta t}$$

$$V=-\frac{\Delta[reactifs]}{\Delta t}$$
#### loi de proportionnalite
dans une reaction chimique, les vitesses de disparition de tous les reactifs et d'apparition de tous les produits sont proportionnelles a leur coefficient stoechiometrique
$$V_{reaction}=|\frac{V_{A}}{a}|=|\frac{V_{B}}{b}|=|\frac{V_{C}}{c}|=|\frac{V_{D}}{d}|\dots$$
### vitesse de reaction instantane
derive de la concentration en fonction du temps
$$V_{instantane}=\frac{d[produit]}{dt}$$
#### loi de vitesse
exprime la vitesse en fonction de la concentration des reactifs
$$V=k[reactif_{1}]^x[reactif_{2}]^y\dots$$

#### ordre de reaction
indicateur du mecanisme reactionnel
ordre total = $x+y$
##### ordre 0
implique souvent un catalyseur sature en reactif
la vitesse est constante peut importe $[A]$
$$V=-\frac{d[A]}{dt}=k$$
$$[A]=[A_{0}]-kt$$
##### ordre 1
souvent des reactions de dissociation ou de catabolisme d'un reactif unique
la vitesse est proportionnelle a $[A]$
$$V=k[A]$$
$$\ln[A]=\ln[A_{0}]-kt$$
$$[A]=[A_{0}]e^{-kt}$$
##### ordre 2
la vitesse varie en fonction de $[A]^2$
$$V=k[A]^2$$
$$\frac{1}{[A]}=\frac{1}{[A_{0}]}+kt$$
### temps de demi vie
corespond au temps necessaire pour obtenir la moitie de la concentration initial

#### ordre 0
$t_{\frac{1}{2}}=\frac{[A_{0}]}{2k}$
#### ordre 1
$t_{\frac{1}{2}}=\frac{\ln(2)}{k}$
#### ordre 2
$t_{\frac{1}{2}}=\frac{1}{[A_{0}]k}$
### effet de la temperature sur $k$
$$\ln \frac{k_{2}}{k_{1}}=\frac{E_{a}}{R}\left( \frac{1}{T_{1}}-\frac{1}{T_{2}} \right)$$

## raports de labs
- ecriture directe
- ecriture impersonnelle
- intro: future
- text: present
- saut de page avant les tableau et les questions
- sources just avant la grille de correction
- pour les memes sources, remettre le meme numero
- pas les equations dans le texts
- importer graphique directement dans word (\<C-c\> \<C-v\>)
- source d'erreur marche avec les resultats
- objectif

## equilibre chimique
### reaction reversible vs irreversible
reversible: la reaction et la reactino inverse se produisent simultanement
ireversible: seul la reaction peut se produire

### equilibre cinetique
la vitesse de la reaction et de la reaction inverse est egal
### constante d'equilibre
$$k_{c}=\frac{k_{dir}}{k_{inv}}=\frac{[A]^x}{[B]^y}=\frac{[A]^a}{[B]^b}$$
juste les aqueux et gazeux
### constante d'equilibre de pression
$$k_{p}=\frac{(p_{A})^a}{(p_{B})^b}$$
$$k_{c}=\frac{k_{p}}{(RT)^{\Delta n}}$$
$$k_{p}=k_{c}(RT)^{\Delta n}$$
### quotient reationel
$$Q=\frac{[A]_{i}^a}{[B]_{i}^b}$$
### principe du chatelier
lorsqu'un systeme a l'equilibre est perturbe, il evolue dans une direction qui minimise cette pertubation
## acides et bases
### definition
#### arrhenius
acide: produit des H$^+$ en solution auqueuse
base: produit des ions hydroxyde en solution aqueuse
#### bronsted-lowry
acide: substance qui libere un H$^+$ en solution auqueuse pour former du H$_{3}$O$^+$
base: substance qui accepte un H$^+$ en solution aqueuse pour former du OH$^-$
#### lewis
acide: substance qui peut recevoir un doublet d'electron
base: substance qui peut donner un doublet d'electron

### equilibre acido-basique
les acides et les bases forment des couples acido-basiques
### differentiation entre les acides et les bases
#### acides
seuls les H ionisables (electropositifs) peuvent etre donnes (sauf si il y a une base asses forte)
par convention les atomes H ionisables sont ecris en premier pour identifier les acides (pas les carboxiliques (organiques)
si une molecule possede une charge positive elle est potentielement un acide
#### bases
les molecules ioniques avec un groupement OH sont des bases (generalement)
l'amoniac et les derives amines sont des bases
si une molecule possede une charge negative elle est potentielement une base
### forces des acides et des bases
#### acides forts
se dissocient completement dans l'eau. la reaction est irreversible
dissociation a 100%
pas en equilibre
coefficient de van't hoff est un entier >1
#### acides faibles
se dissocient partiellement dans l'eau. sont en equilibre dynamique
dissociation partielle
equilibre d'ynamique avec constante d'acidite
le coefficient de van't hoff est une fraction <1
#### bases fortes
se dissocient completement
la reaction est irreversibles

dissociation a 100%
pas en equilibre
le coefficient de van't hoff est un entier >1
#### bases faibles
dissocient partiellement dans l'eau sont en equilibre dynamic
dissociation partielle
#### bases negligeable
bases conjuguee des acides forts
#### acide negligeable
acide conjuguee des bases fortes
### molecules amphoteres
les molecules amphoteres possedent a la foi des proprietes acides et basiques
elles forment deux equilibre acido-basique
elles forment deux couples conjugue
possedent un H et une charge negative (sauf l'eau)
<!--- toute les molecules avec des H peuvent etre amphoteres avec un acide ou une base asses fort-->
### equilibre de l'eau
$k_{eau}=[OH^-][H_{3}O^+]=1.00(10^{-14})mol^2/L^2$
dans une solution d'eau pure a , la concentration de OH$^-$ et de H$_{3}$O$^+$ est identique: 1.00 (10$^{-7}$)mol/L. c'est une solution neutre
### calcul du ph
$pH=-\log[H_{3}O^+]$
$[H_{3}O^+]=1.00(10^{-pH})$

$p=-\log$
$pk_{eau}=-\log(1.00(10^{-14}))=14.00$
14.00=pOH+pH
### constante d'ionisation
[[acidity constants]]
[[basicity constants]]
$$k_{a}= \frac{[H_{3}O^{+}][Base_{conjugue}]}{[Acide]}$$
$$k_{b}= \frac{[HO^{-}][Acide_{conjugue}]}{[Base]}$$
$$k_{a}k_{b}=k_{eau}$$
### polyacides
acides qui liberent plusieurs protons
## equilibre acido-basique
### solution tempon
concentration eleve d'un couple acide-base faible
$$pH=pk_{a}+\log \frac{[Base_{conjugue}]}{[Acide]}$$
$$pOH=pk_{b}+\log \frac{[Acide_{conjugue}]}{[Base]}$$
#### zone tampon
intervalle de $\text{pH}$ pour lequel un tampon est efficace
$$pK_{a}-1 \leq \text{pH} \leq pK_{a}+1$$
### titrage
#### acide - base forts
##### point equivalent
$\text{pH}=7$
$C_{a}V_{a}=C_{b}V_{b}$
## solubilite
[[solubility product constants]]
$Q<K_{ps}$: solution insaturee $\to$ pas de precipitation
$Q=K_{ps}$: solution saturee $\to$ pas de precipitation
$Q> K_{ps}$: solution sursaturee $\to$ precipitation


## oxydoreduction
une reaction de transfert d'e$^-$
le n d'oxydation des atomes neutres et des substances pures elementaires est toujours zero
le n d'oxydation des ions est egale a sa charge
dans les molecules ioniques, les n correspondent aux etats des ions
dans les molecules covalentes, la somme des n donne 0
H: 1 sauf avec metal (-1)
O: -2 sauf peroxydes (-1)

dans les ions poly, la somme des n est la charge

### changement du n d'oxydation
lorsquil reduit: reduction
lorsquil augment: oxydation

oxydoreduction:
	oxydation: reaction qui libere des electrons
	reduction: reaction qui recoit des electrons

### oxydants et reducteurs
oxydant: oxyde un autre
reducteur: reduit un autre
### [electrochimie](electrochem.md)
#### cellules voltaiques
pille ou l'electricite est produite par oxydoreduction
anode : electrode ou il y a oxydation
cathode: electrode ou il y a reduction

#### effet de la concentration sur la force electromotrice
$$\epsilon=\epsilon^{o}- \frac{RT}{nF}\ln Q$$

$\epsilon$: force electromotrice
$\epsilon^o$: [potentiel standard](standard%20reduction%20potentials.md)
$R$: constante des gaz
$T$: temperature
$n$: nombre de mol
$F$: constante de faraday
$Q$: quotient reactionnel

