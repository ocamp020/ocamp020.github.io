# Span of Control

> Part: Firm Heterogeneity

Models following the work of [Lucas (1978)](https://doi.org/10.2307/3003596) and [Hopenhayn (1992)](https://doi.org/10.2307/2951541)
have competitive firms that operate technologies with decreasing returns
to scale and whose owners (or managers) differ in their "managerial
talent." This is captured by differences in firms' productivity $\left(z_{i}\right)$.
More "talented" managers have a larger "span of control," that
is, their optimal firm size is larger. The decreasing returns to scale
determine how differences in talent (productivity) translate into
differences in size, but they also imply that firms make profits in
equilibrium. However, these profits are not the result of market power
but of the returns to the "managerial input." These are rents to
the fixed input that the manager owns.

While we will not cover these models in detail, we a brief description
of the problem is useful. (Note: This description follows the lecture notes by Chris Edmond: [http://www.chrisedmond.net/phd2014/90065\_lecture1.pdf](http://www.chrisedmond.net/phd2014/90065_lecture1.pdf).)
I focus on [Lucas (1978)](https://doi.org/10.2307/3003596). Lucas' model is static and is concerned
with explaining the distribution of firms. Consider a firm that produces
in two stages, first it combines capital and labor with a standard
constant-returns-to-scale technology, $y=F\left(k,n\right)$, then
that output is mixed with managerial talent to produce output, so
that total output is
\[
z_{i}g\left(y_{i}\right)=z_{i}g\left(F\left(k_{i},n_{i}\right)\right)
\]
where $g$ is strictly increasing and strictly concave. The managerial
talent $z_{i}$ is the fixed input and the concavity of $g$ implies
that there are decreasing returns to scale to the firm. The practical
implication of the decreasing returns is that (unlike with constant
returns to scale) the best manager (highest $z$) cannot use all the
resources.

We can simplify the problem by using the homogeneity of $F$ to write
output as
\[
z_{i}g\left(y_{i}\right)=z_{i}g\left(f\left(\kappa_{i}\right)n_{i}\right),
\]
where $\kappa=\nicefrac{k}{n}$ is capital per-worker and $f\left(x\right)=F\left(x,1\right)$.
This turns to be convenient because we isolate the labor demand of
firms as being affected directly by $g$. This matters because the
objective of this theory is to explain the distribution of firm size,
with size measured by employment.

The problem of a firm manager is then to choose labor and capital-per-worker:
\[
\pi\left(z\right)=\max_{\kappa,n}\,zg\left(f\left(\kappa\right)n\right)-wn-r\kappa n
\]
(note that without $g$ this problem would be linear in $n$, leading
to corner solution in scale)

The first order conditions are
\begin{align*}
zg^{\prime}\left(f\left(\kappa\right)n\right)f^{\prime}\left(\kappa\right) & =r\\
zg^{\prime}\left(f\left(\kappa\right)n\right)f\left(\kappa\right) & =w+r\kappa
\end{align*}
We can use these conditions to solve for the optimal capital-per-worker.
Dividing them gets us
\[
\frac{f\left(\kappa\right)}{f^{\prime}\left(\kappa\right)}-\kappa=\frac{w}{r}
\]
Recall that firms face competitive input markets, so prices $w$ and
$r$ are common across firms. They also operate the same technology.
The only difference is in managerial talent $\left(z\right)$. So,
this equations implicitly defines the optimal $\kappa$ for all firms.
Lets call that level $\kappa^{\star}$.

The scale of the firm is then pinned down by solving for $y^{\star}\left(z\right)$
out of
\[
zg^{\prime}\left(y^{\star}\left(z\right)\right)f^{\prime}\left(\kappa^{\star}\right)=r
\]
once we have $y^{\star}\left(z\right)$ we can also get $n^{\star}\left(z\right)=\nicefrac{y^{\star}\left(z\right)}{f\left(\kappa^{\star}\right)}$.

Lucas then uses this solution to ask about the properties of $g$
that are needed for the distribution of firms to satisfy the patterns
observed in the data. The most salient feature is known as Gibrat's
law and it captures the fact that firm growth is independent of firm
size. In particular, as factor prices change, firms (employment) will
grow (or shrink). This growth should be independent of their (employment)
size.

The size of the firm is captured by $n^{\star}\left(z_{i},w,r\right)$.
Different firms have different $z$ and hence different sizes, but
they all face the same prices. The total differential of the function
$\ln n^{\star}$ as factor prices change gives us the growth rate
of firm size,
\[
d\ln n^{\star}\left(z,w,r\right)=\frac{n_{w}^{\star}\left(z,w,r\right)}{n^{\star}\left(z,w,r\right)}dw+\frac{n_{r}^{\star}\left(z,w,r\right)}{n^{\star}\left(z,w,r\right)}dr.
\]
For this to be independent of size it must be that
\begin{align*}
\frac{\partial\left(d\ln n^{\star}\left(z,w,r\right)\right)}{\partial z} & =0
\end{align*}
for that to always be the case it must be that
\[
\frac{\partial}{\partial z}\left(\frac{n_{w}^{\star}\left(z,w,r\right)}{n^{\star}\left(z,w,r\right)}\right)=0\qquad\text{and}\qquad\frac{\partial}{\partial z}\left(\frac{n_{r}^{\star}\left(z,w,r\right)}{n^{\star}\left(z,w,r\right)}\right)=0
\]
These conditions impose restrictions over the shape of $g$. Lucas
solves these differential equations and finds that the only function
that satisfies them is $g\left(x\right)=Ax^{\alpha}$ for some constant
$A>0$ and a power $\alpha\in\left(0,1\right)$. We can verify this
directly. The optimal (inner) output size is
\[
y^{\star}\left(z\right)=\left(\alpha Az\frac{f^{\prime}\left(\kappa^{\star}\right)}{r}\right)^{\frac{1}{1-\alpha}}
\]
and so the optimal labor demand is
\[
n^{\star}\left(z\right)=\left(\frac{\alpha Az}{r}\right)^{\frac{1}{1-\alpha}}\left(f^{\prime}\left(\kappa^{\star}\right)\right)^{\frac{\alpha}{1-\alpha}}\left(\frac{w}{r}+\kappa^{\star}\right).
\]
Even though this expression looks daunting, it delivers the result
we want immediately, because it implies that the labor (size) of the
firm is log-separable in $z$ and the terms that depend on prices
$\left(w,r,\kappa^{\star}\right)$.
\[
\ln n^{\star}\left(z\right)=\frac{1}{1-\alpha}\ln z+\ln h\left(r,w\right)
\]
which deliver s the result required by Gibrat's law.

So we have a single parameter $\alpha$ that determines the (decreasing)
returns to scale of the firms. The scale parameter $A$ plays no real
role in these results and so we normalize to 1.

We can further model firm entry as a reflection of the managers' occupational
choice. People have different managerial talent, but they all have
the same skills as a worker. If a person can supply their (full) time
as either a worker or a manager then they will choose whichever delivers
them the highest income (absent any preferences or amenities, as is
the case in this model). The income as a worker is given by the wage,
$w$, and is constant across people. The income as a manager is given
by the managerial profits, $\pi\left(z\right)$, and depends on talent.
There is then a cutoff for the managerial talent, above which people
become managers. That is, a $z^{\star}$ such that
\begin{align*}
\pi\left(z^{\star}\right) & =w\\
\underbrace{z^{\star}g\left(y^{\star}\right)}_{\text{Revenue}} & =\underbrace{\quad w\quad}_{\text{Fixed Cost}}+\underbrace{wn^{\star}-r\kappa^{\star}n^{\star}}_{\text{Variable Costs}}
\end{align*}
This is a zero profit condition for the marginal manager that takes
into account their opportunity cost of not being a worker. That constitutes
the fixed cost of setting up a firm.

The work of [Hopenhayn (1992)](https://doi.org/10.2307/2951541) and the literature that it generated
extends these ideas to a dynamic setting. It also takes into account
the role of fixed set-up costs in determining firm entry.

**A special case**

We can further simply the problem if we assume that the firm operates
only with labor, so that $y=n$. Then the managerial technology is
$z_{i}n^{\alpha}$. Because there is no capital, the first order condition
is now $zg^{\prime}\left(n\right)=w$. Solving it gives us a closed-form
expression for the size of the firm as a function of managerial talent:
\[
n^{\star}\left(z\right)=\left(\frac{\alpha z}{w}\right)^{\frac{1}{1-\alpha}}.
\]
If we further assume that managerial talent is distributed Pareto
with a CDF $1-z^{-\xi}$, the distribution of firm size is also Pareto,
but with a Pareto parameter $\xi\left(1-\alpha\right)$.

To see this recall that the defining feature of the Pareto distribution
is that its counter-CDF has the form $Bn^{-p}$, with $p$ the Pareto
parameter and $B$ a constant. so we want to know $p$ from
\[
n^{-p}=1-\text{CDF}\left(n\right)=\Pr\left(\tilde{n}>n\right)=\Pr\left(\tilde{z}>\frac{w}{\alpha}n^{1-\alpha}\right)
\]
the last equality says that for a firm to have more than $n$ employees
$\left(\tilde{n}>n\right)$ it must have managerial talent $\tilde{z}$
above $\frac{w}{\alpha}n^{1-\alpha}$. We know the share of firms
satisfying that condition:
\[
\underbrace{\Pr\left(\tilde{z}>\frac{w}{\alpha}n^{1-\alpha}\right)}_{\text{Counter CDF of z}}=\left(\frac{w}{\alpha}n^{1-\alpha}\right)^{-\xi}=\left(\frac{w}{\alpha}\right)^{-\xi}n^{-\xi\left(1-\alpha\right)}
\]
this gives us our result. The employment of firms is distributed Pareto
with power $p=\xi\left(1-\alpha\right)$.

This result gives us insight over the role of the market (in this
case through the returns to managerial talent) in amplifying differences
across firms (although similar insights apply to differences in income
or wealth across individuals). First, note that all profits in this
environment are the return to the fixed (managerial) factor. The technology
$z_{i}n^{\alpha}$ makes these returns to be $1-\alpha$ of total
output (just as in the general Cobb-Douglas case, just define $x_{i}=z_{i}^{\frac{1}{1-\alpha}}$
to write output as $x^{1-\alpha}n^{\alpha}$). Then, note that the
returns to scale amplify differences in scale as $\alpha\to1$. That
is, the more scalable the technology, the larger the differences between
firms:
\[
\underbrace{\ln n_{i}-\ln n_{j}}_{\text{Diff. in Scale/Size}}=\underbrace{\frac{1}{1-\alpha}}_{\text{Tech. Amplification}}\times\underbrace{\left(\ln z_{i}-\ln z_{j}\right)}_{\text{Diff. in Managerial Talent}}.
\]
We should therefore expect larger differences in size (thicker right
tails) in industries with more scalable technologies (higher $\alpha$).
