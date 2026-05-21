/* ============================================
   Audio — placeholder hooks for Gemini's music
   ============================================
   To wire up real music later, drop files into:
     game/assets/audio/bgm/<id>.mp3
     game/assets/audio/sfx/<id>.mp3
   and either:
   - rely on the auto-resolved path, or
   - register them explicitly in window.BGM_TRACKS / SFX_TRACKS below.

   The engine calls Audio.playBGM("bgm_palace") etc.
   If the file doesn't exist, this gracefully no-ops and logs.
*/

window.BGM_TRACKS = {
  // Track IDs used by the scene scripts. Filenames are the suggested
  // names — Gemini can deliver them at these paths to "just work".
  // Each track has a `mood` so the music generator gets context.
  title:           { mood: "Bittersweet, hopeful, gentle piano with strings; main theme.",                 path: "assets/audio/bgm/title.mp3" },
  bgm_warp:        { mood: "Dissonant, swelling synth tunnel; brief.",                                     path: "assets/audio/bgm/warp.mp3" },
  bgm_palace:      { mood: "Stately, distant horns and strings, formal court.",                            path: "assets/audio/bgm/palace.mp3" },
  bgm_throne:      { mood: "Heavy strings, queenly authority, undercurrent of tension.",                   path: "assets/audio/bgm/throne.mp3" },
  bgm_room:        { mood: "Quiet, intimate, fingerpicked guitar / soft pads — Erdan's room.",             path: "assets/audio/bgm/room.mp3" },
  bgm_mira:        { mood: "Tender, melancholic; Mira's theme. Solo cello + soft chimes.",                 path: "assets/audio/bgm/mira.mp3" },
  bgm_hallway:     { mood: "Light, exploratory, woodwinds.",                                               path: "assets/audio/bgm/hallway.mp3" },
  bgm_dining:      { mood: "Warm, soft strings, slightly playful.",                                        path: "assets/audio/bgm/dining.mp3" },
  bgm_tense:       { mood: "Low strings, ticking percussion, rising unease.",                              path: "assets/audio/bgm/tense.mp3" },
  bgm_battle:      { mood: "Driving percussion, brass, dread; for the courtyard attack.",                  path: "assets/audio/bgm/battle.mp3" },
  bgm_recovery:    { mood: "Faint, drifting piano; convalescence.",                                        path: "assets/audio/bgm/recovery.mp3" },
  bgm_sanctum:     { mood: "Industrial, religious — pipe organ + clockwork.",                              path: "assets/audio/bgm/sanctum.mp3" },
  bgm_kuger:       { mood: "Choral, fanatical, slowly escalating.",                                        path: "assets/audio/bgm/kuger.mp3" },
  bgm_seraya:      { mood: "Ethereal, light vocals, hopeful; Seraya's theme.",                             path: "assets/audio/bgm/seraya.mp3" },
  bgm_chase:       { mood: "Frantic strings, fast pulse; sniper sequence.",                                path: "assets/audio/bgm/chase.mp3" },
  bgm_hallucination: { mood: "Dissonant, layered voices, time-stretched piano; past lives.",                path: "assets/audio/bgm/hallucination.mp3" },
  bgm_garden:      { mood: "Soft, breath-of-relief, harp + soft strings.",                                 path: "assets/audio/bgm/garden.mp3" },
  bgm_ball:        { mood: "Formal waltz with subtle dread under the melody.",                             path: "assets/audio/bgm/ball.mp3" },
  bgm_ending_good: { mood: "Bittersweet hopeful — the canonical ending theme.",                            path: "assets/audio/bgm/ending_good.mp3" },
  bgm_ending_bad:  { mood: "Quiet, defeated piano fade; bad-ending theme.",                                path: "assets/audio/bgm/ending_bad.mp3" },
};

window.SFX_TRACKS = {
  click:       { path: "assets/audio/sfx/click.mp3" },
  door:        { path: "assets/audio/sfx/door.mp3" },
  whoosh:      { path: "assets/audio/sfx/whoosh.mp3" },
  blade:       { path: "assets/audio/sfx/blade.mp3" },
  rifle:       { path: "assets/audio/sfx/rifle.mp3" },
  glass_break: { path: "assets/audio/sfx/glass_break.mp3" },
  heartbeat:   { path: "assets/audio/sfx/heartbeat.mp3" },
  chime:       { path: "assets/audio/sfx/chime.mp3" },
};

window.Audio = (function () {
  let bgmEl = null;
  let bgmId = null;
  let bgmVol = 0.6;
  let sfxVol = 0.8;
  const sfxCache = {};

  function ensureBgmEl() {
    if (!bgmEl) {
      bgmEl = document.createElement("audio");
      bgmEl.loop = true;
      bgmEl.volume = bgmVol;
      bgmEl.preload = "auto";
      document.body.appendChild(bgmEl);
    }
    return bgmEl;
  }

  function playBGM(id, fade = 800) {
    if (id === bgmId) return;
    const track = window.BGM_TRACKS[id];
    if (!track) {
      console.info("[audio] BGM not registered:", id);
      return;
    }
    const el = ensureBgmEl();
    fadeOut(el, fade, () => {
      el.src = track.path;
      el.volume = 0;
      el.play().then(() => {
        bgmId = id;
        fadeIn(el, fade, bgmVol);
      }).catch(err => {
        // Silent failure — file probably doesn't exist yet.
        console.info("[audio] BGM playback skipped (no file):", id);
      });
    });
  }

  function stopBGM(fade = 800) {
    if (!bgmEl) return;
    fadeOut(bgmEl, fade, () => {
      bgmEl.pause();
      bgmEl.src = "";
      bgmId = null;
    });
  }

  function playSFX(id) {
    const track = window.SFX_TRACKS[id];
    if (!track) {
      console.info("[audio] SFX not registered:", id);
      return;
    }
    let a = sfxCache[id];
    if (!a) {
      a = new Audio_(track.path);
      sfxCache[id] = a;
    }
    try {
      a.volume = sfxVol;
      a.currentTime = 0;
      a.play().catch(() => {});
    } catch (e) {
      // ignore
    }
  }

  // Helper: a real Audio constructor wrapper.
  function Audio_(src) {
    const a = document.createElement("audio");
    a.src = src;
    a.preload = "auto";
    return a;
  }

  function fadeIn(el, ms, target) {
    const start = performance.now();
    const startVol = el.volume;
    function step(now) {
      const t = Math.min(1, (now - start) / ms);
      el.volume = startVol + (target - startVol) * t;
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  function fadeOut(el, ms, done) {
    if (!el.src) { done && done(); return; }
    const start = performance.now();
    const startVol = el.volume;
    function step(now) {
      const t = Math.min(1, (now - start) / ms);
      el.volume = startVol * (1 - t);
      if (t < 1) requestAnimationFrame(step);
      else done && done();
    }
    requestAnimationFrame(step);
  }

  function setBgmVolume(v) {
    bgmVol = v;
    if (bgmEl) bgmEl.volume = v;
  }
  function setSfxVolume(v) {
    sfxVol = v;
  }

  return { playBGM, stopBGM, playSFX, setBgmVolume, setSfxVolume };
})();
