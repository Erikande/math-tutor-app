# Docs Overview

This folder contains technical documentation supporting the Math Tutor App project.

## Contents

- `test-plan.md` — High-level QA strategy, tools, and scope
- `test-cases.md` — Detailed test scenarios
- `future-coverage-notes.md` — Post-MVP coverage ideas and feature tracking

## Accessibility (A11y) Update ✅

We've replaced the toast notifications (ngx-toastr) with live ARIA status regions that update the DOM with proper `role="status"` and `aria-live` values for screen reader compatibility. All references to `.toast-success` or `.toast-error` have been removed from Cypress test assertions.

Ensure any new features adhere to this baseline accessibility strategy.
