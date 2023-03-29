import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sdds-header-launcher-list',
  shadow: true,
})
export class HeaderLauncherList {
  render() {
    return (
      <Host role="list">
        <sdds-header-dropdown-list type="lg">
          <slot></slot>
        </sdds-header-dropdown-list>
      </Host>
    );
  }
}
