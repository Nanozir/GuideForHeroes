/* ============================================
   Save / Load — localStorage based
   ============================================
   Slot 0 is reserved as the "auto/quick save" slot
   used by the title screen's Continue button and
   the ending screen's Continue option.
*/

window.SaveSystem = (function () {
  const PREFIX = "gfh_save_";
  const SETTINGS_KEY = "gfh_settings";
  const MAX_SLOTS = 9;

  function listSaves() {
    const out = [];
    for (let i = 0; i < MAX_SLOTS; i++) {
      const raw = localStorage.getItem(PREFIX + i);
      if (!raw) { out.push(null); continue; }
      try {
        const parsed = JSON.parse(raw);
        const sceneId = parsed.snap && parsed.snap.sceneId;
        out.push({
          label: parsed.label || sceneId || "(unnamed)",
          timestamp: parsed.timestamp || "",
          snap: parsed.snap,
        });
      } catch (e) {
        out.push(null);
      }
    }
    return out;
  }

  function save(slot) {
    const snap = Engine.snapshot();
    if (!snap.sceneId) {
      console.warn("Nothing to save.");
      return false;
    }
    const data = {
      snap,
      label: snap.sceneId,
      timestamp: new Date().toLocaleString(),
    };
    localStorage.setItem(PREFIX + slot, JSON.stringify(data));
    return true;
  }

  function quickSave() {
    return save(0);
  }

  function load(slot) {
    const raw = localStorage.getItem(PREFIX + slot);
    if (!raw) return false;
    try {
      const data = JSON.parse(raw);
      UI.showGame();
      Engine.restore(data.snap);
      return true;
    } catch (e) {
      console.error("Failed to load save:", e);
      return false;
    }
  }

  function hasSave(slot) {
    return !!localStorage.getItem(PREFIX + slot);
  }

  function getQuickSave() {
    const raw = localStorage.getItem(PREFIX + 0);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
  }

  // ----- Settings persistence -----

  function loadSettings() {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
  }
  function saveSettings(settings) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }

  // ----- Endings tracking -----

  function getUnlockedEndings() {
    const raw = localStorage.getItem(window.ENDINGS_UNLOCKED_KEY);
    if (!raw) return {};
    try { return JSON.parse(raw); } catch { return {}; }
  }
  function unlockEnding(id) {
    const all = getUnlockedEndings();
    all[id] = { unlockedAt: new Date().toISOString() };
    localStorage.setItem(window.ENDINGS_UNLOCKED_KEY, JSON.stringify(all));
  }

  return {
    MAX_SLOTS,
    listSaves,
    save,
    quickSave,
    load,
    hasSave,
    getQuickSave,
    loadSettings,
    saveSettings,
    getUnlockedEndings,
    unlockEnding,
  };
})();
