# Application: Real Options

> Part: Stochastic Calculus

Consider the problem of a firm that is thinking about investing in
a new project. The payoff that the project generates varies stochastically,
but its cost is fixed. To be precise: the firm can, at any point in
time, pay a fixed cost $I$ to invest on a project that will have
a payoff $x\left(t\right)$. Firm\textquoteright s investment opportunity
is a perpetual call option, that is, the right but not the obligation
to buy a share of some asset at a pre-specified price.

The payoff is assumed to follow a geometric brownian motion, so that:
\[
dx=\mu xdt+\sigma xdW
\]
The firm discounts the future at a rate $\rho$, so the problem of
the firm is:
\[
V\left(x_{0}\right)=\max_{T}E\left[\left(x\left(T\right)-I\right)e^{-\rho T}|x\left(0\right)=x_{0}\right]
\]

To fix ideas we can first solve for the deterministic case. For this
we set $\sigma=0$, which implies that $x\left(T\right)=x_{0}e^{\mu t}$,
for some initial value $x_{0}$. Then:
\[
V\left(x_{0}\right)=\max_{T}\left(x_{0}e^{\mu T}-I\right)e^{-\rho T}
\]
The following results follow:

1. If $\mu\leq0$ then the payoff $x$ is decreasing (or constant), so
it is better to invest immediately if $x_{0}>I$, or never to invest
if $x_{0}\leq I$. This implies that:
\[
V\left(x_{0}\right)=\max\left\{ x_{0}-I,0\right\}
\]
1. If $0<\mu\leq\rho$ then $x$ is growing, so the value of the firm
(the value of holding the option to invest) is positive, even if initially
$x_{0}<I$ . Eventually $x>I$.

  1. The optimal time is given by:
\begin{align*}
\frac{\partial\left(x_{0}e^{\mu T}-I\right)e^{-\rho T}}{\partial T} & =0\\
-\left(\rho-\mu\right)x_{0}e^{-\left(\rho-\mu\right)T}+\rho Ie^{-\rho T} & =0\\
\frac{1}{\mu}\ln\frac{\rho I}{\left(\rho-\mu\right)x_{0}} & =T
\end{align*}
\[
T=\max\left\{ \frac{1}{\mu}\ln\frac{\rho I}{\left(\rho-\mu\right)x_{0}},0\right\}
\]
  1. In some cases it is best to invest immediately. This happens if:
\begin{align*}
\frac{1}{\mu}\ln\frac{\rho I}{\left(\rho-\mu\right)x_{0}} & \leq0\\
\frac{\rho I}{\left(\rho-\mu\right)x_{0}} & \leq1\\
x^{\star}=\frac{\rho I}{\rho-\mu} & \leq x_{0}
\end{align*}
Higher $\mu$ increases the threshold value of $x_{0}$. Thus inducing
longer waits.
  1. Joining we get:
\[
V\left(x_{0}\right)=\begin{cases}
\frac{\mu}{\rho-\mu}I\left(\frac{\left(\rho-\mu\right)x_{0}}{\rho I}\right)^{\frac{\rho}{\mu}} & \text{if }x_{0}\leq\frac{\rho I}{\rho-\mu}\\
x_{0}-I & \text{otw}
\end{cases}
\]

1. If $\mu>\rho$ then the payoff grows faster than the firm discount
of the future, which implies that the firm wants to wait forever.

