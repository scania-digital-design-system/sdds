![npm](https://img.shields.io/npm/v/@scania/theme-light)

# SDDS - Theme light

---

# Deprecation Notice

**This package has been deprecated and is no longer actively maintained.**

**Why is this package deprecated?**

This package has reached the end of its development lifecycle, and we have decided to discontinue active support and updates for it. We recommend that you consider alternative solutions for your project to ensure ongoing compatibility, security, and stability.

**Recommended Alternatives**

We suggest exploring the Tegel Design System, which is the successor of SDDS and is actively maintained:

- [@scania/tegel](https://www.npmjs.com/package/@scania/tegel): One package for the entire Tegel design system. Based on Web Components.
- [@scania/tegel-react](https://www.npmjs.com/package/@scania/tegel-react): Version of @scania/tegel that provides React component wrappers.
- [@scania/tegel-angular](https://www.npmjs.com/package/@scania/tegel-angular): Version of @scania/tegel that provides Angular component wrappers.

**What should you do now?**

1. **Migrate to an alternative package**: We strongly encourage you to transition to one of the recommended alternatives mentioned above by following their documentation and migration guides on npm or [official Tegel website](https://tegel.scania.com/development/getting-started-development/installation).

2. **Remove the deprecated package**: You can safely remove this package from your project once you have successfully migrated to an alternative solution.

**Thank You!**

We appreciate your support and use of this package. If you have any questions or need further assistance with the deprecation process or migration, feel free to reach out to us by [creating an issue](https://github.com/scania-digital-design-system/tegel/issues/new/choose) in our GitHub repository or contacting [Development support](https://teams.microsoft.com/l/channel/19%3a5e33f67fe502441f914fbcdc6e2548f5%40thread.skype/Development%2520support?groupId=79f9bfeb-73e2-424d-9477-b236191ece5e&tenantId=3bc062e4-ac9d-4c17-b4dd-3aad637ff1ac) channel in Teams.

Again, thank you for being a part of our community, and we hope the recommended alternatives serve your needs effectively.

*Last Updated: October 23rd 2023

---


Scania theme is a package to style Scania looks and feel in the [Tegel Design System setup](https://github.com/scania-digital-design-system/sdds/).

## Installation

<details open>
 <summary><strong>NPM package</strong></summary>
<br/>

Install package by running the command below.

```shell
npm i @scania/tegel-old -D
npm i @scania/theme-light -D
```

Import theme in the project and use it with addTheme function from corporate-ui.

```js
import { defineCustomElements, addTheme } from '@scania/components';
import { theme as scania } from '@scania/theme-light';

defineCustomElements();
addTheme(scania);
```

</details>

## Setup in project

Initialize the theme with the `sdds-theme` component. Set `global` attribute to true in order to enable bootstrap styling.

```html
<sdds-theme></sdds-theme>
```

## Setup local development

1. Clone sdds repository

```shell
git clone https://github.com/scania-digital-design-system/sdds.git
```

2. Download and install node.js: https://nodejs.org/en/
3. If you're behind a firewall, CONFIGURE THE PROXY
4. From the scania-theme folder, run `npm i` to install package dependencies
5. Start the local setup by running `npm start`
6. Scania theme scripts will be served on http://localhost:1338/scania-theme.js
7. Use demo inside the `demo` folder in sdds project.

## License

The Scania brand identity and the interaction patterns found in this repository are not available on an open source basis. Although we have great freedom to make improvements and new components, some changes to interaction patterns and use of colours etc may not be approved.
