---
abstract:
---
|            | I                                               | II        |
| ---------- | ----------------------------------------------- | --------- |
| precursors | [[diff and int calc]] [[set theory]] [[combin]] |           |
| #tags      |                                                 |           |
| level      | #college                                        | #bachelor |

# #french-note
## definitions
### population
la population est l'ensemble des elements concernés par l'etude statistique
### taille de la population ($N$)
nombre d'unites statistiques dans la population
### unite statistique
une unite statistique est un seul element de la population
### échantillon
l’échantillon est l'ensemble des unites statistiques considérées dans l'etudes
### taille de l'echantillon ($n$)
nombre d'unites statistiques dans l'echantillon
## méthodes d'échantillonnage
### méthodes aléatoires
#### aléatoire simple
on numerote les unites de 1 a $N$ et on tire des nombres aux hasard de 1 a $N$ jusqu'a obtenir la taille d'echantillons desiree
#### systématique
on commence par trouver le pas $P = \frac{N}{n}$
ensuite on genere un nombre aleatoire entre 1 et $N$
en partant de ce nombre on ajoute et soustrais le pas jusqu'a ateindre 1 et $N$
#### stratifiee
une strate est un sous ensemble d'unites ayant une ou plusiers caracteristique communes
on choisis aux hasards un certain nombre d'unites dans chaque state  de facon a ce que le pourcentage d'unites dans chaque strates sois egal dand l'echantillon et la population
#### par grappes
une grappe est un sous ensemble  d'unites de la population. lorsque les renseignements varient beaucoup a l'interieur de chaque grappes mais peu entre les grappes on fais un echantillonage aleatoire de grappe et on prend tout les membres de ses grappes commes echantillopn
### méthodes non aléatoire
#### accidentel / a l'aveuglette
l'unites s'est retrouver a l'endroit ou l'etudes se faisait par coincidence
#### de volontaires
l'unites d'ecide de faire partie de l'echantillon ou pas
#### par quotas
comme l'echantillonage stratifiee mais l'enqueteurchoisi lui meme les unites de chaque sytrat
#### au jugee
on prend les unite parmi celles que l'on juge come typique
## variables statistiques
### variables quantitatives
les variables quantitative soint representer par des nombres
#### variables discrete
on peu enumerer les valeurs possibles pour la variable
#### variables continues
on ne peut enumerer les valeurs possibles pour la variable
### variables qualitatives
les donnes de la variables sont des mots, des symboles ou des expressions
### echelles de mesure
#### echelle de rapport
l'echelle etablie un rapport entre les donnes. le rapport represente combien de fois une donnes est superieur ou inferieur a une autre
#### echelle d'interval
dans une echeele d'interval, on considere la distance separant 2 donnes
#### echelle ordinale
il y a plusieurs categories qui sont dans un certain ordres
#### echelle nominale
il y a plusieurs categories n'ayant pas d'ordre
### donnees construites
une donnee construite est obtenu a l'aide d'un calcul utilisant les donnes recueillies.
#### proportion
la fraction de l'echantillon corespondant a la caracteristique etudiee.
#### pourcentage
comme la proportion mais la fraction est sur 100
#### taux
comme la proportion mais la fraction est sur une puissance de 10
#### indice
une mesure quantitative attribue a un phenomene qualitatif qui tient compte de plusieurs indicateurs de ce phenomene
#### pourcentage de variation dans le temps
$$\%\ de\ variation=\frac{V_f-V_i}{V_i}100$$
#### ratio
le ratio est le rapport entre le mnombre d'unite dans un groupe correspodant a certaine caracteristique et le nombre d'unite dans un autre groupe corrsepondant a d'autre caracteristiques.

## probabilités
l'ensemble des resultats possibles ($\Omega$) est appele espace echantillonnal
### evenement
$$\text{A}\subseteq\Omega$$
#### probabilite d'un evenement
si la probabilite de chaque resultats et la meme:
$$\text{P(A)}=\frac{\text{N(A)}}{\text{N}(\Omega)}$$
ou $\text{N}()$ est le nombre de resultats possible
$$\text{N(A}\cup\text{B)}=\text{N(A)}+\text{N(B)}-\text{N(A}\cap\text{B)}$$
$$\text{P(A|B)}=\frac{\text{P(A}\cap\text{B)}}{\text{P(B)}}$$
##### evenements independents
$$\text{P(A|B)}=\text{P(A)}$$
$$\text{P}(\text{A}\cap \text{B})=\text{P}(\text{A})\cdot \text{P}(\text{B})$$
#### formule de bayes
$$P(A_{i}|B)= \frac{P(B|A_{i})P(A_{i})}{\sum\limits_{j=1}^{n}P(B|A_{j})P(A_{j})}$$
ou $\{ A_{1},\cdots,A_{n} \}$ est une partition

