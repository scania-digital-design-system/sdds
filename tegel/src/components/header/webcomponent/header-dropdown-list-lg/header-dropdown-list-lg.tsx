import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sdds-header-dropdown-list-lg',
  shadow: true,
})
export class HeaderDropdownListLg {
  render() {
    return (
      <Host>
        <sdds-core-header-menu-lg>
          <slot></slot>
        </sdds-core-header-menu-lg>
      </Host>
    );
  }
}
