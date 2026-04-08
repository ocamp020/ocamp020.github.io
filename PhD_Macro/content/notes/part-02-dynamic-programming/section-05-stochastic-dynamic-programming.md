# Stochastic Dynamic Programming

> Part: Dynamic Programming

We now want to establish the basics of dynamic programming problems
where (some of) the states are subject to stochastic variation. We
want to allow the variation in the stochastic variables to be serially
correlated and for that we use the concepts developed for Markov processes
in [Section 3](../part-01-preliminaries/section-03-markov-processes.md#ref-sec-markov-processes). The results below are a summary
of those in Chapter 9 of [Stokey et al. (1989)](https://books.google.com/books?id=tWYo0QolyLAC).

The basic problem takes one of two forms:
<a id="ref-eq-dp-stochastic-type-1" class="course-anchor"></a>
<a id="ref-eq-dp-stochastic-type-2" class="course-anchor"></a>
\begin{align}
v\left(k,z\right) & =\max_{k^{\prime}\in\left[0,zf\left(k\right)\right]}\left\{ U\left(zf\left(k\right)-k^{\prime}\right)+\beta\int_{z}v\left(k^{\prime},z^{\prime}\right)Q\left(z,dz^{\prime}\right)\right\} \tag{5.1}\\
v\left(k,z\right) & =\max_{y\in\left[0,f\left(k\right)\right]}\left\{ U\left(f\left(k\right)-y\right)+\beta\int_{z}v\left(y-z^{\prime},z^{\prime}\right)Q\left(z,dz^{\prime}\right)\right\} \tag{5.2}
\end{align}
The key mathematical feature in the two models is the expectation
over future values of the state $z$ taking as given the state's current
value. The conditional distribution of $z^{\prime}$ is given by the transition
function $Q$.

The key economic difference between the two problems is the degree
of control over the future value of the states. In the first problem
the future value of state $k$ is perfectly controlled and there is
only uncertainty over the future value of $z$. In the second problem
the value of the first state is only known until the following period.
Only the choice $y$ is known by the decision maker, but the value
of $k^{\prime}=y-z^{\prime}$ depends on $z^{\prime}$.

The second problem is of course more general and it also allows for
more flexible numerical methods for the solution of the functional
equation. See [Phelan and Eslami (2022)](https://www.sciencedirect.com/science/article/pii/S0165188922001427).

The general form of the stochastic dynamic programming problem is
cumbersome because of the required notation to take into account the
stochastic process induced by the choices of the decision maker. However,
the end result is basically the same as in the non-stochastic case
of [Section 4](section-04-non-stochastic-dynamic-programming.md#ref-sec-non-stochastic-dp). Most importantly, the principle
of optimality and the contraction mapping theorem still apply.

In what follows we cover the basic definitions that will be useful
to establish what constitutes a solution to the stochastic dynamic
programming problem. We will later use these to construct a competitive
equilibrium in decentralized economies. We will do this for the first
type of problem shown above. Even though it is less general, the basic
concepts are clearer in it and it maps better to the neoclassical
growth model, leading example to come.

We start by defining measurable spaces for the endogenous state $\left(X,\mathcal{X}\right)$
and the exogenous (stochastic) state $\left(Z,\mathcal{Z}\right)$, as
well as their product that forms the state space of the problem $\left(S,\mathcal{S}\right)=\left(X\times Z,\mathcal{X}\times\mathcal{Z}\right)$.
We also impose that $Q$ is a stationary transition function, particularly
that it satisfies the Feller property ([Definition 3.3](../part-01-preliminaries/section-03-markov-processes.md#ref-def-feller-property))
preserving continuity and boundedness.

The decision problem consists in choosing the future value of the
endogenous state, a choice $y$ from a feasible set characterized
by the correspondence $\Gamma:X\times Z\to Z$. The graph of $\Gamma$
is $A=\left\{ \left(x,y,z\right)|y\in\Gamma\left(x,z\right)\right\} $.
The payoff function is $F:A\to\mathbb{R}$ and the decision maker
discounts future payoffs at a rate $\beta\geq0$.

## The Sequential Problem

The sequential problem is where most of the notational complications
arise. The decision maker takes as given some initial state $\left(x_{0},z_{0}\right)$
and then makes *contingency plans *that specify actions in
future periods depending on the realization of shocks up until then
(the information available). Importantly, the plans depend only on
the history of shocks (the exogenous state) as the endogenous state,
$x$, is chosen every period, except for the first. The objective
is to maximize the present discounted expected payoff. The expectation
is over the possible sample paths for the realization of the shocks.
This requires dusting off the notation on stochastic processes developed
after [Definition 3.7](../part-01-preliminaries/section-03-markov-processes.md#ref-def-stochastic-process).
!!! info "Definition 5.1: Contingency Feasible Plan"

    Let $\left(Z^{t},\mathcal{Z}^{t}\right)$
    be a measurable space over the partial history of shocks in periods
    1 through $t$. A feasible plan is a value $\pi_{0}\in\Gamma\left(x_{0},z_{0}\right)$
    and a sequence of measurable functions $\pi_{t}:Z^{t}\to\Gamma\left(\pi_{t-1}\left(z^{t-1}\right),z_{t}\right)$.
    Denote by $\Pi\left(s_{0}\right)$ the set of plans feasible given
    $s_{0}=\left(x_{0},z_{0}\right)$.

The measurability conditions over the (choice) functions $\pi_{t}$
implies that we can compute probabilities over the outcomes (decisions)
given the probabilities on paths implied by $Q$. Recall that $Q$
is a function over $\left(Z,\mathcal{Z}\right)$ so that, given $s_{0}$,
we can define the probability measure $\mu^{t}\left(z_{0},\cdot\right):\mathcal{Z}^{t}\to\left[0,1\right]$
as in [Definition 3.5](../part-01-preliminaries/section-03-markov-processes.md#ref-def-probability-measure-sequences). This function
establishes probabilities over sequences of shocks $z^{t}$ and allows
to compute expectations over payoffs $F\left(\cdot\right)$ provided
that $F$ is measurable with respect to the appropriate $\sigma$-algebra
on $A$ (defined as $\mathcal{A}=\left\{ C\in{\mathcal{X}\times X\times Z}|C\in A\right\} $)
and that the function $F$ is integrable (either by being always positive
or negative, or by being integrable with respect to $\mu^{t}$ given
any feasible plan $\pi\in\Pi\left(s_{0}\right)$). These conditions
allow us to define the (period-t) discounted payoffs
\begin{align*}
u_{0}\left(\pi,s_{0}\right) & =F\left(x_{0},\pi_{0},z_{0}\right);\\
u_{n}\left(\pi,s_{0}\right) & =F\left(x_{0},\pi_{0},z_{0}\right)+\sum_{t=1}^{n}\beta^{t}\int_{Z^{t}}F\left(\pi_{t-1}\left(z^{-1}\right),\pi_{t}\left(z^{t}\right),z_{t}\right)\mu^{t}\left(z_{0},dz^{t}\right);
\end{align*}
and its limit
\[
u\left(\pi,s_{0}\right)=\lim_{n\to\infty}u_{n}\left(\pi,s_{0}\right).
\]
This finally allow us to define the sequential problem of the decision
maker:
<a id="ref-eq-sequential-problem-stochastic" class="course-anchor"></a>
\begin{equation}
v^{\star}\left(s\right)=\max_{\pi\in\Pi\left(s\right)}u\left(\pi,s\right)\tag{5.3}
\end{equation}

Just posing this problem is a mouthful. Solving it is even worse.
First, just evaluating the probabilities along the sample path becomes
increasingly taxing. For instance, even if the exogenous state could
take only two values, there are over a thousand possible histories
after 10 periods (and the number gets prohibitively large for 100
periods). Each of these histories has its own contingent plan, that
is evaluated depending on its probability.

When the decision maker does not have perfect control over the endogenous
state variable as in the second problem in [(5.2)](#ref-eq-dp-stochastic-type-2)
we must also define a law of motion for the endogenous state variable
\[
\phi:X\times X\times Z\to X
\]
so that $x^{\prime}=\phi\left(x,y,z^{\prime}\right)$ is the next period's endogenous
state. This law of motion interacts with the contingent choices of
the control, $y$, to generate a contingent plan, that is now
!!! info "Definition 5.2: Contingency Feasible Plan'"

    Let $\left(Z^{t},\mathcal{Z}^{t}\right)$
    be a measurable space over the partial history of shocks in periods
    1 through $t$. A feasible plan is a value $\pi_{0}\in\Gamma\left(x_{0},z_{0}\right)$
    and a sequence of measurable functions $\pi_{t}:Z^{t}\to\Gamma\left(x_{t}^{\pi}\left(z^{t}\right),z_{t}\right)$,
    where $x_{t}^{\pi}\left(z^{t}\right)\equiv\phi\left(x_{t-1}^{\pi}\left(z^{t-1}\right),\pi_{t-1}\left(z^{t-1}\right),z_{t}\right)$
    is defined as the (contingent) path of the endogenous variable given
    the plan $\pi$. Denote by $\Pi\left(s_{0}\right)$ the set of plans
    feasible given $s_{0}=\left(x_{0},z_{0}\right)$.

The implication of the changes to the problem is that we now have
two stochastic processes. One is the exogenous state variable $z$,
that we treat just as before. In the first type of problem this process
is enough to describe the problem as it completely describes the process
of choices, $y$, and hence of the endogenous state $x^{\prime}=y$. In
this more general case we have to interface the process for $z$ through
the law of motion $\phi$ to obtain the process for $x$ given a plan
$\pi$.

## The Recursive Problem

The alternative to the sequential problem is to exploit the Markov
nature of the exogenous (stochastic) state. Because $z_{t}$ follows
a Markov process we do not actually have to carry around the whole
history of shocks and instead we can subsume it in its current realization
$z_{t}$. However, this is not enough to determine the choice of the
decision maker. In the sequential problem, the sequence of the exogenous
state $z^{t}$, along with the initial value of the endogenous state
$x_{0}$, contained all the information needed to know the current
state given a contingent plan. If we drop the history of the exogenous
state in favor of just its current realization, we have to introduce
the current value of $x$ that contains the (relevant) information
about the previous shocks.

The problem is now
<a id="ref-eq-dp-stochastic" class="course-anchor"></a>
\begin{equation}
v\left(x,z\right)=\max_{y\in\Gamma\left(x,z\right)}\left\{ F\left(x,y,z\right)+\beta\int v\left(y,z^{\prime}\right)Q\left(z,dz^{\prime}\right)\right\} ,\tag{5.4}
\end{equation}
with its associated policy function (or in general a correspondence)
<a id="ref-eq-pf-stochastic" class="course-anchor"></a>
\begin{equation}
G\left(x,z\right)=\left\{ y\in\Gamma\left(x,z\right)\;|\;v\left(x,z\right)=F\left(x,y,z\right)+\beta\int v\left(y,z^{\prime}\right)Q\left(z,dz^{\prime}\right)\right\} .\tag{5.5}
\end{equation}

The policy function $G$ is the object of interest for most problems
as it describes the actions of the decision maker and, as we will
discuss below, it induces a distribution over the outcomes of the
model at the core of representative and heterogeneous agent models.

In the second type of problem in [(5.2)](#ref-eq-dp-stochastic-type-2)
the recursive formulation introduces the law of motion $\phi$:
\begin{equation}
v\left(x,z\right)=\max_{y\in\Gamma\left(x,z\right)}\left\{ F\left(x,y,z\right)+\beta\int v\left(\phi\left(x,y,z^{\prime}\right),z^{\prime}\right)Q\left(z,dz^{\prime}\right)\right\} . \tag{5.6}
\end{equation}

<a id="ref-subsec-the-principle-of-optimality-stochastic" class="course-anchor"></a>
## The Principle of Optimality

The first half of the principle of optimality comes easily. We can
construct the optimal contingency plans $\pi_{t}$ out of $G$. The
general construction is simple but required worrying about measurability
when $G$ is a correspondence. When $G$ is a function we can simply
construct the contingent plans recursively as
\[
\pi_{0}=G\left(s_{0}\right),\ldots,\pi_{t}\left(z^{t}\right)=G\left(\pi_{t-1}\left(z^{t}\right),z_{t}\right),\ldots
\]

This construction of $\pi$ is immediately feasible and measurable.
It is left to show that a contingent plan constructed this way satisfies
the optimal value of the sequential problem, $v^{\star}$. The following
theorem gives conditions for this, the proof is in Theorem 9.2 of
[Stokey et al. (1989)](https://books.google.com/books?id=tWYo0QolyLAC).
!!! abstract "Theorem 5.1"

    Let $\left(X,\mathcal{X}\right)$, $\left(Z,\mathcal{Z}\right)$, Q, $F$,
    $\Gamma$, and $\beta$ be given. $\Gamma$ is non-empty valued and
    allows for a measurable selection. $F$ is $\mathcal{A}$-measurable
    and integrable (see Assumption 9.2 in [Stokey et al. 1989](https://books.google.com/books?id=tWYo0QolyLAC)). Let $v^{\star}$
    be as in [(5.3)](#ref-eq-sequential-problem-stochastic) and $v$ as in
    [(5.4)](#ref-eq-dp-stochastic) such that
    \[
    \lim_{t\to\infty}\int_{Z^{t}}\beta^{t}v\left(\pi_{t-1}\left(z^{t-1}\right),z_{t}\right)\mu^{t}\left(z_{0},dz^{t}\right)=0
    \]
    for all feasible plans $\pi\in\Pi\left(s_{0}\right)$ and all initial
    states $s_{0}\in X\times Z$. Finally, let $G$ be defined as in [(5.5)](#ref-eq-pf-stochastic)
    and suppose that it is non-empty and allows for a measurable selection.
    
    Then, $v=v^{\star}$ and any plan $\pi^{\star}$ generated by $G$
    achieves the maximum in [(5.3)](#ref-eq-sequential-problem-stochastic).

The result can be strengthened to show that a contingent plan is optimal
if and only if it is generated by $G$. But the details do not add
to the intuition of these problems. It can also be shown to apply
to the more general problem in [(5.2)](#ref-eq-dp-stochastic-type-2) under
slight modifications to the assumptions of the theorem.

Section 9.2 of [Stokey et al. (1989)](https://books.google.com/books?id=tWYo0QolyLAC) focuses on bounded problems of the type
most commonly encountered in economic applications and establishes
how to apply a version of the contraction mapping theorem that leads
to the construction of solutions to the dynamic programing problem
in [(5.4)](#ref-eq-dp-stochastic) and shows that the Envelope theorem applies
to these problems (under additional continuity assumptions) so as
to obtain the derivatives of the value function $v$ in therms of
the payoff function $F$.

<a id="ref-subsec-markov-processes-over-states" class="course-anchor"></a>
## Markov Processes over States

Consider again the dynamic programming problem in [(5.4)](#ref-eq-dp-stochastic)
and suppose that its solution is a policy function $G$ (single-valued).
The objective is to describe the behavior and properties of the sequence
of states $\left\{ s_{t}\right\} =\left\{ \left(x_{t},z_{t}\right)\right\} $
as a function of the properties of the transition function of $z$,
$Q$, and the policy function $G$. More precisely, the objective
is to show that $\left\{ s_{t}\right\} $ follows itself a Markov
process with some transition function $P$.

The main result here is
!!! abstract "Theorem 5.2"

    Let $\left(X,\mathcal{X}\right)$ and $\left(Z,\mathcal{Z}\right)$ be measurable
    spaces with their product space $\left(S,\mathcal{S}\right)$ also measurable.
    Let $Q:Z\times\mathcal{Z}\to\left[0,1\right]$ be a transition function
    for the exogenous state $z$ and $G:S\to X$ a policy function for
    the endogenous state $x$.
    
    If $G$ is measurable with respect to $\mathcal{Z}$ then the function
    $P:S\times\mathcal{S}\to\left[0,1\right]$ defined as
    \[
    P\left(\left(x,z\right),A\times B\right)=\begin{cases}
    Q\left(z,B\right) & \text{ if }G\left(x,z\right)\in A\\
    0 & \text{ if }G\left(x,z\right)\notin A
    \end{cases}
    \]
    is a transition function on the state space $\left(S,\mathcal{S}\right)$
    defining a Markov process.

So, out of the solution of the dynamic problem comes a stochastic
process for states. In this case the process is quite straightforward:
the exogenous state evolves according to $Q\left(z,\cdot\right)$
and the endogenous state evolves deterministically because the decision
maker has full control over it $\left(\phi\left(x,y,z^{\prime}\right)=y\right)$.
Because the evolution of the endogenous state is deterministic it
either is in a set $A\in\mathcal{X}$, or it is not. If it is, then the
transition function $P$ just needs to care about the conditional
probability of $z^{\prime}\in B\in\mathcal{Z}$ given the current value of
the exogenous state, $z$.

This construction of the Markov process will be crucial for the study
of heterogeneous agent models in [Part 3](../part-03-heterogeneous-agent-models/section-07-the-income-fluctuations-model-and-precautionary-savings.md#ref-part-heterogeneous-agent-models).

We now turn to the properties of the Markov process characterized
by $P$. Unsurprisingly, $P$ inherits its properties from $Q$.
!!! abstract "Theorem 5.3"

    Consider the following conditions:
    
    1. $X$ is a convex Borel set in $\mathbb{R}^{\ell}$ with Borel subsets
    $\mathcal{X}$;
    1. either $Z$ is countable with $\mathcal{Z}=2^{Z}$ its power set (set
    of all subsets) or $Z$ is a compact (Borel) set in $\mathbb{R}^{k}$with
    Borel subsets $\mathcal{Z}$ and $Q$ satisfies the Feller property;
    1. $G$ is continuous.
    
    If all conditions are satisfied, then $P$ satisfies the Feller property.

This result is important because, as seen in [Section 3](../part-01-preliminaries/section-03-markov-processes.md#ref-sec-markov-processes),
the Feller property is key for most results in Markov processes that
we care about. All the conditions in the theorem are used so that
continuity makes sense. When $Z$ is countable continuity is immediate
on $z$ and so $Q$ already satisfies the Feller property. The insistence
on Borel sets plays a similar role when the sets are uncountable.

The main offshoot of this Theorem is establishing the existence of
an invariant distribution for the states under the solution of the
dynamic programming problem. This is what we refer to as the *stationary
distribution* of the states. See [Theorem 3.4](../part-01-preliminaries/section-03-markov-processes.md#ref-thm-feller-invariant-distribution).
When $P$ also satisfies the Monotone property the invariant distribution
is unique and the distribution of states converges to it, as in [Theorem 3.5](../part-01-preliminaries/section-03-markov-processes.md#ref-thm-monotone-invariant-distribution) when $X$ and $Z$ are
rectangles in Euclidean spaces.

When the endogenous state evolves according to the law of motion $\phi\left(x,y,z^{\prime}\right)$
we must adjust the construction of the transition function for the
states. The key difference is that $x^{\prime}$ is now stochastic and
there is therefore a distribution over its possible values given the
previous state $\left(x,z\right)$. This distribution is constructed
from $G$ and $Q$ similar to the case above.

To better understand the construction of the Markov process take a
step back. The transition function $P\left(\left(x,z\right),A\times B\right)$
is answering the question of how likely is it that $\left(x^{\prime},z^{\prime}\right)\in A\times B$
given the values of $\left(x,z\right)$. But the value of $x^{\prime}=\phi\left(x,y,z^{\prime}\right)$
depends on $z^{\prime}$. In fact, $z^{\prime}$ is the only unknown given that
we have $\left(x,z\right)$. So, we can ask what is the set of values
of $z^{\prime}$ that would make $x^{\prime}\in A$ hold and then see if those
values of $z^{\prime}$ are also in $B$. Call that set $H$ and define
it (in general as a correspondence) as
\[
H\left(\left(x,z\right),A\right)=\left\{ z^{\prime}\in Z\,|\,x^{\prime}=\phi\left(x,G\left(x,z\right),z^{\prime}\right)\in A\right\} .
\]
The probability that $\left(x^{\prime},z^{\prime}\right)\in A\times B$ given
$\left(x,z\right)$ is then the probability that $z^{\prime}\in H\cap B$
given $z$, so we define the transition function as
\[
P\left(\left(x,z\right),A\times B\right)=Q\left(z,H\left(\left(x,z\right),A\right)\cap B\right).
\]
Under appropriate assumptions $P$ inherits the Feller property from
$Q$ as above.
