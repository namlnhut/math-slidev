---
theme: seriph
layout: cover
background: https://cover.sli.dev
title: Mathematical Slide Template
class: text-center
drawings:
  persist: false
transition: slide-left
hideInToc: true
routerMode: history
---

# Mathematical Slide Template

Beamer-style academic components for Slidev

<div class="mt-4 text-base font-semibold">
  Author One<sup>1</sup>,&ensp;Author Two<sup>2</sup>,&ensp;Author Three<sup>1</sup>
</div>
<div class="text-sm opacity-75 mt-1">
  <sup>1</sup> Department of Mathematics · University A &ensp;
  <sup>2</sup> Department of Computer Science · University B
</div>

---
layout: toc
hideInToc: true
---

# Table of Contents

<BookTable
  title="Contents"
  :items="[
    { number: '1', title: 'Foundations', sub: [
      { number: '1.1', title: 'Definitions & Notation' },
      { number: '1.2', title: 'Axioms & Laws' },
    ]},
    { number: '2', title: 'Core Results', sub: [
      { number: '2.1', title: 'Theorems & Propositions' },
      { number: '2.2', title: 'Proofs & Corollaries' },
    ]},
    { number: '3', title: 'Examples & Exercises' },
    { number: '4', title: 'Supplementary Material', sub: [
      { number: '4.1', title: 'Remarks & Warnings' },
      { number: '4.2', title: 'Open Problems' },
      { number: '4.3', title: 'References' },
    ]},
  ]"
/>

---
layout: section
number: 1
---

# Foundations

::subtitle::
Definitions, notation, and algebraic structure

---
title: "§1.1 — Definitions & Notation"
---

# §1.1 — Definitions & Notation

<Definition title="Normed Vector Space">

A **normed vector space** is a pair $(V, \|\cdot\|)$ where $V$ is a vector space over $\mathbb{F}$ and
$\|\cdot\| : V \to \mathbb{R}_{\geq 0}$ satisfies for all $x, y \in V$, $\alpha \in \mathbb{F}$:
1. $\|x\| = 0 \iff x = 0$, &ensp; 2. $\|\alpha x\| = |\alpha|\,\|x\|$, &ensp; 3. $\|x+y\| \leq \|x\| + \|y\|$

</Definition>

<div class="grid grid-cols-2 gap-2 mt-1">
<div>

<Notation title="Standard spaces">

- $\mathbb{R}^n$ with $\ell^p$ norm: $\|x\|_p = \bigl(\sum_i |x_i|^p\bigr)^{1/p}$
- $\mathbb{S}^n$ — symmetric $n\times n$ real matrices
- $\mathbb{S}^n_+$ — positive semidefinite (PSD) cone

</Notation>

</div>
<div>

<Notation title="Matrix operators">

- $A^\top$ — transpose;&ensp; $A^\dagger$ — pseudoinverse
- $\operatorname{tr}(A)$ — trace;&ensp; $\det(A)$ — determinant
- $\lambda_i(A)$ — $i$-th eigenvalue; $\sigma_i(A)$ — $i$-th singular value

</Notation>

</div>
</div>

---
title: "§1.2 — Axioms & Laws"
---

# §1.2 — Axioms & Laws

<div class="grid grid-cols-2 gap-2">
<div>

<Axiom title="Completeness (Dedekind)">

Every non-empty subset of $\mathbb{R}$ bounded above has a **least upper bound** (supremum) in $\mathbb{R}$.

</Axiom>

<Law title="Parallelogram Identity">

In any inner product space $(V,\langle\cdot,\cdot\rangle)$:
$$\|x+y\|^2 + \|x-y\|^2 = 2\,\|x\|^2 + 2\,\|y\|^2$$

</Law>

<Fact>

The dual norm of $\|\cdot\|_p$ is $\|\cdot\|_q$ where $\tfrac{1}{p}+\tfrac{1}{q}=1$.
In particular $(\ell^1)^* = \ell^\infty$.

</Fact>

</div>
<div>

<Assumption number="A1" title="Slater's Condition">

