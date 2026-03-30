# The Kolmogorov Forward Equation

> Part: Stochastic Calculus

The last section of this part of the course develops the Kolmogorov
Forward Equation, which describes the dynamics of the probability
distribution of a random variable (given its initial value). Moreover,
it characterizes the stationary distribution of the variable if such
distribution exists. This is of particular importance for models with
heterogenous agents because the distribution of the agents in the
economy is obtained via the KFE.

Given some initial conditions $x_{0}$ and $t_{0}$ the objective
is to characterize the probability distribution function $\varphi\left(x,t\right)$:
\[
\Pr\left(x_{t}\in\left[a,b\right]\right)=\int_{a}^{b}\varphi\left(u,t\right)du
\]
In order to characterize $\varphi$ we first need to impose a process
for $x$, and then use the random walk approximation. For simplicity:
\[
dx=\mu dt+\sigma dW
\]
In the random walk approximation the process varies in a period of
length $\Delta t$ by a magnitude of $h$, it increases with probability
$p$ or decreases with probability $1-p$, where:
\begin{align*}
h & =\sigma\sqrt{\Delta t}\qquad p=\frac{1}{2}\left(1+\frac{\mu}{\sigma}\sqrt{\Delta t}\right)\\
\end{align*}

From time $t-\Delta t$ to time $t$ the process can reach a value
$x$ either by growing from $x-h$ or by decreasing from $x+h$. Then
the probability (or more intuitively the fraction of the mass) at
point $x$ at time $t$ is given by:
\[
\varphi\left(x,t\right)=p\varphi\left(x-h,t-\Delta t\right)+\left(1-p\right)\varphi\left(x+h,t-\Delta t\right)
\]
We can approximate the elements of the right hand side with a second
order Taylor expansion:
\[
\varphi\left(x\pm h,t-\Delta t\right)\approx\varphi\left(x,t\right)-\Delta t\frac{\partial\varphi\left(x,t\right)}{\partial t}\pm h\frac{\partial\varphi\left(x,t\right)}{\partial x}+\frac{1}{2}h^{2}\frac{\partial^{2}\varphi\left(x,t\right)}{\partial x^{2}}
\]
Terms of order higher than $\Delta t$ are ignored. We can replace
to get:
\begin{align*}
0 & =-\Delta t\frac{\partial\varphi\left(x,t\right)}{\partial t}+\left(1-2p\right)\left(h\frac{\partial\varphi\left(x,t\right)}{\partial x}\right)+\frac{1}{2}h^{2}\frac{\partial^{2}\varphi\left(x,t\right)}{\partial x^{2}}\\
0 & =-\Delta t\frac{\partial\varphi\left(x,t\right)}{\partial t}-\frac{\mu}{\sigma}\sqrt{\Delta t}\left(\sigma\sqrt{\Delta t}\frac{\partial\varphi\left(x,t\right)}{\partial x}\right)+\frac{1}{2}\sigma^{2}\Delta t\frac{\partial^{2}\varphi\left(x,t\right)}{\partial x^{2}}\\
0 & =-\frac{\partial\varphi\left(x,t\right)}{\partial t}-\mu\frac{\partial\varphi\left(x,t\right)}{\partial x}+\frac{1}{2}\sigma^{2}\frac{\partial^{2}\varphi\left(x,t\right)}{\partial x^{2}}
\end{align*}
which gives the KFE:
\[
\frac{\partial\varphi\left(x,t\right)}{\partial t}=-\mu\frac{\partial\varphi\left(x,t\right)}{\partial x}+\frac{1}{2}\sigma^{2}\frac{\partial^{2}\varphi\left(x,t\right)}{\partial x^{2}}
\]

If $x$ follows a more general diffusion process we can change the
argument above to get:
\[
\frac{\partial\varphi\left(x,t\right)}{\partial t}=-\frac{\partial\left[\mu\left(x,t\right)\varphi\left(x,t\right)\right]}{\partial x}+\frac{1}{2}\frac{\partial^{2}\left[\sigma\left(x,t\right)^{2}\varphi\left(x,t\right)\right]}{\partial x^{2}}
\]

