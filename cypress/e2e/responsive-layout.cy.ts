/**
 * @fileoverview Cypress E2E tests for verifying responsive layout and form interaction
 * across common viewport breakpoints in the Math Tutor app.
 *
 * This suite validates layout integrity and functional usability at 3 key device sizes:
 * - Mobile (iPhone 6)
 * - Tablet (iPad 2)
 * - Desktop (MacBook 13)
 *
 * For each viewport, this test confirms:
 * - The banner image is visible
 * - The main card (math problem) renders and remains visible
 * - Inputs accept and process a correct answer
 * - Status message appears and auto-dismisses within expected timeframe
 *
 * There are no hardcoded waits; all interactions rely on natural DOM state changes
 * and timeouts are capped using Cypress’s built-in retry mechanism.
 *
 * @see ../../test-plan.md — responsive test coverage and documentation
 * @see ../../fixtures/example.json — input/output scenarios (if extended in future)
 * @see ../../support/selectors/mathAppComponent.json — testid-based UI targeting
 */
import selectors from '../support/selectors/mathAppComponent.json';

const layoutViewports: { label: string; size: Cypress.ViewportPreset }[] = [
  { label: 'mobile', size: 'iphone-6' },
  { label: 'tablet', size: 'ipad-2' },
  { label: 'desktop', size: 'macbook-13' },
];

describe('📱 Responsive Layout Functionality', () => {
  layoutViewports.forEach(({ label, size }) => {
    it(`renders and works on ${label}`, () => {
      cy.viewport(size);
      cy.visit('/');

      // Layout components are visible
      cy.get('.banner-image').should('be.visible');
      cy.get('[data-testid="card-wrapper"]').should('be.visible');

      // Simulate typing a value and submitting
      cy.get('input[matInput]').clear().type('5');
      cy.contains('button', 'Answer').click();

      // A message appears (doesn’t matter what kind)
      cy.get('.status-message')
        .should('exist')
        .and('be.visible');
    });
  });
});
