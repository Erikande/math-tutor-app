# Changelog

## [0.4.4] - 2025-05-26

### Chore

- **types**: isolate Cypress and Jasmine type configs for accurate TS validation
  - Added `cypress/tsconfig.json` with `types: ["cypress"]`, `"resolveJsonModule": true`, and ES2015+ libs
  - Updated `tsconfig.spec.json` to explicitly scope Jasmine types and exclude Cypress files
  - Declared custom Cypress commands (`cy.expectSuccessToast`, etc.) in `support/commands.d.ts`
  - Removed global type leakage by setting `"types": []` in the root `tsconfig.json`
  - Validated with `tsc --noEmit` across Cypress and Jasmine contexts

## [0.4.3] - 2025-05-22

### Chore

- **format**: normalize whitespace and indentation across 28 files using Prettier
  - Applied Prettier formatting to `.ts`, `.js`, `.html`, `.css`, and `.md` files
  - Removed unnecessary line breaks, fixed misaligned returns, and improved readability

## [0.3.1] - 2025-05-22

### Documentation

- Add rendered Marp presentation PDF to deliverables
- Update `README.md` with full project file tree diagram
- Fix and validate relative links to test plan, test cases, and future coverage notes

## [0.3.0] - 2025-05-22

### Testing

- Add Jasmine unit tests for AppComponent (random number generation, input parsing, answer evaluation)
- Refactor `tsconfig.spec.json` to isolate Jasmine types and prevent Cypress type pollution
- Mock CalculatorService and MessageService dependencies in AppComponent test
- Fix AppComponent test runner compatibility with DI services

### Documentation

- Update test plan to document deferred MessageService unit test
- Add TODO guidance for mocking ToastrService and ToastConfig in future tests
- Add future-coverage-notes.md
- Add TSDoc comments for Jasmine test methods

## [0.2.0] - 2025-05-21

### Documentation

- Add rendered Marp presentation PDF to deliverables
- Update `README.md` with file structure and markdown links
- Update CHANGELOG for version tag tracking and deliverable notes

## [0.1.0] - 2025-05-21
