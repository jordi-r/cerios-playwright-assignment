# Playwright Test Automation Framework

> Test automation framework for [Practice Software Testing](https://practicesoftwaretesting.com/)  
> built with Playwright and TypeScript.

## 🎯 Project Overview

This framework demonstrates a scalable test automation setup following industry best practices:

- **Page Object Model (POM)** design pattern for maintainability
- **TypeScript** for type safety and better IDE support
- **Environment-based configuration** for flexibility
- **Meaningful test coverage** of critical user flows

**Created as part of the Cerios application process.**

---

## 🧪 Testing Strategy

The test suite follows a **balanced and pragmatic approach**:

### Feature Coverage

- **User authentication** - registration and login flows
- **Product search** - existing and non-existent products
- **Shopping cart** - add/remove products
- **Form validation** - field-level validation (email, password, postal code)

### Architecture Principles

- **Separation of concerns**:
  - Navigation logic in Page Objects
  - Test data management in helpers
  - Assertions in test specifications
- **Test independence** - each test can run standalone
- **Data-driven testing** - dynamic test data generation to avoid conflicts

### CI/CD Considerations

- Some flows skip CI execution due to Cloudflare captcha on the test site
- Core functionality remains testable in CI/CD pipelines
- End-to-end smoke test validates critical user journey

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
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
```

---

## 🔐 Environment Setup

Copy `.env.example` to `.env` and configure your base URL:

```env
BASE_URL=https://practicesoftwaretesting.com
```

**Note**: `.env` is excluded from version control to protect sensitive data.

---

## ▶️ Running Tests

```bash
# Run all tests
npm test

# Run tests in UI mode (interactive debugging)
npm run test:ui

# Run tests in headed mode (visible browser)
npm run test:headed

# Run tests in debug mode (step-by-step)
npm run test:debug

# Run specific test file
npx playwright test tests/flows/product-search.spec.ts

# Run all tests in flows folder
npx playwright test tests/flows/

# View HTML test report
npm run report
```

---

## 📁 Project Structure

```
cerios-playwright-assignment/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── helpers/
│   ├── account-setup.ts
│   └── test-user.ts
├── pages/
│   ├── BasePage.ts
│   ├── CartPage.ts
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── ProductPage.ts
│   └── RegistrationPage.ts
├── tests/
│   ├── e2e/
│   │   └── shop-flow.spec.ts
│   └── flows/
│       ├── cart.spec.ts
│       ├── login.spec.ts
│       ├── product-search.spec.ts
│       └── registration.spec.ts
├── .env.example
├── .gitignore
├── package.json
├── playwright.config.ts
└── README.md
```

---

## 🧪 Test Coverage

| Feature                           | Status |
| --------------------------------- | ------ |
| Product search (valid & invalid)  | ✅     |
| User registration with validation | ✅     |
| User login flow                   | ✅     |
| Add product to cart               | ✅     |
| Remove product from cart          | ✅     |
| End-to-end shop flow              | ✅     |

---

## 🛠️ Tech Stack

- **[Playwright](https://playwright.dev/)** - Modern test automation framework with excellent TypeScript support
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript for better developer experience
- **[Node.js](https://nodejs.org/)** - JavaScript runtime environment
- **[dotenv](https://github.com/motdotla/dotenv)** - Environment variable management

---

## 💡 Design Decisions

### Why Playwright?

- Excellent TypeScript support out of the box
- Auto-waiting mechanism reduces flaky tests
- Powerful debugging tools (trace viewer, UI mode)
- Fast parallel test execution

### Why Page Object Model?

- Keeps test logic readable and maintainable
- Reusable page components reduce code duplication
- Clear separation between test logic and page structure
- Easy to scale as the test suite grows

### Why Dynamic Test Data?

- Avoids conflicts when tests run in parallel
- Prevents issues with data cleanup on the test environment
- Each test creates fresh data for true isolation

---

## 📝 Notes

This project was created as a technical assignment to demonstrate test automation skills. The test site (Practice Software Testing) occasionally implements Cloudflare protection, which may affect some test flows. The framework is designed to handle such scenarios gracefully.

---

## 👤 Author

**Jordi Ruijs**  
GitHub: [@jordi-r](https://github.com/jordi-r)

_Assignment for: Cerios_

---
