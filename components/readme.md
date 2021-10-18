[![Github release](https://img.shields.io/npm/v/@scania/components?color=1081C2)](https://www.npmjs.com/package/@scania/components)
[![Github release](https://img.shields.io/github/v/release/scania-digital-design-system/sdds?color=1081C2)](https://github.com/scania-digital-design-system/sdds/releases)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![](https://img.shields.io/github/license/scania-digital-design-system/sdds)
[![Getting Started](https://img.shields.io/badge/Available%20components-digitaldesign.scania.com-orange)](https://digitaldesign.scania.com/getting-started/development)

# Scania Digital Design System components

**Technical documentation**

Check out [Scania Digital Design System](https://digitaldesign.scania.com/) for implementation and technical documentation.

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

See all available components in the [Scania Digital Design System](https://digitaldesign.scania.com/components).

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
