import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { InfoModule } from './info/info.module';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '404', component: NotfoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' }


];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes), 
    InfoModule 
  ],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }
