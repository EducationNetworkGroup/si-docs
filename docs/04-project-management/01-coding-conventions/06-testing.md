---
sidebar_position: 6
description: Standards for writing and maintaining tests.
---

# Testing Conventions

## Test Naming
Use descriptive names that indicate what is being tested and the expected outcome:

``` python
# Good
test_user_login_success
test_user_login_invalid_password
test_calculate_total_with_discount

# Avoid
test1
test_login
test_calculation
```
# Best Practices
### Test Isolation
- Tests should not depend on each other
- Each test should set up its own data
- Use teardown methods to clean up after tests

### Deterministic Tests
- Tests should produce the same result every time
- Avoid random data in tests
- Mock external dependencies (API, databases)

### Performance
- Keep tests focused and efficent
- Avoid unnecessary setup and complex scenarios in unit tests
- Use appropriate test types 

### Readability
- Clear Setup and assertions
- Use descriptive variable names in tests
- Group related tests in classes or modules
