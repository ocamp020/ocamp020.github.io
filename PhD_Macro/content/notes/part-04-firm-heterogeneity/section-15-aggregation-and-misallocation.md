# Aggregation and Misallocation

> Part: Firm Heterogeneity

Once we have a theory of firm heterogeneity we can start asking questions
about misallocation of resources and hence of economic activity. The
question is the same of the welfare theorems: is the market equilibrium
efficient? Here we will focus on efficiency in terms of production.
The exposition here follows the review of the literature in [Hopenhayn (2014)](https://doi.org/10.1146/annurev-economics-082912-110223).

## Aggregation, and Efficiency

Lets start by revisiting the span of control model. As we have seen
already, the key for firm heterogeneity is to introduce decreasing
returns to scale. This can be done from the technology side as in
[Lucas (1978)](https://doi.org/10.2307/3003596) or from the demand side as in [Dixit and Stiglitz (1977)](https://www.jstor.org/stable/1831401).
Both setups deliver similar results and so we start with the span
of control problem in its simpler form. We show that both setups are
efficient.

There is a population of $N$ workers with preferences for good consumption
(no disutility from labor). There is a mass $M$ of firms that differ
in their productivity distributed according to $\Gamma$. The firms'
production technology uses only labor and is
\[
y_{i}=z_{i}n_{i}^{\alpha}.
\]
There are no operational costs.

The notation changed relative to the one above to make results more
comparable, so that $y_{i}$ is the quantity produced by firm $i$.

**Market Economy**

Markets are competitive. The wage rate is $w$, the price of the final
good is normalized to 1. We know that the optimal size is
\[
n^{\star}\left(z\right)=\left(\frac{\alpha z}{w}\right)^{\frac{1}{1-\alpha}}\qquad\text{and}\qquad y^{\star}\left(z\right)=z^{\frac{1}{1-\alpha}}\left(\frac{\alpha}{w}\right)^{\frac{\alpha}{1-\alpha}}.
\]

To clear the labor market we need that
\[
N=\int_{0}^{M}n^{\star}\left(z_{i}\right)di=\left(\frac{\alpha}{w^{\star}}\right)^{\frac{1}{1-\alpha}}\int_{0}^{M}z_{i}^{\frac{1}{1-\alpha}}di,
\]
so the equilibrium wage is
\[
w^{\star}=\alpha\left(\int_{0}^{M}z_{i}^{\frac{1}{1-\alpha}}di\right)^{1-\alpha}N^{\alpha-1}.
\]

Thus, the equilibrium firm size is
\[
y^{\star}\left(z_{i}\right)=z_{i}^{\frac{1}{1-\alpha}}\left(\frac{N}{\int_{0}^{M}z_{j}^{\frac{1}{1-\alpha}}dj}\right)^{\alpha}
\]
and total output is
\[
Y=\int_{0}^{M}y^{\star}\left(z_{i}\right)di=\underbrace{\left(\int_{0}^{M}z_{i}^{\frac{1}{1-\alpha}}di\right)^{1-\alpha}}_{\text{Agg. Productivity}}N^{\alpha}.
\]
Therefore, this economy has an aggregate production function that
looks the same as the individual production function of a firm but
with an aggregate productivity given by the distribution of firms.
This production function has decreasing returns to scale if we take
as firms as a fixed production factor.

We can get a different and more informative expression if we focus
on the distribution of firm productivity and separate from the number
of firms:
\[
Y=\overbrace{Z}^{\text{Avg. Prod.}}\underbrace{M^{1-\alpha}}_{\text{Firm Scale}}N^{\alpha}.
\]
Here, $Z$ is the average productivity across firms in the economy,
we define it as
\[
Z=\left(E\left[z_{i}^{\frac{1}{1-\alpha}}\right]\right)^{1-\alpha}=\left(\int z^{\frac{1}{1-\alpha}}d\Gamma\left(z\right)\right)^{1-\alpha}.
\]
Seen this way, aggregate production has constant returns to scale,
and is increasing in the number of firms. This is, unsurprisingly,
the same result as in the taste for variety explored above. Another
important result is that the decreasing returns to scale make the
harmonic mean the way to aggregate

**Efficient Allocation**

The planner's objective is to maximize output as that maximizes utility,
so,
\[
\max_{\left\{ n_{i}\right\} }\int_{0}^{M}z_{i}n_{i}^{\alpha}di\qquad\text{s.t. }N=\int_{0}^{M}n_{i}di.
\]

The market economy is efficient. To see this, note that the efficient
allocation equates average products across firms
\begin{align*}
\alpha z_{i}n_{i}^{\alpha-1} & =\lambda\\
\frac{y_{i}}{n_{i}} & =\frac{\lambda}{\alpha}
\end{align*}
This already happened in the market solution with $\lambda=w$. Hence,
firm size and the aggregate results above hold unchanged in the efficient
allocation. **There is no misallocation in this economy**.

**Connection to The Monopolistic Competition Case**

Under monopolistic competition we have constant returns to scale technology
$\left(y_{i}=z_{i}n_{i}\right)$ but curvature in demand (with constant
elasticity) we know that the market solution has
\[
y_{i}=\left(\frac{c_{i}}{\left(\int_{0}^{M}c_{i}^{1-\varepsilon}di\right)^{\frac{1}{1-\varepsilon}}}\right)^{-\varepsilon}Y=\left(\frac{z_{i}}{\left(\int_{0}^{M}z_{i}^{\varepsilon-1}di\right)^{\frac{1}{\varepsilon-1}}}\right)^{\varepsilon}Y,
\]
To clear the labor market the wage must be such that
\[
N=\int_{0}^{M}n_{i}di=\frac{y_{i}}{z_{i}}di=\int_{0}^{M}z_{i}^{\varepsilon-1}\left(\int_{0}^{M}z_{i}^{\varepsilon-1}di\right)^{\frac{-\varepsilon}{\varepsilon-1}}Ydi=\left(\int_{0}^{M}z_{i}^{\varepsilon-1}di\right)^{\frac{-1}{\varepsilon-1}}Y
\]
Therefore, aggregate output (or utility) is
\[
Y=\overbrace{Z}^{\text{Avg. Prod.}}\underbrace{M^{\frac{1}{\varepsilon-1}}}_{\text{Taste for Variety}}N,
\]
where $Z=\left(E\left[z^{\varepsilon-1}\right]\right)^{\frac{1}{\varepsilon-1}}=\left(\int z^{\varepsilon-1}d\Gamma\left(z\right)\right)^{\frac{1}{\varepsilon-1}}$
is the average productivity.

This is the same result we had above once we adjust for the curvature
of the problem. Notice that aggregation is linear (as above) for a
monotone transformation of output $\tilde{Y}=Y^{\frac{\varepsilon-1}{\varepsilon}}$
and $\tilde{y}_{i}=y_{i}^{\frac{\varepsilon-1}{\varepsilon}}$. In
this case the aggregation gives the same result as in the span of
control model
\[
\tilde{Y}=\overbrace{\tilde{Z}}^{\text{Avg. Prod.}}\underbrace{M^{\frac{1}{\varepsilon}}}_{\text{Taste for Variety}}N^{\frac{\varepsilon-1}{\varepsilon}}
\]
with $\alpha=\frac{\varepsilon-1}{\varepsilon}$ and $\tilde{Z}=Z^{\frac{\varepsilon-1}{\varepsilon}}$.

We already know that entry is (constrained) efficient in this setup.

The planner's problem is (for the monotone transformation) is
\[
\max_{\left\{ n_{i}\right\} }\underbrace{\int_{0}^{M}\left(z_{i}n_{i}\right)^{\frac{\varepsilon-1}{\varepsilon}}di}_{\tilde{Y}}\qquad\text{s.t. }N=\int_{0}^{M}n_{i}di.
\]
Optimality requires
\begin{align*}
\frac{\varepsilon-1}{\varepsilon}\left(z_{i}\right)^{\frac{\varepsilon-1}{\varepsilon}}n_{i}^{\frac{\varepsilon-1}{\varepsilon}-1} & =\lambda\\
\frac{\tilde{y}_{i}}{n_{i}} & =\frac{\varepsilon}{\varepsilon-1}\lambda
\end{align*}
so all firms have the same average product (as before). This condition
is satisfied in equilibrium because the pricing choice implies
\begin{align*}
p_{i} & =\frac{\varepsilon}{\varepsilon-1}\frac{w}{z_{i}}\\
\frac{y_{i}^{\frac{\varepsilon-1}{\varepsilon}}}{n_{i}} & =\frac{\varepsilon}{\varepsilon-1}\frac{w}{P}Y^{\frac{1}{\varepsilon}}\\
\frac{\tilde{y}_{i}}{n_{i}} & =\frac{\varepsilon}{\varepsilon-1}\frac{w}{P}Y^{\frac{1}{\varepsilon}}
\end{align*}
So, the market solution is efficient as average products are dutifully
equalized across firms.

## Wedges and Misallocation

The key for the efficiency of the models above is that firms in the
market economy had the same marginal product of labor as they are
all responding to the same costs (in the case of the examples above,
the same wage rate). Equating the marginal products across firms is
precisely what you need if you want to maximize output. This is not
the case in the data. The discrepancies come from firm-specific frictions
that distort the firm problem. For example, some firms can be subject
to certain forms of taxation while some others are not (or just evade
taxes).

**Example: Labor wedge**

Consider an example with firm-specific labor taxes (or equivalently,
additional labor costs that vary across firms):
\[
\max z_{i}n_{i}^{\alpha}-\left(1+\tau_{i}\right)w.
\]
In this case the optimal labor choice and output of a firm become
\[
n^{\star}\left(z_{i}\right)=\left(\frac{\alpha z_{i}}{\left(1+\tau_{i}\right)w}\right)^{\frac{1}{1-\alpha}}\qquad\text{and}\qquad y^{\star}\left(z_{i}\right)=z_{i}^{\frac{1}{1-\alpha}}\left(\frac{\alpha}{\left(1+\tau_{i}\right)w}\right)^{\frac{\alpha}{1-\alpha}}.
\]
When we aggregate we can see the role of the distortions. Market clearing
now requires the wage to be
\[
w^{\star}=\alpha\left(\int_{0}^{M}\left(\frac{z_{i}}{1+\tau_{i}}\right)^{\frac{1}{1-\alpha}}di\right)^{1-\alpha}N^{\alpha-1},
\]
and aggregate output becomes
\[
Y=\left(\overbrace{\int\underbrace{\frac{\left(\frac{z_{i}}{1+\tau_{i}}\right)^{\frac{1}{1-\alpha}}}{\int\left(\frac{z_{i}}{1+\tau_{i}}\right)^{\frac{1}{1-\alpha}}d\Gamma\left(z_{i}\right)}}_{\omega_{i}\text{ Distorted Prod. Weights}}\left(1+\tau_{i}\right)d\Gamma\left(z_{i}\right)}^{\text{Weighted Distortion}}\right)\underbrace{\left(\int\left(\frac{z_{i}}{1+\tau_{i}}\right)^{\frac{1}{1-\alpha}}d\Gamma\left(z_{i}\right)\right)^{1-\alpha}}_{\text{Distorted Productivity}}M^{1-\alpha}N^{\alpha}
\]
where the distortions affect the problem twice, once distorting productivity
and then also as an average distortion weighted by productivity.

An important implication of this result is that distortions must vary
across firms for them to actually distort. If $\tau_{i}=\tau$ we
can easily see that it cancels out of the expression above.

**TFPR**

In the one input case studied so far (say, only labor) misallocation
comes from differences in marginal product or average products. When
there are several inputs this is not necessarily the case. Instead,
for a production function $y_{i}=z_{i}\left(f\left(\vec{x}_{i}\right)\right)^{\alpha}$
with $f$ a constant returns to scale function in inputs $\vec{x}=\left(x_{1},\ldots,x_{N}\right)$,
what must be equated across firms is the ratio
\[
\frac{y_{i}}{f\left(\vec{x}_{i}\right)}=\text{TFPR}
\]
This ratio is called the total factor productivity of revenue.

We can see how the TFPR determines the importance of distortions by
focusing in the one-input case again. In that case $\text{TFPR}_{i}=\frac{y_{i}}{n_{i}}$.
The efficient (planner's) choice would have been to have $\kappa=\frac{y_{i}^{p}}{n_{i}^{p}}=\text{TFPR}^{p}$
and so variation in TFPR captures misallocation in this model.

We can see the effect of distortions as the ratio of the market's
allocation to the planner's labor choice:
\[
\theta_{i}=\frac{n_{i}}{n_{i}^{p}}=\frac{y_{i}^{p}}{n_{i}^{p}}\frac{n_{i}}{y_{i}}\frac{y_{i}}{y_{i}^{p}}=\frac{\kappa}{\text{TFPR}_{i}}\left(\frac{n_{i}}{n_{i}^{p}}\right)^{\alpha}=\frac{\kappa}{\text{TFPR}_{i}}\theta_{i}^{\alpha}=\longrightarrow\theta_{i}=\left(\frac{\text{TFPR}_{i}}{\kappa}\right)^{\frac{-1}{1-\alpha}}
\]
So the variation in TFPR goes hand in hand with the distortions to
the allocation, captured by $\theta$.

In the context of the example above with a wedge for labor costs we
get $\theta_{i}\propto\left(1+\tau_{i}\right)^{\frac{1}{1-\alpha}}$,
so we can obtain the distortion as function of wedges as well. The
advantage of $\text{TFPR}$ is that, unlike wedges, we can often measure
it.

We can now relate the allocation distortions $\left\{ \theta_{i}\right\} $
and the TFPR to productivity. Total output in the distorted economy
is
\[
Y^{d}=\int_{0}^{M}z_{i}n_{i}^{\alpha}di=\int_{0}^{M}\theta_{i}^{\alpha}\left(z_{i}\left(n_{i}^{p}\right)^{\alpha}\right)di=\int_{0}^{M}\theta_{i}^{\alpha}y_{i}^{p}di=\kappa\int_{0}^{M}\theta_{i}^{\alpha}n_{i}^{p}di
\]
But, notice that $\kappa$ is the average labor productivity in the
undistorted (planner's) economy. So it must be true that $Y^{p}=\kappa N.$
Replacing we get
\[
\frac{Y^{d}}{Y^{p}}=\int_{0}^{M}\theta_{i}^{\alpha}\underbrace{\frac{n_{i}^{p}}{N}}_{\text{Efficient Labor Weights}}di
\]
Moreover, this ratio is also equal to the ratio of TFP between the
distorted and the undistorted economies because the total labor input
is the same (recall from the problem above that the only difference
between the aggregate production functions is in productivity). This
gives
\[
\frac{\text{TFP}^{d}}{\text{TFP}^{p}}=\int\theta^{\alpha}dN\left(\theta\right),
\]
where $N\left(\theta\right)=\int_{\left\{ i|\theta_{i}<\theta\right\} }\frac{n_{i}^{p}}{N}di$
is the distribution of employment in the efficient allocation of firms
with distortions $\theta_{i}<\theta$. However, this expression still
depends on unknown quantities.

This formula is nevertheless useful because it highlight an important
property of distortions. In the words of Hopenhayn:
> Notice that this formula is silent about the productivity of the firms
> underlying these distortions, so whether they are correlated is not
> important per se. Correlation matters for a different reason. For
> example, consider two groups of firms $m_{1}$ and $m_{2}$ with productivities
> $z_{1}<z_{2}$ and optimal employments $n_{1}<n_{2}$. Suppose further
> that optimal total employment in both groups is identical, i.e., $m_{1}n_{1}^{p}=m_{2}n_{2}^{p}$.
> Then the impact on productivity from shifting a fixed number of workers
> from one group to the other is the same regardless of whether they
> are shifted from the lower- to higher-productivity group or vice versa.

Finally, to see the role of TFPR we can write the TFP gap between
the efficient and the market allocation using only measured quantities.
Specifically, we can write (inverse of) the TFP gap as a curved harmonic
mean of the relative TFPR of firms, weighted by their employment (or
labor share). This is not obvious. We can construct the formula in
steps. First, the employment share of a firm is
\[
\frac{n_{i}}{N}\left(=\frac{wn_{i}}{wN}\right)=\left(1+\tau_{i}\right)^{-\frac{1}{1-\alpha}}\frac{z_{i}^{\frac{1}{1-\alpha}}}{\int_{0}^{M}\left(\frac{z_{i}}{1+\tau_{i}}\right)^{\frac{1}{1-\alpha}}di}.
\]
Second, the relative TFPR is defined as
\[
\frac{\text{TFPR}_{i}}{\overline{\text{TFPR}}}=\frac{\nicefrac{y_{i}}{n_{i}}}{\nicefrac{Y}{N}}=\frac{\frac{\left(1+\tau_{i}\right)w}{\alpha}}{\frac{Y}{N}}=\left(1+\tau_{i}\right)\left(\int_{0}^{M}\frac{\left(\frac{z_{i}}{1+\tau_{i}}\right)^{\frac{1}{1-\alpha}}}{\int_{0}^{M}\left(\frac{z_{i}}{1+\tau_{i}}\right)^{\frac{1}{1-\alpha}}di}\left(1+\tau_{i}\right)di\right)^{-1}.
\]
Finally, we can bring them together to express
\[
\frac{\text{TFP}^{p}}{\text{TFP}^{d}}=\left(\int_{0}^{M}\left(\frac{\text{TFPR}_{i}}{\overline{\text{TFPR}}}\right)^{\frac{1}{1-\alpha}}\frac{n_{i}}{N}di\right)^{1-\alpha}=\frac{\left(\int_{0}^{M}z_{i}^{\frac{1}{1-\alpha}}di\right)^{1-\alpha}}{\left(\int_{0}^{M}\frac{\left(\frac{z_{i}}{1+\tau_{i}}\right)^{\frac{1}{1-\alpha}}}{\int_{0}^{M}\left(\frac{z_{i}}{1+\tau_{i}}\right)^{\frac{1}{1-\alpha}}di}\left(1+\tau_{i}\right)di\right)\left(\int_{0}^{M}\left(\frac{z_{i}}{1+\tau_{i}}\right)^{\frac{1}{1-\alpha}}di\right)^{1-\alpha}}.
\]
Notice that this is the inverse to the expression above. A higher
value implies more misallocation.

## Application: Financial Frictions

Consider the economy described in [Guvenen et al. (2023)](https://doi.org/10.1093/qje/qjac047) that
follows the derivations in [Hsieh and Klenow (2009)](https://doi.org/10.1162/qjec.2009.124.4.1403).

Entrepreneurs differ in productivity ($z_{i}>0)$ and produce a differentiated
good according to a linear technology:
\[
x_{i}=z_{i}k_{i},
\]
where $k_{i}$ is the final good used in production by entrepreneur
$i$ at age $h$. The final good, $Y,$ is produced according to a
Cobb-Douglas technology:
\[
Y=Q^{\alpha}L^{1-\alpha},
\]
where $Q$ is the CES composite of intermediate inputs:
\[
Q=\left(\int x_{i}^{\mu}di\right)^{1/\mu}.
\]

To distinguish $Q$ from the unadjusted capital stock, $K=\int k_{i}di,$
we refer to the former as the "quality-adjusted capital stock,"
since its level depends on the allocation of capital across entrepreneurs.
Total Factor Productivity in the intermediate goods sector can be
written as
\[
\text{TFP}_{Q}=\frac{Q}{K},
\]
where $\text{TFP}_{Q}$ captures the extent of misallocation of capital.
We write total output as a Cobb-Douglas function of $K$ and $L$:
$Y=\text{TFP}\cdot K^{\alpha}L^{1-\alpha},$ where $\text{TFP}\equiv\text{TFP}_{Q}^{\alpha}$
is the aggregate TFP of the economy.

The final good producing sector is competitive, so the profit maximization
problem is
\[
\max_{\{x_{i}\},L}\left(\int x_{i}^{\mu}di\right)^{\alpha/\mu}L^{1-\alpha}-\int\left(p\left(x_{i}\right)\times x_{i}\right)di-\overline{w}L.
\]

The first-order optimality conditions yield the inverse demand (price)
function for each intermediate input and for the market wage:
\[
p\left(x\right)=\alpha Q^{\alpha-\mu}L^{1-\alpha}x^{\mu-1}\qquad\overline{w}=\left(1-\alpha\right)Q^{\alpha}L^{-\alpha}.
\]

The economy is distorted because of the existence of financial frictions
in the form of collateral constraints:
\[
k_{i}\le\vartheta\left(z_{i}\right)\times a_{i},
\]
This makes the entrepreneurial problem be
\[
\pi\left(a,z\right)=\max_{k\leq\vartheta(z)a}\left\{ p\left(zk\right)\times zk-\left(r+\delta\right)k\right\} ,
\]
where $\delta$ is the depreciation rate. The price of the differentiated
good can be written as $p\left(zk\right)=\text{\mathcal{R}}\times\left(zk\right)^{\mu-1},$
where $\text{\mathcal{R}}\equiv\alpha Q^{\alpha-\mu}L^{1-\alpha}$,
yielding the solution
\[
k\left(a,z\right)=\min\left[\left(\frac{\mu\text{\mathcal{R}}z^{\mu}}{r+\delta}\right)^{\frac{1}{1-\mu}},\vartheta\left(z\right)a\right].
\]
However, this makes it difficult to aggregate because the level of
capital (and hence the scale of each entrepreneurial firm) depends
on the distribution of wealth. Nevertheless, We can measure the effects
of these distortions on aggregate TFP and output, following a large
and growing literature that frames the discussion on misallocation
in terms of various wedges, such as capital, labor, and output wedges.
In particular, we follow [Hsieh and Klenow (2009)](https://doi.org/10.1162/qjec.2009.124.4.1403) and compute
measures of misallocation for this economy.

Instead of modeling and capturing the effect of a particular distortion,
or distortions, we infer the underlying distortions and wedges in
the economy by studying the extent to which the marginal revenue products
of capital and labor differ across firms. This is based on the insight
that without any distortions, the marginal revenue products of capital
and labor have to be equalized across all firms. (Note: This is the case in the monopolistic competition models, such as in [Hsieh and Klenow (2009)](https://doi.org/10.1162/qjec.2009.124.4.1403). Alternatively, in environments like the ones in [Lucas (1978)](http://www.jstor.org/stable/3003596) and [Restuccia and Rogerson (2008)](https://doi.org/10.1016/j.red.2008.05.002), in which firms feature decreasing returns to scale but produce the same homogeneous good, the marginal products of capital and labor have to be equalized in the non-distorted economy)

**TFP in the $Q$ sector.**

We will first focus on the intermediate goods sector. Under the alternative
capital-wedge approach, the problem of each intermediate goods producer
is
\[
\pi_{i}=\max_{k_{i}}p\left(z_{i}k_{i}\right)z_{i}k_{i}-\left(1+\tau_{i}\right)\left(R+\delta\right)k_{i}\,\,,
\]
where $\tau_{i}$ is a firm-specific wedge. There are no collateral
constraints. There is only one input and, as a result, only one wedge
can be identified.

The revenue TFP in sector $Q$ for each firm $i$ is
\[
TFPR_{Q,i}\equiv\frac{p\left(x_{i}\right)x_{i}}{k_{i}}=\frac{1}{\mu}\left(1+\tau_{i}\right)\left(R+\delta\right).
\]
The aggregate TFP in sector $Q$ can be expressed as
\[
TFP_{Q}\equiv\frac{Q}{K}=\left(\int_{i}\left(z_{i}\frac{\overline{TFPR_{Q}}}{TFPR_{Q,i}}\right)^{\frac{\mu}{1-\mu}}di\right)^{\frac{1-\mu}{\mu}},
\]
where the average $TFPR_{Q}$ is
\[
\overline{TFPR_{Q}}=\left(\int\frac{1}{TFPR_{Q,i}}\frac{p\left(x_{i}\right)x_{i}}{p_{q}Q}di\right)^{-1}.
\]

In the non-distorted economy, without capital wedges, the level of
TFP in the $Q$ sector is
\[
TFP_{Q}^{\star}=\left(\int_{i}\left(z_{i}\right)^{\frac{\mu}{1-\mu}}di\right)^{\frac{1-\mu}{\mu}}\equiv\overline{z}.
\]
Therefore, we can measure the improvement in TFP in the $Q$ sector,
$\Omega_{Q}$, as a result of eliminating the capital wedges, or equivalently,
as a result of eliminating the collateral constraints:
\[
\Omega_{Q}\equiv1-\frac{TFP_{Q}}{TFP_{Q}^{\star}}=1-\left(\int_{i}\left(\frac{\overline{z}}{z_{i}}\frac{TFPR_{Q,i}}{\overline{TFPR_{Q}}}\right)^{\frac{\mu}{1-\mu}}di\right)^{\frac{\mu-1}{\mu}}.
\]
This measure does not capture the aggregate effect on the economy
because (i) it applies only to the $Q$ sector and not to the production
of the final good, and (ii) it does not take into account changes
in aggregate capital in the efficient economy with respect to the
equilibrium of the distorted economy. In the benchmark calibration
of [Guvenen et al. (2023)](https://doi.org/10.1093/qje/qjac047) this variable has value of $\Omega_{Q}=0.35$,
implying TFP gains of 35\
the collateral constraints.

**Aggregate TFP.**

The final goods producers operate competitively and face no constraints
or distortions, so there is no labor misallocation in the model. Because
of this, the only source of misallocation and TFP losses is the $Q$
sector. We can therefore write output as
\[
Y=\text{TFP}\cdot K^{\alpha}L^{1-\alpha},
\]
where $\text{TFP}\equiv\text{TFP}_{Q}^{\alpha}$ captures the aggregate
TFP of the model. Similarly, we can define the efficient TFP level
of the economy as $\text{TFP}^{\star}\equiv\left(\text{TFP}^{\star}\right)^{\alpha}$
and the aggregate TFP gain from eliminating distortions in the economy
as
\begin{equation}
\Omega_{Y}\equiv1-\frac{TFP}{TFP^{\star}}=1-\left(\frac{TFP_{Q}}{TFP_{Q}^{\star}}\right)^{\alpha}.
\end{equation}
In the benchmark calibration, the total productivity gain from eliminating
the collateral constraints in the $Q$ sector amounts to $16\
TFP.

The previous sections studied aggregation and misallocation in economies
with heterogeneous firms but without explicit intermediate-input linkages.
The next step is to allow sectors to use each other as inputs. Once
we do that, a productivity shock in one part of the economy affects
aggregate activity not only because that sector becomes more productive,
but also because all of its customers, and the customers of its customers,
face different costs. This is the key reason why input-output networks
matter both for propagation and for accounting for economic activity.

This perspective goes back to [Leontief (1936)](https://doi.org/10.2307/1927837) and to
the growth-accounting tradition of [Domar (1961)](https://doi.org/10.2307/2228246); [Hulten (1978)](https://doi.org/10.2307/2297252).
In modern macroeconomics, the same ideas reappear in multisector business
cycle theory à la [Long and Plosser (1983)](https://doi.org/10.1086/261128), in the network approach
of [Acemoglu et al. (2012)](https://doi.org/10.3982/ECTA9623), and
in the recent work surveyed by [Carvalho and Tahbaz-Salehi (2019)](https://doi.org/10.1146/annurev-economics-080218-030212); [Baqaee and Rubbo (2023)](https://doi.org/10.1146/annurev-economics-082322-012833)
and developed further by [Baqaee and Farhi (2019)](https://doi.org/10.3982/ECTA15202); [Baqaee and Farhi (2020)](https://doi.org/10.1093/qje/qjz030); Baqaee and Burstein (2026); Baqaee and Burstein (2026).
These notes follow especially closely the exposition in these papers,
while keeping notation close to the rest of these notes.

I cannot recommend enough Emmanuel Farhi's Plennary Talk at the 2019
SED. Watch it! You can find it on Youtube: <https://youtu.be/92_-kIyVC1Y?si=SYHCuURa3Bkn2CZ_>.
You can also watch Emmanuel's presentation in VMACS of his paper with
David Baqaee on the effects of COVID 19: <https://www.youtube.com/live/Yek0x91ZE-0?si=SSySMysFlWNLhmGz>.
