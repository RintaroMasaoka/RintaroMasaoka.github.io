# Use your download

Each package ZIP contains the selected package and every required shared skill
package, with complete manifests, instructions, references, scripts, and assets.
The collection ZIP contains every published package. Shared providers appear
once per archive. The download never depends on the author's private skill stock.

## Install in your project

Extract the whole ZIP, retaining the `skill-shelf/` directory structure. Use
Python 3.11 or later and the host application you intend to use.

For Codex:

```sh
python3 /path/to/skill-shelf/install.py --host codex --project /path/to/your-project
```

For Claude Code:

```sh
python3 /path/to/skill-shelf/install.py --host claude --project /path/to/your-project
```

The installer validates the pinned files and required dependency closure, then
installs and enables the complete bundle in the specified project. It verifies
namespaced skill discovery before reporting success. It preserves unrelated
project settings and does not enable the packages globally. The installer saves
a complete snapshot under `.skill-shelf/` in the project; the project marketplace
uses that snapshot. A project-owned receipt pins the original bundle lock and
expected skill identities for later verification. Identical shared packages use
the same installed package identity, so separate downloads can coexist without
activating duplicate providers. Their package containers are independent of
either consuming bundle snapshot.

Use `--codex-bin /path/to/codex` or `--claude-bin /path/to/claude` when the host
executable is not discoverable automatically. The Codex route requires the
plugin-enabled app-server API. The Claude route requires project-scoped plugin
marketplace and installation support. Unsupported hosts receive an actionable
error; they are not treated as successfully installed. A conflicting package version or an activation from an unrelated marketplace
is rejected before installation changes. Identical shared providers installed
by this installer are reused automatically.

## Inspect or verify

```sh
python3 /path/to/skill-shelf/install.py --check
python3 /path/to/skill-shelf/install.py --host codex --project /path/to/your-project --verify
```

For later checks, you can run `python3 install.py --verify --host codex --project
/path/to/your-project` from the installed snapshot inside `.skill-shelf/`.
Use `--host claude` for Claude Code. The original extracted download is not
needed after successful installation.

`bundle.json` records the requested roots, provider-first installation order,
package versions, and file hashes. A missing required package, incompatible
version, or changed pinned file blocks installation. There is no separate
manual hunt for shared skill packages.

Optional enhancements and referrals to tasks outside a package's scope are
recorded in `skill-dependencies.json`; their stated local behavior applies when
the other package is absent. They are not advertised as required bundled steps.

The bundle supplies skill instructions and their own resources. Task inputs and
runtime prerequisites, such as a TeX renderer or Manim, are documented by the
individual skills and must be available for those tasks.
