# Playwright Test Automation Framework

> Test automation framework for [Practice Software Testing](https://practicesoftwaretesting.com/)
> built with Playwright and TypeScript.

## 🎯 Project Overview

This framework demonstrates a scalable test automation setup following industry best practices:

- Page Object Model (POM) design pattern
- TypeScript for type safety and better IDE support
- Environment-based configuration
- Meaningful test coverage of critical user flows

**Created as assignment for Cerios application process.**

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

\`\`\`bash

# Clone the repository

git clone https://github.com/jordi-r/cerios-playwright-assignment.git
cd cerios-playwright-assignment

# Install dependencies

npm install

# Install Playwright browsers

npx playwright install

# Setup environment variables

cp .env.example .env

# Edit .env with your test credentials

\`\`\`

## 🔐 Environment Setup

Copy `.env.example` to `.env` and configure your test credentials:

\`\`\`env
BASE_URL=https://practicesoftwaretesting.com
TEST_USER_EMAIL=your-test-email@example.com
TEST_USER_PASSWORD=your-password
\`\`\`

**Note**: `.env` contains sensitive information and is excluded from version control.

## ▶️ Running Tests

\`\`\`bash

# Run all tests

npm test

# Run tests in UI mode (interactive)

npm run test:ui

# Run tests in headed mode (see browser)

npm run test:headed

# Run specific test file

npx playwright test tests/flows/login.spec.ts

# Run all tests in a folder

npx playwright test tests/flows/

# View test report

npm run report
\`\`\`

## 📁 Project Structure

\`\`\`
playwright-testing-framework/
├── pages/ # Page Object Models
│ ├── HomePage.ts
│ └── LoginPage.ts
├── tests/
│ └── flows/ # End-to-end test specs
├── helpers/ # Utility functions and test data
├── playwright.config.ts
└── README.md
\`\`\`

## 🧪 Test Coverage

- [x] User authentication (login)

## 🛠️ Tech Stack

- **Playwright** - Modern test automation framework
- **TypeScript** - Type-safe JavaScript
- **Node.js** - Runtime environment
- **dotenv** - Environment variable management

## 💡 Design Decisions

- **Playwright** was chosen for its strong TypeScript support and reliable
  end-to-end testing capabilities.
- **Page Object Model** is used to keep test logic readable and maintainable
  as the test suite grows.

## 📝 Contributing

This is an assignment project, but feedback is welcome via issues.

## 👤 Author

**Jordi Ruijs**

- GitHub: [@jordi-r](https://github.com/jordi-r)
- Assignment for: Cerios
