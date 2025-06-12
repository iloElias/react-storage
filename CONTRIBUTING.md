# Contributing Guide

Thank you for your interest in contributing to this project! This guide outlines the standards and processes we follow to maintain a clean, organized, and collaborative codebase.

---

## 🚀 Branch Naming Convention

Use the following pattern to name your branches:

```xml
<type>/<short-description>
```

### Branch Types

| Type       | Purpose                                  | Example                     |
| ---------- | ---------------------------------------- | --------------------------- |
| `feature`  | New features or enhancements             | `feature/login-page`        |
| `fix`      | Bug fixes                                | `fix/button-alignment`      |
| `chore`    | Maintenance and tooling updates          | `chore/update-dependencies` |
| `refactor` | Code refactoring without behavior change | `refactor/auth-module`      |
| `test`     | Add or improve tests                     | `test/api-endpoints`        |
| `hotfix`   | Critical, urgent fixes                   | `hotfix/payment-error`      |

---

## ✏️ Commit Message Format

Commit messages should be meaningful and follow this structure:

```xml
<type>(scope): short description
```

### Common Types

| Type       | Description                             |
| ---------- | --------------------------------------- |
| `feat`     | New feature                             |
| `fix`      | Bug fix                                 |
| `chore`    | Maintenance tasks                       |
| `docs`     | Documentation changes                   |
| `style`    | Code style changes (formatting, etc.)   |
| `refactor` | Code restructuring without new features |
| `test`     | Adding or fixing tests                  |
| `perf`     | Performance improvements                |
| `ci`       | CI/CD pipeline changes                  |

### Examples

- `feat(auth): add login functionality`
- `fix(ui): correct button alignment`
- `docs(readme): update contribution section`
- `refactor(api): simplify request handler`

---

## 🔁 Contribution Workflow

1. **Create a Branch**

   Always create a new branch from the `main` branch:

   ```bash
   git checkout -b feature/login-page
   ```

2. **Make Commits**

   Commit frequently and clearly, following the guidelines above:

   ```bash
   git commit -m "feat(auth): add authentication flow"
   ```

3. **Sync Regularly**

   Keep your branch up to date with the base branch to avoid conflicts:

   ```bash
   git pull origin main
   ```

4. **Push and Open a Pull Request**

   ```bash
   git push origin feature/login-page
   ```

   Then, open a Pull Request with a clear and concise description of the changes made and the reasons behind them.

---

## ✅ Best Practices

- **Keep it Focused**: Break large changes into small, manageable pull requests.
- **Explain Why**: Your PR description should explain the reasoning behind your changes.
- **Respect the Style Guide**: Follow the project's coding conventions.
- **Write Tests**: If applicable, include or update tests to cover your changes.

---

By adhering to these guidelines, you help keep the project healthy, maintainable, and welcoming to all contributors. We appreciate your contributions! 🙌
