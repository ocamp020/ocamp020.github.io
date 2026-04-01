<a id="ref-part-heterogeneous-agent-models" class="course-anchor"></a>
# The Income Fluctuations Model and Precautionary Savings

> Part: Heterogeneous Agent Models

The basic form of the heterogeneous agent model is built to generate
ex-post household heterogeneity and to be consistent (as much as possible)
with the neoclassical growth model. However, unlike the neoclassical
growth model, there are no aggregate shocks.

The economy is populated by a continuum of households who are ex-ante
identical. That means that they have the same preferences and the
solve the same problem. These households are subject to idiosyncratic
income shocks. These shocks are most often interpreted as variation
in the household's labor-income. The households have access to a savings
technology in the form of assets (or bonds) that pay the same return
$r$ in all states (corresponding to the value of the income shocks
of the households). Households are further subject to a borrowing
constraint, so that their (net) assets have to be above a given lower
bound $\underline{a}$.

The problem of the household is (by construction) almost identical
to the household problem in the Recursive Competitive Equilibrium
of the neoclassical growth problem:
\begin{align*}
V\left(\epsilon,a\right) & =\max_{\left\{ c,\ell,a^{\prime}\right\} }\,u\left(c,\ell\right)+\beta E\left[V\left(\epsilon^{\prime},a^{\prime}\right)|\epsilon\right]\\
& \text{s.t. }c+a^{\prime}=\left(1+r\right)a+wf\left(\epsilon,\ell\right)\qquad a^{\prime}\geq\underline{a}
\end{align*}
In this problem the household is subject to shocks $\epsilon$ to
their earning ability, as before we assume that $\epsilon$ follows
a Markov process with transition function $Q$. The household can,
in principle, choose how much to work but how $\epsilon$ determines
how labor is translated into earnings. Savings take the form of assets
$a$.

We are already setting the problem in its stationary form, as evidenced
by the fact that prices $\left(r,w\right)$ are constant. We will
formalize this idea later when we provide the notion of equilibrium.

**Precautionary Savings and the Rate of Return**

An important aspect of this problem is that, unlike that of the planner
in the neoclassical growth model, the returns to assets are constant.
That is, there is no curvature in the budget constraint. This is of
course a consequence of the household being a price taker. Tied to
this fact is the (newly introduced) disconnect between the individual's
income and the return on assets. In the representative agent economy
we discussed above, wages and returns moved in response to the same
(aggregate) conditions. Here, each household's income moves in response
to idiosyncratic factors (captured by $\epsilon$) with prices held
constant (and equal for all households).

These aspects matter because they introduce a new motive for savings
that has been termed "*precautionary savings*." To understand
this motive for savings we start by contrasting the heterogeneous
agent model we introduce here with the neoclassical growth model and
its representative agent to then contrast them with what is happening
in the new model.

**Savings and returns in a representative agent world**

Savings in the neoclassical growth model are determined by the inter-temporal
trade-off of spending resources in the present in order to receive
returns in the future. These returns corresponded to the marginal
product of the capital being accumulated through savings. The representative
household's Euler equation is
\[
u_{c}\left(C,L\right)=\left(1+r\right)\beta E\left[u_{c}\left(C^{\prime},L^{\prime}\right)\right].
\]
In steady state with no aggregate fluctuations (the corresponding
version of the stationary recursive competitive equilibrium we will
study below) we have the standard result that the return on assets
is equal to the (inverse of the) inter-temporal rate of discount
\[
1+r=\nicefrac{1}{\beta}.
\]
This is a no-arbitrage expression. Without any risk (exogenous variation
in future values of consumption and leisure), the household is indifferent
between saving an extra unit of goods or not. In other words, because
$\left(1+r\right)\beta=1$ the discounted value of the returns is
the same as the present cost of the goods being saved. This indifference
condition prevents the (representative) household from engaging in
arbitrage. For instance, if $1+r<\nicefrac{1}{\beta}$ the household
would want to borrow infinitely. The linearity (lack of curvature)
of the household's budget introduces the same forced discussed before
in the context of a firm with constant returns to scale technology.
In the same way, the equilibrium level of capital (wealth or assets)
is not determined by supply (which is perfectly elastic given the
no-arbitrage condition above) but demand-determined. The curvature
that sets the steady state level of capital comes from the firm's
capital demand, that requires that
\[
1+r=f_{k}\left(z,K,L\right)+1-\delta.
\]
Together these conditions provide the standard steady state condition
for the neoclassical growth model
\[
f_{k}\left(z,K,L\right)-\delta=\frac{1}{\beta}-1,
\]
equating the steady state marginal product of capital with the rate
of inter-temporal discount.

