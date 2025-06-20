# Math Tutor App

A simple Angular app for practicing basic math problems. Built as a QA automation showcase for the OneCause take-home exercise — now extended to demonstrate modern Test Engineer capabilities, including CI/CD, full test coverage, and code quality practices.

---

## Overview

This app generates a random addition problem and lets users input their answer. The correctness is shown via a success or error toast.

### Tech Highlights

- Angular 19.x with CLI
- Cypress E2E tests
- Jasmine unit tests (via Karma)
- ✅ CI pipelines for Cypress and Karma tests via GitHub Actions
- Prettier formatting + TSLint (legacy support)
- Conventional Commits + CHANGELOG automation

---

## Getting Started

```bash
git clone git@github.com:Erikande/math-tutor-app.git
cd math-tutor-app
npm install
npm start
```

Then open [http://localhost:4200](http://localhost:4200) in your browser.

---

## Running Tests (CI & Local)

### ✅ Unit Tests (Jasmine + Karma)

Run locally:

```bash
npm run test
# or CI mode:
npm run test:ci
```

Executed via GitHub Actions in `.github/workflows/unit-tests.yml` on each push and PR to `main`.

### ✅ E2E Tests (Cypress)

Run locally:

```bash
npm run cy:open
# or headless:
npm run cy:run
```

CI runs are defined in `.github/workflows/cypress.yml` using a headless browser and Angular dev server check.

---

## CI/CD Status

![Unit Tests](https://github.com/Erikande/math-tutor-app/actions/workflows/unit-tests.yml/badge.svg)
![Cypress E2E](https://github.com/Erikande/math-tutor-app/actions/workflows/cypress.yml/badge.svg)

---

## File Tree

```tree
math-tutor-app/
├── src/
│   └── app/
│       ├── app.component.ts
│       └── app.component.spec.ts
├── cypress/
│   ├── e2e/
│   │   └── core-functionality.cy.ts
├── .github/
│   └── workflows/
│       ├── cypress.yml
│       └── unit-tests.yml
├── docs/
│   ├── test-plan.md
│   ├── test-cases.md
│   └── future-coverage-notes.md
├── package.json
├── angular.json
├── tsconfig.json
└── README.md
```

---

## Final Thoughts

This project demonstrates my real-world QA strategy — combining manual exploratory test planning with robust automation, type safety, and CI integration.

This repo also includes fully automated CI pipelines, reflecting how I bring testing visibility and reliability into the delivery lifecycle.

---
