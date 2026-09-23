# Naming Contract

短い表現を heading、dispatch handle、child 名、map entry、repeated label として再利用するときだけ適用する。局所 prose をすべて glossary 化しない。

再利用名は次を明示する。

- expansion: 初見の読者向けの展開
- grounding: source、domain、project-definition、project-observation、user-decision、mixed、unknown
- stability: nonce、provisional、active、deprecated、retired
- carry_scope: local、node、subtree、project、paper
- claim_permission: name-only、definition-only、evidence-linked、claim-linked
- merge_boundary: 同一視してよい／いけない近接概念
- route: inline、concepts、conventions、source、findings/checks、plain prose

working surface では次の一行形式で Naming decisions に置ける。

    - {name}: expansion: {...}. Grounding: {...}. Stability: {...}. Carry scope: {...}. Claim permission: {...}. Merge boundary: {...}. Proposed route: {...}.

concepts/{term}.md は reader bridge であり、claim の証明ではない。notation は conventions、source-native term は source record、project claim は findings/checks へ route する。durable prose では管理 badge を残さず、定義、link、source、checked claim、または plain prose に解決する。
