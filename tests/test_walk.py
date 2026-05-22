"""Static scene walker (v2).

Better parser: for each scene, extracts every `target:`/`then:`/`else:`
string AND every `type: "ending"`/`id: "..."` pair within the entire
scene block, regardless of nesting depth.
"""
import re, glob, sys, os
from collections import defaultdict

# Run from anywhere — resolve scene path relative to this file's parent.
HERE = os.path.dirname(os.path.abspath(__file__))
GAME_ROOT = os.path.dirname(HERE)
os.chdir(GAME_ROOT)


def find_scene_block(src, start):
    """Return (block_text, end_index) starting from a `{` at `start`."""
    assert src[start] == "{"
    depth = 0
    i = start
    while i < len(src):
        c = src[i]
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return src[start:i+1], i+1
        i += 1
    return src[start:], len(src)


scene_files = sorted(glob.glob("data/scenes/*.js"))
scenes = {}        # sid -> block text
graph = defaultdict(set)
ends_in = defaultdict(list)

for f in scene_files:
    with open(f) as fp:
        src = fp.read()
    for m in re.finditer(r"window\.SCENES\.(\w+)\s*=\s*\{", src):
        sid = m.group(1)
        brace_start = src.index("{", m.start())
        block, _ = find_scene_block(src, brace_start)
        scenes[sid] = block
        # All targets reachable from this scene
        for tm in re.finditer(r'\b(?:target|then|else):\s*"(\w+)"', block):
            graph[sid].add(tm.group(1))
        # Endings: type:"ending" with an id immediately following
        for em in re.finditer(r'type:\s*"ending"\s*,\s*id:\s*"(\w+)"', block):
            ends_in[sid].append(em.group(1))

print(f"Parsed {len(scenes)} scenes.")
print(f"Scenes that can reach others: {len(graph)}")
print(f"Scenes that contain an ending step: {len(ends_in)}")

# Reachability from entry point
ENTRY = "prologue_arrival"
seen = set()
stack = [ENTRY]
while stack:
    cur = stack.pop()
    if cur in seen: continue
    seen.add(cur)
    for nxt in graph[cur]:
        stack.append(nxt)

unreachable = set(scenes) - seen
if unreachable:
    print(f"\nUnreachable scenes ({len(unreachable)}):")
    for u in sorted(unreachable):
        print(f"  - {u}")
else:
    print("All scenes are reachable from prologue_arrival.")

# Endings reachable from entry
reachable_endings = set()
for sid in seen:
    for e in ends_in.get(sid, []):
        reachable_endings.add(e)
print(f"\nDistinct endings reachable: {len(reachable_endings)}")
for e in sorted(reachable_endings):
    print(f"  ✓ {e}")

# Verify every reachable scene can lead to at least one ending.
can_end = set(ends_in)
changed = True
while changed:
    changed = False
    for sid in scenes:
        if sid in can_end: continue
        if any(n in can_end for n in graph[sid]):
            can_end.add(sid)
            changed = True

dead_ends = seen - can_end
if dead_ends:
    print(f"\nReachable scenes that CANNOT reach an ending ({len(dead_ends)}):")
    for u in sorted(dead_ends):
        print(f"  - {u}")
    sys.exit(1)
else:
    print("\nEvery reachable scene can lead to an ending. ✓")

# Verify all 15 endings are reachable.
expected_endings = {
    "canonical","lust_mira","good_boy","kuger_breeding","broken_hero",
    "swap_familiar","reject_everything","paranoid_neet","nare_exploit",
    "doormat","speedrun","pampered","nare_yandere","rei_gambit","relic_obsession",
}
missing = expected_endings - reachable_endings
extra = reachable_endings - expected_endings
if missing:
    print(f"\n!! Missing endings (not reachable): {sorted(missing)}")
    sys.exit(2)
if extra:
    print(f"\n(Note) Extra endings registered but not in expected set: {sorted(extra)}")
print(f"\nAll {len(expected_endings)} expected endings are reachable. ✓")