The KFE is specially useful for finding the stationary distribution
of the process. In this case the distribution does not depend on time
so the KFE is:
\[
0=-\frac{\partial\left[\mu\left(x,t\right)\varphi\left(x\right)\right]}{\partial x}+\frac{1}{2}\frac{\partial^{2}\left[\sigma\left(x,t\right)^{2}\varphi\left(x\right)\right]}{\partial x^{2}}
\]
This equation can be integrated once to get:
\[
c_{1}=-2\mu\left(x,t\right)\varphi\left(x\right)+\frac{\partial\left[\sigma\left(x,t\right)^{2}\varphi\left(x\right)\right]}{\partial x}
\]
where $c_{1}$ is a constant of integration (to be determined later).
Then we can use the integrating factor:
\[
s\left(x\right)=e^{-\int^{x}\frac{2\mu\left(z,t\right)}{\sigma^{2}\left(z,t\right)}dz}
\]
By multiplying both sides by the integrating factor we get:
\[
s\left(x\right)c_{1}=e^{-\int^{x}\frac{2\mu\left(z,t\right)}{\sigma^{2}\left(z,t\right)}dz}\left(-2\mu\left(x,t\right)\varphi\left(x\right)+\frac{\partial\left[\sigma\left(x,t\right)^{2}\varphi\left(x\right)\right]}{\partial x}\right)
\]
The RHS can be rewritten noting that:
\begin{align*}
\frac{d}{dx}\left[s\left(x\right)\sigma^{2}\left(x,t\right)\varphi\left(x\right)\right] & =\frac{d}{dx}\left[e^{-\int^{x}\frac{2\mu\left(z,t\right)}{\sigma^{2}\left(z,t\right)}dz}\sigma^{2}\left(x,t\right)\varphi\left(x\right)\right]\\
& =\frac{d}{dx}\left[e^{-\int^{x}\frac{2\mu\left(z,t\right)}{\sigma^{2}\left(z,t\right)}dz}\right]\sigma^{2}\left(x,t\right)\varphi\left(x\right)+s\left(x\right)\frac{d}{dx}\left[\sigma^{2}\left(x,t\right)\varphi\left(x\right)\right]\\
& =-\frac{2\mu\left(x,t\right)}{\sigma^{2}\left(x,t\right)}\sigma^{2}\left(x,t\right)\varphi\left(x\right)+s\left(x\right)\frac{d}{dx}\left[\sigma^{2}\left(x,t\right)\varphi\left(x\right)\right]\\
& =-2\mu\left(x,t\right)\varphi\left(x\right)+s\left(x\right)\frac{d}{dx}\left[\sigma^{2}\left(x,t\right)\varphi\left(x\right)\right]
\end{align*}
Then we get:
\[
s\left(x\right)c_{1}=\frac{d}{dx}\left[s\left(x\right)\sigma^{2}\left(x,t\right)\varphi\left(x\right)\right]
\]
Integrating again:
\[
c_{1}\int^{x}s\left(y\right)dy+c_{2}=s\left(x\right)\sigma^{2}\left(x,t\right)\varphi\left(x\right)
\]
rearranging gives:
\[
\varphi\left(x\right)=\frac{1}{s\left(x\right)\sigma^{2}\left(x,t\right)}\left(c_{1}\int^{x}s\left(y\right)dy+c_{2}\right)
\]
where $\int^{x}f\left(\xi\right)d\xi=F\left(x\right)$, being $F$
the antiderivative of $f$.
!!! example "Example"

    **Dynamics and Barriers **Consider a brownian motion with two
    reflecting barriers $\overline{x}$ and $\underline{x}$. The process
    behaves as $dx=\mu dt+\sigma dW$ for $x\in\left(\underline{x},\overline{x}\right)$,
    but is kept in those bounds by force. In terms of the random walk
    representation that means that starting at $\overline{x}-h$ the process
    stays at $\overline{x}-h$ with probability $p$, instead of taking
    a step up, and goes down to $\overline{x}-2h$ with probability $1-p$.
    Similarly for $\overline{x}+h$.
    
    The KFE applies for any point in the interior of the domain, so for
    $x\in\left(\underline{x},\overline{x}\right)$ we have:
    \[
    \frac{\partial\varphi\left(x,t\right)}{\partial t}=-\mu\frac{\partial\varphi\left(x,t\right)}{\partial x}+\frac{1}{2}\sigma^{2}\frac{\partial^{2}\varphi\left(x,t\right)}{\partial x^{2}}
    \]
    Moreover, because we are interested in the stationary behavior of
    the process we know that the distribution does not depend on time,
    which results in:
    \[
    0=-\mu\frac{\partial\varphi\left(x\right)}{\partial x}+\frac{1}{2}\sigma^{2}\frac{\partial^{2}\varphi\left(x\right)}{\partial x^{2}}
    \]
    or better:
    \[
    \varphi^{'}\left(x\right)=\frac{1}{2}\frac{\sigma^{2}}{\mu}\varphi^{''}\left(x\right)
    \]
    We can solve this equation:
    \[
    \varphi\left(x\right)=Ae^{\gamma x}+B
    \]
    where $\gamma=\frac{2\mu}{\sigma^{2}}$ and $A$ and $B$ are constants
    to be determined. To find them we can make use of the boundary conditions
    implied by the barriers.
    
    From the random walk approximation we can derive the following equation
    for the upper bound:
    \begin{align*}
    \varphi\left(\overline{x}-h\right) & =p\varphi\left(x-h\right)+p\varphi\left(x-2h\right)\\
    \left(1-p\right)\varphi\left(\overline{x}-h\right) & =p\varphi\left(x-2h\right)
    \end{align*}
    Using now a second order Taylor expansion around $\overline{x}-h$:
    \begin{align*}
    \left(1-p\right)\varphi\left(\overline{x}-h\right) & =p\left(\varphi\left(\overline{x}-h\right)-h\varphi^{'}\left(\overline{x}-h\right)+\frac{1}{2}h^{2}\varphi^{''}\left(\overline{x}-h\right)\right)\\
    \left(1-2p\right)\varphi\left(\overline{x}-h\right) & =-ph\varphi^{'}\left(\overline{x}-h\right)+p\frac{1}{2}h^{2}\varphi^{''}\left(\overline{x}-h\right)\\
    -\frac{\mu}{\sigma}\sqrt{\Delta t}\varphi\left(\overline{x}-h\right) & =-\frac{1}{2}\left(1+\frac{\mu}{\sigma}\sqrt{\Delta t}\right)\sigma\sqrt{\Delta t}\varphi^{'}\left(\overline{x}-h\right)+\frac{1}{4}\left(1+\frac{\mu}{\sigma}\sqrt{\Delta t}\right)\sigma^{2}\Delta t\varphi^{''}\left(\overline{x}-h\right)\\
    -\frac{2\mu}{\sigma^{2}}\varphi\left(\overline{x}-h\right) & =-\left(1+\frac{\mu}{\sigma}\sqrt{\Delta t}\right)\varphi^{'}\left(\overline{x}-h\right)+\frac{1}{2}\left(1+\frac{\mu}{\sigma}\sqrt{\Delta t}\right)\sigma\sqrt{\Delta t}\varphi^{''}\left(\overline{x}-h\right)
    \end{align*}
    taking $\Delta t\to0$ we get:
    \begin{align*}
    \frac{2\mu}{\sigma^{2}}\varphi\left(\overline{x}\right) & =\varphi^{'}\left(\overline{x}\right)\\
    \gamma\varphi\left(\overline{x}\right) & =\varphi^{'}\left(\overline{x}\right)
    \end{align*}
    Replacing for the solution of $\varphi$ we find that $B=0$. Then
    $A$ is found to guarantee that $\varphi$ integrates to one. This
    results in:
    \[
    \varphi\left(\overline{x}\right)=\frac{\gamma e^{\gamma x}}{e^{\gamma\overline{x}}-e^{\gamma\underline{x}}}
    \]
