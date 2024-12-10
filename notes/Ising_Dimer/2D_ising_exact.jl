using SymPy
using LinearAlgebra
using Plots
@vars q
@vars ζ₁
@vars ζ₂
# M = Sym[
#         0  1+q*ζ₁       -1      -1;
#   -1-q/ζ₁       0        1      -1;
#         1      -1        0  1+q*ζ₂;
#         1       1  -1-q/ζ₂       0
# ]
M = Sym[
      0 1//3 -1//3 -1//3 q*ζ₁ 0 0 0;
      -1//3 0 1//3 -1//3 0 q/ζ₂ 0 0;
      1//3 -1//3 0 -1//3 0 0 q 0;
      1//3 1//3 1//3 0 0 0 0 0;
      -q/ζ₁ 0 0 0 0 1//3 -1//3 -1//3;
      0 -q*ζ₂ 0 0 -1//3 0 1//3 -1//3;
      0 0 -q 0 1//3 -1//3 0 -1//3;
      0 0 0 0 1//3 1//3 1//3 0
]
9*ζ₁*ζ₂*det(M)
M = Sym[
      
]

function main()
      function η(k₁,k₂)
            return 3+2(cos(k₁)+cos(k₂)+cos(k₁+k₂))
      end
      function βf(q)
            I = 0
            N= 500
            for m in 1:N
                 k₁ = 2π*m/N 
                 for n in 1:N
                        k₂ = 2π*n/N
                        I += log(abs(
                              η(k₁,k₂)*(q-q^(-1))
                              +2q^(-1)/3
                              +q^(-3)/9
                        ))/(2N^2)
                 end
            end
            return I
      end
      Q = 100
      F = zeros(Q) # free energy
      S = zeros(Q) # heat capacity
      β = range(0.01,0.25,Q)
      # β = range(1.07565,1.07575,Q)
      for i in 1:Q
            F[i] = -βf(exp(2*β[i]))/β[i]
            if i > 2
                  S[i] = -(β[i])^2*(
                        (F[i] - F[i-1])/(β[i]-β[i-1])
                        +(F[i-1] - F[i-2])/(β[i]-β[i-1])
                  )/2
            end
      end
      scatter(β,F)
      savefig("./統計力学特論/期末レポート/images/triangular_antiferro_Ising_f.png")
      scatter(β[3:Q],S[3:Q])
      savefig("./統計力学特論/期末レポート/images/triangular_antiferro_Ising_s.png")
end
main()