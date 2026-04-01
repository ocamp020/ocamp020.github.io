# Beyond Hulten: Distortions

> Part: Input-Output Networks and Economic Activity

Once the initial allocation is inefficient, Hulten's theorem no longer
holds even to first order. The reason is that the allocation changes
in response to shocks, a consequence of the Envelope theorem not applying.
To see this, we now reintroduce markups $\{\mu_{s}\}$. Other wedges
can be re-expressed as markups by adding fictional input suppliers
with an appropriately defined markup.

Once $\mu\neq1$, the revenue-based input-output matrix no longer
coincides with the matrix of cost shares. Define the revenue-based
input share matrix $\Omega$ as before, with
\[
\omega_{sk}\;=\;\frac{p_{k}x_{sk}}{p_{s}y_{s}}.
\]
The corresponding cost-based share is
\[
\widetilde{\omega}_{sk}\;\equiv\;\frac{p_{k}x_{sk}}{MC_{s}\,y_{s}}\;=\;\mu_{s}\omega_{sk}.
\]
Let $\widetilde{\Omega}=[\widetilde{\omega}_{sk}]$ denote the cost-based
input-output matrix, $\widetilde{\Psi}=(I-\widetilde{\Omega})^{-1}$
the associated Leontief inverse, and
\[
\widetilde{\lambda}\equiv\widetilde{\Psi}^{\prime}\beta
\]
the vector of cost-based Domar weights.

It is also convenient to add labor as the last column of the Input-Output
matrix, and the production of the final aggregate good as the first
column. In this way, there is a single matrix that describes all the
economy. The sectors can therefore go between $0$ and $S$, with
$s=0$ being the production of the fictional final output.

