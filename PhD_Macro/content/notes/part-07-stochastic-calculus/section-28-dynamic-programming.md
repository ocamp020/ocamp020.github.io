# Dynamic Programming

> Part: Stochastic Calculus

In dynamic programming we aim to develop tools for solving problems
that involve actions through time, that in turn affect the total value
obtained by the agent takin the decisions. The key of dynamic programming
is that it focuses on the current decision being taken and its effect
on the continuation value for the agent, rather than try to solve
for the whole sequence of actions at once.

## Discrete time overview

### Dynamic Programming

To build up to the concepts of dynamic programming in continuous time
we will first consider a simple discrete time problem of a firm that
must invest a fixed amount $I$ to set up the operation of the firm.
Once the firm is operational the firm produces one unit of good every
period.The current price of the good is known and given by $p_{0}$,
in the second period the price can go up or down:
\[
p_{1}=\begin{cases}
\left(1+u\right)p_{0} & \text{ with prob. }q\\
\left(1-d\right)p_{0} & \text{ with prob. }1-q
\end{cases}
\]
After that the price is constant. Hence, the firm's decision is whether
to invest in the first period, in the second, or not to invest at
all. It makes no sense to wait any longer because no new information
will arrive after the initial change in price. The firm discounts
future payments with an interest rate $r$.

We can solve the problem by tracing the decisions that the firm can
take. In the second period, once the price is known and assuming that
the firm is not yet in operation, the firm can either invest or not.
If the firm does not invest it gets zero payoff, if it invests it
gets:
\[
F_{1}\left(p_{1}\right)=p_{1}+\frac{p_{1}}{1+r}+\frac{p_{1}}{\left(1+r\right)^{2}}=p_{1}\sum_{i=0}^{\infty}\frac{1}{\left(1+r\right)^{i}}=\frac{1+r}{r}p_{1}
\]
The payoff of the firm is then:
\[
V_{1}\left(p_{1}\right)=\max\left\{ F_{1}\left(p_{1}\right)-0,0\right\}
\]
Knowing this is relevant because if the firm does not invest in the
first period it can always do so later, so $V_{1}$ constitutes the
continuation payoff of the firm. The payoff to the firm if it does
not invest in the first period is then:
\[
\frac{1}{1+r}E\left[V_{1}\left(p_{1}\right)\right]=\frac{1}{1+r}\left(qV_{1}\left(\left(1+u\right)p_{0}\right)+\left(1-q\right)V_{1}\left(\left(1-d\right)p_{0}\right)\right)
\]
If the firm invests in the first period the payoff is:
\begin{align*}
F_{0}\left(p_{0}\right) & =p_{0}+\frac{1}{1+r}E\left[F_{1}\left(p_{1}\right)\right]\\
& =p_{0}+\frac{1}{1+r}\left(qF_{1}\left(\left(1+u\right)p_{0}\right)+\left(1-q\right)F_{1}\left(\left(1-d\right)p_{0}\right)\right)\\
& =p_{0}+\left(\frac{q}{r}\left(1+u\right)p_{0}+\frac{1-q}{r}\left(1-d\right)p_{0}\right)\\
& =\frac{1}{r}\left(1+r+q\left(u+d\right)-d\right)p_{0}
\end{align*}
So, the value of the firm is:
\[
V_{0}\left(p_{0}\right)=\max\left\{ F_{0}\left(p_{0}\right)-I,\frac{1}{1+r}E\left[V_{1}\left(p_{1}\right)\right]\right\}
\]

In this example we already see the basics of dynamics programming,
splitting the problem into the decision at hand (invest or not invest)
and the continuation value that they entail. The example also highlights
one of the recurring topics of the course: option value. The firm
has an option that allows it to invest any of the two dates. Waiting
in this problem has value, because investing in the future also means
to invest with better information. In fact we can compute the value
of this option (to wait) by comparing the value that the firm would
have if it was forced to take a decision in the first period:
\[
\Omega_{0}\left(p_{0}\right)=\max\left\{ F_{0}\left(p_{0}\right)-I,0\right\}
\]
with the value that includes the possibility of action in the second
period:
\[
V_{0}\left(p_{0}\right)-\Omega_{0}\left(p_{0}\right)
\]

