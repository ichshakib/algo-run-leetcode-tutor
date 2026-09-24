# Contributing to Algorun

First off, thank you for considering contributing to Algorun! It's people like you that make Algorun such a great tool for the LeetCode community.

## 🚀 Development Workflow

### 1. Fork and Clone
- Fork the repository on GitHub.
- Clone your fork locally:
  ```bash
  git clone https://github.com/ichshakib/algo-run-leetcode-tutor.git
  cd algo-run-leetcode-tutor
  ```

### 2. Setup
- Ensure you have [Node.js](https://nodejs.org/) 20+ and [pnpm](https://pnpm.io/) installed.
- Install extension dependencies:
  ```bash
  cd chrome-extension
  pnpm install
  ```

### 3. Branching
- Create a new branch for your feature or bugfix:
  ```bash
  git checkout -b feature/your-feature-name
  ```

### 4. Development & Testing
- Start the development server with live reload:
  ```bash
  pnpm dev
  ```
- Before submitting a PR, ensure your changes pass code formatting and type checking:
  ```bash
  pnpm format:check  # Verify code style with Prettier
  pnpm format        # Format code with Prettier
  pnpm lint          # Run TypeScript check (tsc --noEmit)
  pnpm build         # Verify build and bundle output
  ```

### 5. Pull Request Process
1. **Update Documentation**: If you added or changed features, update the relevant README.
2. **Commit Messages**: Use clear, descriptive commit messages (e.g., `feat: add context awareness to chat`).
3. **PR Description**: Explain the why behind your changes. Include screenshots or GIFs for UI updates.
4. **Review**: Once submitted, a maintainer will review your code. Please be open to feedback!

## 🐛 Reporting Bugs
Use our [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md) and include:
- A clear description of the issue.
- Steps to reproduce.
- Your OS and Chrome browser version.

## 💡 Suggesting Features
Got a great idea? Use the [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md). We love hearing ideas on how to make Algorun better.

## 💬 Community
- Be respectful and constructive.
- Adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

Happy coding! 🚀
