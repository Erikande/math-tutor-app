# Changelog

## [1.0.0] - 2025-06-17

### Chore

- **release**: begin pivot from OneCause submission toward standalone portfolio showcase  
  - Branched from `release/v0.4.3-clean3` to `pivot/v1.0.0-foundation`  
  - Bumped `package.json` version to `1.0.0`  
  - Tagged repo for first public-facing evolution  

---

## [0.4.4] - 2025-05-26

### Chore

- **types**: isolate Cypress and Jasmine type configs for accurate TS validation  
  - Added `cypress/tsconfig.json` with `types: ["cypress"]`, `"resolveJsonModule": true`, and ES2015+ libs  
  - Updated `tsconfig.spec.json` to explicitly scope Jasmine types and exclude Cypress files  
  - Declared custom Cypress commands (`cy.expectSuccessToast`, etc.) in `support/commands.d.ts`  
  - Removed global type leakage by setting `"types": []` in the root `tsconfig.json`  
  - Validated with `tsc --noEmit` across Cypress and Jasmine contexts  

---

## [0.4.3] - 2025-05-22

### Chore

- **format**: normalize whitespace and indentation across 28 files using Prettier  
  - Applied Prettier formatting to `.ts`, `.js`, `.html`, `.css`, and `.md` files  
  - Removed unnecessary line breaks, fixed misaligned returns, and improved readability  

---

## [0.3.1] - 2025-05-22

### Documentation

- Add rendered Marp presentation PDF to deliverables  
- Update `README.md` with full project file tree diagram  
- Fix and validate relative links to test plan, test case
