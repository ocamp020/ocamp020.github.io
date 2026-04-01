# Variable Markups

> Part: Firm Heterogeneity

We now study another dimension of firm heterogeneity: variable markups.
Firms of different sizes can differ in the markups they charge. This
is not the case in the monopolistic competition framework above because
of two reasons. First, the demand faced by each producer had constant
elasticity, and so the markup was constant. Recall that optimal markups
are $\mu=\nicefrac{1}{\left(1-\frac{1}{\varepsilon}\right)}$. Second,
there were no strategic interactions between firms. The number of
firms (or products) was assumed to be large enough to make no firm
have an effect on the aggregate. If firms are large enough to internalize
their effect on others larger firms gain market power and can thus
charge larger markups.

The objective in this section is to go over the basics of these two
approaches. Each has extensive applications in the economics of misallocation,
monetary policy, and international trade.

## Variable Elasticity of Demand and Variable Markups

We start extending the framework of [Dixit and Stiglitz (1977)](https://www.jstor.org/stable/1831401)
to allow for a demand system with variable elasticity of demand. In
this we follow [Kimball (1995)](https://doi.org/10.2307/2078048). (Note: Other formulations are reviewed by Costas Arkolakis and Monica Morlacco, see [their notes on variable elasticity of demand](https://www.dropbox.com/s/h82n1m6btln7h07/Arkolakis_Morlacco_08_2017.pdf?raw=1).)

In order to have variable elasticity of demand we need a new formulation
of the aggregator. There is an aggregate (or composite) good $Y$
that is produced by a competitive producer. Production combines a
continuum of differentiated goods $\left\{ y_{i}\right\} $. The aggregation
technology is implicitly defined by
\[
1=\int\Upsilon\left(\frac{y_{i}}{Y}\right)di.
\]
The properties of the demand for the differentiated goods $y_{i}$
depend on the function $\Upsilon$. The function $\Upsilon$ is either
strictly increasing and strictly concave (case where the goods are
gross substitutes) or strictly decreasing and strictly convex (case
where the goods are gross complements). Note that the function is
homogeneous of degree 1 by construction.

This function includes the constant-elasticity-of-substitution (CES)
aggregator used above when we let $\Upsilon\left(x\right)=x^{\frac{\varepsilon-1}{\varepsilon}}$.
Other functional forms allow for variable-elasticity of demand. To
see this more clearly we need to solve the problem of the aggregator.

The problem of the aggregator is to minimize its cost subject to a
minimum level of output $\overline{Y}$:
\[
\min_{\left\{ y_{i}\right\} }\,\int p_{i}y_{i}di\qquad\text{s.t. }1=\int\Upsilon\left(\frac{y_{i}}{\overline{Y}}\right)di
\]
The first order conditions are (for each variety)

\[
p_{i}=\Upsilon'\left(\frac{y_{i}}{Y}\right)\frac{\lambda}{Y},
\]
where $\lambda$ is the Lagrange multiplier. We need to solve for
the multiplier. To do this, multiply both sides of the first order
condition by $y_{i}$ and sum across varieties to obtain
\[
\lambda=\frac{\int p_{i}y_{i}di}{\int\Upsilon'\left(\frac{y_{i}}{Y}\right)\frac{y_{i}}{Y}di}.
\]
Then, define the price of the aggregate good, $P$, so that it satisfies
$P\cdot Y=\int p_{i}\cdot y_{i}di$. Finally, replace $\lambda$ into
the first order condition and divide both sides by $P$ to obtain
the inverse demand curve for variety $i$ expressed in terms of relative
prices and relative output:
\[
\frac{p_{i}}{P}=\frac{\Upsilon'\left(\frac{y_{i}}{Y}\right)}{\int\Upsilon'\left(\frac{y_{i}}{Y}\right)\frac{y_{i}}{Y}di}.
\]

We can also define implicitly the aggregate price. For this it is
convenient to denote $D=\int\Upsilon'\left(\frac{y_{i}}{Y}\right)\frac{y_{i}}{Y}di$
and then we define a set of two equations that jointly determine $D$
and $P$ using the definition of the price index and the aggregator:
\[
P=\int p_{i}\cdot\left(\Upsilon'\right)^{-1}\left(D\frac{p_{i}}{P}\right)di\qquad\text{and}\qquad1=\int\Upsilon\left(\left(\Upsilon'\right)^{-1}\left(D\frac{p_{i}}{P}\right)\right)di,
\]
where $\left(\Upsilon'\right)^{-1}\left(x\right)$ is the inverse
function of the first derivative of $\Upsilon$.

While this looks complicated the key is in realizing that the behavior
of the monopolists producing each variety depends only on the elasticity
of demand $\varepsilon_{i}=-\left(\frac{\partial\log p_{i}}{\partial\log y_{i}}\right)^{-1}$.
As before, the key is that the actions of a single producer cannot
affect the value of aggregate output or prices. The elasticity is
\begin{align*}
\varepsilon_{i} & =-\left(\frac{y_{i}}{p_{i}}\frac{\partial p_{i}}{\partial y_{i}}\right)^{-1}\\
& =-\left(\frac{y_{i}}{p_{i}}\frac{\partial\Upsilon'\left(\frac{y_{i}}{Y}\right)\frac{P}{D}}{\partial y_{i}}\right)^{-1}\\
& =-\left(\frac{y_{i}}{p_{i}}\Upsilon"\left(\frac{y_{i}}{Y}\right)\frac{P}{D}\frac{1}{Y}\right)^{-1}\\
& =-\left(\frac{y_{i}}{Y}\right)^{-1}\frac{\Upsilon'\left(\frac{y_{i}}{Y}\right)}{\Upsilon"\left(\frac{y_{i}}{Y}\right)}
\end{align*}
So, knowing the properties of the first two derivatives of $\Upsilon$
is enough to know the behavior of firms.

When goods are substitutes we have $\Upsilon'\left(x\right)>0$ and
$\Upsilon"\left(x\right)<0$. When they are complements we have $\Upsilon'\left(x\right)<0$
and $\Upsilon"\left(x\right)>0$. So we know that the elasticity
is positive (recall we fixed the sign, the demand curve is downward
sloping). The key question is whether it is increasing or decreasing
in the variety's (relative) output.

In practice, we work with aggregators that imply a decreasing elasticity
of demand for larger firms, capturing the fact that larger firms have
more market power and charge a higher markup. For example, the aggregator
proposed by [Klenow and Willis (2016)](https://doi.org/10.1111/ecca.12191) implies that
\[
\varepsilon_{i}=\varepsilon\cdot\left(\frac{y_{i}}{Y}\right)^{-\frac{\theta}{\varepsilon}}
\]
with $\varepsilon,\theta>0$ parameters, so that as the relative output
increases the elasticity decreases.

In equilibrium, more productive firms have lower marginal costs and
hence can charge lower prices. This leads them to operate in more
inelastic portion of their demand curves and charge higher markups.
So, higher markups coexist with lower prices.

## Oligopolistic Competition and Variable Markups

Finally, we consider the case of oligopolistic competition, where
finitely many firms compete à la Cournot or à la Bertrand in a market.
In this setup, it is the strategic interactions between firms that
give rise to market power for the more productive firms who end up
being larger in equilibrium. These firms charge higher markups. This
setup is developed in [Atkeson and Burstein (2008)](https://doi.org/10.1257/aer.98.5.1998) and used
in a variety of papers in international trade and misallocation.

Consider a market with $N$ producers of a differentiated goods competing
à la Cournot (so monopolists choose quantities taking quantities of
other monopolists as given). Firms are heterogeneous in their marginal
cost, $c_{i}$. The demand for the goods comes from a competitive
final good producer that aggregates individual goods using a CES technology
\[
Y=\left(\sum_{i=1}^{N}y_{i}^{\frac{\varepsilon-1}{\varepsilon}}\right)^{\frac{\varepsilon}{\varepsilon-1}}.
\]
The final good producer is a price taker and the demand for final
goods has constant elasticity of demand $\eta$, so that $Y=P^{-\eta}$.
We assume that $\eta<\varepsilon$. This means that the varieties
are more substitutable between them than the total output is for other
(potential) goods that can be in the economy. This is the case when
we have a model with many markets, being aggregated with an (outer)
CES aggregator with elasticity $\eta$.

Just as before, the cost minimization problem of the final good producer
implies a demand for variety $i$ of
\[
\frac{p_{i}}{P}=\left(\frac{y_{i}}{Y}\right)^{-\frac{1}{\varepsilon}},
\]
where
\[
PY=\sum_{i=1}^{N}p_{i}y_{i}\qquad\text{and}\qquad P=\left(\sum_{i=1}^{N}p_{i}^{1-\varepsilon}\right)^{\frac{1}{1-\varepsilon}}.
\]

What changes is the behavior of the monopolists. The key is that the
elasticity of demand they face depends on how their output affects
aggregates. We now have
\begin{align*}
\varepsilon_{i}^{-1} & =-\frac{\partial\log p_{i}}{\partial\log y_{i}}=-y_{i}\frac{\partial\log\left(\frac{y_{i}}{Y}\right)^{\frac{-1}{\varepsilon}}P}{\partial y_{i}}=-y_{i}\frac{\partial\log\left(\frac{y_{i}}{Y}\right)^{-\frac{1}{\varepsilon}}Y^{-\frac{1}{\eta}}}{\partial y_{i}}=\frac{\partial\log y_{i}^{\frac{-1}{\varepsilon}}Y^{\frac{1}{\varepsilon}-\frac{1}{\eta}}}{\partial y_{i}},
\end{align*}
so that we can break the elasticity into two terms, the effect of
a change in the variety's elasticity and the effect on aggregate production,
\[
\varepsilon_{i}^{-1}=\underbrace{\frac{1}{\varepsilon}}_{\text{Elast. of Subs.}}+\left(\frac{1}{\eta}-\frac{1}{\varepsilon}\right)\underbrace{\frac{y_{i}}{Y}\frac{\partial Y}{\partial y_{i}}}_{\text{Elast. of Agg. Output}}.
\]
The elasticity of the aggregate output is with respect to variety
$i$ is
\[
\frac{y_{i}}{Y}\frac{\partial Y}{\partial y_{i}}=\frac{y_{i}}{Y}\frac{\partial\left(\sum_{i=1}^{N}y_{i}^{\frac{\varepsilon-1}{\varepsilon}}\right)^{\frac{\varepsilon}{\varepsilon-1}}}{\partial y_{i}}=\frac{y_{i}}{Y}\left(\sum_{i=1}^{N}y_{i}^{\frac{\varepsilon-1}{\varepsilon}}\right)^{\frac{\varepsilon}{\varepsilon-1}-1}y_{i}^{\frac{\varepsilon-1}{\varepsilon}-1}=\frac{y_{i}^{\frac{\varepsilon-1}{\varepsilon}}}{\sum_{i=1}^{N}y_{i}^{\frac{\varepsilon-1}{\varepsilon}}}=\left(\frac{y_{i}}{Y}\right)^{1-\frac{1}{\varepsilon}}
\]

This gives us the result. But if we observe this expression in detail
we can see that we can also express it as
\[
\frac{y_{i}}{Y}\frac{\partial Y}{\partial y_{i}}=\left(\frac{y_{i}}{Y}\right)^{-\frac{1}{\varepsilon}}\frac{y_{i}}{Y}=\frac{p_{i}y_{i}}{PY}=s_{i}
\]
which is the sales-share of producer $i$. This is a key result. The
elasticity of demand is increasing in the firm's market share. The
sign follows from the assumption that $\eta<\varepsilon$.

Replacing back we get that the demand elasticity of variety $i$ is
a weighted average between the elasticity of its own variety and the
demand elasticity of the market:
\[
\frac{1}{\varepsilon_{i}}=\frac{1}{\varepsilon}\left(1-s_{i}\right)+\frac{1}{\eta}s_{i}.
\]
If the firm is small $\left(s_{i}\to0\right)$, it behaves like in
the monopolistic competition setup and only cares about the elasticity
of its own variety, taking aggregates as given. As the firm grows
large $\left(s_{i}\to1\right)$, it behaves like a true monopolist,
caring about the elasticity of demand for the market output $\left(Y\right)$
and not for the competition with other varieties.

The markup is then
\[
\mu_{i}=\frac{1}{1-\frac{1}{\varepsilon_{i}}}=\frac{1}{\left(1-\frac{1}{\varepsilon}\right)\left(1-s_{i}\right)+\left(1-\frac{1}{\eta}\right)s_{i}}.
\]
It is again the case that larger firms have larger markups, reflecting
the decrease in elasticity as market shares increase.

**Aggregating markups**

The average markup in a market, $\bar{\mu}$, is defined as the ratio
between the market's price $P$ and the market's marginal cost $\overline{c}$,
\[
\overline{\mu}=\frac{P}{\overline{c}}.
\]
This is equivalent to defining it as the ratio of the market's revenue
$PY$ and the market's total cost, which, under constant returns-to-scale,
is $\sum_{i}c_{i}y_{i}$.

Because the market aggregator has constant-returns-to-scale, the market's
marginal cost is equal to the output-weighted average of the individual
marginal costs, that we label $c_{i}\equiv C_{i}^{\prime}\left(y_{i}\right)$,
\[
\overline{c}=\sum_{i=1}^{N}c_{i}\frac{y_{i}}{Y}.
\]

Then, the market's markup is obtained as a sales-weighted harmonic
mean of individual markups
\[
\overline{\mu}=\frac{P}{\overline{c}}=\left[\sum_{i=1}^{N}c_{i}\frac{y_{i}}{PY}\right]^{-1}=\left[\sum_{i=1}^{N}\frac{1}{\mu_{i}}s_{i}\right]^{-1}=\left[\sum_{i=1}^{N_{m}}\left(1-\frac{1}{\varepsilon_{i}}\right)s_{i}\right]^{-1}=\frac{1}{1-\frac{1}{\overline{\varepsilon}}},
\]
where $\overline{\varepsilon}$ is the (weighted-harmonic) average
elasticity in the market,
\[
\overline{\varepsilon}\equiv\left[\sum_{i=1}^{N}\frac{1}{\varepsilon_{i}}s_{i}\right]^{-1}.
\]
In this way the market's average markup has the same expression as
the individual markup with the corresponding market elasticity.

In the case of Cournot competition we can go further using the expression
derived above for the elasticity of each firm:
\[
\frac{1}{\overline{\varepsilon}}=\sum_{i=1}^{N}\frac{1}{\varepsilon_{i}}s_{i}=\sum_{i=1}^{N}\left(\frac{1}{\varepsilon}\left(1-s_{i}\right)+\frac{1}{\eta}s_{i}\right)s_{i}=\frac{1}{\varepsilon}\left(\sum_{i=1}^{N}s_{i}-\sum_{i=1}^{N}s_{i}^{2}\right)+\frac{1}{\eta}\sum_{i=1}^{N}s_{i}^{2}
\]
where we take advantage of the fact that $\sum s_{i}=1$ and that
the sum of square shares is the definition of the Herfindahl-Hirschman
index of concentration (HHI). This index gives the probability that
two random dollars spent in the market are spent in the same firm.
The result is a direct link between concentration in the market and
average markups
\[
\frac{1}{\overline{\varepsilon}}=\frac{1}{\varepsilon}\left(1-\text{HHI}\right)+\frac{1}{\eta}\text{HHI}\qquad\text{and}\qquad\frac{1}{\overline{\mu}}=\underbrace{\frac{\eta-1}{\eta}}_{\text{Monopoly Markup}}+\underbrace{\left(\frac{1}{\eta}-\frac{1}{\varepsilon}\right)\left(1-\text{HHI}\right)}_{\text{Concentration Markup}}.
\]
