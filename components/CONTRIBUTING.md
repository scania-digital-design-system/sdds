# Contributing Guidelines

The repository is a place for all Front End Developers to join the UI Developement at Scania. It is us together that develop and maintain this repository as well as the documentation.

- Something broken in a existing component? **Help fixing it!**
- Found a component that needs to be extended? **Get on and improve it!**
- Missing out on a component? **Develop it!**


## Coding Standard

We're contributing, and are following, the coding standards available at https://github.com/scania/coding-conventions.

## Report an issue

- [Report bug](https://github.com/scania/corporate-ui/issues/new/choose)
- [Request feature](https://github.com/scania/corporate-ui/issues/new?assignees=&labels=Feature&template=feature_request.md&title=Feature+-+%22title+text%22)

<details>
   <summary><strong>Opening a pull request</strong></summary>

1. [Fork the repository](https://guides.github.com/activities/forking/) and clone it locally
   
   ```
   # Clone your fork of the repo 
   git clone https://github.com/<your-github-username>/corporate-ui.git
   ```
   
2. Sync your local to the original “upstream” repository by adding it as a remote. Pull in changes from “upstream” often so that you stay up to date so that when you submit your pull request, merge conflicts will be less likely. Read more [here](https://help.github.com/en/articles/syncing-a-fork). 

   ```
   # Navigate to the newly cloned repo
   cd corporate-ui
   
   # Connect to the original "upstream" repo
   git remote add upstream https://github.com/scania/corporate-ui.git
   ```
   
3. Create a branch for your edit. To pass travis build process, only create a branch name under one of these labels:
   - `improvement/` for improvement changes
   - `feature/` for a feature solution
   - `bug/` for bug fixes
   
   For example, if you want to create a bug fix, the branch name will be `bug/fix_for_something`.
   
   To create a branch, run the following command:
   
   `git checkout -b <branch-name>`

4. Refers to [any relevant issues](https://github.com/scania/corporate-ui/issues) in the pull request. For example, write `Fixes #xxx` in the commit message to refers to a specific issue.

5. Open a pull request and write clear title and description in the pull request interface. In the right side of the screen, assign yourself in the pull request and add the correct label. You can also add a reviewer from Corporate ui team.

</details>

<details>
   <summary><strong>Developing Components</strong></summary>
   
   ### Prerequisites

- Download and install node.js: https://nodejs.org/en/
  
  **NodeJS: use 8.15 or newer stable version of node**

- If you're behind a firewall, CONFIGURE THE PROXY

### Getting the code

- Clone the Corporate UI repo and install package dependencies: 
```shell
git clone https://github.com/scania/corporate-ui.git
cd corporate-ui
npm i
npm start
```

- Clone scania theme and install all dependencies:
```shell
git clone https://github.com/scania/scania-theme.git
cd scania-theme
npm i
npm start
```

### Running demo and sync with theme project

1. Clone and install all dependencies from the [demo page](https://github.com/scania/corporate-ui-site)
```shell
git clone https://github.com/scania/corporate-ui-site.git
cd corporate-ui-site
npm i
```
2. Create npm links of **Corporate Ui** and **Scania theme**
```shell
cd ../corporate-ui
npm link
cd ../scania-theme
npm link
```

3. Add links to **Corporate Ui** and **Scania theme** in corporate-ui-site
```shell
cd corporate-ui-site
npm link corporate-ui
npm link scania-theme
```

4. Start demo
```shell
npm start
```
Visit http://localhost:1337/corporate-ui-site/

### Running test

Testing the components is done using the Stencil testing setup that includes unit test and End-to-End test. To test locally run `npm test`
</details>

