# Stochastic Processes

> Part: Stochastic Calculus

## Definitions

The idea now is to study sequences of random variables. A stochastic
process is similar to a random variable, with the difference that
it also depends on time. Adding the time dimension adds notation,
but it does not change any of the main ideas. For convenience we will
first go over the definition of a random variable.
!!! info "Definition 26.1: Random variable"

    Let $\left(\Omega,\mathcal{A},P\right)$ be
    a probability space and $x:\Omega\to\mathbb{R}$ a real valued function.
    $x$ is a random variable if and only if $x$ is measurable, that
    is, if and only if $x^{-1}\left(B\right)\in\mathcal{A}$ for all $B\in\mathcal{B}$,
    where $\mathcal{B}$ is the Borel $\sigma$-algebra on $\mathbb{R}$.
    We further establish the same notation:
    
    1. An outcome is an element $\omega\in\Omega$.
    1. An event is a measurable subset of $\Omega$: $A\in\mathcal{A}$.
    1. The real number $x\left(\omega\right)$ is a realization of the random
    variable.
    1. The probability measure for $x$ is then: $\mu\left(B\right)=P\left(x^{-1}\left(B\right)\right)=P\left(\left\{ \omega\in\Omega|x\left(\omega\right)\in B\right\} \right)$,
    for $B\in\mathcal{B}$.
    1. The distribution function for $f$ is: $G\left(b\right)=\mu\left(\left(-\infty,b\right]\right)$,
    for $b\in\text{\mathbb{R}}$.

Now we can work on adding the time dimension to the definition of
a random variable. In general time can be discrete or continuous,
but in what follows we will assume that time is continuous starting
at 0 and going on forever, so $t\in\left[0,\infty\right)$. Intuitively
a stochastic process is formed by function $x:\left[0,\infty\right)\times\Omega\to\mathbb{R}$
that gives a realization for every outcome and time. At every point
in time the random variable takes a variable, the sequence of those
values forms the realization (path) of the stochastic process.

The question is on how to measure the possible outcomes of the random
variable through time. We need a way of determining where the random
variable is at a certain point in time, and where it has been, but
that does not provide information about the value of future realizations.
This is achieved using a filtration.
!!! info "Definition 26.2: Filtration"

    Let $\mathcal{A}$ be a $\sigma$-algebra. The
    set $\mathbb{A}=\left\{ \mathcal{A}_{t}|t\geq0\right\} $ is a filtration
    if $\mathcal{A}_{t}\subseteq\mathcal{A}$ and $\mathcal{A}_{s}\subseteq\mathcal{A}_{t}$**
    **for all $t\geq0$ and $s\leq t$. $\mathcal{A}_{t}$ is the set of events
    known at time $t$.

Now we can define a stochastic process as a function that is measurable
in a filtered space.
!!! info "Definition 26.3: Stochastic Process"

    Let $\left(\Omega,\mathbb{A},P\right)$
    be a filtered probability space with a time index $t\in\mathbb{R}_{+}$,
    and let $\mathcal{B}_{+}$ be the Borel sets of $\mathbb{R}_{+}$. A
    stochastic process is a function $x:\left[0,\infty\right)\times\Omega\to\mathbb{R}$
    that is measurable with respect to $\mathcal{B}_{+}\times\mathcal{A}$ (that
    is, $x$ is jointly measurable in $\left(t,\omega\right)$). Moreover:
    
    1. For all $t\in\mathbb{R}_{+}$ and $\omega\in\Omega$, $x\left(t,\omega\right)$
    is measurable with respect to $\mathcal{A}_{t}$, where $\mathcal{A}_{t}$
    is in the filtration $\mathbb{A}$.
    1. For all $t\in\mathbb{R}_{+}$, $x\left(t,\cdot\right):\Omega\to\mathbb{R}$
    is an ordinary random variable on the probability space $\left(\Omega,\mathcal{A}_{t},P_{t}\right)$.
    1. For all $\omega\in\Omega$, $x\left(\cdot,\omega\right):\mathbb{R}_{+}\to\mathbb{R}$
    is a Borel measurable function. This is called the **sample
    path **of $x$.

## Discrete time examples

It is not hard to come up with examples of discrete time stochastic
processes. They are often used to model the behavior of many stationary
economic variables by means of ARMA(p,q) representations, as well
non-stationary variables usually related to random walks.

