# Angular demo

To run this project locally you will need to NodeJS and npm.

See the running example on [this link](https://scania.github.io/corporate-ui-angular/).

## Scania Digital Design System

Visit our Design System at [digitaldesign.scania.com](https://digitaldesign.scania.com/) for more information

For more information about how to use SDDS, go to [digitaldesign.scania.com/getting-started/development](https://digitaldesign.scania.com/getting-started/development)

## Getting started

Clone this repo, install all dependencies and start it:
```bash
git clone https://github.com/scania-digital-design-system/sdds.git
cd demo/angular
npm i
npm start
```

Open [http://localhost:4200](http://localhost:4200) to view it in the browser.


## Project setup

1. Install `components` and `scania-theme` as devDependencies package from NPM in your project folder

   ```bash
   npm i @scania/components --save-dev
   npm i @scania/theme-light --save-dev
   ```
2. Include `CUSTOM_ELEMENTS_SCHEMA` in the modules
3. Import `defineCustomElements` and `add-theme` from `@scania/components`
4. Import `theme` from `@scania/theme-light` and use `sdds-theme` component in the template

  ```<sdds-theme></sdds-theme>```

### Prerequisites

If you are using Angular 8+, you need to add `webcomponents` polyfill. Install the dependency:

`npm i @webcomponents/webcomponentsjs --save-dev`

Import the polyfill inside `src/polyfill.ts`

`import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js'`


## Including Custom Elements Schema

Include `CUSTOM_ELEMENTS_SCHEMA` in the module that will use SDDS components. This will tell Angular to allow web components and their attributes. Here is an example how to include `CUSTOM_ELEMENTS_SCHEMA` in `app.module.ts`

```js
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## Use Scania theme

You can use available CSS variables or classes to style your application. See all tokens in [digitaldesign.scania.com](https://digitaldesign.scania.com/).

Include the imports in the `main.ts` file

```js
import { defineCustomElements, addTheme } from '@scania/components';
import { theme as scania } from '@scania/theme-light';

defineCustomElements();
addTheme(scania)

```

## Add theme in HTML

Add a component in `app.component.html`

```html
<sdds-theme></sdds-theme>
  <sdds-dropdown
    placeholder="Select option">
    <sdds-dropdown-option value="option-1">Option 1</sdds-dropdown-option>
    <sdds-dropdown-option value="option-2">Option 2</sdds-dropdown-option>
    <sdds-dropdown-option value="option-3">Option 3</sdds-dropdown-option>
</sdds-dropdown>`

```

# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

### Feel free to reach out about improvements

### *Happy coding!*