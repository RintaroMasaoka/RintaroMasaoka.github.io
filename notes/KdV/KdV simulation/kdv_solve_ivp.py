from __future__ import print_function

import numpy as np
from scipy.integrate import solve_ivp
from differential import make_differential_ops


# KdV equation
# u_{t} = -6 u u_{x} - u_{xxx}
def f_kdv(t, u, df1, df3):
    u_x = df1.dot(u)
    u_xxx = df3.dot(u)
    return -6.0 * u * u_x - u_xxx


def main():
    # x mesh
    nx = 1000
    x_max = 100.0
    x = np.linspace(0, x_max, nx, endpoint=False)
    dx = x[1] - x[0]
    print("dx =", dx)

    # initial condition
    # u0 = np.sin(x * (2.0 * np.pi / x_max))
    u0 = 1/(50*(x/x_max-1/2)**2+0.3)
    # differential operators
    op_df1, _, op_df3 = make_differential_ops(nx, dx)

    print("Solving equation...")
    t_max = 15.0
    sol = solve_ivp(f_kdv, (0, t_max), u0, dense_output=True, args=(op_df1, op_df3), rtol=1e-8)
    print(sol.message)
    print(" Number of time steps :", sol.t.size)
    print(" Minimam time step    :", min(np.diff(sol.t)))
    print(" Maximum time step    :", max(np.diff(sol.t)))

    # t mesh
    nt = 151
    t = np.linspace(0, t_max, nt)
    dt = t[1] - t[0]
    print("dt =", dt)

    # get u(t, x)
    u_xt = sol.sol(t)  # u(x, t)
    u_tx = u_xt.T  # u(t, x)
    print("shape of u(t, x) :", u_tx.shape)

    # Save results
    np.savez("kdv_solve_ivp", x=x, t=t, u_tx=u_tx)


if __name__ == '__main__':
    main()