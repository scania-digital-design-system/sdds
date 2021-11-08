import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { addTheme, defineCustomElements } from '@scania/components';
import { theme as scania } from '@scania/theme-light';

if (environment.production) {
  enableProdMode();
}

console.warn(
  'This is a demo application, please visit https://digitaldesign.scania.com for more information regarding SDDS implementation'
);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

defineCustomElements();
addTheme(scania);