We can now extend this simple model to allow for action in many periods
(more than two). Consider a firm that operates for $T<\infty$ periods.
In each period the firm will choose the value of a control variable
$u$ that affects (potentially) the per-period payoffs of the firm,
namely the profits, and the evolution of a random variable $x$. $x$
is assumed to follow a Markov process so that the CDF of $x_{t+1}$
is $\Phi_{t}\left(x_{t+1}|x_{t},u_{t}\right)$. The random variable
$x$ is also allowed to affect payoffs, so per-period payoffs are:
$\pi\left(u_{t},x_{t}\right)$.

The firm discounts the future at rate $\frac{1}{1+\rho}$ and receives
a final payoff pf $\Omega_{T}\left(x_{T}\right)$ in the last period.
The objective is:
\begin{equation}
V_{0}\left(x_{0}\right)=\max_{\left\{ u_{t}\right\} _{t=0}^{T-1}}E\left[\sum_{t=0}^{T-1}\left(\frac{1}{1+\rho}\right)^{t}\pi\left(u_{t},x_{t}\right)+\left(\frac{1}{1+\rho}\right)^{T}\Omega_{T}\left(x_{T}\right)\right] \tag{28.1}
\end{equation}
dynamic programming allows us to write the problem recursively. In
the last period we have:
\begin{equation}
V_{T-1}\left(x_{T-1}\right)=\max_{u_{T-1}}\pi\left(u_{T-1},x_{T-1}\right)+\left(\frac{1}{1+\rho}\right)E\left[\Omega_{T}\left(x_{T}\right)|x_{T-1},u_{T-1}\right] \tag{28.2}
\end{equation}
For all other periods we can use the notion of continuation payoffs
to obtain:
\begin{equation}
V_{t}\left(x_{t}\right)=\max_{u_{t}}\pi\left(u_{t},x_{t}\right)+\left(\frac{1}{1+\rho}\right)E\left[V_{t+1}\left(x_{t+1}\right)|x_{t},u_{t}\right] \tag{28.3}
\end{equation}
The problem can then be solved by backwards induction, choosing contingent
plans for $u_{t}\left(x_{t}\right)$ one period at a time, instead
of tackling the more complicated problem of choosing the whole sequence
of $\left\{ u_{t}\right\} $.

