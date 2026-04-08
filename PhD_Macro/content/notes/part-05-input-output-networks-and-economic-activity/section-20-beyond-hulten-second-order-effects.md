# Beyond Hulten: Second order effects

> Part: Input-Output Networks and Economic Activity

So far we have focused on the first-order effects on $Y$. The envelope
theorem ensures that these are only given by the direct effect of
exogenous changes, and not by the response in the allocation, which
is already efficient. The second-order effects depend on how the allocation
changes in response to shocks:
\begin{align}
d\log Y & =\;\sum_{s=1}^{S}\lambda_{s}\,d\log z_{s}\;+\;\sum_{f=1}^{F}\Lambda_{f}\,d\log N_{f} \tag{20.1}\\
& \qquad\;+\;\frac{1}{2}\sum_{s=1}^{S}\lambda_{s}d\log\lambda_{s}\,d\log z_{s}\;+\;\frac{1}{2}\sum_{f=1}^{F}\Lambda_{f}d\log\Lambda_{f}\,d\log N_{f}\,.\nonumber
\end{align}
This expression tells us that the change in sales shares (and factor
shares) is a sufficient statistic for the effect of shocks in equilibrium,
but it does not tell us how those shares move. The results come from
[Baqaee and Farhi (2019)](https://doi.org/10.3982/ECTA15202) and [Baqaee and Rubbo (2023)](https://doi.org/10.1146/annurev-economics-082322-012833).

The problem is that the response of sales shares in equilibrium depends
on the whole input-output network and the technology of production.
In particular, it depends on the substitution patterns between sectors.
So, we need to make some assumptions to make some progress. We will
focus only on changes to productivity and not to changes in factors
of production, and we will focus on a CES-economy (a generalization
of the Domar economy we already studied).

The household aggregates final goods with a CES elasticity $\theta_{C}$:
\[
Y=\left(\sum_{s=1}^{S}\widetilde{\beta}_{s}^{1/\theta_{C}}c_{s}^{(\theta_{C}-1)/\theta_{C}}\right)^{\theta_{C}/(\theta_{C}-1)}.
\]
Each sector $s$ combines labor and intermediate inputs with its own
CES elasticity $\theta_{s}$:
\[
y_{s}=z_{s}\left(\alpha_{s}^{1/\theta_{s}}n_{s}^{(\theta_{s}-1)/\theta_{s}}\;+\;\sum_{k=1}^{S}\widetilde{\omega}_{sk}^{1/\theta_{s}}x_{sk}^{(\theta_{s}-1)/\theta_{s}}\right)^{\theta_{s}/(\theta_{s}-1)},\qquad\alpha_{s}+\sum_{k=1}^{S}\widetilde{\omega}_{sk}=1.
\]

!!! note "Remark"

    The coefficients $\widetilde{\beta}_{s}$ and $\widetilde{\omega}_{sk}$
    are primitive CES weights in the household's utility and in sectoral
    production. By contrast,
    \[
    \beta_{s}\equiv\frac{p_{s}c_{s}}{Y},\qquad\omega_{sk}\equiv\frac{p_{k}x_{sk}}{p_{s}y_{s}}
    \]
    denote the equilibrium expenditure share on final good $s$ and the
    equilibrium cost share of sector $s$ spent on input $k$. These are
    the objects used to construct the vector $\beta$ and the input-output
    matrix $\Omega=[\omega_{sk}]$. \end{remark}
    
    The Cobb-Douglas economy is the knife-edge case in which every elasticity
    is equal to one ($\theta_{C}=1$ and $\theta_{s}=1$ for all $s$).
    Once $\theta_{s}\neq1$, expenditure shares are no longer fixed. This
    is exactly why Hulten's first-order formula is no longer enough: Shocks
    now change sales shares in equilibrium.
    
    **Forward and backward propagation.**
    
    
    *Forward propagation* determines how productivity shocks change
    relative prices. Cost minimization implies that changes in prices
    reflect changes in productivity of the sector's suppliers. This is
    the same result as in our Domar economy. The local forward equation
    is
    \[
    d\log p\;=\;-\Psi\,\Delta\log z,
    \]
    Productivity shocks are therefore pushed *forward* from suppliers
    to their direct and indirect customers through the Leontief inverse.
    
    *Backward propagation* determines how these relative price changes
    alter sales shares. If the inputs used by sector $s$ are substitutes,
    then sector $s$ shifts expenditure toward the inputs whose relative
    prices fall more. If they are complements, sector $s$ is instead
    constrained by the inputs whose relative prices rise more. The same
    logic applies to the household's final-demand system through the elasticity
    $\theta_{C}$. To see this formally, write nominal market clearing
    for good $k$ as
    \[
    \lambda_{k}\;=\;\beta_{k}+\sum_{s=1}^{S}\lambda_{s}\omega_{sk},\qquad\beta_{k}\;\equiv\;\frac{p_{k}c_{k}}{Y}.
    \]
    Differentiating gives
    \[
    d\lambda_{k}\;=\;d\beta_{k}\;+\;\sum_{s=1}^{S}\omega_{sk}\,d\lambda_{s}\,+\,\sum_{s=1}^{S}\lambda_{s}\,d\omega_{sk}.
    \]
    CES demand implies
    \[
    d\log\omega_{sj}\;=\;(1-\theta_{s})\left(d\log p_{j}-\sum_{k=1}^{S}\omega_{sk}\,d\log p_{k}\right),
    \]
    or equivalently
    \[
    d\omega_{sj}=(1-\theta_{s})\mathrm{Cov}_{\Omega_{\left(s,:\right)}}\left(d\log p,I_{\left(:,j\right)}\right).
    \]
    Here $I_{\left(:,j\right)}$ denotes the $j$th column of the identity
    matrix. Cost minimization implies that sector $s$ uses more of input
    $j$ if the price of input $j$ rises more than other prices when
    inputs are complements, and sector $s$ reduces demand if inputs are
    substitutes.
    
    The household's final-demand share satisfies the analogous expression
    \[
    d\beta_{k}=(1-\theta_{C})\beta_{k}\left(d\log p_{k}-\sum_{s=1}^{S}\beta_{s}\,d\log p_{s}\right).
    \]
    
    Substituting these expressions back into market clearing yields, for
    each good $j$,
    \begin{align*}
    d\lambda_{j}=\; & \sum_{s=1}^{S}\omega_{sj}\,d\lambda_{s}\\
    & +\sum_{s=1}^{S}\lambda_{s}(1-\theta_{s})\omega_{sj}\left(-\sum_{\ell=1}^{S}\psi_{j\ell}\,d\log z_{\ell}+\sum_{k=1}^{S}\omega_{sk}\sum_{\ell=1}^{S}\psi_{k\ell}\,d\log z_{\ell}\right)\\
    & +(1-\theta_{C})\beta_{j}\left(-\sum_{\ell=1}^{S}\psi_{j\ell}\,d\log z_{\ell}+\sum_{k=1}^{S}\beta_{k}\sum_{\ell=1}^{S}\psi_{k\ell}\,d\log z_{\ell}\right).
    \end{align*}
    
    The same expression can be written more compactly in covariance form.
    In vector form,
    \[
    d\lambda=d\beta+\Omega'd\lambda+(d\Omega)'\lambda,
    \]
    so solving through with the Leontief inverse gives
    \[
    d\lambda=\Psi'\left[d\beta+(d\Omega)'\lambda\right].
    \]
    Hence, for each good $j$,
    \[
    d\lambda_{j}=\sum_{s=1}^{S}\lambda_{s}(1-\theta_{s})\mathrm{Cov}_{\Omega_{s,:}}\left(d\log p,\Psi_{:,j}\right)+(1-\theta_{C})\mathrm{Cov}_{\beta}\left(d\log p,\Psi_{:,j}\right),
    \]
    where $\Psi_{:,j}$ denotes the $j$th column of $\Psi$. Using the
    forward equation $d\log p=-\Psi\,d\log z$, this becomes
    \[
    d\lambda_{j}=-\sum_{s=1}^{S}\lambda_{s}(1-\theta_{s})\mathrm{Cov}_{\Omega_{s,:}}\left(\Psi\,d\log z,\Psi_{:,j}\right)-(1-\theta_{C})\mathrm{Cov}_{\beta}\left(\Psi\,d\log z,\Psi_{:,j}\right).
    \]
    Hence changes in sales shares are pinned down by the interaction of
    price dispersion and substitution elasticities.
    \begin{prop}[Second-order technology shocks in a nested CES economy]
    Consider the efficient economy with $\mu=1$ and fixed labor supply.
    Then, around the efficient allocation, a second-order approximation
    to the effect of productivity shocks on aggregate output is
    \begin{align*}
    d\log Y\;\approx\; & \;\sum_{s=1}^{S}\lambda_{s}d\log z_{s}\;-\;\frac{1}{2}\sum_{s=1}^{S}\lambda_{s}(1-\theta_{s})\mathrm{Var}_{(\alpha_{s},\Omega_{s,:})}([0;\Psi\,d\log z])\\
    & \;-\;\frac{1}{2}(1-\theta_{C})\,\mathrm{Var}_{\beta}(\Psi\,d\log z).
    \end{align*}
    where the 0 comes from the change in the price of labor (the only
    factor).
    \end{prop}
    The first term is Hulten's theorem. The second term is the nonlinear
    correction. The correction depends on the variance of the relative
    prices of labor and intermediate goods, weighted by each sector's
    cost shares. The variance shows the role in reallocation of relative
    price changes within each buyer's input bundle and within final demand.
    When $\theta_{s}>1$, inputs are substitutes, so price dispersion
    is helpful: buyers shift spending toward the sectors whose relative
    prices fall. When $\theta_{s}<1$, inputs are complements, so price
    dispersion is harmful: output is limited by the inputs that become
    relatively expensive. The same logic applies to final demand through
    $\theta_{C}$. [Baqaee and Rubbo (2023)](https://doi.org/10.1146/annurev-economics-082322-012833) show a more compact
    formula by stacking a fictional final good aggregator and the factors
    int othe input output network. That approach is preferable in general.
    
    ## Example: Back to the basic input.
    
    
    Consider now the same economy as in the basic-input example above.
    There is a sector $0$ that produces energy using only labor, and
    the final goods $s=1,\dots,S$ use labor and energy as inputs. The
    only change relative to the earlier example is that we now allow CES
    rather than Cobb-Douglas substitution between labor and energy. Let
    $\omega_{s0}$ denote sector $s$'s expenditure share on energy in
    the initial equilibrium, and let $\theta_{s}$ be the elasticity of
    substitution between labor and energy in sector $s$.
    
    Suppose that only the productivity of energy changes, so
    \[
    d\log z_{s}=0\qquad\text{for all }s\geq1,\qquad d\log z_{0}\neq0.
    \]
    Then the second-order approximation becomes
    \[
    d\log Y\;\approx\;\lambda_{0}\Delta\log z_{0}\;-\;\frac{1}{2}\left[\sum_{s=1}^{S}(1-\theta_{s})\lambda_{s}\omega_{s0}(1-\omega_{s0})\;+\;(1-\theta_{C})\,\mathrm{Var}_{\beta}(\Omega_{:,0})\right](d\log z_{0})^{2},
    \]
    where $\Omega_{:,0}=(\omega_{10},\dots,\omega_{S0})$ the first column
    of the input-output matrix, that has the energy intensities of the
    final-good sectors.
    
    This expression is useful because it isolates the two channels that
    matter. The first term inside brackets is a production-side effect.
    If energy and labor are complements in production, so $\theta_{s}<1$,
    then negative energy shocks are especially damaging because each downstream
    sector is constrained by whichever input becomes relatively scarce.
    The second term is a final-demand effect. If final goods are substitutes,
    so $\theta_{C}>1$, and sectors differ in their energy intensity,
    then households shift expenditure toward goods that use relatively
    less energy after a negative energy shock. This cushions the aggregate
    effect of the shock. Thus the same energy shock can be amplified by
    complementarity in production and mitigated by substitution in final
    demand.
