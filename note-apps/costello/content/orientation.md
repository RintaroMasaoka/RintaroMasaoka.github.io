# Costelloの繰り込みと有効作用

場の量子論を摂動的に扱うと、ファインマン図ごとの計算規則は書ける。しかし、短距離カットオフを外したあとに何が残り、それをどの意味で一つの理論と呼べるかは、その規則だけでは決まらない。Kevin Costelloの論文 [*Renormalisation and the Batalin–Vilkovisky formalism*](https://arxiv.org/abs/0706.1533)（2007）は、一定の条件を満たす場の理論について、繰り込まれた有効作用の族を数学的な対象として構成する。このノートでは、最初にガウス平均と発散の小さな計算例で必要な操作を確かめ、その後に構成の仮定と主張を追う。

## 想定読者と規約の扱い

量子力学・場の理論・繰り込みの基礎を一度学んだ読者を想定する。ガウス積分やWick縮約は使うが、指数の符号、伝播関数の正規化、形式変数の扱いは使用地点で指定する。個々の発散については、その名前を知っていることだけを前提にせず、係数の計算から何が特異になるかを確かめる。

<details>
<summary>補足：研究の背景とCostelloの位置づけ</summary>

この論文には、異なるスケールの有効相互作用を結ぶ繰り込み群と、ゲージ理論の量子積分に整合性の条件を課すBV形式という二つの背景がある。Costelloは、熱核を使って局所相殺項から有効作用の族を構成し、その族に量子マスター方程式を課す方法を調べる。[Polchinski（1984）](https://doi.org/10.1016/0550-3213(84)90287-6)、[Batalin–Vilkovisky（1981）](https://www.sciencedirect.com/science/article/pii/0370269381902057)、[Costello（2007）](https://arxiv.org/abs/0706.1533)。

</details>

## 参照文献

主な参照文献はCostelloの *Renormalisation and the Batalin–Vilkovisky formalism*（2007）と *Renormalization and Effective Field Theory*（AMS, 2011）であり、本文では2007年論文の節番号で定理の位置を示す。
