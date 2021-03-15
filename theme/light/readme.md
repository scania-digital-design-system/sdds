[![npm version](http://img.shields.io/npm/v/scania-theme.svg?style=flat&color=1081C2)](https://npmjs.org/package/@scania/theme-light)
[![Github release](https://img.shields.io/github/v/tag/scania/scania-theme.svg?label=release&color=1081C2)](https://github.com/scania-digital-design-system/sdds/releases)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/scania-digital-design-system/sdds/Node%20CI)

# Scania Theme

# @scania/theme-light

Scania theme is a package to style Scania looks and feel in the [Scania Digital Design System setup](https://github.com/scania-digital-design-system/sdds/).

## Installation

<details open>
 <summary><strong>NPM package</strong></summary>
<br/>
 
Install package by running the command below.
 
```shell
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

<details>
<summary><strong>CDN link</strong></summary>
<br/>
 
Add link to the script by adding the following to the head element. Make sure to include scania-theme script BEFORE the corporate-ui script.
 
```html
<script src="https://digitaldesign.scania.com/builds/@scania/theme-light/x/scania-theme.js"></script>
<script src="https://digitaldesign.scania.com/builds/@scania/components/x/core.js"></script>
```

Replace `x` with [available releases](https://www.npmjs.com/@scania/theme-light).

</details>

## Setup in project

Initialize the theme with the `sdds-theme` component. Set `global` attribute to true in order to enable bootstrap styling.

```html
<sdds-theme name="scania" global="true"></sdds-theme>
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
