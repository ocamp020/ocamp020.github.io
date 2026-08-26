<a id="ref-sec-stochastic-recursive-competitive-equilibrium" class="course-anchor"></a>
# Stochastic Recursive Competitive Equilibrium

> Part: Dynamic Programming

We now turn to study dynamic economies subject to shocks using the
tools developed above. The type of economies we are interested in
are those in which individual agents interact with each other through
markets. The main feature of these economies is therefore the price-taking
behavior of agents. This is as opposed to models of imperfect competition
or models of search friction with bilateral trading covered later
in the course.

We start by describing the Neoclassical Growth Model, which constitutes
the backbone of most models used in macroeconomics. The economy is
populated by a representative firm and a representative household.

!!! note "Note"
    A more formal and complete formulation of the model would introduce a continuum of agents (or households) and firms who populate the economy. The households would be price takers and their preferences would have to be homothetic. The price-taking assumption makes their constraints linear, or put another way homogeneous of degree one, the homotheticity ensures that their choices are scale free, so that the choice of an agent with half the income of another agent is to consume half as much of every good. The firms would also be price takers and operate a technology that has constant-returns-to-scale (homogeneous of degree one). This ensures that the production choices of the firms scale one-to-one. These assumptions are enough for aggregation into a representative household and a representative firm.

For now, there is no government. We first outline the problem of
the firm and the household and then discuss how to cast them recursively,
how to understand the stationary equilibrium, and how to compute the
solution.

The firm produces using a constant-returns-to-scale technology that
combines capital and labor. The firm chooses capital and labor to
maximize its profits every period taking as given its current productivity
$\left(z_{t}\right)$ the period's prices: the rental rate of capital
$\left(r_{t}\right)$ and the wage rate $\left(w_{t}\right)$. In
this formulation, the problem of the firm is static:
\[
\pi_{t}=\max_{\left\{ k_{t},\ell_{t}^{d}\right\} }f\left(z_{t},k_{t},\ell_{t}^{d}\right)-\left(r_{t}+\delta\right)k_{t}-w_{t}\ell_{t}^{d}.
\]

The household chooses contingent plans for consumption and labor (or
equivalently leisure) taking as given the return on their assets $\left(r_{t}\right)$
and the wage rate $\left(w_{t}\right)$. The household owns the firms
and hence receives the profits the firm generates $\left(\pi_{t}\right)$,
which are also taken as given by the household. In the deterministic
case, the household problem is
\[
\max_{\left\{ c_{t},\ell_{t}\right\} _{t=0}^{\infty}}\sum_{t=0}^{\infty}\beta^{t}u\left(c,\ell\right)\qquad\text{s.t. }c_{t}+a_{t+1}=\left(1+r_{t}\right)a_{t}+w_{t}\ell_{t}+\pi_{t},
\]
for some initial value of assets $a_{0}$. The solution of the household
problem is complex because the consumption and labor plans have to
be contingent on any sequence of $\left\{ \left(r_{t},w_{t},\pi_{t}\right)\right\} $
that can arise. We will return to this problem later.

Equilibrium requires that markets clear along any sequence of prices,
so that
\[
\ell_{t}=\ell_{t}^{d};\qquad a_{t}=k_{t};\qquad c_{t}+a_{t+1}=f\left(z_{t},k_{t},\ell_{t}\right)+\left(1-\delta\right)a_{t}.
\]

However, the variable $z_{t}$ is exogenous (it is not determined
by any decision maker in the economy) and random. In particular $\left\{ z_{t}\right\} $
follows a Markov Process with transition function $Q$ and initial
value $z_{0}$. This requires some extra notation can help describe
the economy. To make things simpler we assume (for now) that $z$
takes on finitely many values. Let $z^{t}=\left(z_{0},z_{1},\ldots,z_{t}\right)$
be the history of shocks in the economy, taking $z_{0}$ as given,
and $S^{t}$ the space of all histories, and $\mu_{t}\left(z^{t}\right)$
give the probability of history $z^{t}$ $\left(\sum_{z^{t}\in S^{t}}\mu\left(z^{t}\right)=1\right)$.
Then, the problem of the household can be formally written as
\begin{align*}
v\left(a_{0}\right) & =\max_{\left\{ a_{t}\left(\cdot\right),c_{t}\left(\cdot\right),\ell_{t}\left(\cdot\right)\right\} }\sum_{t=0}^{\infty}\sum_{z^{t}\in Z^{t}}\beta^{t}u\left(c_{t}\left(z^{t}\right),\ell_{t}\left(z^{t}\right)\right)\mu_{t}\left(z^{t}\right)\\
\text{s.t. } & \sum_{t=0}^{\infty}\sum_{z^{t}\in Z^{t}}p_{t}\left(z^{t}\right)\left[\left(1+r_{t}\left(z^{t}\right)\right)a_{t}\left(z^{t-1}\right)+w_{t}\left(z^{t}\right)\ell_{t}\left(z^{t}\right)+\pi_{t}\left(z^{t}\right)-c_{t}\left(z^{t}\right)-a_{t+1}\left(z^{t}\right)\right]\geq0,
\end{align*}
where we abuse notation by writing $a_{0}\left(z^{-1}\right)=k_{0}$
and $p_{t}\left(z^{t}\right)$ is the price of future resources (the
stochastic discount factor).

An Arrow-Debreu equilibrium of this economy is therefore defined as
sequences of functions that depend on histories of shocks. That is,
an equilibrium is a set of sequences for quantities $\left\{ a_{t}\left(\cdot\right),c_{t}\left(\cdot\right),\ell_{t}\left(\cdot\right),k_{t}\left(\cdot\right),\ell_{t}^{d}\left(\cdot\right),\pi_{t}\left(\cdot\right)\right\} $
and prices $\left\{ p_{t}\left(\cdot\right),r_{t}\left(\cdot\right),w_{t}\left(\cdot\right)\right\} $
such that

1. Households maximize the present discounted value of utility with $\left\{ a_{t}\left(\cdot\right),c_{t}\left(\cdot\right),\ell_{t}\left(\cdot\right)\right\} $,
taking as given prices $\left\{ p_{t}\left(\cdot\right),r_{t}\left(\cdot\right),w_{t}\left(\cdot\right)\right\} $
and transfers $\left\{ \pi_{t}\left(s^{t}\right)\right\} $.
1. Firms maximize their period profits with $\left\{ k_{t}\left(\cdot\right),\ell_{t}^{d}\left(\cdot\right)\right\} $
taking as given prices $\left\{ r_{t}\left(\cdot\right),w_{t}\left(\cdot\right)\right\} $
\[
\pi_{t}\left(z^{t}\right)=f\left(z_{t},k_{t}\left(z^{t}\right),\ell_{t}^{d}\left(z^{t}\right)\right)-\left(r_{t}\left(z^{t}\right)+\delta\right)k_{t}\left(z^{t}\right)-w_{t}\left(z^{t}\right)\ell_{t}^{d}\left(z^{t}\right).
\]
1. Markets clear for every history
\[
\ell_{t}\left(z^{t}\right)=\ell_{t}^{d}\left(z^{t}\right);\qquad a_{t}\left(z^{t-1}\right)=k_{t}\left(z^{t}\right);
\]
\[
c_{t}\left(z^{t}\right)+a_{t+1}\left(z^{t}\right)=f\left(z_{t},k_{t}\left(z^{t}\right),\ell_{t}\left(z^{t}\right)\right)+\left(1-\delta\right)a_{t}\left(z^{t-1}\right).
\]
1. The initial conditions are satisfied, so that $a_{0}\left(z^{-1}\right)=k_{0}$.

