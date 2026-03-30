# The Lebesgue integral

> Part: Random Variables and Probability

The Lebesgue integral is in at least two important ways a generalization
of the Riemann integral and it serves a crucial purpose of defining
what it means to take the expected value of a function with respect
to a probability distribution. The first sense in which the Riemann
integral is generalized is that the Lebesgue integral is defined over
measurable functions, a space that is much richer than that of Riemann
integrable functions, the second sense is much more crucial: the Lebesgue
integral is defined for functions with domain in arbitrary sets, thus
allowing to handle a more abstract and general class of functions.

Intuitively the Lebesgue integral is constructed in a similar way
than the Riemann integral. To construct the latter one takes successively
finer grids of the domain and evaluate the function at certain points,
constructing step functions, one above the function and one below,
then two sums are constructed and the value of the integral is defined
as the (common) value of the limit of those sums as the length of
the grid's spaces goes to zero.

The Lebesgue integral of a function $f:S\to\mathbb{R}_{+}$ is constructed
by taking grids over the range of the function $\left\{ y_{i}\right\} _{i=1}^{n}$
such that $0=y_{1}\leq\ldots\leq y_{n}$. Then one can define the
sets $A_{i}=\left\{ s\in S|y_{i}\leq f\left(s\right)<y_{i+1}\right\} $
and using the measure over $S$ define $\lambda\left(A_{i}\right)$
and the sum $\sum y_{i}\lambda\left(A_{i}\right)$. The Lebesgue integral
is then the limit of this sum as the values $y_{i}$ are closer together.