$\exists\, x_0 \in \operatorname{relint}(\mathcal{D})$ such that $g_i(x_0) < 0$ for all $i$ and $Ax_0 = b$.

</Assumption>

<Rule title="Product Rule (Fréchet)">

If $f,g:\mathbb{R}^n\to\mathbb{R}$ are differentiable at $x$:
$$\nabla(fg)(x) = f(x)\,\nabla g(x) + g(x)\,\nabla f(x)$$

</Rule>

</div>
</div>

---
layout: section
number: 2
---

# Core Results

::subtitle::
Theorems, propositions, and their proofs

---
title: "§2.1 — Theorems & Propositions"
---

# §2.1 — Theorems & Propositions

<Theorem title="Cauchy–Schwarz Inequality">

For all $x, y$ in an inner product space $(V, \langle\cdot,\cdot\rangle)$:
$$|\langle x, y\rangle|^2 \;\leq\; \langle x,x\rangle\cdot\langle y,y\rangle$$
Equality holds if and only if $x$ and $y$ are **linearly dependent**.

</Theorem>

<div class="grid grid-cols-2 gap-2 mt-1">

<Proposition title="First-Order Convexity">

A differentiable $f:\mathbb{R}^n\to\mathbb{R}$ is **convex** if and only if
$$f(y) \geq f(x) + \nabla f(x)^\top(y-x) \quad \forall\, x,y$$

</Proposition>

<Lemma title="Separating Hyperplane">

Let $C,D\subseteq\mathbb{R}^n$ be non-empty, disjoint, and convex. Then $\exists\, a\neq 0$, $b\in\mathbb{R}$:
$$a^\top x \leq b \leq a^\top y \quad \forall\, x\in C,\; y\in D$$

</Lemma>

</div>

---
title: "§2.2 — Proof & Corollaries"
---

# §2.2 — Proof & Corollaries

<Theorem title="Weierstrass Extreme Value">

Every continuous $f$ on a non-empty compact set $K \subseteq \mathbb{R}^n$ attains its minimum:
$\exists\, x^\star \in K$ such that $f(x^\star) = \min_{x \in K} f(x)$.

</Theorem>

<Proof title="Theorem 1 (Cauchy–Schwarz)">

Define $p(t) = \|x + ty\|^2 = \langle x,x\rangle + 2t\langle x,y\rangle + t^2\langle y,y\rangle \geq 0$ for all $t\in\mathbb{R}$.

Since $p(t)\geq 0$ is a quadratic in $t$, its discriminant must be non-positive:
$$\Delta = 4\langle x,y\rangle^2 - 4\langle x,x\rangle\langle y,y\rangle \leq 0$$

Rearranging gives $|\langle x,y\rangle|^2 \leq \|x\|^2\|y\|^2$. Equality holds iff $p(t)=0$ for some $t$, i.e., $x+ty=0$.

</Proof>

<div class="grid grid-cols-2 gap-2 mt-1">

<Corollary number="1.1" title="AM–GM Inequality">

For all $a,b\geq 0$:
$$\sqrt{ab} \;\leq\; \frac{a+b}{2}$$

</Corollary>

<Corollary number="1.2" title="Jensen's Inequality">

If $f$ is convex, $\lambda_i\geq 0$, $\sum_i\lambda_i=1$:
$$f\!\left(\textstyle\sum_i \lambda_i x_i\right) \leq \sum_i \lambda_i f(x_i)$$

</Corollary>

</div>

---
layout: section
number: 3
---

# Examples & Exercises

---
title: "§3 — Worked Examples & Exercises"
---

# §3 — Worked Examples & Exercises

<div class="grid grid-cols-2 gap-2">
<div>

<Example title="Spectral Norm">

The **spectral norm** $\|A\|_2 = \sigma_{\max}(A)$ satisfies:
$$\|A\|_2 = \sup_{\|x\|_2=1}\|Ax\|_2$$
For $A\in\mathbb{S}^n_+$: $\|A\|_2 = \lambda_{\max}(A)$.

</Example>

<Example title="Quadratic Function">