A convenient decomposition from [Baqaee and Farhi (2020)](https://doi.org/10.1093/qje/qjz030) is
\[
d\log Y\;=\;\underbrace{\widetilde{\lambda}^{\prime}d\log z}_{\text{pure technology}}\;+\;\underbrace{\left(-\widetilde{\lambda}^{\prime}d\log\mu-\widetilde{\Lambda}\,d\log\Lambda\right)}_{\text{change in allocative efficiency}},
\]
where $\Lambda$ is vector of factors' revenue shares and $\widetilde{\Lambda}$
is its cost-based counterpart. The first term says that technology
shocks are now weighted by cost-based rather than revenue-based Domar
weights. The second term says that reallocations matter at a first
order because the initial equilibrium is not efficient.

With a single primary factor, labor, the change in real output is
\begin{align*}
d\log Y\;=\; & \;\widetilde{\lambda}^{\prime}\left(d\log z-d\log\mu\right)\;-\;\sum_{s=0}^{S}\lambda_{s}(1-\theta_{s})\mathrm{Cov}_{\widetilde{\Omega}_{(s,:)}}\!\left(d\log p-d\log\Lambda,\Psi_{(:,S+2)}\right)\;.
\end{align*}
where $\Lambda$ is labor's revenue share and $\Psi_{(s,S+2)}$ denotes
the fraction of sector $s$'s revenue that is ultimately paid out
to labor (from the last column of the $\Psi$ matrix). The change
in the relative prices (relative to labor) is
\[
d\log p-d\log\Lambda\;=\;\sum_{s=1}^{S}\widetilde{\Psi}_{(:,s)}\left(d\log\mu_{s}-d\log z_{s}\right).
\]
We can use this to express the changes in output in terms of changes
in technology, reallocation due to technological change, and reallocation
due to changes in distortions:
\begin{align*}
d\log Y\;=\; & \;\widetilde{\lambda}^{\prime}d\log z\;-\;\sum_{s=0}^{S}\frac{\lambda_{s}}{\mu_{s}}(\theta_{s}-1)\mathrm{Cov}_{\widetilde{\Omega}_{(s,:)}}\!\left(\sum_{k=1}^{S}\widetilde{\Psi}_{(:,k)}d\log z_{k},\Psi_{(:,S+2)}\right)\\
& \;+\;\sum_{s=0}^{S}\frac{\lambda_{s}}{\mu_{s}}\theta_{s}\mathrm{Cov}_{\widetilde{\Omega}_{(s,:)}}\!\left(\sum_{k=1}^{S}\widetilde{\Psi}_{(:,k)}d\log\mu_{k},\Psi_{(:,S+2)}\right)\;.
\end{align*}
The first term is the direct effect of technologies and wedges through
cost-based Domar weights. The covariance terms are the reallocation
effects. They are positive when lower relative prices shift demand
toward parts of the economy with high initial wedges, that is, toward
supply chains with low values of $\Psi_{(:,S+2)}$, as those sectors
were too small to begin with.

## Example: Horizontal economy.

Consider the horizontal CES economy in which each good is produced
linearly from labor and there are no intermediate inputs. Let
\[
\lambda_{i}=\frac{p_{i}c_{i}}{Y}\qquad\text{and}\qquad\Lambda=\sum_{i=1}^{S}\lambda_{i}\mu_{i}^{-1}
\]
denote, respectively, the household expenditure share on good $i$
and labor's revenue share. Since the household is the only buyer,
there is only one substitution elasticity, $\theta_{C}$, and the
relevant relative price is
\[
\log p_{i}-\log w=\log\mu_{i}-\log z_{i}.
\]
Hence the expenditure share of good $i$ satisfies
\[
d\log\lambda_{i}=(1-\theta_{C})\left[\left(d\log\mu_{i}-d\log z_{i}\right)-\sum_{j=1}^{S}\lambda_{j}\left(d\log\mu_{j}-d\log z_{j}\right)\right].
\]
Substituting this into the distorted-economy aggregation formula yields
\[
d\log Y=\sum_{i=1}^{S}\lambda_{i}\,d\log z_{i}\;+\;\frac{1-\theta_{C}}{\Lambda}\mathrm{Cov}_{\lambda}\!\left(d\log z,\mu^{-1}\right)\;+\;\frac{\theta_{C}}{\Lambda}\mathrm{Cov}_{\lambda}\!\left(d\log\mu,\mu^{-1}\right).
\]
The first term is the direct effect of productivity shocks. The second
and third terms are reallocation effects. If goods are substitutes,
$\theta_{C}>1$, then productivity improvements at initially high-markup
producers raise aggregate output because they shift labor toward firms
that were too small to begin with. Likewise, a fall in markups at
initially high-markup producers raises output through the last covariance
term, and this force is stronger the larger is $\theta_{C}$. When
$\theta_{C}=0$, the markup covariance term vanishes, so markup changes
have no reallocation effect.

## The deadweight-loss of markups.

Near efficiency, [Baqaee and Farhi (2019)](https://doi.org/10.3982/ECTA15202) show that the loss
from wedges can be written as a Domar-weighted sum of Harberger triangles:
\[
d\log Y\;\approx\;-\frac{1}{2}\sum_{i=1}^{S}\lambda_{i}\,d\log y_{i}\,d\log\mu_{i}.
\]
A wedge is more costly when it induces a larger quantity response
and when it hits a sector with a larger Domar weight.

In a nested-CES economy we can further show that
\[
d\log Y\;\approx\;-\frac{1}{2}\sum_{s=0}^{S}\lambda_{s}\theta_{s}\text{Var}_{\Omega_{(s,:)}}\left(\sum_{k=0}^{S}\Psi_{(:,k)}d\log\mu_{k}\right).
\]
From [Baqaee and Rubbo (2023)](https://doi.org/10.1146/annurev-economics-082322-012833): "Unlike for productivity shocks,
where the second-order effects originating from each producer j are
positive if, and only if, its inputs are substitutes, for wedges the
second-order terms are always (weakly) negative, and more so when
goods are better substitutes. Intuitively, expenditure switch- ing
by consumers and producers inefficiently reallocates quantities away
from sectors with higher relative markup. This effect is stronger
when elasticities of substitution, $\theta_{s}$, are larger."

## Hsieh-Klenow: A CES horizontal economy.

Consider now the CES horizontal economy in [Hsieh and Klenow (2009)](https://doi.org/10.1162/qjec.2009.124.4.1403).
Firms use only labor and their output is aggregated into a final good
with a CES technology with elasticity of substitution $\theta>1$.
A high-markup producer is too small relative to the efficient allocation.
Dispersion in markups therefore misallocates labor across firms. In
this case there are no intermediate inputs, so each firm's Domar weight
is simply its equilibrium expenditure share $\lambda_{i}=p_{i}c_{i}/Y$.

The loss from misallocation is proportional to the sales-share-weighted
dispersion of markups, and the proportionality factor rises with the
elasticity of substitution.
\[
\Delta\log Y\;\approx\;-\frac{1}{2}\theta_{C}\,\mathrm{Var}_{\lambda}(\Delta\log\mu).
\]

## Roundabout amplification of wedge distortions.

Now return to the roundabout economy with self-input share $\omega$,
and let $\mu$ denote the markup wedge on the unique producer. Applying
Equation 22 gives the analogue of Example 17 in [Baqaee and Rubbo (2023)](https://doi.org/10.1146/annurev-economics-082322-012833):
\[
\Delta\log Y\;\approx\;-\frac{1}{2}\frac{\theta\omega}{(1-\omega)^{2}}(\Delta\log\mu)^{2}.
\]
Equivalently, the deadweight-loss representation may be written as
\[
\Delta\log Y\;\approx\;-\frac{1}{2}\lambda\,\Delta\log y\,\Delta\log\mu,\qquad\lambda=\frac{1}{1-\omega},\qquad\Delta\log y=-\frac{\theta\omega}{1-\omega}\Delta\log\mu.
\]
Losses are therefore increasing both in the elasticity of substitution
$\theta$ and in the intermediate-input share $\omega$. A higher
self-input share raises the Domar weight because the distorted good
is used repeatedly along its own supply chain. At the same time, it
makes the local Harberger triangle larger because the same wedge induces
a larger reduction in total output.

A markup is not just a distortion on final demand. It also distorts
the repeated choice between labor and materials inside production.
The larger is $\omega$, the more rounds of intermediate production
there are, and the more times the same distortion is compounded. In
this sense, intermediate inputs amplify misallocation losses twice:
by enlarging the relevant deadweight-loss triangle itself and by increasing
the Domar weight used to aggregate it. When $\omega=0$, this amplification
disappears, and the one-sector markup is a pure transfer.

Consider an experiment that can have several (but finite) outcomes.
For example trowing a dice can turn out in getting any number from
1 to 6, or asking someone out can generate an affirmative response,
a negative one or perhaps a maybe, or no response at all. A probability
function is a function that assigns a value to each possible outcome
while satisfying certain rules.

Its clear that when the outcomes are finite, outcomes form a set $S=\left\{ s_{1},\ldots,s_{n}\right\} $,
a probability is a list $\left(\pi_{1},\ldots,\pi_{n}\right)$ such
that $\Pr\left(s_{i}\right)=\pi_{i}$:

1. $\pi_{i}\geq0$ for all $i$.
1. $\sum\pi_{i}=1$.

It is natural to define other outcomes that are formed by unions of
the former ones, like getting an even number when trowing the dice
(the union of getting a two a four and a six) or getting a positive
answer or a maybe when asking someone out. It is clear that the probability
of these new outcomes is defined by the sum of probabilities of the
original outcomes used to define them.

Formally we could say that for any set $A\subseteq S$ we define $I_{A}=\left\{ i|s_{i}\in A\right\} $
and then a function $\mu:2^{S}\to\left[0,1\right]$ as:
\[
\mu\left(A\right)=\Pr\left(A\right)=\sum_{i\in I_{A}}\pi_{i}
\]
Furthermore we can define the expected value of a real valued function
$f:S\to\mathbb{R}$ as $E\left[f\right]=\sum\mu\left(\left\{ s_{i}\right\} \right)f\left(s_{i}\right)$.

This same discussion can be carried out if the possible outcomes are
countably infinite, but it is difficult to generalize it otherwise.
The objective now is to study which properties does this kind of function
satisfy and how it is generalized to deal with cases where outcomes
are arbitrary. The key for this is to realize that a probability is
a function that maps sets into the interval $\left[0,1\right]$, hence
the study of functions that map sets into non-negative numbers will
provide the necessary theory, these functions are called measures,
for obvious reasons.

The following sections draw on the short exposition of measure theory
contained in Chapter 7 of [Stokey et al. (1989)](https://books.google.com/books?id=tWYo0QolyLAC) and complements it with portions
of [Kolmogorov and Fomin (2012)](https://books.google.com/books?id=cbbCAgAAQBAJ) (chapters 7 to 10). Both these
references are introductory although they present all the relevant
results. All the material is also covered in a more advanced manner
in [Kolmogorov and Fomin (1999)](https://books.google.com/books?id=OyWeDwfQmeQC).

The aim of the course is not to dwell in the mathematical details
of the theory but rather present the most useful results for applications
in economic theory, because of this many of the proofs will be omitted
only including those that are either instructive of the way the theory
is developed. [Kolmogorov and Fomin (2012)](https://books.google.com/books?id=cbbCAgAAQBAJ) is a good source
for detailed (and easy to understand) proofs.
