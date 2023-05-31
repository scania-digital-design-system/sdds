import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { addTheme, defineCustomElements } from '@scania/components';
import { theme as scania } from '@scania/theme-light';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

console.warn(
  'This is a sandbox application, please visit https://tegel.scania.com for more information regarding SDDS implementation'
);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

defineCustomElements();
addTheme(scania);
