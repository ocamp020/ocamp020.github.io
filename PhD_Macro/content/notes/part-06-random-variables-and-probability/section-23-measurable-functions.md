# Measurable functions

> Part: Random Variables and Probability

A measurable function is a type of function for which it is possible
to know (to measure) the conditions (the set) that originates certain
outcomes. One can think of a function as mapping certain events in
a given measure space to outcomes in another measure space. A function
is measurable if the sets that induce a given outcome are measurable.
Formally:
!!! info "Definition: Measurable function"

    Let $\left(S,{\cal A},\mu\right)$
    and $\left(S^{'},{\cal A}^{'},\mu^{'}\right)$ be measure spaces and
    $f:S\to S^{'}$ a function. $f$ is measurable if and only if $f^{-1}\left(A^{'}\right)\in{\cal A}$
    for all $A^{'}\in{\cal A}^{'}$.

A special case of notable importance is that of $\left(S^{'},{\cal A}^{'},\mu^{'}\right)=\left(\mathbb{R},{\cal B},\lambda\right)$,
where $\lambda$ is the Lebesgue measure on the plane. This are real
valued functions. In this case the ${\cal B}$-measurable sets in
$\mathbb{R}$ can be characterized in the following way:
!!! abstract "Theorem"

    Let $\left(S,{\cal A},\mu\right)$ be a measure space and $f:S\to\mathbb{R}$.
    $f$ is $\mu$-measurable if and only if $f^{-1}\left(\left(-\infty,c\right)\right)=\left\{ x\in S|f\left(x\right)<c\right\} \in{\cal A}$
    for all $c\in\mathbb{R}$.

??? success "Proof"

    This theorem is stated as the definition of a real valued function
    $f$ being $\mu$-measurable in [Stokey et al. (1989)](https://books.google.com/books?id=tWYo0QolyLAC), but a formal proof
    is presented in [Kolmogorov and Fomin (2012, Sec. 28, Thm. 1)](https://books.google.com/books?id=cbbCAgAAQBAJ).
    It can also be stated with any of the inequalities $\geq,\leq,>,<$.

Also when the measure space in question is a probability space one
can characterize formally what a random variable is.
!!! info "Definition: Random variable"

    Let $\left(S,{\cal A},P\right)$ be a probability
    space and $f:S\to\mathbb{R}$ a real valued function. $f$ is a random
    variable if and only if $f$ is measurable, that is, if and only if
    $f^{-1}\left(B\right)\in{\cal A}$ for all $B\in{\cal B}$, where
    ${\cal B}$ is the Borel $\sigma$-algebra on $\mathbb{R}$. We further
    establish the same notation:
    
    1. An outcome is an element $s\in S$.
    1. An event is a measurable subset of $S$: $A\in{\cal A}$.
    1. The real number $f\left(s\right)$ is a realization of the random
    variable.
    1. The probability measure for $f$ is then: $\mu\left(B\right)=P\left(f^{-1}\left(B\right)\right)=P\left(\left\{ s\in S|f\left(s\right)\in B\right\} \right)$,
    for $B\in{\cal B}$.
    1. The distribution function for $f$ is: $G\left(b\right)=\mu\left(\left(-\infty,b\right]\right)$,
    for $b\in\text{\ensuremath{\mathbb{R}}}$.

Generally it is very hard to find a function that is not measurable.
The details of the example will depend on the spaces considered. For
example if $f:\mathbb{R}\to\mathbb{R}$ and ${\cal A}$ is the set
of all open (or closed) sets in $\mathbb{R}$ the definition of measurability
is equivalent to that of continuity (the pre-image of an open set
has to be open) and then all functions that are not continuous are
not measurable. It is clear that more complete $\sigma$-algebras
make more difficult to generate counterexamples. The following three
results show how difficult it is to generate them:
!!! abstract "Proposition"

    Let $f:\mathbb{R}\to\mathbb{R}$.
    
    
    1. If $f$ is continuous then $f$ is measurable with respect to the
    Borel sets.
    1. If $f$ is monotone then $f$ is measurable with respect to the Borel
    sets.

??? success "Proof"

    Each case is proven:
    
    
    1. Let $f$ be continuous. Consider the set $f^{-1}\left(\left(-\infty,c\right)\right)$
    for any $c\in\mathbb{R}$. The set $\left(-\infty,c\right)$ is open,
    because $f$ is continuous then its pre-image is open, then it is
    a Borel set. Then its measurable.
    1. Let $f$ be monotone increasing. Consider the set $f^{-1}\left(\left(-\infty,c\right)\right)$
    for arbitrary $c\in\mathbb{R}$. Then, $f^{-1}\left(\left(-\infty,c\right)\right)=\left(-\infty,a\right)$
    or $f^{-1}\left(\left(-\infty,c\right)\right)=\left(-\infty,a\right]$
    or $f^{-1}\left(\left(-\infty,c\right)\right)=\left(-\infty,\infty\right)$
    or $f^{-1}\left(\left(-\infty,c\right)\right)=\emptyset$ for some
    $a\in\mathbb{R}$. Monotonicity ensures that if $a\in f^{-1}\left(\left(-\infty,c\right)\right)$
    and $b\leq a$ then $b\in f^{-1}\left(\left(-\infty,c\right)\right)$.
    Suppose its not, then there exists numbers $b\leq a$ such that $f\left(b\right)>c\geq f\left(a\right)$,
    contradicting monotonicity.
    
    All these sets are in ${\cal B}$, then $f$ is ${\cal B}$-measurable.

!!! abstract "Corollary"

    The composition of measurable functions is measurable. In particular
    the composition of a continuous function with a measurable function
    is measurable.

!!! abstract "Proposition"

    Let $S=\left\{ s_{1},s_{2},\ldots\right\} $ be a countable set (potentially
    infinite) and ${\cal A}=2^{S}$ a $\sigma$-algebra on $S$. Then
    all functions $f:S\to\mathbb{R}$ are measurable.

??? success "Proof"

    The proof is immediate because the pre-image of a Borel set is a subset
    of $S$, then it belongs to ${\cal A}=2^{S}$.

In a more general way one can establish the measurability of a function
by relating to a class of well behave 'simple' functions. The base
for this class is the indicator function.
!!! info "Definition: Indicator Function"

    Let $\left(S,{\cal A}\right)$ be a
    measurable space. An indicator function $\chi_{A}:S\to\mathbb{R}$
    is:
    \[
    \chi_{A}\left(s\right)=\begin{cases}
    1 & \mbox{ if }s\in A\\
    0 & \mbox{ if }s\notin A
    \end{cases}
    \]
    Clearly $\chi_{A}$ is measurable if and only if $A\in{\cal A}$.

!!! info "Definition: Simple Function"

    Let $\left(S,{\cal A}\right)$ be a measurable
    space. A simple function is a function that takes at most countably
    many values. When the function takes finitely many values it can be
    expressed as:
    \[
    \phi\left(s\right)=\sum_{i=1}^{n}\alpha_{i}\chi_{A_{i}}\left(s\right)
    \]
    where $\left\{ A_{i}\right\} $ is a sequence of subsets of $S$ and
    $\alpha_{i}\in\mathbb{R}$.

Characterizing the measurability of simple functions is slightly more
complicated.
!!! abstract "Proposition"

    A simple function taking values $\left\{ y_{1},y_{2},\ldots\right\} $
    is measurable if and only if the sets $A_{i}=\left\{ s\in S|\phi\left(s\right)=y_{n}\right\} $
    are measurable.

??? success "Proof"

    Both directions are proven.
    
    
    1. Let $\phi$ be measurable, and $\left\{ y_{n}\right\} \in{\cal B}$,
    then its pre-image is measurable wrt ${\cal A}$.
    1. Let the sets be measurable, that is$A_{i}\in{\cal A}$, and consider
    $B\in{\cal B}$ a Borel set. Then
    \[
    \phi^{-1}\left(B\right)=\left\{ s\in S|\phi\left(s\right)=y_{i}\in B\right\} =\bigcup_{y_{i}\in B}A_{i}.
    \]
    Because each $A_{i}\in{\cal A}_{i}$ and the union is taken over no
    more than countably many sets we have $\bigcup_{y_{i}\in B}A_{i}\in{\cal A}$
    by definition of a $\sigma$-algebra. This proves measurability of
    $\phi^{-1}\left(B\right)$.

In what follows all simple functions will be considered measurable.
The importance of simple functions is given by the applications of
the following proposition.
<a id="ref-prop-000020pointwise-000020limit-000020and-000020measurablility" class="course-anchor"></a>
!!! abstract "Proposition"

    Let
    $\left(S,{\cal A}\right)$ be a measurable space and let $\left\{ f_{n}\right\} $
    be a sequence of measurable functions converging pointwise to $f$,
    that is $\lim f_{n}\left(s\right)=f\left(s\right)$ for all $s$.
    Then $f$ is also measurable.

??? success "Proof"

    The proof can be found in [Stokey et al. (1989, Sec. 7.3)](https://books.google.com/books?id=tWYo0QolyLAC) or in [Kolmogorov and Fomin (2012, Sec. 28.1)](https://books.google.com/books?id=cbbCAgAAQBAJ).

!!! abstract "Corollary"

    If $f$ is non-negative one can choose the sequence $\left\{ f_{n}\right\} $
    to be strictly increasing.

!!! abstract "Corollary"

    If $f$ is bounded one can choose the sequence $\left\{ f_{n}\right\} $
    to converge uniformly.

The main application is the following result that gives a characterization
of measurable functions in terms of simple functions:
<a id="ref-simple-000020functions-000020and-000020measurability" class="course-anchor"></a>
!!! abstract "Proposition"

    A function
    $f$ is measurable if and only if it an be represented as the limit
    of a uniformly converging sequence of measurable simple functions.

??? success "Proof"

    The first direction is immediate from the previous proposition. If
    $f$ is the limit of measurable functions then $f$ is also measurable.
    
    Let $f$ be measurable. It is left to construct a converging sequence
    of simple functions that converges to $f$. wlog let $f\left(s\right)\geq0$
    for all $s$, then by the Archimedean principle there exists a non-negative
    integer $m$ such that
    \[
    \frac{m}{n}\leq f\left(s\right)<\frac{m+1}{n}
    \]
    Let $f_{n}\left(s\right)=\nicefrac{m}{n}$, because $n$ is fixed
    and $m\in\mathbb{N}\cup\left\{ 0\right\} $ it follows that $f_{n}$
    can take at most countably many values, hence it is simple. $f_{n}$
    is also measurable because
    \[
    f_{n}^{-1}\left(\left(-\infty,c\right)\right)=\left\{ s\in S|f_{n}\left(s\right)\leq c\right\} =\left\{ s\in S|f_{n}\left(s\right)\leq\frac{m^{\star}}{n}\right\} =\left\{ s\in S|f_{n}\left(s\right)<\frac{m^{\star}+1}{n}\right\}
    \]
    For $m^{\star}$ chosen by the Archimedean principle. The last set
    is $f^{-1}\left(\left(-\infty,\frac{m^{\star}+1}{n}\right)\right)$
    which is measurable by assumption. Then $f_{n}$ is measurable for
    all $n$.
    
    Finally, $f_{n}\to f$ uniformly because
    \[
    \left|f_{n}\left(s\right)-f\left(s\right)\right|\leq\left|\frac{m}{n}-\frac{m+1}{n}\right|=\frac{1}{n}.
    \]

Other results will follow and are left stated without proof:
!!! abstract "Proposition"

    Let $f,g$ be measurable functions and $\alpha\in\mathbb{R}$ then:
    
    
    1. $f+g$ is measurable.
    1. $\alpha f$ is measurable.
    1. $fg$ is measurable.
    1. $\nicefrac{1}{f}$ is measurable provided that $f\left(s\right)\neq0$.

Finally continuity of functions is used to strengthen the intuition
around measurability.
!!! abstract "Proposition"

    Let $f,g$ be equivalent function defined on an interval $E$, that
    is they are equal a.e. If $f$ and $g$ are continuous then they coincide.

??? success "Proof"

    Suppose not, then there exists $x\in E$ such that $f\left(x\right)\neq g\left(x\right)$.
    Let $\epsilon=\left|f\left(x\right)-g\left(x\right)\right|$, because
    $f$ and $g$ are continuous there exists $\delta$ such that for
    $x^{'}\in B_{\delta}\left(x\right)$ it holds that $\left|f\left(x\right)-f\left(x^{'}\right)\right|<\frac{\epsilon}{2}$
    and $\left|g\left(x\right)-g\left(x^{'}\right)\right|<\frac{\epsilon}{2}$.
    Then for all $x^{'}\in B_{\delta}\left(x\right)$ it holds that $f\left(x^{'}\right)\neq g\left(x^{'}\right)$,
    but $B_{\delta}\left(x\right)$ has strictly positive measure, contradicting
    $f$ and $g$ being equivalent.

!!! abstract "Proposition"

    A function $f$ equivalent to a measurable function $g$ is measurable.

??? success "Proof"

    Because the functions are equivalent the sets $\left\{ x|f\left(x\right)\leq c\right\} $
    and $\left\{ x|g\left(x\right)\leq c\right\} $ can differ in at most
    by a set of measure zero. Then if the second set is measurable so
    is the first one (taking into account the completion of the $\sigma$-algebra).
    This proves measurability.

!!! abstract "Corollary"

    A function $f$ equivalent to a continuous function is measurable.

??? success "Proof"

    Immediate from continuous functions being measurable.

This implies that if a function is continuous a.e. then it is measurable,
again the behavior of functions in sets of measure zero carries no
consequence. It turns out that this corollary can be strengthened.
The result is powerful and is stated without a proof:
!!! abstract "Theorem: Luzin"

    Let $f:\left[a,b\right]\to\mathbb{R}$ be a function.
    $f$ is measurable if and only if for all $\epsilon>0$ there exists
    a continuous function $g$ such that $\mu\left\{ x\in\left[a,b\right]\,|\,f\left(x\right)\neq g\left(x\right)\right\} <\epsilon$.

This theorem shows that for the case of functions of real variable
and real value measurability is equivalent to continuity, except on
a set of arbitrarily small size. In other words a measurable function
can be made continuous by altering its values on a set of arbitrarily
small measure.
