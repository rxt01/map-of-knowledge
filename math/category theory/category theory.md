---
abstract: 
":":
---
| precursors | [[algebra]](optional, recommended) [[top]](optional, recommended) [[graph theory]](optional) [[abstract LA]](optional) [[measure theory]](optional) |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| status:    | #learning                                                                                                                                           |
| #tags      |                                                                                                                                                     |
| level      | #bachelor                                                                                                                                           |
| type       | #purenatsc                                                                                                                                          |
# #english-note 
## category

### definition
a category $\mathcal{C}$ consists of
- a class of objects $ob(\mathcal{C})$
- $\forall X,Y\in ob(\mathcal{C})\ \exists$ a class $\mathcal{C}(X,Y) \equiv \text{Hom}_{\mathcal{C}}(X,Y) = \text{Mor}_{\mathcal{C}}(X,Y)$
- $\forall X,Y,Z\in ob(\mathcal{C})$ a map $\mathcal{C}(X,Y)\times \mathcal{C}(Y,Z) \to \mathcal{C}(X,Z)$ $$(f,g)\mapsto f\circ g$$
s.t.
- $\circ$ is [associative](algebra.md#associative%20property)
- $\forall X \in ob(\mathcal{C})\ \exists\ id_X \in \mathcal{C}(X,X)\ s.t.\ f\circ \text{id}_X=f=\text{id}_Y\circ f$

#### small category
a category $\mathcal{C}$ is called small if $ob(\mathcal{C})$ is a set
a category s.t. $\mathcal{C}(X,Y)$ are sets $\forall X,Y$ is called locally small

a locally small category with only one object is a monoid


### opposite category
$\mathcal{C}^{op}$ is a category s.t. $ob(\mathcal{C}^{op})=ob(\mathcal{C})$, $\mathcal{C}^{op}(X,Y)=\mathcal{C}(Y,X)$$$g\ \circ^{op}f = f\ \circ g$$
a statement in a category $\mathcal{C}$ is true if and only if the dual(co) statement is true in $\mathcal{C}^{op}$

if $X$ and $Y$ are isomorphic in $\mathcal{C}$ then they are isomorphic in $\mathcal{C}^{op}$

### isomorphisms
let $X, Y \in ob(\mathcal{C})$. an isomorphism is a pair of morphisms $f:X\to Y,\ g:Y\to X$ st.
- $g\circ f=\text{id}_{X}$
- $f\circ g=\text{id}_{Y}$
if there exists a isomorphism between $X$ and $Y$, then $X$ and $Y$ are isomorphic

all isomorphisms are monomorphisms
all isomorphisms are split monomorphisms
all isomorphisms are epimorphisms
all isomorphisms are split epimorphisms

if $f:X\to Y$ is epi and split mono, it is an isomorphism
if $f:X\to Y$ is mono and split epi, it is an isomorphism
### groupoid
a category where all the morphisms are invertible

### delooping
let $G$ be a group, the delooping of $G$, $\mathbf{B}G$ is the following category
- $ob(\mathbf{B}G)=\{ \cdot \}$
- $\forall g\in G \exists g:\cdot\to \cdot$
- $\text{id}_{\cdot}$ is given by $1\in G$
- the composition is given by the multiplication of $G$

the delooping of a group is a groupoid

monoid can also have deloopings

### core
the core of $\mathcal{C}$ is the groupoid whose objects are objects of $\mathcal{C}$ and whose morphisms are isomorphisms of $\mathcal{C}$

### diagram
a diagram in a category $\mathcal{C}$ is a directed graph formed of objects and arrows of $\mathcal{C}$ st:
- each objects and morphism may appear more than once 
- between any two objects, there may be more than one morphism
- the identities are implicitly present
- composed functions are implicitly present


more formally let $\mathcal{C}$ be a category and $\mathcal{I}$ a small category, a diagram in $\mathcal{C}$ of shape $\mathcal{I}$ is a functor $\mathcal{I}\to \mathcal{C}$

#### commutative diagrams
a diagram commutes if $\forall X,Y$ all composition along path of composable arrow between $X$ and $Y$ are equal

#### constant diagram
let $\mathcal{C}$ be a category. let $\mathcal{J}$ be a small category and let $X\in ob(\mathcal{C})$. the constant diagram at $X$ is the functor $X:\mathcal{J}\to \mathcal{C}$ assigning:
- to each object of $\mathcal{J}$ the same object $X$ of $\mathcal{C}$
- to each morphisms of $\mathcal{J}$ the identity morphism $\text{id}_{X}$

#### empty diagram
let $\mathcal{O}$ be the empty category. there is a unique diagram $E:\mathcal{O}\to \mathcal{C}$ $\forall \mathcal{C}$ which is the empty diagram of $\mathcal{C}$ 
#### cospan
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMyxbMiwwLCJBIl0sWzAsMiwiQiJdLFsyLDIsIkMiXSxbMCwyLCJmIl0sWzEsMiwiZyJdXQ==&embed" width="432" height="432" style="border-radius: 8px; border: none;"></iframe>


### monomorphism
a morphism $m:X\to Y$ is a monomorphism if $\forall A\in ob(\mathcal{C})$ and $\forall f,g:A\to X$ and $m\circ f=m\circ g$
$f=g$
#### split monomorphisms
let $m:X\to Y$ be a morphism, a left inverse or refraction of $m$ is a map $r:Y\to X$ st $r\circ m=\text{id}_{X}$ if $m$ admits a left inverse, it is a split monomorphism and $r$ is the splitting of $m$ 

every split monomorphism is a monomorphism
### epimorphism
a morphism $e:X\to Y$ is an epimorphism if $\forall A\in ob(\mathcal{C})$ and $\forall f,g:Y\to A$ end$f\circ e=g\circ e$
$f=g$
$\iff$ $e^{op}$ is a monomorphism
#### split epimorphism
let $e:X\to Y$ be a morphism, a right invers or section of $e$ is a map $s:Y\to X$ st $e\circ s=\text{id}_{Y}$ 
if $e$ admits a right inverse, it is a split epimorphism and $s$ is the splitting of $e$

every split epimorphism is an epimorphism
### retract
if $s$ is a right inverse of $e$, then $e$ is a left inverse of $s$  so if $e$ is a split epi then $s$ is a split mono
the pair of map is called a retract
if there is a retract between $X$ and $Y$, then $Y$ is a retract of $X$
### subcategories
let $\mathcal{C}$ be a category a subcategory $\mathcal{S}$ of $\mathcal{C}$ consists of a subcollection of the objects of $\mathcal{C}$  and a subcollection the morphisms of $\mathcal{C}$ st.
- $\forall S\in ob(\mathcal{S})$ the id$_{S}$ is also in $\mathcal{S}$
- for each pair of composable arrow $f:X\to Y$ and $g:Y\to Z$, $g\circ f$ is also in $\mathcal{S}$
#### wide subcategories
a subcategory $\mathcal{S}$ is wide if all object of $\mathcal{C}$ are in $\mathcal{S}$ ie.
$ob(\mathcal{S})=ob(\mathcal{C})$
the core of a category is a wide subcategory
#### full subcategories
a subcategory $\mathcal{S}$ is full if given two objects in $\mathcal{S}$ all their morphisms in $\mathcal{C}$ are also in $\mathcal{S}$ ie. $\forall X,Y\in ob(\mathcal{S}),\ \text{Hom}_{\mathcal{S}}(X,Y)\simeq \text{Hom}_{\mathcal{C}}(X,Y)$
### connected categories
a category is connected if between any two objects $X$ and $Y$ there is at least one arrow in at least one direction
### complete categories
a category $\mathcal{C}$ is complete if every diagrams in $\mathcal{C}$ has a limit
a category $\mathcal{C}$ is cocomplete if every diagrams in $\mathcal{C}$ has a colimit
### slice category
let $D:\mathcal{J}\to \mathcal{C}$ be a diagram. the slice category over $D$, $\mathcal{C}/D$ is the category whose
- objects are pair $(X,\alpha)$ where $X$ is an object of $\mathcal{C}$ and $\alpha$ is a cone over $D$ with tip $X$
- a morphism $(X,\alpha)\to(X,\beta)$ is given by a morphism $f:X\to Y$ of $\mathcal{C}$ st. $\forall I\in \mathcal{J}$ $\beta_{Y}\circ f=\alpha_{X}$
### category of categories
the category $\mathbf{Cat}$ has
- as objects: small categories
- as morphism: functors between categories
the identities are given by the identity functors and composition is given by composition of functor
### keisli category
let $(T,\eta,\mu)$ be a monad on $\mathcal{C}$. the keisli category of $T$, $\mathcal{C}_{T}$, has
- as objects: the objects of $\mathcal{C}$
- as morphism: the keisli morphisms of $T$
- as identities: the units $\eta:X\to TX$ $\forall X$
the composition is given by the keisli composition
### co-keisli category
let $(C,\varepsilon,\nu)$ be a comonad on $\mathcal{C}$. the co-keisli category of $C$, $\mathcal{C}_{C}$, has
- as objects: the objects of $\mathcal{C}$
- as morphisms: the co-keisli morphisms of $C$
the composition is given by the co-keisli composition
### eilenberg-moore category
let $(T,\eta,\mu)$ be a monad on $\mathcal{C}$. the eilenberg-moore category, $\mathcal{C}^T$ has
- as objects: $T$-algebras
- as morphism: $T$-morphisms
### co-eilenberg-moore category
the co-eilenberg-moore category of $C$, $\mathcal{C}^C$, is the category of  $C$-coalgebras and $C$-morphisms
## functors
let $\mathcal{C}$ and $\mathcal{D}$ be category
a functor $F:\mathcal{C}\to \mathcal{D}$ consists of the following data
- $\forall X\in ob(\mathcal{C})$, a $FX\in ob(\mathcal{D})$
- $\forall f:X\to Y$ of $\mathcal{C}$, a morphism $Ff:FX\to FY$ of $\mathcal{D}$
st the following axioms hold
- unitality: $\forall X\in ob(\mathcal{C}),F\text{id}_{X}=\text{id}_{{FX}}$
- compositionality: $\forall f,g$ of $\mathcal{C}$, $F(g\circ f)=Fg\circ Ff$


if a diagram commutes its image under a functor also commutes
functors map split monomorphisms to split monomorphisms and split epimorphisms to split epimorphisms


let $F:\mathcal{C}\to \mathcal{D}$ be a functor. let $f:X\to Y$ be mono (resp. epi). if $Ff$ is not mono (resp. epi). then $f$ is not split mono (resp. epi)

### contravariant functors
a contravariant functor $\mathcal{C}\to \mathcal{D}$ is a functor $\mathcal{C}^{op}\to \mathcal{D}$
### presheaf
a presheaf on $\mathcal{C}$ is a functor $\mathcal{C}^{op}\to\mathbf{Set}$
### faithful functors
a functor is faithful when
$\forall C,C'\in ob(\mathcal{C})$ and every pair of arrow $f,f':C\to C'$, $Ff=Ff' \iff f=f'$
### full functors
a functor is full when
$\forall C,C'\in ob(\mathcal{C})$ and every arrow $g:FC\to FC'\ \exists f:C\to C'\ st.\ Ff=g$
### fully faithful functors
a functor is fully faithful when it is full and faithful
### essentially surjective functors
a functor is essentially surjective when
$\forall D\in ob(\mathcal{D}) \exists C\in ob(\mathcal{C})$ and an isomorphism $FC\to D$
### representable functor
let $\mathcal{C}$ be a category. a functor $F:\mathcal{C}\to \mathbf{Set}$ is representable if it is naturally isomorphic to the functor $\text{Hom}_{\mathcal{C}}(S,-):\mathcal{C}\to \mathbf{Set}$ for some $S\in ob(\mathcal{C})$. in that case, $S$ is the representing object
representable functors are continuous


a presheaf $F:\mathcal{C}^{op}\to \mathbf{Set}$ is representable if it is naturally isomorphic to the functor $\text{Hom}_{{\mathcal{C}}}(-,S):\mathcal{C}^{op}\to \mathbf{Set}$ 
representable presheaf turn colimits into limits




### continuous functor
a functor $F:\mathcal{C}\to \mathcal{C}'$ is continuous if $\forall$ diagrams $D$ in $\mathcal{C}$ st lim $D$ exists then lim $F(D)$ exists in $\mathcal{C}'$ and lim $F(D)\simeq F(\text{lim }D)$ 
a functor $F:\mathcal{C}\to \mathcal{C}'$ is cocontinuous if $\forall$ diagrams $D$ in $\mathcal{C}$ st colim $D$ exists then colim $F(D)$ exists in $\mathcal{C}'$ and colim $F(D)\simeq F(\text{colim }D)$ 
## natural transformations
let $\mathcal{C}$ and $\mathcal{D}$ be categories and let $F$ and $G$ be functors $\mathcal{C}\to \mathcal{D}$. a natural tranfsormation $\alpha:F\Rightarrow   G$ consists of the folowing data
- $\forall C\in ob(\mathcal{C})$ a morphism $\alpha_{C}:FC\to GC$ called the component of $\alpha$ at $C$
- $\forall f:C\to C'$, $Gf\circ \alpha_{C}=\alpha_{C'}\circ Ff$

### horizontal composition
let $\mathcal{C},\mathcal{D}$ and $\mathcal{E}$ be categories, let $F,G:\mathcal{C}\to \mathcal{D}$ and $H,I:\mathcal{D}\to\mathcal{E}$ be functors and let $\alpha:F\Rightarrow G$ and $\beta:H\Rightarrow I$ be natural transformations. then:$$(\beta G)\circ(H\alpha)=(I\alpha)\circ(\beta H)$$
we call the resulting natural transformation $\beta \alpha:HF\Rightarrow IG$ the horizontal composition of $\alpha$ and $\beta$ 

### natural isomorphisms
let $\mathcal{C}$ and $\mathcal{D}$ be categories, let $F,G:\mathcal{C\to \mathcal{D}}$ be functors and let $\alpha:F\Rightarrow G$ be a natural transformation
$\alpha$ is a natural isomorphism if $\forall C\in ob(\mathcal{C})$, $\alpha_{C}:FC\to GC$ is an isomorphism
in that case, $F$ and $G$ are isomorphic
### functor categories
let $\mathcal{C}$ and $\mathcal{D}$ be categories the functor category $\mathcal{C}^{\mathcal{D}}$ is constructed as follows
- objects are functors $F:\mathcal{C}\to \mathcal{D}$
- morphisms are natural transformations $\alpha:F\Rightarrow G$

## equivalence of categories
let $\mathcal{C}$ and $\mathcal{D}$ be categories an equivalence of categories between $\mathcal{C}$ and $\mathcal{D}$ consists of a pair of functor $F:\mathcal{C}\to \mathcal{D}$ and $G:\mathcal{D}\to C$ and natural isomorphisms $\eta:G\circ F\Rightarrow \text{id}_{\mathcal{C}}$ and $\epsilon: F\circ G\Rightarrow \text{id}_{\mathcal{D}}$ 
in this case $G$ is the pseudo inverse of $F$


a functor $F:\mathcal{C}\to \mathcal{D}$ defines an equivalence of relation $\iff$ it's fully faithful and essentially surjective
## yoneda embedding theorem
let $\mathcal{C}$ be a category and let $X$ and $Y$ be objects of $\mathcal{C}$. there is a natural bijection of sets
$$\text{Hom}_{\mathcal{C} }(X,Y)\simeq \text{Hom}_{[\mathcal{C}^{op},\mathbf{Set} ]}(\text{Hom}_{\mathcal{C} }(-,X),\text{Hom}_{\mathcal{C} }(-,Y))$$
between the morphisms of $\mathcal{C}$ from $X$ to $Y$ and the natural transformations from the presheaf $\text{Hom}_{\mathcal{C}}(-,X):\mathcal{C}^{op}\to \mathbf{Set}$ represented by $X$ to the presheaf $\text{Hom}_{\mathcal{C}}(-,Y):\mathcal{C}^{op}\to \mathbf{Set}$ represented by $Y$


$X$ and $Y$ are isomorphic $\iff$ the functors that they represent are naturally isomorphic
in particular if $X$ and $Y$ represent the same functor, they are isomorphic

$X$ and $Y$ are isomorphic $\iff$ $\forall S\in ob(\mathcal{C})$, the sets $\text{Hom}_{\mathcal{C}}(S,X)$ and $\text{Hom}_{\mathcal{C}}(S,Y)$ are naturally isomorphic
in particular if $X$ and $Y$ are indistinguishable by $S$ $\forall S\in ob(\mathcal{C})$, then $X$ and $Y$ are necessarily isomorphic
### yoneda lemma
let $\mathcal{C}$ be a category, let $X$ be an object of $\mathcal{C}$ and let $F:\mathcal{C}^{op}\to \mathbf{Set}$ be a presheaf on $\mathcal{C}$ . cnosider the map $$\text{Hom}_{[\mathcal{C}^{op},\mathbf{Set} ]}(\text{Hom}_{\mathcal{C} }(-,X) ,F)\to F$$
assigning to a natural transformation $\alpha:\text{Hom}_{\mathcal{C}}(-,X)\Rightarrow F$ the element $\alpha_{X}(\text{id}_{X})\in FX$ which is the value of the component $\alpha_{X}$ of $\alpha$ on the identity at $X$ 
this assignement is a bijection and is natural in both $X$ and $F$ 

## universal properties
let $\mathcal{C}$ be a category and $X$ an object of $\mathcal{C}$. a universal property of $X$ consists of either a functor$F:\mathcal{C}\to \mathbf{Set}$ or a presheaf $P:\mathcal{C}^{op}\to \mathbf{Set}$ together with either a natural isomorphism $\text{Hom}_{\mathcal{\mathcal{C}}}(X,-)\Rightarrow F$ or $\text{Hom}_{\mathcal{C}}(-,X)\Rightarrow P$ 
## cone
let $\mathcal{J}$ be a small category, let $F:\mathcal{J}\to \mathcal{C}$ be a diagram, and let $X$ be an object of $\mathcal{C}$. a cone over $F$ with tip $X$ is a natural transformation from the constant diagram at $X$ to the functor $F$
$\forall J\in ob(\mathcal{J})$ we have a morphism $\alpha_{J}:X\to FJ$ of $\mathcal{C}$ in such a way that $\forall m:J\to J'$ of $\mathcal{J}$ $$Fm\circ \alpha_{J}=\alpha_{J'}$$


a cone under $F$, a cocone, with bottom $X$ is a natural transformation from the functor $F$ to the constant diagram at $X$ 




let $F:\mathcal{J}\to \mathcal{C}$ be a diagram. we construct the presheaf $\text{Cone}(-,F):\mathcal{C}^{op}\to \mathbf{Set}$ as follows
- it maps an object $X\in ob(\mathcal{C})$ to the set $\text{Cone}(X,F)$ of cones over $F$ with tip $X$
- it maps a morphism $f:X\to Y$ to the function $\text{Cone}(Y,F)\to \text{Cone}(X,F)$ given in the following way. it assigns to a cone $\alpha:Y\Rightarrow F$ of components $\alpha_{J}:Y\to FJ$ $\forall J\in ob(\mathcal{J})$ the cone $\alpha\circ f:X\Rightarrow F$  components $(\alpha \circ f)_{J}:=\alpha_{J}\circ f$
the functor $\text{Cone}(F,-):\mathcal{C}\to \mathbf{Set}$ is defined as follows
- it maps an object $X\in ob(\mathcal{C})$ to the set $\text{Cone}(F,X)$ of cocones under $F$ with bottom $X$
- it maps a morphism $f:X\to Y$ to the function $\text{Cone}(F,X)\to \text{Cone}(F,Y)$ given in the following way. it assigns to a cone $\alpha:F\Rightarrow X$ of components $\alpha_{J}:FJ\to X$ $\forall J\in ob(\mathcal{J})$ the cocone $f\circ \alpha:F\Rightarrow Y$  components $(f \circ \alpha)_{J}:=f \circ\alpha_{J}$
### limits
let $F:\mathcal{J}\to \mathcal{C}$ be a diagram. a limit of $F$, if it exists, is an object of $\mathcal{C}$ representing the presheaf $\text{Cone}(-,F):\mathcal{C}^{op}\to \mathbf{Set}$, together with its universal property
a colimit of $F$ if it exists, is an object of $\mathcal{C}$ representing the functor $\text{Cone}(F,-):\mathcal{C}\to \mathbf{Set}$, together with its universal property
#### products
the limit of a discrete diagram is called the product $A\times B$
the colimit of a discrete diagrams called the coproduct or the sum $A\sqcup B$

