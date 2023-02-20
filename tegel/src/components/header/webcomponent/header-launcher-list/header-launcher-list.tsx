import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sdds-header-launcher-list',
  shadow: true,
})
export class HeaderLauncherList {
  render() {
    return (
      <Host>
        <sdds-core-header-menu-global>
          <slot></slot>
        </sdds-core-header-menu-global>
      </Host>
    );
  }
}
