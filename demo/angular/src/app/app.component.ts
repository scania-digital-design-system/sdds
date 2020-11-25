import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: '#app-root',
  styleUrls : ['app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Corporate UI Angular';
}