When time is not finite, there is no terminal date, and we cannot
use backwards induction to solve the problem. In this case the value
of the firm itself is also independent of time, because each period
is just like the next. We then have:
\begin{equation}
V\left(x\right)=\max_{u}\pi\left(u,x\right)+\left(\frac{1}{1+\rho}\right)E\left[V\left(x^{\prime}\right)|x,u\right] \tag{28.4}
\end{equation}
the problem is now to find a function $V$ that satisfies the equation
above. The details behind the solution to this problem can be found
in [Stokey et al. (1989)](https://books.google.com/books?id=tWYo0QolyLAC).

This setup is very versatile and can be applied to firm problems as
the one above, but it is also at the core of modern macroeconomic
theory. The following examples make this point in a non-stochastic
version of the model.
!!! example "Example 28.1"

    Consider an economy in which the representative consumer lives forever.
    There is a good in each period that can be consumed or saved as capital
    as well as labor. The consumer' s utility function is
    \[
    V\left(\overline{k}_{0}\right)=\sum_{t=0}^{\infty}\beta^{t}\log c_{t}
    \]
    Here $0<\beta<1$. The consumer is endowed with 1 unit of labor in
    each period and with $\overline{k}_{0}$ units of capital in period
    0. Capital fully depreciates each period. Feasible allocations satisfy
    \[
    c_{t}+k_{t+1}\leq\theta k_{t}^{\alpha}l_{t}^{1-\alpha}
    \]
    Here $\theta>0$ and $0<\alpha<1.$ We can formulate the problem
    of maximizing the representative consumer' s utility
    subject to feasibility conditions as a dynamic programming problem.
    The appropriate Bellman' s equation is:
    
    \begin{align*}
    V\left(k\right) & =\max_{c,k^{\prime},l}\left\{ \log c+\beta V\left(k^{\prime}\right)\right\} \\
    s.t.   & c+k^{\prime}\leq\theta k^{\alpha}l^{1-\alpha}\\
    & c,k^{\prime}\geq0\\
    & 0\leq l\leq1
    \end{align*}
    To solve it we guess that the value function has the form $a_{0}+a_{1}\log k$
    and solve for the decisions of the consumer. The constraint will hold
    with equality because the utility function is strictly increasing
    in consumption, also production increases with labor and there is
    no disutility of it, hence there is a corner solution for labor indicating
    $l=1$, so with the guess the problem becomes
    \[
    a_{0}+a_{1}\log k=\max_{k^{\prime}\in\left[0,\theta k^{\alpha}l^{1-\alpha}\right]}\log\left(\theta k^{\alpha}l^{1-\alpha}-k^{\prime}\right)+\beta\left(a_{0}+a_{1}\log k^{\prime}\right)
    \]
    Then the FOC is
    \[
    \frac{1}{\theta k^{\alpha}l^{1-\alpha}-k^{\prime}}=\frac{\beta a_{1}}{k^{\prime}}
    \]
    solving for $k^{\prime}$
    \begin{align*}
    k^{\prime} & =\beta a_{1}\left(\theta k^{\alpha}l^{1-\alpha}-k^{\prime}\right)\\
    & =\frac{\beta a_{1}\left(\theta k^{\alpha}l^{1-\alpha}\right)}{1+\beta a_{1}}
    \end{align*}
    Then plugging this back into the value function you get
    \[
    a_{0}+a_{1}\log k=\log\left(\theta k^{\alpha}l^{1-\alpha}-\frac{\beta a_{1}\left(\theta k^{\alpha}l^{1-\alpha}\right)}{1+\beta a_{1}}\right)+\beta\left(a_{0}+a_{1}\log\left(\frac{\beta a_{1}\left(\theta k^{\alpha}l^{1-\alpha}\right)}{1+\beta a_{1}}\right)\right)
    \]
    Collection terms with $k$ you get
    \begin{align*}
    a_{1}\log k & =\alpha\log k+\beta a_{1}\alpha\log k\\
    a_{1}\left(\log k-\beta\alpha\log k\right) & =\alpha\log k\\
    a_{1} & =\frac{\alpha}{1-\beta\alpha}
    \end{align*}
    which means the policy function is
    \begin{align*}
    k^{\prime} & =\frac{\beta\frac{\alpha}{1-\beta\alpha}\left(\theta k^{\alpha}l^{1-\alpha}\right)}{1+\beta\frac{\alpha}{1-\beta\alpha}}=\beta\alpha\theta k^{\alpha}l^{1-\alpha}\\
    l & =1\\
    c & =\theta k^{\alpha}l^{1-\alpha}-\beta\alpha\theta k^{\alpha}l^{1-\alpha}
    \end{align*}

<a id="ref-subsec-optimal-stopping-time" class="course-anchor"></a>
### Optimal Stopping Time

There is another type of problem that deserves special treatment.
Optimal stopping time problems are at the core of the continuous time
applications in the rest of the course. In these problems the agent
faces a binary choice (instead of a continuous choice as in the example
above), they resemble the example of the firm at the beginning of
the Section where the firm has to choose whether or not to invest.
This problems are characterized by the inaction of the agent, because
the agent usually acts just once, and most of the time the optimal
choice is to do nothing. To characterize these problems let $\Omega\left(x\right)$
be the termination payoff received once the action is taken (and time
is stopped). It depends on the value of state $x$. The Bellman equation
is now:
<a id="ref-eq-000020bellman-000020for-000020stopping-000020time-000020in-000020discrete-000020time" class="course-anchor"></a>
\begin{equation}
V\left(x\right)=\max\left\{ \Omega\left(x\right),\max_{u}\pi\left(u,x\right)+\left(\frac{1}{1+\rho}\right)E\left[V\left(x^{\prime}\right)|x,u\right]\right\} \tag{28.5}
\end{equation}
We can now define a stopping time as a random variable that signals
the decision to stop and take the termination payoff $\Omega\left(x\right)$.
So:
\begin{equation}
T^{\star}=\left\{ x|\Omega\left(x\right)\geq\max_{u}\pi\left(u,x\right)+\left(\frac{1}{1+\rho}\right)E\left[V\left(x^{\prime}\right)|x,u\right]\right\} \tag{28.6}
\end{equation}
In general $T^{\star}$ can take many forms, but in most (if not all)
of the relevant economic applications it will take the form: $T^{\star}=\left[\overline{x},\infty\right)$,
$T^{\star}=\left(-\infty,\underline{x}\right]$ or $T^{\star}=\left(-\infty,\underline{x}\right]\cup\left[\overline{x},\infty\right)$.
As an example we apply these ideas to the problem of search and unemployment,
the McCall search model.
!!! example "Example 28.2"

    Consider the following infinite horizon model. An agent searches for
    a job. Each period the agent receives a wage offer from a distribution
    $F\left(w\right)$ with bounded support $W=\left[0,\overline{W}\right]$.
    If accepted the agent will remain employed at that wage forever. If
    rejected the worker receives unemployment benefits $b$. Wage offers
    are iid over time. The worker preferences are $\sum\beta^{t}c_{t}$.
    Assume no borrowing or lending.
    
    We first set up the workers decision as a dynamic programming problem:
    \begin{align*}
    V^{E}\left(w\right) & =\frac{w}{1-\beta}\\
    V^{U} & =b+\beta\int\max\left\{ V^{E}\left(\tilde{w}\right),V^{U}\right\} dF\left(\tilde{w}\right)
    \end{align*}
    The decision of a worker when facing a wage offer $w$ is to accept
    it or reject it, the worker will accept if $V^{E}\left(w\right)>V^{u}$
    and reject otherwise. Then the value of the worker is:
    \begin{align*}
    V\left(w\right) & =\max\left[V^{E}\left(w\right),V^{U}\right]\\
    V\left(w\right) & =\max\left[\frac{w}{1-\beta},b+\beta\int V\left(\tilde{w}\right)dF\left(\tilde{w}\right)\right]
    \end{align*}
    Now we need to show that the decision to take action (accept a job
    offer) is given by $T^{\star}=\left[\overline{w},\infty\right)$,
    where $\overline{w}$ is the reservation wage. To show this, note
    that $V^{U}$ is independent of the wage and that $V^{E}$ is increasing
    in wages. The reservation wage satisfies:
    \[
    \frac{\overline{w}}{1-\beta}=b+\beta\int V\left(\tilde{w}\right)dF\left(\tilde{w}\right)
    \]
    This implies that $V$ is constant for $w<\overline{w}$, because
    the offers are rejected, and it is equal to $V^{E}$ for $w\geq\overline{w}$:
    \[
    V\left(w\right)=\begin{cases}
    \frac{\overline{w}}{1-\beta} & \text{if }w<\overline{w}\\
    \frac{w}{1-\beta} & \text{if }w\geq\overline{w}
    \end{cases}
    \]
    It is left to find $\overline{w}$. To do this we should first solve
    for $V^{U}$:
    \begin{align*}
    V^{U} & =b+\beta\int\max\left\{ V^{E}\left(\tilde{w}\right),V^{U}\right\} dF\left(\tilde{w}\right)\\
    & =b+\beta\int_{0}^{\overline{w}}\frac{\overline{w}}{1-\beta}dF\left(\tilde{w}\right)+\beta\int_{\overline{w}}^{\overline{W}}\frac{\tilde{w}}{1-\beta}dF\left(\tilde{w}\right)\\
    & =b+\frac{\beta}{1-\beta}\left(\int_{0}^{\overline{w}}\overline{w}dF\left(\tilde{w}\right)+\int_{\overline{w}}^{\overline{W}}\tilde{w}dF\left(\tilde{w}\right)\right)\\
    & =b+\frac{\beta}{1-\beta}\left(\overline{w}-\int_{\overline{w}}^{\overline{W}}\overline{w}dF\left(\tilde{w}\right)+\int_{\overline{w}}^{\overline{W}}\tilde{w}dF\left(\tilde{w}\right)\right)\\
    & =b+\frac{\beta}{1-\beta}\left(\overline{w}+\int_{\overline{w}}^{\overline{W}}\left(\tilde{w}-\overline{w}\right)dF\left(\tilde{w}\right)\right)
    \end{align*}
    The agent knows she is guaranteed to have $\overline{w}$ forever,
    finding a job just adds to the value with the wage in excess of $\overline{w}$.
    
    Turning back to determining $\overline{w}$ we can replace $V^{U}$
    to get:
    \[
    \overline{w}=b+\frac{\beta}{1-\beta}\int_{\overline{w}}^{\overline{W}}\left(\tilde{w}-\overline{w}\right)dF\left(\tilde{w}\right)
    \]
    This equation is guaranteed to have a solution for $\overline{w}\in\left[c,\overline{W}\right]$.
    The LHS is increasing in $\overline{w}$, while the RHS is decreasing
    in $\overline{w}$.

## Continuous time dynamic programming

We can now turn to develop a general framework to solve dynamic problems
in continuous time. To start consider the problem developed in the
previous section with periods of length $\Delta t$. The agent receives
a payoff $\pi\left(u,x\right)\Delta t$ every period (where $\pi$
is the payoff flow), and discounts the future at a rate $\rho$ per
unit of time, so the effective discount rate for the period of length
$\Delta t$ is: $\frac{1}{1-\rho\Delta t}$. This leads to the following
Bellman-type equation
\begin{equation}
V\left(x\right)=\max_{u}\pi\left(u,x\right)\Delta t+\left(\frac{1}{1+\rho\Delta t}\right)E\left[V\left(x^{\prime}\right)|x,u\right] \tag{28.7}
\end{equation}
Rearranging we get:
\begin{equation}
\rho V\left(x\right)=\max_{u}\left(1+\rho\Delta t\right)\pi\left(u,x\right)+\frac{E\left[\left(V\left(x^{\prime}\right)-V\left(x\right)\right)|x,u\right]}{\Delta t} \tag{28.8}
\end{equation}
Taking the limit as $\Delta t\to0$ we get our continuous time Bellman
equation:
<a id="ref-eq-000020continuous-000020time-000020bellman" class="course-anchor"></a>
\begin{equation}
\rho V\left(x\right)=\max_{u}\pi\left(u,x\right)+\frac{1}{dt}E\left[dV\left(x\right)|x,u\right]\tag{28.9}
\end{equation}
where
\[
\frac{E\left[dV\right]}{dt}=\lim_{\Delta t\to0}\frac{1}{\Delta t}E\left[\Delta V\right]
\]

[Equation (28.9)](#ref-eq-000020continuous-000020time-000020bellman) works
just like a non-arbitrage condition. We can thing of the agent as
holding an asset with value $V$. The LHS gives the normal rate of
return per unit time that the agent requires to hold the asset, given
the discount rate $\rho$. The RHS gives the effective payoff of the
asset, composed by the immediate flow payoff $\pi$, and the expected
capital gains (brought up by changes in the value of the asset).

We can further characterize the problem given knowledge of the stochastic
process that $x$ follows. This will allow us to evaluate the expectation
in [(28.9)](#ref-eq-000020continuous-000020time-000020bellman). If $x$
follows an Ito process, as in [equation (26.1)](section-26-stochastic-processes.md#ref-eq-000020def-000020ito-000020process),
then Ito's Lemma gives the following result:
\begin{align*}
dV & =\left(\mu\left(x,t\right)V^{\prime}+\frac{1}{2}\sigma^{2}\left(x,t\right)V^{"}\right)dt+\sigma\left(x,t\right)V^{\prime}dW\\
E\left[dV\right] & =\left(\mu\left(x,t\right)V^{\prime}+\frac{1}{2}\sigma^{2}\left(x,t\right)V^{"}\right)dt
\end{align*}
Replacing we get the Hamilton-Jacobi-Bellman equation:
<a id="ref-eq-000020hjb" class="course-anchor"></a>
\begin{equation}
\rho V\left(x\right)=\max_{u}\pi\left(u,x\right)+\mu\left(x,t\right)V^{\prime}\left(x\right)+\frac{1}{2}\sigma^{2}\left(x,t\right)V^{"}\left(x\right)\tag{28.10}
\end{equation}
We can take FOC with respect to $u$ and then get a differential equation
for $V$ that we can solve.

If $x$ follows a Poisson process, like the one in [equation (26.2)](section-26-stochastic-processes.md#ref-eq-000020poisson-000020process),
we can obtain a similar result. From [equation (27.4)](section-27-ito-s-lemma.md#ref-eq-000020ito-s-000020lemma-000020for-000020poisson)
we can compute $E\left[dV\right]$:
\[
E\left[dV\right]=\left(f\left(x,t\right)V^{\prime}\left(x\right)\right)dt+\lambda E_{u}\left[V\left(x+ug\left(x,t\right)\right)-V\left(x\right)\right]dt
\]

### Optimal Stopping Time and the Smooth Pasting Condition

We now go back to the stopping time problem reviewed in [Optimal Stopping Time](#ref-subsec-optimal-stopping-time).
Consider then the problem of an agent that is engaged in some activity
(say running a firm). The agent gets a flow payoff of $\pi\left(x\right)$
if she continues with the activity, and $\Omega\left(x,t\right)$
if she quits the activity (stops). The value of the agent is:
<a id="ref-eq-bellman-000020eq-000020stopping-000020time" class="course-anchor"></a>
\begin{equation}
V\left(x,t\right)=\max\left\{ \Omega\left(x,t\right),\pi\left(x\right)\Delta t+\frac{1}{1+\rho\Delta t}E\left[V\left(x+dx,t+\Delta t\right)\right]\right\} \tag{28.11}
\end{equation}
where $x$ follows a diffusion process and in [equation (26.1)](section-26-stochastic-processes.md#ref-eq-000020def-000020ito-000020process).
We assume that $\Omega$ is continuous and weakly increasing in $x$.

In order to solve the problem we need to find regions of $x$ where
it is best for the agent to continue and those for which it is best
to stop. If $x$ is in the continuation region then:
\[
V\left(x\right)=\pi\left(x\right)\Delta t+\frac{1}{1+\rho\Delta t}E\left[V\left(x^{\prime}\right)\right]
\]
From above we know that this implies that for $x$ in the continuation
region we have (by applying Ito's lemma):
\[
\rho V\left(x,t\right)=\pi\left(x\right)+V_{t}\left(x,t\right)+\mu\left(x,t\right)V_{x}\left(x,t\right)+\frac{1}{2}\sigma^{2}\left(x,t\right)V_{xx}\left(x,t\right)
\]
For simplicity we assume now that the continuation region has the
form $x\geq x^{\star}\left(t\right)$. It is only for $x\geq x^{\star}\left(t\right)$
that the equation above holds. In order to solve it we need to impose
certain boundary conditions.

By assumption we know that $V\left(x\right)=\Omega\left(x,t\right)$
for $x<x^{\star}\left(t\right)$, then, by continuity we can impose
that:
\[
V\left(x^{\star}\left(t\right),t\right)=\Omega\left(x^{\star}\left(t\right),t\right)
\]
this is called "value-matching". Continuity at $x^{\star}$ is
actually necessary for a solution. Suppose for a contradiction that
it is optimal to stop for $x<x^{\star}\left(t\right)$, but that $V\left(x^{\star}\left(t\right),t\right)<\Omega\left(x^{\star}\left(t\right),t\right)$,
because $V$ has to be continuous in the domain $x\geq x^{\star}\left(t\right)$
(because it is the solution to a differential equation), and $\Omega$
is continuous by definition, then it holds that for $x$ to the right
of $x^{\star}\left(t\right)$, but sufficiently close to $x^{\star}\left(t\right)$
it also holds that $V\left(x,t\right)<\Omega\left(x,t\right)$, which
contradicts $x\geq x^{\star}\left(t\right)$ being the continuation
region. A similar argument applies for the other inequality.

But this condition is not sufficient to solve the problem, because
the value of $x^{\star}\left(t\right)$ is still unknown. The condition
that allows us to solve the problem (of jointly finding $V$ and $x^{\star}$)
is to impose further smoothness to our value function, it must not
only be continuous, but continuously differentiable. This condition
is called "smooth pasting" and it requires the first derivative
of the value function to be continuous, that is:
\[
V_{x}\left(x^{\star}\left(t\right),t\right)=\Omega_{x}\left(x^{\star}\left(t\right),t\right)
\]

The reason behind the smooth pasting condition is not at all evident.
I will illustrate it below, but I recommend checking Appendix C of
Chapter 4 in [Dixit and Pindyck (1994)](http://www.jstor.org/stable/j.ctt7sncv), or [Stokey (2009, Prop 6.4 pg 124)](http://www.jstor.org/stable/j.ctt7sfgq).

To see why the smooth pasting condition arise consider the following
case built for a contradiction: the value matching condition holds,
but the smooth pasting condition fails, hence $V$ and $\Omega$ must
meet at a kink. There are two options:

1. There is an upward kink (forming a concave function). If this is the
case then, by continuity, $\Omega$ would be higher than $F$ for
some value $x>x^{\star}$. Contradicting that the continuation region
starts at $x^{\star}$.
1. There is a downward kink (forming a convex function). If this is the
case then $x^{\star}$ cannot be a point of indifference either. There
is a better strategy, namely continuing for some time $\Delta t$
and then choosing what to do. This strategy give higher (expected)
payoff. \\
To see this recall the random walk formulation of the brownian motion,
in a time lapse $\Delta t$ $x$ can either go up by $h$ with probability
$p$ or down by $-h$ with probability $1-p$, where:
\[
h=\sigma\sqrt{\Delta t}\qquad p=\frac{1}{2}\left(1+\frac{\mu}{\sigma}\sqrt{\Delta t}\right)
\]
Then the agent can continue if the step is upward and stop if it is
downward. The expected payoff of this strategy is:
\[
V\left(x^{\star}\left(t\right),t\right)=\pi\left(x^{\star}\left(t\right),t\right)\Delta t+\frac{1}{1+\rho\Delta t}\left[pV\left(x^{\star}\left(t\right)+h,t+\Delta t\right)+\left(1-p\right)\Omega\left(x^{\star}\left(t\right)-h,t+\Delta t\right)\right]
\]
We can take a Taylor expansion around $\left(x^{\star}\left(t\right),t\right)$
to approximate the value of $V\left(x^{\star}\left(t\right)+h,t+\Delta t\right)$
and $\Omega\left(x^{\star}\left(t\right)-h,t+\Delta t\right)$:
\begin{align*}
V\left(x^{\star}\left(t\right)+h,t+\Delta t\right) & \approx V\left(x^{\star}\left(t\right),t\right)+V_{x}\left(x^{\star}\left(t\right),t\right)h+V_{t}\left(x^{\star}\left(t\right),t\right)\Delta t\\
\Omega\left(x^{\star}\left(t\right)-h,t+\Delta t\right) & \approx\Omega\left(x^{\star}\left(t\right),t\right)-\Omega{}_{x}\left(x^{\star}\left(t\right),t\right)h+\Omega_{t}\left(x^{\star}\left(t\right),t\right)\Delta t
\end{align*}
Replacing gives:
\begin{align*}
V\left(x^{\star}\left(t\right),t\right) & =\pi\left(x^{\star}\left(t\right),t\right)\Delta t+\frac{1}{1+\rho\Delta t}\left(V\left(x^{\star}\left(t\right),t\right)+\frac{1}{2}\left[\left(V_{x}\left(x^{\star}\left(t\right),t\right)-\Omega{}_{x}\left(x^{\star}\left(t\right),t\right)\right)h+\left(V_{t}\left(x^{\star}\left(t\right),t\right)+\Omega_{t}\left(x^{\star}\left(t\right),t\right)\right)\Delta t\right]\right)
\end{align*}
where we use the value matching condition and the fact that $ph\approx\frac{1}{2}\sigma\sqrt{\Delta t}$
and $p\Delta t\approx\frac{1}{2}\Delta t$.\\
What matters for evaluating the strategy is the continuation value,
and that $\Delta t$ is of order $h^{2}$, so the first two terms
in the continuation value $\left(V\left(x^{\star}\left(t\right),t\right)+\frac{1}{2}h\left(V_{x}\left(x^{\star}\left(t\right),t\right)-\Omega{}_{x}\left(x^{\star}\left(t\right),t\right)\right)\right)$
will dictate the behavior of the gain as $\Delta t\to0$ (or equivalently
$h\to0$). These terms are positive as long as $V_{x}\left(x^{\star}\left(t\right),t\right)>\Omega{}_{x}\left(x^{\star}\left(t\right),t\right)$,
which is the case if there is a downward kink. \\
Then there cannot be a downward kink, because it would contradict
the optimality of the strategy of stopping at $x^{\star}\left(t\right)$.

!!! example "Example 28.3"

    Consider a firm that has flow revenues of $e^{x_{t}}$, and that can
    be closed at any time and sold for a value $\Omega>0$. The owner
    of the firm is risk neutral and discounts the future at a rate $\rho>0$.
    $x_{t}$ follows:
    \[
    dx_{t}=\mu dt+\sigma dW
    \]
    The problem of the firm's owner is then:
    \[
    V\left(x\right)=\max\left\{ \Omega,e^{x}\Delta t+\frac{1}{1+\rho\Delta t}E\left[V\left(x+dx\right)\right]\right\}
    \]
    where continuation is optimal for $x\geq x^{\star}$. This problem
    is independent of time.
    
    As long as $x$ is in the continuation region the value function satisfies
    the HJB equation:
    \[
    \rho V\left(x\right)=e^{x}+\mu V_{x}\left(x\right)+\frac{1}{2}\sigma^{2}V_{xx}\left(x\right)
    \]
    This is a second order ordinary differential equation with constant
    coefficients. Then we know that the solution has the form:
    \[
    V\left(x\right)=V^{P}\left(x\right)+A_{1}H_{1}\left(x\right)+A_{2}H_{2}\left(x\right)
    \]
    where $V^{P}$ is a particular solution to the differential equation,
    $H_{1}$ and $H_{2}$ are homogenous solutions, and $A_{1}$and $A_{2}$
    are constants to be determined.
    
    The particular solution is easy to obtain. We can solve for the value
    of never stopping:
    \[
    V^{P}\left(x\right)=E\left[\int_{0}^{\infty}e^{-\rho t}e^{x}dt\right]
    \]
    We can solve this expectation using the results in [Example 27.1](section-27-ito-s-lemma.md#ref-ex-000020expected-000020value-000020of-000020geometric-000020brownian-000020motion).
    We get:
    \[
    V^{P}\left(x\right)=\frac{x}{\rho-\left(\mu+\frac{1}{2}\sigma^{2}\right)}
    \]
    we assume that $\rho-\left(\mu+\frac{1}{2}\sigma^{2}\right)>0$ in
    order to guarantee the existence of this solution.
    
    The homogenous solutions are obtained from the homogenous equation:
    \[
    \rho H\left(x\right)=\mu H_{x}\left(x\right)+\frac{1}{2}\sigma^{2}H_{xx}\left(x\right)
    \]
    by guessing that $H\left(x\right)=e^{\xi x}$ and replacing we get:
    \begin{align*}
    \rho e^{\xi x} & =\mu\xi e^{\xi x}+\frac{1}{2}\sigma^{2}\xi^{2}e^{\xi x}\\
    0 & =-\rho+\mu\xi+\frac{1}{2}\sigma^{2}\xi^{2}
    \end{align*}
    our guess is verified for $\xi$ a root of the equation above. There
    are two roots:
    \[
    \xi_{2}=-\frac{\mu+\sqrt{\mu^{2}+2\sigma^{2}\rho}}{\sigma^{2}}\qquad\xi_{2}=\frac{-\mu+\sqrt{\mu^{2}+2\sigma^{2}\rho}}{\sigma^{2}},
    \]
    where $\xi_{1}<0<1<\xi_{2}$, this follows from $\rho>0$ and the
    assumption $\rho-\left(\mu+\frac{1}{2}\sigma^{2}\right)>0$. Joining
    we get the solution for our HJB equation:
    \[
    V\left(x\right)=V^{P}\left(x\right)+A_{1}e^{\xi_{1}x}+A_{2}e^{\xi_{2}x}
    \]
    Now we must determine the values of $A_{1}$ and $A_{2}$. To do so
    we first need to impose certain conditions on our value function.
    
    1. From optimality in exit it must be that: $V\left(x\right)\geq\Omega$.
    1. From feasibility it must be that: $V\left(x\right)\leq V^{P}\left(x\right)+\Omega$.
    1. Value matching implies: $V\left(x^{\star}\right)=\Omega$.
    
    We will show that $A_{2}=0$. Suppose for a contradiction that $A_{2}>0$,
    then as $x\to\infty$ we have $e^{\xi_{1}x}\to0$ (because $\xi_{1}<0$),
    and $e^{\xi_{2}x}\to\infty$ (because $\xi_{2}>0$), because $A_{2}>0$
    this implies that $V$ violates its upper bound. Now suppose for a
    contradiction that $A_{2}<0$, as before $e^{\xi_{1}x}\to0$ and $e^{\xi_{2}x}\to\infty$,
    because $\xi_{2}>1$ the last term will grow faster than the first
    one, thus violating the lower bound (the value goes to $-\infty$).
    Then it must be that $A_{2}=0$.

Then we can obtain $A_{1}$ from the value matching condition:
\begin{align*}
V\left(x^{\star}\right) & =V^{P}\left(x^{\star}\right)+A_{1}e^{\xi_{1}x^{\star}}\\
\left(\Omega-V^{P}\left(x^{\star}\right)\right)e^{-\xi_{1}x^{\star}} & =A_{1}
\end{align*}
with this the solution is complete, given a value for $x^{\star}$.
It is left to find such value, for that we make use of the smooth
pasting condition:
\begin{align*}
V_{x}\left(x^{\star}\right) & =0\\
V_{x}^{P}\left(x^{\star}\right)+A_{1}\xi_{1}e^{\xi_{1}x^{\star}} & =0\\
\frac{1}{\rho-\left(\mu+\frac{1}{2}\sigma^{2}\right)}+\left(\Omega-\frac{x^{\star}}{\rho-\left(\mu+\frac{1}{2}\sigma^{2}\right)}\right)\xi_{1} & =0\\
\frac{1}{\xi_{1}}+\left(\rho-\left(\mu+\frac{1}{2}\sigma^{2}\right)\right)\Omega & =x^{\star}
\end{align*}
