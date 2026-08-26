# Aggregation: Complete Markets, Preferences, and Technology

> Part: Preliminaries

This course is mostly devoted to the development of macroeconomic
models with heterogeneity, where the distribution of assets, consumption,
or investment is relevant for the determination of macroeconomic aggregates.
However, there are many questions for which these distributional concerns
are not of first order importance. Representative agent models are
often used to address those questions. Before going into the material
of the course, it is useful to stop and ask: When can we aggregate?
Why do we use representative agent models?

!!! note "Note"
    This section draws heavily Larry Jones lecture notes found in [https://sites.google.com/umn.edu/larryjones/teaching](https://sites.google.com/umn.edu/larryjones/teaching)

The answer to this questions takes the form of (mathematical) conditions
under which the outcome (the equilibrium) of a model with full heterogeneity
looks the same as the outcome of a model with a representative agent.
So, we consider first a heterogeneous agents economy.

**Firms:**

The economy has two kinds of firms: investment firms and consumption
firms. Both use capital and labor to produce, respectively, investment
specific goods for the formation of capital or general consumption
goods. The production technologies are potentially firm- and time-specific:
\[
\underbrace{x_{h,t}=F_{h,t}^{x}\left(k_{h,t}^{x},n_{h,t}^{x}\right)}_{\text{Investment Firm }h};\qquad\underbrace{y_{j,t}=F_{j,t}^{y}\left(k_{j,t}^{y},n_{j,t}^{y}\right)}_{\text{Consumption Firm }j}.
\]

**Households:**

There are also households indexed by $i$. They are infinitely lived
and supply labor and consume every period. Household $i$ owns a share
$\theta_{i,h}^{x}$ of investment firm $h$ and a share $\theta_{i,j}^{y}$
of consumption firm $j$. These shares are constant (but we can allow
for a market in which they are traded). The entirety of the firms
are owned by households so that
\[
\theta_{i,h}^{x},\theta_{i,j}^{y}\geq0;\qquad\sum_{i=1}^{I}\theta_{i,h}^{x}=1;\qquad\sum_{i=1}^{I}\theta_{i,j}^{y}=1.
\]
We assume that households make investment decisions. The initial endowment
of households (that determines their lifetime wealth) is an amount
of initial capital $k_{i,0}$ and a sequence of potential labor supplies
(or labor productivities) $\overline{n}_{i,t}$. The payoff of a household
is the lifetime value of their consumption and labor choices captured
by a utility $U^{i}\left(\cdot\right)$, a function of the sequence
$\left(c_{i,t},n_{i,t}\right)_{t=0}^{\infty}$.

**Competitive equilibrium:**

An equilibrium is a sequence of prices $\left\{ p_{t}^{c},p_{t}^{x},r_{t},w_{t}\right\} _{t=0}^{\infty}$
a sequence of input demands and output from firms $\left\{ x_{h,t},k_{h,t}^{x},n_{h,t}^{x},y_{j,t},k_{j,t}^{y},n_{j,t}^{y}\right\} _{t=0;h=1;j=1}^{t=\infty;h=H;j=J}$
and a sequence of household actions $\left\{ c_{i,t},n_{i,t},k_{i,t+1},x_{i,t}\right\} _{t=0;i=1}^{t=\infty;i=I}$,
such that, given the ownership of firms $\left\{ \theta_{i,h}^{x},\theta_{i,j}^{y}\right\} $
and endowments $\left\{ k_{i,0},\left\{ \overline{n}_{i,t}\right\} _{t=0}^{\infty}\right\} _{i=1}^{I}$,

1. For all $i=1,\ldots,I$, the sequence $\left\{ c_{i,t},n_{i,t},k_{i,t+1},x_{i,t}\right\} _{t=0}^{t=\infty}$
solves (given endowments and prices)
\begin{align*}
\max & U^{i}\left(\cdot\right)\\
& \text{s.t. }\sum_{t=0}^{\infty}p_{t}^{c}c_{i,t}+p_{t}^{x}x_{i,t}\leq\sum_{t=0}^{\infty}w_{t}n_{i,t}+r_{t}k_{it}+\theta_{i,h}^{x}\pi_{h,t}^{x}+\theta_{i,j}^{y}\pi_{j,t}^{y}\\
& \phantom{\text{s.t. }}k_{i,t+1}\leq\left(1-\delta\right)k_{i,t}+x_{i,t}\\
& \phantom{\text{s.t. }}n_{i,t}\leq\overline{n}_{i,t}
\end{align*}
1. For all $h=1,\ldots,H$, the sequence $\left\{ x_{h,t},k_{h,t}^{x},n_{h,t}^{x}\right\} _{t=0}^{t=\infty}$
solves (given prices)
\[
\pi_{h,t}^{x}\,=\,\max\,p_{t}^{x}F_{h,t}^{x}\left(k_{h,t}^{x},n_{h,t}^{x}\right)-w_{t}n_{h,t}^{x}-r_{t}k_{h,t}^{x}\qquad\text{s.t. }x_{h,t}\leq F_{h,t}^{x}\left(k_{h,t}^{x},n_{h,t}^{x}\right)
\]
1. For all $j=1,\ldots,J$, the sequence $\left\{ y_{j,t},k_{j,t}^{y},n_{j,t}^{y}\right\} _{t=0}^{t=\infty}$
solves (given prices)
\[
\pi_{j,t}^{y}\,=\,\max\,p_{t}^{c}y_{j,t}-w_{t}n_{j,t}^{y}-r_{t}k_{j,t}^{y}\qquad\text{s.t. }y_{j,t}\leq F_{j,t}^{y}\left(k_{j,t}^{y},n_{j,t}^{y}\right)
\]
1. Markets clear, so that for all $t$,
\begin{align*}
\sum_{i=1}^{I}c_{i,t} & =\sum_{j=1}^{J}y_{j,t} & \sum_{i=1}^{I}x_{i,t} & =\sum_{h=1}^{H}x_{j,t}\\
\sum_{i=1}^{I}k_{i,t} & =\sum_{h=1}^{H}k_{j,t}^{x}+\sum_{j=1}^{J}k_{j,t}^{y} & \sum_{i=1}^{I}n_{i,t} & =\sum_{h=1}^{H}n_{j,t}^{x}+\sum_{j=1}^{J}n_{j,t}^{y}
\end{align*}

**Aggregation**

Now that we have our economy and have defined its equilibrium, we
can ask about the conditions under which we could obtain the same
aggregate allocations coming from representative firms and a representative
household.

One immediate way in which we get aggregation is all firms and households
are identical. This implies that the production technologies do not
depend on the identity of the firm $\left(F_{h,t}^{x}\left(\cdot\right)=F_{h^{\prime},t}^{x}\left(\cdot\right),\,F_{j,t}^{y}\left(\cdot\right)=F_{j^{\prime},t}^{y}\left(\cdot\right)\right)$,
and the utility function and endowments do not depend on the identity
of the household $\left(U^{i}\left(\cdot\right)=U^{i'}\left(\cdot\right),\:\theta_{i,h}^{x}=\theta_{i,j}^{y}=\frac{1}{I},\:k_{i,0}=k_{i^{\prime},0},\:\overline{n}_{i,t}=\overline{n}_{i^{\prime},t}\right)$,
with the common utility function strictly concave so that it admits
a unique solution. In this case all individual firms and households
make the same choices. In this case the distribution of agents in
the economy does not matter because there is no actual heterogeneity.

However, there can be heterogeneity while allowing for aggregation.
The conditions are nevertheless strong. The basic theory is developed
by [Gorman (1953)](http://www.jstor.org/stable/1906943); [Gorman (1961)](https://doi.org/10.1111/j.1467-999X.1961.tb00819.x) for the household side. I also recommend
[Jackson and Yariv (2024)](http://dx.doi.org/10.2139/ssrn.2684776) for a more complete treatment
of cases where a representative agent is implicitly assumed when none
actually exists.

**Firms**

Assume firms have constant returns to scale. Then, firms make no profits
in equilibrium. If they did they would want to scale up production
without bound, along with input demand. Because firms make no profits,
differences in ownership $\left\{ \theta_{i,h}^{x},\theta_{i,j}^{y}\right\} $
are now irrelevant. In this case, input demand is determined by cost
minimization. See [Profit Maximization: A note](../part-02-dynamic-programming/section-06-stochastic-recursive-competitive-equilibrium.md#ref-subsec-profit-maximization-crs) for
more on this.

If we further assume that the production technology is common across
firms then the problem is reduced to that of two firms that produce
the entirety of output in each sector. The many firms we have are
just scaled-down copies of the aggregated firms. We can relax this
condition by assuming instead that technology is described by
\[
F_{h,t}^{x}\left(k_{h,t}^{x},n_{h,t}^{x}\right)=z_{h,t}^{x}F_{t}^{x}\left(k_{h,t}^{x},n_{h,t}^{x}\right);\qquad F_{j,t}^{y}\left(k_{j,t}^{y},n_{j,t}^{y}\right)=z_{j,t}^{y}F_{t}^{y}\left(k_{j,t}^{y},n_{j,t}^{y}\right),
\]
with $F_{t}^{x}$ and $F_{t}^{y}$ constant returns to scale. In this
case firms have a common technology scaled up by firm-specific Hicks-neutral
productivity.

**Households**

When utility is common across households $\left(U^{i}\left(\cdot\right)=U^{i'}\left(\cdot\right)\right)$
and homothetic aggregation holds even under heterogeneous endowments.
In this case the distribution of wealth does not matter for aggregates.
!!! info "Definition 2.1: Homothetic Preferences"

    A preference relation $\succeq$
    is homothetic if and only if $x\succeq y$ if and only if $\lambda x\succeq\lambda y$
    for all $\lambda\geq0$.

The implication of homotheticity is that if two bundles are in the
same indifference curve, then any scaled version of the bundles are
also in the same indifference curve. That is, if $U\left(x\right)=U\left(y\right)$
then $U\left(\lambda x\right)=U\left(\lambda y\right)$. The most
common example of homothetic utility functions is homogeneous functions,
so that $U\left(\lambda x\right)=\lambda^{\alpha}U\left(x\right)$
for some $\alpha\geq0$, for this to happen $U\left(\cdot\right)$
must be a homogeneous function. In words, the shape of indifference
curves does not depend on the scale of the consumption bundles.

How does homotheticity deliver aggregation? It implies that the Marshallian
demands are proportional to total income: $x\left(\vec{p},Y\right)=\phi\left(\vec{p}\right)\times Y$,
where $\vec{p}$ is the vector of prices of the bundle $x$ and $Y$
is total resources (or lifetime income or wealth). That is, the demand
of individuals with different income are always scaled versions of
one another, as the slope of the budget constraint is given by common
market prices and their problems differ only in the parallel shifts
of their budget constraints. This implies that the allocation of a
household that has resources $Y_{i}$, corresponding to a fraction
$\omega_{i}=\frac{Y_{i}}{Y}$ of the aggregate resources, is equal
to a fraction $\omega_{i}$ of the aggregate allocation:
\[
x\left(\vec{p},Y_{i}\right)=\omega_{i}x\left(\vec{p},Y\right).
\]
The implication is that aggregate allocations correspond exactly to
the weighted sum over individual allocations:
\[
x\left(\vec{p},\sum_{i=1}^{I}Y_{i}\right)=\sum_{i=1}^{I}x\left(\vec{p},Y_{i}\right).
\]

In our problem above the differences between households correspond
only to differences in lifetime resources coming from differences
in the endowment of initial capital and potential labor supply (you
can see this by expressing the budget constraint in the Beckerian
fashion, buying leisure out of the value of the time endowment, and
replacing the investment choices).

Gorman shows that exact aggregation (so that aggregates depend only
on the aggregate amount of resources and not on their distribution)
requires that Engel curves are linear with common slopes across individuals.
For this to happen the indirect utility must be of the Gorman polar
form,
\[
v_{i}\left(\vec{p},Y_{i}\right)=\varphi_{i}\left(\vec{p}\right)+\eta\left(\vec{p}\right)Y_{i}.
\]
Homothetic preferences are a special case of this in which $\varphi_{i}\left(\vec{p}\right)=0$.
