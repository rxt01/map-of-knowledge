---
abstract:
---
|            | I                                               | II                                                           |
| ---------- | ----------------------------------------------- | ------------------------------------------------------------ |
| precursors | [[diff and int calc]] [[set theory]] [[combin]] |                                                              |
| #tags      |                                                 |                                                              |
| level      | #college                                        | #bachelor                                                    |
| degrees    |                                                 | #math/all/mandatory #econ/option #cs/mandatory #EE/mandatory |
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
### variables aleatoires
#### variables discretes
##### mesures de tendance centrale et de dispersion
###### moyenne
statistique d'un echantilon: $$\bar{x}=\frac{\sum x_{i}n_{i}}{n}=\sum x_{i}\left( \frac{n_{i}}{n} \right)$$
ou $n_{i}$ represente la frequence observe de la valeur $x_{i}$
parametre d'une population
en replacent $\frac{n_{i}}{x_{i}}$ par $f(x_{i})$, on obtient la moyenne $\mu$ soit $$\mu=\sum x_{i}f(x_{i})$$
###### ecart type
statistique:
$$s=\sqrt{ \frac{\sum(x_{i}-\bar{x})^2n_{i}}{n-1} }=\sqrt{ \sum(x_{i}-\bar{x})^2\left( \frac{n_{i}}{n-1} \right) }$$
parametre:
$$\sigma=\sqrt{ \sum(x_{i}-\mu)^2f(x_{i}) }$$
###### variances
carre de l'ecart type
$$\sigma^2=\sum(x_{i}-\mu)^2f(x_{i})$$
##### distribution binomiale
###### epreuve de bernoulli
que 2 resultats possibles: succes et echec
probabilite de succes: $\pi$
probabilite d'echec: $\pi-1$
si on repete l'epreuve n fois de maniere independante, la variable aleatoire $X$=nombre de succes suit une distribution $\text{B}(n;\pi)$ 
$$\mu=n\pi$$
$$\sigma=\sqrt{ n\pi(1-\pi) }$$
$$\text{P}(X=x)=\left(\begin{matrix}n\\x\end{matrix}\right)\pi^{x}(1-\pi)^{(n-x)}$$ 
#### variables continues
soit une fonction de densite $f(x)$:
$$\int_{x\in \Omega}f(x)dx=1$$
$$f(x)\geq 0\ \forall x$$
$$\text{P}(a<X<b)=\int_{a}^{b}f(x)dx$$
##### distribution normal
$X$ a une distribution $\text{N}(\mu;\sigma^2)$ si 
$$f(x)=\frac{1}{\sigma \sqrt{ 2\pi }}e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)},\ \forall x\in \mathbb{R} $$
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
$$\sigma_{\bar{x}}=\frac{\sigma_{x}}{\sqrt{ N }}\sqrt{ \frac{N-n}{N-1} }$$
ou $N$ est la taile de la population
## inference statistique
### estimation
$\bar{X}$ est un estimateur sans biais pour $\mu$; $\mu_{\bar{x}}=\mu$
$P$ est un estimateur sans biais pour $\pi$;$\mu_{p}=\pi$
$S^2$ est un estimateur sans biais pour $\sigma^2$
#### estimation ponctuelle d
$\bar{x}\approx \mu$
$p\approx \pi$
$s\approx \sigma$


### tests d'hypothess
$\text{H}_{0}:\mu=\mu_{0}$
$\text{H}_{1}:\mu>\mu_{0}$ ou $\text{H}_{1}:\mu<\mu_{0}$ ou $\text{H}_{1}:\mu\ne\mu_{0}$
