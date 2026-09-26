import {
  EXERCISE_STYLES,
  LANGUAGE_PAIRS,
  PRIMARY_NAVIGATION,
  PRODUCT,
  SESSION_MODES
} from "./data/app-config.js";
import { ACHIEVEMENTS, REWARD_CATEGORIES } from "./data/achievements.js";
import { materialIcon } from "./presentation/icons.js";

const app = document.querySelector("#app");

const state = {
  view: "home",
  languagePair: null,
  exerciseStyle: "mixed"
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function navButton(item) {
  const active = state.view === item.id;
  return `
    <button class="nav-button ${active ? "active" : ""}" type="button" data-view="${item.id}" aria-current="${active ? "page" : "false"}">
      ${materialIcon(item.icon, { filled: active })}
      <span>${item.label}</span>
    </button>`;
}

function renderHeader() {
  return `
    <header class="site-header">
      <div class="site-shell header-inner">
        <button class="brand" type="button" data-view="home" aria-label="Go to Home">
          <img src="assets/branding/sinag-ng-kaalaman-logo.webp" alt="" width="54" height="54">
          <span class="brand-copy">
            <strong>${PRODUCT.name}</strong>
            <span>${PRODUCT.journeyLabel} · ${PRODUCT.levelLabel}</span>
          </span>
        </button>
        <nav class="primary-nav" aria-label="Primary navigation">
          ${PRIMARY_NAVIGATION.map(navButton).join("")}
        </nav>
      </div>
    </header>`;
}

function renderHome() {
  return `
    <section class="hero">
      <div>
        <div class="eyebrow">${materialIcon("mixedPractice")} ${PRODUCT.journeyLabel}</div>
        <h1>Learn words through context, practice, and understanding.</h1>
        <p>Explore English, Tagalog, and Hiligaynon through supportive activities that explain mistakes, reinforce difficult concepts, and let every learner move at their own pace.</p>
        <div class="actions">
          <button class="btn btn-primary" type="button" data-view="practice">${materialIcon("practice")} Start Practice</button>
          <button class="btn btn-gold" type="button" data-action="progress-check">${materialIcon("progressMilestones")} Take Progress Check</button>
        </div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <img class="hero-logo" src="assets/branding/sinag-ng-kaalaman-logo.webp" alt="">
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <div>
          <h2>Choose a language path</h2>
          <p>The initial learning scope follows the four paths established in Open Design.</p>
        </div>
        <button class="text-button" type="button" data-view="practice">See all 4 paths ${materialIcon("forward")}</button>
      </div>
      <div class="grid grid-4">
        ${LANGUAGE_PAIRS.map((pair) => `
          <button class="card-button path-card" type="button" data-pair="${pair.id}">
            <span class="card-icon">${materialIcon("languageExploration")}</span>
            <strong>${pair.label}</strong>
            <small>Practice vocabulary, comprehension, and spelling.</small>
          </button>`).join("")}
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <div>
          <h2>Rewards & Milestones</h2>
          <p>Learning rewards stay tied to practice, progress, and mastery.</p>
        </div>
        <button class="text-button" type="button" data-view="rewards">View All ${materialIcon("forward")}</button>
      </div>
      <div class="badge-grid">
        ${ACHIEVEMENTS.slice(0, 4).map(renderAchievementCard).join("")}
      </div>
    </section>`;
}

function renderPractice() {
  const selectedPair = LANGUAGE_PAIRS.find((pair) => pair.id === state.languagePair);
  if (!selectedPair) {
    return `
      <section>
        <div class="section-heading">
          <div>
            <div class="eyebrow">${materialIcon("practice")} Practice</div>
            <h1>Choose your language pair</h1>
            <p>Select the direction you want to practice. The learning engine remains language-pair aware.</p>
          </div>
        </div>
        <div class="grid grid-2">
          ${LANGUAGE_PAIRS.map((pair) => `
            <button class="card-button path-card" type="button" data-pair="${pair.id}">
              <span class="card-icon">${materialIcon("languageExploration")}</span>
              <strong>${pair.label}</strong>
              <small>Choose this path</small>
            </button>`).join("")}
        </div>
      </section>`;
  }

  return `
    <section>
      <button class="text-button" type="button" data-action="clear-pair">${materialIcon("back")} Back to language pairs</button>
      <div class="section-heading" style="margin-top:18px;">
        <div>
          <div class="eyebrow">${materialIcon("practice")} ${selectedPair.label}</div>
          <h1>Choose how you want to practice</h1>
          <p>The learner-facing terminology follows the current Open Design handoff.</p>
        </div>
      </div>

      <section class="section">
        <h2>Exercise style</h2>
        <div class="grid grid-4">
          ${EXERCISE_STYLES.map((style) => `
            <button class="card-button ${state.exerciseStyle === style.id ? "selected" : ""}" type="button" data-exercise="${style.id}" aria-pressed="${state.exerciseStyle === style.id}">
              <span class="card-icon">${materialIcon(style.icon)}</span>
              <h3>${style.label}</h3>
            </button>`).join("")}
        </div>
      </section>

      <section class="section">
        <h2>Session mode</h2>
        <div class="grid grid-2">
          ${SESSION_MODES.map((mode) => `
            <button class="card-button mode-card" type="button" data-session-mode="${mode.id}">
              <span class="card-icon">${materialIcon(mode.id === "challenge" ? "timer" : mode.id === "check" ? "progressMilestones" : "practice")}</span>
              <strong>${mode.label}</strong>
              <small>${mode.description}</small>
              <span class="mode-count">${mode.questions} questions${mode.durationSeconds ? ` · ${mode.durationSeconds} seconds` : ""}</span>
            </button>`).join("")}
        </div>
      </section>

      <div class="notice section">
        ${materialIcon("privacy")}
        <div><strong>Refactor boundary:</strong> this branch has migrated the Open Design shell, semantics, icons, reward registry, and practice configuration. The learning-session engine is the next migration unit and is not being falsely presented as production-complete yet.</div>
      </div>
    </section>`;
}

function renderProgress() {
  return renderMigrationSurface(
    "Progress",
    "progress",
    "The Open Design Progress screen will be migrated after the structured learner-state and attempt-event modules are separated from the old single-file script.",
    ["Progress to Level N", "Total Sunshine Points", "Concepts mastered", "Milestones celebrated", "Learner Rank"]
  );
}

function renderParentProgress() {
  return renderMigrationSurface(
    "Parent Progress",
    "parentProgress",
    "Parent Progress remains a local educational summary. The refactor will wire it to structured attempt history rather than the prototype's ad-hoc localStorage totals.",
    ["Insights for parents and guardians", "Strengths and areas needing practice", "Periodic Progress Check trends", "Data & Progress Portability"]
  );
}

function renderSettings() {
  return `
    <section>
      <div class="eyebrow">${materialIcon("settings")} Settings</div>
      <h1>Accessibility & Settings</h1>
      <p>These controls will be migrated from the Open Design settings surface into a dedicated preference module.</p>
      <div class="grid grid-2 section">
        <article class="card">
          <span class="card-icon">${materialIcon("readAloud")}</span>
          <h3>Reading & Accessibility</h3>
          <ul class="list-clean">
            <li>${materialIcon("checkCircle")} Font profile, text size, and spacing</li>
            <li>${materialIcon("checkCircle")} High contrast and reduced motion</li>
            <li>${materialIcon("checkCircle")} Read question and choices aloud</li>
          </ul>
        </article>
        <article class="card">
          <span class="card-icon">${materialIcon("exportProgress")}</span>
          <h3>Progress Portability & Data Control</h3>
          <div class="actions">
            <button class="btn btn-secondary" type="button" disabled>${materialIcon("exportProgress")} Export Progress Backup</button>
            <button class="btn btn-secondary" type="button" disabled>${materialIcon("importProgress")} Import Progress Backup</button>
            <button class="btn btn-secondary" type="button" disabled>${materialIcon("resetProgress")} Reset Progress</button>
          </div>
          <p>Controls remain disabled in this first refactor slice until IndexedDB and backup validation are migrated.</p>
        </article>
      </div>
    </section>`;
}

function renderAchievementCard(achievement) {
  const category = REWARD_CATEGORIES[achievement.categoryId];
  return `
    <article class="badge-card">
      <div class="badge-art-wrap"><img class="badge-art" src="${achievement.art}" alt="${escapeHtml(achievement.name)} achievement badge" loading="lazy"></div>
      <div class="badge-copy">
        <h3>${escapeHtml(achievement.name)}</h3>
        <p>${escapeHtml(achievement.tagline)}</p>
        <span class="badge-category">${escapeHtml(category?.label || "Milestone")}</span>
      </div>
    </article>`;
}

function renderRewards() {
  return `
    <section>
      <div class="eyebrow">${materialIcon("rewards")} Sinag ng Kaalaman Rewards</div>
      <h1>Rewards & Milestones</h1>
      <p>The 25 stable achievement IDs now resolve independently from artwork filenames, so display wording can follow Open Design without breaking unlock logic.</p>
      ${Object.entries(REWARD_CATEGORIES).map(([categoryId, category]) => {
        const items = ACHIEVEMENTS.filter((achievement) => achievement.categoryId === categoryId);
        return `
          <section class="section">
            <div class="section-heading">
              <div>
                <h2>${materialIcon(category.icon)} ${category.label}</h2>
                <p>${category.supportLabel}</p>
              </div>
            </div>
            <div class="badge-grid">${items.map(renderAchievementCard).join("")}</div>
          </section>`;
      }).join("")}
    </section>`;
}

function renderMigrationSurface(title, icon, description, items) {
  return `
    <section>
      <div class="eyebrow">${materialIcon(icon)} ${title}</div>
      <h1>${title}</h1>
      <p>${description}</p>
      <div class="placeholder section">
        <strong>Open Design content retained for the migration contract</strong>
        <ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </div>
    </section>`;
}

function renderAbout() {
  return `
    <section>
      <div class="eyebrow">${materialIcon("developer")} About the Developer</div>
      <h1>About the Developer</h1>
      <div class="card section">
        <p>I build things, break things, figure out why they broke, then build them again slightly better.</p>
        <p>Usually somewhere between curiosity, overengineering, questionable ideas, and “wait... what if we tried this?”</p>
        <p>Mostly experimenting, learning, solving problems, and occasionally turning random thoughts into something that actually works.</p>
        <p><strong>Still building. Still learning. Still causing controlled chaos.</strong></p>
        <div class="actions">
          <a class="btn btn-secondary" href="https://github.com/Baelfyre" target="_blank" rel="noreferrer">GitHub ${materialIcon("external")}</a>
          <a class="btn btn-secondary" href="https://www.linkedin.com/in/ongojames/" target="_blank" rel="noreferrer">LinkedIn ${materialIcon("external")}</a>
          <a class="btn btn-secondary" href="https://www.facebook.com/Baelf1re" target="_blank" rel="noreferrer">Facebook ${materialIcon("external")}</a>
        </div>
      </div>
    </section>`;
}

function renderSupport() {
  return `
    <section>
      <div class="eyebrow">${materialIcon("support")} Support Development</div>
      <h1>Support Development</h1>
      <p>If you find Sinag ng Kaalaman helpful for you and your child, support can help improve the app, expand learning content, and strengthen accessibility.</p>
      <div class="grid grid-2 section">
        <article class="card">
          <span class="card-icon">${materialIcon("noPaywall")}</span>
          <h3>Zero Feature Paywalls</h3>
          <p>We do not lock app features behind donations. No educational content is ever gated. Sinag ng Kaalaman is built on the belief that education should be free and accessible to everyone.</p>
        </article>
        <article class="card">
          <span class="card-icon">${materialIcon("privacy")}</span>
          <h3>Optional & Separate from Learning</h3>
          <p>Support is never tied to XP, badges, streaks, levels, educational advantages, or access to learning content.</p>
          <div class="actions"><a class="btn btn-gold" href="https://buymeacoffee.com/baelfyre" target="_blank" rel="noreferrer">Buy Me a Coffee ${materialIcon("external")}</a></div>
        </article>
      </div>
    </section>`;
}

function renderMain() {
  switch (state.view) {
    case "practice": return renderPractice();
    case "progress": return renderProgress();
    case "rewards": return renderRewards();
    case "parent": return renderParentProgress();
    case "settings": return renderSettings();
    case "about": return renderAbout();
    case "support": return renderSupport();
    default: return renderHome();
  }
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="site-shell footer-inner">
        <div><strong>${PRODUCT.name}</strong><br>${PRODUCT.levelLabel} · Local-first · No ads · No telemetry</div>
        <nav class="footer-links" aria-label="Adult and developer resources">
          <button class="text-button" type="button" data-view="parent">${materialIcon("parentProgress")} Parent Progress</button>
          <button class="text-button" type="button" data-view="settings">${materialIcon("settings")} Settings</button>
          <button class="text-button" type="button" data-view="about">${materialIcon("developer")} About the Developer</button>
          <button class="text-button" type="button" data-view="support">${materialIcon("support")} Support Development</button>
        </nav>
      </div>
    </footer>`;
}

function render({ focusMain = false } = {}) {
  app.innerHTML = `${renderHeader()}<main id="main" class="site-shell main-content" tabindex="-1">${renderMain()}</main>${renderFooter()}`;
  if (focusMain) document.querySelector("#main")?.focus();
}

app.addEventListener("click", (event) => {
  const viewControl = event.target.closest("[data-view]");
  if (viewControl) {
    state.view = viewControl.dataset.view;
    render({ focusMain: true });
    return;
  }

  const pairControl = event.target.closest("[data-pair]");
  if (pairControl) {
    state.languagePair = pairControl.dataset.pair;
    state.view = "practice";
    render({ focusMain: true });
    return;
  }

  const exerciseControl = event.target.closest("[data-exercise]");
  if (exerciseControl) {
    state.exerciseStyle = exerciseControl.dataset.exercise;
    render();
    return;
  }

  if (event.target.closest('[data-action="clear-pair"]')) {
    state.languagePair = null;
    render({ focusMain: true });
    return;
  }

  if (event.target.closest('[data-action="progress-check"]')) {
    state.view = "practice";
    state.languagePair = state.languagePair || LANGUAGE_PAIRS[0].id;
    render({ focusMain: true });
    return;
  }

  const sessionControl = event.target.closest("[data-session-mode]");
  if (sessionControl) {
    const mode = SESSION_MODES.find((item) => item.id === sessionControl.dataset.sessionMode);
    window.alert(`${mode?.label || "Session"} is queued for the next refactor slice: learning-session engine migration.`);
  }
});

render();
