export const REWARD_CATEGORIES = Object.freeze({
  "getting-started": { label: "Getting Started", supportLabel: "Unang Hakbang", icon: "gettingStarted" },
  consistency: { label: "Practice & Consistency", supportLabel: "Kasipagan", icon: "consistency" },
  exploration: { label: "Language Exploration", supportLabel: "Pagtuklas ng Wika", icon: "languageExploration" },
  mastery: { label: "Vocabulary & Mastery", supportLabel: "Bokabularyo", icon: "vocabularyMastery" },
  spelling: { label: "Spelling & Recall", supportLabel: "Baybay at Pagsulat", icon: "spellingRecall" },
  milestones: { label: "Progress & Milestones", supportLabel: "Liwanag ng Dunong", icon: "progressMilestones" }
});

export const ACHIEVEMENTS = Object.freeze([
  { id: "first-steps", categoryId: "getting-started", name: "First Steps", tagline: "Unang Hakbang", art: "assets/badges/first_steps_sunrise.png" },
  { id: "first-ray", categoryId: "getting-started", name: "First Ray", tagline: "Unang Sinag", art: "assets/badges/first_ray_sunrise.png" },
  { id: "curiosity-seed", categoryId: "getting-started", name: "Curiosity Seed", tagline: "Binhi ng Dunong", art: "assets/badges/curiosity_seed_growth.png" },
  { id: "first-check", categoryId: "getting-started", name: "Check Milestone", tagline: "Unang Pagsusuri", art: "assets/badges/check_milestone.png" },

  { id: "streak-3", categoryId: "consistency", name: "3-Day Spark", tagline: "Tatlumpung Sinag", art: "assets/badges/3_day_spark_achievement.png" },
  { id: "steady-sprout", categoryId: "consistency", name: "Steady Sprout", tagline: "Matiyagang Usbong", art: "assets/badges/steady_sprout_growth.png" },
  { id: "sessions-10", categoryId: "consistency", name: "Dedicated Learner", tagline: "Masigasig na Mag-aaral", art: "assets/badges/dedicated_learner.png" },
  { id: "streak-7", categoryId: "consistency", name: "Weekly Radiance", tagline: "Lingguhang Liwanag", art: "assets/badges/weekly_radiance_sun.png" },

  { id: "explorer-en-tl", categoryId: "exploration", name: "Tagalog Trailblazer", tagline: "Tuklas Tagalog", art: "assets/badges/tagalog_trailblazer.png" },
  { id: "explorer-en-hil", categoryId: "exploration", name: "Hiligaynon Harmony", tagline: "Himig Hiligaynon", art: "assets/badges/hiligaynon_harmony_sunrise.png" },
  { id: "explorer-tl-hil", categoryId: "exploration", name: "Island Bridge", tagline: "Tulay ng Wika", art: "assets/badges/island_bridge.png" },
  { id: "explorer-hil-en", categoryId: "exploration", name: "Western Visayas Star", tagline: "Tala ng Kanluran", art: "assets/badges/western_visayas_star.png" },
  { id: "all-paths", categoryId: "exploration", name: "Quad-Language Adventurer", tagline: "Apat na Daan", art: "assets/badges/quad_language_adventurer.png" },

  { id: "mastery-10", categoryId: "mastery", name: "Budding Scholar", tagline: "Uusbong na Iskolar", art: "assets/badges/budding_scholar.png" },
  { id: "word-growth", categoryId: "mastery", name: "Deep Roots", tagline: "Malalim na Ugat", art: "assets/badges/deep_roots.png" },
  { id: "mastery-25", categoryId: "mastery", name: "Knowledge Bloom", tagline: "Bukas na Aklat", art: "assets/badges/word_growth_learning.png" },
  { id: "category-master", categoryId: "mastery", name: "Domain Champion", tagline: "Kampeon sa Kategorya", art: "assets/badges/category_master_sunburst.png" },

  { id: "spelling-starter", categoryId: "spelling", name: "Letter Pioneer", tagline: "Unang Titik", art: "assets/badges/spelling_starter.png" },
  { id: "spelling-sprout", categoryId: "spelling", name: "Word Builder", tagline: "Tagabuo ng Salita", art: "assets/badges/word_builder.png" },
  { id: "spelling-star", categoryId: "spelling", name: "Orthography Star", tagline: "Tala ng Baybay", art: "assets/badges/spelling_star.png" },
  { id: "spelling-retry", categoryId: "spelling", name: "Correction Master", tagline: "Galing sa Pagwawasto", art: "assets/badges/spelling_sprout_sun.png" },

  { id: "improvement-star", categoryId: "milestones", name: "Rising Sun", tagline: "Sumisikat na Araw", art: "assets/badges/improvement_star.png" },
  { id: "progress-climber", categoryId: "milestones", name: "Steady Climber", tagline: "Matiyagang Pantaas", art: "assets/badges/progress_climber_achievement.png" },
  { id: "practice-pays-off", categoryId: "milestones", name: "Persistence Gold", tagline: "Gintong Sikap", art: "assets/badges/practice_pays_off.png" },
  { id: "learning-light", categoryId: "milestones", name: "Sinag Luminary", tagline: "Tunay na Sinag", art: "assets/badges/learning_light.png" }
]);

export function achievementById(id) {
  return ACHIEVEMENTS.find((achievement) => achievement.id === id) || null;
}
