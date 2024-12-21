+++
title = "裏話"
lang_ja = true
+++

[この論文](https://arxiv.org/abs/2406.06415)の経緯を忘れないうちに書いておく。
(といっても一部は忘れてしまったのでいくつかの覚えている点から内挿して経緯を再構成した。)

# プラズマアナロジー

桂研究室での理論演習(B4の春)で[David Tongの講義録](https://www.damtp.cam.ac.uk/user/tong/qhe.html)を輪読しながら量子Hall効果を勉強したのだが、
そこで知ったプラズマアナロジーが後の研究での考察のきっかけとなった。

分数量子Hall効果におけるLaughlingの波動関数とは、以下のようなものである。
\begin{align}
    Ψ(\{z\}) ∝
    \left( ∏_{1\leq i < j \leq N} ( z_i - z_j )^m \right)
    \exp\left(-\frac1{4} ∑_{i=1}^N |z_i|^2\right)
\end{align}
ここで $z ∈ ℂ$ である。諸々の定数は省略した。
この試行波動関数から導かれる量子Hall効果の色々な面白い現象は本題ではなく、ここではこの波動関数がCoulomb気体のBoltzmann重みと結びつくことに注目しよう。
まず波動関数の絶対値を
\begin{align}&
    |Ψ(\{z\})| = e^{-βU(\{z\})/2},\quad
    β = \frac{2}{m}, \\
    &
    U(\{z\})
    = -∑_{1 ≤ i < j ≤ N} m²\ln| z_i - z_j |
    + ∑_{i=1}^N \frac{m}{4}|z_i|^2 + \mathrm{const.}
\end{align}
と書き直す。
この $U(\{z\})$ は一様な背景電荷の上に浮かんだCoulomb気体のポテンシャルエネルギーになっている。
具体的には $z₁, z₂,…,z_N$ の位置にいる電荷 $-m$ の粒子と一様電荷密度 $ρ = 1/2π$ の背景電荷を考えれば良い。
ただし電荷 $q₁, q₂$ の間の力が
\begin{align}
    F = \frac{q₁q₂}{| z₁ - z₂ |}
\end{align}
であるとした。
したがって、Laughling波動関数から得られる粒子位置の確率分布 $P(\{z\}) ≔ |Ψ(\{z\})|²$ は温度 $β$ のCoulomb気体における粒子位置の確率分布と全く同じになる。

# Kinetic Ising model
渡辺先生からfrustration-free系のことを教えてもらって、強磁性Heisenberg模型とかの具体例をいじっていたとき、プラズマアナロジーをスピン系でやれば新しい具体例が作れると思いついて、試してみた。
その時構成した模型は以下のようなもの。
\begin{align}&
    H_i = A_i^† A_i \\
    &
    A_i = 1 -\exp\left(h+J ∑_{j \sim i }σ^z_j\right) σ⁺_i
    -\exp\left(-h-∑_{j \sim i }σ^z_j\right)σ⁻_i.
\end{align}
この模型の基底状態は以下の波動関数で与えられる。
\begin{align}
    Ψ[s] &
    = \frac{1}{\sqrt{Z}}\exp\left(\frac{βJ}{2}∑_{⟨i,j⟩}s_is_j + \frac{βh}{2}∑_{i}s_i\right).
\end{align}
しかしハミルトニアンの表示がなんか込み入ってるし、こんな模型を考えて何になるんだろうと思ってしまい、そこで放置していた。この模型は整理するとkinetic Ising modelになるのだが、その時は知らなかった。

# Quantum dimer model
同期とやっているFradkinを読むゼミがあるのだが、このゼミの9章 "Gauge theory, dimer models, and topological phases" の担当になったこともかなり研究の役に立った。
9章の担当になった理由は単に(古典)ダイマー模型が好きだから量子もやりたい、という理由だったと思うが、quantum dimer modelのRokhsar-Kivelson pointがgapless frustration-free系の重要な例であることは全く認識していなかった。
それでRK pointを扱っているうちに、前Ising模型で考えていたことと同じだと気付いた。

# Rokhsar-Kivelson Hamiltonian

そこから数ヶ月経って、quantum dimer modelに関連した論文で引用の連鎖を辿っているときに[Isakov et al.(2011)](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.83.125114)を発見したことが研究の転機となった。
この論文ではkinetic Ising modelやRK pointの際の模型の構成のアイディアがRokhsar-Kivelson Hamiltonianとして一般的に展開されていた。
さらにMarkov連鎖とRK Hamiltonianの関係が具体的に説明されており、そこでこの系の重要性を認識することができた。
Gosset-Huangの論文を副島さんから紹介してもらって既に知っていたので、
その結果を使ってMCMCの動的臨界指数に対する下限が導けることを思いついた。
ということで割とトントン拍子で論文を書こうという話になった。
ボトルネックが論文を見つけるところだったが、この論文の意義は文脈の違う論文を取り合わせたところにあるので、妥当な気がする。

# 総括
理論演習と自主ゼミの内容が自分の中でつながって論文が書けたという成功体験を得たので、
これからもランダムな勉強を大切にしていきたい。