# Hulten's Theorem for Efficient Economies

> Part: Input-Output Networks and Economic Activity

The results above tell us how changes in different sectors affect
aggregate output. The correct way to aggregate those changes is via
Domar weights, given by the sales share of a sector in aggregate output.
This result holds beyond the Domar economy we covered above, where
the Cobb-Douglas benchmark makes the result exact. In general, the
result holds only as a first-order approximation of the effect of
a sector on aggregate output. The reason is that changes in Domar
weights are second order if the allocation of the economy is already
efficient. This result is known as Hulten's theorem and can be verified
directly as an application of the envelope theorem. We now prove it
following [Carvalho and Tahbaz-Salehi (2019)](https://doi.org/10.1146/annurev-economics-080218-030212). (Note: Historically, [Domar (1961)](https://doi.org/10.2307/2228246) proposed aggregation by sales-weighting sectoral productivity changes in order to account for intermediate goods in growth accounting. [Hulten (1978)](https://doi.org/10.2307/2297252) showed that, under efficiency, this is exactly the right local aggregation rule. So Domar provided the index-number intuition (defining aggregation in terms of index-numbers defined as weighted geometric averages), while Hulten provided the general-equilibrium justification.)

**A general economy.**

Consider an economy with $S$ sectors and $F$ primary factors, all
traded competitively. Sector $s$ produces using a constant-returns-to-scale
technology,
\[
y_{s}\;=\;z_{s}f_{s}\left(x_{s1},\dots,x_{sS},n_{s1},\dots,n_{sF}\right),
\]
The representative household has homothetic preferences $u(c_{1},\dots,c_{S})$
that we make homogeneous of degree one. Let $N_{f}$ denote the endowment
of primary factor $f$, supplied inelastically.

**The planner's problem.**

Since the competitive equilibrium is efficient, we can characterize
it through the planner's problem
\[
W\;=\;\max_{\{c_{s},x_{js},n_{sf}\}}\;u(c_{1},\dots,c_{S})
\]
subject to the resource constraints
\[
\forall_{s}\quad c_{s}+\sum_{j=1}^{S}x_{js}\leq y_{s}\;;\qquad\forall_{f}\quad\sum_{s=1}^{S}n_{sf}\leq N_{f},
\]
Let $\eta_{s}$ be the multiplier on the resource constraint for good
$s$, and $\xi_{f}$ be the multiplier on the factor constraint for
factor $f$. As is standard, $\eta_{s}$ gives the marginal value
to the planner of additional $c_{s}$ (in terms of welfare),
\[
\eta_{s}\;=\;\frac{\partial u}{\partial c_{s}},
\]
and $\xi_{f}$ gives the marginal value of increasing the endowment
of factor $f$.

**The envelope theorem.**

What is the value to the planner of an increase in the productivity
of sector $s$? The productivity term $z_{s}$ enters the problem
only through the production function of sector $s$. We have, by applying
the envelope theorem,
\[
\frac{\partial W}{\partial z_{s}}\;=\;\eta_{s}f_{s}\left(x_{s1},\dots,x_{sS},n_{s1},\dots,n_{sF}\right)\;=\;\eta_{s}\frac{y_{s}}{z_{s}}.
\]
It is useful to express this in terms of elasticities (multiplying
by $z_{s}/W$),
\[
\frac{\partial\log W}{\partial\log z_{s}}\;=\;\frac{\eta_{s}y_{s}}{W}.
\]

**The market economy.**

The representative household solves
\[
\max_{\{c_{s}\}}u(c_{1},\dots,c_{S})\qquad\text{s.t.}\qquad\sum_{s=1}^{S}p_{s}c_{s}\;\leq\;\sum_{f=1}^{F}w_{f}N_{f},
\]
where $p_{s}$ is the price of good $s$ and $w_{f}$ is the price
of primary factor $f$. Let $\phi$ denote the multiplier on the household's
budget constraint. The household's first-order condition is
\[
\frac{\partial u}{\partial c_{s}}=\phi p_{s}.
\]
Comparing this with the planner's first-order condition implies
\[
\eta_{s}=\phi p_{s}.
\]

**Welfare and real GDP.**

We start by relating welfare to expenditure in final goods. As $u(\cdot)$
is homogeneous of degree one, Euler's theorem implies
\[
W\;=\;\sum_{s=1}^{S}\frac{\partial u}{\partial c_{s}}c_{s}\;=\;\phi\sum_{s=1}^{S}p_{s}c_{s}.
\]
Nominal GDP corresponds to the expenditure in final goods in the economy.
Using GDP as the numeraire implies that the GDP deflator is 1, and
thus we have
\[
Y\equiv\sum_{s=1}^{S}p_{s}c_{s}.
\]
Hence, welfare and GDP are tied:
\[
W=\phi Y.
\]

We can now state and prove Hulten's theorem.
!!! abstract "Proposition: Hulten's Theorem"

    In an efficient economy,
    \[
    d\log Y\;=\;\sum_{s=1}^{S}\lambda_{s}\,d\log z_{s}\;+\;\sum_{f=1}^{F}\Lambda_{f}\,d\log N_{f},
    \]
    where $\lambda_{s}\,\equiv\,p_{s}y_{s}/Y$ is the Domar weight of
    sector $s$ and $\Lambda_{f}\,\equiv\,w_{f}N_{f}/Y$ is the income
    share of factor $f$.

??? success "Proof"

    From the envelope condition for the effect of sector $s$'s productivity
    on aggregate welfare, we have
    \[
    \frac{\partial\log W}{\partial\log z_{s}}\;=\;\frac{\eta_{s}y_{s}}{W}\;=\;\frac{\phi p_{s}y_{s}}{\phi Y}\;=\;\frac{p_{s}y_{s}}{Y}\;=\;\lambda_{s};
    \]
    where we use the facts that $\eta_{s}=\phi p_{s}$ and $W=\phi Y$.
    
    Similarly, we have for factors of production,
    \[
    \frac{\partial\log W}{\partial\log N_{f}}\;=\;\frac{\xi_{f}N_{f}}{W}\;=\;\frac{\phi p_{f}N_{f}}{\phi Y}\;=\;\frac{w_{f}N_{f}}{Y}\;=\;\Lambda_{f};
    \]
    where we use the facts that $\xi_{f}=\phi w_{f}$ and $W=\phi Y$.
    
    Therefore, the total differential of real output $Y$ in this representative-agent
    economy is summarized by the homogeneous utility index, and is given
    by
    \[
    d\log Y\;=\;d\log W\;=\;\sum_{s=1}^{S}\lambda_{s}\,d\log z_{s}\;+\;\sum_{f=1}^{F}\Lambda_{f}\,d\log N_{f}.
    \]
    This gives the result.

This interpretation also clarifies why gross sales are the right weights
for aggregation. Value added counts a sector's contribution only for
final consumption. Gross sales keep track of the fact that the same
sector may matter multiple times through the network (even if it never
makes it to final consumption). If one unit of a good is used in many
downstream activities, its effect on aggregate output is larger than
what one would infer from final-demand shares alone. This is exactly
the insight behind Domar's aggregation rule, and Hulten's theorem
shows that this intuition is the correct one in efficient economies.

The key insight is that Domar weights are a sufficient statistic for
the technology and input-output linkages of each sector. This is surprising
at first: regardless of the form of aggregate demand $u$, the production
technologies $\{f_{s}\}$, and the input-output network $\Omega$,
the effect of a sector on aggregate output is captured entirely by
its sales share. This captures how intermediate inputs affect aggregate
output both directly through final demand and indirectly through the
production of all downstream sectors, subsuming the information about
how final goods are produced.

It turns out that the basic logic of Hulten's theorem extends beyond
effects on GDP. The envelope theorem covers many other relevant cases.
[Baqaee and Farhi (2019)](https://doi.org/10.3982/ECTA15202) and [Baqaee and Rubbo (2023)](https://doi.org/10.1146/annurev-economics-082322-012833)
show the same result applies to real domestic absorption, welfare,
or other measures of real activity.

Finally, the Cobb-Douglas environment is special. Unit elasticities
keep expenditure shares fixed. Productivity shocks move prices and
quantities, but they do not change the input-output coefficients or
the Domar weights. Hence the same matrix $\Psi$ summarizes propagation
before and after the shock and there is no reallocation. In more general
environments, shocks change the endogenous allocation matrix and therefore
also the effective network itself. Then Hulten's theorem survives
only as a first-order approximation. In the Cobb-Douglas case, however,
the first-order formula is exact because the network weights are constant.

## Example: Micro to macro fluctuations

Hulten's theorem can be readily applied to growth accounting or to
the understanding of the variability of GDP. To see this, return to
the one-factor environment and suppose that the endowment of labor
is fixed, while sectoral productivity shocks
\[
\epsilon_{s}\equiv d\log z_{s}
\]
are independent and identically distributed with mean zero and standard
deviation $\sigma$. The i.i.d. assumption is strong, but helps us
focus on how the input-output network amplifies micro fluctuations.
If the shocks were correlated we could separate them into a common
("aggregate") component and the i.i.d. component.

Hulten's theorem implies the standard deviation of aggregate output
growth due to idiosyncratic sectoral shocks is
\[
d\log Y\;=\;\sum_{s=1}^{S}\lambda_{s}\epsilon_{s}\quad\longrightarrow\quad\sigma_{\mathrm{agg}}\;\equiv\;\mathrm{Std}(d\log Y)\;=\;\sigma\left(\sum_{s=1}^{S}\lambda_{s}^{2}\right)^{1/2}.
\]
So, the volatility of aggregate output depends on the second (uncentered)
moment of Domar weights. That is, how unevenly the economy loads those
shocks through the vector of Domar weights.

Now impose the additional restriction that all sectors have the same
labor share, $\alpha_{s}=\alpha$. Since labor is the only primary
factor,
\[
1=\sum_{s=1}^{S}\alpha\frac{p_{s}y_{s}}{Y}\;=\;\alpha\sum_{s=1}^{S}\lambda_{s}\quad\longrightarrow\quad\sum_{s=1}^{S}\lambda_{s}\;=\;\frac{1}{\alpha}.
\]
Hence we can rewrite the previous expression in terms of centered
moments as
\[
\sigma_{\mathrm{agg}}\;=\;\sigma\left(S\,\mathrm{Var}(\lambda_{1},\dots,\lambda_{S})\;+\;\frac{1}{\alpha^{2}S}\right)^{1/2}.
\]
This expression makes more transparent the value of diversifciation.
If all Domar weights are identical, then $\mathrm{Var}(\lambda_{1},\dots,\lambda_{S})=0$
and
\[
\sigma_{\mathrm{agg}}=\frac{\sigma}{\alpha\sqrt{S}}.
\]
Thus aggregate volatility falls at the familiar $1/\sqrt{S}$ rate.
But if Domar weights are dispersed, aggregate volatility is larger.
The reason is that shocks to sectors with larger Domar weights do
not wash out symmetrically in the aggregate. Even when micro shocks
are purely idiosyncratic, heterogeneity in sectors' sales shares can
therefore generate sizable fluctuations in GDP.
