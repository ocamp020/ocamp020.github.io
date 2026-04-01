# Input-Output Networks

> Part: Input-Output Networks and Economic Activity

The previous subsection solved the equilibrium without using the language
of networks. We can now reinterpret those same objects in a way that
makes the propagation mechanism transparent.
!!! info "Definition"

    **(Input-output matrix**) For each pair of sectors $(s,k)$,
    define the expenditure share of sector $s$ on input $k$ by
    \[
    \omega_{sk}\equiv\frac{p_{k}x_{sk}}{p_{s}y_{s}}.
    \]
    The matrix $\Omega=[\omega_{sk}]$ is the *input-output matrix*
    of the economy.

The value of $\omega_{sk}$ captures how important sector $k$ is
for the production of sector $s$.

In the Domar economy with Cobb-Douglas technology, $\omega_{sk}=a_{sk}$
for every $s,k$, so the technological coefficient matrix and the
input-output matrix coincide with $\Omega=A$.
!!! info "Definition: Leontief inverse"

    The *Leontief inverse* is the matrix
    \[
    \Psi\equiv(I-\Omega)^{-1},
    \]
    we denote its $(s,k)$ element by $\psi_{sk}$. When the Neumann series
    converges, this matrix admits the expansion
    \[
    \Psi=I+\Omega+\Omega^{2}+\cdots.
    \]

The element $\psi_{sk}$ adds up all direct and indirect ways in which
sector $k$ enters the production of sector $s$. The direct effect
is $\omega_{sk}$. The second-round effect is the contribution of
$k$ to the suppliers of $s$, and so on. The Leontief inverse therefore
summarizes all downstream linkages.

## Directed graphs and centrality.

In graph-theoretic language, the production network is a weighted
directed graph. The graph has one node per sector and a directed edge
from $k$ to $s$ whenever sector $s$ buys the output of sector $k$
as an intermediate input. The edge weight is $\omega_{sk}$.

A node is central when many important paths run through it. This is
exactly what the column sums of the Leontief inverse measure.
!!! info "Definition"

    **(Downstream centrality**) For each sector $k$, define its
    downstream centrality by
    \[
    v_{k}\;\equiv\;\sum_{s=1}^{S}\psi_{sk}.
    \]
    Equivalently, $v_{k}$ is the sum of the entries in column $k$ of
    the Leontief inverse $\Psi$.

The measure $v_{k}$ is a Bonacich-type centrality index: Sector $k$
is central when it is an important supplier to sectors that are themselves
important in production. We can prove this in general from the definitions
of the input-output matrix $\Omega$ and the Leontief inverse $\Psi$.
<a id="ref-prop-000020domar-centrality" class="course-anchor"></a>
!!! abstract "Proposition"

    **(Domar weights are weighted downstream centrality measures**)
    Consider a competitive economy with constant returns to scale. Let
    $\Omega=[\omega_{sk}]$ denote the input-output matrix, $\Psi=(I-\Omega)^{-1}$
    the Leontief inverse, $\beta_{s}\equiv\frac{p_{s}c_{s}}{Y}$ the final
    expenditure shares, and $\lambda_{s}\equiv\frac{p_{s}y_{s}}{Y}$ the
    Domar weights. Then,
    \[
    \lambda\;=\;\Psi^{\prime}\beta\;=\;(I-\Omega^{\prime})^{-1}\beta.
    \]
    If final expenditure shares are uniform, $\beta_{s}=1/S$ for all
    $s$, then
    \[
    \lambda_{k}=\frac{v_{k}}{S},\qquad v_{k}\equiv\sum_{s=1}^{S}\psi_{sk}.
    \]

??? success "Proof"

    For each sector $s$, market clearing implies
    \[
    p_{s}y_{s}=p_{s}c_{s}+\sum_{j=1}^{S}p_{s}x_{js}.
    \]
    Replace the expenditure in each input using input-output coefficients,
    $p_{s}x_{js}=\omega_{js}\,p_{j}y_{j}$, so
    \[
    p_{s}y_{s}=p_{s}c_{s}+\sum_{j=1}^{S}\omega_{js}\,p_{j}y_{j}.
    \]
    Divide both sides by GDP, $Y$, and express in terms of expenditure
    shares,
    \[
    \lambda_{s}\;=\;\frac{p_{s}y_{s}}{Y}\;=\;\frac{p_{s}c_{s}}{Y}\;+\;\sum_{j=1}^{S}\omega_{js}\frac{p_{j}y_{j}}{Y}\;=\;\beta_{s}\;+\;\sum_{j=1}^{S}\omega_{js}\lambda_{j}.
    \]
    Stacking these equations across sectors yields
    \[
    \lambda=\beta+\Omega^{\prime}\lambda.
    \]
    Rearranging gives the result.

## Reinterpreting the Cobb-Douglas solution.

The sectoral formula
\[
\log y_{s}=\delta_{s}+\sum_{k=1}^{S}\psi_{sk}\log z_{k}
\]
shows that productivity shocks propagate downstream through the network.

The aggregate formula
\[
\log Y=\delta_{Y}+\sum_{s=1}^{S}\lambda_{s}\log z_{s}
\]
then says that the aggregate importance of each sector is summarized
by a centrality object, its Domar weight. A sector matters for aggregate
activity not only because households buy it directly but also because
many other sectors buy it as an input.

It is useful to read the matrix $\Psi$ in two different ways. Fix
the row index $s$. Then the coefficient $\psi_{sk}$ measures how
much sector $s$ depends, directly and indirectly, on sector $k$
as an upstream supplier. In this sense the row of $\Psi$ attached
to sector $s$ describes where that sector's production process comes
from (not just the direct inputs).

So, productivity shocks in sector $k$ lower costs not only for its
immediate customers but also for the customers of those customers,
and so on. That is, productivity shocks propagate *downstream*:
the sectors that respond are precisely the sectors that use the shocked
producer, either directly or through a chain of intermediate-input
linkages.

Now fix the column index $k$. The column sum of $\Psi$ tells us
how important sector $k$ is for the economy as a whole. [Proposition](#ref-prop-000020domar-centrality)
shows that the Domar weight of a sector captures this idea, since
$\lambda_{k}$ is a weighted sum of all the ways in which $k$ enters
goods that are ultimately absorbed in final demand.

A sector can have a large Domar weight either because households consume
it directly, or because many important sectors use it as an input,
or because it appears repeatedly along long production chains. In
this way, goods such as electricity can be important even if their
direct share in final expenditure is modest, because they are embedded
in the production of many other goods.