#### equalizer
the limit of a pair of parallel arrows $f,g$ is the equalizer of $f,g$ 
the colimit of a pair of parallel arrow $f,g$ is the coequalizer of $f,g$
#### pullback
the limit of a cospan $f:A\to C, g:B\to C$ is the pullback or fibered product
the colimit of a span is the pushout


#### terminal object
the limit of the empty diagram of $\mathcal{C}$ is the terminal object of $\mathcal{C}$ 
the colimit of the empty diagram of $\mathcal{C}$ is the initial / coterminal object of $\mathcal{C}$
## adjunctions
let $\mathcal{C}$ and $\mathcal{D}$ be category and let $F:\mathcal{C}\to \mathcal{D}$ and $G:\mathcal{D}\to \mathcal{C}$ be functors. an adjuction between $F$ and $G$, $F\dashv G$ is a bijection $$\text{Hom}_{\mathcal{D}}(FC,D)\to^{\simeq} \text{Hom}_{\mathcal{C}}(C,GD)$$
$\forall C\in ob(\mathcal{C}),D\in ob(\mathcal{D})$ , natural in both $C$ and $D$  
$F$ is the left adjoint and $G$ is the right adjoint


two maps $f^{\sharp}:FC\to D$ and $f^{\flat:}GD\to C$ related by the bijection above are transpose or adjunct of each other


right adjoint functors are continuous
left adjoint functors are cocontinuous

### units
the universal map $\eta_{C}:C\to GFC$ induced by the adjunction at the object $C$ is the unit of adjunction at $C$

$$\eta_{C}=(\text{id}_{FC})^{\flat}$$
$$(\eta_{C})^{\sharp}=\text{id}_{FC}$$


the natural transformation $\eta:\text{id}_{\mathcal{C}}\Rightarrow G\circ F$ of components $\eta_{C}:C\to GFC$ is the unit of adjunction
the natural transformation $\varepsilon:F\circ G\Rightarrow \text{id}_{\mathcal{C}}$ induced by the adjunction $F \dashv G$ is the counit of adjunction

## monads
<!-- a monad on a category C is a monoid on the category of endofunctors of C-->
let $\mathcal{C}$ be a category. a monad on $\mathcal{C}$ consists of
- a functor $T:\mathcal{C}\to \mathcal{C}$
- a natural transformation $\eta:\text{id}_{\mathcal{C}}\to T$ called unit
- a natural transformation $\mu:TT\to T$ called composition or multiplication
st the following diagrams commute, called left and right unitality and associativity respectively
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMTAsWzAsMCwiVCJdLFsyLDAsIlRUIl0sWzIsMiwiVCJdLFs0LDAsIlQiXSxbNiwwLCJUVCJdLFs2LDIsIlQiXSxbOCwwLCJUVFQiXSxbMTAsMCwiVFQiXSxbOCwyLCJUVCJdLFsxMCwyLCJUIl0sWzAsMSwiXFxldGEgVCIsMCx7InNob3J0ZW4iOnsic291cmNlIjoyMH0sImxldmVsIjoyfV0sWzAsMiwiXFx0ZXh0e2lkfSIsMix7InNob3J0ZW4iOnsic291cmNlIjoyMH0sImxldmVsIjoyfV0sWzEsMiwiXFxtdSIsMCx7InNob3J0ZW4iOnsic291cmNlIjoyMH0sImxldmVsIjoyfV0sWzMsNCwiVFxcZXRhIiwwLHsic2hvcnRlbiI6eyJzb3VyY2UiOjIwfSwibGV2ZWwiOjJ9XSxbMyw1LCJcXHRleHR7aWR9IiwyLHsic2hvcnRlbiI6eyJzb3VyY2UiOjIwfSwibGV2ZWwiOjJ9XSxbNCw1LCJcXG11IiwwLHsic2hvcnRlbiI6eyJzb3VyY2UiOjIwfSwibGV2ZWwiOjJ9XSxbOCw5LCJcXG11IiwyLHsic2hvcnRlbiI6eyJzb3VyY2UiOjIwfSwibGV2ZWwiOjJ9XSxbNyw5LCJcXG11IiwwLHsic2hvcnRlbiI6eyJzb3VyY2UiOjIwfSwibGV2ZWwiOjJ9XSxbNiw3LCJUXFxtdSIsMCx7InNob3J0ZW4iOnsic291cmNlIjoyMH0sImxldmVsIjoyfV0sWzYsOCwiXFxtdSBUIiwyLHsic2hvcnRlbiI6eyJzb3VyY2UiOjIwfSwibGV2ZWwiOjJ9XV0=&embed" width="1456" height="432" style="border-radius: 8px; border: none;"></iframe>

<!-- a comonad on a category C is a monoid on the category of endofunctors of Cop-->
a comonad on $\mathcal{C}$ is a monad on $\mathcal{C}^{op}$






let $\mathcal{C}$ and $\mathcal{D}$ be categories and let $F:\mathcal{C}\to \mathcal{D}$ and $G:\mathcal{D}\to \mathcal{C}$ be adjoint functors with $F\dashv G$. denote the unit and counit by $\eta:\text{id}_{\mathcal{C}}\to G\circ F$ and $\varepsilon:F\circ G\to \text{id}_{\mathcal{D}}$ respectively. then
- $G\circ F$ is a monad on $\mathcal{C}$ with unit $\eta$ and multiplication $G\varepsilon F$
- $F\circ G$ is a comonad on $\mathcal{D}$ with unit $\varepsilon$ and multiplication $F\eta G$
### keisli morphism
let $(T,\eta,\mu)$ be a monad on $\mathcal{C}$. a keisli morphism of $T$ from $X$ to $Y$ is a morphism  $k:X\to TY$ 
#### keisli composition
let $(T,\eta,\mu)$ be a monad on $\mathcal{C}$. let $k:X\to TY$ and $h:Y\to TZ$. the keisli composition of $k$ and $h$ is the morphism $(h\circ_{kl} k):X\to TZ$ given by:
$$X\to^kTY\to^{Th}TTZ\to^{\mu}TZ$$
### co-keisli morphisms
let $(C,\varepsilon,\nu)$ be a comonad on $\mathcal{C}$. a co-keisli morphism of $C$ from $X$ to $Y$ is a morphism $CX\to Y$
#### co-keisli composition
let $(C,\varepsilon,\nu)$ be a comonad on $\mathcal{C}$. let $k:CX\to Y$ and $h:CY\to Z$ be co-keisli morphisms. their co-keisli composition is the co-keisli morphism $h\circ_{Ck} k:CX\to Z$ given by:$$CX\to^{\nu}CCX\to^{Ck}CY\to^hZ$$

### idempotent monads
a monad $(T,\eta,\mu)$ on a category $\mathcal{C}$ is idempotent if $\mu:T\to TT$ is a natural isomorphism
### algebras of a monad
also called eilenberg-moore algebras
let $(T,\eta,\mu )$ be a monad on a category $\mathcal{C}$. an algebra on $T$ or algebra over $T$ or $T$-algebra consists of
- an object $A$ of $\mathcal{C}$
- a morphism $e:TA\to A$
st the following diagrams called unit and composition respectively commute:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNyxbMCwwLCJBIl0sWzIsMCwiVEEiXSxbMiwyLCJBIl0sWzQsMCwiVFRBIl0sWzYsMCwiVEEiXSxbNCwyLCJUQSJdLFs2LDIsIkEiXSxbMCwxLCJcXGV0YSJdLFswLDIsIlxcdGV4dHtpZH0iLDJdLFsxLDIsImUiXSxbMyw1LCJcXG11IiwyXSxbMyw0LCJUZSJdLFs1LDYsImUiLDJdLFs0LDYsImUiXV0=&embed" width="945" height="432" style="border-radius: 8px; border: none;"></iframe>
#### $T$-morphisms
let $(A,e)$ and $(B,e)$ be algebras of a monad $T$ on $\mathcal{C}$. a $T$-morphism is a morphism $f:A\to B$ of $\mathcal{C}$ st the following diagram commutes:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJUQSJdLFsyLDAsIlRCIl0sWzAsMiwiQSJdLFsyLDIsIkIiXSxbMCwxLCJUZiJdLFsyLDMsImYiLDJdLFswLDIsImUiXSxbMSwzLCJlIl1d&embed" width="432" height="432" style="border-radius: 8px; border: none;"></iframe>
### coalgebras of a comonad
let $(C,\varepsilon,\nu)$ be a comonad on $\mathcal{C}$. a $C$-coalgebra consists of
- an object $A$ of $\mathcal{C}$
- a morphism $i:A\to CA$
st the following diagrams called counit and comultiplication respectively commute:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNyxbMCwwLCJBIl0sWzIsMCwiQ0EiXSxbMiwyLCJBIl0sWzQsMCwiQSJdLFs2LDAsIkNBIl0sWzQsMiwiQ0EiXSxbNiwyLCJDQ0EiXSxbMCwxLCJpIl0sWzAsMiwiXFx0ZXh0e2lkfSIsMl0sWzEsMiwiXFx2YXJlcHNpbG9uIl0sWzMsNCwiaSJdLFszLDUsImkiLDJdLFs1LDYsIkNpIiwyXSxbNCw2LCJcXG51Il1d&embed" width="951" height="432" style="border-radius: 8px; border: none;"></iframe>
#### morphisms of coalgebras
let $(A,i)$ and $(B,i)$ be coalgebras of a comonad $C$ on $\mathcal{C}$. a $C$-morphism, is a morphism $f:A\to B$ of $\mathcal{C}$ st the following diagram commutes:
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJBIl0sWzIsMCwiQiJdLFswLDIsIkNBIl0sWzIsMiwiQ0IiXSxbMCwxLCJmIl0sWzIsMywiQ2YiLDJdLFswLDIsImkiLDJdLFsxLDMsImkiXV0=&embed" width="432" height="432" style="border-radius: 8px; border: none;"></iframe>
