
# feedback_gen
A platform that allows users create feedback forms to be embedded on their platforms

##Documentation
[Here's a link to the project's documentation](https://docs.google.com/document/d/16v9-9yiHbDgjZexHZVtjPUX1Mb5z1VwXgYCpEWUaYdY/edit)



## User Activity/Features
- **User: Unauthenticated**
--Visit the platform to view basic information about the platform
--View and Interact with the documentation
--Register to view more details
--No access to use until registered

- **User: Authenticated**
--Full access to the platform
--Users can create new feedback forms
--Users can embed the feedback form in different formats (link and shortcode should be the minimum)
--Users see usage example
--Users can interact with the documentation
--Users can select from feedback form template
--Allow user save data and come back to download


## Structure

| Codebase              |      Description          |
| :-------------------- | :-----------------------: |
| [Frontend](frontend)        |  React  |
| [Backend](backend)  |     NodeJS and Mongodb       |


## Branches

- **dev** -> Make Pull Request on this branch for everything both (`frontend` & `backend`) 
- **main** -> **dont touch** this branch, this is what is running in production.

## Contributions

feedback_gen is open to contributions, but we recommend creating an issue or replying in a comment to let us know what you are working on first that way we don't overwrite each other.

Please read [CONTRIBUTING.md](https://github.com/zuri-training/Team-Sardinew2/blob/main/CONTRIBUTING.md) for details on this project.

### *Commit CheatSheet*


| Type     |                          | Description                                                                                                 |
|----------|--------------------------|-------------------------------------------------------------------------------------------------------------|
|   feat   | Features                 | A new feature                                                                                               |
|    fix   | Bug Fixes                | A bug fix                                                                                                   |
|   docs   | Documentation            | Documentation only changes                                                                                  |
|   style  | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| refactor | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |
|   perf   | Performance Improvements | A code change that improves performance                                                                     |
|   test   | Tests                    | Adding missing tests or correcting existing tests                                                           |
|   build  | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
|    ci    | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
|   chore  | Chores                   | Other changes that don't modify backend, frontend or test files                                                           |
|  revert  | Reverts                  | Reverts a previous commit                                                                                   |


> *Sample Commit Messages*
- `chore: Updated README file` := `chore` is used because the commit didn't make any changes to the backend, frontend or test folders in any way.
- `feat: Added plugin info endpoints` := `feat` is used here because the feature was non-existent before the commit.


## How to run locally

Check <a href="https://github.com/zuri-training/Team-Sardinew2/blob/main/CONTRIBUTING.md#">here</a> on how to run locally</a>
