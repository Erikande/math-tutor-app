/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Logs in a user by posting to /login
     */
    login(user: any): Chainable<any>;

    /**
     * Waits for the math challenge x-value and y-value to load
     */
    waitForMathChallenge(): Chainable<void>;

    /**
     * Asserts that a success toast appears with the expected text
     */
    expectSuccessToast(text: string): Chainable<void>;

    /**
     * Asserts that an error toast appears with the expected text
     */
    expectErrorToast(text: string): Chainable<void>;
  }
}
