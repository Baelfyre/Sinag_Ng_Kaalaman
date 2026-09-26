export const PRODUCT = Object.freeze({
  name: "Sinag ng Kaalaman",
  journeyLabel: "Filipino-English Language Journey",
  levelLabel: "Grade School Level"
});

export const LANGUAGES = Object.freeze({
  en: "English",
  tl: "Tagalog",
  hil: "Hiligaynon"
});

export const LANGUAGE_PAIRS = Object.freeze([
  { id: "en-tl", from: "en", to: "tl", label: "English → Tagalog" },
  { id: "en-hil", from: "en", to: "hil", label: "English → Hiligaynon" },
  { id: "tl-hil", from: "tl", to: "hil", label: "Tagalog → Hiligaynon" },
  { id: "hil-en", from: "hil", to: "en", label: "Hiligaynon → English" }
]);

export const EXERCISE_STYLES = Object.freeze([
  { id: "mixed", label: "Mixed Practice (All Types)", icon: "mixedPractice" },
  { id: "choice", label: "Multiple Choice", icon: "multipleChoice" },
  { id: "spelling", label: "Spelling Studio", icon: "spellingStudio" },
  { id: "comprehension", label: "Comprehension", icon: "comprehension" }
]);

export const SESSION_MODES = Object.freeze([
  {
    id: "quick",
    label: "Quick Practice",
    questions: 5,
    description: "Focused daily review for a shorter session."
  },
  {
    id: "normal",
    label: "Normal Practice",
    questions: 10,
    description: "Self-paced questions blending recognition and active recall with supportive review."
  },
  {
    id: "check",
    label: "Periodic Progress Check",
    questions: 20,
    description: "Milestone assessment combining recognition and active spelling."
  },
  {
    id: "challenge",
    label: "Challenge Mode (Optional 90-second timer)",
    questions: 10,
    durationSeconds: 90,
    optional: true,
    description: "Lighthearted timed practice with no penalty and no letter grades."
  }
]);

export const PRIMARY_NAVIGATION = Object.freeze([
  { id: "home", label: "Home", icon: "home" },
  { id: "practice", label: "Practice", icon: "practice" },
  { id: "progress", label: "Progress", icon: "progress" },
  { id: "rewards", label: "Rewards", icon: "rewards" },
  { id: "parent", label: "Parent Progress", icon: "parentProgress" },
  { id: "settings", label: "Settings", icon: "settings" }
]);

export const STORAGE_KEYS = Object.freeze({
  progress: "sinag-progress-v1",
  settings: "sinag-settings-v1",
  profile: "sinag-profile-v1"
});
