# Future Coverage & Enhancements

## Backlog

* Mobile Emulator Tests (Cypress/BrowserStack)
* Dockerfile for reproducible CI
* Load testing via k6

## Functional Additions

* Support for additional operations: subtraction, multiplication, division
* i18n support for multilingual feedback
* Input validation and form accessibility
* Keyboard-only navigation audit

## A11y Baseline ✅

The current implementation includes:

* Screen reader–accessible status region (`aria-live`)
* Semantic form labels
* Focus management on error
* Cypress automated Axe scans (`audit:axe`)
* Live region tests in Jasmine unit tests
* Logical focus order across input + feedback
* Accessible form control labels via Angular Material

## Testing Baseline ✅

* Jasmine unit tests cover component rendering, state, messaging, focus
* Cypress E2E tests cover layout, validation, status display
* Responsive layout tests across 5 breakpoints
* Visual artifact capture for each viewport

## Snapshot Testing Intent ✅

* Snapshot intent covered via structural + state testing in Jasmine
* Layout verification backed by screenshot artifacts in Cypress

## Completed Enhancements ✅

* Performance Metrics Baseline via Lighthouse CI
* Code coverage tooling scaffolded using Karma and Jasmine

  * HTML report generated in `/coverage/math-tutor-app/index.html`
  * Console summary displays preliminary metrics across statements, branches, functions, and lines
  * The configuration is in place and operational, laying the groundwork for deeper test coverage analysis as more unit tests are implemented
