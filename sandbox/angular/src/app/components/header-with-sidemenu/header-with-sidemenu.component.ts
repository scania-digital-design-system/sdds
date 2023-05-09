import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-with-sidemenu',
  templateUrl: './header-with-sidemenu.component.html',
  styleUrls: ['./header-with-sidemenu.component.scss'],
})
export class HeaderWithSidemenuComponent {
  @Input() isExpanded: boolean;
  @Output() expand = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  setIsExpanded(isExpanded: boolean) {
    this.isExpanded = isExpanded;
  }
}
