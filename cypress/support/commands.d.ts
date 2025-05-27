/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    login(user: any): Chainable<any>;
    waitForMathChallenge(): Chainable<void>;
    expectSuccessToast(text: string): Chainable<void>;
    expectErrorToast(text: string): Chainable<void>;
  }
}
