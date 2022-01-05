![npm](https://img.shields.io/npm/v/@scania/theme-light)

# @scania/theme-light

Scania theme is a package to style Scania looks and feel in the [Scania Digital Design System setup](https://github.com/scania-digital-design-system/sdds/).

## Installation

<details open>
 <summary><strong>NPM package</strong></summary>
<br/>

Install package by running the command below.

```shell
npm i @scania/components -D
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