Beyond determining the level of aggregates in steady state, the results
above have an important economic interpretation. The sole determinant
of the level of capital in the economy is the curvature of the production
function (that determines the marginal productivity of capital) relative
to the household's rate of discount. The household's saving motive
is one of future use of capital. That is, capital is accumulated to
be used. This logic is transformed in the heterogeneous agent model
as we see below.

**Idiosyncratic risk and the stationary rate of return**

The introduction of *idiosyncratic and uninsurable risk* to
the model (via income fluctuations and incomplete markets) results
in a new saving motive for households. They want to have savings "just
in case something happens." Under this logic, assets are not accumulated
with the objective of using them (say for production) but rather with
the object of not using them! Savings, even in non-state-contingent
assets provide a form of self-insurance against idiosyncratic income
fluctuations. Households with currently high incomes (relative to
their long-run average) accumulate assets in anticipation of potentially
low incomes to come (they save hoping that those savings won't be
needed, but knowing that they will). Households with low income can
partially insure themselves by drawing on their savings. Here is where
the borrowing constraint bites, as it prevents better insurance by
limiting the debt that households can accumulate. This turns out to
be a crucial factor determining the equilibrium aggregates in the
economy.

The households' Euler equation is
\[
u_{c}\left(c_{i},\ell_{i}\right)=\left(1+r\right)\beta E_{\epsilon_{i}^{\prime}}\left[u_{c}\left(c_{i}^{\prime},\ell_{i}^{\prime}\right)|\epsilon_{i}\right].
\]
Even though prices and aggregates do not change, the expectation over
future idiosyncratic shocks is still relevant. Moreover, because households
are heterogeneous (with different asset and income levels), the Euler
equation necessarily implies that some households save while other
dissave, depending on the value of their current and expected consumption.
Unlike the normal savings motives explained above, the household wants
to save because their current income is higher than their expected
future income, this will happen for some household regardless of the
relationship between the rate of return and the rate of discount.
Of course, more households are willing to save if there is a higher
rate of return or a higher rate of discount, and vice-versa.

