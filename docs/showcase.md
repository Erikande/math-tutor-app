```text
title: UI Showcase – Math Tutor App
status: ✅ Complete
updated: 2025-07-19
```

# UI Showcase – Responsive Proof

This document visually demonstrates the responsive layout coverage of the Math Tutor App. Screenshots were captured via Cypress using programmatic `cy.viewport()` simulation across common breakpoints.

All screenshots are real renderings from the app. See the `test-plan.md` file for viewport test descriptions and test logic.

## Banner Layout – Desktop

![Desktop layout](../docs/screenshots/rwd-desktop.png)

- 📐 Breakpoint: `macbook-13`
- ✅ Banner present and scaled
- ✅ Title and subtitle visible
- ✅ Layout preserves spacing

## Mobile – Modern Smartphones

![Mobile modern](../docs/screenshots/rwd-mobile-modern.png)

- 📐 Breakpoint: `iphone-x`
- ✅ App title remains accessible
- ✅ Button and inputs scale to full width
- ✅ No horizontal scroll

## Mobile – Narrow Devices

![Mobile small](../docs/screenshots/rwd-mobile-small.png)

- 📐 Breakpoint: `iphone-6`
- ✅ Touch targets remain usable
- ✅ Operator line-breaks respected
- ✅ Scroll region acceptable

## Mobile – Wide Format

![Mobile wide](../docs/screenshots/rwd-mobile-wide.png)

- 📐 Breakpoint: `pixel-2`
- ✅ Consistent styling with modern devices
- ✅ Input padding preserved

## Tablet – Landscape

![Tablet layout](../docs/screenshots/rwd-tablet.png)

- 📐 Breakpoint: `ipad-2`
- ✅ Equations correctly aligned left
- ✅ Form field occupies available space

## Visual Source

These screenshots are stored in `/docs/screenshots/` and were generated during the Cypress `responsive-screenshots.cy.ts` test.

## E2E Test Coverage – Responsive & Functional

### ✅ All Viewports Passed

![Responsive Layout All Viewports Passed](../docs/screenshots/responsive-layout-all-viewports-passed.png)

### 🧪 Functional Layout E2E

![Functional Layout Tests](../docs/screenshots/responsive-layout-functional-e2e-tests.png)

### 🔢 Math Challenge – Core Test Coverage

![Core Test Suite Coverage](../docs/screenshots/math-challenge-core-e2e-coverage-tc01-to-tc11.png)

## 🧪 Jasmine Unit Test Coverage

![Jasmine Unit Test Coverage](../docs/screenshots/jasmine-karma-unit-test-coverage.png)

## 📱 Pixel 8 Pro – Animated E2E Flow Demo

![Math Challenge E2E Demo – Google Pixel 8 Pro](../docs/screenshots/math-challenge-e2e-google-pixel8pro.gif)
> Manual UI demo on Google Pixel 8 Pro, highlighting responsive design and input validation. Cypress tests confirm automated coverage of this flow.

## Performance & Accessibility Baseline

We used Lighthouse to establish a performance and SEO baseline.

- 📸 **Desktop:**  
  ![Lighthouse scores for desktop: 64 for Performance](../docs/screenshots/lh-desktop.png)

- 📸 **Mobile:**  
  ![Lighthouse scores for mobile: 55 for Performance](../docs/screenshots/lh-mobile.png)

- 📂 Full reports:
  - [audit/lh-desktop.json](../audit/lh-desktop.json)
  - [audit/lh-mobile.json](../audit/lh-mobile.json)
  - [audit/axe-latest.json](../audit/axe-latest.json)

See [`audit/summary.md`](../audit/summary.md) for a summary of key metrics.

## API Validation Snapshot

The following image shows the successful execution of the math-tutor Postman collection. This validates the availability and behavior of the API used in the app.

![Postman Success](./postman-collection-run-success.png)

> Visual confirmation of successful Postman collection execution