Now we can solve the stochastic version of the problem. It is no longer
possible to find $T^{\star}$ directly, but we can still find the
threshold value $x^{\star}$. To do it we first define the HJB equation,
recall from equation ([Equation](section-28-dynamic-programming.md#ref-eq-000020continuous-000020time-000020bellman))
that:
\[
\rho Vdt=E\left[dV\right]
\]
(noting that the instantaneous payoff before investing is zero). We
can use Ito's lemma to expand the RHS:
\[
\rho V=\mu xV^{'}+\frac{1}{2}\sigma^{2}x^{2}V^{''}
\]
There are three boundary conditions that must hold:
\[
V\left(0\right)=0\qquad V\left(x^{\star}\right)=x^{\star}-I\qquad V^{'}\left(x^{\star}\right)=1
\]
The first one follows from 0 being an absorbing state (because of
the properties of the geometric brownian motion). The second one is
value matching and the third one is smooth pasting.

We guess that the solution is of the form:
\[
V\left(x\right)=Ax^{\beta}
\]
for some $A$ and $\beta$ to be found later. This clearly solves
the HJB equation. Replacing we can solve for $\beta$:
\begin{align*}
\rho V & =\mu xV^{'}+\frac{1}{2}\sigma^{2}x^{2}V^{''}\\
\rho Ax^{\beta} & =\mu\beta Ax^{\beta}+\frac{1}{2}\sigma^{2}A\beta\left(\beta-1\right)x^{\beta}\\
\rho & =\mu\beta+\frac{1}{2}\sigma^{2}\beta\left(\beta-1\right)\\
0 & =-\rho+\left(\mu-\frac{1}{2}\sigma^{2}\right)\beta+\frac{1}{2}\sigma^{2}\beta^{2}
\end{align*}
$\beta$ is then found from the roots of this equation:
\begin{align*}
\beta_{1} & =\frac{1}{2}-\frac{\mu}{\sigma^{2}}+\sqrt{\left(\frac{1}{2}-\frac{\mu}{\sigma^{2}}\right)^{2}+2\frac{\rho}{\sigma^{2}}}>1\\
\beta_{2} & =\frac{1}{2}-\frac{\mu}{\sigma^{2}}-\sqrt{\left(\frac{1}{2}-\frac{\mu}{\sigma^{2}}\right)^{2}+2\frac{\rho}{\sigma^{2}}}<0
\end{align*}
There are two distinct roots so the solution to the HJB equation is
in general:
\[
V\left(x\right)=A_{1}x^{\beta_{1}}+A_{2}x^{\beta_{2}}
\]
But in order for the first boundary condition to hold we need that
$A_{2}=0$, because, with $\beta_{2}<0$, we could not evaluate the
function otherwise. This leaves us with only one root, which we denote
$\beta$, and one constant $A$ that we find below.

Replacing on the value matching and smooth pasting conditions we get:
\[
A\left(x^{\star}\right)^{\beta}=x^{\star}-I\qquad\beta A\left(x^{\star}\right)^{\beta-1}=1
\]
Solving for $A=\frac{\left(x^{\star}\right)^{1-\beta}}{\beta}$ and
replacing on the first equation we get:
\begin{align*}
x^{\star} & =\beta x^{\star}-\beta I\\
x^{\star} & =\frac{\beta I}{\beta-1}
\end{align*}
which also gives the value of $A$.

In the optimal strategy the firm does not invest when $x^{\star}$
is equal to $I$ (when the net present value of investing becomes
positive), but instead there is wedge between the cost of investing
and the value of investing. The wedge is given because the firm has
to be compensated for giving up the option to wait and see if the
value increases even further.

## Comparative Statics

The threshold value $x^{\star}$ depends on the parameters of the
model through $\beta$. Although we have an explicit solution for
$\beta$ in this case, that is not always the case. Nevertheless we
can use the quadratic equation that gives rise to $\beta$ to run
comparative statics.

Let $Q$ be the quadratic equation, so that:
\[
Q=-\rho+\left(\mu-\frac{1}{2}\sigma^{2}\right)\beta+\frac{1}{2}\sigma^{2}\beta^{2}
\]
we want to know how $\beta$ depends on $\sigma$. Taking total differentials
we get:
\[
\frac{dQ}{d\sigma}=\frac{\partial Q}{\partial\beta}\frac{d\beta}{d\sigma}+\frac{\partial Q}{\partial\sigma}=0
\]
where the derivatives are evaluated at the positive root $\beta$
found above. This expression gives:
\[
\frac{d\beta}{d\sigma}=-\frac{\left(\frac{\partial Q}{\partial\sigma}\right)}{\left(\frac{\partial Q}{\partial\beta}\right)}
\]
Signing the numerator is easy, because $\frac{\partial Q}{\partial\sigma}=\sigma\beta\left(\beta-1\right)>0$,
we know it is positive because the positive root $\beta$ is higher
than 1. Signing the denominator requires us to know the shape of $Q$.
It can be easily shown that $Q$ is increasing at $\beta_{1}$:
\[
\frac{\partial Q}{\partial\beta}=\mu-\frac{1}{2}\sigma^{2}+\sigma^{2}\beta=\sigma^{2}\sqrt{\left(\frac{1}{2}-\frac{\mu}{\sigma^{2}}\right)^{2}+2\frac{\rho}{\sigma^{2}}}>0
\]
Then:
\[
\frac{d\beta}{d\sigma}<0
\]

This means that higher variance (more uncertainty over the payoff
of investing) reduces $\beta$, which in turn increases $\frac{\beta}{\beta-1}$.
So the wedge between $x^{\star}$ and $I$ increases with uncertainty,
in other words the firm will need a larger return on the investment
in order to invest.
