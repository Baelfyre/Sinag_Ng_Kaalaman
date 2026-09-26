const MATERIAL_SYMBOLS = Object.freeze({
  home: "home",
  practice: "menu_book",
  progress: "monitoring",
  rewards: "emoji_events",
  parentProgress: "family_restroom",
  settings: "settings",
  mixedPractice: "auto_awesome",
  multipleChoice: "quiz",
  spellingStudio: "spellcheck",
  comprehension: "lightbulb",
  keyboard: "keyboard",
  readAloud: "volume_up",
  pause: "pause",
  resume: "play_arrow",
  timer: "timer",
  check: "check",
  checkCircle: "check_circle",
  retry: "refresh",
  replay: "replay",
  locked: "lock",
  inProgress: "hourglass_top",
  close: "close",
  person: "person",
  external: "open_in_new",
  developer: "code",
  privacy: "privacy_tip",
  exportProgress: "download",
  importProgress: "upload_file",
  resetProgress: "restart_alt",
  back: "arrow_back",
  forward: "arrow_forward",
  allCategories: "auto_awesome",
  gettingStarted: "explore",
  consistency: "local_fire_department",
  languageExploration: "language",
  vocabularyMastery: "local_florist",
  spellingRecall: "spellcheck",
  progressMilestones: "workspace_premium",
  support: "volunteer_activism",
  noPaywall: "lock_open",
  fairness: "balance",
  notificationsOff: "notifications_off",
  childProtected: "child_care",
  noGamificationTie: "link_off",
  secondaryToLearning: "menu_book"
});

export function materialIcon(token, options = {}) {
  const symbol = MATERIAL_SYMBOLS[token] || token || "circle";
  const className = [
    "material-symbols-rounded",
    "app-icon",
    options.className || "",
    options.filled ? "is-filled" : ""
  ].filter(Boolean).join(" ");

  return `<span class="${className}" aria-hidden="true">${symbol}</span>`;
}

export function iconToken(token) {
  return MATERIAL_SYMBOLS[token] || null;
}

export { MATERIAL_SYMBOLS };
