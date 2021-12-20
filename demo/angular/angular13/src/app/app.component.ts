import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isExpanded = false;
  title = 'angular13';
  onExpand(): void {
    this.isExpanded = !this.isExpanded;
  }
}
