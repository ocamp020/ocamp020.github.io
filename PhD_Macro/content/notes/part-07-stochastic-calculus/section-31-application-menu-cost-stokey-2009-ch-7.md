# Application: Menu cost Stokey (2009, Ch. 7)

> Part: Stochastic Calculus

Consider a firm whose profit flow at any date $t$ depends on its
relative price, that is: the ratio of its own nominal price to an
aggregate (industry-wide or economy-wide) price index, where the latter
is a geometric Brownian motion. Recall that if the price follows a
GBM then its log follows a brownian motion. It is then convenient
to work with the prices in log form. Let $p\left(t\right)$ be the
log of the firm\textquoteright s nominal price and $\overline{p}\left(t\right)$
the log of the aggregate price index. Then:
\[
d\overline{p}=-\mu dt+\sigma dW_{p}
\]

The initial value for the firm\textquoteright s (log) nominal price
$p_{0}$ is given. The firm can change its nominal price at any time,
but to do so it must pay a fixed adjustment cost $c>0$. This cost
is constant over time and measured in real terms. Because control
entails a fixed cost, the firm adjusts the price only occasionally
and by discrete amounts.

The problem of the firm is to choose when to adjust the price, and
by how much. One can see this as a problem of choosing the (random)
times at which to adjust the price, or of choosing an inaction region,
such that the price is adjusted when some condition is met.

The problem can be formulated in terms of that one state variable
because the profit flow at any date depends only on the firm\textquoteright s
relative price. Let:
\[
z\left(t\right)=p\left(t\right)-\overline{p}\left(t\right)
\]
When the firm adjusts its price the variable $z$ jumps. Part of the
problem will be to find the optimal value $z^{\star}$ to which $z$
is set when the firm decides to take action. Between adjustments $z$
evolves only with $\overline{p}$, so we have (for any time at which
there is no adjustment):
\[
dz=\mu dt+\sigma dW
\]
where $dW=-dW_{p}$.

The profit flow of the firm, $\pi\left(z\right)$, is a stationary
function of its relative price $z$, and profits are discounted at
a constant interest rate $r$. The following restrictions on $\pi$,
$r$, $c$ and the parameters $\mu,$ $\sigma^{2}$ insure that the
problem is well behaved:

1. $r,c,\sigma^{2}>0$
1. $\pi$ is continuous everywhere, strictly increasing on $\left(-\infty,0\right)$
and strictly decreasing on $\left(0,\infty\right)$.

  1. The location of the peak of $\pi$ at 0 is arbitrary.

We will assume that $\pi$ takes the following form:
\[
\pi\left(z\right)=\begin{cases}
\pi_{0}e^{\eta_{+}z} & \text{if }z\geq0\\
\pi_{0}e^{\eta_{-}z} & \text{if }z<0
\end{cases}
\]
where $\eta_{+}<0<\eta_{-}$.

These assumptions imply that it is optimal to change the price if
$z$ gets too low or too high. Then the inaction region is: $\left(\underline{z},\bar{z}\right)$.

The HJB equation for $z\in\left(\underline{z},\bar{z}\right)$ is:
\[
\rho V\left(z\right)=\pi\left(z\right)+\mu V^{'}\left(z\right)+\frac{1}{2}\sigma^{2}V^{''}\left(z\right)
\]
The boundary conditions for $V$ are value matching and smooth pasting
at $\underline{z}$ and $\overline{z}$:
\begin{align*}
V\left(\underline{z}\right) & =V\left(z^{\star}\right)-c\\
V\left(\overline{z}\right) & =V\left(z^{\star}\right)-c\\
V^{'}\left(\underline{z}\right) & =0\\
V^{'}\left(\bar{z}\right) & =0
\end{align*}
while $z^{\star}$ is optimally found to maximize $V$. So it must
satisfy:
\[
V^{'}\left(z^{\star}\right)=0
\]

The solution to the HJB equation is, just as before:
\[
V\left(z\right)=V^{p}\left(z\right)+A_{1}e^{\xi_{1}z}+A_{2}e^{\xi_{2}z}
\]
where $V^{p}$ is a particular solution and $H\left(z\right)=e^{\xi z}$
is a solution to the homogeneous equation.

Finding the particular solution is not trivial. Stokey proposes the
following solution:
\[
W\left(z\right)=E\left[\int_{0}^{T}e^{-rt}\pi\left(z\left(t\right)\right)dt\right]
\]
where $T$ is the (random) time at which the price will be adjusted.
$W$ gives then the expected discounted value of the profits until
the next adjustment. This function is difficult to deal with, because
$T$ is not a real number, but instead a random variable. It is however
possible to exploit this to express $W$ as an integral over values
of $z$. This goes beyond what we are covering, the details are available
in [Stokey (2009, Sec. 3.5)](http://www.jstor.org/stable/j.ctt7sfgq). Critically it can be shown that:
\[
W\left(\underline{z}\right)=W\left(\bar{z}\right)=0
\]
because there is no time until the next adjustment. It will occur
in that instant.

This simplifies the value matching conditions to:
\begin{align*}
A_{1}e^{\xi_{1}\underline{z}}+A_{2}e^{\xi_{2}\underline{z}} & =V\left(z^{\star}\right)-c\\
A_{1}e^{\xi_{1}\overline{z}}+A_{2}e^{\xi_{2}\overline{z}} & =V\left(z^{\star}\right)-c
\end{align*}
Unfortunately we cannot further solve this problem.
