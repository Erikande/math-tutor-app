# Changelog

All notable changes to this project will be documented in this file.

## \[1.0.4] - 2025-06-21

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

## \[1.0.3] - 2025-06-21

### Docs

* **readme**: add new audit workflow section

## \[1.0.2] - 2025-06-21

### CI/CD

* **github-actions**: Introduced separate GitHub Actions workflows for test automation

  * ✅ `.github/workflows/cypress.yml` runs E2E tests using Cypress

## \[1.0.1] - 2025-05-29

### Testing

* **unit**: Added Jasmine unit tests for AppComponent logic
* **e2e**: Added Cypress tests for core functionality

## \[1.0.0] - 2025-05-28

### Initial release

* Project scaffolded using Angular CLI
* Core functionality implemented (math quiz generation, answer validation)
* Basic UI styling with Angular Material

---

## \[0.4.4] - 2025-05-27

### Docs

* **slides**: add Marp slides PDF

## \[0.4.3] - 2025-05-22

### Chore

* **format**: normalize whitespace and indentation across 28 files using Prettier

## \[0.4.2] - 2025-05-22

### Docs

* **demo**: update README with file tree and coverage link

## \[0.4.1] - 2025-05-22

### Docs

* **test cases**: update descriptions and formatting

## \[0.4.0] - 2025-05-22

### Testing

* **unit**: add AppComponent Jasmine tests
* **mocks**: isolate service logic

## \[0.3.1] - 2025-05-22

### Docs

* Add rendered Marp presentation PDF to deliverables
* Update `README.md` with full project file tree diagram
* Fix and validate relative links to test plan, test cases, and future coverage notes

## \[0.3.0] - 2025-05-22

### Testing

* Add Jasmine unit tests for AppComponent logic

  * checkAnswer() for success and failure
  * resetForm() and generateXandY() paths covered
* Use service mocking for DI test isolation
* Ensure type-safe test environment separation
