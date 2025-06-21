import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    setupNodeEvents(on, config) {
      // Add event listeners or plugins here if needed
    },
  },

  viewportWidth: 1000,
  viewportHeight: 660,
});
// ✅ Cypress supports automatic browser detection for Chrome, Edge, and Firefox.
// No manual browser config is required unless behavior differs between environments.
// Run with: `npx cypress run --browser chrome|firefox|edge`
