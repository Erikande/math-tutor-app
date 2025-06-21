# Math Tutor App

A simple web-based math tutor app built with Angular. This project is part of a QA Engineering exercise and demonstrates E2E automation, unit testing, typing strategy, and accessibility auditing.

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm start
```

Visit [http://localhost:4200](http://localhost:4200) in your browser.

## 🧪 Testing

Run all tests:

```bash
npm test
```

Run Cypress E2E tests:

```bash
npm run cy:run
```

## ♿ Accessibility & Performance Audits

This project includes automated auditing using [Lighthouse](https://github.com/GoogleChrome/lighthouse) and [axe-core](https://github.com/dequelabs/axe-core).

### Run All Audits

```bash
npm run audit:all
```

This command runs:

* `lighthouse` against `http://localhost:4200` and saves `lh-latest.json`
* `axe-core` CLI to run a11y tests via `axe-latest.json`
* A Markdown report generator that outputs `audit/summary.md`

### View the Report

```bash
open audit/summary.md
```

This summary includes:

* ✅ Lighthouse scores (Performance, Accessibility, Best Practices, SEO)
* 🦯 Axe-core accessibility violations (with descriptions and counts)

> Note: Only \~20–50% of accessibility issues are detectable via automation. [Manual testing is always required.](https://dequeuniversity.com/class/testing)

---

## 📦 Linting & Formatting

Lint:

```bash
npm run lint
```

Format with Prettier:

```bash
npm run format
```

---

## 📄 License

This project is for demonstration purposes only and not intended for production use.

---

## 👤 Author

Erik Anderson
Senior Test Engineer Candidate
