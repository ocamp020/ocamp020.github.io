<a id="ref-sec-non-stochastic-dp" class="course-anchor"></a>
# Non-Stochastic Dynamic Programming

> Part: Dynamic Programming

The topic of this section is how to state and solve (deterministic)
dynamic programming problems. That is how to solve a Bellman equation
of the form:
\[
v\left(x\right)=\sup_{y\in\Gamma\left(x\right)}\left\{ F\left(x,y\right)+\beta v\left(y\right)\right\}
\]
where the solution is given by a function $v$ satisfying the equation.
The final objective is to establish conditions for a solution to exist
and characterize the properties of such a solution. To do this some
mathematical background has to be set up, this is done in [Contraction Mapping Theorem](#ref-sec-contraction-mapping-theorem) where the contraction mapping
theorem is stated and proven, and sufficient conditions for an operator
to be a contraction are established.

Once the basic tools are in place the problem at hand is to express
usual sequential problems (stated in terms of infinite sums) in a
recursive way, the equivalence between the two representations of
the problem is established by optimality principle which is presented
in [The Bellman Equation](#ref-sec-the-bellman-equation), along with it the conditions
for existence of a solution and the properties it can inherit from
the objective function $F$ and the correspondence $\Gamma$ are listed.

All the exposition of the theoretical aspects follows (very) closely
Section 3.2 and all of chapter 4 of [Stokey et al. (1989)](https://books.google.com/books?id=tWYo0QolyLAC). (Note: There is no reason to deviate.)
Most proofs are relegated to the book because their treatment would
require more time than the one the course has.

<a id="ref-sec-contraction-mapping-theorem" class="course-anchor"></a>
## Contraction Mapping Theorem

Three results are covered in this section that will be essential for
studying dynamic programming (DP) problems. These results are the
contraction mapping theorem, its corollary and the Blackwell sufficiency
conditions. Before stating them recall the definition of a complete
metric space and of a contraction mapping (or simply contraction)
in a metric space:
!!! info "Definition"

    A metric space is a pair $\left(S,\rho\right)$ of a set and a metric
    (or distance) $\rho:S\times S\to\mathbb{R}$ such that for all $x,y,z\in S$:

1. $\rho\left(x,y\right)\geq0$ and $\rho\left(x,y\right)=0\iff x=y$.
1. $\rho\left(x,y\right)=\rho\left(y,x\right)$.
1. $\rho\left(x,z\right)\leq\rho\left(x,y\right)+\rho\left(y,z\right)$.

A metric space is furthermore complete if all Cauchy sequences in
$S$ converge to an element in $S$.

!!! info "Definition"

    Let $\left(S,\rho\right)$ be a metric space and $T:S\to S$ a function
    mapping $S$ into itself. $T$ is a contraction (with modulus $\beta$)
    if and only if there exists $\beta\in\left(0,1\right)$ such that
    for all $x,y\in S$:
    \[
    \rho\left(Tx,Ty\right)\leq\beta\rho\left(x,y\right)
    \]
    The iterates of $T$ are the mappings $\left\{ T^{n}\right\} $ defined
    by $T^{0}x=x$ and $T^{n}x=T\left(T^{n-1}x\right)$ fro $n=1,2,\ldots$.

The contraction mapping theorem establishes the existence and uniqueness
of a fixed point in $S$ for any contraction mapping, moreover it
provides a simple algorithm to approximate the fixed point from any
arbitrary point in the space. A fixed point is a point $x\in S$ such
that $x=Tx$.
!!! abstract "Theorem: Contraction Mapping Theorem"

    Let $\left(S,\rho\right)$
    be a complete metric space and $T:S\to S$ a contraction with modulus
    $\beta$, then:
    
    
    1. $T$ has exactly one fixed point $v\in S$.
    1. For any $v_{0}\in S$ and $n=0,1,\ldots$ it holds that:
    \[
    \rho\left(T^{n}v_{0},v\right)\leq\beta^{n}\rho\left(v_{0},v\right)
    \]

??? success "Proof"

    The outline of the proof is to establish that the sequence $\left\{ v_{n}\right\} \subset S$
    with $v_{n}=T^{n}v_{0}$ is Cauchy and the use completeness of the
    space to argue that its limit is the fixed point of the mapping.
    
    Let $v_{0}\in S$ and define $v_{n+1}=Tv_{n}$ so that $v_{n}=T^{n}v_{0}$.
    Because $T$ is a contraction mapping:
    \[
    \rho\left(v_{2},v_{1}\right)=\rho\left(Tv_{1},Tv_{0}\right)\leq\beta\rho\left(v_{1},v_{0}\right)
    \]
    By induction we get:
    \[
    \rho\left(v_{n+1},v_{n}\right)\leq\beta^{n}\rho\left(v_{1},v_{0}\right)
    \]
    Then for $m>n$ we get:
    \begin{eqnarray*}
    \rho\left(v_{m},v_{n}\right) & \leq & \rho\left(v_{m},v_{m-1}\right)+\rho\left(v_{m-1},v_{m-2}\right)+\ldots+\rho\left(v_{n+1},v_{n}\right)\\
    & \leq & \left(\beta^{m-1}+\beta^{m-2}+\ldots+\beta^{n}\right)\rho\left(v_{1},v_{0}\right)\\
    & = & \beta^{n}\left(\beta^{m-n-1}+\beta^{m-n-2}+\ldots+1\right)\rho\left(v_{1},v_{0}\right)\\
    & \leq & \frac{\beta^{n}}{1-\beta}\rho\left(v_{1},v_{0}\right)
    \end{eqnarray*}
    Because $\frac{\rho\left(v_{1},v_{0}\right)}{1-\beta}$ is fixed,
    and finite, and $\beta^{n}\to0$ its clear that for any $\epsilon>0$
    there exists $N$ large enough for $\rho\left(v_{m},v_{n}\right)\leq\epsilon$
    for all $m,n\geq N$. Then $\left\{ v_{n}\right\} $ is Cauchy and
    there exists $v\in S$ such that $v_{n}\to v$ because $S$ is complete.
    
    Now we show that $v$ is a fixed point of $T$. For all $n$ and $v_{0}$:
    \begin{eqnarray*}
    \rho\left(Tv,v\right) & \leq & \rho\left(Tv,T^{n}v\right)+\rho\left(T^{n}v,v\right)\\
    & \leq & \beta\rho\left(v,T^{n-1}v\right)+\rho\left(T^{n}v,v\right)\\
    & = & \beta\rho\left(v,v_{n-1}\right)+\rho\left(v_{n},v\right)
    \end{eqnarray*}
    It follows that $\rho\left(v,v_{n-1}\right)\to0$ and $\rho\left(v_{n},v\right)\to0$
    because $v_{n}\to v$. Because this is done for arbitrary $n$ we
    get $\rho\left(Tv,v\right)\leq\epsilon$ for all $\epsilon>0$ which
    implies $\rho\left(Tv,v\right)=0$. By definition this is $Tv=v$,
    a fixed point.
    
    To show uniqueness suppose for a contradiction that there is $v^{\prime}\neq v$
    such that $Tv^{\prime}=v^{\prime}$, then:
    \[
    0\neq\rho\left(v^{\prime},v\right)=\rho\left(Tv^{\prime},Tv\right)\leq\beta\rho\left(v^{\prime},v\right)
    \]
    But this contradicts $\beta<1$. Then $v$ is the unique fixed point.
    
    The second part of the theorem follows by induction. For $n=0$,
    \[
    \rho\left(Tv_{0},v\right)=\rho\left(Tv_{0},Tv\right)\leq\beta\rho\left(v_{0},v\right)
    \]
    and for any $n\geq1$,
    \[
    \rho\left(T^{n}v_{0},v\right)=\rho\left(T^{n}v_{0},Tv\right)\leq\beta\rho\left(T^{n-1}v_{0},v\right)
    \]
    The result follows.

The contraction mapping theorem is a very powerful and simple theorem,
yet its results can be strengthened by further characterizing the
fixed point. So far it has been established its existence in $S$
and its uniqueness, the following corollary to the theorem allows
to locate the fixed point in a given subset of $S$.
!!! abstract "Corollary"

    Let $\left(S,\rho\right)$ be a complete metric space and $T:S\to S$
    a contraction mapping with fixed point $v\in S$.
    
    
    1. If $S^{\prime}\subseteq S$ is closed and $T\left(S^{\prime}\right)\subseteq S^{\prime}$,
    then $v\in S^{\prime}$.
    1. If in addition there exists $S^{"}\subseteq S^{\prime}$ such that $T\left(S^{\prime}\right)\subseteq S^{"}$,
    then $v\in S^{"}$.

??? success "Proof"

    Let $v_{0}\in S^{\prime}$ and $\left\{ T^{n}v_{0}\right\} $ a sequence
    in $S^{\prime}$ so that $T^{n}v_{0}\to v$, because $S^{\prime}$ is closed
    it follows that $v\in S^{\prime}$. If in addition $T\left(S^{\prime}\right)\subseteq S^{"}$
    then it follows that $v=Tv\in S^{"}$.

Finally a set of sufficiency conditions are established for a mapping
on the space of bounded functions to be a contraction. In most economic
applications these conditions are trivial to check.
!!! abstract "Theorem: Blackwell conditions"

    Let $X\subseteq\mathbb{R}^{l}$ and
    $B\left(X\right)$ be the the space of bounded functions on $X$ $\left(f:X\to\mathbb{R}\right)$
    with the sup-norm. Let $T:B\left(X\right)\to B\left(X\right)$, $T$
    is a contraction (with modulus $\beta$) if it satisfies the following
    two conditions:
    
    
    1. (monotonicity) Let $f,g\in B\left(X\right)$ and $f\left(x\right)\leq g\left(x\right)$
    for all $x\in X$. Then $Tf\left(x\right)\leq Tg\left(x\right)$ for
    all $x\in X$.
    1. (discounting) There exists $\beta\in\left(0,1\right)$ such that $T\left(f+a\right)\left(x\right)\leq Tf\left(x\right)+\beta a$
    for all $f\in B\left(X\right)$, $x\in X$ and $a\geq0$.

??? success "Proof"

    If $f\left(x\right)\leq g\left(x\right)$ for all $x$ we say that
    $f\leq g$.
    
    Let $f,g\in B\left(X\right)$, by definition of the sup-norm $f\left(x\right)-g\left(x\right)\leq\left\Vert f-g\right\Vert $
    for all $x\in X$, then $f\left(x\right)\leq g\left(x\right)+\left\Vert f-g\right\Vert $,
    using the notation defined at the beginning of the proof this is $f\leq g+\left\Vert f-g\right\Vert $,
    where $\left\Vert f-g\right\Vert >0$ is a scalar. Then by hypothesis
    we have:
    \[
    Tf\leq T\left(g+\left\Vert f-g\right\Vert \right)\leq Tg+\beta\left\Vert f-g\right\Vert \longrightarrow Tf-Tg\leq\beta\left\Vert f-g\right\Vert
    \]
    
    But it also holds that $g\left(x\right)-f\left(x\right)\leq\left\Vert f-g\right\Vert $
    which implies $Tg-Tf\leq\beta\left\Vert f-g\right\Vert $. Joining
    we have, for all $x\in X$:
    \[
    \left|Tf\left(x\right)-Tg\left(x\right)\right|\leq\beta\left\Vert f-g\right\Vert
    \]
    Taking sup we get:
    \[
    \left\Vert Tf-Tg\right\Vert \leq\beta\left\Vert f-g\right\Vert
    \]
    which establishes that $T$ is a contraction.

**Extended Blackwell conditions**

I also present a modified version of Blackwell's sufficiency conditions
for vector valued functions. I first define the relevant set of functions.
!!! abstract "Proposition"

    Let $X\subset\mathbb{R}^{n}$ and $B\left(X\right)=\left\{ f|f:X\to\mathbb{R}\land\exists_{M_{f}}\forall_{x\in X}\left|f\left(x\right)\right|\leq M_{f}\right\} $
    the set of bounded functions defined on the set $X$. The space $S=B\left(X\right)\times B\left(X\right)$
    equipped with the norm $\left\Vert f\right\Vert =\max\left\{ \left\Vert f_{1}\right\Vert _{\infty},\left\Vert f_{2}\right\Vert _{\infty}\right\} =\max\left\{ \underset{x\in X}{\sup}\left|f_{1}\left(x\right)\right|,\underset{x\in X}{\sup}\left|f_{2}\left(x\right)\right|\right\} $
    is a normed vector space. It is also a metric space with the metric
    $\rho\left(f,g\right)=\left\Vert f-g\right\Vert $.

??? success "Proof"

    The proof proceeds by showing that $\left\Vert \cdot\right\Vert $
    is a norm.
    
    
    1. Clearly $\left\Vert f\right\Vert \geq0$ and if $f\left(x\right)=0$
    for all $x\in X$ then $\left\Vert f\right\Vert =0$. Finally:
    \begin{eqnarray*}
    \left\Vert f\right\Vert  & = & 0\\
    \max\left\{ \underset{x\in X}{\sup}\left|f_{1}\left(x\right)\right|,\underset{x\in X}{\sup}\left|f_{2}\left(x\right)\right|\right\}  & = & 0
    \end{eqnarray*}
    which happens if and only if $\underset{x\in X}{\sup}\left|f_{1}\left(x\right)\right|=0$
    and $\underset{x\in X}{\sup}\left|f_{2}\left(x\right)\right|=0$.
    Again, this happens if and only if $f_{1}\left(x\right)=f_{2}\left(x\right)=0$
    for all $x\in X$. That is, if $f\left(x\right)=0$ for all $x\in X$.
    1. $\left\Vert \alpha f\right\Vert =\max\left\{ \underset{x\in X}{\sup}\left|\alpha f_{1}\left(x\right)\right|,\underset{x\in X}{\sup}\left|\alpha f_{2}\left(x\right)\right|\right\} =\left|\alpha\right|\max\left\{ \underset{x\in X}{\sup}\left|f_{1}\left(x\right)\right|,\underset{x\in X}{\sup}\left|f_{2}\left(x\right)\right|\right\} =\left|\alpha\right|\left\Vert f\right\Vert $
    1. Triangle Inequality:
    \begin{eqnarray*}
    \left\Vert f+g\right\Vert  & = & \max\left\{ \underset{x\in X}{\sup}\left|f_{1}\left(x\right)-g_{1}\left(x\right)\right|,\underset{x\in X}{\sup}\left|f_{2}\left(x\right)-g_{2}\left(x\right)\right|\right\} \\
    & \leq & \max\left\{ \left(\underset{x\in X}{\sup}\left|f_{1}\left(x\right)\right|+\underset{x\in X}{\sup}\left|g_{1}\left(x\right)\right|\right),\left(\underset{x\in X}{\sup}\left|f_{2}\left(x\right)\right|+\underset{x\in X}{\sup}\left|g_{2}\left(x\right)\right|\right)\right\} \\
    & \leq & \max\left\{ \underset{x\in X}{\sup}\left|f_{1}\left(x\right)\right|,\underset{x\in X}{\sup}\left|f_{2}\left(x\right)\right|\right\} +\max\left\{ \underset{x\in X}{\sup}\left|g_{1}\left(x\right)\right|,\underset{x\in X}{\sup}\left|g_{2}\left(x\right)\right|\right\} \\
    & = & \left\Vert f\right\Vert +\left\Vert g\right\Vert
    \end{eqnarray*}
    The first inequality follows from properties of the absolute value
    and the second one from the inequality:
    \[
    \underset{x\in X}{\sup}\left|f_{i}\left(x\right)\right|+\underset{x\in X}{\sup}\left|g_{i}\left(x\right)\right|\leq\max\left\{ \underset{x\in X}{\sup}\left|f_{1}\left(x\right)\right|+\underset{x\in X}{\sup}\left|g_{1}\left(x\right)\right|,\underset{x\in X}{\sup}\left|f_{2}\left(x\right)\right|+\underset{x\in X}{\sup}\left|g_{2}\left(x\right)\right|\right\}
    \]
    1. Under the above three conditions $\left\Vert f\right\Vert $ is a
    norm.
    1. Clearly the sum and scalar product of bounded functions is bounded.

!!! abstract "Proposition"

    Consider $\left(S,\rho\right)$ with $S=B\left(X\right)\times B\left(X\right)$
    and $\rho\left(f,g\right)=\left\Vert f-g\right\Vert $. $\left(S,\rho\right)$
    is a complete space.

??? success "Proof"

    The proof starts by showing that a Cauchy sequence in $S$ is formed
    by Cauchy sequences in $B\left(X\right)$. Then the completeness of
    $B\left(X\right)$ is used to establish the result.
    
    
    1. Let $\left\{ f_{n}\right\} \subset S$ be a Cauchy sequence and $\epsilon>0$.
    There exists $N$ such that $\forall_{n,m>N}\left\Vert f_{n}-f_{m}\right\Vert <\epsilon$
    which is:
    \[
    \max\left\{ \underset{x\in X}{\sup}\left|f_{1n}\left(x\right)-f_{1m}\left(x\right)\right|,\underset{x\in X}{\sup}\left|f_{2n}\left(x\right)-f_{2m}\left(x\right)\right|\right\} <\epsilon
    \]
    \[
    \underset{x\in X}{\sup}\left|f_{1n}\left(x\right)-f_{1m}\left(x\right)\right|<\epsilon\qquad\land\qquad\underset{x\in X}{\sup}\left|f_{2n}\left(x\right)-f_{2m}\left(x\right)\right|<\epsilon
    \]
    This implies that the sequences $\left\{ f_{1n}\right\} \subset B\left(X\right)$
    and $\left\{ f_{2n}\right\} \subset B\left(X\right)$ are Cauchy with
    respect to the sup-norm $\left\Vert f\right\Vert _{\infty}=\underset{x\in X}{\sup}\left|f\left(x\right)\right|$.
    1. Because the space $\left(B\left(X\right),\left\Vert f\right\Vert _{\infty}\right)$
    is complete, the above implies that the sequences $\left\{ f_{1n}\right\} $
    and $\left\{ f_{2n}\right\} $ are convergent in the sup norm. $\exists_{f_{1},f_{2}\in B\left(X\right)}f_{1n}\to f_{1}\land f_{2n}\to f_{2}$.
    Denote $f:S\to\mathbb{R}^{2}$ as $f\left(x\right)=\left[f_{1}\left(x\right)\mbox{ }f_{2}\left(x\right)\right]^{\prime}$.
    1. Let $\epsilon>0$. By convergence of $\left\{ f_{1n}\right\} $ and
    $\left\{ f_{2n}\right\} $ there exist numbers $N_{1}$ and $N_{2}$
    such that:
    \[
    \forall_{n\geq N_{1}}\left\Vert f_{1n}-f_{1}\right\Vert _{\infty}<\epsilon\qquad\land\qquad\forall_{n\geq N_{2}}\left\Vert f_{2n}-f_{2}\right\Vert _{\infty}<\epsilon
    \]
    Then for $N=\max\left\{ N_{1},N_{2}\right\} $ it holds that:
    \[
    \forall_{n\geq N}\left\Vert f_{1n}-f_{1}\right\Vert _{\infty}<\epsilon\qquad\land\qquad\left\Vert f_{2n}-f_{2}\right\Vert _{\infty}<\epsilon
    \]
    which is:
    \[
    \forall_{n\geq N}\sup_{x\in X}\left|f_{1n}\left(x\right)-f_{1}\left(x\right)\right|<\epsilon\qquad\land\qquad\sup_{x\in X}\left|f_{2n}\left(x\right)-f_{2}\left(x\right)\right|<\epsilon
    \]
    implying then:
    \[
    \forall_{n\geq N}\max\left\{ \sup_{x\in X}\left|f_{1n}\left(x\right)-f_{1}\left(x\right)\right|,\sup_{x\in X}\left|f_{2n}\left(x\right)-f_{2}\left(x\right)\right|\right\} <\epsilon
    \]
    which is:
    \[
    \forall_{n\geq N}\left\Vert f_{n}-f\right\Vert <\epsilon
    \]
    1. The above proves that a Cauchy sequence converges on $S$ over the
    given norm.

!!! abstract "Theorem: Extended Blackwell"

    Consider $\left(S,\rho\right)$ with
    $S=B\left(X\right)\times B\left(X\right)$ and $\rho\left(f,g\right)=\left\Vert f-g\right\Vert $.
    Let $T:S\to S$ be an operator satisfying
    
    
    1. (Monotonicity) $f,g\in S$ and $f\left(x\right)\leq g\left(x\right)$,
    for all $x\in X$, implies $Tf\left(x\right)\leq Tg\left(x\right)$,
    for all $x\in X$, (where $f\left(x\right)\leq g\left(x\right)$ is
    taken in the vector sense, i.e. $f_{1}\left(x\right)\leq g_{1}\left(x\right)$
    and $f_{2}\left(x\right)\leq g_{2}\left(x\right)$).
    1. (Discounting) there exists some $\beta\in\left(0,1\right)$ such that
    $T\left(f+A\right)\leq Tf\left(x\right)+\beta A$ for $f\in S$, $A=\left[a\mbox{ }a\right]^{\prime}\in\mathbb{R}_{+}^{2}$
    and $x\in X$.
    
    Then $T$ is a contraction in $S$ with modulus $\beta$.

??? success "Proof"

    The proof follows closely that of Blackwell's conditions
    
    
    1. Let $f,g\in S$, and define $A=\left[\begin{array}{cc}
    \left\Vert f-g\right\Vert  & \left\Vert f-g\right\Vert \end{array}\right]^{\prime}$, it holds that:
    \begin{eqnarray*}
    f_{1}\left(x\right)-g_{1}\left(x\right) & \leq & \left|f_{1}\left(x\right)-g_{1}\left(x\right)\right|\leq\underset{x\in X}{\sup}\left|f_{1}\left(x\right)-g_{1}\left(x\right)\right|\\
    & \leq & \max\left\{ \underset{x\in X}{\sup}\left|f_{1}\left(x\right)-g_{1}\left(x\right)\right|,\underset{x\in X}{\sup}\left|f_{2}\left(x\right)-g_{2}\left(x\right)\right|\right\} =\left\Vert f-g\right\Vert _{\infty}
    \end{eqnarray*}
    By a similar argument $f_{2}\left(x\right)-g_{2}\left(x\right)\leq\left\Vert f-g\right\Vert _{\infty}$
    then it holds that: $f\left(x\right)\leq g\left(x\right)+A$ for all
    $x\in X$
    1. By monotonicity and discounting:
    \[
    Tf\left(x\right)\leq T\left(g+a\right)\left(x\right)\leq Tg\left(x\right)+\beta A
    \]
    which holds for all $x\in X$.
    1. The same argument applies to show that $g\left(x\right)\leq f\left(x\right)+A$
    and $Tg\left(x\right)\leq Tf\left(x\right)+\beta A$ for all $x\in X$.
    1. Joining:
    \[
    Tf_{i}\left(x\right)-Tg_{i}\left(x\right)\leq\beta\left\Vert f-g\right\Vert \qquad\land\qquad Tg_{i}\left(x\right)-Tf_{i}\left(x\right)\leq\beta\left\Vert f-g\right\Vert
    \]
    which implies:
    \[
    \left|Tf_{1}\left(x\right)-Tg_{1}\left(x\right)\right|\leq\beta\left\Vert f-g\right\Vert \qquad\land\qquad\left|Tf_{2}\left(x\right)-Tg_{2}\left(x\right)\right|\leq\beta\left\Vert f-g\right\Vert
    \]
    and then:
    \[
    \sup_{x\in X}\left|Tf_{1}\left(x\right)-Tg_{1}\left(x\right)\right|\leq\beta\left\Vert f-g\right\Vert \qquad\land\qquad\sup_{x\in X}\left|Tf_{2}\left(x\right)-Tg_{2}\left(x\right)\right|\leq\beta\left\Vert f-g\right\Vert
    \]
    1. Finally:
    \begin{eqnarray*}
    \left\Vert Tf-Tg\right\Vert _{\infty} & = & \max\left\{ \underset{x\in X}{\sup}\left|Tf_{1}\left(x\right)-Tg_{1}\left(x\right)\right|,\underset{x\in X}{\sup}\left|Tf_{2}\left(x\right)-Tg_{2}\left(x\right)\right|\right\} \\
    & \leq & \max\left\{ \beta\left\Vert f-g\right\Vert ,\beta\left\Vert f-g\right\Vert \right\} =\beta\left\Vert f-g\right\Vert
    \end{eqnarray*}
    This is the definition of $T$ being a contraction with modulus $\beta$.

<a id="ref-sec-the-bellman-equation" class="course-anchor"></a>
## The Bellman Equation

We start with the infinite horizon consumption savings model. This
is the workhorse model of modern macroeconomics and is known as the
neoclassical growth model. There are two (related) ways of setting
up the problem. One resembles the finite horizon problem already discussed,
it is called sequence problem, the other form is to cast the problem
as the solution to a functional equation, this dynamic programming
approach has several advantages that will be presented in the next
section.

As before, consider a discrete time, consumption-savings problem where
the agent can either consume or save (invest) in capital that will
be productive in the following period. The agent derives utility from
consumption according to utility function $u$ and discounts the future
at a constant rate $\beta<1$. Production only uses capital and the
technology is described by a function $f$.

The problem of an agent endowed with $k_{0}$ units of capital is:
\[
v\left(k_{0}\right)=\max_{\left\{ c_{t},k_{t+1}\right\} _{t=0}^{\infty}}\sum_{t=0}^{\infty}\beta^{t}u\left(c_{t}\right)\qquad\mbox{s.t. }c_{t}+k_{t+1}\leq f\left(k_{t}\right)\quad c_{t},k_{t}\geq0\quad k_{0}\mbox{ given}
\]
Provided that $u$ is strictly increasing, a sustained assumption,
we can eliminate consumption as before to get:
\[
v\left(k_{0}\right)=\max_{\left\{ k_{t+1}\right\} }\sum_{t=0}^{\infty}\beta^{t}u\left(f\left(k_{t}\right)-k_{t+1}\right)\qquad\mbox{s.t. }0\leq k_{t+1}\leq f\left(k_{t}\right)\quad k_{0}\mbox{ given}
\]

In the sequence problem, much like in the finite horizon problem before,
the objective is to look for an infinite sequence that solves the
problem and attains the maximum. This can prove to be too difficult
in practice.

The dynamic programming problem takes a different approach. Instead
of trying to solve the problem for all periods simultaneously the
objective is to solve the problem one period at a time. That is, given
the capital stock at the beginning of the period take an optimal investment
decision for the next period. The problem is that, in order to make
the decision, its necessary to know the extra value for the agent
of the capital to be saved, we need a function that represents preferences
over next period's capital.

The DP starts by assuming that we already know such a function. It
is called a value function and is defined as $v$ above. The value
function is the maximum value given to the agent if she starts in
a given period with initial capital $k$. Knowing $v$ it is possible
to cast the following problem:
\[
\max_{0\leq k_{1}\leq f\left(k_{0}\right)}\mbox{ }\left\{ u\left(f\left(k_{0}\right)-k_{1}\right)+\beta v\left(k_{1}\right)\right\}
\]
If we knew $v$ the problem above could be solved. The solution to
the problem is a policy function $g:\mathbb{R}_{+}\to\mathbb{R}_{+}$
that gives the optimal capital next period given a capital level today.
That is $k_{1}=g\left(k_{0}\right)$.

It should be clear now that if $v\left(k_{1}\right)$ gives the maximum
value starting in period 1 and the problem above maximizes that value
and the value in period 0 (given by $u\left(f\left(k_{0}\right)-k_{1}\right)$)
then the value of the whole problem is given by the maximum above.
But that is the definition of $v$, then:
\[
v\left(k_{0}\right)=\max_{0\leq k_{1}\leq f\left(k_{0}\right)}\mbox{ }\left\{ u\left(f\left(k_{0}\right)-k_{1}\right)+\beta v\left(k_{1}\right)\right\}
\]
This is a functional equation, where $f$ and $u$ are known functions,
$k_{1}$ is a variable of choice and $k_{0}$ is given. Then this
is an equation in the function $v$, the solution to this equation
is the value function needed to solve the problem (to find the policy
function).

In general solving functional equations is not easy, but this type
of functional equation can be reinterpreted to both establish the
existence of a solution and to obtain a method to find it.

Let $u$ and $f$ be bounded and continuous functions and define an
operator $T:C\left(X\right)\to C\left(X\right)$ as:
\[
Tv\left(k\right)=\max_{0\leq k^{\prime}\leq f\left(k\right)}\mbox{ }\left\{ u\left(f\left(k\right)-k^{\prime}\right)+\beta v\left(k^{\prime}\right)\right\}
\]
boundedness of $Tv$ is immediate for the sum of bounded is also bounded.
Continuity is a consequence of the ToM, the objective function is
continuous and the correspondence $\Gamma\left(k\right)=\left\{ k^{\prime}|0\leq k^{\prime}\leq f\left(k\right)\right\} $
is continuous and compact valued because $f$ is continuous and bounded.

The solution to the functional equation, $v$, is then a fixed point
of the mapping $T$. It is left to verify that $T$ is a contraction
to establish the existence and uniqueness of the solution to the neoclassical
growth model. It turns out that Blackwell's sufficient conditions
are immediate:

1. (monotonicity) Let $v,w\in C\left(X\right)$ and $v\left(k\right)\leq w\left(k\right)$
for all $k$. Then:
\[
Tv\left(k\right)=\max_{0\leq k^{\prime}\leq f\left(k\right)}\mbox{ }\left\{ u\left(f\left(k\right)-k^{\prime}\right)+\beta v\left(k^{\prime}\right)\right\} \leq\max_{0\leq k^{\prime}\leq f\left(k\right)}\mbox{ }\left\{ u\left(f\left(k\right)-k^{\prime}\right)+\beta w\left(k^{\prime}\right)\right\} =Tw\left(k\right)
\]
1. (discounting) Let $v\in C\left(X\right)$ and $a>0$. Then:
\[
T\left(v+a\right)\left(k\right)=\max_{0\leq k^{\prime}\leq f\left(k\right)}\mbox{ }\left\{ u\left(f\left(k\right)-k^{\prime}\right)+\beta\left(v\left(k^{\prime}\right)+a\right)\right\} =\max_{0\leq k^{\prime}\leq f\left(k\right)}\mbox{ }\left\{ u\left(f\left(k\right)-k^{\prime}\right)+\beta v\left(k^{\prime}\right)\right\} +\beta a
\]
In particular:
\[
T\left(v+a\right)\left(k\right)\leq Tv\left(k\right)+\beta a
\]

It is possible to further characterize $v$ and the policy function
$g$, for that extra results are needed.

## A general framework and the principle of optimality

The problem to be studied in terms of infinite sequences is of the
form:
<a id="ref-eq-000020sp" class="course-anchor"></a>
\begin{equation}
v^{\star}\left(x_{0}\right)=\sup_{\left\{ x_{t+1}\right\} _{t=0}^{\infty}}\sum_{t=0}^{\infty}\beta^{t}F\left(x_{t},x_{t+1}\right)\qquad\mbox{s.t. }x_{t+1}\in\Gamma\left(x_{t}\right)
\end{equation}
Corresponding to this problem is the following functional equation:
<a id="ref-eq-000020fe" class="course-anchor"></a>
\begin{equation}
v\left(x\right)=\sup_{y\in\Gamma\left(x\right)}\left\{ F\left(x,y\right)+\beta v\left(y\right)\right\}
\end{equation}
Above, $X$ is the set of possible values for $x$, and it is not
necessarily an euclidean space, $\Gamma:X\rightrightarrows X$ is
a correspondence that assigns feasible values of the choice variable
and $F:\mbox{Gr}\left(\Gamma\right)\to\mathbb{R}$ is a return or
payoff function. $\beta>0$ is a discount factor.

Some conditions have to be met for both problems to give the same
solution, in the sense that $v\left(x\right)=v^{\star}\left(x\right)$
and that the optimal choice of one problem is the the same as the
choice for the other. This equivalence between both problems is called
the *principle of optimality*. After the validity of the principle
has been established the properties of the solution to FE can be studied.

The conditions for the principle of optimality are stated below and
the two propositions that constitute the principle are shown without
proof.

It will be convenient to define the set of all possible feasible sequences
for $x$, given an starting point $x_{0}$.
!!! info "Definition"

    The set of all possible feasible sequences starting at $x_{0}\in X$
    is:
    \[
    \Pi\left(x_{0}\right)=\left\{ \left\{ x_{t}\right\} _{t=0}^{\infty}|x_{t+1}\in\Gamma\left(x_{t}\right)\quad\land\quad x_{0}\mbox{ given}\right\}
    \]
    and $\underline{x}=\left(x_{0},x_{1},x_{2},\ldots\right)$ is an element.

**Assumption A.1:**

$\Gamma$ is a nonempty valued correspondence.

**Assumption A.2:**

For all $x_{0}\in X$ and $\underline{x}\in\Pi\left(x_{0}\right)$
the following limit exists (although it might be infinite):
\[
\lim_{n\to\infty}\sum_{t=0}^{n}\beta^{t}F\left(x_{t},x_{t+1}\right)
\]

!!! note "Remark"

    Assumption A.2 holds if $F$ is bounded and $\beta\in\left(0,1\right)$.

Under assumptions A.1 and A.2 $\Pi\left(x_{0}\right)$ is nonempty
valued and problem ([Equation](#ref-eq-000020sp)) is well posed, moreover they
are enough to guarantee that the function $v^{\star}$ satisfies equation
([Equation](#ref-eq-000020fe)).
!!! abstract "Proposition"

    Let $X$, $\Gamma$, $F$ and $\beta$ satisfy assumption A.1 and
    A.2, then $v^{\star}$ is a solution to the FE ([Equation](#ref-eq-000020fe)):
    \[
    v^{\star}\left(x\right)=\sup_{y\in\Gamma\left(x\right)}\left\{ F\left(x,y\right)+\beta v^{\star}\left(y\right)\right\}
    \]

For $v^{\star}$ to be the only solution to the FE an extra condition
is needed.
!!! abstract "Proposition"

    Let $X$, $\Gamma$, $F$ and $\beta$ satisfy assumption A.1 and
    A.2, if $v$ is a solution to the FE ([Equation](#ref-eq-000020fe)) and for
    all $x_{0}\in X$ and $\underline{x}\in\Pi\left(x_{0}\right)$ it
    holds that:
    \[
    \lim_{n\to\infty}\beta^{n}v\left(x_{n}\right)=0
    \]
    then $v=v^{\star}$.

The previous two propositions establish equivalence between the value
of the two problems. It can also be shown that the optimizer of the
SP problem also solves the FE in the following sense:
<a id="ref-eq-000020" class="course-anchor"></a>
!!! abstract "Proposition"

    Let $X$, $\Gamma$, $F$ and $\beta$ satisfy assumption A.1 and
    A.2. Let $\underline{x}^{\star}\in\Pi\left(x_{0}\right)$ be a feasible
    plan that attains the supremum in ([Equation](#ref-eq-000020sp)), then:
    \begin{equation}
    v^{\star}\left(x_{t}^{\star}\right)=F\left(x_{t}^{\star},x_{t+1}^{\star}\right)+\beta v^{\star}\left(x_{t+1}^{\star}\right)
    \end{equation}

Again, under an extra boundedness condition a plan that solves the
problem in ([Equation](#ref-eq-000020fe)) also solves the problem in the SP.
!!! abstract "Proposition"

    Let $X$, $\Gamma$, $F$ and $\beta$ satisfy assumption A.1 and
    A.2. Let $\underline{x}^{\star}\in\Pi\left(x_{0}\right)$ be a feasible
    plan that satisfies equation ([Equation](#ref-eq-000020)) and for which
    $\limsup\beta^{t}v^{\star}\left(x_{t}^{\star}\right)\leq0$, then
    $\underline{x}^{\star}$ attains the supremum in ([Equation](#ref-eq-000020sp))
    for initial state $x_{0}$.

Now we can define the optimal policy correspondence as:
\[
G^{\star}\left(x\right)=\left\{ y\in\Gamma\left(x\right)|v^{\star}\left(x\right)=F\left(x,y\right)+\beta v^{\star}\left(y\right)\right\}
\]
We say that a plan $\underline{x}$ is generated by $G$ if it satisfies
$x_{t+1}\in G\left(x_{t}\right)$. The previous two propositions imply
that any optimal plan of the sequence problem is generated by $G^{\star}$
and that if a plan is generated by $G^{\star}$ and satisfies the
additional boundedness condition then it is also optimal.

Now we can concentrate in studying the properties of the DP in ([Equation](#ref-eq-000020fe)).

## Bounded problems

Now we concentrate in establishing properties of the solution to the
following problem:
<a id="ref-eq-000020fe-1" class="course-anchor"></a>
\begin{equation}
v\left(x\right)=\max_{y\in\Gamma\left(x\right)}\left\{ F\left(x,y\right)+\beta v\left(y\right)\right\}
\end{equation}
\[
G\left(x\right)=\left\{ y\in\Gamma\left(x\right)|v\left(x\right)=F\left(x,y\right)+\beta v\left(y\right)\right\}
\]
where $v$ is the value function and $G$ the policy correspondence.

Assumptions A.1 and A.2 have to be met for the implications of this
sections to be valid on the original sequence problem. Additional
assumptions are also imposed that ensure that the previous ones are
met.

**Assumption A.3:**

$X$ is a a convex subset of $\mathbb{R}^{l}$ and $\Gamma$ is a
nonempty, compact valued and continuous correspondence.

**Assumption A.4:**

The function $F:\mbox{Gr}\left(\Gamma\right)\to\mathbb{R}$ is bounded
and continuous and $\beta\in\left(0,1\right)$.

Because $F$ is bounded and continuous it is natural to think that
the solution to equation ([Equation](#ref-eq-000020fe-1)) lies in the set $C\left(X\right)$.
What follows it to establish the existence of a solution by means
of the contraction mapping theorem.

Define a mapping $T:C\left(X\right)\to C\left(X\right)$ as:
<a id="ref-eq-000020mapping-000020t" class="course-anchor"></a>
\begin{equation}
Tf\left(x\right)=\max_{y\in\Gamma\left(x\right)}\left\{ F\left(x,y\right)+\beta f\left(y\right)\right\}
\end{equation}
The solution to ([Equation](#ref-eq-000020fe-1)) is then a $v\in C\left(X\right)$
such that $v=Tv$. The following proposition establishes that $T$
is a contraction from $C\left(X\right)$ into itself and also some
properties of the policy correspondence $G$.
!!! abstract "Proposition"

    Let $X$, $\Gamma$, $F$ and $\beta$ satisfy assumption A.3 and
    A.4, and consider $C\left(X\right)$ the space of continuous bounded
    function on $X$ along with the sup norm. Then:
    
    
    1. $T$ defined in ([Equation](#ref-eq-000020mapping-000020t)) maps $C\left(X\right)$
    into itself.
    1. $T$ defined in ([Equation](#ref-eq-000020mapping-000020t)) has a unique fixed
    point $v\in C\left(X\right)$, and for all $v_{0}\in C\left(X\right)$
    \[
    \left\Vert T^{n}v_{0}-v\right\Vert \leq\beta^{n}\left\Vert v_{0}-v\right\Vert
    \]
    1. Given $v$ the optimal policy correspondence $G\left(x\right)=\left\{ y\in\Gamma\left(x\right)|v\left(x\right)=F\left(x,y\right)+\beta v\left(y\right)\right\} $
    is nonempty, compact valued and u.h.c.

??? success "Proof"

    Each part is established separately.
    
    
    1. Under A.3 and A.4 and given $f$ continuous and bounded the function
    $F\left(x,y\right)+\beta f\left(y\right)$ is continuous in $\left(x,y\right)$
    and $\Gamma$ satisfies all assumptions of the ToM, thus establishing
    that $Tf$ is continuous.
    
    Because $F$ and $f$ are bounded then $Tf$ is bounded as well. There
    exists $M\geq0$ such that $-M\leq F\left(x,y\right)+\beta f\left(y\right)\leq M$
    for all $\left(x,y\right)$, then for all $x$ we have: $-M\leq\underset{y\in\Gamma\left(x\right)}{\max}\left\{ F\left(x,y\right)+\beta f\left(y\right)\right\} \leq M$
    which establishes boundedness of $Tf$.
    
    Then $Tf\in C\left(X\right)$ for any $f\in C\left(X\right)$.
    1. Blackwell conditions are met:
    
    
      1. (monotonicity) Let $f,g\in C\left(X\right)$ and $f\left(x\right)\leq g\left(x\right)$
    for all $x$. Then:
    \[
    Tf\left(x\right)=\max_{y\in\Gamma\left(x\right)}\mbox{ }\left\{ F\left(x,y\right)+\beta f\left(y\right)\right\} \leq\max_{y\in\Gamma\left(x\right)}\mbox{ }\left\{ F\left(x,y\right)+\beta g\left(y\right)\right\} =Tg\left(x\right)
    \]
      1. (discounting) Let $f\in C\left(X\right)$ and $a>0$. Then:
    \[
    T\left(f+a\right)\left(x\right)=\max_{y\in\Gamma\left(x\right)}\mbox{ }\left\{ F\left(x,y\right)+\beta\left(f\left(y\right)+a\right)\right\} =\max_{y\in\Gamma\left(x\right)}\mbox{ }\left\{ F\left(x,y\right)+\beta f\left(y\right)\right\} +\beta a
    \]
    In particular:
    \[
    T\left(f+a\right)\left(x\right)\leq Tf\left(x\right)+\beta a
    \]
    
    Then $T$ is a contraction. By the contraction mapping theorem the
    result follows.
    1. The properties of $G$ follow from the ToM which applies as shown
    before.

Additional assumption will help to characterize $v$ and $G$ better.
The corollary of the contraction mapping theorem is the tool to be
used now. First monotonicity can be inherited by the solution.

**Assumption A.5:**

For all $y$ $F\left(\cdot,y\right)$ is strictly increasing in its
first $l$ arguments.

**Assumption A.6:**

$\Gamma$ is monotone in the sense that if $x\leq x^{\prime}$ the $\Gamma\left(x\right)\subseteq\Gamma\left(x^{\prime}\right)$.
!!! abstract "Proposition"

    Let $X$, $\Gamma$, $F$ and $\beta$ satisfy assumption A.3 to A.6,
    and let $v$ be the unique solution to ([Equation](#ref-eq-000020fe-1)), then
    $v$ is strictly increasing.

??? success "Proof"

    Let $C^{\prime}\left(X\right)\subseteq C\left(X\right)$ be the set of
    bounded, continuous and non-decreasing functions and $C^{"}\left(X\right)\subseteq C^{\prime}\left(X\right)$
    the set of strictly increasing functions. Clearly $C^{\prime}\left(X\right)$
    is closed. By the corollary of the contraction mapping theorem it
    suffices to show that $T\left(C^{\prime}\left(X\right)\right)\subseteq C^{"}\left(X\right)$.
    
    Let $f\in C^{\prime}\left(X\right)$ and consider $x<x^{\prime}$. We want to
    show that $Tf$ is strictly increasing. This follows with A.5 and
    A.6:
    \[
    Tf\left(x\right)=\max_{y\in\Gamma\left(x\right)}F\left(x,y\right)+\beta f\left(y\right)\leq\max_{y\in\Gamma\left(x^{\prime}\right)}F\left(x,y\right)+\beta f\left(y\right)<\max_{y\in\Gamma\left(x^{\prime}\right)}F\left(x^{\prime},y\right)+\beta f\left(y\right)=Tf\left(x^{\prime}\right)
    \]
    where the first inequality follows from $\Gamma\left(x\right)\subseteq\Gamma\left(x^{\prime}\right)$,
    a larger choice set implies a higher than or equal maximum, the second
    inequality follows from $F$ being strictly increasing.

It is also possible to induce convexity as follows:

**Assumption A.7:**

$F$ is strictly concave in both arguments.

**Assumption A.8:**

$\Gamma$ has a convex graph.
!!! abstract "Proposition"

    Let $X$, $\Gamma$, $F$ and $\beta$ satisfy assumption A.3, A.4,
    A.7 and A.8, and let $v$ be the unique solution to ([Equation](#ref-eq-000020fe-1)),
    then $v$ is strictly concave and $G$ is a continuous single valued
    function.

??? success "Proof"

    Let $C^{\prime}\left(X\right)$ be the set of concave, bounded and continuous
    functions and $C^{"}\left(X\right)$ the set of strictly concave,
    bounded and continuous functions. The set $C^{\prime}\left(X\right)\subseteq C\left(X\right)$
    is closed and that $C^{"}\left(X\right)\subseteq C^{\prime}\left(X\right)$.
    To show that $v$ is strictly concave we use the corollary of the
    contraction mapping theorem.
    
    We want to show that for all $f\in C^{\prime}\left(X\right)$ it follows
    that $Tf\in C^{"}\left(X\right)$ where
    \[
    Tf\left(x\right)=Tf\left(x\right)=\max_{y\in\Gamma\left(x\right)}F\left(x,y\right)+\beta f\left(y\right)
    \]
    So let $f$ be weakly concave on $x$, bounded and continuous. let
    $x_{1},x_{2}\in X$ and $\lambda\in\left(0,1\right)$ and define $x_{\lambda}=\lambda x_{1}+\left(1-\lambda\right)x_{2}$.
    Let $y_{i}\in G\left(x_{i}\right)\subseteq\Gamma\left(x_{i}\right)$
    and, by A.8, $y_{\lambda}=\lambda y_{1}+\left(1-\lambda\right)y_{2}\in\Gamma\left(x_{\lambda}\right)$:
    \begin{eqnarray*}
    Tf\left(x_{\lambda}\right) & = & \max_{y\in\Gamma\left(x_{\lambda}\right)}F\left(x_{\lambda},y\right)+\beta f\left(y\right)\\
    & \geq & F\left(x_{\lambda},y_{\lambda}\right)+\beta f\left(y_{\lambda}\right)\\
    & \geq & F\left(x_{\lambda},y_{\lambda}\right)+\lambda\beta f\left(y_{1}\right)+\left(1-\lambda\right)\beta f\left(y_{2}\right)\\
    & > & \lambda F\left(x_{1},y_{1}\right)+\left(1-\lambda\right)F\left(x_{2},y_{2}\right)+\lambda\beta f\left(y_{1}\right)+\left(1-\lambda\right)\beta f\left(y_{2}\right)\\
    & = & \lambda Tf\left(x_{1}\right)+\left(1-\lambda\right)Tf\left(x_{2}\right)
    \end{eqnarray*}
    where the first inequality follows from $y_{\lambda}$being feasible
    at $x_{\lambda}$, the second one from $f$ being concave and the
    third one from A.7. The final equality is obtained rearranging and
    recalling the optimality of $y_{1}$ and $y_{2}$ under $x_{1}$ and
    $x_{2}$ respectively. Joining results we get
    \[
    Tf\left(x_{\lambda}\right)>\lambda Tf\left(x_{1}\right)+\left(1-\lambda\right)Tf\left(x_{2}\right)
    \]
    Then the "image" of any concave function is a strictly concave
    function. This proves that $Tf\in C^{"}\left(X\right)$. Then by
    the corollary of the contraction mapping theorem the unique fix point
    of $T$ belongs to $C^{"}$. That is, $v$ is strictly concave.
    
    Finally, consider the policy function $G\left(x\right)=\underset{y\in\Gamma\left(x\right)}{\mbox{argmax}}F\left(x,y\right)+v\left(y\right)$.
    Because $F$ and $v$ are strictly concave the single valuedness and
    continuity of $G$ follow as an immediate consequence of the ToM under
    convexity part (ii).

Finally there are conditions for $v$ to be differentiable, allowing
the use of first order conditions.

**Assumption A.9:**

$F$ is continuously differentiable on the interior of its domain,
$\mbox{Gr}\left(A\right)$.
!!! abstract "Proposition"

    Let $X$, $\Gamma$, $F$ and $\beta$ satisfy assumption A.3, A.4,
    and A.7 to A.9, and let $v$ be the unique solution to ([Equation](#ref-eq-000020fe-1)).
    If $x_{0}\in\mbox{Int}X$ and $g\left(x_{0}\right)\in\mbox{Int}\Gamma\left(x_{0}\right)$
    then $v$ is continuously differentiable at $x_{0}$ with derivatives
    given by:
    \[
    v_{i}\left(x_{0}\right)=F_{i}\left(x_{0},g\left(x_{0}\right)\right)
    \]

??? success "Proof"

    [Stokey et al. (1989, sec. 4.2, pp. 85)](https://books.google.com/books?id=tWYo0QolyLAC).
