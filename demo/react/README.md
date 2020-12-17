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
   npm i @scania-sdds/components
   npm i @scania-sdds/theme-light
   ```

2. Import `defineCustomElements` and `add-theme` from `@scania-sdds/components`

3. Import `theme` from `@scania-sdds/theme-light` and use `c-theme` component in the template

4.  Use `c-theme` component in the template

   ```html
      <c-theme name="scania" global="true"></c-theme>
   ```

Set `global` attribute to true, it will add CSS variables and SDDS tokens.


```js
import React from 'react';

import { defineCustomElements, addTheme } from '@scania-sdds/components';
import { theme as scania } from '@scania-sdds/theme-light'; 

defineCustomElements();
addTheme(scania);

const App = (
  <Router>
    <c-theme name="scania" global="true"></c-theme>
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

