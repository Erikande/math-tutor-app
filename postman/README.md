# 📮 Postman Collection – Math Tutor API

This file documents the Postman API test collection used to validate the Math Tutor API layer.

## 🧩 Purpose

Even though the frontend is a static single-page Angular app, this mock API layer and Postman collection were introduced to showcase QA skills across a full stack:

- ✅ Building a basic Express API server
- ✅ Writing automated schema and contract tests in Postman
- ✅ Dynamically chaining test requests using environment variables
- ✅ Demonstrating test result validation and collection runs

## 📂 Collection Contents

| Request          | Method | Purpose                                  |
|------------------|--------|------------------------------------------|
| `GET /problem`   | GET    | Returns two random integers `x` and `y`  |
| `POST /answer`   | POST   | Submits the answer payload `{ x, y, answer }` and returns `{ correct: true/false }` |

Each request includes:

- 🧪 **Post-response tests** using `pm.test(...)`
- 📋 **Schema validation** using `tv4`
- 🔁 **Environment chaining**: Values from `GET /problem` are reused in `POST /answer`

## 🖼️ Example: Collection Run Success

![Postman Collection Run – Success](../docs/postman-collection-run-success.png)

> ✅ All assertions pass and responses match schema.

## 📦 Export

📦 Exported in [Postman Collection v2.1 format](https://schema.postman.com/json/collection/v2.1.0/collection.json)
🧾 Collection file: [math-tutor-api.postman_collection.json](./math-tutor-api.postman_collection.json)

