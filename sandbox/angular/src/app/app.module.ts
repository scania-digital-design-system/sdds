import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { FormComponent } from './components/form/form.component';
import { CustomInput } from './components/form/input/input-component';
import { HomeComponent } from './components/home/home.component';
import { CustomDropdown } from './components/form/dropdown/dropdown.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { IconButtonComponent } from './components/side-menu/icon-button/icon-button.component';
import { HeaderWithSidemenuComponent } from './components/header-with-sidemenu/header-with-sidemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainComponent,
    FormComponent,
    CustomInput,
    CustomDropdown,
    SideMenuComponent,
    IconButtonComponent,
    HeaderWithSidemenuComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
