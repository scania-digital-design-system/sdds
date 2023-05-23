# Vue demo

To run this project locally you will need to NodeJS and npm.

See the running example on [this link](https://scania.github.io/corporate-ui-vue/).

## Scania Digital Design System

Visit our Design System at [digitaldesign.scania.com](https://tegel.scania.com/) for more information

For more information about how to use SDDS, go to [digitaldesign.scania.com/getting-started/development](https://tegel.scania.com/getting-started/development)

## Getting started

Clone this repo, install all dependencies and start it:
```bash
git clone https://github.com/scania-digital-design-system/sdds.git
cd sandbox/vue
npm i
npm run start
```

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.


## Project setup

Install `components` and `scania-theme` as devDependencies package from NPM in your project folder demo/vue

   ```bash
   cd sandbox/vue
   npm i @scania/tegel-old --save-dev
   npm i @scania/theme-light --save-dev
   npm i @scania/icons --save-dev
   ```

## Use Scania theme

You can use available CSS variables or classes to style your application. See all tokens in [digitaldesign.scania.com](https://tegel.scania.com/).

1. Include the imports in the `main.js` file

```js
  import Vue from 'vue'
  import App from './App.vue'

  import { defineCustomElements, addTheme } from '@scania/components';
  import { theme as scania } from '@scania/theme-light';
```

2. In the `main.js` you also need to tell the application to ignore custom-element tags such as sdds-accordion by adding this line.

```js
  Vue.config.ignoredElements = [/sdds-\w*/];
```

3. Call `defineCustomElements()` and `addTheme(scania)`

```js
  defineCustomElements();
  addTheme(scania)
```

## Add theming

Add sdds-theme component in the top of the hierarchy in `App.vue`

```js
  <template>
    <div id="app">
      <sdds-theme />
      <Header />
      <Main />
    </div>
  </template>
```

### Feel free to reach out about improvements

### *Happy coding!*
