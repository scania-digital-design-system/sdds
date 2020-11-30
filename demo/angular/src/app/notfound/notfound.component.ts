import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-404',
  template: `
    <h1>Not Found</h1>
    <p>The link you tried to reach does not exist.</p>
  `
})

export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
