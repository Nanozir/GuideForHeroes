/* ============================================
   UI controller — DOM manipulation only
   ============================================ */

window.UI = (function () {
  const elements = {};
  let openModalId = null;
  let backlogSearchHandler = null;

  function init() {
    elements.titleScreen   = document.getElementById("title-screen");
    elements.gameScreen    = document.getElementById("game-screen");
    elements.bgLayer       = document.getElementById("bg-layer");
    elements.cgLayer       = document.getElementById("cg-layer");
    elements.effectLayer   = document.getElementById("effect-layer");
    elements.dialogueBox   = document.getElementById("dialogue-box");
    elements.speakerName   = document.getElementById("speaker-name");
    elements.dialogueText  = document.getElementById("dialogue-text");
    elements.dialogueInd   = document.getElementById("dialogue-indicator");
    elements.choiceMenu    = document.getElementById("choice-menu");
    elements.affinityHUD   = document.getElementById("affinity-hud");

    bindControlBar();
    bindTitleMenu();
    bindModals();
    bindSettings();
  }

  function bindTitleMenu() {
    document.querySelectorAll("#title-screen [data-action]").forEach(btn => {
      btn.addEventListener("click", () => {
        const action = btn.dataset.action;
        Game.handleTitleAction(action);
      });
    });
  }

  function bindControlBar() {
    document.querySelectorAll(".control-bar [data-action]").forEach(btn => {
      btn.addEventListener("click", () => {
        const a = btn.dataset.action;
        switch (a) {
          case "auto":     Engine.toggleAuto(); break;
          case "skip":     toggleSkip(); break;
          case "back":     Engine.goBack(); break;
          case "backlog":  showBacklog(); break;
          case "save":     showSave("save"); break;
          case "load":     showSave("load"); break;
          case "settings": openModal("settings-modal"); break;
          case "title":    Game.returnToTitle(); break;
        }
      });
    });
  }

  function bindModals() {
    document.querySelectorAll(".modal").forEach(modal => {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
      });
    });
    document.querySelectorAll("[data-action='close-modal']").forEach(btn => {
      btn.addEventListener("click", closeModal);
    });
    document.querySelectorAll("[data-action='ending-title']").forEach(btn => {
      btn.addEventListener("click", () => { closeModal(); Game.returnToTitle(); });
    });
    document.querySelectorAll("[data-action='ending-continue']").forEach(btn => {
      btn.addEventListener("click", () => {
        closeModal();
        Game.continueFromLastSave();
      });
    });
  }

  function bindSettings() {
    const ts = document.getElementById("text-speed");
    const as = document.getElementById("auto-speed");
    const bv = document.getElementById("bgm-volume");
    const sv = document.getElementById("sfx-volume");
    const aff = document.getElementById("show-affinity");

    ts.addEventListener("input", () => Engine.applySettings({ textSpeed: +ts.value }));
    as.addEventListener("input", () => Engine.applySettings({ autoSpeed: +as.value }));
    bv.addEventListener("input", () => Engine.applySettings({ bgmVolume: bv.value / 100 }));
    sv.addEventListener("input", () => Engine.applySettings({ sfxVolume: sv.value / 100 }));
    aff.addEventListener("change", () => Engine.applySettings({ showAffinity: aff.checked }));
  }

  // ----- Screens -----

  function showTitle() {
    elements.titleScreen.classList.add("active");
    elements.gameScreen.classList.remove("active");
  }
  function showGame() {
    elements.titleScreen.classList.remove("active");
    elements.gameScreen.classList.add("active");
  }

  // ----- Background / CG / portraits -----

  function setBackground(id, fade = 600) {
    if (!id) {
      elements.bgLayer.style.background = "linear-gradient(180deg, #0a0612, #1a1224)";
      elements.bgLayer.style.backgroundImage = "";
      return;
    }
    const loc = window.LOCATIONS[id];
    if (!loc) {
      console.warn("Location not found:", id);
      return;
    }
    elements.bgLayer.classList.add("fading");
    setTimeout(() => {
      if (loc.image) {
        elements.bgLayer.style.background = `url(${loc.image}) center/cover no-repeat`;
      } else {
        elements.bgLayer.style.cssText = loc.style + " transition: opacity 600ms ease;";
      }
      elements.bgLayer.classList.remove("fading");
    }, fade / 2);
  }

  function showCG(path) {
    elements.cgLayer.style.backgroundImage = `url(${path})`;
    elements.cgLayer.classList.add("show");
  }
  function clearCG() {
    elements.cgLayer.classList.remove("show");
    setTimeout(() => { elements.cgLayer.style.backgroundImage = ""; }, 500);
  }

  function showPortrait(slot, charId, emotion) {
    const slotEl = document.querySelector(`.portrait-slot[data-slot="${slot}"]`);
    if (!slotEl) return;
    const charDef = window.CHARACTERS[charId];
    if (!charDef) return;

    const portraitPath = charDef.portraits && (charDef.portraits[emotion] || charDef.portraits.neutral);

    if (portraitPath) {
      slotEl.classList.remove("placeholder");
      slotEl.style.backgroundImage = `url(${portraitPath})`;
      slotEl.textContent = "";
    } else {
      // Placeholder: name label
      slotEl.classList.add("placeholder");
      slotEl.style.backgroundImage = "";
      slotEl.textContent = charDef.name + (emotion ? ` · ${emotion}` : "");
    }
    slotEl.classList.add("active");
    Engine.getState().portraits[slot] = { char: charId, emotion };
  }

  function hidePortrait(slot) {
    const slotEl = document.querySelector(`.portrait-slot[data-slot="${slot}"]`);
    if (!slotEl) return;
    slotEl.classList.remove("active");
    setTimeout(() => {
      slotEl.style.backgroundImage = "";
      slotEl.textContent = "";
      slotEl.classList.remove("placeholder", "dim");
    }, 380);
  }

  function dimPortrait(slot) {
    const el = document.querySelector(`.portrait-slot[data-slot="${slot}"]`);
    if (el && el.classList.contains("active")) el.classList.add("dim");
  }
  function undimPortrait(slot) {
    const el = document.querySelector(`.portrait-slot[data-slot="${slot}"]`);
    if (el) el.classList.remove("dim");
  }
  function clearPortraits() {
    ["left", "center", "right"].forEach(s => hidePortrait(s));
  }

  // ----- Dialogue -----

  function setSpeaker(name, color) {
    if (!name) {
      elements.speakerName.classList.remove("show");
      elements.speakerName.textContent = "";
    } else {
      elements.speakerName.classList.add("show");
      elements.speakerName.textContent = name;
      if (color) elements.speakerName.style.color = color;
      else elements.speakerName.style.color = "";
    }
  }

  function setDialogueKind(kind) {
    elements.dialogueText.className = "dialogue-text";
    if (kind === "narration" || kind === "thought" || kind === "system") {
      elements.dialogueText.classList.add(kind);
    }
  }

  function showDialogueIndicator() {
    elements.dialogueInd.classList.add("show");
  }
  function hideDialogueIndicator() {
    elements.dialogueInd.classList.remove("show");
  }

  function systemMessage(text) {
    setSpeaker("");
    setDialogueKind("system");
    elements.dialogueText.textContent = text;
    showDialogueIndicator();
  }

  // ----- Choices -----

  function showChoices(options, callback) {
    elements.choiceMenu.innerHTML = "";
    options.forEach((opt, i) => {
      if (!opt.visible) return;
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.textContent = opt.text;
      if (opt.tag) {
        const tag = document.createElement("span");
        tag.className = "choice-tag";
        tag.textContent = opt.tag;
        btn.appendChild(tag);
      }
      btn.addEventListener("click", () => callback(i));
      elements.choiceMenu.appendChild(btn);
    });
    elements.choiceMenu.classList.remove("hidden");
  }
  function hideChoices() {
    elements.choiceMenu.classList.add("hidden");
    elements.choiceMenu.innerHTML = "";
  }

  // ----- Effects -----

  function flash() {
    const f = document.createElement("div");
    f.className = "effect-flash";
    elements.effectLayer.appendChild(f);
    setTimeout(() => f.remove(), 700);
  }
  function shake() {
    elements.gameScreen.classList.add("shake");
    setTimeout(() => elements.gameScreen.classList.remove("shake"), 400);
  }
  function fade(color = "black", duration = 800) {
    const f = document.createElement("div");
    f.className = "effect-fade-" + color;
    f.style.transitionDuration = duration + "ms";
    elements.effectLayer.appendChild(f);
    requestAnimationFrame(() => f.classList.add("active"));
    setTimeout(() => { f.dataset.persist = "1"; }, duration);
  }
  function unfade(color = "black", duration = 800) {
    const fades = elements.effectLayer.querySelectorAll(".effect-fade-" + color);
    fades.forEach(f => {
      f.style.transitionDuration = duration + "ms";
      f.classList.remove("active");
      setTimeout(() => f.remove(), duration + 50);
    });
  }

  // ----- Modals -----

  function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    if (openModalId) closeModal();
    modal.classList.remove("hidden");
    openModalId = id;
  }
  function closeModal() {
    if (!openModalId) return;
    const modal = document.getElementById(openModalId);
    if (modal) modal.classList.add("hidden");
    openModalId = null;
  }
  function isAnyModalOpen() { return !!openModalId; }

  // ----- Save / Load UI -----

  function showSave(mode) {
    const modal = document.getElementById("save-modal");
    const title = document.getElementById("save-modal-title");
    const slots = document.getElementById("save-slots");

    title.textContent = mode === "save" ? "Save" : "Load";
    slots.innerHTML = "";

    const saves = SaveSystem.listSaves();
    for (let i = 0; i < SaveSystem.MAX_SLOTS; i++) {
      const save = saves[i];
      const slot = document.createElement("div");
      slot.className = "save-slot" + (save ? "" : " empty");

      const displayName = save ? save.name : "— Empty —";
      const sceneLabel = save ? save.label : "";

      let headerHtml = `<div class="slot-header"><span class="slot-num">Slot ${i + 1}${i === 0 ? " (Quick)" : ""}</span>`;
      if (save && mode === "save") {
        headerHtml += `<button class="rename-btn" data-slot="${i}">Rename</button>`;
      }
      headerHtml += `</div>`;

      slot.innerHTML = `
        ${headerHtml}
        <div class="slot-name">${displayName}</div>
        <div class="slot-scene">${sceneLabel}</div>
        <div class="slot-time">${save ? save.timestamp : ""}</div>
      `;

      const renameBtn = slot.querySelector(".rename-btn");
      if (renameBtn) {
        renameBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          const newName = window.prompt("Rename save:", save.name || "");
          if (newName !== null && newName.trim() !== "") {
            SaveSystem.renameSave(i, newName.trim());
            showSave(mode);
          }
        });
      }

      slot.addEventListener("click", () => {
        if (mode === "save") {
          const defaultName = Engine.getState().currentScene || "Save";
          const userName = window.prompt("Name this save:", defaultName);
          if (userName === null) return;
          SaveSystem.save(i, userName.trim() || defaultName);
          closeModal();
        } else {
          if (save) {
            SaveSystem.load(i);
            closeModal();
          }
        }
      });
      slots.appendChild(slot);
    }

    openModal("save-modal");
  }

  // ----- Backlog -----

  function showBacklog() {
    const entries = document.getElementById("backlog-entries");
    const searchInput = document.getElementById("backlog-search");
    entries.innerHTML = "";
    searchInput.value = "";

    const log = Engine.getState().backlog || [];
    const entryElements = [];

    log.slice(-200).forEach(entry => {
      const div = document.createElement("div");
      div.className = "backlog-entry " + (entry.kind || "");
      if (entry.speaker) {
        const span = document.createElement("span");
        span.className = "speaker";
        span.style.color = entry.color || "";
        span.textContent = entry.speaker + ":";
        div.appendChild(span);
      }
      const text = document.createElement("span");
      text.textContent = entry.text;
      div.appendChild(text);
      entries.appendChild(div);
      entryElements.push(div);
    });

    if (backlogSearchHandler) {
      searchInput.removeEventListener("input", backlogSearchHandler);
    }
    backlogSearchHandler = function onSearch() {
      const query = searchInput.value.toLowerCase();
      entryElements.forEach(el => {
        const content = el.textContent.toLowerCase();
        el.style.display = content.includes(query) ? "" : "none";
      });
    };
    searchInput.addEventListener("input", backlogSearchHandler);

    entries.scrollTop = entries.scrollHeight;
    openModal("backlog-modal");
  }

  // ----- Endings gallery -----

  function showGallery() {
    const wrap = document.getElementById("gallery-entries");
    wrap.innerHTML = "";
    const unlocked = SaveSystem.getUnlockedEndings();
    const all = window.ENDINGS;
    const sorted = Object.entries(all).sort((a, b) => a[1].num - b[1].num);
    for (const [id, e] of sorted) {
      const has = unlocked[id];
      const div = document.createElement("div");
      div.className = "gallery-entry" + (has ? "" : " locked");
      div.innerHTML = `
        <div class="ending-num">Ending ${e.num.toString().padStart(2, "0")}</div>
        <div class="ending-name">${has ? e.name : "???"}</div>
        <div class="ending-desc">${has ? e.blurb : "— locked —"}</div>
      `;
      wrap.appendChild(div);
    }
    openModal("gallery-modal");
  }

  // ----- Ending screen -----

  function showEnding(ending) {
    document.getElementById("ending-title").textContent = `Ending ${ending.num.toString().padStart(2, "0")} — ${ending.name}`;
    document.getElementById("ending-text").textContent = ending.text;
    openModal("ending-modal");
  }

  // ----- Misc -----

  function setControlActive(action, active) {
    const btn = document.querySelector(`.control-bar [data-action="${action}"]`);
    if (btn) btn.classList.toggle("active", !!active);
  }

  function toggleSkip() {
    const state = Engine.getState();
    state.skip = !state.skip;
    setControlActive("skip", state.skip);
    if (state.skip && !state.isWaitingForChoice) Engine.advance();
  }

  function toggleAffinityHUD(show) {
    elements.affinityHUD.classList.toggle("hidden", !show);
  }

  function updateAffinityHUD(flags) {
    if (elements.affinityHUD.classList.contains("hidden")) return;
    const interesting = [
      ["mira_trust",   "Mira"],
      ["seraya_trust", "Seraya"],
      ["night_bond",   "Night"],
      ["nare_bond",    "Nare"],
      ["queen_favor",  "Queen"],
      ["paranoia",     "Paranoia"],
      ["lust",         "Id"],
    ];
    let html = "";
    interesting.forEach(([k, label]) => {
      const v = flags[k] || 0;
      const cls = v > 0 ? "pos" : (v < 0 ? "neg" : "zero");
      const sign = v > 0 ? "+" : "";
      html += `<div class="aff-row"><span class="name">${label}</span><span class="val ${cls}">${sign}${v}</span></div>`;
    });
    elements.affinityHUD.innerHTML = html;
  }

  function applySettingsToInputs(settings) {
    document.getElementById("text-speed").value  = settings.textSpeed;
    document.getElementById("auto-speed").value  = settings.autoSpeed;
    document.getElementById("bgm-volume").value  = settings.bgmVolume * 100;
    document.getElementById("sfx-volume").value  = settings.sfxVolume * 100;
    document.getElementById("show-affinity").checked = !!settings.showAffinity;
  }

  return {
    init,
    showTitle, showGame,
    setBackground,
    showCG, clearCG,
    showPortrait, hidePortrait, dimPortrait, undimPortrait, clearPortraits,
    setSpeaker, setDialogueKind,
    showDialogueIndicator, hideDialogueIndicator,
    systemMessage,
    showChoices, hideChoices,
    flash, shake, fade, unfade,
    openModal, closeModal, isAnyModalOpen,
    showSave, showBacklog, showGallery, showEnding,
    setControlActive,
    toggleAffinityHUD, updateAffinityHUD,
    applySettingsToInputs,
  };
})();
