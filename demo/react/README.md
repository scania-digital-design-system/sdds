# SDDS in a React application

To run this project locally you will need to NodeJS and npm.

See the running example on [this link](https://scania.github.io/corporate-ui-react/).

Clone this repo, install all dependencies and start it:
```bash
git clone https://github.com/scania-digital-design-system/sdds.git
cd demo/react
npm i
npm start
```

## Scania Digital Design System

Visit our Design System at [Digitaldesign.scania.com](https://digitaldesign.scania.com/) for more information

For more information about how to use SDDS, go to [digitaldesign.scania.com/getting-started/development](https://digitaldesign.scania.com/getting-started/development)

## Project setup

To include components in React application, follow these steps:

1. Install `components` and `scania-theme` package from NPM in your project folder

   ```bash
   npm i @scania/components
   npm i @scania/theme-light
   ```

2. Import `defineCustomElements` and `add-theme` from `@scania/components`

3. Import `theme` from `@scania/theme-light` and use `sdds-theme` component in the template

4.  Use `sdds-theme` component in the template

   ```html
      <sdds-theme name="scania" global="true"></sdds-theme>
   ```

Set `global` attribute to true, it will add CSS variables and SDDS tokens.


```js
import React from 'react';

import { defineCustomElements, addTheme } from '@scania/components';
import { theme as scania } from '@scania/theme-light'; 

defineCustomElements();
addTheme(scania);

const App = (
  <Router>
    <sdds-theme name="scania" global="true"></sdds-theme>
    <div className="sdds-container">
      <div className="sdds-row">
        <div className="sdds-col-xxlg-16 sdds-col-xlg-16 sdds-col-lg-16 sdds-col-md-8 sdds-col-sm-4">
          <div className="sdds-headline-05 sdds-text-blue-900">A headline</div>
          <p className="sdds-body-01 sdds-text-blue-700">Hello world</p>
        </div>
      </div>
    </div>
  </Router>
)

ReactDOM.render(App, document.body);

```

