# Ito's Lemma

> Part: Stochastic Calculus

We are often concerned with the behavior of functions of stochastic
processes, in particular the differentials of those functions. The
number one example at hand is to know how the value of an asset (or
an option) evolves over time. Ito's Lemma gives a way to compute those
differentials. This relates the functions we are interested in to
the stochastic differential equation that governs the underlying stochastic
process.

Consider a function $F\left(x,t\right)$ that depends on a stochastic
process $x$. $x$ is assumed to be an Ito process following:
\begin{equation}
dx=\mu\left(x,t\right)dt+\sigma\left(x,t\right)dW
\end{equation}
Normal calculus rules would give the differential of $F$ as:
\[
dF=\frac{\partial F}{\partial x}dx+\frac{\partial F}{\partial t}dt
\]
Although not always clear, one of the reasons for expressing the differential
without resorting to higher order terms is that those terms depend
on $dt^{2}$, $dt^{3}\ldots$. As $dt\to0$ all higher order terms
go to zero faster, and are hence ignored. But stochastic process add
a new factor because their components depend of time through $\sqrt{dt}$,
so square terms like $\left(dx\right)^{2}$ must also be considered.

A second order Taylor expansion of $F$ gives:
\[
dF=\frac{\partial F}{\partial x}dx+\frac{\partial F}{\partial t}dt+\frac{1}{2}\left(\frac{\partial^{2}F}{\partial x^{2}}\left(dx\right)^{2}+\frac{\partial^{2}F}{\partial t^{2}}\left(dt\right)^{2}+\frac{\partial^{2}F}{\partial t^{2}}\left(dx\right)\left(dt\right)\right)
\]
As shown in Oksendal (2003, Sec. 4.1) $dWdt=dt^{2}=0$, they
can be safely ignored because they depend on terms of order higher
than $dt$. That leaves us with:
\begin{equation}
dF=\frac{\partial F}{\partial x}dx+\frac{\partial F}{\partial t}dt+\frac{1}{2}\frac{\partial^{2}F}{\partial x^{2}}\left(dx\right)^{2}
\end{equation}
From the definition of our Ito process we get:
\begin{align*}
\left(dx\right)^{2} & =\left(\mu^{2}\left(x,t\right)\left(dt\right)^{2}+2\mu\left(x,t\right)\sigma\left(x,t\right)dtdW+\sigma^{2}\left(x,t\right)\left(dW\right)^{2}\right)\\
& =\sigma^{2}\left(x,t\right)\left(dW\right)^{2}
\end{align*}
We can again drop the terms involving $\left(dt\right)^{2}$ and $\left(dtdW\right)$,
and also show that $\left(dW\right)^{2}=dt$ (recall that $E\left[\left(dW\right)^{2}\right]=dt$).
The proof is not hard and can be found in Oksendal (2003, Sec. 4.1).
Replacing:
\begin{align}
dF & =\left(\frac{\partial F}{\partial x}dx+\frac{\partial F}{\partial t}dt\right)+\frac{1}{2}\frac{\partial^{2}F}{\partial x^{2}}\left(\sigma^{2}\left(x,t\right)dt\right)\nonumber \\
dF & =\left(\frac{\partial F}{\partial t}+\mu\left(x,t\right)\frac{\partial F}{\partial x}+\frac{1}{2}\sigma^{2}\left(x,t\right)\frac{\partial^{2}F}{\partial x^{2}}\right)dt+\sigma\left(x,t\right)\frac{\partial F}{\partial x}dW
\end{align}

