# Tests

## test_walk.py — static scene graph verifier

Walks the scene definitions in `data/scenes/*.js` and verifies:

1. All 63 scenes are reachable from the entry point (`prologue_arrival`).
2. All 15 endings are reachable from the entry point.
3. Every reachable scene can lead to at least one ending (no dead-end paths).
4. Every `target:`/`then:`/`else:` reference resolves to a defined scene.

Run from the `game/` directory:

```bash
python3 tests/test_walk.py
```

## test_vn.py — live browser walk-through (Playwright)

Loads the game in headless Chromium and clicks through the dialogue, picking the first choice at every fork, asserting that the game reaches an ending without runtime errors.

Requires:
- `pip install playwright`
- `python3 -m playwright install chromium`
- `nss` and friends installed on the system
- A local server: `python3 -m http.server 8080` running in `game/`

Run from `game/`:

```bash
python3 tests/test_vn.py
```

The static walker (`test_walk.py`) is the primary CI check since it has no external dependencies. The browser test is for regression checks once art and music are added.