For $f(x)=\tfrac{1}{2}x^\top Px + q^\top x + r$ with $P\in\mathbb{S}^n$:
$$\nabla f(x)=Px+q, \qquad \nabla^2 f(x)=P$$
$f$ is convex $\iff P\succeq 0$.

</Example>

</div>
<div>

<Exercise>

Show that the intersection of any (possibly infinite) family of convex sets is convex. Is the **union** convex in general?

</Exercise>

<Exercise>

Prove $f(X)=-\log\det X$ is convex on $\mathbb{S}^n_{++}$.

*Hint:* show $g(t)=f(X+tV)$ is convex in $t$ using
$\frac{d}{dt}\log\det(X+tV)\big|_{t=0}=\operatorname{tr}(X^{-1}V)$.

</Exercise>

</div>
</div>

---
layout: section
number: 4
---

# Supplementary Material

::subtitle::
Remarks, warnings, open problems, and references

---
title: "§4.1 — Remarks & Warnings"
---

# §4.1 — Remarks & Warnings

<div class="grid grid-cols-2 gap-2">
<div>

<Remark title="On Strong Duality">

Under Assumption A1 (Slater), the duality gap is zero: $p^\star = d^\star$. Without a constraint qualification, strong duality may fail even when both primal and dual are feasible.

</Remark>

<Assumption number="A2" title="Lipschitz Gradient">

$\nabla f$ is $L$-Lipschitz: $\|\nabla f(x)-\nabla f(y)\|_2\leq L\|x-y\|_2$ for all $x,y$.

</Assumption>

</div>
<div>

<Warning title="Step-size in Gradient Descent">

Gradient descent $x_{k+1}=x_k-\alpha\nabla f(x_k)$ **diverges** if $\alpha > 2/L$. Under A2, the choice $\alpha=1/L$ guarantees descent:
$$f(x_{k+1}) \leq f(x_k) - \frac{1}{2L}\|\nabla f(x_k)\|_2^2$$

</Warning>

<Rule title="KKT Stationarity">

At optimum $(x^\star,\lambda^\star,\nu^\star)$:
$$\nabla f(x^\star)+\textstyle\sum_i\lambda_i^\star\nabla g_i(x^\star)+A^\top\nu^\star=0$$

</Rule>

</div>
</div>

---
title: "§4.2 — Open Problems"
---

# §4.2 — Open Problems

<div class="grid grid-cols-2 gap-2">
<div>

<Conjecture title="P vs NP">

There is no polynomial-time algorithm for any NP-complete problem: $\mathrm{P}\neq\mathrm{NP}$.

</Conjecture>

<Claim>

The iterates of projected gradient descent on a compact convex set converge to the global minimum at rate $O(1/k)$ under Assumption A2.

</Claim>

</div>
<div>

<Question>

Does there exist a quantum algorithm solving general convex optimization in time polynomial in $n$ but sub-polynomial in $1/\varepsilon$?

</Question>

<Question>

Can stochastic gradient descent achieve the full deterministic convergence rate when the gradient noise variance is unbounded?

</Question>

</div>
</div>

---
title: "§4.3 — References"
---

# §4.3 — References

<div class="text-sm mt-2 space-y-2">

<p><Cite>BV04</Cite> Boyd, S. & Vandenberghe, L. (2004). <em>Convex Optimization</em>. Cambridge University Press.</p>

<p><Cite>Nes04</Cite> Nesterov, Y. (2004). <em>Introductory Lectures on Stochastic Programming</em>. Kluwer.</p>

<p><Cite>Roc70</Cite> Rockafellar, R.T. (1970). <em>Convex Analysis</em>. Princeton University Press.</p>

<p><Cite>HUL93</Cite> Hiriart-Urruty, J.-B. & Lemaréchal, C. (1993). <em>Convex Analysis and Minimization Algorithms</em>. Springer.</p>

</div>


<Footnote mark="★">All definitions and theorems follow conventions from Boyd & Vandenberghe <em>[BV04]</em> unless otherwise noted.</Footnote>

---
layout: center
class: text-center
hideInToc: true
---

# Thank You

<div class="opacity-55 text-sm mt-1">Questions & Discussion</div>

<PoweredBySlidev mt-10 />
