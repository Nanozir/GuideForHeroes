/* ============================================
   VN Engine
   ============================================
   Step types supported in scenes:
   - { type: "say", char: "id", text: "...", emotion?: "expr", at?: "left|center|right" }
   - { type: "narration", text: "..." }
   - { type: "thought", text: "..." }            // Erdan's inner voice
   - { type: "system", text: "..." }             // System / status messages
   - { type: "bg", id: "location_id", fade?: 600 }
   - { type: "show", char: "id", at: "left|center|right", emotion?: "expr" }
   - { type: "hide", char: "id" | at: "..." }
   - { type: "cg", id: "asset_path" }
   - { type: "cg_hide" }
   - { type: "bgm", id: "track_id", fade?: 800 }
   - { type: "bgm_stop", fade?: 800 }
   - { type: "sfx", id: "sfx_id" }
   - { type: "flash" }
   - { type: "shake" }
   - { type: "fade", color: "black"|"white", duration?: 800 }
   - { type: "unfade", color: "black"|"white", duration?: 800 }
   - { type: "wait", ms: 600 }
   - { type: "set", flags: { mira_trust: +1, ... } }
   - { type: "if", flag: "name", op: ">=|>|=|<|<=|!=", value: N, then: "scene_id", else?: "scene_id" }
   - { type: "goto", target: "scene_id" }
   - { type: "choice", prompt?: "...", options: [{ text, target, flags?, requires? }] }
   - { type: "ending", id: "ending_id" }
*/

window.SCENES = window.SCENES || {};

