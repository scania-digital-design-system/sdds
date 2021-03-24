import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { addTheme, defineCustomElements } from '@scania/components';
import { theme as scania } from '@scania/theme-light';
import { environment } from './environments/environment';

defineCustomElements();

addTheme(scania);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
