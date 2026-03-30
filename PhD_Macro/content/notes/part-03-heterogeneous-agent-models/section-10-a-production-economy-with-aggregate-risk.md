# A Production Economy with Aggregate Risk

> Part: Heterogeneous Agent Models

There is, of course one critical aspect missing from the previous
models: aggregate risk. In all of them, there is only idiosyncratic
variation affecting households, but leaving aggregates unchanged.
Hence the focus on the stationary recursive competitive equilibria
of those economies.

The next step is to introduce aggregate fluctuations into the Aiyagari
economy. [Krusell and Smith (1998)](https://doi.org/10.1086/250034) is the first paper to accomplish
this taking (essentially) the same economy presented in the previous
question and making $z$, the productivity of the firm, stochastic.
Assume it follows a Markov process with transition function $Q_{z}$.
We will write the (recursive) household problem later, but first we
need to discuss the implications of aggregate shocks.

The re-introduction of aggregate productivity means that we are back
at the problem of Section ,
but with the added difficulty of having a time-varying distribution
of households. The key issue is, as before, determining what is the
relevant state of the household problem. The state must (*i*)
contain all the information needed to solve the problem, including
prices, and (*ii*) be updated to compute continuation values,
as well as expectations over prices and other variables.

In Section
this problem was solved by keeping track of the aggregate capital
stock $K$ and imposing consistency between the transition function
of the aggregate capital stock and the savings function of the representative
household $\left(G_{K}=g_{a}\right)$. The key was that the aggregate
capital stock was the only object needed to compute prices and solve
the household problem.

Unfortunately, there is no longer an immediate correspondence between
aggregate capital and individual assets. Aggregate capital is still
enough to compute prices (as discussed at the end of the previous
section), but to know its value we have no option but to integrate
over the asset holdings of households with respect to the (time-varying)
distribution of households
\[
K_{t}=\int\int a\cdot d\Gamma_{t}\left(\epsilon,a\right).
\]
Further, in order to update the aggregate capital, it becomes necessary
to update the distribution itself $\Gamma_{t+1}=T_{t}^{\star}\Gamma_{t}$
using the adjoint Markov operator of the process induced by households'
saving choices.

The outcome of this is that aggregate capital is no longer a viable
state and that instead the households need to keep track of the whole
distribution $\Gamma$ and its evolution. However, the evolution of
the distribution itself is state dependent as it reflects the households'
saving choices that respond to the aggregate state of the economy.

**Recursive competitive equilibrium**

A RCE is a set of a value function $\left(V\right)$, a policy function
$\left(a^{'}\right)$, a state-dependent transition function for the
distribution $\left(T^{\star}\right)$, and price functions $\left(R,W\right)$
such that:

1. Given the functions $\left(R,W\right)$ and the transition function
for the distribution $\left(T^{\star}\right)$, the value and policy
functions solve the households' dynamic programming problem
\begin{align*}
V\left(\underbrace{\epsilon,a}_{\text{Ind. State}},\underbrace{z,\Gamma}_{\text{Agg. State}}\right) & =\max_{\left\{ c,a^{'}\right\} }\,u\left(c\right)+\beta E\left[V\left(\epsilon^{'},a^{'},z^{'},\Gamma^{'}\right)|\epsilon,z,\Gamma\right]\\
& \text{s.t. }c+a^{'}=\left(1+R\left(z,\Gamma\right)\right)a+W\left(z,\Gamma\right)\epsilon\qquad a^{'}\geq\underline{a}\qquad\Gamma^{'}=T^{\star}\Gamma
\end{align*}
$T^{\star}$'s dependence on the aggregate state is omitted from the
notation for simplicity. Alternatively, we can write $\Gamma^{'}=H\left(z,\Gamma\right)$
for a transition function $H$. We can also write prices as functions
of productivity and aggregate capital, $r=R\left(z,K\right)$ and
$w=W\left(z,K\right)$.
1. The transition function for the distribution of agents corresponds
to the adjoint Markov operator of the endogenous Markov process defined
by the (exogenous) Markov processes for $\epsilon$ and $z$ with
Transition function $Q$ and $Q_{z}$ and the (endogenous) policy
function for $a^{'}$.
\[
\Gamma^{'}\left(S_{\epsilon},A\right)=T^{\star}\Gamma\left(S_{\epsilon},A\right)=\int_{\overline{S}}\int_{\overline{A}}\underbrace{g\left(\epsilon,a,z,\Gamma\right)\cdot\text{Pr}\left(\epsilon^{'}\in S_{\epsilon}|\epsilon\right)}_{\text{Markov Kernel}:P\left(\epsilon^{'},a^{'}|\epsilon,a;z,\Gamma\right)}\cdot d\Gamma\left(\epsilon,a\right)
\]
where
\[
g\left(\epsilon,a,z,\Gamma,A\right)=\begin{cases}
1 & \text{if }a^{'}=g_{a}\left(\epsilon,a,z,\Gamma\right)\in A\\
0 & \text{otw}
\end{cases}.
\]
1. The capital and labor markets clear. That is, aggregate capital reflects
the aggregate assets of the households and aggregate labor demand
equals the supply of ``efficiency units of labor'' from the household
\[
K=\int\int a\cdot d\Gamma\left(\epsilon,a\right)\qquad L=\int\int\epsilon\cdot d\Gamma\left(\epsilon,a\right)\left(=1\right).
\]
Note that the aggregate capital is a function of the distribution
of households, $K\left(\Gamma\right)$.
1. Prices are consistent with firm optimization (in this case cost-minimization)
\[
r=f_{k}\left(z,K,L\right)-\delta\qquad w=f_{L}\left(z,K,L\right).
\]
This implies
\[
R\left(z,K\right)=f_{k}\left(z,K,1\right)-\delta\qquad W\left(z,K\right)=f_{L}\left(z,K,1\right).
\]
The version with prices depending on the distribution $\Gamma$ rather
than on aggregate capital makes it explicit that the underlying state
determining capital is the distribution $\Gamma$.

The definition of the RCE makes the problems introduced by aggregate
fluctuations apparent. It is impossible to keep track of the whole
distribution of households and generate a state-dependent transition
function that is consistent with household optimization.

The main break-through in [Krusell and Smith (1998)](https://doi.org/10.1086/250034) is providing
a computational method that can approximate the solution to the RCE.
The key of the algorithm is already present in the discussion of the
RCE in Section
and of the S-RCE of the Aiyagari economy above. The distribution of
households is only really needed to compute the aggregate capital
level, $K$. Notably, this corresponds to the first moment of the
wealth distribution. The reason only aggregate capital is needed is
that it is sufficient to compute prices. The challenge is that we
also need to know how aggregate capital evolves, that is, we need
a transition function for aggregate capital. However, the evolution
of capital depends on the whole distribution.

[Krusell and Smith (1998)](https://doi.org/10.1086/250034) solve the problem by proposing an
approximate law of motion for capital that depends on moments of the
wealth distribution. In principle, if enough moments are taken into
account they can sufficiently summarize the information in the wealth
distribution. If the approximation works the problem of keeping track
of the entire distribution can be reduced to the (much simpler) problem
of keeping track of a finite set of moments.

In practice, the rational expectation assumption is partly lifted.
Instead of forming exact expectations over the distribution of wealth
with knowledge of the transition function $T^{\star}$, households
use a (log-)linear model to forecast future moments of the distribution
using its current moments and the aggregate productivity. For instance
\[
\log K^{'}=f\left(z,\log K,\left(\log K\right)^{2}\right)=\alpha\left(z\right)+\beta\left(z\right)\log K+\gamma\left(z\right)\left(\log K\right)^{2},
\]
where the coefficients depend on the values of $z$. The solution
method proposed in the paper finds coefficients that (almost exactly)
match the evolution of capital. When $z$ is discrete there are finitely
many coefficients to find. The surprising result in the implementation
of the solution is that $\gamma\left(z\right)=0$, implying that only
the first moment is required to approximate the evolution of aggregate
capital.

\begin{algorithm}[tbh!]
\caption{Krusell-Smith Algorithm}
\hrule
{**Algorithm**}
\BlankLine
\SetKwInOut{Input}{input}\SetKwInOut{Output}{output}
\Input{Guess for coeficients $\alpha(z),\;\beta(z)$}
\Output{$V,a^{'},\Gamma$}
\BlankLine
1. Solve the DP problem of the agent given market clearing prices $(R(z,K),W(z,K))$ and the transition function for $K$ parameterized by $\alpha(z),\;\beta(z)$: \\ $\qquad (V,a^{'})=T(V;\alpha,\beta)$ \textcolor{gray}{(a fixed point problem)}. Note that markets will clear by construction. \;
\smallskip
2. Use the policy function and the Markov processes for $\epsilon$ and $z$ to simulate a long panel of the economy. \, In doing this update the distribution using the appropriate Markov operator.  Use the distribution to compute aggregate capital. \,Record the time series for aggregate capital and productivity.  \;
\smallskip
3. Regress capital on moments to update the coefficients allowing for state-dependent coefficients by the level of productivity.  \;
\smallskip
4. Repeat (1)-(3) until prices converge and guarantee that the $R^2$ of the regression is close to 1. \;
\hrule
\BlankLine
\end{algorithm}

**Approximate aggregation**

The main result in [Krusell and Smith (1998)](https://doi.org/10.1086/250034) is that, as it
turns out, it is sufficient to only keep track of the first moment
of the wealth distribution in order to accurately approximate the
aggregate states of the model. That is, aggregate capital is (approximately)
the relevant aggregate state for the households in the economy, just
at in the neoclassical growth model of Section .
However, we know while there is exact aggregation in the neoclassical
growth model (allowing for a representative agent), there is no such
aggregation result in the Aiyagari economy. This led Krusell and Smith
to term their result ``*approximate aggregation*.'' They write
\begin{quote}
``Our main insight is that the macroeconomic model with heterogeneity
features approximate aggregation. By approximate aggregation, we mean
that, in equilibrium, all aggregate variables---consumption, the
capital stock, and relative prices---can be almost perfectly de-
scribed as a function of two simple statistics: the mean of the wealth
distribution and the aggregate productivity shock.''
\end{quote}
This result makes the model solvable in practice by reducing the dimensionality
of the problem.

Where does approximate aggregation come from? Why does it work? The
key is that even with a single non-state-contingent asset the households
can achieve a great deal of insurance, effectively smoothing out the
fluctuations in their marginal utility of consumption, in the same
way that a representative household would. The outcome of this is
that households in the heterogeneous agent economy behave (approximately)
as scaled-versions of the representative household (except for those
that are borrowing-constrained). [Krusell and Smith (1998)](https://doi.org/10.1086/250034) explain
it as follows:
\begin{quote}
``The key insight is related to earlier findings from similar models
that utility costs from fluctuations in consumption are quite small
and **that self-insurance with only one asset is quite effective**.
Self-insurance in our model is not very effective in terms of smoothing
individual relative to aggregate consumption; for example, the unconditional
standard deviation of individual consumption is about four times that
of aggregate consumption, and the unconditional correlation of the
consumption of any two agents is very close to zero. However,**
in utility terms, agents in our stationary equilibria are insured
well enough that the marginal propensity to save out of current wealth
is almost completely independent of the levels of wealth and labor
income**, except at the very lowest levels of wealth. Furthermore,
although some very poor agents have substantially different marginal
savings propensities at any point in time, the fraction of total wealth
held by these agents is always very small (this is particularly true
in the model with a realistic wealth distribution). Because it is
so small, **higher-order moments of the wealth distribution
simply do not affect the accumulation pattern of total capital, even
though these moments do move significantly over time**.'' {[}emphasis
added{]}
\end{quote}
This is (at its core) the same reason behind the inability of Aiyagari
economies based on labor-income risk to generate realistic distributions
of wealth, as explained in [Benhabib and Bisin (2018)](https://doi.org/10.1257/jel.20161390) and [Stachurski and Toda (2019)](https://doi.org/10.1016/j.jet.2019.04.001); [Stachurski and Toda (2020)](https://doi.org/10.1016/j.jet.2020.105066).
As households' move away from the collateral constraint, their saving
functions tend to be linear. This limit behavior means that households
can be (approximately) aggregated and is what explains the similar
marginal propensity to consume referenced in the passage above.

The approximate aggregation result has also misleadingly led to thinking
that heterogeneity does not matter for aggregate fluctuations. That
is not the case as shown in [Krusell and Smith (1998)](https://doi.org/10.1086/250034) and their
concurrent paper [Krusell and Smith (1997)](https://doi.org/10.1017/S1365100597003052). Approximate aggregation
follows from the limit behavior of saving rates in the model, and
not from the irrelevance of heterogeneity. Rather, it is because the
baseline Aiyagari economy inability to reproduce the observed levels
of wealth inequality that Krusell and Smith obtain their (in)famous
irrelevance result. They write
\begin{quote}
``When the representative-agent model is altered only by adding idiosyncratic,
uninsurable risk, the resulting stationary wealth distribution is
quite unrealistic: there are too few very poor agents, and much too
little concentration of wealth among the very richest. For this reason,
we consider a version of the model with preference heterogeneity {[}...{]}
We show that this model does succeed quite well in matching the key
features of the wealth distribution. {[}...{]} in the aggregate, we
observe a significant departure from permanent income behavior, in
contrast to standard representative-agent models.''
\end{quote}
In fact, the extended model in [Krusell and Smith (1997)](https://doi.org/10.1017/S1365100597003052) also attempts
to better match the observed distribution of wealth (an elusive target
for the literature). They also find a relevant role for heterogeneity
in shaping the aggregates of the economy. The reason wealth concentration
matters is that it generates (endogenously) a mass of households that
act in a ``hand-to-mouth'' fashion. These households are not able
to effectively insure against aggregate fluctuations and behave markedly
different from the representative agent (that is never against the
borrowing constraint and behaves like a permanent-income agent, smoothing
consumption).

Similarly, [Angeletos (2007)](https://doi.org/10.1016/j.red.2006.11.001) shows that introducing capital-income
risk in the form of risky portfolios implies significant departures
from the representative agent baseline. He writes
\begin{quote}
``{[}S{]}ignificant general-equilibrium effects on savings and income
are both empirically plausible and consistent with low private-equity
premia {[}...{]} the macroeconomic effects of idiosyncratic investment
risk can be both qualitatively distinct from those of idiosyncratic
labor-income risk and quantitatively significant.''
\end{quote}
Other papers that highlight the importance of heterogeneity for aggregate
fluctuations are: [Kaplan et al. (2018)](https://doi.org/10.1257/aer.20160042), [Ahn et al. (2018)](https://doi.org/10.1086/696046)
[Kaplan and Violante (2022)](https://doi.org/10.1146/annurev-economics-080217-053444). See [Kaplan and Violante (2018)](https://doi.org/10.1257/jep.32.3.167)
in the Journal of Economic Perspectives for a non-technical summary
of the HANK literature. One important aspect of these papers is highlight
the role of portfolio composition and illiquid assets in generating
a group of wealthy-hand-to-mouth households who, despite being at
the top of the wealth distribution, behave as borrowing constraint
agents because their wealth is not readily accessible to produce insurance
(as is the case with housing).

**Modern solution methods**

In a concurrent article, [Haan (1997)](https://doi.org/10.1017/S1365100597003040) develops an alternative
solution method that parametrizes the distribution of wealth on a
standard polynomial basis, this reduces the dimensionality of the
problem. Rather than track the infinite-dimensional distribution and
its transition function, Den Haan's method searches for vector of
parameters that approximate the functions on a given polynomial basis.
One important advantage of this method is that it does not rely on
imprecise Monte Carlo simulations of the model in order to obtain
a solution. This method has been extended, for instance in [Winberry (2018)](https://doi.org/10.3982/QE740).

An alternative that has proven to be effective is using Perturbation
methods, as in [Reiter (2009)](https://doi.org/10.1016/j.jedc.2008.08.010). The best application of this
is [Auclert et al. (2021)](https://doi.org/10.3982/ECTA17434) which is currently
the best method to solve heterogeneous agent models with aggregate
fluctuations.

We now focus on the firm problem and one of two main ways in which
we can introduce firm heterogeneity into macroeconomic models. Technically,
the impediment to meaningful firm heterogeneity lies in the combination
of constant returns to scale and price-taking (or perfect competition)
behavior. These features imply that the choices of all firms are scaled-versions
of one-another, allowing for exact aggregation of firms into a representative
firm. Departing from either of these features generates curvature
in the firm's problem, making firms of different sizes behave differently.
We go over the basics of each approach.
