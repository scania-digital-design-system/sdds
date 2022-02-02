import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  items = [
    {
      title: 'Home',
      link: '/home',
    },
    {
      title: 'Form',
      link: '/form',
    },
  ];
  selectedMenu = '';
  dropDownExpanded = false;
  collapse = false;
  showPopover = false;
  showDropdownPopover = false;
  posX = '';
  posY = '';
  @Input() isExpanded: boolean;
  hoveredItem = '';

  constructor(private _eref: ElementRef) {}

  ngOnInit(): void {}

  changeMenu(value: MouseEvent): void {
    const menu = (value.target as HTMLInputElement)
      .querySelector('a')
      ?.innerHTML.toLowerCase()
      ? (value.target as HTMLInputElement)
          .querySelector('a')
          ?.innerHTML.toLowerCase()
      : (value.target as HTMLInputElement).innerHTML.toLowerCase();
    this.selectedMenu = 'other/' + menu;
    (value.target as HTMLInputElement)
      ?.closest('.sdds-navbar-menu-item-dropdown')
      ?.classList.remove('opened');
    this.dropDownExpanded = false;
  }

  onHoverMenu(eventTarget, itemName): void {
    if (
      !document
        .querySelector('.sdds-sidebar')
        .classList.contains('sdds-sidebar-collapse')
    ) {
      return;
    } else {
      this.showPopover = true;
      const position = eventTarget.getBoundingClientRect();
      this.posX = (position.left + eventTarget.offsetWidth + 2).toString();
      this.posY = position.top.toString();
      this.hoveredItem = itemName;
    }
  }

  onHoverDropdownMenu(eventTarget, itemName): void {
    if (
      !document
        .querySelector('.sdds-sidebar')
        .classList.contains('sdds-sidebar-collapse')
    ) {
      return;
    } else {
      const position = eventTarget.getBoundingClientRect();
      this.posX = (position.left + eventTarget.offsetWidth + 2).toString();
      this.posY = position.top.toString();
      this.hoveredItem = itemName;
      this.showDropdownPopover = true;
    }
  }

  dropdownClick(event): void {
    if (!this.collapse) {
      if (
        document
          .querySelector('.sdds-sidebar')
          ?.classList.contains('sdds-sidebar-collapse')
      ) {
        this.collapse = true;
        this._eref.nativeElement
          .querySelector('.sdds-sidebar')
          .classList.toggle('sdds-sidebar-collapse');
        event
          ?.closest('.sdds-navbar-menu-item-dropdown')
          ?.classList.add('opened');
        this.dropDownExpanded = true;
      } else {
        this.collapse = false;
        const dropdownParent = document.querySelector('#other');
        dropdownParent?.classList.remove('active');
        if (!this.dropDownExpanded) {
          event
            ?.closest('.sdds-navbar-menu-item-dropdown')
            ?.classList.add('opened');
          this.dropDownExpanded = true;
        } else {
          event
            ?.closest('.sdds-navbar-menu-item-dropdown')
            ?.classList.remove('opened');
          const classExpanded = document.querySelectorAll(
            '.sdds-navbar-menu__dropdown-item'
          );
          classExpanded.forEach((element) => {
            if (element.classList.contains('active')) {
              this.dropDownExpanded = false;
            } else {
              this.dropDownExpanded = false;
            }
          });
        }
      }
    }
  }

  clickCollapse(): boolean {
    this.collapse = !this.collapse;
    this.dropDownExpanded = false;
    this._eref.nativeElement
      .querySelector('.sdds-navbar-menu-item-dropdown')
      .classList.remove('opened');
    this._eref.nativeElement
      .querySelector('.sdds-sidebar')
      .classList.toggle('sdds-sidebar-collapse');
    this._eref.nativeElement
      .querySelector('.sdds-collapse-button')
      .classList.toggle('collapse-button-collapse');
    this._eref.nativeElement
      .querySelector('.sdds-collapse-button--icon')
      .classList.toggle('sdds-collapse-button--icon--collapsed');
    return false;
  }
}
