# React demo

## Getting started

To run this project locally you will need to NodeJS and npm.

See the running example on [this link](https://scania.github.io/corporate-ui-react/).

Clone this repo, install all dependencies and start it:
```bash
git clone https://github.com/scania-digital-design-system/sdds.git
cd sandbox/react
npm i
npm start
```

## Scania Digital Design System

Visit our Design System at [Digitaldesign.scania.com](https://tegel.scania.com/) for more information

For more information about how to use SDDS, go to [digitaldesign.scania.com/getting-started/development](https://tegel.scania.com/getting-started/development)

## Project setup

To include components in React application, follow these steps:

1. Install `components` and `scania-theme` package from NPM in your project folder

```bash
npm i @scania/tegel-old --save-dev
npm i @scania/theme-light --save-dev
npm i @scania/icons --save-dev
```

2. In index.js, import `defineCustomElements` and `add-theme` from `@scania/components`

3. And then import `theme` from `@scania/theme-light` and use `sdds-theme` component in the template

```js
import React from 'react';

import { defineCustomElements, addTheme } from '@scania/components';
import { theme as scania } from '@scania/theme-light';

defineCustomElements();
addTheme(scania);
```

4.  Use `sdds-theme` component in the template App.js

```html
  <sdds-theme></sdds-theme>
```

```js
function App() {
  return (
    <div className="App">
      <sdds-theme></sdds-theme>
      <div className="sdds-container">
        <div className="sdds-row">
          <div className="sdds-col-xxlg-16 sdds-col-xlg-16 sdds-col-lg-16 sdds-col-md-8 sdds-col-sm-4">
            <div className="sdds-headline-05 sdds-text-blue-900">A headline</div>
            <p className="sdds-body-01 sdds-text-blue-700">Hello world</p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Feel free to reach out about improvements

### *Happy coding!*
