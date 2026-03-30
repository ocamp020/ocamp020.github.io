# A Domar Economy

> Part: Input-Output Networks and Economic Activity

Consider a static economy with sectors $s=1,\dots,S$. Each sector
produces a distinct good that can be consumed by the representative
household or used as an intermediate input by other sectors. All sectors
have Cobb-Douglas technology, so that sectoral output is an index
of inputs aggregated using a weighted geometric average as in [Domar (1961)](https://doi.org/10.2307/2228246).
Sector $s$ has productivity $z_{s}>0$ and technology
\[
y_{s}=z_{s}n_{s}^{\alpha_{s}}\prod_{k=1}^{S}x_{sk}^{a_{sk}},\qquad\alpha_{s}+\sum_{k=1}^{S}a_{sk}=1;
\]
where $n_{s}$ is labor, $x_{sk}$ is the quantity of good $k$ used
by sector $s$, and

Preferences over final consumption are also Cobb-Douglas:
\[
Y=\prod_{s=1}^{S}c_{s}^{\beta_{s}},\qquad\beta_{s}\geq0,\qquad\sum_{s=1}^{S}\beta_{s}=1.
\]
The variable $Y$ is both real GDP and final utility in money-metric
units. The representative household supplies $N$ units of labor inelastically.

This notation allows goods to play different roles in the economy.
If $\beta_{k}>0$ and $a_{sk}>0$ for some $s$, then good $k$ is
both a final good and an intermediate input, like electricity. If
$\beta_{k}=0$, then good $k$ is a pure intermediate input, like
steel rods. If $\beta_{k}>0$ and $a_{sk}=0$ for every $s$, then
good $k$ is a pure final good.

This is the static portion of the multisector real business cycle
environment in [Long and Plosser (1983)](https://doi.org/10.1086/261128). This same setup has
been used in other applications such as the role of production networks
in [Acemoglu et al. (2012)](https://doi.org/10.3982/ECTA9623).

## Competitive equilibrium.

The equilibrium consists of a wage $w$, prices for sectoral goods
$\{p_{s}\}$, outputs $\{y_{s}\}$, consumption allocations $\{c_{s}\}$,
and input allocations $\{n_{s},\{x_{sk}\}\}$, given the labor endowment
$N$ and productivities $\{z_{s}\}$.

The demand for sectoral consumption comes from the household. Because
preferences are Cobb-Douglas, we have
\[
c_{s}=\beta_{s}\frac{w\,N}{p_{s}}.
\]

Input allocations solve the firms' cost minimization problem given
prices and productivities. For any target output $y_{s}$, firm $s$
solves
\[
\min_{n_{s},\{x_{sk}\}_{k=1}^{S}}wn_{s}+\sum_{k=1}^{S}p_{k}x_{sk}\qquad\text{s.t.}\qquad y_{s}\leq z_{s}n_{s}^{\alpha_{s}}\prod_{k=1}^{S}x_{sk}^{a_{sk}}.
\]
Under perfect competition and constant returns to scale, zero profits
then imply $p_{s}y_{s}=wn_{s}+\sum_{k=1}^{S}p_{k}x_{sk}$. Cost minimization
delivers the familiar cost-share equations:
\[
x_{sk}=a_{sk}\frac{p_{s}y_{s}}{p_{k}},\qquad n_{s}=\alpha_{s}\frac{p_{s}y_{s}}{w}.
\]
Substituting these choices back into the production function and taking
logs gives
\[
\log\left(\frac{p_{s}}{w}\right)=\kappa_{s}-\log z_{s}+\sum_{k=1}^{S}a_{sk}\log\left(\frac{p_{k}}{w}\right),
\]
where
\[
\kappa_{s}\equiv-\alpha_{s}\log\alpha_{s}-\sum_{k=1}^{S}a_{sk}\log a_{sk},
\]
with the usual convention that a zero share contributes zero to the
sum.

If we let $\widehat{p}$ denote the vector of relative log prices,
$\kappa$ the vector of constants, $\log z$ the vector whose $s$th
element is $\log z_{s}$, and $A=[a_{sk}]$ the matrix of technological
coefficients, this system can be written as
\[
\widehat{p}=A\widehat{p}+\kappa-\log z,
\]
so that
\[
\widehat{p}=(I-A)^{-1}(\kappa-\log z).
\]
For comparative statics, the constants drop out and we obtain
\[
d\widehat{p}=-(I-A)^{-1}d\log z.
\]
The matrix $(I-A)^{-1}$ will turn out to play a central role in the
analysis of input-output networks, and so we give it a name,
\[
\Psi\,\equiv\,(I-A)^{-1},
\]
and denote its $(s,k)$ element $\psi_{sk}$.

## Market clearing and sales shares.

The market-clearing condition for sectoral good $s$ is
\[
y_{s}=c_{s}+\sum_{j=1}^{S}x_{js}.
\]
Multiplying by $p_{s}$ and using the firms' first-order conditions
gives
\[
p_{s}y_{s}=\beta_{s}w\,N+\sum_{j=1}^{S}a_{js}p_{j}y_{j}.
\]
With the final-good price index normalized to one, nominal GDP and
real GDP both equal labor income, so $Y=w\,N$. It is therefore natural
to define the sales share of sector $s$ in GDP by
\[
\lambda_{s}\;\equiv\;\frac{p_{s}y_{s}}{w\,N}\;=\;\frac{p_{s}y_{s}}{Y}.
\]

The following is an important result that links the sales shares $\{\lambda_{s}\}$
to the matrix $\Psi$ defined above. We return to this later when
we relate the results of this economy to concepts from network and
graph theory.
!!! abstract "Proposition"

    The vector of sales shares then satisfies
    \[
    \lambda\;=\;\Psi^{\prime}\beta\;=\;(I-A^{\prime})^{-1}\beta,
    \]
    or equivalently,
    \[
    \lambda^{\prime}\;=\;\beta^{\prime}\Psi.
    \]

??? success "Proof"

    Divide the nominal market-clearing condition by $Y=w\,N$ to get
    \[
    \lambda_{s}\;\equiv\;\frac{p_{s}y_{s}}{Y}\;=\;\beta_{s}\,+\,\sum_{j=1}^{S}a_{js}\frac{p_{j}y_{j}}{Y}\;=\;\beta_{s}\,+\,\sum_{j=1}^{S}a_{js}\lambda_{j}.
    \]
    Stacking these equations across sectors yields
    \[
    \lambda=\beta+A^{\prime}\lambda.
    \]
    Rearranging gives the result.

With this, we can solve for the output of each sector in terms of
productivity. A sector's output depends on its own productivity shock
and on the productivity of the sectors that are upstream from it in
production.
!!! abstract "Proposition: Sectoral Output"

    Sectoral output can be written as
    \[
    \log y_{s}\;=\;\delta_{s}+\sum_{k=1}^{S}\psi_{sk}\log z_{k},
    \]
    where $\delta_{s}$ is a constant independent of the shocks.

??? success "Proof"

    From the definition of the sales share $\lambda_{s}$, we have $y_{s}\,=\,\lambda_{s}N\left(\frac{p_{s}}{w}\right)^{-1}$,
    where the relative prices satisfy $\log\left(\frac{p}{w}\right)\,=\,\Psi(\kappa-\log z)$.
    Hence, $\log\left(\frac{p_{s}}{w}\right)$ is
    \[
    \hat{p_{s}}\;=\;\sum_{k=1}^{S}\psi_{sk}\kappa_{k}\,-\,\sum_{k=1}^{S}\psi_{sk}\log z_{k}.
    \]
    Taking logs and replacing for the relative price,
    \[
    \log y_{s}\;=\;\log\lambda_{s}\,+\,\log N\,-\,\sum_{k=1}^{S}\psi_{sk}\kappa_{k}\,+\,\sum_{k=1}^{S}\psi_{sk}\log z_{k}.
    \]
    All terms except the last summation are constant with respect to the
    productivity vector, so we collect them as
    \[
    \delta_{s}\equiv\log\lambda_{s}+\log N-\sum_{k=1}^{S}\psi_{sk}\kappa_{k}.
    \]
    This gives the result. Crucial for this is that $\lambda_{s}$ depends
    only on parameters from the previous proposition.

Having solved for the competitive equilibrium allocation we can now
aggregate and solve for $Y$. Changes in aggregate output are weighted
averages of sectoral productivity changes, where the weights are gross
sales relative to GDP rather than value-added shares. In this Cobb-Douglas
economy the weights $\lambda_{s}$ are constant.
!!! abstract "Proposition: Aggregation"

    Aggregate output satisfies
    \[
    \log Y=\delta_{Y}+\sum_{s=1}^{S}\lambda_{s}\log z_{s},
    \]
    where $\delta_{Y}$ is a constant independent of the shocks and we
    use the Cobb-Douglas price index as numeraire.

??? success "Proof"

    Aggregate log output satisfies
    \[
    \log Y\,=\,\sum_{s=1}^{S}\beta_{s}\log c_{s}\,=\,\sum_{s=1}^{S}\beta_{s}\log\left(\beta_{s}\frac{w\,N}{p_{s}}\right)\,=\,\sum_{s=1}^{S}\beta_{s}\log\beta_{s}\,+\,\log(N)\,-\,\sum_{s=1}^{S}\beta_{s}\log\frac{p_{s}}{w},
    \]
    The last term can be written in vector notation as
    \[
    \sum_{s=1}^{S}\beta_{s}\log\frac{p_{s}}{w}\;=\;\beta^{\prime}\widehat{p}\;=\;\beta^{\prime}\Psi(\kappa-\log z)\;=\;\lambda^{\prime}(\kappa-\log z).
    \]
    Define $\delta_{Y}$ as
    \[
    \delta_{Y}\;\equiv\;\sum_{s=1}^{S}\beta_{s}\log\beta_{s}\;+\;\log N\;-\;\lambda^{\prime}\kappa.
    \]
    This gives the result.

Our objective now is to provide a compelling explanation for the results
we just derived. Why is the sales share the right object to use when
aggregating sectoral shocks? What lies behind the relationship between
sales shares and the weights of inputs in production?
