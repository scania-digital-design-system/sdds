import { Component, h, Element, Prop, Host } from '@stencil/core';

@Component({
  tag: 'sdds-header-button',
  styleUrl: 'header-button.scss',
  shadow: true,
})
export class HeaderButton {
  @Prop() active: boolean = false;

  @Element() host: HTMLElement;

  parentEl: HTMLSddsHeaderLauncherElement | HTMLSddsHeaderDropdownElement;

  dropdownEl: any;

  sideMenuEl: HTMLSddsSideMenuElement;

  position: string;

  type:
    | 'header-child'
    | 'dropdown-child'
    | 'launcher-list-child'
    | 'launcher-grid-child'
    | 'mobile-menu-top-child'
    | 'mobile-menu-bottom-child';

  // Correct lifecycle state?
  connectedCallback() {
    console.log(this.host, this.host.parentElement.slot);

    // should be switch case ?
    if (this.host.parentElement.slot === 'mobile-menu-top') {
      // If mobile menu direct child
      this.type = 'mobile-menu-top-child';
    }
    if (this.host.parentElement.slot === 'mobile-menu-bottom') {
      // If mobile menu direct child
      this.type = 'mobile-menu-bottom-child';
    }

    if (
      this.host.parentElement.parentElement.tagName === 'SDDS-HEADER-DROPDOWN' &&
      this.host.parentElement.parentElement.parentElement.slot ===
        ('mobile-menu-top' || 'mobile-menu-bottom')
    ) {
      this.type = 'dropdown-child';
      if (this.active) {
        this.host.closest('sdds-header-dropdown').active = true;
      }
    }

    // If dropdown child
    if (this.host.parentElement.slot === 'dropdown-menu') {
      this.type = 'dropdown-child';
    }
    // If launcher child.
    if (this.host.parentElement.tagName === 'SDDS-HEADER-LAUNCHER') {
      this.type =
        this.host.closest('sdds-header-launcher').variant === 'grid'
          ? 'launcher-grid-child'
          : 'launcher-list-child';
    }
  }

  render() {
    return (
      <Host>
        <li class={`${this.type}`}>
          <button class={`${this.active ? 'active' : ''}`}>
            <slot></slot>
          </button>
        </li>
      </Host>
    );
  }
}