To fix ideas we start with the simple example of a (fair) coin toss.
There are two possible outcomes, so $\Omega=\left\{ H,T\right\} $,
when tossing the coin is always possible to know which outcome occurred,
and whether or not the coin was tossed, this gives: $\mathcal{A}=\left\{ \left\{ H\right\} ,\left\{ T\right\} ,\emptyset,\Omega\right\} $.
Finally the probability distribution $P$ assigns values to sets in
the $\sigma$-algebra $\mathcal{A}$:
\[
P\left(\left\{ H\right\} \right)=P\left(\left\{ T\right\} \right)=\frac{1}{2}\qquad P\left(\emptyset\right)=0\qquad P\left(\Omega\right)=1
\]

Now we can define a random variable $\epsilon:\Omega\to\mathbb{R}$
as: $\epsilon\left(H\right)=1$ and $\epsilon\left(T\right)=-1$.
$\epsilon$ is a random variable with respect to the probability space
$\left(\Omega,\mathcal{A},P\right)$. As will be the case almost always
we can dispense of the outcome space $\Omega$ for most applications
and just refer to the random variable and the probability distribution
induced over its values. In this way we have: $\epsilon\in\left\{ -1,1\right\} $
with $\Pr\left(\epsilon=1\right)=\Pr\left(\epsilon=-1\right)=\frac{1}{2}$.

Furthermore we can extend this example to define the stochastic process
that comes up from the repeated coin toss. In this case time is discrete
and finite $t\in\left\{ 1,2,3\right\} $ and at each time a coin is
tossed, then the random variable variable $\epsilon_{t}$ is defined
as the value of $\epsilon$ given the outcome of the $t^{th}$ coin
toss. The sequence $\left\{ \epsilon_{t}\right\} _{t=1}^{3}$ is a
stochastic process with respect to the filtered probability space
$\left(\Omega,\mathbb{A},P\right)$, where:
\[
\Omega=\left\{ \left(H,H,H\right),\left(H,H,T\right),\left(H,T,H\right),\left(H,T,T\right),\left(T,H,H\right),\left(T,T,H\right),\left(T,H,T\right),\left(T,T,T\right)\right\}
\]
\[
\mathcal{A}=2^{\Omega}\qquad P\left(\omega\right)=\frac{1}{8}\quad\forall_{\omega\in\Omega}
\]
The filtration is established taking into account that at each point
in time only the outcome of current and past tosses is known:
\[
\mathcal{A}_{1}=\left\{ \emptyset,\Omega,\left\{ \left(H,H,H\right),\left(H,H,T\right),\left(H,T,H\right),\left(H,T,T\right)\right\} ,\left\{ \left(T,H,H\right),\left(T,T,H\right),\left(T,H,T\right),\left(T,T,T\right)\right\} \right\}
\]

\[
\mathcal{A}_{2}=\left\{ \emptyset,\Omega,\left\{ \left(H,H,H\right),\left(H,H,T\right)\right\} ,\left\{ \left(T,H,H\right),\left(T,H,T\right)\right\} ,\left\{ \left(H,T,H\right),\left(H,T,T\right)\right\} ,\left\{ \left(T,T,H\right),\left(T,T,T\right)\right\} \right\}
\]
\[
\mathcal{A}_{3}=\mathcal{A}
\]
So, in the first $\sigma$-algebra all outcomes for which the first
toss comes up heads are indistinguishable from each other, in the
second $\sigma$-algebra one can distinguish between outcomes that
have the sequence $\left\{ H,T\right\} $ and $\left\{ H,H\right\} $,
but no information is given about the outcome of third toss. This
same ideas apply if time goes on forever, so we can define our stochastic
process over $t\in\mathbb{N}$.

In the previous example the stochastic process obtained satisfies
the property of being iid (identically and independently distributed).
The values of the stochastic process at each point in time are independent
from its previous values, and they all have the same probabilities
of occurring.

We now use our stochastic process $\left\{ \epsilon_{t}\right\} $
to define a random walk. Random walks are particularly useful to understand
the behavior of continuous time stochastic processes. As we will see
the building block of most of them is the continuous time approximation
of a random walk.
!!! example "Example 26.1: Random Walk Process"

    Consider a stochastic process $x$.
    Denote by $x_{t}$ the value of $x$ at time $t$, and fix the initial
    value $x_{0}$. $x_{t}$ is assumed to evolve according to:
    \[
    x_{t}=x_{t-1}+\epsilon_{t}\qquad\text{for }t\geq1
    \]
    $\epsilon_{t}$ is a random variable that can take two values $\left\{ -1,1\right\} $,
    and its probability distribution is independent of time, so that:
    $\Pr\left(\epsilon_{t}=1\right)=\Pr\left(\epsilon_{t}=-1\right)=\frac{1}{2}$.
    
    Given the starting value $x_{0}$ the variable $x_{t}$ can only take
    on discrete values. For instance, for $x_{0}=0$ and $t$ odd they
    are $\left\{ -t,\ldots,-1,0,1,\ldots,t\right\} $, and for $t$ even
    they are $\left\{ -t,\ldots,-2,0,2,\ldots,t\right\} $. These values
    tell you which paths of the process cam be known at time $t$.
    
    Finally, this process has no drift. Given an initial value $x_{0}$
    the expected value of $x_{t}$ for any $t$ is $x_{0}$ $\left(E\left[x_{t}\right]=x_{0}\right)$,
    this follows from the expected value of each change being $E\left[x_{t}-x_{t-1}\right]=E\left[\epsilon_{t}\right]=0$.