In the Arrow-Debreu equilibrium all trading happens at time 0, taking
as given $\left(k_{0},z_{0}\right)$. We can alternatively define
a sequential markets equilibrium for this economy. This definition
avoids introducing the stochastic discount factor. We instead define
the equilibrium as a set of sequences for quantities $\left\{ a_{t}\left(\cdot\right),c_{t}\left(\cdot\right),\ell_{t}\left(\cdot\right),k_{t}\left(\cdot\right),\ell_{t}^{d}\left(\cdot\right),\pi_{t}\left(\cdot\right)\right\} $
and prices $\left\{ r_{t}\left(\cdot\right),w_{t}\left(\cdot\right)\right\} $
such that

1. Households maximize the present discounted value of utility with $\left\{ a_{t}\left(\cdot\right),c_{t}\left(\cdot\right),\ell_{t}\left(\cdot\right)\right\} $,
taking as given prices $\left\{ r_{t}\left(\cdot\right),w_{t}\left(\cdot\right)\right\} $
and transfers $\left\{ \pi_{t}\left(s^{t}\right)\right\} $.
\begin{align*}
v\left(a_{0}\right) & =\max_{\left\{ a_{t}\left(\cdot\right),c_{t}\left(\cdot\right),\ell_{t}\left(\cdot\right)\right\} }\sum_{t=0}^{\infty}\sum_{z^{t}\in Z^{t}}\beta^{t}u\left(c_{t}\left(z^{t}\right),\ell_{t}\left(z^{t}\right)\right)\mu_{t}\left(z^{t}\right)\\
\text{s.t. } & \left(1+r_{t}\left(z^{t}\right)\right)a_{t}\left(z^{t-1}\right)+w_{t}\left(z^{t}\right)\ell_{t}\left(z^{t}\right)+\pi_{t}\left(z^{t}\right)\geq c_{t}\left(z^{t}\right)+a_{t+1}\left(z^{t}\right)\qquad\forall_{t}\forall_{z^{t}\in Z^{t}},
\end{align*}
1. Firms maximize their period profits with $\left\{ k_{t}\left(\cdot\right),\ell_{t}^{d}\left(\cdot\right)\right\} $
taking as given prices $\left\{ r_{t}\left(\cdot\right),w_{t}\left(\cdot\right)\right\} $
\[
\pi_{t}\left(z^{t}\right)=f\left(z_{t},k_{t}\left(z^{t}\right),\ell_{t}^{d}\left(z^{t}\right)\right)-\left(r_{t}\left(z^{t}\right)+\delta\right)k_{t}\left(z^{t}\right)-w_{t}\left(z^{t}\right)\ell_{t}^{d}\left(z^{t}\right).
\]
1. Markets clear for every history
\[
\ell_{t}\left(z^{t}\right)=\ell_{t}^{d}\left(z^{t}\right);\qquad a_{t}\left(z^{t-1}\right)=k_{t}\left(z^{t}\right);
\]
\[
c_{t}\left(z^{t}\right)+a_{t+1}\left(z^{t}\right)=f\left(z_{t},k_{t}\left(z^{t}\right),\ell_{t}\left(z^{t}\right)\right)+\left(1-\delta\right)a_{t}\left(z^{t-1}\right).
\]
1. The initial conditions are satisfied, so that $a_{0}\left(z^{-1}\right)=k_{0}$.

The sequential problem of the agents in this economy must therefore
keep track of an impossibly large state vector because the optimal
choices depend on its complete history. Tackling this problem proves
to be impractical if not impossible. Because of that we seek to re-formulate
the household's problem in its recursive form. Doing so will also
provide us with a definition of recursive competitive equilibrium
(RCE).

## Recursive Competitive Equilibrium

The objective now is to cast the problem recursively. This allows
us to provide a clearer definition of equilibrium and (later) to solve
the problem using the tools of dynamic programming developed above
and the computational tools introduced below.

The main question of the recursive problem is what constitute the
relevant state of the economy. Crucially, the household is a price
taker: they have no clue about the aggregate effect of their choices.
Equivalently you can think of the household as atomistic, so that
they know that their (individual) actions have no effect on the aggregates
of the economy. However, the states must provide enough information
to solve the problem and to forecast how the states themselves evolve.

In general we have $s_{t}=\left(a_{t},z_{t},\Gamma_{t}\right)$ be
the state of the individual representative household, it includes
the household's capital $\left(a\right)$, the aggregate productivity
$\left(z\right)$, and the distribution of states in the economy $\left(\Gamma\right)$.
Keeping track of the distribution of states is in principle necessary
in order to compute prices. The sequential problem circumvents this
problem by making all variables (prices included) depend on the full
history of exogenous shocks. That, of course, contains all the information
necessary. However, the recursive problem cannot depend the history
of states, $s^{t}=\left(s_{0},s_{1},\ldots,s_{t}\right)$.

To solve this issue we use the structure of the economy. The key is
that the economy we are studying can be aggregated. This means that
the underlying distribution of households does not matter and that
only the aggregate (average) capital is relevant: $K_{t}=\int a_{t}d\Gamma_{t}$.
Because of this, an individual household only needs to keep track
of aggregate capital and not of the whole distribution. Crucially,
knowing the aggregate capital is enough to compute the relevant prices
in the economy. This makes the state $s_{t}=\left(a,z,K\right)$.

!!! note "Note"
    The state is often written as $\left(k,z,K\right)$ emphasizing the difference between the "little $k$" faced by an individual household and the "big $K$" faced by the economy as a whole.

The household's recursive problem is then

\begin{align*}
V(\underbrace{\quad a\quad}_{\text{Ind. State}},\underbrace{\;z\;,\;K\;}_{\text{Agg. States}}) & =\max_{\left\{ c,\ell,a^{\prime}\right\} }\,u\left(c,\ell\right)+\beta\int_{z^{\prime}}V\left(a^{\prime},z^{\prime},K^{\prime}\right)Q\left(z,dz^{\prime}\right)\\
\text{s.t.} & \qquad c+a^{\prime}=\left(1+R\left(z,K\right)\right)a+W\left(z,K\right)\ell+\Pi\left(z,K\right);\\
& \qquad K^{\prime}=G_{k}\left(z,K\right).
\end{align*}

This problem looks a lot like the dynamic programming problems we
have discussed before, with the exception that it has to include functions
that map the aggregate states into prices, $r=R\left(z,K\right)$
and $w=W\left(z,K\right)$, and profits, $\Pi\left(z,K\right)$, and
that incorporate the evolution of the aggregate state, $G_{k}\left(z,K\right)$.
These functions are taken as given by the household and are found
as part of the equilibrium defined below.

