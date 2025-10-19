---
sidebar_position: 7
description: Consistent naming across the codebase.
---

# Naming Conventions

## General Principles
- **Clarity over brevity:** Choose descriptive names
- **Consistency:** Use the same patterns throughout
- **Avoid abbreviations:** Unless they are widely understood

## Naming Patterns
### Variables & Functions
- **camelCase** for variables and functions: `calculateTotalPrice`, `getUserById`
- **PascalCase** for classes and components: `UserProfile`, `DatabaseConnection`
- **UPPER_SNAKE_CASE** for constants: `MAX_RETRY_ATTEMPTS`, `API_BASE_URL`

### File Names
- **React Components:** PascalCase: `UserDashboard.jsx`, `LoginForm.tsx`
- **Other Files:** kebab-case: `auth-utils.js`, `data-helpers.ts`
- **Test Files:** Same as source + `.test.`: `user-service.test.js`, `login-form.test.tsx`

### Database & API
- **Database Tables:** snake_case: `user_profiles`, `order_items`
- **API Endpoints:** kebab-case: `/user-profiles`, `/order-items`

## Examples
```javascript
// Good
const maxRetryAttempts = 3;
function calculateOrderTotal() { ... }
class UserAuthentication { ... }

// Avoid
const mra = 3;
function calc() { ... }
class usrauth { ... }