The introduction before of simple functions makes sense when defining
the Lebesgue integral. Its definition seems intuitive for this class
of functions and [Proposition](section-23-measurable-functions.md#ref-simple-000020functions-000020and-000020measurability)
creates a bridge between them and the more general class of measurable
functions, thus allowing to extend the Lebesgue integral to this broader
family.

In what follows we restrict attention to non-negative, real valued
functions.
<a id="ref-eq-000020lebesgue-000020integral-000020-000020simple-000020fun" class="course-anchor"></a>
!!! info "Definition: Lebesgue integral for simple functions"

    Let $\left(S,{\cal A},\mu\right)$
    be a measure space and $f:S\to\mathbb{R}_{+}$ a simple, $\mu$-measurable
    function that takes no more than countably many values $\left\{ y_{1},y_{2},\ldots\right\} $.
    The Lebesgue integral over the set $A\subseteq S$ is defined as:
    \begin{equation}
    \int_{A}f\left(s\right)d\mu=\sum_{n}y_{n}\mu\left(A_{n}\right)
    \end{equation}
    where the sets $A_{n}$ are defined as:
    \[
    A_{n}=\left\{ s\in A|f\left(s\right)=y_{n}\right\}
    \]
    These sets can be empty if there is no element of $s$ in $A$ for
    which $f$ takes a given value. The Lebesgue integral is defined as
    long as the series in ([Equation](#ref-eq-000020lebesgue-000020integral-000020-000020simple-000020fun))
    is absolutely convergent. If $f$ takes finitely many values and $\mu$
    is finite (or a probability measure) this condition is satisfied.

An example is given by the constant function, $f\left(s\right)=1$
for all $s\in S$, then:
\[
\int_{A}f\left(s\right)d\mu=\int_{A}d\mu=\mu\left(A\right)
\]

It can be shown that the lebesgue integral satisfies some natural
properties:
!!! abstract "Proposition"

    Let $f$ and $g$ be non-negative, measurable, simple and integrable
    functions on $\left(S,{\cal A},\mu\right)$, a measure space, and
    $c\geq0$ a constant. Then:
    
    
    1. $\int_{A}\left(f+g\right)\left(s\right)d\mu=\int_{A}f\left(s\right)d\mu+\int_{A}g\left(s\right)d\mu$
    1. $\int_{A}\left(cf\right)\left(s\right)d\mu=c\int_{A}f\left(s\right)d\mu$
    1. If $f$ is bounded $\left|f\left(s\right)\right|\leq M$ a.e. then
    $f$ is integrable and $\left|\int_{A}f\left(s\right)d\mu\right|\leq M\mu\left(A\right)$.

??? success "Proof"

    [Kolmogorov and Fomin (2012, Sec. 29.1)](https://books.google.com/books?id=cbbCAgAAQBAJ).

!!! info "Definition: Lebesgue integral - Nonnegative functions"

    Let $\left(S,{\cal A},\mu\right)$
    be a measure space. A measurable function $f:S\to\mathbb{R}$ is said
    to be integrable on a set $A$ if there exists a sequence $\left\{ f_{n}\right\} $
    of integrable simple functions converging uniformly to $f$ on $A$.
    The Lebesgue integral is defined as:
    \begin{equation}
    \int_{A}f\left(s\right)d\mu=\lim\int_{A}f_{n}\left(s\right)d\mu
    \end{equation}

This definition precludes the integral from being infinite, as shown
in [Kolmogorov and Fomin (2012, Sec. 29.1)](https://books.google.com/books?id=cbbCAgAAQBAJ), the limit above
exists provided that the functions $f_{n}$ are integrable (recall
that it was asked of the sum in ([Equation](#ref-eq-000020lebesgue-000020integral-000020-000020simple-000020fun))
to be finite), moreover it is independent of the choice of sequence
approximating $f$, this sequence can be furthermore be chosen to
be strictly increasing ([Stokey et al. 1989](https://books.google.com/books?id=tWYo0QolyLAC)). Yet, the concept of the Lebesgue
integral can be easily generalized to allow for infinite values, the
definition in [Stokey et al. (1989)](https://books.google.com/books?id=tWYo0QolyLAC) allows for this.

What follows is a list of properties of the Lebesgue integral which
should be familiar if there is any knowledge of the behavior of Riemann
integrals. They are not of particular interest in this course.
!!! abstract "Proposition"

    Properties of the Lebesgue integral for non-negative measurable functions:
    
    
    1. $\int_{A}\left(f+g\right)\left(s\right)d\mu=\int_{A}f\left(s\right)d\mu+\int_{A}g\left(s\right)d\mu$
    1. $\int_{A}\left(cf\right)\left(s\right)d\mu=c\int_{A}f\left(s\right)d\mu$
    1. If $g$ is measurable and integrable and $f$ is bounded by $g$:
    $\left|f\left(s\right)\right|\leq g\left(s\right)$ a.e., then $f$
    is integrable and $\left|\int_{A}f\left(s\right)d\mu\right|\leq\int_{A}g\left(s\right)d\mu$.
    
    
      1. If $f$ is bounded and measurable then it is integrable.
    
    1. If $f\leq g$ a.e. then $\int f\left(s\right)d\mu\leq\int g\left(s\right)d\mu$.
    1. If $A\subseteq B$ with $A,B\in{\cal A}$ then $\int_{A}f\left(s\right)d\mu\leq\int_{B}f\left(s\right)d\mu$
    1. Let $A=\cup A_{n}$ where $\left\{ A_{n}\right\} $ is a finite or
    countable sequence of disjoint sets. If $f$ is integrable on $A$
    then $f$ is integrable on $A_{n}$ for all $n$ and:
    \[
    \int_{A}f\left(s\right)d\mu=\sum_{n}\int_{A_{n}}f\left(s\right)d\mu
    \]
    when the series on the right is absolutely convergent.

Finally it is noted that a non-negative integrable function induces
a measure on a space, the following proposition makes this clear.
<a id="ref-prop-000020inducing-000020a-000020measure" class="course-anchor"></a>
!!! abstract "Proposition"

    Let $f$ be a non-negative,
    integrable function, then $\lambda:{\cal A}\to\mathbb{R}$ defined
    as:
    \[
    \lambda\left(A\right)=\int_{A}f\left(s\right)d\mu
    \]
    is a measure on $\left(S,{\cal A}\right)$.

!!! info "Definition: Lebesgue integral"

    Let $\left(S,{\cal A},\mu\right)$ be
    a measure space. A measurable function $f:S\to\mathbb{R}$ is said
    to be integrable if the following two integrals are finite:
    \[
    \int f^{+}\left(s\right)d\mu\qquad\int f^{-}\left(s\right)d\mu
    \]
    where:
    \[
    f^{+}\left(s\right)=\begin{cases}
    f\left(s\right) & \mbox{ if }f\left(s\right)\geq0\\
    0 & \mbox{ if }f\left(s\right)<0
    \end{cases}\qquad f^{+}\left(s\right)=\begin{cases}
    0 & \mbox{ if }f\left(s\right)\geq0\\
    -f\left(s\right) & \mbox{ if }f\left(s\right)<0
    \end{cases}
    \]
    The integral of $f$ is defined as:
    \begin{equation}
    \int f\left(s\right)d\mu=\int f^{+}\left(s\right)d\mu-\int f^{-}\left(s\right)d\mu
    \end{equation}

Recall that when $\left(S,{\cal A},\mu\right)$ is a probability space
the function $f$ is called a random variable, the definitions above
are then the definitions of the expected value of a random variable,
this expected value exists when $f$ is integrable, we have seen that
a sufficient condition for this is to be bounded a.e. and the measure
to be finite, this last condition is satisfied immediately by probability
measures.
