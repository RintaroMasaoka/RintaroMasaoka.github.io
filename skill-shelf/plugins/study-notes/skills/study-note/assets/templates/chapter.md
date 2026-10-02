# Expanding a Square

Expanding $(x+1)^2$ as a product gives two linear terms. Combining them expresses the same quantity as a sum of polynomial terms.

## Expand the product

<!-- reference: square-identity -->

Applying the distributive law twice gives

```equation
id: square
(x+1)^2=x^2+2x+1
```

The two cross terms $x\cdot1$ and $1\cdot x$ sum to $2x$.

<!-- /reference -->

```math-steps
lhs: (x+1)^2
part expanded: x^2+x+x+1
note: Multiply each term in one factor by each term in the other, then add the products.
popup-math: (x+1)(x+1)=x(x+1)+1(x+1)
---
part collected: x^2+2x+1
note: Combine the two copies of $x$.
```

## Substitute a value

Setting $x=2$ on both sides of equation (square) gives $9$ in each case.

| $x$ | $(x+1)^2$ | $x^2+2x+1$ |
| --- | --- | --- |
| $0$ | $1$ | $1$ |
| $2$ | $9$ | $9$ |

Substitution can help catch calculation errors. Validity for every $x$ follows from the [derivation using the distributive law](#ref-square-identity).

## Return by factoring

$$
x^2-1=(x-1)(x+1)
$$

```math-hint
The cross terms $x$ and $-x$ on the right cancel.
```

[Check the expansion](#note-difference-of-squares).

<details id="note-difference-of-squares">
<summary>Calculating $(x-1)(x+1)$</summary>

The distributive law gives

$$
(x-1)(x+1)=x^2+x-x-1=x^2-1
$$

</details>
