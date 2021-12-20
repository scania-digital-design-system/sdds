import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isExpanded = false;
  title = 'angular';
  onExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit(): void {}
}