What happens then with the relationship between the rate of return
and the rate of discount in equilibrium? [Aiyagari (1994)](https://doi.org/10.2307/2118417)
shows that it must be that case that
\[
1+r<\nicefrac{1}{\beta}.
\]
The reason is a combination of the fact that households are heterogeneous
(facing idiosyncratic labor income risk) and that the presence of
the borrowing constraint that introduces a key asymmetry to the problem.
It cannot be that $1+r>\nicefrac{1}{\beta}$ because then the Euler
equation would imply that consumption must have an upward drift (that
is, that it must be expected to increase). This means that households
want to save always. Because households are infinitely lived, this
implies that assets (and consumption) tend to infinity. This cannot
be a solution. See [Aiyagari (1994, footnote 20)](https://doi.org/10.2307/2118417) for a formal
argument. The same thing occurs if $1+r=\nicefrac{1}{\beta}$. The
reason lies in the desire for self-insurance as the household wants
to have constant (expected) marginal utility over time. Once again,
because the household is infinitely lived, they face the risk of an
arbitrarily long sequence of low-income shocks. In order to insure
against that, the household needs an arbitrarily large stock of savings.
This is feasible because, with $1+r=\nicefrac{1}{\beta}$, it is costless
for the household to transform current consumption into savings.

Therefore, it must be that $1+r<\nicefrac{1}{\beta}$ in equilibrium.
Under complete markets this would lead the household to accumulate
infinite debt. The borrowing constraint prevents this from happening.
Instead, there is a positive mass of households who de-accumulate
assets and hit the constraint (following a series of low income shocks),
while other households accumulate assets when they have higher levels
of income. The properties of the optimal saving function in this income-fluctuation
problem are explored in [Huggett (1993, Theorem I)](https://doi.org/10.1016/0165-1889(93)90024-M), [Aiyagari (1994, Sec. III, The Individual's Problem)](https://doi.org/10.2307/2118417),
and more explicitly in [Achdou et al. (2022)](https://doi.org/10.1093/restud/rdab002).

What does this imply for the aggregate level of assets (or capital)
in the economy? [Huggett (1993)](https://doi.org/10.1016/0165-1889(93)90024-M) and [Aiyagari (1994)](https://doi.org/10.2307/2118417)
show that the level of assets in the incomplete-markets/heterogeneous-agent
economy must be larger than in its complete-markets/representative
agent counterpart. The additional assets (relative to complete markets)
capture the role of precautionary savings. [Angeletos (2007)](https://doi.org/10.1016/j.red.2006.11.001)
later showed that, even though aggregate assets are always higher
under labor-income risk, they can be increased or decreased under
capital-income risk (also called investment or production risk), even
though $1+r<\nicefrac{1}{\beta}$ still holds.

The relationship between the rate of return and the rate of discount
also has implications for a long-standing debate on the return to
equity and the return to safe assets. While the observed risk-free
interest rates (i.e. those on Treasury bills), were around 1\
average real return to equity was around 7\
matched by calibrating existing representative-agent models. In particular,
these models predicted risk-free rates and equity premiums that were
too large and too small, respectively. [Huggett (1993)](https://doi.org/10.1016/0165-1889(93)90024-M) provides
a partial answer for the relatively low risk-free rates by introducing
uninsurable income risk. Because of the borrowing constraint, agents
are restricted in the level of their indebtedness. However, agents
are not restricted from accumulating saving. A low risk-free rate
is then needed to persuade agents not to accumulate large credit balances
so that the credit market can clear, as we will see in the next section.
[Angeletos (2007)](https://doi.org/10.1016/j.red.2006.11.001) revisits these results in a production
economy with returns to private equity.

**An example: Log utility**

Consider a concrete example where utility is $u\left(c\right)=\log c$.
In this case the Euler equation becomes
\[
\frac{1}{c_{i}}\;=\;\left(1+r\right)\beta E_{\epsilon_{i}^{\prime}}\left[\frac{1}{c_{i}^{\prime}}|\epsilon_{i}\right].
\]
Recall that agents are risk averse, so that marginal utility is convex
(as utility is concave). In this case this has an immediate consequence
for the expected marginal utility of future consumption (see Jensen's
inequality),
\[
E_{\epsilon_{i}^{\prime}}\left[\frac{1}{c_{i}^{\prime}}|\epsilon_{i}\right]\;=\;\frac{1}{E_{\epsilon_{i}^{\prime}}\left[c_{i}^{\prime}|\epsilon_{i}\right]}\left(1+\Delta\right),
\]
with larger $\Delta$ capturing more consumption risk for the agent
(note that if there is no risk then $E_{\epsilon_{i}^{\prime}}\left[\frac{1}{c_{i}^{\prime}}|\epsilon_{i}\right]=\frac{1}{E_{\epsilon_{i}^{\prime}}\left[c_{i}^{\prime}|\epsilon_{i}\right]}$
and $\Delta=0$.

Replacing back we get a condition relating the expected growth rate
of consumption, its drift, with the discounted returns and the risk
faced by the agent:
\[
\underbrace{\frac{E_{\epsilon_{i}^{\prime}}\left[c_{i}^{\prime}|\epsilon_{i}\right]}{c_{i}}}_{\text{Consumption Drift}}=\;\left(1+r\right)\beta\left(1+\Delta\right)\;>\;\left(1+r\right)\beta.
\]
So, the risk faced by consumers makes it so that the expected drift
of consumption is necessarily higher than $\left(1+r\right)\beta$.
This is what is capturing the precautionary savings motives.

The offshoot of this is that we require $\left(1+r\right)\beta<1$.
If $\left(1+r\right)\beta\geq1$, the drift would surely be positive
(the expected growth rate would be higher than 1), leading to all
agents to accumulate infinite assets and have infinite consumption
in the limit (the drift is positive for everyone, always, forever).
This ends up violating the transversality conditions of the problem,
so that it has no well-defined value. It must be that $\left(1+r\right)\beta<1$.
In this case there is heterogeneity in the drift of consumption between
agents. Agents facing little risk, like wealthy agents who can self-insure
against income fluctuations, have a low $\Delta$ (the "Jensen"
wedge in the Euler equation), that is, low precautionary motives for
savings. Their savings are instead dictated by the usual present bias
versus return tradeoff. Because $\beta\left(1+r\right)<1$, this tradeoff
lands in favor of de-accumulating assets and having a negative drift
for consumption. This is key because it ensures that there is a stationary
distribution pulling back wealthy agents who stop accumulating assets.
To the contrary, agents who face more risk, like poorer agents cannot
self-insure, want to save despite the incentives for dissaving. This
prevents them from getting trapped in the bottom end of the distribution.
They save, despite being asset-poor, in order to insure against risk,
not because of higher returns.

**Closing the model: What about production?**

To close the model we need to specify where output comes from. We
will do this below looking at the two main alternatives: an endowment
economy (without firms) as modeled in [Huggett (1993)](https://doi.org/10.1016/0165-1889(93)90024-M) and
a production economy as modeled in [Aiyagari (1994)](https://doi.org/10.2307/2118417). The
firms are in any case kept as simple as possible, loading all the
heterogeneity into the households.
