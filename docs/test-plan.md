# Test Plan

## Objective

Ensure the Math Tutor App is functionally complete, accessible, and regression-safe across major workflows and user interactions.

## Scope

- Unit testing with Jasmine
- E2E testing with Cypress
- Accessibility testing with Axe
- Performance auditing with Lighthouse

## Key Scenarios

- Correct math answer results in a visible success message
- Incorrect math answer results in an error message
- Empty input disables the button
- Input field blocks invalid characters
- Status messages are accessible via ARIA roles

## Accessibility Coverage ✅

- ARIA live region implemented with `role="status"` and `aria-live="polite"` or `"assertive"` based on message type
- Screen-reader friendly error and success feedback