This process can be generalized in many ways. The most useful one
for our purposes is to allow for drift, which can be done by changing
the probabilities of the random variable $\epsilon_{t}$, letting
$\Pr\left(\epsilon_{t}=1\right)=p$ and $\Pr\left(\epsilon_{t}=-1\right)=1-p$
achieves the desired result. If $p>\frac{1}{2}$ the process will
have positive drift.

## Brownian motion (Wiener processes)

A Brownian motion, or Weiner process, is a continuous time stochastic
process $\left(W\left(t\right)\right)$ that satisfies three properties:

1. $W\left(t\right)$ has continuous sample paths.
1. $W\left(t\right)$ has stationary independent increments.
1. Increments of $W\left(t\right)$ over a finite interval of time are
normally distributed with variance that increases linearly in time.

The first property implies that a Brownian motion has no jumps, so
as the time interval goes to zero the change in the process must also
go to zero. The second and third properties imply that the change
in $W\left(t\right)$ over some interval of length $\Delta t$ must
satisfy:
\[
\Delta W=\epsilon_{t}\sqrt{\Delta t}\qquad\epsilon_{t}\sim N\left(0,1\right)
\]
which we write as $dW=\epsilon_{t}\sqrt{dt}$ as $\Delta t\to0$.
This implies that:
\[
E\left[dW\right]=E\left[\epsilon_{t}\right]\sqrt{dt}=0\qquad V\left[dW\right]=E\left[\epsilon_{t}^{2}\right]dt=dt
\]
Moreover we assume that $\epsilon_{t}$ is serially uncorrelated,
i.e., $E\left[\epsilon_{t}\epsilon_{s}\right]=0$ for $t\neq s$,
so the values of $dW$ for any two different time intervals are independent.

Its easy to note the relation between the Brownian motion and the
random walk processes. In discrete time we had $\Delta x_{t}=x_{t}-x_{t-1}=\epsilon_{t}\Delta t$,
where $\Delta t=1$. We will use this fact when approximating Brownian
motions using random walks as $\Delta t\to0$.

To see that this representation implies the third property consider
a time interval that starts at $t$ and ends at $T$, and divide into
$n$ intervals of length $\Delta t=\frac{T}{n}$. Then we have:
\[
W\left(t+T\right)-W\left(t\right)=\sum_{i=1}^{n}\epsilon_{i}\sqrt{\Delta t}
\]
What we want to show is that $W\left(t+T\right)-W\left(t\right)\sim N\left(0,t\right)$.
To prove this we can use the Central Limit Theorem:
!!! abstract "Theorem 26.1: Central Limit Theorem"

    If $\left\{ \epsilon_{1},\epsilon_{2},\epsilon_{3},\ldots\right\} $
    are iid (but not necessarily normal) with $E\left[\epsilon_{i}\right]=\mu<\infty$
    and $V\left[\epsilon_{i}\right]=\sigma^{2}<\infty$, then $Z_{n}=\frac{1}{\sqrt{n}}\frac{\underset{i=1}{\overset{n}{\sum}}\epsilon_{i}-n\mu}{\sigma}\to N\left(0,1\right)$
    as $n\to\infty$.

Note that $\epsilon_{i}$ already satisfies being iid and $E\left[\epsilon_{i}\right]=0$
and $V\left[\epsilon_{i}\right]=1$, so $Z_{n}=\sqrt{n}\underset{i=1}{\overset{n}{\sum}}\epsilon_{i}$.
Then we can write:
\[
W\left(t+T\right)-W\left(t\right)=\sqrt{T}Z_{n}
\]
By the CLT this converges to a $N\left(0,T\right)$ as $n\to\infty$.