### variables aleatoires
#### variables discretes
##### esperance
$$E(X)=\mu=\sum\limits_{i=1}^nx_{i}P(X=x_{i})$$
##### variance
$$Var(X)=\sigma^{2}=\sum\limits_{i=1}^{n}(x_{i}-\mu)^{2}P(X=x_{i})=E(X^2)-(E(X))^{2}$$
##### mesures de tendance centrale et de dispersion
###### moyenne
statistique d'un echantilon: $$\bar{x}=\frac{\sum x_{i}n_{i}}{n}=\sum x_{i}\left( \frac{n_{i}}{n} \right)$$
ou $n_{i}$ represente la frequence observe de la valeur $x_{i}$
parametre d'une population
en replacent $\frac{n_{i}}{n}$ par $f(x_{i})$, on obtient la moyenne $\mu$ soit $$\mu=\sum x_{i}f(x_{i})$$
###### ecart type
statistique:
$$s=\sqrt{ \frac{\sum(x_{i}-\bar{x})^2n_{i}}{n-1} }=\sqrt{ \sum(x_{i}-\bar{x})^2\left( \frac{n_{i}}{n-1} \right) }$$
parametre:
$$\sigma=\sqrt{ \sum(x_{i}-\mu)^2f(x_{i}) }$$
###### variances
carre de l'ecart type
$$\sigma^2=\sum(x_{i}-\mu)^2f(x_{i})$$
##### distribution binomiale
epreuve de bernoulli
que 2 resultats possibles: succes et echec
probabilite de succes: $\pi$
probabilite d'echec: $1-\pi$
si on repete l'epreuve $n$ fois de maniere independante, la variable aleatoire 
$X$= nombre de succes
$$X\sim B(n;\pi)$$
$$\mu=n\pi$$
$$\sigma=\sqrt{ n\pi(1-\pi) }$$
$$\text{P}(X=x)=\left(\begin{matrix}n\\x\end{matrix}\right)\pi^{x}(1-\pi)^{(n-x)}$$

##### loi uniforme discrete
valeur aleatorie discrete toutes les valuers ont la meme probabilite
$$X\sim \text{U}(n)$$
$$\text{P}(X=x)=\frac{1}{n}$$
$$\mu = \bar{x}$$
si valeurs possible $=\{ x:1\leq x\leq n \}$:
$$\mu=\frac{n+1}{2}$$

#### variables continues
soit une fonction de densite $f(x)$:
$$\int_{x\in \Omega}f(x)dx=1$$
$$f(x)\geq 0\ \forall x$$
$$\text{P}(X\in A \subseteq \Omega)=\int_{x\in \Omega}f(x)dx$$
$$\mu=\int_{x\in \Omega}xf(x)dx$$
$$\sigma^{2}=\int_{x \in \Omega}(x-\mu)^{2}f(x)dx$$
$X\neq x$ presque surement

##### distribution normal
$X$ a une distribution $\text{N}(\mu;\sigma^2)$ si 
$$f(x)=\frac{1}{\sigma \sqrt{ 2\pi }}e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^{2}},\ \forall x\in \mathbb{R} $$

###### cotes Z
la variable $Z$ a une distribution $\text{N}(0;1)$
$$Z_{x}=\frac{x-\mu}{\sigma}$$$$\text{p}(a<X<b)=\text{P}(Z_{a}<Z<Z_{b})$$
### distributions d'echantillonage
#### distribution de proportion
soit $X \in \Omega$ le resultat d'une epreuve de bernoulie
$$P=\frac{X}{n}$$
$$\mu_{p}=\pi$$
$$\sigma_{p}=\sqrt{ \frac{\pi(1-\pi)}{n} }\sqrt{ \frac{N-n}{N-1} }$$
#### distribution d'une moyenne
soit $X$ et un echantillon de taille $n$
$\bar{X}=$ moyenne des donnes de $X$ dans l'echantillon 
$$\mu_{\bar{x}}=\mu_{x}$$
$$\sigma_{\bar{x}}=\frac{\sigma_{x}}{\sqrt{ n }}\sqrt{ \frac{N-n}{N-1} }$$
ou $N$ est la taile de la population
##### theorem de la limit central
soit $X =$ moyene des resultats d'une experience aleatoire independante repeter suivant une distribution qqonque et $n =$ nombre de fois que l'experience est repeter, alors
$$\lim\limits_{ n \to \infty }X \sim \text{N}\left( \mu; \frac{\sigma^{2}}{n} \right) $$
## inference statistique
### estimation
$\bar{X}$ est un estimateur sans biais pour $\mu$; $\mu_{\bar{x}}=\mu$
$P$ est un estimateur sans biais pour $\pi$;$\mu_{p}=\pi$
$S^2$ est un estimateur sans biais pour $\sigma^2$

