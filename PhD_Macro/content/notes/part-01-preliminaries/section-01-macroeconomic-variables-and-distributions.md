# Macroeconomic Variables and Distributions

> Part: Preliminaries

The objective of this course (and of much of contemporary macroeconomics)
is to cover the workhorse models and theories used in macroeconomic
applications. This poses a challenge because of the expansive nature
of macroeconomic research, reaching ever-more topics and questions.
So, what do the different approaches and tools in macroeconomics have
in common? The unifying thread we pursue in this course is the objective
of developing theories of the aggregate economy, specifically, of
the distributions of outcomes across people (or firms) and across
time. This means that when we say we study the business cycle, we
develop theories of the stochastic process followed by output over
time. When we study inequality, we develop theories of the distribution
of income or wealth across individuals. When we study firm dynamics,
we develop theories of the stochastic processes followed by firm size
and output together with the distribution of these variables across
firms.

In a nutshell: The study of macroeconomics is the study of movements
of aggregates. These are aggregate variables moving over time, or
the aggregate distribution of outcomes of an economy.

Crucially, macroeconomic theory is directly motivated by its empirical
content. The theories we develop aim to describe the observations
we collect of the evolution of aggregate variables and the distributions
of outcomes. Methodologically, these two types of aggregates are brought
together by the study of Markov processes and their stationary distributions.
The following Sections are devoted to establishing the properties
of Markov processes and their relationship to theories of individual
behavior and the distribution of outcomes they imply. [Part 6](../part-06-random-variables-and-probability/section-22-measure.md#ref-part-random-variables-and-probability)
covers the basics of measure theory and probability needed for the
study of Markov processes.

The theories we will develop in this course have a common core. We
want to model individual behavior in such a way that we walk away
with clear implications for the aggregate behavior we observe in the
form of stochastic process of aggregates and distributions of outcomes.
These models are by nature stochastic and most often dynamic. So,
we will use the power of Stochastic Dynamic Programming to tackle
them. Restricting ourselves to dynamic programming problems is not
a coincidence. Substantial effort went into verifying that this restriction
did not come at a loss. The Theorems developed in Chapter 9 of [Stokey et al. (1989)](https://books.google.com/books?id=tWYo0QolyLAC)
establish the conditions under which we can replace with recursive
problems the more complicated sequential problem (where outcomes can
depend on the full histories of shocks) .

In setting up dynamic problems our focus will be in obtaining policy
functions $g:S\text{(state space)}\rightarrow X\text{(outcome space)}$
that are (literally) the description of behavior offered by our theory.
We will use these policy functions to construct Markov processes for
$X$ consistent with individual optimality (and later with equilibrium
outcomes). The properties of these process include the dynamic behavior
of $X$ (conditional probabilities over future realizations) and the
distribution over outcomes (cross-sectional or over time).

As a way to introduce these ideas I recommend some readings:

- Tom Sargent's "[Macroeconomics After Lucas](http://www.tomsargent.com/research/Macro_after_Lucas.pdf)"
where he develops the idea of what he calls "equilibrium Markov processes"
being a the core of the modern practice of macroeconomics.
- Ben Moll's "[Distributional Macroeconomics](https://benjaminmoll.com/wp-content/uploads/2019/07/DM_long.pdf)"
where he develops the idea of the link between studying aggregate
fluctuations and distributions over population outcomes.

In the rest of this section I illustrate the way in which macroeconomic
theories are developed by means of a simple example.

**Motivating Example: Solow's AK Economy**

Consider the problem of an infinitely-lived agent that chooses consumption
and savings. The agent has access to a linear technology to produce
using capital (an $AK$ technology):
\[
y_{i}=z_{i}a_{i}
\]
where $y_{i}$ is the output produced, $z_{i}$ is the agent's productivity
and $a_{i}$ their assets.

The objective of the agent is to maximize the present discounted value
of their utility. Their objective, given $a_{i,0}$ and $z_{i,0}$,
is
\[
\max_{\left\{ c_{i,t},a_{i,t+1}\right\} _{t=0}^{\infty}}\mathbb{E}_{0}\left[\sum_{t=0}^{\infty}\beta^{t}\log c_{i,t}\right]\qquad\text{s.t. }c_{i,t}+a_{i,t+1}=z_{i,t}a_{i,t}.
\]
The expectation is taken with respect to the realizations of productivity,
$\left\{ z_{i,t}\right\} $, that is a random variable.

There is one key aspect of this problem that makes it easy: There
are no markets (this is a Robinson Crusoe agent) and thus no prices
to find. However, there is another key aspect of the problem that
makes it difficult: The solution depends on the properties of the
stochastic process that $z$ follows. Even describing probabilities
over the infinite sequences of potential productivity realizations
is hard. We are going to circumvent this problem.

Further assume that the stochastic process that productivity follows
is completely characterized by the conditional probability distribution
$\Pr^{z}\left(z^{\prime}|z\right)$. Technically, we assume that for any
sequence of productivities, it is sufficient to condition on the last
realization to obtain the conditional distribution of future realizations:
$\Pr^{z}\left(z_{t+1}|z_{t},z_{t-1},z_{t-2},\ldots\right)=\Pr^{z}\left(z_{t+1}|z_{t}\right)$.
As we will see in the following section, this means that $z$ follows
a Markov process. The conditional probability is the process' *transition
function*. As we will see in the next part of the course, this (along
with some other conditions that we won't check now) means that we
can safely replace the complicated sequential problem above with a
dynamic programming problem:
\[
v(z,a)\;=\;\max_{\left\{ c,a^{\prime}\right\} }\quad\log(c)\,+\,\beta\mathbb{E}_{z^{\prime}}\left[\,v\left(z^{\prime},a^{\prime}\right)\,|z\right]\qquad\text{s.t. }c+a^{\prime}\,=\,za;
\]
where the expected value uses the conditional probability defined
above.

Turns out that the solution to this problem is surprisingly simple
and does not depend on the process followed by productivity. The agent
wants to save a constant fraction of output every period (regardless
of the realization of productivity and hence of the level of output).
This result of an optimal constant savings rate is where the "Solow"
moniker comes from. The policy function is
\[
a^{\prime}\;=\;\overbrace{\quad g\left(z,a\right)\quad}^{\text{Policy Function}}\;=\;\underbrace{\;\beta\;}_{\text{Savings Rate}}\cdot\overbrace{\;za\;}^{\text{Output}}.
\]

**Note:**

You can verify this via guess-and-verify either using the Euler equation
and the policy function above, or the Bellman equation guessing that
the value function has the form $v\left(a,z\right)=\alpha\left(z\right)+\gamma\log\left(a\right)$.

We can now use this policy function to define a Markov process over
the states of the agent. This would be a bivariate process over $\left(z,a\right)$
so that
\[
\Pr\left(\left(z^{\prime},a^{\prime}\right)\;|\;\left(z,a\right)\right)=\Pr\left(z^{\prime}\;|\;z\right)\,\cdot\,\chi\left(a^{\prime}=z\cdot a\right),
\]
where $\chi\left(\text{exp}\right)$ is a logical function that gives
a one is the expression $\text{exp}$ is true and zero if it is false
(that is, an indicator function).

Thus, even though the decision over savings is deterministic given
the state $\left(z,a\right)$, the evolution of $a$ is stochastic
through the effect of $z$ on individual saving choices. In this way
we have developed a theory that has as an outcome a stochastic process
for assets (or wealth, or capital) and, together with $z$, also implies
stochastic processes for output $\left(y=za\right)$ and consumption
$\left(c=\left(1-\beta\right)za\right)$.

We will see in the next section that knowing the transition function
(or conditional probability) that defines a Markov process also allows
us to compute the stationary distribution of the process. In our case
this would correspond to the joint distribution of productivity and
assets over time. However, we can take these same results in a different
direction if we instead interpret the problem as one with a continuum
of agents (indexed by $i$) facing independent productivity shocks
$\left(z_{i}\right)$. In this case, our results would imply a stationary
distribution across agents. We will use this when considering models
of heterogeneity.

**More general processes:**

The savings choice in the example above defines deterministically
future assets. That is, conditional on the current state $\left(z,a\right)$
the future assets $\left(a^{\prime}\right)$ are known with certainty.
This leads to the Markov process defined for the joint evolution of
the state vector $\left(z,a\right)$ derived above. However, a more
general class of models introduces uncertainty over the evolution
of the endogenous states. In the context of our example, the agents
knows their savings $\left(s\right)$ but savings do not determine
future assets, instead, they determine the probability distribution
over future assets, $Q\left(a^{\prime}|s\right)$.

!!! note "Note"
    Even more generally, the probability distribution of future assets can depend on the future realizations of productivity, $Q\left(a^{\prime}|s,z^{\prime}\right)$.

This would be the case if there stochastic depreciation (or appreciation)
of assets across periods, equivalently if the outcome of the savings
process was uncertain. In this case problem becomes
\[
v(z,a)\;=\;\max_{\left\{ c,s\right\} }\quad\log(c)\,+\,\beta\mathbb{E}_{\left(z^{\prime},a^{\prime}\right)}\left[\,v\left(z^{\prime},a^{\prime}\right)\,|z,s\right]\qquad\text{s.t. }c+s\,=\,za;
\]
where the expected value depends on the conditional probabilities
of $z^{\prime}$ and $a^{\prime}$:
\[
\mathbb{E}_{\left(z^{\prime},a^{\prime}\right)}\left[\,v\left(z^{\prime},a^{\prime}\right)\,|\,z,s\right]\,=\,\int_{z^{\prime}}\int_{a^{\prime}}\:v\left(z^{\prime},a^{\prime}\right)\:Q\left(da^{\prime}\;|\;s\right)\Pr\left(dz^{\prime}\;|\;z\right).
\]
The solution to this problem is a policy function for savings $\left(s\right)$
and not for future assets directly, cal it $g^{s}\left(z,a\right)$.
With it at hand we can construct the Markov process for the state
vector as
\[
\Pr\left(\left(z^{\prime},a^{\prime}\right)\;|\;\left(z,a\right)\right)\,=\,\Pr\left(z^{\prime}\;|\;z\right)\,\cdot\,Q\left(a^{\prime}\;|\;s=g^{s}\left(z,a\right)\right).
\]

A final alternative is to allow the choices of the agent to influence
the distribution of future shocks. In this way, while shocks are still
exogenous their distribution is partly determined by the agent. This
amounts to making the probability of future realization of $z$ dependent
on current $z$ and the choices of the agent $a^{\prime}$: $\Pr^{z}\left(\cdot|z,a^{\prime}\right)$.
