# Changelog

## [0.4.3] - 2025-05-22

### Chore

- **format**: normalize whitespace and indentation across 28 files using Prettier
  - Applied Prettier formatting to `.ts`, `.js`, `.html`, `.css`, and `.md` files
  - Removed unnecessary line breaks, fixed misaligned returns, and improved readability

## [0.3.1] - 2025-05-22

### Documentation

## [0.3.0] - 2025-05-22

### Testing

 - Add Jasmine unit tests for AppComponent (random number generation, input parsing, answer evaluation)
 - Refactor `tsconfig.spec.json` to isolate Jasmine types and prevent Cypress type pollution
 - Mock CalculatorService and MessageService dependencies in AppComponent test
 - Fix AppComponent test runner compatibility with DI services

### Documentation

 - Update test plan to document deferred MessageService unit test
 - Add TODO guidance for mocking ToastrService and ToastConfig in future tests

## [0.2.0] - 2025-05-21

### Documentation
* Add rendered Marp presentation PDF to deliverables
* Update `README.md` with file structure and markdown links
* Update CHANGELOG for version tag tracking and deliverable notes

