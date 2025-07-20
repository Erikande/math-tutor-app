# Postman API Test Execution

This directory contains the Postman test collection and execution artifacts for the Math Tutor App.

## 📦 Files Included

* `math-tutor.postman_collection.json` — Main Postman test collection
* `math-tutor.postman_environment.json` — Environment file for localhost API testing
* `postman-run-success.png` — Screenshot of a successful run for visual confirmation

## ✅ How to Run Locally

> ⚠️ **Important**: Ensure the API server is running before executing tests. Run it with:

```bash
npm run api:start
```

You can execute the Postman test suite via the Postman GUI or Newman CLI.

### Using Postman App

1. Open the Postman desktop app
2. Import both the collection and environment files
3. Select the environment `Math Tutor App - Local`
4. Click **Run Collection**

### Using Newman (CLI)

```bash
npm install -g newman
newman run math-tutor.postman_collection.json -e math-tutor.postman_environment.json
```

## 🔍 Output

* The Newman CLI will output a summary of all tests.
* A successful run should show 0 failures.
* Screenshot of a completed run is available in `/docs/postman-collection-run-success.png`

## 🔗 References in Documentation

* The visual result of the run is embedded in:

  * [`/docs/showcase.md`](../docs/showcase.md)
  * [`/docs/future-coverage-notes.md`](../docs/future-coverage-notes.md) under **Testing Baseline**

## 🧪 Current Test Scenarios

* API status check on launch
* Arithmetic challenge generation
* Basic response schema verification

> ⚠️ Note: These tests validate API stability and correctness. For front-end UI tests, refer to Cypress specs under `/cypress/e2e/`.
