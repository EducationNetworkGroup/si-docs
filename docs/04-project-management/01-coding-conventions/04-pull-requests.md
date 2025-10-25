---
sidebar_position: 4
descriptions: Conventions and best practices for pull requests.
---

# Pull Requests

## Step-by-Step GitHub Process
If you're new to code review on GitHub, follow these steps:

1. **Create a Feature Branch:** Never push directly to the `main` branch. Create a new branch for your work (See [Branching](../01-coding-conventions/02-branching.md) for how to name your branch).
2. **Make Your Changes & Commit:** Work on your task and commit your code to your branch.
3. **Push and Create a Pull Request (PR):** Push your branch to GitHub and go to the "Pull Requests" tab to create a new PR. Target the `main` branch.
4. **Fill out the PR Template:** We have a PR template. Describe what you did.
5. **Request Reviewers:** Assign one or more team members as reviewers. This is how you officially ask for a code review (See [Code Review](../01-coding-conventions/05-code-reviews.md) for steps to review codes).
6. **Address Feedback:** Reviewers will leave comments. Discuss, make any requested changes, and push new commits to your branch. The PR will update automatically.
7. **Merge:** Once approved, you (or a teamate) can merge the PR into `main`. Delete the feature branch after a successful merge (unless you intend to continue working on it).

## Pull Request Requirements
All pull request ithin the project must adhere to the following requirements:

- At least one team member should review submitted code.
- If applicable, a different team member should witness the code working live.
- Reviewers should:
  - Identify syntactical errors.
  - Ensure changes align with the task requirements.
  - Verify adherence to Section 8.1 Coding Guidelines.
- All reviewer's comments must be addressed before the pull request is completed.
- All merge conflicts must be resolved before the pull request is completed.