An Recursive Competitive Equilibrium (RCE) is a set of a value function
$V$, policy functions $g_{k}$ and $g_{\ell}$, updating functions
$G_{k}$ and price and profit functions $R$, $W$, and $\Pi$, such
that:

!!! note "Note"
    The definition of an RCE can be equivalently be done in terms of stochastic processes for the equilibrium variables (capital, labor, prices, etc.). That is, the equilibrium is the processes for quantities and prices. These stochastic processes are the equivalent of the sequences of quantities and prices that define a non-stochastic equilibrium. However, defining the equilibrium in that way is cumbersome. The stochastic processes are all constructed from the underlying Markov process for $z$ and the policy and price functions that define the RCE. The construction is carried out as shown in [Markov Processes over States](section-05-stochastic-dynamic-programming.md#ref-subsec-markov-processes-over-states).

1. The value function $V$ and policy functions $\left\{ g_{a},g_{\ell}\right\} $
solve the household's dynamic programming problem, taking as given
the updating and price functions $G_{k}$, $R$, $W$, $\Pi$.
1. The firms *behave optimally* taking prices as given. This implies
that the pricing functions $R$ and $W$ satisfy the firm's first
order conditions (from cost-minization, see [Profit Maximization: A note](#ref-subsec-profit-maximization-crs))
\[
R\left(z,K\right)=f_{k}\left(z,K,G_{\ell}\left(z,K\right)\right)-\delta\qquad W\left(z,K\right)=f_{\ell}\left(z,K,G_{\ell}\left(z,K\right)\right),
\]
where $L=G_{\ell}\left(z,K\right)$ gives the aggregate equilibrium
level of labor as a function of the aggregate states. And profits
satisfy
\[
\Pi\left(z,K\right)=f\left(z,K,G_{\ell}\left(z,K\right)\right)-\left(R\left(z,K\right)+\delta\right)K-W\left(z,K\right)G_{\ell}\left(z,K\right).
\]

**Note: **The price and profit functions are evaluated at the
equilibrium levels of capital, $K$, and labor, $L=G_{\ell}\left(z,K\right)$,
and not at the firms' capital and labor demand. This already imposes
market clearing for the capital and labor markets because the aggregate
variables are consistent with households' supply of assets and labor,
as noted below. Walras' law then implies that the good's market clears.
1. Updating functions $G_{k}$ and $G_{\ell}$ are consistent with individual
optimization
\begin{align*}
G_{k}\left(z,K\right) & =g_{a}\left(K,z,K\right);\\
G_{\ell}\left(z,K\right) & =g_{\ell}\left(K,z,K\right).
\end{align*}

**Note:** This consistency condition plays two roles. First,
it acknowledges that the household is a representative agent, so that,
even though the household acts individually without having any effect
on aggregates, the household assets $a$ are equal to the aggregate
capital $K$ (from the point of the view of the economy, but not of
an individual household). This is captured by evaluating the policy
functions of the household in $\left(K,z,K\right)$ and by making
the evolution equation for aggregate capital $G_{k}$ consistent with
household savings $g_{a}$. Second, it acknowledges market clearing
by making the aggregate equilibrium labor $L=G_{\ell}\left(z,K\right)$
be consistent with household labor supply, $g_{\ell}$.

Crucially, consistency only has to apply in equilibrium. This allows
us device an algorithm to solve for the RCE. The key is that consistency
does not have to hold as you converge to the equilibrium because the
household dynamic problem can be solved given any update functions.

\begin{algorithm}[H]
\caption{RCE Algorithm}
\BlankLine
\hrule
{**Algorithm**}
\BlankLine
\SetKwInOut{Input}{input}\SetKwInOut{Output}{output}
\Input{Guess for updating functions $(G_k,G_{\ell})$}
\Output{$V,g_k,g_\ell,G_k,G_\ell$}
\BlankLine
1. Solve the DP problem of the agent given $G_k,G_{\ell}$: \\ $\qquad (V,g_k,g_\ell)=T(V;G_k,G_\ell)$ (a fixed point problem) \;
\medskip
2. Update updating functions: \\ $\qquad G_k(z,K)=g_k(K,z,K) \qquad G_\ell(z,K)=g_\ell(K,z,K) $ \;
\medskip
3. Check convergence in updating functions \;
\medskip
4. Repeat (1)-(3) until convergence \;
\hrule
\BlankLine
\end{algorithm}

Solving the problem requires solving the fixed point characterizing
the solution to the household's Bellman equation. Unfortunately, this
implies that the curse of dimensionality applies because you have
to solve the agent's problem off-equilibrium. That is, you need to
know $g_{k}\left(a,z,K\right)$ for any combination of $\left(a,K\right)$,
even though in equilibrium $a=K$. For efficient economies, where
the first welfare theorem applies, we can avoid this problem by focusing
on the planner's problem and then constructing the equilibrium prices.
However, most applications involve economies with market failures,
or distortions (like taxes!) that prevent us from doing this.

## Stationary Equilibrium: What does it mean?

We now discuss a key property of the equilibrium. When the process
for the exogenous shocks is stationary and the problem of the firm
and the household satisfy certain regularity conditions, the equilibrium
converges to a stationary equilibrium. The objective of this subsection
is to discuss what that means.

First we discuss informally what the regularity conditions are. What
we want is to establish conditions that produce "well-behaved"
policy functions for the endogenous states (capital in this case),
that is, continuous and monotone. The problem must also satisfy standard
Inada and transversality conditions that guarantee that it is effectively
bounded.

Continuity is inherited from the continuity of payoff functions (in
this case $u$ and $f$) and the properties of the feasible correspondence.
See the Theorem of the Maximum for more on this. It also requires
that the Markov Process for $z$ satisfies the Feller property (because
of the expectation in the value function).

Monotonicity requires having a sense of what is "better" in the
context of the problem. We interpret $z$ as productivity and hence
it makes sense to interpret higher values of $z$ as being better.
For the resulting solution to be monotone in the states $\left(k,z,K\right)$
we need the payoffs to be monotone (as we usually assume), the transition
function $Q$ to be monotone (see [Definition 3.4](../part-01-preliminaries/section-03-markov-processes.md#ref-def-000020monotonicity-000020markov-000020)
and [Proposition 3.6](../part-01-preliminaries/section-03-markov-processes.md#ref-prop-monotonicity-markov)).

Crucially, the conditions imposed over the Markov process for $z$
already guarantee that it is a stationary process with a unique invariant
distribution to which it converges, regardless of its initial condition,
$z_{0}$. The question is whether the stochastic process followed
by the equilibrium variables (capital) are also stationary and converge
to an invariant distribution. The stationary equilibrium is then just
a recursive competitive equilibrium for which the stochastic process
of the endogenous variables is stationary.

The concept of the stationary equilibrium is immediate in the non-stochastic
case. Then, policy functions map (deterministically) a value of the
endogenous state (capital) into a new value for itself. A sequential
markets equilibrium and a recursive competitive equilibrium are defined
just as in the previous subsection, except that they do not depend
on the history of shocks (as there are none). The equivalent of being
stationary and having an invariant distribution is then to have a
single steady-state value that satisfies the equilibrium conditions.
Intuitively, the deterministic case is like the stochastic one with
degenerate distributions, so the invariant degenerate distribution
puts full probability on a single value of the variable. That is the
steady state.

In the stochastic case, the equilibrium is composed by functions that
map the realization of the stochastic process for productivity $\left(z\right)$
into values for quantities $\left(K\right)$ and prices $\left(r,w\right)$.
When these functions are measurable with respect to the underlying
productivity process they form themselves a stochastic processes (the
sequence of the random variables for quantities and prices). The construction
of these stochastic processes is carried out as in [Markov Processes over States](section-05-stochastic-dynamic-programming.md#ref-subsec-markov-processes-over-states).
Then, the stationary equilibrium is an endogenously determined probability
distribution over the state variables, with the properties of a Markov
chain induced by the policy functions and the exogenous process for
shocks.

<a id="ref-subsec-profit-maximization-crs" class="course-anchor"></a>
## Profit Maximization: A note

!!! note "Remark"

    This sub-section reproduces lessons taught by Tim Kehoe at the University
    of Minnesota.

We often assume that the production function has constant returns
to scale, that is, that it is homogenous of degree 1. This is in part
for making possible the aggregation of the economy from individual
competitive firms having the same behavior (at scale) than a representative
price-taking firm. This assumption has important consequences for
how we set up the firms' problem. The objective of this note is to
make these consequences apparent. Before tackling them, it is useful
to state Euler's theorem for homogeneous functions.
!!! info "Definition 6.1: Homogeneous Function"

    A function $f:\mathbb{R}^{N}\to\mathbb{R}$
    is homogeneous of degree $g>0$ if $f\left(\lambda\cdot\vec{x}\right)=\lambda^{g}\cdot f\left(\vec{x}\right)$
    for $\lambda>0$.

!!! abstract "Theorem 6.1: Euler's Theorem for Homogeneous Functions"

    Let $f:\mathbb{R}^{N}\to\mathbb{R}$
    be differentiable function homogeneous of degree $g$. Then $\frac{\partial f\left(x\right)}{\partial x_{i}}$
    is homogenous of degree $g-1$ for all $i\in\left\{ 1,\ldots,N\right\} $
    and
    \[
    g\,f\left(x\right)=\sum_{i=1}^{N}\frac{\partial f\left(x\right)}{\partial x_{i}}x_{i}.
    \]

There are three main implications of Euler's theorem for the equilibria
of macroeconomic models with constant returns to scale production
functions.

**1) Profit maximization is ill-defined**

Consider the profits of a price-taking firm that produces renting
capital and hiring labor with a technology described by $Y=zF\left(K^{d},L^{d}\right)$
that has constant returns to scale, so that $F\left(\lambda K^{d},\lambda L^{d}\right)=\lambda F\left(K^{d},L^{d}\right)$
for $\lambda>0$. The profits of the firm, $\pi$, also have constant
returns to scale. To see this let
\[
\pi\left(K^{d},L^{d}\right)=zF\left(K^{d},L^{d}\right)-\left(r+\delta\right)K^{d}-wL^{d}
\]
and consider an increase in the scale of the firm by a factor of $\lambda>0$.
It is immediate that
\[
\pi\left(\lambda K^{d},\lambda L^{d}\right)=zF\left(\lambda K^{d},\lambda L^{d}\right)-\left(r+\delta\right)\lambda K^{d}-w\lambda L^{d}=\lambda\pi\left(K^{d},L^{d}\right).
\]

This has an important implication for firm behavior: If the firm makes
a profit when demanding $K^{d}$ units of capital and $L^{d}$ units
of labor, $\pi\left(K^{d},L^{d}\right)>0$, then it can scale up that
profit by scaling up that demand. Hence the optimal scale of the firm,
and hence it demand for inputs, would be ill-defined (it would be
infinite). If the firm makes a loss for all $\left(K^{d},L^{d}\right)$,
$\pi\left(K^{d},L^{d}\right)<0$, then it is optimal to set $K^{d}=L^{d}=0$
and not produce. Finally there is a knife edge case where $\pi\left(K^{d},L^{d}\right)=0$
for all $\left(K^{d},L^{d}\right)$, but the firm's scale and demand
for inputs is still ill-defined because the firm is indifferent between
any scale of production.

This makes the profit maximization problem ill-defined because the
answer to
\[
\max_{\left\{ K^{d},L^{d}\right\} }\pi\left(K^{d},L^{d}\right)
\]
is either 0 or infinity and there is no optimal scale for the firm
(other than the case in which the firm does not operate) .

**2) Equilibrium profits must be zero**

Despite the profit maximization problem being ill-defined it does
tell us that the only equilibrium outcome arises in the knife edge
case of zero profits. This is has to be the case for the firm to operate
but have a finite scale, and hence a finite demand for inputs.

Turns out that this is precisely the case that arises when prices
reflect the marginal product of inputs. The reason lies in Euler's
theorem. The constant returns to scale technology implies that
\begin{align*}
\pi\left(K^{d},L^{d}\right) & =zF\left(K^{d},L^{d}\right)-\left(r+\delta\right)K^{d}-wL^{d}\\
& =zF\left(K^{d},L^{d}\right)-zF_{K}\left(K^{d},L^{d}\right)K^{d}-zF_{L}\left(K^{d},L^{d}\right)L^{d}\\
& =zF\left(K^{d},L^{d}\right)-zF\left(K^{d},L^{d}\right)\\
& =0.
\end{align*}

**3) Firms cost minimize**

The condition for zero profits above is true only if the prices coincide
with the marginal product of inputs given the firms' input demand.
How can we guarantee this coincidence? The answer lies in the firms'
cost minimization problem. Regardless of the scale of the firm, the
firm will always minimize its cost given that scale. So it holds true
that
\[
C\left(Y\right)=\min_{\left\{ K^{d},L^{d}\right\} }\left(r+\delta\right)K^{d}-wL^{d}\qquad\text{s.t. }zF\left(K^{d},L^{d}\right)\leq Y
\]
The first order conditions of this problem give us
\[
\left(r+\delta\right)=\mu zF_{K}\left(K^{d},L^{d}\right)\qquad w=\mu zF_{L}\left(K^{d},L^{d}\right),
\]
where $\mu$ is the Lagrange multiplier of the constraint that we
can (later) normalize to one.

Euler's theorem helps again. The marginal products are homogeneous
of degree zero because the production function is homogeneous of degree
1. Put another way, the marginal products are scale-invariant. That
means that we can write
\[
\left(r+\delta\right)=\mu zF_{K}\left(\frac{K^{d}}{L^{d}},1\right)\qquad w=\mu zF_{L}\left(\frac{K^{d}}{L^{d}},1\right).
\]
This has two important implications. First, the marginal products
of inputs depend only on their ratio and not on the their individual
scale. So, the condition for zero profits only requires that the firm
input demand has the same ratio as the one implied by prices. Second,
the optimal ratio of input demand is determined by the ratio of prices,
implicitly by the following equation:
\[
\frac{r+\delta}{w}=\frac{F_{K}\left(\frac{K^{d}}{L^{d}},1\right)}{F_{L}\left(\frac{K^{d}}{L^{d}},1\right)}.
\]
This is actually crucial, because it guarantees that, given prices
$r$ and $w$, the firm will optimally choose the precise ratio of
inputs that makes zero profits hold.

It is left to determine prices and the scale of production. This is
done in equilibrium. Market clearing demands that the level of output
is consistent with the aggregate demand in the economy (consumption,
savings, government spending, etc.) and that the labor and capital
used in production are the same as the assets and labor supplied by
households. Then, the same equation of the ratio of prices and inputs
used to determine the optimal demand of inputs given prices, is used
in the inverse manner to determine the equilibrium ratio of prices
given the supply of assets and labor. Similarly, the scale of production
is obtained by agree An equilibrium allocation equates the demand
and supply of capital and labor. The scale is then provided given
$Y$ coming from aggregate demand.

The bottom line is that, in equilibrium, the ratio of prices and the
ratio of inputs are determined by technology and the scale of production
is demand-determined.

This can be seen in the definition of the RCE at the beginning of
this section where prices were obtained as
\[
R\left(z,K\right)=f_{k}\left(z,K,G_{\ell}\left(z,K\right)\right)-\delta\qquad W\left(z,K\right)=f_{\ell}\left(z,K,G_{\ell}\left(z,K\right)\right),
\]
with $K$ being the aggregate assets in the economy (a state) and
$L=G_{\ell}\left(z,K\right)$ the aggregate supply of labor in the
economy (consistent with household optimization).

## Computing the Equilibrium: Value function iteration (the discrete case)

The objective is now to illustrate how to compute the equilibrium.
We take advantage of the fact that the the economy we described is
efficient and that we can therefore use the planner's problem to construct
all the equilibrium functions. We further simplify the problem by
getting rid of the labor choice. This simplifies the exposition. The
planner's problem is to choose aggregate quantities subject to feasibility:
\begin{align*}
V(K,z) & =\max_{\left\{ C,K\right\} }\,u\left(C\right)+\beta\int_{z^{\prime}}V\left(K^{\prime},z^{\prime}\right)Q\left(z,dz^{\prime}\right)\\
\text{s.t.} & \qquad C+K^{\prime}=f\left(z,K\right)+\left(1-\delta\right)K.
\end{align*}
The solution to the planner's problem immediately gives us the equilibrium
for individual quantities $\left\{ c,a,k\right\} $ and prices $\left\{ r\right\} $
by setting
\[
c=C\qquad k=a=K\qquad r=f_{k}\left(z,K,L\right)-\delta.
\]

We can solve the problem using value function iteration. The key is
that, unlike the household problem above, we do not need to condition
on the functions for prices or aggregates.

\begin{algorithm}[H]
\SetAlgoLined
\caption{Value Function Iteration}
\BlankLine
\hrule
{**Algorithm**}
\BlankLine
\KwResult{Fixed Point of Bellman Operator $T$}
\BlankLine
$n=0$; $V^0\in S$; ${dist}_V=1$\;

\While{$n\leq N$ \& ${dist}_V>{tol}_V$}{
$V^{n+1}  = TV^n$\;
${dist}_V = d\left(V^{n+1},V^{n}\right)$\;
}
\eIf{${dist}_V\leq{tol}_V$}{
Obtain $g$ from $TV^{n}$\;
}{
You are in trouble... something went wrong\;
}
\hrule
\BlankLine
\end{algorithm}

While actually solving the problem as posed can be challenging (because
of the difficulties in making continuous choices and taking expectations)
it is possible to approximate it with a related (and much simpler
problem) in which the whole problem is discretized. This is the simplest
implementation of value function iteration. The key advantage is that
there are no continuous choices (or integral), instead, the problem
consists in choosing the best value of capital from a pre-specified
and fixed grid (hence its common name of grid search).

The approximation of the (continuous) dynamic programming problem
with a discrete one does not require the use of derivatives and is
robust to complications such as kinks in the choice set, or asymmetries
in the functions being used. It is also very easy to implement. However,
it is not (in general) a very precise approximation, and it has a
low rate of convergence, making it slow. This problem is compounded
by the curse of dimensionality, which bites particularly hard for
discrete problems because they require large state spaces in order
to improve the accuracy of the approximation (more on how to gauge
accuracy at the end of this section).

The discrete problem is
\[
V\left(k_{i},z_{j}\right)=\max_{k^{\prime}\in\left\{ k_{1},\ldots,k_{I}\right\} }\,U\left(z_{j}k_{i}^{\alpha}+\left(1-\delta\right)k_{i}-k^{\prime}\right)+\beta\sum_{j^{\prime}=1}^{J}\Pi_{jj'}V\left(k^{\prime},z_{j^{\prime}}\right)
\]
where we have replaced the constraint, leaving consumption implicitly
defined by the choice of capital which is now discrete. Conveniently,
everything in the problem is now a vector or a matrix:
\[
V=\left[V_{ij}\right];\qquad\vec{k}=\left[k_{1},\ldots,k_{I}\right]^{T};\qquad\vec{z}=\left[z_{1},\ldots,z_{J}\right]^{T};\qquad\Pi=\left[\Pi_{jj^{\prime}}=Q\left(z_{j},\left\{ z_{j^{\prime}}\right\} \right)\right];
\]
\[
U=\left[U_{ijh}=u\left(z_{j}k_{i}^{\alpha}\qquad\vec{k}=\left[k_{1},\ldots,k_{I}\right]^{T}-k_{h}^{\prime}\right)\right];
\]
This allows us to solve the problem of choosing $k^{\prime}\in\left\{ k_{1},\ldots,k_{I}\right\} $
for every pair of $\left(k_{i},z_{j}\right)$ in two different ways.
Either looping through all the pairs of states, or collapsing the
matrix of payoffs along its third dimension.

\begin{algorithm}[]
\caption{Bellman Operator: Discrete grid with loops}
\DontPrintSemicolon
\hrule
{**Algorithm**}
\BlankLine
\SetKwFunction{FMain}{T}
\SetKwProg{Fn}{Function}{:}{}
\Fn{\FMain{V\_old,k\_grid,$z$\_grid,$\alpha,\beta$}}{
\BlankLine
$n_k$ = length(k\_grid) \;
\smallskip
$n_z$ = length(z\_grid) \;
\smallskip
$V$ = zeros($n_k,n_z$); $G_{kp}$ = zeros($n_k,n_z$); $G_c$  = zeros($n_k,n_z$) \;
\BlankLine
\For{i = 1:$n_k$}{
\For{j = 1:$n_z$}{
V\_aux = zeros($n_k$) \;
\BlankLine
\For{h = 1:$n_k$}{
V\_aux[h] = u(k\_grid[i],z\_grid[j],k\_grid[h];$\alpha,\beta$) + $\beta$sum($\Pi_{j,j'}$V\_old[h,j']) \;
}
\BlankLine
V[i,j], $G_{kp}$[i,j] = findmax(V\_aux) \;
\BlankLine
$G_c$[i,j]          = f(k\_grid[i],z\_grid[j]) + (1-$\delta$)k\_grid[i] - k\_grid[$G_{kp}$[i,j]] \;
}
}
\smallskip
return V, $G_{kp}$, $G_c$ \;
}
\hrule
\BlankLine
\end{algorithm}

This algorithm can be sped up in many programming languages by operating
directly on matrices, instead of relying on loops. This also leads
to a more concise program.

In order to evaluate the accuracy of the solution we make use of **Euler
Residuals**. These are the residuals in the first order conditions
of the actual problem, which should be zero for the correct solution.
\[
\mathbf{Res}\left(k,z_{j}|g\right)=\underbrace{\frac{\beta\sum_{j^{\prime}=1}^{J}\Pi_{jj^{\prime}}U^{\prime}\left(f\left(z_{j^{\prime}},g\left(k,z_{j}\right)\right)+\left(1-\delta\right)k-g\left(g\left(k,z_{j}\right),z_{j^{\prime}}\right)\right)\frac{\partial f\left(z_{j^{\prime}},g\left(k,z_{j}\right)\right)}{dk}}{U^{\prime}\left(f\left(z_{j},k\right)+\left(1-\delta\right)k-g\left(k,z_{j}\right)\right)}-1}_{\text{\% Error in Euler Equation}}
\]
We can evaluate these residuals for values of capital in the grid
used to solve the problem. The Euler residuals can help diagnose if
there are parts of the state space that need to be denser (say having
more grid points near low-levels of capital where the curvature of
the problem is higher) or whether the approximation to the solution
is satisfactory in general.

Having approximated the solution to the dynamic programming problem
we can construct a Markov process for the states in the economy and
obtain their stationary distribution. In the special case of discrete
grid search, this is facilitated by the fact that the choice of future
capital is always in the grid. We can then construct a Markov transition
matrix for the state vector of the economy. In this case, the state
is $s=\left(k,z\right)$, and the state space can be express as a
long vector
\[
\vec{s}=\left(\left(k_{1},z_{1}\right),\left(k_{1},z_{2}\right),\ldots,\left(k_{1},z_{J}\right),\left(k_{2},z_{1}\right),\ldots,\left(k_{2},z_{J}\right),\ldots,\left(k_{I},z_{1}\right),\ldots,\left(k_{I},z_{J}\right)\right).
\]
The Markov transition matrix is therefore a square matrix with $I\times J$
rows and columns. We can build the matrix following the steps in [Markov Processes over States](section-05-stochastic-dynamic-programming.md#ref-subsec-markov-processes-over-states). The key is that $z$ evolves
independently following the transition matrix $\Pi$, while $k$ evolves
deterministically. The matrix is then
\[
\Psi_{\left(ij,i^{\prime}j^{\prime}\right)}=\Pi_{jj^{\prime}}\chi_{\left\{ i^{\prime}=G_{kp}\left(i,j\right)\right\} }.
\]
The properties of the stochastic process for capital and productivity
then follow from this matrix. For instance, the stationary distribution
is obtained from the eigenvector associated with the matrix unit eigenvalue.

## Recursive Competitive Equilibrium Example: Sovereign Default

Sovereign default models form a large literature on international
economics and are also a great example of stochastic dynamic programming.
The choice to default required dynamics in order to have an opportunity
and a reason to borrow and to introduce a relevant tradeoff around
default. The model must also be stochastic in order to induce the
situations in which a decision maker borrows and then finds themselves
in a situation where they opt to default. These models are also inherently
inefficient, preventing the use of the planner's problem. The reason
is that markets must be incomplete in order for the decision maker
not to be able to fully insure against risk. Further, the borrowing
and default decisions depend on prices, which are taken as given by
the decision maker, but that respond endogenously (in equilibrium)
to the decision maker's choices.

The basic sovereign default model follows [Arellano (2008)](https://www.aeaweb.org/articles?id=10.1257/aer.98.3.690).
It is a stochastic endowment economy. Output (or income) follows an
exogenous (discrete) Markov process described by an underlying state
$s\in\left\{ s_{1},\ldots,s_{N}\right\} =S$. The decision maker,
say the government, chooses borrowing/saving and whether to default
on debt. The decision is made taking as given a price schedule for
debt $\left(q\right)$ that depends on the state of the economy and
the debt of the government.

The dynamic programming problem is then split in two. First there
is the (discrete) choice of whether to default. The state of the government
is the pair $\left(s,b\right)$, where $s$ is the exogenous state
of the economy and $b$ is the level of outstanding bonds to be paid
to the government (so $b>0$ means savings and $b<0$ means debt).
If the government pays they get to access the lending markets and
gets a value of $V\left(s,b\right)$ but if it defaults it is thrown
into financial autarky and gets a value $V^{A}\left(s\right)$ (that
no longer depends on $b$ because there is no debt and no access no
markets). The value of the government, $V^{\star}$, reflects the
upper envelope of this choice,
\begin{eqnarray*}
V^{\star}\left(s,b\right) & = & \max_{d\in\left\{ 0,1\right\} }\left\{ \left(1-d\left(s,b\right)\right)V\left(s,b\right)+d\left(s,b\right)V^{A}\left(s\right)\right\} .
\end{eqnarray*}
The value of having access to the financial markets is
\begin{eqnarray*}
V\left(s,b\right) & = & \underset{\left\{ c,b'\right\} }{\max}\left\{ \frac{c\left(s,b\right)^{1-\sigma}-1}{1-\sigma}+\beta\sum_{s^{\prime}\in S}\pi\left(s,s^{\prime}\right)V^{\star}\left(s',b'\right)\right\} \\
&  s.t.  & c\left(s,b\right)\leq y\left(s\right)+b-q\left(s,b\right)b^{\prime}\left(s,b\right)\\
&  & -B\leq b^{\prime}\left(s,b\right)\qquad\text{[B: borrowing limit]}\\
&  & 0\leq c\left(s,b\right).
\end{eqnarray*}
The value of going into autarky is

\[
V^{A}\left(s\right)=\frac{\left(h\left(y\left(s\right)\right)\right)^{1-\sigma}-1}{1-\sigma}+\beta\underset{s'\in S}{\sum}\pi\left(s,s'\right)\left(\theta V^{\star}\left(s',0\right)+\left(1-\theta\right)V^{A}\left(s'\right)\right),
\]
where $h\left(y\right)<y$ is a function that penalizes output, representing
the costs of autarky. There is no choice for the government as there
are no markets that allow it to smooth consumption. The government
returns to the markets with probability $\theta\geq0$.

There is also a sector of financial intermediaries that operate in
perfect competition. They are risk neutral and lend in an actuarially
fair manner, meaning that their prices reflect the expected costs
of default and so they break even in expectation. The profits of one
of these financial intermediaries are
\[
\text{Pr}=qb^{\prime}-\frac{1-\delta}{1+r}b^{\prime},
\]
where $\delta$ is the (endogenously determined) probability of default
taken as given by the intermediary. This probability comes, in equilibrium,
from the optimal default choice of the government, $g^{D}\left(s,b\right)$,
and satisfies

\[
\delta=E_{s^{\prime}}\left[g^{D}\left(s^{\prime},b^{\prime}\right)|s\right]\qquad\text{where }g^{D}\left(s^{\prime},b^{\prime}\right)=\begin{cases}
1 & \text{if default}\\
0 & \text{if no default }
\end{cases}.
\]
Free entry gives the zero profit (break even) condition that $\text{Pr}=0$
and so the debt price is (in equilibrium):

\begin{eqnarray*}
q\left(s,b'\right) & = & \begin{cases}
\frac{1-\underset{s^{\prime}\in S}{\sum}\pi\left(s'\right)g^{D}\left(s',b'\right)}{R} &   if  b'<0\\
\frac{1}{R} &   if  b'\geq0
\end{cases}
\end{eqnarray*}

A **Recursive Competitive Equilibrium** is then a set of value
functions $\left\{ V^{\star},V^{A},V\right\} $, policy functions
$\left\{ g^{c},g^{b},g^{D}\right\} $, and a price functional $\left\{ q\left(s,b^{\prime}\right)\right\} $
such that

1. The value functions solve the Bellman equations of the government
and the policy functions achieve the maximum in those equations taking
the price $q$ as given.
1. The price $q$ satisfies the zero profit or break even condition of
the financial intermediaries

## Welfare comparisons

We have focused so far on the behavior of aggregates, the positive
implications of the models. We now turn briefly to how to make welfare
comparisons between models. This is most often needed when evaluating
policy changes, or counterfactuals in which missing markets are completed.
In these scenarios there are two specifications of the economy, a
"benchmark" economy that we call $B$, and an alternative economy
that we call $A$. The question at hand is *how much* better
(or worse) are consumers when moving from economy $B$ to economy
$A$.

The challenge for welfare comparisons resides in how to make sense
of the units of value functions (indirect utility). The most standard
solution is to compute welfare in "consumption-equivalent" units.
That is, what percentage of consumption are consumers willing to give
up *in all states and times* to avoid the change (in case welfare
is lower in $A$ relative to $B$) or how much they need to be compensated
with for not making the change (in case welfare is higher in $A$
relative to $B$). The derivation follows closely the concept of "certainty-equivalent"
for lotteries.

To compute the consumption-equivalent welfare gain (or loss) between
economies $A$ and $B$ we first define the value of consumers in
each economy as
\[
V^{B}\left(s\right)=E_{0}\left[\left.\sum_{t=0}^{\infty}\beta^{t}u\left(c_{t}^{B}\left(s^{t}\right)\right)\right|s_{0}=s\right]\qquad\text{and}\qquad V^{A}\left(s\right)=E_{0}\left[\left.\sum_{t=0}^{\infty}\beta^{t}u\left(c_{t}^{A}\left(s^{t}\right)\right)\right|s_{0}=s\right],
\]
where $V^{B}\left(s\right)$ and $V^{A}\left(s\right)$ are the values
in each economy of being in state $s$, and $c^{B}$ and $c^{A}$
are the consumption contingent plans in each economy. These can be
obtained from the solution to the recursive problem (recall that the
principle of optimality applies, [The Principle of Optimality](section-05-stochastic-dynamic-programming.md#ref-subsec-the-principle-of-optimality-stochastic)).

The consumption-equivalent welfare $\text{CE}\left(s\right)$ at state
$s$, is such that consumers are indifferent between the two economies
when, in the benchmark economy, they give/receive $100\times\text{CE}\%$
more/less consumption in all states and times:
\[
E_{0}\left[\left.\sum_{t=0}^{\infty}\beta^{t}u\left(\left(1+\text{CE}\left(s\right)\right)c_{t}^{B}\left(s^{t}\right)\right)\right|s_{0}=s\right]=E_{0}\left[\left.\sum_{t=0}^{\infty}\beta^{t}u\left(c_{t}^{A}\left(s^{t}\right)\right)\right|s_{0}=s\right].
\]
Computing these expectations as they are is almost impossible. We
can make progress by using the principle of optimality and imposing
some structure over payoffs.

Assume now that utility is homothetic. In practice this implies that
\[
u\left(c\right)=\frac{c^{1-\sigma}}{1-\sigma}.
\]
We can then write, for $\sigma\neq1$,
\[
\text{CE}\left(s\right)\;=\;\left(\frac{E_{0}\left[\left.\sum_{t=0}^{\infty}\beta^{t}u\left(c_{t}^{A}\left(s^{t}\right)\right)\right|s_{0}=s\right]}{E_{0}\left[\left.\sum_{t=0}^{\infty}\beta^{t}u\left(c_{t}^{B}\left(s^{t}\right)\right)\right|s_{0}=s\right]}\right)^{\frac{1}{1-\sigma}}-1\;=\;\left(\frac{V^{B}\left(s\right)}{V^{A}\left(s\right)}\right)^{\frac{1}{1-\sigma}}-1,
\]
and, for $\sigma=1$,
\[
\text{CE}\left(s\right)\;=\;\exp\left(\left(1-\beta\right)\left(V^{A}\left(s\right)-V^{B}\left(s\right)\right)\right)-1.
\]

This welfare gain measure depends on the state. This shows that the
desirability of the change (say a policy) is state dependent. We have
two ways in which to aggregate these gains that take into account
the distribution over states. (i) We can aggregate welfare gains measured
at every state with respect to the stationary distribution of states.
(ii) We can define a single measure that applies across states, to
an agent who does not know what state they will face.

Let $\Gamma^{B}$ and $\Gamma^{A}$ be stationary distribution over
states. The first option is just $E_{\Gamma^{B}}\left[\text{CE}\left(s\right)\right]=\int\text{CE}\left(s\right)d\Gamma^{B}\left(s\right)$,
where we take the expectation with respect to the stationary distribution
in the benchmark economy, so as to know how the agents in that economy
value the potential change to the alternative economy. The second
option defines $\overline{\text{CE}}$ as the solution to
\[
\int E_{0}\left[\left.\sum_{t=0}^{\infty}\beta^{t}u\left(\left(1+\overline{\text{CE}}\right)c_{t}^{B}\left(s^{t}\right)\right)\right|s_{0}=s\right]d\Gamma^{B}\left(s\right)=\int E_{0}\left[\left.\sum_{t=0}^{\infty}\beta^{t}u\left(c_{t}^{A}\left(s^{t}\right)\right)\right|s_{0}=s\right]d\Gamma^{A}\left(s\right),
\]
so as to know how an agent who does not know what state they will
face values being dropped in either economy. We can further solve
for $\overline{\text{CE}}$ as
\[
\overline{\text{CE}}\;=\;\left(\frac{\int V^{B}\left(s\right)d\Gamma^{A}\left(s\right)}{\int V^{A}\left(s\right)d\Gamma^{B}\left(s\right)}\right)^{\frac{1}{1-\sigma}}-1.
\]

There is one important issue that remains: *What is the source
of the welfare gains (or losses)?* We can use the computation of welfare
to obtain some answers. The gains come from changes in the level of
consumption or from the distribution of consumption across states.
The expected value of consumption in each economy is, respectively,
$C^{B}=\int c^{B}\left(s\right)d\Gamma^{B}\left(s\right)$ and $C^{A}=\int c^{A}\left(s\right)d\Gamma^{A}\left(s\right)$.
We can now think of the welfare gain as happening in steps. First,
we move the level of consumption without changing its distribution
over states. This amounts to scaling consumption in the benchmark
economy by $\frac{C^{A}}{C^{B}}$. That is, define
\[
\hat{c}^{B}\left(\cdot\right)=\frac{C^{A}}{C^{B}}c^{B}\left(\cdot\right);
\]
Second, we change the distribution from $\Gamma^{B}$ to $\Gamma^{A}$
and we update $\hat{c}^{B}$ to $c^{A}$ to capture the change in
the distribution of outcomes, holding the average level of consumption
constant (that is why both $\Gamma$ and $c$ are updated in this
step). The welfare gain in the first case captures the change in levels,
we denote it $\overline{\text{CE}}^{L}$, and the welfare gain in
the second case captures the change in distributions, we denote it
$\overline{\text{CE}}^{D}$.

The level gain is defined as $\overline{\text{CE}}^{L}$ such that
\begin{align*}
\int E_{0}\left[\left.\sum_{t=0}^{\infty}\beta^{t}u\left(\left(1+\overline{\text{CE}}^{L}\right)c_{t}^{B}\left(s^{t}\right)\right)\right|s_{0}=s\right]d\Gamma^{B}\left(s\right) & =\int E_{0}\left[\left.\sum_{t=0}^{\infty}\beta^{t}u\left(\hat{c}_{t}^{B}\left(s^{t}\right)\right)\right|s_{0}=s\right]d\Gamma^{B}\left(s\right)\\
\left(1+\overline{\text{CE}}^{L}\right)^{1-\sigma}V^{B}\left(s\right) & =\left(\frac{C^{A}}{C^{B}}\right)^{1-\sigma}V^{B}\left(s\right)\\
\overline{\text{CE}}^{L} & =\frac{C^{A}}{C^{B}}-1
\end{align*}
The distributional gain is defined as $\overline{\text{CE}}^{D}$
such that
\begin{align*}
\int E_{0}\left[\left.\sum_{t=0}^{\infty}\beta^{t}u\left(\left(1+\overline{\text{CE}}^{D}\right)\times\hat{c}_{t}^{B}\left(s^{t}\right)\right)\right|s_{0}=s\right]d\Gamma^{B}\left(s\right) & =\int E_{0}\left[\left.\sum_{t=0}^{\infty}\beta^{t}u\left(c_{t}^{A}\left(s^{t}\right)\right)\right|s_{0}=s\right]d\Gamma^{A}\left(s\right)\\
\left(\left(1+\overline{\text{CE}}^{D}\right)\frac{C^{A}}{C^{B}}\right)^{1-\sigma}\int E_{0}\left[\left.\sum_{t=0}^{\infty}\beta^{t}u\left(c_{t}^{B}\left(s^{t}\right)\right)\right|s_{0}=s\right]d\Gamma^{B}\left(s\right) & =V^{A}\left(s\right)\\
\left(1+\overline{\text{CE}}^{D}\right)\frac{C^{A}}{C^{B}} & =\left(\frac{V^{A}\left(s\right)}{V^{B}\left(s\right)}\right)^{\frac{1}{1-\sigma}}\\
\left(1+\overline{\text{CE}}^{D}\right)\left(1+\overline{\text{CE}}^{L}\right) & =1+\overline{\text{CE}}
\end{align*}
Showing that the total gain is decomposed into the level and the distributional
gain. Similar ideas apply when utility also depends on leisure, or
on other factors (like bequests). We will return to these ideas in
the context of heterogeneous agent economies, where there are differences
across individuals.

We now want to consider economies with a continuum of agents where
heterogeneity plays a role. In the models of the previous questions
preferences and technology were such that we could aggregate the behavior
of agents into a representative household and a representative firm.
In sum, only the aggregate levels of variables like capital (wealth)
mattered, and not their distribution across individuals. This abstraction
is appropriate for many questions, especially those about the behavior
of aggregates and business cycles, but it comes at big costs because
it essentially collapses various dimensions of relevant heterogeneity
into the behavior of aggregates.

The alternative to representative-agent macroeconomics is what Benjamin
Moll calls \textsl{Distributional Macroeconomics}. I encourage you
to checkout his lecture notes on this available here: [Distributional Macroeconomics Notes](https://benjaminmoll.com/wp-content/uploads/2019/07/DM_long.pdf).
Moll's notes frame the development of macroeconomics towards a state
where inequality at the micro-level matters for the behavior of aggregates,
and the behavior of aggregates matters for individual agents in different
ways.

We can think of two types of heterogeneity to include in our models*:*

*Ex-ante heterogeneity* where agents have different types that
determine their possible actions, preferences, or technology. A good
example of this is models of workers and entrepreneurs, where some
agents are (always) workers while other agents are (always) entrepreneurs.
There can also be further differences within each type of agent, for
example some entrepreneurs can have permanently high- or low-productivity.
See [Guvenen et al. (2023)](https://ocamp020.github.io/GKKO-THEORY.pdf) for an application of these ideas.

*Ex-post heterogeneity* where the differences among agents
arise from their endogenous reaction to the realization of idiosyncratic
and aggregate shocks they face. The differences among agents are then
seen in their states. Some are in debt, some have savings; some have
high income or human capital, some have low income or human capital;
some own housing, some rent (and some houses are larger than others).

Whether the model economy exhibits ex-ante or ex-post heterogeneity
(or both), agents are subject to shocks to their ability to generate
income (say unemployment and employment as in the original work of
[Imrohoroglu 1992](https://doi.org/10.1016/0165-1889(92)90006-Z)), or to their age (some are young,
some are old), or to their health, etc. The distribution of these
shocks along with the endogenous response of the different agents
leads to an endogenous distribution across states. In the absence
of aggregate shocks, this distribution converges to a stationary distribution
of agents. That will be the main objective of our theory: develop
models of the distribution of agents across states.

Why do we care so much about the distribution of agents across states?
The distribution is what connects the micro-behavior of agents with
the macro-aggregates of the economy. The distribution is what allows
us to explicitly aggregate individual behavior in our models. We will
devote most of our time to models where the distribution does not
change in the long run because there are no aggregate shocks. In these
models, the lives of individuals are always changing as they face
shocks and respond to them, moving through the distribution, but the
distribution itself is always the same because the changes in individuals'
lives are all uncoordinated.

In terms of the machinery we have developed so far, the stationary
distribution does not describe the behavior of a single random variable
across time (as it follows a stationary stochastic process) but the
cross-sectional behavior of a population. In this context, aggregates
are of course constant (as in the definition of a steady state) because
they only depend on the distribution, and not on the actions of any
individual.

There is a final ingredient of these models. Critical to their working
is the notion of market incompleteness. If markets were complete,
agents could perfectly insure the idiosyncratic risk they face and
there would be no differences in allocations across them beyond those
explained by preferences and technology. If all heterogeneity is ex-post
heterogeneity, complete markets would effectively do away with these
ex-post differences. The most common form of market incompleteness
is the absence of state-contingent bonds. Instead, agents can only
trade in bonds (or assets) that pay the same regardless of the realization
of idiosyncratic shocks. This prevents agents from fully insuring
against income fluctuations, for instance.
