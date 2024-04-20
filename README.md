## Contributing Guidlines

## Main Branches

- `master`: Contains production-ready code. Code in this branch is deployed to the live website.
- `develop`: Represents ongoing development. It's where feature branches are merged for testing before deployment.

## Feature Branches

Feature branches should be prefixed with `feature/` followed by a brief, descriptive name of the feature being developed. For example:
- `feature/new-homepage`: Branch for developing a new homepage feature.
- `feature/contact-form`: Branch for adding a contact form feature.

## Release Branches

Release branches should be named following the format `release-X.Y`, where `X.Y` represents the version number being prepared for release. For example:
- `release-1.0`: Branch created from `develop` when preparing for the 1.0 release.
- `release-2.0`: Branch for the 2.0 release.

## Hotfix Branches

Hotfix branches should be prefixed with `hotfix/` followed by a brief description of the issue being addressed. For example:
- `hotfix/security-fix`: Branch created from `master` to fix a critical security vulnerability in the live website.
- `hotfix/404-error`: Branch for addressing a broken link issue discovered in production.

## Collaboration and Review Branches

- `review/code-review`: Branch where code changes are submitted for peer review before merging into `develop`.
- `collaboration/design-update`: Branch for collaborative work on a design update feature.

## Branch Naming Rules

1. Use lowercase letters for branch names.
2. Separate words with hyphens `-`.
3. Be descriptive but concise in naming branches.
4. Avoid using special characters or spaces in branch names.

## Workflow

1. Create feature branches from `develop`.
2. Merge feature branches back into `develop` after completing the development and testing phase.
3. Create release branches from `develop` when preparing for a new version release.
4. Merge release branches into `master` and `develop` after thorough testing and approval.
5. Create hotfix branches from `master` to address critical issues in the live website.
6. Merge hotfix branches into `master` and `develop` after fixing the issue.
7. Use review branches for code reviews and collaboration efforts.
8. Maintain separate branches for different environments to ensure code stability and traceability.

## Additional Guidelines

- Document branch purposes and guidelines for team members' reference.
- Communicate branch naming conventions and workflow to all team members.
- Regularly clean up old or unused branches to keep the repository organized.

  Sure, here's a Markdown document outlining commit message guidelines:

```markdown
# Commit Message Guidelines

## 1. Summary

- Keep the summary concise and descriptive.
- Begin with a capital letter and use the imperative mood (e.g., "Add," "Fix," "Update").
- Limit the summary to 50 characters or less.

## 2. Body

- Provide a detailed explanation of the changes.
- Use bullet points for listing specific modifications.
- Describe the rationale behind the changes and any relevant context.
- Use present tense to describe what the commit does, not what it did.
- Keep lines wrapped at 72 characters.

## 3. Footer

- Include a footer section if referencing issues or tasks.
- Use issue or task numbers prefixed with keywords like "Fix," "Close," or "Resolves."
- Separate the footer from the body with a blank line.

## Example Commit Message

```
Add login form component

This commit introduces a new login form component to improve user authentication.

- Created LoginForm component
- Added form fields for username and password
- Implemented form validation for user input

Closes #34
```

## Benefits

- Provides clarity and context for each commit.
- Facilitates understanding and collaboration among team members.
- Enhances traceability and accountability.

## Additional Tips

- Use consistent formatting and language across commits.
- Review and proofread commit messages before committing.
- Commit frequently and logically, focusing on one task per commit.
```

Adhering to these guidelines helps maintain a clear and informative commit history, making it easier to track changes and collaborate effectively within a project.
  
## Happy Coding.
