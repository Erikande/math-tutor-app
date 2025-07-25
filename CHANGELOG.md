# Changelog

All notable changes to this project will be documented in this file.

## [1.0.9] - 2025-07-21

### ✨ Launch Prep

- **README.md**: Final polish including:
  - ✅ Live demo link (GH Pages) added
  - ✅ Responsive screenshots confirmed present
  - ✅ Testing strategy clarified (Jasmine + Cypress)
  - ✅ GHA workflows for unit and E2E tests documented
- **GitHub Actions**:
  - 🔧 `unit-tests.yml` verified for Jasmine test runs
  - 🔧 `cypress.yml` improved with `wait-on` to ensure app readiness
- **Angular Build**:
  - 🛠 Fixed `angular.json` output path for GH Pages deployment
  - ✅ Production build verified (`dist/math-tutor-app/index.html` present)
  - 🚀 Successfully deployed via `angular-cli-ghpages`

> This release finalizes the app for public viewing via GitHub Pages and confirms CI test pipelines are operational.

## [1.0.8] - 2025-07-19

### Features

- 📱 **Responsive Layout Screenshots**
  - Captured and organized responsive UI screenshots:
    - Devices: `rwd-desktop`, `rwd-tablet`, `rwd-mobile-small`, `rwd-mobile-modern`, `rwd-mobile-wide`
  - Stored under `docs/screenshots/`
  - Embedded into `test-plan.md` under **Responsive Coverage**
  - Added visual artifacts table in `README.md`

- 🧪 **Unit Testing (AppComponent)**
  - Added Jasmine unit tests with render and logic validation
  - Covered input handling, status messaging, and service interaction
  - Clarified snapshot strategy in `README.md` (Spectator/Jasmine equivalent)

- 📊 **Performance & Accessibility Audit**
  - Generated and committed:
    - `lh-desktop.json`, `lh-mobile.json`, `axe-latest.json`
    - Summary report: `audit/summary.md`
    - Audit screenshots: `docs/screenshots/lh-desktop.png`, `lh-mobile.png`
  - Linked in `README.md` and `showcase.md`
  - Confirmed `npm run audit:all` for CI-compatible audits

- 📊 **Code Coverage Scaffolding**
  - Added `npx ng test --code-coverage` and `npm run test:coverage` scripts to root `README.md`
  - Clarified coverage output path (`coverage/math-tutor-app/index.html`)
  - Documented coverage status as scaffolded — HTML/CLI output functional, but no CI gating or thresholds yet

### Docs

- 📘 **showcase.md**
  - Created annotated layout and accessibility visual guide
  - Linked from main `README.md` under 📚 Documentation

- 📘 **test-plan.md**
  - Added **Responsive Design Viewport Test** section with visual examples

- 📘 **README.md**
  - Expanded documentation links
  - Clarified snapshot test intent (Jasmine/Spectator)
  - Embedded performance screenshots and results

[1.0.7] - 2025-07-19
Features
ui/responsive: Refactored layout to fully support Responsive Web Design (RWD)

Introduced responsive banner-container with accessible `<img>` and `<h1 class="visually-hidden">`

Updated .math-card-container for mobile-first max-widths and vertical centering

Adjusted mat-card padding and spacing for better readability on all breakpoints

a11y: Enhanced accessible status messaging UX

Styled .status-message with visual hierarchy, color-coding for success/error, and improved font sizing

Added motion-safe fade-in animation for message visibility transitions

Confirmed ARIA role and aria-live region compliance

Refactor
css: Unified global typography with Inter font and smoother base layout

html: Restructured markup for banner + math card hierarchy to improve screen reader flow

[1.0.6] - 2025-07-12
Accessibility
a11y: Replaced non-accessible toast notifications with ARIA live region

Introduced statusMessage and statusType bindings in AppComponent

Refactored MessageService to support A11y-friendly messaging

Updated UI to expose a <div role="status" aria-live="..."> element

Cypress custom commands updated to assert against new accessible messaging

Jasmine tests updated to validate new logic and remove toast-specific expectations

Docs
test cases: Updated test-cases.md to reflect A11y messaging flow

test plan: Confirmed new behavior across manual and automated strategies

readme(s): Updated root and docs/README.md to reflect improved error messaging pattern

## [1.0.5] - 2025-07-12

### Features

* **api**: Scaffolded Express mock API server for backend simulation  
  * Added `GET /problem` and `POST /answer` routes to support math quiz functionality  
  * Integrated TypeScript support via `ts-node`  
  * Updated `tsconfig.json` and `package.json` to support API layer  

### Testing

* **postman**: Added full API test collection in Postman  
  * Collection includes dynamic environment chaining and schema validation  
  * Verified contract tests using `tv4` and `pm.test()` assertions  
  * Exported collection in v2.1 format  

### Docs

* **postman**: Created `postman/README.md` documenting API test strategy  
* **docs**: Updated `docs/README.md` with Postman test summary and run screenshot  

---

## [1.0.4] - 2025-06-21

### Features

* **a11y**: Add audit baseline CLI using Lighthouse and axe-core  
  * Introduced `scripts/generate-audit-summary.ts` to generate a Markdown summary of accessibility & performance audits  
  * Added new NPM scripts:  
    * `audit:lighthouse` – Lighthouse scan of the app  
    * `audit:axe` – axe-core WCAG accessibility scan  
    * `audit:report` – Converts JSON results into `audit/summary.md`  
    * `audit:all` – Full audit workflow  
  * Updated `.gitignore` to exclude `audit/` folder  
  * Updated `tsconfig.json` to support `ts-node` scripts  

---

## [1.0.3] - 2025-06-21

### Docs

* **readme**: add new audit workflow section

---

## [1.0.2] - 2025-06-21

### CI/CD

* **github-actions**: Introduced separate GitHub Actions workflows for test automation  
  * ✅ `.github/workflows/cypress.yml` runs E2E tests using Cypress

---

## [1.0.1] - 2025-05-29

### Testing

* **unit**: Added Jasmine unit tests for AppComponent logic  
* **e2e**: Added Cypress tests for core functionality

---

## [1.0.0] - 2025-05-28

### Initial release

* Project scaffolded using Angular CLI  
* Core functionality implemented (math quiz generation, answer validation)  
* Basic UI styling with Angular Material

---

## [0.4.4] - 2025-05-27

### Docs

* **slides**: add Marp slides PDF

---

## [0.4.3] - 2025-05-22

### Chore

* **format**: normalize whitespace and indentation across 28 files using Prettier

---

## [0.4.2] - 2025-05-22

### Docs

* **demo**: update README with file tree and coverage link

---

## [0.4.1] - 2025-05-22

### Docs

* **test cases**: update descriptions and formatting

---

## [0.4.0] - 2025-05-22

### Testing

* **unit**: add AppComponent Jasmine tests  
* **mocks**: isolate service logic

---

## [0.3.1] - 2025-05-22

### Docs

* Add rendered Marp presentation PDF to deliverables  
* Update `README.md` with full project file tree diagram  
* Fix and validate relative links to test plan, test cases, and future coverage notes

---

## [0.3.0] - 2025-05-22

### Testing

* Add Jasmine unit tests for AppComponent logic  
  * `checkAnswer()` for success and failure  
  * `resetForm()` and `generateXandY()` paths covered  
* Use service mocking for DI test isolation  
* Ensure type-safe test environment separation
