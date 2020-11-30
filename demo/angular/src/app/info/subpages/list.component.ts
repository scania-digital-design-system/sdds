import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
  <h4>List</h4>
  <ul class="list-group">
    <li class="list-group-item">First</li>
    <li class="list-group-item">Second</li>
    <li class="list-group-item">Third</li>
  </ul>
  `
})
export class ListComponent implements OnInit {
  ngOnInit() { }
}
