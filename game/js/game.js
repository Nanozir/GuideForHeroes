/* ============================================
   Game entry point
   ============================================ */

window.Game = (function () {
  function init() {
    UI.init();
    Engine.init();

    // Apply any saved settings.
    const settings = SaveSystem.loadSettings();
    if (settings) {
      Engine.applySettings(settings);
      UI.applySettingsToInputs(Engine.getState().settings);
    } else {
      UI.applySettingsToInputs(Engine.getState().settings);
    }

    // Save settings whenever any settings input changes.
    document.querySelectorAll("#settings-modal input").forEach(input => {
      input.addEventListener("change", () => {
        SaveSystem.saveSettings(Engine.getState().settings);
      });
      input.addEventListener("input", () => {
        SaveSystem.saveSettings(Engine.getState().settings);
      });
    });

    // Title-screen "Continue" button: enabled only if Slot 0 exists.
    const continueBtn = document.querySelector("#title-screen [data-action='continue']");
    if (!SaveSystem.hasSave(0) && continueBtn) {
      continueBtn.disabled = true;
    }

    // Try title BGM (fails silently if no audio file).
    Audio.playBGM("title");
  }

  function handleTitleAction(action) {
    switch (action) {
      case "new-game": newGame(); break;
      case "continue": continueFromLastSave(); break;
      case "load":     UI.showSave("load"); break;
      case "gallery":  UI.showGallery(); break;
      case "settings": UI.openModal("settings-modal"); break;
      case "credits":  UI.openModal("credits-modal"); break;
    }
  }

  function newGame() {
    Engine.reset();
    UI.showGame();
    Engine.startScene("prologue_arrival");
  }

  function continueFromLastSave() {
    if (!SaveSystem.hasSave(0)) {
      // No quick save — try slot 1, then 2... fallback to new game.
      for (let i = 1; i < SaveSystem.MAX_SLOTS; i++) {
        if (SaveSystem.hasSave(i)) {
          UI.showGame();
          SaveSystem.load(i);
          return;
        }
      }
      newGame();
      return;
    }
    UI.showGame();
    SaveSystem.load(0);
  }

  function returnToTitle() {
    // Auto-save before returning.
    if (Engine.getState().currentScene) {
      SaveSystem.quickSave();
    }
    Audio.stopBGM();
    UI.clearPortraits();
    UI.clearCG();
    UI.setBackground(null);
    UI.showTitle();
    Audio.playBGM("title");

    // Re-enable Continue if save exists.
    const continueBtn = document.querySelector("#title-screen [data-action='continue']");
    if (continueBtn) continueBtn.disabled = !SaveSystem.hasSave(0);
  }

  // Auto-save every couple of minutes during play.
  setInterval(() => {
    const s = Engine.getState();
    if (s.currentScene && !s.isWaitingForChoice && document.getElementById("game-screen").classList.contains("active")) {
      SaveSystem.quickSave();
    }
  }, 120000);

  return { init, handleTitleAction, newGame, continueFromLastSave, returnToTitle };
})();

document.addEventListener("DOMContentLoaded", Game.init);
