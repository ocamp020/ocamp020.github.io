# Market Power

> Part: Firm Heterogeneity

An alternative approach to introduce curvature into the firms' problem
is to acknowledge the presence of market power in the form of price-setting
behavior. The choice over prices introduces curvature over the firms'
revenue. Under perfect competition revenue is linear in quantities
as price per unit is constant (linear pricing). Market power introduces
curvature because it takes into account the fact that the demand for
goods is decreasing in prices, and that it is therefore necessary
to reduce prices to increase quantities. The curvature is introduced
into the revenue function of the firm, rather than in production.
This in turn generates differences across firms as firms with higher
productivity can charge lower prices and operate at a larger scale.

This approach also results in firms charging markups and making profits.
This has made it widely used in many areas such as the New-Keynesian
literature, international trade, and growth, where price-setting and
the profit-motive play a central role.

**Markups and firm heterogeneity**

We abandon the price-taking assumption we have imposed so far on firms
and instead study firms that choose prices as well as inputs.

The firm's problem is to maximize its profits taking as given an (inverse)
demand curve. There are two options for the type of competition faced
by the firm: Bertrand competition where firms choose prices $\left(p\right)$
and Cournot competition where firms choose over quantities $\left(y\right)$.
In either case the firms use the demand curve they face to map the
choice over one variable into the effects on the other (say, what
is the quantity demand if a given price is chosen). We introduce a
sub-index $i$ to denote the firm.
\[
\max\,p_{i}y_{i}-C_{i}\left(y_{i}\right)\qquad\text{s.t. }p_{i}=D_{i}\left(y_{i}\right)
\]
where $C_{i}\left(y\right)$ gives the cost to firm $i$ of producing
$y$ units of the good and $D_{i}\left(y\right)$ is the (inverse)
demand faced by firm $i$. We show a special case of the cost function
below and explore various demand systems that shape markups in the
sub-sections that follow.

The optimal behavior of the firm does not depend on whether it is
choosing prices à la Bertrand or quantities à la Cournot. The optimal
choice is to set prices as a markup over the marginal cost, with the
markup determined by the elasticity of demand $\varepsilon_{i}\equiv-\left(\frac{\partial\log p_{i}}{\partial\log y_{i}}\right)^{-1}$,
\[
p_{i}=\frac{1}{1-\frac{1}{\varepsilon_{i}}}C_{i}^{\prime}\left(y_{i}\right),
\]
The markup is $\mu_{i}^{m}=\nicefrac{1}{1-\frac{1}{\varepsilon_{i}}}$.
The difference between forms of competition is the value of the elasticity
of demand and hence markups, prices, and output levels.

The implication of this result is that the scale of production can
differ across firm for two reasons: they can have different marginal
costs (as captured by differences in their cost function $C_{i}$)
or face different elasticities of demand (as captured by $\varepsilon_{i}$).
Of course both reasons can be active at the same time. Firms can differ
in their productivity, leading to differences in scale that can affect
the elasticity of demand. The elasticity is in general not constant
and can depend on how much of a good is being demanded. There can
also be differences in preferences for goods that make the elasticity
of one firm higher or lower than that of other goods.

The models shown in the following sections incorporate these ideas
into markets where there is competition among producers of different
varieties of goods.

**Equivalence of Bertrand and Cournot competition**

Lets start with Bertrand. The first order condition of the firm is
\begin{align*}
\frac{\partial}{\partial p_{i}}\left(p_{i}y_{i}-C_{i}\left(y_{i}\right)\right) & =0\\
y_{i}+p_{i}\frac{\partial y_{i}}{\partial p_{i}}-C_{i}^{\prime}\left(y_{i}\right)\frac{\partial y_{i}}{\partial p_{i}} & =0\\
1+\frac{p_{i}}{y_{i}}\frac{\partial y_{i}}{\partial p_{i}}-\frac{C_{i}^{\prime}\left(y_{i}\right)}{p_{i}}\frac{p_{i}}{y_{i}}\frac{\partial y_{i}}{\partial p_{i}} & =0\\
1+\left(\frac{\partial\log p_{i}}{\partial\log y_{i}}\right)^{-1}\left(1-\frac{C_{i}^{\prime}\left(y_{i}\right)}{p_{i}}\right) & =0\\
1-\varepsilon_{i}\left(1-\frac{C_{i}^{\prime}\left(y_{i}\right)}{p_{i}}\right) & =0\\
\frac{1}{1-\frac{1}{\varepsilon_{i}}}C_{i}^{\prime}\left(y_{i}\right) & =p_{i}
\end{align*}
The same result arises under Cournot (but in fewer steps).
\begin{align*}
\frac{\partial}{\partial y_{i}}\left(p_{i}y_{i}-C_{i}\left(y_{i}\right)\right) & =0\\
p_{i}+y_{i}\frac{\partial p_{i}}{\partial y_{i}}-C_{i}^{\prime}\left(y_{i}\right) & =0\\
1+\frac{y_{i}}{p_{i}}\frac{\partial p_{i}}{\partial y_{i}}-\frac{C_{i}^{\prime}\left(y_{i}\right)}{p_{i}} & =0\\
1-\frac{1}{\varepsilon_{i}}-\frac{C_{i}^{\prime}\left(y_{i}\right)}{p_{i}} & =0\\
\frac{1}{1-\frac{1}{\varepsilon_{i}}}C_{i}^{\prime}\left(y_{i}\right) & =p_{i}
\end{align*}

