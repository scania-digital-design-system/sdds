import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-dropdown-list',
  styleUrl: 'side-menu-dropdown-list.scss',
  shadow: true,
})
export class SideMenuDropdownList {
  render() {
    return (
      <Host>
        <div role="list">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
