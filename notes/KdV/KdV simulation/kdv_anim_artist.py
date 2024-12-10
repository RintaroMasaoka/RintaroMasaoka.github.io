from __future__ import print_function

import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation
# plt.rcParams["font.size"] = 18
# plt.tight_layout()

# Example of ArtistAnimation
# https://matplotlib.org/stable/gallery/animation/dynamic_image.html

def save_animation(x, t, u_tx, ymin, ymax, filename):
    fig, ax = plt.subplots()

    # common setting for plot
    ax.set_xlabel("$x$")
    ax.set_ylabel("$u(x)$")
    ax.set_ylim((ymin, ymax))

    artists = []  # list of plot
    for i in range(t.size):
        # Make i-th plot
        # ax.set_title("t = %f" % t[i])
        artist = ax.plot(x, u_tx[i, :], '-b')
        artist += [ax.text(0.05, 1.05, "t = %.2f" % t[i], transform=ax.transAxes)]
        artists.append(artist)

    # Make animation
    anim = animation.ArtistAnimation(fig, artists, interval=100, repeat=False)
    # plt.show()

    # Save animation
    anim.save(filename, writer="pillow")  # writer="pillow" or "imagemagick" for GIF
    print("saved as '{}'".format(filename))


def main():
    # Load results
    npz = np.load("kdv_solve_ivp.npz")
    print("npz.files =", npz.files)

    x = npz['x']
    t = npz['t']
    u_tx = npz['u_tx']
    print("x.shape =", x.shape)
    print("t.shape =", t.shape)
    print("u_tx.shape =", u_tx.shape)

    # make an animation
    print("Making animation...")
    save_animation(x, t, u_tx, ymin=-1.5, ymax=5.0, filename="kdv_solve_ivp.gif")
    # i=50
    # fig, ax = plt.subplots()
    # ax.plot(x, u_tx[i, :], '-b')
    # ax.text(0.05, 1.05, "t = %.2f" % t[i], transform=ax.transAxes)
    # ax.set_ylim(-1.5,5.0)
    # plt.savefig("kdv_2.png",dpi=200)


if __name__ == '__main__':
    main()