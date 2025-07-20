# Math Tutor App – Documentation Overview

This directory contains supporting QA and artifact documentation for the Math Tutor App. It supplements the root `README.md` with deeper insights into testing strategy, visual proofs, and ongoing QA work.

## Contents

- `test-plan.md` — High-level QA strategy, tooling, and coverage scope  
- `test-cases.md` — Detailed test case list with IDs, descriptions, and steps  
- `future-coverage-notes.md` — Backlog items, test baseline, and coverage roadmap  
- `showcase.md` — Annotated screenshots of the app UI, responsive layout, and ARIA regions  
- `postman/README.md` — Postman collection usage notes and API test strategy  

## Accessibility Highlights ✅

The app includes a robust a11y foundation:

- Screen reader–accessible status region (`aria-live`)
- Semantic form labels with `for`/`id` bindings via Angular Material
- Focus management and logical tab order
- Live region announcements tested via Jasmine unit specs
- Automated Axe scans in Cypress (`npm run audit:axe`)
- Screenshot artifact: `postman-collection-run-success.png` (API success test UI)

📘 See [`future-coverage-notes.md`](./future-coverage-notes.md) for the full a11y test baseline.

## Visual Documentation

Refer to [`showcase.md`](./showcase.md) for:

- Responsive screenshots (desktop, tablet, mobile)
- ARIA live region markup
- Testing proof visuals for E2E and audit coverage

## API Testing

A Postman collection is included under [`/postman`](../postman), with a visual confirmation of successful execution (`postman-collection-run-success.png`) under `/docs`.

---

This directory enables downstream readers—recruiters, hiring managers, and reviewers—to see the depth of your QA process and automation mindset.
