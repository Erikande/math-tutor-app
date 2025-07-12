# Test Cases

## TC01: Correct Input

- Enter valid answer
- Press submit
- ✅ Expect: ARIA success message visible and contains correct text

## TC02: Incorrect Input

- Enter wrong value (e.g., 999)
- Press submit
- ✅ Expect: ARIA error message visible

## TC03: No Input

- Do not enter anything
- ✅ Expect: Submit button disabled

## TC04: Invalid Characters

- Try typing `abc`, `+--`, or `@`
- ✅ Expect: Input remains empty

## TC10: Valid Input Enables Button

- Enter a number
- ✅ Expect: Submit button becomes active

## TC11: Syntactically valid but wrong signed input

- Enter `-correctAnswer`
- ✅ Expect: ARIA error message

All messages are now surfaced via the `data-testid="status"` element.
