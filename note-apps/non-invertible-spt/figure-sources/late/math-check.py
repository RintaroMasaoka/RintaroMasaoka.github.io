from pathlib import Path
import json
import numpy as np

root = Path(__file__).resolve().parent
I = np.eye(2)
X = np.array([[0,1],[1,0]])
Z = np.diag([1,-1])
def tensor(items):
    out = np.array([[1.]])
    for item in items:
        out = np.kron(out,item)
    return out
def local(ops):
    return tensor([ops.get(j,I) for j in range(8)])

single_cz = np.diag([1,1,1,-1])
single_identity = np.allclose(single_cz @ np.kron(X,I) @ single_cz, np.kron(X,Z))
K = [local({(j-1)%8:Z,j:X,(j+1)%8:Z}) for j in range(8)]
string = local({0:Z,1:X,3:X,5:X,6:Z})
string_identity = np.allclose(K[1] @ K[3] @ K[5],string)

layer1 = [(0,1),(2,3),(4,5),(6,7)]
layer2 = [(1,2),(3,4),(5,6),(7,0)]
layers_disjoint = all(len({j for edge in layer for j in edge})==8 for layer in [layer1,layer2])
edges = {tuple(sorted((j,(j+1)%8))) for j in range(8)}
layers_complete = {tuple(sorted(e)) for e in layer1+layer2}==edges
signs=[]
for basis in range(256):
    bits = [(basis>>(7-j))&1 for j in range(8)]
    signs.append((-1)**sum(bits[j]*bits[(j+1)%8] for j in range(8)))
full_cz = np.diag(signs)
all_cz_conjugation = all(np.allclose(full_cz @ local({j:X}) @ full_cz,K[j]) for j in range(8))
eta_e=local({j:X for j in [1,3,5,7]})
eta_o=local({j:X for j in [0,2,4,6]})
global_symmetry=all(np.allclose(full_cz @ op,op @ full_cz) for op in [eta_e,eta_o])
cluster = np.array(signs)/16
cluster_conditions=all(np.allclose(op@cluster,cluster) for op in K)
string_expectation=float(cluster @ string @ cluster)
sectors=[{'eta_e':e,'eta_o':o,'D_squared':(1+e)*(1+o)} for e in [1,-1] for o in [1,-1]]
checks={'single_CZ_X_conjugation':bool(single_identity),'K2_K4_K6_string_identity':bool(string_identity),'CZ_layers_disjoint':layers_disjoint,'CZ_layers_cover_periodic_bonds':layers_complete,'all_CZ_conjugates_X_to_K':all_cz_conjugation,'all_CZ_commutes_with_eta_e_and_eta_o':global_symmetry,'cluster_K_j_eigenvalues_plus_one':cluster_conditions,'string_expectation':string_expectation,'D_squared_symmetry_sectors':sectors,'stacking_summand_count':len([(a,b) for a in range(4) for b in range(4)]),'diagonal_summand_count':4}
assert all(v for k,v in checks.items() if isinstance(v,bool))
assert string_expectation==1
output = root / 'output' / 'qa'
output.mkdir(parents=True, exist_ok=True)
output.joinpath('math-check.json').write_text(json.dumps({'scope': 'Illustrative 8-site periodic cluster calculation and scalar sector/cartesian-product checks; not a source-classification audit.', 'checks': checks}, ensure_ascii=False, indent=2)+'\n')
print(json.dumps(checks))