window.Engine = (function () {
  const state = {
    currentScene: null,
    stepIndex: 0,
    flags: {},
    revealedNames: {},
    portraits: { left: null, center: null, right: null },
    bg: null,
    bgm: null,
    cg: null,
    backlog: [],
    isTyping: false,
    isWaitingForChoice: false,
    auto: false,
    skip: false,
    settings: {
      textSpeed: 40,    // chars per second multiplier (higher = faster)
      autoSpeed: 2000,  // ms after text completes before auto-advance
      bgmVolume: 0.6,
      sfxVolume: 0.8,
      showAffinity: false,
    },
  };

  let typeTimer = null;
  let autoTimer = null;
  let advanceLock = false;
  let historyStack = [];

  function init() {
    // Bind the dialogue box click for advance.
    const dialogueBox = document.getElementById("dialogue-box");
    dialogueBox.addEventListener("click", advanceFromInput);

    // Spacebar / Enter to advance, Esc to open menu, etc.
    document.addEventListener("keydown", (e) => {
      if (UI.isAnyModalOpen()) return;
      if (state.isWaitingForChoice) return;

      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        advanceFromInput();
      } else if (e.code === "Escape") {
        UI.openModal("settings-modal");
      } else if (e.code === "ControlLeft" || e.code === "ControlRight") {
        // Hold Ctrl to skip
        state.skip = true;
        if (!state.isWaitingForChoice) advanceFromInput();
      }
    });
    document.addEventListener("keyup", (e) => {
      if (e.code === "ControlLeft" || e.code === "ControlRight") {
        state.skip = false;
      }
    });
  }

  function reset() {
    clearTimers();
    state.flags = {};
    state.revealedNames = {};
    state.portraits = { left: null, center: null, right: null };
    state.bg = null;
    state.bgm = null;
    state.cg = null;
    state.backlog = [];
    state.isTyping = false;
    state.isWaitingForChoice = false;
    state.auto = false;
    state.skip = false;
    historyStack = [];
    UI.clearPortraits();
    UI.clearCG();
    UI.setBackground(null);
    UI.updateAffinityHUD(state.flags);
  }

  function startScene(sceneId) {
    if (!window.SCENES[sceneId]) {
      console.error("Scene not found:", sceneId);
      UI.systemMessage(`(Missing scene: ${sceneId} — story to be written)`);
      return;
    }
    state.currentScene = sceneId;
    state.stepIndex = 0;
    UI.updateAffinityHUD(state.flags);
    runStep();
  }

  function runStep() {
    if (state.isWaitingForChoice) return;
    advanceLock = false;
    const scene = window.SCENES[state.currentScene];
    if (!scene) return;

    if (state.stepIndex >= scene.steps.length) {
      // Scene ended without explicit goto/ending — fall through.
      console.warn("Scene ended without resolution:", state.currentScene);
      UI.systemMessage(`(End of scene "${state.currentScene}". The story continues elsewhere.)`);
      return;
    }

    const step = scene.steps[state.stepIndex];
    state.stepIndex++;

    handleStep(step);
  }

  function handleStep(step) {
    switch (step.type) {
      case "say":       return doSay(step);
      case "narration": return doNarration(step);
      case "thought":   return doThought(step);
      case "system":    return doSystem(step);
      case "bg":        return doBg(step);
      case "show":      return doShow(step);
      case "hide":      return doHide(step);
      case "cg":        return doCg(step);
      case "cg_hide":   return doCgHide(step);
      case "bgm":       return doBgm(step);
      case "bgm_stop":  return doBgmStop(step);
      case "sfx":       return doSfx(step);
      case "flash":     return doFlash(step);
      case "shake":     return doShake(step);
      case "fade":      return doFade(step);
      case "unfade":    return doUnfade(step);
      case "wait":      return doWait(step);
      case "set":       return doSet(step);
      case "if":        return doIf(step);
      case "goto":      return doGoto(step);
      case "choice":    return doChoice(step);
      case "ending":    return doEnding(step);
      case "reveal_name": return doRevealName(step);
      default:
        console.warn("Unknown step:", step);
        runStep();
    }
  }

  // ----- Step handlers -----

  function doSay(step) {
    historyStack.push(snapshot());
    const charDef = window.CHARACTERS[step.char] || { name: step.char, color: "#fff", portraits: {} };
    // Name reveal system: use revealed name, or "???" for non-exempt characters
    let displayName;
    if (state.revealedNames[step.char]) {
      displayName = state.revealedNames[step.char];
    } else if (charDef.revealExempt) {
      displayName = charDef.name;
    } else {
      displayName = "???";
    }
    if (step.at) {
      UI.showPortrait(step.at, step.char, step.emotion);
      // Dim other portraits
      ["left", "center", "right"].forEach(slot => {
        if (slot !== step.at) UI.dimPortrait(slot);
      });
      UI.undimPortrait(step.at);
    } else {
      // If a slot already shows this character, undim it; dim others.
      let foundSlot = null;
      for (const slot of ["left", "center", "right"]) {
        if (state.portraits[slot] && state.portraits[slot].char === step.char) {
          foundSlot = slot; break;
        }
      }
      if (foundSlot) {
        ["left","center","right"].forEach(s => s !== foundSlot && UI.dimPortrait(s));
        UI.undimPortrait(foundSlot);
        if (step.emotion) UI.showPortrait(foundSlot, step.char, step.emotion);
      }
    }
    typeText(displayName, step.text, "dialogue", { color: charDef.color });
    state.backlog.push({ kind: "say", speaker: displayName, text: step.text, color: charDef.color });
  }

  function doNarration(step) {
    historyStack.push(snapshot());
    typeText("", step.text, "narration");
    state.backlog.push({ kind: "narration", text: step.text });
  }

  function doThought(step) {
    historyStack.push(snapshot());
    typeText("", step.text, "thought");
    state.backlog.push({ kind: "thought", text: step.text });
  }

  function doSystem(step) {
    typeText("", step.text, "system");
    state.backlog.push({ kind: "system", text: step.text });
  }

  function doBg(step) {
    state.bg = step.id;
    UI.setBackground(step.id, step.fade);
    setTimeout(runStep, 0);
  }

  function doShow(step) {
    UI.showPortrait(step.at, step.char, step.emotion);
    state.portraits[step.at] = { char: step.char, emotion: step.emotion };
    setTimeout(runStep, 200);
  }

  function doHide(step) {
    if (step.at) {
      UI.hidePortrait(step.at);
      state.portraits[step.at] = null;
    } else if (step.char) {
      for (const slot of ["left", "center", "right"]) {
        if (state.portraits[slot] && state.portraits[slot].char === step.char) {
          UI.hidePortrait(slot);
          state.portraits[slot] = null;
        }
      }
    }
    setTimeout(runStep, 200);
  }

  function doCg(step) {
    state.cg = step.id;
    UI.showCG(step.id);
    setTimeout(runStep, 0);
  }
  function doCgHide() {
    state.cg = null;
    UI.clearCG();
    setTimeout(runStep, 0);
  }

  function doBgm(step) {
    state.bgm = step.id;
    Audio.playBGM(step.id, step.fade);
    setTimeout(runStep, 0);
  }
  function doBgmStop(step) {
    state.bgm = null;
    Audio.stopBGM(step.fade);
    setTimeout(runStep, 0);
  }
  function doSfx(step) {
    Audio.playSFX(step.id);
    setTimeout(runStep, 0);
  }

  function doFlash() {
    UI.flash();
    setTimeout(runStep, 350);
  }
  function doShake() {
    UI.shake();
    setTimeout(runStep, 360);
  }
  function doFade(step) {
    UI.fade(step.color || "black", step.duration || 800);
    setTimeout(runStep, (step.duration || 800) + 50);
  }
  function doUnfade(step) {
    UI.unfade(step.color || "black", step.duration || 800);
    setTimeout(runStep, (step.duration || 800) + 50);
  }
  function doWait(step) {
    setTimeout(runStep, step.ms || 600);
  }

  function doSet(step) {
    if (step.flags) {
      for (const k in step.flags) {
        const cur = state.flags[k] || 0;
        const v = step.flags[k];
        // If value is a number, add. Otherwise overwrite.
        if (typeof v === "number") state.flags[k] = cur + v;
        else state.flags[k] = v;
      }
    }
    UI.updateAffinityHUD(state.flags);
    setTimeout(runStep, 0);
  }

  function doIf(step) {
    const val = state.flags[step.flag] || 0;
    let result = false;
    switch (step.op) {
      case ">=": result = val >= step.value; break;
      case ">":  result = val >  step.value; break;
      case "=":
      case "==": result = val == step.value; break;
      case "<":  result = val <  step.value; break;
      case "<=": result = val <= step.value; break;
      case "!=": result = val != step.value; break;
      default:   result = !!val;
    }
    if (result) {
      jumpToScene(step.then);
    } else if (step.else) {
      jumpToScene(step.else);
    } else {
      setTimeout(runStep, 0);
    }
  }

  function doGoto(step) {
    jumpToScene(step.target);
  }

  function jumpToScene(sceneId) {
    if (!window.SCENES[sceneId]) {
      console.error("Goto target missing:", sceneId);
      UI.systemMessage(`(Missing scene: ${sceneId})`);
      return;
    }
    state.currentScene = sceneId;
    state.stepIndex = 0;
    setTimeout(runStep, 0);
  }

  function doChoice(step) {
    state.isWaitingForChoice = true;
    UI.hideDialogueIndicator();
    UI.showChoices(step.options.map(opt => {
      const visible = opt.requires ? checkRequires(opt.requires) : true;
      return { ...opt, visible };
    }), (chosenIndex) => {
      const opt = step.options[chosenIndex];
      state.backlog.push({ kind: "choice", text: `> ${opt.text}` });
      if (opt.flags) {
        for (const k in opt.flags) {
          const cur = state.flags[k] || 0;
          const v = opt.flags[k];
          if (typeof v === "number") state.flags[k] = cur + v;
          else state.flags[k] = v;
        }
      }
      UI.updateAffinityHUD(state.flags);
      state.isWaitingForChoice = false;
      UI.hideChoices();
      jumpToScene(opt.target);
    });
  }

  function checkRequires(req) {
    for (const k in req) {
      const need = req[k];
      const have = state.flags[k] || 0;
      if (typeof need === "number") {
        if (have < need) return false;
      } else if (have !== need) {
        return false;
      }
    }
    return true;
  }

  function doEnding(step) {
    SaveSystem.unlockEnding(step.id);
    const ending = window.ENDINGS[step.id];
    if (!ending) {
      UI.systemMessage(`(Unknown ending: ${step.id})`);
      return;
    }
    UI.showEnding(ending);
  }

  function doRevealName(step) {
    state.revealedNames[step.char] = step.name;
    setTimeout(runStep, 0);
  }

  // ----- Text typing -----

  function typeText(speaker, text, kind, opts = {}) {
    clearTypeTimer();
    state.isTyping = true;
    UI.hideDialogueIndicator();
    UI.setSpeaker(speaker, opts.color);
    UI.setDialogueKind(kind);

    const dialogueText = document.getElementById("dialogue-text");
    dialogueText.textContent = "";

    if (state.skip) {
      dialogueText.textContent = text;
      state.isTyping = false;
      onTextComplete();
      return;
    }

    const speed = state.settings.textSpeed; // chars/sec * factor
    const interval = Math.max(8, Math.round(1000 / Math.max(1, speed * 1.5)));
    let i = 0;

    typeTimer = setInterval(() => {
      if (!state.isTyping) {
        clearInterval(typeTimer);
        return;
      }
      dialogueText.textContent = text.substring(0, ++i);
      if (i >= text.length) {
        clearInterval(typeTimer);
        state.isTyping = false;
        onTextComplete();
      }
    }, interval);
  }

  function onTextComplete() {
    UI.showDialogueIndicator();
    if (state.auto || state.skip) {
      autoTimer = setTimeout(() => {
        if (state.auto || state.skip) advance();
      }, state.skip ? 50 : state.settings.autoSpeed);
    }
  }

  function advanceFromInput() {
    if (advanceLock) return;
    if (state.isWaitingForChoice) return;

    if (state.isTyping) {
      // Skip typing: complete immediately
      state.isTyping = false;
      clearTypeTimer();
      const dialogueText = document.getElementById("dialogue-text");
      const scene = window.SCENES[state.currentScene];
      const lastStep = scene.steps[state.stepIndex - 1];
      if (lastStep && lastStep.text) dialogueText.textContent = lastStep.text;
      onTextComplete();
      return;
    }
    advance();
  }

  function advance() {
    advanceLock = true;
    clearAutoTimer();
    runStep();
  }

  function clearTypeTimer() {
    if (typeTimer) { clearInterval(typeTimer); typeTimer = null; }
  }
  function clearAutoTimer() {
    if (autoTimer) { clearTimeout(autoTimer); autoTimer = null; }
  }
  function clearTimers() {
    clearTypeTimer();
    clearAutoTimer();
  }

  // ----- Public API -----

  function toggleAuto() {
    state.auto = !state.auto;
    UI.setControlActive("auto", state.auto);
    if (state.auto && !state.isTyping && !state.isWaitingForChoice) {
      autoTimer = setTimeout(advance, state.settings.autoSpeed);
    } else {
      clearAutoTimer();
    }
  }

  function goBack() {
    if (historyStack.length === 0) return;
    const prev = historyStack.pop();
    clearTimers();
    state.flags = { ...(prev.flags || {}) };
    state.revealedNames = { ...(prev.revealedNames || {}) };
    state.bg = prev.bg;
    UI.setBackground(prev.bg);
    UI.clearCG();
    if (prev.cg) { UI.showCG(prev.cg); state.cg = prev.cg; } else { state.cg = null; }
    if (prev.bgm) { Audio.playBGM(prev.bgm); state.bgm = prev.bgm; } else { state.bgm = null; }
    state.portraits = prev.portraits || { left: null, center: null, right: null };
    UI.clearPortraits();
    for (const slot in state.portraits) {
      const p = state.portraits[slot];
      if (p) UI.showPortrait(slot, p.char, p.emotion);
    }
    if (prev.backlog) {
      state.backlog = JSON.parse(JSON.stringify(prev.backlog));
    }
    UI.updateAffinityHUD(state.flags);
    state.isTyping = false;
    state.isWaitingForChoice = false;
    state.currentScene = prev.sceneId;
    state.stepIndex = Math.max(0, (prev.stepIndex || 1) - 1);
    runStep();
  }

  function snapshot() {
    return {
      sceneId: state.currentScene,
      stepIndex: state.stepIndex,
      flags: { ...state.flags },
      revealedNames: { ...state.revealedNames },
      portraits: JSON.parse(JSON.stringify(state.portraits)),
      bg: state.bg,
      bgm: state.bgm,
      cg: state.cg,
      backlog: JSON.parse(JSON.stringify(state.backlog)),
    };
  }

  function restore(snap) {
    reset();
    state.flags = { ...(snap.flags || {}) };
    state.revealedNames = { ...(snap.revealedNames || {}) };
    state.bg = snap.bg;
    if (snap.bg) UI.setBackground(snap.bg);
    if (snap.cg) { UI.showCG(snap.cg); state.cg = snap.cg; }
    if (snap.bgm) { Audio.playBGM(snap.bgm); state.bgm = snap.bgm; }
    state.portraits = snap.portraits || { left: null, center: null, right: null };
    for (const slot in state.portraits) {
      const p = state.portraits[slot];
      if (p) UI.showPortrait(slot, p.char, p.emotion);
    }
    if (snap.backlog) {
      state.backlog = JSON.parse(JSON.stringify(snap.backlog));
    }
    UI.updateAffinityHUD(state.flags);
    state.currentScene = snap.sceneId;
    // Re-run the previous step so the player sees it.
    state.stepIndex = Math.max(0, (snap.stepIndex || 1) - 1);
    runStep();
  }

  function getState() { return state; }

  function applySettings(s) {
    Object.assign(state.settings, s);
    Audio.setBgmVolume(state.settings.bgmVolume);
    Audio.setSfxVolume(state.settings.sfxVolume);
    UI.toggleAffinityHUD(state.settings.showAffinity);
  }

  return {
    init,
    reset,
    startScene,
    advance,
    toggleAuto,
    goBack,
    snapshot,
    restore,
    getState,
    applySettings,
  };
})();