#### estimation ponctuelle
$\bar{x}\approx \mu$
$p\approx \pi$
$s\approx \sigma$
#### interval de confiance
niveau de confiance:
$$(1-\alpha)$$
##### moyenned d'une population
avec remise
$$\mu \in \left[ \bar{x}-Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{ n }};\bar{x} +Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{ n }} \right]$$
soit $ME=Z_\frac{\alpha}{2}\sigma_{\bar{x}}=Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{ n }}$
$$\mu \in [\bar{x}-ME; \bar{x}+ME]$$
taille d'echantillon necessaire
$$n=\left\lceil \left( \frac{Z_{\frac{\alpha}{2}}s}{ME} \right)^2  \right\rceil $$
sans remise (population fini)
$$ME=Z_{\frac{\alpha}{2}} \frac{s}{\sqrt{ n }}\sqrt{ \frac{N-n}{N-1} }$$

### tests d'hypothess
hypotese null: status quo
hypotese alternative: hypotese proposer pour remplacer l'hypotese null

$\text{H}_{0}:\mu=\mu_{0}$
$\text{H}_{1}:\mu>\mu_{0} \lor \text{H}_{1}:\mu<\mu_{0} \lor \text{H}_{1}:\mu\ne\mu_{0}$
#### erreurs
##### type I
$\alpha$ seuil de signification du test, probabilite de rejeter $\text{H}_{0}$ alors qu'elle est vrais
##### type II
$\beta$: probabilite de ne pas rejeter $\text{H}_{0}$ alors qu'elle est fausse
$1-\beta$: puissance du test d'hypothese, capacite a rejeter $\text{H}_{0}$ alors qu'elle est fausse
#### test bilateral
##### grande taille
on rejete l'hypotese null quand $$z\not\in [-z_{\alpha/2};z_{\alpha/2}]$$
ou $$\bar{x}\notin \left[ \mu_{0}-z_{\alpha/2} \frac{s}{\sqrt{ n }}; \mu_{0}+z_{\alpha/2} \frac{s}{\sqrt{ n }} \right]$$

##### petite taille
on rejete l'hypothese null quand $$t\not\in[-t_{\alpha/2;n-1};t_{\alpha/2;n-1}]$$
ou $$\bar{x}\notin \left[ \mu_{0}-t_{\alpha/2;n-1} \frac{s}{\sqrt{ n }}; \mu_{0}+t_{\alpha/2;n-1} \frac{s}{\sqrt{ n }} \right]$$
#### calcul de la statistique
$$z=\frac{\bar{x}-\mu_{0}}{s/\sqrt{ n }}$$
$$t=\frac{\bar{x}-\mu_{0}}{s/\sqrt{ n }}$$
#### regle de decision proportion
rejete $\text{H}_{0}$: $$p\not\in\left[ \pi_{0}-z_{\alpha/2}\sqrt{ \frac{\pi_{0}(1-\pi_{0})}{n} };\pi_{0}+z_{\alpha/2}\sqrt{ \frac{\pi_{0}(1-\pi_{0})}{n} } \right]$$
#### statistique proportion
$$z=\frac{p-\pi_{0}}{\sqrt{ \frac{\pi_{0}(1-\pi_{0})}{n} }}$$
#### $\chi^2$
$\text{H}_{0}$: $X$ et $Y$ sont independants
$\text{H}_{1}$ $X$ et $Y$ sont dependants
seuil de signification: $\alpha$
tableau de frequences observees $f_{0}$
frequence theorique$f_{t}$
condition d'application : echantillon aleatoire et chaque $f_{t}\geq 5$

##### test d'independance du khi carre
difference relative $$\frac{(f_{t}-f_{0})^{2}}{f_{t}}$$
valeur critique de $\chi^2$: $$\chi^{2}_{\alpha;\nu}$$
ou $\nu=(|X|-1)(|Y|-1)$ 
ou $|X|$ est le nombre de modalite de $X$

regle de decision: 
$\text{H}_{0}$ est rejete si $\chi^{2}>\chi^{2}_{\alpha;\nu}$

statistique:
$$\chi^{2}=\sum \frac{(f_{t}-f_{0})^{2}}{f_{t}}$$

coefficient de cramer $$V=\sqrt{ \frac{\chi^{2}}{n(h-1)} }$$
ou $n$ est le nombre de donne et $h$ le nombre de modalite de la variable qui en a le moins