This derivation (Ito's Formula) means that $y=F\left(x,t\right)$
is itself an Ito process with $\mu_{y}\left(x,t\right)=\left(F_{t}+\mu\left(x,t\right)F_{x}+\frac{1}{2}\sigma^{2}\left(x,t\right)F_{xx}\right)$
and $\sigma_{y}\left(x,t\right)=\sigma\left(x,t\right)F_{x}$ as parameters.
Unsurprisingly, the expected value of $y$ is $\mu_{y}\left(x,t\right)$
and its variance is $\sigma_{y}\left(x,t\right)dt$.

## Application to geometric brownian motion

We can use Ito's Lemma to obtain the properties of different stochastic
processes. For instance the Geometric Brownian motion can be shown
to be the exponential of a standard brownian motion, or equivalently
it can be shown that the logarithm of a geometric brownian motion
is a brownian motion.

Let $x$ be a geometric brownian motion satisfying:
\[
dx=\mu xdt+\sigma xdW
\]
and $y=\ln x$. By Ito's Lemma:
\begin{align*}
dy & =\left(\mu x\cdot\frac{1}{x}+\frac{1}{2}\sigma^{2}x^{2}\cdot\left(\frac{-1}{x^{2}}\right)\right)dt+\sigma x\cdot\frac{1}{x}dW\\
& =\left(\mu-\frac{1}{2}\sigma^{2}\right)dt+\sigma dW
\end{align*}
thus $y$ is a brownian motion with parameters $\mu_{y}=\mu-\frac{1}{2}\sigma^{2}$
and $\sigma_{y}=\sigma$. The drift of $y$ is lower than the drift
of $x$, because the logarithm is a concave function Jensen's inequality
implies that the expected value of the log is lower.

We can also obtain the expected value of $x$ by noting that:
\[
x\left(t\right)=x\left(0\right)+\int_{0}^{t}\mu x\left(s\right)ds+\int_{0}^{t}\sigma x\left(s\right)dW\left(s\right)
\]
taking expectations gives:
\[
E\left[x\left(t\right)\right]=x\left(0\right)+\int_{0}^{t}\mu E\left[x\left(s\right)\right]ds
\]
recalling that the third term is a stochastic integral, and hence
has expected value equal to zero. From this equation we can derive
a first order differential equation for the expected value of $x$:
\[
dE\left[x\right]=\mu E\left[x\right]dx
\]
The solution for this equation, given the boundary condition $E\left[x\left(0\right)\right]=x\left(0\right)$
is:
\[
E\left[x\right]=x\left(0\right)e^{\mu t}
\]
Finding the variance (and other moments) works in the same way. For
the variance we want to obtain an expression for $x^{2}$, so first
consider the function $f\left(x\right)=x^{2}$. By Ito's Lemma we
get:
\begin{align*}
df & =\left(2\mu x^{2}+\sigma^{2}x^{2}\right)dt+2\sigma x^{2}dW\\
x^{2}=f\left(x\right) & =x_{0}^{2}+\left(2\mu+\sigma^{2}\right)\int_{0}^{t}x^{2}\left(s\right)ds+2\sigma\int_{0}^{t}x^{2}\left(s\right)dW\left(s\right)
\end{align*}
We can now take expectations to obtain:
\[
E\left[x^{2}\right]=x_{0}^{2}+\left(2\mu+\sigma^{2}\right)\int_{0}^{t}E\left[x^{2}\left(s\right)\right]ds
\]
which leads to a differential equation for $E\left[x^{2}\right]$:
\begin{align*}
dE\left[x^{2}\right] & =\left(2\mu+\sigma^{2}\right)E\left[x^{2}\right]\\
E\left[x^{2}\right] & =x^{2}\left(0\right)e^{\left(2\mu+\sigma^{2}\right)t}
\end{align*}
the variance is then:
\begin{align*}
V\left[x\right] & =E\left[x^{2}\right]-E\left[x\right]^{2}\\
& =x^{2}\left(0\right)e^{\left(2\mu+\sigma^{2}\right)t}-x^{2}\left(0\right)e^{2\mu t}\\
& =x^{2}\left(0\right)e^{2\mu t}\left(e^{\sigma^{2}t}-1\right)
\end{align*}

Some applications are shown below:
<a id="ref-ex-000020expected-000020value-000020of-000020geometric-000020brownian-000020motion" class="course-anchor"></a>
!!! example "Example"

    Consider
    an asset that gives flow payoffs $x$ that evolve according to a geometric
    brownian motion
    \[
    dx=\mu xdt+\sigma xdW
    \]
    we can compute the expected discounted value of holding that asset
    easily using the results above:
    \[
    E\left[\int_{0}^{\infty}e^{-\rho t}x\left(t\right)dt\right]=\int_{0}^{\infty}e^{-\rho t}E\left[x\left(t\right)\right]dt=\int_{0}^{\infty}x\left(0\right)e^{-\left(\rho-\mu\right)t}dt=\frac{x_{0}}{\rho-\mu}
    \]

!!! example "Example"

    Now consider an agent that receives flow consumption of $x$, which
    evolves again as a geometric brownian motion. The agent's utility
    is CRRA, so that $u\left(x\right)=\frac{x^{1-\theta}}{1-\theta}$
    . We want to know the expected present value of utility.
    \[
    E\left[\int e^{-\rho t}u\left(x\left(t\right)\right)dt\right]=\int e^{-\rho t}E\left[u\left(x\left(t\right)\right)\right]dt
    \]
    To know it we need to compute $E\left[u\left(x\left(t\right)\right)\right]$.
    From Ito's Lemma we have:
    \begin{align*}
    du & =\left(\mu x\cdot x^{-\theta}+\frac{1}{2}\sigma^{2}x^{2}\cdot\left(-\theta x^{-\theta-1}\right)\right)dt+\sigma x\cdot x^{-\theta}dW\\
    du & =\left(1-\theta\right)\left(\mu-\frac{\theta}{2}\sigma^{2}\right)\frac{x^{1-\theta}}{1-\theta}dt+\left(1-\theta\right)\sigma\frac{x^{1-\theta}}{1-\theta}dW\\
    du & =\left(1-\theta\right)\left(\mu-\frac{\theta}{2}\sigma^{2}\right)udt+\left(1-\theta\right)\sigma udW
    \end{align*}
    Thus, $u$ is itself a geometric brownian motion (actually if $x$
    is a brownian motion $x^{k}$ is a geometric brownian motion). Using
    our previous results we have:
    \[
    E\left[u\right]=u\left(x\left(0\right)\right)e^{\left(1-\theta\right)\left(\mu-\frac{\theta}{2}\sigma^{2}\right)t}
    \]
    So we have:
    \[
    E\left[\int e^{-\rho t}u\left(x\left(t\right)\right)dt\right]=\int e^{-\rho t}E\left[u\left(x\left(t\right)\right)\right]dt=\frac{\left(x\left(0\right)\right)^{1-\theta}}{\left(1-\theta\right)\left(\rho-\left(1-\theta\right)\left(\mu-\frac{\theta}{2}\sigma^{2}\right)\right)}
    \]

## Poisson Processes

Similar, and simpler, results can be obtained if $x$ follows a Poisson
process:
\[
dx=f\left(x,t\right)dt+g\left(x,t\right)dq
\]
and we have a function $H\left(x,t\right)$ that depends on $x$.
Unlike the Ito Process the Poisson process does not depend on $\sqrt{dt}$,
so higher order terms in the Taylor expansion can be ignored altogether
to get:
\begin{align*}
dH & =H_{t}dt+H_{x}dx\\
& =\left(H_{t}+f\left(x,t\right)H_{x}\right)dt+g\left(x,t\right)H_{x}dq
\end{align*}
The expected value of this change must take into account the probability
of a jump in $q$ (given by $\lambda dt$), so we have:
<a id="ref-eq-000020ito-s-000020lemma-000020for-000020poisson" class="course-anchor"></a>
\begin{equation}
E\left[dH\right]=\left(H_{t}+f\left(x,t\right)H_{x}\right)dt+\lambda E_{u}\left[H\left(x+ug\left(x,t\right),t\right)-H\left(x,t\right)\right]dt
\end{equation}
it follows, by using the identity function that $E\left[dx\right]=f\left(x,t\right)dt+\lambda E_{u}\left[ug\left(x,t\right)\right]dt$.

We can apply this result to a couple examples taken from [Dixit and Pindyck (1994)](http://www.jstor.org/stable/j.ctt7sncv):
<a id="ref-example-000020poisson-000020process-000020-000020present-000020value-000020of-000020wage" class="course-anchor"></a>
<a id="ref-eq-000020bellman-000020equation-000020present-000020value-000020of-000020wage-000020poisson" class="course-anchor"></a>
!!! example "Example"

    Consider
    an individual that lives forever and receives a wage $w\left(t\right)$
    at each point in time. The wage increases by $\epsilon$ at random
    times, following a Poisson process with arrival rate $\lambda$, so:
    \[
    dw=\epsilon dq
    \]
    The individual wants to know the expected discounted value of taking
    the job we need to compute:
    \[
    V\left(w\right)=E\left[\int_{0}^{\infty}e^{-\rho t}w\left(t\right)dt\right]
    \]
    The function $V$ (a value function) has a recursive representation,
    this is easier to see in the discrete time approximation. Consider
    a period of length $\Delta t$, then:
    \begin{align*}
    V\left(w\left(t\right)\right) & =w\left(t\right)\Delta t+\frac{1}{1+\rho\Delta t}E\left[V\left(w\left(t+\Delta t\right)\right)\right]\\
    \left(1+\rho\Delta t\right)V\left(w\left(t\right)\right) & =\left(1+\rho\Delta t\right)w\left(t\right)\Delta t+E\left[V\left(w\left(t+\Delta t\right)\right)\right]\\
    \rho\left(\Delta t\right)V\left(w\left(t\right)\right) & =\left(1+\rho\Delta t\right)w\left(t\right)\Delta t+E\left[V\left(w\left(t+\Delta t\right)\right)-V\left(w\left(t\right)\right)\right]\\
    \rho V\left(w\left(t\right)\right) & =\left(1+\rho\Delta t\right)w\left(t\right)+\frac{E\left[\Delta V\right]}{\Delta t}
    \end{align*}
    Taking the limit as $\Delta t\to0$ we get:
    \begin{equation}
    \rho V=w+\frac{E\left[dV\right]}{dt}
    \end{equation}
    Staying in the job works just like an asset, with a normal return
    at rate $\rho$ being equal to the sum of the dividend (in this case
    given by the wage) and the expected capital gains (from changes in
    the wage). In the expression above $\frac{E\left[dV\right]}{dt}=\lim_{\Delta t\to0}\frac{1}{\Delta t}E\left[\Delta V\right]$
    
    We can apply the formula from above:
    \[
    E\left[dH\right]=\left(H_{t}+f\left(x,t\right)H_{x}\right)dt+\lambda E_{u}\left[H\left(x+ug\left(x,t\right),t\right)-H\left(x,t\right)\right]dt
    \]
    where $H=V$, $x=w$, $f\left(x,t\right)=0$ and $g\left(x,t\right)=\epsilon$
    and $u=1$ with certainty:
    \begin{align*}
    E\left[dV\right] & =\lambda\left(V\left(w+\epsilon\right)-V\left(w\right)\right)dt\\
    & =\lambda\epsilon\left(\int_{0}^{\infty}e^{-\rho t}dt\right)dt\\
    & =\frac{\lambda\epsilon}{\rho}dt
    \end{align*}
    This leaves us with an explicit solution for $V$:
    \[
    V=\frac{w}{\rho}+\frac{\lambda\epsilon}{\rho^{2}}
    \]
    $V$ is equal to an asset that pays the current wage forever plus
    the capitalized value of the average raise in wages per unit of time.

!!! example "Example"

    Consider now a firm that produces using capital. As long as capital
    is operational a flow profit of $\pi$ is obtained, but capital becomes
    obsolete when new technologies arrive. These innovations occur at
    random times following a Poisson process with arrival rate $\lambda$.
    Once the innovation arrives and the capital becomes obsolete the firm
    goes out of business forever.
    
    The value of the firm follows a process:
    \[
    dV=-Vdq
    \]
    The return can be found as before:
    \[
    \rho V=\pi+\frac{1}{dt}E\left[dV\right]
    \]
    To find $E\left[dV\right]$ we can again use our formula with $H=V$,
    the identity function:
    \[
    E\left[dV\right]=-\lambda Vdt
    \]
    replacing we get
    \[
    \rho V=\pi-\lambda V\quad\text{or}\quad V=\frac{\pi}{\rho+\lambda}.
    \]
    Which this is equivalent to solving:
    \[
    V=\int_{0}^{\infty}e^{-\left(\rho+\lambda\right)t}\pi dt
    \]
    This should not be a surprise. Consider the case where there are no
    shocks and the firm can operate forever with certainty. Then $V$
    is:
    \[
    V=\int_{0}^{\infty}e^{-\rho t}\pi dt=\frac{\pi}{\rho}
    \]
    Now the firm shuts down with a certain probability, given by the arrival
    of the Poisson shock. Then:
    \[
    V=E\left[\int_{0}^{\infty}e^{-\rho t}\pi dt\right]=\int_{0}^{\infty}\Pr\left[\text{No shock until time t}\right]e^{-\rho t}\pi dt
    \]
    The probability of there being no shocks is known:
    \[
    \Pr\left[\text{No shock until time t}\right]=e^{-\lambda t}
    \]
    Replacing gives the desired result.
