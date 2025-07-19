/**
 * @fileoverview Cypress E2E visual snapshot suite for responsive breakpoints
 * in the Math Tutor app layout.
 *
 * This suite captures full-viewport screenshots at 5 major device breakpoints:
 * - mobile-small (375x667)
 * - mobile-modern (390x844)
 * - mobile-wide (412x914)
 * - tablet (768x1024)
 * - desktop (1280x800)
 *
 * For each test, the following is asserted prior to screenshot capture:
 * - The main card wrapper is visible and fully rendered
 * - No hardcoded wait is used; screenshot is taken after layout readiness
 *
 * Captured screenshots are saved to:
 * `/cypress/screenshots/cypress/e2e/responsive-screenshots.cy.ts/`
 * and are used for manual visual QA and artifact tracking in CI.
 *
 * @see ../../test-plan.md — responsive visual artifact strategy
 * @see ../../support/selectors/mathAppComponent.json — stable DOM targeting
 */
import selectors from '../support/selectors/mathAppComponent.json';

const screenshotViewports = [
  { name: 'mobile-small', width: 375, height: 667 },   // iPhone SE
  { name: 'mobile-modern', width: 390, height: 844 },  // iPhone 14
  { name: 'mobile-wide', width: 412, height: 914 },    // Galaxy Fold
  { name: 'tablet', width: 768, height: 1024 },         // iPad Air
  { name: 'desktop', width: 1280, height: 800 },        // MacBook
];

describe('Responsive Layout Screenshots', () => {
  screenshotViewports.forEach(({ name, width, height }) => {
    it(`should render correctly at ${name} (${width}x${height})`, () => {
      cy.viewport(width, height);
      cy.visit('/');

      // Wait for main card to be visible (acts as a layout anchor)
      cy.get(selectors.cardWrapper).should('be.visible');

      // Now capture screenshot
      cy.screenshot(`rwd-${name}`, { capture: 'viewport' });
    });
  });
});
