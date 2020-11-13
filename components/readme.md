[![Build Status](https://travis-ci.com/scania/corporate-ui.svg?branch=master)](https://travis-ci.com/scania/corporate-ui)
[![npm version](http://img.shields.io/npm/v/corporate-ui.svg?style=flat&color=1081C2)](https://npmjs.org/package/corporate-ui)
[![Github release](https://img.shields.io/github/v/tag/scania/corporate-ui.svg?label=release&color=1081C2)](https://github.com/scania/corporate-ui/releases)
[![Join Slack](https://img.shields.io/badge/slack-join-%23dd3072.svg)](https://join.slack.com/t/corporate-ui/shared_invite/enQtNTI4NzMzOTQ3NTg4LTI1OGNhZGE2OTY0NzUwYzExMTJmMTQ2NjcxOTdkMjc0NDhlM2JlYTEyODY2ODJjYzUxNmYxNzhhMTQ5MDhmOWQ)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![](https://img.shields.io/github/license/scania/corporate-ui.svg?style=flat)
[![Available components](https://img.shields.io/badge/Available%20components-digitaldesign.scania.com-orange)](https://digitaldesign.scania.com/components)

# Corporate UI

**Demo page**

[Simple HTML ↗](https://codepen.io/corporate-ui/pen/OYmqpr) | [Angular ↗](https://github.com/scania/corporate-ui-angular) | [React ↗](https://github.com/scania/corporate-ui-react) | [Vue ↗](https://github.com/scania/corporate-ui-vue)


**Technical documentation**

Check out [Scania Digital Design System](https://digitaldesign.scania.com/) for **migration guidelines**, **component status**, and technical documentation.


## Quick start

Several options to add corporate-ui in the project: 
<details open>
<summary><strong>NPM</strong></summary>
   <br/>

   Install corporate-ui via NPM package by running the command below.

   ```
   npm i corporate-ui
   ```

   Import component as a module with `defineCustomElements` function.

   ```js
   import { defineCustomElements } from 'corporate-ui';

   defineCustomElements();
   ```
</details>

<details>
<summary><strong>CDN</strong></summary>
   <br/>

   Add link to the script by adding the following to the head

   ```
   <script src="https://static.scania.com/build/global/4.x/corporate-ui.js"></script>
   ```
   Replace `x` with [available releases](https://github.com/scania/corporate-ui/releases).
</details>

See all available components in the [Scania Digital Design System](https://digitaldesign.scania.com/components).


## Styling

To apply Scania styles, you need to add a theme package and use `c-theme` component. Check out [Scania theme repository](https://github.com/scania/scania-theme/) for detail documentation.


## Browser support

- Chrome (and all Chromium based browsers)
- Firefox
- IE 11+
- Edge
- Safari


## Contributing

Please read through our [contributing guidelines](https://github.com/scania/corporate-ui/blob/master/CONTRIBUTING.md) for the directions to **develop components**, **create a pull request** and **coding standard**.

- [Report bug](https://github.com/scania/corporate-ui/issues/new/choose)
- [Request feature](https://github.com/scania/corporate-ui/issues/new?assignees=&labels=Feature&template=feature_request.md&title=Feature+-+%22title+text%22)


## Community

Get in touch with the team and the community:
- [Join us on slack](https://join.slack.com/t/corporate-ui/shared_invite/enQtNTI4NzMzOTQ3NTg4LTI1OGNhZGE2OTY0NzUwYzExMTJmMTQ2NjcxOTdkMjc0NDhlM2JlYTEyODY2ODJjYzUxNmYxNzhhMTQ5MDhmOWQ)
- [Teams](https://teams.microsoft.com/l/team/19%3a1257007a64d44c64954acca27a9d4b46%40thread.skype/conversations?groupId=79f9bfeb-73e2-424d-9477-b236191ece5e&tenantId=3bc062e4-ac9d-4c17-b4dd-3aad637ff1ac)


## License

All CSS, HTML and JS code are available under the MIT license. The Scania brand identity, logos and photographs found in this repository are copyrighted Scania CV AB and are not available on an open source basis or to be used as examples or in any other way, if not specifically ordered by Scania CV AB.
