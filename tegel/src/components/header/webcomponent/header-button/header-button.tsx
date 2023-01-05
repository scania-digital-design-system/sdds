import { Component, h, Element, Prop, Host } from '@stencil/core';

@Component({
  tag: 'sdds-header-button',
  styleUrl: 'header-button.scss',
  shadow: true,
})
export class HeaderButton {
  @Prop() active: boolean = false;

  @Prop() divider: string;

  @Element() host: HTMLElement;

  dropdownEl: any;

  sideMenuEl: HTMLSddsSideMenuElement;

  position: string;

  type: 'dropdown-child' | 'launcher-child' | 'mobile-menu-top-child' | 'mobile-menu-bottom-child';

  connectedCallback() {
    if (this.host.parentElement.tagName === 'SDDS-HEADER-DROPDOWN') {
      this.type = 'dropdown-child';
      if (this.host.parentElement.parentElement.slot === 'mobile-menu-top') {
        this.type = 'mobile-menu-top-child';
        if (this.active) {
          this.host.closest('sdds-header-dropdown').active = true;
        }
      }
    } else if (this.host.parentElement.tagName === 'SDDS-HEADER-LAUNCHER') {
      this.type = 'launcher-child';
    } else if (this.host.parentElement.slot === 'mobile-menu-top') {
      this.type = 'mobile-menu-top-child';
    } else if (this.host.parentElement.slot === 'mobile-menu-bottom') {
      this.type = 'mobile-menu-bottom-child';
    }
  }

  render() {
    return (
      <Host>
        {this.divider && this.type === 'launcher-child' && (
          <div class="divider">{this.divider}</div>
        )}
        <li class={`${this.type}`}>
          <button class={`${this.active ? 'active' : ''}`}>
            <slot></slot>
          </button>
        </li>
      </Host>
    );
  }
}
