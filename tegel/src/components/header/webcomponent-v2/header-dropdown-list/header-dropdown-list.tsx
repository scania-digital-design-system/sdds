import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sdds-header-dropdown-list',
  styleUrl: 'header-dropdown-list.scss',
  shadow: true,
})
export class HeaderDropdownList {
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
