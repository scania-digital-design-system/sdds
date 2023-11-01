[![Github release](https://img.shields.io/npm/v/@scania/components?color=1081C2)](https://www.npmjs.com/package/@scania/components)
[![Github release](https://img.shields.io/github/v/release/scania-digital-design-system/sdds?color=1081C2)](https://github.com/scania-digital-design-system/sdds/releases)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![](https://img.shields.io/github/license/scania-digital-design-system/sdds)
[![Getting Started](https://img.shields.io/badge/Available%20components-tegel.scania.com-orange)](https://tegel.scania.com/development/getting-started-development)

# SDDS - Components

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

1. **Migrate to an alternative package**: We strongly encourage you to transition to one of the recommended alternatives mentioned above by following their documentation and migration guides on npm, [SDDS -> TDS migration guide](https://tegel.scania.com/development/migration) and [Tegel installation](https://tegel.scania.com/development/getting-started-development/installation) on the official Tegel website.

2. **Remove the deprecated package**: You can safely remove this package from your project once you have successfully migrated to an alternative solution.

**Thank You!**

We appreciate your support and use of this package. If you have any questions or need further assistance with the deprecation process or migration, feel free to reach out to us by [creating an issue](https://github.com/scania-digital-design-system/tegel/issues/new/choose) in our GitHub repository or contacting [Development support](https://teams.microsoft.com/l/channel/19%3a5e33f67fe502441f914fbcdc6e2548f5%40thread.skype/Development%2520support?groupId=79f9bfeb-73e2-424d-9477-b236191ece5e&tenantId=3bc062e4-ac9d-4c17-b4dd-3aad637ff1ac) channel in Teams.

Again, thank you for being a part of our community, and we hope the recommended alternatives serve your needs effectively.

*Last Updated: October 23rd 2023

---

**Technical documentation**

Check out our official [Tegel Design System](https://tegel.scania.com/) page for implementation and technical documentation.

## Quick start

How to add components in the project:

Install components via NPM package by running the command below.

```
npm i @scania/components
```

Import component as a module with `defineCustomElements` function.

```js
import { defineCustomElements } from '@scania/components';

defineCustomElements();
```

See all available components in the [Tegel Design System](https://tegel.scania.com/components/overview).

## Styling

To apply Scania styles, you need to add a theme package and use `sdds-theme` component. Check out [Scania theme documentation](https://github.com/scania-digital-design-system/sdds/tree/master/theme) for detail documentation.

## Browser support

- Chrome
- Firefox
- Safari
- Edge (chromium)

**The components are not supported in IE11 & Edge Legacy**

## Contributing

Please read through our [contributing guidelines](https://github.com/scania-digital-design-system/sdds/blob/master/CONTRIBUTING.md) for the directions to **develop components**, **create a pull request** and **coding standard**.

- [Report bug](https://github.com/scania-digital-design-system/sdds/issues)
- [Request feature](https://github.com/scania-digital-design-system/sdds/issues/new)

## Community

Get in touch with the team and the community:

- [Teams](https://teams.microsoft.com/l/team/19%3a1257007a64d44c64954acca27a9d4b46%40thread.skype/conversations?groupId=79f9bfeb-73e2-424d-9477-b236191ece5e&tenantId=3bc062e4-ac9d-4c17-b4dd-3aad637ff1ac)

## License

All CSS, HTML and JS code are available under the MIT license. The Scania brand identity, logos and photographs found in this repository are copyrighted Scania CV AB and are not available on an open source basis or to be used as examples or in any other way, if not specifically ordered by Scania CV AB.
