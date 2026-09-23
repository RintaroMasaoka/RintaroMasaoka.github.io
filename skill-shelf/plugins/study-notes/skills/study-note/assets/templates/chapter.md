# 平方の展開

$(x+1)^2$ を積として計算すると、一次の項が二つ現れる。それらをまとめて、同じ式を多項式の和として表す。

## 積を展開する

<!-- reference: square-identity -->

分配法則を二度使うと、平方は次のように展開できる。

```equation
id: square
(x+1)^2=x^2+2x+1
```

二つの交差項 $x\cdot1$ と $1\cdot x$ の和が $2x$ になる。

<!-- /reference -->

```math-steps
lhs: (x+1)^2
part expanded: x^2+x+x+1
note: 各括弧から一つずつ項を選んで掛け、すべて加える。
popup-math: (x+1)(x+1)=x(x+1)+1(x+1)
---
part collected: x^2+2x+1
note: 二つの $x$ をまとめる。
```

## 具体的な値を入れる

式 (square) の両辺に $x=2$ を代入すると、どちらも $9$ になる。

| $x$ | $(x+1)^2$ | $x^2+2x+1$ |
| --- | --- | --- |
| $0$ | $1$ | $1$ |
| $2$ | $9$ | $9$ |

値を入れる確認は計算ミスを見つける助けになる。任意の $x$ で成立する根拠は、[分配法則による導出](#ref-square-identity)である。

## 因数分解で戻す

$$
x^2-1=(x-1)(x+1)
$$

```math-hint
右辺の交差項 $x$ と $-x$ が打ち消し合う。
```

[展開を確認する](#note-difference-of-squares)。

<details id="note-difference-of-squares">
<summary>$(x-1)(x+1)$ の計算</summary>

分配法則から

$$
(x-1)(x+1)=x^2+x-x-1=x^2-1
$$

となる。

</details>
