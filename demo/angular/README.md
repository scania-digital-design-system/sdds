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

1. Install `components` and `scania-theme` package from NPM in your project folder

   ```bash
   npm i @scania/components
   npm i @scania/theme-light
   ```
2. Include `CUSTOM_ELEMENTS_SCHEMA` in the modules
3. Import `defineCustomElements` and `add-theme` from `@scania/components`
4. Import `theme` from `@scania/theme-light` and use `sdds-theme` component in the template

   ```<sdds-theme name="scania" global="true"></sdds-theme>```

   Set `global` attribute to true, it will add CSS variables and SDDS tokens.

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

```js
import { Component, Injectable } from '@angular/core';

import { defineCustomElements, addTheme } from '@scania/components';
import { theme as scania } from '@scania/theme-light'; 

defineCustomElements();
addTheme(scania);

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: '#app-root',
  template: `
  <sdds-theme name="scania" global="true"></sdds-theme>
  <div className="sdds-container">
    <div className="sdds-row">
      <div className="sdds-col-xxlg-16 sdds-col-xlg-16 sdds-col-lg-16 sdds-col-md-8 sdds-col-sm-4">
        <div className="sdds-headline-05 sdds-text-blue-900">A headline</div>
        <p className="sdds-body-01 sdds-text-blue-700">Hello world</p>
      </div>
    </div>
  </div>
  `
})
export class AppComponent {
  title = 'angular-project';
}

```
