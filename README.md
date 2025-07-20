# Math Tutor App

This is the root README for the Math Tutor App project.

## Overview

The Math Tutor App is a lightweight Angular application designed to help children practice basic arithmetic. This project was developed as part of a take-home assignment and showcases a complete test automation strategy suitable for a **Senior QA Engineer** role.

## Features

* Random math challenge generator
* Addition functionality
* Accessible UI and messaging with ARIA support
* Responsive layout using Angular Flex Layout
* Angular Material UI components

## Documentation

* [Test Plan](./docs/test-plan.md)
* [Test Cases](./docs/test-cases.md)
* [Future Coverage Notes](./docs/future-coverage-notes.md)
* [Visual Showcase](./docs/showcase.md) – Annotated UI screenshots and layout proof

## Accessibility Enhancements ✅

This app now includes accessible status messaging for users with assistive technologies. Alerts (previously using toasts) are now implemented via an ARIA live region inside the app template, located in the `mat-card-header`.

### Status Message (Live Region)

```html
<div
  *ngIf="statusMessage"
  [attr.aria-live]="statusType === 'error' ? 'assertive' : 'polite'"
  role="status"
  class="status-message"
  [attr.data-testid]="'status'"
  [ngClass]="statusType"
>
  {{ statusMessage }}
</div>
```

## Scripts

* `npm run test` – Run Jasmine unit tests
* `npm run cy:run` – Run Cypress E2E tests (Electron headless)
* `npm run audit:all` – Run Lighthouse and Axe accessibility audits

## Cypress Notes

Cypress tests reference selectors in `cypress/support/selectors/mathAppComponent.json`. All core functionality tests are written in `math-app.cy.ts`.

## Component Testing Coverage
🧪 While this project does not use traditional snapshot test files (like in Jest for React), it fully satisfies the snapshot testing intent via Angular's native Jasmine test suite.

The core spec file, [app.component.spec.ts](./src/app/app.component.spec.ts), includes:

✅ Rendered output validation and conditional messaging
✅ Mocked services for controlled test state
✅ Focus and accessibility behavior testing
✅ Consistent verification of UI state across logic branches

These tests ensure the component’s behavior and structure remain stable over time, providing the same assurances as snapshot testing.

## Responsive Testing

Cypress E2E tests validate layout integrity and interaction across multiple device breakpoints.

### Viewports Tested

* mobile-small (375x667)
* mobile-modern (390x844)
* mobile-wide (412x914)
* tablet (768x1024)
* desktop (1280x800)

### Tests Included

* 📸 `responsive-screenshots.cy.ts` — captures visual snapshots for each breakpoint
* 📱 `responsive-layout.cy.ts` — validates visibility, input behavior, and status messaging across devices

### Commands

* `npm run cy:responsive` — run both responsive test suites headlessly
* `npm run cy:responsive:open` — open Cypress GUI for responsive tests

> Screenshot artifacts are saved to `cypress/screenshots/cypress/e2e/responsive-screenshots.cy.ts/`
> These can be used for manual visual regression and layout verification.

## License

MIT

### Responsive Layout Snapshots

Below are visual artifacts captured during Cypress responsive layout tests. Each image includes descriptive alt text for screen readers.

| Device             | Screenshot                                                                  |
| ------------------ | --------------------------------------------------------------------------- |
| 📱 Mobile (Small)  | ![Math Tutor App on small mobile](./docs/screenshots/rwd-mobile-small.png)    |
| 📱 Mobile (Modern) | ![Math Tutor App on modern mobile](./docs/screenshots/rwd-mobile-modern.png)  |
| 📱 Mobile (Wide)   | ![Math Tutor App on wide mobile](./docs/screenshots/rwd-mobile-wide.png)      |
| 📱 Tablet          | ![Math Tutor App on tablet](./docs/screenshots/rwd-tablet.png)                |
| 💻 Desktop         | ![Math Tutor App on desktop](./docs/screenshots/rwd-desktop.png)              |

## 📊 Performance Metrics

The app includes an automated Lighthouse + Axe audit.

* 🖼️ Lighthouse: [Desktop](docs/screenshots/lh-desktop.png), [Mobile](docs/screenshots/lh-mobile.png)
* ✅ Axe accessibility scan included in [summary](audit/summary.md)

Run the audit locally:

```bash
npm run audit:all
