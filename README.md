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
  
## Happy Coding.
