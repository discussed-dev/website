# Source

- Repository: https://github.com/Devesh-Shirsath/spotkit
- Commit: f9b6a611e14c68a88fae44b4c67777a25b9c1d2c ("IconKit illustrations: atom icon")
- Commit date: 2026-10-08
- License: MIT (see `LICENSE`)
- Installed: 2026-11-25, project-level only

## Copied

`SKILL.md`, `SPEC.md`, `LICENSE`, `check.py`, `build.py`, `references/`, `assets/illustration.css`, `examples/`.

## Left out

- `site/` (the project website, including `site/devesh.png` and `site/og.png`, the only PNGs in the repository)
- `.git`
- `icons.py`: `build.py` imports `PHOSPHOR` from it, so the copied `build.py` does not run here. Icon paths come from `references/icons.md` instead.
- `flatten.py`
- `AGENTS.md`, `README.md`, `CITATION.cff`, `.gitignore`, `vercel.json`

`python3 check.py --docs` also needs `build.py` and therefore `icons.py`; linting a single SVG (`python3 check.py file.svg`) works.

## Known issue

Upstream issue #4: `check.py` reads `width="100%"` as 100, so a full-canvas background rect written with percentages passes the check. Look for full-canvas rects by hand.
