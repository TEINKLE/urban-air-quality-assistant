Markdown


# 🌿 Urban Air Quality Assistant (Challenge 06)

An AI-powered web application that takes an urban family's daily routine and generates tailored low-emission steps, indoor air quality hacks, and clear environmental and health impact insights.

## 🏗️ Architecture

```text
[Responsive Web UI (HTML5 / CSS3 / Vanilla JS)]
          │
          ▼  User Routine + City + Household Profile
[Structured Prompt Engine]
          │
          ▼  HTTPS REST Call (application/json schema)
[Google Gemini 2.5 Flash Gen AI API]
          │
          ▼  Deterministic JSON Response
[Impact Metrics + Low-Emission Steps + Indoor Hacks]
Markdown


## 🧪 Testing & Quality Checks
- Run automated unit tests with Node.js (version 18 or higher):
  ```bash
  node --test test-plan.mjs