A Brownian motion can be generalized to have drift $\mu$ and variance
$\sigma^{2}$. This is done by adjusting the way the increments of
the stochastic process work:
\[
dx=\mu dt+\sigma dW
\]
In this case the increments are given by a non-stochastic component
$\mu dt$, which indicates that the process will drift by $\mu$ per
unit of time deterministically if there are no shocks, and by a stochastic
component $\sigma dW$, where $\sigma$ is scaling the variance of
the increments of the Weiner process $W$. This process satisfies:
\[
E\left[dx\right]=\mu dt\qquad V\left[dx\right]=\sigma^{2}dt
\]

### Random walk approximation of a Brownian motion

As mentioned above we can use the similarities between the increments
of a Brownian motion and the increments of a random walk to approximate
continuous time processes using discrete time ones. This is important
because of two reasons: it helps explain the mechanics of the continuous
time model, and it provides an algorithm for simulation in the computer.

Our objective is to approximate the a Brownian motion with drift:
\[
dx=\mu dt+\sigma dW
\]
We will approximate with a discrete time process $y$ whose increments
are $h$ with probability $p$ and $-h$ with probability $1-p$.
This gives:
\[
E\left[\Delta y\right]=ph-\left(1-p\right)h=\left(2p-1\right)h
\]
\[
V\left[\Delta y\right]=E\left[\left(\Delta y\right)^{2}\right]-\left(E\left[\Delta y\right]\right)^{2}=\left(1-\left(2p-1\right)^{2}\right)h^{2}
\]
In order to get the approximation we need to choose values for $h$,
$p$ and $\Delta t$ so that:
\begin{align*}
\mu\Delta t & =\left(2p-1\right)h\\
\sigma^{2}\Delta t & =4p\left(1-p\right)h^{2}
\end{align*}
Solving for $p$ we get:
\[
p^{2}-p+\frac{\sigma^{2}}{4\left(\sigma^{2}+\mu^{2}\Delta t\right)}=0
\]
The roots of these equation are:
\begin{align*}
p & =\frac{1}{2}\left(1\pm\sqrt{1-\frac{\sigma^{2}}{\left(\sigma^{2}+\mu^{2}\Delta t\right)}}\right)\\
& =\frac{1}{2}\left(1\pm\frac{\mu\sqrt{\Delta t}}{\sqrt{\sigma^{2}+\mu^{2}\Delta t}}\right)\\
& \approx\frac{1}{2}\left(1\pm\frac{\mu}{\sigma}\sqrt{\Delta t}\right)
\end{align*}
where the approximation follows if $\Delta t$ is small enough relative
to $\frac{\sigma^{2}}{\mu^{2}}$, because we are taking $\Delta t$
close to zero this assumption is satisfied. We further choose only
the "+" root because that way $p\geq\frac{1}{2}$ when $\mu\geq0$.

Now we can find a value for $h$:
\begin{align*}
\sigma^{2}\Delta t & =4p\left(1-p\right)h^{2}\\
\sigma^{2}\Delta t & =2\left(1+\frac{\mu}{\sigma}\sqrt{\Delta t}\right)\left(1-\frac{1}{2}\left(1+\frac{\mu}{\sigma}\sqrt{\Delta t}\right)\right)h^{2}\\
\sigma^{2}\Delta t & =\left(1+\frac{\mu}{\sigma}\sqrt{\Delta t}\right)\left(1-\frac{\mu}{\sigma}\sqrt{\Delta t}\right)h^{2}\\
\sigma^{2}\Delta t & =\left(1-\left(\frac{\mu}{\sigma}\right)^{2}\Delta t\right)h^{2}\\
\sigma^{2}\Delta t & \approx h^{2}\\
\sigma\sqrt{\Delta t} & \approx h
\end{align*}
As before we can disregard the term $\left(\frac{\mu}{\sigma}\right)^{2}\Delta t$
as long as $\Delta t$ is small enough relative to $\frac{\sigma^{2}}{\mu^{2}}$.

As an exercise can verify that the first equation also holds:
\begin{align*}
\mu\Delta t & =\left(2p-1\right)h\\
\mu\Delta t & =\left(2p-1\right)\sigma\sqrt{\Delta t}\\
\frac{\mu}{\sigma}\sqrt{\Delta t} & =2p-1\\
\frac{1}{2}\left(1+\frac{\mu}{\sigma}\sqrt{\Delta t}\right) & =p
\end{align*}

In order to simulate a Brownian motion with parameters $\left(\mu,\sigma\right)$
we can do as follows:

1. Set a $\Delta t$ small relative to $\frac{\sigma^{2}}{\mu^{2}}$.
1. Set $p=\frac{1}{2}\left(1+\frac{\mu}{\sigma}\sqrt{\Delta t}\right)$
and $h=\sigma\sqrt{\Delta t}$.
1. Simulate the increments of $x$ by drawing realization of a random
variable $\epsilon_{t}$ that takes value $h$ with probability $p$
and $-h$ with probability $1-p$.

## Ito processes

Ito processes are the generalization of Brownian motions. Their drift
and variance is allowed to depend on the level of the process and
the time:
<a id="ref-eq-000020def-000020ito-000020process" class="course-anchor"></a>
\begin{equation}
dx=\mu\left(x,t\right)dt+\sigma\left(x,t\right)dW\tag{26.1}
\end{equation}
where the functions $\mu$ and $\sigma$ give the value of the mean
and standard deviations of the increments of the process $x$:
\begin{align*}
\mu\left(x,t\right) & =\lim_{\Delta\to0^{+}}\frac{1}{\Delta}E\left[x\left(t+\Delta\right)-x\left(t\right)|x\left(t\right)=x\right]\\
\left(\sigma\left(x,t\right)\right)^{2} & =\lim_{\Delta\to0^{+}}\frac{1}{\Delta}E\left[\left(x\left(t+\Delta\right)-x\left(t\right)\right)^{2}|x\left(t\right)=x\right]
\end{align*}

For future reference note that an Ito process can also be represented
as:
\[
x\left(t\right)=x\left(0\right)+\int_{0}^{t}\mu\left(x,s\right)ds+\int_{0}^{t}\sigma\left(x,s\right)dW\left(s\right)
\]
where the last term is a stochastic integral. Stochastic integrals
play an important role in the theory of stochastic processes, for
now it suffices to state the following result.
!!! abstract "Proposition 26.1"

    Let $x\left(t\right)$ be an integrable function, then $E\left[\int_{0}^{t}x\left(s\right)dW\left(s\right)\right]=0$.

This proposition states that the expected value of a stochastic integral
is identically zero. The derivation of the result, along with other
properties can be found in [Stokey (2009, Sec. 3.2)](http://www.jstor.org/stable/j.ctt7sfgq).

Two Ito process are of particular importance. They are presented in
the examples below.
!!! example "Example 26.2: Geometric Brownian notion"

    A Geometric Brownian motion is
    an Ito process with $\mu\left(x,t\right)=\mu x$ and $\sigma\left(x,t\right)=\sigma x$,
    so:
    \[
    dx=\mu xdt+\sigma xdW
    \]
    A geometric Brownian motion can be thought of as a Brownian motion
    where the properties apply to percentage increments instead of increments:
    \[
    \frac{dx}{x}=\mu dt+\sigma dW
    \]
    So the percentage increment, $\frac{dx}{x}$, are normally distributed
    with mean $\mu\Delta t$ and variance $\sigma^{2}\Delta t$.

!!! example "Example 26.3: Ornstein-Uhlenbeck process"

    Unlike the previous processes
    an OU process is mean reverting, similar to an AR(1) process in discrete
    time. An OU process is an Ito process with $\mu\left(x,t\right)=\mu\left(\overline{x}-x\right)$
    and $\sigma\left(x,t\right)=\sigma$. If $x>\overline{x}$ then the
    process drifts down, and if $x<\overline{x}$ the process drifts up.
    \[
    dx=\mu\left(\overline{x}-x\right)dt+\sigma dW
    \]

## Jump processes - Poisson Processes

Jump processes are a type of stochastic process that has discontinuous
paths. Jump process change by discrete amounts when a certain outcome
occurs. The most important Jump process is the Poisson process, which
is just a jump process such that the time of the jumps follows a Poisson
distribution. To define it let $\lambda$ be the mean arrival rate
of a jump and $u$ the size of the change of the process (usually
$u=1$, but in general $u$ can be itself a random variable). Then
for some process $q$ we have:
\[
dq=\begin{cases}
0 & \text{with prob. }1-\lambda dt\\
u & \text{with prob. }\lambda dt
\end{cases}
\]
We can now define a more general process that depends on the Jump
process $q$:
<a id="ref-eq-000020poisson-000020process" class="course-anchor"></a>
\begin{equation}
dx=f\left(x,t\right)dt+g\left(x,t\right)dq\tag{26.2}
\end{equation}
where absent a jump $x$ evolves deterministically according to the
function $f$, and when there is a jump it moves according to function
$g$,
\[
E\left[dx\right]=f\left(x,t\right)dt+\lambda E_{u}\left[g\left(x,t\right)u\right]dt.
\]
