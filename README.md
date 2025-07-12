# Math Tutor App

This is the root README for the Math Tutor App project.

## Overview

The Math Tutor App is a lightweight Angular application designed to help children practice basic arithmetic. This project was developed as part of a take-home assignment and showcases a complete test automation strategy suitable for a **Senior QA Engineer** role.

## Features

- Random math challenge generator
- Addition functionality
- Accessible UI and messaging with ARIA support
- Responsive layout using Angular Flex Layout
- Angular Material UI components

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

- `npm run test` – Run Jasmine unit tests
- `npm run cy:run` – Run Cypress E2E tests (Electron headless)
- `npm run audit:all` – Run Lighthouse and Axe accessibility audits

## Cypress Notes

Cypress tests reference selectors in `cypress/support/selectors/mathAppComponent.json`. All core functionality tests are written in `math-app.cy.ts`.

## License

MIT
