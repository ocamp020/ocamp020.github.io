# Monopolistic Competition

> Part: Firm Heterogeneity

We now look at what is by far the most popular demand system for applied
macroeconomics: Monopolistic Competition. The model as used now was
developed in [Dixit and Stiglitz (1977)](https://www.jstor.org/stable/1831401) and captures a large
number of firms producing differentiated goods that are nonetheless
(imperfect) substitutes for one another, following insights from Chamberlain
(1933). The fact that the goods are differentiated means that individual
producers haver market power over their variety, but the substitutability
with other products places limits on this power as producers compete
for higher demand for their individual variety of good. In the original
formulation there was a finite (but large) number of producers. We
will instead use the more common formulation of a continuum of goods
indexed by $i\in\left[0,1\right]$.

At the center of the model are the preferences for the various products,
or equivalently, an aggregation technology that combines individual
varieties to produce a single final good. In the first case, demand
comes from identical consumers that maximize the utility they derive
from the consumption of the different good varieties
\[
U=\left(\int_{0}^{1}y_{i}^{\frac{\varepsilon-1}{\varepsilon}}di\right)^{\frac{\varepsilon}{\varepsilon-1}}.
\]
In the second case the integral is equal to the value of the aggregate
good $Y$. This second version is more common in applications in international
trade and New-Keynesian models where the final good is demanded along
with foreign goods or where utility also includes leisure.

The parameter $\varepsilon>1$ plays an crucial role as it determines
the degree of substitutability between goods and, as we will see later,
the elasticity of demand.

The problem of the consumer (or final good producer) is to minimize
the cost of their consumption basket (or inputs) subject to some desired
utility (or output) level. Notice that the utility (or production)
function has constant returns to scale and thus the maximization problem
is ill-defined:
\[
\min_{\left\{ y_{i}\right\} }\,\int_{0}^{1}p_{i}y_{i}di-\lambda\left(\left(\int_{0}^{1}y_{i}^{\frac{\varepsilon-1}{\varepsilon}}di\right)^{\frac{\varepsilon}{\varepsilon-1}}-\overline{Y}\right),
\]
with $\lambda>0$ a Lagrange multiplier and $\overline{Y}$ is the
desired level of utility.

The first order conditions are, for any $i$,
\[
p_{i}=\lambda\left(\int_{0}^{1}y_{i}^{\frac{\varepsilon-1}{\varepsilon}}di\right)^{\frac{\varepsilon}{\varepsilon-1}-1}y_{i}^{\frac{-1}{\varepsilon}}.
\]
Hence, optimality requires that between any pair of goods $\left(i,j\right)$
\[
\underbrace{\frac{p_{i}}{p_{j}}}_{\text{MRT}}=\underbrace{\left(\frac{y_{i}}{y_{j}}\right)^{\frac{-1}{\varepsilon}}}_{\text{MRS}}\longrightarrow\frac{y_{i}}{y_{j}}=\left(\frac{p_{i}}{p_{j}}\right)^{-\varepsilon}.
\]
From this we see that $\varepsilon=\frac{\log y_{i}}{\log p_{j}}$
is the elasticity of substitution between goods $i$ and $j$. (Note: A better definition has the elasticity be the change in relative demand in response to changes in relative prices: $\varepsilon=-\frac{\partial\log\nicefrac{y_{i}}{y_{j}}}{\partial\log\nicefrac{p_{i}}{p_{j}}}$.) Moreover, the elasticity of substitution is constant across pairs.
This is what gives its name to the aggregator as the Constant-Elasticity-of-Substitution
(CES) aggregator.

Going back to the demand for good $i$ we can write
\[
\frac{p_{i}}{\lambda}=\left(\frac{y_{i}}{\overline{Y}}\right)^{\frac{-1}{\varepsilon}}
\]
after noting that optimality will have the constraint satisfied with
equality. We can then use this to obtain a price index
\begin{align*}
\overline{Y} & =\left(\int_{0}^{1}y_{i}^{\frac{\varepsilon-1}{\varepsilon}}di\right)^{\frac{\varepsilon}{\varepsilon-1}}\\
1 & =\int_{0}^{1}\left(\left(\frac{y_{i}}{\overline{Y}}\right)^{\frac{-1}{\varepsilon}}\right)^{1-\varepsilon}di\\
1 & =\int_{0}^{1}\left(\frac{p_{i}}{\lambda}\right)^{1-\varepsilon}di\\
\lambda & =\left(\int_{0}^{1}p_{i}^{1-\varepsilon}di\right)^{\frac{1}{1-\varepsilon}}
\end{align*}
This gives us an interpretation of $\lambda=\overline{P}$, the (ideal)
price index of the composite good $\overline{Y}$, or the price of
a unit of utility (also obtained as such from the envelope theorem).

Further, notice that
\begin{align*}
\overline{P}\,\overline{Y} & =\int_{0}^{1}p_{i}y_{i}di\\
& =\int_{0}^{1}\overline{P}\left(\frac{y_{i}}{\overline{Y}}\right)^{\frac{-1}{\varepsilon}}y_{i}di\\
& =\frac{\overline{P}}{\overline{Y}^{\frac{-1}{\varepsilon}}}\int_{0}^{1}\left(y_{i}\right)^{\frac{\varepsilon-1}{\varepsilon}}di\\
& =\frac{\overline{P}}{\overline{Y}^{\frac{-1}{\varepsilon}}}\overline{Y}^{1-\frac{1}{\varepsilon}}\\
& =\overline{P}\,\overline{Y}
\end{align*}
This property also follows directly from the aggregator having constant
returns to scale, so that the cost function has to be linear.

So, what does this imply for the demand faced by an individual producer?
Returning to the first order condition we can now write the inverse
demand curve of any given variety $i$ as a function of aggregate
prices and quantities:
\[
p_{i}=\left(\frac{y_{i}}{\overline{Y}}\right)^{\frac{-1}{\varepsilon}}\overline{P}\qquad\text{or}\qquad y_{i}=\left(\frac{p_{i}}{\overline{P}}\right)^{-\varepsilon}\overline{Y}.
\]
Recall that the actions of no individual producer can affect $\overline{Y}$
or $\overline{P}$, so this equation is all the producer needs to
solve its profit maximization problem. We can do this using the results
from the previous section by noting that the elasticity of demand
is
\[
\varepsilon_{i}=-\left(\frac{\partial\log p_{i}}{\partial\log y_{i}}\right)^{-1}=\varepsilon,
\]
so that all producers face the same elasticity of demand (equal to
the elasticity of substitution across varieties). The markup is therefore
constant across firms:
\[
\mu=\frac{1}{1-\frac{1}{\varepsilon}}=\frac{\varepsilon}{\varepsilon-1},
\]
and profits are
\[
\pi_{i}=\left(\mu-1\right)c_{i}y_{i}.
\]
We can further solve for the price index in terms of the marginal
costs $c_{i}=C_{i}^{\prime}\left(y_{i}\right)$:
\[
\overline{P}=\underbrace{\frac{\varepsilon}{\varepsilon-1}}_{\text{Agg. Markup}}\times\underbrace{\left(\int_{0}^{1}c_{i}^{1-\varepsilon}di\right)^{\frac{1}{1-\varepsilon}}}_{\text{Agg. Mrg. Cost \left(\overline{C}\right)}}.
\]

**Bertrand and Cournot in monopolistic competition**

We can also get this result directly, which also allow us to see the
curvature in the firm's problem. In the case of Bertrand competition
\[
\max\,p_{i}y_{i}-C_{i}\left(y_{i}\right)=\max_{p_{i}}\,\left(\frac{p_{i}}{\overline{P}}\right)^{1-\varepsilon}\left(\overline{P}\,\overline{Y}\right)-C_{i}\left(\left(\frac{p_{i}}{\overline{P}}\right)^{-\varepsilon}\overline{Y}\right).
\]
The first order condition gives
\begin{align*}
\left(1-\varepsilon\right)p_{i}^{-\varepsilon}\left(\frac{1}{\overline{P}}\right)^{1-\varepsilon}\left(\overline{P}\,\overline{Y}\right)+\varepsilon p_{i}^{-\varepsilon-1}C_{i}^{\prime}\left(\left(\frac{p_{i}}{\overline{P}}\right)^{-\varepsilon}\overline{Y}\right)\left(\frac{1}{\overline{P}}\right)^{-\varepsilon}\overline{Y} & =0\\
\left(1-\varepsilon\right)+\varepsilon\frac{1}{p_{i}}C_{i}^{\prime}\left(y_{i}\right) & =0\\
p_{i} & =\frac{\varepsilon}{\varepsilon-1}C_{i}^{\prime}\left(y_{i}\right)
\end{align*}

In the case of Cournot competition
\[
\max\,p_{i}y_{i}-C_{i}\left(y_{i}\right)=\max_{y_{i}}\,\left(\frac{y_{i}}{\overline{Y}}\right)^{\frac{\varepsilon-1}{\varepsilon}}\left(\overline{P}\,\overline{Y}\right)-C_{i}\left(y_{i}\right).
\]
The first order condition gives
\begin{align*}
\frac{\varepsilon-1}{\varepsilon}y_{i}^{\frac{\varepsilon-1}{\varepsilon}-1}\left(\frac{1}{\overline{Y}}\right)^{\frac{\varepsilon-1}{\varepsilon}}\left(\overline{P}\,\overline{Y}\right)-C_{i}^{\prime}\left(y_{i}\right) & =0\\
\frac{\varepsilon-1}{\varepsilon}\left(\frac{y_{i}}{\overline{Y}}\right)^{-\frac{1}{\varepsilon}}\overline{P}-C_{i}^{\prime}\left(y_{i}\right) & =0\\
p_{i} & =\frac{\varepsilon}{\varepsilon-1}C_{i}^{\prime}\left(y_{i}\right)
\end{align*}
This establishes that under monopolistic competition with constant
elasticity of demand Bertrand and Cournot competition are equivalent.

**Firms' production scale**

Markups are constant and so the differences between firms come from
differences in marginal costs. More productive firms have lower costs
and therefore charge lower prices. This translates into more productive
firms operating at a larger scale, determined by the solution to
\[
\left(\frac{y_{i}}{\overline{Y}}\right)^{\frac{-1}{\varepsilon}}\overline{P}=\frac{\varepsilon}{\varepsilon-1}C_{i}^{\prime}\left(y_{i}\right).
\]
In the special case of constant marginal costs and replacing by the
aggregate price we have
\[
y_{i}=\left(\frac{c_{i}}{\overline{C}}\right)^{-\varepsilon}\overline{Y},
\]
so that firms with lower marginal costs produce more, with elasticity
$\varepsilon$ of equilibrium output relative to marginal costs.

The scale of the problem is given by $\overline{Y}$ that is for now
taken as given. In a complete equilibrium model $\overline{P}\,\overline{Y}$
must equal the income of the household (if there are no other expenses
in the economy).

## Taste for variety

The original use of this model as well as many current uses in growth
and trade theory has to do with the concept of taste for variety.
The idea is that individuals like having choice. This is captured
by allowing there to be more varieties of goods.

Let there be (a continuum of) $N$ goods and assume that all the firms
are identical and have a constant marginal cost of $c_{i}=c$. Then,
all firms set the same price
\[
p_{i}=\frac{\varepsilon}{\varepsilon-1}c.
\]
To see this, recall that the pricing/output decision of firms depends
only on the elasticity of demand, which is not affected by how many
varieties/firms there are.

Even though all firms set the same price, the aggregate price does
not satisfy $\overline{P}=p_{i}$. This comes from the fact that there
are now $N$ varieties and so
\[
\overline{Y}=\left(\int_{0}^{N}y_{i}^{\frac{\varepsilon-1}{\varepsilon}}di\right)^{\frac{\varepsilon}{\varepsilon-1}}\qquad\text{and}\qquad\overline{P}=\left(\int_{0}^{N}p_{i}^{1-\varepsilon}di\right)^{\frac{1}{1-\varepsilon}}
\]
The price index is now
\[
\overline{P}=N^{\frac{-1}{\varepsilon-1}}\frac{\varepsilon}{\varepsilon-1}c
\]
which is decreasing in the number of varieties! So, the more varieties
there are the lower the price per unit of utility (or output) despite
the price of each variety being the same. This is the effect of the
taste of variety.

This effect of varieties over the price index has implications for
individual firms. Their output depends on the number of varieties
\[
y_{i}=N^{\frac{-\varepsilon}{\varepsilon-1}}\overline{Y},
\]
as do their profits
\[
\pi_{i}=p_{i}y_{i}-cy_{i}=\frac{1}{\varepsilon-1}cy_{i}=\frac{1}{\varepsilon-1}cN^{\frac{-\varepsilon}{\varepsilon-1}}\overline{Y}.
\]
Whether output and profits are increasing or decreasing in $N$ depends
on the effect of $N$ on total demand $\left(\overline{Y}\right)$.
When embedding this problem into a more complete model the level of
utility (or output) $\overline{Y}$ will also respond to the number
of varieties as the price per unit $\left(\overline{P}\right)$ decreases.
This is a pecuniary price externality that works through changes in
the aggregate price $\overline{P}$: higher $N$ lower $\overline{P}$
and that has an effect on $\overline{Y}$.

Crucially, individual firms take the number of varieties as given.
In particular, when making entry decisions, firms do not take into
account their effect on the profits of other firms or on welfare.
This means that the taste for variety introduces an externality into
the model and so the equilibrium solution is in general not efficient.

We can see this better by adding one assumption. There is a total
amount of income $I$ to be spent in goods. If the amount of expenditure
is constant that means that the aggregate demand for goods $\left(\overline{Y}\right)$
has unit elasticity. So we know that
\[
I=\int_{0}^{N}p_{i}y_{i}di=\overline{P}\,\overline{Y},
\]
so that as $\overline{P}$ decreases, $\overline{Y}$ must increase.
Under this fixed-expenditure assumption we get to set the scale of
$\overline{Y}$ as
\[
\overline{Y}=\left(1-\frac{1}{\varepsilon}\right)\frac{I}{c}N^{\frac{1}{\varepsilon-1}}.
\]
Replacing into the output of individuals firms this implies
\[
y_{i}=\left(1-\frac{1}{\varepsilon}\right)\frac{I}{c}N^{-1}
\]
so that output and profits decrease with variety. This result is,
of course, not general. For most problems aggregate demand is more
than unit-elastic and so total expenditure increases when the price
decreases.

**Derivation of results**

It is instructive to see how the results are consistent with the role
of $N$ in shifting the variety-demand. For this recall that the cost
minimization problem from which demand comes is
\[
\min_{\left\{ y_{i}\right\} }\,\int_{0}^{N}p_{i}y_{i}di-P\left(\left(\int_{0}^{N}y_{i}^{\frac{\varepsilon-1}{\varepsilon}}di\right)^{\frac{\varepsilon}{\varepsilon-1}}-\overline{Y}\right),
\]
so that the (inverse) demand for variety $i$ is still
\[
\frac{p_{i}}{P}=\left(\int_{0}^{N}y_{i}^{\frac{\varepsilon-1}{\varepsilon}}di\right)^{\frac{\varepsilon}{\varepsilon-1}-1}y_{i}^{-\frac{1}{\varepsilon}}=\left(\left(\int_{0}^{N}y_{i}^{\frac{\varepsilon-1}{\varepsilon}}di\right)^{\frac{\varepsilon}{\varepsilon-1}}\right)^{\frac{1}{\varepsilon}}y_{i}^{-\frac{1}{\varepsilon}}=\left(\frac{y_{i}}{\overline{Y}}\right)^{-\frac{1}{\varepsilon}}.
\]
From this we obtain the pricing decision above of a constant markup
over marginal cost. Under the assumption of common (and constant)
marginal costs we get that all firm produce the same quantity, and
hence
\[
\overline{Y}=\left(\int_{0}^{N}y_{i}^{\frac{\varepsilon-1}{\varepsilon}}di\right)^{\frac{\varepsilon}{\varepsilon-1}}=N^{\frac{\varepsilon}{\varepsilon-1}}y_{i}
\]
which is the expression used above.

**Equilibrium and entry**

Consider an economy with an infinite number of firms that produce
differentiated goods using a linear technology in labor and that differ
in their productivity, as captured by their constant marginal costs,
$c_{i}=\nicefrac{w}{z_{i}}$ with $w$ the market wage. The index
of the firm reflects their marginal costs and so $c_{i}<c_{j}$ if
and only if $i<j$. Opening a firm to produce has a fixed cost of
$\psi\geq0$. The demand for differentiated goods comes from a representative
agent with preferences for the composite good
\[
\overline{Y}=\left(\int_{0}^{\infty}y_{i}^{\frac{\varepsilon-1}{\varepsilon}}di\right)^{\frac{\varepsilon}{\varepsilon-1}}
\]
captured by the demand curve $\overline{Y}=\overline{P}^{-\eta}$
with constant elasticity of demand $\eta$.

There are three stages in the economy.

1. Potential entrants simultaneously decide whether or not to enter and
pay the fixed cost $\psi>0$. Let $N$ be the number of firms that
enter to produce.
1. Each entrant $i$ simultaneously choose prices $p_{i}$.
1. Consumers observe prices of the differentiated goods s and make consumption
decisions. Let $y_{i}$ be the demand of entrant $i$.

We focus on sub-game perfect equilibria. An equilibrium is an entry
decision for each firm $i$, a price function $\left\{ p_{i}\right\} $,
and a demand function $\left\{ y_{i}\right\} $ such that

1. Entry is profit maximizing, so that firms enter if and only if they
make non-negative profits after taking into account fixed costs.
1. Firms set prices to maximize profits taking as given the prices of
other firms and the demand for their variety.
1. The demand for each variety is chosen to minimize costs of the consumer
taking as given the prices of the consumers.
1. Total demand for the composite good satisfies the demand $\overline{Y}=\overline{P}^{-\eta}$.

We already know the price setting behavior of firms. Their profits
are non-decreasing in their index as higher $i$ corresponds to (weakly)
lower marginal costs. That is, we want an index $N$ such that
\[
\pi_{N}\left(N\right)=\left(\mu-1\right)c_{N}y_{N}=\psi\longrightarrow y_{N}=\frac{\psi}{\left(\mu-1\right)c_{N}}
\]
The equilibrium is given by the value of $N$ that solves this equation.

We can go further by recalling the demand function
\[
y_{N}=\left(\frac{p_{N}}{\overline{P}}\right)^{-\varepsilon}\overline{Y}=\left(\mu\frac{c_{N}}{\overline{P}}\right)^{-\varepsilon}\overline{P}^{-\eta}.
\]
We also know that
\[
\overline{P}=N^{\frac{-1}{\varepsilon-1}}\mu\overline{C},
\]
where $\overline{C}$ is the average marginal cost (already divided
by the number of firms to cancel variety effects). Replacing gives
\[
N^{\frac{\eta-\varepsilon}{\varepsilon-1}}\left(\frac{c_{N}}{\overline{C}}\right)^{-\varepsilon}\left(\mu\overline{C}\right)^{-\eta}=\frac{\psi}{\left(\mu-1\right)c_{N}}
\]
In the case of constant marginal costs we further have
\[
N=\left(\mu^{\eta}c^{\eta-1}\frac{\psi}{\mu-1}\right)^{\frac{\varepsilon-1}{\eta-\varepsilon}}.
\]

**Efficiency of equilibrium**

Lets focus on the case treated in [Dixit and Stiglitz (1977)](https://www.jstor.org/stable/1831401).
Firms are symmetric with constant marginal cost $c$. There is some
fixed income $I$ to be spent across varieties, so the (aggregate)
demand for goods has an elasticity of one $\left(\eta=1\right)$.

In this case we have (from symmetry and the fixed income) that
\[
p_{i}=p=\mu c\qquad\text{and}\qquad y_{i}=y=\frac{I}{Np}=\frac{I}{N\mu c}.
\]
We also have (from aggregation)
\[
\overline{Y}=N^{\frac{\varepsilon}{\varepsilon-1}}y\qquad\text{and}\qquad\overline{P}=N^{\frac{1}{1-\varepsilon}}p.
\]

Free entry implies the equilibrium number of varieties
\begin{align*}
\left(p-c\right)y & =\psi\\
\left(1-\frac{1}{\mu}\right)\frac{I}{N} & =\psi\\
\left(1-\frac{1}{\mu}\right)\frac{I}{\psi} & =N^{\star}\\
\frac{1}{\varepsilon}\frac{I}{\psi} & =N^{\star}
\end{align*}
and thus the output of each firm
\[
y^{\star}=\left(\varepsilon-1\right)\frac{\psi}{c}.
\]

We now compare this solution to a constrained social optimum, where
the allocation must have firm make non-negative profits. The unconstrained
optimum can have firm price below average cost (because of the presence
of fixed costs) and therefore implicitly requires lump-sum transfers
to firms.

The constrained optimum should have all active firms be identical
(as there are no technology- or preference-based differences between
them). They also must be making exactly zero profits. The problem
is to choose the number of firms as well as firm quantities and prices
to maximize $\overline{Y}$ (the utility level). The resource constraint
implies that $\overline{Y}=\nicefrac{I}{\overline{P}}$, and so, with
fixed income, we know that the utility is maximized as we minimize
aggregate prices.

From the definition of the price index and the symmetry across firms
we can then express the problem as one of minimizing the price index
subject to the zero profit condition of firms
\[
\min_{p,N}\,N^{\frac{1}{1-\varepsilon}}p\qquad\text{s.t. }\left(p-c\right)\frac{I}{Np}=\psi.
\]
The first order conditions are
\begin{align*}
N^{\frac{1}{1-\varepsilon}} & =\frac{c}{p^{2}}\frac{I}{N}\lambda\\
\frac{1}{\varepsilon-1}N^{\frac{1}{1-\varepsilon}-1}p & =\left(p-c\right)\frac{I}{N^{2}p}\lambda
\end{align*}
The ratio between them gives
\[
p=\frac{\varepsilon}{\varepsilon-1}c.
\]
This is the same optimal pricing choice as in the decentralized equilibrium.
The number of firms is also the same as in the market's solution.
Therefore the solution is constrained-efficient.

The unconstrained equilibrium is not subject to the zero-profit condition,
but instead must acknowledge the effect of fixed costs on disposable
income (now that firm profits need not cover them). The solution still
requires firms to behave symmetrically. The problem is then to maximize
$\overline{Y}$ subject to resources
\[
\max_{y,N}\,N^{\frac{\varepsilon}{\varepsilon-1}}y\qquad\text{s.t. }I=N\left(cy+\psi\right)
\]
The first order conditions are
\begin{align*}
N^{\frac{\varepsilon}{\varepsilon-1}} & =Nc\lambda\\
\frac{\varepsilon}{\varepsilon-1}N^{\frac{\varepsilon}{\varepsilon-1}-1}y & =\left(cy+\psi\right)\lambda
\end{align*}
The ratio between them gives the unconstrained optimum's output per
firm:
\[
y=\left(\varepsilon-1\right)\frac{\psi}{c}.
\]
We can get the number of active firms from the constraint:
\[
N=\frac{1}{\varepsilon}\frac{I}{\psi}.
\]
These are the same number of varieties and output per firm as in the
equilibrium. However, this turns out to be a knife-edge case in which
the equilibrium is efficient due to the fixed income (expenditure)
assumption. [Dixit and Stiglitz (1977)](https://www.jstor.org/stable/1831401) show that the unconstrained
number of varieties is larger than the equilibrium level when the
expenditure in the differentiated goods responds to their (aggregate)
price.
