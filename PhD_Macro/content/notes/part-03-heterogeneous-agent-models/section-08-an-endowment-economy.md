# An Endowment Economy

> Part: Heterogeneous Agent Models

Consider an economy like the one described in [Huggett (1993)](https://doi.org/10.1016/0165-1889(93)90024-M).
The economy is populated by a continuum of households who receive
a stochastic endowment of consumption goods (say, jelly beans) every
period. Denote by $\epsilon$ the amount of jelly beans received by
a household. The amount of jelly beans that a household receives follows
a Markov process with transition function $Q$. The jelly beans follow
independent but identical processes across households.

Sadly, jelly beans cannot be stored and thus have to be consumed the
same period they are received. This is a problem for the households
because they would much rather not have their income fluctuate every
period. Nevertheless, the households can smooth consumption by contracting
with one another, that is by exchanging jelly beans among them. This
is, of course, an exchange economy (as opposed to the production economy
we study in the next section).

The contracts that households can sign are limited in two ways. First,
they cannot depend on the individual realizations of the present or
future endowment of jelly beans. That is, the contracts can only specify
a fixed amount of jelly beans being transferred today in exchange
for a fixed amount in the future, regardless of how many jelly beans
the household actually has. This form of market incompleteness can
reflect information frictions, as the amount of jelly beans a household
receives is their private information. Second, credit balances (receiving
jelly beans today in exchange for payment of jelly beans in the future)
are restricted, so that there is a limit to how many jelly beans can
be obtained by a household in the market.

Therefore, the contracts take the form of saving/debt contracts, where
the household exchanges an amount $a^{'}$ of jelly beans today in
exchange for $\left(1+r\right)a^{'}$ jelly beans in the future. When
$a^{'}>0$ the household is saving and will receive payment in the
future. When $a^{'}<0$ the household is in debt and receives jelly
beans today in exchange for a payment in the future. This problem
can be equivalently formulated in terms of (zero-coupon) bond contracts
with a unit bond having a price of $q$. Letting $q=\nicefrac{1}{1+r}$
the problem would be buying a bond that pays one unit of future jelly
beans paying $q$ jelly beans today. This latter formulation is the
one used in [Huggett (1993)](https://doi.org/10.1016/0165-1889(93)90024-M).

As explained above, it will be the case that households use financial
contracts (bonds) to smooth consumption. They save if $\epsilon$
is high and borrow if $\epsilon$ is low.

The problem of the households is then
\begin{align*}
V\left(\epsilon,a\right) & =\max_{\left\{ c,a^{'}\right\} }\,u\left(c\right)+\beta E\left[V\left(\epsilon^{'},a^{'}\right)|\epsilon\right]\\
& \text{s.t. }c+a^{'}=\left(1+r\right)a+\epsilon\qquad a^{'}\geq\underline{a}
\end{align*}
With respect to the workhorse model above, there is no labor choice
and the ``wage'' is equal to 1, making income equal to $\epsilon$.
As before, households live forever and there is no aggregate risk.
The Euler equation of a household is
\[
u^{'}\left(c\right)=\beta E_{\epsilon^{'}}\left[V_{a}\left(\epsilon^{'},a^{'}\right)|\epsilon\right]=\beta\left(1+r\right)E\left[u^{'}\left(\left(1+r\right)a^{'}+\epsilon^{'}-g_{a}\left(\epsilon^{'},a^{'}\right)\right)\right],
\]
where $g_{a}$ is the policy function for savings.

The borrowing constraint must satisfy:
\[
\underline{a}\geq\nicefrac{-\epsilon_{min}}{r}.
\]
This is called the *natural borrowing limit*. It is the highest
amount of debt that can be rolled-over forever if the household faces
an infinite sequence of the lowest possible endowment (or income shock).

Crucially, the financial contracts (bonds) are in zero net supply
in this economy. This is an immediate consequence of the jelly beans
not being storable. That is, there are no actual goods being transferred
across time, only promises for future payments. The implication of
this is that one household's savings are another household's debt.
Even though the households trade against the market and not in bilateral
meetings, the total amount of saving and debt in this economy most
coincide. If this was a representative agent economy, there would
be no trade!

**Distribution of households**

The fact that financial contracts are in zero net supply means that
in equilibrium the aggregate level of assets (bonds) must be zero.
To calculate this we need to define and obtain the distribution of
households over states, $\Gamma$. Then we can calculate aggregate
assets as the integral over the level of assets (bonds) with respect
to the distribution of households $\left(\Gamma\right)$. This is
the key equilibrium condition for this economy.

Formally, we define $\overline{S}$ as the set of exogenous states
and $\left[\underline{a},\overline{a}\right]$ be the domain of assets
(Exercise: Show that there is an endogenous upper bound for the distribution
of assets. See \citealt[Theorem 2]{Hugget_1993_JEDC}, \citealt[footnote 18]{Aiyagari_1994_QJE},
\citealt[Proposition 2]{Achdou_etal_2022_REStud)}). Let ${\cal S}$
and ${\cal A}$ be $\sigma$-algebras over $\overline{S}$ and $\left[\underline{a},\overline{a}\right]$
respectively. The distribution of agents is a measurable function
$\Gamma:{\cal S}\times A\to\left[0,1\right]$ that integrates to 1.

We can update the distribution of households by following their actions.
Let $S\times A\in{\cal S}\times{\cal A}$ be a set in the $\sigma$-algebras.
We want to know if there are households coming into the set $S\times A$.
From the Markov kernel (or transition function) of $\epsilon$ we
have the probability that $\epsilon^{'}\in S$:
\[
\text{Pr}\left(\epsilon^{'}\in S|\epsilon\right)=\int_{\epsilon^{'}\in S}Q\left(\epsilon^{'}|\epsilon\right)d\epsilon.
\]
Then, we define an indicator function to know if $a^{'}\in A$
\[
g\left(\epsilon,a,A\right)=\begin{cases}
1 & \text{if }a^{'}=g_{a}\left(\epsilon,a\right)\in A\\
0 & \text{otw}
\end{cases}.
\]
With this we can update the distribution for all $\left(S,A\right)\in{\cal S\times A}$:
\[
\Gamma^{'}\left(S,A\right)=\int_{\overline{S}}\int_{\overline{A}}\underbrace{g\left(\epsilon,a,A\right)\cdot\text{Pr}\left(\epsilon^{'}\in S|\epsilon\right)}_{\text{Markov Kernel}:P\left(\epsilon^{'}a^{'}|\epsilon,a\right)}\cdot d\Gamma\left(\epsilon,a\right).
\]

This is the adjoint Markov operator of the Markov kernel (or transition
function) $Q$ of the joint process for $\left(\epsilon,a\right)$.
The stationary distribution of states across households is the fixed
point of this operator ($\Gamma$ such that $\Gamma^{'}=\Gamma$).

When the exogenous state is discrete (as is often the case) updating
is simpler. We can work with: ${\cal S}=\left\{ \left\{ \epsilon_{1}\right\} ,\ldots,\left\{ \epsilon_{n}\right\} ,\ldots,\left\{ \epsilon_{N}\right\} \right\} $
instead of the $\sigma$-algebra and update according to

\[
\Gamma^{'}\left(\epsilon^{'},A\right)=\sum_{\overline{S}}\int_{\overline{A}}g\left(\epsilon,a,A\right)\cdot\underbrace{Q\left(\epsilon^{'}|\epsilon\right)}_{\text{Markov Transition Matrix}}\cdot d\Gamma\left(\epsilon,a\right)
\]

**Stationary recursive competitive equilibrium**

A S-RCE is a set of a value function $\left(V\right)$, a policy function
$\left(a^{'}\right)$, a distribution $\left(\Gamma\right)$, and
a price $\left(r\right)$ such that:

1. Given $r$ the value and policy functions solve the agent's problem
(the dynamic programming problem above).
1. Given the policy function, $\Gamma$ is a fixed point of the adjoint
Markov operator of the endogenous Markov process defined above.
1. Given the distribution and policy functions the asset (or bond) market
clears:

\[
\underbrace{\int\int a^{'}\left(\epsilon,a\right)\cdot d\Gamma\left(\epsilon,a\right)}_{\text{Net Supply of Assets}}=0\longleftrightarrow\underbrace{\int\int c\left(\epsilon,a\right)\cdot d\Gamma\left(\epsilon,a\right)}_{\text{Demand for Goods}}=\underbrace{\int\int\epsilon\cdot d\Gamma\left(\epsilon,a\right)}_{\text{Supply of Goods }}
\]

The definition of equilibrium also gives us an algorithm to find it.

\begin{algorithm}[]
\caption{S-RCE Algorithm}
\hrule
{**Algorithm**}
\BlankLine
\SetKwInOut{Input}{input}\SetKwInOut{Output}{output}
\Input{Guess for price $(r)$}
\Output{$V,a^{'},\Gamma,r$}
\BlankLine
1. Solve the DP problem of the agent given $r$: \\ $\qquad (V,a^{'})=T(V;r)$ (a fixed point problem) \;
\smallskip
2. Find stationary distribution by iterating over the adjoint Markov operator \;
\smallskip
3. Check market clearing:  $\sum_{i}\sum_j a^{'}(\vec{\epsilon}_i,\vec{a}_j)\cdot\Gamma(i,j)$ \;
\smallskip
4. Update prices to clear market \\ $\qquad$ Manually by tatonnement or with a Root finder \;
\smallskip
5. Repeat (1)-(4) until market clears \;
\hrule
\BlankLine
\end{algorithm}

However, it is not a given that such an equilibrium exists. A couple
of results are needed for this presented in Theorems 1 and 2 of [Huggett (1993)](https://doi.org/10.1016/0165-1889(93)90024-M).
If you read the explanation in the paper you will see how much of
a group effort the development of these models was. The proofs of
each result build on a series of concurrent papers. Interestingly,
Huggett does not fully prove that an equilibrium exists. He conjectures
that the excess supply of assets is increasing in the interest rate
$r$ (or decreasing in the price of bonds $q$) and uses tatonnment
to search for an equilibrium. The conjecture is verified computationally
but not proven.