**Cost minimization with constant-returns-to-scale**

It is useful to separate the problem of the firm into an inner-step
of cost minimization that produces the cost function and an outer-step
of profit maximization that gives markups (as above).

A special case arises when the production function of the firm has
constant returns to scale. In this case the marginal cost is constant,
that is, $C_{i}^{\prime}\left(y\right)=c_{i}$. The linearity of the cost
function is an immediate consequence of the cost function inheriting
the homogeneity of degree one of the production function.

Moreover, we can choose a single input, say labor, and express all
choices of the firm directly over that input, as the value of other
inputs and of total output vary linearly with it. This is the underlying
reason for many applications to focus on simple production functions
that are linear on labor and have a marginal cost of $\nicefrac{w}{z}$,
with $z$ being the firm's productivity.

Consider the problem of a firm that use multiple inputs $\left\{ x_{k}\right\} _{k=1}^{K}$
in addition to labor to produce:
\[
y_{i}=\tilde{z}_{i}F\left(x_{1},\ldots,x_{K},n_{i}\right),
\]
where the function $F$ is strictly concave, twice continuously differentiable,
and has constant returns to scale.

Let the prices of inputs be $\left\{ \tilde{p}_{k}\right\} _{k=1}^{K}$
and $\tilde{w}_{\ell}$ respectively. We know from the firm's optimality
condition that:
\[
\tilde{z}_{i}F_{k}\left(\frac{x_{1}}{n_{i}},\ldots,\frac{x_{K}}{n_{i}},1\right)=\tilde{p}_{k}
\]
recalling that, because of Euler's theorem, $F_{k}$ is homogeneous
of degree zero for every $k$. These equations define a square system
in the ratio ratio of each input $x_{k}$ to labor. The system has
a solution that gives the ratios in terms of parameters:
\[
\frac{x_{k}}{n_{i}^{j\ell}}=g_{k}\left(\tilde{z}_{i}^{j\ell},\tilde{p}_{1},\ldots,\tilde{p}_{K}\right)
\]
The existence of a solution follows from the inverse function theorem
applied to the function $\nabla_{x}F:\mathbb{R}_{++}^{K}\to\mathbb{R}_{++}^{K}$,
where the operator $\nabla_{x}$ gives the first derivatives of $F$
with respect to the variables $\left\{ x_{k}\right\} _{k=1}^{K}$.
Note that the Jacobian of $\nabla F$ is given by the first $K$ rows
and columns of the Hessian of $F$, which is negative definite for
all interior points by the strict concavity of $F$. The negative
definiteness of the Jacobian ensures the invertibility of $\nabla_{x}F$.

Given the system's solution we express the production function in
terms of labor alone:
\[
y_{i}=\tilde{z}_{i}F\left(\frac{x_{1}}{n_{i}},\ldots,\frac{x_{K}}{n_{i}},1\right)n_{i}=z_{i}n_{i}
\]
where we define the effective productivity of labor as $z_{i}\equiv\tilde{z}_{i}F\left(\nicefrac{x_{1}}{n_{i}},\ldots,\nicefrac{x_{K}}{n_{i}},1\right)$
with the ratios $\nicefrac{x_{k}}{n_{i}}$ given by the solution to
the system defined above. Thus, $z_{i}$ is a function of productivity
$\tilde{z}_{i}$ and the price of the other inputs. It is now possible
to use this linear production function in labor instead of the original
production function $F$ on many inputs.

Finally, the cost of labor must take into account that other inputs
react to changes in labor according to the proportionality defined
by $\left\{ g_{k}\right\} _{k=1}^{K}$. Then, the cost of the firm
is given by:
\begin{align*}
\sum_{k=1}^{K}\tilde{p}_{k}x_{k}+\tilde{w}n_{i} & =\underbrace{\left(\sum_{k=1}^{K}\tilde{p}_{k}\frac{x_{k}}{n_{i}}+\tilde{w}\right)}_{\text{Effective Labor Cost }w}n_{i}=wn_{i}
\end{align*}
where $wn_{i}$ represents the cost of goods sold, and $w$ is not
directly the wage, but a measure of costs that takes into account
the price of other inputs and the change in their demand in response
to changes in the firm's labor demand.

Finally, it is equivalent to express the problem in terms of labor
or output as profits can be written as
\[
p_{i}y_{i}-\underbrace{\frac{w}{z_{i}}y_{i}}_{C_{i}\left(y_{i}\right)}\longleftrightarrow p_{i}z_{i}n_{i}-wn_{i}
\]
Accordingly, we will simplify the notation in the rest of this section
and work with a linear cost function $C_{i}\left(y\right)=c_{i}y$.
