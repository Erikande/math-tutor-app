import selectors from '../support/selectors/mathAppComponent.json';

// example Custom Cypress command, obviously we don't need to log in to a math app

Cypress.Commands.add('login', (user) => {
  return cy
    .request({
      url: 'http://localhost:3000/login',
      method: 'POST',
      body: user,
    })
    .then((response) => {
      window.localStorage.setItem('token', response.body.user.token);
      return { ...response.body.user, ...user };
    });
});

// Waits until x-value and y-value are populated — used in beforeEach()
Cypress.Commands.add('waitForMathChallenge', () => {
  cy.get(selectors.xValue).should('not.be.empty');
  cy.get(selectors.yValue).should('not.be.empty');
});

// Asserts that a success toast is visible and contains the expected text.
// Typically triggered on correct answers or positive feedback.
Cypress.Commands.add('expectSuccessToast', (text) => {
  cy.get('[data-testid="status"]')
    .should('exist')
    .and('have.attr', 'role', 'status')
    .and('have.class', 'success')
    .and('contain.text', text);
});

// Asserts that an error toast is visible and contains the expected text.
// Used when the user provides incorrect input or triggers validation errors.
Cypress.Commands.add('expectErrorToast', (text) => {
  cy.get('[data-testid="status"]')
    .should('exist')
    .and('have.attr', 'role', 'status')
    .and('have.class', 'error')
    .and('contain.text', text);
});

