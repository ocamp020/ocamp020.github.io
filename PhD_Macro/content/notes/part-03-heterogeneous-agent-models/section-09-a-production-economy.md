# A Production Economy

> Part: Heterogeneous Agent Models

The economy in the previous section already showcases all the key
ingredients of household heterogeneity. However, there is no production
and hence no way to to talk about returns. The $r$ in the previous
model is better understood as an attribute of a financial contract,
but not a rate of return on a productive investment. This ultimately
prevents us from drawing a clear parallel between the heterogeneous
agent economy above and the representative agent economy in the neoclassical
growth model, where prices reflect the marginal productivity of factors
used in generating the aggregate output of the economy.

The economy described in [Aiyagari (1994)](https://doi.org/10.2307/2118417) fills the next
portion of the gap between heterogeneous agent models and the representative
agent real business cycle models. The key is the move from an endowment
to a production economy. Production is (on purpose) just as in the
neoclassical growth model: there is a representative firm operating
a constant returns to scale technology, $Y=f\left(z,K,L\right)$.
As it turns out, doing this greatly simplifies market clearing. The
reason is in the discussion in Section .
The scale of operations of a firm with a constant-returns-to-scale
technology is undefined, and so prices have to be such that the firm
is indifferent between any scale. For this to happen, prices must
reflect the marginal product of inputs.

Aiyagari also interprets the value of $\epsilon$ as the value of
``labor efficiency'' instead of a direct income endowment. Under this
interpretation, income depends on labor efficiency $\left(\epsilon\right)$
and the market wage $\left(w\right)$. We assume for simplicity that
individuals do not care about leisure and thus supply one unit of
labor inelastically. As before, $\epsilon$ is stochastic and follows
a Markov process $Q$. This is the only source of variation in the
economy and the realizations of $\epsilon$ are independent across
households.

The household's problem is then
\begin{align*}
V\left(\epsilon,a\right) & =\max_{\left\{ c,a^{'}\right\} }\,u\left(c\right)+\beta E\left[V\left(\epsilon^{'},a^{'}\right)|\epsilon\right]\\
& \text{s.t. }c+a^{'}=\left(1+r\right)a+w\epsilon\qquad a^{'}\geq\underline{a}
\end{align*}
The borrowing limit must satisfy
\[
\overline{a}\geq-\frac{w\epsilon_{min}}{r}.
\]
The Euler equation is, as before,
\[
u^{'}\left(\left(1+r\right)a+w\epsilon\right)=\beta E\left[V_{a}\left(\epsilon^{'},a^{'}\right)|\epsilon\right].
\]

As above, the households take the (constant) prices as given. Their
behavior induces a Markov process over the state $\left(\epsilon,a\right)$
that is constructed in the same way as in the previous section and
results in a stationary distribution of households $\Gamma$.

The firm's cost minimization problem implies that the demand for inputs
is perfectly elastic at equilibrium prices. Therefore, the only way
to clear the market is to make producers indifferent between any scale
of production by setting
\[
r=f_{k}\left(z,K,L\right)-\delta\qquad w=f_{L}\left(z,K,L\right).
\]

**Stationary recursive competitive equilibrium**

A S-RCE is a set of a value function $\left(V\right)$, a policy function
$\left(a^{'}\right)$, a distribution $\left(\Gamma\right)$, and
prices $\left(r,w\right)$ such that:

1. Given $\left(r,w\right)$ the value and policy functions solve the
agent's problem (the dynamic programming problem above).
1. Given the policy function, $\Gamma$ is a fixed point of the adjoint
Markov operator of the endogenous Markov process defined by the (exogenous)
Markov process for $\epsilon$ with Transition function $Q$ and the
(endogenous) policy function for $a^{'}$.
1. The capital and labor markets clear. That is, aggregate capital reflects
the aggregate assets of the households and aggregate labor demand
equals the supply of ``efficiency units of labor'' from the household
\[
K=\int\int a\cdot d\Gamma\left(\epsilon,a\right)\qquad L=\int\int\epsilon\cdot d\Gamma\left(\epsilon,a\right).
\]
1. Prices are consistent with firm optimization (in this case cost-minimization)
\[
r=f_{k}\left(z,K,L\right)-\delta\qquad w=f_{L}\left(z,K,L\right).
\]

\begin{algorithm}[tbh!]
\caption{S-RCE Algorithm}
\hrule
{**Algorithm**}
\BlankLine
\SetKwInOut{Input}{input}\SetKwInOut{Output}{output}
\Input{Guess for price $(r)$}
\Output{$V,a^{'},\Gamma,r$}
\BlankLine
1. Solve the DP problem of the agent given $(r,w)$: \\ $\qquad (V,a^{'})=T(V;r)$ \textcolor{gray}{(a fixed point problem)} \;
\smallskip
2. Find stationary distribution method \textcolor{gray}{(or update dist. N times)} \;
\smallskip
3. Update prices to ensure market clearing: \\ $\qquad K=\sum_{i}\sum_j a\cdot\Gamma(i,j) \quad \longrightarrow \quad r = f_K(z,K,1)-\delta \quad w=f_L(z,K,1)$  \;
\smallskip
$\qquad$ \textcolor{gray}{Dampen updating of prices if necessary} \;
\smallskip
4. Repeat (1)-(3) until prices converge \;
\hrule
\BlankLine
\end{algorithm}

Note that the labor supply is exogenous! So, (*i*) we can simplify
the integral because it does not depend on the level of assets, and
(*ii*) we can normalize the level of $\epsilon$ so that the
market clearing condition becomes: $L=\int\epsilon\Gamma_{\epsilon}\left(\epsilon\right)d\epsilon=1$,
where $\Gamma_{\epsilon}$ is the stationary distribution of the Markov
process $Q$ having normalized the levels so that the expected value
of $\epsilon$ is 1.

Finally, the definition of equilibrium also gives us an algorithm
to find it. The key is that once we normalize the level of labor supply
we realize that, just as in the neoclassical growth model, all the
economy depends only on the aggregate level of capital, $K$. Once
$K$ is known it implies prices $r=f_{k}\left(z,K,1\right)-\delta$
and $w=f_{L}\left(z,K,1\right)$. With this prices we can solve the
household's problem and then arrive at at new level of $K$. This
means that the problem of finding an equilibrium is a fixed point
problem on a single value, the value of aggregate capital. Incidentally,
a good initial condition is the steady state value of capital in the
corresponding complete-markets/representative-agent economy.
