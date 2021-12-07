import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

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
  selectedMenu = 'other/form';
  dropDownExpanded = false;
  dropDownActive = false;
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
    this.dropDownActive = true;
    this.dropDownExpanded = false;
    this.collapse = false;
  }

  onHoverMenu(eventTarget, itemName, dropdown): void {
    if (
      !document
        .querySelector('.sdds-sidebar')
        .classList.contains('sdds-sidebar-collapse')
    ) {
      return;
    } else {
      this.showPopover = !this.showPopover;
      const position = eventTarget.getBoundingClientRect();
      this.posX = (position.left + eventTarget.offsetWidth + 2).toString();
      this.posY = position.top.toString();
      this.hoveredItem = itemName;
      this.showDropdownPopover = !!dropdown;
    }
  }

  dropdownClick(event) {
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
      this.dropDownActive = false;
      this.dropDownExpanded = true;
    } else {
      this.collapse = false;
      const dropdownParent = document.querySelector('#other');
      dropdownParent?.classList.remove('active');
      if (!this.dropDownExpanded) {
        event
          ?.closest('.sdds-navbar-menu-item-dropdown')
          ?.classList.add('opened');
        this.dropDownActive = false;
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
            this.dropDownActive = true;
            this.dropDownExpanded = false;
          } else {
            this.dropDownActive = false;
            this.dropDownExpanded = false;
          }
        });
      }
    }
  }

  clickCollapse() {
    if (
      document
        .querySelector('.sdds-sidebar')
        ?.classList.contains('sdds-sidebar-collapse')
    ) {
      console.log(this.collapse);
    }
    this._eref.nativeElement
      .querySelector('.sdds-sidebar')
      .classList.toggle('sdds-sidebar-collapse');
    return false;
  }
}
