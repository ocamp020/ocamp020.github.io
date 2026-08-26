<a id="ref-sec-markov-processes" class="course-anchor"></a>
# Markov Processes

> Part: Preliminaries

As we will see in [The Bellman Equation](../part-02-dynamic-programming/section-04-non-stochastic-dynamic-programming.md#ref-sec-the-bellman-equation) a great
deal of problems can be expressed in a recursive setting, and the
use of recursive methods can provide solutions to problems that would
otherwise be impossible to handle. When dealing with random variables
the same issue arises. In particular, one can think of a sequence
formed by the realizations of a random variable. Because the sequence
is ordered, one can think of each element as being realized sequentially.
In this way, it is natural to consider the case in which one element
of the sequence depends on the value of the previous element. More
formally, Markov processes are those in which the distribution of
one element of the sequence depends on the realization of the previous
one.

The objective is to introduce shocks to a dynamic program, so we start
by considering the deterministic dynamic program of [The Bellman Equation](../part-02-dynamic-programming/section-04-non-stochastic-dynamic-programming.md#ref-sec-the-bellman-equation),
characterized by the Bellman equation:
<a id="ref-eq-000020fe-2" class="course-anchor"></a>
\begin{equation}
v\left(x\right)=\sup_{y\in\Gamma\left(x\right)}\left\{ F\left(x,y\right)+\beta v\left(y\right)\right\} \tag{3.1}
\end{equation}
The idea is to add a random variable whose realization $z$ will affect
the problem, $z$ is a state of the problem and its drawn each period
from a distribution characterized by the measure $\lambda$. Formally
consider $\left(Z,\mathcal{Z},\lambda\right)$ a probability space, then
we can define the problem to be::
<a id="ref-eq-000020fe-3" class="course-anchor"></a>
\begin{equation}
v\left(x,z\right)=\sup_{y\in\Gamma\left(x\right)}\left\{ F\left(x,y,z\right)+\beta\int v\left(y,z^{\prime}\right)\lambda\left(dz^{\prime}\right)\right\} \tag{3.2}
\end{equation}
Recall that $\lambda:\mathcal{Z}\to\mathbb{R}_{+}$ maps sets of the
$\sigma$-algebra $\mathcal{Z}$ to real numbers. The problem above can
be solved using the results of Sections ([Section 22: Measure](../part-06-random-variables-and-probability/section-22-measure.md#ref-sec-measure)) to ([Section 25: The Stieltjes integral](../part-06-random-variables-and-probability/section-25-the-stieltjes-integral.md#ref-sec-the-stieltjes-integral)),
but it is not general enough for our purposes because the distribution
of $z$ is fixed, and each draw is taken (each period) from the same
distribution.

In general we want the distribution of $z^{\prime}$ to be influenced by
the previous draw $z$, for this we need a special type of function,
$Q:Z\times\mathcal{Z}\to\mathbb{R}$, such that for all $z\in Z$ it
holds that $Q\left(z,\cdot\right)$ is a probability distribution
for $z^{\prime}$. This is called a transition function and it allows to
express the problem as:
<a id="ref-eq-000020fe-3-1" class="course-anchor"></a>
\begin{equation}
v\left(x,z\right)=\sup_{y\in\Gamma\left(x\right)}\left\{ F\left(x,y,z\right)+\beta\int v\left(y,z^{\prime}\right)Q\left(z,dz^{\prime}\right)\right\} \tag{3.3}
\end{equation}
The objective is now to characterize transition functions and the
properties of the process that they generate.

## Transition functions

!!! info "Definition 3.1: Transition Function"

    Let $\left(Z,\mathcal{Z}\right)$ be a
    measurable space. A transition function is a function $Q:Z\times\mathcal{Z}\to\left[0,1\right]$
    such that:


    1. For each $z\in Z$ the function $Q\left(z,\cdot\right)$ is a probability
    measure on $\left(Z,\mathcal{Z}\right)$.
    1. For each $A\in\mathcal{Z}$ the function $Q\left(\cdot,A\right)$ is
    a $\mathcal{Z}$-measurable function.

The interpretation is that for all current value of the random variable
the transition function induces a probability measure for next period's
value of the variable. Then $Q\left(a,A\right)$ is the probability
that $z^{\prime}\in A$ if the current value of the variable is $a$.
\[
Q\left(a,A\right)=\Pr\left(z^{\prime}\in A|z=a\right)
\]

Any transition function defines two operators that will be of great
importance later.
!!! info "Definition 3.2"

    Let $Q$ be a transition function on a measurable space $\left(Z,\mathcal{Z}\right)$.
    Define $\mathcal{F}$ as the set of $\mathcal{Z}$-measurable functions
    and $\Lambda$ the set of probability measures on $\left(Z,\mathcal{Z}\right)$.


    1. The Markov operator of $Q$ is an operator $T$ defined on the set
    of $\mathcal{Z}$-measurable functions:
    \[
    Tf\left(z\right)=\int f\left(z^{\prime}\right)Q\left(z,dz^{\prime}\right)
    \]
    for all $z\in Z$. $T$ is the expected value of $f$ in the next
    period if today's realization is $z$.
    1. The Adjoint operator of $Q$ is $T^{\star}$ is an operator defined
    on probability measures on $\left(Z,\mathcal{Z}\right)$:
    \[
    T^{\star}\lambda\left(A\right)=\int Q\left(z,A\right)\lambda\left(dz\right)
    \]
    for all $A\in\mathcal{Z}$. $T$ gives the probability that $z^{\prime}\in A$
    if the current value of $z$ is drawn from probability distribution
    $\lambda$.

These operators are important because they will allow to characterize
the distribution of a sequence of random variables starting at some
initial distribution. This is the objective when solving a stochastic
dynamic programming problem. In order for $T$ and $T^{\star}$ to
be useful it is first necessary to check that they are sufficiently
well behaved. The following propositions will establish that the operators
can be used recursively and their proof will be instructive of how
proofs go in measure theory.
!!! abstract "Proposition 3.1"

    Let $\left(Z,\mathcal{Z}\right)$ be a measurable space and $Q$ a transition
    function on that space with Markov operator $T$. Then $T:M^{+}\left(Z,\mathcal{Z}\right)\to M^{+}\left(Z,\mathcal{Z}\right)$
    where $M^{+}\left(Z,\mathcal{Z}\right)$ is the space of nonnegative,
    extended variable $\mathcal{Z}$-measurable functions.

??? success "Proof"

    The proof is done iteratively, first for indicator functions, then
    it is generalized to simple functions and then to arbitrary nonnegative
    measurable functions.

    First, for any $f\in M^{+}$ we have that $Tf$ is a nonnegative function
    of extended real value, this follows immediately, then it is left
    to check that $Tf$ is also measurable.

    \begin{casenv}
    - Let $A\in\mathcal{Z}$ and $f=\chi_{A}$, where $\chi_{A}$ is by construction
    measurable and nonnegative. Then:
    \[
    Tf\left(z\right)=\int f\left(z^{\prime}\right)Q\left(z,dz^{\prime}\right)=\int\chi_{A}\left(z^{\prime}\right)Q\left(z,dz^{\prime}\right)=\int_{A}Q\left(z,dz^{\prime}\right)=Q\left(z,A\right)
    \]
    Because $Q\left(\cdot,A\right)$ is measurable (as a function of $z$
    for fixed $A$) by definition we establish measurability of $Tf$.
    - Let $f$ be a simple function then there exists (finitely many) indicator
    functions such that: $f\left(z\right)=\underset{i=1}{\overset{n}{\sum}}a_{i}\chi_{A_{i}}\left(z\right)$.
    Then the Markov operator gives:
    \begin{eqnarray*}
    Tf\left(z\right) & = & \int f\left(z^{\prime}\right)Q\left(z,dz^{\prime}\right)\\
    & = & \int\sum_{i=1}^{n}a_{i}\chi_{A_{i}}\left(z^{\prime}\right)Q\left(z,dz^{\prime}\right)\\
    & = & \sum_{i=1}^{n}a_{i}\int_{A}\chi_{A_{i}}\left(z^{\prime}\right)Q\left(z,dz^{\prime}\right)\\
    & = & \sum_{i=1}^{n}a_{i}T\chi_{A_{i}}
    \end{eqnarray*}
    By the previous case each $T\chi_{A_{i}}$ is measurable. Then, $Tf$
    is also measurable because the sum and scalar product of measurable
    functions is also measurable .
    - Let $f$ be an arbitrary nonnegative, extended real value, measurable
    function. By [Proposition 23.5](../part-06-random-variables-and-probability/section-23-measurable-functions.md#ref-simple-000020functions-000020and-000020measurability)
    we know that $f$ can be expressed as the limit of point-wise convergent
    sequence of simple functions because it is measurable and nonnegative.
    So for all $z$ we have:
    \begin{eqnarray*}
    Tf\left(z\right) & = & \int f\left(z^{\prime}\right)Q\left(z,dz^{\prime}\right)\\
    & = & \int\lim\phi_{n}\left(z^{\prime}\right)Q\left(z,dz^{\prime}\right)\\
    & = & \lim\int\phi_{n}\left(z^{\prime}\right)Q\left(z,dz^{\prime}\right)\\
    & = & \lim T\phi_{n}\left(z\right)
    \end{eqnarray*}
    where the third step of interchanging the limit and the integral follows
    from Lebesgue's Monotone Convergence theorem.

    !!! note "Note"
        The theorem states that if $\left\{ f_{n}\right\} $ is a monotone increasing sequence of nonnegative measurable functions that converges pointwise to $f$, then $\int fd\mu=\lim\int f_{n}d\mu$. Recall from [Proposition 23.5](../part-06-random-variables-and-probability/section-23-measurable-functions.md#ref-simple-000020functions-000020and-000020measurability) that the sequence $\left\{ \phi_{n}\right\} $ of simple functions can be chosen to be monotone increasing.

    Finally the pointwise limit of measurable functions is a measurable
    function ([Proposition 23.4](../part-06-random-variables-and-probability/section-23-measurable-functions.md#ref-prop-000020pointwise-000020limit-000020and-000020measurability)).
    The result follows because $T\phi_{n}$ is measurable by the previous
    case.
    \end{casenv}

!!! abstract "Corollary 3.1"

    Let $\left(Z,\mathcal{Z}\right)$ be a measurable space and $Q$ a transition
    function on that space with Markov operator $T$. Then $T:B\left(Z,\mathcal{Z}\right)\to B\left(Z,\mathcal{Z}\right)$
    where $B\left(Z,\mathcal{Z}\right)$ is the space of bounded $\mathcal{Z}$-measurable
    functions.

??? success "Proof"

    Let $f$ be a bounded measurable function, then if $0\leq f\leq m$
    it holds that $0\leq Tf\leq m$, because $Q\left(z,\cdot\right)$
    is a probability measure. Then $Tf$ is bounded. Measurability follows
    from the proposition above by applying it to $f=f^{+}-f^{-}$.

This allows us to apply iteratively the operator to a function because
if $f\in B\left(Z,\mathcal{Z}\right)$ then $Tf\in B\left(Z,\mathcal{Z}\right)$,
which allows to evaluate $T\left(Tf\right)$, and so on. It will also
be important to apply the adjoint operator iteratively to a probability
measure. The following proposition will enable us to do so.
!!! abstract "Proposition 3.2"

    Let $\left(Z,\mathcal{Z}\right)$ be a measurable space and $Q$ a transition
    function on that space with Adjoint operator $T^{\star}$. Then $T^{\star}:\Lambda\left(Z,\mathcal{Z}\right)\to\Lambda\left(Z,\mathcal{Z}\right)$
    where $\Lambda\left(Z,\mathcal{Z}\right)$ is the space of probability
    measures on $\left(Z,\mathcal{Z}\right)$.

??? success "Proof"

    Let $\lambda\in\Lambda\left(Z,\mathcal{Z}\right)$ and consider $T^{\star}\lambda\left(A\right)=\int Q\left(z,A\right)d\lambda\left(dz\right)$.


    1. $T^{\star}\lambda\geq0$ for all $\left(z,A\right)$ because $Q\left(z,A\right)\geq0$.
    1. $T^{\star}\lambda\left(\emptyset\right)=\int Q\left(z,\emptyset\right)\lambda\left(dz\right)=\int0\lambda\left(dz\right)=0$,
    because $Q\left(z,\cdot\right)$ is a probability measure.
    1. $T^{\star}\lambda\left(Z\right)=\int Q\left(z,Z\right)\lambda\left(dz\right)=\int1\lambda\left(dz\right)=1$,
    because $Q\left(z,\cdot\right)$ is a probability measure.
    1. It is left to show that $T^{\star}\lambda$ is countably additive.
    Let $\left\{ A_{i}\right\} \subseteq\mathcal{Z}$ be a sequence of disjoint
    sets and $A=\cup A_{i}$, then:
    \[
    \sum_{i=1}^{\infty}T^{\star}\lambda\left(A_{i}\right)=\sum_{i=1}^{\infty}\int Q\left(z,A_{i}\right)\lambda\left(dz_{i}\right)=\int\left(\sum_{i=1}^{\infty}Q\left(z,A_{i}\right)\right)\lambda\left(dz_{i}\right)=\int Q\left(z,A\right)\lambda\left(dz_{i}\right)=T^{\star}\lambda\left(A\right)
    \]
    where $\sum Q\left(z,A_{i}\right)=Q\left(z,A\right)$ follows from
    $Q$ being a $\sigma$-additive measure and interchange of the sum
    and the integral can be done because of the Lebesgue's monotone convergence
    theorem.

The following result establishes a duality between the Markov operator
and its adjoint, in words it says that the expected value of a function
tomorrow can be computed with either operator.
!!! abstract "Proposition 3.3"

    Let $\left(Z,\mathcal{Z}\right)$ be a measurable space and $Q$ a transition
    function on that space. Then for any function $f\in B\left(Z,\mathcal{Z}\right)$
    (or more generally $f\in M^{+}\left(Z,\mathcal{Z}\right)$) it holds
    that:
    \[
    \int\left(Tf\left(z\right)\right)\lambda\left(dz\right)=\int f\left(z^{\prime}\right)T^{\star}\lambda\left(dz^{\prime}\right)=\int\int f\left(z^{\prime}\right)Q\left(z,dz^{\prime}\right)\lambda\left(dz\right)
    \]

Then to obtain the expected value of function $f$ tomorrow given
a distribution $\lambda$ of $z$ today the order of integration does
not matter.
??? success "Proof"

    [Stokey et al. (1989, Sec. 8.1)](https://books.google.com/books?id=tWYo0QolyLAC).

We can now define a sequence of probability measures over the sequence
of random variables by iterating over $Q$ with the Markov operator.
\begin{eqnarray*}
Q^{1}\left(z,A\right) & = & Q\left(z,A\right)\\
& \vdots\\
Q^{n+1}\left(z,A\right) & = & \left(TQ^{n}\left(\cdot,A\right)\right)\left(z\right)=\int Q^{n}\left(z^{\prime},A\right)Q\left(z,dz^{\prime}\right)
\end{eqnarray*}
Then if a shock is drawn sequentially from $Q$ the function $Q^{n}\left(z,A\right)$
will give the probability of going from initial point $z$ to a value
in set $A$ in exactly $n$ periods. Its easy to show that each $Q^{n}$
is a transition function.

Finally, it is clear that starting from an initial probability $\left(\lambda\right)$
the Adjoint operator can be used to define a sequence of probability
measures $\left\{ \lambda^{n}\right\} $ as $\lambda^{n}=T^{\star}\lambda^{n-1}$,
we interpret $\lambda$ as the distribution of the state $z$ in the
initial period and $\lambda_{n}$ the (unconditional) distribution
of $z$ in the $n^{th}$ period.

As a side note a transition function can have stronger properties
that are of great use in stochastic dynamic programming:
<a id="ref-def-feller-property" class="course-anchor"></a>
!!! info "Definition 3.3: Feller Property"

    A transition
    function $Q$ has the feller property if its Markov operator maps
    the set of continuous bounded function into itself. $T:C\left(Z\right)\to C\left(Z\right)$.

<a id="ref-def-000020monotonicity-000020markov-000020" class="course-anchor"></a>
!!! info "Definition 3.4: Monotone transition functions"

    A transition function $Q$ is said to be monotone
    if its Markov operator maps nondecreasing functions to nondecreasing
    functions.

## Probability measures on spaces of sequences

The idea now is to study sequences of random variables and their probability
distributions, this can be done using the transition function defined
above.

The first task at hand is to define a probability distribution on
a finite sequence of variables. For this let $\left(Z,\mathcal{Z}\right)$
be a measurable space and for $t<\infty$ let $\left(Z^{t},\mathcal{Z}^{t}\right)=\left(Z\times\ldots\times Z,\mathcal{Z}\times\ldots\times\mathcal{Z}\right)$
be a product space. Now let $Q$ be a transition function on $\left(Z,\mathcal{Z}\right)$.
A probability measure on the sequence given $z_{0}$, the initial
value of the variable is:
<a id="ref-def-probability-measure-sequences" class="course-anchor"></a>
!!! info "Definition 3.5: Probability measure on finite sequence"

    $\mu^{t}:Z\times\mathcal{Z}^{t}\to\left[0,1\right]$
    is the probability distribution for the finite sequence and its defined
    as:
    \[
    \mu^{t}\left(z_{0},B\right)=\int_{A_{1}}\ldots\int_{A_{t}}Q\left(z_{t-1},dz_{t}\right)\cdot Q\left(z_{t-2},dz_{t-1}\right)\cdots Q\left(z_{0},dz_{1}\right)
    \]
    where $B=A_{1}\times\ldots\times A_{t}\in\mathcal{Z}^{t}$ is a rectangle
    in $\mathcal{Z}^{t}$. It can be shown that it is sufficient to define
    $\mu^{t}$ only for this type of set, because it can then be extended
    uniquely to measurable sets on $\mathcal{Z}^{t}$ by the Caratheodory
    and Hahn extension theorems.

The next task is to handle infinite sequences of realizations of $z$.
To do this we need to be able to induce a $\sigma$-algebra $\mathcal{Z}^{\infty}$
on the set of infinite sequences and then a probability measure on
that $\sigma$-algebra.

To do this define the set of finite-measurable rectangles. These sets
establish outcomes for the variables for the first $T$ periods, leaving
unspecified what happens to the sequence afterwards.
!!! info "Definition 3.6: Finite-Measurable Rectangles"

    $B$ is a finite measurable
    rectangle if its of the form:
    \[
    B=A_{1}\times\ldots\times A_{T}\times Z\times Z\times\ldots
    \]
    for some finite $T$. Let $\mathcal{C}$ be the set of all finite measurable
    rectangles. Let $\mathcal{A}^{\infty}$ be the set of all finite unions
    of set in $\mathcal{C}$.

It can be shown that $\mathcal{A}^{\infty}$ is an algebra, then one
can define $\mathcal{Z}^{\infty}$ to be the $\sigma$-algebra induced
by $\mathcal{A}^{\infty}$. Then one can define a measure on finite-measurable
rectangles $\mathcal{C}$ just as before, extend it to the algebra $\mathcal{A}^{\infty}$,
and the extend the extension to $\mathcal{Z}^{\infty}$. This proves
the existence of a measure for infinite sequences that coincides with
our notion of measure for finite-measurable rectangles.

Now we can define what a stochastic process is:
<a id="ref-def-stochastic-process" class="course-anchor"></a>
!!! info "Definition 3.7: Stochastic Process"

    Let $\left(\Omega,\mathcal{F},P\right)$
    be a probability space. A stochastic process on $\left(\Omega,\mathcal{F},P\right)$
    is an increasing sequence of $\sigma$-algebras $\mathcal{F}_{1}\subseteq\mathcal{F}_{2}\subseteq\ldots\subseteq\mathcal{F}$,
    a measurable space $\left(Z,\mathcal{Z}\right)$and a sequence of functions
    $\sigma_{t}:\Omega\to Z$ such that each $\sigma_{t}$ is $\mathcal{F}_{t}$-measurable.

!!! info "Definition 3.8: Sample Path"

    Let $\omega\in\Omega$, then $\left(\sigma_{1}\left(\omega\right),\sigma_{2}\left(\omega\right),\ldots\right)$
    is called the sample path of the stochastic process given $\omega$.

Each $\sigma_{t}$ is just a random variable that takes a value on
$Z$ given some event on $\Omega$. In almost all cases we will have
$\left(Z,\mathcal{Z}\right)=\left(\mathbb{R},\mathcal{B}\right)$. The selection
of the probability space $\left(\Omega,\mathcal{F},P\right)$ is also
standard. Because we are interested in the behavior of infinite sequences
of the realizations of the random variable we can set $\left(\Omega,\mathcal{F},P\right)=\left(Z^{\infty},\mathcal{Z}^{\infty},\mu\left(z_{0},\cdot\right)\right)$.
The restriction that the $\sigma$-algebras are increasing follows
from the draws being taken sequentially, this $\sigma$-algebras will
be interpreted as possible histories, and any future history must
include all of the possible previous histories from which it could
have followed.

Given a stochastic process we can use probability measure $P$ to
induce measures on finite sets of sample paths.
!!! info "Definition 3.9: Probabilities on Paths"

    Let $C\in\mathcal{Z}^{n}$ we can define:
    \[
    P_{t+1,\ldots,t+n}\left(C\right)=P\left(\left\{ \omega\in\Omega | \left(\sigma_{t+1}\left(\omega\right),\ldots\sigma_{t+n}\left(\omega\right)\right)\in C\right\} \right)
    \]
    This is the probability that an event occurs and the sample path lies
    in $C$ between periods $t+1$ and $t+n$.

!!! info "Definition 3.10: Stationary Stochastic Process"

    A stochastic process is said
    to be stationary if $P_{t+1,\ldots,t+n}\left(C\right)$ is independent
    of $t$ for all $n$ and $C$. That is, if it does not matter the
    point in time where we start the sequence.

!!! info "Definition 3.11: Conditional probability"

    Let $P_{t+1,\ldots,t+n}\left(C|a_{t-s},\ldots,a_{t-1},a_{t}\right)$
    be the conditional probability of the event $\left\{ \omega\in\Omega | \left(\sigma_{t+1}\left(\omega\right),\ldots\sigma_{t+n}\left(\omega\right)\right)\in C\right\} $
    given that the event $\left\{ \omega\in\Omega | \sigma_{\tau}\left(\omega\right)=a_{\tau}\right\} $
    happened.

Now we can define what a Markov process is:
!!! info "Definition 3.12: Markov Process"

    A stochastic process is a Markov process
    if:
    \[
    P_{t+1,\ldots,t+n}\left(C|a_{t-s},\ldots,a_{t}\right)=P_{t+1,\ldots t+n}\left(C|a_{t}\right)
    \]
    for $t=1,2,\ldots$, $n=1,2,\ldots$, $s=1,2,\ldots,t-1$ and $C\in\mathcal{Z}^{n}$.

The distribution of the path of a Markov process only depends on the
last realization.

A general setting is easy to construct using a transition function
$Q$. Let $\left(\Omega,\mathcal{F},P\right)=\left(Z^{\infty},\mathcal{Z}^{\infty},\mu\left(z_{0},\cdot\right)\right)$
and for each $T$ define $\mathcal{A}^{T}$ as the collection of all
finite-measurable sets:
\[
B=A_{1}\times\ldots\times A_{T}\times Z\times Z\times\ldots
\]
As before this forms an algebra, let $\mathcal{F}^{T}$ be the
$\sigma$-algebra generated by $\mathcal{A}^{T}$. Clearly $\mathcal{F}^{t}\subseteq\mathcal{F}^{t+1}$.
Then we can define the sequence of functions $\tilde{z}_{t}:\Omega\to Z$
as:
\[
\tilde{z}_{t}\left(\omega\right)=\tilde{z}_{t}\left(a_{1},a_{2},\ldots\right)=a_{t}
\]
so that it selects the $t^{th}$ realization of the sequence $\omega$.
These functions are clearly $\mathcal{F}^{t}$ measurable, because they
don't contain information about future realizations of the variable.

The definition of $P$ through $Q$ can be used to verify that this
process is a Markov process. Moreover it holds that:
\[
P_{t+1}\left(C|a_{t-s},\ldots,a_{t}\right)=P_{t+1}\left(C|a_{t}\right)=Q\left(a_{t},C\right)
\]
for $C\in\mathcal{Z}$.

## Markov chains

We now zoom into a special type of Markov process that is particularly
useful in applications of dynamic programming. A Markov chain (or
finite state Markov chain):
!!! info "Definition 3.13: Markov Chain"

    A Markov chain is a Markov process defined
    on a space $Z=\left\{ z_{1},\ldots,z_{l}\right\} $ with finite dimension
    (finitely many elements).

The relevance of Markov chains resides in two observations. First,
they allow for a simple characterization of their transition function,
as shown below. Second, most computational methods (and thus applications)
of dynamic programming discretize the state space, effectively imposing
that the space $Z$ is finite.

Before characterizing the transition function of a Markov chain it
is useful to recall that the natural $\sigma$-algebra over $Z$ is
$\mathcal{Z}=2^{Z}$ (the power set), and that the space of probabilities
distributions over $Z$ is formed by vectors $p\in\mathbb{R}^{l}$
such that $p_{i}\geq0$ and $\underset{i=1}{\overset{l}{\sum}}p_{i}=1$

!!! note "Note"
    Formally $p\in\Delta^{l}$, where $\Delta^{l}=\left\{ p\in\mathbb{R}_{+}^{l}|\underset{i=1}{\overset{l}{\sum}}p_{i}=1\right\} $ is the $l-1$ dimensional simplex. This same set is particularly useful in characterizing price systems in finite dimensional exchange economies.

. The transition function of the Markov process can be then characterized
by a matrix:
!!! info "Definition 3.14: Markov Matrix / Stochastic Matrix"

    A square matrix $\Pi=\left[\pi_{ij}\right]$
    of dimensions $l\times l$ is considered a Markov (or stochastic)
    matrix if $\pi_{ij}\geq0$ for all $i$ and $j$, and $\underset{j=1}{\overset{l}{\sum}}\pi_{ij}=1$
    for all $i$. Equivalently, if its rows are probability distributions
    on $Z$: $\pi_{i}\in\Delta^{l}$.

The transition function of a Markov chain is a function $Q:Z\times\mathcal{Z}\to\mathbb{R}_{+}$
that gives the probability of a given set $A\in\mathcal{Z}$ given a
current state $z_{i}$. We can then construct a Markov matrix by setting:
\[
\pi_{ij}=Q\left(z_{i},\left\{ z_{j}\right\} \right)=\Pr\left(z_{t+1}=z_{j}|z_{t}=z_{i}\right)
\]
So $\pi_{ij}$ is interpreted as the probability that $z_{t+1}=z_{j}$
conditional on $z_{t}=z_{i}$. The row $\pi_{i}=\left(\pi_{i1},\ldots,\pi_{il}\right)$
is the conditional probability of $z_{t+1}$, given that $z_{t}=z_{i}$.

We can also go the other way, constructing a transition function $Q$
from a Markov matrix $\Pi$. Let $A\in\mathcal{Z}$, because $Z$ is
finite we can define $A=\left\{ z_{a_{1}},\ldots,z_{a_{n}}\right\} $
where $a_{1}$, $\ldots$, $a_{n}$ are $n\le l$ indices. This gives:
\[
Q\left(z_{i},A\right)=\sum_{j=1}^{n}\pi_{ia_{j}}
\]

We can now define the Markov operator and the adjoint Markov operator
of a Markov chain making use of the Markov matrix (Markov!).

1. Recall that The Markov operator of $Q$ is an operator $T$ defined
on the set of $\mathcal{Z}$-measurable functions:
\[
Tf\left(z\right)=\int f\left(z^{\prime}\right)Q\left(z,dz^{\prime}\right)
\]
for all $z\in Z$. $T$ is the expected value of $f$ in the next
period if today's realization is $z$. For Markov chains the function
$f$ can be reduced to a row-vector $\vec{f}=\left(f\left(z_{1}\right),\ldots,f\left(z_{l}\right)\right)\in\mathbb{R}^{l}$,
which reduces the integral to:
\[
Tf\left(z_{i}\right)=\vec{f}\pi_{i}^{\prime}
\]
more generally we have:
\[
Tf=\vec{f}\Pi^{\prime}
\]
the $i^{th}$ element of $Tf$ (which is an $l$-dimensional vector)
corresponds to: $E\left[f\left(z_{t+1}\right)|z_{t}=z_{i}\right]$.
1. Recall that the adjoint operator of $Q$ is $T^{\star}$ is an operator
defined on probability measures on $\left(Z,\mathcal{Z}\right)$:
\[
T^{\star}\lambda\left(A\right)=\int Q\left(z,A\right)\lambda\left(dz\right)
\]
for all $A\in\mathcal{Z}$. $T$ gives the probability that $z^{\prime}\in A$
if the current value of $z$ is drawn from probability distribution
$\lambda$. Because the space is finite we can represent probabilities
distributions as vectors in $\Delta^{l}$. Let $p\in\Delta^{l}$ be
an initial distribution on $Z$, we want to know the distribution
on $Z$ for the next period $\left(\hat{p}\right)$:
\[
T^{\star}p=\hat{p}=p\Pi\qquad\text{where: }\hat{p}_{j}=\sum_{i=1}^{l}p_{i}\pi_{ij}
\]
The $j^{th}$ element of $T^{\star}p$ (which is an $l$-dimensional
row-vector) corresponds to the unconditional probability that $z_{t+1}=z_{j}$:
$\Pr\left(z_{t+1}=z_{j}\right)$.

It shouldn't be a surprise that the Markov operator is characterized
by $\Pi^{\prime}$ and the adjoint operator by its transpose $\Pi$.

!!! note "Note"
    If vectors are assumed to be columns instead of rows then $Tf=\Pi f$ and $T^{\star}p=\Pi^{\prime}p$. The adjoint is characterized as the transpose of the Markov operator in any case.

As with general Markov processes there is a special interest in the
limit behavior of the adjoint operator $\left(\underset{n\to\infty}{\lim}p\Pi^{n}\right)$,
in particular the existence and properties of an invariant distribution,
that is $p^{\star}$ such that $p^{\star}=p^{\star}\Pi$ (generally
$\lambda^{\star}=T^{\star}\lambda^{\star}$). The problem of finding an invariant
distribution is frequently cast as an eigenvector problem. $p^{\star}$
is the eigenvector associated with any unit-eigenvalue of $\Pi$.

Another property that will be of interest is the presence of Ergodic
sets. These are subsets of the space $E\subseteq Z$ that the process
never leaves once it takes a value in them. Formally:
!!! info "Definition 3.15: Ergodic Set"

    A set $E\subseteq Z$ is ergodic if and only
    if $Q\left(z_{i},E\right)=1$ for all $z_{i}\in E$ and there does
    not exist a proper subset $E^{\prime}\subset E$ that is ergodic.

The ergodic sets are important because they tell us sections of the
state space that are of interest. Only ergodic sets have positive
mass in the invariant distribution.

Following SLP we now show 5 examples of the possible limit behavior
of Markov chains. After the examples we state the main results on
the existence and uniqueness of ergodic sets, invariant distributions,
and the convergence of the sequences $\left\{ \frac{1}{n}\underset{k=0}{\overset{n}{\sum}}\Pi^{k}\right\} $
and $\left\{ \Pi^{n}\right\} $. (clearly if the second sequence converges
so does the first one).
!!! example "Example 3.1: Uniqueness of ergodic set, convergence of $\left\{ \Pi^{n}\right\} $"

    Let $l=2$ and consider the Markov matrix:
    \[
    \Pi=\left[\begin{array}{cc}
    \frac{3}{4} & \frac{1}{4}\\
    \frac{1}{4} & \frac{3}{4}
    \end{array}\right]
    \]
    Clearly the only ergodic set is $Z$ because one has positive probability
    of going to $z_{1}$ or $z_{2}$ starting in any state. Moreover:
    \[
    \lim_{n\to\infty}\Pi^{n}=\left[\begin{array}{cc}
    \frac{1}{2} & \frac{1}{2}\\
    \frac{1}{2} & \frac{1}{2}
    \end{array}\right]
    \]
    The invariant distribution is then $p^{\star}=\left(\frac{1}{2},\frac{1}{2}\right)$.
    Moreover $\lim\left(p_{0}\Pi^{n}\right)=p^{\star}$ for all $p_{0}\in\Delta^{2}$.

**Note: **Convergence is easily defined in this setup because
the limit is taken element wise.
!!! example "Example 3.2: Uniqueness of a ergodic set, convergence of $\left\{ \Pi^{n}\right\} $"

    Let $l=3$ and $\gamma\in\left(0,1\right)$. Consider the Markov
    matrix:
    \[
    \Pi=\left[\begin{array}{ccc}
    1-\gamma & \frac{\gamma}{2} & \frac{\gamma}{2}\\
    0 & \frac{1}{2} & \frac{1}{2}\\
    0 & \frac{1}{2} & \frac{1}{2}
    \end{array}\right]
    \]
    There is a unique ergodic set $E=\left\{ z_{2},z_{3}\right\} \neq Z$.
    The state $z_{1}$ is never reached again once you leave it. One can
    also show:
    \[
    \Pi^{n}=\left[\begin{array}{ccc}
    \left(1-\gamma\right)^{n} & \frac{\left(1-\left(1-\gamma\right)^{n}\right)}{2} & \frac{\left(1-\left(1-\gamma\right)^{n}\right)}{2}\\
    0 & \frac{1}{2} & \frac{1}{2}\\
    0 & \frac{1}{2} & \frac{1}{2}
    \end{array}\right]
    \]
    clearly $\left\{ \Pi^{n}\right\} $ converges:
    \[
    \lim_{n\to\infty}\Pi^{n}=\left[\begin{array}{ccc}
    0 & \frac{1}{2} & \frac{1}{2}\\
    0 & \frac{1}{2} & \frac{1}{2}\\
    0 & \frac{1}{2} & \frac{1}{2}
    \end{array}\right]
    \]
    and the invariant distribution is $p^{\star}=\left(0,\frac{1}{2},\frac{1}{2}\right)$.

!!! example "Example 3.3: Cyclical sets , convergence of $\left\{ \frac{1}{n}\underset{k=0}{\overset{n}{\sum}}\Pi^{k}\right\} $"

    Consider an $l$-dimensional Markov chain and order its states into
    two subsets, the first one with $k$ elements and the second one with
    $l-k$ elements. Suppose the Markov matrix has the form:
    \[
    \Pi=\left[\begin{array}{cc}
    0 & \Pi_{1}\\
    \Pi_{2} & 0
    \end{array}\right]
    \]
    where the first matrix $\Pi_{1}$ is of dimension $k\times\left(l-k\right)$
    and matrix $\Pi_{2}$ of dimension $\left(l-k\right)\times k$. Clearly
    if at one period one is in the first subset the next period one will
    be in the second subset, and vice-versa. So there are no proper subsets
    that form an ergodic subset, instead the process cycles from the first
    subset to the second period by period.
    \[
    \Pi^{2n}=\left[\begin{array}{cc}
    \left(\Pi_{1}\Pi_{2}\right)^{n} & 0\\
    0 & \left(\Pi_{2}\Pi_{1}\right)^{n}
    \end{array}\right]\qquad\Pi^{2n+1}=\left[\begin{array}{cc}
    0 & \left(\Pi_{1}\Pi_{2}\right)^{n}\Pi_{1}\\
    \left(\Pi_{2}\Pi_{1}\right)^{n}\Pi_{2} & 0
    \end{array}\right]
    \]
    In this example the sequence $\left\{ \Pi^{n}\right\} $ does not
    converge but its odd and even elements do, then the sequence $\left\{ \frac{1}{n}\underset{k=0}{\overset{n}{\sum}}\Pi^{k}\right\} $
    does converge.

    For example if $l=4$, $k=2$ and $\Pi_{1}=\Pi_{2}$:
    \[
    \lim_{n\to\infty}\Pi^{2n}=\left[\begin{array}{cccc}
    \frac{1}{2} & \frac{1}{2} & 0 & 0\\
    \frac{1}{2} & \frac{1}{2} & 0 & 0\\
    0 & 0 & \frac{1}{2} & \frac{1}{2}\\
    0 & 0 & \frac{1}{2} & \frac{1}{2}
    \end{array}\right]\qquad\lim_{n\to\infty}\Pi^{2n+1}=\left[\begin{array}{cccc}
    0 & 0 & \frac{1}{2} & \frac{1}{2}\\
    0 & 0 & \frac{1}{2} & \frac{1}{2}\\
    \frac{1}{2} & \frac{1}{2} & 0 & 0\\
    \frac{1}{2} & \frac{1}{2} & 0 & 0
    \end{array}\right]
    \]
    \[
    \lim_{n\to\infty}\frac{1}{n}\underset{k=0}{\overset{n}{\sum}}\Pi^{k}=\left[\begin{array}{cccc}
    \frac{1}{4} & \frac{1}{4} & \frac{1}{4} & \frac{1}{4}\\
    \frac{1}{4} & \frac{1}{4} & \frac{1}{4} & \frac{1}{4}\\
    \frac{1}{4} & \frac{1}{4} & \frac{1}{4} & \frac{1}{4}\\
    \frac{1}{4} & \frac{1}{4} & \frac{1}{4} & \frac{1}{4}
    \end{array}\right]
    \]
    An invariant distribution is found as one of the rows of the last
    limit: $p^{\star}=\left(\frac{1}{4},\frac{1}{4},\frac{1}{4},\frac{1}{4}\right)$.

!!! example "Example 3.4: Two ergodic sets, Infinitely many invariant distributions"

    Consider an $l$-dimensional Markov chain and order its states into
    two subsets, the first one with $k$ elements and the second one with
    $l-k$ elements. Suppose the Markov matrix has the form:
    \[
    \Pi=\left[\begin{array}{cc}
    \Pi_{1} & 0\\
    0 & \Pi_{2}
    \end{array}\right]
    \]
    where the first matrix $\Pi_{1}$ is of dimension $k\times k$
    and matrix $\Pi_{2}$ of dimension $\left(l-k\right)\times\left(l-k\right)$. Clearly
    once the process enters the first subset it never leaves it. The same
    goes for the second subset. Then they are both ergodic. Also $\Pi^{n}=\left[\begin{array}{cc}
    \Pi_{1}^{n} & 0\\
    0 & \Pi_{2}^{n}
    \end{array}\right]$, this sequence converges if and only if $\left\{ \Pi_{1}^{n}\right\} $
    and $\left\{ \Pi_{2}^{n}\right\} $ converge. Let $l=4$, $k=2$ and
    $\Pi_{1}=\Pi_{2}=\left[\begin{array}{cc}
    \frac{3}{4} & \frac{1}{4}\\
    \frac{1}{4} & \frac{3}{4}
    \end{array}\right]$, then:
    \[
    \lim_{n\to\infty}\Pi^{n}=\left[\begin{array}{cccc}
    \frac{1}{2} & \frac{1}{2} & 0 & 0\\
    \frac{1}{2} & \frac{1}{2} & 0 & 0\\
    0 & 0 & \frac{1}{2} & \frac{1}{2}\\
    0 & 0 & \frac{1}{2} & \frac{1}{2}
    \end{array}\right]
    \]
    There are two invariant distributions:$p_{1}^{\star}=\left(\frac{1}{2},\frac{1}{2},0,0\right)$
    and $p_{2}^{\star}=\left(0,0,\frac{1}{2},\frac{1}{2}\right)$.
    But any convex combination of them is also an invariant distribution.

!!! example "Example 3.5: Two ergodic sets, Infinitely many invariant distributions"

    Let $l=3$, $\gamma\in\left(0,2\right)$ and $\alpha,\beta\geq0$
    such that $\alpha+\beta=1$. Consider the Markov matrix:
    \[
    \Pi=\left[\begin{array}{ccc}
    1-\gamma & \gamma\alpha & \gamma\beta\\
    0 & 1 & 0\\
    0 & 0 & 1
    \end{array}\right]
    \]
    As in the second example $s_{1}$ is a transient state (once you leave
    it you never come back), but there are now two ergodic sets $\left\{ s_{2}\right\} $
    and $\left\{ s_{3}\right\} $. We also have:
    \[
    \lim_{n\to\infty}\Pi^{n}=\lim_{n\to\infty}\left[\begin{array}{ccc}
    \left(1-\gamma\right)^{n} & \left(1-\left(1-\gamma\right)^{n}\right)\alpha & \left(1-\left(1-\gamma\right)^{n}\right)\beta\\
    0 & 1 & 0\\
    0 & 0 & 1
    \end{array}\right]=\left[\begin{array}{ccc}
    0 & \alpha & \beta\\
    0 & 1 & 0\\
    0 & 0 & 1
    \end{array}\right]
    \]
    The sequence $\left\{ \Pi^{n}\right\} $ converges and there are two
    invariant distributions $p_{1}^{\star}=\left(0,1,0\right)$ and $p_{2}^{\star}=\left(0,0,1\right)$
    given by the second and third rows of the limiting matrix. The first
    row is a convex combination of the limiting distribution.

Now we turn to the general results. The following theorem encompasses
all the possible outcomes of a Markov chain. In particular, an ergodic
set and a limit distribution always exist, but they need not be unique,
and although the sequence $\left\{ \Pi^{n}\right\} $ need not converge,
the sequence $\left\{ \frac{1}{n}\underset{k=0}{\overset{n}{\sum}}\Pi^{k}\right\} $
always converges, and its limit characterizes the invariant distributions.
<a id="ref-thm-000020markov-000020chains" class="course-anchor"></a>
!!! abstract "Theorem 3.1"

    Let $Z=\left(z_{1},\ldots,z_{l}\right)$
    and denote the stochastic matrix by its elements: $\Pi=\left[\pi_{ij}\right]$.
    The powers of $\Pi$ are also denoted by its elements $\Pi^{n}=\left[\pi_{ij}^{\left(n\right)}\right]$.

    1. $Z$ can be partitioned into $M\geq1$ ergodic sets and a transient
    set (an ergodic set always exists).
    1. The sequence $\left\{ \frac{1}{n}\underset{k=0}{\overset{n}{\sum}}\Pi^{k}\right\} $
    always converges to a Markov matrix $\overline{\Pi}$.

      1. For any $p_{0}\in\Delta^{l}$ and $p_{k}=p_{0}\Pi^{k}$ it holds that:
    $\frac{1}{n}\underset{k=0}{\overset{n}{\sum}}p_{k}\to p_{0}\overline{\Pi}$.

    1. Each row of $\overline{\Pi}$ is an invariant distribution, and every
    invariant distribution is a convex combination of the rows of $\overline{\Pi}$
    (so $p_{0}\overline{\Pi}$ is an invariant distribution for all $p_{0}\in\Delta^{l}$).

We can strengthen these results by imposing extra structure on $\Pi$.
We can get uniqueness of the ergodic set and the invariant distribution
under a "reachability" condition (at least one state should be
reachable in finite time starting from anywhere).
<a id="ref-thm-000020markov-000020chains-0000202" class="course-anchor"></a>
!!! abstract "Theorem 3.2"

    Let $Z$ and $\Pi$
    as in [Theorem 3.1](#ref-thm-000020markov-000020chains). $\Pi$ has a
    unique ergodic set if and only if there exists a state $z_{j}$ such
    that for all $i\in\left(1,\ldots,l\right)$ there exist $n\geq1$
    such that $\pi_{ij}^{\left(n\right)}>0$.

    Moreover, if this is the case $\Pi$ has a unique invariant distribution
    $p^{\star}$ and all rows of $\overline{\Pi}$ are equal to $p^{\star}$
    (so for any $p_{0}\in\Delta^{l}$ we have $p_{0}\overline{\Pi}=p^{\star}$).

The previous result still does not rule out cyclicality in the ergodic
set. We can get this under a "mixing" condition.
<a id="ref-thm-000020markov-000020chains-0000203" class="course-anchor"></a>
!!! abstract "Theorem 3.3"

    Let $Z$ and $\Pi$
    as in [Theorem 3.1](#ref-thm-000020markov-000020chains). For $n=1,2,\ldots$
    and $j=1,\ldots,l$ define $\epsilon_{j}^{\left(n\right)}=\underset{i}{\min}\pi_{ij}^{\left(n\right)}$
    and $\epsilon^{\left(n\right)}=\underset{j=1}{\overset{l}{\sum}}\epsilon_{j}^{\left(n\right)}$.
    $Z$ has a unique ergodic set without cyclically moving subsets if
    and only if for some $N\geq1$ it holds that $\epsilon^{\left(N\right)}>0$.

    Moreover, if this is the case $\Pi$ has a unique invariant distribution
    $p^{\star}$ and the sequence $\left\{ \Pi^{n}\right\} $ converges
    (so for any $p_{0}\in\Delta^{l}$ we have $\lim p_{0}\Pi^{n}=p^{\star}$).

In this notation, $\pi_{ij}^{\left(n\right)}$ is the probability
that state $j$ is reached from state $i$ in $n$ steps. $\epsilon_{j}^{\left(n\right)}$
measures the lowest such probability, because we don't know from which
state we start from we need to know that the condition is satisfied
for all states. This mixing property is stronger than the first one
because we need there to be at least one column of non-zero elements,
guaranteeing mixing towards one state $\left(j\right)$ starting from
any state $\left(i\right)$, uniformly in time (the same time $\left(N\right)$
for all the initial states).

## Weak convergence of monotone Markov processes

In the previous section we obtained results characterizing the limiting
behavior of Markov processes when the state space is finite. Unfortunately
these results do not extend immediately to general Markov processes.
The problem at hand is to establish when the sequence of distribution
functions $\left\{ \lambda_{n}\right\} $, constructed as $\lambda_{n}=T^{\star}\lambda_{n-1}$
with $\lambda_{0}$ given, converges. We must first define what it
means for a sequence of distributions to converge. The simplest definition
comes in the form of set-wise convergence (the equivalent of point-wise
convergence for functions):
!!! info "Definition 3.16: Set-wise Convergence"

    Let $\left(Z,\mathcal{Z}\right)$ be
    a measurable space and $\Lambda\left(Z,\mathcal{Z}\right)$ the set of
    probability distributions. Consider a sequence $\left\{ \lambda_{n}\right\} \subseteq\Lambda\left(Z,\mathcal{Z}\right)$,
    we say that $\lambda_{n}\overset{s.w}{\to}\lambda\in\Lambda\left(Z,\mathcal{Z}\right)$
    if $\lambda_{n}\left(A\right)\to\lambda\left(A\right)$ for all $A\in\mathcal{Z}$.

This notion of convergence is intuitive but it turns out to be too
strong for most applications. The following proposition shows why:
!!! abstract "Proposition 3.4"

    Let $\left(Z,\mathcal{Z}\right)$ be a measurable space and $\Lambda\left(Z,\mathcal{Z}\right)$
    the set of probability distributions. Consider a sequence $\left\{ \lambda_{n}\right\} \subseteq\Lambda\left(Z,\mathcal{Z}\right)$.
    $\left\{ \lambda_{n}\right\} $ converges set-wise to $\lambda$ if
    and only if $\lim\int f\left(z\right)d\lambda_{n}=\int f\left(z\right)d\lambda$
    for all bounded and measurable functions $f\in B\left(Z,\mathcal{Z}\right)$.

Thus asking for set-wise convergence requires the expected value of
a large class of functions to converge. A way to weaken this is to
limit the space of functions for which convergence is required.
!!! info "Definition 3.17: Weak Convergence"

    Let $\left(Z,\rho\right)$ be a metric
    space and $\mathcal{Z}$ the Borel set of $Z$. Define $\Lambda\left(Z,\mathcal{Z}\right)$
    as the set of probability distributions. Consider a sequence $\left\{ \lambda_{n}\right\} \subseteq\Lambda\left(Z,\mathcal{Z}\right)$,
    we say that $\left\{ \lambda_{n}\right\} $ converges weakly to $\lambda\in\Lambda\left(Z,\mathcal{Z}\right)$
    if $\lim\int f\left(z\right)d\lambda_{n}=\int f\left(z\right)d\lambda$
    for all bounded and continuous functions $f\in C\left(Z\right)$.

The main results we will obtain establish the existence of an invariant
distribution under a continuity assumption on the Markov operator
(the Feller property). We can then ensure uniqueness if the Markov
operator is monotone and a mixing condition is satisfied, along with
uniqueness we will obtain the weak convergence of $\left\{ T^{\star n}\lambda_{0}\right\} $.

In what follows we consider $Z\subseteq\mathbb{R}^{l}$ for $l<\infty$,
with $\mathcal{Z}$ the Borel $\sigma$-algebra of $Z$. The Markov process
is characterized by its transition function $Q$, its Markov operator
$T:B\left(Z,\mathcal{Z}\right)\to B\left(Z,\mathcal{Z}\right)$ and its
adjoint operator $T^{\star}:\Lambda\left(Z,\mathcal{Z}\right)\to\Lambda\left(Z,\mathcal{Z}\right)$.
We also define the inner product $\left\langle f,\lambda\right\rangle =\int f\left(z\right)d\lambda$.

We first expand on the Feller property through the following proposition:
!!! abstract "Proposition 3.5"

    The following three statements are equivalent:

    1. (Feller property) If $f\in C\left(Z\right)$ then $Tf\in C\left(Z\right)$.
    1. If $z_{n}\to z$ then $Q\left(z_{n},\cdot\right)\to Q\left(z,\cdot\right)$
    (that is for all $A\in\mathcal{Z}$).
    1. If $\lambda_{n}\to\lambda$ then $T^{\star}\lambda_{n}\to T^{\star}\lambda$

Then preserving continuity in conditional expected values ($Tf$ is
a conditional expected value) has equivalent statements in terms of
the conditional distributions $\left(Q\left(z_{n},\cdot\right)\right)$
and unconditional distributions $\left(T^{\star}\lambda_{n}\right)$.
It turns out that continuity is enough to guarantee that an invariant
distribution exists.
<a id="ref-thm-feller-invariant-distribution" class="course-anchor"></a>
!!! abstract "Theorem 3.4"

    If $Z\subseteq\mathbb{R}^{l}$
    is compact and $Q$ satisfies the Feller property then an invariant
    distribution exists. That is, there is $\lambda^{\star}\in\Lambda\left(Z,\mathcal{Z}\right)$
    such that $\lambda^{\star}=T^{\star}\lambda^{\star}$.

Yet, continuity is not enough to rule out the existence of many invariant
distributions or of cycling sets. Monotonicity is needed for this.
As before it is first useful to take a detour on what monotonicity
(as in [Definition 3.4](#ref-def-000020monotonicity-000020markov-000020))
implies for distribution functions. We then have to impose an ordering
of distribution functions to be able to talk about monotonicity.
!!! info "Definition 3.18: First Order Stochastic Dominance"

    A distribution $\mu$
    (first order stochastically) dominates $\lambda$ $\left(\mu\geq\lambda\right)$
    if $\int f\left(z\right)d\mu\geq\int f\left(z\right)d\lambda$ for
    all increasing, bounded and measurable function $f$.

In what follows we call a sequence $\left\{ \lambda_{n}\right\} $
monotone if $\lambda_{n+1}\geq\lambda_{n}$ for all $n$, or if $\lambda_{n+1}\leq\lambda_{n}$
for all $n$. We can now establish the following result:
<a id="ref-prop-monotonicity-markov" class="course-anchor"></a>
!!! abstract "Proposition 3.6"

    The following three statements are
    equivalent:

    1. (Monotone property) If $f\in B\left(Z,\mathcal{Z}\right)$ is weakly
    increasing then $Tf$ is also weakly increasing.
    1. Let $\lambda,\mu\in\Lambda\left(Z,\mathcal{Z}\right)$. If $\mu\geq\lambda$
    then $T^{\star}\mu\geq T^{\star}\lambda$.
    1. If $z\geq z^{\prime}$ then $Q\left(z,\cdot\right)\geq Q\left(z^{\prime},\cdot\right)$
    (in the stochastic dominance sense)

The last statement is particularly useful because it translates monotonicity
of the Markov operator directly into monotonicity of the transition
function ("better" states lead to "better" distributions).

Now we introduce the final condition needed for the main result of
this section. It is a mixing condition akin to that in Theorems [Theorem 3.2](#ref-thm-000020markov-000020chains-0000202)
and [Theorem 3.3](#ref-thm-000020markov-000020chains-0000203), along with a restriction
on the form of the set $Z$. To see why it is necessary to go SLP
exercises 12.12 and 12.13.
!!! assumption "Assumption: Mixing Property"

    The set $Z=\left[a,b\right]$ is a closed
    and bounded rectangle in $\mathbb{R}^{l}$ characterized by $a$ and
    $b$,

    !!! note "Note"
        A set $Z\subseteq\mathbb{R}^{l}$ is a closed and bounded rectangle if there are two vectors $a,b\in\mathbb{R}^{l}$ such that$a\leq b$ and $Z=\left[a_{1},b_{1}\right]\times\ldots\times\left[a_{l},b_{l}\right]$.

    and there exists $c\in Z$, $\epsilon>0$ and $N\geq1$ such that:
    \[
    Q^{N}\left(a,\left[c,b\right]\right)\geq\epsilon\qquad Q^{N}\left(b,\left[a,c\right]\right)\geq\epsilon
    \]

Under this assumption it is possible to reach the "upper" region
of the rectangle, $\left[c,b\right]$, in finite time starting from
the "lower" corner $\left(a\right)$, and it is possible to reach
the "lower" region of the rectangle, $\left[a,c\right]$, in finite
time starting from the "upper" corner $\left(b\right)$. It is
possible to show that if one can move through the set from the corners
it is possible to do it from anywhere (under a monotonicity assumption).
!!! abstract "Proposition 3.7"

    Let $Q$ satisfy monotonicity and the previous assumption for some
    tuple $\left(c,\epsilon,N\right)$, then:
    \[
    Q^{N}\left(z,\left[c,b\right]\right)\geq\epsilon\qquad Q^{N}\left(z,\left[a,c\right]\right)\geq\epsilon\qquad\text{for all z\in Z}
    \]

Finally we establish the convergence result.
<a id="ref-thm-monotone-invariant-distribution" class="course-anchor"></a>
!!! abstract "Theorem 3.5"

    Let $Z=\left[a,b\right]\in\mathbb{R}^{l}$
    be a rectangle. If $Q$ is monotone and satisfies the Feller property
    and the mixing property, then $Q$ has a unique invariant distribution
    $\lambda^{\star}$ and $T^{\star n}\lambda_{0}\to\lambda^{\star}$
    for all $\lambda_{0}\in\Lambda\left(Z,\mathcal{Z}\right)$.

This completes the tools we need to tackle stochastic dynamic programming
problems. In that note, it is interesting to note the similarities
between [Theorem 3.5](#ref-thm-monotone-invariant-distribution) and the
contraction mapping theorem and Blackwell's conditions used below
to establish a unique solution for Bellman equations and the convergence
to that solution from any starting point by iteratively applying the
Bellman operator(see [Contraction Mapping Theorem](../part-02-dynamic-programming/section-04-non-stochastic-dynamic-programming.md#ref-sec-contraction-mapping-theorem)).
While [Theorem 3.5](#ref-thm-monotone-invariant-distribution) does not
establish a sense of distance (inherent in complete metric spaces)
it does provide a very similar answer to the question of the existence
and uniqueness of a fixed point characterizing the solution to a functional
equation.

The stationary distribution of a Markov process solves the functional
equation:
\[
\lambda=T^{\star}\lambda.
\]
The result in the theorem is a set of sufficient conditions for there
to be a unique solution, $\lambda^{\star}$. These conditions have
the Markov operator $T$ preserve the continuity and boundedness of
functions (recalling that the space of continuous and bounded functions
is a complete metric space) and monotonicity (as in Blackwell's first
sufficient condition for a contraction). Moreover, the Theorem establishes
the converges to $\lambda^{\star}$ from any initial distribution
$\lambda_{0}$ by iteratively applying the adjoint Markov operator
(as implied by the contraction mapping theorem for the Bellman operator).

This part of the course develops the mathematical tools and notation
used in dynamic programming problems of the type encountered in applications
across macroeconomics. necessary to study how random variables affect
optimization problems.

We start with an overview of non-stochastic (or deterministic) dynamic
programming problems and the main mathematical results that allow
us to solve them. The exposition follows almost verbatim [Stokey et al. (1989, Ch. 3)](https://books.google.com/books?id=tWYo0QolyLAC).
The main objective here is just having a reference for the main results
in dynamic programming.

Having established the basics we extend the notation and the basic
results to be able to deal with stochastic problems. This follows
[Stokey et al. (1989, Ch. 9)](https://books.google.com/books?id=tWYo0QolyLAC). The objective of this section is to mention
the main results without getting into details as they are all extensions
of the non-stochastic case.

Finally, we will use these tools to tackle centralized and decentralized
economies in the context of the Neoclassical Growth Model. We will
first layout the decentralized version of the model and define equilibrium.
Having done that we can discuss how to solve the model using the centralized
problem. Finally we discuss the nature of the solution in terms of
Markov chains and their properties.
